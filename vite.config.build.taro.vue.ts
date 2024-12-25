import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  define: {
    'process.env.TARO_ENV': 'process.env.TARO_ENV'
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern', // 启用现代 Sass API
        // example : additionalData: `@use "./src/design/styles/index" as *;`
        // dont need include file extend .scss
        additionalData: `@use "@/packages/styles/index.scss" as *; @use "@/sites/assets/styles/index.scss" as *;`
      }
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return (
              tag.startsWith('taro-')
              || tag.startsWith('scroll-view')
              || tag.startsWith('swiper')
              || tag.startsWith('swiper-item')
              || tag.startsWith('scroll-view')
              || tag.startsWith('picker')
              || tag.startsWith('picker-view')
              || tag.startsWith('picker-view-column')
            )
          },
          whitespace: 'preserve'
        }
      }
    })
  ],
  build: {
    minify: false,
    target: 'es2015',
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue', 'vue-router', '@tarojs/taro', '@nutui/icons-vue-taro'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        plugins: []
      }
    },
    lib: {
      entry: 'src/packages/taro.build.ts',
      name: 'nutui',
      fileName: () => 'nutui.umd.js',
      formats: ['umd']
    }
  }
})
