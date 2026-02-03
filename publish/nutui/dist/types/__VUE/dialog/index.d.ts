import Dialog from './index.vue';
import { VNode, CSSProperties } from 'vue';
export declare class DialogOptions {
    title?: string;
    content?: string | VNode;
    cancelText?: string;
    okText?: string;
    textAlign?: string;
    customClass?: string;
    overlayStyle?: CSSProperties;
    overlayClass?: string;
    popStyle?: CSSProperties;
    popClass?: string;
    teleport?: string | HTMLElement;
    id?: string | number;
    footerDirection?: string;
    onUpdate?: (value: boolean) => any | void;
    onOk?: () => void;
    onCancel?: () => void;
    onOpened?: () => void;
    onClosed?: () => void;
    beforeClose?: (action: string) => any;
    visible?: boolean | undefined;
    noFooter?: boolean | undefined;
    noOkBtn?: boolean | undefined;
    noCancelBtn?: boolean | undefined;
    okBtnDisabled?: boolean | undefined;
    closeOnPopstate?: boolean | undefined;
    closeOnClickOverlay?: boolean | undefined;
    lockScroll?: boolean | undefined;
    cancelAutoClose?: boolean | undefined;
    okAutoClose?: boolean | undefined;
    zIndex?: number | string;
}
declare class DialogFunction {
    options: DialogOptions;
    instance: any;
    constructor(_options: DialogOptions);
}
declare const showDialog: {
    (options: DialogOptions): DialogFunction;
    install(app: any): void;
};
export { showDialog };
export default Dialog;
