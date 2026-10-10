// Runs the fixed-plan and AI-guided simulations in lockstep from an identical
// starting crowd, feeding both exactly the same arrivals and scenario events.

import { W, D_STATION, D_BUS, D_CAMP, D_TEMPLE, GATES } from './world.ts';
import { getShared } from './shared.ts';
import { Sim, ORIGIN_BUS, ORIGIN_CAMP, ORIGIN_TRAIN, type SpawnSpec, type LogEntry } from './sim.ts';
import { SCENARIO_INDEX, type Scenario } from './scenarios.ts';
import { FixedPlan, AIController } from './controller.ts';

export const DT = 0.1;
export const TRAIN_EVERY = 150;
export const TRAIN_LOAD = 230;
export const TRAIN_UNLOAD = 40;
const BUS_RATE = 1.15;   // people / s at load 1
const CAMP_RATE = 1.15;

// pilgrim clothing palette weights (saffron, white, marigold, pink, red, green, blue, maroon, yellow, lilac)
const COLOR_W = [0.2, 0.18, 0.12, 0.1, 0.1, 0.06, 0.07, 0.07, 0.06, 0.04];

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** offset: metres the train is displaced east (+) or west (-) of its platform stop; null when away. */
export interface TrainState { offset: number | null; doorsOpen: boolean }

export class Engine {
  readonly scenario: Scenario;
  sims: Sim[] = [];
  t = 0;              // scenario time (s); negative during warm-up
  private rng: () => number;
  private busAcc = 0;
  private campAcc = 0;
  private trainQueue = 0; // people still to step off the current train
  private trainRate = 0;
  private nextTrain = 0;
  lastTrainArrival = -1e9;
  private fired = new Set<string>();
  log: LogEntry[] = [];
  readonly seed: number;

  constructor(scenarioId: string, seed = 7) {
    this.scenario = SCENARIO_INDEX[scenarioId] ?? SCENARIO_INDEX.normal;
    this.seed = seed;
    this.rng = mulberry32(seed * 7919 + 13);
  }

  /** Fill the town (fixed plan, base load), then clone it so both plans start identical. */
  warmup(seconds = 420, onProgress?: (p: number) => void) {
    this.beginWarmup(seconds);
    while (!this.warmupChunk(200)) onProgress?.(this.warmupProgress);
    onProgress?.(1);
  }

  private warmSteps = 0;
  private warmDone = 0;
  get warmupProgress() { return this.warmSteps ? this.warmDone / this.warmSteps : 1; }

  beginWarmup(seconds = 420) {
    const s0 = new Sim(getShared(), 'fixed', 0, this.seed);
    this.sims = [s0];
    this.t = -seconds;
    this.nextTrain = -seconds + 5;
    this.warmSteps = Math.round(seconds / DT);
    this.warmDone = 0;
  }

  /** Advance the warm-up by up to n steps; returns true (and forks the two plans) when finished. */
  warmupChunk(n: number): boolean {
    const s0 = this.sims[0];
    for (let k = 0; k < n && this.warmDone < this.warmSteps; k++, this.warmDone++) {
      this.arrivals(DT, true);
      s0.step(DT);
      this.t += DT;
    }
    if (this.warmDone < this.warmSteps) return false;
    this.t = 0;
    const s1 = s0.clone('ai', 1, this.seed + 1);
    s0.resetMetrics();
    s1.resetMetrics();
    s0.controller = new FixedPlan();
    s1.controller = new AIController(this.scenario);
    this.sims = [s0, s1];
    return true;
  }

  step() {
    this.events();
    this.arrivals(DT, false);
    for (const s of this.sims) s.step(DT);
    this.t += DT;
  }

  get finished() { return this.t >= this.scenario.duration; }

  load(t: number) { return t < 0 ? this.scenario.baseLoad : this.scenario.load(t); }

  trainState(t = this.t): TrainState {
    const since = t - this.lastTrainArrival;
    if (since >= 0 && since < 60) return { offset: 0, doorsOpen: since > 2 && since < 50 };
    if (since >= 60 && since < 75) { const u = (since - 60) / 15; return { offset: -u * u * 260, doorsOpen: false }; }
    const tt = this.nextTrain - t;
    if (tt >= 0 && tt < 12) { const u = tt / 12; return { offset: u * u * 260, doorsOpen: false }; }
    return { offset: null, doorsOpen: false };
  }

