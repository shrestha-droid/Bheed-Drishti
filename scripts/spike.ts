import { Engine } from '../src/sim/engine.ts';
import { W, ZONES } from '../src/sim/world.ts';
const e = new Engine(process.argv[2] ?? 'convoy', 7);
e.warmup(420);
let best = 0;
while (!e.finished) {
  e.step();
  const s = e.sims[0];
  if (s.nowLocal > best + 0.5) {
    best = s.nowLocal;
    let bc = 0;
    for (let c = 0; c < s.density.length; c++) if (s.density[c] > s.density[bc]) bc = c;
    const x = bc % W, z = (bc / W) | 0;
    let inBlocked = 0, n = 0;
    for (let i = 0; i < s.hi; i++) if (s.alive[i]) { const c = (s.pz[i] | 0) * W + (s.px[i] | 0); if (Math.abs((c % W) - x) < 2 && Math.abs(((c / W) | 0) - z) < 2) { n++; if (s.blocked[c]) inBlocked++; } }
    console.log('t', e.t.toFixed(1), 'local', best.toFixed(2), 'at', x, z, ZONES[s.shared.world.zone[bc]]?.short, 'agents3x3', n, 'inBlocked', inBlocked, 'blockedCell', s.blocked[bc]);
  }
}
// max per-cell occupancy at end
{
  const s = e.sims[0];
  const cnt = new Map<number, number>();
  for (let i = 0; i < s.hi; i++) if (s.alive[i]) { const c = (s.pz[i] | 0) * W + (s.px[i] | 0); cnt.set(c, (cnt.get(c) ?? 0) + 1); }
  const top = [...cnt.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  console.log('top cells', top.map(([c, n]) => `${c % W},${(c / W) | 0}:${n} blocked=${s.blocked[c]} wb=${s.shared.walkBlur[c].toFixed(2)}`).join('  '));
}
