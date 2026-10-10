// One crowd simulation: social-force pedestrians on navigation fields,
// gates, events, and live measurement (density, flow, counter-flow, pressure).

import {
  W, H, N, WALL, WATER, BATH, GATES, ZONES, DESTS, NO_ZONE, NUM_DESTS,
  D_TEMPLE, D_STATION, D_BUS, D_CAMP, D_HOLD, D_SHELTER, D_ESCAPE, ZONE_INDEX,
  GHATS, STEP_END, type GateMode,
} from './world.ts';
import { computeField, distanceTransform, nearestFree, type Field } from './fields.ts';
import { blur5, FW, FH, FCELL, type Shared } from './shared.ts';
import { CORDON } from './scenarios.ts';

export type Policy = 'fixed' | 'ai';

export const MAX_AGENTS = 14000;
const PS = 6; // plan stride

export const ST_WALK = 0;
export const ST_APPROACH = 1;
export const ST_DWELL = 2;
export const ST_HELD = 3;

export const ORIGIN_TRAIN = 0;
export const ORIGIN_BUS = 1;
export const ORIGIN_CAMP = 2;

export const DANGER = 4.0;    // p/m2 — crush becomes possible
export const CRITICAL = 5.0;  // p/m2 — life-threatening
export const WARN = 3.0;

export interface SpawnSpec {
  origin: number;
  x: number; z: number;
  plan: number[];
  v0: number; rad: number; comp: number; color: number;
  u: number; dwellK: number; rainU: number;
}

export type LogKind = 'scenario' | 'gate' | 'pa' | 'alert' | 'hold' | 'info' | 'ok';
export interface LogEntry { t: number; sim: number; kind: LogKind; text: string; zone?: number }

export interface ZoneStat {
  count: number;
  density: number;   // experienced (person-weighted) density, p/m2
  peak: number;      // max local density in zone
  speed: number;     // mean walking speed
  cfi: number;       // counter-flow index 0..1
  pressure: number;  // crowd pressure rho*Var(v)
  slope: number;     // p/m2 per minute
  dangerTime: number;
}

export interface SeriesPoint {
  t: number; peak: number; local: number; onsite: number; inDanger: number; held: number; bathed: number; danger: number;
}

export interface Controller {
  tick(sim: Sim, dt: number): void;
  advice(sim: Sim, zone: number): string;
}

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Social force constants (per unit mass, m/s^2)
const A_SOC = 2.1, B_SOC = 0.3, K_BODY = 28, LAMBDA = 0.3;
const A_WALL = 5, B_WALL = 0.16, K_WALL = 60;
const TAU = 0.5;
const KEEP_LEFT = 0.22;
const SIDESTEP = 0.9;
const RAIN_SHELTER_P = 0.85;
const S_MAX = 0.085;
const CELL_CAP = 8; // max body compression (m) -> caps density near 8-9 p/m2
const CUT2 = 1.0;
const LUT_N = 1024, LUT_MIN = -1.2, LUT_MAX = 1.0;
const EXP_LUT = new Float32Array(LUT_N + 1);
const WEXP_LUT = new Float32Array(LUT_N + 1);
for (let i = 0; i <= LUT_N; i++) {
  const s = LUT_MIN + ((LUT_MAX - LUT_MIN) * i) / LUT_N;
  EXP_LUT[i] = Math.exp(s / B_SOC);
  WEXP_LUT[i] = Math.exp(s / B_WALL);
}
const LUT_K = LUT_N / (LUT_MAX - LUT_MIN);

const GHAT_ZONES = [0, 1, 2, 3, 4].map(i => ZONE_INDEX['ghat' + (i + 1)]);
const DEST_ZONE = DESTS.map(d => (d.zone ? ZONE_INDEX[d.zone] : -1));

export class Sim {
  readonly shared: Shared;
  readonly policy: Policy;
  readonly simIndex: number;
  controller: Controller | null = null;
  rng: () => number;
  t = 0;
  stepCount = 0;

  // agents (structure of arrays, stable slots)
  alive = new Uint8Array(MAX_AGENTS);
  gen = new Uint8Array(MAX_AGENTS);
  px = new Float32Array(MAX_AGENTS);
  pz = new Float32Array(MAX_AGENTS);
  vx = new Float32Array(MAX_AGENTS);
  vz = new Float32Array(MAX_AGENTS);
  ax = new Float32Array(MAX_AGENTS);
  az = new Float32Array(MAX_AGENTS);
  cx = new Float32Array(MAX_AGENTS); // positional correction (bodies cannot interpenetrate past S_MAX)
  cz = new Float32Array(MAX_AGENTS);
  hd = new Float32Array(MAX_AGENTS);
  rad = new Float32Array(MAX_AGENTS);
  v0 = new Float32Array(MAX_AGENTS);
  comp = new Float32Array(MAX_AGENTS);
  dwellK = new Float32Array(MAX_AGENTS);
  rainU = new Float32Array(MAX_AGENTS);
  panic = new Float32Array(MAX_AGENTS);
  timer = new Float32Array(MAX_AGENTS);
  tx = new Float32Array(MAX_AGENTS);
  tz = new Float32Array(MAX_AGENTS);
  stuck = new Float32Array(MAX_AGENTS);
  spawnT = new Float32Array(MAX_AGENTS);
  plan = new Int8Array(MAX_AGENTS * PS);
  planLen = new Uint8Array(MAX_AGENTS);
  planIdx = new Uint8Array(MAX_AGENTS);
  state = new Uint8Array(MAX_AGENTS);
  origin = new Uint8Array(MAX_AGENTS);
  color = new Uint8Array(MAX_AGENTS);
  informed = new Uint8Array(MAX_AGENTS);
  flags = new Uint8Array(MAX_AGENTS); // 1 bathed, 2 rerouted, 4 shelter-inserted, 8 abandoned-dwell
  lastGate = new Int8Array(MAX_AGENTS);
  cellOf = new Int32Array(MAX_AGENTS);
  freeStack = new Int32Array(MAX_AGENTS);
  freeTop = 0;
  hi = 0; // slots in use are < hi
  count = 0;

  // spatial hash (1 m cells == world cells)
  cellStart = new Int32Array(N + 1);
  cellItems = new Int32Array(MAX_AGENTS);
  private hashFill = new Int32Array(N);

