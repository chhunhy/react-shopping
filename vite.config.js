import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      // Point directly to the react-router-dom package
      'react-router-dom': 'react-router-dom', 'react-redux': 'react-redux',
    },
  },
  build: {
    rollupOptions: {
      external: ['react-redux','@reduxjs/toolkit','formik','yub','react-toastify','react-slick'],
    },
  },
});
