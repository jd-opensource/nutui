import config from '../../config/env'
import { reactive, watch, onMounted, computed, onBeforeUnmount } from 'vue'
import { nav } from '../../../config.json'
import { isJDB, isJDT, isJDDKH, isJDA } from '.'

type Obj = {
  [k: string]: any
}

type Store = {
  variables: Obj[]
  variablesMap: Obj
  rawStyles: string
  [k: string]: any
}

const components = (nav as any[]).map(({ packages }) => (packages as any[]).map(({ name }) => name)).flat(1)

const getRawFileText = async function (url: string) {
  const response = await fetch(url)
  const res = await response.text()
  return res
}
const getInputType = (value: string) => {
  if (/^\d+$/.test(value)) {
    return 'number'
  }
  if (/^#[A-Za-z0-9]+$/.test(value)) {
    return 'hex'
  }
  if (/^(rgb|hsl)a?\((\s*\/?\s*[+-]?\d*(\.\d+)?%?,?\s*){3,5}\)/gim.test(value)) {
    return 'rgb'
  }

  return 'input'
}
const loadScript = async (url: string) =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.onload = resolve
    script.onerror = reject
    script.src = url
    document.head.appendChild(script)
  })

// 提取变量
const extractVariables = (matched: string[], name: string, lowerCaseName: string) =>
  matched.reduce((res, str) => {
    const extract = str.replace(/\s+!default/, '').match(/(.*):(?:\s+)?([\s\S]*)(?:\s+)?;/)

    if (extract) {
      const key = extract[1]
      const value = extract[2]
      res.push({
        name, // 组件名
        lowerCaseName, // 组件名小写
        key, // 变量名
        rawValue: value, // 原始值
        computedRawValue: '', // 计算后的原始值
        value, // 编辑的值
        // 编辑的类型
        inputType: getInputType(value)
      })
    }
    return res
  }, [] as Obj[])

// 提取样式代码，只保留有使用变量的行
const extractStyle = (style: string) => {
  if (!store.variables.length) {
    return ''
  }

  // comment
  style = style
    .split('\n')
    .filter(str => !/^(\s+)?\/\//.test(str))
    .join('\n')
  // todo: parse mixin
  style = style
    .split('\n')
    .filter(str => !/^(\s+)?@include/.test(str))
    .join('\n')

  style = style.replace(/(?:({|;|\s|\n))[\w-]+:([^;{}]|;base64)+;(?!base64)/g, (matched) => {
    const matchedKey = matched.match(/\$[\w-]+\b/g)
    if (matchedKey && matchedKey.some(k => store.variablesMap[k])) {
      return matched
    }
    return ''
  })

  // console.log(style);

  return style
}

const parseSassVariables = (text: string, components: string[]) => {
  const matchedComponentVariables = components
    .map((name) => {
      const lowerCaseName = name.toLowerCase()
      const reg = new RegExp(
        `(?<!\\/\\/(\\s+)?)\\$(${name}|${lowerCaseName})\\b[\\w-]+:([^;{}]|;base64)+;(?!base64)`,
        'g'
      )
      const matched = text.match(reg)
      if (matched) {
        return extractVariables(matched, name, lowerCaseName)
      }
    })
    .filter(Boolean)
    .flat(2)

  const baseVariablesReg = new RegExp(
    `\\$(?!(${matchedComponentVariables
      .map(item => (item && `${item.name}|${item.lowerCaseName}`) || '')
      .join('|')})\\b)[\\w-]+:[^:]+;`,
    'g'
  )

  const variables = matchedComponentVariables as Obj[]

  const matchedBaseVariables = text.match(baseVariablesReg)

  // 组件变量以外的都作为基础变量
  if (matchedBaseVariables) {
    variables.unshift(...extractVariables(matchedBaseVariables, 'Base', 'base'))
  }

  return variables
}

let cachedStyles = ''
const store: Store = reactive({
  init: false,
  variables: [],
  variablesMap: {},
  rawStyles: ''
})

const getSassVariables = async (sassFileUrl: string) => {
  if (sassFileUrl) {
    const customVariablesText = await getRawFileText(sassFileUrl)
    const customVariables = parseSassVariables(customVariablesText, components)

    const variablesMap = customVariables.reduce((map, item) => {
      map[item.key] = 1
      return map
    }, {})
    store.variables = customVariables
    store.variablesMap = variablesMap
  }
}

export const getRawSassStyle = async (): Promise<void> => {
  const style = await getRawFileText(`${config.themeUrl}/styles/sass-styles.scss_source`)
  store.rawStyles = style
}

export const useThemeEditor = function () {
  const cssText = computed(() => {
    const variablesText = store.variables.map(({ key, value }) => `${key}:${value}`).join(';')
    cachedStyles = cachedStyles || extractStyle(store.rawStyles)
    return variablesText ? `${variablesText};${cachedStyles}` : ''
  })

  onMounted(async () => {
    if (!store.init) {
      // 固定自定义主题的访问链接: https://nutui.jd.com/theme/?theme=自定义变量的文件地址#/
      // e.g. https://nutui.jd.com/theme/?theme=xxx.com%2variables.scss#/
      // vite issue https://github.com/vitejs/vite/issues/6894

      let customUrl = ''
      if (isJDT()) {
        customUrl = 'https://storage.360buyimg.com/nutui-static/source/variables-jdt.scss_source'
      } else if (isJDB()) {
        customUrl = 'https://storage.360buyimg.com/nutui-static/source/variables-jdb.scss_source'
      } else if (isJDDKH()) {
        customUrl = 'https://storage.360buyimg.com/nutui-static/source/variables-jddkh.scss_source'
      } else if (isJDA()) {
        customUrl = 'https://storage.360buyimg.com/nutui-static/source/variables-jda.scss_source'
      }
      if (customUrl) {
        loadScript('https://storage.360buyimg.com/nutui-static/cdn/sass.sync.min.js').then(() => {
          Promise.all([getSassVariables(customUrl), getRawSassStyle()])
        })
        store.init = true
      }
    }
  })

  let timer: any = null
  onBeforeUnmount(() => {
    clearTimeout(timer)
  })
  watch(
    () => cssText.value,
    (css: string) => {
      if (!css) {
        return
      }
      clearTimeout(timer)
      timer = setTimeout(() => {
        const Sass = (window as any).Sass
        const beginTime = new Date().getTime()
        console.log('sass编译开始', beginTime)
        Sass
        && Sass.compile(css, async (res: Obj) => {
          const iframe = window as any
          if (res.text && iframe) {
            console.log('sass编译成功', new Date().getTime() - beginTime)
            try {
              if (!iframe.__styleEl) {
                const style = iframe.document.createElement('style')
                style.id = 'theme'
                iframe.__styleEl = style
              }
              iframe.__styleEl.innerHTML = res.text
              iframe.document.head.appendChild(iframe.__styleEl)
              console.info('insert success！')
            } catch (error) {
              console.error(error)
            }
          } else {
            console.log('sass编译失败', new Date().getTime() - beginTime)
            console.error(res)
          }

          if (res.status !== 0 && res.message) {
            console.log(res.message)
          }
        })
      }, 300)
    },
    { immediate: true }
  )
}
