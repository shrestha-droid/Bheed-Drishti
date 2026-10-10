// Navigation fields: shortest walking distance from every cell to a destination
// region (Dijkstra with a bucket queue on an 8-connected grid), plus a smooth
// descent direction per cell. Also an exact Euclidean distance transform used
// for wall forces.

import { W, H, N } from './world.ts';

export interface Field {
  dist: Float32Array; // metres, Infinity if unreachable
  dirX: Float32Array; // unit direction towards the destination
  dirZ: Float32Array;
}

const ORTH = 10;
const DIAG = 14;
const INF = 0x3fffffff;

const distI = new Int32Array(N);
// bucket queue storage
const NB = 64;
const buckets: Int32Array[] = Array.from({ length: NB }, () => new Int32Array(1024));
const bucketLen = new Int32Array(NB);

function push(b: number, c: number) {
  let arr = buckets[b];
  if (bucketLen[b] >= arr.length) {
    const n = new Int32Array(arr.length * 2);
    n.set(arr);
    buckets[b] = arr = n;
  }
  arr[bucketLen[b]++] = c;
}

/**
 * passable: 1 if a cell can be walked through. cost: extra cost per cell entry (0..40).
 * sources: cells with distance 0.
 */
export function computeField(passable: Uint8Array, extraCost: Uint8Array, sources: Uint8Array, out?: Field): Field {
  const f: Field = out ?? { dist: new Float32Array(N), dirX: new Float32Array(N), dirZ: new Float32Array(N) };
  distI.fill(INF);
  bucketLen.fill(0);
  let pending = 0;
  for (let c = 0; c < N; c++) {
    if (sources[c] && passable[c]) {
      distI[c] = 0;
      push(0, c);
      pending++;
    }
  }
  let cur = 0;
  let curD = 0;
  while (pending > 0) {
    while (bucketLen[cur] === 0) { cur = (cur + 1) % NB; curD++; }
    const c = buckets[cur][--bucketLen[cur]];
    pending--;
    const d = distI[c];
    if (d !== curD) continue; // stale entry
    const x = c % W, z = (c / W) | 0;
    const xm = x > 0, xp = x < W - 1, zm = z > 0, zp = z < H - 1;
    const pW = xm && passable[c - 1] === 1, pE = xp && passable[c + 1] === 1;
    const pN = zm && passable[c - W] === 1, pS = zp && passable[c + W] === 1;
    // orthogonal
    if (pW) pending += relax(c - 1, d + ORTH);
    if (pE) pending += relax(c + 1, d + ORTH);
    if (pN) pending += relax(c - W, d + ORTH);
    if (pS) pending += relax(c + W, d + ORTH);
    // diagonals, no corner cutting
    if (pW && pN && passable[c - W - 1]) pending += relax(c - W - 1, d + DIAG);
    if (pE && pN && passable[c - W + 1]) pending += relax(c - W + 1, d + DIAG);
    if (pW && pS && passable[c + W - 1]) pending += relax(c + W - 1, d + DIAG);
    if (pE && pS && passable[c + W + 1]) pending += relax(c + W + 1, d + DIAG);
  }

  function relax(n: number, nd: number): number {
    nd += extraCost[n];
    if (nd < distI[n]) {
      distI[n] = nd;
      push(nd % NB, n);
      return 1;
    }
    return 0;
  }

  const { dist, dirX, dirZ } = f;
  for (let c = 0; c < N; c++) dist[c] = distI[c] >= INF ? Infinity : distI[c] / 10;

  // Direction: weighted sum of descent towards lower neighbours (smooth, not 45°-snapped)
  for (let c = 0; c < N; c++) {
    const d = dist[c];
    dirX[c] = 0; dirZ[c] = 0;
    if (!isFinite(d) || d === 0) continue;
    const x = c % W, z = (c / W) | 0;
    let gx = 0, gz = 0;
    for (let dz = -1; dz <= 1; dz++) {
      const zz = z + dz;
      if (zz < 0 || zz >= H) continue;
      for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dz) continue;
        const xx = x + dx;
        if (xx < 0 || xx >= W) continue;
        const nd = dist[zz * W + xx];
        if (!isFinite(nd)) continue;
        const len = dx && dz ? 1.41421356 : 1;
        const drop = (d - nd) / len;
        if (drop > 0) { gx += (dx / len) * drop; gz += (dz / len) * drop; }
      }
    }
    const m = Math.hypot(gx, gz);
    if (m > 1e-6) { dirX[c] = gx / m; dirZ[c] = gz / m; }
  }
  return f;
}

// ---------------------------------------------------------------------------
// Exact squared Euclidean distance transform (Felzenszwalb & Huttenlocher)

const BIG = 1e12;
function edt1d(f: Float64Array, n: number, d: Float64Array, v: Int32Array, zb: Float64Array) {
  let k = 0;
  v[0] = 0; zb[0] = -BIG; zb[1] = BIG;
  for (let q = 1; q < n; q++) {
    let s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
    while (s <= zb[k]) {
      k--;
      s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
    }
    k++;
    v[k] = q; zb[k] = s; zb[k + 1] = BIG;
  }
  k = 0;
  for (let q = 0; q < n; q++) {
    while (zb[k + 1] < q) k++;
    d[q] = (q - v[k]) * (q - v[k]) + f[v[k]];
  }
}

/** Distance (m) from every cell centre to the nearest cell where target[c]===1. */
export function distanceTransform(target: Uint8Array, out?: Float32Array): Float32Array {
  const res = out ?? new Float32Array(N);
  const n = Math.max(W, H);
  const f = new Float64Array(n), d = new Float64Array(n), zb = new Float64Array(n + 1);
  const v = new Int32Array(n);
  const tmp = new Float64Array(N);
  for (let x = 0; x < W; x++) {
    for (let z = 0; z < H; z++) f[z] = target[z * W + x] ? 0 : BIG;
    edt1d(f, H, d, v, zb);
    for (let z = 0; z < H; z++) tmp[z * W + x] = d[z];
  }
  for (let z = 0; z < H; z++) {
    for (let x = 0; x < W; x++) f[x] = tmp[z * W + x];
    edt1d(f, W, d, v, zb);
    for (let x = 0; x < W; x++) res[z * W + x] = Math.sqrt(d[x]);
  }
  return res;
}

/** For blocked cells: index of a nearby free cell to evacuate towards (BFS). */
export function nearestFree(passable: Uint8Array, out?: Int32Array): Int32Array {
  const res = out ?? new Int32Array(N);
  res.fill(-1);
  const q = new Int32Array(N);
  let qh = 0, qt = 0;
  for (let c = 0; c < N; c++) if (passable[c]) { res[c] = c; q[qt++] = c; }
  while (qh < qt) {
    const c = q[qh++];
    const x = c % W, z = (c / W) | 0;
    const r = res[c];
    if (x > 0 && res[c - 1] < 0) { res[c - 1] = r; q[qt++] = c - 1; }
    if (x < W - 1 && res[c + 1] < 0) { res[c + 1] = r; q[qt++] = c + 1; }
    if (z > 0 && res[c - W] < 0) { res[c - W] = r; q[qt++] = c - W; }
    if (z < H - 1 && res[c + W] < 0) { res[c + W] = r; q[qt++] = c + W; }
  }
  return res;
}