  // dynamic map state
  gateMode: GateMode[] = GATES.map(g => g.fixed);
  jammed: boolean[] = GATES.map(() => false);
  publicJam: boolean[] = GATES.map(() => false);
  scenarioClosed: boolean[] = GATES.map(() => false);
  cordon = false;
  publicCordon = false;
  blocked = new Uint8Array(N);
  wallDist = new Float32Array(N);
  evac = new Int32Array(N);
  reveal = new Uint8Array(N);
  shelterFull = [false, false, false, true, true]; // hold tents & camp pandals are not public shelter unless opened
  fieldsAct: Field[] = [];
  fieldsBel: Field[] = [];
  fieldsDirty = true;
  mapDirty = true;
  discrepancy = false;

  // environment
  rain = false;
  speedFactor = 1;
  rumour: { x: number; z: number; t: number } | null = null;
  panicTau = 75;
  panicSusc = 1;
  templeClosed = false;

  // policy levers used by the controller
  holdActive = false;
  ghatAdvice = [1, 1, 1, 1, 1];
  deferCamp = false;
  deferBus = false;
  deferred: SpawnSpec[] = [];

  // measurement
  counts = new Float32Array(N);
  density = new Float32Array(N);
  panicGrid = new Float32Array(N);
  private tmpA = new Float32Array(N);
  private tmpB = new Float32Array(N);
  flow = new Float32Array(FW * FH * 4); // vx, vz, cfi, n
  flowPressure = new Float32Array(FW * FH);
  zone: ZoneStat[] = ZONES.map(() => ({ count: 0, density: 0, peak: 0, speed: 0, cfi: 0, pressure: 0, slope: 0, dangerTime: 0 }));
  zoneHist: number[][] = ZONES.map(() => []); // 5 s samples
  zoneAlert = ZONES.map(() => 0);
  gateCount = new Float32Array(GATES.length);
  gateRate = new Float32Array(GATES.length); // people per minute (EMA)
  series: SeriesPoint[] = [];
  log: LogEntry[] = [];
  logTotal = 0;
  measureTimer = 0;
  histTimer = 0;
  flowToggle = 0;

  // summary metrics
  peakZone = 0;
  peakLocal = 0;
  dangerTime = 0;       // s during which some zone is >= DANGER
  personDanger = 0;     // person-seconds above DANGER
  criticalTime = 0;
  bathed = 0;
  departed = 0;
  tripSum = 0;
  spawned = 0;
  nowPeak = 0;
  nowLocal = 0;
  nowInDanger = 0;
  heldCount = 0;

  constructor(shared: Shared, policy: Policy, simIndex: number, seed: number) {
    this.shared = shared;
    this.policy = policy;
    this.simIndex = simIndex;
    this.rng = mulberry32(seed);
    for (let i = MAX_AGENTS - 1; i >= 0; i--) this.freeStack[this.freeTop++] = i;
    this.lastGate.fill(-1);
  }

  // ------------------------------------------------------------------ map
  setGate(id: string, mode: GateMode, why?: string) {
    const gi = GATES.findIndex(g => g.id === id);
    if (gi < 0 || this.gateMode[gi] === mode) return false;
    this.gateMode[gi] = mode;
    this.mapDirty = true;
    if (why !== undefined) this.addLog('gate', `${GATES[gi].name} → ${modeLabel(mode)}${why ? ' · ' + why : ''}`);
    return true;
  }

  effectiveClosed(gi: number) {
    return this.gateMode[gi] === 'closed' || this.jammed[gi] || this.scenarioClosed[gi];
  }

  jamGate(id: string) {
    const gi = GATES.findIndex(g => g.id === id);
    this.jammed[gi] = true;
    this.mapDirty = true;
  }

  setCordon(on: boolean) {
    this.cordon = on;
    if (!on) this.publicCordon = false;
    this.mapDirty = true;
  }

  announceJams() {
    let any = false;
    GATES.forEach((_, gi) => { if (this.jammed[gi] && !this.publicJam[gi]) { this.publicJam[gi] = true; any = true; } });
    if (any) this.mapDirty = true;
  }

  announceCordon() {
    if (!this.publicCordon) { this.publicCordon = true; this.mapDirty = true; }
  }

  setShelterFull(part: number, full: boolean) {
    if (this.shelterFull[part] !== full) { this.shelterFull[part] = full; this.fieldsDirty = true; }
  }

  private rebuildMap() {
    const { base, gateCell } = this.shared.world;
    const blocked = this.blocked;
    const reveal = this.reveal;
    const disc = this.tmpA; // reuse as mask
    disc.fill(0);
    let discrepancy = false;
    for (let c = 0; c < N; c++) {
      const b = base[c];
      let bl = b === WALL || b === WATER ? 1 : 0;
      const g = gateCell[c];
      if (g >= 0) {
        if (this.gateMode[g] === 'closed' || this.scenarioClosed[g]) bl = 1;
        else if (this.jammed[g]) {
          bl = 1;
          if (!this.publicJam[g]) { disc[c] = 1; discrepancy = true; }
        }
      }
      blocked[c] = bl;
    }
    if (this.cordon) {
      for (let z = CORDON.z0; z < CORDON.z1; z++) {
        for (let x = CORDON.x0; x < CORDON.x1; x++) {
          const c = z * W + x;
          blocked[c] = 1;
          if (!this.publicCordon) { disc[c] = 1; discrepancy = true; }
        }
      }
    }
    this.discrepancy = discrepancy;
    distanceTransform(blocked, this.wallDist);
    const pass = new Uint8Array(N);
    for (let c = 0; c < N; c++) pass[c] = blocked[c] ? 0 : 1;
    nearestFree(pass, this.evac);
    reveal.fill(0);
    if (discrepancy) {
      const m = new Uint8Array(N);
      for (let c = 0; c < N; c++) m[c] = disc[c] > 0 ? 1 : 0;
      const d = distanceTransform(m);
      for (let c = 0; c < N; c++) reveal[c] = d[c] <= 9 ? 1 : 0;
    }
    this.mapDirty = false;
    this.fieldsDirty = true;
  }

