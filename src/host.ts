// Runs the simulation in a Web Worker when possible, otherwise on the main thread.
import type { FromRunner, ToRunner } from './sim/protocol.ts';
import SimWorker from './worker.ts?worker&inline';

export class SimHost {
  onMessage: (m: FromRunner) => void = () => {};
  mode: 'worker' | 'local' = 'worker';
  private worker: Worker | null = null;
  private local: { handle(m: ToRunner): void } | null = null;
  private pending: ToRunner[] = [];

  async init() {
    try {
      const w = new SimWorker();
      const ok = await new Promise<boolean>(resolve => {
        const timer = setTimeout(() => resolve(false), 4000);
        w.onmessage = (e: MessageEvent<FromRunner>) => {
          if (e.data.type === 'pong') { clearTimeout(timer); resolve(true); }
        };
        w.onerror = () => { clearTimeout(timer); resolve(false); };
        w.postMessage({ type: 'ping' } satisfies ToRunner);
      });
      if (ok) {
        this.worker = w;
        w.onmessage = (e: MessageEvent<FromRunner>) => this.onMessage(e.data);
        for (const m of this.pending) w.postMessage(m);
        this.pending = [];
        return;
      }
      w.terminate();
    } catch { /* fall through */ }
    this.mode = 'local';
    const { Runner } = await import('./sim/runner.ts');
    const r = new Runner(m => setTimeout(() => this.onMessage(m), 0), 10);
    this.local = r;
    for (const m of this.pending) r.handle(m);
  }

  send(m: ToRunner) {
    if (this.worker) this.worker.postMessage(m);
    else if (this.local) this.local.handle(m);
    else this.pending.push(m);
  }
}
