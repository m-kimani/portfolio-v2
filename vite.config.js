import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  root: './', // Ensure root is set to the correct folder
  build: {
    outDir: 'dist',
  },
}