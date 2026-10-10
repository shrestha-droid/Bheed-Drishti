// Renderer: one scene, one or two viewports (fixed plan | AI-guided),
// clay lighting by time of day, and a tilt-shift "miniature" post effect.

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { Pass } from 'three/examples/jsm/postprocessing/Pass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { getShared } from '../sim/shared.ts';
import { W, H, ZONES, GATES } from '../sim/world.ts';
import type { FrameMsg, StatsSim } from '../sim/protocol.ts';
import type { ScenarioEvent } from '../sim/scenarios.ts';
import { buildTown, type TownRefs } from './town.ts';
import { Pilgrims } from './pilgrims.ts';
import { GateViz, Train, Convoy, Rain, Ambient } from './props.ts';
import { DensityLens, FlowLens, CountLens, type LensId } from './lenses.ts';
import { SX, SZ } from './builder.ts';

export type ViewMode = 'fixed' | 'ai' | 'split';

interface Light { bg: string; fog: string; sky: string; ground: string; hemi: number; sun: string; sunI: number; sunPos: [number, number, number]; lamps: number; night: number; exposure: number }
export const LIGHTS: Record<string, Light> = {
  predawn: { bg: '#1f2a4a', fog: '#26325a', sky: '#7f93c9', ground: '#40364a', hemi: 1.15, sun: '#a9bdff', sunI: 1.1, sunPos: [-120, 200, 80], lamps: 2.4, night: 1, exposure: 1.15 },
  morning: { bg: '#f1e4cf', fog: '#efe2cd', sky: '#fff5e6', ground: '#c9a888', hemi: 1.25, sun: '#ffd9a8', sunI: 2.5, sunPos: [160, 150, 120], lamps: 0.3, night: 0, exposure: 1.0 },
  day: { bg: '#ecebe4', fog: '#e9e7df', sky: '#fffaf0', ground: '#c7ab8a', hemi: 1.2, sun: '#fff1db', sunI: 2.7, sunPos: [90, 230, 140], lamps: 0.2, night: 0, exposure: 1.0 },
  overcast: { bg: '#9ba5ae', fog: '#a2abb3', sky: '#d6dee6', ground: '#77706a', hemi: 1.45, sun: '#e0e7ee', sunI: 0.9, sunPos: [40, 230, 100], lamps: 1.0, night: 0.1, exposure: 1.05 },
  dusk: { bg: '#d99a7a', fog: '#c98f7e', sky: '#ffc49b', ground: '#6f4f5a', hemi: 1.1, sun: '#ff9b5e', sunI: 2.0, sunPos: [-200, 90, 60], lamps: 2.0, night: 0.7, exposure: 1.05 },
};

export function lightForClock(sec: number): string {
  const h = sec / 3600;
  if (h < 5.5 || h >= 19.5) return 'predawn';
  if (h < 9.5) return 'morning';
  if (h < 17.5) return 'day';
  return 'dusk';
}

/** Draws the scene into one or two viewports of the composer's read buffer. */
class SplitRenderPass extends Pass {
  view: View;
  constructor(view: View) { super(); this.view = view; this.needsSwap = false; }
  render(renderer: THREE.WebGLRenderer, _w: THREE.WebGLRenderTarget, readBuffer: THREE.WebGLRenderTarget) {
    renderer.setRenderTarget(readBuffer);
    renderer.setClearColor(this.view.scene.background as THREE.Color, 1);
    renderer.clear();
    const v = this.view;
    const w = readBuffer.width, h = readBuffer.height;
    const sims = v.mode === 'split' ? [0, 1] : [v.mode === 'fixed' ? 0 : 1];
    sims.forEach((sim, k) => {
      const x0 = sims.length === 2 ? (k * w) / 2 : 0;
      const vw = sims.length === 2 ? w / 2 : w;
      readBuffer.viewport.set(x0, 0, vw, h);
      readBuffer.scissor.set(x0, 0, vw, h);
      readBuffer.scissorTest = true;
      v.fitCamera(v.camera, vw / h);
      v.prepareFor(sim);
      renderer.setRenderTarget(readBuffer);
      renderer.render(v.scene, v.camera);
    });
    readBuffer.viewport.set(0, 0, w, h);
    readBuffer.scissor.set(0, 0, w, h);
    readBuffer.scissorTest = false;
  }
}

