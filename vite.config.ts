import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// `npm run build` → dist/ (multi-file, relative paths, works on any static host)
// `npm run build:single` → dist-single/index.html (everything inlined in one file)
export default defineConfig(({ mode }) => ({
  base: './',
  plugins: mode === 'single' ? [viteSingleFile()] : [],
  build: {
    outDir: mode === 'single' ? 'dist-single' : 'dist',
    target: 'es2022',
    chunkSizeWarningLimit: 2000,
  },
  worker: { format: 'es' },
}));
