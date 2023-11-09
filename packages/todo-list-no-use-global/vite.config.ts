import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@/elements', replacement: path.resolve(__dirname, 'src/elements') },
      { find: '@/utils', replacement: path.resolve(__dirname, 'src/utils') },
    ],
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
})
