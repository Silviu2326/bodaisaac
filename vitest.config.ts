import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'; // Required if using React components in tests

export default defineConfig({
  plugins: [react()], // Add this if you're testing React components
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts', // or './src/setupTests.ts' or similar
  },
});
