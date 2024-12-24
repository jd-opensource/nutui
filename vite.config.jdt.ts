import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import config from './package.json'
import { markdown } from '@nutui/vite-plugins'
const resolve = path.resolve
// https://vitejs.dev/config/
export default defineConfig({
  base: '/jdt/',
  server: {
    port: 2021,
    host: '0.0.0.0',
    proxy: {
      '/devServer': {
        target: 'https://nutui.jd.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/devServer/, '')
      },
      '/devTheme': {
        target: 'https://nutui.jd.com/theme/source',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/devTheme/, '')
      }
    }
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern', // 启用现代 Sass API
        // example : additionalData: `@use "./src/design/styles/index" as *;`
        // dont need include file extend .scss
        additionalData: `@use "@/packages/styles/index-jdt.scss"  as *;@import "@/sites/assets/styles/index.scss" as *;`
      }
    },
    postcss: {
      plugins: [
        require('autoprefixer')({
          overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'ie > 11', 'iOS >= 10', 'Android >= 5']
        })
      ]
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    markdown({
      docRoot: path.resolve(__dirname, './src/packages/__VUE'),
      docTaroRoot: path.resolve(__dirname, './packages/nutui-taro-demo/src')
    })
  ],
  build: {
    target: 'es2015',
    outDir: './dist/jdt/',
    // assetsDir: config.version,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        // doc: resolve(__dirname, 'index.html'),
        mobile: resolve(__dirname, 'demo.html')
      },
      output: {
        entryFileNames: `demo-${config.version}/[name].js`,
        chunkFileNames: `demo-${config.version}/[name].js`,
        assetFileNames: `demo-${config.version}/[name].[ext]`,
        plugins: []
      }
    }
  }
})
