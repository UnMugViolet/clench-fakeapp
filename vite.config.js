import { fileURLToPath, URL } from 'node:url'
import VueDevTools from 'vite-plugin-vue-devtools'

import path from "path"
import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"

import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    VueDevTools(),
    vue(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
