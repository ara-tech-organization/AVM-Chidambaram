/* global process */
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Default base is the production path on Hostinger (avmsmilesdental.com/chidambaram/).
// The GitHub Pages workflow overrides it with VITE_BASE=/AVM-Chidambaram/.
export default defineConfig({
  base: process.env.VITE_BASE || '/chidambaram/',
  plugins: [react(), tailwindcss()],
})
