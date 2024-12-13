import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import csp from 'vite-plugin-csp'

export default defineConfig({
  base: '/jean-Baptiste-portfolio/',
  plugins: [
    react(),
    csp({
      policy: {
        'default-src': ["'self'"],
        'script-src': ["'self'", "'unsafe-inline'"],
        'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        'font-src': ["'self'", 'https://fonts.gstatic.com'],
        'img-src': ["'self'", 'data:'],
        'connect-src': ["'self'", 'https://api.example.com'],
        'frame-src': ["'none'"],
        'object-src': ["'none'"]
      },
      strict: true,
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['mixed-decls'],
      },
    },
  },
})
