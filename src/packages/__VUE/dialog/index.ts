import Dialog from './index.vue'
import { h, VNode, CSSProperties, Component, nextTick } from 'vue'
import NutPopup from '../popup/index.vue'
import NutButton from '../button'
import NutOverlay from '../overlay'
import { CreateComponent } from '@/packages/utils/create'
export class DialogOptions {
  title?: string = ''
  content?: string | VNode = ''
  cancelText?: string = ''
  okText?: string = ''
  textAlign?: string = 'center'
  customClass?: string = ''
  overlayStyle?: CSSProperties = {}
  overlayClass?: string = ''
  popStyle?: CSSProperties = {}
  popClass?: string = ''
  teleport?: string | HTMLElement = 'body'
  id?: string | number = new Date().getTime()
  footerDirection?: string = 'horizontal' // 使用横纵方向 可选值 horizontal、vertical

  // function
  onUpdate?: (value: boolean) => any | void
  onOk?: () => void
  onCancel?: () => void
  onOpened?: () => void
  onClosed?: () => void
  beforeClose?: (action: string) => any

  visible? = true
  noFooter? = false
  noOkBtn? = false
  noCancelBtn? = false
  okBtnDisabled? = false
  closeOnPopstate? = false
  closeOnClickOverlay? = true
  lockScroll? = true

  cancelAutoClose? = true
  okAutoClose? = true

  zIndex?: number | string = 2000
}

class DialogFunction {
  options: DialogOptions = new DialogOptions()
  instance: any
  constructor(_options: DialogOptions) {
    const options = Object.assign(this.options, _options)
    const { unmount } = CreateComponent(options, {
      name: 'dialog',
      components: [NutPopup, NutButton, NutOverlay],
      wrapper: (elWrap: any, root: any) => {
        return {
          setup() {
            options.onUpdate = (val: boolean) => {
              if (val === false) {
                nextTick(() => {
                  unmount()
                })
              }
            }
            if (options?.onOpened) {
              options?.onOpened()
            }
            options.teleport = `#${root.id}`
            return () => {
              return h(Dialog as Component, options)
            }
          }
        }
      }
    })
  }
}

const showDialog = function (options: DialogOptions) {
  return new DialogFunction(options)
}
showDialog.install = (app: any) => {
  app.use(Dialog)
}
export { showDialog }
export default Dialog