  private passMask(cls: 'in' | 'out' | 'neutral', believed: boolean): Uint8Array {
    const { base, gateCell } = this.shared.world;
    const m = new Uint8Array(N);
    for (let c = 0; c < N; c++) {
      const b = base[c];
      if (b === WALL || b === WATER) continue;
      const g = gateCell[c];
      if (g >= 0) {
        const mode = this.gateMode[g];
        if (mode === 'closed' || this.scenarioClosed[g]) continue;
        if (this.jammed[g] && (!believed || this.publicJam[g])) continue;
        if (cls === 'in' && mode === 'out') continue;
        if (cls === 'out' && mode === 'in') continue;
      }
      m[c] = 1;
    }
    if (this.cordon && (!believed || this.publicCordon)) {
      for (let z = CORDON.z0; z < CORDON.z1; z++) for (let x = CORDON.x0; x < CORDON.x1; x++) m[z * W + x] = 0;
    }
    return m;
  }

  private rebuildFields() {
    const { destMask, shelterPart } = this.shared.world;
    const cost = this.shared.staticCost;
    const masks: Record<string, Uint8Array> = {};
    const getMask = (cls: 'in' | 'out' | 'neutral', bel: boolean) => (masks[cls + bel] ??= this.passMask(cls, bel));
    const sources = DESTS.map((_, d) => {
      if (d !== D_SHELTER) return destMask[d];
      const s = new Uint8Array(N);
      const full = this.shelterFull;
      const allFull = full.every(Boolean);
      for (let c = 0; c < N; c++) {
        const p = shelterPart[c];
        if (p >= 0 && (allFull || !full[p])) s[c] = 1;
      }
      return s;
    });
    for (let d = 0; d < NUM_DESTS; d++) {
      const cls = DESTS[d].cls;
      this.fieldsAct[d] = computeField(getMask(cls, false), cost, sources[d], this.fieldsAct[d]);
      if (this.discrepancy) {
        const prev = this.fieldsBel[d];
        this.fieldsBel[d] = computeField(getMask(cls, true), cost, sources[d], prev && prev !== this.fieldsAct[d] ? prev : undefined);
      } else {
        this.fieldsBel[d] = this.fieldsAct[d];
      }
    }
    this.fieldsDirty = false;
  }

  // -------------------------------------------------------------- agents
  spawn(spec: SpawnSpec, fromDeferred = false) {
    if (!fromDeferred && this.policy === 'ai') {
      if ((this.deferCamp && spec.origin === ORIGIN_CAMP) || (this.deferBus && spec.origin === ORIGIN_BUS)) {
        this.deferred.push(spec);
        return -1;
      }
    }
    if (this.freeTop === 0) return -1;
    const i = this.freeStack[--this.freeTop];
    if (i >= this.hi) this.hi = i + 1;
    this.alive[i] = 1;
    this.gen[i] = (this.gen[i] + 1) & 255;
    this.px[i] = spec.x; this.pz[i] = spec.z;
    this.vx[i] = 0; this.vz[i] = 0;
    this.hd[i] = 0;
    this.rad[i] = spec.rad; this.v0[i] = spec.v0; this.comp[i] = spec.comp;
    this.dwellK[i] = spec.dwellK; this.rainU[i] = spec.rainU;
    this.color[i] = spec.color; this.origin[i] = spec.origin;
    this.panic[i] = 0; this.timer[i] = 0; this.stuck[i] = 0;
    this.spawnT[i] = this.t;
    this.state[i] = ST_WALK;
    this.informed[i] = 0;
    this.flags[i] = 0;
    this.lastGate[i] = -1;
    let plan = spec.plan;
    if (this.policy === 'ai') {
      plan = plan.slice();
      // dynamic signage: compliant arrivals pick a ghat from the advised weights
      if (spec.comp < 0.8 && plan[0] < 5 && this.ghatAdvice.some(a => a < 0.999)) {
        plan[0] = this.adviseGhat(plan[0], spec.u);
      }
      if (this.holdActive && spec.origin !== ORIGIN_CAMP) plan.unshift(D_HOLD);
      if (this.broadcastAll) this.informed[i] = 1;
    }
    if (this.rain && spec.rainU < RAIN_SHELTER_P) { plan = plan.slice(); plan.unshift(D_SHELTER); this.flags[i] |= 4; }
    for (let k = 0; k < plan.length && k < PS; k++) this.plan[i * PS + k] = plan[k];
    this.planLen[i] = Math.min(PS, plan.length);
    this.planIdx[i] = 0;
    this.count++;
    this.spawned++;
    return i;
  }

  broadcastAll = false;

  /** Pick a ghat by re-weighting the original preference with the controller's advice. */
  adviseGhat(orig: number, u: number) {
    const w = [0.13, 0.2, 0.4, 0.16, 0.11].map((b, g) => (g === orig ? 0.55 : b) * this.ghatAdvice[g]);
    const s = w.reduce((a, b) => a + b, 0);
    let acc = 0;
    for (let g = 0; g < 5; g++) { acc += w[g] / s; if (u <= acc) return g; }
    return 4;
  }

  kill(i: number) {
    this.alive[i] = 0;
    this.freeStack[this.freeTop++] = i;
    this.count--;
    while (this.hi > 0 && !this.alive[this.hi - 1]) this.hi--;
  }

  dest(i: number) { return this.plan[i * PS + this.planIdx[i]]; }

  insertStep(i: number, d: number) {
    const len = this.planLen[i];
    if (len >= PS) return;
    const o = i * PS;
    for (let k = len; k > this.planIdx[i]; k--) this.plan[o + k] = this.plan[o + k - 1];
    this.plan[o + this.planIdx[i]] = d;
    this.planLen[i] = len + 1;
    this.state[i] = ST_WALK;
  }

  setDest(i: number, d: number) {
    this.plan[i * PS + this.planIdx[i]] = d;
    if (this.state[i] === ST_APPROACH) this.state[i] = ST_WALK;
  }

  advance(i: number) {
    const d = this.dest(i);
    if (d < 5 && !(this.flags[i] & 8)) { this.flags[i] |= 1; this.bathed++; }
    this.flags[i] &= ~8;
    this.planIdx[i]++;
    this.state[i] = ST_WALK;
    this.stuck[i] = 0;
    if (this.planIdx[i] >= this.planLen[i]) {
      // safety: should not happen (last step is always a way home)
      this.departed++;
      this.kill(i);
    }
  }

  releaseHeld(n: number) {
    let r = 0;
    for (let i = 0; i < this.hi && r < n; i++) {
      if (this.alive[i] && this.state[i] === ST_HELD) {
        this.timer[i] = this.rng() * 12;
        this.state[i] = ST_DWELL;
        r++;
      }
    }
    return r;
  }

