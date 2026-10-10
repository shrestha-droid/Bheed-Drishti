// The static clay diorama: a temple town on a river — ghats, lanes, bridge,
// station, bus stand, temple, camp. Built from the same map as the simulation.

import * as THREE from 'three';
import {
  W, H, WALL, FREE, BATH, AREAS, GHATS, STEP_END, SHRINE, STATION_BUILDING, TRACKS, FENCES, TENTS, BUSES, GATES,
  type Rect, type WorldGrid,
} from '../sim/world.ts';
import { Batch, SX, SZ, hash, clayMaterial } from './builder.ts';

export const PAL = {
  board: '#8a6a4c',
  land: '#e3cfab',
  riverbed: '#8f7c5e',
  road: '#b8a690',
  roadLine: '#f4eee2',
  lane: '#d9c29c',
  plaza: '#e2d3b8',
  platform: '#cdbfa9',
  yellow: '#f2c14e',
  court: '#ece1cc',
  grass: '#b7c58c',
  prom: '#ecd9b5',
  bank: '#e4cfa0',
  stone: '#d6c19b',
  step: '#e0cda9',
  temple: '#4f4746',
  templeLight: '#6a605c',
  wall: '#cdb48f',
  saffron: '#ff8c1a',
  gold: '#e0a526',
  bamboo: '#c9a35c',
  cream: '#f1dfc3',
  maroon: '#8c2f39',
  rail: '#7d7a78',
  ballast: '#a69d92',
  sleeper: '#7a5c45',
  busRed: '#c8352e',
  tree: ['#7fae6a', '#6a9c5a', '#93bd73', '#78a565'],
  trunk: '#8b6748',
  houses: ['#f4b6a6', '#f6d58e', '#a8d0e6', '#f7efe2', '#c9b6e4', '#f2b47a', '#b5dcb0', '#e8c5a0', '#f3e3c3', '#9fd3c7', '#f0a3a3'],
  awnings: ['#e4572e', '#f3a712', '#29a19c', '#d7263d', '#6a4c93', '#2e86ab', '#ff7f11'],
  field: '#b9cb85',
  field2: '#a9bf72',
  tent: ['#fbf4e6', '#ffb347', '#f6e3c0', '#ff9f43'],
};

export interface TownRefs {
  group: THREE.Group;
  clayMat: THREE.MeshStandardMaterial;
  lampMat: THREE.MeshStandardMaterial;
  waterMat: THREE.MeshStandardMaterial;
  waterTime: { value: number };
  lensDim: { value: number };
  speakers: THREE.Vector3[];
  cameras: THREE.Vector3[];
}

const isFree = (b: number) => b === FREE || b === BATH;

