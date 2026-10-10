// Small dependency-free canvas charts.

interface ChartOpts {
  duration: number;
  series: [number, number][][];
  colors: string[];
  ink: string; grid: string; danger: string; critical: string; accent: string;
  events: { t: number; end?: number; label: string }[];
}

function setup(c: HTMLCanvasElement) {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const w = c.clientWidth, h = c.clientHeight;
  if (c.width !== Math.round(w * dpr) || c.height !== Math.round(h * dpr)) {
    c.width = Math.round(w * dpr);
    c.height = Math.round(h * dpr);
  }
  const g = c.getContext('2d')!;
  g.setTransform(dpr, 0, 0, dpr, 0, 0);
  g.clearRect(0, 0, w, h);
  return { g, w, h };
}

export function drawChart(c: HTMLCanvasElement, o: ChartOpts) {
  const { g, w, h } = setup(c);
  if (!w || !h) return;
  const L = 26, R = 34, T = 8, B = 18;
  const pw = w - L - R, ph = h - T - B;
  let ymax = 6;
  for (const s of o.series) for (const p of s) ymax = Math.max(ymax, Math.ceil(p[1]));
  ymax = Math.min(9, ymax);
  const X = (t: number) => L + (t / o.duration) * pw;
  const Y = (v: number) => T + ph - (v / ymax) * ph;

  // event spans
  for (const e of o.events) {
    g.fillStyle = o.accent + '22';
    const x0 = X(e.t), x1 = e.end ? X(e.end) : x0 + 1.5;
    g.fillRect(x0, T, Math.max(1.5, x1 - x0), ph);
    g.fillStyle = o.accent;
    g.fillRect(x0, T, 1.5, ph);
  }
  // danger / critical bands
  g.fillStyle = o.danger + '1f';
  g.fillRect(L, Y(Math.min(5, ymax)), pw, Y(4) - Y(Math.min(5, ymax)));
  g.fillStyle = o.critical + '2a';
  g.fillRect(L, T, pw, Y(5) - T);
  // grid & y labels
  g.font = '10.5px "IBM Plex Mono", monospace';
  g.textBaseline = 'middle';
  for (let v = 0; v <= ymax; v++) {
    const y = Math.round(Y(v)) + 0.5;
    g.strokeStyle = v === 4 ? o.danger : o.grid;
    g.lineWidth = v === 4 ? 1.2 : 1;
    g.setLineDash(v === 4 ? [4, 3] : []);
    g.beginPath(); g.moveTo(L, y); g.lineTo(L + pw, y); g.stroke();
    g.setLineDash([]);
    if (v % 2 === 0 || v === 5) { g.fillStyle = o.ink; g.textAlign = 'right'; g.fillText(String(v), L - 6, y); }
  }
  g.fillStyle = o.danger; g.textAlign = 'left';
  g.fillText('danger', L + 4, Y(4) - 7);
  // x labels (minutes)
  g.fillStyle = o.ink; g.textBaseline = 'top'; g.textAlign = 'center';
  const step = o.duration > 600 ? 180 : 120;
  for (let t = 0; t <= o.duration; t += step) g.fillText(`${Math.round(t / 60)}m`, X(t), T + ph + 4);

  // series
  o.series.forEach((s, k) => {
    if (s.length < 2) return;
    g.strokeStyle = o.colors[k];
    g.lineWidth = 2.2;
    g.lineJoin = 'round';
    g.beginPath();
    s.forEach(([t, v], i) => (i ? g.lineTo(X(t), Y(Math.min(ymax, v))) : g.moveTo(X(t), Y(Math.min(ymax, v)))));
    g.stroke();
    const [lt, lv] = s[s.length - 1];
    g.fillStyle = o.colors[k];
    g.beginPath(); g.arc(X(lt), Y(Math.min(ymax, lv)), 3.5, 0, Math.PI * 2); g.fill();
    g.font = '600 11px "IBM Plex Mono", monospace';
    g.textAlign = 'left'; g.textBaseline = 'middle';
    // keep the two end labels from colliding
    const other = o.series[1 - k];
    let ly = Y(Math.min(ymax, lv));
    if (other && other.length) {
      const oy = Y(Math.min(ymax, other[other.length - 1][1]));
      if (Math.abs(oy - ly) < 11) ly += k === 0 ? (ly <= oy ? -6 : 6) : (ly < oy ? -6 : 6);
    }
    g.fillText(lv.toFixed(1), Math.min(X(lt) + 6, L + pw + 4), ly);
  });
}

export function drawSpark(c: HTMLCanvasElement, main: number[], other: number[], o: { main: string; other: string; grid: string; danger: string; ink: string }) {
  const { g, w, h } = setup(c);
  if (!w || !h) return;
  const n = 180;
  const ymax = Math.max(5.5, ...main.slice(-n), ...other.slice(-n));
  const Y = (v: number) => h - 4 - (v / ymax) * (h - 10);
  const X = (i: number, len: number) => w - ((len - 1 - i) / (n - 1)) * w;
  g.fillStyle = o.danger + '18';
  g.fillRect(0, Y(ymax), w, Y(4) - Y(ymax));
  g.strokeStyle = o.danger; g.setLineDash([3, 3]); g.lineWidth = 1;
  g.beginPath(); g.moveTo(0, Y(4)); g.lineTo(w, Y(4)); g.stroke(); g.setLineDash([]);
  const line = (arr: number[], col: string, lw: number, fill: boolean) => {
    const a = arr.slice(-n);
    if (a.length < 2) return;
    g.beginPath();
    a.forEach((v, i) => (i ? g.lineTo(X(i, a.length), Y(v)) : g.moveTo(X(i, a.length), Y(v))));
    if (fill) {
      g.lineTo(X(a.length - 1, a.length), h); g.lineTo(X(0, a.length), h); g.closePath();
      g.fillStyle = col + '30'; g.fill();
      g.beginPath();
      a.forEach((v, i) => (i ? g.lineTo(X(i, a.length), Y(v)) : g.moveTo(X(i, a.length), Y(v))));
    }
    g.strokeStyle = col; g.lineWidth = lw; g.stroke();
    if (fill) { g.fillStyle = col; g.beginPath(); g.arc(X(a.length - 1, a.length), Y(a[a.length - 1]), 3, 0, 7); g.fill(); }
  };
  line(other, o.other + '99', 1.2, false);
  line(main, o.main, 2, true);
  g.fillStyle = o.ink; g.font = '10px "IBM Plex Mono", monospace'; g.textAlign = 'left'; g.textBaseline = 'top';
  g.fillText('last 3 min · 4 p/m² line', 2, 1);
}
