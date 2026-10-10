import { Runner } from './sim/runner.ts';
import type { ToRunner } from './sim/protocol.ts';

const ctx = self as unknown as { postMessage(m: unknown, t?: Transferable[]): void; onmessage: ((e: MessageEvent<ToRunner>) => void) | null };
const runner = new Runner((msg, transfer) => ctx.postMessage(msg, transfer ?? []));
ctx.onmessage = e => runner.handle(e.data);
