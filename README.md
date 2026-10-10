# Bheed Drishti · भीड़ दृष्टि

**A crowd-safety digital twin for mass gatherings.** A clay model of a temple town on a river (ghats, narrow lanes, a footbridge, barricades and gates, a railway station, a bus stand, a sadhu camp) filled with thousands of simulated pilgrims. Two copies of the town run side by side from the same crowd with the same arrivals. One follows a fixed barricade plan. The other is run by an AI controller that watches density, forecasts it and routes the crowd.

Built for state police, district administrations, disaster-management authorities and temple trusts. The next large deadline is the Nashik–Trimbakeshwar Simhastha Kumbh in 2027.

## Run it

```bash
npm install
npm run dev            # http://localhost:5173
npm run build          # static site in dist/ (any static host)
npm run build:single   # one self-contained file: dist-single/index.html
npm test               # simulation tests
npm run bench          # headless run of every scenario, writes src/data/results.json
```

Open `#snan`, `#jam`, `#rumour`, `#convoy`, `#rain` or `#normal` in the URL to jump to a scenario. Add `?lite` to the URL for slow graphics hardware. The app also switches to lite rendering on its own when the frame rate stays low.

## What you see

| | |
|---|---|
| **Clay view** | The diorama. One figure is one pilgrim. Bathers dip at the ghats, trains pull in and unload, and the VIP convoy and rain appear in their scenarios. Red rings mark zones above 4 p/m². |
| **Density lens** | Heatmap in people per m². Red above 4 (crush possible), magenta above 5 (critical). |
| **Flow lens** | Arrows for crowd direction and speed. Magenta marks counter-flow, where two crowds push into each other. |
| **Count lens** | Head count per zone against its safe capacity, and people per minute through each gate. |
| **Inspect card** | Click any zone, for example: `Ghat 3 · 4.8 p/m² · rising · 6 min to critical · action: close Gate B (inbound), open Gate D`. Shows the trend over the last 3 minutes, speed, counter-flow, crowd pressure, and what the AI is doing or would do. |
| **Drone feed** | A top-down camera over Ram Kund that draws a box on every head it detects, standing in for the CCTV/drone computer vision of the real system. |
| **Results panel** | Live fixed-plan vs AI comparison: densest zone, minutes in the danger zone, people in crush-risk spots, bathers served, people held, plus a chart and the control-room log of every gate change and PA announcement. |

Keys: `1`–`4` switch lenses, `Space` pauses, `F` / `A` / `S` show the fixed plan, the AI plan or both side by side, `Esc` closes the inspector.

## Scenarios

1. **Ordinary day**: the baseline.
2. **Amrit Snan bathing hour**: inflow roughly triples and two-thirds of pilgrims head for Ram Kund.
3. **Gate jammed shut**: Gate B on Bazaar Lane jams, and nobody upstream knows until they reach it.
4. **Rumour and sudden run**: "the bridge is collapsing" panic spreads from person to person.
5. **VIP convoy**: the Main Road is cordoned for five minutes and public darshan pauses.
6. **Sudden downpour**: most of the crowd runs for the nearest roof.

## Results (headless benchmark, seed 7)

Peak density is the person-weighted density of the densest zone. "Danger" means time during which any zone of 30+ people is at or above 4 p/m².

| Scenario | Peak p/m², fixed | Peak p/m², AI | Danger min, fixed | Danger min, AI | Bathers, fixed | Bathers, AI |
|---|---:|---:|---:|---:|---:|---:|
| Ordinary day | 2.2 | 1.5 | 0.0 | 0.0 | 2,243 | 2,148 |
| Amrit Snan bathing hour | 5.9 | 3.3 | 6.0 | 0.0 | 3,449 | 3,933 |
| Gate jammed shut | 5.0 | 2.9 | 8.3 | 0.0 | 3,897 | 3,401 |
| Rumour and sudden run | 5.4 | 2.4 | 5.1 | 0.0 | 2,867 | 3,827 |
| VIP convoy | 6.0 | 2.4 | 2.5 | 0.0 | 3,327 | 2,979 |
| Sudden downpour | 3.9 | 3.4 | 0.0 | 0.0 | 2,075 | 1,947 |

The trade-off is real. The AI keeps people safe partly by holding new arrivals at the Holding Ground and pausing camp departures. In the jammed-gate, convoy and rain scenarios that means fewer bathers served within the 10–12 minute window. In the rain scenario neither plan crosses 4 p/m², but the AI cuts crush-risk exposure (person-minutes at ≥ 4 p/m² locally) about sixfold.

## Under the hood

- **Pedestrians:** social-force model (Helbing & Molnár). Each pilgrim is driven toward the next destination along a shortest-path field, with exponential repulsion from neighbours and walls, anisotropic perception, body contact, keep-left lane formation, side-stepping of oncoming walkers, and "impatience" (people stuck in a jam push harder). A square metre holds at most 8 bodies.
- **Navigation:** 1 m grid over a 280 × 210 m precinct, with Dijkstra fields per destination. One-way gates restrict which routes inbound and outbound pilgrims may use. Pilgrims only learn about a jammed gate or a cordon when they see it, unless a PA announcement tells them.
- **Measurement:** smoothed local density; person-weighted zone density; counter-flow index (share of walkers moving against the main axis); crowd pressure (density × velocity variance); 3-minute linear forecast per zone.
- **AI controller** (`src/sim/controller.ts`), re-evaluated every 2 s from head counts with ±4 % camera error:
  - one-way loop (in by Gates F and D, out by B and J) when flows clash or Ram Kund is forecast critical;
  - dynamic signage and PA rerouting to emptier ghats;
  - a holding ground with batch release, and camp and bus metering;
  - jam detection and broadcast;
  - rumour response (calming announcement plus emergency egress);
  - pre-emptive opening of Gate W before a VIP cordon;
  - covered shelters and shelter balancing in rain.
- **Fairness:** both plans start from an identical warmed-up crowd and receive exactly the same arrival stream.
- **Engineering:** the simulation runs in a Web Worker (with a main-thread fallback), and Three.js renders a single merged clay mesh, instanced pilgrims and a tilt-shift post effect.

## The real version

Live counts would come from density-map head counting on CCTV and drone video (for example CSRNet- or P2PNet-style models), with gate, PA and signage control wired to the same decision loop. The map would be built from the actual ghats and lanes of the site, and the model calibrated against observed flows.

## Limits

This is a demonstration model of a fictional temple town, not a calibrated model of any real site. The numbers show how the two strategies compare inside the model; they are not a prediction for a real event. The controller is rule-based forecasting and control, not a trained machine-learning model. Computer-vision counts are simulated.
