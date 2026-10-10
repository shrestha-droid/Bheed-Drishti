// Moving and stateful parts of the diorama.

import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { GATES, ZONES, type GateMode } from '../sim/world.ts';
import { CONVOY_ROUTE, CORDON, type ScenarioEvent } from '../sim/scenarios.ts';
import type { GateOut } from '../sim/protocol.ts';
import type { TrainState } from '../sim/engine.ts';
import { SX, SZ } from './builder.ts';

const clay = (c: THREE.ColorRepresentation, extra: THREE.MeshStandardMaterialParameters = {}) =>
  new THREE.MeshStandardMaterial({ color: c, roughness: 0.85, ...extra });

function rbox(w: number, h: number, d: number, r: number, mat: THREE.Material) {
  const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2, h / 2, d / 2) - 0.001), mat);
  m.castShadow = true; m.receiveShadow = true;
  return m;
}

// ---------------------------------------------------------------- gates
const STATE_COL: Record<string, string> = { open: '#2fbf71', in: '#2fbf71', out: '#3fa7f5', closed: '#e63946', jammed: '#ff2d55' };

function signTexture(id: string, label: string, col: string) {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 128;
  const g = c.getContext('2d')!;
  g.fillStyle = '#fffaf2';
  g.beginPath(); g.roundRect(4, 4, 248, 120, 26); g.fill();
  g.lineWidth = 8; g.strokeStyle = col; g.stroke();
  g.fillStyle = col;
  g.beginPath(); g.roundRect(14, 14, 100, 100, 20); g.fill();
  g.fillStyle = '#fff';
  g.font = 'bold 76px system-ui, sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(id, 64, 68);
  g.fillStyle = '#2b2b33';
  g.font = 'bold 34px system-ui, sans-serif';
  g.fillText(label, 184, 66);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export class GateViz {
  group = new THREE.Group();
  private items: { sign: THREE.Sprite; boom: THREE.Mesh; lamps: THREE.Mesh[]; key: string; arrow: THREE.Mesh }[] = [];
  private tex = new Map<string, THREE.Texture>();

  constructor() {
    const pillarMat = clay('#f4ecdf');
    const beamMat = clay('#7a4b3a');
    const boomMat = new THREE.MeshStandardMaterial({ color: '#e63946', roughness: 0.6 });
    const arrowMat = new THREE.MeshStandardMaterial({ color: '#2fbf71', emissive: '#2fbf71', emissiveIntensity: 0.35 });
    for (const g of GATES) {
      const r = g.rect;
      const cx = (r.x0 + r.x1) / 2, cz = (r.z0 + r.z1) / 2;
      const span = g.axis === 'x' ? r.x1 - r.x0 : r.z1 - r.z0;
      const grp = new THREE.Group();
      grp.position.set(SX(cx), 0, SZ(cz));
      if (g.axis === 'z') grp.rotation.y = Math.PI / 2;
      const lamps: THREE.Mesh[] = [];
      for (const s of [-1, 1]) {
        const p = rbox(0.7, 3.4, 0.7, 0.15, pillarMat);
        p.position.set(s * (span / 2 + 0.35), 1.7, 0);
        grp.add(p);
        const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 8), new THREE.MeshStandardMaterial({ color: '#2fbf71', emissive: '#2fbf71', emissiveIntensity: 1.2 }));
        lamp.position.set(s * (span / 2 + 0.35), 3.65, 0);
        grp.add(lamp);
        lamps.push(lamp);
      }
      const beam = rbox(span + 1.6, 0.45, 0.6, 0.12, beamMat);
      beam.position.y = 3.3;
      grp.add(beam);
      const boom = rbox(span, 0.32, 0.32, 0.1, boomMat);
      boom.position.y = 1.0;
      grp.add(boom);
      for (let k = -span / 2 + 0.6; k < span / 2; k += 1.2) {
        const st = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.34, 0.34), clay('#ffffff'));
        st.position.set(k, 1.0, 0);
        boom.add(st);
        st.position.y = 0;
      }
      const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.3, 3), arrowMat.clone());
      arrow.rotation.x = Math.PI / 2;
      arrow.position.y = 2.6;
      arrow.visible = false;
      grp.add(arrow);
      const sign = new THREE.Sprite(new THREE.SpriteMaterial({ depthTest: true }));
      sign.scale.set(4.4, 2.2, 1);
      sign.position.set(SX(cx), 5.4, SZ(cz));
      this.group.add(grp);
      this.group.add(sign);
      this.items.push({ sign, boom, lamps, key: '', arrow });
    }
  }

  private texFor(id: string, label: string, col: string) {
    const k = id + label;
    let t = this.tex.get(k);
    if (!t) { t = signTexture(id, label, col); this.tex.set(k, t); }
    return t;
  }

  update(states: GateOut[]) {
    states.forEach((s, i) => {
      const it = this.items[i];
      const st = s.jammed ? 'jammed' : s.closed ? 'closed' : s.mode;
      const key = st;
      if (it.key === key) return;
      it.key = key;
      const col = STATE_COL[st] ?? '#2fbf71';
      const label = st === 'jammed' ? 'JAMMED' : st === 'closed' ? 'CLOSED' : st === 'in' ? 'IN ONLY' : st === 'out' ? 'OUT ONLY' : 'OPEN';
      it.sign.material.map = this.texFor(GATES[i].id, label, col);
      it.sign.material.needsUpdate = true;
      it.boom.visible = st === 'closed' || st === 'jammed';
      for (const l of it.lamps) {
        const m = l.material as THREE.MeshStandardMaterial;
        m.color.set(col); m.emissive.set(col);
      }
      it.arrow.visible = st === 'in' || st === 'out';
      // 'in' points toward the river (+z in sim space) for gates on x-lines
      it.arrow.rotation.x = st === 'in' ? Math.PI / 2 : -Math.PI / 2;
      (it.arrow.material as THREE.MeshStandardMaterial).color.set(col);
      (it.arrow.material as THREE.MeshStandardMaterial).emissive.set(col);
    });
  }

  pulse(clock: number) {
    for (const it of this.items) {
      if (it.key === 'jammed' || it.key === 'closed') {
        const k = it.key === 'jammed' ? 0.6 + 0.6 * Math.sin(clock * 8) : 0.9;
        for (const l of it.lamps) (l.material as THREE.MeshStandardMaterial).emissiveIntensity = k + 0.4;
      }
    }
  }

  modeOf(i: number): GateMode | 'jammed' { return this.items[i].key as GateMode; }
}

