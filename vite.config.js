import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import csp from 'vite-plugin-csp'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    csp({
      policy: {
        'default-src': ["'self'"],
        "script-src": ["'self'", "https://vercel.live", "'sha256-AbCdEfGhIjKlMnOpQrStUvWxYz1234567890AbCdEfGhIjKlMnOpQrStUvWxYz=='"],
        'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        'font-src': ["'self'", 'https://fonts.gstatic.com', 'data:'],
        'img-src': ["'self'", 'data:'],
        'connect-src': ["'self'", 'https://api.emailjs.com'],
        'frame-src': ["'self'", "https://vercel.live"],
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
