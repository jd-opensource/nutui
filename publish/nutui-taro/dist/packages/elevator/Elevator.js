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
import { ref, reactive, computed, watch, toRefs, nextTick, resolveComponent, openBlock, createElementBlock, createVNode, normalizeStyle, withCtx, Fragment, renderList, normalizeClass, createElementVNode, toDisplayString, createTextVNode, renderSlot, withDirectives, vShow, createCommentVNode, withModifiers } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import Taro from "@tarojs/taro";
import { _ as _sfc_main$1 } from "../index.taro.vue_vue_type_script_setup_true_lang-JJ7hr71Y.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("elevator");
const _sfc_main = create({
  components: {
    NutScrollView: _sfc_main$1
  },
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
      default: () => {
        return [];
      }
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
    const spaceHeight = 23;
    const listview = ref();
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
      query: Taro.createSelectorQuery(),
      scrollTop: 0,
      currentData: {},
      currentKey: "",
      scrollY: 0
    });
    const clientHeight = computed(() => {
      return listview.value.clientHeight;
    });
    const fixedStyle = computed(() => {
      return {
        height: `${state.listHeight[state.listGroup.length - 1]}px`
      };
    });
    const getData = (el) => {
      if (!el.dataset.index) {
        return "0";
      }
      return el.dataset.index;
    };
    const setListGroup = (el) => {
      nextTick(() => {
        if (!state.listGroup.includes(el) && el != null) {
          state.listGroup.push(el);
        }
      });
    };
    const calculateHeight = () => {
      state.listHeight = [];
      let height = 0;
      state.listHeight.push(height);
      for (let i = 0; i < state.listGroup.length; i++) {
        state.query.selectAll(`.elevator__item__${i}`).boundingClientRect();
        state.query.exec((res) => {
          height += Math.floor(res[i][0].height);
          state.listHeight.push(height);
        });
      }
    };
    const scrollTo = (index) => {
      if (!index && index !== 0) {
        return;
      }
      if (index < 0) index = 0;
      if (index > state.listHeight.length - 2) index = state.listHeight.length - 2;
      state.codeIndex = index;
      state.scrollTop = state.listHeight[index];
    };
    const touchStart = (e) => {
      state.scrollStart = true;
      let index = getData(e.target);
      let firstTouch = e.touches[0];
      state.touchState.y1 = firstTouch.pageY;
      state.anchorIndex = +index;
      state.codeIndex = +index;
      scrollTo(+index);
    };
    const touchMove = (e) => {
      let firstTouch = e.touches[0];
      state.touchState.y2 = firstTouch.pageY;
      let delta = (state.touchState.y2 - state.touchState.y1) / spaceHeight | 0;
      state.codeIndex = state.anchorIndex + delta;
      scrollTo(state.currentIndex);
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
      state.scrollY = Math.floor(scrollTop);
      for (let i = 0; i < listHeight.length - 1; i++) {
        let height1 = listHeight[i];
        let height2 = listHeight[i + 1];
        if (state.scrollY >= height1 && state.scrollY < height2) {
          state.currentIndex = i;
          return;
        }
      }
    };
    expose({
      scrollTo
    });
    watch(
      () => state.listGroup.length,
      () => {
        Taro.nextTick(calculateHeight);
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
      fixedStyle,
      setListGroup,
      listview,
      touchStart,
      touchMove,
      touchEnd,
      handleClickItem,
      handleClickIndex,
      listViewScroll
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
  const _component_nut_scroll_view = resolveComponent("nut-scroll-view");
  return openBlock(), createElementBlock("view", _hoisted_1, [
    createVNode(_component_nut_scroll_view, {
      ref: "listview",
      class: "nut-elevator__list nut-elevator__list--mini",
      "scroll-top": _ctx.scrollTop,
      "scroll-y": true,
      "scroll-with-animation": true,
      "scroll-anchoring": true,
      style: normalizeStyle({ height: isNaN(+_ctx.height) ? _ctx.height : `${_ctx.height}px` }),
      onScroll: _ctx.listViewScroll
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.indexList, (item, index) => {
          return openBlock(), createElementBlock("view", {
            key: item[_ctx.acceptKey],
            ref_for: true,
            ref: _ctx.setListGroup,
            class: normalizeClass(["nut-elevator__list__item", `elevator__item__${index}`])
          }, [
            createElementVNode("view", _hoisted_2, toDisplayString(item[_ctx.acceptKey]), 1),
            _cache[3] || (_cache[3] = createTextVNode()),
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
          ], 2);
        }), 128))
      ]),
      _: 3
    }, 8, ["scroll-top", "style", "onScroll"]),
    _cache[4] || (_cache[4] = createTextVNode()),
    withDirectives(createElementVNode("view", _hoisted_5, [
      createElementVNode("view", _hoisted_6, toDisplayString((_b = (_a = _ctx.indexList) == null ? void 0 : _a[_ctx.currentIndex]) == null ? void 0 : _b[_ctx.acceptKey]), 1)
    ], 512), [
      [vShow, _ctx.scrollY > 2 && _ctx.isSticky]
    ]),
    _cache[5] || (_cache[5] = createTextVNode()),
    _ctx.indexList.length > 0 ? withDirectives((openBlock(), createElementBlock("view", {
      key: 0,
      class: "nut-elevator__code--current"
    }, toDisplayString((_d = (_c = _ctx.indexList) == null ? void 0 : _c[_ctx.codeIndex]) == null ? void 0 : _d[_ctx.acceptKey]), 513)), [
      [vShow, _ctx.scrollStart]
    ]) : createCommentVNode("", true),
    _cache[6] || (_cache[6] = createTextVNode()),
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
