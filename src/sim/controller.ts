// Crowd-management policies.
//  FixedPlan    — the printed barricade plan: gates never move, no announcements.
//  AIController — reads the (noisy) sensor picture every 2 s, forecasts density
//                 3 minutes ahead and acts: gates, one-way lanes, holding,
//                 PA announcements, rerouting and shelter balancing.

import { GATES, ZONES, ZONE_INDEX, D_GHAT0 } from './world.ts';
import { ST_WALK, type Controller, type Sim } from './sim.ts';
import type { Scenario } from './scenarios.ts';

const Z = ZONE_INDEX;
const GHAT_Z = [Z.ghat1, Z.ghat2, Z.ghat3, Z.ghat4, Z.ghat5];
const GHAT_NAME = ['Ghat 1', 'Ghat 2', 'Ghat 3', 'Ghat 4', 'Ghat 5'];
const APPROACH_GATE = ['F', 'F', 'B', 'J', 'D'];
const LANES = [Z.lane1, Z.lane2, Z.lane3, Z.bridge];

type Mode = 'normal' | 'oneway';

// One-way plan: pilgrims reach the river by the outer lanes (West Lane via Gate F,
// Diversion Lane via Gate D) and leave by the central ones (Bazaar Lane via Gate B,
// Temple Lane via Gate J). It removes counter-flow and pulls inbound demand away
// from Ram Kund at the same time.
const MODE_GATES: Record<Mode, Record<string, 'open' | 'closed' | 'in' | 'out'>> = {
  normal: { F: 'open', B: 'open', J: 'open', D: 'closed' },
  oneway: { F: 'in', B: 'out', J: 'out', D: 'in' },
};
const NOT_PRESSURE = new Set([ZONE_INDEX.hold, ZONE_INDEX.camp]);
const RAIN_SHELTER_ZONES = new Set([ZONE_INDEX.platform, ZONE_INDEX.temple, ZONE_INDEX.bus]);

function ghatScore(sim: Sim, g: number) {
  const zi = GHAT_Z[g];
  return Math.max(sim.zone[zi].density, sim.predict(zi, 3));
}

function bestAlternative(sim: Sim, g: number, c?: number) {
  let best = -1, bs = Infinity;
  for (let h = 0; h < 5; h++) {
    if (h === g) continue;
    const dist = c !== undefined ? sim.fieldsAct[D_GHAT0 + h].dist[c] : 0;
    if (!isFinite(dist)) continue;
    const s = ghatScore(sim, h) + dist / 140;
    if (s < bs) { bs = s; best = h; }
  }
  return best;
}

/** Advice text for the inspect card; shared by both plans (only the AI acts on it). */
export function adviceFor(sim: Sim, zi: number): string {
  const zd = ZONES[zi];
  const s = sim.zone[zi];
  const pred = sim.predict(zi, 3);
  const score = Math.max(s.density, pred);
  if (s.speed > 1.45 && s.count > 25) return 'PA calm message now · open all exits (Gates D, H, W) · stop inflow';
  const jammedHere = GATES.findIndex((g, gi) => sim.jammed[gi] && (g.zone === zd.id || (zd.id === 'roadW' && g.id === 'B')));
  if (jammedHere >= 0) return `Gate ${GATES[jammedHere].id} jammed: broadcast closure · divert via Gate D & West Lane`;
  switch (zd.kind) {
    case 'ghat': {
      const g = GHAT_Z.indexOf(zi);
      const alt = bestAlternative(sim, g);
      const altName = alt >= 0 ? GHAT_NAME[alt] : 'other ghats';
      if (score >= 3.2) return `Close Gate ${APPROACH_GATE[g]} (inbound), open Gate D · PA: reroute to ${altName} · hold new arrivals`;
      if (score >= 2.4) return `Signage: “${altName} less crowded” · prepare to meter Gate ${APPROACH_GATE[g]}`;
      return 'Normal — keep monitoring';
    }
    case 'lane':
    case 'bridge':
      if (s.cfi > 0.25 && s.density > 1.0) {
        if (zd.kind === 'bridge') return 'Counter-flow on bridge: pause camp departures, alternate direction in pulses';
        return `Counter-flow: make ${zd.short} one-way (Gate ${zd.gate ?? '—'} in-only), outbound via Temple Lane`;
      }
      if (score >= 3) return `Meter Gate ${zd.gate ?? 'upstream'} · hold inflow at Holding Ground`;
      return 'Normal — keep monitoring';
    case 'promenade':
      if (score >= 3) return 'Hold inflow at Holding Ground (open Gate H) · release in pulses';
      if (s.cfi > 0.3 && s.density > 1.2) return 'Separate flows: one-way lanes (B/F in, J/D out)';
      return 'Normal — keep monitoring';
    case 'plaza':
    case 'station':
      if (sim.cordon) return 'Road cordoned: open Gate W, send arrivals by Riverside Path';
      if (score >= 2.6) return 'Open Gate W (west exit) · meter platform exit · PA at concourse';
      return 'Normal — keep monitoring';
    case 'road':
      if (sim.cordon) return 'VIP cordon: divert via Gate W & Riverside Path · hold buses outside town';
      if (score >= 2.8) return 'Hold arrivals at Holding Ground · stagger Gate A';
      return 'Normal — keep monitoring';
    case 'hold':
      if (sim.heldCount > 0) return 'Release in pulses of ~80 when ghats < 2.5 p/m²';
      return 'Standby — open Gate H when ghats forecast > 3 p/m²';
    case 'temple':
      if (sim.templeClosed) return 'VIP darshan: public darshan paused — hold queue on Main Road side';
      if (score >= 3) return 'Pause entry at Gate E · speed up exit at Gate T';
      return 'Normal — keep monitoring';
    case 'bus':
      if (score >= 2.6 || sim.cordon) return 'Hold incoming buses at outer parking';
      return 'Normal — keep monitoring';
    default:
      if (score >= 3) return 'Reduce inflow upstream · PA advisory';
      return 'Normal — keep monitoring';
  }
}

