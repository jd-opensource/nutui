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
import { ref, reactive, computed, onMounted, watch, nextTick, toRefs, openBlock, createElementBlock, createElementVNode, normalizeStyle, Fragment, renderList, toDisplayString, normalizeClass, renderSlot, withDirectives, vShow, createCommentVNode, withModifiers } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("elevator");
const _sfc_main = create({
  props: {
    height: {
      type: [Number, String],
      default: "200px"
    },
    acceptKey: {
      type: [String],
      default: "title"
    },
    indexList: {
      type: Array,
      default: () => []
    },
    isSticky: {
      type: [Boolean],
      default: false
    },
    spaceHeight: {
      type: [Number],
      default: 23
    },
    titleHeight: {
      type: [Number],
      default: 35
    }
  },
  emits: ["clickItem", "clickIndex", "change"],
  setup(props, { emit, expose }) {
    const listview = ref(null);
    const state = reactive({
      anchorIndex: 0,
      codeIndex: 0,
      listHeight: [],
      listGroup: [],
      touchState: {
        y1: 0,
        y2: 0
      },
      scrollStart: false,
      currentIndex: 0,
      currentData: {},
      currentKey: "",
      scrollY: 0,
      diff: -1,
      fixedTop: 0
    });
    const clientHeight = computed(() => {
      return listview.value.clientHeight;
    });
    const getData = (el, name) => {
      const prefix = "data-";
      return el.getAttribute(prefix + name);
    };
    const setListGroup = (el) => {
      nextTick(() => {
        if (!state.listGroup.includes(el) && el != null) {
          state.listGroup.push(el);
        }
      });
    };
    const calculateHeight = () => {
      let height = 0;
      state.listHeight.push(height);
      for (let i = 0; i < state.listGroup.length; i++) {
        let item = state.listGroup[i];
        height += Math.floor(item.clientHeight);
        state.listHeight.push(height);
      }
    };
    const scrollTo = (index) => {
      if (!index && index !== 0) {
        return;
      }
      if (index < 0) index = 0;
      if (index > state.listHeight.length - 2) index = state.listHeight.length - 2;
      state.codeIndex = index;
      listview.value.scrollTo(0, state.listHeight[index]);
    };
    const touchStart = (e) => {
      state.scrollStart = true;
      let index = getData(e.target, "index");
      let firstTouch = e.touches[0];
      state.touchState.y1 = firstTouch.pageY;
      state.anchorIndex = +index;
      state.codeIndex = +index;
      scrollTo(+index);
    };
    const touchMove = (e) => {
      let firstTouch = e.touches[0];
      state.touchState.y2 = firstTouch.pageY;
      let delta = (state.touchState.y2 - state.touchState.y1) / props.spaceHeight | 0;
      state.codeIndex = state.anchorIndex + delta;
      scrollTo(state.codeIndex);
    };
    const touchEnd = () => {
      state.scrollStart = false;
    };
    const handleClickItem = (key, item) => {
      emit("clickItem", key, item);
      state.currentData = item;
      state.currentKey = key;
    };
    const handleClickIndex = (key) => {
      emit("clickIndex", key);
    };
    const listViewScroll = (e) => {
      let target = e.target;
      let scrollTop = target.scrollTop;
      const listHeight = state.listHeight;
      state.scrollY = scrollTop;
      for (let i = 0; i < listHeight.length - 1; i++) {
        let height1 = listHeight[i];
        let height2 = listHeight[i + 1];
        if (state.scrollY >= height1 && state.scrollY < height2) {
          state.currentIndex = i;
          state.diff = height2 - state.scrollY;
          return;
        }
      }
      state.currentIndex = listHeight.length - 2;
    };
    onMounted(() => {
      if (listview.value) {
        listview.value.addEventListener("scroll", listViewScroll);
      }
    });
    expose({
      scrollTo
    });
    watch(
      () => state.listGroup.length,
      () => {
        state.listHeight = [];
        nextTick(calculateHeight);
      }
    );
    watch(
      () => state.diff,
      (newVal) => {
        const listHeight = state.listHeight;
        let fixedTop = newVal > 0 && newVal < props.titleHeight ? newVal - props.titleHeight : 0;
        if (state.scrollY + clientHeight.value === listHeight[listHeight.length - 1]) {
          if (fixedTop !== 0) fixedTop = 0;
        }
        if (state.fixedTop === fixedTop) return;
        state.fixedTop = fixedTop;
      }
    );
    watch(
      () => state.currentIndex,
      (newVal) => {
        emit("change", newVal);
      }
    );
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      clientHeight,
      setListGroup,
      listview,
      touchStart,
      touchMove,
      touchEnd,
      handleClickItem,
      handleClickIndex
    });
  }
});
const _hoisted_1 = { class: "nut-elevator" };
const _hoisted_2 = { class: "nut-elevator__list__item__code" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = { class: "nut-elevator__list__fixed" };
const _hoisted_6 = { class: "nut-elevator__list__fixed-title" };
const _hoisted_7 = { class: "nut-elevator__bars__inner" };
const _hoisted_8 = ["data-index", "onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d;
  return openBlock(), createElementBlock("view", _hoisted_1, [
    createElementVNode("view", {
      ref: "listview",
      class: "nut-elevator__list",
      style: normalizeStyle({ height: isNaN(+_ctx.height) ? _ctx.height : `${_ctx.height}px` })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.indexList, (item) => {
        return openBlock(), createElementBlock("view", {
          key: item[_ctx.acceptKey],
          ref_for: true,
          ref: _ctx.setListGroup,
          class: "nut-elevator__list__item"
        }, [
          createElementVNode("view", _hoisted_2, toDisplayString(item[_ctx.acceptKey]), 1),
          (openBlock(true), createElementBlock(Fragment, null, renderList(item.list, (subitem) => {
            return openBlock(), createElementBlock("view", {
              key: subitem["id"],
              class: normalizeClass(["nut-elevator__list__item__name", {
                "nut-elevator__list__item__name--highcolor": _ctx.currentData.id === subitem.id && _ctx.currentKey === item[_ctx.acceptKey]
              }]),
              onClick: ($event) => _ctx.handleClickItem(item[_ctx.acceptKey], subitem)
            }, [
              !_ctx.$slots.default ? (openBlock(), createElementBlock("span", {
                key: 0,
                innerHTML: subitem.name
              }, null, 8, _hoisted_4)) : renderSlot(_ctx.$slots, "default", {
                key: 1,
                item: subitem
              })
            ], 10, _hoisted_3);
          }), 128))
        ]);
      }), 128))
    ], 4),
    withDirectives(createElementVNode("view", _hoisted_5, [
      createElementVNode("view", _hoisted_6, toDisplayString((_b = (_a = _ctx.indexList) == null ? void 0 : _a[_ctx.currentIndex]) == null ? void 0 : _b[_ctx.acceptKey]), 1)
    ], 512), [
      [vShow, _ctx.scrollY > 0 && _ctx.isSticky]
    ]),
    _ctx.indexList.length ? withDirectives((openBlock(), createElementBlock("view", {
      key: 0,
      class: "nut-elevator__code--current"
    }, toDisplayString((_d = (_c = _ctx.indexList) == null ? void 0 : _c[_ctx.codeIndex]) == null ? void 0 : _d[_ctx.acceptKey]), 513)), [
      [vShow, _ctx.scrollStart]
    ]) : createCommentVNode("", true),
    createElementVNode("view", {
      class: "nut-elevator__bars",
      onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.touchStart && _ctx.touchStart(...args)),
      onTouchmove: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.touchMove && _ctx.touchMove(...args), ["stop", "prevent"])),
      onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.touchEnd && _ctx.touchEnd(...args))
    }, [
      createElementVNode("view", _hoisted_7, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.indexList, (item, index) => {
          return openBlock(), createElementBlock("view", {
            key: item[_ctx.acceptKey],
            class: normalizeClass(["nut-elevator__bars__inner__item", { active: item[_ctx.acceptKey] === _ctx.indexList[_ctx.currentIndex][_ctx.acceptKey] }]),
            "data-index": index,
            onClick: ($event) => _ctx.handleClickIndex(item[_ctx.acceptKey])
          }, toDisplayString(item[_ctx.acceptKey]), 11, _hoisted_8);
        }), 128))
      ])
    ], 32)
  ]);
}
const NutElevator = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutElevator as default
};
