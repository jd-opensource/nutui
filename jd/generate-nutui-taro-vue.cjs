const packageConfig = require('../package.json');
const config = require('../src/config.json');
const path = require('path');
const fs = require('fs-extra');
let importStr = `import { App } from 'vue';
import Locale from './locale';\n`;
let importScssStr = `\n`;
const packages = [];
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, exclude, taro } = element;
    if (taro == true) {
      const filePath = path.join(`src/packages/__VUE/${name.toLowerCase()}/index.taro.vue`);
      if (name !== 'Icon') {
        importStr += `import ${name} from './__VUE/${name.toLowerCase()}/index${
          fs.existsSync(filePath) ? '.taro' : ''
        }.vue';\n`;
      }
      importScssStr += `import './__VUE/${name.toLowerCase()}/index.scss';\n`;
      if (exclude != true) {
        packages.push(name);
      }
    }
  });
});
let installFunction = `function install(app: App) {
  const packages = [${packages.join(',')}];
  packages.forEach((item:any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}`;
let fileStrBuild = `${importStr}
${installFunction}
const version = '${packageConfig.version}';
export { install, version, Locale, ${packages.join(',')} };
export default { install, version, Locale};`;

fs.outputFile(path.resolve(__dirname, '../src/packages/nutui.taro.vue.build.ts'), fileStrBuild, 'utf8', (error) => {
  // logger.success(`${package_config_path} 文件写入成功`);
});
let fileStrDev = `${importStr}
${installFunction}
${importScssStr}
export { install, Locale, ${packages.join(',')}  };
export default { install, version:'${packageConfig.version}', Locale};`;
fs.outputFile(path.resolve(__dirname, '../src/packages/nutui.taro.vue.ts'), fileStrDev, 'utf8', (error) => {
  // logger.success(`${package_config_path} 文件写入成功`);
});