  startRumour(x: number, z: number, radius: number) {
    this.rumour = { x, z, t: this.t };
    const r2 = radius * radius;
    for (let i = 0; i < this.hi; i++) {
      if (!this.alive[i]) continue;
      const dx = this.px[i] - x, dz = this.pz[i] - z;
      if (dx * dx + dz * dz < r2) this.panic[i] = 1;
    }
  }

  setRain(on: boolean) {
    this.rain = on;
    this.speedFactor = on ? 0.85 : 1;
    if (on) {
      for (let i = 0; i < this.hi; i++) {
        if (!this.alive[i] || this.flags[i] & 4) continue;
        const st = this.state[i];
        const d = this.dest(i);
        if ((st === ST_WALK || (st === ST_DWELL && d === D_TEMPLE)) && this.rainU[i] < RAIN_SHELTER_P && d !== D_SHELTER) {
          this.insertStep(i, D_SHELTER);
          this.flags[i] |= 4;
        }
      }
    } else {
      for (let i = 0; i < this.hi; i++) {
        if (this.alive[i] && this.dest(i) === D_SHELTER) {
          if (this.state[i] === ST_DWELL) this.timer[i] = this.rng() * 80;
          else { this.flags[i] |= 8; this.advance(i); }
        }
      }
    }
  }

  addLog(kind: LogKind, text: string, zone?: number) {
    this.log.push({ t: this.t, sim: this.simIndex, kind, text, zone });
    this.logTotal++;
    if (this.log.length > 400) this.log.splice(0, this.log.length - 400);
  }

  // ---------------------------------------------------------------- step
  step(dt: number) {
    if (this.mapDirty) this.rebuildMap();
    if (this.fieldsDirty) this.rebuildFields();
    this.t += dt;
    this.stepCount++;
    this.buildHash();
    this.forces(dt);
    this.integrate(dt);
    this.measureTimer += dt;
    if (this.measureTimer >= 0.5 - 1e-6) { this.measure(this.measureTimer); this.measureTimer = 0; }
    if (this.controller) this.controller.tick(this, dt);
  }

  private buildHash() {
    const cs = this.cellStart, items = this.cellItems, cellOf = this.cellOf;
    cs.fill(0);
    const hi = this.hi, alive = this.alive, px = this.px, pz = this.pz;
    for (let i = 0; i < hi; i++) {
      if (!alive[i]) continue;
      let x = px[i] | 0, z = pz[i] | 0;
      if (x < 0) x = 0; else if (x >= W) x = W - 1;
      if (z < 0) z = 0; else if (z >= H) z = H - 1;
      const c = z * W + x;
      cellOf[i] = c;
      cs[c + 1]++;
    }
    for (let c = 0; c < N; c++) cs[c + 1] += cs[c];
    const fill = this.hashFill;
    fill.fill(0);
    for (let i = 0; i < hi; i++) {
      if (!alive[i]) continue;
      const c = cellOf[i];
      const k = cs[c] + fill[c];
      items[k] = i;
      fill[c]++;
    }
  }

  private sampleDir(f: Field, x: number, z: number, out: number[]) {
    const fx = x - 0.5, fz = z - 0.5;
    let ix = Math.floor(fx), iz = Math.floor(fz);
    if (ix < 0) ix = 0; else if (ix > W - 2) ix = W - 2;
    if (iz < 0) iz = 0; else if (iz > H - 2) iz = H - 2;
    let ux = fx - ix, uz = fz - iz;
    ux = ux < 0 ? 0 : ux > 1 ? 1 : ux; uz = uz < 0 ? 0 : uz > 1 ? 1 : uz;
    const c = iz * W + ix;
    const w00 = (1 - ux) * (1 - uz), w10 = ux * (1 - uz), w01 = (1 - ux) * uz, w11 = ux * uz;
    const dx = f.dirX, dz = f.dirZ;
    let ex = dx[c] * w00 + dx[c + 1] * w10 + dx[c + W] * w01 + dx[c + W + 1] * w11;
    let ez = dz[c] * w00 + dz[c + 1] * w10 + dz[c + W] * w01 + dz[c + W + 1] * w11;
    const m = Math.hypot(ex, ez);
    if (m > 1e-4) { ex /= m; ez /= m; } else { ex = 0; ez = 0; }
    out[0] = ex; out[1] = ez;
  }

