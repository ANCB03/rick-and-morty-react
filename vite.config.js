import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://ANCB03.github.io/rick-and-morty-react/",
  plugins: [react()],
})
