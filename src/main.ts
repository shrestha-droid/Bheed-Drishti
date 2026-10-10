import './styles.css';
import { View, lightForClock, type ViewMode } from './render/view.ts';
import type { LensId } from './render/lenses.ts';
import { SimHost } from './host.ts';
import { SCENARIOS, SCENARIO_INDEX, type Scenario } from './sim/scenarios.ts';
import { ZONES, GATES, NO_ZONE, W } from './sim/world.ts';
import { getShared } from './sim/shared.ts';
import type { FromRunner, StatsSim, MetricsOut } from './sim/protocol.ts';
import type { LogEntry, SeriesPoint } from './sim/sim.ts';
import { drawChart, drawSpark } from './ui/chart.ts';
import results from './data/results.json';

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;
const shared = getShared();
const world = shared.world;
const CAPS = ZONES.map((z, i) => Math.round(world.zoneArea[i] * z.cap));

// ------------------------------------------------------------------ state
const st = {
  scenario: SCENARIO_INDEX.snan as Scenario,
  lens: 'clay' as LensId,
  mode: 'split' as ViewMode,
  speed: 4,
  paused: false,
  ready: false,
  t: 0,
  stats: [null, null] as (StatsSim | null)[],
  series: [[], []] as SeriesPoint[][],
  log: [] as LogEntry[],
  logFilter: 'ai' as 'ai' | 'alert' | 'all',
  inspect: null as null | { sim: number; zone: number },
  hist: [ZONES.map(() => [] as number[]), ZONES.map(() => [] as number[])],
  lastHistT: -1,
  statsVersion: 0,
  done: false,
};

const stage = $('stage');
const view = new View(stage);
if (new URLSearchParams(location.search).has('lite')) view.setLite(true);
// drop to lite rendering once if the GPU cannot keep up
let slowSince = 0;
setInterval(() => {
  if (view.lite || document.hidden || still) return;
  if (view.fps < 24) { if (!slowSince) slowSince = performance.now(); else if (performance.now() - slowSince > 4000) view.setLite(true); }
  else slowSince = 0;
}, 1000);
const host = new SimHost();