  private forces(dt: number) {
    const { alive, px, pz, vx, vz, ax, az, rad, v0, state, panic, informed, cellOf } = this;
    const cs = this.cellStart, items = this.cellItems;
    const wallDist = this.wallDist;
    const rng = this.rng;
    const dirTmp = [0, 0];
    const sf = this.speedFactor;
    const rum = this.rumour;
    const base = this.shared.world.base;
    const hi = this.hi;
    const replanSlot = this.stepCount % 20;
    for (let i = 0; i < hi; i++) {
      if (!alive[i]) continue;
      const xi = px[i], zi = pz[i];
      const c = cellOf[i];
      let ex = 0, ez = 0, speed = 0;
      const st = state[i];
      const p = panic[i];
      if (p > 0.25) {
        this.sampleDir(this.fieldsAct[D_ESCAPE], xi, zi, dirTmp);
        ex = dirTmp[0]; ez = dirTmp[1];
        if (rum) {
          const rx = xi - rum.x, rz = zi - rum.z;
          const rd = Math.hypot(rx, rz);
          if (rd < 70 && rd > 0.1) { ex += (rx / rd) * 0.45 * p; ez += (rz / rd) * 0.45 * p; }
        }
        const m = Math.hypot(ex, ez);
        if (m > 1e-4) { ex /= m; ez /= m; }
        speed = v0[i] * (1 + 1.15 * p);
        if (st === ST_DWELL || st === ST_HELD || st === ST_APPROACH) {
          // bathers and queuers abandon what they were doing
          if (st === ST_HELD) state[i] = ST_WALK;
          else { this.flags[i] |= 8; this.advance(i); if (!alive[i]) continue; }
        }
      } else if (st === ST_WALK) {
        const d = this.dest(i);
        const fa = this.fieldsAct[d];
        let f = informed[i] ? fa : this.fieldsBel[d];
        if (!isFinite(f.dist[c])) f = fa;
        if (!isFinite(fa.dist[c]) && (i % 20) === replanSlot) this.replan(i, d);
        this.sampleDir(f, xi, zi, dirTmp);
        // keep to the left (Indian convention) — seeds lane formation in counter-flow
        ex = dirTmp[0] + dirTmp[1] * KEEP_LEFT; ez = dirTmp[1] - dirTmp[0] * KEEP_LEFT;
        const em = Math.hypot(ex, ez);
        if (em > 1e-4) { ex /= em; ez /= em; }
        speed = v0[i];
      } else if (st === ST_APPROACH) {
        let dx = this.tx[i] - xi, dz = this.tz[i] - zi;
        const m = Math.hypot(dx, dz);
        if (m > 1e-3) { dx /= m; dz /= m; }
        ex = dx; ez = dz;
        speed = Math.min(v0[i], 0.4 + m * 0.5);
      }
      if (base[c] === BATH) speed *= 0.55;
      // impatience: people stuck in a jam push harder and accept tighter contact
      const imp = this.stuck[i] > 8 ? Math.min(1, (this.stuck[i] - 8) / 40) : 0;
      speed *= sf * (1 + 0.45 * imp);
      const dvx = ex * speed, dvz = ez * speed;
      const tau = p > 0.25 ? 0.35 : TAU;
      let fx = (dvx - vx[i]) / tau, fz = (dvz - vz[i]) / tau;
      // anisotropy reference direction: desired direction, else velocity
      let hx = ex, hz = ez;
      if (speed === 0) {
        const vm = Math.hypot(vx[i], vz[i]);
        if (vm > 0.05) { hx = vx[i] / vm; hz = vz[i] / vm; }
      }
      const ri = rad[i];
      const ix = c % W, iz = (c / W) | 0;
      const z0 = iz > 0 ? iz - 1 : 0, z1 = iz < H - 1 ? iz + 1 : iz;
      const x0 = ix > 0 ? ix - 1 : 0, x1 = ix < W - 1 ? ix + 1 : ix;
      const aSoc = A_SOC * (1 + 0.8 * p) * (1 - 0.5 * imp);
      let corrX = 0, corrZ = 0;
      for (let zz = z0; zz <= z1; zz++) {
        for (let xx = x0; xx <= x1; xx++) {
          const cc = zz * W + xx;
          const end = cs[cc + 1];
          for (let k = cs[cc]; k < end; k++) {
            const j = items[k];
            if (j === i) continue;
            let dx = xi - px[j], dz = zi - pz[j];
            let d2 = dx * dx + dz * dz;
            if (d2 > CUT2) continue;
            if (d2 < 1e-6) { dx = rng() - 0.5; dz = rng() - 0.5; d2 = dx * dx + dz * dz + 1e-6; }
            const d = Math.sqrt(d2);
            const nx = dx / d, nz = dz / d;
            const s = ri + rad[j] - d;
            let li = ((s - LUT_MIN) * LUT_K) | 0;
            if (li < 0) li = 0; else if (li > LUT_N) li = LUT_N;
            const cosphi = -(nx * hx + nz * hz);
            let f = aSoc * EXP_LUT[li] * (LAMBDA + (1 - LAMBDA) * (1 + cosphi) * 0.5);
            if (s > 0) {
              f += K_BODY * s;
              if (s > S_MAX) { corrX += 0.5 * (s - S_MAX) * nx; corrZ += 0.5 * (s - S_MAX) * nz; }
            }
            fx += f * nx; fz += f * nz;
            // oncoming walker ahead: side-step left
            if (cosphi > 0.4 && speed > 0 && vx[j] * hx + vz[j] * hz < -0.25) { fx += SIDESTEP * hz; fz -= SIDESTEP * hx; }
          }
        }
      }
      // walls (from the distance transform of blocked cells)
      const wd = wallDist[c];
      if (wd < 2.6) {
        const gx = this.wdAt(xi + 0.35, zi) - this.wdAt(xi - 0.35, zi);
        const gz = this.wdAt(xi, zi + 0.35) - this.wdAt(xi, zi - 0.35);
        const gm = Math.hypot(gx, gz);
        if (gm > 1e-4) {
          const surf = this.wdAt(xi, zi) - 0.5;
          const s = ri - surf;
          let li = ((s - LUT_MIN) * LUT_K) | 0;
          if (li < 0) li = 0; else if (li > LUT_N) li = LUT_N;
          let f = A_WALL * WEXP_LUT[li];
          if (s > 0) f += K_WALL * s;
          fx += (f * gx) / gm; fz += (f * gz) / gm;
        }
      }
      // small random fluctuation
      fx += (rng() - 0.5) * 0.3; fz += (rng() - 0.5) * 0.3;
      const am = Math.hypot(fx, fz);
      const amax = 14;
      if (am > amax) { fx *= amax / am; fz *= amax / am; }
      ax[i] = fx; az[i] = fz;
      this.cx[i] = corrX; this.cz[i] = corrZ;
    }
    void dt;
  }

  private wdAt(x: number, z: number) {
    const fx = x - 0.5, fz = z - 0.5;
    let ix = Math.floor(fx), iz = Math.floor(fz);
    if (ix < 0) ix = 0; else if (ix > W - 2) ix = W - 2;
    if (iz < 0) iz = 0; else if (iz > H - 2) iz = H - 2;
    let ux = fx - ix, uz = fz - iz;
    ux = ux < 0 ? 0 : ux > 1 ? 1 : ux; uz = uz < 0 ? 0 : uz > 1 ? 1 : uz;
    const c = iz * W + ix, d = this.wallDist;
    return (d[c] * (1 - ux) + d[c + 1] * ux) * (1 - uz) + (d[c + W] * (1 - ux) + d[c + W + 1] * ux) * uz;
  }

  /** Destination unreachable on the true map: pick something sensible. */
  private replan(i: number, d: number) {
    const c = this.cellOf[i];
    const fa = this.fieldsAct;
    if (d < 5) {
      let best = -1, bd = Infinity;
      for (let g = 0; g < 5; g++) { const v = fa[g].dist[c]; if (v < bd) { bd = v; best = g; } }
      if (best >= 0) this.setDest(i, best);
    } else if (d === D_TEMPLE || d === D_SHELTER || d === D_HOLD) {
      this.flags[i] |= 8;
      this.advance(i);
    }
    // outbound: nothing to do — wait for the way to reopen
  }

