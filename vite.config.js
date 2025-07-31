// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Barcha tarmoq qurilmalari uchun ochiq
    port: 5173       // Standart Vite port (istalgan boshqa port ham bo'lishi mumkin)
  }
})
