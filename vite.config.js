// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Your Spring Boot backend URL
        changeOrigin: true, // This helps with CORS
        secure: false, // Set to false if you are using HTTP
      },
    },
  },
});
