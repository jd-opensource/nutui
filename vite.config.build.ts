import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern', // 启用现代 Sass API
        // example : additionalData: `@use "./src/design/styles/index" as *;`
        // dont need include file extend .scss
        additionalData: `@use "@/packages/styles/index.scss" as *;`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'ie > 11', 'iOS >= 10', 'Android >= 5']
        })
      ]
    }
  },
  plugins: [vue()],
  build: {
    minify: true,
    target: 'es2015',
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue', 'vue-router'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        exports: 'named',
        plugins: []
      }
    },
    lib: {
      entry: 'src/packages/index.build.ts',
      name: 'nutui',
      fileName: (type) => {
        return type === 'umd' ? 'nutui.umd.js' : 'nutui.js'
      },
      formats: ['umd', 'es']
    }
  }
})