  private integrate(dt: number) {
    const { alive, px, pz, vx, vz, ax, az, state, panic, informed, blocked, evac, hd } = this;
    const { zone, gateCell } = this.shared.world;
    const reveal = this.reveal;
    const disc = this.discrepancy;
    const hi = this.hi;
    const decay = dt / this.panicTau;
    // live per-cell occupancy (exact cap even when several bodies move at once)
    const occ = this.hashFill;
    occ.fill(0);
    for (let i = 0; i < hi; i++) if (alive[i]) occ[this.cellOf[i]]++;
    for (let i = 0; i < hi; i++) {
      if (!alive[i]) continue;
      const p = panic[i];
      let nvx = vx[i] + ax[i] * dt, nvz = vz[i] + az[i] * dt;
      const vmax = p > 0.25 ? 3.2 : 2.2;
      const sp = Math.hypot(nvx, nvz);
      if (sp > vmax) { nvx *= vmax / sp; nvz *= vmax / sp; }
      let x = px[i], z = pz[i];
      let c = (z | 0) * W + (x | 0);
      if (blocked[c]) {
        // standing where a gate closed or a cordon formed: step out
        const t = evac[c];
        if (t >= 0 && t !== c) {
          const txp = (t % W) + 0.5, tzp = ((t / W) | 0) + 0.5;
          const dx = txp - x, dz = tzp - z, m = Math.hypot(dx, dz) || 1;
          nvx = (dx / m) * 1.4; nvz = (dz / m) * 1.4;
          x += nvx * dt + this.cx[i]; z += nvz * dt + this.cz[i];
        }
      } else {
        const nx = x + nvx * dt + this.cx[i], nz = z + nvz * dt + this.cz[i];
        // try the full move, then sliding along x or z. A 1 m² cell holds at most
        // CELL_CAP bodies, which prevents unphysical stacking against walls.
        const okX = nx >= 0 && nx < W, okZ = nz >= 0 && nz < H;
        const zc = (z | 0) * W, xc = x | 0;
        const n1 = okX && okZ ? (nz | 0) * W + (nx | 0) : -1;
        const n2 = okX ? zc + (nx | 0) : -1;
        const n3 = okZ ? (nz | 0) * W + xc : -1;
        if (n1 >= 0 && !blocked[n1] && (n1 === c || occ[n1] < CELL_CAP)) { x = nx; z = nz; }
        else if (n2 >= 0 && !blocked[n2] && (n2 === c || occ[n2] < CELL_CAP)) { x = nx; nvz *= 0.3; }
        else if (n3 >= 0 && !blocked[n3] && (n3 === c || occ[n3] < CELL_CAP)) { z = nz; nvx *= 0.3; }
        else { nvx *= 0.2; nvz *= 0.2; }
      }
      const c2 = (z | 0) * W + (x | 0);
      if (c2 !== c) { occ[c]--; occ[c2]++; }
      px[i] = x; pz[i] = z; vx[i] = nvx; vz[i] = nvz;
      const s2 = nvx * nvx + nvz * nvz;
      if (s2 > 0.04) {
        const target = Math.atan2(nvx, nvz);
        let dh = target - hd[i];
        if (dh > Math.PI) dh -= 2 * Math.PI; else if (dh < -Math.PI) dh += 2 * Math.PI;
        hd[i] += dh * 0.25;
      }
      if (p > 0) panic[i] = Math.max(0, p - decay);
      c = (z | 0) * W + (x | 0);
      if (disc && !informed[i] && reveal[c]) informed[i] = 1;
      // gate throughput
      const g = gateCell[c];
      if (g >= 0) { if (this.lastGate[i] !== g) { this.lastGate[i] = g; this.gateCount[g]++; } }
      else this.lastGate[i] = -1;

      // state machine
      const st = state[i];
      if (st === ST_WALK) {
        if (panic[i] > 0.25) continue;
        const d = this.dest(i);
        const zi = zone[c];
        const dz = DEST_ZONE[d];
        const arrivedRegion = this.shared.world.destMask[d][c] === 1;
        if (d === D_STATION || d === D_BUS || d === D_CAMP) {
          if (arrivedRegion) {
            this.departed++;
            this.tripSum += this.t - this.spawnT[i];
            this.kill(i);
          }
          continue;
        }
        if (d === D_SHELTER) {
          if (arrivedRegion) {
            state[i] = ST_DWELL;
            this.timer[i] = this.rain ? 1e9 : this.rng() * 30;
          }
          continue;
        }
        if (arrivedRegion || (d < 5 && zi === dz)) {
          this.pickTarget(i, d);
          state[i] = ST_APPROACH;
          this.timer[i] = 0;
        }
        const s = Math.sqrt(s2);
        this.stuck[i] = s < 0.12 ? this.stuck[i] + dt : Math.max(0, this.stuck[i] - dt);
      } else if (st === ST_APPROACH) {
        const dx = this.tx[i] - x, dz = this.tz[i] - z;
        this.timer[i] += dt;
        const s = Math.sqrt(s2);
        this.stuck[i] = s < 0.12 ? this.stuck[i] + dt : Math.max(0, this.stuck[i] - dt);
        if (dx * dx + dz * dz < 0.6 || this.stuck[i] > 6 || this.timer[i] > 70) {
          const d = this.dest(i);
          state[i] = d === D_HOLD ? ST_HELD : ST_DWELL;
          this.timer[i] = d < 5 ? 60 + 100 * this.dwellK[i] : d === D_TEMPLE ? 25 + 45 * this.dwellK[i] : 1e9;
          this.stuck[i] = 0;
        }
      } else if (st === ST_DWELL) {
        this.timer[i] -= dt;
        if (this.timer[i] <= 0) this.advance(i);
      }
    }
  }

  private pickTarget(i: number, d: number) {
    const cells = this.shared.destCells[d];
    let best = cells[(this.rng() * cells.length) | 0];
    let bestD = this.density[best];
    for (let k = 0; k < 3; k++) {
      const c = cells[(this.rng() * cells.length) | 0];
      if (this.density[c] < bestD) { best = c; bestD = this.density[c]; }
    }
    this.tx[i] = (best % W) + 0.2 + this.rng() * 0.6;
    this.tz[i] = ((best / W) | 0) + 0.2 + this.rng() * 0.6;
  }

