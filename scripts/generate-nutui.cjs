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
const methods = []
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, funcCall, exclude, setup } = element
    if (setup === true) {
      dts += `    Nut${name}: typeof import('./__VUE/${name.toLowerCase()}/index')['default']\n`
      importStr += `import ${name} from './__VUE/${name.toLowerCase()}/index'\n`
      importStr += `export * from './__VUE/${name.toLowerCase()}/index'\n`
    } else {
      dts += `    Nut${name}: typeof import('./__VUE/${name.toLowerCase()}/index.vue')['default']\n`
      if (name !== 'Icon') {
        importStr += `import ${name} from './__VUE/${name.toLowerCase()}/index.vue'\n`
      }
      if (funcCall === true) {
        importStr += `import { show${name} } from './__VUE/${name.toLowerCase()}/index'\n`
        methods.push(`show${name}`)
      }
    }
    importScssStr += `@use './__VUE/${name.toLowerCase()}/index.scss' as ${name.toLowerCase()}\n`
    if (exclude != true) {
      packages.push(name)
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
export { install, version, Locale, ${packages.join(',')}, ${methods.join(',')}}
export default { install, version}`

fs.outputFile(path.resolve(__dirname, '../src/packages/index.build.ts'), fileStrBuild, 'utf8')

let fileStrDev = `${importStr}
${installFunction}
${importScssStr}
export { install, Locale, ${packages.join(',')}, ${methods.join(',')}  }
export default { install, version:'${packageConfig.version}'}`
fs.outputFile(path.resolve(__dirname, '../src/packages/index.ts'), fileStrDev, 'utf8')

dts += `  }
}`
fs.outputFile(path.resolve(__dirname, '../src/packages/components.d.ts'), dts, 'utf8')
