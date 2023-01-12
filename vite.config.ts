import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import MarkdownIt from 'markdown-it-container';
import path from 'path';
import config from './package.json';
import hljs from 'highlight.js';
import autoprefixer from 'autoprefixer';
import { compressText } from './src/sites/doc/components/demo-block/basedUtil';
const resolve = path.resolve;
// https://vitejs.dev/config/
export default defineConfig({
  base: '/h5/vue/4x/',
  server: {
    port: 2023,
    host: '0.0.0.0',
    proxy: {
      '/devServer': {
        target: 'https://nutui.jd.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/devServer/, '')
      },
      '/devTheme': {
        target: 'https://nutui.jd.com/theme/source',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/devTheme/, '')
      }
    }
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "@/packages/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`
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
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      // default options passed to markdown-it
      // see: https://markdown-it.github.io/markdown-it/
      markdownItOptions: {
        typographer: false,
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value;
            } catch (__) {}
          }

          return ''; // 使用额外的默认转义
        }
      },
      markdownItSetup(md) {
        md.use(MarkdownIt, 'demo', {
          validate: function (params) {
            return params.match(/^demo\s*(.*)$/);
          },

          render: function (tokens, idx) {
            const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
            if (tokens[idx].nesting === 1) {
              // opening tag
              const contentHtml = compressText(tokens[idx + 1].content);
              return `<demo-block data-type="vue" data-value="${contentHtml}">` + md.utils.escapeHtml(m[1]) + '\n';
            } else {
              // closing tag
              return '</demo-block>\n';
            }
          }
        });
      }
    })
  ],
  build: {
    target: 'es2015',
    outDir: './dist/h5/vue/4x/',
    // assetsDir: config.version,
    cssCodeSplit: false,
    cssTarget: ['chrome61'],
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
});
