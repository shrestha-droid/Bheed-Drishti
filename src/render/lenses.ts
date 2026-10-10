// Analytical overlays: density heatmap (p/m²), flow arrows with counter-flow
// highlighting, and zone count plates.

import * as THREE from 'three';
import { W, H, ZONES, type WorldGrid } from '../sim/world.ts';
import { FW, FH, FCELL } from '../sim/shared.ts';
import { DENSITY_SCALE, type StatsSim } from '../sim/protocol.ts';
import { SX, SZ } from './builder.ts';

export type LensId = 'clay' | 'density' | 'flow' | 'count';

// ------------------------------------------------------------------ density
export class DensityLens {
  mesh: THREE.Mesh;
  textures: THREE.DataTexture[];
  private mat: THREE.ShaderMaterial;
  time = { value: 0 };

  constructor(world: WorldGrid) {
    const geo = new THREE.PlaneGeometry(W, H, W, H);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.getAttribute('position');
    for (let i = 0; i < pos.count; i++) {
      const x = Math.min(W - 1, Math.max(0, Math.floor(pos.getX(i) + W / 2)));
      const z = Math.min(H - 1, Math.max(0, Math.floor(pos.getZ(i) + H / 2)));
      pos.setY(i, Math.max(world.height[z * W + x], world.height[z * W + Math.max(0, x - 1)]) + 0.14);
    }
    this.textures = [0, 1].map(() => {
      const t = new THREE.DataTexture(new Uint8Array(W * H), W, H, THREE.RedFormat, THREE.UnsignedByteType);
      t.magFilter = THREE.LinearFilter;
      t.minFilter = THREE.LinearFilter;
      t.flipY = false;
      t.needsUpdate = true;
      return t;
    });
    this.mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { tDensity: { value: this.textures[0] }, uTime: this.time, uScale: { value: 255 / DENSITY_SCALE } },
      vertexShader: `
        varying vec2 vUv;
        void main() { vUv = vec2(uv.x, 1.0 - uv.y); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `
        uniform sampler2D tDensity; uniform float uTime; uniform float uScale;
        varying vec2 vUv;
        vec3 ramp(float d) {
          vec3 c0 = vec3(0.16, 0.62, 0.66);  // sparse — teal
          vec3 c1 = vec3(0.45, 0.80, 0.36);  // 1.5 comfortable — green
          vec3 c2 = vec3(0.98, 0.84, 0.25);  // 2.5 dense — yellow
          vec3 c3 = vec3(1.00, 0.55, 0.15);  // 3.5 very dense — orange
          vec3 c4 = vec3(0.93, 0.13, 0.20);  // 4.5 danger — red
          vec3 c5 = vec3(1.00, 0.20, 0.65);  // 6 critical — magenta
          if (d < 1.5) return mix(c0, c1, d / 1.5);
          if (d < 2.5) return mix(c1, c2, d - 1.5);
          if (d < 3.5) return mix(c2, c3, d - 2.5);
          if (d < 4.5) return mix(c3, c4, d - 3.5);
          return mix(c4, c5, clamp((d - 4.5) / 1.5, 0.0, 1.0));
        }
        void main() {
          float d = texture2D(tDensity, vUv).r * uScale;
          if (d < 0.15) discard;
          vec3 col = ramp(d);
          float a = smoothstep(0.15, 1.0, d) * 0.82;
          if (d >= 4.0) {
            float p = 0.5 + 0.5 * sin(uTime * 6.0);
            col = mix(col, vec3(1.0, 0.95, 0.95), p * 0.35 * smoothstep(4.0, 5.5, d));
            a = 0.92;
          }
          gl_FragColor = vec4(col, a);
          #include <colorspace_fragment>
        }`,
    });
    this.mesh = new THREE.Mesh(geo, this.mat);
    this.mesh.renderOrder = 2;
    this.mesh.visible = false;
  }

  setData(sim: number, data: Uint8Array) {
    const t = this.textures[sim];
    (t.image.data as Uint8Array).set(data);
    t.needsUpdate = true;
  }

  use(sim: number) { this.mat.uniforms.tDensity.value = this.textures[sim]; }
}

// ------------------------------------------------------------------ flow
export class FlowLens {
  meshes: THREE.InstancedMesh[];
  clash: THREE.InstancedMesh[];
  private cellY: Float32Array;
  constructor(world: WorldGrid) {
    const shape = new THREE.Shape();
    shape.moveTo(-0.18, -0.9); shape.lineTo(0.18, -0.9); shape.lineTo(0.18, 0.15); shape.lineTo(0.55, 0.15);
    shape.lineTo(0, 1.0); shape.lineTo(-0.55, 0.15); shape.lineTo(-0.18, 0.15); shape.lineTo(-0.18, -0.9);
    const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.12, bevelEnabled: false });
    geo.rotateX(-Math.PI / 2); // lie flat, pointing -z (scene)
    geo.rotateY(Math.PI);      // point +z
    const n = FW * FH;
    const mk = () => {
      const m = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ color: '#ffffff' }), n);
      m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 3), 3);
      m.count = 0; m.frustumCulled = false; m.visible = false; m.renderOrder = 3;
      return m;
    };
    this.meshes = [mk(), mk()];
    const ringGeo = new THREE.RingGeometry(1.4, 2.0, 24);
    ringGeo.rotateX(-Math.PI / 2);
    const mkRing = () => {
      const m = new THREE.InstancedMesh(ringGeo, new THREE.MeshBasicMaterial({ color: '#ff2bd6', transparent: true, opacity: 0.85, depthWrite: false }), n);
      m.count = 0; m.frustumCulled = false; m.visible = false; m.renderOrder = 3;
      return m;
    };
    this.clash = [mkRing(), mkRing()];
    this.cellY = new Float32Array(n);
    for (let f = 0; f < n; f++) {
      const x = Math.min(W - 1, (f % FW) * FCELL + 2), z = Math.min(H - 1, Math.floor(f / FW) * FCELL + 2);
      this.cellY[f] = world.height[z * W + x];
    }
  }

  setData(sim: number, flow: Float32Array, clock: number) {
    const m = this.meshes[sim], r = this.clash[sim];
    const mat = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);
    const col = new THREE.Color();
    let k = 0, kr = 0;
    for (let f = 0; f < FW * FH; f++) {
      const n = flow[f * 4 + 3];
      if (n < 2) continue;
      const vx = flow[f * 4], vz = flow[f * 4 + 1], cf = flow[f * 4 + 2];
      const sp = Math.hypot(vx, vz);
      const cx = (f % FW) * FCELL + FCELL / 2, cz = Math.floor(f / FW) * FCELL + FCELL / 2;
      p.set(SX(cx), this.cellY[f] + 0.5, SZ(cz));
      const clashy = cf > 0.35 && n >= 5;
      if (sp > 0.08) {
        q.setFromAxisAngle(up, Math.atan2(vx, vz));
        const len = 0.8 + Math.min(1.6, sp) * 1.2;
        s.set(0.9 + Math.min(n, 30) * 0.02, 1, len);
        mat.compose(p, q, s);
        m.setMatrixAt(k, mat);
        if (clashy) col.set('#ff2bd6');
        else if (sp < 0.4) col.set('#ff9f1c');
        else if (sp < 0.8) col.set('#ffd23f');
        else col.set('#3ddc97');
        m.setColorAt(k, col);
        k++;
      }
      if (clashy) {
        const pulse = 0.8 + 0.3 * Math.sin(clock * 5 + f);
        mat.compose(p.setY(p.y - 0.3), new THREE.Quaternion(), s.set(pulse, 1, pulse));
        r.setMatrixAt(kr++, mat);
      }
    }
    m.count = k; r.count = kr;
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
    r.instanceMatrix.needsUpdate = true;
  }
}

// ------------------------------------------------------------------ count plates
export class CountLens {
  group = new THREE.Group();
  private plates: THREE.Mesh[][] = [];
  private mats: THREE.MeshBasicMaterial[] = [];
  readonly caps: number[];

  constructor(world: WorldGrid) {
    this.caps = ZONES.map((z, i) => Math.round(world.zoneArea[i] * z.cap));
    ZONES.forEach(z => {
      const mat = new THREE.MeshBasicMaterial({ color: '#3ddc97', transparent: true, opacity: 0.35, depthWrite: false });
      this.mats.push(mat);
      const list: THREE.Mesh[] = [];
      for (const r of z.rects) {
        const y = Math.max(world.height[Math.min(H - 1, r.z0) * W + Math.min(W - 1, r.x0)], 0) + 0.2;
        const plane = new THREE.Mesh(new THREE.PlaneGeometry(r.x1 - r.x0 - 0.4, r.z1 - r.z0 - 0.4), mat);
        plane.rotation.x = -Math.PI / 2;
        plane.position.set(SX((r.x0 + r.x1) / 2), z.kind === 'ghat' ? 0.45 : z.kind === 'bridge' ? 0.6 : y, SZ((r.z0 + r.z1) / 2));
        plane.renderOrder = 1;
        const edges = new THREE.LineSegments(new THREE.EdgesGeometry(plane.geometry), new THREE.LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.7 }));
        plane.add(edges);
        list.push(plane);
        this.group.add(plane);
      }
      this.plates.push(list);
    });
    this.group.visible = false;
  }

  setData(stats: StatsSim) {
    stats.zones.forEach((z, i) => {
      const ratio = z.count / Math.max(1, this.caps[i]);
      const mat = this.mats[i];
      mat.color.set(ratio < 0.5 ? '#3ddc97' : ratio < 0.8 ? '#ffd23f' : ratio < 1 ? '#ff9f1c' : '#ff3355');
      mat.opacity = 0.18 + Math.min(1, ratio) * 0.42;
    });
  }
}
