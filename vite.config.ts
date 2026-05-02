import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Culinary-Canvas_Recipes_Web/',
  plugins: [react()],
})
