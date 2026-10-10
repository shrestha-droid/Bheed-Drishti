// Headless run of every scenario under both plans. Prints a results table and
// writes src/data/results.json (shown in the app's methodology panel).
import { writeFileSync, mkdirSync } from 'node:fs';
import { Engine } from '../src/sim/engine.ts';
import { SCENARIOS } from '../src/sim/scenarios.ts';

const only = process.argv[2];
const out: Record<string, unknown> = {};
for (const sc of SCENARIOS) {
  if (only && sc.id !== only) continue;
  const t0 = performance.now();
  const e = new Engine(sc.id, 7);
  e.warmup(420);
  const tw = performance.now();
  let maxAgents = 0;
  while (!e.finished) {
    e.step();
    maxAgents = Math.max(maxAgents, e.sims[0].count, e.sims[1].count);
  }
  const t1 = performance.now();
  const r = e.sims.map(s => ({
    peakZone: +s.peakZone.toFixed(2),
    peakLocal: +s.peakLocal.toFixed(2),
    dangerMin: +(s.dangerTime / 60).toFixed(2),
    criticalMin: +(s.criticalTime / 60).toFixed(2),
    personDangerMin: Math.round(s.personDanger / 60),
    bathed: s.bathed,
    departed: s.departed,
    onsite: s.count,
    held: s.heldCount,
  }));
  out[sc.id] = { fixed: r[0], ai: r[1] };
  console.log(`\n${sc.name}  (warmup ${((tw - t0) / 1000).toFixed(1)} s, run ${((t1 - tw) / 1000).toFixed(1)} s, max agents ${maxAgents})`);
  console.table({ fixed: r[0], ai: r[1] });
  if (process.env.LOG) for (const s of e.sims) for (const l of s.log) console.log(s.policy, (l.t / 60).toFixed(1), l.kind, l.text);
}
if (!only) {
  mkdirSync('src/data', { recursive: true });
  writeFileSync('src/data/results.json', JSON.stringify(out, null, 2) + '\n');
}
