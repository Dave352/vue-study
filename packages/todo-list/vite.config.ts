import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import path from 'path'

import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@elements', replacement: path.resolve(__dirname, 'src/elements') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
    ],
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
})
