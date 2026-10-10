// Messages between the simulation runner (worker or main thread) and the UI.
import type { LogEntry, SeriesPoint } from './sim.ts';
import type { GateMode } from './world.ts';
import type { TrainState } from './engine.ts';

export type ToRunner =
  | { type: 'start'; scenario: string; seed: number }
  | { type: 'speed'; speed: number }
  | { type: 'pause'; paused: boolean }
  | { type: 'ping' };

export interface FrameSim { hi: number; buf: Float32Array }
export interface FrameMsg { type: 'frame'; t: number; train: TrainState; sims: FrameSim[] }

export interface ZoneOut { count: number; density: number; peak: number; speed: number; cfi: number; pressure: number; slope: number; dangerTime: number }
export interface GateOut { mode: GateMode; jammed: boolean; closed: boolean; rate: number }
export interface MetricsOut {
  peakZone: number; peakLocal: number; dangerTime: number; personDanger: number; criticalTime: number;
  bathed: number; departed: number; onsite: number; held: number; nowPeak: number; nowLocal: number; nowInDanger: number;
  actions: number; holdActive: boolean; cordon: boolean; rain: boolean; panicking: number;
}
export interface StatsSim {
  zones: ZoneOut[];
  advice: string[];
  gates: GateOut[];
  metrics: MetricsOut;
  density: Uint8Array;  // p/m2 * 40
  flow: Float32Array;   // FW*FH*4: vx, vz, counter-flow, n
  series: SeriesPoint[];
  log: LogEntry[];
}
export interface StatsMsg { type: 'stats'; t: number; speed: number; sims: StatsSim[]; log: LogEntry[] }

export type FromRunner =
  | { type: 'progress'; p: number }
  | { type: 'ready'; scenario: string }
  | FrameMsg
  | StatsMsg
  | { type: 'done'; t: number }
  | { type: 'pong' };

export const DENSITY_SCALE = 40;
// agent flag bits in the packed frame value
export const F_DWELL = 1, F_WATER = 2, F_PANIC = 4, F_HELD = 8;
