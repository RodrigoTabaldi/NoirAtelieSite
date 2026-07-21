import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

// Base relativa para que o build funcione ao abrir direto do sistema de arquivos
export default defineConfig({
  base: './',
  plugins: [react(), cloudflare()],
})