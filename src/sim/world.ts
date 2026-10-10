// The temple-town precinct: geometry, zones, gates and destinations.
// Everything is laid out on a 1 m grid. x runs east, z runs south (river side).
// The same description drives the simulation grid and the clay diorama.

export const W = 280;
export const H = 210;
export const N = W * H;

export interface Rect { x0: number; z0: number; x1: number; z1: number }
const R = (x0: number, z0: number, x1: number, z1: number): Rect => ({ x0, z0, x1, z1 });

// Cell kinds
export const FREE = 0;
export const WALL = 1;
export const WATER = 2;
export const BATH = 3; // shallow bathing water, walkable but slow

export type GateMode = 'open' | 'closed' | 'in' | 'out';

export interface GateDef {
  id: string;
  name: string;
  rect: Rect;          // gate cells
  fixed: GateMode;     // state in the printed (fixed) barricade plan
  locked?: boolean;    // never changed by the controller (temple one-way gates)
  zone: string;        // zone the gate feeds
  axis: 'x' | 'z';     // gate line runs along this axis
}

export interface ZoneDef {
  id: string;
  name: string;
  short: string;
  rects: Rect[];
  kind: 'station' | 'road' | 'lane' | 'alley' | 'temple' | 'plaza' | 'promenade' | 'ghat' | 'bridge' | 'camp' | 'hold' | 'bus';
  cap: number;         // safe density used for capacity (p/m2)
  gate?: string;       // gate controlling the lane
}

// Destination classes decide which one-way gates a route may use.
export type DestClass = 'in' | 'out' | 'neutral';
export interface DestDef { id: string; name: string; cls: DestClass; rects: Rect[]; zone?: string }

// ---------------------------------------------------------------------------
// Walkable areas (carved out of solid town fabric)
export const AREAS = {
  platform: R(18, 14, 122, 20),
  concourse: R(58, 20, 82, 34),
  forecourt: R(26, 34, 114, 53),
  bypassPassage: R(9, 40, 26, 46),
  bypassNorth: R(4, 40, 9, 53),
  road: R(0, 53, 280, 63),
  busStand: R(196, 8, 276, 53),
  lane0: R(4, 63, 9, 124),
  lane1: R(20, 63, 25, 124),
  lane2: R(88, 63, 94, 124),
  lane3: R(182, 63, 187, 124),
  lane4: R(236, 63, 242, 124),
  alleyW: R(4, 92, 94, 96),
  alleyE: R(182, 92, 242, 96),
  templeEntry: R(125, 63, 131, 68),
  templeCourt: R(112, 68, 168, 116),
  templeExit: R(150, 116, 156, 124),
  hold: R(250, 63, 278, 120),
  promenade: R(4, 124, 250, 134),
  bridge: R(146, 134, 152, 176),
  bank: R(60, 176, 275, 184),
  camp: R(100, 184, 275, 208),
};

export const SHRINE = R(132, 86, 148, 102);
export const STATION_BUILDING = R(30, 20, 110, 34);
export const TRACKS = R(0, 4, 160, 14);
export const RIVER = R(0, 150, 280, 176);

export const GHATS: Rect[] = [
  R(12, 134, 42, 150),
  R(52, 134, 82, 150),
  R(98, 134, 140, 150),
  R(160, 134, 190, 150),
  R(205, 134, 240, 150),
];
export const STEP_END = 144; // steps from z=134 to 144, bathing strip 144..150

// Fence lines (bamboo barricades). Gate openings are cut into them.
export const FENCES: Rect[] = [
  R(26, 52, 114, 53),   // forecourt / road
  R(196, 52, 276, 53),  // bus stand / road
  R(250, 64, 278, 65),  // holding ground / road
];

// Tents block movement inside the camp
export const TENTS: Rect[] = (() => {
  const out: Rect[] = [];
  for (let x = 104; x + 5 <= 272; x += 9) {
    for (const z of [187, 194, 201]) out.push(R(x, z, x + 5, z + 4));
  }
  return out;
})();

// Parked buses inside the bus stand
export const BUSES: Rect[] = [
  R(202, 30, 214, 33), R(218, 30, 230, 33), R(234, 30, 246, 33), R(250, 30, 262, 33),
  R(202, 40, 214, 43), R(250, 40, 262, 43),
];

