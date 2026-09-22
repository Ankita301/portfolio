import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // '/portfolio/' for the GitHub Pages project site; '/' once the custom
  // domain is live. Set by the workflow via VITE_BASE.
  base: process.env.VITE_BASE ?? '/',
})