// ---------------------------------------------------------------- train
export class Train {
  group = new THREE.Group();
  constructor() {
    const blue = clay('#2f5d9e'), cream = clay('#f1e3c8'), roof = clay('#8d99a6'), red = clay('#c0392b'), white = clay('#f6f1e8'), dark = clay('#2e3440');
    const z = 11.2;
    let x = 14;
    // engine on the west end
    const eng = rbox(16, 3.8, 3.1, 0.5, red);
    eng.position.set(SX(x + 8), 2.4, SZ(z));
    this.group.add(eng);
    const band = rbox(16.1, 0.5, 3.15, 0.2, white);
    band.position.set(SX(x + 8), 2.0, SZ(z));
    this.group.add(band);
    const win = rbox(0.3, 1.0, 2.2, 0.1, dark);
    win.position.set(SX(x + 0.1), 3.4, SZ(z));
    this.group.add(win);
    x += 16.6;
    for (let k = 0; k < 8; k++) {
      const c = rbox(13.8, 3.6, 3.0, 0.5, blue);
      c.position.set(SX(x + 6.9), 2.3, SZ(z));
      const w = rbox(13.0, 0.8, 3.05, 0.2, cream);
      w.position.set(SX(x + 6.9), 2.9, SZ(z));
      const r = rbox(13.4, 0.35, 2.8, 0.15, roof);
      r.position.set(SX(x + 6.9), 4.2, SZ(z));
      this.group.add(c, w, r);
      x += 14.4;
    }
    this.group.visible = false;
  }
  update(s: TrainState) {
    this.group.visible = s.offset !== null;
    if (s.offset !== null) this.group.position.x = s.offset;
  }
}