export const GATES: GateDef[] = [
  { id: 'A', name: 'Gate A · Station', rect: R(64, 52, 76, 53), fixed: 'open', zone: 'forecourt', axis: 'x' },
  { id: 'W', name: 'Gate W · West exit', rect: R(20, 40, 21, 46), fixed: 'closed', zone: 'bypass', axis: 'z' },
  { id: 'G', name: 'Gate G · Bus stand', rect: R(224, 52, 236, 53), fixed: 'open', zone: 'bus', axis: 'x' },
  { id: 'F', name: 'Gate F · West Lane', rect: R(20, 63, 25, 64), fixed: 'open', zone: 'lane1', axis: 'x' },
  { id: 'B', name: 'Gate B · Bazaar Lane', rect: R(88, 63, 94, 64), fixed: 'open', zone: 'lane2', axis: 'x' },
  { id: 'E', name: 'Gate E · Temple in', rect: R(125, 66, 131, 67), fixed: 'in', locked: true, zone: 'temple', axis: 'x' },
  { id: 'T', name: 'Gate T · Temple out', rect: R(150, 118, 156, 119), fixed: 'out', locked: true, zone: 'temple', axis: 'x' },
  { id: 'J', name: 'Gate J · Temple Lane', rect: R(182, 63, 187, 64), fixed: 'open', zone: 'lane3', axis: 'x' },
  { id: 'D', name: 'Gate D · Diversion', rect: R(236, 63, 242, 64), fixed: 'closed', zone: 'lane4', axis: 'x' },
  { id: 'H', name: 'Gate H · Holding', rect: R(258, 64, 270, 65), fixed: 'closed', zone: 'hold', axis: 'x' },
  { id: 'C', name: 'Gate C · Bridge', rect: R(146, 135, 152, 136), fixed: 'open', zone: 'bridge', axis: 'x' },
];
export const GATE_INDEX: Record<string, number> = Object.fromEntries(GATES.map((g, i) => [g.id, i]));

// Zones are matched in order; the first rect containing a cell wins.
export const ZONES: ZoneDef[] = [
  { id: 'platform', name: 'Station Platform', short: 'Platform', rects: [AREAS.platform, AREAS.concourse], kind: 'station', cap: 2.5 },
  { id: 'forecourt', name: 'Station Forecourt', short: 'Forecourt', rects: [AREAS.forecourt], kind: 'plaza', cap: 2.5 },
  { id: 'bypass', name: 'West Exit Path', short: 'West Exit', rects: [R(4, 34, 26, 53)], kind: 'lane', cap: 2.0 },
  { id: 'bus', name: 'Bus Stand', short: 'Bus Stand', rects: [AREAS.busStand], kind: 'bus', cap: 2.5 },
  { id: 'roadW', name: 'Main Road (west)', short: 'Road W', rects: [R(0, 53, 140, 63)], kind: 'road', cap: 2.0 },
  { id: 'roadE', name: 'Main Road (east)', short: 'Road E', rects: [R(140, 53, 280, 63)], kind: 'road', cap: 2.0 },
  { id: 'lane0', name: 'Riverside Path', short: 'Riverside', rects: [AREAS.lane0], kind: 'lane', cap: 2.0 },
  { id: 'lane1', name: 'West Lane', short: 'West Lane', rects: [AREAS.lane1], kind: 'lane', cap: 2.0, gate: 'F' },
  { id: 'lane2', name: 'Bazaar Lane', short: 'Bazaar Lane', rects: [AREAS.lane2], kind: 'lane', cap: 2.0, gate: 'B' },
  { id: 'lane3', name: 'Temple Lane', short: 'Temple Lane', rects: [AREAS.lane3], kind: 'lane', cap: 2.0, gate: 'J' },
  { id: 'lane4', name: 'Diversion Lane', short: 'Diversion', rects: [AREAS.lane4], kind: 'lane', cap: 2.0, gate: 'D' },
  { id: 'alleyW', name: 'West Cross Alley', short: 'W Alley', rects: [AREAS.alleyW], kind: 'alley', cap: 2.0 },
  { id: 'alleyE', name: 'East Cross Alley', short: 'E Alley', rects: [AREAS.alleyE], kind: 'alley', cap: 2.0 },
  { id: 'temple', name: 'Temple Courtyard', short: 'Temple', rects: [R(110, 63, 170, 124)], kind: 'temple', cap: 2.5 },
  { id: 'hold', name: 'Holding Ground', short: 'Holding', rects: [AREAS.hold], kind: 'hold', cap: 3.0 },
  { id: 'promW', name: 'Promenade (west)', short: 'Prom W', rects: [R(4, 124, 96, 134)], kind: 'promenade', cap: 2.0 },
  { id: 'promC', name: 'Promenade (central)', short: 'Prom C', rects: [R(96, 124, 158, 134)], kind: 'promenade', cap: 2.0 },
  { id: 'promE', name: 'Promenade (east)', short: 'Prom E', rects: [R(158, 124, 250, 134)], kind: 'promenade', cap: 2.0 },
  { id: 'ghat1', name: 'Ghat 1', short: 'Ghat 1', rects: [GHATS[0]], kind: 'ghat', cap: 2.5 },
  { id: 'ghat2', name: 'Ghat 2', short: 'Ghat 2', rects: [GHATS[1]], kind: 'ghat', cap: 2.5 },
  { id: 'ghat3', name: 'Ghat 3 · Ram Kund', short: 'Ghat 3', rects: [GHATS[2]], kind: 'ghat', cap: 2.5 },
  { id: 'ghat4', name: 'Ghat 4', short: 'Ghat 4', rects: [GHATS[3]], kind: 'ghat', cap: 2.5 },
  { id: 'ghat5', name: 'Ghat 5', short: 'Ghat 5', rects: [GHATS[4]], kind: 'ghat', cap: 2.5 },
  { id: 'bridge', name: 'Footbridge', short: 'Bridge', rects: [AREAS.bridge], kind: 'bridge', cap: 2.0, gate: 'C' },
  { id: 'bank', name: 'South Bank Road', short: 'Bank', rects: [AREAS.bank], kind: 'road', cap: 2.0 },
  { id: 'camp', name: 'Sadhugram Camp', short: 'Camp', rects: [AREAS.camp], kind: 'camp', cap: 2.5 },
];
export const ZONE_INDEX: Record<string, number> = Object.fromEntries(ZONES.map((z, i) => [z.id, i]));
export const NO_ZONE = 255;

