var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
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
import { reactive, ref, computed, onMounted, watch, toRefs, resolveComponent, openBlock, createElementBlock, Fragment, createElementVNode, normalizeClass, renderSlot, createTextVNode, withModifiers, toDisplayString, withDirectives, normalizeStyle, createVNode, withCtx, vShow } from "vue";
import { Button as _sfc_main$1 } from "../button/Button.js";
import { c as createComponent } from "../component-DQf3CENX.js";
import { a as preventDefault, c as clamp } from "../util-2G3mRQeF.js";
import { IconFont } from "@nutui/icons-vue-taro";
import { u as useTouch } from "../index-I8tfW3Kf.js";
import Taro, { useReady } from "@tarojs/taro";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const compareVersion = (v1Old, v2Old) => {
  const v1 = v1Old.split(".");
  const v2 = v2Old.split(".");
  const len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push("0");
  }
  while (v2.length < len) {
    v2.push("0");
  }
  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i]);
    const num2 = parseInt(v2[i]);
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
};
const isWeapp = () => {
  return process.env.TARO_ENV === "weapp";
};
function _easyCanvasContextBase(systemInfo, lowCallback, highCallback, targetVersion = "1.9.90") {
  if (isWeapp() && compareVersion(systemInfo.SDKVersion, targetVersion) >= 0) {
    highCallback();
  } else {
    lowCallback();
  }
}
function easySetFillStyle(systemInfo, canvasContext, color) {
  _easyCanvasContextBase(
    systemInfo,
    () => {
      canvasContext.setFillStyle(color);
    },
    () => {
      if (typeof color === "string") {
        canvasContext.fillStyle = color;
      }
    }
  );
}
const { create } = createComponent("avatar-cropper");
const _sfc_main = create({
  components: {
    NutButton: _sfc_main$1,
    IconFont
  },
  props: {
    maxZoom: {
      type: Number,
      default: 3
    },
    space: {
      type: Number,
      default: 10
    },
    toolbarPosition: {
      type: String,
      default: "bottom"
    },
    editText: {
      type: String,
      default: "编辑"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确定"
    },
    shape: {
      type: String,
      default: "square"
    },
    sizeType: {
      type: Array,
      default: () => ["original", "compressed"]
    },
    sourceType: {
      type: Array,
      default: () => ["album", "camera"]
    }
  },
  emits: ["confirm", "cancel"],
  setup(props, { emit, expose }) {
    const state = reactive({
      visible: false,
      defScale: 1,
      scale: 1,
      angle: 0,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      displayWidth: 0,
      displayHeight: 0,
      cropperWidth: 0,
      cropperHeight: 0
    });
    const canvasAll = {
      canvasId: `canvas-${Date.now()}`,
      cropperCanvas: null,
      cropperCanvasContext: null
    };
    const drawImage = ref({
      x: 0,
      // 在画布上x的坐标位置
      y: 0,
      // 在画布上y的坐标位置
      width: 0,
      // 要使用的图像的宽度
      height: 0
      // 要使用的图像的高度
    });
    let canvasImage = null;
    const touch = useTouch();
    const systemInfo = Taro.getSystemInfoSync();
    const showCanvas2D = computed(() => {
      return Taro.getEnv() === "ALIPAY" && parseInt(Taro.SDKVersion.replace(/\./g, "")) >= 270 || systemInfo.SDKVersion && parseInt(systemInfo.SDKVersion.replace(/\./g, "")) >= 290 && Taro.getEnv() === "WEAPP";
    });
    const showPixelRatio = Taro.getEnv() === "WEB" || showCanvas2D.value;
    const pixelRatio = showPixelRatio ? systemInfo.pixelRatio : 1;
    state.displayWidth = systemInfo.windowWidth * pixelRatio;
    state.displayHeight = systemInfo.windowHeight * pixelRatio;
    state.cropperWidth = state.cropperHeight = state.displayWidth - props.space * pixelRatio * 2;
    useReady(() => {
      if (showCanvas2D.value) {
        const { canvasId } = canvasAll;
        Taro.createSelectorQuery().select(`#${canvasId}`).node(({ node: canvas }) => {
          canvas.width = state.displayWidth;
          canvas.height = state.displayHeight;
          canvasAll.cropperCanvas = canvas;
        }).exec();
      }
    });
    onMounted(() => {
      const { canvasId } = canvasAll;
      canvasAll.cropperCanvasContext = Taro.createCanvasContext(canvasId);
    });
    const isAngle = computed(() => {
      return state.angle === 90 || state.angle === 270;
    });
    const highlightStyle = computed(() => {
      const { cropperWidth } = state;
      const width = cropperWidth / pixelRatio + "px";
      const height = width;
      return {
        width,
        height
      };
    });
    const canvasStyle = computed(() => {
      const { displayWidth, displayHeight } = state;
      return {
        width: `${displayWidth / pixelRatio}px`,
        height: `${displayHeight / pixelRatio}px`
      };
    });
    const cutCanvasStyle = computed(() => {
      const { displayWidth, displayHeight, cropperWidth } = state;
      return {
        top: `${(displayHeight / pixelRatio - cropperWidth / pixelRatio) / 2}px`,
        left: `${(displayWidth / pixelRatio - cropperWidth / pixelRatio) / 2}px`,
        width: `${cropperWidth / pixelRatio}px`,
        height: `${cropperWidth / pixelRatio}px`
      };
    });
    const maxMoveX = computed(() => {
      const { displayWidth, scale, cropperWidth } = state;
      const { height } = drawImage.value;
      if (isAngle.value) {
        return Math.max(0, (height * scale - cropperWidth) / 2);
      }
      return Math.max(0, (displayWidth * scale - cropperWidth) / 2);
    });
    const maxMoveY = computed(() => {
      const { displayWidth, scale, cropperWidth } = state;
      const { height } = drawImage.value;
      if (isAngle.value) {
        return Math.max(0, (displayWidth * scale - cropperWidth) / 2);
      }
      return Math.max(0, (height * scale - cropperWidth) / 2);
    });
    const dataURLToImage = (dataURL) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = dataURL;
      });
    };
    const dataURLToCanvasImage = (canvas, dataURL) => {
      if (!canvas) {
        return Promise.reject(new Error("Invalid canvas element"));
      }
      return new Promise((resolve) => {
        const img = canvas.createImage();
        img.onload = () => resolve(img);
        img.src = dataURL;
      });
    };
    const canvas2dDraw = (ctx) => {
      if (!ctx) return;
      const { width, height, x, y } = drawImage.value;
      const { moveX, moveY, scale, angle, displayWidth, displayHeight } = state;
      ctx.clearRect(0, 0, displayWidth, displayHeight);
      ctx.translate(displayWidth / 2 + moveX, displayHeight / 2 + moveY);
      ctx.rotate(Math.PI / 180 * angle);
      ctx.scale(scale, scale);
      ctx.drawImage(canvasImage, x, y, width, height);
    };
    const webDraw = () => {
      const { displayWidth, displayHeight } = state;
      const canvasDom = document.getElementById(canvasAll.canvasId);
      let canvas = canvasDom;
      if ((canvasDom == null ? void 0 : canvasDom.tagName) !== "CANVAS") {
        canvas = canvasDom == null ? void 0 : canvasDom.getElementsByTagName("canvas")[0];
        canvas.width = displayWidth;
        canvas.height = displayHeight;
      }
      const ctx = canvas.getContext("2d");
      canvas2dDraw(ctx);
    };
    const canvas2dContextDraw = () => {
      const { cropperCanvas } = canvasAll;
      let ctx = cropperCanvas.getContext("2d");
      ctx && ctx.resetTransform();
      canvas2dDraw(ctx);
    };
    const draw = () => {
      if (Taro.getEnv() === "WEB") {
        webDraw();
        return;
      }
      if (showCanvas2D.value) {
        canvas2dContextDraw();
        return;
      }
      const { width, height, x, y } = drawImage.value;
      const { moveX, moveY, scale, angle, displayWidth, displayHeight, cropperWidth } = state;
      const { cropperCanvasContext } = canvasAll;
      let ctx = cropperCanvasContext;
      if (!ctx) return;
      ctx.clearRect(0, 0, displayWidth, displayHeight);
      easySetFillStyle(systemInfo, ctx, "#666");
      ctx.fillRect(0, 0, displayWidth, displayHeight);
      ctx.stroke();
      ctx.fill();
      easySetFillStyle(systemInfo, ctx, "#000");
      ctx.fillRect(props.space, (displayHeight - cropperWidth) / 2, cropperWidth, cropperWidth);
      ctx.stroke();
      ctx.fill();
      ctx.translate(displayWidth / 2 + moveX, displayHeight / 2 + moveY);
      ctx.rotate(Math.PI / 180 * angle);
      ctx.scale(scale, scale);
      ctx.drawImage(canvasImage, x, y, width, height);
      ctx.draw();
    };
    const setDrawImg = (image) => __async(this, null, function* () {
      const { displayWidth, cropperWidth } = state;
      let drawImg = __spreadValues({}, drawImage.value);
      const { width: imgWidth, height: imgHeight } = image;
      canvasImage = image.path;
      if (Taro.getEnv() === "WEB") {
        canvasImage = yield dataURLToImage(image.path);
      }
      if (showCanvas2D.value) {
        canvasImage = yield dataURLToCanvasImage(canvasAll.cropperCanvas, image.path);
      }
      const isPortrait = imgHeight > imgWidth;
      const rate = isPortrait ? imgWidth / imgHeight : imgHeight / imgWidth;
      drawImg.width = displayWidth;
      drawImg.height = isPortrait ? displayWidth / rate : displayWidth * rate;
      drawImg.x = -drawImg.width / 2;
      drawImg.y = -drawImg.height / 2;
      drawImage.value = drawImg;
      state.defScale = cropperWidth / (isPortrait ? drawImg.width : drawImg.height);
      resetScale();
      yield Promise.resolve();
      draw();
    });
    const chooseImage = () => {
      Taro.chooseImage({
        count: 1,
        // 可以指定是原图还是压缩图，默认二者都有
        sizeType: props.sizeType,
        sourceType: props.sourceType,
        success: (res) => {
          const { tempFiles } = res;
          !!tempFiles.length && imageChange(tempFiles[0]);
        }
      });
    };
    const imageChange = (file) => __async(this, null, function* () {
      Taro.getImageInfo({
        src: file.path
      }).then((res) => {
        state.visible = true;
        setDrawImg(res);
      });
    });
    const resetScale = () => {
      setScale(state.defScale);
      state.moveX = 0;
      state.moveY = 0;
      state.angle = 0;
    };
    const setScale = (scale) => {
      scale = clamp(scale, 0.3, +props.maxZoom + 1);
      if (scale !== state.scale) {
        state.scale = scale;
      }
    };
    const getDistance = (touches) => Math.sqrt(__pow(touches[0].clientX - touches[1].clientX, 2) + __pow(touches[0].clientY - touches[1].clientY, 2));
    let startMoveX;
    let startMoveY;
    let startScale;
    let startDistance;
    let fingerNum;
    const onTouchStart = (event) => {
      const { touches } = event;
      const { offsetX } = touch;
      touch.start(event);
      fingerNum = touches.length;
      startMoveX = state.moveX;
      startMoveY = state.moveY;
      state.moving = fingerNum === 1;
      state.zooming = fingerNum === 2 && !offsetX.value;
      if (state.zooming) {
        startScale = state.scale;
        startDistance = getDistance(event.touches);
      }
    };
    const onTouchMove = (event) => {
      const { touches } = event;
      touch.move(event);
      if (state.moving || state.zooming) {
        preventDefault(event, true);
      }
      if (state.moving) {
        const { deltaX, deltaY } = touch;
        const moveX = deltaX.value * state.scale + startMoveX;
        const moveY = deltaY.value * state.scale + startMoveY;
        state.moveX = clamp(moveX, -maxMoveX.value, maxMoveX.value);
        state.moveY = clamp(moveY, -maxMoveY.value, maxMoveY.value);
      }
      if (state.zooming && touches.length === 2) {
        const distance = getDistance(touches);
        const scale = startScale * distance / startDistance;
        setScale(scale);
      }
    };
    const onTouchEnd = (event) => {
      let stopPropagation = false;
      if (state.moving || state.zooming) {
        stopPropagation = !(state.moving && startMoveX === state.moveX && startMoveY === state.moveY);
        if (!event.touches.length) {
          if (state.zooming) {
            state.moveX = clamp(state.moveX, -maxMoveX.value, maxMoveX.value);
            state.moveY = clamp(state.moveY, -maxMoveY.value, maxMoveY.value);
            state.zooming = false;
          }
          state.moving = false;
          startMoveX = 0;
          startMoveY = 0;
          startScale = state.defScale;
          if (state.scale < state.defScale) {
            resetScale();
          }
          if (state.scale > props.maxZoom) {
            state.scale = +props.maxZoom;
          }
        }
      }
      preventDefault(event, stopPropagation);
      touch.reset();
    };
    const reset = () => {
      state.angle = 0;
    };
    const rotate = () => {
      if (state.angle === 270) {
        state.angle = 0;
        return;
      }
      state.angle += 90;
    };
    const cancel = (isEmit = true) => {
      state.visible = false;
      resetScale();
      isEmit && emit("cancel");
    };
    const confirmWEB = () => {
      const { cropperWidth, displayHeight } = state;
      const canvasDom = document.getElementById(canvasAll.canvasId);
      let canvas = canvasDom;
      if ((canvasDom == null ? void 0 : canvasDom.tagName) !== "CANVAS") {
        canvas = canvasDom == null ? void 0 : canvasDom.getElementsByTagName("canvas")[0];
      }
      const width = cropperWidth;
      const height = cropperWidth;
      const croppedCanvas = document.createElement("canvas");
      const croppedCtx = croppedCanvas.getContext("2d");
      croppedCanvas.width = width;
      croppedCanvas.height = height;
      canvas && croppedCtx.drawImage(
        canvas,
        props.space * pixelRatio,
        (displayHeight - cropperWidth) / 2,
        width,
        height,
        0,
        0,
        width,
        height
      );
      const imageDataURL = croppedCanvas.toDataURL("image/png");
      emit("confirm", imageDataURL);
      cancel(false);
    };
    const confirmCanvas2D = () => {
      const { cropperWidth, displayHeight } = state;
      const { cropperCanvas } = canvasAll;
      const pixelRatio2 = Taro.getEnv() === "ALIPAY" ? 1 : systemInfo.pixelRatio;
      Taro.canvasToTempFilePath({
        canvas: cropperCanvas,
        x: props.space,
        y: (displayHeight - cropperWidth) / pixelRatio2 / 2,
        width: cropperWidth / pixelRatio2,
        height: cropperWidth / pixelRatio2,
        destWidth: cropperWidth,
        destHeight: cropperWidth,
        success: (res) => __async(this, null, function* () {
          let filePath = res.tempFilePath;
          emit("confirm", filePath);
          cancel(false);
          return;
        })
      });
    };
    const confirm = () => {
      if (Taro.getEnv() === "WEB") {
        confirmWEB();
        return;
      }
      if (showCanvas2D.value) {
        confirmCanvas2D();
        return;
      }
      const { cropperWidth, displayHeight } = state;
      const { canvasId } = canvasAll;
      Taro.canvasToTempFilePath({
        canvasId,
        x: props.space,
        y: (displayHeight - cropperWidth) / 2,
        width: cropperWidth,
        height: cropperWidth,
        destWidth: cropperWidth * systemInfo.pixelRatio,
        destHeight: cropperWidth * systemInfo.pixelRatio,
        success: (res) => __async(this, null, function* () {
          let filePath = res.tempFilePath;
          emit("confirm", filePath);
          cancel(false);
          return;
        })
      });
    };
    watch(
      () => state.scale,
      () => {
        draw();
      }
    );
    watch(
      () => state.angle,
      () => {
        if (Math.abs(state.moveX) > maxMoveX.value) {
          state.moveX = maxMoveX.value;
        }
        if (Math.abs(state.moveY) > maxMoveY.value) {
          state.moveY = maxMoveY.value;
        }
        draw();
      }
    );
    watch(
      () => state.moveX,
      () => {
        draw();
      }
    );
    watch(
      () => state.moveY,
      () => {
        draw();
      }
    );
    expose({
      cancel,
      reset,
      rotate,
      confirm
    });
    return __spreadProps(__spreadValues(__spreadValues({}, toRefs(state)), toRefs(canvasAll)), {
      showCanvas2D,
      highlightStyle,
      canvasStyle,
      cutCanvasStyle,
      chooseImage,
      reset,
      rotate,
      cancel,
      confirm,
      onTouchStart,
      onTouchMove,
      onTouchEnd
    });
  }
});
const _hoisted_1 = { class: "nut-cropper-popup" };
const _hoisted_2 = ["id", "canvas-id", "type"];
const _hoisted_3 = {
  key: 1,
  class: "flex-sb"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_button = resolveComponent("nut-button");
  const _component_IconFont = resolveComponent("IconFont");
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("view", {
      class: normalizeClass(["nut-avatar-cropper taro", { round: _ctx.shape === "round" }])
    }, [
      renderSlot(_ctx.$slots, "default"),
      _cache[9] || (_cache[9] = createTextVNode()),
      createElementVNode("view", {
        class: "nut-avatar-cropper__edit-text",
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.chooseImage && _ctx.chooseImage(...args), ["stop"]))
      }, toDisplayString(_ctx.editText), 1)
    ], 2),
    _cache[15] || (_cache[15] = createTextVNode()),
    withDirectives(createElementVNode("view", _hoisted_1, [
      createElementVNode("canvas", {
        id: _ctx.canvasId,
        "canvas-id": _ctx.canvasId,
        type: _ctx.showCanvas2D ? "2d" : void 0,
        style: normalizeStyle(_ctx.canvasStyle),
        class: "nut-cropper-popup__canvas"
      }, null, 12, _hoisted_2),
      _cache[13] || (_cache[13] = createTextVNode()),
      createElementVNode("view", {
        class: "nut-cropper-popup__highlight",
        onTouchstart: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
        onTouchmove: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
        onTouchend: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
        onTouchcancel: _cache[4] || (_cache[4] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
      }, [
        createElementVNode("view", {
          class: normalizeClass(["highlight", { highlight__round: _ctx.shape === "round" }]),
          style: normalizeStyle(_ctx.highlightStyle)
        }, null, 6)
      ], 32),
      _cache[14] || (_cache[14] = createTextVNode()),
      createElementVNode("view", {
        class: normalizeClass(["nut-cropper-popup__toolbar", [_ctx.toolbarPosition]])
      }, [
        _ctx.$slots.toolbar ? renderSlot(_ctx.$slots, "toolbar", { key: 0 }) : (openBlock(), createElementBlock("view", _hoisted_3, [
          createElementVNode("view", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: _cache[5] || (_cache[5] = ($event) => _ctx.cancel())
          }, [
            createVNode(_component_nut_button, { type: "danger" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.cancelText), 1)
              ]),
              _: 1
            })
          ]),
          _cache[10] || (_cache[10] = createTextVNode()),
          createElementVNode("view", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: _cache[6] || (_cache[6] = (...args) => _ctx.reset && _ctx.reset(...args))
          }, [
            createVNode(_component_IconFont, {
              name: "refresh2",
              color: "#fff"
            })
          ]),
          _cache[11] || (_cache[11] = createTextVNode()),
          createElementVNode("view", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: _cache[7] || (_cache[7] = (...args) => _ctx.rotate && _ctx.rotate(...args))
          }, [
            createVNode(_component_IconFont, {
              name: "retweet",
              color: "#fff"
            })
          ]),
          _cache[12] || (_cache[12] = createTextVNode()),
          createElementVNode("view", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: _cache[8] || (_cache[8] = (...args) => _ctx.confirm && _ctx.confirm(...args))
          }, [
            createVNode(_component_nut_button, { type: "success" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.confirmText), 1)
              ]),
              _: 1
            })
          ])
        ]))
      ], 2)
    ], 512), [
      [vShow, _ctx.visible]
    ])
  ], 64);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
