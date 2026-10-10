// Scenario timelines. Times are seconds from the start of the scenario.

export type EventKind = 'surge' | 'jam' | 'rumour' | 'convoy' | 'rain' | 'note';

export interface ScenarioEvent {
  t: number;
  end?: number;
  kind: EventKind;
  label: string;
  gate?: string;          // jam
  x?: number; z?: number; // rumour origin
  radius?: number;
}

export interface Scenario {
  id: string;
  name: string;
  tagline: string;
  description: string;
  clockStart: number;     // seconds after midnight shown on the scenario clock
  duration: number;       // seconds
  baseLoad: number;       // arrival multiplier before / outside events
  load: (t: number) => number;
  ghatWeights: (t: number) => number[];
  events: ScenarioEvent[];
}

const BASE_WEIGHTS = [0.13, 0.2, 0.4, 0.16, 0.11];
const smooth = (a: number, b: number, t: number) => {
  const x = Math.min(1, Math.max(0, (t - a) / (b - a)));
  return x * x * (3 - 2 * x);
};

export const SCENARIOS: Scenario[] = [
  {
    id: 'normal',
    name: 'Ordinary day',
    tagline: 'Steady pilgrim traffic, trains every 2½ minutes',
    description: 'A busy but ordinary morning. Use it as the baseline: both plans should stay comfortably below 2 p/m² and the AI should mostly leave things alone.',
    clockStart: 8 * 3600,
    duration: 600,
    baseLoad: 1.0,
    load: () => 1.0,
    ghatWeights: () => BASE_WEIGHTS,
    events: [],
  },
  {
    id: 'snan',
    name: 'Amrit Snan bathing hour',
    tagline: 'The auspicious muhurat — everyone wants Ram Kund at once',
    description: 'At the auspicious hour the inflow roughly triples and two thirds of pilgrims head for Ram Kund (Ghat 3). This is the classic Kumbh surge.',
    clockStart: 3 * 3600 + 50 * 60,
    duration: 720,
    baseLoad: 1.25,
    load: t => 1.25 + 2.35 * smooth(40, 130, t) - 1.9 * smooth(430, 560, t),
    ghatWeights: t => {
      const k = smooth(30, 100, t) * (1 - smooth(440, 600, t));
      const g3 = 0.4 + 0.27 * k;
      const rest = (1 - g3) / (1 - 0.4);
      return BASE_WEIGHTS.map((w, i) => (i === 2 ? g3 : w * rest));
    },
    events: [
      { t: 40, end: 480, kind: 'surge', label: 'Muhurat begins · inflow ×3' },
    ],
  },
  {
    id: 'jam',
    name: 'Gate jammed shut',
    tagline: 'Gate B on Bazaar Lane jams closed under load',
    description: 'Bazaar Lane is the main artery to and from Ram Kund. Its gate jams shut. Nobody upstream knows until they reach it.',
    clockStart: 9 * 3600 + 58 * 60,
    duration: 660,
    baseLoad: 1.7,
    load: () => 1.7,
    ghatWeights: () => [0.12, 0.18, 0.46, 0.14, 0.1],
    events: [
      { t: 90, kind: 'jam', gate: 'B', label: 'Gate B jams shut' },
    ],
  },
  {
    id: 'rumour',
    name: 'Rumour & sudden run',
    tagline: '“The bridge is collapsing!” — panic spreads from the footbridge',
    description: 'During the evening aarti a rumour that the footbridge is giving way starts a run. Panic spreads person to person; people sprint for open ground through narrow lanes.',
    clockStart: 18 * 3600 + 25 * 60,
    duration: 660,
    baseLoad: 1.8,
    load: () => 1.8,
    ghatWeights: () => [0.12, 0.2, 0.42, 0.16, 0.1],
    events: [
      { t: 150, kind: 'rumour', x: 149, z: 131, radius: 26, label: 'Rumour at the footbridge' },
    ],
  },
  {
    id: 'convoy',
    name: 'VIP convoy',
    tagline: 'A VIP motorcade cordons the Main Road for darshan',
    description: 'A VIP convoy drives to the temple. Police cordon the Main Road for five minutes and public darshan pauses. Station and bus-stand crowds lose their route to the ghats.',
    clockStart: 10 * 3600 + 55 * 60,
    duration: 660,
    baseLoad: 1.6,
    load: () => 1.6,
    ghatWeights: () => BASE_WEIGHTS,
    events: [
      { t: 60, end: 360, kind: 'convoy', label: 'Main Road cordoned for VIP convoy' },
    ],
  },
  {
    id: 'rain',
    name: 'Sudden downpour',
    tagline: 'A cloudburst sends thousands running for cover',
    description: 'Heavy rain arrives. Walking slows on wet stone and most of the crowd heads for the nearest roof — the station concourse, the temple cloister, the bus shed.',
    clockStart: 15 * 3600 + 10 * 60,
    duration: 660,
    baseLoad: 1.85,
    load: () => 1.85,
    ghatWeights: () => BASE_WEIGHTS,
    events: [
      { t: 120, end: 480, kind: 'rain', label: 'Cloudburst' },
    ],
  },
];

export const SCENARIO_INDEX: Record<string, Scenario> = Object.fromEntries(SCENARIOS.map(s => [s.id, s]));

export function activeEvent(s: Scenario, kind: EventKind, t: number): ScenarioEvent | undefined {
  return s.events.find(e => e.kind === kind && t >= e.t && (e.end === undefined || t < e.end));
}

export const CONVOY_ROUTE = { xStart: 284, xStop: 136, z: 58, speed: 9 };
export const CORDON = { x0: 40, x1: 280, z0: 53, z1: 63 };