const bathRect = (g: Rect): Rect => R(g.x0 + 1, STEP_END, g.x1 - 1, 150);

// Destinations; order matters (indices are stored per agent)
export const DESTS: DestDef[] = [
  { id: 'g1', name: 'Ghat 1', cls: 'in', rects: [bathRect(GHATS[0])], zone: 'ghat1' },
  { id: 'g2', name: 'Ghat 2', cls: 'in', rects: [bathRect(GHATS[1])], zone: 'ghat2' },
  { id: 'g3', name: 'Ghat 3', cls: 'in', rects: [bathRect(GHATS[2])], zone: 'ghat3' },
  { id: 'g4', name: 'Ghat 4', cls: 'in', rects: [bathRect(GHATS[3])], zone: 'ghat4' },
  { id: 'g5', name: 'Ghat 5', cls: 'in', rects: [bathRect(GHATS[4])], zone: 'ghat5' },
  { id: 'temple', name: 'Temple darshan', cls: 'in', rects: [R(126, 74, 154, 84)], zone: 'temple' },
  { id: 'station', name: 'Station', cls: 'out', rects: [AREAS.platform] },
  { id: 'busstop', name: 'Bus stand', cls: 'out', rects: [R(198, 10, 274, 24)] },
  { id: 'campdest', name: 'Camp', cls: 'out', rects: [R(100, 186, 275, 208)] },
  { id: 'holddest', name: 'Holding ground', cls: 'neutral', rects: [R(252, 72, 277, 118)], zone: 'hold' },
  { id: 'shelter', name: 'Shelter', cls: 'neutral', rects: [AREAS.concourse, R(114, 108, 168, 116), R(198, 8, 274, 14), R(252, 96, 277, 118), R(100, 186, 275, 208)] },
  { id: 'escape', name: 'Open ground', cls: 'neutral', rects: [AREAS.forecourt, AREAS.road, R(252, 66, 277, 118), AREAS.camp, AREAS.busStand] },
];
export const D_GHAT0 = 0;
export const D_TEMPLE = 5;
export const D_STATION = 6;
export const D_BUS = 7;
export const D_CAMP = 8;
export const D_HOLD = 9;
export const D_SHELTER = 10;
export const D_ESCAPE = 11;
export const NUM_DESTS = DESTS.length;
export const SHELTER_PARTS = ['concourse', 'temple', 'busshed', 'holdtents', 'camp'];

