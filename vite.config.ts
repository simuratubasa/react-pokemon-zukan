import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/react-pokemon-zukan/' : '/',
  server: {
    host: true,
    port: 5173,
    open: true
  },
  preview: {
    host: true,
    port: 4173
  }
});
