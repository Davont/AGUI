/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isAppMode = mode === 'app';

  const baseConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "ag-ui": path.resolve(__dirname, "./src/index.ts"),
    },
  },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './__tests__/setupTests.ts',
      include: ['__tests__/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    },
  };

  if (isAppMode) {
    // Configuration for building the demo application
    return {
      ...baseConfig,
      base: './', // Use relative paths for assets
      build: {
        outDir: 'build',
        sourcemap: true,
      },
    };
  } else {
    // Configuration for building the library (default)
    return {
      ...baseConfig,
      build: {
        lib: {
          entry: 'src/index.ts',
          name: 'AGUI',
          fileName: (format) => `ag-ui.${format}.js`,
        },
        rollupOptions: {
          // We intentionally do not set external/globals here.
          // By moving react/react-dom to devDependencies and removing them from externals,
          // we are telling Vite to bundle them directly into our library.
          // This makes the library self-contained and usable in non-React environments
          // without requiring the consumer to install React themselves.
        },
        outDir: 'dist',
        sourcemap: true,
        emptyOutDir: true,
      },
    };
  }
});
