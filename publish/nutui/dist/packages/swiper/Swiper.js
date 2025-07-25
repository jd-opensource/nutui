import { ref, reactive, computed, provide, onDeactivated, onBeforeUnmount, watch, nextTick, onMounted, onUnmounted, openBlock, createElementBlock, createElementVNode, normalizeClass, normalizeStyle, renderSlot, Fragment, renderList, createCommentVNode } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { e as clamp } from "../util-D1pvnUYu.js";
import { u as useTouch } from "../index-I8tfW3Kf.js";
import { r as requestAniFrame } from "../raf-c01wDYCo.js";
import { S as SWIPER_KEY } from "../types-DUkJysbi.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create, componentName } = createComponent("swiper");
const _sfc_main = create({
  props: {
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    direction: {
      type: String,
      default: "horizontal"
      // horizontal and vertical
    },
    paginationVisible: {
      type: Boolean,
      default: false
    },
    paginationColor: {
      type: String,
      default: "#fff"
    },
    loop: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 500
    },
    autoPlay: {
      type: [Number, String],
      default: 0
    },
    initPage: {
      type: [Number, String],
      default: 0
    },
    touchable: {
      type: Boolean,
      default: true
    },
    isPreventDefault: {
      type: Boolean,
      default: true
    },
    isStopPropagation: {
      type: Boolean,
      default: true
    },
    paginationUnselectedColor: {
      type: String,
      default: "#ddd"
    }
  },
  emits: ["change"],
  setup(props, { emit, slots, expose }) {
    const container = ref();
    const state = reactive({
      active: 0,
      num: 0,
      rect: null,
      width: 0,
      height: 0,
      moving: false,
      offset: 0,
      touchTime: 0,
      autoplayTimer: null,
      children: [],
      childrenVNode: [],
      style: {}
    });
    const touch = useTouch();
    const isVertical = computed(() => props.direction === "vertical");
    const classesInner = computed(() => {
      const prefixCls = componentName;
      return {
        [`${prefixCls}-inner`]: true,
        [`${prefixCls}-vertical`]: isVertical.value
      };
    });
    const classesPagination = computed(() => {
      const prefixCls = componentName;
      return {
        [`${prefixCls}-pagination`]: true,
        [`${prefixCls}-pagination-vertical`]: isVertical.value
      };
    });
    const delTa = computed(() => {
      return isVertical.value ? touch.deltaY.value : touch.deltaX.value;
    });
    const isCorrectDirection = computed(() => {
      return touch.direction.value === props.direction;
    });
    const childCount = computed(() => state.children.length);
    const size = computed(() => state[isVertical.value ? "height" : "width"]);
    const trackSize = computed(() => childCount.value * size.value);
    const minOffset = computed(() => {
      if (state.rect) {
        const base = isVertical.value ? state.rect.height : state.rect.width;
        return base - size.value * childCount.value;
      }
      return 0;
    });
    const activePagination = computed(() => (state.active + childCount.value) % childCount.value);
    const getStyle = () => {
      let offset = 0;
      offset = state.offset;
      state.style = {
        transitionDuration: `${state.moving ? 0 : props.duration}ms`,
        transform: `translate${isVertical.value ? "Y" : "X"}(${offset}px)`,
        [isVertical.value ? "height" : "width"]: `${size.value * childCount.value}px`,
        [isVertical.value ? "width" : "height"]: `${isVertical.value ? state.width : state.height}px`
      };
    };
    const relation = (child) => {
      var _a;
      let children = [];
      const childrenVNodeLen = state.childrenVNode.length;
      let slot = (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots);
      slot = slot.filter((item) => item.children && Array.isArray(item.children));
      slot.forEach((item) => {
        children = children.concat(item.children);
      });
      if (!childrenVNodeLen) {
        state.childrenVNode = children.slice();
        child.proxy && state.children.push(child.proxy);
      } else {
        if (childrenVNodeLen > children.length) {
          state.children = state.children.filter((item) => child.proxy !== item);
        } else if (childrenVNodeLen < children.length) {
          for (let i = 0; i < childrenVNodeLen; i++) {
            if (children[i].key !== state.childrenVNode[i].key) {
              child.proxy && state.children.splice(i, 0, child.proxy);
              child.vnode && state.childrenVNode.splice(i, 0, child.vnode);
              break;
            }
          }
          if (childrenVNodeLen !== children.length) {
            child.proxy && state.children.push(child.proxy);
            child.vnode && state.childrenVNode.push(child.vnode);
          }
        } else {
          state.childrenVNode = children.slice();
          child.proxy && state.children.push(child.proxy);
        }
      }
    };
    const getOffset = (active, offset = 0) => {
      let currentPosition = active * size.value;
      if (!props.loop) {
        currentPosition = Math.min(currentPosition, -minOffset.value);
      }
      let targetOffset = offset - currentPosition;
      if (!props.loop) {
        targetOffset = clamp(targetOffset, minOffset.value, 0);
      }
      return targetOffset;
    };
    const getActive = (pace) => {
      const { active } = state;
      if (pace) {
        if (props.loop) {
          return clamp(active + pace, -1, childCount.value);
        }
        return clamp(active + pace, 0, childCount.value - 1);
      }
      return active;
    };
    const move = ({ pace = 0, offset = 0, isEmit = false }) => {
      if (childCount.value <= 1) return;
      const { active } = state;
      const targetActive = getActive(pace);
      const targetOffset = getOffset(targetActive, offset);
      if (props.loop) {
        if (state.children[0] && targetOffset !== minOffset.value) {
          const rightBound = targetOffset < minOffset.value;
          state.children[0].setOffset(rightBound ? trackSize.value : 0);
        }
        if (state.children[childCount.value - 1] && targetOffset !== 0) {
          const leftBound = targetOffset > 0;
          state.children[childCount.value - 1].setOffset(leftBound ? -trackSize.value : 0);
        }
      }
      state.active = targetActive;
      state.offset = targetOffset;
      if (isEmit && active !== state.active) {
        emit("change", activePagination.value);
      }
      getStyle();
    };
    const resettPosition = () => {
      state.moving = true;
      if (state.active <= -1) {
        move({ pace: childCount.value });
      }
      if (state.active >= childCount.value) {
        move({ pace: -childCount.value });
      }
    };
    const stopAutoPlay = () => {
      if (state.autoplayTimer) {
        clearTimeout(state.autoplayTimer);
      }
    };
    const jump = (pace) => {
      resettPosition();
      touch.reset();
      requestAniFrame(() => {
        requestAniFrame(() => {
          state.moving = false;
          move({
            pace,
            isEmit: true
          });
        });
      });
    };
    const prev = () => {
      jump(-1);
    };
    const next = () => {
      jump(1);
    };
    const to = (index) => {
      resettPosition();
      touch.reset();
      requestAniFrame(() => {
        state.moving = false;
        let targetIndex;
        if (props.loop && childCount.value === index) {
          targetIndex = state.active === 0 ? 0 : index;
        } else {
          targetIndex = index % childCount.value;
        }
        move({
          pace: targetIndex - state.active,
          isEmit: true
        });
      });
    };
    const autoplay = () => {
      if (+props.autoPlay <= 0 || childCount.value <= 1) return;
      stopAutoPlay();
      state.autoplayTimer = setTimeout(() => {
        next();
        autoplay();
      }, Number(props.autoPlay));
    };
    const init = (active = +props.initPage) => {
      stopAutoPlay();
      state.rect = container.value.getBoundingClientRect();
      active = Math.min(childCount.value - 1, active);
      state.width = props.width ? +props.width : state.rect.width;
      state.height = props.height ? +props.height : state.rect.height;
      state.active = active;
      state.offset = getOffset(state.active);
      state.moving = true;
      getStyle();
      autoplay();
    };
    const onTouchStart = (e) => {
      if (props.isPreventDefault) e.preventDefault();
      if (props.isStopPropagation) e.stopPropagation();
      if (!props.touchable) return;
      touch.start(e);
      state.touchTime = Date.now();
      stopAutoPlay();
      resettPosition();
    };
    const onTouchMove = (e) => {
      if (props.touchable && state.moving) {
        touch.move(e);
        if (isCorrectDirection.value) {
          move({
            offset: delTa.value
          });
        }
      }
    };
    const onTouchEnd = () => {
      if (!props.touchable || !state.moving) return;
      const speed = delTa.value / (Date.now() - state.touchTime);
      const isShouldMove = Math.abs(speed) > 0.3 || Math.abs(delTa.value) > +(size.value / 2).toFixed(2);
      if (isShouldMove && isCorrectDirection.value) {
        let pace = 0;
        const offset = isVertical.value ? touch.offsetY.value : touch.offsetX.value;
        if (props.loop) {
          pace = offset > 0 ? delTa.value > 0 ? -1 : 1 : 0;
        } else {
          pace = -Math[delTa.value > 0 ? "ceil" : "floor"](delTa.value / size.value);
        }
        move({
          pace,
          isEmit: true
        });
      } else if (delTa.value) {
        move({ pace: 0 });
      }
      state.moving = false;
      getStyle();
      autoplay();
    };
    provide(SWIPER_KEY, {
      props,
      size,
      relation
    });
    expose({
      prev,
      next,
      to
    });
    onDeactivated(() => {
      stopAutoPlay();
    });
    onBeforeUnmount(() => {
      stopAutoPlay();
    });
    watch(
      () => props.initPage,
      (val) => {
        nextTick(() => {
          init(Number(val));
        });
      }
    );
    watch(
      () => props.height,
      () => {
        nextTick(() => {
          init();
        });
      }
    );
    watch(
      () => state.children.length,
      () => {
        nextTick(() => {
          init();
        });
      }
    );
    watch(
      () => props.autoPlay,
      (val) => {
        +val > 0 ? autoplay() : stopAutoPlay();
      }
    );
    const width = ref(window.innerWidth);
    const height = ref(window.innerHeight);
    const updateDimensions = () => {
      width.value = window.innerWidth;
      height.value = window.innerHeight;
    };
    watch([width, height], () => {
      nextTick(() => {
        init();
      });
    });
    onMounted(() => {
      window.addEventListener("resize", updateDimensions);
      updateDimensions();
    });
    onUnmounted(() => {
      window.removeEventListener("resize", updateDimensions);
    });
    return {
      state,
      classesInner,
      classesPagination,
      container,
      activePagination,
      onTouchStart,
      onTouchMove,
      onTouchEnd
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    ref: "container",
    class: "nut-swiper",
    onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
    onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
    onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
    onTouchcancel: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
  }, [
    createElementVNode("view", {
      class: normalizeClass(_ctx.classesInner),
      style: normalizeStyle(_ctx.state.style)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 6),
    renderSlot(_ctx.$slots, "page"),
    _ctx.paginationVisible && !_ctx.$slots.page ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: normalizeClass(_ctx.classesPagination)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.state.children.length, (item, index) => {
        return openBlock(), createElementBlock("i", {
          key: index,
          style: normalizeStyle({
            backgroundColor: _ctx.activePagination === index ? _ctx.paginationColor : _ctx.paginationUnselectedColor
          }),
          class: normalizeClass({ active: _ctx.activePagination === index })
        }, null, 6);
      }), 128))
    ], 2)) : createCommentVNode("", true)
  ], 544);
}
const NutSwiper = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutSwiper as default
};
