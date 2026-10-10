// Static data shared by every simulation instance.

import {
  W, H, N, WALL, WATER, BATH, AREAS, buildWorld, inRect,
  type WorldGrid,
} from './world.ts';
import { distanceTransform } from './fields.ts';

export interface Shared {
  world: WorldGrid;
  staticCost: Uint8Array;     // routing penalty for hugging walls / wading
  walkBlur: Float32Array;     // blurred walkable mask (density normalisation)
  destCells: Int32Array[];
  spawnCells: { train: Int32Array; bus: Int32Array; camp: Int32Array };
}

export const FW = 70; // flow grid (4 m cells)
export const FH = 53;
export const FCELL = 4;

export function blur5(src: Float32Array, dst: Float32Array, tmp: Float32Array) {
  // separable [1 4 6 4 1]/16 blur, sigma ~ 1 m
  for (let z = 0; z < H; z++) {
    const o = z * W;
    for (let x = 0; x < W; x++) {
      const a = x > 1 ? src[o + x - 2] : 0, b = x > 0 ? src[o + x - 1] : 0;
      const d = x < W - 1 ? src[o + x + 1] : 0, e = x < W - 2 ? src[o + x + 2] : 0;
      tmp[o + x] = (a + 4 * b + 6 * src[o + x] + 4 * d + e) * 0.0625;
    }
  }
  for (let z = 0; z < H; z++) {
    const o = z * W;
    for (let x = 0; x < W; x++) {
      const a = z > 1 ? tmp[o - 2 * W + x] : 0, b = z > 0 ? tmp[o - W + x] : 0;
      const d = z < H - 1 ? tmp[o + W + x] : 0, e = z < H - 2 ? tmp[o + 2 * W + x] : 0;
      dst[o + x] = (a + 4 * b + 6 * tmp[o + x] + 4 * d + e) * 0.0625;
    }
  }
}

function cellsOf(mask: (c: number) => boolean): Int32Array {
  const out: number[] = [];
  for (let c = 0; c < N; c++) if (mask(c)) out.push(c);
  return Int32Array.from(out);
}

let cached: Shared | null = null;

export function getShared(): Shared {
  if (cached) return cached;
  const world = buildWorld();
  const { base } = world;
  const wallMask = new Uint8Array(N);
  for (let c = 0; c < N; c++) wallMask[c] = base[c] === WALL || base[c] === WATER ? 1 : 0;
  const wd = distanceTransform(wallMask);
  const staticCost = new Uint8Array(N);
  for (let c = 0; c < N; c++) {
    let k = 0;
    if (wd[c] <= 1.01) k = 9; else if (wd[c] <= 2.01) k = 3;
    if (base[c] === BATH) k += 6;
    staticCost[c] = k;
  }
  const walk = new Float32Array(N);
  for (let c = 0; c < N; c++) walk[c] = wallMask[c] ? 0 : 1;
  const walkBlur = new Float32Array(N);
  blur5(walk, walkBlur, new Float32Array(N));

  const destCells = world.destMask.map(m => cellsOf(c => m[c] === 1));
  const free = (c: number) => base[c] !== WALL && base[c] !== WATER;
  const spawnCells = {
    train: cellsOf(c => free(c) && inRect({ x0: 22, z0: 15, x1: 118, z1: 19 }, c % W, (c / W) | 0)),
    bus: cellsOf(c => free(c) && inRect({ x0: 200, z0: 26, x1: 272, z1: 46 }, c % W, (c / W) | 0)),
    camp: cellsOf(c => free(c) && inRect(AREAS.camp, c % W, (c / W) | 0) && ((c / W) | 0) > 186),
  };
  cached = { world, staticCost, walkBlur, destCells, spawnCells };
  return cached;
}
