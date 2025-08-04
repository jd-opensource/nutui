import { ref, reactive, onMounted, onActivated, onDeactivated, openBlock, createElementBlock, normalizeStyle, withModifiers, renderSlot } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { r as requestAniFrame } from "../raf-CzJhCkQo.js";
import { u as useTaroRect } from "../index-m0Wcof-q.js";
import Taro, { eventCenter, getCurrentInstance } from "@tarojs/taro";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("drag");
const _sfc_main = create({
  props: {
    attract: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: "all"
    },
    boundary: {
      type: Object,
      default: () => {
        return {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        };
      }
    }
  },
  setup(props) {
    const myDrag = ref();
    const refRandomId = Math.random().toString(36).slice(-8);
    const state = reactive({
      keepAlive: false,
      elWidth: 0,
      elHeight: 0,
      screenWidth: 0,
      screenHeight: 0,
      startTop: 0,
      startLeft: 0,
      initTop: 0,
      initLeft: 0,
      nx: 0,
      ny: 0,
      xPum: 0,
      yPum: 0,
      top: 0,
      left: 0,
      position: { x: 0, y: 0 },
      boundary: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    });
    const domElem = Taro.getSystemInfoSync();
    function getInfo() {
      useTaroRect(myDrag).then(
        (rec) => {
          state.elWidth = rec.width;
          state.elHeight = rec.height;
          state.initTop = rec.top;
          state.initLeft = rec.left;
          state.screenWidth = domElem.screenWidth;
          state.screenHeight = domElem.screenHeight;
        },
        () => {
        }
      );
    }
    function goLeft() {
      if (state.boundary.left) {
        if (+state.left.split("px")[0] > state.boundary.left) {
          state.left = +state.left.split("px")[0] - 10 + "px";
          requestAniFrame(() => {
            goLeft();
          });
        } else {
          state.left = `${state.boundary.left}px`;
        }
      } else {
        if (+state.left.split("px")[0] > 10) {
          state.left = +state.left.split("px")[0] - 10 + "px";
          requestAniFrame(() => {
            goLeft();
          });
        } else {
          state.left = "0px";
        }
      }
    }
    function goRight(rightLocation) {
      if (rightLocation - parseInt(state.left.split("px")[0]) > 10) {
        state.left = parseInt(state.left.split("px")[0]) + 10 + "px";
        requestAniFrame(() => {
          goRight(rightLocation);
        });
      } else {
        state.left = rightLocation + "px";
      }
    }
    function touchMove(e) {
      e.preventDefault();
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        state.nx = touch.clientX - state.position.x;
        state.ny = touch.clientY - state.position.y;
        state.xPum = state.startLeft + state.nx;
        state.yPum = state.startTop + state.ny;
        const rightLocation = state.screenWidth - state.elWidth - state.boundary.right;
        if (Math.abs(state.xPum + state.initLeft) > rightLocation) {
          state.xPum = rightLocation - state.initLeft;
        } else if (state.xPum + state.initLeft <= state.boundary.left) {
          state.xPum = state.boundary.left - state.initLeft;
        }
        if (state.yPum + state.initTop < state.boundary.top) {
          state.yPum = state.boundary.top - state.initTop;
        } else if (state.yPum + state.initTop > state.screenHeight - state.elHeight - state.boundary.bottom) {
          state.yPum = state.screenHeight - state.elHeight - state.boundary.bottom - state.initTop;
        }
        if (props.direction != "y") {
          state.left = state.xPum;
        }
        if (props.direction != "x") {
          state.top = state.yPum;
        }
      }
    }
    function touchEnd(e) {
      const touch = e.changedTouches[0];
      let currX = touch.clientX;
      const rightLocation = state.screenWidth - state.elWidth - state.boundary.right;
      if (currX > rightLocation) {
        currX = rightLocation;
      } else if (currX < state.boundary.left) {
        currX = state.boundary.left;
      } else {
        currX = currX < state.screenWidth / 2 ? state.boundary.left : rightLocation;
      }
      if (props.direction != "y" && props.attract) {
        if (currX < state.screenWidth / 2) {
          requestAniFrame(() => {
            goLeft();
          });
        } else {
          requestAniFrame(() => {
            goRight(rightLocation);
          });
        }
      }
      if (props.direction !== "x") {
        state.top = state.yPum;
      }
    }
    function touchStart(e) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const query = Taro.createSelectorQuery();
      let id = (_a = e == null ? void 0 : e.mpEvent) == null ? void 0 : _a.currentTarget.id;
      let offsetTop = (_b = e == null ? void 0 : e.currentTarget) == null ? void 0 : _b.offsetTop;
      let offsetLeft = (_c = e == null ? void 0 : e.currentTarget) == null ? void 0 : _c.offsetLeft;
      const touches = e.touches[0];
      const mobileTop = (_f = (_e = (_d = e.touches[0]) == null ? void 0 : _d.target) == null ? void 0 : _e.parentNode) == null ? void 0 : _f.style.top;
      const mobileLeft = (_i = (_h = (_g = e.touches[0]) == null ? void 0 : _g.target) == null ? void 0 : _h.parentNode) == null ? void 0 : _i.style.left;
      query.selectAll(".myDrag").boundingClientRect((rec) => {
        rec.forEach((element) => {
          if (id && id == element.id) {
            state.startTop = element.top - offsetTop;
            state.startLeft = element.left - offsetLeft;
          } else if (mobileTop) {
            state.startTop = Number(mobileTop.slice(0, -2));
            state.startLeft = Number(mobileLeft.slice(0, -2));
          }
        });
      }).exec();
      state.position.x = touches.clientX;
      state.position.y = touches.clientY;
    }
    onMounted(() => {
      setTimeout(() => {
        getInfo();
      }, 200);
      eventCenter.once(getCurrentInstance().router.onReady, () => {
      });
      state.boundary = props.boundary;
    });
    onActivated(() => {
      if (state.keepAlive) {
        state.keepAlive = false;
      }
    });
    onDeactivated(() => {
      var _a, _b, _c;
      state.keepAlive = true;
      (_a = myDrag.value) == null ? void 0 : _a.removeEventListener("touchstart", touchStart);
      (_b = myDrag.value) == null ? void 0 : _b.removeEventListener("touchmove", touchMove);
      (_c = myDrag.value) == null ? void 0 : _c.removeEventListener("touchend", touchEnd);
    });
    return {
      myDrag,
      touchStart,
      touchMove,
      touchEnd,
      state,
      refRandomId
    };
  }
});
const _hoisted_1 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    id: "myDrag" + _ctx.refRandomId,
    ref: "myDrag",
    class: "nut-taro-drag myDrag",
    catchtouchmove: "true",
    style: normalizeStyle({
      transform: ` translate(${_ctx.state.left + "px"}, ${_ctx.state.top + "px"})`,
      top: _ctx.state.top + "px",
      left: _ctx.state.left + "px"
    }),
    onTouchstart: _cache[0] || (_cache[0] = ($event) => _ctx.touchStart($event)),
    onTouchmove: _cache[1] || (_cache[1] = withModifiers(($event) => _ctx.touchMove($event), ["prevent"]))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 44, _hoisted_1);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