  // ------------------------------------------------------------- measure
  private measure(dt: number) {
    const { alive, px, pz, vx, vz, panic, state, counts, density, cellOf } = this;
    const { zone: zoneOf, base } = this.shared.world;
    const hi = this.hi;
    counts.fill(0);
    const pc = this.panicGrid;
    pc.fill(0);
    let anyPanic = false;
    for (let i = 0; i < hi; i++) {
      if (!alive[i]) continue;
      const c = ((pz[i] | 0) * W + (px[i] | 0));
      cellOf[i] = c;
      counts[c]++;
      if (panic[i] > 0.5) { pc[c]++; anyPanic = true; }
    }
    blur5(counts, this.tmpA, this.tmpB);
    const wb = this.shared.walkBlur;
    let local = 0;
    for (let c = 0; c < N; c++) {
      const b = base[c];
      if (b === WALL || b === WATER) { density[c] = 0; continue; }
      const v = this.tmpA[c] / Math.max(wb[c], 0.35);
      density[c] = v;
      if (v > local) local = v;
    }
    // panic contagion
    if (anyPanic) {
      blur5(pc, this.tmpA, this.tmpB);
      const susc = this.panicSusc;
      for (let i = 0; i < hi; i++) {
        if (!alive[i] || panic[i] > 0.6) continue;
        const pd = this.tmpA[cellOf[i]] / Math.max(wb[cellOf[i]], 0.35);
        if (pd > 0.35 && this.rng() < 0.4 * susc) panic[i] = Math.max(panic[i], 0.8);
      }
    }

    // zone stats
    const Z = ZONES.length;
    const zc = new Float32Array(Z), zr = new Float32Array(Z), zs = new Float32Array(Z), zpk = new Float32Array(Z);
    const sxx = new Float32Array(Z), szz = new Float32Array(Z), sxz = new Float32Array(Z);
    let inDanger = 0, held = 0;
    for (let i = 0; i < hi; i++) {
      if (!alive[i]) continue;
      const c = cellOf[i];
      const zi = zoneOf[c];
      const rho = density[c];
      if (rho >= DANGER) inDanger++;
      if (state[i] === ST_HELD || (state[i] !== ST_DWELL && this.dest(i) === D_HOLD)) held++;
      if (zi === NO_ZONE) continue;
      zc[zi]++;
      zr[zi] += rho;
      const sp = Math.hypot(vx[i], vz[i]);
      zs[zi] += sp;
      if (sp > 0.25 && state[i] !== ST_DWELL) {
        const ux = vx[i] / sp, uz = vz[i] / sp;
        sxx[zi] += ux * ux; szz[zi] += uz * uz; sxz[zi] += ux * uz;
      }
    }
    held += this.deferred.length;
    for (let c = 0; c < N; c++) {
      const zi = zoneOf[c];
      if (zi !== NO_ZONE && density[c] > zpk[zi]) zpk[zi] = density[c];
    }
    // counter-flow: share of movers going against the zone's main axis
    const axX = new Float32Array(Z), axZ = new Float32Array(Z), np = new Float32Array(Z), nn = new Float32Array(Z);
    for (let zi = 0; zi < Z; zi++) {
      const th = 0.5 * Math.atan2(2 * sxz[zi], sxx[zi] - szz[zi]);
      axX[zi] = Math.cos(th); axZ[zi] = Math.sin(th);
    }
    for (let i = 0; i < hi; i++) {
      if (!alive[i] || state[i] === ST_DWELL) continue;
      const zi = zoneOf[cellOf[i]];
      if (zi === NO_ZONE) continue;
      const sp = Math.hypot(vx[i], vz[i]);
      if (sp < 0.25) continue;
      const pr = (vx[i] * axX[zi] + vz[i] * axZ[zi]) / sp;
      if (pr > 0.5) np[zi]++; else if (pr < -0.5) nn[zi]++;
    }

    let peak = 0;
    let anyDanger = false, anyCritical = false;
    for (let zi = 0; zi < Z; zi++) {
      const s = this.zone[zi];
      s.count = zc[zi];
      s.density = zc[zi] > 0 ? zr[zi] / zc[zi] : 0;
      s.peak = zpk[zi];
      s.speed = zc[zi] > 0 ? zs[zi] / zc[zi] : 0;
      const tot = np[zi] + nn[zi];
      const raw = tot >= 10 ? (2 * Math.min(np[zi], nn[zi])) / tot : 0;
      s.cfi = s.cfi * 0.6 + raw * 0.4;
      const significant = zc[zi] >= 30;
      if (significant && s.density > peak) peak = s.density;
      if (significant && s.density >= DANGER) {
        anyDanger = true;
        s.dangerTime += dt;
        if (s.density >= CRITICAL) anyCritical = true;
      }
      // alerts with hysteresis
      const lvl = !significant ? 0 : s.density >= CRITICAL ? 2 : s.density >= DANGER ? 1 : 0;
      if (lvl > this.zoneAlert[zi]) {
        this.addLog('alert', `${ZONES[zi].short} ${lvl === 2 ? 'CRITICAL' : 'danger'} · ${s.density.toFixed(1)} p/m²`, zi);
        this.zoneAlert[zi] = lvl;
      } else if (lvl < this.zoneAlert[zi] && s.density < (this.zoneAlert[zi] === 2 ? CRITICAL - 0.6 : DANGER - 0.6)) {
        this.zoneAlert[zi] = lvl;
        if (lvl === 0) this.addLog('ok', `${ZONES[zi].short} back below danger`, zi);
      }
    }
    this.nowPeak = peak;
    this.nowLocal = local;
    this.nowInDanger = inDanger;
    this.heldCount = held;
    if (peak > this.peakZone) this.peakZone = peak;
    if (local > this.peakLocal) this.peakLocal = local;
    if (anyDanger) this.dangerTime += dt;
    if (anyCritical) this.criticalTime += dt;
    this.personDanger += inDanger * dt;

    this.flowToggle ^= 1;
    if (this.flowToggle) this.measureFlow();

    // 5 s history for trends, prediction & charts
    this.histTimer += dt;
    if (this.histTimer >= 5 - 1e-6) {
      this.histTimer = 0;
      for (let zi = 0; zi < Z; zi++) {
        const h = this.zoneHist[zi];
        h.push(this.zone[zi].density);
        if (h.length > 48) h.shift();
        this.zone[zi].slope = slopePerMin(h, 12);
      }
      for (let g = 0; g < GATES.length; g++) {
        this.gateRate[g] = this.gateRate[g] * 0.5 + (this.gateCount[g] * 12) * 0.5;
        this.gateCount[g] = 0;
      }
      this.series.push({
        t: this.t, peak, local, onsite: this.count, inDanger, held, bathed: this.bathed, danger: this.dangerTime,
      });
    }
  }

