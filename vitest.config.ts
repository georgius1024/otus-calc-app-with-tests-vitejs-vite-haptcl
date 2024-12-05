import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/e2e/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
    ],
  },
  root: '.',
});
