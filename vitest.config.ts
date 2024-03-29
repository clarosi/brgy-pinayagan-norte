/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      api: path.resolve(__dirname, 'src/api/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      components: path.resolve(__dirname, 'src/components/'),
      configs: path.resolve(__dirname, 'src/configs/'),
      contexts: path.resolve(__dirname, 'src/contexts/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
      json: path.resolve(__dirname, 'src/json/'),
      layouts: path.resolve(__dirname, 'src/layouts/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      types: path.resolve(__dirname, 'src/types/'),
      libs: path.resolve(__dirname, 'src/libs/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      utils: path.resolve(__dirname, 'src/utils/'),
    },
  },
});
