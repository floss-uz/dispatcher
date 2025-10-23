import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
import visualizer from "rollup-plugin-visualizer";
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer(),
    visualizer({open: true, gzipSize: true})
  ],
  server: {
    port: 7777,
    open: true
  },
  build: {
    target: 'es2015',
    minify: 'esbuild',
    outDir: "build",
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      "@": "/src",
      app: path.resolve(__dirname, "src/app"),
      shared: path.resolve(__dirname, "src/shared"),
      widgets: path.resolve(__dirname, "src/widgets"),
    },
  },
})
