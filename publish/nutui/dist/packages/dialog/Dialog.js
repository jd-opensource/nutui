var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { ref, onMounted, watch, computed, resolveComponent, openBlock, createBlock, normalizeStyle, withCtx, createElementVNode, normalizeClass, createElementBlock, renderSlot, Fragment, createTextVNode, toDisplayString, createCommentVNode, resolveDynamicComponent, nextTick, h } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { f as funInterceptor } from "../Interceptor-CBzqGJrl.js";
import { N as NutPopup, p as popupProps } from "../index-wLaOjIn1.js";
import { Button as _sfc_main$1 } from "../button/Button.js";
import { u as useLocale } from "../index-BOB4ytqZ.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
import { Overlay as _sfc_main$2 } from "../overlay/Overlay.js";
import { C as CreateComponent } from "../mountComponent-CLi4Nz91.js";
const { create } = createComponent("dialog");
const cN = "NutDialog";
const _sfc_main = create({
  inheritAttrs: false,
  components: {
    NutPopup,
    NutButton: _sfc_main$1
  },
  props: __spreadProps(__spreadValues({}, popupProps), {
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: [String, Object],
      default: ""
    },
    noFooter: {
      type: Boolean,
      default: false
    },
    noOkBtn: {
      type: Boolean,
      default: false
    },
    noCancelBtn: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: ""
    },
    okText: {
      type: String,
      default: ""
    },
    cancelAutoClose: {
      type: Boolean,
      default: true
    },
    okAutoClose: {
      type: Boolean,
      default: true
    },
    textAlign: {
      type: String,
      default: "center"
    },
    closeOnPopstate: {
      type: Boolean,
      default: false
    },
    footerDirection: {
      type: String,
      default: "horizontal"
      // vertical
    },
    customClass: {
      type: String,
      default: ""
    },
    popStyle: {
      type: Object
    },
    beforeClose: Function
  }),
  emits: ["update", "update:visible", "ok", "cancel", "opened", "closed"],
  setup(props, { emit }) {
    const translate = useLocale(cN);
    const showPopup = ref(props.visible);
    onMounted(() => {
      if (props.closeOnPopstate) {
        window.addEventListener("popstate", function() {
          closed("page");
        });
      }
    });
    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value;
        if (value) {
          emit("opened");
        }
      }
    );
    const update = (val) => {
      emit("update", val);
      emit("update:visible", val);
    };
    const closed = (action) => {
      funInterceptor(props.beforeClose, {
        args: [action],
        done: () => {
          showPopup.value = false;
          update(false);
          emit("closed");
        }
      });
    };
    const onCancel = () => {
      emit("cancel");
      if (props.cancelAutoClose) {
        showPopup.value = false;
        closed("cancel");
      }
    };
    const onOk = () => {
      emit("ok");
      if (props.okAutoClose) {
        closed("ok");
      }
    };
    const onClickOverlay = () => {
      console.log(1);
      console.log(props.closeOnClickOverlay);
      if (props.closeOnClickOverlay) {
        console.log(2);
        closed("");
      }
    };
    const contentStyle = computed(() => {
      return {
        textAlign: props.textAlign
      };
    });
    return {
      closed,
      onCancel,
      onOk,
      showPopup,
      onClickOverlay,
      contentStyle,
      translate
    };
  }
});
const _hoisted_1 = {
  key: 0,
  class: "nut-dialog__header"
};
const _hoisted_2 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_button = resolveComponent("nut-button");
  const _component_nut_popup = resolveComponent("nut-popup");
  return openBlock(), createBlock(_component_nut_popup, {
    visible: _ctx.showPopup,
    "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => _ctx.showPopup = $event),
    teleport: _ctx.teleport,
    "close-on-click-overlay": false,
    "lock-scroll": _ctx.lockScroll,
    "pop-class": _ctx.popClass,
    "overlay-class": _ctx.overlayClass,
    "overlay-style": _ctx.overlayStyle,
    style: normalizeStyle(_ctx.popStyle),
    round: "",
    "z-index": _ctx.zIndex,
    onClickOverlay: _ctx.onClickOverlay,
    onClickCloseIcon: _ctx.closed
  }, {
    default: withCtx(() => [
      createElementVNode("view", {
        class: normalizeClass(["nut-dialog", _ctx.customClass])
      }, [
        _ctx.$slots.header || _ctx.title ? (openBlock(), createElementBlock("view", _hoisted_1, [
          _ctx.$slots.header ? renderSlot(_ctx.$slots, "header", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ], 64))
        ])) : createCommentVNode("", true),
        createElementVNode("view", {
          class: "nut-dialog__content",
          style: normalizeStyle(_ctx.contentStyle)
        }, [
          _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : typeof _ctx.content === "string" ? (openBlock(), createElementBlock("view", {
            key: 1,
            innerHTML: _ctx.content
          }, null, 8, _hoisted_2)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.content), { key: 2 }))
        ], 4),
        !_ctx.noFooter ? (openBlock(), createElementBlock("view", {
          key: 1,
          class: normalizeClass(["nut-dialog__footer", { [_ctx.footerDirection]: _ctx.footerDirection }])
        }, [
          _ctx.$slots.footer ? renderSlot(_ctx.$slots, "footer", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            !_ctx.noCancelBtn ? (openBlock(), createBlock(_component_nut_button, {
              key: 0,
              size: "small",
              plain: "",
              type: "primary",
              class: "nut-dialog__footer-cancel",
              onClick: _ctx.onCancel
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.cancelText || _ctx.translate("cancel")), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : createCommentVNode("", true),
            !_ctx.noOkBtn ? (openBlock(), createBlock(_component_nut_button, {
              key: 1,
              size: "small",
              type: "primary",
              class: "nut-dialog__footer-ok",
              onClick: _ctx.onOk
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.okText || _ctx.translate("confirm")), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : createCommentVNode("", true)
          ], 64))
        ], 2)) : createCommentVNode("", true)
      ], 2)
    ]),
    _: 3
  }, 8, ["visible", "teleport", "lock-scroll", "pop-class", "overlay-class", "overlay-style", "style", "z-index", "onClickOverlay", "onClickCloseIcon"]);
}
const Dialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
class DialogOptions {
  constructor() {
    __publicField(this, "title", "");
    __publicField(this, "content", "");
    __publicField(this, "cancelText", "");
    __publicField(this, "okText", "");
    __publicField(this, "textAlign", "center");
    __publicField(this, "customClass", "");
    __publicField(this, "overlayStyle", {});
    __publicField(this, "overlayClass", "");
    __publicField(this, "popStyle", {});
    __publicField(this, "popClass", "");
    __publicField(this, "teleport", "body");
    __publicField(this, "id", (/* @__PURE__ */ new Date()).getTime());
    __publicField(this, "footerDirection", "horizontal");
    // 使用横纵方向 可选值 horizontal、vertical
    // function
    __publicField(this, "onUpdate");
    __publicField(this, "onOk");
    __publicField(this, "onCancel");
    __publicField(this, "onOpened");
    __publicField(this, "onClosed");
    __publicField(this, "beforeClose");
    __publicField(this, "visible", true);
    __publicField(this, "noFooter", false);
    __publicField(this, "noOkBtn", false);
    __publicField(this, "noCancelBtn", false);
    __publicField(this, "okBtnDisabled", false);
    __publicField(this, "closeOnPopstate", false);
    __publicField(this, "closeOnClickOverlay", true);
    __publicField(this, "lockScroll", true);
    __publicField(this, "cancelAutoClose", true);
    __publicField(this, "okAutoClose", true);
  }
}
class DialogFunction {
  constructor(_options) {
    __publicField(this, "options", new DialogOptions());
    __publicField(this, "instance");
    const options = Object.assign(this.options, _options);
    const { unmount } = CreateComponent(options, {
      name: "dialog",
      components: [NutPopup, _sfc_main$1, _sfc_main$2],
      wrapper: (elWrap, root) => {
        return {
          setup() {
            options.onUpdate = (val) => {
              if (val === false) {
                nextTick(() => {
                  unmount();
                });
              }
            };
            if (options == null ? void 0 : options.onOpened) {
              options == null ? void 0 : options.onOpened();
            }
            options.teleport = `#${root.id}`;
            return () => {
              return h(Dialog, options);
            };
          }
        };
      }
    });
  }
}
const showDialog = function(options) {
  return new DialogFunction(options);
};
showDialog.install = (app) => {
  app.use(Dialog);
};
export {
  DialogOptions,
  Dialog as default,
  showDialog
};