  private measureFlow() {
    const { alive, px, pz, vx, vz, state, density } = this;
    const fl = this.flow;
    fl.fill(0);
    const hi = this.hi;
    const sv2 = this.flowPressure;
    sv2.fill(0);
    for (let i = 0; i < hi; i++) {
      if (!alive[i] || state[i] === ST_DWELL || state[i] === ST_HELD) continue;
      const sp = Math.hypot(vx[i], vz[i]);
      if (sp < 0.15) continue;
      const f = ((pz[i] / FCELL) | 0) * FW + ((px[i] / FCELL) | 0);
      fl[f * 4] += vx[i];
      fl[f * 4 + 1] += vz[i];
      fl[f * 4 + 3]++;
      sv2[f] += sp * sp;
    }
    // per-cell mean direction then minority share
    const opp = new Float32Array(FW * FH);
    const mx = new Float32Array(FW * FH), mz = new Float32Array(FW * FH);
    for (let f = 0; f < FW * FH; f++) {
      const n = fl[f * 4 + 3];
      if (n < 1) continue;
      const m = Math.hypot(fl[f * 4], fl[f * 4 + 1]);
      if (m > 1e-4) { mx[f] = fl[f * 4] / m; mz[f] = fl[f * 4 + 1] / m; }
    }
    for (let i = 0; i < hi; i++) {
      if (!alive[i] || state[i] === ST_DWELL || state[i] === ST_HELD) continue;
      const sp = Math.hypot(vx[i], vz[i]);
      if (sp < 0.15) continue;
      const f = ((pz[i] / FCELL) | 0) * FW + ((px[i] / FCELL) | 0);
      if ((vx[i] * mx[f] + vz[i] * mz[f]) / sp < -0.4) opp[f]++;
    }
    for (let f = 0; f < FW * FH; f++) {
      const n = fl[f * 4 + 3];
      if (n < 1) { sv2[f] = 0; continue; }
      const mvx = fl[f * 4] / n, mvz = fl[f * 4 + 1] / n;
      fl[f * 4] = mvx; fl[f * 4 + 1] = mvz;
      fl[f * 4 + 2] = n >= 4 ? Math.min(1, (2 * opp[f]) / n) : 0;
      const varV = Math.max(0, sv2[f] / n - (mvx * mvx + mvz * mvz));
      const cx = Math.min(W - 1, ((f % FW) * FCELL + 2)), cz = Math.min(H - 1, ((f / FW) | 0) * FCELL + 2);
      sv2[f] = density[cz * W + cx] * varV;
    }
    // zone pressure: max over flow cells whose centre lies in the zone
    const zp = new Float32Array(ZONES.length);
    const zoneOf = this.shared.world.zone;
    for (let f = 0; f < FW * FH; f++) {
      if (fl[f * 4 + 3] < 4) continue;
      const cx = Math.min(W - 1, ((f % FW) * FCELL + 2)), cz = Math.min(H - 1, ((f / FW) | 0) * FCELL + 2);
      const zi = zoneOf[cz * W + cx];
      if (zi !== NO_ZONE && sv2[f] > zp[zi]) zp[zi] = sv2[f];
    }
    for (let zi = 0; zi < ZONES.length; zi++) this.zone[zi].pressure = this.zone[zi].pressure * 0.5 + zp[zi] * 0.5;
  }

  // ------------------------------------------------------------- helpers
  predict(zi: number, minutes: number) {
    const s = this.zone[zi];
    return Math.max(0, s.density + Math.max(-1, s.slope) * minutes);
  }

  clone(policy: Policy, simIndex: number, seed: number): Sim {
    const s = new Sim(this.shared, policy, simIndex, seed);
    const arrays = ['alive', 'gen', 'px', 'pz', 'vx', 'vz', 'hd', 'rad', 'v0', 'comp', 'dwellK', 'rainU', 'panic', 'timer',
      'tx', 'tz', 'stuck', 'spawnT', 'plan', 'planLen', 'planIdx', 'state', 'origin', 'color', 'informed', 'flags',
      'lastGate', 'cellOf', 'freeStack', 'density'] as const;
    for (const k of arrays) (s[k] as unknown as { set(a: ArrayLike<number>): void }).set(this[k] as unknown as ArrayLike<number>);
    s.freeTop = this.freeTop;
    s.hi = this.hi;
    s.count = this.count;
    s.gateMode = this.gateMode.slice();
    for (let zi = 0; zi < ZONES.length; zi++) {
      s.zone[zi] = { ...this.zone[zi], dangerTime: 0 };
      s.zoneHist[zi] = this.zoneHist[zi].slice();
    }
    s.gateRate.set(this.gateRate);
    return s;
  }

  resetMetrics() {
    this.t = 0;
    this.peakZone = 0; this.peakLocal = 0; this.dangerTime = 0; this.personDanger = 0; this.criticalTime = 0;
    this.bathed = 0; this.departed = 0; this.tripSum = 0; this.spawned = 0;
    this.series = [];
    this.log = [];
    this.logTotal = 0;
    for (const z of this.zone) z.dangerTime = 0;
    for (let i = 0; i < this.hi; i++) this.spawnT[i] = 0;
    this.zoneAlert.fill(0);
  }
}

export function modeLabel(m: GateMode) {
  return m === 'open' ? 'OPEN' : m === 'closed' ? 'CLOSED' : m === 'in' ? 'IN-ONLY' : 'OUT-ONLY';
}

function slopePerMin(h: number[], n: number) {
  const k = Math.min(n, h.length);
  if (k < 3) return 0;
  const o = h.length - k;
  let sx = 0, sy = 0, sxx = 0, sxy = 0;
  for (let i = 0; i < k; i++) {
    const x = i * 5, y = h[o + i];
    sx += x; sy += y; sxx += x * x; sxy += x * y;
  }
  const den = k * sxx - sx * sx;
  if (den === 0) return 0;
  return ((k * sxy - sx * sy) / den) * 60;
}

export { GHAT_ZONES, STEP_END, GHATS };