export class FixedPlan implements Controller {
  tick() { /* the printed plan never changes */ }
  advice(sim: Sim, zone: number) { return adviceFor(sim, zone); }
}

export class AIController implements Controller {
  private scenario: Scenario;
  private acc = 0;
  private mode: Mode = 'normal';
  private calmSince = -1e9;
  private lastPA: Record<string, number> = {};
  private jamSeen: number[] = GATES.map(() => -1);
  private panicHandled = -1e9;
  private holdSince = -1e9;
  private lastRelease = -1e9;
  private sensor = new Float32Array(ZONES.length);
  private noiseSeed = 1;
  private releaseAcc = 0;
  private sheltersOpened = false;
  pressure = 0;
  actions = 0;

  constructor(scenario: Scenario) { this.scenario = scenario; }

  advice(sim: Sim, zone: number) { return adviceFor(sim, zone); }

  private noise() {
    // deterministic jitter emulating head-count error of CCTV / drone CV (±4 %)
    this.noiseSeed = (this.noiseSeed * 16807) % 2147483647;
    return (this.noiseSeed / 2147483647 - 0.5) * 0.08;
  }

  private pa(sim: Sim, key: string, text: string, every = 30, zone?: number) {
    if ((this.lastPA[key] ?? -1e9) + every > sim.t) return false;
    this.lastPA[key] = sim.t;
    sim.addLog('pa', text, zone);
    this.actions++;
    return true;
  }

  private gate(sim: Sim, id: string, mode: 'open' | 'closed' | 'in' | 'out', why: string) {
    if (sim.setGate(id, mode, why)) this.actions++;
  }

  tick(sim: Sim, dt: number) {
    this.acc += dt;
    // deferred camp / bus arrivals trickle back in when allowed (~1.5 people/s)
    if ((!sim.deferCamp || !sim.deferBus) && sim.deferred.length) {
      this.releaseAcc = Math.min(3, this.releaseAcc + dt * (this.pressure < 2.2 ? 1.5 : 0.4));
      for (let k = 0; k < sim.deferred.length && this.releaseAcc >= 1; k++) {
        const s = sim.deferred[k];
        if ((s.origin === 2 && !sim.deferCamp) || (s.origin === 1 && !sim.deferBus)) {
          sim.deferred.splice(k, 1); k--;
          sim.spawn(s, true);
          this.releaseAcc -= 1;
        }
      }
    }
    if (this.acc < 2) return;
    this.acc = 0;
    this.decide(sim);
  }

