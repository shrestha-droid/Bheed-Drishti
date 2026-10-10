// Accumulates simple clay shapes into one merged, vertex-coloured mesh.
// Coordinates are given in simulation space (x east, z south, metres) and
// converted to scene space (centred on the map).

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { W, H } from '../sim/world.ts';

export const SX = (x: number) => x - W / 2;
export const SZ = (z: number) => z - H / 2;

const tmpColor = new THREE.Color();

export function hash(n: number) {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
}

export class Batch {
  private geos: THREE.BufferGeometry[] = [];
  /** ambient-occlusion-ish darkening toward the ground */
  ao = true;

  push(g: THREE.BufferGeometry, color: THREE.ColorRepresentation, m: THREE.Matrix4, opts: { ao?: boolean; jitter?: number } = {}) {
    let geo = g.index ? g.toNonIndexed() : g.clone();
    geo.deleteAttribute('uv');
    if (geo.getAttribute('uv1')) geo.deleteAttribute('uv1');
    geo.applyMatrix4(m);
    const pos = geo.getAttribute('position');
    const col = new Float32Array(pos.count * 3);
    tmpColor.set(color);
    if (opts.jitter) tmpColor.offsetHSL(0, 0, (Math.random() - 0.5) * opts.jitter);
    const ao = opts.ao ?? this.ao;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const k = ao ? 0.7 + 0.3 * THREE.MathUtils.smoothstep(y, -0.2, 3.2) : 1;
      col[i * 3] = tmpColor.r * k;
      col[i * 3 + 1] = tmpColor.g * k;
      col[i * 3 + 2] = tmpColor.b * k;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    this.geos.push(geo);
    g.dispose();
  }

  /** axis-aligned box from (x0,z0)-(x1,z1), y0..y1, optional rounding */
  box(x0: number, z0: number, x1: number, z1: number, y0: number, y1: number, color: THREE.ColorRepresentation, r = 0, opts?: { ao?: boolean; jitter?: number }) {
    const w = Math.max(0.01, x1 - x0), d = Math.max(0.01, z1 - z0), h = Math.max(0.01, y1 - y0);
    const rr = Math.min(r, w / 2 - 0.001, d / 2 - 0.001, h / 2 - 0.001);
    const g = rr > 0.02 ? new RoundedBoxGeometry(w, h, d, 1, rr) : new THREE.BoxGeometry(w, h, d);
    const m = new THREE.Matrix4().makeTranslation(SX((x0 + x1) / 2), (y0 + y1) / 2, SZ((z0 + z1) / 2));
    this.push(g, color, m, opts);
  }

  /** generic geometry placed at sim (x, z) with y, rotation about Y and scale */
  at(g: THREE.BufferGeometry, color: THREE.ColorRepresentation, x: number, y: number, z: number, rotY = 0, sx = 1, sy = sx, sz = sx, opts?: { ao?: boolean; jitter?: number }) {
    const m = new THREE.Matrix4().compose(
      new THREE.Vector3(SX(x), y, SZ(z)),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rotY),
      new THREE.Vector3(sx, sy, sz),
    );
    this.push(g, color, m, opts);
  }

  build(material: THREE.Material, shadows = true): THREE.Mesh {
    const merged = mergeGeometries(this.geos, false)!;
    merged.computeBoundingSphere();
    for (const g of this.geos) g.dispose();
    this.geos = [];
    const mesh = new THREE.Mesh(merged, material);
    mesh.castShadow = shadows;
    mesh.receiveShadow = true;
    mesh.matrixAutoUpdate = false;
    return mesh;
  }

  get size() { return this.geos.length; }
}

/** Clay material with a "lens dim" uniform that desaturates and lightens the world when an overlay lens is active. */
export function clayMaterial(dim: { value: number }, opts: THREE.MeshStandardMaterialParameters = {}) {
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0, ...opts });
  mat.onBeforeCompile = shader => {
    shader.uniforms.uLensDim = dim;
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uLensDim;')
      .replace('#include <color_fragment>', `#include <color_fragment>
        float lum = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(lum) * 0.9 + 0.08, uLensDim * 0.78);`);
  };
  return mat;
}
