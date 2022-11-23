import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}

export default defineConfig({
  plugins: [vue()],
  // 添加库模式的配置
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'DokomUI',
      fileName: 'dokom-ui',
      formats: ['es', 'iife', 'umd'],
    },
  },
})
