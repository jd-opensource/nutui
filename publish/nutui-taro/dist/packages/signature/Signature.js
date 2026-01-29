var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import Taro from "@tarojs/taro";
import { computed, ref, reactive, onMounted, resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, createTextVNode, createVNode, withCtx, toDisplayString } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { Button as _sfc_main$1 } from "../button/Button.js";
import { u as useLocale } from "../index-IxPZmHlb.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("signature");
const cN = "NutSignature";
const _sfc_main = create({
  props: {
    customClass: {
      type: String,
      default: ""
    },
    lineWidth: {
      type: Number,
      default: 2
    },
    strokeStyle: {
      type: String,
      default: "#000"
    },
    type: {
      type: String,
      default: "png"
    },
    unSupportTpl: {
      type: String,
      default: ""
    }
  },
  components: {
    NutButton: _sfc_main$1
  },
  emits: ["start", "end", "signing", "confirm", "clear"],
  setup(props, { emit }) {
    const translate = useLocale(cN);
    const classes = computed(() => {
      const prefixCls = "nut-signature";
      return {
        [prefixCls]: true,
        [`${props.customClass}`]: props.customClass
      };
    });
    const spcanvas = ref(null);
    const canvasSetId = "spcanvas" + (/* @__PURE__ */ new Date()).getTime();
    const state = reactive({
      canvas: null,
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null
    });
    const startEventHandler = (event) => {
      event.preventDefault();
      if (!state.ctx) {
        return false;
      }
      emit("start");
      state.ctx.beginPath();
      state.ctx.lineWidth = props.lineWidth;
      state.ctx.strokeStyle = props.strokeStyle;
    };
    const isDraw = ref(false);
    const moveEventHandler = (event) => {
      event.preventDefault();
      if (!state.ctx) {
        return false;
      }
      let evt = event.changedTouches[0];
      isDraw.value = true;
      emit("signing", evt);
      let mouseX = evt.x || evt.clientX;
      let mouseY = evt.y || evt.clientY;
      if (Taro.getEnv() === "WEB") {
        const canvas = document.getElementById(canvasSetId);
        const coverPos = canvas == null ? void 0 : canvas.getBoundingClientRect();
        if (coverPos) {
          mouseX = evt.clientX - coverPos.left;
          mouseY = evt.clientY - coverPos.top;
        }
      }
      Taro.nextTick(() => {
        var _a, _b;
        state.ctx.lineCap = "round";
        state.ctx.lineJoin = "round";
        (_a = state.ctx) == null ? void 0 : _a.lineTo(mouseX, mouseY);
        (_b = state.ctx) == null ? void 0 : _b.stroke();
      });
    };
    const endEventHandler = (event) => {
      event.preventDefault();
      emit("end");
    };
    const leaveEventHandler = (event) => {
      event.preventDefault();
    };
    const clear = () => {
      state.ctx.clearRect(0, 0, state.canvasWidth, state.canvasHeight);
      state.ctx.closePath();
      emit("clear");
      isDraw.value = false;
    };
    const confirm = () => {
      onSave();
    };
    const onSave = () => {
      if (!state.canvas) {
        return;
      }
      Taro.createSelectorQuery().select("#" + canvasSetId).fields({
        node: true,
        size: true
      }).exec((res) => __async(this, null, function* () {
        Taro.canvasToTempFilePath({
          canvas: res[0].node,
          canvasId: canvasSetId,
          fileType: props.type,
          success: function(result) {
            const _canvas = !isDraw.value ? "请绘制签名" : state.canvas;
            const _filePath = !isDraw.value ? "" : result.tempFilePath;
            emit("confirm", _canvas, _filePath);
          },
          fail: function(result) {
            emit("confirm", result);
          }
        });
      }));
    };
    onMounted(() => {
      Taro.nextTick(() => {
        setTimeout(() => {
          if (["WEAPP", "JD", "TT", "SWAN", "ALIPAY", "QQ", "ASCF"].includes(Taro.getEnv())) {
            Taro.createSelectorQuery().select("#" + canvasSetId).fields(
              {
                node: true,
                size: true
              },
              function(res) {
                const canvas = res.node;
                canvasSetting(canvas, res.width, res.height);
              }
            ).exec();
          } else {
            const canvasDom = document.getElementById(canvasSetId);
            let canvas = canvasDom;
            if ((canvasDom == null ? void 0 : canvasDom.tagName) !== "CANVAS") {
              canvas = canvasDom == null ? void 0 : canvasDom.getElementsByTagName("canvas")[0];
            }
            canvasSetting(canvas, canvasDom == null ? void 0 : canvasDom.offsetWidth, canvasDom == null ? void 0 : canvasDom.offsetHeight);
          }
        }, 1e3);
      });
    });
    const canvasSetting = (canvasDom, width, height) => {
      const canvas = canvasDom;
      const dpr = Taro.getSystemInfoSync().pixelRatio;
      const ctx = canvas.getContext("2d");
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      state.canvas = canvas;
      ctx.scale(dpr, dpr);
      state.ctx = ctx;
      state.canvasWidth = width * dpr;
      state.canvasHeight = height * dpr;
    };
    return {
      taroEnv: Taro.getEnv(),
      canvasSetId,
      spcanvas,
      confirm,
      clear,
      classes,
      startEventHandler,
      moveEventHandler,
      endEventHandler,
      leaveEventHandler,
      translate
    };
  }
});
const _hoisted_1 = {
  class: /* @__PURE__ */ normalizeClass(["nut-signature-inner", "spcanvas_WEAPP"])
};
const _hoisted_2 = ["id", "canvasId", "canvas-id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_button = resolveComponent("nut-button");
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes)
  }, [
    createElementVNode("div", _hoisted_1, [
      createElementVNode("canvas", {
        id: _ctx.canvasSetId,
        ref: "spcanvas",
        class: "spcanvas",
        canvasId: _ctx.canvasSetId,
        "canvas-id": _ctx.canvasSetId,
        type: "2d",
        "disable-scroll": "true",
        onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.startEventHandler && _ctx.startEventHandler(...args)),
        onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.moveEventHandler && _ctx.moveEventHandler(...args)),
        onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.endEventHandler && _ctx.endEventHandler(...args)),
        onTouchleave: _cache[3] || (_cache[3] = (...args) => _ctx.leaveEventHandler && _ctx.leaveEventHandler(...args))
      }, null, 40, _hoisted_2)
    ]),
    _cache[6] || (_cache[6] = createTextVNode()),
    createVNode(_component_nut_button, {
      class: "nut-signature-btn",
      type: "default",
      onClick: _cache[4] || (_cache[4] = ($event) => _ctx.clear())
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.translate("reSign")), 1)
      ]),
      _: 1
    }),
    _cache[7] || (_cache[7] = createTextVNode()),
    createVNode(_component_nut_button, {
      class: "nut-signature-btn",
      type: "primary",
      onClick: _cache[5] || (_cache[5] = ($event) => _ctx.confirm())
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.translate("confirm")), 1)
      ]),
      _: 1
    })
  ], 2);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
