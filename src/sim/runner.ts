// Drives an Engine in real time and streams frames / stats to the UI.
// Used inside the Web Worker, and on the main thread as a fallback.
import { Engine, DT } from './engine.ts';
import { ST_DWELL, ST_HELD, type Sim } from './sim.ts';
import { BATH, GATES, N, W } from './world.ts';
import {
  DENSITY_SCALE, F_DWELL, F_HELD, F_PANIC, F_WATER,
  type FromRunner, type StatsSim, type ToRunner,
} from './protocol.ts';
import type { AIController } from './controller.ts';

type Post = (msg: FromRunner, transfer?: Transferable[]) => void;

export class Runner {
  private engine: Engine | null = null;
  private speed = 4;
  private paused = false;
  private post: Post;
  private budgetMs: number;
  private last = 0;
  private acc = 0;
  private lastFrame = 0;
  private lastStats = 0;
  private sent = [{ series: 0, log: 0 }, { series: 0, log: 0 }];
  private engineLogSent = 0;
  private warming = false;
  private token = 0;
  private stepsDone = 0;
  private effSpeed = 0;
  private doneSent = false;

  constructor(post: Post, budgetMs = 28) {
    this.post = post;
    this.budgetMs = budgetMs;
  }

  handle(msg: ToRunner) {
    if (msg.type === 'ping') this.post({ type: 'pong' });
    else if (msg.type === 'start') this.start(msg.scenario, msg.seed);
    else if (msg.type === 'speed') this.speed = msg.speed;
    else if (msg.type === 'pause') { this.paused = msg.paused; this.last = performance.now(); }
  }

  private start(scenario: string, seed: number) {
    const token = ++this.token;
    const e = new Engine(scenario, seed);
    this.engine = e;
    this.sent = [{ series: 0, log: 0 }, { series: 0, log: 0 }];
    this.engineLogSent = 0;
    this.doneSent = false;
    this.warming = true;
    e.beginWarmup(420);
    const chunk = () => {
      if (token !== this.token) return;
      const t0 = performance.now();
      let done = false;
      while (!done && performance.now() - t0 < this.budgetMs * 3) done = e.warmupChunk(40);
      this.post({ type: 'progress', p: e.warmupProgress });
      if (!done) { setTimeout(chunk, 0); return; }
      this.warming = false;
      this.post({ type: 'ready', scenario });
      this.last = performance.now();
      this.acc = 0;
      this.sendFrame();
      this.sendStats();
      setTimeout(() => this.tick(token), 0);
    };
    setTimeout(chunk, 0);
  }

  private tick(token: number) {
    if (token !== this.token || !this.engine) return;
    const e = this.engine;
    const now = performance.now();
    const elapsed = Math.min(0.1, (now - this.last) / 1000);
    this.last = now;
    if (!this.paused && !this.warming && !e.finished) {
      this.acc += elapsed * this.speed;
      let n = 0;
      const t0 = performance.now();
      while (this.acc >= DT && performance.now() - t0 < this.budgetMs && !e.finished) {
        e.step();
        this.acc -= DT;
        n++;
      }
      if (this.acc > DT * 2) this.acc = DT; // could not keep up: drop backlog
      this.stepsDone += n;
    }
    if (now - this.lastFrame > 30) this.sendFrame();
    if (now - this.lastStats > 250) {
      const dt = (now - this.lastStats) / 1000;
      this.effSpeed = this.lastStats ? (this.stepsDone * DT) / dt : 0;
      this.stepsDone = 0;
      this.sendStats();
    }
    if (e.finished && !this.doneSent) {
      this.doneSent = true;
      this.sendStats();
      this.post({ type: 'done', t: e.t });
    }
    setTimeout(() => this.tick(token), this.paused || e.finished ? 50 : 4);
  }

  private sendFrame() {
    const e = this.engine!;
    this.lastFrame = performance.now();
    const sims = e.sims.map(s => packAgents(s));
    this.post({ type: 'frame', t: e.t, train: e.trainState(), sims }, sims.map(s => s.buf.buffer));
  }

  private sendStats() {
    const e = this.engine!;
    this.lastStats = performance.now();
    const transfer: Transferable[] = [];
    const sims: StatsSim[] = e.sims.map((s, k) => {
      const density = new Uint8Array(N);
      const d = s.density;
      for (let c = 0; c < N; c++) { const v = d[c] * DENSITY_SCALE; density[c] = v > 255 ? 255 : v; }
      const flow = s.flow.slice();
      transfer.push(density.buffer, flow.buffer);
      const sent = this.sent[k];
      const series = s.series.slice(sent.series);
      sent.series = s.series.length;
      // the sim keeps a bounded log; resend from where we were
      const fresh = Math.min(s.log.length, s.logTotal - sent.log);
      const log = fresh > 0 ? s.log.slice(s.log.length - fresh) : [];
      sent.log = s.logTotal;
      let panicking = 0;
      for (let i = 0; i < s.hi; i++) if (s.alive[i] && s.panic[i] > 0.25) panicking++;
      return {
        zones: s.zone.map(z => ({ ...z })),
        advice: s.zone.map((_, zi) => s.controller ? s.controller.advice(s, zi) : ''),
        gates: GATES.map((_, gi) => ({ mode: s.gateMode[gi], jammed: s.jammed[gi], closed: s.effectiveClosed(gi), rate: s.gateRate[gi] })),
        metrics: {
          peakZone: s.peakZone, peakLocal: s.peakLocal, dangerTime: s.dangerTime, personDanger: s.personDanger,
          criticalTime: s.criticalTime, bathed: s.bathed, departed: s.departed, onsite: s.count, held: s.heldCount,
          nowPeak: s.nowPeak, nowLocal: s.nowLocal, nowInDanger: s.nowInDanger,
          actions: s.policy === 'ai' ? ((s.controller as AIController | null)?.actions ?? 0) : 0,
          holdActive: s.holdActive, cordon: s.cordon, rain: s.rain, panicking,
        },
        density, flow, series, log,
      };
    });
    const log = e.log.slice(this.engineLogSent);
    this.engineLogSent = e.log.length;
    this.post({ type: 'stats', t: e.t, speed: this.effSpeed, sims, log }, transfer);
  }
}

function packAgents(s: Sim) {
  const hi = s.hi;
  const buf = new Float32Array(Math.max(1, hi) * 4);
  const base = s.shared.world.base;
  for (let i = 0; i < hi; i++) {
    const o = i * 4;
    if (!s.alive[i]) { buf[o + 3] = -1; continue; }
    buf[o] = s.px[i]; buf[o + 1] = s.pz[i]; buf[o + 2] = s.hd[i];
    const st = s.state[i];
    let f = 0;
    if (st === ST_DWELL) f |= F_DWELL;
    if (st === ST_HELD) f |= F_HELD | F_DWELL;
    if (base[((s.pz[i] | 0) * W + (s.px[i] | 0))] === BATH) f |= F_WATER;
    if (s.panic[i] > 0.25) f |= F_PANIC;
    buf[o + 3] = f + (s.color[i] << 4) + (s.gen[i] << 8);
  }
  return { hi, buf };
}
