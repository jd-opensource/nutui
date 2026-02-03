import { createVNode, render } from 'vue'
import Toast from './index.vue'
import { CreateComponent } from '@/packages/utils/create'
import { Failure, Loading, Success, Tips } from '@nutui/icons-vue'
const defaultOptions = {
  msg: '',
  id: '',
  duration: 2000, // 显示时间(毫秒)
  center: true, // 未实现
  type: 'text',
  title: '',
  customClass: '',
  bottom: '30px',
  size: 'base',
  iconSize: '20',
  icon: null,
  textAlignCenter: true, // 未实现
  loadingRotate: true, // 未实现
  bgColor: '',
  onClose: null, // 未实现
  unmount: null,
  cover: false, // 透明遮罩层 // 未实现
  coverColor: '', // 未实现
  closeOnClickOverlay: false // 未实现
}

let idsMap: string[] = []
let optsMap: any[] = []
const clearToast = (id?: string) => {
  if (id) {
    const opts = optsMap.find(item => item.id === id)
    if (opts && opts._unmount) {
      opts._unmount()
    }
    optsMap = optsMap.filter(item => item.id !== id)
    idsMap = idsMap.filter(item => item !== id)
  } else {
    optsMap.forEach((opts) => {
      if (opts._unmount) {
        opts._unmount()
      }
    })
    optsMap = []
    idsMap = []
  }
}

const updateToast = (opts: any) => {
  const container = document.getElementById(opts.id)
  if (container) {
    const currentOpt = optsMap.find(item => item.id === opts.id)
    if (currentOpt) {
      opts = { ...defaultOptions, ...currentOpt, ...opts }
    } else {
      opts = { ...defaultOptions, ...opts }
    }
    const instance: any = createVNode(Toast, opts)
    render(instance, container)
    return showToast
  }
}

const mountToast = (opts: any) => {
  opts.unmount = clearToast
  let _id
  // 如果是更新已有的toast
  if (opts.id) {
    _id = opts.id
    if (idsMap.find(item => item === opts.id)) {
      return updateToast(opts)
    }
  } else {
    _id = new Date().getTime() + ''
  }
  opts = { ...defaultOptions, ...opts }
  opts.id = _id
  idsMap.push(opts.id)
  optsMap.push(opts)

  const { unmount } = CreateComponent(opts, {
    wrapper: Toast
  })
  opts._unmount = unmount

  return showToast
}

const errorMsg = (msg: string) => {
  if (!msg) {
    console.warn('[NutUI Toast]: msg不能为空')
    return
  }
}

const showToast = {
  text(msg: string, opts = {}) {
    errorMsg(msg)
    return mountToast({ ...opts, type: 'text', msg })
  },
  success(msg: string, opts = {}) {
    errorMsg(msg)
    return mountToast({ icon: Success, ...opts, msg, type: 'success' })
  },
  fail(msg: string, opts = {}) {
    errorMsg(msg)
    return mountToast({ icon: Failure, ...opts, msg, type: 'fail' })
  },
  warn(msg: string, opts = {}) {
    errorMsg(msg)
    return mountToast({ icon: Tips, ...opts, msg, type: 'warn' })
  },
  loading(msg: string, opts = {}) {
    return mountToast({
      icon: Loading,
      ...opts,
      msg,
      type: 'loading'
    })
  },
  hide(id?: string) {
    clearToast(id)
  },
  install(app: any): void {
    app.use(Toast)
  }
}

export { showToast }
export default Toast
