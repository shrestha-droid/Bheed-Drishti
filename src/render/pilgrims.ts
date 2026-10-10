// Thousands of tiny clay pilgrims as one instanced mesh per simulation.
// Positions are interpolated between simulation frames.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { W, H, MAX_AGENTS_RENDER } from './constants.ts';
import { F_DWELL, F_PANIC, F_WATER } from '../sim/protocol.ts';

// saffron, white, marigold, pink, red, green, blue, maroon, yellow, lilac
export const CLOTH = ['#ff8a1f', '#f5f1e8', '#ffb01f', '#f06fa0', '#d9343a', '#3aa76d', '#3f7fd1', '#8e2c48', '#f2d22e', '#a58bd8'];

function figureGeometry() {
  const body = new THREE.CylinderGeometry(0.14, 0.27, 1.02, 7, 1);
  body.translate(0, 0.51, 0);
  const head = new THREE.SphereGeometry(0.15, 8, 6);
  head.translate(0, 1.2, 0);
  const pack = new THREE.BoxGeometry(0.22, 0.28, 0.12);
  pack.translate(0, 0.78, -0.2);
  const parts = [body, head, pack].map(g => { const n = g.toNonIndexed(); n.deleteAttribute('uv'); return n; });
  // tint: 1 = cloth (instance colour), 0 = skin
  const tints = [1, 0, 1];
  const skin = new THREE.Color('#b9825a');
  parts.forEach((g, i) => {
    const n = g.getAttribute('position').count;
    const tint = new Float32Array(n).fill(tints[i]);
    g.setAttribute('aTint', new THREE.BufferAttribute(tint, 1));
    const col = new Float32Array(n * 3);
    const c = i === 1 ? skin : i === 2 ? new THREE.Color('#e6dccb') : new THREE.Color(1, 1, 1);
    for (let k = 0; k < n; k++) { col[k * 3] = c.r; col[k * 3 + 1] = c.g; col[k * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  });
  return mergeGeometries(parts)!;
}

export class Pilgrims {
  mesh: THREE.InstancedMesh;
  private prev = new Float32Array(MAX_AGENTS_RENDER * 4);
  private cur = new Float32Array(MAX_AGENTS_RENDER * 4);
  private prevHi = 0;
  private hi = 0;
  private tPrev = 0;
  private tCur = 0;
  private gens = new Int16Array(MAX_AGENTS_RENDER).fill(-1);
  private height: Float32Array;
  private colors = CLOTH.map(c => new THREE.Color(c));
  private panicColor = new THREE.Color('#ff2d55');
  scale = 1.25;

  constructor(height: Float32Array) {
    this.height = height;
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 });
    mat.onBeforeCompile = sh => {
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nattribute float aTint;')
        .replace('#include <color_vertex>', `
          vColor = vec3(1.0);
          #ifdef USE_COLOR
            vColor *= color;
          #endif
          #ifdef USE_INSTANCING_COLOR
            vColor *= mix(vec3(1.0), instanceColor.rgb, aTint);
          #endif`);
    };
    this.mesh = new THREE.InstancedMesh(figureGeometry(), mat, MAX_AGENTS_RENDER);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_AGENTS_RENDER * 3).fill(1), 3);
    this.mesh.instanceColor.setUsage(THREE.DynamicDrawUsage);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = false;
  }

  /** New frame from the simulation (simulation time t). */
  push(t: number, hi: number, buf: Float32Array) {
    const tmp = this.prev;
    this.prev = this.cur;
    this.cur = tmp;
    this.prevHi = this.hi;
    this.tPrev = this.tCur;
    this.tCur = t;
    this.hi = Math.min(hi, MAX_AGENTS_RENDER);
    this.cur.set(buf.subarray(0, this.hi * 4));
    if (this.tCur < this.tPrev) this.prevHi = 0; // restarted
  }

  /** Interpolate to render time tr (sim seconds) and write instance matrices. */
  update(tr: number, clock: number) {
    const m = this.mesh.instanceMatrix.array as Float32Array;
    const colAttr = this.mesh.instanceColor!;
    const colArr = colAttr.array as Float32Array;
    const span = this.tCur - this.tPrev;
    const u = span > 1e-6 ? Math.min(1, Math.max(0, (tr - this.tPrev) / span)) : 1;
    const hi = this.hi;
    const s = this.scale;
    let colorsDirty = false;
    const hgt = this.height;
    for (let i = 0; i < hi; i++) {
      const o = i * 4;
      const packed = this.cur[o + 3];
      const mo = i * 16;
      if (packed < 0) {
        for (let k = 0; k < 16; k++) m[mo + k] = 0;
        continue;
      }
      const f = packed & 15;
      const color = (packed >> 4) & 15;
      const gen = (packed >> 8) & 255;
      let x = this.cur[o], z = this.cur[o + 1], hd = this.cur[o + 2];
      const pp = this.prev[o + 3];
      if (i < this.prevHi && pp >= 0 && ((pp >> 8) & 255) === gen && u < 1) {
        const px = this.prev[o], pz = this.prev[o + 1];
        if (Math.abs(px - x) < 4 && Math.abs(pz - z) < 4) {
          x = px + (x - px) * u;
          z = pz + (z - pz) * u;
          let dh = hd - this.prev[o + 2];
          if (dh > Math.PI) dh -= 2 * Math.PI; else if (dh < -Math.PI) dh += 2 * Math.PI;
          hd = this.prev[o + 2] + dh * u;
        }
      }
      const cx = Math.min(W - 1, Math.max(0, x | 0)), cz = Math.min(H - 1, Math.max(0, z | 0));
      let y = hgt[cz * W + cx] + 0.05;
      const ph = i * 1.7;
      if (f & F_WATER) {
        // bathers: occasional holy dip
        if (f & F_DWELL) y -= Math.max(0, Math.sin(clock * 0.9 + ph) - 0.75) * 3.2;
      } else if (!(f & F_DWELL)) {
        y += Math.abs(Math.sin(clock * 9 + ph)) * 0.07;
      }
      const c = Math.cos(hd) * s, sn = Math.sin(hd) * s;
      m[mo] = c; m[mo + 1] = 0; m[mo + 2] = -sn; m[mo + 3] = 0;
      m[mo + 4] = 0; m[mo + 5] = s; m[mo + 6] = 0; m[mo + 7] = 0;
      m[mo + 8] = sn; m[mo + 9] = 0; m[mo + 10] = c; m[mo + 11] = 0;
      m[mo + 12] = x - W / 2; m[mo + 13] = y; m[mo + 14] = z - H / 2; m[mo + 15] = 1;
      const key = gen * 32 + color * 2 + ((f & F_PANIC) ? 1 : 0);
      if (this.gens[i] !== key) {
        this.gens[i] = key;
        const cc = (f & F_PANIC) ? this.panicColor : this.colors[color % this.colors.length];
        colArr[i * 3] = cc.r; colArr[i * 3 + 1] = cc.g; colArr[i * 3 + 2] = cc.b;
        colorsDirty = true;
      }
    }
    this.mesh.count = hi;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.mesh.instanceMatrix.clearUpdateRanges();
    this.mesh.instanceMatrix.addUpdateRange(0, hi * 16);
    if (colorsDirty) colAttr.needsUpdate = true;
  }

  reset() {
    this.hi = 0; this.prevHi = 0; this.tCur = 0; this.tPrev = 0;
    this.gens.fill(-1);
    this.mesh.count = 0;
  }
}
