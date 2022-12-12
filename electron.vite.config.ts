import path from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwind from 'tailwindcss'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    publicDir: path.resolve('resources'),
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    define:{
      'process.platform': JSON.stringify(process.platform)
    },
    css: {
      postcss: {
        plugins: [
          tailwind({
            config: './src/renderer/tailwind.config.js',
          }),
        ],
      },
    },
    resolve: {
      alias: {
        '@renderer': path.resolve('src/renderer/src'),
      },
    },
    plugins: [react()],
  },
})
