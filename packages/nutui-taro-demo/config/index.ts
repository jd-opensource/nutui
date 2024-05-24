import path from 'path'
import dev from './dev'
import prod from './prod'

const config = {
  projectName: '@nutui/nutui-taro-demo',
  date: '2021-5-29',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV === 'h5' ? 'h5' : process.env.TARO_ENV}`,
  plugins: [
    '@tarojs/plugin-html',
    [
      '@tarojs/plugin-framework-vue3',
      {
        vueLoaderOption: {
          compilerOptions: {
            isCustomElement: tag => tag.includes('taro-scroll-view-core'),
            whitespace: 'preserve'
          }
        }
      }
    ]
  ],
  alias: {
    '@/packages': path.resolve(__dirname, '../../../src/packages'),
    '@nutui/nutui-taro': path.resolve(__dirname, '../../../src/packages/taro')
  },
  sass: {
    resource: [path.resolve(__dirname, '../../../src/packages/styles/variables.scss')]
  },
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'vue3',
  compiler: {
    type: 'webpack5',
    prebundle: { enable: false }
  },
  mini: {
    compile: {
      include: [path.resolve(__dirname, '../../../src')]
    },
    webpackChain(chain) {
      chain.merge({
        module: {
          rule: [
            {
              test: /.js$/,
              loader: 'babel-loader'
            }
          ]
        }
      })
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    compile: {
      include: [path.resolve(__dirname, '../../../src')]
    },
    publicPath: '/',
    staticDirectory: 'static',
    chunkDirectory: 'chunk',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      pxtransform: {
        enable: true,
        config: { selectorBlackList: ['nut-'] }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

export default function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, dev)
  }
  return merge({}, config, prod)
}