  private arrivals(dt: number, warm: boolean) {
    const m = this.load(this.t);
    // trains
    if (this.t >= this.nextTrain) {
      this.lastTrainArrival = this.t;
      this.nextTrain += TRAIN_EVERY;
      this.trainQueue += Math.round(TRAIN_LOAD * m);
      this.trainRate = this.trainQueue / TRAIN_UNLOAD;
    }
    if (this.trainQueue > 0) {
      const sinceArr = this.t - this.lastTrainArrival;
      if (sinceArr > 3) {
        const n = this.poissonish(this.trainRate * dt);
        for (let k = 0; k < n && this.trainQueue > 0; k++, this.trainQueue--) this.emit(ORIGIN_TRAIN, warm);
      }
    }
    this.busAcc += BUS_RATE * m * dt;
    while (this.busAcc >= 1) { this.busAcc--; this.emit(ORIGIN_BUS, warm); }
    this.campAcc += CAMP_RATE * m * dt;
    while (this.campAcc >= 1) { this.campAcc--; this.emit(ORIGIN_CAMP, warm); }
  }

  private poissonish(mean: number) {
    let n = Math.floor(mean);
    if (this.rng() < mean - n) n++;
    return n;
  }

  private emit(origin: number, warm: boolean) {
    const sh = getShared();
    const r = this.rng;
    const cells = origin === ORIGIN_TRAIN ? sh.spawnCells.train : origin === ORIGIN_BUS ? sh.spawnCells.bus : sh.spawnCells.camp;
    const c = cells[(r() * cells.length) | 0];
    const weights = warm || this.t < 0 ? this.scenario.ghatWeights(-1) : this.scenario.ghatWeights(this.t);
    let u = r(), ghat = 4;
    for (let g = 0, acc = 0; g < 5; g++) { acc += weights[g]; if (u <= acc) { ghat = g; break; } }
    const temple = r() < 0.4;
    const home = origin === ORIGIN_TRAIN ? D_STATION : origin === ORIGIN_BUS ? D_BUS : D_CAMP;
    const plan = temple ? [ghat, D_TEMPLE, home] : [ghat, home];
    let g1 = 0;
    for (let k = 0; k < 4; k++) g1 += r();
    const v0 = Math.min(1.7, Math.max(0.8, 1.22 + (g1 - 2) * 0.3));
    let cu = r(), color = 0;
    for (let k = 0, acc = 0; k < COLOR_W.length; k++) { acc += COLOR_W[k]; if (cu <= acc) { color = k; break; } }
    const spec: SpawnSpec = {
      origin, x: (c % W) + 0.15 + r() * 0.7, z: ((c / W) | 0) + 0.15 + r() * 0.7, plan,
      v0, rad: 0.2 + r() * 0.05, comp: r(), color, u: r(), dwellK: r(), rainU: r(),
    };
    for (const s of this.sims) s.spawn(spec);
  }

  private events() {
    const sc = this.scenario;
    for (const e of sc.events) {
      const key = e.kind + e.t;
      if (this.t >= e.t && !this.fired.has(key)) {
        this.fired.add(key);
        this.globalLog('scenario', e.label);
        for (const s of this.sims) {
          if (e.kind === 'jam' && e.gate) s.jamGate(e.gate);
          if (e.kind === 'rumour') s.startRumour(e.x ?? 0, e.z ?? 0, e.radius ?? 25);
          if (e.kind === 'convoy') {
            s.setCordon(true);
            s.scenarioClosed[GATES.findIndex(g => g.id === 'E')] = true;
            s.mapDirty = true;
            s.templeClosed = true;
          }
          if (e.kind === 'rain') s.setRain(true);
        }
      }
      if (e.end !== undefined && this.t >= e.end && !this.fired.has(key + 'end')) {
        this.fired.add(key + 'end');
        const endLabel = e.kind === 'convoy' ? 'Cordon lifted' : e.kind === 'rain' ? 'Rain eases' : e.kind === 'surge' ? 'Muhurat ends' : 'Event ends';
        this.globalLog('scenario', endLabel);
        for (const s of this.sims) {
          if (e.kind === 'convoy') {
            s.setCordon(false);
            s.scenarioClosed[GATES.findIndex(g => g.id === 'E')] = false;
            s.mapDirty = true;
            s.templeClosed = false;
          }
          if (e.kind === 'rain') s.setRain(false);
        }
      }
    }
  }

  private globalLog(kind: LogEntry['kind'], text: string) {
    this.log.push({ t: this.t, sim: -1, kind, text });
  }
}