// ---------------------------------------------------------------- convoy & cordon
export class Convoy {
  group = new THREE.Group();
  cordon = new THREE.Group();
  private cars: THREE.Group[] = [];
  private beacons: THREE.Mesh[] = [];
  constructor() {
    const white = clay('#f7f7f2'), dark = clay('#2b303b'), police = clay('#e9eef5'), blueM = clay('#2c5aa0');
    for (let k = 0; k < 6; k++) {
      const car = new THREE.Group();
      const isPolice = k === 0 || k === 5;
      const body = rbox(4.8, 1.3, 2.0, 0.4, isPolice ? police : white);
      body.position.y = 0.95;
      const cab = rbox(2.8, 0.9, 1.8, 0.35, dark);
      cab.position.set(-0.2, 1.9, 0);
      car.add(body, cab);
      if (isPolice) {
        const stripe = rbox(4.85, 0.25, 2.05, 0.1, blueM);
        stripe.position.y = 1.0;
        car.add(stripe);
      }
      const bc = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.25, 0.5), new THREE.MeshStandardMaterial({ color: '#ff3b30', emissive: '#ff3b30', emissiveIntensity: 2 }));
      bc.position.y = 2.45;
      car.add(bc);
      this.beacons.push(bc);
      this.cars.push(car);
      this.group.add(car);
    }
    const tapeMat = new THREE.MeshStandardMaterial({ color: '#ffd23f', roughness: 0.6 });
    const postMat = clay('#e63946');
    for (const z of [CORDON.z0 + 0.3, CORDON.z1 - 0.3]) {
      for (let x = CORDON.x0; x < CORDON.x1; x += 4) {
        const p = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 1.1, 6), postMat);
        p.position.set(SX(x), 0.55, SZ(z));
        this.cordon.add(p);
      }
      const tape = new THREE.Mesh(new THREE.BoxGeometry(CORDON.x1 - CORDON.x0, 0.12, 0.04), tapeMat);
      tape.position.set(SX((CORDON.x0 + CORDON.x1) / 2), 0.95, SZ(z));
      this.cordon.add(tape);
    }
    this.group.visible = false;
    this.cordon.visible = false;
  }
  update(t: number, ev: ScenarioEvent | undefined, clock: number) {
    if (!ev) { this.group.visible = false; this.cordon.visible = false; return; }
    const t0 = ev.t, t1 = ev.end ?? ev.t + 300;
    this.cordon.visible = t >= t0 && t < t1;
    const R = CONVOY_ROUTE;
    let lead: number;
    if (t < t0) lead = 1e9;
    else if (t < t1 - 25) lead = Math.max(R.xStop, R.xStart - (t - t0) * R.speed);
    else lead = R.xStop + Math.pow(t - (t1 - 25), 2) * 0.35;
    this.group.visible = t >= t0 && lead < 330;
    this.cars.forEach((c, k) => {
      const x = lead + k * 8;
      c.position.set(SX(x), 0.05, SZ(R.z));
      c.rotation.y = Math.PI;
    });
    this.beacons.forEach((b, k) => ((b.material as THREE.MeshStandardMaterial).emissive.set(Math.sin(clock * 10 + k) > 0 ? '#ff3b30' : '#2f6bff')));
  }
}

// ---------------------------------------------------------------- rain
export class Rain {
  mesh: THREE.LineSegments;
  private pos: Float32Array;
  private n = 6000;
  intensity = 0;
  constructor() {
    this.pos = new Float32Array(this.n * 6);
    for (let i = 0; i < this.n; i++) this.reset(i, Math.random() * 60);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.mesh = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: '#cfe3f2', transparent: true, opacity: 0.55 }));
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;
  }
  private reset(i: number, y: number) {
    const x = (Math.random() - 0.5) * 300, z = (Math.random() - 0.5) * 230;
    const o = i * 6;
    this.pos[o] = x; this.pos[o + 1] = y; this.pos[o + 2] = z;
    this.pos[o + 3] = x + 0.25; this.pos[o + 4] = y - 1.6; this.pos[o + 5] = z + 0.15;
  }
  update(dt: number) {
    this.mesh.visible = this.intensity > 0.02;
    if (!this.mesh.visible) return;
    const active = Math.floor(this.n * this.intensity);
    for (let i = 0; i < this.n; i++) {
      const o = i * 6;
      if (i >= active) { this.pos[o + 1] = -100; this.pos[o + 4] = -100; continue; }
      const d = 38 * dt;
      this.pos[o + 1] -= d; this.pos[o + 4] -= d;
      this.pos[o] += 2 * dt; this.pos[o + 3] += 2 * dt;
      if (this.pos[o + 4] < -1) this.reset(i, 40 + Math.random() * 20);
    }
    (this.mesh.geometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
  }
}

