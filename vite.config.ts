import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // 🟣 Esto es CLAVE para rutas correctas en producción
  plugins: [
    tailwindcss(),
  ],
})
