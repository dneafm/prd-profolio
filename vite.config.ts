import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, '.', '');
  const useCloudflare = command === "build" || process.env.CLOUDFLARE_VITE === "true";

  return {
    plugins: [react(), tailwindcss(), ...(useCloudflare ? [cloudflare()] : [])],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    esbuild: {
      target: 'es2019',
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'es2019',
      },
    },
    build: {
      target: 'es2019',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
