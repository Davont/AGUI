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
          entry: path.resolve(__dirname, 'src/index.ts'),
          name: 'AGUI',
          fileName: (format) => `ag-ui.${format}.js`,
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'react/jsx-runtime'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'react/jsx-runtime': 'jsxRuntime',
            },
          },
        },
        outDir: 'dist',
        sourcemap: true,
        emptyOutDir: true,
      },
    };
  }
});
