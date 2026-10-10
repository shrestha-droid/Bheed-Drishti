import { describe, expect, test } from 'vitest';
import { getShared } from '../src/sim/shared.ts';
import { Sim } from '../src/sim/sim.ts';
import { Engine } from '../src/sim/engine.ts';
import { computeField } from '../src/sim/fields.ts';
import { DESTS, GATES, N, W, WALL, WATER, ZONES, D_STATION, D_GHAT0 } from '../src/sim/world.ts';

const shared = getShared();

describe('world', () => {
  test('every destination is reachable from every spawn area on the default plan', () => {
    const sim = new Sim(shared, 'fixed', 0, 1);
    sim.step(0.1); // builds map and fields
    const spawns = [shared.spawnCells.train, shared.spawnCells.bus, shared.spawnCells.camp];
    for (const cells of spawns) {
      for (const d of [0, 1, 2, 3, 4, 5]) {
        const c = cells[Math.floor(cells.length / 2)];
        expect(Number.isFinite(sim.fieldsAct[d].dist[c]), `${DESTS[d].id} from spawn`).toBe(true);
      }
    }
  });

  test('every zone has walkable area and a capacity', () => {
    ZONES.forEach((z, i) => expect(shared.world.zoneArea[i], z.id).toBeGreaterThan(20));
  });

  test('a closed gate forces a detour', () => {
    const pass = new Uint8Array(N);
    for (let c = 0; c < N; c++) pass[c] = shared.world.base[c] === WALL || shared.world.base[c] === WATER ? 0 : 1;
    const cost = shared.staticCost;
    const open = computeField(pass, cost, shared.world.destMask[D_GHAT0 + 2]);
    const b = GATES.find(g => g.id === 'B')!;
    const closed = new Uint8Array(pass);
    for (let z = b.rect.z0; z < b.rect.z1; z++) for (let x = b.rect.x0; x < b.rect.x1; x++) closed[z * W + x] = 0;
    const detour = computeField(closed, cost, shared.world.destMask[D_GHAT0 + 2]);
    const roadAboveB = 58 * W + 91;
    expect(detour.dist[roadAboveB]).toBeGreaterThan(open.dist[roadAboveB] + 20);
  });
});

describe('simulation', { timeout: 60000 }, () => {
  const e = new Engine('snan', 3);
  e.warmup(120);

  test('both plans start from an identical crowd', () => {
    const [a, b] = e.sims;
    expect(a.count).toBe(b.count);
    for (let i = 0; i < a.hi; i++) {
      expect(a.alive[i]).toBe(b.alive[i]);
      if (a.alive[i]) expect(a.px[i]).toBe(b.px[i]);
    }
  });

  test('nobody walks through walls and no square metre holds more than 8 bodies', () => {
    for (let k = 0; k < 300; k++) e.step();
    for (const s of e.sims) {
      const occ = new Map<number, number>();
      for (let i = 0; i < s.hi; i++) {
        if (!s.alive[i]) continue;
        const c = (s.pz[i] | 0) * W + (s.px[i] | 0);
        expect(shared.world.base[c] === WALL || shared.world.base[c] === WATER).toBe(false);
        occ.set(c, (occ.get(c) ?? 0) + 1);
      }
      expect(Math.max(...occ.values())).toBeLessThanOrEqual(8);
    }
  });

  test('pilgrims arrive, bathe and go home', () => {
    for (let k = 0; k < 1500; k++) e.step();
    for (const s of e.sims) {
      expect(s.bathed).toBeGreaterThan(50);
      expect(s.departed).toBeGreaterThan(0);
      expect(s.spawned).toBeGreaterThan(100);
    }
  });

  test('station-bound pilgrims have a route home', () => {
    const s = e.sims[0];
    const c = 58 * W + 70;
    expect(Number.isFinite(s.fieldsAct[D_STATION].dist[c])).toBe(true);
  });
});

describe('AI controller', { timeout: 60000 }, () => {
  test('detects a jammed gate, broadcasts it and opens the diversion', () => {
    const e = new Engine('jam', 5);
    e.warmup(90);
    while (e.t < 120) e.step();
    const ai = e.sims[1], fixed = e.sims[0];
    const gB = GATES.findIndex(g => g.id === 'B');
    const gD = GATES.findIndex(g => g.id === 'D');
    expect(ai.jammed[gB]).toBe(true);
    expect(ai.publicJam[gB]).toBe(true);
    expect(ai.gateMode[gD]).not.toBe('closed');
    expect(fixed.publicJam[gB]).toBe(false);
    expect(fixed.gateMode[gD]).toBe('closed');
    expect(ai.log.some(l => l.kind === 'pa' && l.text.includes('Gate B'))).toBe(true);
  });

  test('runs are deterministic for a given seed', () => {
    const run = () => { const e = new Engine('normal', 11); e.warmup(40); for (let k = 0; k < 200; k++) e.step(); return e.sims.map(s => [s.count, s.bathed, s.px[5]]); };
    expect(run()).toEqual(run());
  });
});
