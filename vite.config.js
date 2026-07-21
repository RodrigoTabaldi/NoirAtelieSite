import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base relativa para que o build funcione ao abrir direto do sistema de arquivos
export default defineConfig({
  base: './',
  plugins: [react()],
})