// Height of the ground for rendering & bathing (y up).
export function groundHeight(x: number, z: number): number {
  if (z >= 134 && z < 150) {
    for (const g of GHATS) {
      if (x >= g.x0 && x < g.x1) {
        if (z < STEP_END) return -Math.floor((z - 134) / 2) * 0.22 - 0.22;
        return -1.55;
      }
    }
    if (x >= AREAS.bridge.x0 && x < AREAS.bridge.x1) return 0.35;
  }
  if (z >= 150 && z < 176 && x >= AREAS.bridge.x0 && x < AREAS.bridge.x1) return 0.35;
  return 0;
}

export const inRect = (r: Rect, x: number, z: number) => x >= r.x0 && x < r.x1 && z >= r.z0 && z < r.z1;

// ---------------------------------------------------------------------------
// Rasterised world shared by both simulations

export interface WorldGrid {
  base: Uint8Array;        // FREE/WALL/WATER/BATH ignoring gates
  zone: Uint8Array;        // zone index per cell
  gateCell: Int8Array;     // gate index per cell or -1
  destMask: Uint8Array[];  // per destination: 1 if cell is a destination source
  shelterPart: Int8Array;  // which shelter part a cell belongs to (or -1)
  zoneArea: Float32Array;  // walkable m2 per zone
  zoneCenter: { x: number; z: number }[];
  height: Float32Array;
}

function fill(arr: Uint8Array | Int8Array, r: Rect, v: number) {
  for (let z = Math.max(0, r.z0); z < Math.min(H, r.z1); z++)
    for (let x = Math.max(0, r.x0); x < Math.min(W, r.x1); x++) arr[z * W + x] = v;
}

export function buildWorld(): WorldGrid {
  const base = new Uint8Array(N).fill(WALL);
  // river first, then carve walkable areas on top
  fill(base, RIVER, WATER);
  for (const a of Object.values(AREAS)) fill(base, a, FREE);
  for (const g of GHATS) {
    fill(base, R(g.x0, g.z0, g.x1, STEP_END), FREE);
    fill(base, R(g.x0, STEP_END, g.x1, 150), BATH);
  }
  fill(base, SHRINE, WALL);
  for (const f of FENCES) fill(base, f, WALL);
  for (const t of TENTS) fill(base, t, WALL);
  for (const b of BUSES) fill(base, b, WALL);
  // gate openings are walkable in the base map
  const gateCell = new Int8Array(N).fill(-1);
  GATES.forEach((g, i) => {
    fill(base, g.rect, FREE);
    fill(gateCell, g.rect, i);
  });

  const zone = new Uint8Array(N).fill(NO_ZONE);
  for (let z = 0; z < H; z++) {
    for (let x = 0; x < W; x++) {
      const c = z * W + x;
      if (base[c] === WALL || base[c] === WATER) continue;
      for (let zi = 0; zi < ZONES.length; zi++) {
        if (ZONES[zi].rects.some(r => inRect(r, x, z))) { zone[c] = zi; break; }
      }
    }
  }

  const destMask = DESTS.map(d => {
    const m = new Uint8Array(N);
    for (const r of d.rects) fill(m, r, 1);
    for (let c = 0; c < N; c++) if (base[c] === WALL || base[c] === WATER) m[c] = 0;
    return m;
  });

  const shelterPart = new Int8Array(N).fill(-1);
  DESTS[D_SHELTER].rects.forEach((r, i) => fill(shelterPart, r, i));

  const zoneArea = new Float32Array(ZONES.length);
  const sx = new Float64Array(ZONES.length), sz = new Float64Array(ZONES.length);
  for (let c = 0; c < N; c++) {
    const zi = zone[c];
    if (zi === NO_ZONE) continue;
    zoneArea[zi]++;
    sx[zi] += (c % W) + 0.5;
    sz[zi] += Math.floor(c / W) + 0.5;
  }
  const zoneCenter = ZONES.map((_, i) => ({ x: sx[i] / Math.max(1, zoneArea[i]), z: sz[i] / Math.max(1, zoneArea[i]) }));

  const height = new Float32Array(N);
  for (let z = 0; z < H; z++) for (let x = 0; x < W; x++) height[z * W + x] = groundHeight(x + 0.5, z + 0.5);

  return { base, zone, gateCell, destMask, shelterPart, zoneArea, zoneCenter, height };
}
