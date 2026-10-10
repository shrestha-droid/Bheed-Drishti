// Debug helper: run a scenario and print per-zone stats over time.
import { Engine } from '../src/sim/engine.ts';
import { ZONES } from '../src/sim/world.ts';
const id = process.argv[2] ?? 'normal';
const every = +(process.argv[3] ?? 120);
const e = new Engine(id, 7);
const tw = performance.now();
e.warmup(420);
console.log('warmup ms', Math.round(performance.now() - tw));
const show = (label: string) => {
  for (const s of e.sims) {
    const top = s.zone.map((z, i) => ({ i, ...z })).filter(z => z.count > 20).sort((a, b) => b.density - a.density).slice(0, 7);
    console.log(label, s.policy, 'n=', s.count, 'held', s.heldCount, 'peak', s.nowPeak.toFixed(2), '|', top.map(z => `${ZONES[z.i].short}:${z.count}@${z.density.toFixed(1)} cf${z.cfi.toFixed(2)} v${z.speed.toFixed(2)}`).join('  '));
  }
};
show('t=0');
let next = every;
const t0 = performance.now();
while (!e.finished) {
  e.step();
  if (e.t >= next) { show('t=' + Math.round(e.t)); next += every; }
}
console.log('run ms', Math.round(performance.now() - t0));
for (const s of e.sims) {
  console.log(s.policy, 'zone danger s:', s.zone.map((z, i) => [ZONES[i].short, Math.round(z.dangerTime)]).filter(x => (x[1] as number) > 0).map(x => x.join('=')).join(' '));
  if (process.env.LOG) for (const l of s.log) console.log('  ', s.policy, (l.t / 60).toFixed(1), l.kind, l.text);
}