// ------------------------------------------------------------------ helpers
const fmtClock = (sec: number, withSec = true) => {
  const s = ((Math.floor(sec) % 86400) + 86400) % 86400;
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), ss = s % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}${withSec ? ':' + String(ss).padStart(2, '0') : ''}`;
};
const sev = (d: number) => (d >= 5 ? 'critical' : d >= 4 ? 'danger' : d >= 3 ? 'warn' : 'ok');
const sevWord = (d: number) => (d >= 5 ? 'Critical' : d >= 4 ? 'Danger' : d >= 3 ? 'Very dense' : d >= 2 ? 'Dense' : 'Comfortable');
const css = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

// ------------------------------------------------------------------ simulation messages
host.onMessage = (m: FromRunner) => {
  switch (m.type) {
    case 'progress':
      $('loadingBar').style.width = `${Math.round(m.p * 100)}%`;
      break;
    case 'ready':
      st.ready = true;
      $('loading').hidden = true;
      break;
    case 'frame':
      if (!st.ready) break;
      st.t = m.t;
      view.pushFrame(m);
      break;
    case 'stats':
      if (!st.ready) break;
      onStats(m.sims, m.log, m.t, m.speed);
      break;
    case 'done':
      st.done = true;
      setTimeout(showReport, 600);
      break;
  }
};

function onStats(sims: StatsSim[], engineLog: LogEntry[], t: number, eff: number) {
  st.stats = sims;
  st.statsVersion++;
  view.pushStats(sims);
  sims.forEach((s, k) => st.series[k].push(...s.series));
  if (t - st.lastHistT >= 1 || t < st.lastHistT) {
    st.lastHistT = t;
    sims.forEach((s, k) => s.zones.forEach((z, zi) => {
      const h = st.hist[k][zi];
      h.push(z.density);
      if (h.length > 240) h.shift();
    }));
  }
  const fresh = [...engineLog, ...sims.flatMap(s => s.log)].sort((a, b) => a.t - b.t);
  if (fresh.length) {
    st.log.push(...fresh);
    for (const e of fresh) {
      if (e.sim === 1 && e.kind === 'pa') pulseSpeaker(e.zone);
      appendLog(e);
    }
  }
  renderKpis(sims.map(s => s.metrics));
  renderChart();
  updateInspect();
  $('perf').textContent = `${Math.round(view.fps)} fps · ×${eff.toFixed(1)}`;
}

function pulseSpeaker(zone?: number) {
  if (zone === undefined) { view.ambient.pulsePA('all', view.elapsed); return; }
  const c = world.zoneCenter[zone];
  let best = 0, bd = Infinity;
  view.town.speakers.forEach((p, i) => {
    const d = Math.hypot(p.x + W / 2 - c.x, p.z + 105 - c.z);
    if (d < bd) { bd = d; best = i; }
  });
  view.ambient.pulsePA(best, view.elapsed);
}

// ------------------------------------------------------------------ KPIs
const KPI_DEFS: { k: string; sub?: string; get: (m: MetricsOut) => number; fmt: (v: number) => string; sev?: (v: number) => string; head?: boolean; aiOnly?: boolean }[] = [
  { k: 'Densest zone now', sub: 'person-weighted p/m²', get: m => m.nowPeak, fmt: v => v.toFixed(1), sev: v => sev(v), head: true },
  { k: 'Highest so far', sub: 'p/m²', get: m => m.peakZone, fmt: v => v.toFixed(1), sev: v => sev(v) },
  { k: 'Minutes in danger zone', sub: 'any zone ≥ 4 p/m²', get: m => m.dangerTime / 60, fmt: v => v.toFixed(1), sev: v => (v >= 3 ? 'critical' : v > 0 ? 'danger' : 'ok'), head: true },
  { k: 'People in crush-risk spots', sub: 'local density ≥ 4', get: m => m.nowInDanger, fmt: v => Math.round(v).toLocaleString('en-IN'), sev: v => (v >= 200 ? 'critical' : v > 20 ? 'danger' : v > 0 ? 'warn' : 'ok') },
  { k: 'Pilgrims on site', get: m => m.onsite, fmt: v => Math.round(v).toLocaleString('en-IN') },
  { k: 'Bathers served', get: m => m.bathed, fmt: v => Math.round(v).toLocaleString('en-IN') },
  { k: 'Held or waiting', sub: 'holding ground, camp, buses', get: m => m.held, fmt: v => Math.round(v).toLocaleString('en-IN') },
  { k: 'Control actions', sub: 'gates · PA · holds', get: m => m.actions, fmt: v => String(Math.round(v)), aiOnly: true },
];
const kpiRows = $('kpiRows');
kpiRows.innerHTML = KPI_DEFS.map((d, i) => `<div class="kpi-row${d.head ? ' head' : ''}"><span class="k">${d.k}${d.sub ? `<small>${d.sub}</small>` : ''}</span><span class="v" id="kf${i}">–</span><span class="v" id="ka${i}">–</span></div>`).join('');
function renderKpis(ms: MetricsOut[]) {
  KPI_DEFS.forEach((d, i) => {
    ms.forEach((m, k) => {
      const el = $(`k${k ? 'a' : 'f'}${i}`);
      if (d.aiOnly && k === 0) { el.textContent = '—'; el.className = 'v'; return; }
      const v = d.get(m);
      el.textContent = d.fmt(v);
      el.className = 'v' + (d.sev ? ' ' + d.sev(v) : '');
    });
  });
}

// ------------------------------------------------------------------ chart
const chart = $<HTMLCanvasElement>('chart');
function renderChart() {
  drawChart(chart, {
    duration: st.scenario.duration,
    series: [st.series[0].map(p => [p.t, p.peak]), st.series[1].map(p => [p.t, p.peak])],
    colors: [css('--fixed'), css('--ai')],
    ink: css('--ink-2'), grid: css('--line'), danger: css('--danger'), critical: css('--critical'),
    events: st.scenario.events.map(e => ({ t: e.t, end: e.end, label: e.kind === 'surge' ? 'muhurat' : e.kind })),
    accent: css('--saffron'),
  });
}

// ------------------------------------------------------------------ log
const logEl = $('log');
function logVisible(e: LogEntry) {
  if (st.logFilter === 'all') return true;
  if (e.sim === -1) return true;
  if (st.logFilter === 'ai') return e.sim === 1 && e.kind !== 'alert' && e.kind !== 'ok';
  return e.kind === 'alert' || e.kind === 'ok';
}
function logItem(e: LogEntry) {
  const li = document.createElement('li');
  li.className = e.kind;
  const who = e.sim === -1 ? '<span class="who s">Event</span>' : e.sim === 0 ? '<span class="who f">Fixed</span>' : '<span class="who a">AI</span>';
  li.innerHTML = `<time>${fmtClock(st.scenario.clockStart + e.t, false)}</time><span>${who}<span class="txt"></span></span>`;
  li.querySelector('.txt')!.textContent = e.text;
  if (e.zone !== undefined) { li.style.cursor = 'pointer'; li.title = 'Inspect this zone'; li.onclick = () => openInspect(e.sim < 0 ? 1 : e.sim, e.zone!, true); }
  return li;
}
function appendLog(e: LogEntry) {
  if (!logVisible(e)) return;
  logEl.querySelector('.empty')?.remove();
  logEl.prepend(logItem(e));
  while (logEl.children.length > 250) logEl.lastElementChild?.remove();
}
function rerenderLog() {
  logEl.innerHTML = '';
  const items = st.log.filter(logVisible).slice(-250).reverse();
  if (!items.length) { logEl.innerHTML = '<li class="empty">Nothing yet. AI gate changes, PA announcements and holds appear here as they happen.</li>'; return; }
  for (const e of items) logEl.append(logItem(e));
}

// ------------------------------------------------------------------ labels
const labelsEl = $('labels');
const pool: HTMLDivElement[] = [];
interface Lbl { x: number; y: number; z: number; vp: number; html: string; cls: string }
let lbls: Lbl[] = [];
let lblVersion = -1;
function zoneY(zi: number) { const z = ZONES[zi]; return z.kind === 'ghat' ? 1.5 : z.kind === 'bridge' ? 2.5 : 3.2; }
function buildLabels() {
  lbls = [];
  const vps = st.mode === 'split' ? [0, 1] : [st.mode === 'fixed' ? 0 : 1];
  vps.forEach((sim, k) => {
    const s = st.stats[sim];
    if (!s) return;
    const vp = st.mode === 'split' ? k : 0;
    s.zones.forEach((z, zi) => {
      const c = world.zoneCenter[zi];
      const zd = ZONES[zi];
      const d = z.density;
      const big = z.count >= 30;
      if (st.lens === 'clay') {
        if (big && d >= 4) lbls.push({ x: c.x, y: zoneY(zi) + 2, z: c.z, vp, cls: sev(d), html: `${zd.short} · ${d.toFixed(1)} p/m²<small>${d >= 5 ? 'crush risk' : 'danger'} · ${Math.round(z.count)} people</small>` });
        else if (zd.kind === 'hold' && z.count >= 30) lbls.push({ x: c.x, y: 5, z: c.z, vp, cls: 'warn', html: `Holding Ground<small>${Math.round(z.count)} waiting</small>` });
      } else if (st.lens === 'density') {
        if (big && d >= 1.2) lbls.push({ x: c.x, y: zoneY(zi), z: c.z, vp, cls: sev(d), html: `${zd.short}<small>${d.toFixed(1)} p/m²</small>` });
      } else if (st.lens === 'flow') {
        if (z.count >= 20 && z.cfi > 0.3 && d > 0.9) lbls.push({ x: c.x, y: zoneY(zi), z: c.z, vp, cls: d >= 4 ? 'danger' : 'cf', html: `${zd.short}<small>counter-flow ${Math.round(z.cfi * 100)}% · ${z.speed.toFixed(2)} m/s</small>` });
      } else if (st.lens === 'count') {
        if (z.count >= 1) {
          const ratio = z.count / Math.max(1, CAPS[zi]);
          const cls = ratio >= 1 ? 'danger' : ratio >= 0.8 ? 'warn' : 'ok';
          lbls.push({ x: c.x, y: zoneY(zi), z: c.z, vp, cls, html: `${zd.short}<small>${Math.round(z.count).toLocaleString('en-IN')} / ${CAPS[zi].toLocaleString('en-IN')}</small><span class="mini" style="color:var(--${cls === 'ok' ? 'ok' : cls})"><i style="width:${Math.min(100, ratio * 100)}%"></i></span>` });
        }
      }
    });
    if (st.lens === 'count') {
      s.gates.forEach((g, gi) => {
        const r = GATES[gi].rect;
        const state = g.jammed ? 'jammed' : g.closed ? 'closed' : g.mode === 'in' ? 'in only' : g.mode === 'out' ? 'out only' : 'open';
        lbls.push({ x: (r.x0 + r.x1) / 2, y: 7.5, z: (r.z0 + r.z1) / 2, vp, cls: 'gate', html: `Gate ${GATES[gi].id} · ${Math.round(g.rate)}/min<small>${state}</small>` });
      });
    }
  });
  const rank = (c: string) => (c.includes('critical') ? 0 : c.includes('danger') ? 1 : c.includes('warn') ? 2 : c === 'gate' ? 4 : 3);
  lbls.sort((a, b) => rank(a.cls) - rank(b.cls));
  while (pool.length < lbls.length) { const d = document.createElement('div'); labelsEl.append(d); pool.push(d); }
  pool.forEach((d, i) => {
    if (i >= lbls.length) { d.hidden = true; return; }
    d.hidden = false;
    d.className = 'lbl ' + lbls[i].cls;
    d.innerHTML = lbls[i].html;
  });
}
function placeLabels() {
  if (lblVersion !== st.statsVersion) { lblVersion = st.statsVersion; buildLabels(); }
  const half = st.mode === 'split' ? stage.clientWidth / 2 : stage.clientWidth;
  const placed: [number, number, number, number][] = [];
  lbls.forEach((l, i) => {
    const p = view.project(l.x, l.y, l.z, l.vp);
    const d = pool[i];
    let ok = p.visible && p.x > l.vp * half + (l.vp === 0 ? 100 : 20) && p.x < (l.vp + 1) * half - 20;
    if (ok) {
      // skip labels that would sit on top of one already placed (danger labels come first)
      const w = d.offsetWidth || 90, h = d.offsetHeight || 30;
      const box: [number, number, number, number] = [p.x - w / 2, p.y - h, p.x + w / 2, p.y];
      ok = !placed.some(b => box[0] < b[2] && box[2] > b[0] && box[1] < b[3] && box[3] > b[1]);
      if (ok) placed.push(box);
    }
    d.style.visibility = ok ? 'visible' : 'hidden';
    d.style.left = `${p.x}px`;
    d.style.top = `${p.y}px`;
  });
}

// ------------------------------------------------------------------ inspector
const insp = $('inspect');
function openInspect(sim: number, zone: number, fly = false) {
  if (st.mode !== 'split' && ((st.mode === 'fixed') !== (sim === 0))) sim = st.mode === 'fixed' ? 0 : 1;
  st.inspect = { sim, zone };
  insp.hidden = false;
  if (fly) { const c = world.zoneCenter[zone]; view.focusZone(c.x, c.z); }
  updateInspect();
}
function closeInspect() { st.inspect = null; insp.hidden = true; }
$('inspectClose').onclick = closeInspect;

function updateInspect() {
  if (!st.inspect) return;
  const { sim, zone } = st.inspect;
  const s = st.stats[sim];
  if (!s) return;
  const z = s.zones[zone];
  const zd = ZONES[zone];
  const d = z.density;
  const sv = sev(d);
  const color = css(`--${sv}`);
  insp.style.borderTopColor = color;
  $('inspPlan').innerHTML = `<i class="dot ${sim ? 'ai' : 'fixed'}"></i>${sim ? 'AI-guided routing' : 'Fixed barricade plan'}`;
  $('inspTitle').textContent = zd.name;
  $('inspDensity').textContent = d.toFixed(1);
  $('inspDensity').style.color = color;
  const slope = z.slope;
  const trend = slope > 0.08 ? 'rising' : slope < -0.08 ? 'falling' : 'steady';
  let ttc = '';
  if (d >= 5) ttc = 'critical now';
  else if (slope > 0.08) { const m = (5 - d) / slope; ttc = m < 30 ? `${Math.max(1, Math.round(m))} min to critical` : 'far from critical'; }
  else ttc = d >= 4 ? 'holding in danger' : 'no critical trend';
  $('inspState').innerHTML = `<b style="background:${color}">${sevWord(d)}</b><br>${trend} ${slope >= 0 ? '+' : ''}${slope.toFixed(2)}/min<br>${ttc}`;
  const adv = s.advice[zone] || 'Normal — keep monitoring';
  const advShort = adv.split(' · ').slice(0, 2).join(', ').replace(/^./, c => c.toLowerCase());
  $('inspLine').textContent = `${zd.short} · ${d.toFixed(1)} p/m² · ${trend} · ${ttc} · action: ${advShort}`;
  $('inspCount').textContent = `${Math.round(z.count).toLocaleString('en-IN')} / ${CAPS[zone].toLocaleString('en-IN')}`;
  $('inspSpeed').textContent = `${z.speed.toFixed(2)} m/s`;
  $('inspCf').textContent = `${Math.round(z.cfi * 100)}%`;
  $('inspPressure').textContent = `${z.pressure.toFixed(3)} /s²`;
  const normal = adv.startsWith('Normal') || adv.startsWith('Standby');
  const box = insp.querySelector('.insp-action')!;
  box.className = 'insp-action ' + (sim === 1 && !normal ? 'acting' : sim === 0 && !normal ? 'idle' : '');
  $('inspActionLabel').textContent = sim === 1 ? (normal ? 'AI controller · no action needed' : 'AI controller is acting') : (normal ? 'Recommended action' : 'Fixed plan · not actioned. The AI would:');
  $('inspAction').textContent = adv;
  drawSpark($<HTMLCanvasElement>('inspSpark'), st.hist[sim][zone], st.hist[1 - sim][zone], {
    main: sim ? css('--ai') : css('--fixed'), other: sim ? css('--fixed') : css('--ai'), grid: css('--line'), danger: css('--danger'), ink: css('--ink-3'),
  });
}
function placeInspect() {
  if (!st.inspect) return;
  const c = world.zoneCenter[st.inspect.zone];
  const vp = st.mode === 'split' ? st.inspect.sim : 0;
  const p = view.project(c.x, 2, c.z, vp);
  const w = insp.offsetWidth, h = insp.offsetHeight;
  const sw = stage.clientWidth, sh = stage.clientHeight;
  let x = p.x + 24, y = p.y - h / 2;
  if (x + w > sw - 12) x = p.x - w - 24;
  x = Math.max(12, Math.min(sw - w - 12, x));
  y = Math.max(60, Math.min(sh - h - 12, y));
  insp.style.left = `${x}px`;
  insp.style.top = `${y}px`;
}

// ------------------------------------------------------------------ picking
let down: { x: number; y: number } | null = null;
view.renderer.domElement.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY }; });
view.renderer.domElement.addEventListener('pointerup', e => {
  if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 6) return;
  down = null;
  const p = view.pick(e.clientX, e.clientY);
  if (!p) return;
  const zi = zoneAt(p.x, p.z);
  if (zi === NO_ZONE) { closeInspect(); return; }
  openInspect(p.sim, zi);
});
function zoneAt(x: number, z: number) {
  const xi = Math.floor(x), zi = Math.floor(z);
  let best = NO_ZONE, bd = 5;
  for (let dz = -4; dz <= 4; dz++) for (let dx = -4; dx <= 4; dx++) {
    const cx = xi + dx, cz = zi + dz;
    if (cx < 0 || cz < 0 || cx >= W || cz >= 210) continue;
    const v = world.zone[cz * W + cx];
    const dd = Math.hypot(dx, dz);
    if (v !== NO_ZONE && dd < bd) { bd = dd; best = v; }
  }
  return best;
}

// ------------------------------------------------------------------ legend
function renderLegend() {
  const L = $('legend');
  if (st.lens === 'density') {
    L.innerHTML = `<b>People per m²</b><div class="ramp"></div><div class="ticks"><span>0</span><span>1.5</span><span>2.5</span><span>3.5</span><span>4.5</span><span>6+</span></div><div class="muted" style="margin-top:4px">Red above 4: crush possible. Magenta above 5: critical.</div>`;
  } else if (st.lens === 'flow') {
    L.innerHTML = `<div class="row"><b>Flow</b><span><i class="sw" style="background:#3ddc97"></i>free walking</span><span><i class="sw" style="background:#ffd23f"></i>slowing</span><span><i class="sw" style="background:#ff9f1c"></i>shuffling</span><span><i class="sw" style="background:#ff2bd6"></i>counter-flow (crowds pushing into each other)</span></div>`;
  } else if (st.lens === 'count') {
    L.innerHTML = `<div class="row"><b>Head count vs safe capacity</b><span><i class="sw" style="background:#3ddc97"></i>&lt; 50%</span><span><i class="sw" style="background:#ffd23f"></i>50–80%</span><span><i class="sw" style="background:#ff9f1c"></i>80–100%</span><span><i class="sw" style="background:#ff3355"></i>over capacity</span></div>`;
  } else {
    L.innerHTML = `<div class="row"><b>Clay view</b><span>One figure = one pilgrim</span><span><i class="sw" style="background:#ff2d55"></i>red rings: zone above 4 p/m²</span><span><i class="sw" style="background:#ffd166"></i>PA announcement</span></div>`;
  }
}

// ------------------------------------------------------------------ controls
function setSeg(segId: string, attr: string, val: string) {
  $(segId).querySelectorAll('button').forEach(b => b.classList.toggle('on', b.getAttribute(attr) === val));
}
function setLens(l: LensId) {
  st.lens = l;
  view.setLens(l);
  document.querySelectorAll<HTMLButtonElement>('.lens-rail > button').forEach(b => b.classList.toggle('on', b.dataset.lens === l));
  renderLegend();
  lblVersion = -1;
}
function setMode(m: ViewMode) {
  st.mode = m;
  view.setMode(m);
  setSeg('viewSeg', 'data-view', m);
  stage.classList.toggle('split-off', m !== 'split');
  splitLine.hidden = m !== 'split';
  $('tagLeft').innerHTML = m === 'ai' ? '<i class="dot ai"></i>AI-guided routing' : '<i class="dot fixed"></i>Fixed barricade plan';
  if (st.inspect && m !== 'split') st.inspect.sim = m === 'fixed' ? 0 : 1;
  lblVersion = -1;
  updateInspect();
}
const splitLine = document.createElement('div');
splitLine.className = 'split-line';
stage.append(splitLine);

document.querySelectorAll<HTMLButtonElement>('.lens-rail > button').forEach(b => (b.onclick = () => setLens(b.dataset.lens as LensId)));
$('viewSeg').querySelectorAll<HTMLButtonElement>('button').forEach(b => (b.onclick = () => setMode(b.dataset.view as ViewMode)));
$('speedSeg').querySelectorAll<HTMLButtonElement>('button').forEach(b => (b.onclick = () => setSpeed(+b.dataset.speed!)));
$('logSeg').querySelectorAll<HTMLButtonElement>('button').forEach(b => (b.onclick = () => { st.logFilter = b.dataset.log as typeof st.logFilter; setSeg('logSeg', 'data-log', st.logFilter); rerenderLog(); }));
function setSpeed(s: number) { st.speed = s; host.send({ type: 'speed', speed: s }); setSeg('speedSeg', 'data-speed', String(s)); }
function setPaused(p: boolean) {
  st.paused = p;
  host.send({ type: 'pause', paused: p });
  $('playIcon').setAttribute('d', p ? 'M4 2.5l9 5.5-9 5.5z' : 'M4 3h3v10H4zM9 3h3v10H9z');
  $('playBtn').setAttribute('aria-label', p ? 'Play' : 'Pause');
}
$('playBtn').onclick = () => setPaused(!st.paused);
$('restartBtn').onclick = () => start(st.scenario.id);
$('scenarioBtn').onclick = () => openIntro();
$('aboutBtn').onclick = () => $<HTMLDialogElement>('about').showModal();
document.querySelectorAll<HTMLButtonElement>('[data-close]').forEach(b => (b.onclick = () => (b.closest('dialog') as HTMLDialogElement).close()));
$('panelToggle').onclick = () => { const p = $('panel'); p.classList.toggle('open'); $('panelToggle').setAttribute('aria-expanded', String(p.classList.contains('open'))); };

const CAMS: Record<string, [[number, number, number], [number, number, number]]> = {
  overview: [[-10, 250, 300], [0, 0, 8]],
  ghat: [[-14, 70, 118], [-14, 0, 32]],
  lanes: [[-30, 95, 92], [-30, 0, -10]],
  station: [[-62, 75, 18], [-66, 0, -62]],
};
document.querySelectorAll<HTMLButtonElement>('[data-cam]').forEach(b => (b.onclick = () => { const c = CAMS[b.dataset.cam!]; view.fly(c[0], c[1]); }));

window.addEventListener('keydown', e => {
  if ((e.target as HTMLElement).closest('input, select, textarea') || document.querySelector('dialog[open]')) return;
  const lensKeys: Record<string, LensId> = { '1': 'clay', '2': 'density', '3': 'flow', '4': 'count' };
  if (lensKeys[e.key]) setLens(lensKeys[e.key]);
  else if (e.key === ' ') { e.preventDefault(); setPaused(!st.paused); }
  else if (e.key === 'f') setMode('fixed');
  else if (e.key === 'a') setMode('ai');
  else if (e.key === 's') setMode('split');
  else if (e.key === 'Escape') closeInspect();
});

// ------------------------------------------------------------------ scenarios
function openIntro() {
  const wrap = $('scenarioCards');
  wrap.innerHTML = '';
  for (const s of SCENARIOS) {
    const b = document.createElement('button');
    b.className = 'card' + (s.id === st.scenario.id && st.ready ? ' cur' : '');
    b.innerHTML = `<span class="when">${fmtClock(s.clockStart, false)}</span><strong></strong><span></span>`;
    b.querySelector('strong')!.textContent = s.name;
    b.querySelector('span:last-child')!.textContent = s.tagline;
    b.onclick = () => { $<HTMLDialogElement>('intro').close(); start(s.id); };
    wrap.append(b);
  }
  $<HTMLDialogElement>('intro').showModal();
}

function start(id: string) {
  const sc = SCENARIO_INDEX[id] ?? SCENARIO_INDEX.snan;
  st.scenario = sc;
  st.ready = false;
  st.done = false;
  st.t = 0;
  st.stats = [null, null];
  st.series = [[], []];
  st.log = [];
  st.hist = [ZONES.map(() => []), ZONES.map(() => [])];
  st.lastHistT = -1;
  closeInspect();
  rerenderLog();
  $<HTMLDialogElement>('report').close();
  $('loading').hidden = false;
  $('loadingBar').style.width = '0%';
  $('scenarioName').textContent = sc.name;
  $('tStart').textContent = fmtClock(sc.clockStart, false);
  $('tEnd').textContent = fmtClock(sc.clockStart + sc.duration, false);
  $('trackMarks').innerHTML = sc.events.map(e => {
    const l = (e.t / sc.duration) * 100;
    const w = e.end ? ((e.end - e.t) / sc.duration) * 100 : 0.6;
    return `<div class="mark" style="left:${l}%;width:${w}%"><span>${e.label}</span></div>`;
  }).join('');
  view.setLighting(lightForClock(sc.clockStart + 60), true);
  try { history.replaceState(null, '', '#' + sc.id); } catch { /* sandboxed */ }
  if (st.paused) setPaused(false);
  host.send({ type: 'start', scenario: sc.id, seed: 7 });
  host.send({ type: 'speed', speed: st.speed });
  renderChart();
}

// ------------------------------------------------------------------ report
type BenchRow = { peakZone: number; dangerMin: number; personDangerMin: number; bathed: number };
function showReport() {
  const [f, a] = st.stats.map(s => s!.metrics);
  const sc = st.scenario;
  $('repEyebrow').textContent = `Result · ${sc.name}`;
  const fd = f.dangerTime / 60, ad = a.dangerTime / 60;
  $('repTitle').textContent = fd > 0.05
    ? `AI-guided routing cut time in the danger zone from ${fd.toFixed(1)} to ${ad.toFixed(1)} minutes`
    : `Both plans stayed out of the danger zone; AI kept the peak at ${a.peakZone.toFixed(1)} p/m²`;
  $('repLede').textContent = `Same town, same arrivals, same ${Math.round(sc.duration / 60)} minutes. The densest zone peaked at ${f.peakZone.toFixed(1)} p/m² under the fixed barricade plan and ${a.peakZone.toFixed(1)} p/m² under AI-guided routing, which took ${a.actions} control actions and served ${a.bathed.toLocaleString('en-IN')} bathers against ${f.bathed.toLocaleString('en-IN')}.`;
  const rows: [string, number, number, (v: number) => string, string][] = [
    ['Peak zone density', f.peakZone, a.peakZone, v => `${v.toFixed(1)} p/m²`, 'lower is safer'],
    ['Minutes in danger zone (≥ 4 p/m²)', fd, ad, v => `${v.toFixed(1)} min`, 'lower is safer'],
    ['Crush-risk exposure', f.personDanger / 60, a.personDanger / 60, v => `${Math.round(v).toLocaleString('en-IN')}`, 'person-minutes at ≥ 4 p/m²'],
    ['Bathers served', f.bathed, a.bathed, v => Math.round(v).toLocaleString('en-IN'), 'higher is better'],
  ];
  $('repBars').innerHTML = rows.map(([lab, fv, av, fmt, note]) => {
    const mx = Math.max(fv, av, 1e-6);
    return `<div class="rep-bar"><div class="lab"><b>${lab}</b><span>${note}</span></div><div class="rows">
      <div class="r"><span>Fixed</span><span class="t"><i style="width:${(fv / mx) * 100}%;background:var(--fixed)"></i></span><span class="n">${fmt(fv)}</span></div>
      <div class="r"><span>AI</span><span class="t"><i style="width:${(av / mx) * 100}%;background:var(--ai)"></i></span><span class="n">${fmt(av)}</span></div></div></div>`;
  }).join('');
  const bench = results as Record<string, { fixed: BenchRow; ai: BenchRow }>;
  $('benchTable').innerHTML = `<thead><tr><th>Scenario</th><th>Peak fixed</th><th>Peak AI</th><th>Danger min fixed</th><th>Danger min AI</th><th>Bathers fixed</th><th>Bathers AI</th></tr></thead><tbody>${SCENARIOS.filter(s => bench[s.id]).map(s => {
    const r = bench[s.id];
    return `<tr><td>${s.name}</td><td class="f">${r.fixed.peakZone.toFixed(1)}</td><td class="a">${r.ai.peakZone.toFixed(1)}</td><td class="f">${r.fixed.dangerMin.toFixed(1)}</td><td class="a">${r.ai.dangerMin.toFixed(1)}</td><td class="f">${r.fixed.bathed.toLocaleString('en-IN')}</td><td class="a">${r.ai.bathed.toLocaleString('en-IN')}</td></tr>`;
  }).join('')}</tbody>`;
  const idx = SCENARIOS.findIndex(s => s.id === sc.id);
  const next = SCENARIOS[(idx + 1) % SCENARIOS.length];
  $('repNext').textContent = `Next: ${next.name}`;
  $('repNext').onclick = () => start(next.id);
  $('repReplay').onclick = () => start(sc.id);
  $<HTMLDialogElement>('report').showModal();
}

// ------------------------------------------------------------------ main loop
// ?still: render rarely (for headless screenshots with software GL)
const still = new URLSearchParams(location.search).has('still');
let lastStill = 0;
function loop() {
  requestAnimationFrame(loop);
  if (still) { const n = performance.now(); if (n - lastStill < 2500) return; lastStill = n; }
  const sc = st.scenario;
  const t = Math.max(0, view.simTime);
  const rain = sc.events.find(e => e.kind === 'rain');
  const rainOn = !!(rain && st.ready && t >= rain.t && t < (rain.end ?? 1e9));
  view.frame({ rain, convoy: sc.events.find(e => e.kind === 'convoy') }, rainOn);
  placeLabels();
  placeInspect();
  updateDrone();
  if (st.ready) {
    $('clock').textContent = fmtClock(sc.clockStart + t);
    const now = sc.events.find(e => t >= e.t && t < (e.end ?? e.t + 45));
    $('eventNow').textContent = now ? now.label : '';
    $('trackFill').style.width = `${Math.min(100, (t / sc.duration) * 100)}%`;
  }
}

// ------------------------------------------------------------------ drone feed
const droneEl = $('drone');
const droneCv = $<HTMLCanvasElement>('droneCanvas');
const droneCtx = droneCv.getContext('2d')!;
const droneImg = droneCtx.createImageData(320, 200);
let droneOn = window.innerWidth > 700;
function setDrone(on: boolean) {
  droneOn = on;
  droneEl.hidden = !on;
  $('droneToggle').setAttribute('aria-pressed', String(on));
}
$('droneToggle').onclick = () => setDrone(!droneOn);
$('droneClose').onclick = () => setDrone(false);
let lastDrone = 0;
function updateDrone() {
  if (!droneOn || !st.ready || performance.now() - lastDrone < 350) return;
  lastDrone = performance.now();
  // the feed follows the drone hovering over Ram Kund
  const a = view.elapsed * 0.25;
  const cx = 119 + Math.sin(a) * 18, cz = 140 + Math.sin(a * 2) * 6;
  const sim = st.mode === 'fixed' ? 0 : 1;
  const px = view.renderDrone(sim, cx, cz);
  const d = droneImg.data;
  for (let y = 0; y < 200; y++) {
    const src = (199 - y) * 320 * 4, dst = y * 320 * 4;
    for (let x = 0; x < 320; x++) {
      const i = src + x * 4, o = dst + x * 4;
      const lum = (0.3 * px[i] + 0.59 * px[i + 1] + 0.11 * px[i + 2]) / 255;
      const g = Math.min(255, Math.pow(lum, 0.45) * 265 + ((x * 7 + y * 13 + lastDrone) % 9) - 4);
      d[o] = g * 0.92; d[o + 1] = g; d[o + 2] = g * 0.95; d[o + 3] = 255;
    }
  }
  droneCtx.putImageData(droneImg, 0, 0);
  // head detections (what the CV model would draw)
  const { hi, buf } = view.pilgrims[sim].latest;
  droneCtx.strokeStyle = '#4dff88';
  droneCtx.lineWidth = 1;
  let n = 0;
  for (let i = 0; i < hi; i++) {
    if (buf[i * 4 + 3] < 0) continue;
    const x = ((buf[i * 4] - (cx - 25)) / 50) * 320, y = ((buf[i * 4 + 1] - (cz - 15.6)) / 31.2) * 200;
    if (x < 2 || y < 2 || x > 318 || y > 198) continue;
    n++;
    droneCtx.strokeRect(Math.round(x) - 2.5, Math.round(y) - 2.5, 5, 5);
  }
  droneCtx.fillStyle = 'rgba(13,15,20,0.7)';
  droneCtx.fillRect(4, 4, 112, 16);
  droneCtx.fillStyle = '#4dff88';
  droneCtx.font = '500 11px "IBM Plex Mono", monospace';
  droneCtx.fillText(`${sim ? 'AI' : 'FIXED'} · ${fmtClock(st.scenario.clockStart + view.simTime)}`, 8, 15);
  const est = Math.round(n * (1 + Math.sin(lastDrone * 0.001) * 0.03));
  $('droneCount').textContent = `${est} heads`;
}

// debugging / scripted screenshots
(window as unknown as { __bd: unknown }).__bd = { view, st, openInspect, setLens, setMode, start, showReport };

// ------------------------------------------------------------------ boot
setDrone(droneOn);
setLens('clay');
setMode(window.innerWidth < 700 ? 'ai' : 'split');
renderLegend();
rerenderLog();
const hashId = location.hash.replace('#', '');
host.init().then(() => {
  if (SCENARIO_INDEX[hashId]) start(hashId);
  else { start('snan'); openIntro(); }
});
loop();
