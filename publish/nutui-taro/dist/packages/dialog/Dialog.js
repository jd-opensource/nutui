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
import { ref, onMounted, watch, computed, resolveComponent, openBlock, createBlock, normalizeStyle, withCtx, createElementVNode, normalizeClass, createElementBlock, renderSlot, Fragment, createTextVNode, toDisplayString, createCommentVNode, resolveDynamicComponent } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { d as isPromise } from "../util-2G3mRQeF.js";
import { N as NutPopup, p as popupProps } from "../index.taro-CNxLoYer.js";
import { Button as _sfc_main$1 } from "../button/Button.js";
import { u as useLocale } from "../index-IxPZmHlb.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
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
    beforeClose: {
      type: Function
    }
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
      if (props.beforeClose) {
        const result = props.beforeClose(action);
        if (isPromise(result)) {
          result.then((bool) => {
            if (bool) {
              update(false);
              emit("closed");
            }
          });
        }
      } else {
        update(false);
        emit("closed");
      }
    };
    const onCancel = () => {
      emit("cancel");
      if (props.cancelAutoClose) {
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
      if (props.closeOnClickOverlay) {
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
    "catch-move": _ctx.lockScroll,
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
        _cache[2] || (_cache[2] = createTextVNode()),
        createElementVNode("view", {
          class: "nut-dialog__content",
          style: normalizeStyle(_ctx.contentStyle)
        }, [
          _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : typeof _ctx.content === "string" ? (openBlock(), createElementBlock("view", {
            key: 1,
            innerHTML: _ctx.content
          }, null, 8, _hoisted_2)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.content), { key: 2 }))
        ], 4),
        _cache[3] || (_cache[3] = createTextVNode()),
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
            _cache[1] || (_cache[1] = createTextVNode()),
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
  }, 8, ["visible", "teleport", "lock-scroll", "catch-move", "pop-class", "overlay-class", "overlay-style", "style", "z-index", "onClickOverlay", "onClickCloseIcon"]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
