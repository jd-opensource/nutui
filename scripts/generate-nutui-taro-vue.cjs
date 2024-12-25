const packageConfig = require('../package.json')
const config = require('../src/config.json')
const path = require('path')
const fs = require('fs-extra')
let importStr = `import { App } from 'vue'
import Locale from './locale'\n`
let importScssStr = `\n`
let dts = `export {}
declare module 'vue' {
  export interface GlobalComponents {\n`
const packages = []
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, exclude, taro, setup } = element
    if (taro !== false) {
      if (setup === true) {
        dts += `    Nut${name}: typeof import('@/packages/__VUE/${name.toLowerCase()}/index.taro')['default']\n`
        importStr += `import ${name} from './__VUE/${name.toLowerCase()}/index.taro'\n`
        importStr += `export * from './__VUE/${name.toLowerCase()}/index.taro'\n`
      } else {
        dts += `    Nut${name}: typeof import('@/packages/__VUE/${name.toLowerCase()}/index.taro.vue')['default']\n`
        const filePath = path.join(`src/packages/__VUE/${name.toLowerCase()}/index.taro.vue`)
        if (name !== 'Icon') {
          importStr += `import ${name} from './__VUE/${name.toLowerCase()}/index${
            fs.existsSync(filePath) ? '.taro' : ''
          }.vue'\n`
        }
      }
      importScssStr += `@use './__VUE/${name.toLowerCase()}/index.scss' as ${name.toLowerCase()}\n`
      if (exclude !== true) {
        packages.push(name)
      }
    }
  })
})
let installFunction = `function install(app: App) {
  const packages = [${packages.join(',')}]
  packages.forEach((item:any) => {
    if (item.install) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })
}`
let fileStrBuild = `${importStr}
${installFunction}
const version = '${packageConfig.version}'
export { install, version, Locale, ${packages.join(',')} }
export default { install, version, Locale}`

fs.outputFile(path.resolve(__dirname, '../src/packages/taro.build.ts'), fileStrBuild, 'utf8')
let fileStrDev = `${importStr}
${installFunction}
${importScssStr}
export { install, Locale, ${packages.join(',')}  }
export default { install, version:'${packageConfig.version}', Locale}`
fs.outputFile(path.resolve(__dirname, '../src/packages/taro.ts'), fileStrDev, 'utf8')

dts += `  }
}`
fs.outputFile(path.resolve(__dirname, '../packages/nutui-taro-demo/components.d.ts'), dts, 'utf8')