const TiltShift = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    uRes: { value: new THREE.Vector2(1, 1) },
    uAmount: { value: 2.6 },
    uFocus: { value: 0.46 },
    uSplit: { value: 0 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uAmount; uniform float uFocus; uniform float uSplit;
    varying vec2 vUv;
    void main() {
      float d = abs(vUv.y - uFocus);
      float k = smoothstep(0.16, 0.55, d) * uAmount;
      vec4 acc = texture2D(tDiffuse, vUv);
      float wsum = 1.0;
      if (k > 0.05) {
        for (int i = 0; i < 12; i++) {
          float a = float(i) * 2.39996;
          float r = sqrt(float(i) + 0.5) / 3.46;
          vec2 o = vec2(cos(a), sin(a)) * r * k / uRes;
          vec2 uv = vUv + o;
          if (uSplit > 0.5 && (uv.x - 0.5) * (vUv.x - 0.5) < 0.0) uv.x = vUv.x;
          acc += texture2D(tDiffuse, uv);
          wsum += 1.0;
        }
      }
      vec4 col = acc / wsum;
      vec2 c = vUv - 0.5;
      col.rgb *= 1.0 - dot(c, c) * 0.55;
      gl_FragColor = col;
    }`,
};

export class View {
  renderer: THREE.WebGLRenderer;
  scene = new THREE.Scene();
  camera: THREE.PerspectiveCamera;
  controls: OrbitControls;
  composer: EffectComposer;
  private tilt: ShaderPass;
  mode: ViewMode = 'split';
  lens: LensId = 'clay';
  town: TownRefs;
  pilgrims: Pilgrims[];
  gates: GateViz;
  train: Train;
  convoy: Convoy;
  rain: Rain;
  ambient: Ambient;
  density: DensityLens;
  flow: FlowLens;
  count: CountLens;
  private hemi: THREE.HemisphereLight;
  private sun: THREE.DirectionalLight;
  private lightCur: Light;
  private lightTarget: Light;
  stats: (StatsSim | null)[] = [null, null];
  private clock = new THREE.Clock();
  elapsed = 0;
  simTime = 0;
  private frameT = 0;       // sim time of last frame
  private frameWall = 0;    // wall clock when it arrived
  private simRate = 0;      // sim seconds per wall second
  tiltOn = true;
  fps = 60;
  private flyTo: { pos: THREE.Vector3; target: THREE.Vector3; t: number } | null = null;
  onFrameRendered: () => void = () => {};

  constructor(container: HTMLElement) {
    const r = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
    r.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    r.setSize(container.clientWidth, container.clientHeight);
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFSoftShadowMap;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.0;
    container.appendChild(r.domElement);
    this.renderer = r;

    this.camera = new THREE.PerspectiveCamera(30, container.clientWidth / container.clientHeight, 2, 2000);
    this.camera.position.set(-10, 250, 300);
    this.controls = new OrbitControls(this.camera, r.domElement);
    this.controls.target.set(0, 0, 8);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.maxPolarAngle = 1.25;
    this.controls.minDistance = 25;
    this.controls.maxDistance = 620;
    this.controls.screenSpacePanning = false;
    this.controls.update();

    const shared = getShared();
    this.lightCur = { ...LIGHTS.morning };
    this.lightTarget = LIGHTS.morning;
    this.scene.background = new THREE.Color(this.lightCur.bg);
    this.scene.fog = new THREE.Fog(this.lightCur.fog, 420, 1100);
    this.hemi = new THREE.HemisphereLight(this.lightCur.sky, this.lightCur.ground, this.lightCur.hemi);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(this.lightCur.sun, this.lightCur.sunI);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(4096, 4096);
    const sc = this.sun.shadow.camera;
    sc.left = -175; sc.right = 175; sc.top = 150; sc.bottom = -150; sc.near = 10; sc.far = 700;
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.35;
    this.sun.shadow.radius = 3;
    this.scene.add(this.sun, this.sun.target);

    this.town = buildTown(shared.world);
    this.scene.add(this.town.group);
    this.pilgrims = [new Pilgrims(shared.world.height), new Pilgrims(shared.world.height)];
    for (const p of this.pilgrims) this.scene.add(p.mesh);
    this.gates = new GateViz();
    this.train = new Train();
    this.convoy = new Convoy();
    this.rain = new Rain();
    this.ambient = new Ambient(this.town.speakers);
    const zh = ZONES.map((z, i) => {
      const c = shared.world.zoneCenter[i];
      return z.kind === 'ghat' ? -0.4 : shared.world.height[Math.floor(c.z) * W + Math.floor(c.x)];
    });
    this.ambient.setZoneCenters(shared.world.zoneCenter, zh);
    this.scene.add(this.gates.group, this.train.group, this.convoy.group, this.convoy.cordon, this.rain.mesh, this.ambient.group);
    this.density = new DensityLens(shared.world);
    this.flow = new FlowLens(shared.world);
    this.count = new CountLens(shared.world);
    this.scene.add(this.density.mesh, ...this.flow.meshes, ...this.flow.clash, this.count.group);

    const target = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 });
    this.composer = new EffectComposer(r, target);
    this.composer.addPass(new SplitRenderPass(this));
    this.tilt = new ShaderPass(TiltShift);
    this.composer.addPass(this.tilt);
    this.composer.addPass(new OutputPass());
    this.resize(container);
    new ResizeObserver(() => this.resize(container)).observe(container);
  }

  /** narrow viewports zoom out so the whole precinct stays in frame */
  fitCamera(cam: THREE.PerspectiveCamera, aspect: number) {
    cam.aspect = aspect;
    cam.zoom = aspect < 1.1 ? Math.min(1, (aspect / 1.75) * 1.28) : Math.min(1, aspect / 1.75);
    cam.updateProjectionMatrix();
  }

  lite = false;
  /** Cheaper rendering for slow GPUs: 1× pixels, smaller shadows, no crowd shadows, no tilt-shift. */
  setLite(on: boolean) {
    if (this.lite === on) return;
    this.lite = on;
    this.renderer.setPixelRatio(on ? 1 : Math.min(window.devicePixelRatio, 2));
    this.sun.shadow.mapSize.set(on ? 2048 : 4096, on ? 2048 : 4096);
    this.sun.shadow.map?.dispose();
    this.sun.shadow.map = null;
    for (const p of this.pilgrims) p.mesh.castShadow = !on;
    this.tiltOn = !on;
    const el = this.renderer.domElement.parentElement;
    if (el) this.resize(el);
  }

  resize(container: HTMLElement) {
    const w = container.clientWidth, h = container.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
    const pr = this.renderer.getPixelRatio();
    this.tilt.uniforms.uRes.value.set(w * pr, h * pr);
    this.fitCamera(this.camera, w / h);
  }

  setLighting(name: string, immediate = false) {
    this.lightTarget = LIGHTS[name] ?? LIGHTS.day;
    if (immediate) this.lightCur = { ...this.lightTarget };
  }

  /** set per-viewport state before rendering simulation `sim` */
  prepareFor(sim: number) {
    this.pilgrims[0].mesh.visible = sim === 0;
    this.pilgrims[1].mesh.visible = sim === 1;
    const s = this.stats[sim];
    if (s) this.gates.update(s.gates);
    this.density.use(sim);
    this.flow.meshes.forEach((m, k) => (m.visible = this.lens === 'flow' && k === sim));
    this.flow.clash.forEach((m, k) => (m.visible = this.lens === 'flow' && k === sim));
    if (this.lens === 'count' && s) this.count.setData(s);
    if (s) this.ambient.setAlerts(s.zones.map(z => (z.count < 30 ? 0 : z.density >= 5 ? 3 : z.density >= 4 ? 2 : z.density >= 3 ? 1 : 0)));
  }

  pushFrame(f: FrameMsg) {
    const now = performance.now() / 1000;
    if (this.frameWall > 0 && f.t > this.frameT) {
      const rate = (f.t - this.frameT) / Math.max(0.001, now - this.frameWall);
      this.simRate = this.simRate * 0.7 + rate * 0.3;
    }
    if (f.t < this.frameT) { this.simRate = 0; this.pilgrims.forEach(p => p.reset()); }
    this.frameT = f.t;
    this.frameWall = now;
    f.sims.forEach((s, k) => this.pilgrims[k].push(f.t, s.hi, s.buf));
    this.train.update(f.train);
  }

  pushStats(sims: StatsSim[]) {
    sims.forEach((s, k) => {
      this.stats[k] = s;
      this.density.setData(k, s.density);
      this.flow.setData(k, s.flow, this.elapsed);
    });
  }

  setLens(l: LensId) {
    this.lens = l;
    this.density.mesh.visible = l === 'density';
    this.count.group.visible = l === 'count';
    this.town.lensDim.value = l === 'clay' ? 0 : 1;
    this.pilgrims.forEach(p => (p.scale = l === 'clay' ? 1.25 : l === 'density' ? 0.9 : 1.05));
  }

  setMode(m: ViewMode) { this.mode = m; this.tilt.uniforms.uSplit.value = m === 'split' ? 1 : 0; }

  fly(pos: [number, number, number], target: [number, number, number]) {
    this.flyTo = { pos: new THREE.Vector3(...pos), target: new THREE.Vector3(...target), t: 0 };
  }

  focusZone(cx: number, cz: number) {
    const t = new THREE.Vector3(SX(cx), 0, SZ(cz));
    const off = this.camera.position.clone().sub(this.controls.target).setLength(110);
    this.flyTo = { pos: t.clone().add(off), target: t, t: 0 };
  }

  frame(events: { rain?: ScenarioEvent; convoy?: ScenarioEvent }, rainOn: boolean) {
    const dt = Math.min(0.1, this.clock.getDelta());
    this.elapsed += dt;
    this.fps = this.fps * 0.95 + (1 / Math.max(1e-3, dt)) * 0.05;
    // sim time extrapolated from the frame stream (smooth interpolation)
    const now = performance.now() / 1000;
    const tr = this.frameT - 0.0 + Math.min(0.08, now - this.frameWall) * this.simRate - 0.05 * Math.max(0, this.simRate);
    this.simTime = tr;
    for (const p of this.pilgrims) p.update(tr, this.elapsed);

    // lighting blend (+ overcast while raining)
    const k = 1 - Math.exp(-dt * 1.5);
    const target = rainOn ? LIGHTS.overcast : this.lightTarget;
    const L = this.lightCur;
    const mixC = (a: string, b: string) => '#' + new THREE.Color(a).lerp(new THREE.Color(b), k).getHexString();
    L.bg = mixC(L.bg, target.bg); L.fog = mixC(L.fog, target.fog); L.sky = mixC(L.sky, target.sky); L.ground = mixC(L.ground, target.ground); L.sun = mixC(L.sun, target.sun);
    for (const key of ['hemi', 'sunI', 'lamps', 'night', 'exposure'] as const) L[key] += (target[key] - L[key]) * k;
    for (let i = 0; i < 3; i++) L.sunPos[i] += (target.sunPos[i] - L.sunPos[i]) * k;
    (this.scene.background as THREE.Color).set(L.bg);
    (this.scene.fog as THREE.Fog).color.set(L.fog);
    this.hemi.color.set(L.sky); this.hemi.groundColor.set(L.ground); this.hemi.intensity = L.hemi;
    this.sun.color.set(L.sun); this.sun.intensity = L.sunI;
    this.sun.position.set(...L.sunPos); this.sun.target.position.set(0, 0, 0);
    this.town.lampMat.emissiveIntensity = L.lamps;
    this.renderer.toneMappingExposure = L.exposure;
    this.town.waterTime.value = this.elapsed;
    this.density.time.value = this.elapsed;
    this.rain.intensity += ((rainOn ? 1 : 0) - this.rain.intensity) * k;
    this.rain.update(dt);
    this.convoy.update(tr, events.convoy, this.elapsed);
    this.gates.pulse(this.elapsed);
    this.ambient.update(this.elapsed, dt, L.night, this.lens === 'clay' || this.lens === 'count');

    if (this.flyTo) {
      this.flyTo.t = Math.min(1, this.flyTo.t + dt * 1.2);
      const e = 1 - Math.pow(1 - this.flyTo.t, 3);
      this.camera.position.lerp(this.flyTo.pos, e * 0.25 + 0.02);
      this.controls.target.lerp(this.flyTo.target, e * 0.25 + 0.02);
      if (this.flyTo.t >= 1 && this.camera.position.distanceTo(this.flyTo.pos) < 1) this.flyTo = null;
    }
    this.controls.update();
    // keep the target on the board
    const tg = this.controls.target;
    tg.x = THREE.MathUtils.clamp(tg.x, -W / 2, W / 2);
    tg.z = THREE.MathUtils.clamp(tg.z, -H / 2, H / 2);
    tg.y = 0;
    this.tilt.enabled = this.tiltOn;
    const dist = this.camera.position.distanceTo(tg);
    this.tilt.uniforms.uAmount.value = THREE.MathUtils.clamp(5.5 - dist / 90, 1.2, 4.5);
    this.composer.render(dt);
    this.onFrameRendered();
  }

  /** Map a client point to (sim index, sim x, sim z). */
  pick(clientX: number, clientY: number): { sim: number; x: number; z: number } | null {
    const rect = this.renderer.domElement.getBoundingClientRect();
    let px = clientX - rect.left;
    const py = clientY - rect.top;
    let w = rect.width;
    let sim = this.mode === 'ai' ? 1 : 0;
    if (this.mode === 'split') {
      w = rect.width / 2;
      if (px >= w) { sim = 1; px -= w; } else sim = 0;
    }
    const ndc = new THREE.Vector2((px / w) * 2 - 1, -(py / rect.height) * 2 + 1);
    const cam = this.camera.clone();
    this.fitCamera(cam, w / rect.height);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, cam);
    const hit = new THREE.Vector3();
    if (!ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0.5), hit)) return null;
    return { sim, x: hit.x + W / 2, z: hit.z + H / 2 };
  }

  /** Project a world point for viewport `vp` (0 = left/single, 1 = right in split). */
  project(x: number, y: number, z: number, vp: number): { x: number; y: number; visible: boolean } {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const split = this.mode === 'split';
    const w = split ? rect.width / 2 : rect.width;
    const cam = this.projCam;
    cam.copy(this.camera);
    this.fitCamera(cam, w / rect.height);
    const v = new THREE.Vector3(SX(x), y, SZ(z)).project(cam);
    const visible = v.z < 1 && Math.abs(v.x) < 1.05 && Math.abs(v.y) < 1.05;
    return { x: (v.x * 0.5 + 0.5) * w + (split && vp === 1 ? w : 0), y: (-v.y * 0.5 + 0.5) * rect.height, visible };
  }
  private projCam = new THREE.PerspectiveCamera();

  gateWorld(i: number) {
    const r = GATES[i].rect;
    return { x: (r.x0 + r.x1) / 2, z: (r.z0 + r.z1) / 2 };
  }
}
