/** @format */
/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {},
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
