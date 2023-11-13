import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import configPkg from './src/config.json';

let input = {};

configPkg.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, type, exclude } = element;
    if (exclude != true) {
      input[name] = `./src/packages/__VUE/${name.toLowerCase()}/index${type === 'methods' ? '.ts' : '.vue'}`;
    }
  });
});

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  plugins: [vue()],
  build: {
    minify: false,
    target: 'es2015',
    lib: {
      entry: '',
      name: 'index',
      // fileName: (format) => format,
      formats: ['es']
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue', 'vue-router', '@/packages/locale', '@nutui/icons-vue'],
      input,
      output: {
        paths: {
          '@/packages/locale': '../locale/lang'
        },
        dir: path.resolve(__dirname, './dist/packages'),
        entryFileNames: (chunkInfo) => `${chunkInfo.name.toLowerCase()}/${chunkInfo.name}.js`,
        plugins: []
      }
    },
    emptyOutDir: false
  }
});
