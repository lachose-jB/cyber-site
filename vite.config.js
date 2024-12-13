import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/jean-Baptiste-portfolio/', 
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '',
        silenceDeprecations: ['mixed-decls'],
      },
    },
  },
})