  private decide(sim: Sim) {
    const t = sim.t;
    for (let zi = 0; zi < ZONES.length; zi++) this.sensor[zi] = sim.zone[zi].density * (1 + this.noise());
    const rho = (id: string) => this.sensor[Z[id]];
    const scores = [0, 1, 2, 3, 4].map(g => Math.max(this.sensor[GHAT_Z[g]], sim.predict(GHAT_Z[g], 3)));
    const maxGhat = Math.max(...scores);
    const laneMax = Math.max(rho('lane1'), rho('lane2'), rho('lane3'), rho('bridge'), rho('lane0'));

    // 1. dynamic signage — advisory ghat weights for new arrivals
    for (let g = 0; g < 5; g++) sim.ghatAdvice[g] = Math.min(1, Math.max(0.06, 1 - (scores[g] - 1.8) / 1.3));

    // 2. PA reroute of pilgrims still far from an overloaded ghat
    for (let g = 0; g < 5; g++) {
      if (scores[g] < 2.6) continue;
      let moved = 0;
      const field = sim.fieldsAct[D_GHAT0 + g];
      const counts = [0, 0, 0, 0, 0];
      for (let i = 0; i < sim.hi; i++) {
        if (!sim.alive[i] || sim.state[i] !== ST_WALK || sim.dest(i) !== g || sim.flags[i] & 2) continue;
        const c = sim.cellOf[i];
        if (field.dist[c] < 30 || sim.comp[i] > 0.72) continue;
        const alt = bestAlternative(sim, g, c);
        if (alt < 0 || scores[alt] > scores[g] - 0.6) continue;
        sim.setDest(i, alt);
        sim.flags[i] |= 2;
        counts[alt]++;
        moved++;
      }
      if (moved > 15) {
        const top = counts.indexOf(Math.max(...counts));
        this.pa(sim, 'reroute' + g,
          `PA: “${GHAT_NAME[g]} is full — please use ${GHAT_NAME[top]}” · ${moved} pilgrims redirected`, 25, GHAT_Z[g]);
      }
    }

    // 3. lane plan: two-way → one-way loop when flows start to clash or Ram Kund overloads
    const cf = LANES.some(zi => sim.zone[zi].cfi > 0.3 && this.sensor[zi] > 1.5);
    const overload = scores[2] > 2.8 || rho('promC') > 2.5 || maxGhat > 3.0;
    let want: Mode = this.mode;
    if (cf || overload) { want = 'oneway'; this.calmSince = -1; }
    else if (this.mode === 'oneway') {
      if (laneMax < 1.0 && maxGhat < 2.0) { if (this.calmSince < 0) this.calmSince = t; } else this.calmSince = -1;
      if (this.calmSince > 0 && t - this.calmSince > 150) want = 'normal';
    }
    if (want !== this.mode) {
      this.mode = want;
      const why = want === 'oneway'
        ? (overload ? 'Ram Kund forecast critical — close Bazaar Lane inbound, open diversion' : 'counter-flow — separate inbound and outbound lanes')
        : 'flows normal again';
      for (const [id, m] of Object.entries(MODE_GATES[want])) this.gate(sim, id, m, why);
      if (want === 'oneway') this.pa(sim, 'loop', 'PA: “To the ghats by West Lane or Diversion Lane (Gate D). Return by Bazaar Lane or Temple Lane.”', 20);
    }
    if (overload && this.mode === 'oneway') {
      this.pa(sim, 'surge', this.scenario.id === 'snan'
        ? 'PA: “Ram Kund is full. All ghats are equally sacred at this muhurat — please follow volunteers to Ghats 1, 4 and 5.”'
        : 'PA: “Ram Kund is crowded — Ghats 1, 4 and 5 have space. Please follow the volunteers.”', 60, Z.ghat3);
    }

    // 4. holding ground: meter inflow when anything downstream is saturating
    let pressure = 0;
    for (let zi = 0; zi < ZONES.length; zi++) {
      if (NOT_PRESSURE.has(zi) || sim.zone[zi].count < 30) continue;
      if (sim.rain && RAIN_SHELTER_ZONES.has(zi)) continue;
      const v = Math.max(this.sensor[zi], Math.min(this.sensor[zi] + 0.8, sim.predict(zi, 2)));
      if (v > pressure) pressure = v;
    }
    this.pressure = pressure;
    if (!sim.holdActive && pressure > 2.6) {
      sim.holdActive = true;
      sim.deferCamp = true;
      this.holdSince = t;
      this.gate(sim, 'H', 'open', 'holding ground in use');
      this.pa(sim, 'hold', 'PA: “Pilgrims arriving by train and bus — please wait at the Holding Ground; you will be released in batches”', 30, Z.hold);
      sim.addLog('hold', 'Holding mode ON · camp departures paused (bridge metering)');
    } else if (sim.holdActive && pressure < 2.0 && t - this.holdSince > 60) {
      sim.holdActive = false;
      sim.deferCamp = false;
      sim.addLog('hold', 'Holding mode OFF · releasing in batches');
    }
    if (sim.heldCount > 0 && t - this.lastRelease >= 10) {
      const n = pressure < 1.8 ? 90 : pressure < 2.3 ? 45 : 0;
      if (n > 0) {
        const r = sim.releaseHeld(n);
        if (r > 0) { this.lastRelease = t; if (r >= 25) sim.addLog('hold', `Released ${r} from Holding Ground`, Z.hold); }
      }
    }

    // 5. jammed gates: detect from flow sensors, broadcast and divert
    GATES.forEach((g, gi) => {
      if (!sim.jammed[gi]) return;
      if (this.jamSeen[gi] < 0) this.jamSeen[gi] = t;
      if (!sim.publicJam[gi] && t - this.jamSeen[gi] >= 12) {
        sim.announceJams();
        sim.broadcastAll = true;
        for (let i = 0; i < sim.hi; i++) if (sim.alive[i]) sim.informed[i] = 1;
        sim.addLog('alert', `${g.name}: zero flow with crowd waiting — gate jammed`);
        this.gate(sim, 'D', 'in', `diversion for jammed Gate ${g.id}`);
        this.gate(sim, 'J', 'out', 'outbound relief');
        this.gate(sim, 'H', 'open', 'overflow');
        this.pa(sim, 'jam' + g.id, `PA: “Gate ${g.id} is closed. Please use West Lane or the Diversion Lane (Gate D)”`, 30);
        if (this.mode === 'normal') this.mode = 'oneway';
      }
    });

    // 6. panic: sudden running picked up by the cameras
    let running = -1;
    for (let zi = 0; zi < ZONES.length; zi++) {
      if (sim.zone[zi].speed > 1.45 && sim.zone[zi].count > 25) { running = zi; break; }
    }
    if (running >= 0 && t - this.panicHandled > 60) {
      this.panicHandled = t;
      sim.panicTau = 8;
      sim.panicSusc = 0.15;
      sim.addLog('alert', `Sudden running detected in ${ZONES[running].short}`, running);
      this.pa(sim, 'calm', 'PA (Hindi · Marathi · English): “The bridge is safe. Do not run. Stand still and follow the volunteers.”', 15, running);
      this.gate(sim, 'D', 'open', 'emergency egress');
      this.gate(sim, 'H', 'open', 'emergency egress');
      this.gate(sim, 'W', 'open', 'emergency egress');
      this.gate(sim, 'J', 'open', 'emergency egress');
      if (!sim.holdActive) { sim.holdActive = true; sim.deferCamp = true; this.holdSince = t; sim.addLog('hold', 'Inflow paused during incident'); }
    }

    // 7. weather: open covered holding ground, balance shelters
    const rain = this.scenario.events.find(e => e.kind === 'rain');
    if (rain && t >= rain.t - 30 && t < (rain.end ?? 1e9)) {
      if (t < rain.t) {
        this.gate(sim, 'H', 'open', 'IMD nowcast: heavy rain in 30 s — tents open as shelter');
        this.pa(sim, 'rainwarn', 'PA: “Rain expected. Covered shelters are open at the Holding Ground, the camp and the bus shed — do not crowd the station.”', 60);
      }
      if (t >= rain.t - 30) {
        if (sim.shelterFull[3] && !this.sheltersOpened) {
          this.sheltersOpened = true;
          sim.setShelterFull(3, false);
          sim.setShelterFull(4, false);
          sim.addLog('info', 'Holding Ground tents and camp pandals opened as public shelter');
        }
      }
      const parts: [number, number][] = [[0, Z.platform], [1, Z.temple], [2, Z.bus], [3, Z.hold], [4, Z.camp]];
      for (const [p, zi] of parts) {
        const d = this.sensor[zi];
        if (d > 2.2 && !sim.shelterFull[p]) { sim.setShelterFull(p, true); this.pa(sim, 'full' + p, `Shelter at ${ZONES[zi].short} full — signage redirects to other shelters`, 30, zi); }
        else if (d < 1.4 && sim.shelterFull[p] && this.sheltersOpened) sim.setShelterFull(p, false);
      }
    }

    // 8. VIP convoy: known movement plan — open the west exit and hold buses before the cordon
    const convoy = this.scenario.events.find(e => e.kind === 'convoy');
    if (convoy) {
      if (t >= convoy.t - 40 && t < (convoy.end ?? 0)) {
        this.gate(sim, 'W', 'open', 'VIP movement — west exit for station crowd');
        if (!sim.deferBus) { sim.deferBus = true; sim.addLog('hold', 'Incoming buses held at outer parking during cordon'); }
        this.pa(sim, 'convoy', 'PA at station: “Main Road closed for VIP movement. Exit by Gate W and take the Riverside Path to the ghats.”', 60, Z.forecourt);
        if (t >= convoy.t) sim.announceCordon();
      } else if (t >= (convoy.end ?? 0) && sim.deferBus) {
        sim.deferBus = false;
        sim.addLog('hold', 'Buses released');
      }
    }

    // 9. station forecourt protection
    if (rho('forecourt') > 2.4) this.gate(sim, 'W', 'open', 'forecourt crowding');

    // keep the holding gate open while anyone is held
    if (sim.heldCount === 0 && !sim.holdActive && sim.gateMode[GATES.findIndex(g => g.id === 'H')] === 'open' && !rain && t - this.panicHandled > 120) {
      this.gate(sim, 'H', 'closed', 'holding ground empty');
    }
  }
}
