import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCss from './config/unocss'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}

export default defineConfig({
  plugins: [vue(), UnoCss()],
  // 添加库模式的配置
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'DokomUI',
      fileName: 'dokom-ui',
      formats: ['es', 'iife', 'umd'],
    },
  },
})