export function buildTown(world: WorldGrid): TownRefs {
  const lensDim = { value: 0 };
  const clayMat = clayMaterial(lensDim);
  const lampMat = new THREE.MeshStandardMaterial({ color: '#fff3c4', emissive: '#ffcf70', emissiveIntensity: 0.6, roughness: 0.6 });
  const group = new THREE.Group();
  const b = new Batch();
  const lamps = new Batch();
  lamps.ao = false;
  const speakers: THREE.Vector3[] = [];
  const cameras: THREE.Vector3[] = [];

  // ---------------------------------------------------------------- terrain
  b.box(-6, -6, W + 6, H + 6, -7, -2.6, PAL.board, 2.5, { ao: false });
  b.box(0, 0, W, 134, -2.6, 0, PAL.land, 0, { ao: false });
  b.box(0, 176, W, H, -2.6, 0, PAL.land, 0, { ao: false });
  b.box(0, 134, W, 176, -2.8, -2.6, PAL.riverbed, 0, { ao: false });
  // embankments between ghats and the stepped ghats themselves
  const ghatX = GHATS.map(g => [g.x0, g.x1]);
  const breaks = [0, ...ghatX.flat(), AREAS.bridge.x0, AREAS.bridge.x1, W].sort((a, c) => a - c);
  for (let k = 0; k < breaks.length - 1; k++) {
    const x0 = breaks[k], x1 = breaks[k + 1];
    if (x1 - x0 < 0.5) continue;
    const mid = (x0 + x1) / 2;
    const inGhat = GHATS.some(g => mid > g.x0 && mid < g.x1);
    const inBridge = mid > AREAS.bridge.x0 && mid < AREAS.bridge.x1;
    if (inGhat) {
      for (let s = 0; s < 5; s++) b.box(x0, 134 + 2 * s, x1, 136 + 2 * s, -2.6, -0.22 * (s + 1), PAL.step, 0, { ao: false });
      b.box(x0, STEP_END, x1, 150, -2.6, -1.55, PAL.riverbed, 0, { ao: false });
    } else if (!inBridge) {
      b.box(x0, 134, x1, 151, -2.6, 0.3, PAL.stone, 0.3);
      // little chhatri pavilions and parasols on the embankments
      if (x1 - x0 > 6) {
        const cx = mid, cz = 141;
        chhatri(b, cx, cz, x1 - x0 > 10 ? 1.3 : 1);
      } else if (x1 - x0 > 3) parasol(b, mid, 142, PAL.awnings[k % PAL.awnings.length]);
    }
  }
  // ghat parasols at the step edges (the classic Kumbh umbrellas)
  GHATS.forEach((g, gi) => {
    for (let x = g.x0 + 2; x < g.x1 - 1; x += 5.5) {
      if (hash(x * 3 + gi) < 0.55) parasol(b, x, 135.2, PAL.awnings[(gi + Math.floor(x)) % PAL.awnings.length], 0.8, -0.2);
    }
  });

  // ----------------------------------------------------------- path surfaces
  const surf = (r: Rect, c: string, y = 0.04) => b.box(r.x0, r.z0, r.x1, r.z1, -0.02, y, c, 0, { ao: false });
  surf(AREAS.road, PAL.road);
  for (let x = 2; x < W; x += 6) b.box(x, 57.8, x + 3, 58.2, 0.04, 0.06, PAL.roadLine, 0, { ao: false });
  // zebra crossings at lane mouths
  for (const ln of [AREAS.lane0, AREAS.lane1, AREAS.lane2, AREAS.lane3, AREAS.lane4]) {
    for (let x = ln.x0 + 0.3; x < ln.x1 - 0.3; x += 1.1) b.box(x, 59, x + 0.55, 62.6, 0.04, 0.065, PAL.roadLine, 0, { ao: false });
  }
  for (const k of ['lane0', 'lane1', 'lane2', 'lane3', 'lane4', 'alleyW', 'alleyE', 'bypassPassage', 'bypassNorth'] as const) surf(AREAS[k], PAL.lane);
  surf(AREAS.forecourt, PAL.plaza);
  surf(AREAS.platform, PAL.platform, 0.06);
  b.box(AREAS.platform.x0, 14, AREAS.platform.x1, 14.5, 0.06, 0.08, PAL.yellow, 0, { ao: false });
  surf(AREAS.concourse, '#eadfcd');
  surf(AREAS.busStand, '#c9bea9');
  surf(AREAS.templeEntry, PAL.court);
  surf(AREAS.templeCourt, PAL.court);
  surf(AREAS.templeExit, PAL.court);
  surf(AREAS.hold, PAL.grass);
  surf(AREAS.promenade, PAL.prom);
  surf(AREAS.bank, PAL.bank);
  surf(AREAS.camp, '#e9d7ad');
  // courtyard paving rings
  b.box(126, 74, 154, 84, 0.04, 0.06, '#f5ead6', 0, { ao: false });

  // -------------------------------------------------------------- buildings
  const special = new Uint8Array(W * H);
  const mark = (r: Rect) => { for (let z = Math.max(0, r.z0); z < Math.min(H, r.z1); z++) for (let x = Math.max(0, r.x0); x < Math.min(W, r.x1); x++) special[z * W + x] = 1; };
  mark(STATION_BUILDING); mark(TRACKS); mark(SHRINE); mark({ x0: 110, z0: 63, x1: 170, z1: 124 });
  mark({ x0: 0, z0: 0, x1: W, z1: 4 });
  for (const f of FENCES) mark(f);
  for (const t of TENTS) mark(t);
  for (const bu of BUSES) mark(bu);
  mark({ x0: 0, z0: 134, x1: W, z1: H });
  const base = world.base;
  const used = new Uint8Array(W * H);
  const canUse = (x: number, z: number) => x >= 0 && z >= 0 && x < W && z < H && base[z * W + x] === WALL && !special[z * W + x] && !used[z * W + x];
  let seed = 1;
  for (let z = 0; z < H; z++) {
    for (let x = 0; x < W; x++) {
      if (!canUse(x, z)) continue;
      const mw = 6 + Math.floor(hash(seed++) * 8), md = 6 + Math.floor(hash(seed++) * 8);
      let w = 0;
      while (w < mw && canUse(x + w, z)) w++;
      let d = 1;
      outer: while (d < md) {
        for (let k = 0; k < w; k++) if (!canUse(x + k, z + d)) break outer;
        d++;
      }
      for (let zz = z; zz < z + d; zz++) for (let xx = x; xx < x + w; xx++) used[zz * W + xx] = 1;
      house(b, lamps, base, { x0: x, z0: z, x1: x + w, z1: z + d }, seed++);
    }
  }

  // temple enclosure walls (light stone) — cells of the temple block that are walls
  const tUsed = new Uint8Array(W * H);
  const isTWall = (x: number, z: number) => x >= 110 && x < 170 && z >= 63 && z < 124 && base[z * W + x] === WALL && !(x >= SHRINE.x0 && x < SHRINE.x1 && z >= SHRINE.z0 && z < SHRINE.z1) && !tUsed[z * W + x];
  for (let z = 63; z < 124; z++) for (let x = 110; x < 170; x++) {
    if (!isTWall(x, z)) continue;
    let w = 0; while (isTWall(x + w, z) && w < 30) w++;
    let d = 1; outer2: while (d < 30) { for (let k = 0; k < w; k++) if (!isTWall(x + k, z + d)) break outer2; d++; }
    for (let zz = z; zz < z + d; zz++) for (let xx = x; xx < x + w; xx++) tUsed[zz * W + xx] = 1;
    b.box(x + 0.1, z + 0.1, x + w - 0.1, z + d - 0.1, 0, 3.6, PAL.wall, 0.25);
    b.box(x, z, x + w, z + d, 3.6, 4.0, '#bfa47c', 0.15);
  }
  shrine(b, lamps);
  // gateway towers flanking the temple gates
  for (const [gx0, gx1, gz] of [[125, 131, 66], [150, 156, 118]] as const) {
    for (const px of [gx0 - 1.4, gx1 + 0.2]) b.box(px, gz - 1.2, px + 1.2, gz + 1.2, 0, 6.5, PAL.templeLight, 0.2);
    b.box(gx0 - 1.6, gz - 1.3, gx1 + 1.6, gz + 1.3, 6.5, 7.3, PAL.temple, 0.25);
    b.at(new THREE.SphereGeometry(1.2, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), PAL.templeLight, (gx0 + gx1) / 2, 7.3, gz);
    b.at(new THREE.ConeGeometry(0.25, 0.9, 6), PAL.gold, (gx0 + gx1) / 2, 8.8, gz);
  }

  station(b, lamps);
  busStand(b);
  holding(b);
  camp(b);
  bridge(b, lamps);
  fences(b);
  fieldsAndTrees(b, base);
  bunting(b);

  // promenade lamps, PA speakers and CCTV poles
  for (let x = 10; x < 248; x += 14) lampPost(b, lamps, x, 124.6);
  for (let x = 6; x < 278; x += 18) lampPost(b, lamps, x, 53.4);
  const speakerAt = [[60, 125], [118, 125], [196, 125], [91, 64.5], [184, 64.5], [70, 50.5], [264, 66], [149, 178], [22, 64.5], [239, 64.5]];
  for (const [x, z] of speakerAt) speakers.push(paPole(b, x, z));
  const camAt = [[96, 125.5], [144, 125.5], [186, 125.5], [86, 66], [150, 176.6], [64, 50]];
  for (const [x, z] of camAt) cameras.push(cctvPole(b, x, z));

  group.add(b.build(clayMat));
  group.add(lamps.build(lampMat, false));

  // ------------------------------------------------------------------ water
  const waterTime = { value: 0 };
  const waterMat = new THREE.MeshStandardMaterial({ color: '#4fa3ad', roughness: 0.25, metalness: 0.05, transparent: true, opacity: 0.88 });
  waterMat.onBeforeCompile = sh => {
    sh.uniforms.uTime = waterTime;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;\nvarying float vWave;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        float w = sin(position.x * 0.35 + uTime * 1.3) * 0.5 + sin(position.y * 0.6 - uTime * 0.9) * 0.5;
        transformed.z += w * 0.06; vWave = w;`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vWave;')
      .replace('#include <color_fragment>', '#include <color_fragment>\n diffuseColor.rgb += vec3(0.05, 0.07, 0.07) * smoothstep(0.6, 1.0, vWave);');
  };
  const water = new THREE.Mesh(new THREE.PlaneGeometry(W + 10, 41, 140, 30), waterMat);
  water.rotation.x = -Math.PI / 2;
  water.position.set(SX(W / 2), -1.0, SZ(156.5));
  water.receiveShadow = true;
  group.add(water);

  return { group, clayMat, lampMat, waterMat, waterTime, lensDim, speakers, cameras };
}

// --------------------------------------------------------------------------
function house(b: Batch, lamps: Batch, base: Uint8Array, r: Rect, seed: number) {
  const w = r.x1 - r.x0, d = r.z1 - r.z0;
  const small = w < 3 || d < 3;
  const hgt = small ? 2.5 + hash(seed) * 2 : 3.5 + Math.floor(hash(seed + 1) * 3.2) * 2.6 + hash(seed + 2) * 0.8;
  const col = PAL.houses[Math.floor(hash(seed + 3) * PAL.houses.length)];
  const inset = 0.12;
  b.box(r.x0 + inset, r.z0 + inset, r.x1 - inset, r.z1 - inset, 0, hgt, col, 0.45, { jitter: 0.04 });
  if (small) return;
  // roof parapet
  const roofCol = new THREE.Color(col).offsetHSL(0, -0.05, -0.12).getStyle();
  b.box(r.x0 + 0.05, r.z0 + 0.05, r.x1 - 0.05, r.z1 - 0.05, hgt - 0.05, hgt + 0.35, roofCol, 0.12);
  b.box(r.x0 + 0.5, r.z0 + 0.5, r.x1 - 0.5, r.z1 - 0.5, hgt + 0.05, hgt + 0.15, new THREE.Color(col).offsetHSL(0, -0.1, 0.06).getStyle(), 0);
  const h = hash(seed + 4);
  const cx = (r.x0 + r.x1) / 2, cz = (r.z0 + r.z1) / 2;
  if (h < 0.35) {
    // black water tank
    b.at(new THREE.CylinderGeometry(0.6, 0.6, 1.1, 10), '#3b3f45', r.x0 + 1.3, hgt + 0.7, r.z0 + 1.3);
  } else if (h < 0.55 && w > 5 && d > 5) {
    // stair head room
    b.box(r.x1 - 3, r.z0 + 0.8, r.x1 - 0.8, r.z0 + 3, hgt, hgt + 2.2, col, 0.25);
  } else if (h < 0.65) {
    // little rooftop shrine dome
    b.at(new THREE.SphereGeometry(1.0, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), '#fbf3e6', cx, hgt + 0.1, cz);
    b.at(new THREE.ConeGeometry(0.15, 0.7, 6), PAL.gold, cx, hgt + 1.35, cz);
  }
  if (hash(seed + 5) < 0.22) flag(b, r.x1 - 0.8, hgt + 0.1, r.z1 - 0.8, 2.6);
  // shop awnings and windows on facades that face a walkable path
  const sides: [string, number][] = [];
  const faces = (cells: [number, number][]) => cells.filter(([x, z]) => x >= 0 && z >= 0 && x < W && z < H && isFree(base[z * W + x])).length > cells.length * 0.5;
  const span = (a: number, c: number) => Array.from({ length: Math.max(1, c - a) }, (_, i) => a + i);
  if (faces(span(r.x0, r.x1).map(x => [x, r.z1] as [number, number]))) sides.push(['s', 0]);
  if (faces(span(r.x0, r.x1).map(x => [x, r.z0 - 1] as [number, number]))) sides.push(['n', 0]);
  if (faces(span(r.z0, r.z1).map(z => [r.x0 - 1, z] as [number, number]))) sides.push(['w', 0]);
  if (faces(span(r.z0, r.z1).map(z => [r.x1, z] as [number, number]))) sides.push(['e', 0]);
  const aw = PAL.awnings[Math.floor(hash(seed + 6) * PAL.awnings.length)];
  for (const [s] of sides) {
    const floors = Math.max(1, Math.floor((hgt - 1) / 2.6));
    if (s === 's' || s === 'n') {
      const z = s === 's' ? r.z1 - 0.05 : r.z0 + 0.05;
      const dz = s === 's' ? 1 : -1;
      b.box(r.x0 + 0.4, Math.min(z, z + dz * 1.1), r.x1 - 0.4, Math.max(z, z + dz * 1.1), 2.5, 2.75, aw, 0.08);
      for (let f = 1; f < floors; f++) for (let x = r.x0 + 1.1; x < r.x1 - 1; x += 2.2)
        b.box(x, Math.min(z, z + dz * 0.12), x + 0.9, Math.max(z, z + dz * 0.12), 0.9 + f * 2.6, 2.1 + f * 2.6, '#4a4552', 0.05, { ao: false });
    } else {
      const x = s === 'e' ? r.x1 - 0.05 : r.x0 + 0.05;
      const dx = s === 'e' ? 1 : -1;
      b.box(Math.min(x, x + dx * 1.1), r.z0 + 0.4, Math.max(x, x + dx * 1.1), r.z1 - 0.4, 2.5, 2.75, aw, 0.08);
      for (let f = 1; f < floors; f++) for (let z = r.z0 + 1.1; z < r.z1 - 1; z += 2.2)
        b.box(Math.min(x, x + dx * 0.12), z, Math.max(x, x + dx * 0.12), z + 0.9, 0.9 + f * 2.6, 2.1 + f * 2.6, '#4a4552', 0.05, { ao: false });
    }
  }
  void lamps;
}

function flag(b: Batch, x: number, y: number, z: number, h: number) {
  b.at(new THREE.CylinderGeometry(0.05, 0.05, h, 5), '#6d5a48', x, y + h / 2, z);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 1.3, -0.35, 0, 0, -0.7, 0, 0, 0, 0, 0, -0.7, 0, 1.3, -0.35, 0], 3));
  g.computeVertexNormals();
  b.at(g, PAL.saffron, x, y + h, z, hash(x + z) * 6.28);
}

function parasol(b: Batch, x: number, z: number, color: string, s = 1, y = 0.3) {
  b.at(new THREE.CylinderGeometry(0.06, 0.06, 3.2 * s, 5), '#6d5a48', x, y + 1.6 * s, z);
  b.at(new THREE.ConeGeometry(1.9 * s, 0.9 * s, 10), color, x, y + 3.25 * s, z);
}

function chhatri(b: Batch, x: number, z: number, s: number) {
  b.box(x - 2.2 * s, z - 2.2 * s, x + 2.2 * s, z + 2.2 * s, 0.3, 0.7, '#e8d5b0', 0.15);
  for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b.box(x + dx * 1.6 * s - 0.2, z + dz * 1.6 * s - 0.2, x + dx * 1.6 * s + 0.2, z + dz * 1.6 * s + 0.2, 0.7, 3.2 * s, '#f1e3c8', 0.08);
  b.box(x - 2 * s, z - 2 * s, x + 2 * s, z + 2 * s, 3.2 * s, 3.6 * s, '#e8d5b0', 0.15);
  b.at(new THREE.SphereGeometry(1.6 * s, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), '#fbf3e6', x, 3.6 * s, z);
  b.at(new THREE.ConeGeometry(0.18, 0.8, 6), PAL.gold, x, 3.6 * s + 1.9 * s, z);
}

function shrine(b: Batch, lamps: Batch) {
  const r = SHRINE;
  const cx = (r.x0 + r.x1) / 2, cz = (r.z0 + r.z1) / 2;
  b.box(r.x0, r.z0, r.x1, r.z1, 0, 1.4, PAL.templeLight, 0.3);
  b.box(r.x0 + 1.2, r.z0 + 1.2, r.x1 - 1.2, r.z1 - 1.2, 1.4, 7.2, PAL.temple, 0.35);
  // mandapa porch with small domes on the north (darshan) side
  b.box(r.x0 + 2.5, r.z0 + 0.2, r.x1 - 2.5, r.z0 + 4.5, 1.4, 5.2, PAL.temple, 0.3);
  for (const dx of [-3.5, 0, 3.5]) b.at(new THREE.SphereGeometry(1.4, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), PAL.templeLight, cx + dx, 5.2, r.z0 + 2.3);
  // curvilinear Nagara shikhara (square lathe)
  const prof = [[6.4, 0], [6.2, 2.2], [5.7, 5], [4.8, 8], [3.6, 10.6], [2.3, 12.4], [1.3, 13.4], [0.01, 13.6]].map(([x, y]) => new THREE.Vector2(x, y));
  b.at(new THREE.LatheGeometry(prof, 4, Math.PI / 4), PAL.temple, cx, 7.2, cz + 1.2);
  for (const [dx, dz] of [[-4.4, -3.2], [4.4, -3.2], [-4.4, 5.6], [4.4, 5.6]]) {
    b.at(new THREE.LatheGeometry(prof, 4, Math.PI / 4), PAL.templeLight, cx + dx, 7.2, cz + dz, 0, 0.32, 0.42, 0.32);
  }
  // amalaka, kalash and flag
  b.at(new THREE.TorusGeometry(1.25, 0.55, 8, 16), PAL.templeLight, cx, 20.6, cz + 1.2, 0, 1, 1, 1);
  b.push(new THREE.TorusGeometry(1.25, 0.55, 8, 16), PAL.templeLight, new THREE.Matrix4().compose(new THREE.Vector3(SX(cx), 20.7, SZ(cz + 1.2)), new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2, 0, 0)), new THREE.Vector3(1, 1, 1)));
  b.at(new THREE.SphereGeometry(0.6, 10, 8), PAL.gold, cx, 21.8, cz + 1.2);
  b.at(new THREE.ConeGeometry(0.3, 1.0, 8), PAL.gold, cx, 22.8, cz + 1.2);
  flag(b, cx + 0.4, 21.2, cz + 1.2, 4.5);
  // deepmala lamp towers in the courtyard corners
  for (const [x, z] of [[114.5, 70.5], [165.5, 70.5]]) {
    b.at(new THREE.CylinderGeometry(0.7, 1.0, 6, 8), '#5d5552', x, 3, z);
    for (let k = 0; k < 6; k++) lamps.at(new THREE.SphereGeometry(0.16, 6, 4), '#ffe9a8', x + Math.cos(k) * 0.9, 1 + k * 0.9, z + Math.sin(k) * 0.9);
  }
}

function station(b: Batch, lamps: Batch) {
  const r = STATION_BUILDING;
  for (const [x0, x1] of [[r.x0, 58], [82, r.x1]]) {
    b.box(x0, r.z0, x1, r.z1, 0, 7, PAL.cream, 0.35);
    b.box(x0 - 0.2, r.z0 - 0.2, x1 + 0.2, r.z1 + 0.2, 2.4, 2.9, PAL.maroon, 0.1);
    b.box(x0 - 0.3, r.z0 - 0.3, x1 + 0.3, r.z1 + 0.3, 7, 7.6, PAL.maroon, 0.2);
    for (let x = x0 + 1.5; x < x1 - 1.5; x += 3) {
      b.box(x, r.z1 - 0.1, x + 1.4, r.z1 + 0.12, 3.6, 6, '#5a4a52', 0.05, { ao: false });
      b.box(x, r.z0 - 0.12, x + 1.4, r.z0 + 0.1, 3.6, 6, '#5a4a52', 0.05, { ao: false });
    }
  }
  // concourse arches (open, so the crowd stays visible)
  for (const z of [20.4, 27, 33.6]) {
    b.box(58, z - 0.4, 82, z + 0.4, 7.4, 8.1, PAL.maroon, 0.15);
    b.box(58.2, z - 0.4, 59, z + 0.4, 0, 7.4, PAL.cream, 0.1);
    b.box(81, z - 0.4, 81.8, z + 0.4, 0, 7.4, PAL.cream, 0.1);
  }
  // clock tower
  b.box(51, 24, 57, 30, 7, 16, PAL.cream, 0.3);
  b.box(50.6, 23.6, 57.4, 30.4, 15.6, 16.4, PAL.maroon, 0.2);
  b.at(new THREE.SphereGeometry(3, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), '#a14a3b', 54, 16.4, 27);
  b.at(new THREE.CylinderGeometry(1.5, 1.5, 0.2, 18), '#fffaf0', 54, 12.5, 30.3, 0, 1, 1, 1);
  b.push(new THREE.CylinderGeometry(1.5, 1.5, 0.2, 18), '#fffaf0', new THREE.Matrix4().compose(new THREE.Vector3(SX(54), 12.5, SZ(30.35)), new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2, 0, 0)), new THREE.Vector3(1, 1, 1)), { ao: false });
  // platform canopy (front strip only so the crowd stays visible)
  for (let x = 24; x < 118; x += 8) b.box(x, 17.6, x + 0.35, 17.95, 0.06, 4.3, '#6f7c86', 0);
  b.box(22, 16.8, 118, 19.8, 4.3, 4.6, '#7d9aa6', 0.1);
  // tracks
  for (const zt of [6.5, 10.5]) {
    b.box(0, zt - 1.2, TRACKS.x1, zt + 2.7, 0, 0.25, PAL.ballast, 0, { ao: false });
    for (let x = 0.5; x < TRACKS.x1; x += 1.1) b.box(x, zt - 0.6, x + 0.35, zt + 2.1, 0.25, 0.36, PAL.sleeper, 0, { ao: false });
    b.box(0, zt, TRACKS.x1, zt + 0.15, 0.36, 0.5, PAL.rail, 0, { ao: false });
    b.box(0, zt + 1.45, TRACKS.x1, zt + 1.6, 0.36, 0.5, PAL.rail, 0, { ao: false });
  }
  // signal posts & lamps on the forecourt
  for (let x = 32; x < 112; x += 16) lampPost(b, lamps, x, 36);
}

function busStand(b: Batch) {
  for (const r of BUSES) {
    b.box(r.x0, r.z0, r.x1, r.z1, 0.5, 3.4, PAL.busRed, 0.45);
    b.box(r.x0 - 0.02, r.z0 - 0.02, r.x1 + 0.02, r.z1 + 0.02, 2.0, 2.9, '#3c4250', 0.2, { ao: false });
    b.box(r.x0 - 0.03, r.z0 - 0.03, r.x1 + 0.03, r.z1 + 0.03, 1.2, 1.5, '#f3e9dc', 0.1, { ao: false });
    for (const x of [r.x0 + 2, r.x1 - 2]) for (const z of [r.z0, r.z1]) b.at(new THREE.CylinderGeometry(0.5, 0.5, 0.4, 10), '#2b2b2b', x, 0.5, z, 0, 1, 1, 1);
  }
  for (let x = 199; x < 274; x += 6) b.box(x, 13.4, x + 0.3, 13.7, 0, 4.2, '#5b7f86', 0);
  b.box(197, 7.5, 275, 14.2, 4.2, 4.6, '#4f8a8b', 0.15);
}

function holding(b: Batch) {
  // shamiana canopies over the south part of the holding ground
  const cols = ['#e63946', '#f1faee', '#ffb703'];
  let k = 0;
  for (let x = 252; x < 276; x += 8.5) for (let z = 101; z < 118; z += 8.5) {
    for (const [dx, dz] of [[0, 0], [7, 0], [0, 7], [7, 7]]) b.box(x + dx, z + dz, x + dx + 0.25, z + dz + 0.25, 0, 3.2, '#8b6748', 0);
    b.at(new THREE.ConeGeometry(5.2, 1.6, 4), cols[k++ % 3], x + 3.6, 4.0, z + 3.6, Math.PI / 4, 1, 1, 1);
  }
}

function camp(b: Batch) {
  TENTS.forEach((t, i) => {
    const w = t.x1 - t.x0, d = t.z1 - t.z0;
    const col = PAL.tent[i % PAL.tent.length];
    b.at(new THREE.ConeGeometry(Math.SQRT1_2, 1, 4), col, (t.x0 + t.x1) / 2, 1.4, (t.z0 + t.z1) / 2, Math.PI / 4, w, 2.8, d);
    b.box(t.x0 + 0.1, t.z0 + 0.1, t.x1 - 0.1, t.z1 - 0.1, 0, 0.3, '#d9c39a', 0);
    if (i % 7 === 3) flag(b, (t.x0 + t.x1) / 2, 2.8, (t.z0 + t.z1) / 2, 2);
  });
  // camp gateway arch on the bank road
  for (const x of [143, 155]) b.box(x, 183.5, x + 1, 184.5, 0, 6, '#f3a712', 0.2);
  b.box(142.5, 183.4, 156.5, 184.6, 6, 7.2, '#e4572e', 0.3);
}

function bridge(b: Batch, lamps: Batch) {
  const r = AREAS.bridge;
  b.box(r.x0 - 0.4, r.z0, r.x1 + 0.4, r.z1, -0.3, 0.35, '#d9c6a2', 0.15);
  for (const x of [r.x0 - 0.4, r.x1 + 0.1]) b.box(x, r.z0, x + 0.3, r.z1, 0.35, 1.4, '#b88a5a', 0.08);
  for (let z = 152; z < 176; z += 6) {
    b.box(r.x0 + 0.5, z - 0.8, r.x1 - 0.5, z + 0.8, -2.6, -0.3, '#c9b48e', 0.3);
  }
  for (let z = r.z0 + 3; z < r.z1; z += 9) for (const x of [r.x0 - 0.3, r.x1 + 0.3]) lampPost(b, lamps, x, z, 0.35);
}

function fences(b: Batch) {
  const gateCells = new Set<number>();
  for (const g of GATES) for (let z = g.rect.z0; z < g.rect.z1; z++) for (let x = g.rect.x0; x < g.rect.x1; x++) gateCells.add(z * W + x);
  for (const f of FENCES) {
    const zc = (f.z0 + f.z1) / 2;
    let runStart = -1;
    for (let x = f.x0; x <= f.x1; x++) {
      const isGate = gateCells.has(f.z0 * W + x) || x === f.x1;
      if (!isGate && runStart < 0) runStart = x;
      if (isGate && runStart >= 0) {
        for (let px = runStart; px <= x; px += 2) b.box(px - 0.08, zc - 0.08, px + 0.08, zc + 0.08, 0, 1.3, PAL.bamboo, 0, { ao: false });
        b.box(runStart, zc - 0.06, x, zc + 0.06, 0.55, 0.67, PAL.bamboo, 0, { ao: false });
        b.box(runStart, zc - 0.06, x, zc + 0.06, 1.05, 1.17, PAL.bamboo, 0, { ao: false });
        runStart = -1;
      }
    }
  }
  // bamboo rails along the promenade edge above the ghats (gaps at the ghats)
  for (const g of GHATS) {
    for (const x of [g.x0, g.x1 - 0.2]) b.box(x, 133.8, x + 0.2, 134.2, 0, 1.2, PAL.bamboo, 0, { ao: false });
  }
}

function tree(b: Batch, x: number, z: number, s: number, seed: number) {
  b.at(new THREE.CylinderGeometry(0.22 * s, 0.32 * s, 2.4 * s, 6), PAL.trunk, x, 1.2 * s, z);
  const c = PAL.tree[Math.floor(hash(seed) * PAL.tree.length)];
  b.at(new THREE.IcosahedronGeometry(1.7 * s, 1), c, x, 3.2 * s, z, seed, 1, 0.9, 1, { jitter: 0.05 });
  b.at(new THREE.IcosahedronGeometry(1.2 * s, 1), c, x + 0.9 * s, 3.9 * s, z + 0.5 * s, seed, 1, 0.9, 1, { jitter: 0.05 });
  b.at(new THREE.IcosahedronGeometry(1.1 * s, 1), c, x - 0.8 * s, 3.7 * s, z - 0.6 * s, seed, 1, 0.9, 1, { jitter: 0.05 });
}

function fieldsAndTrees(b: Batch, base: Uint8Array) {
  // south-bank fields with crop rows
  const fields: Rect[] = [{ x0: 0, z0: 176, x1: 60, z1: H }, { x0: 60, z0: 184, x1: 100, z1: H }, { x0: 275, z0: 176, x1: W, z1: H }];
  fields.forEach((f, i) => {
    b.box(f.x0 + 0.5, f.z0 + 0.5, f.x1 - 0.5, f.z1 - 0.5, 0, 0.12, i % 2 ? PAL.field2 : PAL.field, 0.2, { ao: false });
    for (let z = f.z0 + 2; z < f.z1 - 1; z += 2.2) b.box(f.x0 + 1.5, z, f.x1 - 1.5, z + 0.6, 0.12, 0.3, '#9db564', 0.1, { ao: false });
  });
  let s = 11;
  for (const [x, z] of [[8, 180], [20, 186], [44, 180], [58, 199], [72, 190], [90, 203], [30, 205], [277, 190], [278, 202], [84, 186]]) tree(b, x, z, 1.1 + hash(s) * 0.5, s++);
  // north edge beyond the tracks
  for (let x = 4; x < W; x += 9) tree(b, x + hash(x) * 3, 1.5, 0.8, x);
  // trees inside the temple courtyard corners (non-walkable plinths)
  void base;
}

function bunting(b: Batch) {
  const cols = ['#ff8c1a', '#e4572e', '#f3a712', '#29a19c', '#d7263d', '#fbf4e6'];
  const lanes = [AREAS.lane2, AREAS.lane1, AREAS.lane3];
  let k = 0;
  for (const ln of lanes) {
    for (let z = ln.z0 + 6; z < ln.z1 - 2; z += 9) {
      for (let x = ln.x0 - 0.2; x < ln.x1 + 0.2; x += 0.7) {
        const sag = Math.sin(((x - ln.x0) / (ln.x1 - ln.x0)) * Math.PI) * 0.6;
        b.at(new THREE.TetrahedronGeometry(0.28), cols[k++ % cols.length], x, 6.2 - sag, z, 0.5, 1, 1.3, 0.3, { ao: false });
      }
    }
  }
}

function lampPost(b: Batch, lamps: Batch, x: number, z: number, y = 0) {
  b.at(new THREE.CylinderGeometry(0.08, 0.12, 4.4, 6), '#3f4a52', x, y + 2.2, z);
  b.box(x - 0.5, z - 0.1, x + 0.5, z + 0.1, y + 4.3, y + 4.45, '#3f4a52', 0);
  lamps.at(new THREE.SphereGeometry(0.28, 8, 6), '#fff3c4', x - 0.45, y + 4.2, z);
  lamps.at(new THREE.SphereGeometry(0.28, 8, 6), '#fff3c4', x + 0.45, y + 4.2, z);
}

function paPole(b: Batch, x: number, z: number) {
  b.at(new THREE.CylinderGeometry(0.1, 0.13, 6.5, 6), '#566069', x, 3.25, z);
  for (const a of [0, Math.PI]) {
    const m = new THREE.Matrix4().compose(
      new THREE.Vector3(SX(x) + Math.sin(a) * 0.35, 6.1, SZ(z) + Math.cos(a) * 0.35),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2 + 0.3 * Math.cos(a), 0, -0.3 * Math.sin(a))),
      new THREE.Vector3(1, 1, 1));
    b.push(new THREE.CylinderGeometry(0.42, 0.1, 0.9, 10, 1, true), '#e9ecef', m);
  }
  return new THREE.Vector3(SX(x), 6.2, SZ(z));
}

function cctvPole(b: Batch, x: number, z: number) {
  b.at(new THREE.CylinderGeometry(0.09, 0.12, 7.5, 6), '#566069', x, 3.75, z);
  b.box(x - 0.25, z - 0.6, x + 0.25, z + 0.1, 7.2, 7.6, '#f8f9fa', 0.1);
  b.box(x - 0.15, z - 0.75, x + 0.15, z - 0.55, 7.25, 7.55, '#212529', 0.05);
  return new THREE.Vector3(SX(x), 7.4, SZ(z));
}
