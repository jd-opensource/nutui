import Dialog from '../index.vue';
import { render, createVNode, h } from 'vue';
export class DialogOptions {
  title?: string = '';
  content?: string = '';
  cancelText?: string = '';
  okText?: string = '';
  textAlign?: string = 'center';
  teleport?: String | HTMLElement = 'body';
  id?: string | number = new Date().getTime();
  footerDirection?: string = 'horizontal'; //使用横纵方向 可选值 horizontal、vertical

  // function
  onUpdate?: Function = () => {};
  onOk?: Function = () => {};
  onCancel?: Function = () => {};
  onClose?: Function = () => {};
  onClosed?: Function = () => {};

  visible?: boolean = true;
  noFooter?: boolean = false;
  noOkBtn?: boolean = false;
  noCancelBtn?: boolean = false;
  okBtnDisabled?: boolean = false;
  closeOnPopstate?: boolean = false;
  lockScroll?: boolean = true;
}

class DialogFunction {
  options: DialogOptions = new DialogOptions();

  constructor(_options: DialogOptions) {
    let options = Object.assign(this.options, _options);
    let elWrap: HTMLElement = document.body;
    let teleport = options.teleport as string;
    if (teleport != 'body') {
      if (typeof teleport == 'string') {
        elWrap = document.querySelector(teleport) as HTMLElement;
      } else {
        elWrap = options.teleport as HTMLElement;
      }
    }
    const root = document.createElement('view');
    root.id = 'dialog-' + options.id;
    const Wrapper = {
      setup() {
        options.onUpdate = (val: boolean) => {
          if (val == false) {
            elWrap.removeChild(root);
          }
        };
        options.teleport = `#${root.id}`;
        return () => {
          return h(Dialog as any, options);
        };
      }
    };
    const instance: any = createVNode(Wrapper);
    elWrap.appendChild(root);
    render(instance, root);
  }

  close = () => {
    // if (instance) {
    //   instance.component.ctx.close();
    // }
  };

  setDefaultOptions = () => {
    // Object.assign(this.currentOptions, options);
  };

  resetDefaultOptions = () => {
    // Dialog.currentOptions = { ...Dialog.defaultOptions };
  };
}

const _Dialog = function (options: DialogOptions) {
  return new DialogFunction(options);
};
_Dialog.install = (app: any) => {
  app.use(Dialog);
  app.config.globalProperties.$dialog = _Dialog;
};
export { Dialog };
export default _Dialog;