// ---------------------------------------------------------------- drone, boats, diyas, PA rings, alert rings
export class Ambient {
  group = new THREE.Group();
  private drone = new THREE.Group();
  private rotors: THREE.Mesh[] = [];
  private droneLight: THREE.Mesh;
  private boats: THREE.Group[] = [];
  diyas: THREE.InstancedMesh;
  private diyaPos: Float32Array;
  private rings: { mesh: THREE.Mesh; t: number }[] = [];
  private alerts: THREE.Mesh[] = [];
  speakers: THREE.Vector3[];

  constructor(speakers: THREE.Vector3[]) {
    this.speakers = speakers;
    // drone (the CV sensor in the sky)
    const body = rbox(1.2, 0.4, 1.2, 0.15, clay('#f4f4f4'));
    this.drone.add(body);
    for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const arm = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.1, 0.1), clay('#3a3f47'));
      arm.position.set(dx * 0.6, 0, dz * 0.6);
      arm.rotation.y = Math.atan2(dz, dx) * -1;
      const rot = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.04, 14), new THREE.MeshStandardMaterial({ color: '#cfd8e3', transparent: true, opacity: 0.6 }));
      rot.position.set(dx * 1.1, 0.25, dz * 1.1);
      this.drone.add(arm, rot);
      this.rotors.push(rot);
    }
    this.droneLight = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), new THREE.MeshStandardMaterial({ color: '#ff3b30', emissive: '#ff3b30', emissiveIntensity: 2 }));
    this.droneLight.position.y = -0.3;
    this.drone.add(this.droneLight);
    const cam = new THREE.Mesh(new THREE.SphereGeometry(0.25, 10, 8), clay('#1d1f24'));
    cam.position.y = -0.35;
    this.drone.add(cam);
    this.drone.traverse(o => { o.castShadow = true; });
    this.group.add(this.drone);

    // boats
    const hullMat = clay('#7a4b2e'), canopies = ['#e4572e', '#29a19c', '#f3a712', '#fbf4e6'];
    for (let k = 0; k < 6; k++) {
      const b = new THREE.Group();
      const hull = rbox(5.2, 0.8, 1.7, 0.35, hullMat);
      hull.position.y = 0.2;
      const can = rbox(2.2, 0.15, 1.8, 0.07, clay(canopies[k % 4]));
      can.position.y = 1.7;
      for (const dx of [-1, 1]) for (const dz of [-0.75, 0.75]) {
        const p = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.2, 4), hullMat);
        p.position.set(dx, 1.1, dz);
        b.add(p);
      }
      b.add(hull, can);
      b.userData = { x: 10 + k * 47, z: 158 + (k % 3) * 5.5, v: 1.2 + (k % 3) * 0.5 };
      this.boats.push(b);
      this.group.add(b);
    }

    // floating diyas (lamps) on the river — visible at night and dusk
    const n = 420;
    this.diyas = new THREE.InstancedMesh(new THREE.SphereGeometry(0.22, 6, 4), new THREE.MeshStandardMaterial({ color: '#ffd27a', emissive: '#ffb347', emissiveIntensity: 2.2 }), n);
    this.diyaPos = new Float32Array(n * 2);
    for (let i = 0; i < n; i++) { this.diyaPos[i * 2] = Math.random() * 280; this.diyaPos[i * 2 + 1] = 151 + Math.random() * 24; }
    this.diyas.frustumCulled = false;
    this.group.add(this.diyas);

    for (let k = 0; k < speakers.length; k++) {
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40), new THREE.MeshBasicMaterial({ color: '#ffd166', transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }));
      ring.position.copy(speakers[k]);
      ring.rotation.x = -Math.PI / 2;
      this.group.add(ring);
      this.rings.push({ mesh: ring, t: -10 });
    }

    // danger halos per zone
    for (const z of ZONES) {
      const r = z.rects[0];
      const rad = Math.min(16, Math.max(5, Math.min(r.x1 - r.x0, r.z1 - r.z0) * 0.7));
      const m = new THREE.Mesh(new THREE.RingGeometry(rad * 0.82, rad, 48), new THREE.MeshBasicMaterial({ color: '#ff2d55', transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }));
      m.rotation.x = -Math.PI / 2;
      m.visible = false;
      this.alerts.push(m);
      this.group.add(m);
    }
  }

  setZoneCenters(centers: { x: number; z: number }[], heights: number[]) {
    centers.forEach((c, i) => this.alerts[i].position.set(SX(c.x), heights[i] + 0.4, SZ(c.z)));
  }

  pulsePA(index: number | 'all', clock: number) {
    for (let k = 0; k < this.rings.length; k++) if (index === 'all' || index === k) this.rings[k].t = clock;
  }

  /** levels: 0 none, 1 warn, 2 danger, 3 critical */
  setAlerts(levels: number[]) {
    levels.forEach((l, i) => {
      const m = this.alerts[i];
      m.visible = l >= 2;
      (m.material as THREE.MeshBasicMaterial).color.set(l >= 3 ? '#ff1f6b' : '#ff4d2e');
      m.userData.level = l;
    });
  }

  update(clock: number, dt: number, night: number, showAlerts: boolean) {
    const a = clock * 0.25;
    this.drone.position.set(SX(119 + Math.sin(a) * 18), 26 + Math.sin(clock * 1.3) * 0.5, SZ(140 + Math.sin(a * 2) * 6));
    this.drone.rotation.y = a;
    for (const r of this.rotors) r.rotation.y += dt * 40;
    (this.droneLight.material as THREE.MeshStandardMaterial).emissiveIntensity = Math.sin(clock * 6) > 0.6 ? 3 : 0.2;
    for (const b of this.boats) {
      const u = b.userData as { x: number; z: number; v: number };
      u.x += u.v * dt;
      if (u.x > 290) u.x = -10;
      b.position.set(SX(u.x), -1.0 + Math.sin(clock * 1.5 + u.z) * 0.08, SZ(u.z));
      b.rotation.z = Math.sin(clock * 1.2 + u.x) * 0.04;
    }
    this.diyas.visible = night > 0.25;
    if (this.diyas.visible) {
      const m = new THREE.Matrix4();
      for (let i = 0; i < this.diyas.count; i++) {
        this.diyaPos[i * 2] += dt * 0.6;
        if (this.diyaPos[i * 2] > 282) this.diyaPos[i * 2] = -2;
        m.makeTranslation(SX(this.diyaPos[i * 2]), -0.95 + Math.sin(clock * 2 + i) * 0.04, SZ(this.diyaPos[i * 2 + 1]));
        this.diyas.setMatrixAt(i, m);
      }
      this.diyas.instanceMatrix.needsUpdate = true;
    }
    for (const r of this.rings) {
      const age = clock - r.t;
      const mat = r.mesh.material as THREE.MeshBasicMaterial;
      if (age < 0 || age > 2.4) { mat.opacity = 0; continue; }
      const ph = (age % 0.8) / 0.8;
      r.mesh.scale.setScalar(1 + ph * 9);
      mat.opacity = (1 - ph) * 0.8 * (1 - age / 2.4);
    }
    for (const m of this.alerts) {
      if (!showAlerts) { m.visible = false; continue; }
      if (!m.visible) continue;
      const ph = (clock * (m.userData.level >= 3 ? 1.6 : 1)) % 1;
      m.scale.setScalar(0.7 + ph * 0.6);
      (m.material as THREE.MeshBasicMaterial).opacity = (1 - ph) * 0.85;
    }
  }

  setAlertsVisible(v: boolean) { for (const m of this.alerts) if (!v) m.visible = false; }
}
