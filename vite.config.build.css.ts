import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern' // 启用现代 Sass API
      }
    }
  },
  build: {
    minify: true,
    lib: {
      entry: './dist/styles/themes/default.scss',
      formats: ['es'],
      name: 'style',
      fileName: 'style'
    },
    // rollupOptions: {
    //   output: {
    //     banner
    //   }
    // },
    emptyOutDir: false
  }
})
