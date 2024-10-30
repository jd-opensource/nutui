(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@nutui/icons-vue-taro"), require("@tarojs/taro")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@nutui/icons-vue-taro", "@tarojs/taro"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.nutui = {}, global.Vue, global.iconsVueTaro, global.Taro));
})(this, function(exports2, vue, iconsVueTaro, Taro) {
  "use strict";var __defProp = Object.defineProperty;
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
var __restKey = (key) => typeof key === "symbol" ? key : key + "";
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
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

  class BaseLang {
  }
  let Lang$1 = class Lang extends BaseLang {
    constructor() {
      super(...arguments);
      __publicField(this, "save", "保存");
      __publicField(this, "confirm", "确认");
      __publicField(this, "cancel", "取消");
      __publicField(this, "done", "完成");
      __publicField(this, "noData", "暂无数据");
      __publicField(this, "placeholder", "请输入");
      __publicField(this, "select", "请选择");
      __publicField(this, "video", {
        errorTip: "视频加载失败",
        clickRetry: "点击重试"
      });
      __publicField(this, "fixednav", {
        activeText: "收起导航",
        unActiveText: "快速导航"
      });
      __publicField(this, "pagination", {
        prev: "上一页",
        next: "下一页"
      });
      __publicField(this, "calendaritem", {
        weekdays: ["日", "一", "二", "三", "四", "五", "六"],
        end: "结束",
        start: "开始",
        title: "日期选择",
        monthTitle: (year, month) => `${year}年${month}月`,
        today: "今天"
      });
      __publicField(this, "calendarcard", {
        weekdays: ["日", "一", "二", "三", "四", "五", "六"],
        end: "结束",
        start: "开始",
        title: "日期选择",
        monthTitle: (year, month) => `${year}年${month}月`,
        today: "今天"
      });
      __publicField(this, "shortpassword", {
        title: "请输入密码",
        desc: "您使用了虚拟资产，请进行验证",
        tips: "忘记密码"
      });
      __publicField(this, "uploader", {
        ready: "准备完成",
        readyUpload: "准备上传",
        waitingUpload: "等待上传",
        uploading: "上传中",
        success: "上传成功",
        error: "上传失败"
      });
      __publicField(this, "countdown", {
        day: "天",
        hour: "时",
        minute: "分",
        second: "秒"
      });
      __publicField(this, "address", {
        selectRegion: "请选择所在地区",
        deliveryTo: "配送至",
        chooseAnotherAddress: "选择其他地址"
      });
      __publicField(this, "signature", {
        reSign: "重签",
        unSupportTpl: "对不起，当前浏览器不支持Canvas，无法使用本控件！"
      });
      __publicField(this, "ecard", {
        chooseText: "请选择电子卡面值",
        otherValueText: "其他面值",
        placeholder: "请输入1-5000整数"
      });
      __publicField(this, "timeselect", {
        pickupTime: "取件时间"
      });
      __publicField(this, "sku", {
        buyNow: "立即购买",
        buyNumber: "购买数量",
        addToCart: "加入购物车"
      });
      __publicField(this, "skuheader", {
        skuId: "商品编号"
      });
      __publicField(this, "addresslist", {
        addAddress: "新建地址",
        default: "默认"
      });
      __publicField(this, "comment", {
        complaintsText: "我要投诉",
        additionalReview: (day) => `购买${day}天后追评`,
        additionalImages: (length) => `${length}张追评图片`
      });
      __publicField(this, "infiniteloading", {
        loading: "加载中...",
        pullTxt: "松开刷新",
        loadMoreTxt: "哎呀，这里是底部了啦"
      });
      __publicField(this, "datepicker", {
        year: "年",
        month: "月",
        day: "日",
        hour: "时",
        min: "分",
        seconds: "秒"
      });
      __publicField(this, "audiooperate", {
        back: "倒退",
        start: "开始",
        pause: "暂停",
        forward: "快进",
        mute: "静音"
      });
      __publicField(this, "pullrefresh", {
        pulling: "下拉刷新",
        loosing: "释放刷新",
        loading: "加载中...",
        complete: "刷新成功"
      });
    }
  };
  class Lang extends BaseLang {
    constructor() {
      super(...arguments);
      __publicField(this, "save", "Save");
      __publicField(this, "confirm", "Confirm");
      __publicField(this, "cancel", "Cancel");
      __publicField(this, "done", "Done");
      __publicField(this, "noData", "No Data");
      __publicField(this, "placeholder", "Placeholder");
      __publicField(this, "select", "Select");
      __publicField(this, "video", {
        errorTip: "Error Tip",
        clickRetry: "Click Retry"
      });
      __publicField(this, "fixednav", {
        activeText: "Close Nav",
        unActiveText: "Open Nav"
      });
      __publicField(this, "pagination", {
        prev: "Previous",
        next: "Next"
      });
      __publicField(this, "calendaritem", {
        weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        end: "End",
        start: "Start",
        title: "Calendar",
        monthTitle: (year, month) => `${year}/${month}`,
        today: "Today"
      });
      __publicField(this, "calendarcard", {
        weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        end: "End",
        start: "Start",
        title: "Calendar",
        monthTitle: (year, month) => `${year}/${month}`,
        today: "Today"
      });
      __publicField(this, "shortpassword", {
        title: "Please input a password",
        desc: "Verify",
        tips: "Forget password"
      });
      __publicField(this, "uploader", {
        ready: "Ready",
        readyUpload: "Ready to upload",
        waitingUpload: "Waiting for upload",
        uploading: "Uploading",
        success: "Upload successful",
        error: "Upload failed"
      });
      __publicField(this, "countdown", {
        day: " Day ",
        hour: " Hour ",
        minute: " Minute ",
        second: " Second "
      });
      __publicField(this, "address", {
        selectRegion: "Select Region",
        deliveryTo: "Delivery To",
        chooseAnotherAddress: "Choose Another Address"
      });
      __publicField(this, "signature", {
        reSign: "Re Sign",
        unSupportTpl: `Sorry, the current browser doesn't support canvas, so we can't use this control!`
      });
      __publicField(this, "ecard", {
        chooseText: "Select",
        otherValueText: "Other Value",
        placeholder: "Placeholder"
      });
      __publicField(this, "timeselect", {
        pickupTime: "Pickup Time"
      });
      __publicField(this, "sku", {
        buyNow: "Buy Now",
        buyNumber: "Buy Number",
        addToCart: "Add to Cart"
      });
      __publicField(this, "skuheader", {
        skuId: "Sku Number"
      });
      __publicField(this, "addresslist", {
        addAddress: "Add New Address",
        default: "default"
      });
      __publicField(this, "comment", {
        complaintsText: "I have a complaint",
        additionalReview: (day) => `Review after ${day} days of purchase`,
        additionalImages: (length) => `There are ${length} follow-up comments`
      });
      __publicField(this, "infiniteloading", {
        loading: "Loading...",
        pullTxt: "Loose to refresh",
        loadMoreTxt: "Oops, this is the bottom"
      });
      __publicField(this, "datepicker", {
        year: "Year",
        month: "Month",
        day: "Day",
        hour: "Hour",
        min: "Minute",
        seconds: "Second"
      });
      __publicField(this, "audiooperate", {
        back: "Back",
        start: "Start",
        pause: "Pause",
        forward: "Forward",
        mute: "Mute"
      });
      __publicField(this, "pullrefresh", {
        pulling: "Pull to refresh...",
        loosing: "Loose to refresh...",
        loading: "Loading...",
        complete: "Refresh successfully"
      });
    }
  }
  const funInterceptor = (interceptor, {
    args = [],
    done,
    canceled
  }) => {
    if (interceptor) {
      const returnVal = interceptor(...args);
      if (isPromise(returnVal)) {
        returnVal.then((value) => {
          if (value) {
            done(value);
          } else if (canceled) {
            canceled();
          }
        }).catch(() => {
        });
      } else if (returnVal) {
        done();
      } else if (canceled) {
        canceled();
      }
    } else {
      done();
    }
  };
  const TypeOfFun = (value) => {
    if (null === value) {
      return "null";
    }
    const type = typeof value;
    if ("undefined" === type || "string" === type) {
      return type;
    }
    const typeString = toString.call(value);
    switch (typeString) {
      case "[object Array]":
        return "array";
      case "[object Date]":
        return "date";
      case "[object Boolean]":
        return "boolean";
      case "[object Number]":
        return "number";
      case "[object Function]":
        return "function";
      case "[object RegExp]":
        return "regexp";
      case "[object Object]":
        if (void 0 !== value.nodeType) {
          if (3 == value.nodeType) {
            return /\S/.test(value.nodeValue) ? "textnode" : "whitespace";
          } else {
            return "element";
          }
        } else {
          return "object";
        }
      default:
        return "unknow";
    }
  };
  const isDate$1 = (val) => val instanceof Date;
  const isFunction = (val) => typeof val === "function";
  const isObject = (val) => val !== null && typeof val === "object";
  const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  };
  const getPropByPath = (obj, keyPath) => {
    try {
      return keyPath.split(".").reduce((prev, curr) => prev[curr], obj);
    } catch (error) {
      return "";
    }
  };
  const floatData = (format, dataOp, mapOps) => {
    const mergeFormat = Object.assign({}, format);
    const mergeMapOps = Object.assign({}, mapOps);
    if (Object.keys(dataOp).length > 0) {
      Object.keys(mergeFormat).forEach((keys) => {
        if (Object.prototype.hasOwnProperty.call(mergeMapOps, keys)) {
          const tof = TypeOfFun(mergeMapOps[keys]);
          if (tof == "function") {
            mergeFormat[keys] = mergeMapOps[keys](dataOp);
          }
          if (tof == "string") {
            mergeFormat[keys] = dataOp[mergeMapOps[keys]];
          }
        } else {
          if (dataOp[keys]) mergeFormat[keys] = dataOp[keys];
        }
      });
      return mergeFormat;
    }
    return format;
  };
  const deepMerge = (target, newObj) => {
    Object.keys(newObj).forEach((key) => {
      const targetValue = target[key];
      const newObjValue = newObj[key];
      if (isObject(targetValue) && isObject(newObjValue)) {
        deepMerge(targetValue, newObjValue);
      } else {
        target[key] = newObjValue;
      }
    });
    return target;
  };
  function myFixed(num, digit = 2) {
    if (Object.is(parseFloat(num), NaN)) {
      return console.log(`传入的值：${num}不是一个数字`);
    }
    num = parseFloat(num);
    return (Math.round((num + Number.EPSILON) * Math.pow(10, digit)) / Math.pow(10, digit)).toFixed(digit);
  }
  function preventDefault(event, isStopPropagation) {
    if (typeof event.cancelable !== "boolean" || event.cancelable) {
      event.preventDefault();
    }
    if (isStopPropagation) {
      event.stopPropagation();
    }
  }
  const padZero = (num, length = 2) => {
    num += "";
    while (num.length < length) {
      num = "0" + num;
    }
    return num.toString();
  };
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
  const langs = vue.reactive({
    "zh-CN": new Lang$1(),
    "en-US": new Lang()
  });
  class Locale {
    static languages() {
      return langs[this.currentLang.value];
    }
    static use(lang, newLanguages) {
      if (newLanguages) {
        langs[lang] = new newLanguages();
      }
      this.currentLang.value = lang;
    }
    static merge(lang, newLanguages) {
      if (newLanguages) {
        if (langs[lang]) {
          deepMerge(langs[lang], newLanguages);
        } else {
          this.use(lang, newLanguages);
        }
      }
    }
  }
  __publicField(Locale, "currentLang", vue.ref("zh-CN"));
  const _hoisted_1$1j = ["type", "formType"];
  const _hoisted_2$11 = { class: "nut-button__wrap" };
  const _sfc_main$1L = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutButton"
  }), {
    __name: "button.taro",
    props: {
      color: { default: "" },
      shape: { default: "round" },
      plain: { type: Boolean, default: false },
      loading: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      type: { default: "default" },
      size: { default: "normal" },
      block: { type: Boolean, default: false },
      formType: { default: "button" }
    },
    emits: ["click"],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const handleClick = (event) => {
        if (!props.loading && !props.disabled) {
          emit("click", event);
        }
      };
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-button";
        return {
          [prefixCls2]: true,
          [`${prefixCls2}--${props.type}`]: props.type,
          [`${prefixCls2}--${props.size}`]: props.size,
          [`${prefixCls2}--${props.shape}`]: props.shape,
          [`${prefixCls2}--plain`]: props.plain,
          [`${prefixCls2}--block`]: props.block,
          [`${prefixCls2}--disabled`]: props.disabled,
          [`${prefixCls2}--loading`]: props.loading
        };
      });
      const getStyle = vue.computed(() => {
        let style = {};
        if (props.color) {
          style = {
            color: props.plain ? props.color : "#fff",
            background: props.plain ? "#fff" : `border-box ${props.color}`
          };
          if (props.color.includes("gradient")) {
            style.borderColor = "transparent";
          } else {
            style.borderColor = props.color;
          }
        }
        return style;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("button", {
          class: vue.normalizeClass(classes.value),
          style: vue.normalizeStyle(getStyle.value),
          type: vue.unref(Taro).getEnv() === vue.unref(Taro).ENV_TYPE.WEB ? _ctx.formType : void 0,
          formType: _ctx.formType === "button" ? void 0 : _ctx.formType,
          onClick: handleClick
        }, [
          vue.createElementVNode("view", _hoisted_2$11, [
            _ctx.loading ? (vue.openBlock(), vue.createBlock(vue.unref(iconsVueTaro.Loading), {
              key: 0,
              class: "nut-icon-loading"
            })) : vue.createCommentVNode("", true),
            _cache[0] || (_cache[0] = vue.createTextVNode()),
            _ctx.$slots.icon && !_ctx.loading ? vue.renderSlot(_ctx.$slots, "icon", { key: 1 }) : vue.createCommentVNode("", true),
            _cache[1] || (_cache[1] = vue.createTextVNode()),
            _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: vue.normalizeClass({ "nut-button__text": _ctx.$slots.icon || _ctx.loading })
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 2)) : vue.createCommentVNode("", true)
          ])
        ], 14, _hoisted_1$1j);
      };
    }
  }));
  const useChildren = (key) => {
    const publicChildren = vue.reactive([]);
    const internalChildren = vue.reactive([]);
    const linkChildren = (value) => {
      const link = (child) => {
        if (child.proxy) {
          internalChildren.push(child);
          publicChildren.push(child.proxy);
        }
      };
      const unlink = (child) => {
        if (child.proxy) {
          const internalIndex = internalChildren.indexOf(child);
          if (internalIndex > -1) {
            internalChildren.splice(internalIndex, 1);
          }
          const publicIndex = publicChildren.indexOf(child.proxy);
          if (internalIndex > -1) {
            publicChildren.splice(publicIndex, 1);
          }
        }
      };
      vue.provide(key, __spreadValues({
        unlink,
        link,
        children: publicChildren,
        internalChildren
      }, value));
    };
    return {
      children: publicChildren,
      linkChildren
    };
  };
  const useParent = (key) => {
    const parent = vue.inject(key, null);
    if (parent) {
      const instance = vue.getCurrentInstance();
      const { link, unlink, internalChildren } = parent;
      link(instance);
      vue.onUnmounted(() => {
        unlink(instance);
      });
      const index = vue.computed(() => internalChildren.indexOf(instance));
      return { parent, index };
    }
    return {
      parent,
      index: vue.computed(() => -1)
    };
  };
  const withInstall = (comp) => {
    const _comp = comp;
    _comp.install = (vue2) => {
      if (_comp.name) {
        vue2.component(_comp.name, _comp);
      }
    };
    return _comp;
  };
  const pxCheck = (value) => {
    if (value !== void 0) {
      return isNaN(Number(value)) ? String(value) : `${value}px`;
    }
  };
  function useRouter() {
    const proxy = vue.getCurrentInstance().proxy;
    return proxy.$router || null;
  }
  withInstall(_sfc_main$1L);
  const _hoisted_1$1i = {
    key: 0,
    class: "nut-cell__icon"
  };
  const _hoisted_2$10 = {
    key: 1,
    class: "nut-cell__title"
  };
  const _hoisted_3$P = { class: "title" };
  const _hoisted_4$G = { class: "nut-cell__title-desc" };
  const _sfc_main$1K = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutCell"
  }), {
    __name: "cell.taro",
    props: {
      title: { default: "" },
      subTitle: { default: "" },
      desc: { default: "" },
      descTextAlign: { default: "right" },
      isLink: { type: Boolean, default: false },
      roundRadius: { default: "" },
      center: { type: Boolean, default: false },
      size: { default: "normal" }
    },
    emits: ["click"],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-cell";
        return {
          [prefixCls2]: true,
          [`${prefixCls2}--clickable`]: props.isLink,
          [`${prefixCls2}--center`]: props.center,
          [`${prefixCls2}--large`]: props.size === "large"
        };
      });
      const baseStyle = vue.computed(() => {
        return {
          borderRadius: pxCheck(props.roundRadius)
        };
      });
      const descStyle = vue.computed(() => {
        return {
          textAlign: props.descTextAlign
        };
      });
      const handleClick = (event) => {
        emit("click", event);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(classes.value),
          style: vue.normalizeStyle(baseStyle.value),
          onClick: handleClick
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            _ctx.$slots.icon ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$1i, [
              vue.renderSlot(_ctx.$slots, "icon")
            ])) : vue.createCommentVNode("", true),
            _cache[1] || (_cache[1] = vue.createTextVNode()),
            _ctx.title || _ctx.subTitle || _ctx.$slots.title ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$10, [
              _ctx.subTitle ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                vue.renderSlot(_ctx.$slots, "title", {}, () => [
                  vue.createElementVNode("view", _hoisted_3$P, vue.toDisplayString(_ctx.title), 1)
                ]),
                _cache[0] || (_cache[0] = vue.createTextVNode()),
                vue.createElementVNode("view", _hoisted_4$G, vue.toDisplayString(_ctx.subTitle), 1)
              ], 64)) : vue.renderSlot(_ctx.$slots, "title", { key: 1 }, () => [
                vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
              ])
            ])) : vue.createCommentVNode("", true),
            _cache[2] || (_cache[2] = vue.createTextVNode()),
            _ctx.desc || _ctx.$slots.desc ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: vue.normalizeClass(["nut-cell__value", { "nut-cell__value--alone": !_ctx.title && !_ctx.subTitle && !_ctx.$slots.title }]),
              style: vue.normalizeStyle(descStyle.value)
            }, [
              vue.renderSlot(_ctx.$slots, "desc", {}, () => [
                vue.createTextVNode(vue.toDisplayString(_ctx.desc), 1)
              ])
            ], 6)) : vue.createCommentVNode("", true),
            _cache[3] || (_cache[3] = vue.createTextVNode()),
            vue.renderSlot(_ctx.$slots, "link", {}, () => [
              _ctx.isLink ? (vue.openBlock(), vue.createBlock(vue.unref(iconsVueTaro.Right), {
                key: 0,
                class: "nut-cell__link"
              })) : vue.createCommentVNode("", true)
            ])
          ])
        ], 6);
      };
    }
  }));
  withInstall(_sfc_main$1K);
  const _hoisted_1$1h = { class: "nut-cell-group" };
  const _hoisted_2$$ = {
    key: 1,
    class: "nut-cell-group__title"
  };
  const _hoisted_3$O = {
    key: 3,
    class: "nut-cell-group__desc"
  };
  const _hoisted_4$F = { class: "nut-cell-group__wrap" };
  const _sfc_main$1J = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutCellGroup"
  }), {
    __name: "cell-group.taro",
    props: {
      title: { default: "" },
      desc: { default: "" }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$1h, [
          _ctx.$slots.title ? vue.renderSlot(_ctx.$slots, "title", { key: 0 }) : _ctx.title ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$$, vue.toDisplayString(_ctx.title), 1)) : vue.createCommentVNode("", true),
          _cache[0] || (_cache[0] = vue.createTextVNode()),
          _ctx.$slots.desc ? vue.renderSlot(_ctx.$slots, "desc", { key: 2 }) : _ctx.desc ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$O, vue.toDisplayString(_ctx.desc), 1)) : vue.createCommentVNode("", true),
          _cache[1] || (_cache[1] = vue.createTextVNode()),
          vue.createElementVNode("view", _hoisted_4$F, [
            vue.renderSlot(_ctx.$slots, "default")
          ])
        ]);
      };
    }
  }));
  withInstall(_sfc_main$1J);
  const _hoisted_1$1g = ["catch-move"];
  const _sfc_main$1I = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutOverlay"
  }), {
    __name: "overlay.taro",
    props: {
      visible: { type: Boolean, default: false },
      zIndex: { default: 2e3 },
      duration: { default: 0.3 },
      lockScroll: { type: Boolean, default: true },
      overlayClass: { default: "" },
      overlayStyle: {},
      closeOnClickOverlay: { type: Boolean, default: true }
    },
    emits: ["click", "update:visible"],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-overlay";
        return {
          [prefixCls2]: true,
          [props.overlayClass]: true
        };
      });
      const style = vue.computed(() => {
        return __spreadValues({
          transitionDuration: `${props.duration}s`,
          zIndex: props.zIndex
        }, props.overlayStyle);
      });
      const onClick = (e) => {
        emit("click", e);
        if (props.closeOnClickOverlay) {
          emit("update:visible", false);
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.Transition, { name: "overlay-fade" }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("view", {
              class: vue.normalizeClass(classes.value),
              style: vue.normalizeStyle(style.value),
              "catch-move": _ctx.lockScroll,
              onClick
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 14, _hoisted_1$1g), [
              [vue.vShow, _ctx.visible]
            ])
          ]),
          _: 3
        });
      };
    }
  }));
  withInstall(_sfc_main$1I);
  const popupProps = {
    visible: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: 2e3
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: "center"
    },
    transition: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    popClass: {
      type: String,
      default: ""
    },
    closeable: {
      type: Boolean,
      default: false
    },
    closeIconPosition: {
      type: String,
      default: "top-right"
    },
    destroyOnClose: {
      type: Boolean,
      default: true
    },
    teleport: {
      type: [String, Element],
      default: "body"
    },
    overlay: {
      type: Boolean,
      default: true
    },
    round: {
      type: Boolean,
      default: false
    },
    teleportDisable: {
      type: Boolean,
      default: false
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: false
    },
    overlayClass: {
      type: String,
      default: ""
    },
    overlayStyle: {
      type: Object,
      default: () => ({})
    }
  };
  const camelize = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());
  function createComponent(name) {
    const componentName2 = "nut-" + name;
    return {
      componentName: componentName2,
      create: function(_component) {
        _component.name = "Nut" + camelize("-" + name);
        _component.install = (vue2) => {
          vue2.component(_component.name, _component);
        };
        return vue.defineComponent(_component);
      }
    };
  }
  const renderIcon = (icon, props) => {
    if (icon) return vue.h(icon, props);
    return "";
  };
  const { componentName: componentName$8, create: create$14 } = createComponent("popup");
  const initIndex = 2e3;
  let _zIndex = initIndex;
  const _sfc_main$1H = create$14({
    components: {
      NutOverlay: _sfc_main$1I,
      Close: iconsVueTaro.Close
    },
    props: popupProps,
    emits: ["clickPop", "clickCloseIcon", "open", "close", "opened", "closed", "clickOverlay", "update:visible"],
    setup(props, { emit }) {
      let opened;
      const state = vue.reactive({
        zIndex: props.zIndex,
        showSlot: true,
        closed: props.closeable
      });
      const classes = vue.computed(() => {
        const prefixCls2 = componentName$8;
        return {
          [prefixCls2]: true,
          ["round"]: props.round,
          [`nut-popup--${props.position}`]: true,
          [`nut-popup--${props.position}--safebottom`]: props.position === "bottom" && props.safeAreaInsetBottom,
          [props.popClass]: true
        };
      });
      const popStyle = vue.computed(() => {
        return __spreadValues({
          zIndex: state.zIndex,
          transitionDuration: `${props.duration}s`
        }, props.style);
      });
      const transitionName = vue.computed(() => {
        return props.transition ? props.transition : `nut-popup-slide-${props.position}`;
      });
      const open = () => {
        if (!opened) {
          opened = true;
          if (props.zIndex !== initIndex) {
            _zIndex = Number(props.zIndex);
          }
          emit("update:visible", true);
          state.zIndex = ++_zIndex;
          if (props.destroyOnClose) {
            state.showSlot = true;
          }
          emit("open");
        }
      };
      const close = () => {
        if (opened) {
          opened = false;
          emit("update:visible", false);
          emit("close");
          if (props.destroyOnClose) {
            setTimeout(() => {
              state.showSlot = false;
            }, +props.duration * 1e3);
          }
        }
      };
      const onClick = (e) => {
        emit("clickPop", e);
      };
      const onClickCloseIcon = (e) => {
        e.stopPropagation();
        emit("clickCloseIcon", e);
        close();
      };
      const onClickOverlay = (e) => {
        emit("clickOverlay", e);
        if (props.closeOnClickOverlay) {
          close();
        }
      };
      const onOpened = (el) => {
        emit("opened", el);
      };
      const onClosed = (el) => {
        emit("closed", el);
      };
      vue.watch(
        () => props.visible,
        () => {
          if (props.visible && !opened) {
            open();
          }
          if (!props.visible && opened) {
            close();
          }
        }
      );
      vue.watchEffect(() => {
        state.closed = props.closeable;
      });
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        popStyle,
        transitionName,
        classes,
        onClick,
        onClickCloseIcon,
        onClickOverlay,
        onOpened,
        onClosed
      });
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  function _sfc_render$$(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_overlay = vue.resolveComponent("nut-overlay");
    const _component_Close = vue.resolveComponent("Close");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      _ctx.overlay ? (vue.openBlock(), vue.createBlock(_component_nut_overlay, vue.mergeProps({
        key: 0,
        visible: _ctx.visible,
        "close-on-click-overlay": _ctx.closeOnClickOverlay,
        "z-index": _ctx.zIndex,
        "lock-scroll": _ctx.lockScroll,
        duration: _ctx.duration,
        "overlay-class": _ctx.overlayClass,
        "overlay-style": _ctx.overlayStyle
      }, _ctx.$attrs, { onClick: _ctx.onClickOverlay }), null, 16, ["visible", "close-on-click-overlay", "z-index", "lock-scroll", "duration", "overlay-class", "overlay-style", "onClick"])) : vue.createCommentVNode("", true),
      _cache[3] || (_cache[3] = vue.createTextVNode()),
      vue.createVNode(vue.Transition, {
        name: _ctx.transitionName,
        onAfterEnter: _ctx.onOpened,
        onAfterLeave: _ctx.onClosed
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("view", {
            class: vue.normalizeClass(_ctx.classes),
            style: vue.normalizeStyle(_ctx.popStyle),
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClick && _ctx.onClick(...args))
          }, [
            _ctx.showSlot ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : vue.createCommentVNode("", true),
            _cache[2] || (_cache[2] = vue.createTextVNode()),
            _ctx.closed ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: vue.normalizeClass(["nut-popup__close-icon", "nut-popup__close-icon--" + _ctx.closeIconPosition]),
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickCloseIcon && _ctx.onClickCloseIcon(...args))
            }, [
              vue.renderSlot(_ctx.$slots, "close-icon", {}, () => [
                vue.createVNode(_component_Close, { height: "12px" })
              ])
            ], 2)) : vue.createCommentVNode("", true)
          ], 6), [
            [vue.vShow, _ctx.visible]
          ])
        ]),
        _: 3
      }, 8, ["name", "onAfterEnter", "onAfterLeave"])
    ]);
  }
  const Popup = /* @__PURE__ */ _export_sfc(_sfc_main$1H, [["render", _sfc_render$$]]);
  const component = (tag) => {
    return {
      props: {
        theme: { type: String, default: "" },
        themeVars: { type: Object, default: {} },
        tag: { type: String, default: tag }
      },
      setup(props, { slots }) {
        const hexToRgb = (color) => {
          const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
          if (!reg.test(color)) return "";
          color = color.toLowerCase();
          if (color.length === 4) {
            color = "#" + color.slice(1).split("").map((char) => char + char).join("");
          }
          const colors = [];
          for (let i = 1; i < 7; i += 2) {
            colors.push(parseInt("0x" + color.slice(i, i + 2)));
          }
          return colors.join(",");
        };
        const kebabCase = (str) => {
          str = str.replace(str.charAt(0), str.charAt(0).toLocaleLowerCase());
          return str.replace(/([a-z])([A-Z])/g, (_, p1, p2) => p1 + "-" + p2.toLowerCase());
        };
        const mapThemeVarsToCSSVars = (themeVars) => {
          if (!themeVars) return;
          const cssVars = {};
          const primaryColor = themeVars == null ? void 0 : themeVars.primaryColor;
          if (primaryColor) {
            const primaryColorRgb = hexToRgb(primaryColor);
            cssVars["--nut-address-region-tab-line"] = `linear-gradient(90deg, ${primaryColor} 0%, rgba(${primaryColorRgb}, 0.15) 100%)`;
            cssVars["--nut-tabs-horizontal-tab-line-color"] = `linear-gradient(90deg, ${primaryColor} 0%, rgba(${primaryColorRgb}, 0.15) 100%)`;
            cssVars["--nut-tabs-vertical-tab-line-color"] = `linear-gradient(180deg, ${primaryColor} 0%, rgba(${primaryColorRgb}, 0.15) 100%)`;
          }
          Object.keys(themeVars).forEach((key) => {
            cssVars[`--nut-${kebabCase(key)}`] = themeVars[key];
          });
          return cssVars;
        };
        const themeStyle = vue.computed(() => mapThemeVarsToCSSVars(props.themeVars));
        return () => {
          var _a;
          return vue.h(
            props.tag,
            {
              class: `nut-theme-${props.theme}`,
              style: themeStyle.value
            },
            (_a = slots.default) == null ? void 0 : _a.call(slots)
          );
        };
      }
    };
  };
  const { create: create$13 } = createComponent("config-provider");
  const _sfc_main$1G = create$13(component("view"));
  const { create: create$12 } = createComponent("layout");
  const _sfc_main$1F = create$12({});
  withInstall(_sfc_main$1F);
  const LAYOUT_KEY = Symbol("nut-layout");
  const prefixCls$1 = "nut-col";
  const _sfc_main$1E = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutCol"
  }), {
    __name: "col.taro",
    props: {
      span: { default: 24 },
      offset: { default: 0 }
    },
    setup(__props) {
      const props = __props;
      const gutter = vue.inject(LAYOUT_KEY);
      const classes = vue.computed(() => {
        return {
          [prefixCls$1]: true,
          [prefixCls$1 + "-gutter"]: gutter,
          ["nut-col-" + props.span]: true,
          ["nut-col-offset-" + props.offset]: true
        };
      });
      const style = vue.computed(() => {
        return {
          paddingLeft: gutter / 2 + "px",
          paddingRight: gutter / 2 + "px"
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(classes.value),
          style: vue.normalizeStyle(style.value)
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 6);
      };
    }
  }));
  withInstall(_sfc_main$1E);
  const prefixCls = "nut-row";
  const _sfc_main$1D = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutRow"
  }), {
    __name: "row.taro",
    props: {
      type: { default: "" },
      gutter: { default: "" },
      justify: { default: "start" },
      align: { default: "flex-start" },
      flexWrap: { default: "nowrap" }
    },
    setup(__props) {
      const props = __props;
      vue.provide(LAYOUT_KEY, props.gutter);
      const getClass = (prefix2, type) => {
        return prefix2 ? type ? `nut-row-${prefix2}-${type}` : "" : `nut-row-${type}`;
      };
      const classes = vue.computed(() => {
        return [
          prefixCls,
          getClass("", props.type),
          getClass("justify", props.justify),
          getClass("align", props.align),
          getClass("flex", props.flexWrap)
        ];
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(classes.value)
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2);
      };
    }
  }));
  withInstall(_sfc_main$1D);
  function isWindow(val) {
    return typeof window !== "undefined" && val === window;
  }
  const useTaroRectById = (id) => {
    return new Promise((resolve, reject) => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        const t = document ? document.querySelector(`#${id}`) : "";
        if (t) {
          resolve(t == null ? void 0 : t.getBoundingClientRect());
        }
        reject();
      } else {
        const query = Taro.createSelectorQuery();
        query.select(`#${id}`).boundingClientRect().exec(function(rect) {
          if (rect[0]) {
            resolve(rect[0]);
          } else {
            reject();
          }
        });
      }
    });
  };
  const useTaroRect = (elementRef) => {
    let element = vue.unref(elementRef);
    return new Promise((resolve, reject) => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        if (element && element.$el) {
          element = element.$el;
        }
        if (isWindow(element)) {
          const width = element.innerWidth;
          const height = element.innerHeight;
          resolve({
            top: 0,
            left: 0,
            right: width,
            bottom: height,
            width,
            height
          });
        }
        if (element && element.getBoundingClientRect) {
          resolve(element.getBoundingClientRect());
        }
        reject();
      } else {
        const query = Taro.createSelectorQuery();
        const id = element == null ? void 0 : element.id;
        if (id) {
          query.select(`#${id}`).boundingClientRect().exec(function(rect) {
            if (rect[0]) {
              resolve(rect[0]);
            } else {
              reject();
            }
          });
        } else {
          reject();
        }
      }
    });
  };
  const { create: create$11 } = createComponent("sticky");
  const _sfc_main$1C = create$11({
    props: {
      top: {
        type: [Number, String],
        default: 0
      },
      zIndex: {
        type: [Number, String],
        default: 99
      },
      scrollTop: {
        type: [Number, String],
        default: -1
      }
    },
    emits: ["change"],
    setup(props, { emit }) {
      const refRandomId = Math.random().toString(36).slice(-8);
      const rootRef = vue.ref();
      const state = vue.reactive({
        fixed: false,
        height: 0,
        width: 0
      });
      const rootStyle = vue.computed(() => {
        if (state.fixed) return { height: `${state.height}px` };
        return {};
      });
      const stickyStyle = vue.computed(() => {
        if (!state.fixed) return {};
        return {
          top: `${props.top}px`,
          height: `${state.height}px`,
          width: `${state.width}px`,
          position: state.fixed ? "fixed" : void 0,
          zIndex: Number(props.zIndex)
        };
      });
      const handleScroll = () => {
        useTaroRect(rootRef).then(
          (rootRect) => {
            state.height = rootRect.height;
            state.width = rootRect.width;
            state.fixed = Number(props.top) >= rootRect.top;
          },
          () => {
          }
        );
      };
      vue.watch(
        () => state.fixed,
        (val) => {
          emit("change", val);
        }
      );
      if (props.scrollTop === -1) {
        Taro.usePageScroll(handleScroll);
      } else {
        vue.watch(() => props.scrollTop, handleScroll);
      }
      vue.onMounted(handleScroll);
      return { rootRef, rootStyle, stickyStyle, refRandomId };
    }
  });
  const _hoisted_1$1f = ["id"];
  function _sfc_render$_(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      id: "rootRef-" + _ctx.refRandomId,
      ref: "rootRef",
      class: "nut-sticky",
      style: vue.normalizeStyle(_ctx.rootStyle)
    }, [
      vue.createElementVNode("view", {
        class: "nut-sticky__box",
        style: vue.normalizeStyle(_ctx.stickyStyle)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 4)
    ], 12, _hoisted_1$1f);
  }
  const Sticky = /* @__PURE__ */ _export_sfc(_sfc_main$1C, [["render", _sfc_render$_]]);
  const _sfc_main$1B = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutDivider"
  }), {
    __name: "divider.taro",
    props: {
      contentPosition: { default: "center" },
      dashed: { type: Boolean, default: false },
      hairline: { type: Boolean, default: true },
      direction: { default: "horizontal" }
    },
    setup(__props) {
      const props = __props;
      const slots = vue.useSlots();
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-divider";
        if (props.direction === "horizontal") {
          return {
            [prefixCls2]: true,
            [`${prefixCls2}-center`]: slots.default,
            [`${prefixCls2}-left`]: props.contentPosition === "left",
            [`${prefixCls2}-right`]: props.contentPosition === "right",
            [`${prefixCls2}-dashed`]: props.dashed,
            [`${prefixCls2}-hairline`]: props.hairline
          };
        } else {
          return {
            [prefixCls2]: true,
            [`${prefixCls2}-vertical`]: props.direction === "vertical"
          };
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(classes.value)
        }, [
          _ctx.direction === "horizontal" ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : vue.createCommentVNode("", true)
        ], 2);
      };
    }
  }));
  withInstall(_sfc_main$1B);
  const GRID_KEY = Symbol("grid");
  const _sfc_main$1A = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutGrid"
  }), {
    __name: "grid.taro",
    props: {
      columnNum: { default: 4 },
      border: { type: Boolean, default: true },
      gutter: { default: 0 },
      center: { type: Boolean, default: true },
      square: { type: Boolean, default: false },
      reverse: { type: Boolean, default: false },
      direction: {},
      clickable: { type: Boolean, default: false }
    },
    setup(__props) {
      const props = __props;
      const { linkChildren } = useChildren(GRID_KEY);
      linkChildren({ props });
      const rootClass = vue.computed(() => {
        const prefixCls2 = "nut-grid";
        return {
          [prefixCls2]: true,
          [`${prefixCls2}--border`]: props.border && !props.gutter
        };
      });
      const rootStyle = vue.computed(() => {
        const style = {};
        if (props.gutter) {
          style.paddingLeft = pxCheck(props.gutter);
        }
        return style;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(rootClass.value),
          style: vue.normalizeStyle(rootStyle.value)
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 6);
      };
    }
  }));
  withInstall(_sfc_main$1A);
  const _hoisted_1$1e = { class: "nut-grid-item__text" };
  const _sfc_main$1z = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutGridItem"
  }), {
    __name: "grid-item.taro",
    props: {
      text: {}
    },
    emits: ["click"],
    setup(__props, { emit: __emit }) {
      const emit = __emit;
      const { parent: parentObj, index } = useParent(GRID_KEY);
      const parent = (parentObj == null ? void 0 : parentObj.props) || {};
      const rootStyle = vue.computed(() => {
        const style = {
          flexBasis: `${100 / +parent.columnNum}%`
        };
        if (parent.square) {
          style.paddingTop = `${100 / +parent.columnNum}%`;
        } else if (parent.gutter) {
          style.paddingRight = pxCheck(parent.gutter);
          if (index.value >= +parent.columnNum) {
            style.marginTop = pxCheck(parent.gutter);
          }
        }
        return style;
      });
      const contentClass = vue.computed(() => {
        const prefixCls2 = `nut-grid-item__content`;
        return {
          [`${prefixCls2}`]: true,
          [`${prefixCls2}--border`]: parent.border,
          [`${prefixCls2}--surround`]: parent.border && parent.gutter,
          [`${prefixCls2}--center`]: parent.center,
          [`${prefixCls2}--square`]: parent.square,
          [`${prefixCls2}--reverse`]: parent.reverse,
          [`${prefixCls2}--${parent.direction}`]: !!parent.direction,
          [`${prefixCls2}--clickable`]: parent.clickable
        };
      });
      const handleClick = (event) => {
        emit("click", event);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "nut-grid-item",
          style: vue.normalizeStyle(rootStyle.value),
          onClick: handleClick
        }, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(contentClass.value)
          }, [
            vue.renderSlot(_ctx.$slots, "default"),
            _cache[0] || (_cache[0] = vue.createTextVNode()),
            vue.createElementVNode("view", _hoisted_1$1e, [
              _ctx.text ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                vue.createTextVNode(vue.toDisplayString(_ctx.text), 1)
              ], 64)) : vue.renderSlot(_ctx.$slots, "text", { key: 1 })
            ])
          ], 2)
        ], 4);
      };
    }
  }));
  withInstall(_sfc_main$1z);
  const { create: create$10, componentName: componentName$7 } = createComponent("space");
  const _sfc_main$1y = create$10({
    props: {
      align: String,
      direction: {
        type: String,
        default: "horizontal"
      },
      justify: String,
      wrap: Boolean,
      gutter: [Number, String, Array],
      fill: Boolean
    },
    setup(props, { slots }) {
      const getMargin = (gutter) => {
        if (typeof gutter === "number") {
          return gutter + "px";
        }
        return gutter;
      };
      const getMarginStyle = (isLast) => {
        const style = {};
        if (!props.gutter) return style;
        const marginRight = `${getMargin(Array.isArray(props.gutter) ? props.gutter[0] : props.gutter)}`;
        const marginBottom = `${getMargin(Array.isArray(props.gutter) ? props.gutter[1] : props.gutter)}`;
        if (isLast) {
          return props.wrap ? { marginBottom } : {};
        }
        if (props.direction === "horizontal") {
          style.marginRight = marginRight;
        }
        if (props.direction === "vertical" || props.wrap) {
          style.marginBottom = marginBottom;
        }
        return style;
      };
      const filterEmpty = (children = []) => {
        const nodes = [];
        children.forEach((child) => {
          if (Array.isArray(child)) {
            nodes.push(...child);
          } else if (child.type === vue.Fragment) {
            nodes.push(...filterEmpty(child.children));
          } else {
            nodes.push(child);
          }
        });
        return nodes.filter(
          (c) => {
            var _a;
            return !(c && (c.type === vue.Comment || c.type === vue.Fragment && ((_a = c.children) == null ? void 0 : _a.length) === 0 || c.type === vue.Text && c.children.trim() === ""));
          }
        );
      };
      const { direction, wrap, fill, justify, align } = props;
      return () => {
        var _a;
        const children = filterEmpty((_a = slots.default) == null ? void 0 : _a.call(slots));
        const renderChildren = () => {
          return children.map((child, i) => {
            return vue.h(
              "view",
              {
                class: `${componentName$7}-item`,
                style: getMarginStyle(i === children.length - 1)
              },
              child
            );
          });
        };
        return vue.h(
          "view",
          {
            class: [
              componentName$7,
              direction && `${componentName$7}-${direction}`,
              align && `${componentName$7}-align-${align}`,
              justify && `${componentName$7}-justify-${justify}`,
              wrap && `${componentName$7}-wrap`,
              fill && `${componentName$7}-fill`
            ]
          },
          renderChildren()
        );
      };
    }
  });
  const _hoisted_1$1d = ["id"];
  const _hoisted_2$_ = {
    key: 1,
    class: "nut-navbar__text"
  };
  const _hoisted_3$N = { class: "nut-navbar__title" };
  const _hoisted_4$E = {
    key: 0,
    class: "nut-navbar__text"
  };
  const _sfc_main$1x = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutNavbar"
  }), {
    __name: "navbar.taro",
    props: {
      leftShow: { type: Boolean, default: false },
      title: { default: "" },
      titleIcon: { type: Boolean, default: false },
      leftText: { default: "" },
      desc: { default: "" },
      fixed: { type: Boolean, default: false },
      safeAreaInsetTop: { type: Boolean, default: false },
      border: { type: Boolean, default: false },
      placeholder: { type: Boolean, default: true },
      zIndex: { default: 10 }
    },
    emits: [
      "clickBack",
      "clickTitle",
      "clickIcon",
      "clickRight",
      // will be deprecated
      "onClickBack",
      "onClickTitle",
      "onClickIcon",
      "onClickRight"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const refRandomId = Math.random().toString(36).slice(-8);
      const navHeight = vue.ref("auto");
      const navbarRef = vue.ref(null);
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-navbar";
        return {
          [prefixCls2]: true,
          [`${prefixCls2}--border`]: props.border,
          [`${prefixCls2}--fixed`]: props.fixed,
          [`${prefixCls2}--safe-area-inset-top`]: props.safeAreaInsetTop
        };
      });
      const rootStyle = vue.computed(() => {
        if (props.fixed && props.placeholder) {
          return {
            height: navHeight.value
          };
        }
        return {};
      });
      const getNavHeight = () => {
        useTaroRect(navbarRef).then(
          (rect) => {
            navHeight.value = `${rect.height}px`;
          },
          () => {
          }
        );
      };
      vue.onMounted(() => {
        if (props.fixed && props.placeholder) {
          setTimeout(() => {
            getNavHeight();
          }, 100);
        }
      });
      const handleLeft = () => {
        emit("clickBack");
        emit("onClickBack");
      };
      const handleCenter = () => {
        emit("clickTitle");
        emit("onClickTitle");
      };
      const handleCenterIcon = () => {
        emit("clickIcon");
        emit("onClickIcon");
      };
      const handleRight = () => {
        emit("clickRight");
        emit("onClickRight");
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "nut-navbar--placeholder",
          style: vue.normalizeStyle(rootStyle.value)
        }, [
          vue.createElementVNode("view", {
            id: "navbarRef-" + vue.unref(refRandomId),
            ref_key: "navbarRef",
            ref: navbarRef,
            class: vue.normalizeClass(classes.value),
            style: vue.normalizeStyle({ zIndex: _ctx.zIndex })
          }, [
            vue.createElementVNode("view", {
              class: "nut-navbar__left",
              onClick: handleLeft
            }, [
              _ctx.leftShow ? vue.renderSlot(_ctx.$slots, "left-show", { key: 0 }, () => [
                vue.createVNode(vue.unref(iconsVueTaro.Left), {
                  height: "12px",
                  color: "#979797"
                })
              ]) : vue.createCommentVNode("", true),
              _cache[0] || (_cache[0] = vue.createTextVNode()),
              _ctx.leftText ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$_, vue.toDisplayString(_ctx.leftText), 1)) : vue.createCommentVNode("", true),
              _cache[1] || (_cache[1] = vue.createTextVNode()),
              vue.renderSlot(_ctx.$slots, "left")
            ]),
            _cache[5] || (_cache[5] = vue.createTextVNode()),
            vue.createElementVNode("view", _hoisted_3$N, [
              _ctx.title ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "title",
                onClick: handleCenter
              }, vue.toDisplayString(_ctx.title), 1)) : vue.createCommentVNode("", true),
              _cache[2] || (_cache[2] = vue.createTextVNode()),
              _ctx.titleIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "icon",
                onClick: handleCenterIcon
              }, [
                vue.renderSlot(_ctx.$slots, "title-icon", { onClick: handleCenterIcon })
              ])) : vue.createCommentVNode("", true),
              _cache[3] || (_cache[3] = vue.createTextVNode()),
              vue.renderSlot(_ctx.$slots, "content")
            ]),
            _cache[6] || (_cache[6] = vue.createTextVNode()),
            vue.createElementVNode("view", {
              class: "nut-navbar__right",
              onClick: handleRight
            }, [
              _ctx.desc ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$E, vue.toDisplayString(_ctx.desc), 1)) : vue.createCommentVNode("", true),
              _cache[4] || (_cache[4] = vue.createTextVNode()),
              vue.renderSlot(_ctx.$slots, "right")
            ])
          ], 14, _hoisted_1$1d)
        ], 4);
      };
    }
  }));
  withInstall(_sfc_main$1x);
  const useLocale = (name = "") => {
    return (keyPath, ...args) => {
      name = name.toLocaleLowerCase();
      const languages = Locale.languages();
      let text = keyPath;
      if (name && name.startsWith("nut")) {
        text = `${name.slice(3)}.${keyPath}`;
      }
      const res = getPropByPath(languages, text) || getPropByPath(languages, keyPath);
      return isFunction(res) ? res(...args) : res;
    };
  };
  const { create: create$$ } = createComponent("fixed-nav");
  const cN$m = "NutFixedNav";
  const _sfc_main$1w = create$$({
    components: {
      NutOverlay: _sfc_main$1I,
      Left: iconsVueTaro.Left
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      overlay: {
        type: Boolean,
        default: true
      },
      navList: {
        default: () => [],
        type: Array
      },
      activeColor: {
        default: "",
        type: String
      },
      activeText: {
        default: "",
        type: String
      },
      unActiveText: {
        default: "",
        type: String
      },
      position: {
        default: () => {
          return {
            top: "auto",
            bottom: "auto"
          };
        },
        type: Object
      },
      type: {
        default: "right",
        type: String
      }
    },
    emits: ["update:visible", "selected"],
    setup(props, { emit }) {
      const translate = useLocale(cN$m);
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-fixed-nav";
        return {
          [prefixCls2]: true,
          active: props.visible,
          [props.type]: true
        };
      });
      const current = vue.ref(-1);
      const updateValue = (value = !props.visible) => {
        emit("update:visible", value);
      };
      const selected = (item, event) => {
        emit("selected", {
          item,
          event
        });
        current.value = item.id;
      };
      return { classes, updateValue, selected, translate, current };
    }
  });
  const _hoisted_1$1c = { class: "nut-fixed-nav__list" };
  const _hoisted_2$Z = ["onClick"];
  const _hoisted_3$M = ["src"];
  const _hoisted_4$D = { class: "span" };
  const _hoisted_5$r = {
    key: 0,
    class: "b"
  };
  const _hoisted_6$k = { class: "text" };
  function _sfc_render$Z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_overlay = vue.resolveComponent("nut-overlay");
    const _component_Left = vue.resolveComponent("Left");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes),
      style: vue.normalizeStyle(_ctx.position)
    }, [
      _ctx.overlay ? (vue.openBlock(), vue.createBlock(_component_nut_overlay, {
        key: 0,
        visible: _ctx.visible,
        "z-index": 200,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.updateValue(false))
      }, null, 8, ["visible"])) : vue.createCommentVNode("", true),
      _cache[5] || (_cache[5] = vue.createTextVNode()),
      vue.renderSlot(_ctx.$slots, "list", {}, () => [
        vue.createElementVNode("view", _hoisted_1$1c, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.navList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: item.id || index,
              class: vue.normalizeClass(["nut-fixed-nav__list-item", { active: item.id == _ctx.current }]),
              onClick: ($event) => _ctx.selected(item, $event)
            }, [
              vue.createElementVNode("img", {
                src: item.icon
              }, null, 8, _hoisted_3$M),
              _cache[2] || (_cache[2] = vue.createTextVNode()),
              vue.createElementVNode("view", _hoisted_4$D, vue.toDisplayString(item.text), 1),
              _cache[3] || (_cache[3] = vue.createTextVNode()),
              item.num ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$r, vue.toDisplayString(item.num), 1)) : vue.createCommentVNode("", true)
            ], 10, _hoisted_2$Z);
          }), 128))
        ])
      ]),
      _cache[6] || (_cache[6] = vue.createTextVNode()),
      vue.createElementVNode("div", {
        class: "nut-fixed-nav__btn",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.updateValue())
      }, [
        vue.renderSlot(_ctx.$slots, "btn", {}, () => [
          vue.createVNode(_component_Left, { color: "#fff" }),
          _cache[4] || (_cache[4] = vue.createTextVNode()),
          vue.createElementVNode("view", _hoisted_6$k, vue.toDisplayString(_ctx.visible ? _ctx.activeText || _ctx.translate("activeText") : _ctx.unActiveText || _ctx.translate("unActiveText")), 1)
        ])
      ])
    ], 6);
  }
  const FixedNav = /* @__PURE__ */ _export_sfc(_sfc_main$1w, [["render", _sfc_render$Z]]);
  const MENU_KEY = Symbol("nut-menu");
  const { componentName: componentName$6, create: create$_ } = createComponent("menu");
  const _sfc_main$1v = create$_({
    components: {
      RectUp: iconsVueTaro.RectUp,
      RectDown: iconsVueTaro.RectDown
    },
    props: {
      activeColor: {
        type: String,
        default: ""
      },
      overlay: {
        type: Boolean,
        default: true
      },
      lockScroll: {
        type: Boolean,
        default: true
      },
      duration: {
        type: [Number, String],
        default: 0.3
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      },
      direction: {
        type: String,
        default: "down"
      },
      scrollFixed: {
        type: [Boolean, String, Number],
        default: false
      },
      titleClass: {
        type: String,
        default: ""
      }
    },
    setup(props) {
      const barRef = vue.ref();
      const refRandomId = Math.random().toString(36).slice(-8);
      const offset = vue.ref(0);
      const isScrollFixed = vue.ref(false);
      const { children, linkChildren } = useChildren(MENU_KEY);
      const opened = vue.computed(() => children.some((item) => item.state.showWrapper));
      const classes = vue.computed(() => {
        const prefixCls2 = componentName$6;
        return {
          [prefixCls2]: true,
          "scroll-fixed": isScrollFixed.value
        };
      });
      const updateOffset = (children2) => {
        if (barRef.value) {
          setTimeout(() => {
            useTaroRect(barRef).then(
              (rect) => {
                if (props.direction === "down") {
                  offset.value = rect.bottom;
                } else {
                  offset.value = Taro.getSystemInfoSync().windowHeight - rect.top;
                }
                children2.toggle();
              },
              () => {
              }
            );
          }, 100);
        }
      };
      linkChildren({ props, offset });
      const toggleItem = (active) => {
        children.forEach((item, index) => {
          if (index === active) {
            updateOffset(item);
          } else if (item.state.showPopup) {
            item.toggle(false, { immediate: true });
          }
        });
      };
      const onScroll = (res) => {
        const { scrollFixed } = props;
        const scrollTop = res.scrollTop;
        isScrollFixed.value = scrollTop > (typeof scrollFixed === "boolean" ? 30 : Number(scrollFixed));
      };
      const getClasses = (showPopup) => {
        let str = "";
        const { titleClass } = props;
        if (showPopup) {
          str += "active";
        }
        if (titleClass) {
          str += ` ${titleClass}`;
        }
        return str;
      };
      Taro.usePageScroll((res) => {
        const { scrollFixed } = props;
        if (scrollFixed) {
          onScroll(res);
        }
      });
      return {
        toggleItem,
        children,
        opened,
        classes,
        barRef,
        refRandomId,
        getClasses
      };
    }
  });
  const _hoisted_1$1b = ["id"];
  const _hoisted_2$Y = ["onClick"];
  const _hoisted_3$L = { class: "nut-menu__title-text" };
  const _hoisted_4$C = { class: "nut-menu__title-icon" };
  function _sfc_render$Y(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_RectUp = vue.resolveComponent("RectUp");
    const _component_RectDown = vue.resolveComponent("RectDown");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      vue.createElementVNode("view", {
        id: "nut-menu__bar" + _ctx.refRandomId,
        ref: "barRef",
        class: vue.normalizeClass(["nut-menu__bar", { opened: _ctx.opened }])
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.children, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: index,
            class: vue.normalizeClass(["nut-menu__item", { disabled: item.disabled, active: item.state.showPopup }]),
            style: vue.normalizeStyle({ color: item.state.showPopup ? _ctx.activeColor : "" }),
            onClick: ($event) => !item.disabled && _ctx.toggleItem(index)
          }, [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["nut-menu__title", _ctx.getClasses(item.state.showPopup)])
            }, [
              vue.createElementVNode("view", _hoisted_3$L, vue.toDisplayString(item.renderTitle()), 1),
              _cache[0] || (_cache[0] = vue.createTextVNode()),
              vue.createElementVNode("span", _hoisted_4$C, [
                vue.renderSlot(_ctx.$slots, "icon", {}, () => [
                  _ctx.direction === "up" ? (vue.openBlock(), vue.createBlock(_component_RectUp, { key: 0 })) : (vue.openBlock(), vue.createBlock(_component_RectDown, { key: 1 }))
                ])
              ])
            ], 2)
          ], 14, _hoisted_2$Y);
        }), 128))
      ], 10, _hoisted_1$1b),
      _cache[1] || (_cache[1] = vue.createTextVNode()),
      vue.renderSlot(_ctx.$slots, "default")
    ], 2);
  }
  const Menu = /* @__PURE__ */ _export_sfc(_sfc_main$1v, [["render", _sfc_render$Y]]);
  const _sfc_main$1u = /* @__PURE__ */ vue.defineComponent({
    __name: "index.taro",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.unref(Taro).getEnv() === vue.unref(Taro).ENV_TYPE.WEB ? (vue.openBlock(), vue.createElementBlock("taro-scroll-view-core", vue.normalizeProps(vue.mergeProps({ key: 0 }, _ctx.$attrs)), [
          vue.renderSlot(_ctx.$slots, "default")
        ], 16)) : (vue.openBlock(), vue.createElementBlock("scroll-view", vue.normalizeProps(vue.mergeProps({ key: 1 }, _ctx.$attrs)), [
          vue.renderSlot(_ctx.$slots, "default")
        ], 16));
      };
    }
  });
  const { create: create$Z } = createComponent("menu-item");
  const _sfc_main$1t = create$Z({
    props: {
      title: String,
      options: {
        type: Array,
        default: []
      },
      disabled: {
        type: Boolean,
        default: false
      },
      modelValue: null,
      cols: {
        type: Number,
        default: 1
      },
      activeTitleClass: String,
      inactiveTitleClass: String
    },
    components: {
      Check: iconsVueTaro.Check,
      NutPopup: Popup,
      NutScrollView: _sfc_main$1u
    },
    emits: ["update:modelValue", "change"],
    setup(props, { emit }) {
      const state = vue.reactive({
        showPopup: false,
        showWrapper: false
      });
      const { parent } = useParent(MENU_KEY);
      const style = vue.computed(() => {
        return parent.props.direction === "down" ? { top: parent.offset.value + "px" } : { bottom: parent.offset.value + "px" };
      });
      const placeholderElementStyle = vue.computed(() => {
        const heightStyle = { height: parent.offset.value + "px" };
        if (parent.props.direction === "down") {
          return __spreadProps(__spreadValues({}, heightStyle), { top: "0px" });
        } else {
          return __spreadProps(__spreadValues({}, heightStyle), { bottom: "0px" });
        }
      });
      const toggle = (show = !state.showPopup) => {
        if (show === state.showPopup) {
          return;
        }
        state.showPopup = show;
        if (show) {
          state.showWrapper = true;
        }
      };
      const renderTitle = () => {
        var _a;
        if (props.title) {
          return props.title;
        }
        const match = (_a = props.options) == null ? void 0 : _a.find((option) => option.value === props.modelValue);
        return match ? match.text : "";
      };
      const onClick = (option) => {
        state.showPopup = false;
        if (option.value !== props.modelValue) {
          emit("update:modelValue", option.value);
          emit("change", option.value);
        }
      };
      const handleClose = () => {
        state.showWrapper = false;
      };
      const handleClickOutside = () => {
        state.showPopup = false;
      };
      return {
        style,
        placeholderElementStyle,
        renderTitle,
        state,
        parent,
        toggle,
        onClick,
        handleClose,
        handleClickOutside
      };
    }
  });
  const _hoisted_1$1a = ["catch-move"];
  const _hoisted_2$X = { class: "nut-menu-item__content" };
  const _hoisted_3$K = ["onClick"];
  function _sfc_render$X(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Check = vue.resolveComponent("Check");
    const _component_nut_scroll_view = vue.resolveComponent("nut-scroll-view");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      class: "nut-menu-item",
      style: vue.normalizeStyle(_ctx.style)
    }, [
      vue.withDirectives(vue.createElementVNode("view", {
        class: "nut-menu-item-placeholder-element",
        style: vue.normalizeStyle(_ctx.placeholderElementStyle),
        "catch-move": _ctx.parent.props.lockScroll,
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClickOutside && _ctx.handleClickOutside(...args))
      }, null, 12, _hoisted_1$1a), [
        [vue.vShow, _ctx.state.showPopup]
      ]),
      _cache[4] || (_cache[4] = vue.createTextVNode()),
      vue.createVNode(_component_nut_popup, vue.mergeProps(_ctx.$attrs, {
        visible: _ctx.state.showPopup,
        "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => _ctx.state.showPopup = $event),
        style: { position: "absolute" },
        "overlay-style": { position: "absolute" },
        position: _ctx.parent.props.direction === "down" ? "top" : "bottom",
        duration: _ctx.parent.props.duration,
        "destroy-on-close": false,
        overlay: _ctx.parent.props.overlay,
        "lock-scroll": _ctx.parent.props.lockScroll,
        "close-on-click-overlay": _ctx.parent.props.closeOnClickOverlay,
        "catch-move": _ctx.parent.props.lockScroll,
        onClosed: _ctx.handleClose
      }), {
        default: vue.withCtx(() => [
          vue.createVNode(_component_nut_scroll_view, { "scroll-y": true }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", _hoisted_2$X, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.options, (option, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: vue.normalizeClass(["nut-menu-item__option", [{ active: option.value === _ctx.modelValue }]]),
                    style: vue.normalizeStyle({ "flex-basis": 100 / _ctx.cols + "%" }),
                    onClick: ($event) => _ctx.onClick(option)
                  }, [
                    option.value === _ctx.modelValue ? (vue.openBlock(), vue.createElementBlock("span", {
                      key: 0,
                      class: vue.normalizeClass(["nut-menu-item__span", [option.value === _ctx.modelValue ? _ctx.activeTitleClass : _ctx.inactiveTitleClass]])
                    }, [
                      vue.renderSlot(_ctx.$slots, "icon", {}, () => [
                        vue.createVNode(_component_Check, vue.mergeProps({ ref_for: true }, _ctx.$attrs, {
                          color: _ctx.parent.props.activeColor
                        }), null, 16, ["color"])
                      ])
                    ], 2)) : vue.createCommentVNode("", true),
                    _cache[2] || (_cache[2] = vue.createTextVNode()),
                    vue.createElementVNode("view", {
                      class: vue.normalizeClass([option.value === _ctx.modelValue ? _ctx.activeTitleClass : _ctx.inactiveTitleClass]),
                      style: vue.normalizeStyle({ color: option.value === _ctx.modelValue ? _ctx.parent.props.activeColor : "" })
                    }, vue.toDisplayString(option.text), 7)
                  ], 14, _hoisted_3$K);
                }), 128)),
                _cache[3] || (_cache[3] = vue.createTextVNode()),
                vue.renderSlot(_ctx.$slots, "default")
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 16, ["visible", "position", "duration", "overlay", "lock-scroll", "close-on-click-overlay", "catch-move", "onClosed"])
    ], 4)), [
      [vue.vShow, _ctx.state.showWrapper]
    ]);
  }
  const MenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$1t, [["render", _sfc_render$X]]);
  const TABBAR_KEY = Symbol("nut-tabbar");
  const _hoisted_1$19 = ["id"];
  const _sfc_main$1s = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutTabbar"
  }), {
    __name: "tabbar.taro",
    props: {
      modelValue: { default: 0 },
      bottom: { type: Boolean, default: false },
      unactiveColor: { default: "" },
      activeColor: { default: "" },
      safeAreaInsetBottom: { type: Boolean, default: false },
      placeholder: { type: Boolean, default: false },
      beforeSwitch: { type: Function, default: () => true }
    },
    emits: ["tabSwitch", "update:modelValue"],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const refRandomId = Math.random().toString(36).slice(-8);
      const height = vue.ref("auto");
      const nutTabbarRef = vue.ref(null);
      const activeIndex = vue.ref(props.modelValue);
      const { children, linkChildren } = useChildren(TABBAR_KEY);
      const changeIndex = (index, active) => __async(this, null, function* () {
        const res = yield props.beforeSwitch(children[index], active);
        if (res === false) {
          return Promise.reject();
        }
        activeIndex.value = active;
        emit("update:modelValue", active);
        emit("tabSwitch", children[index], active);
      });
      linkChildren({ props, activeIndex, changeIndex });
      vue.watch(
        () => props.modelValue,
        (val) => {
          activeIndex.value = val;
        }
      );
      const updateHeight = () => {
        if (props.bottom && props.placeholder) {
          Taro.nextTick(() => {
            useTaroRect(nutTabbarRef).then(
              (rect) => {
                height.value = `${rect.height}px`;
              },
              () => {
              }
            );
          });
        }
      };
      vue.onMounted(updateHeight);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass({ "nut-tabbar__placeholder": _ctx.bottom && _ctx.placeholder }),
          style: vue.normalizeStyle({ height: height.value })
        }, [
          vue.createElementVNode("view", {
            id: `nut-tabbar-${vue.unref(refRandomId)}`,
            ref_key: "nutTabbarRef",
            ref: nutTabbarRef,
            class: vue.normalizeClass(["nut-tabbar", { "nut-tabbar-bottom": _ctx.bottom, "nut-tabbar-safebottom": _ctx.safeAreaInsetBottom }])
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 10, _hoisted_1$19)
        ], 6);
      };
    }
  }));
  withInstall(_sfc_main$1s);
  const _hoisted_1$18 = { class: "nut-badge" };
  const _sfc_main$1r = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutBadge"
  }), {
    __name: "badge.taro",
    props: {
      value: {},
      max: { default: 1e4 },
      dot: { type: Boolean, default: false },
      bubble: { type: Boolean, default: false },
      hidden: { type: Boolean, default: false },
      top: { default: "0" },
      right: { default: "0" },
      zIndex: { default: 9 },
      color: { default: "" }
    },
    setup(__props) {
      const props = __props;
      const style = vue.computed(() => {
        return {
          top: `${props.top}px`,
          right: `${props.right}px`,
          zIndex: props.zIndex,
          background: props.color
        };
      });
      const content = vue.computed(() => {
        if (props.dot) return;
        const value = props.value;
        const max = props.max;
        if (typeof value === "number" && typeof max === "number") {
          return max < value ? `${max}+` : value;
        }
        return value;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$18, [
          vue.withDirectives(vue.createElementVNode("view", {
            class: "nut-badge__icon",
            style: vue.normalizeStyle(style.value)
          }, [
            vue.renderSlot(_ctx.$slots, "icon")
          ], 4), [
            [vue.vShow, !_ctx.hidden && !_ctx.dot && _ctx.$slots.icon]
          ]),
          _cache[0] || (_cache[0] = vue.createTextVNode()),
          vue.renderSlot(_ctx.$slots, "default"),
          _cache[1] || (_cache[1] = vue.createTextVNode()),
          vue.withDirectives(vue.createElementVNode("view", {
            class: vue.normalizeClass(["nut-badge__content nut-badge__content--sup", { "nut-badge__content--dot": _ctx.dot, "nut-badge__content--bubble": !_ctx.dot && _ctx.bubble }]),
            style: vue.normalizeStyle(style.value)
          }, vue.toDisplayString(content.value), 7), [
            [vue.vShow, !_ctx.hidden && (content.value || _ctx.dot)]
          ])
        ]);
      };
    }
  }));
  withInstall(_sfc_main$1r);
  const _hoisted_1$17 = { class: "nut-tabbar-item_icon-box" };
  const _hoisted_2$W = {
    key: 0,
    class: "nut-tabbar-item_icon-box_icon"
  };
  const _hoisted_3$J = { key: 1 };
  const _hoisted_4$B = { key: 0 };
  const _sfc_main$1q = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutTabbarItem"
  }), {
    __name: "tabbar-item.taro",
    props: {
      tabTitle: { default: "" },
      name: {},
      icon: {},
      href: { default: "" },
      to: {}
    },
    setup(__props) {
      const props = __props;
      const router = useRouter();
      const { parent, index } = useParent(TABBAR_KEY);
      const active = vue.computed(() => {
        var _a;
        return ((_a = props.name) != null ? _a : index.value) === parent.activeIndex.value;
      });
      const activeColor = vue.computed(() => active.value ? parent.props.activeColor : parent.props.unactiveColor);
      const change = () => __async(this, null, function* () {
        var _a, _b, _c;
        try {
          const key = (_a = props.name) != null ? _a : index.value;
          yield parent.changeIndex(index.value, key);
          if ((_b = parent.children[index.value]) == null ? void 0 : _b.href) {
            window.location.href = parent.children[index.value].href;
            return;
          }
          if ((_c = parent.children[index.value]) == null ? void 0 : _c.to) {
            const to = parent.children[index.value].to;
            if (to && router) {
              router.push(to);
            } else {
              location.replace(to);
            }
          }
        } catch (err) {
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !active.value }]),
          style: vue.normalizeStyle({
            color: activeColor.value
          }),
          onClick: change
        }, [
          vue.createVNode(vue.unref(_sfc_main$1r), vue.normalizeProps(vue.guardReactiveProps(_ctx.$attrs)), {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", _hoisted_1$17, [
                _ctx.$slots.icon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$W, [
                  vue.renderSlot(_ctx.$slots, "icon", { active: active.value })
                ])) : vue.createCommentVNode("", true),
                _cache[0] || (_cache[0] = vue.createTextVNode()),
                _ctx.icon && !_ctx.$slots.icon ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$J, [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(renderIcon)(_ctx.icon)), { class: "nut-popover-item-img" }))
                ])) : vue.createCommentVNode("", true),
                _cache[1] || (_cache[1] = vue.createTextVNode()),
                vue.createElementVNode("view", {
                  class: vue.normalizeClass(["nut-tabbar-item_icon-box_nav-word", { "nut-tabbar-item_icon-box_big-word": !_ctx.icon && !_ctx.$slots.icon }])
                }, [
                  vue.renderSlot(_ctx.$slots, "default", {}, () => [
                    _ctx.tabTitle ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$B, vue.toDisplayString(_ctx.tabTitle), 1)) : vue.createCommentVNode("", true)
                  ])
                ], 2)
              ])
            ]),
            _: 3
          }, 16)
        ], 6);
      };
    }
  }));
  withInstall(_sfc_main$1q);
  const { create: create$Y } = createComponent("elevator");
  const _sfc_main$1p = create$Y({
    components: {
      NutScrollView: _sfc_main$1u
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
      const listview = vue.ref();
      const state = vue.reactive({
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
      const clientHeight = vue.computed(() => {
        return listview.value.clientHeight;
      });
      const fixedStyle = vue.computed(() => {
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
        vue.nextTick(() => {
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
      vue.watch(
        () => state.listGroup.length,
        () => {
          Taro.nextTick(calculateHeight);
        }
      );
      vue.watch(
        () => state.currentIndex,
        (newVal) => {
          emit("change", newVal);
        }
      );
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
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
  const _hoisted_1$16 = { class: "nut-elevator" };
  const _hoisted_2$V = { class: "nut-elevator__list__item__code" };
  const _hoisted_3$I = ["onClick"];
  const _hoisted_4$A = ["innerHTML"];
  const _hoisted_5$q = { class: "nut-elevator__list__fixed" };
  const _hoisted_6$j = { class: "nut-elevator__list__fixed-title" };
  const _hoisted_7$i = { class: "nut-elevator__bars__inner" };
  const _hoisted_8$c = ["data-index", "onClick"];
  function _sfc_render$W(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_scroll_view = vue.resolveComponent("nut-scroll-view");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$16, [
      vue.createVNode(_component_nut_scroll_view, {
        ref: "listview",
        class: "nut-elevator__list nut-elevator__list--mini",
        "scroll-top": _ctx.scrollTop,
        "scroll-y": true,
        "scroll-with-animation": true,
        "scroll-anchoring": true,
        style: vue.normalizeStyle({ height: isNaN(+_ctx.height) ? _ctx.height : `${_ctx.height}px` }),
        onScroll: _ctx.listViewScroll
      }, {
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.indexList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: item[_ctx.acceptKey],
              ref_for: true,
              ref: _ctx.setListGroup,
              class: vue.normalizeClass(["nut-elevator__list__item", `elevator__item__${index}`])
            }, [
              vue.createElementVNode("view", _hoisted_2$V, vue.toDisplayString(item[_ctx.acceptKey]), 1),
              _cache[3] || (_cache[3] = vue.createTextVNode()),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.list, (subitem) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: subitem["id"],
                  class: vue.normalizeClass(["nut-elevator__list__item__name", {
                    "nut-elevator__list__item__name--highcolor": _ctx.currentData.id === subitem.id && _ctx.currentKey === item[_ctx.acceptKey]
                  }]),
                  onClick: ($event) => _ctx.handleClickItem(item[_ctx.acceptKey], subitem)
                }, [
                  !_ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", {
                    key: 0,
                    innerHTML: subitem.name
                  }, null, 8, _hoisted_4$A)) : vue.renderSlot(_ctx.$slots, "default", {
                    key: 1,
                    item: subitem
                  })
                ], 10, _hoisted_3$I);
              }), 128))
            ], 2);
          }), 128))
        ]),
        _: 3
      }, 8, ["scroll-top", "style", "onScroll"]),
      _cache[4] || (_cache[4] = vue.createTextVNode()),
      vue.withDirectives(vue.createElementVNode("view", _hoisted_5$q, [
        vue.createElementVNode("view", _hoisted_6$j, vue.toDisplayString(_ctx.indexList[_ctx.currentIndex][_ctx.acceptKey]), 1)
      ], 512), [
        [vue.vShow, _ctx.scrollY > 2 && _ctx.isSticky]
      ]),
      _cache[5] || (_cache[5] = vue.createTextVNode()),
      _ctx.indexList.length > 0 ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "nut-elevator__code--current"
      }, vue.toDisplayString(_ctx.indexList[_ctx.codeIndex][_ctx.acceptKey]), 513)), [
        [vue.vShow, _ctx.scrollStart]
      ]) : vue.createCommentVNode("", true),
      _cache[6] || (_cache[6] = vue.createTextVNode()),
      vue.createElementVNode("view", {
        class: "nut-elevator__bars",
        onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.touchStart && _ctx.touchStart(...args)),
        onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.touchMove && _ctx.touchMove(...args), ["stop", "prevent"])),
        onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.touchEnd && _ctx.touchEnd(...args))
      }, [
        vue.createElementVNode("view", _hoisted_7$i, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.indexList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: item[_ctx.acceptKey],
              class: vue.normalizeClass(["nut-elevator__bars__inner__item", { active: item[_ctx.acceptKey] === _ctx.indexList[_ctx.currentIndex][_ctx.acceptKey] }]),
              "data-index": index,
              onClick: ($event) => _ctx.handleClickIndex(item[_ctx.acceptKey])
            }, vue.toDisplayString(item[_ctx.acceptKey]), 11, _hoisted_8$c);
          }), 128))
        ])
      ], 32)
    ]);
  }
  const Elevator = /* @__PURE__ */ _export_sfc(_sfc_main$1p, [["render", _sfc_render$W]]);
  const { create: create$X } = createComponent("pagination");
  const cN$l = "NutPagination";
  const _sfc_main$1o = create$X({
    props: {
      modelValue: {
        type: Number,
        default: 1
      },
      mode: {
        type: String,
        default: "multi"
      },
      prevText: {
        type: String,
        default: ""
      },
      nextText: {
        type: String,
        default: ""
      },
      pageCount: {
        type: [String, Number],
        default: ""
      },
      totalItems: {
        type: [String, Number],
        default: "0"
      },
      itemsPerPage: {
        type: [String, Number],
        default: "10"
      },
      showPageSize: {
        type: [String, Number],
        default: "5"
      },
      forceEllipses: {
        type: Boolean,
        default: false
      }
    },
    components: {},
    emits: ["change", "update:modelValue"],
    setup(props, { emit }) {
      const translate = useLocale(cN$l);
      const { modelValue, mode, showPageSize, forceEllipses } = vue.toRefs(props);
      const countRef = vue.computed(() => {
        const { pageCount, totalItems, itemsPerPage } = vue.toRefs(props);
        const num = +pageCount.value || Math.ceil(+totalItems.value / +itemsPerPage.value);
        return Math.max(1, num);
      });
      const select = (curPage, isSelect) => {
        if (curPage > countRef.value || curPage < 1) return;
        if (curPage != modelValue.value) emit("update:modelValue", curPage);
        if (isSelect) emit("change", curPage);
      };
      const setPage = (number, text, active = false) => {
        return { number, text, active };
      };
      const pages = vue.computed(() => {
        if (mode.value == "simple") return;
        let items = [];
        const pageCount = countRef.value;
        const pageSize = +showPageSize.value;
        let startPage = 1;
        let endPage = pageCount;
        const partialShow = pageCount > pageSize;
        if (partialShow) {
          startPage = Math.max(modelValue.value - Math.floor(pageSize / 2), 1);
          endPage = startPage + +pageSize - 1;
          if (endPage > pageCount) {
            endPage = pageCount;
            startPage = endPage - +pageSize + 1;
          }
        }
        for (var i = startPage; i <= endPage; i++) {
          const page = setPage(i, i, modelValue.value == i);
          items.push(page);
        }
        if (partialShow && pageSize > 0 && forceEllipses.value) {
          if (startPage > 1) {
            const prevPage = setPage(startPage - 1, "...");
            items.unshift(prevPage);
          }
          if (endPage < pageCount) {
            const nextPage = setPage(endPage + 1, "...");
            items.push(nextPage);
          }
        }
        return items;
      });
      vue.watchEffect(() => {
        select(modelValue.value, false);
      });
      return {
        modelValue,
        select,
        countRef,
        mode,
        pages,
        forceEllipses,
        translate
      };
    }
  });
  const _hoisted_1$15 = { class: "nut-pagination" };
  const _hoisted_2$U = {
    key: 0,
    class: "nut-pagination-contain"
  };
  const _hoisted_3$H = ["onClick"];
  const _hoisted_4$z = {
    key: 1,
    class: "nut-pagination-contain"
  };
  const _hoisted_5$p = { class: "nut-pagination-simple" };
  function _sfc_render$V(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$15, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["nut-pagination-prev", _ctx.mode == "multi" ? "" : "simple-border", _ctx.modelValue == 1 ? "disabled" : ""]),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.select(_ctx.modelValue - 1, true))
      }, [
        vue.renderSlot(_ctx.$slots, "prev-text", {}, () => [
          vue.createTextVNode(vue.toDisplayString(_ctx.prevText || _ctx.translate("prev")), 1)
        ])
      ], 2),
      _cache[2] || (_cache[2] = vue.createTextVNode()),
      _ctx.mode == "multi" ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$U, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.pages, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: index + "pagination",
            class: vue.normalizeClass(["nut-pagination-item", item.active ? "active" : ""]),
            onClick: ($event) => _ctx.select(item.number, true)
          }, [
            vue.renderSlot(_ctx.$slots, "page", { item }, () => [
              vue.createTextVNode(vue.toDisplayString(item.text), 1)
            ])
          ], 10, _hoisted_3$H);
        }), 128))
      ])) : vue.createCommentVNode("", true),
      _cache[3] || (_cache[3] = vue.createTextVNode()),
      _ctx.mode == "simple" ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$z, [
        vue.createElementVNode("view", _hoisted_5$p, vue.toDisplayString(_ctx.modelValue) + "/" + vue.toDisplayString(_ctx.countRef), 1)
      ])) : vue.createCommentVNode("", true),
      _cache[4] || (_cache[4] = vue.createTextVNode()),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["nut-pagination-next", _ctx.modelValue >= _ctx.countRef ? "disabled" : ""]),
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.select(_ctx.modelValue + 1, true))
      }, [
        vue.renderSlot(_ctx.$slots, "next-text", {}, () => [
          vue.createTextVNode(vue.toDisplayString(_ctx.nextText || _ctx.translate("next")), 1)
        ])
      ], 2)
    ]);
  }
  const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$1o, [["render", _sfc_render$V]]);
  const _window = window;
  function requestAniFrame() {
    if (typeof _window !== "undefined") {
      return _window.requestAnimationFrame || _window.webkitRequestAnimationFrame || function(callback) {
        _window.setTimeout(callback, 1e3 / 60);
      };
    } else {
      return function(callback) {
        setTimeout(callback, 1e3 / 60);
      };
    }
  }
  const requestAniFrame$1 = requestAniFrame();
  const MIN_DISTANCE = 10;
  function getDirection(x, y) {
    if (x > y && x > MIN_DISTANCE) {
      return "horizontal";
    }
    if (y > x && y > MIN_DISTANCE) {
      return "vertical";
    }
    return "";
  }
  function useTouch() {
    const startX = vue.ref(0);
    const startY = vue.ref(0);
    const moveX = vue.ref(0);
    const moveY = vue.ref(0);
    const deltaX = vue.ref(0);
    const deltaY = vue.ref(0);
    const offsetX = vue.ref(0);
    const offsetY = vue.ref(0);
    const direction = vue.ref("");
    const isVertical = () => direction.value === "vertical";
    const isHorizontal = () => direction.value === "horizontal";
    const reset = () => {
      deltaX.value = 0;
      deltaY.value = 0;
      offsetX.value = 0;
      offsetY.value = 0;
      direction.value = "";
    };
    const start = (event) => {
      reset();
      startX.value = event.touches[0].clientX;
      startY.value = event.touches[0].clientY;
    };
    const move = (event) => {
      const touch = event.touches[0];
      deltaX.value = touch.clientX - startX.value;
      deltaY.value = touch.clientY - startY.value;
      moveX.value = touch.clientX;
      moveY.value = touch.clientY;
      offsetX.value = Math.abs(deltaX.value);
      offsetY.value = Math.abs(deltaY.value);
      if (!direction.value) {
        direction.value = getDirection(offsetX.value, offsetY.value);
      }
    };
    return {
      move,
      start,
      reset,
      startX,
      startY,
      moveX,
      moveY,
      deltaX,
      deltaY,
      offsetX,
      offsetY,
      direction,
      isVertical,
      isHorizontal
    };
  }
  const useTabContentTouch = (props, tabMethods, taro, useTaroRect2) => {
    const tabsContentRef = vue.ref();
    const tabsContentRefRect = vue.ref({ width: 0, height: 0 });
    const initTaroWidth = () => __async(this, null, function* () {
      var _a, _b;
      if (taro && taro.getEnv() !== taro.ENV_TYPE.WEB) {
        useTaroRect2(tabsContentRef).then(
          (rect) => {
            tabsContentRefRect.value.width = rect.width || 0;
            tabsContentRefRect.value.height = rect.height || 0;
          },
          () => {
          }
        );
      } else {
        tabsContentRefRect.value.width = ((_a = tabsContentRef.value) == null ? void 0 : _a.clientWidth) || 0;
        tabsContentRefRect.value.height = ((_b = tabsContentRef.value) == null ? void 0 : _b.clientHeight) || 0;
      }
    });
    vue.onMounted(() => {
      setTimeout(() => {
        initTaroWidth();
      }, 100);
    });
    const touchState = vue.reactive({
      offset: 0,
      moving: false
    });
    const touch = useTouch();
    let position = "";
    const setoffset = (deltaX, deltaY) => {
      var _a;
      let offset = deltaX;
      if (props.direction == "horizontal") {
        position = deltaX > 0 ? "right" : "left";
        offset = Math.abs(offset) / tabsContentRefRect.value.width * 100;
      } else {
        position = deltaY > 0 ? "bottom" : "top";
        offset = deltaY;
        offset = Math.abs(offset) / ((_a = tabsContentRefRect.value) == null ? void 0 : _a.height) * 100;
      }
      if (offset > 85) {
        offset = 85;
      }
      switch (position) {
        case "left":
        case "top":
          if (tabMethods.isEnd()) {
            offset = 0;
            touchState.moving = false;
          }
          break;
        case "right":
        case "bottom":
          offset = -offset;
          if (tabMethods.isBegin()) {
            offset = 0;
            touchState.moving = false;
          }
          break;
      }
      touchState.offset = offset;
    };
    const touchMethods = {
      onTouchStart(event) {
        if (!props.swipeable) return;
        touch.start(event);
      },
      onTouchMove(event) {
        if (!props.swipeable) return;
        touch.move(event);
        touchState.moving = true;
        setoffset(touch.deltaX.value, touch.deltaY.value);
        if (props.direction == "horizontal" && touch.isHorizontal()) {
          event.preventDefault();
          event.stopPropagation();
        }
        if (props.direction == "vertical" && touch.isVertical()) {
          event.preventDefault();
          event.stopPropagation();
        }
      },
      onTouchEnd() {
        if (touchState.moving) {
          touchState.moving = false;
          switch (position) {
            case "left":
            case "top":
              if (touchState.offset > 35) {
                tabMethods.next();
              }
              break;
            case "right":
            case "bottom":
              if (touchState.offset < -35) {
                tabMethods.prev();
              }
              break;
          }
        }
      }
    };
    return { touchMethods, touchState, tabsContentRef };
  };
  const TABS_KEY = Symbol("nut-tab");
  class Title {
    constructor() {
      __publicField(this, "title", "");
      __publicField(this, "titleSlot");
      __publicField(this, "paneKey", "");
      __publicField(this, "disabled", false);
    }
  }
  const { create: create$W } = createComponent("tabs");
  const _sfc_main$1n = create$W({
    components: {
      JoySmile: iconsVueTaro.JoySmile,
      NutScrollView: _sfc_main$1u
    },
    props: {
      modelValue: {
        type: [String, Number],
        default: 0
      },
      color: {
        type: String,
        default: ""
      },
      direction: {
        type: String,
        default: "horizontal"
      },
      size: {
        type: String,
        default: "normal"
      },
      type: {
        type: String,
        default: "line"
      },
      titleScroll: {
        type: Boolean,
        default: false
      },
      ellipsis: {
        type: Boolean,
        default: true
      },
      swipeable: {
        type: Boolean,
        default: false
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      background: {
        type: String,
        default: ""
      },
      animatedTime: {
        type: [Number, String],
        default: 300
      },
      titleGutter: {
        type: [Number, String],
        default: 0
      },
      sticky: {
        type: Boolean,
        default: false
      },
      top: {
        type: Number,
        default: 0
      },
      align: {
        type: String,
        default: "center"
      }
    },
    emits: ["update:modelValue", "click", "change"],
    setup(props, { emit, slots }) {
      const refRandomId = Math.random().toString(36).slice(-8);
      const container = vue.ref(null);
      vue.provide(TABS_KEY, {
        activeKey: vue.computed(() => props.modelValue || "0"),
        autoHeight: vue.computed(() => props.autoHeight),
        animatedTime: vue.computed(() => props.animatedTime)
      });
      const titles = vue.ref([]);
      const renderTitles = (vnodes) => {
        vnodes.forEach((vnode, index) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i;
          let type = vnode.type;
          type = type.name || type;
          if (type == "NutTabPane") {
            let title = new Title();
            if (((_a = vnode.props) == null ? void 0 : _a.title) || ((_b = vnode.props) == null ? void 0 : _b["pane-key"]) || ((_c = vnode.props) == null ? void 0 : _c["paneKey"])) {
              let paneKeyType = TypeOfFun((_d = vnode.props) == null ? void 0 : _d["pane-key"]);
              let paneIndex = paneKeyType == "number" || paneKeyType == "string" ? String((_e = vnode.props) == null ? void 0 : _e["pane-key"]) : null;
              let camelPaneKeyType = TypeOfFun((_f = vnode.props) == null ? void 0 : _f["paneKey"]);
              let camelPaneIndex = camelPaneKeyType == "number" || camelPaneKeyType == "string" ? String((_g = vnode.props) == null ? void 0 : _g["paneKey"]) : null;
              title.title = (_h = vnode.props) == null ? void 0 : _h.title;
              title.paneKey = paneIndex || camelPaneIndex || String(index);
              title.disabled = (_i = vnode.props) == null ? void 0 : _i.disabled;
            }
            titles.value.push(title);
          } else {
            if (vnode.children == " ") {
              return;
            }
            renderTitles(vnode.children);
          }
        });
      };
      const currentIndex = vue.ref(props.modelValue || 0);
      const findTabsIndex = (value) => {
        let index = titles.value.findIndex((item) => item.paneKey == value);
        if (titles.value.length == 0) ;
        else if (index == -1) ;
        else {
          currentIndex.value = index;
        }
      };
      const getScrollX = vue.computed(() => {
        return props.titleScroll && props.direction === "horizontal";
      });
      const getScrollY = vue.computed(() => {
        return props.titleScroll && props.direction === "vertical";
      });
      const titleRef = vue.ref([]);
      const scrollLeft = vue.ref(0);
      const scrollTop = vue.ref(0);
      const scrollWithAnimation = vue.ref(false);
      const getRect = (selector) => {
        return new Promise((resolve) => {
          Taro.createSelectorQuery().select(selector).boundingClientRect().exec((rect = []) => {
            resolve(rect[0]);
          });
        });
      };
      const getAllRect = (selector) => {
        return new Promise((resolve) => {
          Taro.createSelectorQuery().selectAll(selector).boundingClientRect().exec((rect = []) => resolve(rect[0]));
        });
      };
      const navRectRef = vue.ref();
      const titleRectRef = vue.ref([]);
      const canShowLabel = vue.ref(false);
      const scrollIntoView = () => {
        requestAniFrame$1(() => {
          Promise.all([
            getRect(`#nut-tabs__titles_${refRandomId}`),
            getAllRect(`#nut-tabs__titles_${refRandomId} .nut-tabs__titles-item`)
          ]).then(([navRect, titleRects]) => {
            var _a, _b, _c, _d;
            navRectRef.value = navRect;
            titleRectRef.value = titleRects;
            if (navRectRef.value) {
              if (props.direction === "vertical") {
                const titlesTotalHeight = titleRects.reduce((prev, curr) => prev + (curr == null ? void 0 : curr.height), 0);
                if (titlesTotalHeight > ((_a = navRectRef.value) == null ? void 0 : _a.height)) {
                  canShowLabel.value = true;
                } else {
                  canShowLabel.value = false;
                }
              } else {
                const titlesTotalWidth = titleRects.reduce((prev, curr) => prev + (curr == null ? void 0 : curr.width), 0);
                if (titlesTotalWidth > ((_b = navRectRef.value) == null ? void 0 : _b.width)) {
                  canShowLabel.value = true;
                } else {
                  canShowLabel.value = false;
                }
              }
            }
            const titleRect = titleRectRef.value[currentIndex.value];
            let to = 0;
            if (props.direction === "vertical") {
              const top = titleRects.slice(0, currentIndex.value).reduce((prev, curr) => prev + (curr == null ? void 0 : curr.height), 0);
              to = top - (((_c = navRectRef.value) == null ? void 0 : _c.height) - (titleRect == null ? void 0 : titleRect.height)) / 2;
            } else {
              const left2 = titleRects.slice(0, currentIndex.value).reduce((prev, curr) => prev + (curr == null ? void 0 : curr.width), 0);
              to = left2 - (((_d = navRectRef.value) == null ? void 0 : _d.width) - (titleRect == null ? void 0 : titleRect.width)) / 2;
            }
            vue.nextTick(() => {
              scrollWithAnimation.value = true;
            });
            scrollDirection(to, props.direction);
          });
        });
      };
      const scrollDirection = (to, direction) => {
        let count = 0;
        const from = direction === "horizontal" ? scrollLeft.value : scrollTop.value;
        const frames = 1;
        function animate() {
          if (direction === "horizontal") {
            scrollLeft.value += (to - from) / frames;
          } else {
            scrollTop.value += (to - from) / frames;
          }
          if (++count < frames) {
            requestAniFrame$1(animate);
          }
        }
        animate();
      };
      const init = (vnodes = ((_a) => (_a = slots.default) == null ? void 0 : _a.call(slots))()) => {
        titles.value = [];
        vnodes = vnodes == null ? void 0 : vnodes.filter((item) => typeof item.children !== "string");
        if (vnodes && vnodes.length) {
          renderTitles(vnodes);
        }
        findTabsIndex(props.modelValue);
        setTimeout(() => {
          scrollIntoView();
        }, 500);
      };
      vue.watch(
        () => {
          var _a;
          return (_a = slots.default) == null ? void 0 : _a.call(slots);
        },
        (vnodes) => {
          init(vnodes);
        }
      );
      vue.watch(
        () => props.modelValue,
        (value) => {
          findTabsIndex(value);
          scrollIntoView();
        }
      );
      vue.onMounted(init);
      vue.onActivated(init);
      const tabMethods = {
        isBegin: () => {
          return currentIndex.value == 0;
        },
        isEnd: () => {
          return currentIndex.value == titles.value.length - 1;
        },
        next: () => {
          currentIndex.value += 1;
          tabMethods.updateValue(titles.value[currentIndex.value]);
        },
        prev: () => {
          currentIndex.value -= 1;
          tabMethods.updateValue(titles.value[currentIndex.value]);
        },
        updateValue: (item) => {
          emit("update:modelValue", item.paneKey);
          emit("change", item);
        },
        tabChange: (item, index) => {
          emit("click", item);
          if (item.disabled || currentIndex.value == index) {
            return;
          }
          currentIndex.value = index;
          tabMethods.updateValue(item);
        },
        setTabItemRef: (el, index) => {
          titleRef.value[index] = el;
        }
      };
      const { tabsContentRef, touchState, touchMethods } = useTabContentTouch(props, tabMethods, Taro, useTaroRect);
      const contentStyle = vue.computed(() => {
        let offsetPercent = currentIndex.value * 100;
        if (touchState.moving) {
          offsetPercent += touchState.offset;
        }
        let style = {
          transform: props.direction == "horizontal" ? `translate3d(-${offsetPercent}%, 0, 0)` : `translate3d( 0,-${offsetPercent}%, 0)`,
          transitionDuration: touchState.moving ? void 0 : `${props.animatedTime}ms`
        };
        if (props.animatedTime == 0) {
          style = {};
        }
        return style;
      });
      const tabsNavStyle = vue.computed(() => {
        return {
          background: props.background
        };
      });
      const tabsActiveStyle = vue.computed(() => {
        return {
          color: props.type == "smile" ? props.color : "",
          background: props.type == "line" ? props.color : ""
        };
      });
      const titleStyle = vue.computed(() => {
        if (!props.titleGutter) return {};
        const px = pxCheck(props.titleGutter);
        if (props.direction === "vertical") {
          return { paddingTop: px, paddingBottom: px };
        }
        return { paddingLeft: px, paddingRight: px };
      });
      return __spreadValues(__spreadValues({
        titles,
        tabsContentRef,
        contentStyle,
        tabsNavStyle,
        titleStyle,
        tabsActiveStyle,
        container,
        scrollLeft,
        scrollTop,
        getScrollX,
        getScrollY,
        scrollWithAnimation,
        canShowLabel,
        refRandomId
      }, tabMethods), touchMethods);
    }
  });
  const _hoisted_1$14 = ["onClick"];
  const _hoisted_2$T = {
    key: 0,
    class: "nut-tabs__titles-placeholder"
  };
  const _hoisted_3$G = ["id"];
  function _sfc_render$U(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_JoySmile = vue.resolveComponent("JoySmile");
    const _component_nut_scroll_view = vue.resolveComponent("nut-scroll-view");
    return vue.openBlock(), vue.createElementBlock("view", {
      ref: "container",
      class: vue.normalizeClass(["nut-tabs", [_ctx.direction]])
    }, [
      vue.createVNode(_component_nut_scroll_view, {
        id: `nut-tabs__titles_${_ctx.refRandomId}`,
        "scroll-x": _ctx.getScrollX,
        "scroll-y": _ctx.getScrollY,
        "scroll-with-animation": _ctx.scrollWithAnimation,
        "scroll-left": _ctx.scrollLeft,
        "scroll-top": _ctx.scrollTop,
        "enable-flex": true,
        class: vue.normalizeClass(["nut-tabs__titles", { [_ctx.type]: _ctx.type, scrollable: _ctx.titleScroll, [_ctx.size]: _ctx.size }]),
        style: vue.normalizeStyle(_ctx.tabsNavStyle)
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["nut-tabs__list", { "nut-tabs__titles-left": _ctx.align === "left" }])
          }, [
            _ctx.$slots.titles ? vue.renderSlot(_ctx.$slots, "titles", { key: 0 }) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.titles, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: item.paneKey,
                  class: vue.normalizeClass(["nut-tabs__titles-item taro", {
                    "nut-tabs__titles-item-left": _ctx.align === "left",
                    active: item.paneKey == _ctx.modelValue,
                    disabled: item.disabled
                  }]),
                  style: vue.normalizeStyle(_ctx.titleStyle),
                  onClick: ($event) => _ctx.tabChange(item, index)
                }, [
                  _ctx.type == "line" ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "nut-tabs__titles-item__line",
                    style: vue.normalizeStyle(_ctx.tabsActiveStyle)
                  }, null, 4)) : vue.createCommentVNode("", true),
                  _cache[4] || (_cache[4] = vue.createTextVNode()),
                  _ctx.type == "smile" ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "nut-tabs__titles-item__smile",
                    style: vue.normalizeStyle(_ctx.tabsActiveStyle)
                  }, [
                    vue.createVNode(_component_JoySmile, { color: _ctx.color }, null, 8, ["color"])
                  ], 4)) : vue.createCommentVNode("", true),
                  _cache[5] || (_cache[5] = vue.createTextVNode()),
                  vue.createElementVNode("view", {
                    class: vue.normalizeClass(["nut-tabs__titles-item__text", { ellipsis: _ctx.ellipsis }])
                  }, vue.toDisplayString(item.title), 3)
                ], 14, _hoisted_1$14);
              }), 128)),
              _cache[6] || (_cache[6] = vue.createTextVNode()),
              _ctx.canShowLabel && _ctx.titleScroll ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$T)) : vue.createCommentVNode("", true)
            ], 64))
          ], 2)
        ]),
        _: 3
      }, 8, ["id", "scroll-x", "scroll-y", "scroll-with-animation", "scroll-left", "scroll-top", "class", "style"]),
      _cache[7] || (_cache[7] = vue.createTextVNode()),
      vue.createElementVNode("view", {
        id: "tabsContentRef-" + _ctx.refRandomId,
        ref: "tabsContentRef",
        class: "nut-tabs__content",
        style: vue.normalizeStyle(_ctx.contentStyle),
        onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
        onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
        onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
        onTouchcancel: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 44, _hoisted_3$G)
    ], 2);
  }
  const Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$1n, [["render", _sfc_render$U]]);
  const { create: create$V } = createComponent("tab-pane");
  const _sfc_main$1m = create$V({
    props: {
      title: {
        type: [String, Number],
        default: ""
      },
      paneKey: {
        type: [String, Number],
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    emits: ["click"],
    setup(props) {
      const parentOption = vue.inject(TABS_KEY);
      const paneStyle = vue.computed(() => {
        return {
          display: (parentOption == null ? void 0 : parentOption.animatedTime.value) == 0 && props.paneKey != (parentOption == null ? void 0 : parentOption.activeKey.value) ? "none" : void 0
        };
      });
      return __spreadProps(__spreadValues({}, parentOption), {
        paneStyle
      });
    }
  });
  function _sfc_render$T(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["nut-tab-pane", { inactive: _ctx.paneKey != _ctx.activeKey && _ctx.autoHeight }]),
      style: vue.normalizeStyle(_ctx.paneStyle)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 6);
  }
  const TabPane = /* @__PURE__ */ _export_sfc(_sfc_main$1m, [["render", _sfc_render$T]]);
  const _hoisted_1$13 = {
    key: 0,
    class: "nut-indicator--number"
  };
  const _hoisted_2$S = {
    key: 1,
    class: "nut-indicator--dot"
  };
  const _sfc_main$1l = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutIndicator"
  }), {
    __name: "indicator.taro",
    props: {
      size: { default: 3 },
      current: { default: 1 },
      block: { type: Boolean, default: false },
      align: { default: "center" },
      fillZero: { type: Boolean, default: true }
    },
    setup(__props) {
      const props = __props;
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-indicator";
        return {
          [prefixCls2]: true,
          [`${prefixCls2}--block`]: props.block,
          [`${prefixCls2}--align__${props.align}`]: props.block && props.align
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(classes.value)
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.size, (item) => {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: item }, [
              item === _ctx.current ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$13, vue.toDisplayString(_ctx.fillZero && vue.unref(padZero)(item) || item), 1)) : (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$S))
            ], 64);
          }), 128))
        ], 2);
      };
    }
  }));
  withInstall(_sfc_main$1l);
  const { create: create$U } = createComponent("side-navbar");
  const _sfc_main$1k = create$U({
    props: {
      offset: {
        type: [String, Number],
        default: 15
      }
    },
    setup: (props) => {
      const list = vue.ref(null);
      const state = vue.reactive({
        count: 1
      });
      const setPaddingLeft = (nodeList, level = 1) => {
        var _a;
        for (let i = 0; i < nodeList.length; i++) {
          let item = nodeList[i];
          if ((_a = item == null ? void 0 : item.children) == null ? void 0 : _a[0]) {
            item.children[0].style.paddingLeft = +props.offset * level + "px";
            if (!item.className.includes("nut-side-navbar-item")) {
              setPaddingLeft(Array.from(item.children[1].children), ++state.count);
            }
          }
        }
        state.count--;
      };
      const handleSlots = () => {
        let childNodes = list.value.childNodes;
        if (childNodes == null ? void 0 : childNodes.length) {
          childNodes = Array.from(childNodes).filter((item) => item.nodeType !== 3).map((item) => {
            return item;
          });
          setPaddingLeft(childNodes);
        }
      };
      vue.onMounted(() => {
        handleSlots();
      });
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        list
      });
    }
  });
  const _hoisted_1$12 = { class: "nut-side-navbar" };
  const _hoisted_2$R = { class: "nut-side-navbar__content" };
  const _hoisted_3$F = {
    ref: "list",
    class: "nut-side-navbar__content__list"
  };
  function _sfc_render$S(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$12, [
      vue.createElementVNode("view", _hoisted_2$R, [
        vue.createElementVNode("view", _hoisted_3$F, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 512)
      ])
    ]);
  }
  const SideNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$1k, [["render", _sfc_render$S]]);
  const { create: create$T } = createComponent("side-navbar-item");
  const _sfc_main$1j = create$T({
    props: {
      title: {
        type: String,
        default: ""
      }
    }
  });
  const _hoisted_1$11 = { class: "nut-side-navbar-item" };
  const _hoisted_2$Q = { class: "nut-side-navbar-item__title" };
  function _sfc_render$R(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$11, [
      vue.createElementVNode("span", _hoisted_2$Q, vue.toDisplayString(_ctx.title), 1)
    ]);
  }
  const SideNavbarItem = /* @__PURE__ */ _export_sfc(_sfc_main$1j, [["render", _sfc_render$R]]);
  const { create: create$S } = createComponent("sub-side-navbar");
  const _sfc_main$1i = create$S({
    props: {
      title: {
        type: String,
        default: ""
      },
      open: {
        type: Boolean,
        default: true
      }
    },
    components: { ArrowDown2: iconsVueTaro.ArrowDown2, ArrowUp2: iconsVueTaro.ArrowUp2 },
    emits: ["titleClick"],
    setup: (props, { emit }) => {
      const state = vue.reactive({
        direction: ""
      });
      const style = vue.computed(() => {
        return {
          height: !state.direction ? "auto" : "0px"
        };
      });
      const handleClick = () => {
        emit("titleClick");
        state.direction = !state.direction ? "up" : "";
      };
      vue.onMounted(() => {
        state.direction = props.open ? "" : "up";
      });
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        style,
        handleClick
      });
    }
  });
  const _hoisted_1$10 = { class: "nut-sub-side-navbar" };
  const _hoisted_2$P = { class: "nut-sub-side-navbar__title__text" };
  const _hoisted_3$E = { class: "nut-sub-side-navbar__title__icon" };
  function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ArrowDown2 = vue.resolveComponent("ArrowDown2");
    const _component_ArrowUp2 = vue.resolveComponent("ArrowUp2");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$10, [
      vue.createElementVNode("view", {
        class: "nut-sub-side-navbar__title",
        onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"]))
      }, [
        vue.createElementVNode("span", _hoisted_2$P, vue.toDisplayString(_ctx.title), 1),
        _cache[1] || (_cache[1] = vue.createTextVNode()),
        vue.createElementVNode("span", _hoisted_3$E, [
          !_ctx.direction ? (vue.openBlock(), vue.createBlock(_component_ArrowDown2, {
            key: 0,
            size: "10"
          })) : (vue.openBlock(), vue.createBlock(_component_ArrowUp2, {
            key: 1,
            size: "10"
          }))
        ])
      ]),
      _cache[2] || (_cache[2] = vue.createTextVNode()),
      vue.withDirectives(vue.createElementVNode("view", {
        class: vue.normalizeClass(["nut-sub-side-navbar__list", !_ctx.direction ? "nutFadeIn" : "nutFadeOut"]),
        style: vue.normalizeStyle(_ctx.style)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 6), [
        [vue.vShow, !_ctx.direction]
      ])
    ]);
  }
  const SubSideNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$1i, [["render", _sfc_render$Q]]);
  const FORM_KEY = Symbol("nut-form");
  const FORM_DISABLED_KEY = Symbol("nut-form-disabled");
  const FORM_TIP_KEY = Symbol("nut-form-tip");
  const useFormDisabled = (disabled) => {
    const { parent } = useParent(FORM_DISABLED_KEY);
    return vue.computed(() => {
      var _a;
      return disabled.value || ((_a = parent == null ? void 0 : parent.props) == null ? void 0 : _a.disabled) || false;
    });
  };
  const { componentName: componentName$5, create: create$R } = createComponent("range");
  const _sfc_main$1h = create$R({
    props: {
      range: {
        type: Boolean,
        default: false
      },
      disabled: Boolean,
      activeColor: String,
      inactiveColor: String,
      buttonColor: String,
      vertical: {
        type: Boolean,
        default: false
      },
      marks: {
        type: Object,
        default: {}
      },
      hiddenRange: {
        type: Boolean,
        default: false
      },
      hiddenTag: {
        type: Boolean,
        default: false
      },
      min: {
        type: [Number, String],
        default: 0
      },
      max: {
        type: [Number, String],
        default: 100
      },
      step: {
        type: [Number, String],
        default: 1
      },
      modelValue: {
        type: [Number, Array],
        default: 0
      }
    },
    emits: ["change", "dragEnd", "dragStart", "update:modelValue"],
    setup(props, { emit }) {
      const disabled = useFormDisabled(vue.toRef(props, "disabled"));
      const refRandomId = Math.random().toString(36).slice(-8);
      const state = vue.ref({
        width: 0,
        height: 0
      });
      const buttonIndex = vue.ref(0);
      let startValue;
      let currentValue;
      const root = vue.ref();
      const dragStatus = vue.ref();
      const touch = useTouch();
      const marksList = vue.computed(() => {
        const { marks, max, min } = props;
        const marksKeys = Object.keys(marks);
        const list = marksKeys.map(parseFloat).sort((a, b) => a - b).filter((point) => point >= +min && point <= +max);
        return list;
      });
      const scope = vue.computed(() => Number(props.max) - Number(props.min));
      const classes = vue.computed(() => {
        const prefixCls2 = componentName$5;
        return {
          [prefixCls2]: true,
          [`${prefixCls2}-disabled`]: disabled.value,
          [`${prefixCls2}-vertical`]: props.vertical,
          [`${prefixCls2}-show-number`]: !props.hiddenRange
        };
      });
      const containerClasses = vue.computed(() => {
        const prefixCls2 = "nut-range-container";
        return {
          [prefixCls2]: true,
          [`${prefixCls2}-vertical`]: props.vertical
        };
      });
      const wrapperStyle = vue.computed(() => {
        return {
          background: props.inactiveColor
        };
      });
      const buttonStyle = vue.computed(() => {
        return {
          borderColor: props.buttonColor
        };
      });
      const isRange = (val) => !!props.range && Array.isArray(val);
      const calcMainAxis = () => {
        const { modelValue, min } = props;
        if (isRange(modelValue)) {
          return `${(modelValue[1] - modelValue[0]) * 100 / scope.value}%`;
        }
        return `${(modelValue - Number(min)) * 100 / scope.value}%`;
      };
      const calcOffset = () => {
        const { modelValue, min } = props;
        if (isRange(modelValue)) {
          return `${(modelValue[0] - Number(min)) * 100 / scope.value}%`;
        }
        return `0%`;
      };
      const barStyle = vue.computed(() => {
        if (props.vertical) {
          return {
            height: calcMainAxis(),
            top: calcOffset(),
            background: props.activeColor,
            transition: dragStatus.value ? "none" : void 0
          };
        } else {
          return {
            width: calcMainAxis(),
            left: calcOffset(),
            background: props.activeColor,
            transition: dragStatus.value ? "none" : void 0
          };
        }
      });
      const markClassName = (mark) => {
        const classPrefix = "nut-range-mark";
        const { modelValue, max, min } = props;
        let lowerBound = Number(min);
        let upperBound = Number(max);
        if (props.range) {
          const [left2, right2] = modelValue;
          lowerBound = left2;
          upperBound = right2;
        } else {
          upperBound = modelValue;
        }
        let isActive = mark <= +upperBound && mark >= lowerBound;
        return {
          [`${classPrefix}-text`]: true,
          [`${classPrefix}-text-active`]: isActive
        };
      };
      const marksStyle = (mark) => {
        const { min, vertical } = props;
        let style = {
          left: `${(mark - Number(min)) / scope.value * 100}%`
        };
        if (vertical) {
          style = {
            top: `${(mark - Number(min)) / scope.value * 100}%`
          };
        }
        return style;
      };
      const tickStyle = (mark) => {
        const { modelValue, max, min } = props;
        let lowerBound = Number(min);
        let upperBound = Number(max);
        if (props.range) {
          const [left2, right2] = modelValue;
          lowerBound = left2;
          upperBound = right2;
        }
        let isActive = mark <= upperBound && mark >= lowerBound;
        let style = {
          background: !isActive ? props.inactiveColor : props.activeColor
        };
        return style;
      };
      const format = (value) => {
        const { min, max, step } = props;
        value = Math.max(+min, Math.min(value, +max));
        return Math.round((value - +min) / +step) * +step + +min;
      };
      const isSameValue = (newValue, oldValue) => JSON.stringify(newValue) === JSON.stringify(oldValue);
      const handleOverlap = (value) => {
        if (value[0] > value[1]) {
          return value.slice(0).reverse();
        }
        return value;
      };
      const updateValue = (value, end) => {
        if (isRange(value)) {
          value = handleOverlap(value).map(format);
        } else {
          value = format(value);
        }
        if (!isSameValue(value, props.modelValue)) {
          emit("update:modelValue", value);
        }
        if (end && !isSameValue(value, startValue)) {
          emit("change", value);
        }
      };
      const onClick = (event) => __async(this, null, function* () {
        if (disabled.value) {
          return;
        }
        const { min, modelValue } = props;
        useTaroRect(root).then(
          (rect) => {
            state.value.width = rect.width;
            state.value.height = rect.height;
            let clientX, clientY;
            switch (Taro.getEnv()) {
              case Taro.ENV_TYPE.WEB:
                clientX = event.clientX;
                clientY = event.clientY;
                break;
              case Taro.ENV_TYPE.SWAN:
                clientX = event.changedTouches[0].clientX;
                clientY = event.changedTouches[0].clientY;
                break;
              default:
                clientX = event.touches[0].clientX;
                clientY = event.touches[0].clientY;
            }
            let delta = clientX - rect.left;
            let total = rect.width;
            if (props.vertical) {
              delta = clientY - rect.top;
              total = rect.height;
            }
            const value = Number(min) + delta / total * scope.value;
            if (isRange(modelValue)) {
              const [left2, right2] = modelValue;
              const middle = (left2 + right2) / 2;
              if (value <= middle) {
                updateValue([value, right2], true);
              } else {
                updateValue([left2, value], true);
              }
            } else {
              updateValue(value, true);
            }
          },
          () => {
          }
        );
      });
      const onTouchStart = (event) => {
        if (disabled.value) {
          return;
        }
        touch.start(event);
        currentValue = props.modelValue;
        if (isRange(currentValue)) {
          startValue = currentValue.map(format);
        } else {
          startValue = format(currentValue);
        }
        dragStatus.value = "start";
        preventDefault(event, true);
      };
      const init = () => {
        useTaroRect(root).then(
          (rect) => {
            state.value.width = rect == null ? void 0 : rect.width;
            state.value.height = rect == null ? void 0 : rect.height;
          },
          () => {
          }
        );
      };
      const onTouchMove = (event) => {
        if (disabled.value) {
          return;
        }
        preventDefault(event, true);
        if (dragStatus.value === "start") {
          emit("dragStart");
        }
        touch.move(event);
        dragStatus.value = "draging";
        let delta = touch.deltaX.value;
        let total = state.value.width;
        let diff = delta / total * scope.value;
        if (props.vertical) {
          delta = touch.deltaY.value;
          total = state.value.height;
          diff = delta / total * scope.value;
        }
        if (isRange(startValue)) {
          currentValue[buttonIndex.value] = startValue[buttonIndex.value] + diff;
        } else {
          currentValue = startValue + diff;
        }
        updateValue(currentValue);
      };
      const onTouchEnd = (event) => {
        if (disabled.value) {
          return;
        }
        if (dragStatus.value === "draging") {
          updateValue(currentValue, true);
          emit("dragEnd");
        }
        dragStatus.value = "";
        preventDefault(event, true);
      };
      const curValue = (idx) => {
        const value = Array.isArray(props.modelValue) && typeof idx === "number" ? props.modelValue[idx] : Number(props.modelValue);
        return value;
      };
      vue.onMounted(() => {
        Taro.nextTick(() => {
          init();
        });
        Taro.eventCenter.once(Taro.getCurrentInstance().router.onReady, () => {
          Taro.nextTick(() => {
            init();
          });
        });
      });
      return __spreadProps(__spreadValues({
        root,
        classes,
        wrapperStyle,
        buttonStyle,
        onClick,
        onTouchStart,
        onTouchMove,
        onTouchEnd
      }, vue.toRefs(props)), {
        barStyle,
        curValue,
        buttonIndex,
        containerClasses,
        markClassName,
        marksStyle,
        marksList,
        tickStyle,
        refRandomId,
        disabled
      });
    }
  });
  const _hoisted_1$$ = {
    key: 0,
    class: "nut-range-min"
  };
  const _hoisted_2$O = ["id"];
  const _hoisted_3$D = { class: "nut-range-mark" };
  const _hoisted_4$y = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "onTouchstart"];
  const _hoisted_5$o = {
    key: 0,
    class: "number"
  };
  const _hoisted_6$i = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax"];
  const _hoisted_7$h = {
    key: 0,
    class: "number"
  };
  const _hoisted_8$b = {
    key: 1,
    class: "nut-range-max"
  };
  function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.containerClasses)
    }, [
      !_ctx.hiddenRange ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$$, vue.toDisplayString(+_ctx.min), 1)) : vue.createCommentVNode("", true),
      _cache[11] || (_cache[11] = vue.createTextVNode()),
      vue.createElementVNode("view", {
        id: "root-" + _ctx.refRandomId,
        ref: "root",
        style: vue.normalizeStyle(_ctx.wrapperStyle),
        class: vue.normalizeClass(_ctx.classes),
        onClick: _cache[9] || (_cache[9] = vue.withModifiers((...args) => _ctx.onClick && _ctx.onClick(...args), ["stop"]))
      }, [
        vue.createElementVNode("view", _hoisted_3$D, [
          _ctx.marksList.length > 0 ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(_ctx.marksList, (marks) => {
            return vue.openBlock(), vue.createElementBlock("span", {
              key: marks,
              class: vue.normalizeClass(_ctx.markClassName(marks)),
              style: vue.normalizeStyle(_ctx.marksStyle(marks))
            }, [
              vue.createTextVNode(vue.toDisplayString(marks) + " ", 1),
              vue.createElementVNode("span", {
                class: "nut-range-tick",
                style: vue.normalizeStyle(_ctx.tickStyle(marks))
              }, null, 4)
            ], 6);
          }), 128)) : vue.createCommentVNode("", true)
        ]),
        _cache[10] || (_cache[10] = vue.createTextVNode()),
        vue.createElementVNode("view", {
          class: "nut-range-bar",
          style: vue.normalizeStyle(_ctx.barStyle)
        }, [
          _ctx.range ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList([0, 1], (index) => {
            return vue.createElementVNode("view", {
              key: index,
              role: "slider",
              class: vue.normalizeClass({
                "nut-range-button-wrapper-left": index == 0,
                "nut-range-button-wrapper-right": index == 1
              }),
              "catch-move": true,
              tabindex: _ctx.disabled ? -1 : 0,
              "aria-valuemin": +_ctx.min,
              "aria-valuenow": _ctx.curValue(index),
              "aria-valuemax": +_ctx.max,
              "aria-orientation": "horizontal",
              onTouchstart: (e) => {
                if (typeof index === "number") {
                  _ctx.buttonIndex = index;
                }
                _ctx.onTouchStart(e);
              },
              onTouchmove: _cache[0] || (_cache[0] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
              onTouchend: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
              onTouchcancel: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
              onClick: _cache[3] || (_cache[3] = (e) => e.stopPropagation())
            }, [
              _ctx.$slots.button ? vue.renderSlot(_ctx.$slots, "button", { key: 0 }) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "nut-range-button",
                style: vue.normalizeStyle(_ctx.buttonStyle)
              }, [
                !_ctx.hiddenTag ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$o, vue.toDisplayString(_ctx.curValue(index)), 1)) : vue.createCommentVNode("", true)
              ], 4))
            ], 42, _hoisted_4$y);
          }), 64)) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            role: "slider",
            class: "nut-range-button-wrapper",
            tabindex: _ctx.disabled ? -1 : 0,
            "aria-valuemin": +_ctx.min,
            "aria-valuenow": _ctx.curValue(),
            "aria-valuemax": +_ctx.max,
            "aria-orientation": "horizontal",
            "catch-move": true,
            onTouchstart: _cache[4] || (_cache[4] = (e) => {
              _ctx.onTouchStart(e);
            }),
            onTouchmove: _cache[5] || (_cache[5] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
            onTouchend: _cache[6] || (_cache[6] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
            onTouchcancel: _cache[7] || (_cache[7] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
            onClick: _cache[8] || (_cache[8] = (e) => e.stopPropagation())
          }, [
            _ctx.$slots.button ? vue.renderSlot(_ctx.$slots, "button", { key: 0 }) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "nut-range-button",
              style: vue.normalizeStyle(_ctx.buttonStyle)
            }, [
              !_ctx.hiddenTag ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_7$h, vue.toDisplayString(_ctx.curValue()), 1)) : vue.createCommentVNode("", true)
            ], 4))
          ], 40, _hoisted_6$i))
        ], 4)
      ], 14, _hoisted_2$O),
      _cache[12] || (_cache[12] = vue.createTextVNode()),
      !_ctx.hiddenRange ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_8$b, vue.toDisplayString(+_ctx.max), 1)) : vue.createCommentVNode("", true)
    ], 2);
  }
  const Range = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["render", _sfc_render$P]]);
  const { create: create$Q } = createComponent("searchbar");
  const cN$k = "NutSearchbar";
  const _sfc_main$1g = create$Q({
    props: {
      modelValue: {
        type: [String, Number],
        default: ""
      },
      inputType: {
        type: String,
        default: "text"
      },
      shape: {
        type: String,
        default: "round"
      },
      maxLength: {
        type: [String, Number],
        default: "9999"
      },
      placeholder: {
        type: String,
        default: ""
      },
      clearable: {
        type: Boolean,
        default: true
      },
      clearIcon: {
        type: Object,
        default: () => iconsVueTaro.CircleClose
      },
      background: {
        type: String,
        default: ""
      },
      inputBackground: {
        type: String,
        default: ""
      },
      focusStyle: {
        type: Object,
        default: () => ({})
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      inputAlign: {
        type: String,
        default: "left"
      },
      confirmType: {
        type: String,
        default: "done"
      },
      safeAreaInsetBottom: {
        type: Boolean,
        default: false
      },
      cursorSpacing: {
        type: Number,
        default: 0
      }
    },
    emits: [
      "change",
      "update:modelValue",
      "blur",
      "focus",
      "clear",
      "search",
      "clickInput",
      "clickLeftIcon",
      "clickRightIcon"
    ],
    setup(props, { emit }) {
      const disabled = useFormDisabled(vue.toRef(props, "disabled"));
      const translate = useLocale(cN$k);
      const state = vue.reactive({
        active: false
      });
      const searchbarStyle = vue.computed(() => {
        return {
          background: props.background
        };
      });
      const inputSearchbarStyle = vue.computed(() => {
        return {
          background: props.inputBackground
        };
      });
      const valueChange = (event) => {
        const input = event.target;
        let val = input.value;
        if (props.maxLength && val.length > Number(props.maxLength)) {
          val = val.slice(0, Number(props.maxLength));
        }
        emit("update:modelValue", val, event);
        emit("change", val, event);
      };
      const focusCss = vue.ref({});
      const valueFocus = (event) => {
        const input = event.target;
        let value = input.value;
        state.active = true;
        focusCss.value = props.focusStyle;
        emit("focus", value, event);
      };
      const valueBlur = (event) => {
        setTimeout(() => {
          state.active = false;
        }, 0);
        const input = event.target;
        let value = input.value;
        if (props.maxLength && value.length > Number(props.maxLength)) {
          value = value.slice(0, Number(props.maxLength));
        }
        focusCss.value = {};
        emit("blur", value, event);
      };
      const handleClear = (event) => {
        emit("update:modelValue", "", event);
        emit("change", "", event);
        emit("clear", "");
      };
      const handleSubmit = () => {
        emit("search", props.modelValue);
      };
      const clickInput = (event) => {
        emit("clickInput", event);
      };
      const leftIconClick = (event) => {
        emit("clickLeftIcon", props.modelValue, event);
      };
      const rightIconClick = (event) => {
        emit("clickRightIcon", props.modelValue, event);
      };
      const styleSearchbar = vue.computed(() => {
        const style = {
          textAlign: props.inputAlign
        };
        return style;
      });
      const inputsearch = vue.ref(null);
      vue.onMounted(() => {
        if (props.autofocus) {
          inputsearch.value.focus();
        }
      });
      return __spreadProps(__spreadValues({
        renderIcon,
        inputsearch
      }, vue.toRefs(state)), {
        valueChange,
        valueFocus,
        valueBlur,
        handleClear,
        handleSubmit,
        searchbarStyle,
        inputSearchbarStyle,
        focusCss,
        translate,
        clickInput,
        leftIconClick,
        rightIconClick,
        styleSearchbar,
        disabled
      });
    }
  });
  const _hoisted_1$_ = {
    key: 0,
    class: "nut-searchbar__search-icon nut-searchbar__left-search-icon"
  };
  const _hoisted_2$N = {
    key: 0,
    class: "nut-searchbar__search-icon nut-searchbar__iptleft-search-icon"
  };
  const _hoisted_3$C = ["type", "maxlength", "placeholder", "value", "confirm-type", "disabled", "readonly", "cursor-spacing"];
  const _hoisted_4$x = {
    key: 1,
    class: "nut-searchbar__search-icon nut-searchbar__iptright-search-icon"
  };
  const _hoisted_5$n = {
    key: 1,
    class: "nut-searchbar__search-icon nut-searchbar__right-search-icon"
  };
  function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["nut-searchbar", { "safe-area-inset-bottom": _ctx.safeAreaInsetBottom }]),
      style: vue.normalizeStyle(_ctx.searchbarStyle)
    }, [
      _ctx.$slots.leftout ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$_, [
        vue.renderSlot(_ctx.$slots, "leftout")
      ])) : vue.createCommentVNode("", true),
      _cache[10] || (_cache[10] = vue.createTextVNode()),
      vue.createElementVNode("view", {
        class: vue.normalizeClass([`nut-searchbar__search-input`, _ctx.shape]),
        style: vue.normalizeStyle(__spreadValues(__spreadValues({}, _ctx.inputSearchbarStyle), _ctx.focusCss))
      }, [
        _ctx.$slots.leftin ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$N, [
          vue.renderSlot(_ctx.$slots, "leftin")
        ])) : vue.createCommentVNode("", true),
        _cache[8] || (_cache[8] = vue.createTextVNode()),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["nut-searchbar__input-inner", _ctx.$slots.rightin && "nut-searchbar__input-inner-absolute"])
        }, [
          vue.createElementVNode("form", {
            class: "nut-searchbar__input-form",
            action: "#",
            onsubmit: "return false",
            onSubmit: _cache[5] || (_cache[5] = vue.withModifiers((...args) => _ctx.handleSubmit && _ctx.handleSubmit(...args), ["prevent"]))
          }, [
            vue.createElementVNode("input", {
              ref: "inputsearch",
              class: vue.normalizeClass(["nut-searchbar__input-bar", _ctx.clearable && "nut-searchbar__input-bar_clear"]),
              type: _ctx.inputType,
              maxlength: _ctx.maxLength,
              placeholder: _ctx.placeholder || _ctx.translate("placeholder"),
              value: _ctx.modelValue,
              "confirm-type": _ctx.confirmType,
              disabled: _ctx.disabled ? _ctx.disabled : void 0,
              readonly: _ctx.readonly ? _ctx.readonly : void 0,
              style: vue.normalizeStyle(_ctx.styleSearchbar),
              "cursor-spacing": _ctx.cursorSpacing,
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickInput && _ctx.clickInput(...args)),
              onInput: _cache[1] || (_cache[1] = (...args) => _ctx.valueChange && _ctx.valueChange(...args)),
              onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.valueFocus && _ctx.valueFocus(...args)),
              onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.valueBlur && _ctx.valueBlur(...args)),
              onConfirm: _cache[4] || (_cache[4] = (...args) => _ctx.handleSubmit && _ctx.handleSubmit(...args))
            }, null, 46, _hoisted_3$C)
          ], 32)
        ], 2),
        _cache[9] || (_cache[9] = vue.createTextVNode()),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["nut-searchbar__input-inner-icon", _ctx.$slots.rightin && "nut-searchbar__input-inner-icon-absolute"])
        }, [
          _ctx.clearable ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "nut-searchbar__search-icon nut-searchbar__input-clear",
            onClick: _cache[6] || (_cache[6] = (...args) => _ctx.handleClear && _ctx.handleClear(...args))
          }, [
            _ctx.$slots["clear-icon"] ? vue.renderSlot(_ctx.$slots, "clear-icon", { key: 0 }) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.renderIcon(_ctx.clearIcon)), { key: 1 }))
          ], 512)), [
            [vue.vShow, String(_ctx.modelValue).length > 0]
          ]) : vue.createCommentVNode("", true),
          _cache[7] || (_cache[7] = vue.createTextVNode()),
          _ctx.$slots.rightin ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$x, [
            vue.renderSlot(_ctx.$slots, "rightin")
          ])) : vue.createCommentVNode("", true)
        ], 2)
      ], 6),
      _cache[11] || (_cache[11] = vue.createTextVNode()),
      _ctx.$slots.rightout ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$n, [
        vue.renderSlot(_ctx.$slots, "rightout")
      ])) : vue.createCommentVNode("", true)
    ], 6);
  }
  const Searchbar = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["render", _sfc_render$O]]);
  const formatTree = (tree, parent, config) => tree.map((node) => {
    const { value: valueKey = "value", text: textKey = "text", children: childrenKey = "children" } = config;
    const _a = node, { [valueKey]: value, [textKey]: text, [childrenKey]: children } = _a, others = __objRest(_a, [__restKey(valueKey), __restKey(textKey), __restKey(childrenKey)]);
    const newNode = __spreadProps(__spreadValues({
      loading: false
    }, others), {
      level: parent ? (parent && parent.level || 0) + 1 : 0,
      value,
      text,
      children,
      _parent: parent
    });
    if (newNode.children && newNode.children.length) {
      newNode.children = formatTree(newNode.children, newNode, config);
    }
    return newNode;
  });
  const eachTree = (tree, cb) => {
    let i = 0;
    let node;
    while (node = tree[i++]) {
      if (cb(node) === true) {
        break;
      }
      if (node.children && node.children.length) {
        eachTree(node.children, cb);
      }
    }
  };
  const defaultConvertConfig = {
    topId: null,
    idKey: "id",
    pidKey: "pid",
    sortKey: ""
  };
  const convertListToOptions = (list, options) => {
    const mergedOptions = __spreadValues(__spreadValues({}, defaultConvertConfig), options || {});
    const { topId, idKey, pidKey, sortKey } = mergedOptions;
    let result = [];
    let map = {};
    list.forEach((node) => {
      node = __spreadValues({}, node);
      const { [idKey]: id, [pidKey]: pid } = node;
      const children = map[pid] = map[pid] || [];
      if (!result.length && pid === topId) {
        result = children;
      }
      children.push(node);
      node.children = map[id] || (map[id] = []);
    });
    if (sortKey) {
      Object.keys(map).forEach((i) => {
        if (map[i].length > 1) {
          map[i].sort((a, b) => a[sortKey] - b[sortKey]);
        }
      });
    }
    map = null;
    return result;
  };
  class Tree {
    constructor(nodes, config) {
      __publicField(this, "nodes");
      __publicField(this, "config");
      this.config = __spreadValues({
        value: "value",
        text: "text",
        children: "children"
      }, config || {});
      this.nodes = formatTree(nodes, null, this.config);
    }
    updateChildren(nodes, parent) {
      if (!parent) {
        this.nodes = formatTree(nodes, null, this.config);
      } else {
        parent.children = formatTree(nodes, parent, this.config);
      }
    }
    // for test
    getNodeByValue(value) {
      let foundNode;
      eachTree(this.nodes, (node) => {
        if (node.value === value) {
          foundNode = node;
          return true;
        }
      });
      return foundNode;
    }
    getPathNodesByValue(value) {
      if (!value.length) {
        return [];
      }
      const pathNodes = [];
      let currentNodes = this.nodes;
      while (currentNodes && currentNodes.length) {
        const foundNode = currentNodes.find((node) => node.value === value[node.level]);
        if (!foundNode) {
          break;
        }
        pathNodes.push(foundNode);
        currentNodes = foundNode.children;
      }
      return pathNodes;
    }
    isLeaf(node, lazy) {
      const { leaf, children } = node;
      const hasChildren = Array.isArray(children) && Boolean(children.length);
      return leaf || !hasChildren && !lazy;
    }
    hasChildren(node, lazy) {
      const isLeaf = this.isLeaf(node, lazy);
      if (isLeaf) {
        return false;
      }
      const { children } = node;
      return Array.isArray(children) && Boolean(children.length);
    }
  }
  const { create: create$P } = createComponent("cascader-item");
  const _sfc_main$1f = create$P({
    components: {
      Loading: iconsVueTaro.Loading,
      Checklist: iconsVueTaro.Checklist,
      NutTabs: Tabs,
      NutTabPane: TabPane,
      NutScrollView: _sfc_main$1u
    },
    props: {
      visible: Boolean,
      modelValue: Array,
      options: {
        type: Array,
        default: () => []
      },
      lazy: Boolean,
      lazyLoad: Function,
      valueKey: {
        type: String,
        default: "value"
      },
      textKey: {
        type: String,
        default: "text"
      },
      childrenKey: {
        type: String,
        default: "children"
      },
      convertConfig: Object
    },
    emits: ["update:modelValue", "change", "pathChange"],
    setup(props, { emit }) {
      const translate = useLocale();
      const configs = vue.computed(() => ({
        lazy: props.lazy,
        lazyLoad: props.lazyLoad,
        valueKey: props.valueKey,
        textKey: props.textKey,
        childrenKey: props.childrenKey,
        convertConfig: props.convertConfig
      }));
      const tabsCursor = vue.ref(0);
      const initLoading = vue.ref(false);
      const innerValue = vue.ref(props.modelValue);
      const tree = vue.ref(new Tree([], {}));
      const panes = vue.ref([]);
      const isLazy = vue.computed(() => configs.value.lazy && Boolean(configs.value.lazyLoad));
      const lazyLoadMap = /* @__PURE__ */ new Map();
      let currentProcessNode;
      const init = () => __async(this, null, function* () {
        lazyLoadMap.clear();
        panes.value = [];
        tabsCursor.value = 0;
        initLoading.value = false;
        currentProcessNode = null;
        let { options } = props;
        if (configs.value.convertConfig) {
          options = convertListToOptions(options, configs.value.convertConfig);
        }
        tree.value = new Tree(options, {
          value: configs.value.valueKey,
          text: configs.value.textKey,
          children: configs.value.childrenKey
        });
        if (isLazy.value && !tree.value.nodes.length) {
          yield invokeLazyLoad({
            root: true,
            loading: true,
            text: "",
            value: ""
          });
        }
        panes.value = [{ nodes: tree.value.nodes, selectedNode: null }];
        syncValue();
      });
      const syncValue = () => __async(this, null, function* () {
        const currentValue = innerValue.value;
        if (currentValue === void 0 || !tree.value.nodes.length) {
          return;
        }
        if (currentValue.length === 0) {
          tabsCursor.value = 0;
          panes.value = [{ nodes: tree.value.nodes, selectedNode: null }];
          return;
        }
        let needToSync = currentValue;
        if (isLazy.value && Array.isArray(currentValue) && currentValue.length) {
          needToSync = [];
          let parent = tree.value.nodes.find((node) => node.value === currentValue[0]);
          if (parent) {
            needToSync = [parent.value];
            initLoading.value = true;
            const last = yield currentValue.slice(1).reduce((p, value) => __async(this, null, function* () {
              var _a2;
              const parent2 = yield p;
              yield invokeLazyLoad(parent2);
              const node = (_a2 = parent2 == null ? void 0 : parent2.children) == null ? void 0 : _a2.find((item) => item.value === value);
              if (node) {
                needToSync.push(value);
              }
              return Promise.resolve(node);
            }), Promise.resolve(parent));
            yield invokeLazyLoad(last);
            initLoading.value = false;
          }
        }
        if (needToSync.length && currentValue === props.modelValue) {
          const pathNodes = tree.value.getPathNodesByValue(needToSync);
          pathNodes.map((node, index) => {
            tabsCursor.value = index;
            methods.handleNode(node, true);
          });
        }
      });
      const invokeLazyLoad = (node) => __async(this, null, function* () {
        if (!node) {
          return;
        }
        if (!configs.value.lazyLoad) {
          node.leaf = true;
          return;
        }
        if (tree.value.isLeaf(node, isLazy.value) || tree.value.hasChildren(node, isLazy.value)) {
          return;
        }
        node.loading = true;
        const parent = node.root ? null : node;
        let lazyLoadPromise = lazyLoadMap.get(node);
        if (!lazyLoadPromise) {
          lazyLoadPromise = new Promise((resolve) => {
            var _a2, _b;
            (_b = (_a2 = configs.value).lazyLoad) == null ? void 0 : _b.call(_a2, node, resolve);
          });
          lazyLoadMap.set(node, lazyLoadPromise);
        }
        const nodes = yield lazyLoadPromise;
        if (Array.isArray(nodes) && nodes.length > 0) {
          tree.value.updateChildren(nodes, parent);
        } else {
          node.leaf = true;
        }
        node.loading = false;
        lazyLoadMap.delete(node);
      });
      const emitChange = (pathNodes) => {
        const emitValue = pathNodes.map((node) => node.value);
        innerValue.value = emitValue;
        emit("change", emitValue, pathNodes);
        emit("update:modelValue", emitValue, pathNodes);
      };
      const methods = {
        // 选中一个节点，静默模式不触发事件
        handleNode(node, silent) {
          return __async(this, null, function* () {
            const { disabled, loading } = node;
            if (!silent && disabled || !panes.value[tabsCursor.value]) {
              return;
            }
            if (tree.value.isLeaf(node, isLazy.value)) {
              node.leaf = true;
              panes.value[tabsCursor.value].selectedNode = node;
              panes.value = panes.value.slice(0, node.level + 1);
              if (!silent) {
                const pathNodes = panes.value.map((pane) => pane.selectedNode);
                emitChange(pathNodes);
                emit("pathChange", pathNodes);
              }
              return;
            }
            if (tree.value.hasChildren(node, isLazy.value)) {
              const level = node.level + 1;
              panes.value[tabsCursor.value].selectedNode = node;
              panes.value = panes.value.slice(0, level);
              panes.value.push({
                nodes: node.children || [],
                selectedNode: null
              });
              tabsCursor.value = level;
              if (!silent) {
                const pathNodes = panes.value.map((pane) => pane.selectedNode);
                emit("pathChange", pathNodes);
              }
              return;
            }
            currentProcessNode = node;
            if (loading) {
              return;
            }
            yield invokeLazyLoad(node);
            if (currentProcessNode === node) {
              panes.value[tabsCursor.value].selectedNode = node;
              methods.handleNode(node, silent);
            }
          });
        },
        handleTabClick(tab) {
          currentProcessNode = null;
          tabsCursor.value = Number(tab.paneKey);
        },
        formatTabTitle(pane) {
          return pane.selectedNode ? pane.selectedNode.text : translate("select");
        },
        isSelected(pane, node) {
          var _a2;
          return ((_a2 = pane == null ? void 0 : pane.selectedNode) == null ? void 0 : _a2.value) === node.value;
        }
      };
      vue.watch(
        [configs, () => props.options],
        () => {
          init();
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props.modelValue,
        (value) => {
          if (value !== innerValue.value) {
            innerValue.value = value;
            syncValue();
          }
        }
      );
      vue.watch(
        () => props.visible,
        (val) => {
          if (val && Array.isArray(innerValue.value) && innerValue.value.length > 0) {
            syncValue();
          }
        }
      );
      return __spreadValues({ panes, initLoading, tabsCursor }, methods);
    }
  });
  const _hoisted_1$Z = {
    role: "menu",
    class: "nut-cascader-pane"
  };
  const _hoisted_2$M = ["aria-checked", "aria-disabled", "onClick"];
  const _hoisted_3$B = { class: "nut-cascader-item__title" };
  function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Loading = vue.resolveComponent("Loading");
    const _component_Checklist = vue.resolveComponent("Checklist");
    const _component_nut_scroll_view = vue.resolveComponent("nut-scroll-view");
    const _component_nut_tab_pane = vue.resolveComponent("nut-tab-pane");
    const _component_nut_tabs = vue.resolveComponent("nut-tabs");
    return vue.openBlock(), vue.createBlock(_component_nut_tabs, {
      modelValue: _ctx.tabsCursor,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.tabsCursor = $event),
      class: "nut-cascader",
      "title-scroll": "",
      onClick: _ctx.handleTabClick
    }, {
      default: vue.withCtx(() => [
        !_ctx.initLoading && _ctx.panes.length ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(_ctx.panes, (pane, index) => {
          return vue.openBlock(), vue.createBlock(_component_nut_tab_pane, {
            key: index,
            title: _ctx.formatTabTitle(pane)
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", _hoisted_1$Z, [
                vue.createVNode(_component_nut_scroll_view, {
                  "scroll-y": true,
                  style: { "height": "100%" }
                }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(pane.nodes, (node) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        key: node.value,
                        class: vue.normalizeClass(["nut-cascader-item", { active: _ctx.isSelected(pane, node), disabled: node.disabled }]),
                        "aria-checked": _ctx.isSelected(pane, node),
                        "aria-disabled": node.disabled || void 0,
                        role: "menuitemradio",
                        onClick: ($event) => _ctx.handleNode(node, false)
                      }, [
                        vue.createElementVNode("view", _hoisted_3$B, vue.toDisplayString(node.text), 1),
                        _cache[1] || (_cache[1] = vue.createTextVNode()),
                        node.loading ? (vue.openBlock(), vue.createBlock(_component_Loading, {
                          key: 0,
                          class: "nut-cascader-item__icon-loading",
                          name: "loading"
                        })) : (vue.openBlock(), vue.createBlock(_component_Checklist, {
                          key: 1,
                          class: "nut-cascader-item__icon-check",
                          name: "checklist"
                        }))
                      ], 10, _hoisted_2$M);
                    }), 128))
                  ]),
                  _: 2
                }, 1024)
              ])
            ]),
            _: 2
          }, 1032, ["title"]);
        }), 128)) : (vue.openBlock(), vue.createBlock(_component_nut_tab_pane, {
          key: 1,
          title: "Loading..."
        }, {
          default: vue.withCtx(() => _cache[2] || (_cache[2] = [
            vue.createElementVNode("view", { class: "nut-cascader-pane" }, null, -1)
          ])),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["modelValue", "onClick"]);
  }
  const NutCascaderItem = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["render", _sfc_render$N]]);
  const { create: create$O } = createComponent("cascader");
  const _sfc_main$1e = create$O({
    components: {
      NutCascaderItem,
      NutPopup: Popup
    },
    props: __spreadProps(__spreadValues({}, popupProps), {
      modelValue: Array,
      visible: Boolean,
      title: String,
      options: {
        type: Array,
        default: () => []
      },
      lazy: Boolean,
      lazyLoad: Function,
      valueKey: {
        type: String,
        default: "value"
      },
      textKey: {
        type: String,
        default: "text"
      },
      childrenKey: {
        type: String,
        default: "children"
      },
      poppable: {
        type: Boolean,
        default: true
      },
      convertConfig: Object
    }),
    emits: ["update:modelValue", "change", "pathChange", "update:visible"],
    setup(props, { emit }) {
      const innerValue = vue.ref(props.modelValue);
      const innerVisible = vue.computed({
        get() {
          return props.visible;
        },
        set(value) {
          emit("update:visible", value);
        }
      });
      const onChange = (value, pathNodes) => {
        innerValue.value = value;
        innerVisible.value = false;
        emit("change", value, pathNodes);
        emit("update:modelValue", value);
      };
      const onPathChange = (pathNodes) => {
        emit("pathChange", pathNodes);
      };
      vue.watch(
        () => props.modelValue,
        (value) => {
          if (value !== innerValue.value) {
            innerValue.value = value;
          }
        }
      );
      return {
        onChange,
        onPathChange,
        innerValue,
        innerVisible
      };
    }
  });
  const _hoisted_1$Y = ["innerHTML"];
  function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_cascader_item = vue.resolveComponent("nut-cascader-item");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return _ctx.poppable ? (vue.openBlock(), vue.createBlock(_component_nut_popup, {
      key: 0,
      visible: _ctx.innerVisible,
      "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => _ctx.innerVisible = $event),
      position: "bottom",
      "pop-class": "nut-cascader__popup",
      round: "",
      closeable: _ctx.closeable,
      "destroy-on-close": false,
      "close-icon-position": _ctx.closeIconPosition,
      "lock-scroll": _ctx.lockScroll,
      "catch-move": _ctx.lockScroll,
      "z-index": _ctx.zIndex
    }, {
      default: vue.withCtx(() => [
        _ctx.title ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "nut-cascader__bar",
          innerHTML: _ctx.title
        }, null, 8, _hoisted_1$Y)) : vue.createCommentVNode("", true),
        _cache[1] || (_cache[1] = vue.createTextVNode()),
        vue.createVNode(_component_nut_cascader_item, {
          "model-value": _ctx.innerValue,
          options: _ctx.options,
          lazy: _ctx.lazy,
          "lazy-load": _ctx.lazyLoad,
          "value-key": _ctx.valueKey,
          "text-key": _ctx.textKey,
          "children-key": _ctx.childrenKey,
          "convert-config": _ctx.convertConfig,
          visible: _ctx.innerVisible,
          onChange: _ctx.onChange,
          onPathChange: _ctx.onPathChange
        }, null, 8, ["model-value", "options", "lazy", "lazy-load", "value-key", "text-key", "children-key", "convert-config", "visible", "onChange", "onPathChange"])
      ]),
      _: 1
    }, 8, ["visible", "closeable", "close-icon-position", "lock-scroll", "catch-move", "z-index"])) : (vue.openBlock(), vue.createBlock(_component_nut_cascader_item, {
      key: 1,
      "model-value": _ctx.innerValue,
      options: _ctx.options,
      lazy: _ctx.lazy,
      "lazy-load": _ctx.lazyLoad,
      "value-key": _ctx.valueKey,
      "text-key": _ctx.textKey,
      "children-key": _ctx.childrenKey,
      "convert-config": _ctx.convertConfig,
      visible: _ctx.innerVisible,
      onChange: _ctx.onChange,
      onPathChange: _ctx.onPathChange
    }, null, 8, ["model-value", "options", "lazy", "lazy-load", "value-key", "text-key", "children-key", "convert-config", "visible", "onChange", "onPathChange"]));
  }
  const Cascader = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["render", _sfc_render$M]]);
  const Utils = {
    /**
     * 是否为闫年
     * @return {Boolse} true|false
     */
    isLeapYear: function(y) {
      return y % 4 == 0 && y % 100 != 0 || y % 400 == 0;
    },
    /**
     * 返回星期数
     * @return {String}
     */
    getWhatDay: function(year, month, day) {
      const date = /* @__PURE__ */ new Date(year + "/" + month + "/" + day);
      const index = date.getDay();
      const dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
      return dayNames[index];
    },
    /**
     * 返回星期数
     * @return {Number}
     */
    getMonthPreDay: function(year, month) {
      const date = /* @__PURE__ */ new Date(year + "/" + month + "/01");
      let day = date.getDay();
      if (day == 0) {
        day = 7;
      }
      return day;
    },
    /**
     * 返回月份天数
     * @return {Number}
     */
    getMonthDays: function(year, month) {
      if (/^0/.test(month)) {
        month = month.split("")[1];
      }
      return [0, 31, this.isLeapYear(Number(year)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },
    /**
     * 补齐数字位数
     * @return {string}
     */
    getNumTwoBit: function(n) {
      n = Number(n);
      return (n > 9 ? "" : "0") + n;
    },
    /**
     * 日期对象转成字符串
     * @return {string}
     */
    date2Str: function(date, split) {
      split = split || "-";
      const y = date.getFullYear();
      const m = this.getNumTwoBit(date.getMonth() + 1);
      const d = this.getNumTwoBit(date.getDate());
      return [y, m, d].join(split);
    },
    /**
     * 返回日期格式字符串
     * @param {Number} 0返回今天的日期、1返回明天的日期，2返回后天得日期，依次类推
     * @return {string} '2014-12-31'
     */
    getDay: function(i) {
      i = i || 0;
      let date = /* @__PURE__ */ new Date();
      const diff = i * (1e3 * 60 * 60 * 24);
      date = new Date(date.getTime() + diff);
      return this.date2Str(date);
    },
    /**
     * 时间比较
     * @return {Boolean}
     */
    compareDate: function(date1, date2) {
      const startTime = new Date(date1.replace("-", "/").replace("-", "/"));
      const endTime = new Date(date2.replace("-", "/").replace("-", "/"));
      if (startTime >= endTime) {
        return false;
      }
      return true;
    },
    /**
     * 时间是否相等
     * @return {Boolean}
     */
    isEqual: function(date1, date2) {
      const startTime = new Date(date1).getTime();
      const endTime = new Date(date2).getTime();
      if (startTime == endTime) {
        return true;
      }
      return false;
    },
    getMonthWeek: function(year, month, date, firstDayOfWeek = 0) {
      const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date));
      let w = dateNow.getDay();
      const d = dateNow.getDate();
      let remainder = 6 - w;
      if (firstDayOfWeek !== 0) {
        w = w == 0 ? 7 : w;
        remainder = 7 - w;
      }
      return Math.ceil((d + remainder) / 7);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getYearWeek: function(year, month, date, firstDayOfWeek = 0) {
      const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date));
      const dateFirst = new Date(Number(year), 0, 1);
      const dataNumber = Math.round((dateNow.valueOf() - dateFirst.valueOf()) / 864e5);
      return Math.ceil((dataNumber + (dateFirst.getDay() + 1 - 1)) / 7);
    },
    getWeekDate: function(year, month, date, firstDayOfWeek = 0) {
      const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date));
      const nowTime = dateNow.getTime();
      let day = dateNow.getDay();
      if (firstDayOfWeek === 0) {
        const oneDayTime = 24 * 60 * 60 * 1e3;
        const SundayTime = nowTime - day * oneDayTime;
        const SaturdayTime = nowTime + (6 - day) * oneDayTime;
        const sunday = this.date2Str(new Date(SundayTime));
        const saturday = this.date2Str(new Date(SaturdayTime));
        return [sunday, saturday];
      } else {
        day = day == 0 ? 7 : day;
        const oneDayTime = 24 * 60 * 60 * 1e3;
        const MondayTime = nowTime - (day - 1) * oneDayTime;
        const SundayTime = nowTime + (7 - day) * oneDayTime;
        const monday = this.date2Str(new Date(MondayTime));
        const sunday = this.date2Str(new Date(SundayTime));
        return [monday, sunday];
      }
    },
    formatResultDate: function(date) {
      const days = [...date.split("-")];
      days[2] = Utils.getNumTwoBit(Number(days[2]));
      days[3] = `${days[0]}-${days[1]}-${days[2]}`;
      days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2]);
      return days;
    }
  };
  const { create: create$N } = createComponent("calendar-item");
  const cN$j = "NutCalendarItem";
  const TARO_ENV = Taro.getEnv();
  const _sfc_main$1d = create$N({
    components: {
      NutScrollView: _sfc_main$1u
    },
    props: {
      type: {
        type: String,
        default: "one"
      },
      isAutoBackFill: {
        type: Boolean,
        default: false
      },
      toDateAnimation: {
        type: Boolean,
        default: true
      },
      poppable: {
        type: Boolean,
        default: true
      },
      showTitle: {
        type: Boolean,
        default: true
      },
      showSubTitle: {
        type: Boolean,
        default: true
      },
      showToday: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: ""
      },
      confirmText: {
        type: String,
        default: ""
      },
      startText: {
        type: String,
        default: ""
      },
      endText: {
        type: String,
        default: ""
      },
      defaultValue: {
        type: [String, Array],
        default: ""
      },
      startDate: {
        type: String,
        default: Utils.getDay(0)
      },
      endDate: {
        type: String,
        default: Utils.getDay(365)
      },
      firstDayOfWeek: {
        type: Number,
        default: 0
      },
      disabledDate: Function
    },
    emits: ["choose", "update", "close", "select"],
    setup(props, { emit, slots, expose }) {
      const translate = useLocale(cN$j);
      const weekdays = translate("weekdays").map((day, index) => ({
        day,
        weekend: index === 0 || index === 6
      }));
      const weeks = vue.ref([...weekdays.slice(props.firstDayOfWeek, 7), ...weekdays.slice(0, props.firstDayOfWeek)]);
      const scalePx = vue.ref(2);
      const months = vue.ref(null);
      const viewHeight = vue.ref(0);
      const compConthsData = vue.computed(() => {
        return state.monthsData.slice(state.defaultRange[0], state.defaultRange[1]);
      });
      const scrollWithAnimation = vue.ref(false);
      const showTopBtn = vue.computed(() => {
        return slots.btn;
      });
      const topInfo = vue.computed(() => {
        return slots["top-info"];
      });
      const bottomInfo = vue.computed(() => {
        return slots["bottom-info"];
      });
      const state = vue.reactive({
        yearMonthTitle: "",
        defaultRange: [],
        containerHeight: "100%",
        currDate: "",
        propStartDate: "",
        propEndDate: "",
        unLoadPrev: false,
        touchParams: {
          startY: 0,
          endY: 0,
          startTime: 0,
          endTime: 0,
          lastY: 0,
          lastTime: 0
        },
        transformY: 0,
        translateY: 0,
        scrollDistance: 0,
        defaultData: [],
        chooseData: [],
        monthsData: [],
        dayPrefix: "nut-calendar__day",
        startData: "",
        endData: "",
        isRange: props.type === "range",
        timer: 0,
        currentIndex: 0,
        avgHeight: 0,
        scrollTop: 0,
        monthsNum: 0
      });
      const splitDate = (date) => {
        return date.split("-");
      };
      const isStart = (currDate) => {
        return Utils.isEqual(state.currDate[0], currDate);
      };
      const isEnd = (currDate) => {
        return Utils.isEqual(state.currDate[1], currDate);
      };
      const isMultiple = (currDate) => {
        var _a, _b;
        if (((_a = state.currDate) == null ? void 0 : _a.length) > 0) {
          return (_b = state.currDate) == null ? void 0 : _b.some((item) => {
            return Utils.isEqual(item, currDate);
          });
        } else {
          return false;
        }
      };
      const getCurrDate = (day, month) => {
        return month.curData[0] + "-" + month.curData[1] + "-" + Utils.getNumTwoBit(+day.day);
      };
      const getClass = (day, month, index) => {
        const res = [];
        if (typeof index === "number" && ((index + 1 + props.firstDayOfWeek) % 7 === 0 || (index + props.firstDayOfWeek) % 7 === 0)) {
          res.push("weekend");
        }
        const currDate = getCurrDate(day, month);
        const { type } = props;
        if (day.type == "curr") {
          if (Utils.isEqual(state.currDate, currDate) || (type == "range" || type == "week") && (isStart(currDate) || isEnd(currDate)) || type == "multiple" && isMultiple(currDate)) {
            res.push(`${state.dayPrefix}--active`);
          } else if (state.propStartDate && Utils.compareDate(currDate, state.propStartDate) || state.propEndDate && Utils.compareDate(state.propEndDate, currDate) || props.disabledDate && props.disabledDate(currDate)) {
            res.push(`${state.dayPrefix}--disabled`);
          } else if ((type == "range" || type == "week") && Array.isArray(state.currDate) && Object.values(state.currDate).length == 2 && Utils.compareDate(state.currDate[0], currDate) && Utils.compareDate(currDate, state.currDate[1])) {
            res.push(`${state.dayPrefix}--choose`);
          }
        } else {
          res.push(`${state.dayPrefix}--disabled`);
        }
        return res;
      };
      const confirm = () => {
        const { type } = props;
        if (type == "range" && state.chooseData.length == 2 || type != "range") {
          let selectData = state.chooseData.slice(0);
          if (type == "week") {
            selectData = {
              weekDate: [handleWeekDate(state.chooseData[0]), handleWeekDate(state.chooseData[1])]
            };
          }
          emit("choose", selectData);
          if (props.poppable) {
            emit("update");
          }
        }
      };
      const chooseDay = (day, month, isFirst = false) => {
        var _a, _b;
        if (!getClass(day, month).includes(`${state.dayPrefix}--disabled`)) {
          const { type } = props;
          let [y, m] = month.curData;
          let days = [...month.curData];
          days[2] = Utils.getNumTwoBit(Number(day.day));
          days[3] = `${days[0]}-${days[1]}-${days[2]}`;
          days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2]);
          if (type == "multiple") {
            if (((_a = state.currDate) == null ? void 0 : _a.length) > 0) {
              let hasIndex = void 0;
              (_b = state.currDate) == null ? void 0 : _b.forEach((item, index) => {
                if (item == days[3]) {
                  hasIndex = index;
                }
              });
              if (isFirst) {
                state.chooseData.push([...days]);
              } else {
                if (hasIndex !== void 0) {
                  state.currDate.splice(hasIndex, 1);
                  state.chooseData.splice(hasIndex, 1);
                } else {
                  state.currDate.push(days[3]);
                  state.chooseData.push([...days]);
                }
              }
            } else {
              state.currDate = [days[3]];
              state.chooseData = [[...days]];
            }
          } else if (type == "range") {
            let curDataLength = Object.values(state.currDate).length;
            if (curDataLength == 2 || curDataLength == 0) {
              state.currDate = [days[3]];
            } else {
              if (Utils.compareDate(state.currDate[0], days[3])) {
                Array.isArray(state.currDate) && state.currDate.push(days[3]);
              } else {
                Array.isArray(state.currDate) && state.currDate.unshift(days[3]);
              }
            }
            if (state.chooseData.length == 2 || !state.chooseData.length) {
              state.chooseData = [[...days]];
            } else {
              if (Utils.compareDate(state.chooseData[0][3], days[3])) {
                state.chooseData = [...state.chooseData, [...days]];
              } else {
                state.chooseData = [[...days], ...state.chooseData];
              }
            }
          } else if (type == "week") {
            let weekArr = Utils.getWeekDate(y, m, day.day, props.firstDayOfWeek);
            if (state.propStartDate && Utils.compareDate(weekArr[0], state.propStartDate)) {
              weekArr.splice(0, 1, state.propStartDate);
            }
            if (state.propEndDate && Utils.compareDate(state.propEndDate, weekArr[1])) {
              weekArr.splice(1, 1, state.propEndDate);
            }
            state.currDate = weekArr;
            state.chooseData = [Utils.formatResultDate(weekArr[0]), Utils.formatResultDate(weekArr[1])];
          } else {
            state.currDate = days[3];
            state.chooseData = [...days];
          }
          if (!isFirst) {
            let selectData = state.chooseData;
            if (type == "week") {
              selectData = {
                weekDate: [
                  handleWeekDate(state.chooseData[0]),
                  handleWeekDate(state.chooseData[1])
                ]
              };
            }
            emit("select", selectData);
            if (props.isAutoBackFill || !props.poppable) {
              confirm();
            }
          }
        }
      };
      const handleWeekDate = (weekDate) => {
        let [y, m, d] = weekDate;
        let obj = {
          date: weekDate,
          monthWeekNum: Utils.getMonthWeek(y, m, d, props.firstDayOfWeek),
          yearWeekNum: Utils.getYearWeek(y, m, d, props.firstDayOfWeek)
        };
        return obj;
      };
      const getCurrData = (type) => {
        const monthData = type == "prev" ? state.monthsData[0] : state.monthsData[state.monthsData.length - 1];
        let year = parseInt(monthData.curData[0]);
        let month = parseInt(monthData.curData[1].toString().replace(/^0/, ""));
        switch (type) {
          case "prev":
            month == 1 && (year -= 1);
            month = month == 1 ? 12 : --month;
            break;
          case "next":
            month == 12 && (year += 1);
            month = month == 12 ? 1 : ++month;
            break;
        }
        return [year + "", Utils.getNumTwoBit(month), Utils.getMonthDays(String(year), String(month)) + ""];
      };
      const getDaysStatus = (days, type, dateInfo) => {
        let { year, month } = dateInfo;
        if (type == "prev" && days >= 7) {
          days -= 7;
        }
        return Array.from(Array(days), (v, k) => {
          return {
            day: String(k + 1),
            type,
            year,
            month
          };
        });
      };
      const getPreDaysStatus = (days, type, dateInfo, preCurrMonthDays) => {
        days = days - props.firstDayOfWeek;
        let { year, month } = dateInfo;
        if (type == "prev" && days >= 7) {
          days -= 7;
        }
        let months2 = Array.from(Array(preCurrMonthDays), (v, k) => {
          return {
            day: String(k + 1),
            type,
            year,
            month
          };
        });
        return months2.slice(preCurrMonthDays - days);
      };
      const getMonth = (curData, type) => {
        const preMonthDays = Utils.getMonthPreDay(+curData[0], +curData[1]);
        let preMonth = Number(curData[1]) - 1;
        let preYear = Number(curData[0]);
        if (preMonth <= 0) {
          preMonth = 12;
          preYear += 1;
        }
        const currMonthDays = Utils.getMonthDays(String(curData[0]), String(curData[1]));
        const preCurrMonthDays = Utils.getMonthDays(preYear + "", preMonth + "");
        const title = {
          year: curData[0],
          month: curData[1]
        };
        const monthInfo = {
          curData,
          title: translate("monthTitle", title.year, title.month),
          monthData: [
            ...getPreDaysStatus(
              preMonthDays,
              "prev",
              { month: String(preMonth), year: String(preYear) },
              preCurrMonthDays
            ),
            ...getDaysStatus(currMonthDays, "curr", title)
          ],
          cssHeight: 0,
          cssScrollHeight: 0
        };
        let titleHeight, itemHeight;
        if (TARO_ENV === Taro.ENV_TYPE.WEB) {
          titleHeight = 46 * scalePx.value + 16 * scalePx.value * 2;
          itemHeight = 128 * scalePx.value;
        } else {
          titleHeight = Math.floor(46 * scalePx.value) + Math.floor(16 * scalePx.value) * 2;
          itemHeight = Math.floor(128 * scalePx.value);
        }
        monthInfo.cssHeight = titleHeight + (monthInfo.monthData.length > 35 ? itemHeight * 6 : itemHeight * 5);
        let cssScrollHeight = 0;
        if (state.monthsData.length > 0) {
          cssScrollHeight = state.monthsData[state.monthsData.length - 1].cssScrollHeight + state.monthsData[state.monthsData.length - 1].cssHeight;
        }
        monthInfo.cssScrollHeight = cssScrollHeight;
        if (type == "next") {
          if (!state.endData || !Utils.compareDate(
            `${state.endData[0]}-${state.endData[1]}-${Utils.getMonthDays(state.endData[0], state.endData[1])}`,
            `${curData[0]}-${curData[1]}-${curData[2]}`
          )) {
            state.monthsData.push(monthInfo);
          }
        } else {
          if (!state.startData || !Utils.compareDate(
            `${curData[0]}-${curData[1]}-${curData[2]}`,
            `${state.startData[0]}-${state.startData[1]}-01`
          )) {
            state.monthsData.unshift(monthInfo);
          } else {
            state.unLoadPrev = true;
          }
        }
      };
      const initData = () => {
        let propStartDate = props.startDate ? props.startDate : Utils.getDay(0);
        let propEndDate = props.endDate ? props.endDate : Utils.getDay(365);
        state.propStartDate = propStartDate;
        state.propEndDate = propEndDate;
        state.startData = splitDate(propStartDate);
        state.endData = splitDate(propEndDate);
        if (props.defaultValue || Array.isArray(props.defaultValue) && props.defaultValue.length > 0) {
          state.currDate = props.type !== "one" ? [...props.defaultValue] : props.defaultValue;
        }
        const startDate = {
          year: Number(state.startData[0]),
          month: Number(state.startData[1])
        };
        const endDate = {
          year: Number(state.endData[0]),
          month: Number(state.endData[1])
        };
        let monthsNum = endDate.month - startDate.month;
        if (endDate.year - startDate.year > 0) {
          monthsNum = monthsNum + 12 * (endDate.year - startDate.year);
        }
        if (monthsNum <= 0) {
          monthsNum = 1;
        }
        getMonth(state.startData, "next");
        let i = 1;
        do {
          getMonth(getCurrData("next"), "next");
        } while (i++ < monthsNum);
        state.monthsNum = monthsNum;
        if (props.type == "range" && Array.isArray(state.currDate)) {
          if (state.currDate.length > 0) {
            if (propStartDate && Utils.compareDate(state.currDate[0], propStartDate)) {
              state.currDate.splice(0, 1, propStartDate);
            }
            if (propEndDate && Utils.compareDate(propEndDate, state.currDate[1])) {
              state.currDate.splice(1, 1, propEndDate);
            }
            state.defaultData = [...splitDate(state.currDate[0]), ...splitDate(state.currDate[1])];
          }
        } else if (props.type == "multiple" && Array.isArray(state.currDate)) {
          if (state.currDate.length > 0) {
            let defaultArr = [];
            let obj = {};
            state.currDate.forEach((item) => {
              if (propStartDate && !Utils.compareDate(item, propStartDate) && propEndDate && !Utils.compareDate(propEndDate, item)) {
                if (!Object.hasOwnProperty.call(obj, item)) {
                  defaultArr.push(item);
                  obj[item] = item;
                }
              }
            });
            state.currDate = [...defaultArr];
            state.defaultData = [...splitDate(defaultArr[0])];
          }
        } else if (props.type == "week" && Array.isArray(state.currDate)) {
          if (state.currDate.length > 0) {
            let [y, m, d] = splitDate(state.currDate[0]);
            let weekArr = Utils.getWeekDate(y, m, d, props.firstDayOfWeek);
            state.currDate = weekArr;
            if (propStartDate && Utils.compareDate(state.currDate[0], propStartDate)) {
              state.currDate.splice(0, 1, propStartDate);
            }
            if (propEndDate && Utils.compareDate(propEndDate, state.currDate[1])) {
              state.currDate.splice(1, 1, propEndDate);
            }
            state.defaultData = [...splitDate(state.currDate[0]), ...splitDate(state.currDate[1])];
          }
        } else {
          if (state.currDate) {
            if (propStartDate && Utils.compareDate(state.currDate, propStartDate)) {
              state.currDate = propStartDate;
            } else if (propEndDate && !Utils.compareDate(state.currDate, propEndDate)) {
              state.currDate = propEndDate;
            }
            state.defaultData = [...splitDate(state.currDate)];
          }
        }
        let current = 0;
        let lastCurrent = 0;
        if (state.defaultData.length > 0) {
          state.monthsData.forEach((item, index) => {
            if (item.title == translate("monthTitle", state.defaultData[0], state.defaultData[1])) {
              current = index;
            }
            if (props.type == "range" || props.type == "week") {
              if (item.title == translate("monthTitle", state.defaultData[3], state.defaultData[4])) {
                lastCurrent = index;
              }
            }
          });
        }
        setDefaultRange(monthsNum, current);
        state.currentIndex = current;
        state.yearMonthTitle = state.monthsData[state.currentIndex].title;
        if (state.defaultData.length > 0) {
          if (state.isRange) {
            chooseDay({ day: state.defaultData[2], type: "curr" }, state.monthsData[state.currentIndex], true);
            chooseDay({ day: state.defaultData[5], type: "curr" }, state.monthsData[lastCurrent], true);
          } else if (props.type == "week") {
            chooseDay({ day: state.defaultData[2], type: "curr" }, state.monthsData[state.currentIndex], true);
          } else if (props.type == "multiple") {
            [...state.currDate].forEach((item) => {
              let dateArr = splitDate(item);
              let current2 = state.currentIndex;
              state.monthsData.forEach((item2, index) => {
                if (item2.title == translate("monthTitle", dateArr[0], dateArr[1])) {
                  current2 = index;
                }
              });
              chooseDay({ day: dateArr[2], type: "curr" }, state.monthsData[current2], true);
            });
          } else {
            chooseDay({ day: state.defaultData[2], type: "curr" }, state.monthsData[state.currentIndex], true);
          }
        }
        let lastItem = state.monthsData[state.monthsData.length - 1];
        let containerHeight = lastItem.cssHeight + lastItem.cssScrollHeight;
        state.containerHeight = `${containerHeight}px`;
        state.scrollTop = Math.ceil(state.monthsData[state.currentIndex].cssScrollHeight);
        state.avgHeight = Math.floor(containerHeight / (monthsNum + 1));
        if (months == null ? void 0 : months.value) {
          viewHeight.value = months.value.clientHeight;
        }
      };
      const scrollToDate = (date) => {
        if (Utils.compareDate(date, state.propStartDate)) {
          date = state.propStartDate;
        } else if (!Utils.compareDate(date, state.propEndDate)) {
          date = state.propEndDate;
        }
        let dateArr = splitDate(date);
        state.monthsData.forEach((item, index) => {
          if (item.title == translate("monthTitle", dateArr[0], dateArr[1])) {
            state.scrollTop += 1;
            scrollWithAnimation.value = props.toDateAnimation;
            requestAniFrame$1(() => {
              setTimeout(() => {
                state.scrollTop = state.monthsData[index].cssScrollHeight;
                setTimeout(() => {
                  scrollWithAnimation.value = false;
                }, 200);
              }, 10);
            });
          }
        });
      };
      const initPosition = () => {
        state.scrollTop = Math.ceil(state.monthsData[state.currentIndex].cssScrollHeight);
      };
      expose({
        scrollToDate,
        initPosition
      });
      const setDefaultRange = (monthsNum, current) => {
        if (monthsNum >= 3) {
          if (current > 0 && current < monthsNum) {
            state.defaultRange = [current - 1, current + 3];
          } else if (current == 0) {
            state.defaultRange = [current, current + 4];
          } else if (current == monthsNum) {
            state.defaultRange = [current - 2, current + 2];
          }
        } else {
          state.defaultRange = [0, monthsNum + 2];
        }
        let defaultScrollTop = state.monthsData[state.defaultRange[0]].cssScrollHeight;
        state.translateY = defaultScrollTop;
      };
      const isActive = (day, month) => {
        return (props.type == "range" || props.type == "week") && day.type == "curr" && getClass(day, month).includes("nut-calendar__day--active");
      };
      const isStartTip = (day, month) => {
        return isActive(day, month) && isStart(getCurrDate(day, month));
      };
      const isEndTip = (day, month) => {
        if (state.currDate.length >= 2 && isEnd(getCurrDate(day, month))) {
          return isActive(day, month);
        }
        return false;
      };
      const rangeTip = () => {
        if (state.currDate.length >= 2) {
          return Utils.isEqual(state.currDate[0], state.currDate[1]);
        }
      };
      const isCurrDay = (dateInfo) => {
        const date = `${dateInfo.year}-${dateInfo.month}-${Number(dateInfo.day) < 10 ? "0" + dateInfo.day : dateInfo.day}`;
        return Utils.isEqual(date, Utils.date2Str(/* @__PURE__ */ new Date()));
      };
      const mothsViewScroll = (e) => {
        if (state.monthsData.length <= 1) {
          return;
        }
        const currentScrollTop = e.target.scrollTop;
        let current = Math.floor(currentScrollTop / state.avgHeight);
        if (current == 0) {
          if (currentScrollTop >= state.monthsData[current + 1].cssScrollHeight) {
            current += 1;
          }
        } else if (current > 0 && current < state.monthsNum - 1) {
          if (currentScrollTop >= state.monthsData[current + 1].cssScrollHeight) {
            current += 1;
          }
          if (currentScrollTop < state.monthsData[current].cssScrollHeight) {
            current -= 1;
          }
        }
        if (state.currentIndex !== current) {
          state.currentIndex = current;
          setDefaultRange(state.monthsNum, current);
        }
        state.yearMonthTitle = state.monthsData[current].title;
      };
      const resetRender = () => {
        state.chooseData.splice(0);
        state.monthsData.splice(0);
        initData();
      };
      vue.onMounted(() => {
        Taro.getSystemInfo({
          success(res) {
            let scale = 2;
            let toFixed = 3;
            if (TARO_ENV === Taro.ENV_TYPE.WEB) {
              toFixed = 5;
              let fontSize = document.documentElement.style.fontSize;
              scale = Number((Number.parseInt(fontSize) / 40).toFixed(toFixed));
            } else {
              let screenWidth = res.screenWidth;
              scale = Number((screenWidth / 750).toFixed(toFixed));
            }
            scalePx.value = scale;
            initData();
          }
        });
      });
      vue.watch(
        () => props.defaultValue,
        (val) => {
          if (val) {
            if (props.poppable) {
              resetRender();
            }
          }
        }
      );
      return __spreadProps(__spreadValues(__spreadValues({
        weeks,
        compConthsData,
        showTopBtn,
        topInfo,
        bottomInfo,
        rangeTip,
        mothsViewScroll,
        getClass,
        isStartTip,
        isEndTip,
        chooseDay,
        isCurrDay,
        confirm,
        months
      }, vue.toRefs(state)), vue.toRefs(props)), {
        translate,
        scrollWithAnimation
      });
    }
  });
  const _hoisted_1$X = { class: "nut-calendar__header" };
  const _hoisted_2$L = {
    key: 0,
    class: "nut-calendar__header-title"
  };
  const _hoisted_3$A = {
    key: 1,
    class: "nut-calendar__header-slot"
  };
  const _hoisted_4$w = {
    key: 2,
    class: "nut-calendar__header-subtitle"
  };
  const _hoisted_5$m = { class: "nut-calendar__weekdays" };
  const _hoisted_6$h = { class: "nut-calendar__month-title" };
  const _hoisted_7$g = { class: "nut-calendar__days" };
  const _hoisted_8$a = ["onClick"];
  const _hoisted_9$9 = { class: "nut-calendar__day-value" };
  const _hoisted_10$6 = {
    key: 0,
    class: "nut-calendar__day-tips nut-calendar__day-tips--top"
  };
  const _hoisted_11$4 = {
    key: 1,
    class: "nut-calendar__day-tips nut-calendar__day-tips--bottom"
  };
  const _hoisted_12$4 = {
    key: 2,
    class: "nut-calendar__day-tips--curr"
  };
  const _hoisted_13$3 = {
    key: 4,
    class: "nut-calendar__day-tip"
  };
  const _hoisted_14$3 = {
    key: 0,
    class: "nut-calendar__footer"
  };
  function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_scroll_view = vue.resolveComponent("nut-scroll-view");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["nut-calendar", {
        "nut-calendar--nopop": !_ctx.poppable,
        "nut-calendar--nofooter": _ctx.isAutoBackFill
      }])
    }, [
      vue.createElementVNode("view", _hoisted_1$X, [
        _ctx.showTitle ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$L, vue.toDisplayString(_ctx.title || _ctx.translate("title")), 1)) : vue.createCommentVNode("", true),
        _cache[1] || (_cache[1] = vue.createTextVNode()),
        _ctx.showTopBtn ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$A, [
          vue.renderSlot(_ctx.$slots, "btn")
        ])) : vue.createCommentVNode("", true),
        _cache[2] || (_cache[2] = vue.createTextVNode()),
        _ctx.showSubTitle ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$w, vue.toDisplayString(_ctx.yearMonthTitle), 1)) : vue.createCommentVNode("", true),
        _cache[3] || (_cache[3] = vue.createTextVNode()),
        vue.createElementVNode("view", _hoisted_5$m, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.weeks, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: vue.normalizeClass(["nut-calendar__weekday", { weekend: item.weekend }])
            }, vue.toDisplayString(item.day), 3);
          }), 128))
        ])
      ]),
      _cache[10] || (_cache[10] = vue.createTextVNode()),
      vue.createVNode(_component_nut_scroll_view, {
        ref: "months",
        "scroll-top": _ctx.scrollTop,
        "scroll-y": true,
        class: "nut-calendar__content",
        "scroll-with-animation": _ctx.scrollWithAnimation,
        onScroll: _ctx.mothsViewScroll
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", {
            class: "nut-calendar__panel",
            style: vue.normalizeStyle({ height: _ctx.containerHeight })
          }, [
            vue.createElementVNode("view", {
              class: "nut-calendar__body",
              style: vue.normalizeStyle({ transform: `translateY(${_ctx.translateY}px)` })
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.compConthsData, (month, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: "nut-calendar__month"
                }, [
                  vue.createElementVNode("view", _hoisted_6$h, vue.toDisplayString(month.title), 1),
                  _cache[9] || (_cache[9] = vue.createTextVNode()),
                  vue.createElementVNode("view", _hoisted_7$g, [
                    vue.createElementVNode("view", {
                      class: vue.normalizeClass(["nut-calendar__days-item", _ctx.type === "range" ? "nut-calendar__days-item--range" : ""])
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(month.monthData, (day, i) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          key: i,
                          class: vue.normalizeClass(["nut-calendar__day", _ctx.getClass(day, month, i)]),
                          onClick: ($event) => _ctx.chooseDay(day, month)
                        }, [
                          vue.createElementVNode("view", _hoisted_9$9, [
                            vue.renderSlot(_ctx.$slots, "day", {
                              date: day.type == "curr" ? day : ""
                            }, () => [
                              vue.createTextVNode(vue.toDisplayString(day.type == "curr" ? day.day : ""), 1)
                            ])
                          ]),
                          _cache[4] || (_cache[4] = vue.createTextVNode()),
                          _ctx.topInfo ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_10$6, [
                            vue.renderSlot(_ctx.$slots, "top-info", {
                              date: day.type == "curr" ? day : ""
                            })
                          ])) : vue.createCommentVNode("", true),
                          _cache[5] || (_cache[5] = vue.createTextVNode()),
                          _ctx.bottomInfo ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_11$4, [
                            vue.renderSlot(_ctx.$slots, "bottom-info", {
                              date: day.type == "curr" ? day : ""
                            })
                          ])) : vue.createCommentVNode("", true),
                          _cache[6] || (_cache[6] = vue.createTextVNode()),
                          !_ctx.bottomInfo && _ctx.showToday && _ctx.isCurrDay(day) ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_12$4, vue.toDisplayString(_ctx.translate("today")), 1)) : vue.createCommentVNode("", true),
                          _cache[7] || (_cache[7] = vue.createTextVNode()),
                          _ctx.isStartTip(day, month) ? (vue.openBlock(), vue.createElementBlock("view", {
                            key: 3,
                            class: vue.normalizeClass(["nut-calendar__day-tip", { "nut-calendar__day-tips--top": _ctx.rangeTip() }])
                          }, vue.toDisplayString(_ctx.startText || _ctx.translate("start")), 3)) : vue.createCommentVNode("", true),
                          _cache[8] || (_cache[8] = vue.createTextVNode()),
                          _ctx.isEndTip(day, month) ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_13$3, vue.toDisplayString(_ctx.endText || _ctx.translate("end")), 1)) : vue.createCommentVNode("", true)
                        ], 10, _hoisted_8$a);
                      }), 128))
                    ], 2)
                  ])
                ]);
              }), 128))
            ], 4)
          ], 4)
        ]),
        _: 3
      }, 8, ["scroll-top", "scroll-with-animation", "onScroll"]),
      _cache[11] || (_cache[11] = vue.createTextVNode()),
      _ctx.poppable && !_ctx.isAutoBackFill ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_14$3, [
        vue.renderSlot(_ctx.$slots, "footer-info", { date: _ctx.chooseData }, () => [
          vue.createElementVNode("view", {
            class: "nut-calendar__confirm",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.confirm && _ctx.confirm(...args))
          }, vue.toDisplayString(_ctx.confirmText || _ctx.translate("confirm")), 1)
        ])
      ])) : vue.createCommentVNode("", true)
    ], 2);
  }
  const NutCalendarItem = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["render", _sfc_render$L]]);
  const { create: create$M } = createComponent("calendar");
  const _sfc_main$1c = create$M({
    components: {
      NutCalendarItem,
      NutPopup: Popup
    },
    props: {
      type: {
        type: String,
        default: "one"
      },
      isAutoBackFill: {
        type: Boolean,
        default: false
      },
      toDateAnimation: {
        type: Boolean,
        default: true
      },
      poppable: {
        type: Boolean,
        default: true
      },
      showTitle: {
        type: Boolean,
        default: true
      },
      showSubTitle: {
        type: Boolean,
        default: true
      },
      visible: {
        type: Boolean,
        default: false
      },
      showToday: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: ""
      },
      confirmText: {
        type: String,
        default: ""
      },
      startText: {
        type: String,
        default: ""
      },
      endText: {
        type: String,
        default: ""
      },
      defaultValue: {
        type: [String, Array]
      },
      startDate: {
        type: String,
        default: Utils.getDay(0)
      },
      endDate: {
        type: String,
        default: Utils.getDay(365)
      },
      firstDayOfWeek: {
        type: Number,
        default: 0,
        validator: (val) => val >= 0 && val <= 6
      },
      lockScroll: {
        type: Boolean,
        default: true
      },
      disabledDate: Function
    },
    emits: ["choose", "close", "update:visible", "select"],
    setup(props, { emit, slots, expose }) {
      const visible = vue.computed({
        get() {
          return props.visible;
        },
        set(val) {
          emit("update:visible", val);
        }
      });
      const showTopBtn = vue.computed(() => {
        return slots.btn;
      });
      const topInfo = vue.computed(() => {
        return slots["top-info"];
      });
      const dayInfo = vue.computed(() => {
        return slots.day;
      });
      const bottomInfo = vue.computed(() => {
        return slots["bottom-info"];
      });
      const footerInfo = vue.computed(() => {
        return slots["footer-info"];
      });
      const calendarRef = vue.ref(null);
      const scrollToDate = (date) => {
        var _a;
        (_a = calendarRef.value) == null ? void 0 : _a.scrollToDate(date);
      };
      const initPosition = () => {
        var _a;
        (_a = calendarRef.value) == null ? void 0 : _a.initPosition();
      };
      expose({
        scrollToDate,
        initPosition
      });
      const update = () => {
        emit("update:visible", false);
      };
      const close = () => {
        emit("close");
        emit("update:visible", false);
      };
      const choose = (param) => {
        close();
        emit("choose", param);
      };
      const closePopup = () => {
        close();
      };
      const select = (param) => {
        emit("select", param);
      };
      const opened = () => {
        var _a, _b, _c, _d;
        if (props.defaultValue) {
          if (Array.isArray(props.defaultValue)) {
            if ((_a = props.defaultValue) == null ? void 0 : _a.length) {
              (_c = calendarRef.value) == null ? void 0 : _c.scrollToDate((_b = props.defaultValue) == null ? void 0 : _b[0]);
            }
          } else {
            (_d = calendarRef.value) == null ? void 0 : _d.scrollToDate(props.defaultValue);
          }
        }
      };
      return {
        visible,
        closePopup,
        opened,
        update,
        close,
        select,
        choose,
        calendarRef,
        showTopBtn,
        topInfo,
        dayInfo,
        bottomInfo,
        footerInfo
      };
    }
  });
  function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_calendar_item = vue.resolveComponent("nut-calendar-item");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return _ctx.poppable ? (vue.openBlock(), vue.createBlock(_component_nut_popup, vue.mergeProps({
      key: 0,
      visible: _ctx.visible,
      "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => _ctx.visible = $event),
      position: "bottom",
      round: "",
      closeable: ""
    }, _ctx.$attrs, {
      style: { height: "85vh" },
      "lock-scroll": _ctx.lockScroll,
      "catch-move": _ctx.lockScroll,
      "destroy-on-close": false,
      onOpened: _ctx.opened
    }), {
      default: vue.withCtx(() => [
        vue.createVNode(_component_nut_calendar_item, {
          ref: "calendarRef",
          type: _ctx.type,
          "is-auto-back-fill": _ctx.isAutoBackFill,
          poppable: _ctx.poppable,
          title: _ctx.title,
          "default-value": _ctx.defaultValue,
          "start-date": _ctx.startDate,
          "end-date": _ctx.endDate,
          "confirm-text": _ctx.confirmText,
          "start-text": _ctx.startText,
          "end-text": _ctx.endText,
          "show-today": _ctx.showToday,
          "show-title": _ctx.showTitle,
          "show-sub-title": _ctx.showSubTitle,
          "to-date-animation": _ctx.toDateAnimation,
          "first-day-of-week": _ctx.firstDayOfWeek,
          "disabled-date": _ctx.disabledDate,
          onUpdate: _ctx.update,
          onClose: _ctx.close,
          onChoose: _ctx.choose,
          onSelect: _ctx.select
        }, vue.createSlots({ _: 2 }, [
          _ctx.showTopBtn ? {
            name: "btn",
            fn: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "btn")
            ]),
            key: "0"
          } : void 0,
          _ctx.dayInfo ? {
            name: "day",
            fn: vue.withCtx((date) => [
              vue.renderSlot(_ctx.$slots, "day", {
                date: date.date
              })
            ]),
            key: "1"
          } : void 0,
          _ctx.topInfo ? {
            name: "top-info",
            fn: vue.withCtx((date) => [
              vue.renderSlot(_ctx.$slots, "top-info", {
                date: date.date
              })
            ]),
            key: "2"
          } : void 0,
          _ctx.bottomInfo ? {
            name: "bottom-info",
            fn: vue.withCtx((date) => [
              vue.renderSlot(_ctx.$slots, "bottom-info", {
                date: date.date
              })
            ]),
            key: "3"
          } : void 0,
          _ctx.footerInfo ? {
            name: "footer-info",
            fn: vue.withCtx((date) => [
              vue.renderSlot(_ctx.$slots, "footer-info", {
                date: date.date
              })
            ]),
            key: "4"
          } : void 0
        ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "default-value", "start-date", "end-date", "confirm-text", "start-text", "end-text", "show-today", "show-title", "show-sub-title", "to-date-animation", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"])
      ]),
      _: 3
    }, 16, ["visible", "lock-scroll", "catch-move", "onOpened"])) : (vue.openBlock(), vue.createBlock(_component_nut_calendar_item, {
      key: 1,
      ref: "calendarRef",
      type: _ctx.type,
      "is-auto-back-fill": _ctx.isAutoBackFill,
      poppable: _ctx.poppable,
      title: _ctx.title,
      "confirm-text": _ctx.confirmText,
      "start-text": _ctx.startText,
      "end-text": _ctx.endText,
      "default-value": _ctx.defaultValue,
      "start-date": _ctx.startDate,
      "end-date": _ctx.endDate,
      "show-title": _ctx.showTitle,
      "show-sub-title": _ctx.showSubTitle,
      "to-date-animation": _ctx.toDateAnimation,
      "show-today": _ctx.showToday,
      "first-day-of-week": _ctx.firstDayOfWeek,
      "disabled-date": _ctx.disabledDate,
      onClose: _ctx.close,
      onChoose: _ctx.choose,
      onSelect: _ctx.select
    }, vue.createSlots({ _: 2 }, [
      _ctx.showTopBtn ? {
        name: "btn",
        fn: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "btn")
        ]),
        key: "0"
      } : void 0,
      _ctx.dayInfo ? {
        name: "day",
        fn: vue.withCtx((date) => [
          vue.renderSlot(_ctx.$slots, "day", {
            date: date.date
          })
        ]),
        key: "1"
      } : void 0,
      _ctx.topInfo ? {
        name: "top-info",
        fn: vue.withCtx((date) => [
          vue.renderSlot(_ctx.$slots, "top-info", {
            date: date.date
          })
        ]),
        key: "2"
      } : void 0,
      _ctx.bottomInfo ? {
        name: "bottom-info",
        fn: vue.withCtx((date) => [
          vue.renderSlot(_ctx.$slots, "bottom-info", {
            date: date.date
          })
        ]),
        key: "3"
      } : void 0
    ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "confirm-text", "start-text", "end-text", "default-value", "start-date", "end-date", "show-title", "show-sub-title", "to-date-animation", "show-today", "first-day-of-week", "disabled-date", "onClose", "onChoose", "onSelect"]));
  }
  const Calendar = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["render", _sfc_render$K]]);
  const left = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cGF0aCBkPSJNNi42MDUgOS40OWEuNzcxLjc3MSAwIDAgMSAwLS45OGwzLjYtNC4zNzJhLjc3MS43NzEgMCAwIDEgMS4xOS45ODFMOC4yIDlsMy4xOTcgMy44ODFhLjc3MS43NzEgMCAxIDEtMS4xOTEuOThsLTMuNi00LjM3eiIvPjwvc3ZnPg==";
  const right = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cGF0aCBkPSJNMTEuMzk2IDkuNDlhLjc3MS43NzEgMCAwIDAgMC0uOThsLTMuNi00LjM3MmEuNzcxLjc3MSAwIDAgMC0xLjE5MS45ODFMOS44IDlsLTMuMTk2IDMuODgxYS43NzEuNzcxIDAgMCAwIDEuMTkuOThsMy42LTQuMzd6Ii8+PC9zdmc+";
  const doubleLeft = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cGF0aCBkPSJNMTMuODUzIDQuMDI2YS43NzEuNzcxIDAgMCAxIC4xMiAxLjA4NUwxMC44NjQgOWwzLjExIDMuODg5YS43NzEuNzcxIDAgMSAxLTEuMjA0Ljk2M2wtMy40OTgtNC4zN2EuNzcxLjc3MSAwIDAgMSAwLS45NjRsMy40OTctNC4zNzFhLjc3MS43NzEgMCAwIDEgMS4wODQtLjEyem0tNS4yNDUgMGEuNzcxLjc3MSAwIDAgMSAuMTIgMS4wODVMNS42MTcgOWwzLjExMSAzLjg4OWEuNzcxLjc3MSAwIDAgMS0xLjIwNS45NjNsLTMuNDk3LTQuMzdhLjc3MS43NzEgMCAwIDEgMC0uOTY0bDMuNDk3LTQuMzcxYS43NzEuNzcxIDAgMCAxIDEuMDg1LS4xMnoiLz48L3N2Zz4=";
  const doubleRight = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cGF0aCBkPSJNNC4xNDcgMTMuOTc0YS43NzEuNzcxIDAgMCAxLS4xMi0xLjA4NUw3LjEzNiA5IDQuMDI4IDUuMTFhLjc3MS43NzEgMCAxIDEgMS4yMDQtLjk2M2wzLjQ5NyA0LjM3MWEuNzcxLjc3MSAwIDAgMSAwIC45NjRsLTMuNDk3IDQuMzcxYS43NzEuNzcxIDAgMCAxLTEuMDg0LjEyem01LjI0NSAwYS43NzEuNzcxIDAgMCAxLS4xMi0xLjA4NUwxMi4zODMgOSA5LjI3MiA1LjExYS43NzEuNzcxIDAgMSAxIDEuMjA1LS45NjNsMy40OTcgNC4zNzFhLjc3MS43NzEgMCAwIDEgMCAuOTY0bC0zLjQ5NyA0LjM3MWEuNzcxLjc3MSAwIDAgMS0xLjA4NS4xMnoiLz48L3N2Zz4=";
  const Icon = (url) => {
    const style = {
      background: `url('${url}') no-repeat center`,
      backgroundSize: "100% 100%",
      width: "18px",
      height: "18px",
      display: "block"
    };
    return vue.h("view", {
      style
    });
  };
  const Left = () => {
    return Icon(left);
  };
  const Right = () => {
    return Icon(right);
  };
  const DoubleLeft = () => {
    return Icon(doubleLeft);
  };
  const DoubleRight = () => {
    return Icon(doubleRight);
  };
  const convertDateToDay = (date) => {
    return date ? {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate()
    } : null;
  };
  const convertDayToDate = (day) => {
    return day ? new Date(day.year, day.month - 1, day.date) : null;
  };
  const valueToRange = (val) => {
    if (Array.isArray(val)) {
      return val.map((date) => {
        return convertDateToDay(date);
      });
    }
    return val ? [convertDateToDay(val)] : [];
  };
  const rangeTovalue = (range) => {
    if (Array.isArray(range)) {
      return range.map((day) => {
        return convertDayToDate(day);
      });
    }
    return range ? [convertDayToDate(range)] : [];
  };
  const getPrevMonthDays = (year, month, firstDayOfWeek) => {
    let prevMonth = month - 1;
    let prevYear = year;
    if (prevMonth <= 0) {
      prevMonth = 12;
      prevYear -= 1;
    }
    let days = Utils.getMonthPreDay(year, month);
    days -= firstDayOfWeek;
    if (days >= 7) {
      days -= 7;
    }
    const preDates = Utils.getMonthDays(`${prevYear}`, `${prevMonth}`);
    const months = Array.from(Array(preDates), (_, k) => {
      return {
        type: "prev",
        year: prevYear,
        month: prevMonth,
        date: k + 1
      };
    });
    return months.slice(preDates - days);
  };
  const getCurrentMonthDays = (year, month) => {
    const days = Utils.getMonthDays(`${year}`, `${month}`);
    return Array.from(Array(days), (_, k) => {
      return {
        type: "current",
        year,
        month,
        date: k + 1
      };
    });
  };
  const getCurrentWeekDays = (day, firstDayOfWeek) => {
    const current = new Date(day.year, day.month - 1, day.date);
    const count = (current.getDay() + 7 - firstDayOfWeek) % 7;
    return [
      convertDateToDay(new Date(current.getTime() - 24 * 60 * 60 * 1e3 * count)),
      convertDateToDay(new Date(current.getTime() + 24 * 60 * 60 * 1e3 * (6 - count)))
    ];
  };
  const getDays = (month, firstDayOfWeek) => {
    const y = month.year;
    const m = month.month;
    const days = [...getPrevMonthDays(y, m, firstDayOfWeek), ...getCurrentMonthDays(y, m)];
    const size = days.length;
    const yearOfNextMonth = month.month === 12 ? month.year + 1 : month.year;
    const monthOfNextMonth = month.month === 12 ? 1 : month.month + 1;
    for (let i = 1; i <= 42 - size; i++) {
      days.push({
        type: "next",
        year: yearOfNextMonth,
        month: monthOfNextMonth,
        date: i
      });
    }
    return days;
  };
  const compareDay = (day1, day2) => {
    if (day1 && day2) {
      if (day1.year === day2.year) {
        if (day1.month === day2.month) {
          return day1.date - day2.date;
        }
        return day1.month - day2.month;
      }
      return day1.year - day2.year;
    }
  };
  const isSameDay = (day1, day2) => {
    return compareDay(day1, day2) === 0;
  };
  const _hoisted_1$W = { class: "nut-calendarcard" };
  const _hoisted_2$K = { class: "nut-calendarcard-header" };
  const _hoisted_3$z = { class: "nut-calendarcard-header-left" };
  const _hoisted_4$v = { class: "nut-calendarcard-header-title" };
  const _hoisted_5$l = { class: "nut-calendarcard-header-right" };
  const _hoisted_6$g = { class: "nut-calendarcard-content" };
  const _hoisted_7$f = { class: "nut-calendarcard-days" };
  const _hoisted_8$9 = { class: "nut-calendarcard-days" };
  const _hoisted_9$8 = ["onClick"];
  const _hoisted_10$5 = { class: "nut-calendarcard-day-top" };
  const _hoisted_11$3 = { class: "nut-calendarcard-day-inner" };
  const _hoisted_12$3 = { class: "nut-calendarcard-day-bottom" };
  const cN$i = "NutCalendarCard";
  const _sfc_main$1b = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: cN$i
  }), {
    __name: "calendar-card.taro",
    props: {
      type: { default: "single" },
      firstDayOfWeek: { default: 0 },
      modelValue: { default: null },
      startDate: { default: null },
      endDate: { default: null },
      disableDay: { type: Function, default: () => false }
    },
    emits: ["update:modelValue", "change", "dayClick", "pageChange"],
    setup(__props, { expose: __expose, emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const translate = useLocale(cN$i);
      const initMonth = () => {
        let date = new Date(Date.now());
        const val = props.modelValue;
        if (Array.isArray(val)) {
          if (val.length) {
            date = val[0];
          }
        } else if (val) {
          date = val;
        }
        return {
          year: date.getFullYear(),
          month: date.getMonth() + 1
        };
      };
      const month = vue.ref(initMonth());
      const days = vue.ref([]);
      const weekHeader = vue.computed(() => {
        const weekdays = translate("weekdays").map((day, index) => {
          return {
            name: day,
            key: index
          };
        });
        return [...weekdays.slice(props.firstDayOfWeek, 7), ...weekdays.slice(0, props.firstDayOfWeek)];
      });
      const innerValue = vue.ref(props.modelValue ? valueToRange(props.modelValue) : []);
      vue.watchEffect(() => {
        const val = props.modelValue ? valueToRange(props.modelValue) : [];
        innerValue.value = val;
      });
      const change = (v) => {
        innerValue.value = v;
        if (props.type === "single") {
          const date = convertDayToDate(v[0]);
          emit("update:modelValue", date);
          emit("change", date);
        } else if (props.type === "multiple" || props.type === "range" || props.type === "week") {
          const val = rangeTovalue(v);
          emit("update:modelValue", val);
          emit("change", val);
        }
      };
      vue.watchEffect(() => {
        const newDays = getDays(month.value, props.firstDayOfWeek);
        days.value = newDays;
        emit("pageChange", month.value);
      });
      const isDisable = (day) => {
        if (props.disableDay && props.disableDay(day)) {
          return true;
        }
        if (props.startDate && Number(compareDay(day, convertDateToDay(props.startDate))) < 0) {
          return true;
        }
        if (props.endDate && Number(compareDay(day, convertDateToDay(props.endDate))) > 0) {
          return true;
        }
        return false;
      };
      const isActive = (day) => {
        if (props.type === "single" || props.type === "multiple") {
          for (const val in innerValue.value) {
            if (isSameDay(day, innerValue.value[val])) {
              return true;
            }
          }
        } else if (props.type === "range" && innerValue.value.length === 1 && isSameDay(innerValue.value[0], day)) {
          return true;
        }
        return false;
      };
      const isStart = (day) => {
        return (props.type === "range" || props.type === "week") && innerValue.value.length === 2 && isSameDay(day, innerValue.value[0]);
      };
      const isEnd = (day) => {
        return (props.type === "range" || props.type === "week") && innerValue.value.length === 2 && isSameDay(day, innerValue.value[1]);
      };
      const isMid = (day) => {
        if (props.type === "range" || props.type === "week") {
          if (innerValue.value.length === 2) {
            const c1 = compareDay(innerValue.value[0], day);
            const c2 = compareDay(day, innerValue.value[1]);
            if (c1 && c1 < 0 && c2 && c2 < 0) {
              return true;
            }
          }
        }
        return false;
      };
      const isWeekend = (day) => {
        const d = new Date(day.year, day.month - 1, day.date).getDay();
        return d === 0 || d === 6;
      };
      const getClasses = (day) => {
        if (isDisable(day)) {
          return ["disabled"];
        }
        const res = [];
        if (day.type === "current") {
          if (isActive(day)) {
            res.push("active");
          }
          if (isStart(day)) {
            res.push("start");
          }
          if (isEnd(day)) {
            res.push("end");
          }
          if (isMid(day)) {
            res.push("mid");
          }
          if (isWeekend(day)) {
            res.push("weekend");
          }
        }
        return res;
      };
      const jumpTo = (y, m) => {
        if (props.startDate) {
          const c = compareDay(
            {
              year: y,
              month: m,
              date: 31
            },
            convertDateToDay(props.startDate)
          );
          if (c && c < 0) {
            return;
          }
        }
        if (props.endDate) {
          const c = compareDay(
            {
              year: y,
              month: m,
              date: 1
            },
            convertDateToDay(props.endDate)
          );
          if (c && c > 0) {
            return;
          }
        }
        month.value = {
          year: y,
          month: m
        };
      };
      const jump = (step = 1) => {
        const current = month.value.year * 12 + month.value.month;
        let newMonth = (current + step) % 12;
        if (newMonth === 0) {
          newMonth = 12;
        }
        const newYear = Math.floor((current + step - newMonth) / 12);
        jumpTo(newYear, newMonth);
      };
      const handleDayClick = (day) => {
        if (day.type === "prev" || day.type === "next" || isDisable(day)) {
          return;
        }
        emit("dayClick", day);
        switch (props.type) {
          case "single": {
            if (innerValue.value[0] && isSameDay(innerValue.value[0], day)) {
              change([]);
            } else {
              change([day]);
            }
            break;
          }
          case "multiple": {
            const t = innerValue.value.find((i) => isSameDay(i, day));
            if (t) {
              change(innerValue.value.filter((i) => i !== t));
            } else {
              change([...innerValue.value, day]);
            }
            break;
          }
          case "range": {
            const len = innerValue.value.length;
            if (len === 0 || len === 2) {
              change([day]);
            } else if (len === 1) {
              const t = compareDay(innerValue.value[0], day);
              if (t === null || t === void 0) {
                change([]);
              } else if (t < 0) {
                change([innerValue.value[0], day]);
              } else {
                change([day, innerValue.value[0]]);
              }
            } else {
              console.warn("[NutUI] Calendar range error");
            }
            break;
          }
          case "week": {
            if (innerValue.value.length === 2 || innerValue.value.length === 0) {
              const [left2, right2] = getCurrentWeekDays(day, props.firstDayOfWeek);
              change([left2, right2]);
            } else {
              console.warn("[NutUI] Calendar week error");
            }
            break;
          }
          default: {
            console.warn("[NutUI] Calendar type error");
          }
        }
      };
      __expose({
        jump,
        jumpTo
      });
      return (_ctx, _cache) => {
        return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1$W, [
          vue.createElementVNode("div", _hoisted_2$K, [
            vue.createElementVNode("div", _hoisted_3$z, [
              vue.createElementVNode("div", {
                class: "double-left",
                onClick: _cache[0] || (_cache[0] = ($event) => jump(-12))
              }, [
                vue.createVNode(vue.unref(DoubleLeft))
              ]),
              _cache[4] || (_cache[4] = vue.createTextVNode()),
              vue.createElementVNode("div", {
                class: "left",
                onClick: _cache[1] || (_cache[1] = ($event) => jump(-1))
              }, [
                vue.createVNode(vue.unref(Left))
              ])
            ]),
            _cache[6] || (_cache[6] = vue.createTextVNode()),
            vue.createElementVNode("div", _hoisted_4$v, vue.toDisplayString(vue.unref(translate)("monthTitle", month.value.year, month.value.month)), 1),
            _cache[7] || (_cache[7] = vue.createTextVNode()),
            vue.createElementVNode("div", _hoisted_5$l, [
              vue.createElementVNode("div", {
                class: "right",
                onClick: _cache[2] || (_cache[2] = ($event) => jump(1))
              }, [
                vue.createVNode(vue.unref(Right))
              ]),
              _cache[5] || (_cache[5] = vue.createTextVNode()),
              vue.createElementVNode("div", {
                class: "double-right",
                onClick: _cache[3] || (_cache[3] = ($event) => jump(12))
              }, [
                vue.createVNode(vue.unref(DoubleRight))
              ])
            ])
          ]),
          _cache[11] || (_cache[11] = vue.createTextVNode()),
          vue.createElementVNode("div", _hoisted_6$g, [
            vue.createElementVNode("div", _hoisted_7$f, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(weekHeader.value, (d) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key: d.name,
                  class: vue.normalizeClass(["nut-calendarcard-day header", d.key === 0 || d.key === 6 ? "weekend" : ""])
                }, vue.toDisplayString(d.name), 3);
              }), 128))
            ]),
            _cache[10] || (_cache[10] = vue.createTextVNode()),
            vue.createElementVNode("div", _hoisted_8$9, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(days.value, (day) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key: `${day.year}-${day.month}-${day.date}`,
                  class: vue.normalizeClass(["nut-calendarcard-day", [day.type, ...getClasses(day)]]),
                  onClick: ($event) => handleDayClick(day)
                }, [
                  vue.createElementVNode("div", _hoisted_10$5, [
                    vue.renderSlot(_ctx.$slots, "top", { day })
                  ]),
                  _cache[8] || (_cache[8] = vue.createTextVNode()),
                  vue.createElementVNode("div", _hoisted_11$3, [
                    vue.renderSlot(_ctx.$slots, "default", { day }, () => [
                      vue.createTextVNode(vue.toDisplayString(day.date), 1)
                    ])
                  ]),
                  _cache[9] || (_cache[9] = vue.createTextVNode()),
                  vue.createElementVNode("div", _hoisted_12$3, [
                    vue.renderSlot(_ctx.$slots, "bottom", { day })
                  ])
                ], 10, _hoisted_9$8);
              }), 128))
            ])
          ])
        ], 512)), [
          [vue.vShow, days.value.length > 0]
        ]);
      };
    }
  }));
  withInstall(_sfc_main$1b);
  const CHECKBOX_KEY = Symbol("nut-checkbox");
  const { create: create$L, componentName: componentName$4 } = createComponent("checkbox");
  const _sfc_main$1a = create$L({
    props: {
      modelValue: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      textPosition: {
        type: String,
        default: "right"
      },
      iconSize: {
        type: [String, Number],
        default: ""
      },
      label: {
        type: String,
        default: ""
      },
      indeterminate: {
        type: Boolean,
        default: false
      },
      shape: {
        type: String,
        default: "round"
        // button
      }
    },
    emits: ["change", "update:modelValue"],
    setup(props, { emit, slots }) {
      const disabled = useFormDisabled(vue.toRef(props, "disabled"));
      const parent = vue.inject(CHECKBOX_KEY, null);
      const state = vue.reactive({
        partialSelect: props.indeterminate
      });
      const hasParent = vue.computed(() => !!parent);
      const pValue = vue.computed(() => {
        if (hasParent.value) {
          return parent.value.value.includes(props.label);
        } else {
          return props.modelValue;
        }
      });
      const pDisabled = vue.computed(() => {
        return hasParent.value ? parent.disabled.value ? parent.disabled.value : disabled.value : disabled.value;
      });
      const checked = vue.computed(() => !!props.modelValue);
      const color = vue.computed(() => {
        return !pDisabled.value ? state.partialSelect ? "nut-checkbox__icon--indeterminate" : !pValue.value ? "nut-checkbox__icon--unchecked" : "nut-checkbox__icon" : "nut-checkbox__icon--disable";
      });
      let updateType = "";
      const emitChange = (value, label) => {
        updateType = "click";
        emit("update:modelValue", value);
        emit("change", value, label);
      };
      vue.watch(
        () => props.modelValue,
        (v) => {
          if (updateType == "click") {
            updateType = "";
          } else {
            emit("change", v);
          }
        }
      );
      const renderIcon2 = () => {
        const { iconSize } = props;
        const iconNodeMap = {
          CheckNormal: slots.icon ? slots.icon : iconsVueTaro.CheckNormal,
          Checked: slots.checkedIcon ? slots.checkedIcon : iconsVueTaro.Checked,
          CheckDisabled: slots.indeterminate ? slots.indeterminate : iconsVueTaro.CheckDisabled
        };
        const iconNode = state.partialSelect ? iconNodeMap.CheckDisabled : !pValue.value ? iconNodeMap.CheckNormal : iconNodeMap.Checked;
        const size = pxCheck(iconSize);
        return vue.h(iconNode, {
          width: size,
          height: size,
          size,
          class: color.value
        });
      };
      const renderLabel = () => {
        var _a;
        return vue.h(
          "view",
          {
            class: `${componentName$4}__label ${pDisabled.value ? `${componentName$4}__label--disabled` : ""}`
          },
          (_a = slots.default) == null ? void 0 : _a.call(slots)
        );
      };
      const renderButton = () => {
        var _a;
        return vue.h(
          "view",
          {
            class: `${componentName$4}__button ${pValue.value && `${componentName$4}__button--active`} ${pDisabled.value ? `${componentName$4}__button--disabled` : ""}`
          },
          (_a = slots.default) == null ? void 0 : _a.call(slots)
        );
      };
      const handleClick = () => {
        var _a, _b;
        if (pDisabled.value) return;
        if (checked.value && state.partialSelect) {
          state.partialSelect = false;
          emitChange(checked.value, (_a = slots.default) == null ? void 0 : _a.call(slots)[0].children);
          return;
        }
        emitChange(!checked.value, (_b = slots.default) == null ? void 0 : _b.call(slots)[0].children);
        if (hasParent.value) {
          const value = parent.value.value;
          const max = parent.max.value;
          const { label } = props;
          const index = value.indexOf(label);
          if (index > -1) {
            value.splice(index, 1);
          } else if (index <= -1 && (value.length < max || !max)) {
            value.push(label);
          }
          parent.updateValue(value);
        }
      };
      vue.onMounted(() => {
        hasParent.value && parent.link(vue.getCurrentInstance());
      });
      vue.onBeforeUnmount(() => {
        hasParent.value && parent.unlink(vue.getCurrentInstance());
      });
      vue.watch(
        () => props.indeterminate,
        (newVal) => {
          state.partialSelect = newVal;
        }
      );
      return () => {
        return vue.h(
          "view",
          {
            class: `${componentName$4} ${componentName$4}--${props.shape} ${props.textPosition === "left" ? `${componentName$4}--reverse` : ""}`,
            onClick: handleClick
          },
          [props.shape == "button" ? renderButton() : [renderIcon2(), renderLabel()]]
        );
      };
    }
  });
  const { create: create$K, componentName: componentName$3 } = createComponent("checkbox-group");
  const _sfc_main$19 = create$K({
    props: {
      modelValue: {
        type: Array,
        default: () => []
      },
      disabled: {
        type: Boolean,
        default: false
      },
      max: {
        type: Number,
        default: 0
      }
    },
    emits: ["change", "update:modelValue"],
    setup(props, { slots, emit, expose }) {
      const state = vue.reactive({
        children: []
      });
      const link = (child) => {
        child.proxy && state.children.push(child.proxy);
      };
      const unlink = (child) => {
        child.proxy && (state.children = state.children.filter((p) => p !== child.proxy));
      };
      const updateValue = (value) => {
        emit("update:modelValue", value);
        emit("change", value);
      };
      const toggleAll = (checked) => {
        const values = [];
        if (checked) {
          state.children.forEach((item) => {
            if (!(item == null ? void 0 : item.disabled)) {
              values.push(item == null ? void 0 : item.label);
            }
          });
        }
        emit("update:modelValue", values);
      };
      const toggleReverse = () => {
        const value = state.children.filter((item) => {
          if (item == null ? void 0 : item.disabled) {
            return false;
          } else {
            return !props.modelValue.includes(item.label);
          }
        }).map((item) => item.label);
        emit("update:modelValue", value);
      };
      vue.provide(CHECKBOX_KEY, {
        value: vue.computed(() => props.modelValue),
        disabled: vue.computed(() => props.disabled),
        max: vue.computed(() => props.max),
        updateValue,
        link,
        unlink
      });
      vue.watch(
        () => props.modelValue,
        (value) => {
          emit("change", value);
        }
      );
      expose({ toggleAll, toggleReverse });
      return () => {
        var _a;
        return vue.h(
          "view",
          {
            class: componentName$3
          },
          (_a = slots.default) == null ? void 0 : _a.call(slots)
        );
      };
    }
  });
  const DEFAULT_FILED_NAMES = {
    text: "text",
    value: "value",
    children: "children",
    className: "className"
  };
  const usePicker = (props, emit) => {
    const state = vue.reactive({
      formattedColumns: props.columns
    });
    const columnFieldNames = vue.computed(() => {
      return __spreadValues(__spreadValues({}, DEFAULT_FILED_NAMES), props.fieldNames);
    });
    const defaultValues = vue.ref([]);
    const defaultIndexes = vue.computed(() => {
      const fields = columnFieldNames.value;
      return columnsList.value.map((column, index) => {
        const targetIndex = column.findIndex((item) => item[fields.value] === defaultValues.value[index]);
        return targetIndex === -1 ? 0 : targetIndex;
      });
    });
    const pickerColumn = vue.ref([]);
    const swipeRef = (el) => {
      if (el && pickerColumn.value.length < columnsList.value.length) {
        pickerColumn.value.push(el);
      }
    };
    const selectedOptions = vue.computed(() => {
      const fields = columnFieldNames.value;
      return columnsList.value.map((column, index) => {
        return column.find((item) => item[fields.value] === defaultValues.value[index]) || column[0];
      });
    });
    const columnsType = vue.computed(() => {
      const firstColumn = state.formattedColumns[0];
      const fields = columnFieldNames.value;
      if (firstColumn) {
        if (Array.isArray(firstColumn)) {
          return "multiple";
        }
        if (fields.children in firstColumn) {
          return "cascade";
        }
      }
      return "single";
    });
    const columnsList = vue.computed(() => {
      let result = [];
      switch (columnsType.value) {
        case "multiple":
          result = state.formattedColumns;
          break;
        case "cascade":
          result = formatCascade(state.formattedColumns, defaultValues.value ? defaultValues.value : []);
          break;
        default:
          result = [state.formattedColumns];
          break;
      }
      return result;
    });
    const formatCascade = (columns, defaultValues2) => {
      const formatted = [];
      const fields = columnFieldNames.value;
      let cursor = {
        text: "",
        value: "",
        [fields.children]: columns
      };
      let columnIndex = 0;
      while (cursor && cursor[fields.children]) {
        const options = cursor[fields.children];
        const value = defaultValues2[columnIndex];
        let index = options.findIndex((columnItem) => columnItem[fields.value] === value);
        if (index === -1) index = 0;
        cursor = cursor[fields.children][index];
        columnIndex++;
        formatted.push(options);
      }
      return formatted;
    };
    const cancel = () => {
      emit("cancel", {
        selectedValue: defaultValues.value,
        selectedOptions: selectedOptions.value
      });
    };
    const changeHandler = (columnIndex, option) => {
      var _a;
      const fields = columnFieldNames.value;
      if (option && Object.keys(option).length) {
        defaultValues.value = defaultValues.value ? defaultValues.value : [];
        if (columnsType.value === "cascade") {
          defaultValues.value[columnIndex] = (_a = option[fields.value]) != null ? _a : "";
          let index = columnIndex;
          let cursor = option;
          while (cursor && cursor[fields.children] && cursor[fields.children][0]) {
            defaultValues.value[index + 1] = cursor[fields.children][0][fields.value];
            index++;
            cursor = cursor[fields.children][0];
          }
          if (cursor && cursor[fields.children] && cursor[fields.children].length === 0) {
            defaultValues.value = defaultValues.value.slice(0, index + 1);
          }
        } else {
          defaultValues.value[columnIndex] = Object.prototype.hasOwnProperty.call(option, fields.value) ? option[fields.value] : "";
        }
        emit("change", {
          columnIndex,
          selectedValue: defaultValues.value,
          selectedOptions: selectedOptions.value
        });
      }
    };
    const confirm = () => {
      const fields = columnFieldNames.value;
      if (defaultValues.value && !defaultValues.value.length) {
        columnsList.value.forEach((columns) => {
          defaultValues.value.push(columns[0][fields.value]);
        });
      }
      emit("confirm", {
        selectedValue: defaultValues.value,
        selectedOptions: selectedOptions.value
      });
    };
    const isSameValue = (valA, valB) => JSON.stringify(valA) === JSON.stringify(valB);
    vue.watch(
      () => props.modelValue,
      (newValues) => {
        if (!isSameValue(newValues, defaultValues.value)) {
          defaultValues.value = newValues;
        }
      },
      { deep: true, immediate: true }
    );
    vue.watch(
      defaultValues,
      (newValues) => {
        if (!isSameValue(newValues, props.modelValue)) {
          emit("update:modelValue", newValues);
        }
      },
      { deep: true }
    );
    vue.watch(
      () => props.columns,
      (val) => {
        state.formattedColumns = val;
      }
    );
    return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
      columnsType,
      columnsList,
      columnFieldNames,
      cancel,
      changeHandler,
      confirm,
      defaultValues,
      defaultIndexes,
      pickerColumn,
      swipeRef,
      selectedOptions,
      isSameValue
    });
  };
  const { create: create$J } = createComponent("picker-column");
  const _sfc_main$18 = create$J({
    props: {
      // 当前选中项
      value: [String, Number],
      columnsType: String,
      column: {
        type: Array,
        default: () => []
      },
      // 是否开启3D效果
      threeDimensional: {
        type: Boolean,
        default: true
      },
      swipeDuration: {
        type: [Number, String],
        default: 1e3
      },
      visibleOptionNum: {
        type: [Number, String],
        default: 7
      },
      optionHeight: {
        type: [Number, String],
        default: 36
      },
      fieldNames: {
        type: Object,
        default: () => ({})
      },
      // 特殊环境判断
      taro: {
        type: Boolean,
        default: false
      }
    },
    emits: ["click", "change"],
    setup(props, { emit }) {
      const touch = useTouch();
      const state = vue.reactive({
        touchParams: {
          startY: 0,
          endY: 0,
          startTime: 0,
          endTime: 0,
          lastY: 0,
          lastTime: 0
        },
        currIndex: 1,
        transformY: 0,
        scrollDistance: 0,
        rotation: 20
      });
      const roller = vue.ref(null);
      const moving = vue.ref(false);
      const touchDeg = vue.ref(0);
      const touchTime = vue.ref(0);
      const DEFAULT_DURATION = 200;
      const INERTIA_TIME = 300;
      const INERTIA_DISTANCE = 15;
      const touchRollerStyle = vue.computed(() => {
        return {
          transition: `transform ${touchTime.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
          transform: `rotate3d(1, 0, 0, ${touchDeg.value})`,
          top: `calc(50% - ${+props.optionHeight / 2}px)`
        };
      });
      const touchTileStyle = vue.computed(() => {
        const { optionHeight } = props;
        return {
          transition: `transform ${touchTime.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
          transform: `translate3d(0, ${state.scrollDistance}px, 0)`,
          top: `calc(50% - ${+optionHeight / 2}px)`,
          height: `${optionHeight}px`
        };
      });
      const setRollerStyle = (index) => {
        return `transform: rotate3d(1, 0, 0, ${-state.rotation * index}deg) translate3d(0px, 0px, 104px)`;
      };
      const maskStyles = vue.computed(() => {
        return {
          backgroundSize: `100% ${(+props.visibleOptionNum - 1) * +props.optionHeight / 2}px`
        };
      });
      const onTouchStart = (event) => {
        touch.start(event);
        if (moving.value && !props.taro) {
          const dom = roller.value;
          const { transform } = window.getComputedStyle(dom);
          if (props.threeDimensional) {
            const circle = Math.floor(parseInt(touchDeg.value) / 360);
            const cos = +transform.split(", ")[5];
            const sin = +transform.split(", ")[6] < 0 ? 180 : 0;
            const endDeg = circle * 360 + Math.acos(cos) / Math.PI * 180 + sin;
            state.scrollDistance = -Math.abs((endDeg / state.rotation - 1) * +props.optionHeight);
          } else {
            state.scrollDistance = +transform.slice(7, transform.length - 1).split(", ")[5];
          }
        }
        preventDefault(event, true);
        state.touchParams.startY = touch.deltaY.value;
        state.touchParams.startTime = Date.now();
        state.transformY = state.scrollDistance;
      };
      const onTouchMove = (event) => {
        touch.move(event);
        if (touch.isVertical()) {
          moving.value = true;
          preventDefault(event, true);
        }
        state.touchParams.lastY = touch.deltaY.value;
        let move = state.touchParams.lastY - state.touchParams.startY;
        setMove(move);
      };
      const onTouchEnd = () => {
        state.touchParams.lastY = touch.deltaY.value;
        state.touchParams.lastTime = Date.now();
        let move = state.touchParams.lastY - state.touchParams.startY;
        let moveTime = state.touchParams.lastTime - state.touchParams.startTime;
        if (moveTime <= INERTIA_TIME && Math.abs(move) > INERTIA_DISTANCE) {
          const distance = momentum(move, moveTime);
          setMove(distance, "end", +props.swipeDuration);
          return;
        } else {
          setMove(move, "end");
        }
        setTimeout(() => {
          touch.reset();
          moving.value = false;
        }, 0);
      };
      const momentum = (distance, duration) => {
        const speed = Math.abs(distance / duration);
        distance = speed / 3e-3 * (distance < 0 ? -1 : 1);
        return distance;
      };
      const isHidden = (index) => {
        if (index >= state.currIndex + 8 || index <= state.currIndex - 8) {
          return true;
        } else {
          return false;
        }
      };
      const isCurrPick = (index) => {
        return index == state.currIndex;
      };
      const setTransform = (translateY = 0, type, time = DEFAULT_DURATION, deg) => {
        if (type === "end") {
          touchTime.value = time;
        } else {
          touchTime.value = 0;
        }
        touchDeg.value = deg;
        state.scrollDistance = translateY;
      };
      const setMove = (move, type, time) => {
        const { optionHeight } = props;
        let updateMove = move + state.transformY;
        if (type === "end") {
          if (updateMove > 0) {
            updateMove = 0;
          }
          if (updateMove < -(props.column.length - 1) * +optionHeight) {
            updateMove = -(props.column.length - 1) * +optionHeight;
          }
          let endMove = Math.round(updateMove / +optionHeight) * +optionHeight;
          let deg = `${(Math.abs(Math.round(endMove / +optionHeight)) + 1) * state.rotation}deg`;
          setTransform(endMove, type, time, deg);
          state.currIndex = Math.abs(Math.round(endMove / +optionHeight)) + 1;
        } else {
          let deg = 0;
          let currentDeg = (-updateMove / +optionHeight + 1) * state.rotation;
          const maxDeg = (props.column.length + 1) * state.rotation;
          const minDeg = 0;
          deg = clamp(currentDeg, minDeg, maxDeg);
          if (minDeg < deg && deg < maxDeg) {
            setTransform(updateMove, null, void 0, deg + "deg");
            state.currIndex = Math.abs(Math.round(updateMove / +optionHeight)) + 1;
          }
        }
      };
      const setChooseValue = () => {
        emit("change", props.column[state.currIndex - 1]);
      };
      const modifyStatus = (type) => {
        const { column } = props;
        let index = column.findIndex((columnItem) => columnItem[props.fieldNames.value] === props.value);
        state.currIndex = index === -1 ? 1 : index + 1;
        let move = index === -1 ? 0 : index * +props.optionHeight;
        type && setChooseValue();
        setMove(-move);
      };
      const stopMomentum = () => {
        moving.value = false;
        touchTime.value = 0;
        setChooseValue();
      };
      vue.watch(
        () => props.column,
        () => {
          if (props.column && props.column.length > 0) {
            state.transformY = 0;
            modifyStatus(false);
          }
        },
        {
          deep: true
        }
      );
      vue.watch(
        () => props.value,
        () => {
          state.transformY = 0;
          modifyStatus(false);
        },
        {
          deep: true
        }
      );
      vue.onMounted(() => {
        modifyStatus(true);
      });
      return __spreadProps(__spreadValues(__spreadValues({}, vue.toRefs(state)), vue.toRefs(props)), {
        setRollerStyle,
        isHidden,
        isCurrPick,
        roller,
        onTouchStart,
        onTouchMove,
        onTouchEnd,
        touchRollerStyle,
        touchTileStyle,
        setMove,
        stopMomentum,
        pxCheck,
        maskStyles
      });
    }
  });
  function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "nut-picker__list",
      onTouchstart: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
      onTouchmove: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
      onTouchend: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
    }, [
      vue.createElementVNode("view", {
        ref: "roller",
        class: "nut-picker-roller",
        style: vue.normalizeStyle(_ctx.threeDimensional ? _ctx.touchRollerStyle : _ctx.touchTileStyle),
        onTransitionend: _cache[0] || (_cache[0] = (...args) => _ctx.stopMomentum && _ctx.stopMomentum(...args))
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.column, (item, index) => {
          var _a;
          return vue.openBlock(), vue.createElementBlock(vue.Fragment, {
            key: (_a = item[_ctx.fieldNames.value]) != null ? _a : index
          }, [
            item && item[_ctx.fieldNames.text] && _ctx.threeDimensional ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: vue.normalizeClass(["nut-picker-roller-item", {
                "nut-picker-roller-item-hidden": _ctx.isHidden(index + 1),
                [item[_ctx.fieldNames.className]]: item[_ctx.fieldNames.className]
              }]),
              style: vue.normalizeStyle(_ctx.setRollerStyle(index + 1))
            }, vue.toDisplayString(item[_ctx.fieldNames.text]), 7)) : vue.createCommentVNode("", true),
            _cache[4] || (_cache[4] = vue.createTextVNode()),
            item && item[_ctx.fieldNames.text] && !_ctx.threeDimensional ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: vue.normalizeClass(["nut-picker-roller-item-tile", {
                [item[_ctx.fieldNames.className]]: item[_ctx.fieldNames.className],
                "nut-picker-roller-item-selected": _ctx.isCurrPick(index + 1)
              }]),
              style: vue.normalizeStyle({ height: _ctx.pxCheck(_ctx.optionHeight), lineHeight: _ctx.pxCheck(_ctx.optionHeight) })
            }, vue.toDisplayString(item[_ctx.fieldNames.text]), 7)) : vue.createCommentVNode("", true)
          ], 64);
        }), 128))
      ], 36),
      _cache[5] || (_cache[5] = vue.createTextVNode()),
      vue.createElementVNode("view", {
        class: "nut-picker-roller-mask",
        style: vue.normalizeStyle(_ctx.maskStyles)
      }, null, 4)
    ], 32);
  }
  const NutPickerColumn = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["render", _sfc_render$J]]);
  const baseProps = {
    modelValue: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ""
    },
    cancelText: {
      type: String,
      default: ""
    },
    okText: {
      type: String,
      default: ""
    },
    columns: {
      type: Array,
      default: () => {
        return [];
      }
    },
    threeDimensional: {
      type: Boolean,
      default: false
    },
    swipeDuration: {
      type: [Number, String],
      default: 1e3
    },
    showToolbar: {
      type: Boolean,
      default: true
    },
    visibleOptionNum: {
      type: [Number, String],
      default: 7
    },
    optionHeight: {
      type: [Number, String],
      default: 36
    },
    fieldNames: {
      type: Object,
      default: () => ({})
    }
  };
  const { create: create$I } = createComponent("picker");
  const cN$h = "NutPicker";
  const _sfc_main$17 = create$I({
    components: {
      NutPickerColumn
    },
    props: baseProps,
    emits: ["cancel", "change", "confirm", "update:modelValue"],
    setup(props, { emit }) {
      const translate = useLocale(cN$h);
      const {
        changeHandler,
        confirm,
        defaultValues,
        defaultIndexes,
        columnsList,
        columnsType,
        columnFieldNames,
        cancel
      } = usePicker(props, emit);
      const state = vue.reactive({
        show: false,
        picking: false,
        ENV: Taro.getEnv(),
        ENV_TYPE: Taro.ENV_TYPE
      });
      const pickerColumn = vue.ref([]);
      const swipeRef = (el) => {
        if (el && pickerColumn.value.length < columnsList.value.length) {
          pickerColumn.value.push(el);
        }
      };
      const confirmHandler = () => {
        if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
          pickerColumn.value.length > 0 && pickerColumn.value.forEach((column) => {
            column.stopMomentum();
          });
          confirm();
        } else {
          if (state.picking) {
            setTimeout(() => {
              confirm();
            }, 0);
          } else {
            confirm();
          }
        }
      };
      const pickerViewStyles = vue.computed(() => {
        const styles = {};
        styles.height = `${+props.visibleOptionNum * +props.optionHeight}px`;
        styles["--lineHeight"] = `${+props.optionHeight}px`;
        return styles;
      });
      const tileChange = (data) => {
        var _a, _b;
        const prevDefaultValue = defaultIndexes.value;
        let changeIndex = 0;
        for (let i = 0; i < ((_a = data.detail.value) == null ? void 0 : _a.length); i++) {
          if (prevDefaultValue[i] !== ((_b = data.detail.value) == null ? void 0 : _b[i])) {
            changeIndex = i;
            break;
          }
        }
        changeHandler(changeIndex, columnsList.value[changeIndex][data.detail.value[changeIndex]]);
      };
      const handlePickstart = () => {
        state.picking = true;
      };
      const handlePickend = () => {
        state.picking = false;
      };
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        columnsType,
        columnsList,
        columnFieldNames,
        cancel,
        changeHandler,
        confirmHandler,
        defaultValues,
        pickerColumn,
        swipeRef,
        defaultIndexes,
        tileChange,
        handlePickstart,
        translate,
        handlePickend,
        pickerViewStyles,
        pxCheck
      });
    }
  });
  const _hoisted_1$V = { class: "nut-picker" };
  const _hoisted_2$J = {
    key: 0,
    class: "nut-picker__bar"
  };
  const _hoisted_3$y = { class: "nut-picker__title" };
  const _hoisted_4$u = ["indicator-style", "value"];
  const _hoisted_5$k = ["filed-names"];
  function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_picker_column = vue.resolveComponent("nut-picker-column");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$V, [
      _ctx.showToolbar ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$J, [
        vue.createElementVNode("view", {
          class: "nut-picker__cancel nut-picker__left nut-picker__button",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.cancel && _ctx.cancel(...args))
        }, vue.toDisplayString(_ctx.cancelText || _ctx.translate("cancel")), 1),
        _cache[5] || (_cache[5] = vue.createTextVNode()),
        vue.createElementVNode("view", _hoisted_3$y, vue.toDisplayString(_ctx.title), 1),
        _cache[6] || (_cache[6] = vue.createTextVNode()),
        vue.createElementVNode("view", {
          class: "nut-picker__confirm nut-picker__right nut-picker__button",
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.confirmHandler && _ctx.confirmHandler(...args))
        }, vue.toDisplayString(_ctx.okText || _ctx.translate("confirm")), 1)
      ])) : vue.createCommentVNode("", true),
      _cache[7] || (_cache[7] = vue.createTextVNode()),
      vue.renderSlot(_ctx.$slots, "top"),
      _cache[8] || (_cache[8] = vue.createTextVNode()),
      _ctx.ENV != _ctx.ENV_TYPE.WEB ? (vue.openBlock(), vue.createElementBlock("picker-view", vue.mergeProps({
        key: 1,
        "indicator-style": `height:${_ctx.optionHeight}px`,
        value: _ctx.defaultIndexes,
        style: _ctx.pickerViewStyles
      }, _ctx.$attrs, {
        "immediate-change": true,
        onChange: _cache[2] || (_cache[2] = (...args) => _ctx.tileChange && _ctx.tileChange(...args)),
        onPickstart: _cache[3] || (_cache[3] = (...args) => _ctx.handlePickstart && _ctx.handlePickstart(...args)),
        onPickend: _cache[4] || (_cache[4] = (...args) => _ctx.handlePickend && _ctx.handlePickend(...args))
      }), [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.columnsList, (column, columnIndex) => {
          return vue.openBlock(), vue.createElementBlock("picker-view-column", {
            key: columnIndex,
            "filed-names": _ctx.columnFieldNames
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(column, (item, index) => {
              var _a;
              return vue.openBlock(), vue.createElementBlock("view", {
                key: (_a = item[_ctx.columnFieldNames.value]) != null ? _a : index,
                class: vue.normalizeClass(["nut-picker-roller-item-tarotile", {
                  [item[_ctx.columnFieldNames.className]]: item[_ctx.columnFieldNames.className]
                }]),
                style: vue.normalizeStyle({
                  lineHeight: _ctx.pxCheck(_ctx.optionHeight)
                })
              }, vue.toDisplayString(item[_ctx.columnFieldNames.text]), 7);
            }), 128))
          ], 8, _hoisted_5$k);
        }), 128))
      ], 16, _hoisted_4$u)) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "nut-picker__column",
        style: vue.normalizeStyle(_ctx.pickerViewStyles)
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.columnsList, (column, columnIndex) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: columnIndex,
            class: "nut-picker__columnitem"
          }, [
            vue.createVNode(_component_nut_picker_column, {
              ref_for: true,
              ref: _ctx.swipeRef,
              column,
              "columns-type": _ctx.columnsType,
              "field-names": _ctx.columnFieldNames,
              value: _ctx.defaultValues[columnIndex],
              "three-dimensional": false,
              "swipe-duration": _ctx.swipeDuration,
              "visible-option-num": _ctx.visibleOptionNum,
              "option-height": _ctx.optionHeight,
              taro: "",
              onChange: (option) => {
                _ctx.changeHandler(columnIndex, option);
              }
            }, null, 8, ["column", "columns-type", "field-names", "value", "swipe-duration", "visible-option-num", "option-height", "onChange"])
          ]);
        }), 128))
      ], 4)),
      _cache[9] || (_cache[9] = vue.createTextVNode()),
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  const Picker = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["render", _sfc_render$I]]);
  const { create: create$H } = createComponent("date-picker");
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  function isDate(val) {
    return isDate$1(val) && !isNaN(val.getTime());
  }
  const zhCNType = {
    day: "日",
    year: "年",
    month: "月",
    hour: "时",
    minute: "分",
    seconds: "秒"
  };
  const _sfc_main$16 = create$H({
    components: {
      NutPicker: Picker
    },
    props: {
      modelValue: null,
      title: {
        type: String,
        default: ""
      },
      okText: {
        type: String,
        default: ""
      },
      cancelText: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "date"
      },
      isShowChinese: {
        type: Boolean,
        default: false
      },
      minuteStep: {
        type: Number,
        default: 1
      },
      minDate: {
        type: Date,
        default: () => new Date(currentYear - 10, 0, 1),
        validator: isDate
      },
      maxDate: {
        type: Date,
        default: () => new Date(currentYear + 10, 11, 31),
        validator: isDate
      },
      formatter: {
        type: Function,
        default: null
      },
      // 是否开启3D效果
      threeDimensional: {
        type: Boolean,
        default: true
      },
      // 惯性滚动 时长
      swipeDuration: {
        type: [Number, String],
        default: 1e3
      },
      filter: Function,
      showToolbar: {
        type: Boolean,
        default: true
      },
      visibleOptionNum: {
        type: [Number, String],
        default: 7
      },
      optionHeight: {
        type: [Number, String],
        default: 36
      }
    },
    emits: ["click", "cancel", "change", "confirm", "update:modelValue"],
    setup(props, { emit }) {
      const state = vue.reactive({
        currentDate: /* @__PURE__ */ new Date(),
        title: props.title,
        selectedValue: []
      });
      const formatValue = (value) => {
        if (!isDate(value)) {
          value = props.minDate;
        }
        let timestmp = Math.max(value.getTime(), props.minDate.getTime());
        timestmp = Math.min(timestmp, props.maxDate.getTime());
        return new Date(timestmp);
      };
      function getMonthEndDay(year, month) {
        return 32 - new Date(year, month - 1, 32).getDate();
      }
      const getBoundary = (type, value) => {
        const boundary = type == "min" ? props.minDate : props.maxDate;
        const year = boundary.getFullYear();
        let month = 1;
        let date = 1;
        let hour = 0;
        let minute = 0;
        if (type === "max") {
          month = 12;
          date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
          hour = 23;
          minute = 59;
        }
        let seconds = minute;
        if (value.getFullYear() === year) {
          month = boundary.getMonth() + 1;
          if (value.getMonth() + 1 === month) {
            date = boundary.getDate();
            if (value.getDate() === date) {
              hour = boundary.getHours();
              if (value.getHours() === hour) {
                minute = boundary.getMinutes();
                if (value.getMinutes() === minute) {
                  seconds = boundary.getSeconds();
                }
              }
            }
          }
        }
        return {
          [`${type}Year`]: year,
          [`${type}Month`]: month,
          [`${type}Date`]: date,
          [`${type}Hour`]: hour,
          [`${type}Minute`]: minute,
          [`${type}Seconds`]: seconds
        };
      };
      const ranges = vue.computed(() => {
        const { maxYear, maxDate, maxMonth, maxHour, maxMinute, maxSeconds } = getBoundary("max", state.currentDate);
        const { minYear, minDate, minMonth, minHour, minMinute, minSeconds } = getBoundary("min", state.currentDate);
        let result = [
          {
            type: "year",
            range: [minYear, maxYear]
          },
          {
            type: "month",
            range: [minMonth, maxMonth]
          },
          {
            type: "day",
            range: [minDate, maxDate]
          },
          {
            type: "hour",
            range: [minHour, maxHour]
          },
          {
            type: "minute",
            range: [minMinute, maxMinute]
          },
          {
            type: "seconds",
            range: [minSeconds, maxSeconds]
          }
        ];
        return generateList(result);
      });
      const columns = vue.computed(() => {
        const val = ranges.value.map((res, columnIndex) => {
          return generateValue(res.range[0], res.range[1], getDateIndex(res.type), res.type, columnIndex);
        });
        return val;
      });
      const changeHandler = ({
        columnIndex,
        selectedValue,
        selectedOptions
      }) => {
        let formatDate = [];
        selectedValue.forEach((item) => {
          formatDate.push(item);
        });
        if (props.type == "month-day" && formatDate.length < 3) {
          formatDate.unshift(new Date(state.currentDate || props.minDate || props.maxDate).getFullYear());
        }
        if (props.type == "year-month" && formatDate.length < 3) {
          formatDate.push(new Date(state.currentDate || props.minDate || props.maxDate).getDate());
        }
        const year = Number(formatDate[0]);
        const month = Number(formatDate[1]) - 1;
        const day = Math.min(Number(formatDate[2]), getMonthEndDay(Number(formatDate[0]), Number(formatDate[1])));
        let date = null;
        if (props.type === "date" || props.type === "month-day" || props.type === "year-month") {
          date = new Date(year, month, day);
        } else if (props.type === "datetime") {
          date = new Date(year, month, day, Number(formatDate[3]), Number(formatDate[4]));
        } else if (props.type === "datehour") {
          date = new Date(year, month, day, Number(formatDate[3]));
        } else if (props.type === "hour-minute" || props.type === "time") {
          date = new Date(state.currentDate);
          const year2 = date.getFullYear();
          const month2 = date.getMonth();
          const day2 = date.getDate();
          date = new Date(year2, month2, day2, Number(formatDate[0]), Number(formatDate[1]), Number(formatDate[2] || 0));
        }
        state.currentDate = formatValue(date);
        emit("change", { columnIndex, selectedValue, selectedOptions });
      };
      const formatterOption = (type, value) => {
        const { formatter, isShowChinese } = props;
        let fOption = null;
        if (formatter) {
          fOption = formatter(type, { text: padZero(value, 2), value: padZero(value, 2) });
        } else {
          const padMin = padZero(value, 2);
          const fatter = isShowChinese ? zhCNType[type] : "";
          fOption = { text: padMin + fatter, value: padMin };
        }
        return fOption;
      };
      const generateValue = (min, max, val, type, columnIndex) => {
        const arr = [];
        let index = 0;
        while (min <= max) {
          arr.push(formatterOption(type, min));
          if (type === "minute") {
            min += props.minuteStep;
          } else {
            min++;
          }
          if (min <= Number(val)) {
            index++;
          }
        }
        state.selectedValue[columnIndex] = arr[index].value;
        return props.filter ? props.filter(type, arr) : arr;
      };
      const getDateIndex = (type) => {
        if (type === "year") {
          return state.currentDate.getFullYear();
        } else if (type === "month") {
          return state.currentDate.getMonth() + 1;
        } else if (type === "day") {
          return state.currentDate.getDate();
        } else if (type === "hour") {
          return state.currentDate.getHours();
        } else if (type === "minute") {
          return state.currentDate.getMinutes();
        } else if (type === "seconds") {
          return state.currentDate.getSeconds();
        }
        return 0;
      };
      const closeHandler = (val) => {
        emit("cancel", val);
      };
      const confirm = (val) => {
        emit("confirm", val);
      };
      const generateList = (list) => {
        switch (props.type) {
          case "date":
            list = list.slice(0, 3);
            break;
          case "datetime":
            list = list.slice(0, 5);
            break;
          case "time":
            list = list.slice(3, 6);
            break;
          case "year-month":
            list = list.slice(0, 2);
            break;
          case "month-day":
            list = list.slice(1, 3);
            break;
          case "datehour":
            list = list.slice(0, 4);
            break;
          case "hour-minute":
            list = list.slice(3, 5);
            break;
        }
        return list;
      };
      const getSelectedValue = (time) => {
        const res = [
          time.getFullYear(),
          time.getMonth() + 1,
          time.getDate(),
          time.getHours(),
          time.getMinutes(),
          time.getSeconds()
        ];
        return generateList(res.map((i) => String(i)));
      };
      vue.onBeforeMount(() => {
        state.currentDate = formatValue(props.modelValue);
      });
      vue.watch(
        () => props.modelValue,
        (value) => {
          const newValues = formatValue(value);
          const isSameValue = JSON.stringify(newValues) === JSON.stringify(state.currentDate);
          if (!isSameValue) {
            state.currentDate = newValues;
            state.selectedValue = getSelectedValue(newValues);
          }
        }
      );
      vue.watch(
        () => state.currentDate,
        (newValues) => {
          const isSameValue = JSON.stringify(newValues) === JSON.stringify(props.modelValue);
          if (!isSameValue) {
            emit("update:modelValue", newValues);
            Taro.nextTick(() => {
              state.selectedValue = getSelectedValue(newValues);
            });
          }
        }
      );
      vue.watch(
        () => props.title,
        (val) => {
          state.title = val;
        }
      );
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        changeHandler,
        closeHandler,
        confirm,
        columns
      });
    }
  });
  function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_picker = vue.resolveComponent("nut-picker");
    return vue.openBlock(), vue.createBlock(_component_nut_picker, {
      modelValue: _ctx.selectedValue,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.selectedValue = $event),
      "ok-text": _ctx.okText,
      "cancel-text": _ctx.cancelText,
      columns: _ctx.columns,
      title: _ctx.title,
      "three-dimensional": _ctx.threeDimensional,
      "swipe-duration": _ctx.swipeDuration,
      "show-toolbar": _ctx.showToolbar,
      "visible-option-num": _ctx.visibleOptionNum,
      "option-height": _ctx.optionHeight,
      onCancel: _ctx.closeHandler,
      onChange: _ctx.changeHandler,
      onConfirm: _ctx.confirm
    }, {
      top: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "top")
      ]),
      default: vue.withCtx(() => [
        _cache[1] || (_cache[1] = vue.createTextVNode()),
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["modelValue", "ok-text", "cancel-text", "columns", "title", "three-dimensional", "swipe-duration", "show-toolbar", "visible-option-num", "option-height", "onCancel", "onChange", "onConfirm"]);
  }
  const DatePicker = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["render", _sfc_render$H]]);
  const _hoisted_1$U = {
    key: 0,
    class: "nut-input-number__text--readonly"
  };
  const _hoisted_2$I = ["min", "max", "disabled", "readonly", "value"];
  const _sfc_main$15 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutInputNumber",
    inheritAttrs: false
  }), {
    __name: "input-number.taro",
    props: {
      modelValue: { default: 0 },
      inputWidth: { default: "" },
      buttonSize: { default: "" },
      min: { default: 1 },
      max: { default: 9999 },
      step: { default: 1 },
      decimalPlaces: { default: 0 },
      disabled: { type: Boolean, default: false },
      readonly: { type: Boolean, default: false }
    },
    emits: ["update:modelValue", "change", "blur", "focus", "reduce", "add", "overlimit"],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const disabled = useFormDisabled(vue.toRef(props, "disabled"));
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-input-number";
        return {
          [prefixCls2]: true,
          [`${prefixCls2}--disabled`]: disabled.value
        };
      });
      const fixedDecimalPlaces = (v) => {
        return Number(v).toFixed(Number(props.decimalPlaces));
      };
      const change = (event) => {
        const input = event.target;
        emit("update:modelValue", input.value, event);
        emit("change", input.value, event);
      };
      const emitChange = (value, event) => {
        let output_value = fixedDecimalPlaces(value);
        emit("update:modelValue", output_value, event);
        if (Number(props.modelValue) !== Number(output_value)) emit("change", output_value, event);
      };
      const addAllow = (value = Number(props.modelValue)) => {
        return value < Number(props.max) && !disabled.value;
      };
      const reduceAllow = (value = Number(props.modelValue)) => {
        return value > Number(props.min) && !disabled.value;
      };
      const reduce = (event) => {
        if (disabled.value) return;
        emit("reduce", event);
        let output_value = Number(props.modelValue) - Number(props.step);
        if (reduceAllow() && output_value >= Number(props.min)) {
          emitChange(output_value, event);
        } else {
          emitChange(Number(props.min), event);
          emit("overlimit", event, "reduce");
        }
      };
      const add = (event) => {
        if (disabled.value) return;
        emit("add", event);
        let output_value = Number(props.modelValue) + Number(props.step);
        if (addAllow() && output_value <= Number(props.max)) {
          emitChange(output_value, event);
        } else {
          emitChange(Number(props.max), event);
          emit("overlimit", event, "add");
        }
      };
      const focus = (event) => {
        if (disabled.value) return;
        if (props.readonly) return;
        emit("focus", event);
      };
      const blur = (event) => {
        if (disabled.value) return;
        if (props.readonly) return;
        const input = event.target;
        let value = Number(input.value);
        if (value < Number(props.min)) {
          value = Number(props.min);
        } else if (value > Number(props.max)) {
          value = Number(props.max);
        }
        emitChange(value, event);
        emit("blur", event);
      };
      const format = (val) => {
        let value = Number(val);
        if (value < Number(props.min)) {
          value = Number(props.min);
        } else if (value > Number(props.max)) {
          value = Number(props.max);
        }
        return value;
      };
      vue.watch(
        () => [props.max, props.min],
        () => {
          if (Number(props.min) > Number(props.max)) {
            console.warn("[NutUI] <InputNumber>", "props.max < props.min");
          }
          const value = format(props.modelValue);
          if (value !== Number(props.modelValue)) {
            emitChange(value, {});
          }
        }
      );
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(classes.value)
        }, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["nut-input-number__icon nut-input-number__left", { "nut-input-number__icon--disabled": !reduceAllow() }]),
            onClick: reduce
          }, [
            vue.renderSlot(_ctx.$slots, "left-icon", {}, () => [
              vue.createVNode(vue.unref(iconsVueTaro.Minus), {
                size: vue.unref(pxCheck)(_ctx.buttonSize)
              }, null, 8, ["size"])
            ])
          ], 2),
          _cache[0] || (_cache[0] = vue.createTextVNode()),
          _ctx.readonly ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$U, vue.toDisplayString(_ctx.modelValue), 1)) : (vue.openBlock(), vue.createElementBlock("input", vue.mergeProps({
            key: 1,
            class: "nut-input-number__text--input",
            type: "number"
          }, _ctx.$attrs, {
            min: _ctx.min,
            max: _ctx.max,
            style: { width: vue.unref(pxCheck)(_ctx.inputWidth), height: vue.unref(pxCheck)(_ctx.buttonSize) },
            disabled: vue.unref(disabled) ? vue.unref(disabled) : void 0,
            readonly: _ctx.readonly ? _ctx.readonly : void 0,
            value: _ctx.modelValue,
            onInput: change,
            onBlur: blur,
            onFocus: focus
          }), null, 16, _hoisted_2$I)),
          _cache[1] || (_cache[1] = vue.createTextVNode()),
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["nut-input-number__icon nut-input-number__right", { "nut-input-number__icon--disabled": !addAllow() }]),
            onClick: add
          }, [
            vue.renderSlot(_ctx.$slots, "right-icon", {}, () => [
              vue.createVNode(vue.unref(iconsVueTaro.Plus), {
                size: vue.unref(pxCheck)(_ctx.buttonSize)
              }, null, 8, ["size"])
            ])
          ], 2)
        ], 2);
      };
    }
  }));
  withInstall(_sfc_main$15);
  function trimExtraChar(value, char, regExp) {
    const index = value.indexOf(char);
    if (index === -1) {
      return value;
    }
    if (char === "-" && index !== 0) {
      return value.slice(0, index);
    }
    return value.slice(0, index + 1) + value.slice(index).replace(regExp, "");
  }
  function formatNumber(value, allowDot = true, allowMinus = true) {
    if (allowDot) {
      value = trimExtraChar(value, ".", /\./g);
    } else {
      value = value.split(".")[0];
    }
    if (allowMinus) {
      value = trimExtraChar(value, "-", /-/g);
    } else {
      value = value.replace(/-/, "");
    }
    const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
    return value.replace(regExp, "");
  }
  const _hoisted_1$T = { class: "nut-input-value" };
  const _hoisted_2$H = { class: "nut-input-inner" };
  const _hoisted_3$x = {
    key: 0,
    class: "nut-input-left-box"
  };
  const _hoisted_4$t = { class: "nut-input-box" };
  const _hoisted_5$j = {
    key: 1,
    class: "nut-input-word-limit"
  };
  const _hoisted_6$f = { class: "nut-input-word-num" };
  const _hoisted_7$e = { class: "nut-input-right-box" };
  const _sfc_main$14 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutInput",
    inheritAttrs: false
  }), {
    __name: "input.taro",
    props: {
      type: { default: "text" },
      modelValue: { default: "" },
      placeholder: { default: "" },
      inputAlign: { default: "left" },
      required: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      readonly: { type: Boolean, default: false },
      maxLength: { default: "" },
      clearable: { type: Boolean, default: false },
      clearSize: { default: "14" },
      border: { type: Boolean, default: true },
      formatTrigger: { default: "onChange" },
      formatter: {},
      showWordLimit: { type: Boolean, default: false },
      autofocus: { type: Boolean, default: false },
      confirmType: { default: "done" },
      error: { type: Boolean, default: false },
      showClearIcon: { type: Boolean, default: false },
      adjustPosition: { type: Boolean, default: true },
      alwaysSystem: { type: Boolean, default: false }
    },
    emits: ["update:modelValue", "blur", "focus", "clear", "keypress", "click", "clickInput", "confirm"],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const disabled = useFormDisabled(vue.toRef(props, "disabled"));
      const active = vue.ref(false);
      const inputRef = vue.ref();
      const getModelValue = () => {
        var _a;
        return String((_a = props.modelValue) != null ? _a : "");
      };
      const renderInput = (type) => {
        let inputType = { type };
        if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
          if (type === "number") {
            inputType = {
              type: "tel",
              inputmode: "numeric"
            };
          }
          if (type === "digit") {
            inputType = {
              type: "text",
              inputmode: "decimal"
            };
          }
        }
        return vue.h("input", inputType);
      };
      const state = vue.reactive({
        focused: false,
        validateFailed: false,
        // 校验失败
        validateMessage: ""
        // 校验信息
      });
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-input";
        return {
          [prefixCls2]: true,
          [`${prefixCls2}--disabled`]: disabled.value,
          [`${prefixCls2}--required`]: props.required,
          [`${prefixCls2}--error`]: props.error,
          [`${prefixCls2}--border`]: props.border
        };
      });
      const styles = vue.computed(() => {
        return {
          textAlign: props.inputAlign
        };
      });
      const onInput = (event) => {
        if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
          if (!event.target.composing) {
            _onInput(event);
          }
        } else {
          _onInput(event);
        }
      };
      const _onInput = (event) => {
        const input = event.target;
        let value = input.value;
        updateValue(value);
      };
      const updateValue = (value, trigger = "onChange") => {
        emit("update:modelValue", value);
        if (props.maxLength && value.length > Number(props.maxLength)) {
          value = value.slice(0, Number(props.maxLength));
        }
        if (["number", "digit"].includes(props.type)) {
          const isDigit = props.type === "digit";
          value = formatNumber(value, isDigit, isDigit);
        }
        if (props.formatter && trigger === props.formatTrigger) {
          value = props.formatter(value);
        }
        if (value !== props.modelValue) {
          emit("update:modelValue", value);
        }
      };
      const onFocus = (event) => {
        if (disabled.value || props.readonly) {
          return;
        }
        active.value = true;
        emit("focus", event);
      };
      const onBlur = (event) => {
        if (disabled.value || props.readonly) {
          return;
        }
        setTimeout(() => {
          active.value = false;
        }, 200);
        const input = event.target;
        let value = input.value;
        if (props.maxLength && value.length > Number(props.maxLength)) {
          value = value.slice(0, Number(props.maxLength));
        }
        updateValue(getModelValue(), "onBlur");
        emit("blur", event);
      };
      const clear = (event) => {
        event.stopPropagation();
        if (disabled.value) return;
        emit("update:modelValue", "", event);
        emit("clear", "", event);
      };
      const resetValidation = () => {
        if (state.validateFailed) {
          state.validateFailed = false;
          state.validateMessage = "";
        }
      };
      const onClickInput = (event) => {
        if (disabled.value) {
          return;
        }
        emit("clickInput", event);
      };
      const onClick = (event) => {
        emit("click", event);
      };
      const startComposing = ({ target }) => {
        if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
          target.composing = true;
        }
      };
      const endComposing = ({ target }) => {
        if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
          if (target.composing) {
            target.composing = false;
            target.dispatchEvent(new Event("input"));
          }
        }
      };
      const onKeyup = (e) => {
        if (Taro.getEnv() === Taro.ENV_TYPE.WEB && e.key === "Enter") {
          emit("confirm", e);
        }
      };
      const onConfirm = (e) => {
        emit("confirm", e);
      };
      vue.watch(
        () => props.modelValue,
        () => {
          updateValue(getModelValue());
          resetValidation();
        }
      );
      vue.onMounted(() => {
        if (props.autofocus) {
          inputRef.value.focus();
        }
        updateValue(getModelValue(), props.formatTrigger);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(classes.value),
          onClick
        }, [
          vue.createElementVNode("view", _hoisted_1$T, [
            vue.createElementVNode("view", _hoisted_2$H, [
              _ctx.$slots.left ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$x, [
                vue.renderSlot(_ctx.$slots, "left")
              ])) : vue.createCommentVNode("", true),
              _cache[2] || (_cache[2] = vue.createTextVNode()),
              vue.createElementVNode("view", _hoisted_4$t, [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(renderInput(_ctx.type)), vue.mergeProps(_ctx.$attrs, {
                  ref_key: "inputRef",
                  ref: inputRef,
                  class: "input-text",
                  style: styles.value,
                  maxlength: _ctx.maxLength ? _ctx.maxLength : void 0,
                  placeholder: _ctx.placeholder,
                  disabled: vue.unref(disabled) ? vue.unref(disabled) : void 0,
                  readonly: _ctx.readonly ? _ctx.readonly : void 0,
                  value: _ctx.modelValue,
                  "format-trigger": _ctx.formatTrigger,
                  autofocus: _ctx.autofocus ? true : void 0,
                  enterkeyhint: _ctx.confirmType,
                  "adjust-position": _ctx.adjustPosition,
                  "always-system": _ctx.alwaysSystem,
                  onInput,
                  onFocus,
                  onBlur,
                  onClick: onClickInput,
                  onChange: endComposing,
                  onCompositionend: endComposing,
                  onCompositionstart: startComposing,
                  onConfirm,
                  onKeyup
                }), null, 16, ["style", "maxlength", "placeholder", "disabled", "readonly", "value", "format-trigger", "autofocus", "enterkeyhint", "adjust-position", "always-system"])),
                _cache[0] || (_cache[0] = vue.createTextVNode()),
                _ctx.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "nut-input-disabled-mask",
                  onClick: onClickInput
                })) : vue.createCommentVNode("", true),
                _cache[1] || (_cache[1] = vue.createTextVNode()),
                _ctx.showWordLimit && _ctx.maxLength ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$j, [
                  vue.createElementVNode("span", _hoisted_6$f, vue.toDisplayString(getModelValue() ? getModelValue().length : 0), 1),
                  vue.createTextVNode("/" + vue.toDisplayString(_ctx.maxLength), 1)
                ])) : vue.createCommentVNode("", true)
              ]),
              _cache[3] || (_cache[3] = vue.createTextVNode()),
              _ctx.clearable && !_ctx.readonly ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "nut-input-clear-box",
                onClick: clear
              }, [
                vue.renderSlot(_ctx.$slots, "clear", {}, () => [
                  vue.createVNode(vue.unref(iconsVueTaro.MaskClose), {
                    class: "nut-input-clear",
                    size: _ctx.clearSize,
                    width: _ctx.clearSize,
                    height: _ctx.clearSize
                  }, null, 8, ["size", "width", "height"])
                ])
              ], 512)), [
                [vue.vShow, (active.value || _ctx.showClearIcon) && getModelValue().length > 0]
              ]) : vue.createCommentVNode("", true),
              _cache[4] || (_cache[4] = vue.createTextVNode()),
              vue.createElementVNode("view", _hoisted_7$e, [
                vue.renderSlot(_ctx.$slots, "right")
              ])
            ])
          ])
        ], 2);
      };
    }
  }));
  withInstall(_sfc_main$14);
  const RADIO_KEY = Symbol("nut-radio");
  const _sfc_main$13 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutRadio"
  }), {
    __name: "radio.taro",
    props: {
      disabled: { type: Boolean, default: false },
      shape: { default: "round" },
      label: { type: [String, Number, Boolean], default: "" },
      iconSize: { default: "" },
      size: { default: "normal" }
    },
    setup(__props) {
      const props = __props;
      const disabled = useFormDisabled(vue.toRef(props, "disabled"));
      const parent = vue.inject(RADIO_KEY, null);
      const checked = vue.computed(() => {
        return parent.label.value === props.label;
      });
      const iconClasses = vue.computed(() => {
        return !disabled.value ? checked.value ? "nut-radio__icon" : "nut-radio__icon--unchecked" : "nut-radio__icon--disable";
      });
      const realIconSize = vue.computed(() => {
        return pxCheck(props.iconSize);
      });
      const labelClasses = vue.computed(() => {
        return {
          "nut-radio__label": true,
          "nut-radio__label--disabled": disabled.value
        };
      });
      const buttonClasses = vue.computed(() => {
        return {
          "nut-radio__button": true,
          "nut-radio__button--active": checked.value,
          [`nut-radio__button--${props.size}`]: true,
          "nut-radio__button--disabled": props.disabled
        };
      });
      const handleClick = () => {
        if (checked.value || disabled.value) return;
        parent.updateValue(props.label);
      };
      const reverseState = vue.computed(() => parent.position.value === "left");
      const radioClasses = vue.computed(() => {
        return {
          "nut-radio": true,
          [`nut-radio--${props.shape}`]: true,
          "nut-radio--reverse": reverseState.value
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(radioClasses.value),
          onClick: handleClick
        }, [
          _ctx.shape === "button" ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: vue.normalizeClass(buttonClasses.value)
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 2)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
            checked.value ? vue.renderSlot(_ctx.$slots, "checkedIcon", { key: 0 }, () => [
              vue.createVNode(vue.unref(iconsVueTaro.CheckChecked), {
                size: realIconSize.value,
                class: vue.normalizeClass(iconClasses.value)
              }, null, 8, ["size", "class"])
            ]) : vue.renderSlot(_ctx.$slots, "icon", { key: 1 }, () => [
              vue.createVNode(vue.unref(iconsVueTaro.CheckNormal), {
                size: realIconSize.value,
                class: vue.normalizeClass(iconClasses.value)
              }, null, 8, ["size", "class"])
            ]),
            _cache[0] || (_cache[0] = vue.createTextVNode()),
            vue.createElementVNode("view", {
              class: vue.normalizeClass(labelClasses.value)
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 2)
          ], 64))
        ], 2);
      };
    }
  }));
  withInstall(_sfc_main$13);
  const _sfc_main$12 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutRadioGroup"
  }), {
    __name: "radio-group.taro",
    props: {
      modelValue: { type: [String, Number, Boolean], default: "" },
      direction: { default: "vertical" },
      textPosition: { default: "right" }
    },
    emits: ["change", "update:modelValue"],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const updateValue = (value) => {
        emit("update:modelValue", value);
      };
      vue.provide(RADIO_KEY, {
        label: vue.readonly(vue.computed(() => props.modelValue)),
        position: vue.readonly(vue.computed(() => props.textPosition)),
        updateValue
      });
      vue.watch(
        () => props.modelValue,
        (value) => {
          emit("change", value);
        }
      );
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(["nut-radio-group", `nut-radio-group--${_ctx.direction}`])
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2);
      };
    }
  }));
  withInstall(_sfc_main$12);
  const _hoisted_1$S = { class: "nut-rate" };
  const _hoisted_2$G = ["id"];
  const _hoisted_3$w = { class: "nut-rate-item__icon--full" };
  const _hoisted_4$s = {
    key: 0,
    class: "nut-rate-item__icon--half"
  };
  const _hoisted_5$i = {
    key: 1,
    class: "nut-rate-item__icon--half"
  };
  const _sfc_main$11 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutRate"
  }), {
    __name: "rate.taro",
    props: {
      count: { default: 5 },
      modelValue: { default: 0 },
      customIcon: { default: () => iconsVueTaro.StarFillN },
      size: {},
      activeColor: { default: "" },
      voidColor: { default: "" },
      readonly: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      allowHalf: { type: Boolean, default: false },
      spacing: {}
    },
    emits: ["update:modelValue", "change"],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const refRandomId = Math.random().toString(36).slice(-8);
      const disabled = useFormDisabled(vue.toRef(props, "disabled"));
      const rateRefs = vue.ref([]);
      const updateVal = (value) => {
        emit("update:modelValue", value);
        emit("change", value);
      };
      const onClick = (e, index) => {
        if (disabled.value || props.readonly) return;
        let value = 0;
        if (index === 1 && props.modelValue === index) {
          value = 0;
        } else {
          value = index;
          if (props.allowHalf && e == 2) {
            value -= 0.5;
          }
        }
        updateVal(value);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$S, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(Number(_ctx.count), (n) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              id: "rateRefs-" + vue.unref(refRandomId) + n,
              key: n,
              ref_for: true,
              ref_key: "rateRefs",
              ref: rateRefs,
              class: "nut-rate-item",
              style: vue.normalizeStyle(n < Number(_ctx.count) ? { marginRight: vue.unref(pxCheck)(_ctx.spacing) } : {})
            }, [
              vue.createElementVNode("view", _hoisted_3$w, [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(
                  vue.unref(renderIcon)(_ctx.customIcon, {
                    width: _ctx.size,
                    height: _ctx.size,
                    size: _ctx.size,
                    color: n <= Number(_ctx.modelValue) ? _ctx.activeColor : _ctx.voidColor
                  })
                ), {
                  class: vue.normalizeClass(["nut-rate-item__icon", { "nut-rate-item__icon--disabled": vue.unref(disabled) || n > Number(_ctx.modelValue) }]),
                  onClick: ($event) => onClick(1, n)
                }, null, 8, ["class", "onClick"]))
              ]),
              _cache[0] || (_cache[0] = vue.createTextVNode()),
              _ctx.allowHalf && Number(_ctx.modelValue) + 1 > n ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$s, [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(
                  vue.unref(renderIcon)(_ctx.customIcon, {
                    width: _ctx.size,
                    height: _ctx.size,
                    size: _ctx.size,
                    color: n <= Number(_ctx.modelValue) + 1 ? _ctx.activeColor : _ctx.voidColor
                  })
                ), {
                  class: "nut-rate-item__icon",
                  onClick: ($event) => onClick(2, n)
                }, null, 8, ["onClick"]))
              ])) : _ctx.allowHalf && Number(_ctx.modelValue) + 1 < n ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$i, [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(renderIcon)(_ctx.customIcon, { width: _ctx.size, height: _ctx.size, size: _ctx.size, color: _ctx.voidColor })), {
                  class: "nut-rate-item__icon nut-rate-item__icon--disabled",
                  onClick: ($event) => onClick(2, n)
                }, null, 8, ["onClick"]))
              ])) : vue.createCommentVNode("", true)
            ], 12, _hoisted_2$G);
          }), 128))
        ]);
      };
    }
  }));
  withInstall(_sfc_main$11);
  const { create: create$G } = createComponent("short-password");
  const cN$g = "NutShortPassword";
  const _sfc_main$10 = create$G({
    components: {
      NutPopup: Popup,
      Tips: iconsVueTaro.Tips
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      desc: {
        type: String,
        default: ""
      },
      tips: {
        type: String,
        default: ""
      },
      visible: {
        type: Boolean,
        default: false
      },
      modelValue: {
        type: String,
        default: ""
      },
      errorMsg: {
        type: String,
        default: ""
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      },
      length: {
        type: [String, Number],
        // 4～6
        default: 6
      },
      lockScroll: {
        type: Boolean,
        default: true
      }
    },
    emits: ["update:modelValue", "update:visible", "complete", "tips", "close", "focus"],
    setup(props, { emit }) {
      const translate = useLocale(cN$g);
      const realInput = vue.ref(props.modelValue);
      const comLen = vue.computed(() => range(Number(props.length)));
      const show = vue.ref(props.visible);
      function focus(event) {
        event.stopPropagation();
        emit("focus");
      }
      vue.watch(
        () => props.visible,
        (value) => {
          show.value = value;
        }
      );
      vue.watch(
        () => props.modelValue,
        (value) => {
          realInput.value = value;
          if (String(value).length === comLen.value) {
            emit("complete", value);
          }
        }
      );
      function close() {
        emit("update:visible", false);
        emit("close");
      }
      function range(val) {
        return Math.min(Math.max(4, val), 6);
      }
      function onTips() {
        emit("tips");
      }
      vue.onMounted(() => {
        Taro.eventCenter.once(Taro.getCurrentInstance().router.onReady, () => {
        });
      });
      return {
        comLen,
        realInput,
        range,
        close,
        onTips,
        focus,
        show,
        translate
      };
    }
  });
  const _hoisted_1$R = { class: "nut-short-password" };
  const _hoisted_2$F = { class: "nut-short-password-title" };
  const _hoisted_3$v = { class: "nut-short-password-subtitle" };
  const _hoisted_4$r = { class: "nut-short-password-wrapper" };
  const _hoisted_5$h = {
    key: 0,
    class: "nut-short-password__item-icon"
  };
  const _hoisted_6$e = { class: "nut-short-password__message" };
  const _hoisted_7$d = { class: "nut-short-password--error" };
  function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_tips = vue.resolveComponent("tips");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$R, [
      vue.createVNode(_component_nut_popup, {
        visible: _ctx.show,
        "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => _ctx.show = $event),
        style: {
          padding: "30px 24px 20px 24px",
          borderRadius: "12px",
          textAlign: "center",
          top: "45%"
        },
        closeable: true,
        "close-on-click-overlay": _ctx.closeOnClickOverlay,
        "lock-scroll": _ctx.lockScroll,
        "catch-move": _ctx.lockScroll,
        onClickCloseIcon: _ctx.close,
        onClickOverlay: _ctx.close
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", _hoisted_2$F, vue.toDisplayString(_ctx.title || _ctx.translate("title")), 1),
          _cache[5] || (_cache[5] = vue.createTextVNode()),
          vue.createElementVNode("view", _hoisted_3$v, vue.toDisplayString(_ctx.desc || _ctx.translate("desc")), 1),
          _cache[6] || (_cache[6] = vue.createTextVNode()),
          vue.createElementVNode("view", _hoisted_4$r, [
            vue.createElementVNode("view", {
              class: "nut-short-password__list",
              onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.focus && _ctx.focus(...args))
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(new Array(_ctx.comLen), (sublen, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: "nut-short-password__item"
                }, [
                  String(_ctx.realInput).length > index ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$h)) : vue.createCommentVNode("", true)
                ]);
              }), 128))
            ], 32)
          ]),
          _cache[7] || (_cache[7] = vue.createTextVNode()),
          vue.createElementVNode("view", _hoisted_6$e, [
            vue.createElementVNode("view", _hoisted_7$d, vue.toDisplayString(_ctx.errorMsg), 1),
            _cache[4] || (_cache[4] = vue.createTextVNode()),
            _ctx.tips || _ctx.translate("tips") ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "nut-short-password--forget",
              onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onTips && _ctx.onTips(...args))
            }, [
              vue.createVNode(_component_tips, {
                class: "icon",
                size: "11px"
              }),
              _cache[3] || (_cache[3] = vue.createTextVNode()),
              vue.createElementVNode("view", null, vue.toDisplayString(_ctx.tips || _ctx.translate("tips")), 1)
            ])) : vue.createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "catch-move", "onClickCloseIcon", "onClickOverlay"])
    ]);
  }
  const ShortPassword = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["render", _sfc_render$G]]);
  const _hoisted_1$Q = ["rows", "disabled", "value", "maxlength", "placeholder", "auto-focus"];
  const _hoisted_2$E = {
    key: 0,
    class: "nut-textarea__limit"
  };
  const cN$f = "NutTextarea";
  const _sfc_main$$ = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: cN$f,
    inheritAttrs: false
  }), {
    __name: "textarea.taro",
    props: {
      modelValue: { default: "" },
      textAlign: {},
      limitShow: { type: Boolean, default: false },
      maxLength: { default: "" },
      rows: { default: "2" },
      placeholder: { default: "" },
      readonly: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      autosize: { type: [Boolean, Object], default: false },
      autofocus: { type: Boolean, default: false }
    },
    emits: ["update:modelValue", "change", "blur", "focus"],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const disabled = useFormDisabled(vue.toRef(props, "disabled"));
      const translate = useLocale(cN$f);
      const textareaRef = vue.ref(null);
      const textareaHeight = vue.ref(20);
      const heightSet = vue.ref("auto");
      const composing = vue.ref(false);
      const env = Taro.getEnv();
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-textarea";
        return {
          [prefixCls2]: true,
          [`${prefixCls2}--disabled`]: disabled.value
        };
      });
      const styles = vue.computed(() => {
        const styleObj = {};
        if (props.textAlign) {
          styleObj["textAlign"] = props.textAlign;
        }
        if (props.autosize) {
          styleObj["height"] = heightSet.value;
        }
        return styleObj;
      });
      const copyTextStyle = vue.ref({
        wordBreak: "break-all",
        width: "0"
      });
      const emitChange = (value, event) => {
        if (props.maxLength && value.length > Number(props.maxLength)) {
          value = value.substring(0, Number(props.maxLength));
        }
        emit("update:modelValue", value, event);
        emit("change", value, event);
      };
      const change = (event) => {
        if (env === Taro.ENV_TYPE.WEB) {
          if (!composing.value) {
            _onInput(event);
          }
        } else {
          _onInput(event);
        }
      };
      const _onInput = (event) => {
        const input = event.target;
        let value = input.value;
        if (props.maxLength && value.length > Number(props.maxLength)) {
          value = value.slice(0, Number(props.maxLength));
        }
        emitChange(value, event);
      };
      const focus = (event) => {
        if (disabled.value || props.readonly) return;
        emit("focus", event);
      };
      const blur = (event) => {
        if (disabled.value || props.readonly) return;
        const input = event.target;
        const value = input.value;
        emitChange(value, event);
        emit("blur", event);
      };
      const getContentHeight = () => {
        heightSet.value = "auto";
        let height = textareaHeight.value;
        if (typeof props.autosize === "object") {
          const { maxHeight, minHeight } = props.autosize;
          if (maxHeight !== void 0) {
            height = Math.min(height, maxHeight);
          }
          if (minHeight !== void 0) {
            height = Math.max(height, minHeight);
          }
        }
        if (height) {
          heightSet.value = height + "px";
        }
      };
      vue.watch(
        () => props.modelValue,
        () => {
          if (props.autosize) {
            setTimeout(() => {
              copyHeight();
            }, 100);
          }
        }
      );
      const copyHeight = () => {
        const query = Taro.createSelectorQuery();
        query.select(".nut-textarea__cpoyText").boundingClientRect();
        query.exec((res) => {
          if (res[0]) {
            if (props.modelValue == "") {
              textareaHeight.value = 20;
            } else {
              textareaHeight.value = res[0]["height"] || 20;
            }
            vue.nextTick(getContentHeight);
          }
        });
      };
      const getRefHeight = () => {
        const query = Taro.createSelectorQuery();
        query.selectAll(".nut-textarea__textarea").boundingClientRect();
        let uid = textareaRef.value ? textareaRef.value.uid : "0";
        query.exec((res) => {
          if (res[0] && textareaRef.value) {
            let _item = Array.from(res[0]).filter((item) => item.id == uid);
            if (_item[0]) {
              if (env !== Taro.ENV_TYPE.WEAPP) {
                textareaHeight.value = _item[0]["height"] || 20;
              }
              copyTextStyle.value.width = _item[0]["width"] + "px";
            }
            vue.nextTick(getContentHeight);
          }
        });
      };
      const getRefWidth = () => {
        const query = Taro.createSelectorQuery();
        query.select(".nut-textarea__textarea").boundingClientRect();
        query.exec((res) => {
          if (res[0] && textareaRef.value) {
            copyTextStyle.value.width = res[0]["width"] + "px";
          }
        });
      };
      vue.onMounted(() => {
        if (props.autosize) {
          Taro.nextTick(() => {
            setTimeout(() => {
              if (env === "ALIPAY" || env === "WEB") {
                getRefWidth();
                copyHeight();
              } else {
                getRefHeight();
              }
            }, 300);
          });
        }
      });
      const startComposing = () => {
        if (env === Taro.ENV_TYPE.WEB) {
          composing.value = true;
        }
      };
      const endComposing = ({ target }) => {
        var _a;
        if (env === Taro.ENV_TYPE.WEB) {
          if (composing.value) {
            composing.value = false;
            if (target) {
              (_a = target.dispatchEvent) == null ? void 0 : _a.call(target, new Event("input"));
            }
          }
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(classes.value)
        }, [
          vue.createElementVNode("textarea", vue.mergeProps({
            ref_key: "textareaRef",
            ref: textareaRef
          }, _ctx.$attrs, {
            class: ["nut-textarea__textarea", vue.unref(env) == "ALIPAY" && "nut-textarea__ali"],
            style: styles.value,
            rows: _ctx.rows,
            disabled: vue.unref(disabled) || _ctx.readonly ? vue.unref(disabled) || _ctx.readonly : void 0,
            value: _ctx.modelValue,
            "show-count": false,
            maxlength: _ctx.maxLength ? _ctx.maxLength : -1,
            placeholder: _ctx.placeholder || vue.unref(translate)("placeholder"),
            "auto-focus": _ctx.autofocus ? true : void 0,
            onInput: change,
            onBlur: blur,
            onFocus: focus,
            onChange: endComposing,
            onCompositionend: endComposing,
            onCompositionstart: startComposing
          }), null, 16, _hoisted_1$Q),
          _cache[0] || (_cache[0] = vue.createTextVNode()),
          _ctx.limitShow ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$E, vue.toDisplayString(_ctx.modelValue ? _ctx.modelValue.length : 0) + "/" + vue.toDisplayString(_ctx.maxLength), 1)) : vue.createCommentVNode("", true),
          _cache[1] || (_cache[1] = vue.createTextVNode()),
          _ctx.autosize ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "nut-textarea__cpoyText",
            style: vue.normalizeStyle(copyTextStyle.value)
          }, vue.toDisplayString(_ctx.modelValue), 5)) : vue.createCommentVNode("", true)
        ], 2);
      };
    }
  }));
  withInstall(_sfc_main$$);
  class UploadOptions {
    constructor() {
      __publicField(this, "url", "");
      __publicField(this, "name", "file");
      __publicField(this, "fileType", "image");
      __publicField(this, "formData");
      __publicField(this, "sourceFile");
      __publicField(this, "method", "post");
      __publicField(this, "xhrState", 200);
      __publicField(this, "timeout", 30 * 1e3);
      __publicField(this, "headers", {});
      __publicField(this, "withCredentials", false);
      __publicField(this, "onStart");
      __publicField(this, "taroFilePath");
      __publicField(this, "onProgress");
      __publicField(this, "onSuccess");
      __publicField(this, "onFailure");
      __publicField(this, "beforeXhrUpload");
    }
  }
  let Uploader$1 = class Uploader {
    constructor(options) {
      __publicField(this, "options");
      this.options = options;
    }
    upload() {
      var _a;
      const options = this.options;
      const xhr = new XMLHttpRequest();
      xhr.timeout = options.timeout;
      if (xhr.upload) {
        xhr.upload.addEventListener(
          "progress",
          (e) => {
            var _a2;
            (_a2 = options.onProgress) == null ? void 0 : _a2.call(options, e, options);
          },
          false
        );
        xhr.onreadystatechange = () => {
          var _a2, _b;
          if (xhr.readyState === 4) {
            if (xhr.status == options.xhrState) {
              (_a2 = options.onSuccess) == null ? void 0 : _a2.call(options, xhr.responseText, options);
            } else {
              (_b = options.onFailure) == null ? void 0 : _b.call(options, xhr.responseText, options);
            }
          }
        };
        xhr.withCredentials = options.withCredentials;
        xhr.open(options.method, options.url, true);
        for (const [key, value] of Object.entries(options.headers)) {
          xhr.setRequestHeader(key, value);
        }
        (_a = options.onStart) == null ? void 0 : _a.call(options, options);
        if (options.beforeXhrUpload) {
          options.beforeXhrUpload(xhr, options);
        } else {
          xhr.send(options.formData);
        }
      } else {
        console.warn("浏览器不支持 XMLHttpRequest");
      }
    }
  };
  class UploaderTaro extends Uploader$1 {
    constructor(options) {
      super(options);
    }
    uploadTaro(uploadFile, env) {
      var _a;
      const options = this.options;
      if (env === "WEB") {
        this.upload();
      } else {
        if (options.beforeXhrUpload) {
          options.beforeXhrUpload(uploadFile, options);
        } else {
          const uploadTask = uploadFile({
            url: options.url,
            filePath: options.taroFilePath,
            fileType: options.fileType,
            header: __spreadValues({
              "Content-Type": "multipart/form-data"
            }, options.headers),
            //
            formData: options.formData,
            name: options.name,
            success(response) {
              var _a2, _b;
              if (options.xhrState == response.statusCode) {
                (_a2 = options.onSuccess) == null ? void 0 : _a2.call(options, response, options);
              } else {
                (_b = options.onFailure) == null ? void 0 : _b.call(options, response, options);
              }
            },
            fail(e) {
              var _a2;
              (_a2 = options.onFailure) == null ? void 0 : _a2.call(options, e, options);
            }
          });
          (_a = options.onStart) == null ? void 0 : _a.call(options, options);
          uploadTask.progress((res) => {
            var _a2;
            (_a2 = options.onProgress) == null ? void 0 : _a2.call(options, res, options);
          });
        }
      }
    }
  }
  class FileItem {
    constructor() {
      __publicField(this, "status", "ready");
      __publicField(this, "message", "");
      __publicField(this, "uid", (/* @__PURE__ */ new Date()).getTime().toString());
      __publicField(this, "name");
      __publicField(this, "url");
      __publicField(this, "type");
      __publicField(this, "path");
      __publicField(this, "percentage", 0);
      __publicField(this, "formData", {});
    }
  }
  const _hoisted_1$P = { class: "nut-progress" };
  const _sfc_main$_ = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutProgress"
  }), {
    __name: "progress.taro",
    props: {
      percentage: { default: 0 },
      size: { default: "base" },
      status: { default: "text" },
      strokeWidth: {},
      textInside: { type: Boolean, default: false },
      showText: { type: Boolean, default: true },
      strokeColor: {},
      textColor: {},
      textBackground: {},
      isShowPercentage: { type: Boolean, default: true }
    },
    setup(__props) {
      const props = __props;
      const height = vue.computed(() => {
        if (props.strokeWidth) {
          return props.strokeWidth + "px";
        }
        return void 0;
      });
      const percentage = vue.computed(() => {
        return Number(props.percentage) >= 100 ? 100 : Number(props.percentage);
      });
      const bgStyle = vue.computed(() => {
        return {
          width: percentage.value + "%",
          background: props.strokeColor || ""
        };
      });
      const textStyle = vue.computed(() => {
        return {
          color: props.textColor || ""
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$P, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["nut-progress-outer", [_ctx.showText && !_ctx.textInside ? "nut-progress-outer-part" : "", _ctx.size ? "nut-progress-" + _ctx.size : ""]]),
            style: vue.normalizeStyle({ height: height.value })
          }, [
            vue.createElementVNode("div", {
              class: vue.normalizeClass(["nut-progress-inner", _ctx.status === "active" ? "nut-active" : ""]),
              style: vue.normalizeStyle(bgStyle.value)
            }, null, 6),
            _cache[0] || (_cache[0] = vue.createTextVNode()),
            _ctx.showText && _ctx.textInside && !_ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "nut-progress-text nut-progress-insidetext",
              style: vue.normalizeStyle({
                lineHeight: height.value,
                left: `${percentage.value}%`,
                transform: `translate(-${+percentage.value}%,-50%)`,
                background: _ctx.textBackground || _ctx.strokeColor
              })
            }, [
              vue.createElementVNode("span", {
                style: vue.normalizeStyle(textStyle.value)
              }, vue.toDisplayString(percentage.value) + vue.toDisplayString(_ctx.isShowPercentage ? "%" : ""), 5)
            ], 4)) : vue.createCommentVNode("", true),
            _cache[1] || (_cache[1] = vue.createTextVNode()),
            _ctx.showText && _ctx.textInside && _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 1,
              class: "nut-progress-slot",
              style: vue.normalizeStyle({
                position: `absolute`,
                top: `50%`,
                left: `${percentage.value}%`,
                transform: `translate(-${+percentage.value}%,-50%)`
              })
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 4)) : vue.createCommentVNode("", true)
          ], 6),
          _cache[2] || (_cache[2] = vue.createTextVNode()),
          _ctx.showText && !_ctx.textInside ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: "nut-progress-text",
            style: vue.normalizeStyle({ lineHeight: height.value })
          }, [
            _ctx.status === "text" || _ctx.status === "active" ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 0,
              style: vue.normalizeStyle(textStyle.value)
            }, vue.toDisplayString(percentage.value) + vue.toDisplayString(_ctx.isShowPercentage ? "%" : ""), 5)) : _ctx.status === "icon" ? vue.renderSlot(_ctx.$slots, "icon-name", { key: 1 }, () => [
              vue.createVNode(vue.unref(iconsVueTaro.Checked), {
                width: "15px",
                height: "15px",
                color: "#439422"
              })
            ]) : vue.createCommentVNode("", true)
          ], 4)) : vue.createCommentVNode("", true)
        ]);
      };
    }
  }));
  withInstall(_sfc_main$_);
  const { create: create$F } = createComponent("uploader");
  const cN$e = "NutUploader";
  const _sfc_main$Z = create$F({
    components: {
      NutProgress: _sfc_main$_,
      NutButton: _sfc_main$1L,
      Photograph: iconsVueTaro.Photograph,
      Failure: iconsVueTaro.Failure,
      Loading: iconsVueTaro.Loading,
      Del: iconsVueTaro.Del,
      Link: iconsVueTaro.Link
    },
    props: {
      name: { type: String, default: "file" },
      url: { type: String, default: "" },
      sizeType: {
        type: Array,
        default: () => ["original", "compressed"]
      },
      sourceType: {
        type: Array,
        default: () => ["album", "camera"]
      },
      mediaType: {
        type: Array,
        default: () => ["image", "video", "mix"]
      },
      camera: {
        type: String,
        default: "back"
      },
      timeout: { type: [Number, String], default: 1e3 * 30 },
      // defaultFileList: { type: Array, default: () => new Array<FileItem>() },
      fileList: { type: Array, default: () => [] },
      isPreview: { type: Boolean, default: true },
      // picture、list
      listType: { type: String, default: "picture" },
      isDeletable: { type: Boolean, default: true },
      method: { type: String, default: "post" },
      capture: { type: Boolean, default: false },
      maximize: { type: [Number, String], default: Number.MAX_VALUE },
      maximum: { type: [Number, String], default: 9 },
      clearInput: { type: Boolean, default: true },
      accept: { type: String, default: "*" },
      headers: { type: Object, default: {} },
      data: { type: Object, default: {} },
      xhrState: { type: [Number, String], default: 200 },
      multiple: { type: Boolean, default: true },
      disabled: { type: Boolean, default: false },
      autoUpload: { type: Boolean, default: true },
      maxDuration: { type: Number, default: 10 },
      beforeUpload: {
        type: Function,
        default: null
      },
      beforeXhrUpload: {
        type: Function,
        default: null
      },
      beforeDelete: {
        type: Function,
        default: () => {
          return true;
        }
      },
      onChange: { type: Function },
      mode: {
        type: String,
        default: "aspectFit"
      }
    },
    emits: [
      "start",
      "progress",
      "oversize",
      "success",
      "failure",
      "change",
      "delete",
      "update:fileList",
      "fileItemClick"
    ],
    setup(props, { emit }) {
      const disabled = useFormDisabled(vue.toRef(props, "disabled"));
      const translate = useLocale(cN$e);
      const fileList = vue.ref(props.fileList);
      const uploadQueue = vue.ref([]);
      vue.watch(
        () => props.fileList,
        () => {
          fileList.value = props.fileList;
        }
      );
      const chooseImage = () => {
        if (disabled.value) {
          return;
        }
        if (Taro.getEnv() == "WEB") {
          let el = document.getElementById("taroChooseImage");
          if (el) {
            el == null ? void 0 : el.setAttribute("accept", props.accept);
          } else {
            const obj = document.createElement("input");
            obj.setAttribute("type", "file");
            obj.setAttribute("id", "taroChooseImage");
            obj.setAttribute("accept", props.accept);
            obj.setAttribute("style", "position: fixed; top: -4000px; left: -3000px; z-index: -300;");
            document.body.appendChild(obj);
          }
        }
        if (Taro.getEnv() == "WEAPP") {
          Taro.chooseMedia({
            /** 最多可以选择的文件个数 */
            count: props.multiple ? Number(props.maximum) - fileList.value.length : 1,
            /** 文件类型 */
            mediaType: props.mediaType,
            /** 图片和视频选择的来源 */
            sourceType: props.sourceType,
            /** 拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 30s 之间 */
            maxDuration: props.maxDuration,
            /** 仅对 mediaType 为 image 时有效，是否压缩所选文件 */
            sizeType: props.sizeType,
            /** 仅在 sourceType 为 camera 时生效，使用前置或后置摄像头 */
            camera: props.camera,
            /** 接口调用失败的回调函数 */
            fail: (res) => {
              emit("failure", res);
            },
            /** 接口调用成功的回调函数 */
            success: onChangeMedia
          });
        } else {
          Taro.chooseImage({
            // 选择数量
            count: props.multiple ? Number(props.maximum) - fileList.value.length : 1,
            // 可以指定是原图还是压缩图，默认二者都有
            sizeType: props.sizeType,
            sourceType: props.sourceType,
            success: onChangeImage,
            fail: (res) => {
              emit("failure", res);
            }
          });
        }
      };
      const onChangeMedia = (res) => {
        const { tempFiles } = res;
        const _files = filterFiles(tempFiles);
        if (props.beforeUpload) {
          props.beforeUpload(new Array().slice.call(_files)).then(
            (f) => {
              const _files2 = filterFiles(new Array().slice.call(f));
              if (!_files2.length) res.tempFiles = [];
              readFile(_files2);
            }
          );
        } else {
          readFile(_files);
        }
        emit("change", {
          fileList: fileList.value
        });
      };
      const onChangeImage = (res) => {
        const { tempFiles } = res;
        const _files = filterFiles(tempFiles);
        if (props.beforeUpload) {
          props.beforeUpload(new Array().slice.call(_files)).then(
            (f) => {
              const _files2 = filterFiles(new Array().slice.call(f));
              if (!_files2.length) res.tempFiles = [];
              readFile(_files2);
            }
          );
        } else {
          readFile(_files);
        }
        emit("change", {
          fileList: fileList.value
        });
      };
      const fileItemClick = (fileItem) => {
        emit("fileItemClick", { fileItem });
      };
      const executeUpload = (fileItem, index) => {
        const uploadOption = new UploadOptions();
        uploadOption.name = props.name;
        uploadOption.url = props.url;
        uploadOption.fileType = fileItem.type;
        uploadOption.formData = fileItem.formData;
        uploadOption.timeout = props.timeout * 1;
        uploadOption.method = props.method;
        uploadOption.xhrState = props.xhrState;
        uploadOption.method = props.method;
        uploadOption.headers = props.headers;
        uploadOption.taroFilePath = fileItem.path;
        uploadOption.beforeXhrUpload = props.beforeXhrUpload;
        uploadOption.onStart = (option) => {
          fileItem.status = "ready";
          fileItem.message = translate("readyUpload");
          clearUploadQueue(index);
          emit("start", option);
        };
        uploadOption.onProgress = (event, option) => {
          fileItem.status = "uploading";
          fileItem.message = translate("uploading");
          fileItem.percentage = event.progress;
          emit("progress", { event, option, percentage: fileItem.percentage });
        };
        uploadOption.onSuccess = (data, option) => {
          fileItem.status = "success";
          fileItem.message = translate("success");
          emit("success", {
            data,
            responseText: data,
            option,
            fileItem
          });
          emit("update:fileList", fileList.value);
        };
        uploadOption.onFailure = (data, option) => {
          fileItem.status = "error";
          fileItem.message = translate("error");
          emit("failure", {
            data,
            responseText: data,
            option,
            fileItem
          });
        };
        let task = new UploaderTaro(uploadOption);
        if (props.autoUpload) {
          task.uploadTaro(Taro.uploadFile, Taro.getEnv());
        } else {
          uploadQueue.value.push(
            new Promise((resolve) => {
              resolve(task);
            })
          );
        }
      };
      const clearUploadQueue = (index = -1) => {
        if (index > -1) {
          uploadQueue.value.splice(index, 1);
        } else {
          uploadQueue.value = [];
          fileList.value = [];
          emit("update:fileList", fileList.value);
        }
      };
      const submit = () => {
        Promise.all(uploadQueue.value).then((res) => {
          res.forEach((i) => i.uploadTaro(Taro.uploadFile, Taro.getEnv()));
        });
      };
      const readFile = (files) => {
        files.forEach((file, index) => {
          var _a, _b;
          let fileType = file.type;
          let filepath = file.tempFilePath || file.path;
          const fileItem = vue.reactive(new FileItem());
          fileItem.message = translate("ready");
          if (file.fileType) {
            fileType = file.fileType;
          } else {
            const imgReg = /\.(png|jpeg|jpg|webp|gif)$/i;
            if (!fileType && (imgReg.test(filepath) || filepath.includes("data:image"))) {
              fileType = "image";
            }
          }
          fileItem.path = filepath;
          fileItem.name = filepath;
          fileItem.status = "ready";
          fileItem.message = translate("waitingUpload");
          fileItem.type = fileType;
          if (Taro.getEnv() == "WEB") {
            const formData = new FormData();
            for (const [key, value] of Object.entries(props.data)) {
              formData.append(key, value);
            }
            formData.append(props.name, file.originalFileObj);
            fileItem.name = (_a = file.originalFileObj) == null ? void 0 : _a.name;
            fileItem.type = (_b = file.originalFileObj) == null ? void 0 : _b.type;
            fileItem.formData = formData;
          } else {
            fileItem.formData = props.data;
          }
          if (props.isPreview) {
            fileItem.url = fileType == "video" ? file.thumbTempFilePath : filepath;
          }
          fileList.value.push(fileItem);
          executeUpload(fileItem, index);
        });
      };
      const filterFiles = (files) => {
        const maximum = props.maximum * 1;
        const maximize = props.maximize * 1;
        const oversizes = new Array();
        files = files.filter((file) => {
          if (file.size > maximize) {
            oversizes.push(file);
            return false;
          } else {
            return true;
          }
        });
        if (oversizes.length) {
          emit("oversize", oversizes);
        }
        let currentFileLength = files.length + fileList.value.length;
        if (currentFileLength > maximum) {
          files.splice(files.length - (currentFileLength - maximum));
        }
        return files;
      };
      const deleted = (file, index) => {
        fileList.value.splice(index, 1);
        emit("delete", {
          file,
          fileList: fileList.value,
          index
        });
      };
      const onDelete = (file, index) => {
        if (disabled.value) return;
        clearUploadQueue(index);
        funInterceptor(props.beforeDelete, {
          args: [file, fileList.value],
          done: () => deleted(file, index)
        });
      };
      return {
        onDelete,
        fileList,
        disabled,
        chooseImage,
        fileItemClick,
        clearUploadQueue,
        submit
      };
    }
  });
  const _hoisted_1$O = { class: "nut-uploader" };
  const _hoisted_2$D = {
    key: 0,
    class: "nut-uploader__slot"
  };
  const _hoisted_3$u = {
    key: 0,
    class: "nut-uploader__preview-img"
  };
  const _hoisted_4$q = {
    key: 0,
    class: "nut-uploader__preview__progress"
  };
  const _hoisted_5$g = { class: "nut-uploader__preview__progress__msg" };
  const _hoisted_6$d = ["onClick"];
  const _hoisted_7$c = ["mode", "src", "onClick"];
  const _hoisted_8$8 = {
    key: 3,
    class: "nut-uploader__preview-img__file"
  };
  const _hoisted_9$7 = ["onClick"];
  const _hoisted_10$4 = { class: "file__name_tips" };
  const _hoisted_11$2 = { class: "tips" };
  const _hoisted_12$2 = {
    key: 1,
    class: "nut-uploader__preview-list"
  };
  const _hoisted_13$2 = ["onClick"];
  const _hoisted_14$2 = { class: "file__name_tips" };
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_button = vue.resolveComponent("nut-button");
    const _component_Failure = vue.resolveComponent("Failure");
    const _component_Loading = vue.resolveComponent("Loading");
    const _component_Link = vue.resolveComponent("Link");
    const _component_Del = vue.resolveComponent("Del");
    const _component_nut_progress = vue.resolveComponent("nut-progress");
    const _component_Photograph = vue.resolveComponent("Photograph");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$O, [
      _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$D, [
        vue.renderSlot(_ctx.$slots, "default"),
        _cache[0] || (_cache[0] = vue.createTextVNode()),
        Number(_ctx.maximum) - _ctx.fileList.length ? (vue.openBlock(), vue.createBlock(_component_nut_button, {
          key: 0,
          class: "nut-uploader__input",
          onClick: _ctx.chooseImage
        }, null, 8, ["onClick"])) : vue.createCommentVNode("", true)
      ])) : vue.createCommentVNode("", true),
      _cache[9] || (_cache[9] = vue.createTextVNode()),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.fileList, (item, index) => {
        var _a, _b;
        return vue.openBlock(), vue.createElementBlock("view", {
          key: item.uid,
          class: vue.normalizeClass(["nut-uploader__preview", [_ctx.listType]])
        }, [
          _ctx.listType == "picture" && !_ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$u, [
            item.status != "success" ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$q, [
              item.status != "ready" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                item.status == "error" ? (vue.openBlock(), vue.createBlock(_component_Failure, {
                  key: 0,
                  color: "#fff"
                })) : (vue.openBlock(), vue.createBlock(_component_Loading, {
                  key: 1,
                  name: "loading",
                  color: "#fff"
                }))
              ], 64)) : vue.createCommentVNode("", true),
              _cache[1] || (_cache[1] = vue.createTextVNode()),
              vue.createElementVNode("view", _hoisted_5$g, vue.toDisplayString(item.message), 1)
            ])) : vue.createCommentVNode("", true),
            _cache[2] || (_cache[2] = vue.createTextVNode()),
            _ctx.isDeletable ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "close",
              onClick: ($event) => _ctx.onDelete(item, index)
            }, [
              vue.renderSlot(_ctx.$slots, "delete-icon", {}, () => [
                vue.createVNode(_component_Failure)
              ])
            ], 8, _hoisted_6$d)) : vue.createCommentVNode("", true),
            _cache[3] || (_cache[3] = vue.createTextVNode()),
            (((_a = item == null ? void 0 : item.type) == null ? void 0 : _a.includes("image")) || ((_b = item == null ? void 0 : item.type) == null ? void 0 : _b.includes("video"))) && item.url ? (vue.openBlock(), vue.createElementBlock("img", {
              key: 2,
              class: "nut-uploader__preview-img__c",
              mode: _ctx.mode,
              src: item.url,
              onClick: ($event) => _ctx.fileItemClick(item)
            }, null, 8, _hoisted_7$c)) : (vue.openBlock(), vue.createElementBlock("view", _hoisted_8$8, [
              vue.createElementVNode("view", {
                class: "nut-uploader__preview-img__file__name",
                onClick: ($event) => _ctx.fileItemClick(item)
              }, [
                vue.createElementVNode("view", _hoisted_10$4, vue.toDisplayString(item.name), 1)
              ], 8, _hoisted_9$7)
            ])),
            _cache[4] || (_cache[4] = vue.createTextVNode()),
            vue.createElementVNode("view", _hoisted_11$2, vue.toDisplayString(item.name), 1)
          ])) : _ctx.listType == "list" ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_12$2, [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["nut-uploader__preview-img__file__name", [item.status]]),
              onClick: ($event) => _ctx.fileItemClick(item)
            }, [
              vue.createVNode(_component_Link, { class: "nut-uploader__preview-img__file__link" }),
              _cache[5] || (_cache[5] = vue.createTextVNode()),
              vue.createElementVNode("view", _hoisted_14$2, vue.toDisplayString(item.name), 1),
              _cache[6] || (_cache[6] = vue.createTextVNode()),
              _ctx.isDeletable ? (vue.openBlock(), vue.createBlock(_component_Del, {
                key: 0,
                color: "#808080",
                class: "nut-uploader__preview-img__file__del",
                onClick: vue.withModifiers(($event) => _ctx.onDelete(item, index), ["stop"])
              }, null, 8, ["onClick"])) : vue.createCommentVNode("", true)
            ], 10, _hoisted_13$2),
            _cache[7] || (_cache[7] = vue.createTextVNode()),
            item.status == "uploading" ? (vue.openBlock(), vue.createBlock(_component_nut_progress, {
              key: 0,
              size: "small",
              percentage: item.percentage,
              "stroke-color": "linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)",
              "show-text": false
            }, null, 8, ["percentage"])) : vue.createCommentVNode("", true)
          ])) : vue.createCommentVNode("", true)
        ], 2);
      }), 128)),
      _cache[10] || (_cache[10] = vue.createTextVNode()),
      _ctx.listType == "picture" && !_ctx.$slots.default && Number(_ctx.maximum) - _ctx.fileList.length ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: vue.normalizeClass(["nut-uploader__upload", [_ctx.listType]])
      }, [
        vue.renderSlot(_ctx.$slots, "upload-icon", {}, () => [
          vue.createVNode(_component_Photograph, { color: "#808080" })
        ]),
        _cache[8] || (_cache[8] = vue.createTextVNode()),
        vue.createVNode(_component_nut_button, {
          class: vue.normalizeClass(["nut-uploader__input", { disabled: _ctx.disabled }]),
          onClick: _ctx.chooseImage
        }, null, 8, ["class", "onClick"])
      ], 2)) : vue.createCommentVNode("", true)
    ]);
  }
  const Uploader = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["render", _sfc_render$F]]);
  const { create: create$E } = createComponent("number-keyboard");
  const cN$d = "NutNumberKeyboard";
  const _sfc_main$Y = create$E({
    components: {
      NutPopup: Popup
    },
    props: {
      confirmText: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      },
      visible: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: "default"
      },
      customKey: {
        type: Array,
        default: () => []
      },
      modelValue: {
        type: String,
        default: ""
      },
      maxlength: {
        type: [Number, String],
        default: 6
      },
      randomKeys: {
        type: Boolean,
        default: false
      },
      overlay: {
        type: Boolean,
        default: false
      },
      popClass: {
        type: String,
        default: ""
      },
      lockScroll: {
        type: Boolean,
        default: true
      }
    },
    emits: ["input", "delete", "close", "confirm", "update:modelValue", "update:visible"],
    setup(props, { emit }) {
      const translate = useLocale(cN$d);
      const clickKeyIndex = vue.ref(void 0);
      const show = vue.ref(props.visible);
      const root = vue.ref();
      function defaultKey() {
        const { customKey } = props;
        let object = {
          id: "lock",
          type: "lock"
        };
        let customKeys = Array.isArray(customKey) ? customKey : [customKey];
        if (customKeys.length === 1) {
          object = {
            id: customKeys[0],
            type: "custom"
          };
        }
        return [...getBasicKeys(), object, { id: 0, type: "number" }, { id: "delete", type: "delete" }];
      }
      function getBasicKeys() {
        const keys = [];
        for (let i = 1; i <= 9; i++) {
          keys.push({ id: i, type: "number" });
        }
        if (props.randomKeys) {
          return keys.sort(() => Math.random() > 0.5 ? 1 : -1);
        }
        return keys;
      }
      function genCustomKeys() {
        const keys = getBasicKeys();
        const { customKey } = props;
        let customKeys = Array.isArray(customKey) ? customKey : [customKey];
        if (customKeys.length > 2) {
          customKeys = [customKeys[0], customKeys[1]];
        }
        if (customKeys.length == 2 && props.title && props.type != "rightColumn") {
          customKeys = [customKeys[0]];
        }
        if (customKeys.length === 1) {
          if (props.title && props.type != "rightColumn") {
            keys.push({ id: customKeys[0], type: "custom" }, { id: 0, type: "number" }, { id: "delete", type: "delete" });
          } else {
            keys.push({ id: 0, type: "number" }, { id: customKeys[0], type: "custom" });
          }
        } else if (customKeys.length === 2) {
          keys.push(
            { id: customKeys[0], type: "custom" },
            { id: 0, type: "number" },
            { id: customKeys[1], type: "custom" }
          );
        }
        return keys;
      }
      const keysList = vue.computed(() => {
        if (props.type == "rightColumn" || props.title != "") {
          return genCustomKeys();
        }
        return defaultKey();
      });
      vue.watch(
        () => props.visible,
        (value) => {
          show.value = value;
        }
      );
      function onTouchstart(item, event) {
        event.stopPropagation();
        clickKeyIndex.value = item.id;
        if (item.type == "number" || item.type == "custom") {
          emit("input", item.id);
          if (props.modelValue.length < Number(props.maxlength)) {
            emit("update:modelValue", props.modelValue + item.id);
          }
        }
        if (item.type == "lock") {
          closeBoard();
        }
        if (item.type == "delete") {
          emit("delete");
          emit("update:modelValue", props.modelValue.slice(0, props.modelValue.length - 1));
        }
      }
      function onTouchMove(event) {
        event.stopPropagation();
      }
      function onTouchEnd() {
        clickKeyIndex.value = void 0;
      }
      function closeBoard() {
        emit("update:visible", false);
        emit("close");
      }
      const confirm = () => {
        emit("confirm");
      };
      return {
        clickKeyIndex,
        defaultKey,
        closeBoard,
        confirm,
        onTouchEnd,
        onTouchMove,
        onTouchstart,
        keysList,
        genCustomKeys,
        getBasicKeys,
        root,
        show,
        translate
      };
    }
  });
  const _hoisted_1$N = {
    ref: "root",
    class: "nut-number-keyboard"
  };
  const _hoisted_2$C = {
    key: 0,
    class: "nut-number-keyboard__header"
  };
  const _hoisted_3$t = { class: "nut-number-keyboard__title" };
  const _hoisted_4$p = { class: "nut-number-keyboard__body" };
  const _hoisted_5$f = { class: "nut-number-keyboard__keys" };
  const _hoisted_6$c = ["onTouchstart"];
  const _hoisted_7$b = {
    key: 1,
    src: "https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
  };
  const _hoisted_8$7 = {
    key: 2,
    src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
  };
  const _hoisted_9$6 = {
    key: 0,
    class: "nut-number-keyboard__sidebar"
  };
  const _hoisted_10$3 = { class: "nut-key__wrapper" };
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createBlock(_component_nut_popup, {
      visible: _ctx.show,
      "onUpdate:visible": _cache[7] || (_cache[7] = ($event) => _ctx.show = $event),
      position: "bottom",
      "pop-class": _ctx.popClass,
      overlay: _ctx.overlay,
      "overlay-class": "nut-number-keyboard-overlay",
      "lock-scroll": _ctx.lockScroll,
      "catch-move": _ctx.lockScroll,
      onClickOverlay: _cache[8] || (_cache[8] = ($event) => _ctx.closeBoard())
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("div", _hoisted_1$N, [
          _ctx.title ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$C, [
            vue.createElementVNode("h3", _hoisted_3$t, vue.toDisplayString(_ctx.title), 1),
            _cache[9] || (_cache[9] = vue.createTextVNode()),
            _ctx.type == "default" ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 0,
              class: "nut-number-keyboard__close",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.closeBoard())
            }, vue.toDisplayString(_ctx.translate("done")), 1)) : vue.createCommentVNode("", true)
          ])) : vue.createCommentVNode("", true),
          _cache[15] || (_cache[15] = vue.createTextVNode()),
          vue.createElementVNode("div", _hoisted_4$p, [
            vue.createElementVNode("div", _hoisted_5$f, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.keysList, (item) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key: "key" + item.id,
                  class: vue.normalizeClass([
                    "nut-key__wrapper",
                    {
                      "nut-key__wrapper--wider": item.id == 0 && _ctx.type == "rightColumn" && Array.isArray(_ctx.customKey) && _ctx.customKey.length == 1
                    }
                  ])
                }, [
                  vue.createElementVNode("div", {
                    class: vue.normalizeClass([
                      "nut-key",
                      { "nut-key--active": item.id == _ctx.clickKeyIndex },
                      { "nut-key--lock": item.type == "lock" },
                      { "nut-key--delete": item.type == "delete" }
                    ]),
                    onTouchstart: (event) => _ctx.onTouchstart(item, event),
                    onTouchmove: _cache[1] || (_cache[1] = (event) => _ctx.onTouchMove(event)),
                    onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
                  }, [
                    item.type == "number" || item.type == "custom" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                      vue.createTextVNode(vue.toDisplayString(item.id), 1)
                    ], 64)) : vue.createCommentVNode("", true),
                    _cache[10] || (_cache[10] = vue.createTextVNode()),
                    item.type == "lock" ? (vue.openBlock(), vue.createElementBlock("img", _hoisted_7$b)) : vue.createCommentVNode("", true),
                    _cache[11] || (_cache[11] = vue.createTextVNode()),
                    item.type == "delete" ? (vue.openBlock(), vue.createElementBlock("img", _hoisted_8$7)) : vue.createCommentVNode("", true)
                  ], 42, _hoisted_6$c)
                ], 2);
              }), 128))
            ]),
            _cache[14] || (_cache[14] = vue.createTextVNode()),
            _ctx.type == "rightColumn" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_9$6, [
              vue.createElementVNode("div", _hoisted_10$3, [
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(["nut-key", { active: _ctx.clickKeyIndex == "delete" }]),
                  onTouchstart: _cache[3] || (_cache[3] = (event) => _ctx.onTouchstart({ id: "delete", type: "delete" }, event)),
                  onTouchmove: _cache[4] || (_cache[4] = (event) => _ctx.onTouchMove(event)),
                  onTouchend: _cache[5] || (_cache[5] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
                }, _cache[12] || (_cache[12] = [
                  vue.createElementVNode("img", { src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png" }, null, -1)
                ]), 34)
              ]),
              _cache[13] || (_cache[13] = vue.createTextVNode()),
              vue.createElementVNode("div", {
                class: "nut-key__wrapper nut-key__wrapper--finish",
                onClick: _cache[6] || (_cache[6] = (...args) => _ctx.confirm && _ctx.confirm(...args))
              }, [
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(["nut-key", "nut-key--finish ", { activeFinsh: _ctx.clickKeyIndex == "finish" }])
                }, vue.toDisplayString(_ctx.confirmText || _ctx.translate("done")), 3)
              ])
            ])) : vue.createCommentVNode("", true)
          ])
        ], 512)
      ]),
      _: 1
    }, 8, ["visible", "pop-class", "overlay", "lock-scroll", "catch-move"]);
  }
  const NumberKeyboard = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$E]]);
  const _sfc_main$X = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutForm"
  }), {
    __name: "form.taro",
    props: {
      modelValue: { default: () => ({}) },
      rules: { default: () => ({}) },
      disabled: { type: Boolean, default: false },
      labelPosition: { default: "left" },
      starPosition: { default: "left" }
    },
    emits: ["validate"],
    setup(__props, { expose: __expose, emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const { children, linkChildren } = useChildren(FORM_KEY);
      linkChildren({ props });
      const { linkChildren: linkChildren2 } = useChildren(FORM_DISABLED_KEY);
      linkChildren2({ props });
      const formErrorTip = vue.computed(() => vue.reactive({}));
      vue.provide(FORM_TIP_KEY, formErrorTip);
      const clearErrorTips = () => {
        Object.keys(formErrorTip.value).forEach((item) => {
          formErrorTip.value[item] = "";
        });
      };
      const reset = () => {
        clearErrorTips();
      };
      vue.watch(
        () => props.modelValue,
        () => {
          clearErrorTips();
        },
        { immediate: true }
      );
      const getTaskFromChildren = () => {
        const task = [];
        children.forEach((item) => {
          task.push({
            prop: item == null ? void 0 : item["prop"],
            rules: (item == null ? void 0 : item["rules"]) || []
          });
        });
        return task;
      };
      const tipMessage = (errorMsg) => {
        if (errorMsg.message) {
          emit("validate", errorMsg);
        }
        formErrorTip.value[errorMsg.prop] = errorMsg.message;
      };
      const checkRule = (item) => __async(this, null, function* () {
        const { rules = [], prop } = item;
        const _Promise = (errorMsg) => {
          return new Promise((resolve, reject) => {
            try {
              tipMessage(errorMsg);
              resolve(errorMsg);
            } catch (error) {
              reject(error);
            }
          });
        };
        if (!prop) {
          console.warn("[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
        }
        const value = getPropByPath(props.modelValue, prop || "");
        tipMessage({ prop, message: "" });
        const formRules = props.rules || {};
        const _rules = [...(formRules == null ? void 0 : formRules[prop]) || [], ...rules];
        while (_rules.length) {
          const rule = _rules.shift();
          const _a = rule, { validator } = _a, ruleWithoutValidator = __objRest(_a, ["validator"]);
          const { required, regex, message } = ruleWithoutValidator;
          const errorMsg = { prop, message: message || "" };
          if (required) {
            if (!value && value !== 0) {
              return _Promise(errorMsg);
            }
          }
          if (regex && !regex.test(String(value))) {
            return _Promise(errorMsg);
          }
          if (validator) {
            const result = validator(value, ruleWithoutValidator);
            if (isPromise(result)) {
              try {
                const value2 = yield result;
                if (value2 === false) {
                  return _Promise(errorMsg);
                }
              } catch (error) {
                const validateErrorMsg = { prop, message: error };
                return _Promise(validateErrorMsg);
              }
            } else {
              if (!result) {
                return _Promise(errorMsg);
              }
            }
          }
        }
        return Promise.resolve(true);
      });
      const validate = (customProp = "") => {
        return new Promise((resolve, reject) => {
          try {
            const task = getTaskFromChildren();
            const errors = task.map((item) => {
              if (customProp && customProp !== item.prop) {
                return Promise.resolve(true);
              }
              return checkRule(item);
            });
            Promise.all(errors).then((errorRes) => {
              errorRes = errorRes.filter((item) => item !== true);
              const res = { valid: true, errors: [] };
              if (errorRes.length) {
                res.valid = false;
                res.errors = errorRes;
              }
              resolve(res);
            });
          } catch (error) {
            reject(error);
          }
        });
      };
      const submit = () => {
        validate();
        return false;
      };
      __expose({
        submit,
        reset,
        validate
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("form", {
          class: "nut-form",
          action: "#",
          onSubmit: vue.withModifiers(() => false, ["prevent"])
        }, [
          vue.createVNode(vue.unref(_sfc_main$1J), null, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          })
        ], 32);
      };
    }
  }));
  withInstall(_sfc_main$X);
  const _hoisted_1$M = { class: "nut-cell__value nut-form-item__body" };
  const _sfc_main$W = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutFormItem",
    inheritAttrs: false
  }), {
    __name: "form-item.taro",
    props: {
      prop: { default: "" },
      label: { default: "" },
      rules: { default: () => [] },
      required: { type: Boolean, default: false },
      showErrorMessage: { type: Boolean, default: true },
      showErrorLine: { type: Boolean, default: true },
      labelWidth: {},
      labelAlign: {},
      errorMessageAlign: {},
      bodyAlign: {},
      labelPosition: {},
      starPosition: {}
    },
    setup(__props) {
      const props = __props;
      const { parent: parentObj } = useParent(FORM_KEY);
      const isRequired = vue.computed(() => {
        var _a;
        const rules = (_a = parentObj.props) == null ? void 0 : _a.rules;
        let formRequired = false;
        for (const key in rules) {
          if (Object.prototype.hasOwnProperty.call(rules, key) && key === props.prop && Array.isArray(rules[key])) {
            formRequired = rules[key].some((rule) => rule.required);
          }
        }
        return props.required || props.rules.some((rule) => rule.required) || formRequired;
      });
      const labelPositionClass = vue.computed(() => {
        const labelPosition = parentObj.props.labelPosition;
        const position = props.labelPosition ? props.labelPosition : labelPosition;
        return position !== "left" ? `nut-form-item__${position}` : "";
      });
      const starPositionClass = vue.computed(() => {
        const starPosition = parentObj.props.starPosition;
        const position = props.starPosition ? props.starPosition : starPosition;
        return position !== "left" ? `nut-form-item__star-${position}` : "";
      });
      const parent = vue.inject(FORM_TIP_KEY);
      const labelStyle = vue.computed(() => {
        return {
          width: pxCheck(props.labelWidth),
          textAlign: props.labelAlign
        };
      });
      const bodyStyle = vue.computed(() => {
        return {
          textAlign: props.bodyAlign
        };
      });
      const errorMessageStyle = vue.computed(() => {
        return {
          textAlign: props.errorMessageAlign
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1K), {
          class: vue.normalizeClass(["nut-form-item", [{ error: vue.unref(parent)[_ctx.prop], line: _ctx.showErrorLine }, _ctx.$attrs.class, labelPositionClass.value]]),
          style: vue.normalizeStyle(_ctx.$attrs.style)
        }, {
          default: vue.withCtx(() => [
            _ctx.label || _ctx.$slots.label ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: vue.normalizeClass(["nut-cell__title nut-form-item__label", { required: isRequired.value, [starPositionClass.value]: starPositionClass.value }]),
              style: vue.normalizeStyle(labelStyle.value)
            }, [
              vue.renderSlot(_ctx.$slots, "label", {}, () => [
                vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
              ])
            ], 6)) : vue.createCommentVNode("", true),
            _cache[1] || (_cache[1] = vue.createTextVNode()),
            vue.createElementVNode("view", _hoisted_1$M, [
              vue.createElementVNode("view", {
                class: "nut-form-item__body__slots",
                style: vue.normalizeStyle(bodyStyle.value)
              }, [
                vue.renderSlot(_ctx.$slots, "default")
              ], 4),
              _cache[0] || (_cache[0] = vue.createTextVNode()),
              vue.unref(parent)[_ctx.prop] && _ctx.showErrorMessage ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "nut-form-item__body__tips",
                style: vue.normalizeStyle(errorMessageStyle.value)
              }, vue.toDisplayString(vue.unref(parent)[_ctx.prop]), 5)) : vue.createCommentVNode("", true)
            ])
          ]),
          _: 3
        }, 8, ["class", "style"]);
      };
    }
  }));
  withInstall(_sfc_main$W);
  const SWIPE_KEY = Symbol("nut-swipe");
  const _hoisted_1$L = ["id"];
  const _hoisted_2$B = ["id"];
  const _sfc_main$V = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutSwipe"
  }), {
    __name: "swipe.taro",
    props: {
      name: { default: "" },
      touchMoveStopPropagation: { type: Boolean, default: false },
      touchMovePreventDefault: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false }
    },
    emits: ["open", "close", "click"],
    setup(__props, { expose: __expose, emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const refRandomId = Math.random().toString(36).slice(-8);
      const leftRef = vue.ref();
      const leftRefWidth = vue.ref(0);
      const rightRef = vue.ref();
      const rightRefWidth = vue.ref(0);
      const lockClick = vue.ref(false);
      const initWidth = () => {
        useTaroRect(leftRef).then(
          (rect) => {
            leftRefWidth.value = (rect == null ? void 0 : rect.width) || 0;
          },
          () => {
          }
        );
        useTaroRect(rightRef).then(
          (rect) => {
            rightRefWidth.value = (rect == null ? void 0 : rect.width) || 0;
          },
          () => {
          }
        );
      };
      const parent = vue.inject(SWIPE_KEY, null);
      vue.watch(
        () => {
          var _a;
          return (_a = parent == null ? void 0 : parent.name) == null ? void 0 : _a.value;
        },
        (name) => {
          if (props.name !== name && parent && parent.lock) {
            close();
          }
        }
      );
      vue.onMounted(() => {
        setTimeout(() => {
          initWidth();
        }, 100);
      });
      const opened = vue.ref(false);
      let position = "";
      let oldPosition = "";
      const state = vue.reactive({
        offset: 0,
        moving: false
      });
      const open = (p = "") => {
        parent && parent.update(props.name);
        opened.value = true;
        if (p) {
          state.offset = p === "left" ? -rightRefWidth.value : leftRefWidth.value;
        }
        emit("open", {
          name: props.name,
          position: position || p
        });
      };
      const close = () => {
        state.offset = 0;
        if (opened.value) {
          opened.value = false;
          emit("close", {
            name: props.name,
            position
          });
        }
      };
      const onClick = (e, position2, lock) => {
        if (lock) {
          e.stopPropagation();
        } else {
          close();
        }
        emit("click", position2);
      };
      const touchStyle = vue.computed(() => {
        return {
          transform: `translate3d(${state.offset}px, 0, 0)`
        };
      });
      const setoffset = (deltaX) => {
        position = deltaX > 0 ? "right" : "left";
        let offset = deltaX;
        switch (position) {
          case "left":
            if (opened.value && oldPosition === position) {
              offset = -rightRefWidth.value;
            } else {
              offset = Math.abs(deltaX) > rightRefWidth.value ? -rightRefWidth.value : deltaX;
            }
            break;
          case "right":
            if (opened.value && oldPosition === position) {
              offset = leftRefWidth.value;
            } else {
              offset = Math.abs(deltaX) > leftRefWidth.value ? leftRefWidth.value : deltaX;
            }
            break;
        }
        state.offset = offset;
      };
      const touch = useTouch();
      const onTouchStart = (event) => {
        if (props.disabled) return;
        touch.start(event);
      };
      const onTouchMove = (event) => {
        if (props.disabled) return;
        touch.move(event);
        if (touch.isHorizontal()) {
          lockClick.value = true;
          state.moving = true;
          setoffset(touch.deltaX.value);
          if (props.touchMovePreventDefault) {
            event.preventDefault();
          }
          if (props.touchMoveStopPropagation) {
            event.stopPropagation();
          }
        }
      };
      const onTouchEnd = () => {
        if (state.moving) {
          state.moving = false;
          oldPosition = position;
          switch (position) {
            case "left":
              if (Math.abs(state.offset) <= rightRefWidth.value / 2) {
                close();
              } else {
                state.offset = -rightRefWidth.value;
                open();
              }
              break;
            case "right":
              if (Math.abs(state.offset) <= leftRefWidth.value / 2) {
                close();
              } else {
                state.offset = leftRefWidth.value;
                open();
              }
              break;
          }
          setTimeout(() => {
            lockClick.value = false;
          }, 0);
        }
      };
      __expose({
        open,
        close
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "nut-swipe",
          style: vue.normalizeStyle(touchStyle.value),
          onTouchstart: onTouchStart,
          onTouchmove: onTouchMove,
          onTouchend: onTouchEnd,
          onTouchcancel: onTouchEnd
        }, [
          vue.createElementVNode("view", {
            id: "leftRef-" + vue.unref(refRandomId),
            ref_key: "leftRef",
            ref: leftRef,
            class: "nut-swipe__left",
            onClick: _cache[0] || (_cache[0] = ($event) => onClick($event, "left", true))
          }, [
            vue.renderSlot(_ctx.$slots, "left")
          ], 8, _hoisted_1$L),
          _cache[3] || (_cache[3] = vue.createTextVNode()),
          vue.createElementVNode("view", {
            class: "nut-swipe__content",
            onClick: _cache[1] || (_cache[1] = ($event) => onClick($event, "content", lockClick.value))
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ]),
          _cache[4] || (_cache[4] = vue.createTextVNode()),
          vue.createElementVNode("view", {
            id: "rightRef-" + vue.unref(refRandomId),
            ref_key: "rightRef",
            ref: rightRef,
            class: "nut-swipe__right",
            onClick: _cache[2] || (_cache[2] = ($event) => onClick($event, "right", true))
          }, [
            vue.renderSlot(_ctx.$slots, "right")
          ], 8, _hoisted_2$B)
        ], 36);
      };
    }
  }));
  withInstall(_sfc_main$V);
  const _sfc_main$U = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutSwipeGroup"
  }), {
    __name: "swipe-group.taro",
    props: {
      lock: { type: Boolean, default: false }
    },
    setup(__props) {
      const props = __props;
      const swipeGroupRef = vue.ref(null);
      const name = vue.ref("");
      const update = (n) => {
        name.value = n;
      };
      vue.provide(SWIPE_KEY, {
        update,
        lock: props.lock,
        name
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          ref_key: "swipeGroupRef",
          ref: swipeGroupRef,
          class: "nut-swipe-group"
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 512);
      };
    }
  }));
  withInstall(_sfc_main$U);
  const { create: create$D } = createComponent("action-sheet");
  const _sfc_main$T = create$D({
    components: {
      NutPopup: Popup,
      Loading: iconsVueTaro.Loading
    },
    props: __spreadProps(__spreadValues({}, popupProps), {
      cancelTxt: {
        type: String,
        default: ""
      },
      optionTag: {
        type: String,
        default: "name"
      },
      optionSubTag: {
        type: String,
        default: "subname"
      },
      chooseTagValue: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#ee0a24"
      },
      description: {
        type: String,
        default: ""
      },
      menuItems: {
        type: Array,
        default: () => []
      },
      closeAbled: {
        type: Boolean,
        default: true
      }
    }),
    emits: ["cancel", "close", "choose", "update:visible"],
    setup(props, { emit }) {
      const slotDefault = !!vue.useSlots().default;
      const isHighlight = (item) => {
        return props.chooseTagValue && props.chooseTagValue === item[props.optionTag] ? props.color : "";
      };
      const cancelActionSheet = () => {
        emit("cancel");
        emit("update:visible", false);
      };
      const chooseItem = (item, index) => {
        if (!item.disable && !item.loading) {
          emit("choose", item, index);
          emit("update:visible", false);
        }
      };
      const close = (e) => {
        if (props.closeAbled) {
          emit("close", e);
          emit("update:visible", false);
        }
      };
      return {
        slotDefault,
        isHighlight,
        cancelActionSheet,
        chooseItem,
        close
      };
    }
  });
  const _hoisted_1$K = { class: "nut-action-sheet" };
  const _hoisted_2$A = {
    key: 0,
    class: "nut-action-sheet__title"
  };
  const _hoisted_3$s = { key: 1 };
  const _hoisted_4$o = {
    key: 0,
    class: "nut-action-sheet__item nut-action-sheet__desc"
  };
  const _hoisted_5$e = {
    key: 1,
    class: "nut-action-sheet__menu"
  };
  const _hoisted_6$b = ["onClick"];
  const _hoisted_7$a = { key: 1 };
  const _hoisted_8$6 = { class: "nut-action-sheet__subdesc" };
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Loading = vue.resolveComponent("Loading");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createBlock(_component_nut_popup, {
      visible: _ctx.visible,
      position: "bottom",
      round: "",
      "close-on-click-overlay": _ctx.closeAbled,
      "lock-scroll": _ctx.lockScroll,
      "catch-move": _ctx.lockScroll,
      "z-index": _ctx.zIndex,
      onClickOverlay: _ctx.close
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", _hoisted_1$K, [
          _ctx.title ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$A, vue.toDisplayString(_ctx.title), 1)) : vue.createCommentVNode("", true),
          _cache[4] || (_cache[4] = vue.createTextVNode()),
          vue.renderSlot(_ctx.$slots, "default"),
          _cache[5] || (_cache[5] = vue.createTextVNode()),
          !_ctx.slotDefault ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$s, [
            _ctx.description ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$o, vue.toDisplayString(_ctx.description), 1)) : vue.createCommentVNode("", true),
            _cache[2] || (_cache[2] = vue.createTextVNode()),
            _ctx.menuItems.length ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$e, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.menuItems, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: vue.normalizeClass(["nut-action-sheet__item", {
                    "nut-action-sheet__item--disabled": item.disable,
                    "nut-action-sheet__item--loading": item.loading
                  }]),
                  style: vue.normalizeStyle({ color: _ctx.isHighlight(item) || item.color }),
                  onClick: ($event) => _ctx.chooseItem(item, index)
                }, [
                  item.loading ? (vue.openBlock(), vue.createBlock(_component_Loading, { key: 0 })) : (vue.openBlock(), vue.createElementBlock("view", _hoisted_7$a, vue.toDisplayString(item[_ctx.optionTag]), 1)),
                  _cache[1] || (_cache[1] = vue.createTextVNode()),
                  vue.createElementVNode("view", _hoisted_8$6, vue.toDisplayString(item[_ctx.optionSubTag]), 1)
                ], 14, _hoisted_6$b);
              }), 128))
            ])) : vue.createCommentVNode("", true),
            _cache[3] || (_cache[3] = vue.createTextVNode()),
            _ctx.cancelTxt ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "nut-action-sheet__cancel",
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.cancelActionSheet && _ctx.cancelActionSheet(...args))
            }, vue.toDisplayString(_ctx.cancelTxt), 1)) : vue.createCommentVNode("", true)
          ])) : vue.createCommentVNode("", true)
        ])
      ]),
      _: 3
    }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "catch-move", "z-index", "onClickOverlay"]);
  }
  const ActionSheet = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$D]]);
  const _sfc_main$S = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutBacktop"
  }), {
    __name: "backtop.taro",
    props: {
      height: { default: "100vh" },
      bottom: { default: 20 },
      right: { default: 10 },
      distance: { default: 200 },
      zIndex: { default: 10 }
    },
    emits: ["click"],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const backTop = vue.ref(false);
      const scrollTop = vue.ref(1);
      const scroll = (e) => {
        scrollTop.value = 2;
        backTop.value = e.detail.scrollTop >= props.distance;
      };
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-backtop";
        return {
          [prefixCls2]: true,
          show: backTop.value
        };
      });
      const style = vue.computed(() => {
        return {
          right: `${props.right}px`,
          bottom: `${props.bottom}px`,
          zIndex: props.zIndex
        };
      });
      const handleClick = (e) => {
        scrollTop.value = 1;
        emit("click", e);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_sfc_main$1u, {
            "scroll-y": true,
            style: vue.normalizeStyle({ height: _ctx.height }),
            "scroll-top": scrollTop.value,
            "scroll-with-animation": "true",
            onScroll: scroll
          }, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "content")
            ]),
            _: 3
          }, 8, ["style", "scroll-top"]),
          _cache[0] || (_cache[0] = vue.createTextVNode()),
          vue.createElementVNode("view", {
            class: vue.normalizeClass(classes.value),
            style: vue.normalizeStyle(style.value),
            onClick: vue.withModifiers(handleClick, ["stop"])
          }, [
            vue.renderSlot(_ctx.$slots, "icon", {}, () => [
              vue.createVNode(vue.unref(iconsVueTaro.Top), {
                width: "19px",
                height: "19px",
                class: "nut-backtop-main"
              })
            ])
          ], 6)
        ]);
      };
    }
  }));
  withInstall(_sfc_main$S);
  const { create: create$C } = createComponent("drag");
  const _sfc_main$R = create$C({
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
      const myDrag = vue.ref();
      const refRandomId = Math.random().toString(36).slice(-8);
      const state = vue.reactive({
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
            requestAniFrame$1(() => {
              goLeft();
            });
          } else {
            state.left = `${state.boundary.left}px`;
          }
        } else {
          if (+state.left.split("px")[0] > 10) {
            state.left = +state.left.split("px")[0] - 10 + "px";
            requestAniFrame$1(() => {
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
          requestAniFrame$1(() => {
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
            requestAniFrame$1(() => {
              goLeft();
            });
          } else {
            requestAniFrame$1(() => {
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
      vue.onMounted(() => {
        setTimeout(() => {
          getInfo();
        }, 200);
        Taro.eventCenter.once(Taro.getCurrentInstance().router.onReady, () => {
        });
        state.boundary = props.boundary;
      });
      vue.onActivated(() => {
        if (state.keepAlive) {
          state.keepAlive = false;
        }
      });
      vue.onDeactivated(() => {
        state.keepAlive = true;
        myDrag.value.removeEventListener("touchstart", touchStart);
        myDrag.value.removeEventListener("touchmove", touchMove);
        myDrag.value.removeEventListener("touchend", touchEnd);
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
  const _hoisted_1$J = ["id"];
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      id: "myDrag" + _ctx.refRandomId,
      ref: "myDrag",
      class: "nut-taro-drag myDrag",
      catchtouchmove: "true",
      style: vue.normalizeStyle({
        transform: ` translate(${_ctx.state.left + "px"}, ${_ctx.state.top + "px"})`,
        top: _ctx.state.top + "px",
        left: _ctx.state.left + "px"
      }),
      onTouchstart: _cache[0] || (_cache[0] = ($event) => _ctx.touchStart($event)),
      onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers(($event) => _ctx.touchMove($event), ["prevent"]))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 44, _hoisted_1$J);
  }
  const Drag = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$C]]);
  const { create: create$B } = createComponent("dialog");
  const cN$c = "NutDialog";
  const _sfc_main$Q = create$B({
    inheritAttrs: false,
    components: {
      NutPopup: Popup,
      NutButton: _sfc_main$1L
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
      const translate = useLocale(cN$c);
      const showPopup = vue.ref(props.visible);
      vue.onMounted(() => {
        if (props.closeOnPopstate) {
          window.addEventListener("popstate", function() {
            closed("page");
          });
        }
      });
      vue.watch(
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
      const contentStyle = vue.computed(() => {
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
  const _hoisted_1$I = {
    key: 0,
    class: "nut-dialog__header"
  };
  const _hoisted_2$z = ["innerHTML"];
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_button = vue.resolveComponent("nut-button");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createBlock(_component_nut_popup, {
      visible: _ctx.showPopup,
      "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => _ctx.showPopup = $event),
      teleport: _ctx.teleport,
      "close-on-click-overlay": false,
      "lock-scroll": _ctx.lockScroll,
      "catch-move": _ctx.lockScroll,
      "pop-class": _ctx.popClass,
      "overlay-class": _ctx.overlayClass,
      "overlay-style": _ctx.overlayStyle,
      style: vue.normalizeStyle(_ctx.popStyle),
      round: "",
      "z-index": _ctx.zIndex,
      onClickOverlay: _ctx.onClickOverlay,
      onClickCloseIcon: _ctx.closed
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["nut-dialog", _ctx.customClass])
        }, [
          _ctx.$slots.header || _ctx.title ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$I, [
            _ctx.$slots.header ? vue.renderSlot(_ctx.$slots, "header", { key: 0 }) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
            ], 64))
          ])) : vue.createCommentVNode("", true),
          _cache[2] || (_cache[2] = vue.createTextVNode()),
          vue.createElementVNode("view", {
            class: "nut-dialog__content",
            style: vue.normalizeStyle(_ctx.contentStyle)
          }, [
            _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : typeof _ctx.content === "string" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              innerHTML: _ctx.content
            }, null, 8, _hoisted_2$z)) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.content), { key: 2 }))
          ], 4),
          _cache[3] || (_cache[3] = vue.createTextVNode()),
          !_ctx.noFooter ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: vue.normalizeClass(["nut-dialog__footer", { [_ctx.footerDirection]: _ctx.footerDirection }])
          }, [
            _ctx.$slots.footer ? vue.renderSlot(_ctx.$slots, "footer", { key: 0 }) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              !_ctx.noCancelBtn ? (vue.openBlock(), vue.createBlock(_component_nut_button, {
                key: 0,
                size: "small",
                plain: "",
                type: "primary",
                class: "nut-dialog__footer-cancel",
                onClick: _ctx.onCancel
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.cancelText || _ctx.translate("cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : vue.createCommentVNode("", true),
              _cache[1] || (_cache[1] = vue.createTextVNode()),
              !_ctx.noOkBtn ? (vue.openBlock(), vue.createBlock(_component_nut_button, {
                key: 1,
                size: "small",
                type: "primary",
                class: "nut-dialog__footer-ok",
                onClick: _ctx.onOk
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.okText || _ctx.translate("confirm")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : vue.createCommentVNode("", true)
            ], 64))
          ], 2)) : vue.createCommentVNode("", true)
        ], 2)
      ]),
      _: 3
    }, 8, ["visible", "teleport", "lock-scroll", "catch-move", "pop-class", "overlay-class", "overlay-style", "style", "z-index", "onClickOverlay", "onClickCloseIcon"]);
  }
  const Dialog = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$B]]);
  const { create: create$A } = createComponent("notify");
  const _sfc_main$P = create$A({
    components: {
      NutPopup: Popup
    },
    props: {
      id: String,
      color: {
        type: String,
        default: ""
      },
      msg: {
        type: String,
        default: ""
      },
      duration: {
        type: Number,
        default: 3e3
      },
      className: {
        type: String,
        default: ""
      },
      background: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "danger"
      },
      visible: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: "top"
      },
      onClose: Function,
      onClick: Function,
      unmount: Function
    },
    emits: ["update:visible"],
    setup(props, { emit }) {
      const clickCover = () => {
        props.onClick && props.onClick();
      };
      let timer = null;
      const clearTimer = () => {
        timer && clearTimeout(timer);
        timer = null;
      };
      const hide = () => {
        emit("update:visible", false);
      };
      const isShowPopup = vue.ref(false);
      vue.watch(
        () => props.visible,
        (newVal) => {
          isShowPopup.value = props.visible;
          const DURATION = props.duration;
          if (newVal && DURATION) {
            timer = setTimeout(() => {
              hide();
            }, DURATION);
          }
        },
        { immediate: true }
      );
      vue.onUnmounted(() => {
        clearTimer();
      });
      return { clickCover, isShowPopup };
    }
  });
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createBlock(_component_nut_popup, {
      visible: _ctx.isShowPopup,
      "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => _ctx.isShowPopup = $event),
      position: _ctx.position,
      overlay: false
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["nut-notify", `nut-notify--${_ctx.type}`, _ctx.className]),
          style: vue.normalizeStyle({ color: _ctx.color, background: _ctx.background }),
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickCover && _ctx.clickCover(...args))
        }, [
          _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
            vue.createTextVNode(vue.toDisplayString(_ctx.msg), 1)
          ], 64))
        ], 6)
      ]),
      _: 3
    }, 8, ["visible", "position"]);
  }
  const Notify = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$A]]);
  const _hoisted_1$H = { class: "nut-switch-button" };
  const _sfc_main$O = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutSwitch"
  }), {
    __name: "switch.taro",
    props: {
      modelValue: { type: [String, Number, Boolean], default: false },
      disabled: { type: Boolean, default: false },
      activeColor: { default: "" },
      inactiveColor: { default: "" },
      activeText: { default: "" },
      inactiveText: { default: "" },
      activeValue: { type: [String, Number, Boolean], default: true },
      inactiveValue: { type: [String, Number, Boolean], default: false },
      loading: { type: Boolean, default: false },
      disable: { type: Boolean, default: false }
    },
    emits: ["change", "update:modelValue", "update:loading"],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const legacyDisabled = vue.computed(() => props.disabled || props.disable);
      const disabled = useFormDisabled(legacyDisabled);
      const isActive = vue.computed(() => props.modelValue === props.activeValue);
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-switch";
        return {
          [prefixCls2]: true,
          [isActive.value ? "nut-switch-open" : "nut-switch-close"]: true,
          [`${prefixCls2}-disabled`]: disabled.value,
          [`${prefixCls2}-base`]: true
        };
      });
      const style = vue.computed(() => {
        return {
          backgroundColor: isActive.value ? props.activeColor : props.inactiveColor
        };
      });
      let updateType = "";
      const onClick = (event) => {
        if (props.loading || disabled.value) return;
        const value = isActive.value ? props.inactiveValue : props.activeValue;
        updateType = "click";
        emit("update:modelValue", value);
        emit("change", value, event);
      };
      vue.watch(
        () => props.modelValue,
        (v) => {
          if (updateType == "click") {
            updateType = "";
          } else {
            emit("change", v);
          }
        }
      );
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(classes.value),
          style: vue.normalizeStyle(style.value),
          onClick
        }, [
          vue.createElementVNode("view", _hoisted_1$H, [
            _ctx.loading ? vue.renderSlot(_ctx.$slots, "icon", { key: 0 }, () => [
              vue.createVNode(vue.unref(iconsVueTaro.Loading1), {
                name: "loading1",
                color: _ctx.activeColor
              }, null, 8, ["color"])
            ]) : vue.createCommentVNode("", true),
            _cache[1] || (_cache[1] = vue.createTextVNode()),
            _ctx.activeText ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              vue.withDirectives(vue.createElementVNode("view", { class: "nut-switch-label open" }, vue.toDisplayString(_ctx.activeText), 513), [
                [vue.vShow, isActive.value]
              ]),
              _cache[0] || (_cache[0] = vue.createTextVNode()),
              vue.withDirectives(vue.createElementVNode("view", { class: "nut-switch-label close" }, vue.toDisplayString(_ctx.inactiveText), 513), [
                [vue.vShow, !isActive.value]
              ])
            ], 64)) : vue.createCommentVNode("", true)
          ])
        ], 6);
      };
    }
  }));
  withInstall(_sfc_main$O);
  const { create: create$z } = createComponent("toast");
  const _sfc_main$N = create$z({
    components: {},
    props: {
      id: String,
      msg: String,
      duration: {
        type: Number,
        default: 2e3
      },
      center: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: "text"
      },
      customClass: String,
      bottom: {
        type: String,
        default: "30px"
      },
      size: {
        type: [String, Number],
        default: "base"
      },
      icon: {
        type: Object,
        default: () => {
        }
      },
      textAlignCenter: {
        type: Boolean,
        default: true
      },
      loadingRotate: {
        type: Boolean,
        default: true
      },
      bgColor: {
        type: String,
        default: ""
      },
      onClose: Function,
      unmount: Function,
      cover: {
        type: Boolean,
        default: false
      },
      coverColor: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: false
      },
      visible: {
        type: Boolean,
        default: false
      }
    },
    emits: ["update:visible", "closed"],
    setup(props, { emit }) {
      let timer;
      const clearTimer = () => {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      };
      const hide = () => {
        emit("update:visible", false);
        emit("closed");
      };
      const show = () => {
        clearTimer();
        if (props.duration) {
          timer = setTimeout(() => {
            hide();
          }, props.duration);
        }
      };
      const clickCover = () => {
        if (props.closeOnClickOverlay) {
          hide();
        }
      };
      vue.watch(
        () => props.visible,
        (val) => {
          if (val) {
            show();
          }
        }
      );
      const hasIcon = vue.computed(() => {
        if (props.type !== "text") {
          return true;
        } else {
          return !!props.icon;
        }
      });
      const iconName = vue.computed(() => {
        if (props.icon) {
          return props.icon;
        } else {
          return {
            success: iconsVueTaro.Success,
            fail: iconsVueTaro.Failure,
            warn: iconsVueTaro.Tips,
            loading: iconsVueTaro.Loading
          }[props.type];
        }
      });
      const toastBodyClass = vue.computed(() => {
        return [
          "nut-toast",
          { "nut-toast-center": props.center },
          { "nut-toast-has-icon": hasIcon.value },
          { "nut-toast-cover": props.cover },
          { "nut-toast-loading": props.type === "loading" },
          props.customClass,
          "nut-toast-" + props.size
        ];
      });
      const onAfterLeave = () => {
        if (props.visible) {
          clearTimer();
          hide();
        }
      };
      return {
        clickCover,
        hasIcon,
        iconName,
        toastBodyClass,
        onAfterLeave,
        renderIcon
      };
    }
  });
  const _hoisted_1$G = {
    key: 0,
    class: "nut-toast-icon-wrapper"
  };
  const _hoisted_2$y = {
    key: 1,
    class: "nut-toast-title"
  };
  const _hoisted_3$r = ["innerHTML"];
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock(vue.Transition, {
      name: "toast-fade",
      onAfterLeave: _ctx.onAfterLeave
    }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("view", {
          class: vue.normalizeClass(_ctx.toastBodyClass),
          style: vue.normalizeStyle({
            bottom: _ctx.center ? "auto" : _ctx.bottom,
            "background-color": _ctx.coverColor
          }),
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickCover && _ctx.clickCover(...args))
        }, [
          _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "nut-toast-inner",
            style: vue.normalizeStyle({
              "text-align": _ctx.textAlignCenter ? "center" : "left",
              "background-color": _ctx.bgColor
            })
          }, [
            _ctx.hasIcon ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$G, [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.renderIcon(_ctx.iconName)), { color: "#ffffff" }))
            ])) : vue.createCommentVNode("", true),
            _cache[1] || (_cache[1] = vue.createTextVNode()),
            _ctx.title ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$y, vue.toDisplayString(_ctx.title), 1)) : vue.createCommentVNode("", true),
            _cache[2] || (_cache[2] = vue.createTextVNode()),
            vue.createElementVNode("view", {
              class: "nut-toast-text",
              innerHTML: _ctx.msg
            }, null, 8, _hoisted_3$r)
          ], 4))
        ], 6), [
          [vue.vShow, _ctx.visible]
        ])
      ]),
      _: 3
    }, 8, ["onAfterLeave"]);
  }
  const Toast = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$z]]);
  const AVATAR_KEY = Symbol("nut-avatar");
  const { create: create$y } = createComponent("avatar");
  const _sfc_main$M = create$y({
    props: {
      size: {
        type: [String, Number],
        default: "normal"
      },
      shape: {
        type: String,
        default: "round"
      },
      bgColor: {
        type: String,
        default: "#eee"
      },
      color: {
        type: String,
        default: "#666"
      }
    },
    setup(props) {
      const { size, shape, bgColor, color } = vue.toRefs(props);
      const sizeValue = ["large", "normal", "small"];
      const avatarGroup = vue.inject(AVATAR_KEY, null);
      const avatarRef = vue.ref(null);
      const classes = vue.computed(() => {
        var _a, _b;
        const prefixCls2 = "nut-avatar";
        return {
          [prefixCls2]: true,
          [`nut-avatar-${size.value || ((_a = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _a.size) || "normal"}`]: true,
          [`nut-avatar-${shape.value || ((_b = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _b.shape) || "round"}`]: true
        };
      });
      const styles = vue.computed(() => {
        var _a, _b;
        return {
          width: size.value in sizeValue ? "" : `${size.value}px`,
          height: size.value in sizeValue ? "" : `${size.value}px`,
          backgroundColor: `${bgColor.value}`,
          color: `${color.value}`,
          marginLeft: ((_a = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _a.span) ? `${(_b = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _b.span}px` : ""
        };
      });
      return {
        classes,
        styles,
        avatarRef
      };
    }
  });
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      ref: "avatarRef",
      style: vue.normalizeStyle(_ctx.styles),
      class: vue.normalizeClass(_ctx.classes)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 6);
  }
  const Avatar = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$y]]);
  const { create: create$x } = createComponent("avatar-group");
  const _sfc_main$L = create$x({
    components: {
      NutAvatar: Avatar
    },
    props: {
      maxContent: {
        type: String,
        default: ""
      },
      maxCount: {
        type: [Number, String],
        default: ""
      },
      maxBgColor: {
        type: String,
        default: "#eee"
      },
      maxColor: {
        type: String,
        default: "#666"
      },
      size: {
        type: [String, Number],
        default: "normal"
      },
      shape: {
        type: String,
        default: "round"
      },
      span: {
        type: [String, Number],
        default: "-8"
      },
      zIndex: {
        type: String,
        default: "left"
      }
    },
    setup(props) {
      const avatarGroupRef = vue.ref(null);
      const foldCount = vue.ref(99);
      const observer = vue.ref();
      const styles = vue.computed(() => {
        return {
          marginLeft: -1 * Number(props.span) + "px"
        };
      });
      const foldAvatar = (element) => {
        let count = 0;
        const children = element.children;
        if (props.zIndex === "right") {
          for (let i = 0; i < Number(props.maxCount); i++) {
            const child = children[i];
            child.style.zIndex = `${99 - i}`;
          }
        }
        for (let i = Number(props.maxCount); i < children.length; i++) {
          const child = children[i];
          let className;
          if (Taro.getEnv() === "WEB") {
            className = child.className;
          } else {
            className = child.props.class;
          }
          if (className.includes("avater-fold")) {
            continue;
          }
          child.style.display = "none";
          count++;
        }
        foldCount.value = count;
      };
      const watchDefaultSlot = (element) => {
        const config = { attributes: false, childList: true, subtree: true };
        const callback = function(mutations) {
          let sig = false;
          for (let mutation of mutations) {
            if (mutation.type === "childList") {
              sig = true;
              break;
            }
          }
          if (sig) foldAvatar(element);
        };
        const observer2 = new MutationObserver(callback);
        observer2.observe(element, config);
        return observer2;
      };
      vue.onMounted(() => {
        if (props.maxCount) {
          vue.nextTick(() => {
            let element = vue.unref(avatarGroupRef);
            if (Taro.getEnv() === "WEB") {
              if (element && element.$el) {
                element = element.$el;
              }
            }
            foldAvatar(element);
            observer.value = watchDefaultSlot(element);
          });
        }
      });
      vue.onUnmounted(() => {
        var _a;
        (_a = observer.value) == null ? void 0 : _a.disconnect();
      });
      vue.provide(AVATAR_KEY, {
        props,
        avatarGroupRef
      });
      return {
        styles,
        foldCount,
        avatarGroupRef
      };
    }
  });
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_avatar = vue.resolveComponent("nut-avatar");
    return vue.openBlock(), vue.createElementBlock("view", {
      ref: "avatarGroupRef",
      class: "nut-avatar-group",
      style: vue.normalizeStyle(_ctx.styles)
    }, [
      vue.renderSlot(_ctx.$slots, "default"),
      _cache[0] || (_cache[0] = vue.createTextVNode()),
      _ctx.foldCount > 0 ? (vue.openBlock(), vue.createBlock(_component_nut_avatar, {
        key: 0,
        class: "avater-fold",
        color: _ctx.maxColor,
        "bg-color": _ctx.maxBgColor,
        size: _ctx.size,
        shape: _ctx.shape,
        style: vue.normalizeStyle({ magrinLeft: `${_ctx.span}px` })
      }, {
        default: vue.withCtx(() => [
          vue.createTextVNode(vue.toDisplayString(_ctx.maxContent || _ctx.foldCount), 1)
        ]),
        _: 1
      }, 8, ["color", "bg-color", "size", "shape", "style"])) : vue.createCommentVNode("", true)
    ], 4);
  }
  const AvatarGroup = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$x]]);
  var CompareResult = /* @__PURE__ */ ((CompareResult2) => {
    CompareResult2[CompareResult2["eq"] = 1] = "eq";
    CompareResult2[CompareResult2["lt"] = 2] = "lt";
    CompareResult2[CompareResult2["gt"] = 3] = "gt";
    return CompareResult2;
  })(CompareResult || {});
  function binarySearch(list, value, compareFunc) {
    let start = 0;
    let end = list.length - 1;
    let tempIndex = null;
    while (start <= end) {
      tempIndex = Math.floor((start + end) / 2);
      const midValue = list[tempIndex];
      const compareRes = compareFunc(midValue, value);
      if (compareRes === 1) {
        return tempIndex;
      }
      if (compareRes === 2) {
        start = tempIndex + 1;
      } else if (compareRes === 3) {
        end = tempIndex - 1;
      }
    }
    return tempIndex;
  }
  const { create: create$w } = createComponent("list");
  const _sfc_main$K = create$w({
    components: {
      NutScrollView: _sfc_main$1u
    },
    props: {
      height: {
        type: [Number],
        default: 50
      },
      listData: {
        type: Array,
        default: () => {
          return [];
        }
      },
      bufferSize: {
        type: Number,
        default: 5
      },
      containerHeight: {
        type: Number
      },
      estimateRowHeight: {
        type: Number,
        default: 80
      },
      margin: {
        type: Number,
        default: 10
      }
    },
    emits: ["scrollUp", "scrollDown", "scrollBottom"],
    setup(props, { emit }) {
      var _a, _b;
      const clientHeight = ((_b = (_a = Taro.getSystemInfoSync) == null ? void 0 : _a.call(Taro)) == null ? void 0 : _b.windowHeight) || 667;
      const list = vue.ref(null);
      const phantom = vue.ref(null);
      const actualContent = vue.ref(null);
      const refRandomId = Math.random().toString(36).slice(-8);
      const state = vue.reactive({
        start: 0,
        originStartIndex: 0,
        scrollTop: 0,
        list: props.listData.slice(),
        cachePositions: [],
        phantomHeight: props.estimateRowHeight * props.listData.length
      });
      const getContainerHeight = vue.computed(() => {
        if (props.containerHeight) {
          return Math.min(props.containerHeight, clientHeight);
        }
        return clientHeight;
      });
      const visibleCount = vue.computed(() => {
        return Math.ceil(getContainerHeight.value / props.estimateRowHeight);
      });
      const end = vue.computed(() => {
        return Math.min(state.originStartIndex + visibleCount.value + props.bufferSize, state.list.length);
      });
      const visibleData = vue.computed(() => {
        return state.list.slice(state.start, end.value);
      });
      const getTransform = () => {
        if (actualContent.value) {
          return `translate3d(0, ${state.start >= 1 ? state.cachePositions[state.start - 1].bottom : 0}px, 0)`;
        }
      };
      const initCachedPosition = () => {
        state.cachePositions = [];
        for (let i = 0; i < state.list.length; ++i) {
          state.cachePositions[i] = {
            index: i,
            height: props.estimateRowHeight,
            top: i * props.estimateRowHeight,
            bottom: (i + 1) * (props.estimateRowHeight + props.margin),
            dValue: 0
          };
        }
      };
      const updateCachedPosition = () => {
        let nodes = actualContent.value.childNodes;
        nodes = Array.from(nodes).filter((node) => node.nodeType === 1);
        const start = nodes[0];
        nodes.forEach((node, index) => __async(this, null, function* () {
          if (!node) return;
          useTaroRect(node).then(
            (rect) => {
              if (rect && rect.height) {
                const { height: height2 } = rect;
                const oldHeight = state.cachePositions[index + state.start] ? state.cachePositions[index + state.start].height : props.height;
                const dValue = oldHeight - height2;
                if (dValue && state.cachePositions[index + state.start]) {
                  state.cachePositions[index + state.start].bottom -= dValue;
                  state.cachePositions[index + state.start].height = height2;
                  state.cachePositions[index + state.start].dValue = dValue;
                }
              }
            },
            () => {
            }
          );
        }));
        let startIndex = 0;
        if (start) {
          startIndex = state.start;
        }
        const cachedPositionsLen = state.cachePositions.length;
        let cumulativeDiffHeight = state.cachePositions[startIndex].dValue;
        state.cachePositions[startIndex].dValue = 0;
        for (let i = startIndex + 1; i < cachedPositionsLen; ++i) {
          const item = state.cachePositions[i];
          state.cachePositions[i].top = state.cachePositions[i - 1].bottom;
          state.cachePositions[i].bottom = state.cachePositions[i].bottom - cumulativeDiffHeight;
          if (item.dValue !== 0) {
            cumulativeDiffHeight += item.dValue;
            item.dValue = 0;
          }
        }
        const height = state.cachePositions[cachedPositionsLen - 1].bottom;
        state.phantomHeight = height;
      };
      const getStartIndex = (scrollTop = 0) => {
        let idx = binarySearch(
          state.cachePositions,
          scrollTop,
          (currentValue, targetValue) => {
            const currentCompareValue = currentValue.bottom;
            if (currentCompareValue === targetValue) {
              return CompareResult.eq;
            }
            if (currentCompareValue < targetValue) {
              return CompareResult.lt;
            }
            return CompareResult.gt;
          }
        );
        const targetItem = state.cachePositions[idx];
        if (targetItem.bottom < scrollTop) {
          idx += 1;
        }
        return idx;
      };
      const resetAllVirtualParam = () => {
        state.originStartIndex = 0;
        state.start = 0;
        state.scrollTop = 0;
        list.value.scrollTop = 0;
        initCachedPosition();
        state.phantomHeight = props.estimateRowHeight * state.list.length;
      };
      const handleScrollEvent = (e) => __async(this, null, function* () {
        const scrollTop = Math.max(e.detail ? e.detail.scrollTop : e.target.scrollTop, 0.1);
        const { originStartIndex } = state;
        const currentIndex = getStartIndex(scrollTop);
        if (currentIndex !== originStartIndex) {
          state.originStartIndex = currentIndex;
          state.start = Math.max(state.originStartIndex - props.bufferSize, 0);
          if (end.value >= state.list.length - 1) {
            emit("scrollBottom");
          }
        }
        emit(scrollTop > state.scrollTop ? "scrollUp" : "scrollDown", scrollTop);
        state.scrollTop = scrollTop;
      });
      initCachedPosition();
      vue.watch(
        () => props.listData,
        (val) => {
          state.list = val.slice();
          if (state.list.length === val.length) {
            setTimeout(() => {
              initCachedPosition();
              updateCachedPosition();
            }, 200);
          } else {
            resetAllVirtualParam();
            return;
          }
        }
      );
      vue.watch(
        () => state.start,
        () => {
          if (actualContent.value && state.list.length > 0) {
            Taro.nextTick(() => {
              setTimeout(() => {
                updateCachedPosition();
              }, 200);
            });
          }
        }
      );
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        list,
        phantom,
        actualContent,
        getTransform,
        visibleData,
        refRandomId,
        getContainerHeight,
        handleScrollEvent
      });
    }
  });
  const _hoisted_1$F = ["id"];
  const _hoisted_2$x = ["id"];
  const _hoisted_3$q = ["id"];
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_scroll_view = vue.resolveComponent("nut-scroll-view");
    return vue.openBlock(), vue.createBlock(_component_nut_scroll_view, {
      id: "list" + _ctx.refRandomId,
      ref: "list",
      class: "nut-list",
      "scroll-y": true,
      style: vue.normalizeStyle({ height: `${_ctx.getContainerHeight}px` }),
      "scroll-top": "0",
      onScroll: _ctx.handleScrollEvent
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("div", {
          id: "phantom" + _ctx.refRandomId,
          ref: "phantom",
          class: "nut-list-phantom",
          style: vue.normalizeStyle({ height: _ctx.phantomHeight + "px" })
        }, null, 12, _hoisted_1$F),
        _cache[0] || (_cache[0] = vue.createTextVNode()),
        vue.createElementVNode("div", {
          id: "actualContent" + _ctx.refRandomId,
          ref: "actualContent",
          class: "nut-list-container",
          style: vue.normalizeStyle({ transform: _ctx.getTransform() })
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.visibleData, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              id: "list-item-" + Number(index + _ctx.start),
              key: item,
              class: "nut-list-item"
            }, [
              vue.renderSlot(_ctx.$slots, "default", {
                item,
                index: index + _ctx.start
              })
            ], 8, _hoisted_3$q);
          }), 128))
        ], 12, _hoisted_2$x)
      ]),
      _: 3
    }, 8, ["id", "style", "onScroll"]);
  }
  const List = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$w]]);
  const _hoisted_1$E = { class: "nut-circle-progress__text" };
  const _sfc_main$J = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutCircleProgress"
  }), {
    __name: "circle-progress.taro",
    props: {
      progress: { default: 0 },
      strokeWidth: { default: 5 },
      radius: { default: 50 },
      strokeLinecap: { default: "round" },
      color: { default: "#fa2c19" },
      pathColor: { default: "#d9d9d9" },
      clockwise: { type: Boolean, default: true }
    },
    setup(__props) {
      const props = __props;
      const isIos = Taro.getSystemInfoSync().platform === "ios";
      const currentRate = vue.ref(props.progress);
      const refRandomId = Math.random().toString(36).slice(-8);
      const isObject2 = (val) => val !== null && typeof val === "object";
      const transColor = (color) => {
        return color && color.replace("#", "%23");
      };
      const stop = () => {
        if (!isObject2(props.color)) {
          return [];
        }
        let color = props.color;
        const colorArr = Object.keys(color).sort((a, b) => parseFloat(a) - parseFloat(b));
        let stopArr = [];
        colorArr.map((item) => {
          let obj = {
            key: "",
            value: ""
          };
          obj.key = item;
          obj.value = color[item];
          stopArr.push(obj);
        });
        return stopArr;
      };
      const style = vue.computed(() => {
        let { strokeWidth } = props;
        let stopArr = stop();
        let stopDom = [];
        if (stopArr) {
          stopArr.map((item) => {
            let obj = "";
            obj = `%3Cstop offset='${item.key}' stop-color='${transColor(item.value)}'/%3E`;
            stopDom.push(obj);
          });
        }
        let perimeter = 283;
        let progress = +currentRate.value;
        let offset = perimeter * Number(format(parseFloat(progress.toFixed(1)))) / 100;
        const isWise = props.clockwise ? 1 : 0;
        const color = isObject2(props.color) ? `url(%23${refRandomId})` : transColor(props.color);
        let d = `M 50 50 m 0 -45 a 45 45 0 1 ${isWise} 0 90 a 45 45 0 1, ${isWise} 0 -90`;
        const pa = `%3Cdefs%3E%3ClinearGradient id='${refRandomId}' x1='100%25' y1='0%25' x2='0%25' y2='0%25'%3E${stopDom}%3C/linearGradient%3E%3C/defs%3E`;
        const path = `%3Cpath d='${d}' stroke-width='${strokeWidth}' stroke='${transColor(props.pathColor)}' fill='none'/%3E`;
        const path1 = `%3Cpath d='${d}' stroke-width='${strokeWidth}' stroke-dasharray='${offset},${perimeter}' stroke-linecap='round' stroke='${color}' fill='none'/%3E`;
        return {
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100'  xmlns='http://www.w3.org/2000/svg'%3E${pa}${path}${path1}%3C/svg%3E")`,
          width: "100%",
          height: "100%",
          transition: `${isIos ? "" : "background-image .3s ease 0s, "}stroke .3s ease 0s`
        };
      });
      const format = (progress) => Math.min(Math.max(+progress, 0), 100);
      vue.watch(
        () => props.progress,
        (value) => {
          currentRate.value = Math.min(Math.max(+value, 0), 100);
        }
      );
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "nut-circle-progress",
          style: vue.normalizeStyle({ height: Number(_ctx.radius) * 2 + "px", width: Number(_ctx.radius) * 2 + "px" })
        }, [
          vue.createElementVNode("div", {
            style: vue.normalizeStyle(style.value)
          }, null, 4),
          _cache[0] || (_cache[0] = vue.createTextVNode()),
          vue.createElementVNode("div", _hoisted_1$E, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createElementVNode("span", null, vue.toDisplayString(_ctx.progress) + "%", 1)
            ])
          ])
        ], 4);
      };
    }
  }));
  withInstall(_sfc_main$J);
  const { create: create$v } = createComponent("noticebar");
  const _sfc_main$I = create$v({
    props: {
      direction: {
        type: String,
        default: "across"
      },
      list: {
        type: Array,
        default: () => []
      },
      standTime: {
        type: Number,
        default: 1e3
      },
      complexAm: {
        type: Boolean,
        default: false
      },
      height: {
        type: Number,
        default: 40
      },
      text: {
        type: String,
        default: ""
      },
      closeMode: {
        type: Boolean,
        default: false
      },
      wrapable: {
        type: Boolean,
        default: false
      },
      leftIcon: {
        type: Boolean,
        default: true
      },
      color: {
        type: String,
        default: ""
      },
      background: {
        type: String,
        default: ""
      },
      delay: {
        type: [String, Number],
        default: 1
      },
      scrollable: {
        type: Boolean,
        default: null
      },
      speed: {
        type: Number,
        default: 50
      }
    },
    components: {
      ScrollItem: function(props) {
        props.item.props.style = props.style;
        return vue.h(props.item);
      },
      Notice: iconsVueTaro.Notice,
      CircleClose: iconsVueTaro.CircleClose
    },
    emits: ["click", "close", "acrossEnd"],
    setup(props, { emit, slots }) {
      const wrap = vue.ref(null);
      const content = vue.ref(null);
      const state = vue.reactive({
        wrapWidth: 0,
        firstRound: true,
        duration: 0,
        offsetWidth: 0,
        showNoticebar: true,
        animationClass: "",
        animate: false,
        scrollList: [],
        distance: 0,
        timer: null,
        keepAlive: false,
        isCanScroll: null,
        showNotica: true,
        id: Math.round(Math.random() * 1e5)
      });
      const isEllipsis = vue.computed(() => {
        if (state.isCanScroll == null) {
          return false;
        } else {
          return !state.isCanScroll && !props.wrapable;
        }
      });
      const wrapContentClass = vue.computed(() => {
        return {
          "nut-noticebar__page-wrap-content": true,
          "nut-ellipsis": isEllipsis.value,
          [`content${state.id}`]: true,
          [state.animationClass]: true
        };
      });
      const barStyle = vue.computed(() => {
        let style = {};
        props.color && (style.color = props.color);
        props.background && (style.background = props.background);
        if (props.direction == "vertical") {
          style.height = `${props.height}px`;
        }
        return style;
      });
      const contentStyle = vue.computed(() => {
        return {
          animationDelay: (state.firstRound ? props.delay : 0) + "s",
          animationDuration: state.duration + "s",
          transform: `translateX(${state.firstRound ? 0 : state.wrapWidth + "px"})`
        };
      });
      const horseLampStyle = vue.computed(() => {
        let styles = {};
        if (props.complexAm) {
          styles = {
            transform: `translateY(${state.distance}px)`
          };
        } else {
          if (state.animate) {
            styles = {
              transition: `all ${~~(props.height / props.speed / 4)}s`,
              "margin-top": `-${props.height}px`
            };
          }
        }
        return styles;
      });
      vue.watch(
        () => props.text,
        () => {
          initScrollWrap();
        }
      );
      vue.watch(
        () => props.list,
        (value) => {
          state.scrollList = [].concat(value);
        }
      );
      const getRect = (selector) => {
        return new Promise((resolve) => {
          Taro.createSelectorQuery().select(selector).boundingClientRect().exec((rect = []) => {
            resolve(rect[0]);
          });
        });
      };
      const initScrollWrap = () => {
        if (state.showNoticebar == false) {
          return;
        }
        setTimeout(() => {
          if (!wrap.value || !content.value) {
            return;
          }
          let wrapWidth = 0;
          let offsetWidth = 0;
          getRect(`.wrap${state.id}`).then((rect) => {
            if ((rect == null ? void 0 : rect.width) > 0) wrapWidth = rect.width;
            getRect(`.content${state.id}`).then((rect2) => {
              if ((rect2 == null ? void 0 : rect2.width) > 0) offsetWidth = rect2.width;
              state.isCanScroll = props.scrollable == null ? offsetWidth > wrapWidth : props.scrollable;
              if (state.isCanScroll) {
                state.wrapWidth = wrapWidth;
                state.offsetWidth = offsetWidth;
                state.duration = offsetWidth / props.speed;
                state.animationClass = "play";
              } else {
                state.animationClass = "";
              }
            });
          });
        }, 100);
      };
      const handleClick = (event) => {
        emit("click", event);
      };
      const onClickIcon = (event) => {
        if (props.closeMode) {
          state.showNoticebar = !props.closeMode;
        }
        emit("close", event);
      };
      const onAnimationEnd = (event) => {
        state.firstRound = false;
        emit("acrossEnd", event);
        setTimeout(() => {
          state.duration = (state.offsetWidth + state.wrapWidth) / props.speed;
          state.animationClass = "play-infinite";
        }, 0);
      };
      const startRollEasy = () => {
        showhorseLamp();
        state.timer = setInterval(showhorseLamp, ~~(props.height / props.speed / 4) * 1e3 + props.standTime);
      };
      const showhorseLamp = () => {
        state.animate = true;
        setTimeout(
          () => {
            state.scrollList.push(state.scrollList[0]);
            state.scrollList.shift();
            state.animate = false;
          },
          ~~(props.height / props.speed / 4) * 1e3
        );
      };
      const startRoll = () => {
        state.timer = setInterval(
          () => {
            let chunk = 100;
            for (let i = 0; i < chunk; i++) {
              scroll(i, i < chunk - 1 ? false : true);
            }
          },
          props.standTime + 100 * props.speed
        );
      };
      const scroll = (n, last) => {
        setTimeout(() => {
          state.distance -= props.height / 100;
          if (last) {
            state.scrollList.push(state.scrollList[0]);
            state.scrollList.shift();
            state.distance = 0;
          }
        }, n * props.speed);
      };
      const go = (item) => {
        emit("click", item);
      };
      const handleClickIcon = () => {
        if (props.closeMode) {
          state.showNoticebar = !props.closeMode;
        }
        emit("close", state.scrollList[0]);
      };
      vue.onMounted(() => {
        if (props.direction == "vertical") {
          if (slots.default) {
            updateSlotChild();
            watchSlots();
          } else {
            state.scrollList = [].concat(props.list);
          }
          setTimeout(() => {
            props.complexAm ? startRoll() : startRollEasy();
          }, props.standTime);
        } else {
          initScrollWrap();
        }
      });
      const updateSlotChild = () => {
        if (slots.default) state.scrollList = [].concat(slots.default()[0].children);
      };
      const watchSlots = () => {
        setTimeout(() => {
          var observer = new MutationObserver(() => {
            state.showNotica = false;
            setTimeout(() => {
              state.showNotica = true;
            });
            updateSlotChild();
          });
          const ele = document.getElementsByClassName("nut-noticebar-custom-item")[0];
          if (ele) {
            observer.observe(ele, {
              childList: true,
              subtree: true
            });
          }
        }, 100);
      };
      vue.onActivated(() => {
        if (state.keepAlive) {
          state.keepAlive = false;
        }
      });
      vue.onDeactivated(() => {
        state.keepAlive = true;
        clearInterval(state.timer);
      });
      vue.onUnmounted(() => {
        clearInterval(state.timer);
      });
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        isEllipsis,
        barStyle,
        contentStyle,
        horseLampStyle,
        wrap,
        content,
        handleClick,
        onClickIcon,
        onAnimationEnd,
        go,
        handleClickIcon,
        slots,
        pxCheck,
        wrapContentClass,
        renderIcon
      });
    }
  });
  const _hoisted_1$D = { class: "nut-noticebar" };
  const _hoisted_2$w = {
    key: 0,
    class: "nut-noticebar__page-lefticon"
  };
  const _hoisted_3$p = { class: "showNotica" };
  const _hoisted_4$n = { class: "nut-noticebar-custom-item" };
  const _hoisted_5$d = ["onClick"];
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Notice = vue.resolveComponent("Notice");
    const _component_CircleClose = vue.resolveComponent("CircleClose");
    const _component_ScrollItem = vue.resolveComponent("ScrollItem");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$D, [
      _ctx.direction == "across" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["nut-noticebar__page", {
          "nut-noticebar__page--withicon": _ctx.closeMode,
          "nut-noticebar__page--close": _ctx.closeMode,
          "nut-noticebar__page--wrapable": _ctx.wrapable
        }]),
        style: vue.normalizeStyle(_ctx.barStyle),
        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        _ctx.leftIcon ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$w, [
          vue.renderSlot(_ctx.$slots, "left-icon", {}, () => [
            vue.createVNode(_component_Notice, { size: "16px" })
          ])
        ])) : vue.createCommentVNode("", true),
        _cache[5] || (_cache[5] = vue.createTextVNode()),
        vue.createElementVNode("view", {
          ref: "wrap",
          class: vue.normalizeClass(`nut-noticebar__page-wrap wrap${_ctx.id}`)
        }, [
          vue.createElementVNode("view", {
            ref: "content",
            class: vue.normalizeClass(_ctx.wrapContentClass),
            style: vue.normalizeStyle(_ctx.contentStyle),
            onAnimationend: _cache[0] || (_cache[0] = (...args) => _ctx.onAnimationEnd && _ctx.onAnimationEnd(...args)),
            onWebkitAnimationEnd: _cache[1] || (_cache[1] = (...args) => _ctx.onAnimationEnd && _ctx.onAnimationEnd(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createTextVNode(vue.toDisplayString(_ctx.text), 1)
            ])
          ], 38)
        ], 2),
        _cache[6] || (_cache[6] = vue.createTextVNode()),
        _ctx.closeMode || _ctx.$slots["right-icon"] ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "nut-noticebar__page-righticon",
          onClick: _cache[2] || (_cache[2] = vue.withModifiers((...args) => _ctx.onClickIcon && _ctx.onClickIcon(...args), ["stop"]))
        }, [
          vue.renderSlot(_ctx.$slots, "right-icon", {}, () => [
            vue.createVNode(_component_CircleClose)
          ])
        ])) : vue.createCommentVNode("", true)
      ], 6)), [
        [vue.vShow, _ctx.showNoticebar]
      ]) : vue.createCommentVNode("", true),
      _cache[9] || (_cache[9] = vue.createTextVNode()),
      _ctx.scrollList.length > 0 && _ctx.direction == "vertical" && _ctx.showNoticebar ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "nut-noticebar__vertical",
        style: vue.normalizeStyle(_ctx.barStyle)
      }, [
        _ctx.slots.default ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createElementVNode("view", {
            class: "nut-noticebar__vertical-list",
            style: vue.normalizeStyle(_ctx.horseLampStyle)
          }, [
            vue.createElementVNode("view", _hoisted_3$p, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.scrollList, (item, index) => {
                return vue.openBlock(), vue.createBlock(_component_ScrollItem, {
                  key: index,
                  style: vue.normalizeStyle({ height: _ctx.height + "px", "line-height": _ctx.height + "px" }),
                  item
                }, null, 8, ["style", "item"]);
              }), 128))
            ])
          ], 4),
          _cache[7] || (_cache[7] = vue.createTextVNode()),
          vue.createElementVNode("view", _hoisted_4$n, [
            vue.renderSlot(_ctx.$slots, "default")
          ])
        ], 64)) : (vue.openBlock(), vue.createElementBlock("ul", {
          key: 1,
          class: "nut-noticebar__vertical-list",
          style: vue.normalizeStyle(_ctx.horseLampStyle)
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.scrollList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("li", {
              key: index,
              class: "nut-noticebar__vertical-item",
              style: vue.normalizeStyle({ height: _ctx.pxCheck(_ctx.height), lineHeight: _ctx.pxCheck(_ctx.height) }),
              onClick: ($event) => _ctx.go(item)
            }, vue.toDisplayString(item), 13, _hoisted_5$d);
          }), 128))
        ], 4)),
        _cache[8] || (_cache[8] = vue.createTextVNode()),
        vue.createElementVNode("view", {
          class: "go",
          onClick: _cache[4] || (_cache[4] = ($event) => _ctx.handleClickIcon())
        }, [
          vue.renderSlot(_ctx.$slots, "right-icon", {}, () => [
            _ctx.closeMode ? (vue.openBlock(), vue.createBlock(_component_CircleClose, {
              key: 0,
              color: _ctx.color,
              size: "11px"
            }, null, 8, ["color"])) : vue.createCommentVNode("", true)
          ])
        ])
      ], 4)) : vue.createCommentVNode("", true)
    ]);
  }
  const Noticebar = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$v]]);
  const _hoisted_1$C = { class: "nut-empty" };
  const _hoisted_2$v = ["src"];
  const _hoisted_3$o = { class: "nut-empty__description" };
  const cN$b = "NutEmpty";
  const _sfc_main$H = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: cN$b
  }), {
    __name: "empty.taro",
    props: {
      image: { default: "empty" },
      imageSize: { default: "" },
      description: { default: "" }
    },
    setup(__props) {
      const props = __props;
      const translate = useLocale(cN$b);
      const defaultStatus = {
        empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
        error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
        network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
      };
      const style = vue.computed(() => {
        if (props.imageSize) {
          return {
            width: pxCheck(props.imageSize),
            height: pxCheck(props.imageSize)
          };
        }
        return {};
      });
      const src = vue.computed(() => /^https?:\/\/|^\/\//.test(props.image) ? props.image : defaultStatus[props.image]);
      const descriptionText = vue.computed(() => props.description || translate("noData"));
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$C, [
          vue.createElementVNode("view", {
            class: "nut-empty__box",
            style: vue.normalizeStyle(style.value)
          }, [
            vue.renderSlot(_ctx.$slots, "image", {}, () => [
              src.value ? (vue.openBlock(), vue.createElementBlock("img", {
                key: 0,
                class: "nut-empty__box--img",
                src: src.value
              }, null, 8, _hoisted_2$v)) : vue.createCommentVNode("", true)
            ])
          ], 4),
          _cache[0] || (_cache[0] = vue.createTextVNode()),
          vue.renderSlot(_ctx.$slots, "description", {}, () => [
            vue.createElementVNode("view", _hoisted_3$o, vue.toDisplayString(descriptionText.value), 1)
          ]),
          _cache[1] || (_cache[1] = vue.createTextVNode()),
          vue.renderSlot(_ctx.$slots, "default")
        ]);
      };
    }
  }));
  withInstall(_sfc_main$H);
  const STEPS_KEY = Symbol("nut-steps");
  const _sfc_main$G = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutSteps"
  }), {
    __name: "steps.taro",
    props: {
      direction: { default: "horizontal" },
      current: { default: "0" },
      progressDot: { type: Boolean, default: false }
    },
    emits: ["clickStep"],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-steps";
        return {
          [prefixCls2]: true,
          [`${prefixCls2}-${props.direction}`]: true,
          [`${prefixCls2}-dot`]: !!props.progressDot
        };
      });
      const { linkChildren } = useChildren(STEPS_KEY);
      const onEmit = (index) => {
        emit("clickStep", index);
      };
      linkChildren({ props, onEmit });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(classes.value)
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2);
      };
    }
  }));
  withInstall(_sfc_main$G);
  const _hoisted_1$B = { class: "nut-step-head" };
  const _hoisted_2$u = { class: "nut-step-icon-inner" };
  const _hoisted_3$n = {
    key: 0,
    class: "nut-step-inner"
  };
  const _hoisted_4$m = { class: "nut-step-main" };
  const _hoisted_5$c = { class: "nut-step-title" };
  const _hoisted_6$a = {
    key: 0,
    class: "nut-step-content"
  };
  const _hoisted_7$9 = ["innerHTML"];
  const _sfc_main$F = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutStep"
  }), {
    __name: "step.taro",
    props: {
      title: { default: "" },
      content: { default: "" }
    },
    setup(__props) {
      const { index, parent } = useParent(STEPS_KEY);
      const status = vue.computed(() => {
        const activeIndex = index.value + 1;
        if (activeIndex < +parent.props.current) return "finish";
        return activeIndex === +parent.props.current ? "process" : "wait";
      });
      const dot = vue.computed(() => parent.props.progressDot);
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-step";
        return {
          [prefixCls2]: true,
          [`${prefixCls2}-${status.value}`]: true
        };
      });
      const handleClickStep = () => {
        parent.onEmit(index.value + 1);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(classes.value),
          onClick: handleClickStep
        }, [
          vue.createElementVNode("view", _hoisted_1$B, [
            _cache[0] || (_cache[0] = vue.createElementVNode("view", { class: "nut-step-line" }, null, -1)),
            _cache[1] || (_cache[1] = vue.createTextVNode()),
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["nut-step-icon", [!dot.value ? "is-icon" : ""]])
            }, [
              vue.createElementVNode("view", _hoisted_2$u, [
                vue.renderSlot(_ctx.$slots, "icon", {}, () => [
                  !dot.value ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$n, vue.toDisplayString(vue.unref(index) + 1), 1)) : vue.createCommentVNode("", true)
                ])
              ])
            ], 2)
          ]),
          _cache[3] || (_cache[3] = vue.createTextVNode()),
          vue.createElementVNode("view", _hoisted_4$m, [
            vue.createElementVNode("view", _hoisted_5$c, [
              vue.renderSlot(_ctx.$slots, "title", {}, () => [
                vue.createElementVNode("span", null, vue.toDisplayString(_ctx.title), 1)
              ])
            ]),
            _cache[2] || (_cache[2] = vue.createTextVNode()),
            _ctx.content || _ctx.$slots.content ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_6$a, [
              vue.renderSlot(_ctx.$slots, "content", {}, () => [
                vue.createElementVNode("span", { innerHTML: _ctx.content }, null, 8, _hoisted_7$9)
              ])
            ])) : vue.createCommentVNode("", true)
          ])
        ], 2);
      };
    }
  }));
  withInstall(_sfc_main$F);
  const SWIPER_KEY = Symbol("nut-swiper");
  const { create: create$u, componentName: componentName$2 } = createComponent("swiper");
  const _sfc_main$E = create$u({
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
      const container = vue.ref();
      const refRandomId = Math.random().toString(36).slice(-8);
      const state = vue.reactive({
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
      const isVertical = vue.computed(() => props.direction === "vertical");
      const classesInner = vue.computed(() => {
        const prefixCls2 = componentName$2;
        return {
          [`${prefixCls2}-inner`]: true,
          [`${prefixCls2}-vertical`]: isVertical.value
        };
      });
      const classesPagination = vue.computed(() => {
        const prefixCls2 = componentName$2;
        return {
          [`${prefixCls2}-pagination`]: true,
          [`${prefixCls2}-pagination-vertical`]: isVertical.value
        };
      });
      const delTa = vue.computed(() => {
        return isVertical.value ? touch.deltaY.value : touch.deltaX.value;
      });
      const isCorrectDirection = vue.computed(() => {
        return touch.direction.value === props.direction;
      });
      const childCount = vue.computed(() => state.children.length);
      const size = vue.computed(() => state[isVertical.value ? "height" : "width"]);
      const trackSize = vue.computed(() => childCount.value * size.value);
      const minOffset = vue.computed(() => {
        if (state.rect) {
          const base = isVertical.value ? state.rect.height : state.rect.width;
          return base - size.value * childCount.value;
        }
        return 0;
      });
      const activePagination = vue.computed(() => (state.active + childCount.value) % childCount.value);
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
        requestAniFrame$1(() => {
          requestAniFrame$1(() => {
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
        requestAniFrame$1(() => {
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
        if (Number(props.autoPlay) <= 0 || childCount.value <= 1) return;
        stopAutoPlay();
        state.autoplayTimer = setTimeout(() => {
          next();
          autoplay();
        }, Number(props.autoPlay));
      };
      const init = (..._0) => __async(this, [..._0], function* (active = +props.initPage) {
        if (!container.value) return;
        stopAutoPlay();
        useTaroRect(container).then(
          (rect) => {
            state.rect = rect;
            active = Math.min(childCount.value - 1, active);
            state.width = props.width ? +props.width : rect == null ? void 0 : rect.width;
            state.height = props.height ? +props.height : rect == null ? void 0 : rect.height;
            state.active = active;
            state.offset = getOffset(state.active);
            state.moving = true;
            getStyle();
            autoplay();
          },
          () => {
          }
        );
      });
      const onTouchStart = (e) => {
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
      vue.provide(SWIPER_KEY, {
        props,
        size,
        relation
      });
      expose({
        prev,
        next,
        to
      });
      vue.onDeactivated(() => {
        stopAutoPlay();
      });
      vue.onBeforeUnmount(() => {
        stopAutoPlay();
      });
      vue.watch(
        () => props.initPage,
        (val) => {
          Taro.nextTick(() => {
            init(+val);
          });
          Taro.eventCenter.once(Taro.getCurrentInstance().router.onReady, () => {
            init(+val);
          });
        }
      );
      vue.watch(
        () => props.height,
        () => {
          Taro.nextTick(() => {
            init();
          });
          Taro.eventCenter.once(Taro.getCurrentInstance().router.onReady, () => {
            init();
          });
        }
      );
      vue.watch(
        () => state.children.length,
        () => {
          Taro.nextTick(() => {
            init();
          });
          Taro.eventCenter.once(Taro.getCurrentInstance().router.onReady, () => {
            Taro.nextTick(() => {
              init();
            });
          });
        }
      );
      vue.watch(
        () => props.autoPlay,
        (val) => {
          Number(val) > 0 ? autoplay() : stopAutoPlay();
        }
      );
      return {
        state,
        refRandomId,
        classesPagination,
        classesInner,
        container,
        activePagination,
        onTouchStart,
        onTouchMove,
        onTouchEnd
      };
    }
  });
  const _hoisted_1$A = ["id", "catch-move"];
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      id: "container-" + _ctx.refRandomId,
      ref: "container",
      class: "nut-swiper",
      "catch-move": _ctx.isPreventDefault,
      onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
      onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
      onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
      onTouchcancel: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(_ctx.classesInner),
        style: vue.normalizeStyle(_ctx.state.style)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 6),
      _cache[4] || (_cache[4] = vue.createTextVNode()),
      vue.renderSlot(_ctx.$slots, "page"),
      _cache[5] || (_cache[5] = vue.createTextVNode()),
      _ctx.paginationVisible && !_ctx.$slots.page ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(_ctx.classesPagination)
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.state.children.length, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("i", {
            key: index,
            style: vue.normalizeStyle({
              backgroundColor: _ctx.activePagination === index ? _ctx.paginationColor : _ctx.paginationUnselectedColor
            }),
            class: vue.normalizeClass({ active: _ctx.activePagination === index })
          }, null, 6);
        }), 128))
      ], 2)) : vue.createCommentVNode("", true)
    ], 40, _hoisted_1$A);
  }
  const Swiper = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$u]]);
  function useExpose(apis) {
    const instance = vue.getCurrentInstance();
    if (instance) {
      Object.assign(instance.proxy, apis);
    }
  }
  const { create: create$t } = createComponent("swiper-item");
  const _sfc_main$D = create$t({
    setup() {
      const parent = vue.inject(SWIPER_KEY);
      parent["relation"](vue.getCurrentInstance());
      const state = vue.reactive({
        offset: 0
      });
      const style = vue.computed(() => {
        const style2 = {};
        const direction = parent == null ? void 0 : parent.props.direction;
        if (parent == null ? void 0 : parent.size.value) {
          style2[direction === "horizontal" ? "width" : "height"] = `${parent == null ? void 0 : parent.size.value}px`;
        }
        if (state.offset) {
          style2["transform"] = `translate${direction === "horizontal" ? "X" : "Y"}(${state.offset}px)`;
        }
        return style2;
      });
      const setOffset = (offset) => {
        state.offset = offset;
      };
      vue.onUnmounted(() => {
        parent["relation"](vue.getCurrentInstance(), "unmount");
      });
      useExpose({ setOffset });
      return {
        style
      };
    }
  });
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "nut-swiper-item",
      style: vue.normalizeStyle(_ctx.style)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 4);
  }
  const SwiperItem = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$t]]);
  const _hoisted_1$z = ["innerHTML"];
  const _hoisted_2$t = ["innerHTML"];
  const prefix = "nut-price";
  const _sfc_main$C = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutPrice"
  }), {
    __name: "price.taro",
    props: {
      price: { default: 0 },
      needSymbol: { type: Boolean, default: true },
      symbol: { default: "&yen;" },
      decimalDigits: { default: 2 },
      thousands: { type: Boolean, default: false },
      position: { default: "before" },
      size: { default: "normal" },
      strikeThrough: { type: Boolean, default: false }
    },
    setup(__props) {
      const props = __props;
      const classes = vue.computed(() => {
        return {
          [prefix]: true,
          [`${prefix}--strike`]: props.strikeThrough
        };
      });
      const replaceSpecialChar = (url) => {
        url = url.replace(/&quot;/g, '"');
        url = url.replace(/&amp;/g, "&");
        url = url.replace(/&lt;/g, "<");
        url = url.replace(/&gt;/g, ">");
        url = url.replace(/&nbsp;/g, " ");
        url = url.replace(/&yen;/g, "￥");
        return url;
      };
      const showSymbol = vue.computed(() => {
        const symbol = props.needSymbol ? replaceSpecialChar(props.symbol) : "";
        return symbol;
      });
      const checkPoint = (price) => {
        return String(price).indexOf(".") > 0;
      };
      const formatThousands = (num) => {
        if (Number(num) == 0) {
          num = 0;
        }
        if (checkPoint(num)) {
          num = Number(num).toFixed(props.decimalDigits);
          num = typeof num.split(".") === "string" ? num.split(".") : num.split(".")[0];
        } else {
          num = num.toString();
        }
        if (props.thousands) {
          return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
        } else {
          return num;
        }
      };
      const formatDecimal = (decimalNum) => {
        if (Number(decimalNum) == 0) {
          decimalNum = 0;
        }
        if (checkPoint(decimalNum)) {
          decimalNum = Number(decimalNum).toFixed(props.decimalDigits);
          decimalNum = typeof decimalNum.split(".") === "string" ? 0 : decimalNum.split(".")[1] ? decimalNum.split(".")[1] : 0;
        } else {
          decimalNum = 0;
        }
        const result = "0." + decimalNum;
        const resultFixed = Number(result).toFixed(props.decimalDigits);
        return String(resultFixed).substring(2, resultFixed.length);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(classes.value)
        }, [
          _ctx.needSymbol && _ctx.position === "before" ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: vue.normalizeClass(["nut-price--symbol", `nut-price--symbol-${_ctx.size}`]),
            innerHTML: showSymbol.value
          }, null, 10, _hoisted_1$z)) : vue.createCommentVNode("", true),
          _cache[0] || (_cache[0] = vue.createTextVNode()),
          vue.createElementVNode("view", {
            class: vue.normalizeClass(`nut-price--${_ctx.size}`)
          }, vue.toDisplayString(formatThousands(_ctx.price)), 3),
          _cache[1] || (_cache[1] = vue.createTextVNode()),
          _ctx.decimalDigits != 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: vue.normalizeClass(`nut-price--decimal-${_ctx.size}`)
          }, ".", 2)) : vue.createCommentVNode("", true),
          _cache[2] || (_cache[2] = vue.createTextVNode()),
          vue.createElementVNode("view", {
            class: vue.normalizeClass(`nut-price--decimal-${_ctx.size}`)
          }, vue.toDisplayString(formatDecimal(_ctx.price)), 3),
          _cache[3] || (_cache[3] = vue.createTextVNode()),
          _ctx.needSymbol && _ctx.position === "after" ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: vue.normalizeClass(["nut-price--symbol", `nut-price--symbol-${_ctx.size}`]),
            innerHTML: showSymbol.value
          }, null, 10, _hoisted_2$t)) : vue.createCommentVNode("", true)
        ], 2);
      };
    }
  }));
  withInstall(_sfc_main$C);
  const { create: create$s } = createComponent("image-preview");
  const _sfc_main$B = create$s({
    props: {
      show: {
        type: Boolean,
        default: false
      },
      images: {
        type: Array,
        default: () => []
      },
      contentClose: {
        type: Boolean,
        default: true
      },
      initNo: {
        type: Number,
        default: 0
      },
      paginationVisible: {
        type: Boolean,
        default: false
      },
      paginationColor: {
        type: String,
        default: "#fff"
      },
      autoplay: {
        type: [Number, String],
        default: 3e3
      },
      showIndex: {
        type: Boolean,
        default: true
      },
      closeable: {
        type: Boolean,
        default: false
      },
      closeIconPosition: {
        type: String,
        default: "top-right"
        // top-right  top-left
      },
      beforeClose: Function,
      isLoop: {
        type: Boolean,
        default: true
      }
    },
    emits: ["close", "change", "longPress"],
    components: {
      NutPopup: Popup,
      NutSwiper: Swiper,
      NutSwiperItem: SwiperItem,
      CircleClose: iconsVueTaro.CircleClose
    },
    setup(props, { emit }) {
      const state = vue.reactive({
        showPop: false,
        active: 0,
        options: {
          muted: true,
          controls: true
        },
        eleImg: null,
        store: {
          scale: 1,
          moveable: false,
          originScale: 1,
          oriDistance: 1
        },
        lastTouchEndTime: 0,
        // 用来辅助监听双击
        ENV: Taro.getEnv(),
        ENV_TYPE: Taro.ENV_TYPE
      });
      const styles = vue.computed(() => {
        let style = {};
        if (props.closeIconPosition == "top-right") {
          style.right = "10px";
        } else {
          style.left = "10px";
        }
        return style;
      });
      const setActive = (active) => {
        if (active !== state.active) {
          state.active = active;
          emit("change", state.active);
        }
      };
      const closeOnImg = () => {
        if (props.contentClose) {
          onClose();
        }
      };
      const onClose = () => {
        funInterceptor(props.beforeClose, {
          args: [state.active],
          done: () => closeDone()
        });
      };
      const closeDone = () => {
        state.showPop = false;
        state.store.scale = 1;
        scaleNow();
        emit("close");
      };
      const getDistance = (first, second) => {
        return Math.hypot(Math.abs(second.x - first.x), Math.abs(second.y - first.y));
      };
      const scaleNow = () => {
        if (state.eleImg != null) {
          state.eleImg.style.transform = "scale(" + state.store.scale + ")";
        }
      };
      const onTouchStart = (event) => {
        const curTouchTime = (/* @__PURE__ */ new Date()).getTime();
        const touches = event.touches;
        const events = touches[0];
        const events2 = touches[1];
        const store = state.store;
        if (curTouchTime - state.lastTouchEndTime < 300) {
          if (store.scale > 1) {
            store.scale = 1;
          } else if (store.scale == 1) {
            store.scale = 2;
          }
          scaleNow();
        }
        store.moveable = true;
        if (events2) {
          store.oriDistance = getDistance(
            {
              x: events.pageX,
              y: events.pageY
            },
            {
              x: events2.pageX,
              y: events2.pageY
            }
          );
        }
        store.originScale = store.scale || 1;
      };
      const onTouchMove = (event) => {
        if (!state.store.moveable) {
          return;
        }
        const store = state.store;
        const touches = event.touches;
        const events = touches[0];
        const events2 = touches[1];
        if (events2) {
          const curDistance = getDistance(
            {
              x: events.pageX,
              y: events.pageY
            },
            {
              x: events2.pageX,
              y: events2.pageY
            }
          );
          const curScale = curDistance / store.oriDistance;
          store.scale = store.originScale * curScale;
          state.store.scale = Math.min(state.store.scale, 3);
          scaleNow();
        }
      };
      const onTouchEnd = () => {
        state.lastTouchEndTime = (/* @__PURE__ */ new Date()).getTime();
        const store = state.store;
        store.moveable = false;
        if (store.scale < 1.1 && store.scale > 1 || store.scale < 1) {
          store.scale = 1;
          scaleNow();
        }
      };
      const longPress = (image) => {
        emit("longPress", image);
      };
      const init = () => {
        state.eleImg = document.querySelector(".nut-image-preview");
        document.addEventListener("touchmove", onTouchMove);
        document.addEventListener("touchend", onTouchEnd);
        document.addEventListener("touchcancel", onTouchEnd);
      };
      vue.watch(
        () => props.show,
        (val) => {
          state.showPop = val;
          if (val) {
            setActive(props.initNo);
            init();
          }
        }
      );
      vue.watch(
        () => props.initNo,
        (val) => {
          if (val != state.active) setActive(val);
        }
      );
      vue.onMounted(() => {
        setActive(props.initNo);
      });
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        setActive,
        onClose,
        closeOnImg,
        onTouchStart,
        onTouchMove,
        onTouchEnd,
        getDistance,
        scaleNow,
        longPress,
        styles
      });
    }
  });
  const _hoisted_1$y = ["src", "on:longPress", "on:longTap"];
  const _hoisted_2$s = {
    key: 0,
    class: "nut-image-preview-index"
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_swiper_item = vue.resolveComponent("nut-swiper-item");
    const _component_nut_swiper = vue.resolveComponent("nut-swiper");
    const _component_CircleClose = vue.resolveComponent("CircleClose");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createBlock(_component_nut_popup, {
      visible: _ctx.showPop,
      "onUpdate:visible": _cache[3] || (_cache[3] = ($event) => _ctx.showPop = $event),
      "pop-class": "nut-image-preview-custom-pop"
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", {
          class: "nut-image-preview",
          onTouchstartCapture: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args))
        }, [
          _ctx.showPop ? (vue.openBlock(), vue.createBlock(_component_nut_swiper, {
            key: 0,
            "auto-play": _ctx.autoplay,
            class: "nut-image-preview-swiper",
            loop: _ctx.isLoop,
            "is-prevent-default": false,
            direction: "horizontal",
            "init-page": _ctx.initNo,
            "pagination-visible": _ctx.paginationVisible,
            "pagination-color": _ctx.paginationColor,
            onChange: _ctx.setActive
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.images, (item, index) => {
                return vue.openBlock(), vue.createBlock(_component_nut_swiper_item, { key: index }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("img", {
                      src: item.src,
                      mode: "aspectFit",
                      class: "nut-image-preview-img",
                      "on:longPress": ($event) => _ctx.longPress(item),
                      "on:longTap": ($event) => _ctx.longPress(item),
                      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.closeOnImg && _ctx.closeOnImg(...args), ["stop"]))
                    }, null, 40, _hoisted_1$y)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }, 8, ["auto-play", "loop", "init-page", "pagination-visible", "pagination-color", "onChange"])) : vue.createCommentVNode("", true)
        ], 32),
        _cache[4] || (_cache[4] = vue.createTextVNode()),
        _ctx.showIndex ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$s, vue.toDisplayString(_ctx.active + 1) + " / " + vue.toDisplayString(_ctx.images.length), 1)) : vue.createCommentVNode("", true),
        _cache[5] || (_cache[5] = vue.createTextVNode()),
        _ctx.closeable ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "nut-image-preview-close-icon",
          style: vue.normalizeStyle(_ctx.styles),
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onClose && _ctx.onClose(...args))
        }, [
          vue.createVNode(_component_CircleClose, { color: "#ffffff" })
        ], 4)) : vue.createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["visible"]);
  }
  const ImagePreview = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$s]]);
  function useExtend(apis) {
    const instance = vue.getCurrentInstance();
    if (instance) {
      Object.assign(instance.proxy, apis);
    }
  }
  const { create: create$r } = createComponent("countup");
  const _sfc_main$A = create$r({
    props: {
      initNum: {
        type: Number,
        default: 0
      },
      endNum: {
        type: Number,
        default: 0
      },
      speed: {
        type: Number,
        default: 1
      },
      toFixed: {
        type: Number,
        default: 0
      },
      during: {
        type: Number,
        default: 1e3
      },
      startFlag: {
        type: Boolean,
        default: true
      },
      // 数字滚动
      numWidth: {
        type: Number,
        default: 20
      },
      numHeight: {
        type: Number,
        default: 20
      },
      scrolling: {
        type: Boolean,
        default: false
      },
      // 自定义图片
      customBgImg: {
        type: String,
        default: ""
      },
      customSpacNum: {
        type: Number,
        default: 0
      },
      customChangeNum: {
        type: Number,
        default: 1
      },
      // 抽奖
      type: {
        type: String,
        default: ""
      },
      machineNum: {
        type: Number,
        default: 3
      },
      machinePrizeNum: {
        type: Number,
        default: 0
      },
      machinePrizeLevel: {
        type: Number,
        default: 0
      },
      machineTrunMore: {
        type: Number,
        default: 0
      }
    },
    components: {},
    emits: ["click", "scrollEnd"],
    setup(props, { emit }) {
      const data = vue.reactive({
        valFlag: false,
        current: 0,
        sortFlag: "add",
        initDigit1: 0,
        initDigit2: 0,
        to0_10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        to10_0: [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1],
        timer: null,
        totalCount: 0,
        // 正整数
        pointNum: 0,
        // 小数位
        numberVal: 0,
        // 数字
        num_total_len: 0,
        // 数字长度
        relNum: 0,
        // 去除小数点
        customNumber: 1,
        prizeLevelTrun: 0,
        prizeY: [],
        prizeYPrev: [],
        // machineTransition: 'none',
        finshMachine: 0,
        notPrize: [],
        typeMachine: ""
      });
      const { startFlag, scrolling, customBgImg, type } = vue.reactive(props);
      vue.watch(
        () => props.customChangeNum,
        () => {
          clearIntervalTime();
          countGo(0);
        }
      );
      vue.watch(
        () => props.machinePrizeLevel,
        (count) => {
          data.prizeLevelTrun = count;
        }
      );
      vue.watch(
        () => props.initNum,
        (count) => {
          data.current = count;
          data.valFlag = false;
          valChange();
        }
      );
      vue.watch(
        () => props.endNum,
        () => {
          data.current = props.initNum;
          data.valFlag = false;
          valChange();
        }
      );
      const valChange = () => {
        if (data.valFlag) {
          return false;
        }
        if (startFlag) {
          if (scrolling || customBgImg) {
            if (type != "machine") {
              countGo();
            }
          } else {
            countChange();
            setTimeout(() => {
              data.valFlag = true;
            }, 300);
          }
        }
      };
      const clearIntervalTime = () => {
        clearInterval(Number(data.timer));
        data.timer = null;
      };
      const calculation = (num1, num2, type2) => {
        const num1Digits = (num1.toString().split(".")[1] || "").length;
        const num2Digits = (num2.toString().split(".")[1] || "").length;
        const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
        if (type2 == "-") {
          const n = Number((num1 * baseNum - num2 * baseNum).toFixed(0));
          return n / baseNum;
        } else {
          const m = Number((num1 * baseNum + num2 * baseNum).toFixed(0));
          return m / baseNum;
        }
      };
      const topNumber = (index) => {
        let { num_total_len, pointNum, initDigit1, initDigit2, sortFlag } = data;
        let idx1 = sortFlag == "add" || sortFlag == "equal" ? String(initDigit2)[index - (num_total_len - pointNum)] : 10 - Number(String(initDigit2)[index - (num_total_len - pointNum)]);
        let idx2 = sortFlag == "add" || sortFlag == "equal" ? String(initDigit1)[index] : 10 - Number(String(initDigit1)[index]);
        let num = index > num_total_len - pointNum - 1 ? -idx1 * 100 + "%" : index <= String(initDigit1).length - 1 ? -idx2 * 100 + "%" : 0;
        if (num == "-1000%") {
          num = 0;
        }
        return num;
      };
      const turnNumber = (index) => {
        let { num_total_len, pointNum, initDigit1, initDigit2 } = data;
        let idx1 = String(initDigit2)[index - (num_total_len - pointNum)];
        let num = index > num_total_len - pointNum - 1 ? idx1 ? idx1 : 0 : index <= String(initDigit1).length - 1 ? String(initDigit1)[index] : 0;
        return num;
      };
      const countChange = () => {
        let { endNum, initNum, speed, toFixed } = props;
        let countTimer = setInterval(() => {
          if (initNum > endNum) {
            if (data.current <= endNum || data.current <= speed) {
              data.current = Number(endNum.toFixed(toFixed));
              clearInterval(countTimer);
              emit("scrollEnd");
              data.valFlag = false;
            } else {
              data.current = Number((parseFloat(String(data.current)) - parseFloat(String(speed))).toFixed(toFixed));
            }
          } else {
            if (data.current >= endNum) {
              data.current = Number(endNum.toFixed(toFixed));
              clearInterval(countTimer);
              emit("scrollEnd");
              data.valFlag = false;
            } else {
              data.current = Number((parseFloat(String(data.current)) + parseFloat(String(speed))).toFixed(toFixed));
            }
          }
        }, props.during);
      };
      const countGo = (flag) => {
        let { initNum, endNum, toFixed, customBgImg: customBgImg2 } = props;
        if (customBgImg2) {
          initNum = props.customChangeNum;
        }
        let startNumber1, startNumber2, endNumber1, endNumber2;
        if (initNum != 0) {
          if (toFixed != 0) {
            initNum = Number(initNum.toFixed(toFixed));
          }
          if (String(initNum).indexOf(".") > -1) {
            startNumber1 = String(initNum).split(".")[0].length;
            startNumber2 = String(initNum).split(".")[1].length;
          } else {
            startNumber1 = String(initNum).length;
            startNumber2 = 0;
          }
        } else {
          startNumber1 = 1;
          startNumber2 = 0;
        }
        if (endNum != 0) {
          if (toFixed != 0) {
            endNum = Number(endNum.toFixed(toFixed));
          }
          if (String(endNum).indexOf(".") > -1) {
            endNumber1 = String(endNum).split(".")[0].length;
            endNumber2 = String(endNum).split(".")[1].length;
          } else {
            endNumber1 = String(endNum).length;
            endNumber2 = 0;
          }
        } else {
          endNumber1 = 1;
          endNumber2 = 0;
        }
        let len1 = startNumber1 >= endNumber1 ? startNumber1 : endNumber1;
        let len2 = startNumber2 >= endNumber2 ? startNumber2 : endNumber2;
        data.num_total_len = len1 + len2;
        data.pointNum = len2;
        if (initNum > endNum) {
          data.sortFlag = "reduce";
          data.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
          data.totalCount = calculation(initNum, endNum, "-");
          data.numberVal = Number(String(initNum));
        } else if (initNum < endNum) {
          data.sortFlag = "add";
          data.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
          data.totalCount = calculation(endNum, initNum, "-");
          data.numberVal = Number(String(endNum));
        } else {
          data.sortFlag = "equal";
        }
        var unit = 1;
        for (let i = 0; i < data.pointNum; i++) {
          unit *= 10;
        }
        var rel_big = data.numberVal * unit;
        data.relNum = rel_big;
        if (toFixed != 0) {
          data.pointNum = String(data.numberVal).split(".")[1] ? String(data.numberVal).split(".")[1].length : 0;
          data.num_total_len = String(rel_big).length;
        }
        if (String(initNum).indexOf(".") > -1) {
          let n = String(initNum).split(".");
          data.initDigit1 = Number(n[0]);
          data.initDigit2 = Number(n[1]);
        } else {
          data.initDigit1 = initNum;
          data.initDigit2 = 0;
        }
        if (scrolling && !customBgImg2) {
          vue.nextTick(() => {
            if (data.sortFlag == "equal") {
              return false;
            }
            let refsDom = document.getElementsByClassName("nut-countup__number-item");
            let element = refsDom[data.num_total_len - 1];
            runTurn(element);
          });
        } else {
          if (flag !== 0) {
            imgNumberScroll();
          }
        }
      };
      const runTurn = (el) => {
        clearIntervalTime();
        var m = 1;
        if (data.pointNum != 0) {
          m = 1 / Math.pow(10, data.pointNum);
        }
        data.timer = setInterval(() => {
          runStep(el);
          data.totalCount = calculation(data.totalCount, m, "-");
          if (data.totalCount <= 0) {
            clearIntervalTime();
            emit("scrollEnd");
            data.valFlag = false;
          }
        }, props.during);
      };
      const runStep = (el) => {
        let currentTurn = el.style.all;
        let turningNum;
        if (data.sortFlag == "add") {
          turningNum = parseInt(String(currentTurn)) + 1;
        } else {
          turningNum = parseInt(String(currentTurn)) - 1 >= 0 ? parseInt(String(currentTurn)) - 1 : 9;
        }
        el.style.all = String(turningNum);
        if (el.style.transition == "none" || turningNum == 1 || !el.style.transition) {
          el.style.transition = `all linear ${props.during}ms`;
        }
        if (turningNum == 10 || data.sortFlag == "reduce" && turningNum == 0) {
          var timeOut = null;
          el.style.top = `-${data.sortFlag == "add" ? turningNum * 100 : (10 - turningNum) * 100}%`;
          el.style.all = "0";
          timeOut = setTimeout(() => {
            timeOut && clearTimeout(timeOut);
            el.style.transition = "none";
            el.style.top = "0";
            if (turningNum == 10) {
              if (el.previousSibling) {
                runStep(el.previousSibling);
              }
            }
          }, 0.975 * props.during);
        } else {
          el.style.top = `-${data.sortFlag == "add" ? turningNum * 100 : (10 - turningNum) * 100}%`;
        }
        if (el.style.top == "-100%" && data.sortFlag == "reduce") {
          runStep(el.previousSibling);
        }
      };
      const imgNumberScroll = () => {
        vue.nextTick(() => {
          let f = document.getElementsByClassName("nut-countup__numberimg")[0];
          f.addEventListener("webkitTransitionEnd", () => {
            emit("scrollEnd");
            data.valFlag = false;
          });
        });
      };
      const generateRandom = () => {
        data.notPrize = [];
        while (data.notPrize.length < 3) {
          var rand = Math.floor(Math.random() * props.machinePrizeNum + 1);
          if (data.notPrize.indexOf(rand) == -1) {
            data.notPrize.push(rand);
          }
        }
      };
      const machineLuck = () => {
        const machineTrunMoreNum = props.machineTrunMore < 0 ? 0 : props.machineTrunMore;
        let distance = props.numHeight * props.machinePrizeNum;
        if (data.prizeLevelTrun < 0) {
          generateRandom();
        }
        for (let i = 0; i < props.machineNum; i++) {
          setTimeout(() => {
            let turn = distance * (i + 1 + parseFloat(String(machineTrunMoreNum)));
            if (data.prizeYPrev.length != 0) {
              data.prizeY[i] = data.prizeYPrev[i];
            }
            let local = data.prizeYPrev[i] ? data.prizeYPrev[i] : 0;
            let newLocation = turn + local + (props.machinePrizeNum - data.prizeLevelTrun + 1) * props.numHeight + (distance - local);
            if (data.prizeLevelTrun < 0) {
              newLocation += props.numHeight * data.notPrize[i];
            }
            scrollTime(
              i,
              // parseFloat((this.machinePrizeNum-(this.prizeLevelTrun-1))*this.numHeight + turn + local),
              newLocation,
              local
            );
          }, 500 * i);
        }
      };
      useExtend({ machineLuck });
      const scrollTime = (index, total, num) => {
        let t = setInterval(() => {
          if (num <= total) {
            num += 10;
            data.prizeY[index] = parseFloat(String(num));
          } else {
            clearInterval(t);
            t = null;
            data.finshMachine += 1;
            data.prizeY[index] = total;
            if (data.finshMachine == props.machineNum) {
              let distance = props.numHeight * props.machinePrizeNum;
              data.prizeYPrev = [];
              let prevAry = JSON.parse(JSON.stringify(data.prizeY));
              prevAry.forEach((item) => {
                let n = item;
                while (n > distance) {
                  n -= distance;
                }
                data.prizeYPrev.push(n);
              });
              setTimeout(() => {
                data.finshMachine = 0;
                if (data.prizeLevelTrun < 0) {
                  emit("scrollEnd", false);
                  data.valFlag = false;
                } else {
                  emit("scrollEnd", true);
                  data.valFlag = false;
                }
              }, 130);
            }
          }
        }, 30);
      };
      vue.onMounted(() => {
        data.current = props.initNum;
        vue.nextTick(() => {
          valChange();
        });
      });
      vue.onUnmounted(() => {
        clearIntervalTime();
        data.timer = null;
      });
      return __spreadProps(__spreadValues(__spreadValues({}, vue.toRefs(data)), vue.toRefs(vue.reactive(props))), {
        topNumber,
        turnNumber
      });
    }
  });
  const _hoisted_1$x = { class: "nut-countup" };
  const _hoisted_2$r = ["turn-number"];
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$x, [
      _ctx.customBgImg != "" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
        _ctx.type == "machine" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "nut-countup__machine",
          style: vue.normalizeStyle({ height: _ctx.numHeight + "px" })
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.machineNum, (val, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: "mImg" + index,
              class: "nut-countup__machine-item",
              style: vue.normalizeStyle({
                width: _ctx.numWidth + "px",
                height: _ctx.numHeight + "px",
                background: "url(" + _ctx.customBgImg + ") ",
                backgroundPosition: "0 " + _ctx.prizeY[index] + "px"
              })
            }, null, 4);
          }), 128))
        ], 4)) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "nut-countup__numberimg",
          style: vue.normalizeStyle({ height: _ctx.numHeight + "px" })
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.num_total_len, (val, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: "cImg" + index,
              class: "nut-countup__numberimg__item",
              style: vue.normalizeStyle({
                width: _ctx.numWidth + "px",
                height: _ctx.numHeight + "px",
                left: _ctx.numWidth * (index > _ctx.num_total_len - _ctx.pointNum - 1 ? index == _ctx.num_total_len - _ctx.pointNum ? index * 1.5 : index * 1.3 : index) + "px",
                backgroundImage: "url(" + _ctx.customBgImg + ")",
                backgroundPosition: "0 " + -(+String(_ctx.relNum)[index] * _ctx.numHeight + _ctx.customSpacNum * +String(_ctx.relNum)[index]) + "px",
                transition: "all linear " + _ctx.during / 10 + "ms"
              })
            }, null, 4);
          }), 128)),
          _cache[0] || (_cache[0] = vue.createTextVNode()),
          _ctx.pointNum > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "nut-countup-pointstyl",
            style: vue.normalizeStyle({
              width: _ctx.numWidth / 2 + "px",
              bottom: 0,
              left: _ctx.numWidth * (_ctx.num_total_len - _ctx.pointNum) * 1.1 + "px",
              fontSize: "30px"
            })
          }, "\n            .\n          ", 4)) : vue.createCommentVNode("", true)
        ], 4))
      ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
        _ctx.scrolling ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "nut-countup__number",
          style: vue.normalizeStyle({
            width: _ctx.numWidth * _ctx.num_total_len + _ctx.numWidth / 3 + "px",
            height: _ctx.numHeight + "px",
            lineHeight: _ctx.numHeight + "px"
          })
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.num_total_len, (val, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              ref_for: true,
              ref: "nut-countup__number-item",
              key: val,
              class: "nut-countup__number-item",
              style: vue.normalizeStyle({
                all: _ctx.turnNumber(index),
                top: _ctx.topNumber(index),
                left: _ctx.numWidth * (index > _ctx.num_total_len - _ctx.pointNum - 1 ? index * 1.1 : index) + "px"
              }),
              "turn-number": _ctx.turnNumber(index)
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.to0_10, (item, idx) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: "dote" + idx,
                  class: "nut-countup__number-item__span",
                  style: vue.normalizeStyle({
                    width: _ctx.numWidth + "px",
                    height: _ctx.numHeight + "px",
                    lineHeight: _ctx.numHeight + "px"
                  })
                }, vue.toDisplayString(item), 5);
              }), 128))
            ], 12, _hoisted_2$r);
          }), 128)),
          _cache[1] || (_cache[1] = vue.createTextVNode()),
          _ctx.pointNum > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "nut-countup-pointstyl",
            style: vue.normalizeStyle({
              width: _ctx.numWidth / 3 + "px",
              height: _ctx.numHeight + "px",
              lineHeight: _ctx.numHeight + "px",
              top: 0,
              left: _ctx.numWidth * (_ctx.num_total_len - _ctx.pointNum) + "px"
            })
          }, "\n          .\n        ", 4)) : vue.createCommentVNode("", true)
        ], 4)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createTextVNode(vue.toDisplayString(_ctx.current), 1)
        ], 64))
      ], 64))
    ]);
  }
  const Countup = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$r]]);
  const getTimeStamp = (timeStr) => {
    if (!timeStr) return Date.now();
    let t = timeStr;
    t = +t > 0 ? +t : t.toString().replace(/-/g, "/");
    return new Date(t).getTime();
  };
  const parseFormat = (time, format) => {
    let { h, m, s, ms } = time;
    const { d } = time;
    if (format.includes("DD")) {
      format = format.replace("DD", padZero(d));
    } else {
      h += Number(d) * 24;
    }
    if (format.includes("HH")) {
      format = format.replace("HH", padZero(h));
    } else {
      m += Number(h) * 60;
    }
    if (format.includes("mm")) {
      format = format.replace("mm", padZero(m));
    } else {
      s += Number(m) * 60;
    }
    if (format.includes("ss")) {
      format = format.replace("ss", padZero(s));
    } else {
      ms += Number(s) * 1e3;
    }
    if (format.includes("S")) {
      const msC = padZero(ms, 3).toString();
      if (format.includes("SSS")) {
        format = format.replace("SSS", msC);
      } else if (format.includes("SS")) {
        format = format.replace("SS", msC.slice(0, 2));
      } else if (format.includes("S")) {
        format = format.replace("S", msC.slice(0, 1));
      }
    }
    return format;
  };
  const formatRemainTime = (t, format, type) => {
    const ts = t;
    const rest = {
      d: 0,
      h: 0,
      m: 0,
      s: 0,
      ms: 0
    };
    const SECOND = 1e3;
    const MINUTE = 60 * SECOND;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    if (ts > 0) {
      rest.d = ts >= SECOND ? Math.floor(ts / DAY) : 0;
      rest.h = Math.floor(ts % DAY / HOUR);
      rest.m = Math.floor(ts % HOUR / MINUTE);
      rest.s = Math.floor(ts % MINUTE / SECOND);
      rest.ms = Math.floor(ts % SECOND);
    }
    return type == "custom" ? rest : parseFormat(__spreadValues({}, rest), format);
  };
  const _hoisted_1$w = { class: "nut-countdown" };
  const _hoisted_2$q = ["innerHTML"];
  const _sfc_main$z = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutCountdown"
  }), {
    __name: "countdown.taro",
    props: {
      modelValue: {},
      paused: { type: Boolean, default: false },
      startTime: { default: "" },
      endTime: { default: "" },
      millisecond: { type: Boolean, default: false },
      format: { default: "HH:mm:ss" },
      autoStart: { type: Boolean, default: true },
      time: { default: 0 }
    },
    emits: [
      "input",
      "update:modelValue",
      "end",
      "restart",
      "paused",
      // will be deprecated
      "onEnd",
      "onRestart",
      "onPaused"
    ],
    setup(__props, { expose: __expose, emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const restTime = vue.ref(0);
      const timer = vue.ref(null);
      const counting = vue.ref(!props.paused && props.autoStart);
      const handleEndTime = vue.ref(Date.now());
      const diffTime = vue.ref(0);
      const renderTime = vue.computed(() => {
        return formatRemainTime(restTime.value, props.format);
      });
      const initTime = () => {
        handleEndTime.value = Number(props.endTime);
        diffTime.value = Date.now() - getTimeStamp(props.startTime);
        if (!counting.value) counting.value = true;
        tick();
      };
      const tick = () => {
        if (window !== void 0) {
          timer.value = requestAnimationFrame(() => {
            if (counting.value) {
              const currentTime = Date.now() - diffTime.value;
              const remainTime = Math.max(handleEndTime.value - currentTime, 0);
              restTime.value = remainTime;
              if (!remainTime) {
                counting.value = false;
                pause();
                emit("end");
                emit("onEnd");
              }
              if (remainTime > 0) {
                tick();
              }
            }
          });
        }
      };
      const start = () => {
        if (!counting.value && !props.autoStart) {
          counting.value = true;
          handleEndTime.value = Date.now() + Number(restTime.value);
          tick();
          emit("restart", restTime.value);
          emit("onRestart", restTime.value);
        }
      };
      const pause = () => {
        cancelAnimationFrame(timer.value);
        counting.value = false;
        emit("paused", restTime.value);
        emit("onPaused", restTime.value);
      };
      const reset = () => {
        if (!props.autoStart) {
          pause();
          restTime.value = Number(props.time);
        }
      };
      __expose({
        start,
        pause,
        reset
      });
      vue.onBeforeMount(() => {
        if (props.autoStart) {
          initTime();
        } else {
          restTime.value = Number(props.time);
        }
      });
      vue.watch(
        () => restTime.value,
        (value) => {
          const tranTime = formatRemainTime(value, props.format, "custom");
          emit("update:modelValue", tranTime);
          emit("input", tranTime);
        }
      );
      vue.watch(
        () => props.paused,
        (v, ov) => {
          if (!ov) {
            if (counting.value) {
              pause();
            }
          } else {
            if (!counting.value) {
              counting.value = true;
              handleEndTime.value = Date.now() + Number(restTime.value);
              tick();
            }
            emit("restart", restTime.value);
            emit("onRestart", restTime.value);
          }
        }
      );
      vue.watch(
        () => props.endTime,
        () => {
          initTime();
        }
      );
      vue.watch(
        () => props.startTime,
        () => {
          initTime();
        }
      );
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$w, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("view", {
              class: "nut-countdown__content",
              innerHTML: renderTime.value
            }, null, 8, _hoisted_2$q)
          ])
        ]);
      };
    }
  }));
  withInstall(_sfc_main$z);
  const _sfc_main$y = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutTag"
  }), {
    __name: "tag.taro",
    props: {
      color: { default: "" },
      textColor: { default: "" },
      type: { default: "default" },
      plain: { type: Boolean, default: false },
      round: { type: Boolean, default: false },
      mark: { type: Boolean, default: false },
      closeable: { type: Boolean, default: false }
    },
    emits: ["close", "click"],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-tag";
        return {
          [prefixCls2]: true,
          [`${prefixCls2}--${props.type}`]: props.type,
          [`${prefixCls2}--plain`]: props.plain,
          [`${prefixCls2}--round`]: props.round,
          [`${prefixCls2}--mark`]: props.mark
        };
      });
      const style = vue.computed(() => {
        const style2 = {};
        if (props.textColor) {
          style2.color = props.textColor;
        } else if (props.color && props.plain) {
          style2.color = props.color;
        }
        if (props.plain) {
          style2.background = "#fff";
          style2.borderColor = props.color;
        } else if (props.color) {
          style2.background = props.color;
        }
        return style2;
      });
      const onClose = (event) => {
        emits("close", event);
      };
      const onClick = (event) => {
        emits("click", event);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(classes.value),
          style: vue.normalizeStyle(style.value),
          onClick
        }, [
          vue.renderSlot(_ctx.$slots, "default"),
          _cache[0] || (_cache[0] = vue.createTextVNode()),
          _ctx.closeable ? (vue.openBlock(), vue.createBlock(vue.unref(iconsVueTaro.Close), {
            key: 0,
            class: "nut-tag--close",
            size: "12px",
            onClick: vue.withModifiers(onClose, ["stop"])
          })) : vue.createCommentVNode("", true)
        ], 6);
      };
    }
  }));
  withInstall(_sfc_main$y);
  const { create: create$q } = createComponent("popover");
  const _sfc_main$x = create$q({
    components: {
      NutPopup: Popup
    },
    props: {
      visible: { type: Boolean, default: false },
      list: { type: Array, default: [] },
      theme: { type: String, default: "light" },
      location: { type: String, default: "bottom" },
      offset: { type: Array, default: [0, 12] },
      arrowOffset: { type: Number, default: 0 },
      customClass: { type: String, default: "" },
      showArrow: { type: Boolean, default: true },
      duration: { type: [Number, String], default: 0.3 },
      overlay: { type: Boolean, default: false },
      overlayClass: { type: String, default: "" },
      overlayStyle: { type: Object },
      closeOnClickOverlay: { type: Boolean, default: true },
      closeOnClickAction: { type: Boolean, default: true },
      closeOnClickOutside: { type: Boolean, default: true },
      targetId: { type: String, default: "" },
      bgColor: { type: String, default: "" }
    },
    emits: ["update", "update:visible", "close", "choose", "open"],
    setup(props, { emit }) {
      const popoverRef = vue.ref();
      const popoverContentRef = vue.ref();
      const showPopup = vue.ref(props.visible);
      const rootPosition = vue.ref();
      const elRect = vue.ref({
        width: 0,
        height: 0
      });
      const popoverArrow = vue.computed(() => {
        const prefixCls2 = "nut-popover-arrow";
        const loca = props.location;
        const direction = loca.split("-")[0];
        return `${prefixCls2} ${prefixCls2}-${direction} ${prefixCls2}--${loca}`;
      });
      const popoverArrowStyle = vue.computed(() => {
        const styles = {};
        const { bgColor, arrowOffset, location: location2 } = props;
        const direction = location2.split("-")[0];
        const skew = location2.split("-")[1];
        const base = 16;
        if (bgColor) {
          styles[`border${upperCaseFirst(direction)}Color`] = bgColor;
        }
        if (props.arrowOffset != 0) {
          if (["bottom", "top"].includes(direction)) {
            if (!skew) {
              styles.left = `calc(50% + ${arrowOffset}px)`;
            }
            if (skew == "start") {
              styles.left = `${base + arrowOffset}px`;
            }
            if (skew == "end") {
              styles.right = `${base - arrowOffset}px`;
            }
          }
          if (["left", "right"].includes(direction)) {
            if (!skew) {
              styles.top = `calc(50% - ${arrowOffset}px)`;
            }
            if (skew == "start") {
              styles.top = `${base - arrowOffset}px`;
            }
            if (skew == "end") {
              styles.bottom = `${base + arrowOffset}px`;
            }
          }
        }
        return styles;
      });
      const upperCaseFirst = (str) => {
        str = str.toLowerCase();
        str = str.replace(/\b\w+\b/g, (word) => word.substring(0, 1).toUpperCase() + word.substring(1));
        return str;
      };
      const getRootPosition = vue.computed(() => {
        const styles = {};
        if (!rootPosition.value) {
          styles.visibility = "hidden";
          return styles;
        }
        const contentWidth = elRect.value.width;
        const contentHeight = elRect.value.height;
        const { width, height, left: left2, top, right: right2 } = rootPosition.value;
        const { location: location2, offset } = props;
        const direction = location2 == null ? void 0 : location2.split("-")[0];
        const skew = location2 == null ? void 0 : location2.split("-")[1];
        let cross = 0;
        let parallel = 0;
        if (Array.isArray(offset) && (offset == null ? void 0 : offset.length) === 2) {
          cross += Number(offset[1]);
          parallel += Number(offset[0]);
        }
        if (width) {
          if (["bottom", "top"].includes(direction)) {
            const h = direction === "bottom" ? height + cross : -(contentHeight + cross);
            styles.top = `${top + h}px`;
            if (!skew) {
              styles.left = `${-(contentWidth - width) / 2 + left2 + parallel}px`;
            }
            if (skew === "start") {
              styles.left = `${left2 + parallel}px`;
            }
            if (skew === "end") {
              styles.left = `${right2 + parallel}px`;
            }
          }
          if (["left", "right"].includes(direction)) {
            const contentW = direction === "left" ? -(contentWidth + cross) : width + cross;
            styles.left = `${left2 + contentW}px`;
            if (!skew) {
              styles.top = `${top - contentHeight / 2 + height / 2 - 4 + parallel}px`;
            }
            if (skew === "start") {
              styles.top = `${top + parallel}px`;
            }
            if (skew === "end") {
              styles.top = `${top + height + parallel}px`;
            }
          }
        }
        if (elRect.value.width === 0) {
          styles.visibility = "hidden";
        } else {
          styles.visibility = "initial";
        }
        return styles;
      });
      const getPopoverContentW = () => __async(this, null, function* () {
        useTaroRect(popoverContentRef).then(
          (rect) => {
            elRect.value = {
              height: rect.height,
              width: rect.width
            };
          },
          () => {
          }
        );
      });
      const getContentWidth = () => {
        Taro.createSelectorQuery().selectViewport().scrollOffset((res) => {
          const distance = res.scrollTop;
          if (props.targetId) {
            useTaroRectById(props.targetId).then(
              (rect) => {
                rootPosition.value = {
                  width: rect == null ? void 0 : rect.width,
                  height: rect == null ? void 0 : rect.height,
                  left: rect == null ? void 0 : rect.left,
                  top: (rect == null ? void 0 : rect.top) + distance,
                  right: rect == null ? void 0 : rect.right
                };
              },
              () => {
              }
            );
          } else {
            useTaroRect(popoverRef).then(
              (rect) => {
                rootPosition.value = {
                  width: rect == null ? void 0 : rect.width,
                  height: rect == null ? void 0 : rect.height,
                  left: rect == null ? void 0 : rect.left,
                  top: (rect == null ? void 0 : rect.top) + distance,
                  right: rect == null ? void 0 : rect.right
                };
              },
              () => {
              }
            );
          }
        }).exec();
        setTimeout(() => {
          getPopoverContentW();
        }, 300);
      };
      vue.onMounted(() => {
        setTimeout(() => {
          getContentWidth();
        }, 300);
      });
      vue.watch(
        () => props.visible,
        (value) => {
          showPopup.value = value;
          if (value) {
            Taro.nextTick(() => {
              getContentWidth();
            });
          }
        }
      );
      vue.watch(
        () => props.location,
        () => {
          getContentWidth();
        }
      );
      const update = (val) => {
        emit("update", val);
        emit("update:visible", val);
      };
      const openPopover = () => {
        update(!props.visible);
        emit("open");
      };
      const closePopover = () => {
        emit("update:visible", false);
        emit("close");
      };
      const chooseItem = (item, index) => {
        !item.disabled && emit("choose", item, index);
        if (props.closeOnClickAction) {
          closePopover();
        }
      };
      const clickAway = () => {
        props.closeOnClickOutside && closePopover();
      };
      const refRandomId = Math.random().toString(36).slice(-8);
      return {
        showPopup,
        openPopover,
        popoverArrow,
        closePopover,
        chooseItem,
        popoverRef,
        popoverContentRef,
        getRootPosition,
        popoverArrowStyle,
        renderIcon,
        refRandomId,
        clickAway
      };
    }
  });
  const _hoisted_1$v = ["id"];
  const _hoisted_2$p = ["id"];
  const _hoisted_3$m = ["onClick"];
  const _hoisted_4$l = { class: "nut-popover-menu-item-name" };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      !_ctx.targetId ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        id: "popoverRef" + _ctx.refRandomId,
        ref: "popoverRef",
        class: "nut-popover-wrapper",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.openPopover && _ctx.openPopover(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "reference")
      ], 8, _hoisted_1$v)) : vue.createCommentVNode("", true),
      _cache[8] || (_cache[8] = vue.createTextVNode()),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["nut-popover", `nut-popover--${_ctx.theme}`, `${_ctx.customClass}`]),
        style: vue.normalizeStyle(_ctx.getRootPosition)
      }, [
        vue.createVNode(_component_nut_popup, {
          visible: _ctx.showPopup,
          "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => _ctx.showPopup = $event),
          "pop-class": `nut-popover-content nut-popover-content--${_ctx.location}`,
          style: vue.normalizeStyle({ background: _ctx.bgColor }),
          position: "",
          transition: "nut-popover",
          overlay: _ctx.overlay,
          duration: _ctx.duration,
          "overlay-style": _ctx.overlayStyle,
          "overlay-class": _ctx.overlayClass,
          "close-on-click-overlay": _ctx.closeOnClickOverlay
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              id: "popoverContentRef" + _ctx.refRandomId,
              ref: "popoverContentRef",
              class: "nut-popover-content-group"
            }, [
              _ctx.showArrow ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: vue.normalizeClass(_ctx.popoverArrow),
                style: vue.normalizeStyle(_ctx.popoverArrowStyle)
              }, null, 6)) : vue.createCommentVNode("", true),
              _cache[5] || (_cache[5] = vue.createTextVNode()),
              vue.renderSlot(_ctx.$slots, "content"),
              _cache[6] || (_cache[6] = vue.createTextVNode()),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.list, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: vue.normalizeClass([item.className, item.disabled && "nut-popover-menu-disabled", "nut-popover-menu-item"]),
                  onClick: vue.withModifiers(($event) => _ctx.chooseItem(item, index), ["stop"])
                }, [
                  item.icon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.renderIcon(item.icon)), {
                    key: 0,
                    class: "nut-popover-item-img"
                  })) : vue.createCommentVNode("", true),
                  _cache[4] || (_cache[4] = vue.createTextVNode()),
                  vue.createElementVNode("view", _hoisted_4$l, vue.toDisplayString(item.name), 1)
                ], 10, _hoisted_3$m);
              }), 128))
            ], 8, _hoisted_2$p)
          ]),
          _: 3
        }, 8, ["visible", "pop-class", "style", "overlay", "duration", "overlay-style", "overlay-class", "close-on-click-overlay"]),
        _cache[7] || (_cache[7] = vue.createTextVNode()),
        _ctx.showPopup ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "nut-popover-content-bg",
          onTouchmove: _cache[2] || (_cache[2] = (...args) => _ctx.clickAway && _ctx.clickAway(...args)),
          onClick: _cache[3] || (_cache[3] = (...args) => _ctx.clickAway && _ctx.clickAway(...args))
        }, null, 32)) : vue.createCommentVNode("", true)
      ], 6)
    ], 64);
  }
  const Popover = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$q]]);
  const _hoisted_1$u = { key: 0 };
  const _hoisted_2$o = {
    key: 1,
    class: "nut-skeleton"
  };
  const _hoisted_3$l = {
    key: 0,
    class: "nut-skeleton-animation"
  };
  const _hoisted_4$k = { class: "nut-skeleton-content" };
  const _sfc_main$w = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutSkeleton"
  }), {
    __name: "skeleton.taro",
    props: {
      width: { default: "100px" },
      height: { default: "15px" },
      animated: { type: Boolean, default: false },
      avatar: { type: Boolean, default: false },
      avatarShape: { default: "round" },
      avatarSize: { default: "50px" },
      loading: { type: Boolean, default: true },
      round: { type: Boolean, default: false },
      row: { default: "1" },
      title: { type: Boolean, default: true }
    },
    setup(__props) {
      const props = __props;
      const avatarClass = vue.computed(() => {
        const prefixCls2 = "avatarClass";
        return {
          [prefixCls2]: true,
          [`${prefixCls2}--${props.avatarShape}`]: props.avatarShape
        };
      });
      const getBlockClass = (prefixCls2) => {
        return {
          [prefixCls2]: true,
          [`${prefixCls2}--round`]: props.round
        };
      };
      const avatarStyle = vue.computed(() => {
        return {
          width: props.avatarSize,
          height: props.avatarSize
        };
      });
      return (_ctx, _cache) => {
        return !_ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$u, [
          vue.renderSlot(_ctx.$slots, "default")
        ])) : (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$o, [
          _ctx.animated ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$l)) : vue.createCommentVNode("", true),
          _cache[2] || (_cache[2] = vue.createTextVNode()),
          vue.createElementVNode("view", _hoisted_4$k, [
            _ctx.avatar ? (vue.openBlock(), vue.createBlock(Avatar, {
              key: 0,
              class: vue.normalizeClass(avatarClass.value),
              shape: _ctx.avatarShape,
              style: vue.normalizeStyle(avatarStyle.value)
            }, null, 8, ["class", "shape", "style"])) : vue.createCommentVNode("", true),
            _cache[1] || (_cache[1] = vue.createTextVNode()),
            vue.createElementVNode("view", {
              class: "nut-skeleton-content__line",
              style: vue.normalizeStyle({ width: _ctx.width })
            }, [
              _ctx.title ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: vue.normalizeClass(getBlockClass("nut-skeleton-blockTitle")),
                style: vue.normalizeStyle({ height: _ctx.height })
              }, null, 6)) : vue.createCommentVNode("", true),
              _cache[0] || (_cache[0] = vue.createTextVNode()),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(Number(_ctx.row), (_) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: _,
                  class: vue.normalizeClass(getBlockClass("nut-skeleton-blockLine")),
                  style: vue.normalizeStyle({ height: _ctx.height })
                }, null, 6);
              }), 128))
            ], 4)
          ])
        ]));
      };
    }
  }));
  withInstall(_sfc_main$w);
  const COLLAPSE_KEY = Symbol("nut-collapse");
  const _hoisted_1$t = { class: "nut-collapse" };
  const _sfc_main$v = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutCollapse"
  }), {
    __name: "collapse.taro",
    props: {
      modelValue: { default: "" },
      accordion: { type: Boolean, default: false }
    },
    emits: ["update:modelValue", "change"],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const innerValue = vue.ref(props.modelValue || (props.accordion ? "" : []));
      vue.watch(
        () => props.modelValue,
        (val) => {
          innerValue.value = val;
        }
      );
      const changeVal = (val, name, status = true) => {
        innerValue.value = val;
        emit("update:modelValue", val);
        emit("change", val, name, status);
      };
      const updateVal = (name) => {
        if (props.accordion) {
          if (innerValue.value === name) {
            changeVal("", name, false);
          } else {
            changeVal(name, name, true);
          }
        } else {
          if (Array.isArray(innerValue.value)) {
            if (innerValue.value.includes(name)) {
              const newValue = innerValue.value.filter((v) => v !== name);
              changeVal(newValue, name, false);
            } else {
              const newValue = innerValue.value.concat([name]);
              changeVal(newValue, name, true);
            }
          } else {
            console.warn("[NutUI] <Collapse> 未开启手风琴模式时 v-model 应为数组");
          }
        }
      };
      const isExpanded = (name) => {
        if (props.accordion) {
          return innerValue.value === name;
        } else if (Array.isArray(innerValue.value)) {
          return innerValue.value.includes(name);
        }
        return false;
      };
      vue.provide(COLLAPSE_KEY, {
        updateVal,
        isExpanded
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$t, [
          vue.renderSlot(_ctx.$slots, "default")
        ]);
      };
    }
  }));
  withInstall(_sfc_main$v);
  const _hoisted_1$s = { class: "nut-collapse-item__title-main" };
  const _hoisted_2$n = { class: "nut-collapse-item__title-main-value" };
  const _hoisted_3$k = ["innerHTML"];
  const _hoisted_4$j = {
    key: 2,
    class: "nut-collapse-item__title-label"
  };
  const _hoisted_5$b = {
    key: 0,
    class: "nut-collapse-item__title-sub"
  };
  const _hoisted_6$9 = ["innerHTML"];
  const _hoisted_7$8 = {
    key: 0,
    class: "nut-collapse__item-extraWrapper"
  };
  const _hoisted_8$5 = { class: "nut-collapse__item-extraWrapper__extraRender" };
  const _hoisted_9$5 = ["id"];
  const _sfc_main$u = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutCollapseItem"
  }), {
    __name: "collapse-item.taro",
    props: {
      title: { default: "" },
      value: { default: "" },
      label: { default: "" },
      disabled: { type: Boolean, default: false },
      name: { default: -1 },
      border: { type: Boolean, default: true },
      icon: { default: () => iconsVueTaro.DownArrow },
      rotate: { default: 180 }
    },
    setup(__props) {
      const props = __props;
      const slots = vue.useSlots();
      const wrapperRef = vue.ref(null);
      const refRandomId = Math.random().toString(36).slice(-8);
      const target = `#nut-collapse__item-${refRandomId}`;
      const currentHeight = vue.ref("auto");
      const inAnimation = vue.ref(false);
      const timeoutId = vue.ref("");
      const parent = vue.inject(COLLAPSE_KEY);
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-collapse-item";
        return {
          [prefixCls2]: true,
          [prefixCls2 + "__border"]: props.border
        };
      });
      vue.onMounted(() => {
        setTimeout(() => {
          getRect(target).then((res) => {
            if (res == null ? void 0 : res.height) {
              currentHeight.value = `${res.height}px`;
            }
          });
        }, 100);
      });
      vue.watch(
        () => {
          var _a;
          return (_a = slots.default) == null ? void 0 : _a.call(slots);
        },
        () => {
          setTimeout(() => {
            getRect(target).then((res) => {
              if (res == null ? void 0 : res.height) {
                currentHeight.value = `${res.height}px`;
              }
            });
          }, 200);
        }
      );
      const getRect = (selector) => {
        return new Promise((resolve) => {
          Taro.createSelectorQuery().select(selector).boundingClientRect().exec((rect = []) => {
            resolve(rect[0]);
          });
        });
      };
      const expanded = vue.computed(() => {
        if (parent) {
          return parent.isExpanded(props.name);
        }
        return false;
      });
      const wrapperHeight = vue.ref(expanded.value ? "auto" : "0px");
      const handleClick = () => {
        if (!inAnimation.value) {
          parent && parent.updateVal(props.name);
        }
      };
      const toggle = (open) => {
        if (timeoutId.value) {
          clearTimeout(timeoutId.value);
          timeoutId.value = "";
        }
        const start = open ? "0px" : currentHeight.value;
        const end = open ? currentHeight.value : "0px";
        inAnimation.value = true;
        wrapperHeight.value = start;
        setTimeout(() => {
          wrapperHeight.value = end;
          inAnimation.value = false;
          if (open) {
            timeoutId.value = setTimeout(() => {
              wrapperHeight.value = "auto";
            }, 300);
          }
        }, 100);
      };
      vue.watch(expanded, toggle);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(classes.value)
        }, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": _ctx.disabled }]),
            onClick: handleClick
          }, [
            vue.createElementVNode("view", _hoisted_1$s, [
              vue.createElementVNode("view", _hoisted_2$n, [
                _ctx.$slots.title ? vue.renderSlot(_ctx.$slots, "title", { key: 0 }) : (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "nut-collapse-item__title-mtitle",
                  innerHTML: _ctx.title
                }, null, 8, _hoisted_3$k)),
                _cache[0] || (_cache[0] = vue.createTextVNode()),
                _ctx.label ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$j, vue.toDisplayString(_ctx.label), 1)) : vue.createCommentVNode("", true)
              ])
            ]),
            _cache[1] || (_cache[1] = vue.createTextVNode()),
            _ctx.$slots.value ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$b, [
              vue.renderSlot(_ctx.$slots, "value")
            ])) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "nut-collapse-item__title-sub",
              innerHTML: _ctx.value
            }, null, 8, _hoisted_6$9)),
            _cache[2] || (_cache[2] = vue.createTextVNode()),
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": expanded.value }]),
              style: vue.normalizeStyle({ transform: "rotate(" + (expanded.value ? _ctx.rotate : 0) + "deg)" })
            }, [
              _ctx.$slots.icon ? vue.renderSlot(_ctx.$slots, "icon", { key: 0 }) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(renderIcon)(_ctx.icon)), { key: 1 }))
            ], 6)
          ], 2),
          _cache[3] || (_cache[3] = vue.createTextVNode()),
          _ctx.$slots.extra ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_7$8, [
            vue.createElementVNode("div", _hoisted_8$5, [
              vue.renderSlot(_ctx.$slots, "extra")
            ])
          ])) : vue.createCommentVNode("", true),
          _cache[4] || (_cache[4] = vue.createTextVNode()),
          vue.createElementVNode("view", {
            ref_key: "wrapperRef",
            ref: wrapperRef,
            class: "nut-collapse__item-wrapper",
            style: vue.normalizeStyle({
              willChange: "height",
              height: wrapperHeight.value
            })
          }, [
            vue.createElementVNode("view", {
              id: `nut-collapse__item-${vue.unref(refRandomId)}`,
              class: "nut-collapse__item-wrapper__content"
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 8, _hoisted_9$5)
          ], 4)
        ], 2);
      };
    }
  }));
  withInstall(_sfc_main$u);
  const RenderColumn = vue.defineComponent({
    props: {
      slots: {
        type: Array,
        default: () => []
      },
      record: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props) {
      return () => vue.h(`view`, {}, props.slots[0] ? props.slots[0](props.record) : props.slots[1](props.record));
    }
  });
  const { create: create$p } = createComponent("table");
  const cN$a = "NutTable";
  const _sfc_main$t = create$p({
    components: {
      RenderColumn,
      DownArrow: iconsVueTaro.DownArrow
    },
    props: {
      bordered: {
        type: Boolean,
        default: true
      },
      columns: {
        type: Array,
        default: () => []
      },
      data: {
        type: Object,
        default: () => ({})
      },
      summary: {
        type: Function,
        default: null
      },
      striped: {
        type: Boolean,
        default: false
      }
    },
    emits: ["sorter"],
    setup(props, { emit }) {
      const translate = useLocale(cN$a);
      const state = vue.reactive({
        curData: props.data
      });
      const cellClasses = (item) => {
        return {
          "nut-table__main__head__tr--border": props.bordered,
          [`nut-table__main__head__tr--align${item.align ? item.align : ""}`]: true
        };
      };
      const stylehead = (item) => {
        return item.stylehead ? item.stylehead : "";
      };
      const stylecolumn = (item) => {
        return item.stylecolumn ? item.stylecolumn : "";
      };
      const getColumnItem = (value) => {
        return props.columns.filter((item) => item.key === value)[0];
      };
      const getColumnItemStyle = (value) => {
        const style = props.columns.filter((item) => item.key === value);
        return style[0].stylecolumn ? style[0].stylecolumn : "";
      };
      const handleSorterClick = (item) => {
        if (item.sorter) {
          emit("sorter", item);
          state.curData = typeof item.sorter === "function" ? state.curData.sort(item.sorter) : item.sorter === "default" ? state.curData.sort() : state.curData;
        }
      };
      const sortDataItem = () => {
        return props.columns.map((columns) => {
          return [columns.key, columns.render];
        });
      };
      vue.watch(
        () => props.data,
        (val) => {
          state.curData = val.slice();
        }
      );
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        cellClasses,
        getColumnItem,
        getColumnItemStyle,
        handleSorterClick,
        sortDataItem,
        translate,
        stylehead,
        stylecolumn
      });
    }
  });
  const _hoisted_1$r = { class: "nut-table" };
  const _hoisted_2$m = { class: "nut-table__main__head" };
  const _hoisted_3$j = { class: "nut-table__main__head__tr" };
  const _hoisted_4$i = ["onClick"];
  const _hoisted_5$a = { class: "nut-table__main__body" };
  const _hoisted_6$8 = { key: 1 };
  const _hoisted_7$7 = {
    key: 0,
    class: "nut-table__nodata"
  };
  const _hoisted_8$4 = {
    key: 0,
    class: "nut-table__nodata__text"
  };
  const _hoisted_9$4 = {
    key: 1,
    class: "nut-table__summary"
  };
  const _hoisted_10$2 = ["innerHTML"];
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_DownArrow = vue.resolveComponent("DownArrow");
    const _component_RenderColumn = vue.resolveComponent("RenderColumn");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$r, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["nut-table__main", { "nut-table__main--striped": _ctx.striped }])
      }, [
        vue.createElementVNode("view", _hoisted_2$m, [
          vue.createElementVNode("view", _hoisted_3$j, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.columns, (item) => {
              return vue.openBlock(), vue.createElementBlock("span", {
                key: item.key,
                class: vue.normalizeClass(["nut-table__main__head__tr__th", _ctx.cellClasses(item)]),
                style: vue.normalizeStyle(item.stylehead),
                onClick: ($event) => _ctx.handleSorterClick(item)
              }, [
                vue.createTextVNode(vue.toDisplayString(item.title) + " ", 1),
                vue.renderSlot(_ctx.$slots, "icon"),
                _cache[0] || (_cache[0] = vue.createTextVNode()),
                !_ctx.$slots.icon && item.sorter ? (vue.openBlock(), vue.createBlock(_component_DownArrow, {
                  key: 0,
                  size: "12px"
                })) : vue.createCommentVNode("", true)
              ], 14, _hoisted_4$i);
            }), 128))
          ])
        ]),
        _cache[1] || (_cache[1] = vue.createTextVNode()),
        vue.createElementVNode("view", _hoisted_5$a, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.curData, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: item,
              class: "nut-table__main__body__tr"
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.sortDataItem(), ([value, render]) => {
                return vue.openBlock(), vue.createElementBlock("span", {
                  key: value,
                  class: vue.normalizeClass(["nut-table__main__body__tr__td", _ctx.cellClasses(_ctx.getColumnItem(value))]),
                  style: vue.normalizeStyle(_ctx.getColumnItemStyle(value))
                }, [
                  typeof item[value] === "function" || typeof render === "function" ? (vue.openBlock(), vue.createBlock(_component_RenderColumn, {
                    key: 0,
                    slots: [render, item[value]],
                    record: item
                  }, null, 8, ["slots", "record"])) : (vue.openBlock(), vue.createElementBlock("view", _hoisted_6$8, vue.toDisplayString(item[value]), 1))
                ], 6);
              }), 128))
            ]);
          }), 128))
        ])
      ], 2),
      _cache[3] || (_cache[3] = vue.createTextVNode()),
      !_ctx.curData.length ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_7$7, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["nut-table__nodata", { "nut-table__nodata--border": _ctx.bordered }])
        }, [
          vue.renderSlot(_ctx.$slots, "nodata"),
          _cache[2] || (_cache[2] = vue.createTextVNode()),
          !_ctx.$slots.nodata ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8$4, vue.toDisplayString(_ctx.translate("noData")), 1)) : vue.createCommentVNode("", true)
        ], 2)
      ])) : vue.createCommentVNode("", true),
      _cache[4] || (_cache[4] = vue.createTextVNode()),
      _ctx.summary ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_9$4, [
        vue.createElementVNode("span", {
          class: "nut-table__summary__text",
          innerHTML: _ctx.summary().value
        }, null, 8, _hoisted_10$2)
      ])) : vue.createCommentVNode("", true)
    ]);
  }
  const Table = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$p]]);
  const _hoisted_1$q = { class: "nut-animate" };
  const _sfc_main$s = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutAnimate"
  }), {
    __name: "animate.taro",
    props: {
      type: {},
      show: { type: Boolean, default: false },
      action: { default: "" },
      loop: { type: Boolean, default: false },
      duration: { default: 500 }
    },
    emits: ["click", "animate"],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const animated = vue.ref(props.action === "initial" || props.show === true || props.loop);
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-animate";
        return {
          "nut-animate__container": true,
          [`${prefixCls2}-${props.type}`]: animated.value,
          loop: props.loop
        };
      });
      const animate = () => {
        animated.value = false;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            animated.value = true;
          });
        });
      };
      const handleClick = (event) => {
        if (props.action === "click") {
          animate();
          emit("click", event);
          emit("animate");
        }
      };
      vue.watch(
        () => props.show,
        (val) => {
          if (val) {
            animate();
            emit("animate");
          }
        }
      );
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$q, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(classes.value),
            style: vue.normalizeStyle({
              animationDuration: _ctx.duration ? `${_ctx.duration}ms` : void 0
            }),
            onClick: handleClick
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 6)
        ]);
      };
    }
  }));
  withInstall(_sfc_main$s);
  const { create: create$o } = createComponent("ellipsis");
  const _sfc_main$r = create$o({
    props: {
      content: {
        type: String,
        default: ""
      },
      direction: {
        type: String,
        default: "end"
      },
      rows: {
        type: [Number, String],
        default: 1
      },
      expandText: {
        type: String,
        default: ""
      },
      collapseText: {
        type: String,
        default: ""
      },
      symbol: {
        type: String,
        default: "..."
      },
      lineHeight: {
        type: [Number, String],
        default: "20"
      }
    },
    emits: ["click", "change"],
    setup(props, { emit }) {
      const rootContain = vue.ref(null);
      const symbolContain = vue.ref(null);
      let contantCopy = vue.ref(props.content);
      let maxHeight = 0;
      let lineHeight = 0;
      let originHeight = 0;
      const ellipsis = vue.reactive({});
      const refRandomId = Math.random().toString(36).slice(-8);
      const rootId = vue.ref("root" + refRandomId);
      let widthRef = vue.ref("auto");
      const state = vue.reactive({
        exceeded: false,
        // 是否超出
        expanded: false
        // 是否折叠
      });
      let widthBase = [14, 10, 7, 8.4, 10];
      let symbolTextWidth = widthBase[0] * 0.7921;
      const chineseReg = /^[\u4e00-\u9fa5]+$/;
      const digitReg = /^[0-9]+$/;
      const letterUpperReg = /^[A-Z]+$/;
      const letterLowerReg = /^[a-z]+$/;
      const symbolText = vue.computed(() => {
        if (props.direction == "end" || props.direction == "middle") {
          return `${props.symbol}${props.expandText}`;
        }
        return `${props.symbol}${props.expandText}${props.symbol}`;
      });
      vue.onMounted(() => {
        setTimeout(() => {
          getSymbolInfo();
          getReference();
        }, 100);
      });
      const getSymbolInfo = () => {
        useTaroRect(symbolContain).then(
          (refe) => {
            symbolTextWidth = refe.width ? Math.ceil(refe.width) : Math.ceil(widthBase[0] * 0.7921);
          },
          () => {
          }
        );
      };
      const getReference = () => __async(this, null, function* () {
        const query = Taro.createSelectorQuery();
        query.select(`#${rootId.value}`) && query.select(`#${rootId.value}`).fields(
          {
            computedStyle: ["width", "height", "lineHeight", "paddingTop", "paddingBottom", "fontSize"]
          },
          (res) => {
            lineHeight = pxToNumber(res.lineHeight === "normal" ? props.lineHeight : res.lineHeight);
            maxHeight = Math.floor(
              lineHeight * (Number(props.rows) + 0.5) + pxToNumber(res.paddingTop) + pxToNumber(res.paddingBottom)
            );
            originHeight = pxToNumber(res.height);
            widthRef.value = res.width;
            const bsize = pxToNumber(res.fontSize);
            widthBase = [bsize, bsize * 0.72, bsize * 0.53, bsize * 0.4, bsize * 0.75];
            calcEllipse();
          }
        ).exec();
      });
      const calcEllipse = () => {
        useTaroRect(rootContain).then(
          (refe) => {
            if (refe.height <= maxHeight) {
              state.exceeded = false;
            } else {
              const rowNum = Math.floor(props.content.length / (originHeight / lineHeight - 1));
              if (props.direction === "middle") {
                const end = props.content.length;
                ellipsis.leading = tailorContent(0, rowNum * (Number(props.rows) + 0.5), "end");
                ellipsis.tailing = tailorContent(props.content.length - rowNum * (Number(props.rows) + 0.5), end, "start");
              } else if (props.direction === "end") {
                const end = rowNum * (Number(props.rows) + 0.5);
                ellipsis.leading = tailorContent(0, end);
              } else {
                const start = props.content.length - rowNum * (Number(props.rows) + 0.5) - 5;
                ellipsis.tailing = tailorContent(start, props.content.length);
              }
              assignContent();
              setTimeout(() => {
                verifyEllipsis();
              }, 100);
            }
          },
          () => {
          }
        );
      };
      const verifyEllipsis = () => __async(this, null, function* () {
        useTaroRect(rootContain).then(
          (refe) => {
            var _a, _b;
            if (refe && refe.height && refe.height > maxHeight) {
              if (props.direction == "end") {
                ellipsis.leading = (_a = ellipsis.leading) == null ? void 0 : _a.slice(0, ellipsis.leading.length - 1);
              } else {
                ellipsis.tailing = (_b = ellipsis.tailing) == null ? void 0 : _b.slice(1, ellipsis.tailing.length);
              }
              assignContent();
              setTimeout(() => {
                verifyEllipsis();
              }, 100);
            }
          },
          () => {
          }
        );
      });
      const assignContent = () => {
        contantCopy.value = `${ellipsis.leading || ""}${ellipsis.leading ? props.symbol : ""}${props.expandText || ""}${ellipsis.tailing ? props.symbol : ""}${ellipsis.tailing || ""}`;
      };
      const tailorContent = (left2, right2, type = "") => {
        const threeDotWidth = symbolTextWidth;
        const direc = props.direction === "middle" && type ? type : props.direction;
        state.exceeded = true;
        let widthPart = -1;
        let start = left2;
        let end = right2;
        let cutoff = 0;
        let marking = 0;
        if (direc === "end") {
          marking = start;
          cutoff = end;
        } else {
          marking = end;
          cutoff = start;
        }
        let contentWidth = pxToNumber(widthRef.value) * Number(props.rows) - threeDotWidth;
        let contentPartWidth = props.direction === "middle" ? contentWidth / 2 : contentWidth;
        while (widthPart < contentPartWidth) {
          const zi = props.content[marking];
          if (chineseReg.test(zi)) {
            widthPart = Number(widthPart + widthBase[0]);
          } else if (letterUpperReg.test(zi)) {
            widthPart = Number(widthPart + widthBase[1]);
          } else if (letterLowerReg.test(zi)) {
            widthPart = Number(widthPart + widthBase[2]);
          } else if (digitReg.test(zi)) {
            widthPart = Number(widthPart + widthBase[3]);
          } else {
            widthPart = Number(widthPart + widthBase[4]);
          }
          cutoff = marking;
          direc === "end" ? marking++ : marking--;
        }
        if (direc === "end") {
          return props.content.slice(0, cutoff);
        } else {
          return props.content.slice(cutoff, end);
        }
      };
      const pxToNumber = (value) => {
        if (!value) return 0;
        const match = value.match(/^\d*(\.\d*)?/);
        return match ? Number(match[0]) : 0;
      };
      const clickHandle = (type) => {
        if (type == 1) {
          state.expanded = true;
          emit("change", "expand");
        } else {
          state.expanded = false;
          emit("change", "collapse");
        }
      };
      const handleClick = () => {
        emit("click");
      };
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        rootId,
        rootContain,
        symbolContain,
        ellipsis,
        contantCopy,
        symbolText,
        clickHandle,
        handleClick,
        refRandomId,
        widthRef
      });
    }
  });
  const _hoisted_1$p = ["id"];
  const _hoisted_2$l = {
    key: 0,
    class: "nut-ellipsis__wordbreak"
  };
  const _hoisted_3$i = {
    key: 1,
    class: "nut-ellipsis__wordbreak"
  };
  const _hoisted_4$h = { key: 2 };
  const _hoisted_5$9 = ["id"];
  const _hoisted_6$7 = ["id"];
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        id: _ctx.rootId,
        class: "nut-ellipsis ell",
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        !_ctx.exceeded ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$l, vue.toDisplayString(_ctx.content), 1)) : vue.createCommentVNode("", true),
        _cache[3] || (_cache[3] = vue.createTextVNode()),
        _ctx.exceeded && !_ctx.expanded ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$i, [
          vue.createTextVNode(vue.toDisplayString(_ctx.ellipsis.leading) + vue.toDisplayString(_ctx.ellipsis.leading && _ctx.symbol), 1),
          _ctx.expandText ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "nut-ellipsis__text",
            onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => _ctx.clickHandle(1), ["stop"]))
          }, vue.toDisplayString(_ctx.expandText), 1)) : vue.createCommentVNode("", true),
          vue.createTextVNode(vue.toDisplayString(_ctx.ellipsis.tailing && _ctx.symbol) + vue.toDisplayString(_ctx.ellipsis.tailing), 1)
        ])) : vue.createCommentVNode("", true),
        _cache[4] || (_cache[4] = vue.createTextVNode()),
        _ctx.exceeded && _ctx.expanded ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$h, [
          vue.createTextVNode(vue.toDisplayString(_ctx.content) + " ", 1),
          _ctx.expandText ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: "nut-ellipsis__text",
            onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => _ctx.clickHandle(2), ["stop"]))
          }, vue.toDisplayString(_ctx.collapseText), 1)) : vue.createCommentVNode("", true)
        ])) : vue.createCommentVNode("", true)
      ], 8, _hoisted_1$p),
      _cache[5] || (_cache[5] = vue.createTextVNode()),
      vue.createElementVNode("view", {
        id: "rootContain" + _ctx.refRandomId,
        ref: "rootContain",
        class: "nut-ellipsis__copy",
        style: vue.normalizeStyle({ width: _ctx.widthRef })
      }, [
        vue.createElementVNode("view", null, vue.toDisplayString(_ctx.contantCopy), 1)
      ], 12, _hoisted_5$9),
      _cache[6] || (_cache[6] = vue.createTextVNode()),
      vue.createElementVNode("view", {
        id: "symbolContain" + _ctx.refRandomId,
        ref: "symbolContain",
        class: "nut-ellipsis__copy",
        style: { "display": "inline" }
      }, vue.toDisplayString(_ctx.symbolText), 9, _hoisted_6$7)
    ]);
  }
  const Ellipsis = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$o]]);
  const _sfc_main$q = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutWatermark"
  }), {
    __name: "watermark.taro",
    props: {
      gapX: { default: 24 },
      gapY: { default: 48 },
      zIndex: { default: 2e3 },
      width: { default: 120 },
      height: { default: 64 },
      rotate: { default: -22 },
      image: {},
      imageWidth: { default: 120 },
      imageHeight: { default: 64 },
      content: { default: "" },
      fontColor: { default: "rgba(0,0,0,.15)" },
      fontStyle: { default: "normal" },
      fontFamily: { default: "PingFang SC" },
      fontWeight: { default: "normal" },
      fontSize: { default: 14 },
      fullPage: { type: Boolean, default: true }
    },
    setup(__props) {
      const props = __props;
      const base64Url = vue.ref("");
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-watermark";
        return {
          [prefixCls2]: true,
          [`${prefixCls2}-full-page`]: props.fullPage
        };
      });
      const init = () => __async(this, null, function* () {
        let ratio = 1;
        Taro.getSystemInfo({
          success(res) {
            ratio = res.pixelRatio;
          }
        });
        const canvasWidth = `${(props.gapX + props.width) * ratio}`;
        const canvasHeight = `${(props.gapY + props.height) * ratio}`;
        const markWidth = props.width * ratio;
        const markHeight = props.height * ratio;
        const canvas = Taro.createOffscreenCanvas({
          type: "2d",
          width: Number(canvasWidth),
          height: Number(canvasHeight)
        });
        const ctx = canvas.getContext("2d");
        if (ctx) {
          if (props.image) {
            const img = canvas.createImage();
            dealWithImage(ctx, img, ratio, ctx.canvas, markWidth, markHeight);
          } else if (props.content) {
            dealWithText(ctx, ratio, ctx.canvas, markWidth, markHeight);
          }
        } else {
          throw new Error("当前环境不支持Canvas");
        }
      });
      const initH5 = () => {
        const canvas = document.createElement("canvas");
        const ratio = window.devicePixelRatio;
        const ctx = canvas.getContext("2d");
        const canvasWidth = `${(props.gapX + props.width) * ratio}px`;
        const canvasHeight = `${(props.gapY + props.height) * ratio}px`;
        const markWidth = props.width * ratio;
        const markHeight = props.height * ratio;
        canvas.setAttribute("width", canvasWidth);
        canvas.setAttribute("height", canvasHeight);
        console.log(markWidth, markHeight, canvasWidth, canvasHeight, ratio);
        if (ctx) {
          if (props.image) {
            const img = new Image();
            dealWithImage(ctx, img, ratio, canvas, markWidth, markHeight);
          } else if (props.content) {
            dealWithText(ctx, ratio, canvas, markWidth, markHeight);
          }
        } else {
          throw new Error("当前环境不支持Canvas");
        }
      };
      const dealWithImage = (ctx, img, ratio, canvas, markWidth, markHeight) => {
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate(Math.PI / 180 * Number(props.rotate));
        img.crossOrigin = "anonymous";
        img.referrerPolicy = "no-referrer";
        img.src = props.image || "";
        img.onload = () => {
          ctx.drawImage(
            img,
            -props.imageWidth * ratio / 2,
            -props.imageHeight * ratio / 2,
            props.imageWidth * ratio,
            props.imageHeight * ratio
          );
          ctx.restore();
          base64Url.value = canvas.toDataURL();
        };
      };
      const dealWithText = (ctx, ratio, canvas, markWidth, markHeight) => {
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate(Math.PI / 180 * Number(props.rotate));
        const markSize = Number(props.fontSize) * ratio;
        ctx.font = `${props.fontStyle} normal ${props.fontWeight} ${markSize}px/${markHeight}px ${props.fontFamily}`;
        ctx.fillStyle = props.fontColor;
        if (Array.isArray(props.content)) {
          props.content.map((item, index) => {
            ctx.fillText(item, 0, (index - 1) * markSize);
          });
        } else {
          ctx.fillText(props.content, 0, 0);
        }
        ctx.restore();
        base64Url.value = canvas.toDataURL();
      };
      vue.watchEffect(() => {
        if (Taro.getEnv() === "WEB") {
          initH5();
        } else {
          init();
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(classes.value),
          style: vue.normalizeStyle({
            zIndex: _ctx.zIndex,
            backgroundSize: `${_ctx.gapX + _ctx.width}px`,
            backgroundImage: `url('${base64Url.value}')`
          })
        }, null, 6);
      };
    }
  }));
  withInstall(_sfc_main$q);
  const _hoisted_1$o = { class: "nut-trend-arrow" };
  const _sfc_main$p = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutTrendArrow"
  }), {
    __name: "trend-arrow.taro",
    props: {
      rate: { default: 0 },
      digits: { default: 2 },
      showSign: { type: Boolean, default: false },
      showZero: { type: Boolean, default: false },
      arrowLeft: { type: Boolean, default: false },
      syncTextColor: { type: Boolean, default: true },
      textColor: { default: "#333" },
      riseColor: { default: "#fa2c19" },
      dropColor: { default: "#64b578" }
    },
    setup(__props) {
      const props = __props;
      const isPositive = vue.computed(() => {
        return props.rate > 0 ? true : false;
      });
      const calcRate = vue.computed(() => {
        const absRate = Math.abs(props.rate);
        if (!props.showZero && props.rate === 0) {
          return "--";
        }
        let resultRate = `${props.showSign && props.rate !== 0 ? isPositive.value ? "+" : "-" : ""}${myFixed(
          Number(absRate),
          props.digits
        )}%`;
        return resultRate;
      });
      const calcStyle = vue.computed(() => {
        return {
          color: props.rate === 0 ? props.textColor : props.syncTextColor ? isPositive.value ? props.riseColor : props.dropColor : props.textColor
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$o, [
          !_ctx.arrowLeft ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: "nut-trend-arrow-icon-before nut-trend-arrow-rate",
            style: vue.normalizeStyle(calcStyle.value)
          }, vue.toDisplayString(calcRate.value), 5)) : vue.createCommentVNode("", true),
          _cache[0] || (_cache[0] = vue.createTextVNode()),
          Number(_ctx.rate) !== 0 && isPositive.value ? vue.renderSlot(_ctx.$slots, "up-icon", { key: 1 }, () => [
            vue.createVNode(vue.unref(iconsVueTaro.TriangleUp), { color: _ctx.riseColor }, null, 8, ["color"])
          ]) : vue.createCommentVNode("", true),
          _cache[1] || (_cache[1] = vue.createTextVNode()),
          Number(_ctx.rate) !== 0 && !isPositive.value ? vue.renderSlot(_ctx.$slots, "down-icon", { key: 2 }, () => [
            vue.createVNode(vue.unref(iconsVueTaro.TriangleDown), { color: _ctx.dropColor }, null, 8, ["color"])
          ]) : vue.createCommentVNode("", true),
          _cache[2] || (_cache[2] = vue.createTextVNode()),
          _ctx.arrowLeft ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 3,
            class: "nut-trend-arrow-icon-after nut-trend-arrow-rate",
            style: vue.normalizeStyle(calcStyle.value)
          }, vue.toDisplayString(calcRate.value), 5)) : vue.createCommentVNode("", true)
        ]);
      };
    }
  }));
  withInstall(_sfc_main$p);
  const { create: create$n } = createComponent("tour");
  const _sfc_main$o = create$n({
    components: {
      NutPopover: Popover,
      Close: iconsVueTaro.Close
    },
    props: {
      modelValue: { type: Boolean, default: false },
      type: {
        type: String,
        default: "step"
      },
      steps: {
        type: Array,
        default: () => []
      },
      location: {
        type: String,
        default: "bottom"
      },
      current: {
        type: Number,
        default: 0
      },
      nextStepTxt: {
        type: String,
        default: "下一步"
      },
      prevStepTxt: {
        type: String,
        default: "上一步"
      },
      completeTxt: {
        type: String,
        default: "完成"
      },
      mask: {
        type: Boolean,
        default: true
      },
      offset: {
        type: Array,
        default: [8, 10]
      },
      bgColor: {
        type: String,
        default: ""
      },
      theme: {
        type: String,
        default: "light"
      },
      maskWidth: {
        type: [Number, String],
        default: ""
      },
      maskHeight: {
        type: [Number, String],
        default: ""
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      },
      showPrevStep: {
        type: Boolean,
        default: true
      },
      showTitleBar: {
        type: Boolean,
        default: true
      }
    },
    emits: ["update:modelValue", "change", "close"],
    setup(props, { emit }) {
      const state = vue.reactive({
        showTour: props.modelValue,
        active: 0
      });
      const showPopup = vue.ref([false]);
      let maskRect = [];
      let maskStyles = vue.ref([]);
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-tour";
        return `${prefixCls2}`;
      });
      const maskStyle = (index) => {
        const { offset, maskWidth, maskHeight } = props;
        if (!maskRect[index]) return {};
        const { width, height, left: left2, top } = maskRect[index];
        const center = [left2 + width / 2, top + height / 2];
        const w = Number(maskWidth ? maskWidth : width);
        const h = Number(maskHeight ? maskHeight : height);
        const styles = {
          width: `${w + +offset[1] * 2}px`,
          height: `${h + +offset[0] * 2}px`,
          top: `${center[1] - h / 2 - +offset[0]}px`,
          left: `${center[0] - w / 2 - +offset[1]}px`
        };
        maskStyles.value[index] = styles;
      };
      const changeStep = (type) => {
        const current = state.active;
        let next = current;
        if (type == "next") {
          next = current + 1;
        } else {
          next = current - 1;
        }
        showPopup.value[current] = false;
        setTimeout(() => {
          showPopup.value[next] = true;
          state.active = next;
        }, 300);
        emit("change", state.active);
      };
      const getRootPosition = () => {
        props.steps.forEach((item, i) => __async(this, null, function* () {
          useTaroRectById(item.target).then(
            (rect) => {
              maskRect[i] = rect;
              maskStyle(i);
            },
            () => {
            }
          );
        }));
      };
      const close = () => {
        state.showTour = false;
        showPopup.value[state.active] = false;
        emit("close", state.active);
        emit("update:modelValue", false);
      };
      const handleClickMask = () => {
        props.closeOnClickOverlay && close();
      };
      vue.onMounted(() => {
        setTimeout(() => {
          getRootPosition();
        }, 500);
      });
      vue.watch(
        () => props.modelValue,
        (val) => {
          if (val) {
            state.active = 0;
            getRootPosition();
          }
          state.showTour = val;
          showPopup.value[state.active] = val;
        }
      );
      const refRandomId = Math.random().toString(36).slice(-8);
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        classes,
        maskStyle,
        changeStep,
        showPopup,
        close,
        handleClickMask,
        maskStyles,
        refRandomId
      });
    }
  });
  const _hoisted_1$n = ["id"];
  const _hoisted_2$k = {
    key: 0,
    class: "nut-tour-content"
  };
  const _hoisted_3$h = {
    key: 0,
    class: "nut-tour-content-top"
  };
  const _hoisted_4$g = { class: "nut-tour-content-inner" };
  const _hoisted_5$8 = { class: "nut-tour-content-bottom" };
  const _hoisted_6$6 = { class: "nut-tour-content-bottom-init" };
  const _hoisted_7$6 = { class: "nut-tour-content-bottom-operate" };
  const _hoisted_8$3 = {
    key: 1,
    class: "nut-tour-content nut-tour-content-tile"
  };
  const _hoisted_9$3 = { class: "nut-tour-content-inner" };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Close = vue.resolveComponent("Close");
    const _component_nut_popover = vue.resolveComponent("nut-popover");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      _ctx.showTour ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "nut-tour-masked",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClickMask && _ctx.handleClickMask(...args))
      })) : vue.createCommentVNode("", true),
      _cache[12] || (_cache[12] = vue.createTextVNode()),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.steps, (step, i) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          key: i,
          style: { "height": "0" }
        }, [
          _ctx.showTour ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            id: `nut-tour-popid${i}${_ctx.refRandomId}`,
            class: vue.normalizeClass(["nut-tour-mask", [_ctx.mask ? _ctx.showPopup[i] ? "" : "nut-tour-mask-hidden" : "nut-tour-mask-none"]]),
            style: vue.normalizeStyle(_ctx.maskStyles[i])
          }, null, 14, _hoisted_1$n)) : vue.createCommentVNode("", true),
          _cache[11] || (_cache[11] = vue.createTextVNode()),
          vue.createVNode(_component_nut_popover, {
            visible: _ctx.showPopup[i],
            "onUpdate:visible": ($event) => _ctx.showPopup[i] = $event,
            location: step.location || _ctx.location,
            "target-id": `nut-tour-popid${i}${_ctx.refRandomId}`,
            "bg-color": _ctx.bgColor,
            theme: _ctx.theme,
            "close-on-click-outside": false,
            offset: step.popoverOffset || [0, 12],
            "arrow-offset": step.arrowOffset || 0,
            duration: 0.2
          }, {
            content: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                _ctx.type == "step" ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$k, [
                  _ctx.showTitleBar ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$h, [
                    vue.createElementVNode("view", {
                      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.close && _ctx.close(...args))
                    }, [
                      vue.createVNode(_component_Close, {
                        class: "nut-tour-content-top-close",
                        size: "10px"
                      })
                    ])
                  ])) : vue.createCommentVNode("", true),
                  _cache[8] || (_cache[8] = vue.createTextVNode()),
                  vue.createElementVNode("view", _hoisted_4$g, vue.toDisplayString(step.content), 1),
                  _cache[9] || (_cache[9] = vue.createTextVNode()),
                  vue.createElementVNode("view", _hoisted_5$8, [
                    vue.createElementVNode("view", _hoisted_6$6, vue.toDisplayString(_ctx.active + 1) + "/" + vue.toDisplayString(_ctx.steps.length), 1),
                    _cache[7] || (_cache[7] = vue.createTextVNode()),
                    vue.createElementVNode("view", _hoisted_7$6, [
                      vue.renderSlot(_ctx.$slots, "prev-step", {}, () => [
                        _ctx.active != 0 && _ctx.showPrevStep ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "nut-tour-content-bottom-operate-btn",
                          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.changeStep("prev"))
                        }, vue.toDisplayString(_ctx.prevStepTxt), 1)) : vue.createCommentVNode("", true)
                      ]),
                      _cache[5] || (_cache[5] = vue.createTextVNode()),
                      _ctx.steps.length - 1 == _ctx.active ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn active",
                        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.close && _ctx.close(...args))
                      }, vue.toDisplayString(_ctx.completeTxt), 1)) : vue.createCommentVNode("", true),
                      _cache[6] || (_cache[6] = vue.createTextVNode()),
                      vue.renderSlot(_ctx.$slots, "next-step", {}, () => [
                        _ctx.steps.length - 1 != _ctx.active ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "nut-tour-content-bottom-operate-btn active",
                          onClick: _cache[4] || (_cache[4] = ($event) => _ctx.changeStep("next"))
                        }, vue.toDisplayString(_ctx.nextStepTxt), 1)) : vue.createCommentVNode("", true)
                      ])
                    ])
                  ])
                ])) : vue.createCommentVNode("", true),
                _cache[10] || (_cache[10] = vue.createTextVNode()),
                _ctx.type == "tile" ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_8$3, [
                  vue.createElementVNode("view", _hoisted_9$3, vue.toDisplayString(step.content), 1)
                ])) : vue.createCommentVNode("", true)
              ])
            ]),
            _: 2
          }, 1032, ["visible", "onUpdate:visible", "location", "target-id", "bg-color", "theme", "offset", "arrow-offset"])
        ]);
      }), 128))
    ], 2);
  }
  const Tour = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n]]);
  const cN$9 = "NutAddress";
  const { create: create$m } = createComponent("address");
  const _sfc_main$n = create$m({
    components: {
      NutPopup: Popup,
      NutElevator: Elevator,
      Location: iconsVueTaro.Location,
      Location2: iconsVueTaro.Location2,
      Check: iconsVueTaro.Check,
      Close: iconsVueTaro.Close,
      Left: iconsVueTaro.Left,
      NutScrollView: _sfc_main$1u
    },
    inheritAttrs: false,
    props: __spreadProps(__spreadValues({}, popupProps), {
      modelValue: {
        type: Array,
        default: () => []
      },
      visible: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: "custom"
      },
      customAddressTitle: {
        type: String,
        default: ""
      },
      province: {
        type: Array,
        default: () => []
      },
      city: {
        type: Array,
        default: () => []
      },
      // 市
      country: {
        type: Array,
        default: () => []
      },
      // 县
      town: {
        type: Array,
        default: () => []
      },
      // 镇
      isShowCustomAddress: {
        type: Boolean,
        default: true
      },
      // 是否显示‘选择其他地区’按钮 type=‘exist’ 生效
      existAddress: {
        type: Array,
        default: () => []
      },
      // 现存地址列表
      existAddressTitle: {
        type: String,
        default: ""
      },
      customAndExistTitle: {
        type: String,
        default: ""
      },
      height: {
        type: [String, Number],
        default: "200"
      },
      columnsPlaceholder: {
        type: [String, Array],
        default: ""
      }
    }),
    emits: ["update:visible", "update:modelValue", "type", "change", "selected", "close", "closeMask", "switchModule"],
    setup(props, { emit }) {
      const translate = useLocale(cN$9);
      const tabItemRef = vue.reactive({
        province: vue.ref(null),
        city: vue.ref(null),
        country: vue.ref(null),
        town: vue.ref(null)
      });
      const showPopup = vue.ref(props.visible);
      const privateType = vue.ref(props.type);
      const tabIndex = vue.ref(0);
      const prevTabIndex = vue.ref(0);
      const tabName = vue.ref(["province", "city", "country", "town"]);
      const scrollDis = vue.ref([0, 0, 0, 0]);
      const scrollTop = vue.ref(0);
      const regionData = vue.reactive([]);
      const regionList = vue.computed(() => {
        switch (tabIndex.value) {
          case 0:
            return props.province;
          case 1:
            return props.city;
          case 2:
            return props.country;
          default:
            return props.town;
        }
      });
      const transformData = (data) => {
        if (!Array.isArray(data)) throw new TypeError("params muse be array.");
        if (!data.length) return [];
        data.forEach((item) => {
          if (!item.title) {
            console.warn("[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .");
            return;
          }
        });
        const newData = [];
        data = data.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
        data.forEach((item) => {
          const index = newData.findIndex((value) => value.title === item.title);
          if (index <= -1) {
            newData.push({
              title: item.title,
              list: [].concat(item)
            });
          } else {
            newData[index].list.push(item);
          }
        });
        return newData;
      };
      let selectedRegion = vue.ref([]);
      let selectedExistAddress = vue.reactive({});
      const closeWay = vue.ref("self");
      const lineDistance = vue.ref(20);
      const initCustomSelected = () => {
        regionData[0] = props.province || [];
        regionData[1] = props.city || [];
        regionData[2] = props.country || [];
        regionData[3] = props.town || [];
        const defaultValue = props.modelValue;
        const num = defaultValue.length;
        if (num > 0) {
          tabIndex.value = num - 1;
          if (regionList.value.length == 0) {
            tabIndex.value = 0;
            return;
          }
          for (let index = 0; index < num; index++) {
            let arr = regionData[index];
            selectedRegion.value[index] = arr.filter((item) => item.id == defaultValue[index])[0];
          }
          scrollTo();
        }
      };
      const getTabName = (item, index) => {
        if (item && item.name) return item.name;
        if (tabIndex.value < index && item) {
          return item.name;
        } else {
          return props.columnsPlaceholder[index] || translate("select");
        }
      };
      const handClose = (type = "self") => {
        closeWay.value = type == "cross" ? "cross" : "self";
        showPopup.value = false;
      };
      const clickOverlay = () => {
        closeWay.value = "mask";
      };
      const nextAreaList = (item) => {
        var _a;
        const tab = tabIndex.value;
        prevTabIndex.value = tabIndex.value;
        const callBackParams = {
          custom: tabName.value[tab]
        };
        selectedRegion.value[tab] = item;
        selectedRegion.value.splice(tab + 1, selectedRegion.value.length - (tab + 1));
        callBackParams.value = item;
        if (((_a = regionData[tab + 1]) == null ? void 0 : _a.length) > 0) {
          tabIndex.value = tab + 1;
          callBackParams.next = tabName.value[tabIndex.value];
          scrollTo();
        } else {
          handClose();
          emit("update:modelValue");
        }
        emit("change", callBackParams);
      };
      const changeRegionTab = (item, index) => {
        prevTabIndex.value = tabIndex.value;
        if (getTabName(item, index)) {
          tabIndex.value = index;
          scrollTo();
        }
      };
      const scrollChange = (e) => {
        scrollDis.value[tabIndex.value] = e.detail.scrollTop;
      };
      const scrollTo = () => {
        setTimeout(() => {
          scrollTop.value = scrollDis.value[tabIndex.value];
        });
      };
      const selectedExist = (item) => {
        const copyExistAdd = props.existAddress;
        let prevExistAdd = {};
        copyExistAdd.forEach((list) => {
          if (list && list.selectedAddress) prevExistAdd = list;
          list.selectedAddress = false;
        });
        item.selectedAddress = true;
        selectedExistAddress = item;
        emit("selected", prevExistAdd, item, copyExistAdd);
        handClose();
      };
      const initAddress = () => {
        selectedRegion.value = [];
        tabIndex.value = 0;
        scrollTo();
      };
      const close = () => {
        const data = {
          addressIdStr: "",
          addressStr: "",
          province: selectedRegion.value[0],
          city: selectedRegion.value[1],
          country: selectedRegion.value[2],
          town: selectedRegion.value[3]
        };
        const callBackParams = {
          data: {},
          type: privateType.value
        };
        if (["custom", "custom2"].includes(privateType.value)) {
          [0, 1, 2, 3].forEach((i) => {
            const item = selectedRegion.value[i];
            data.addressIdStr += `${i ? "_" : ""}${item && item.id || 0}`;
            data.addressStr += item && item.name || "";
          });
          callBackParams.data = data;
        } else {
          callBackParams.data = selectedExistAddress;
        }
        initAddress();
        if (closeWay.value == "self") {
          emit("close", callBackParams);
        } else {
          emit("closeMask", { closeWay });
        }
        emit("update:visible", false);
      };
      const switchModule = () => {
        const type = privateType.value;
        privateType.value = type == "exist" ? "custom" : "exist";
        initAddress();
        emit("switchModule", { type: privateType.value });
      };
      const handleElevatorItem = (key, item) => {
        nextAreaList(item);
      };
      vue.watch(
        () => props.visible,
        (value) => {
          showPopup.value = value;
        }
      );
      vue.watch(
        () => showPopup.value,
        (value) => {
          if (value) {
            initCustomSelected();
          }
        }
      );
      return __spreadProps(__spreadValues(__spreadValues({
        showPopup,
        privateType,
        tabIndex,
        tabName,
        regionList,
        selectedRegion,
        selectedExistAddress,
        switchModule,
        closeWay,
        close,
        getTabName,
        nextAreaList,
        lineDistance,
        changeRegionTab,
        selectedExist,
        clickOverlay,
        handClose,
        handleElevatorItem
      }, vue.toRefs(props)), vue.toRefs(tabItemRef)), {
        translate,
        transformData,
        scrollTop,
        scrollChange
      });
    }
  });
  const _hoisted_1$m = { class: "nut-address" };
  const _hoisted_2$j = { class: "nut-address__header" };
  const _hoisted_3$g = { class: "nut-address__header__title" };
  const _hoisted_4$f = {
    key: 0,
    class: "nut-address__custom"
  };
  const _hoisted_5$7 = {
    ref: "tabRegion",
    class: "nut-address__region"
  };
  const _hoisted_6$5 = ["onClick"];
  const _hoisted_7$5 = {
    key: 0,
    class: "active nut-address__region-item"
  };
  const _hoisted_8$2 = {
    key: 0,
    class: "nut-address__detail"
  };
  const _hoisted_9$2 = { class: "nut-address__detail-list" };
  const _hoisted_10$1 = ["onClick"];
  const _hoisted_11$1 = {
    key: 1,
    class: "nut-address__elevator-group"
  };
  const _hoisted_12$1 = {
    key: 1,
    class: "nut-address__exist"
  };
  const _hoisted_13$1 = { class: "nut-address__exist-group" };
  const _hoisted_14$1 = { class: "nut-address__exist-group-list" };
  const _hoisted_15 = ["onClick"];
  const _hoisted_16 = { class: "nut-address__exist-item-info" };
  const _hoisted_17 = {
    key: 0,
    class: "nut-address__exist-item-info-top"
  };
  const _hoisted_18 = { class: "nut-address__exist-item-info-name" };
  const _hoisted_19 = { class: "nut-address__exist-item-info-phone" };
  const _hoisted_20 = { class: "nut-address__exist-item-info-bottom" };
  const _hoisted_21 = { class: "nut-address__exist-choose-btn" };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Left = vue.resolveComponent("Left");
    const _component_Close = vue.resolveComponent("Close");
    const _component_Check = vue.resolveComponent("Check");
    const _component_nut_scroll_view = vue.resolveComponent("nut-scroll-view");
    const _component_nut_elevator = vue.resolveComponent("nut-elevator");
    const _component_Location2 = vue.resolveComponent("Location2");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createBlock(_component_nut_popup, {
      visible: _ctx.showPopup,
      "onUpdate:visible": _cache[3] || (_cache[3] = ($event) => _ctx.showPopup = $event),
      position: "bottom",
      "lock-scroll": _ctx.lockScroll,
      "catch-move": _ctx.lockScroll,
      round: _ctx.round,
      "z-index": _ctx.zIndex,
      onClose: _ctx.close,
      onClickOverlay: _ctx.clickOverlay,
      onOpen: _cache[4] || (_cache[4] = ($event) => _ctx.closeWay = "self")
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", _hoisted_1$m, [
          vue.createElementVNode("view", _hoisted_2$j, [
            vue.createElementVNode("view", {
              class: "nut-address__header-back",
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.switchModule && _ctx.switchModule(...args))
            }, [
              vue.renderSlot(_ctx.$slots, "back-icon", {}, () => [
                vue.withDirectives(vue.createVNode(_component_Left, { size: "14px" }, null, 512), [
                  [vue.vShow, _ctx.type == "exist" && _ctx.privateType == "custom"]
                ])
              ])
            ]),
            _cache[5] || (_cache[5] = vue.createTextVNode()),
            vue.createElementVNode("view", _hoisted_3$g, vue.toDisplayString(_ctx.privateType == "custom" ? _ctx.customAddressTitle || _ctx.translate("selectRegion") : _ctx.existAddressTitle || _ctx.translate("deliveryTo")), 1),
            _cache[6] || (_cache[6] = vue.createTextVNode()),
            vue.createElementVNode("view", {
              class: "nut-address__header-close",
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handClose("cross"))
            }, [
              vue.renderSlot(_ctx.$slots, "close-icon", {}, () => [
                vue.createVNode(_component_Close, {
                  color: "#cccccc",
                  size: "14px"
                })
              ])
            ])
          ]),
          _cache[18] || (_cache[18] = vue.createTextVNode()),
          ["custom", "custom2"].includes(_ctx.privateType) ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$f, [
            vue.createElementVNode("view", _hoisted_5$7, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.selectedRegion, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: vue.normalizeClass(["nut-address__region-item", index == _ctx.tabIndex ? "active" : ""]),
                  onClick: ($event) => _ctx.changeRegionTab(item, index)
                }, [
                  vue.createElementVNode("view", null, vue.toDisplayString(_ctx.getTabName(item, index)), 1),
                  _cache[7] || (_cache[7] = vue.createTextVNode()),
                  vue.createElementVNode("view", {
                    class: vue.normalizeClass({ "nut-address__region-line--mini": true, active: index == _ctx.tabIndex })
                  }, null, 2)
                ], 10, _hoisted_6$5);
              }), 128)),
              _cache[10] || (_cache[10] = vue.createTextVNode()),
              _ctx.tabIndex == _ctx.selectedRegion.length ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_7$5, [
                vue.createElementVNode("view", null, vue.toDisplayString(_ctx.getTabName(null, _ctx.selectedRegion.length)), 1),
                _cache[8] || (_cache[8] = vue.createTextVNode()),
                _cache[9] || (_cache[9] = vue.createElementVNode("view", { class: "nut-address__region-line--mini active" }, null, -1))
              ])) : vue.createCommentVNode("", true)
            ], 512),
            _cache[11] || (_cache[11] = vue.createTextVNode()),
            _ctx.privateType == "custom" ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_8$2, [
              vue.createElementVNode("div", _hoisted_9$2, [
                vue.createVNode(_component_nut_scroll_view, {
                  "scroll-y": true,
                  style: { height: "100%" },
                  "scroll-top": _ctx.scrollTop,
                  onScroll: _ctx.scrollChange
                }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.regionList, (item, index) => {
                      var _a, _b;
                      return vue.openBlock(), vue.createElementBlock("div", {
                        key: index,
                        class: vue.normalizeClass(["nut-address__detail-item", ((_a = _ctx.selectedRegion[_ctx.tabIndex]) == null ? void 0 : _a.id) == item.id ? "active" : ""]),
                        onClick: ($event) => _ctx.nextAreaList(item)
                      }, [
                        vue.createElementVNode("div", null, [
                          ((_b = _ctx.selectedRegion[_ctx.tabIndex]) == null ? void 0 : _b.id) == item.id ? vue.renderSlot(_ctx.$slots, "icon", { key: 0 }, () => [
                            vue.createVNode(_component_Check, {
                              class: "nut-address-select-icon",
                              width: "13px"
                            })
                          ]) : vue.createCommentVNode("", true),
                          vue.createTextVNode(" " + vue.toDisplayString(item.name), 1)
                        ])
                      ], 10, _hoisted_10$1);
                    }), 128))
                  ]),
                  _: 3
                }, 8, ["scroll-top", "onScroll"])
              ])
            ])) : (vue.openBlock(), vue.createElementBlock("view", _hoisted_11$1, [
              vue.createVNode(_component_nut_elevator, {
                height: _ctx.height,
                "index-list": _ctx.transformData(_ctx.regionList),
                onClickItem: _ctx.handleElevatorItem
              }, null, 8, ["height", "index-list", "onClickItem"])
            ]))
          ])) : _ctx.privateType == "exist" ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_12$1, [
            vue.createElementVNode("div", _hoisted_13$1, [
              vue.createElementVNode("ul", _hoisted_14$1, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.existAddress, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("li", {
                    key: index,
                    class: vue.normalizeClass(["nut-address__exist-group-item", [item.selectedAddress ? "active" : ""]]),
                    onClick: ($event) => _ctx.selectedExist(item)
                  }, [
                    !item.selectedAddress ? vue.renderSlot(_ctx.$slots, "unselected-icon", { key: 0 }, () => [
                      vue.createVNode(_component_Location2, {
                        class: "nut-address-select-icon",
                        width: "13px"
                      })
                    ]) : vue.createCommentVNode("", true),
                    _cache[14] || (_cache[14] = vue.createTextVNode()),
                    item.selectedAddress ? vue.renderSlot(_ctx.$slots, "icon", { key: 1 }, () => [
                      vue.createVNode(_component_Check, {
                        class: "nut-address-select-icon",
                        width: "13px"
                      })
                    ]) : vue.createCommentVNode("", true),
                    _cache[15] || (_cache[15] = vue.createTextVNode()),
                    vue.createElementVNode("div", _hoisted_16, [
                      item.name && item.phone ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_17, [
                        vue.createElementVNode("div", _hoisted_18, vue.toDisplayString(item.name), 1),
                        _cache[12] || (_cache[12] = vue.createTextVNode()),
                        vue.createElementVNode("div", _hoisted_19, vue.toDisplayString(item.phone), 1)
                      ])) : vue.createCommentVNode("", true),
                      _cache[13] || (_cache[13] = vue.createTextVNode()),
                      vue.createElementVNode("div", _hoisted_20, [
                        vue.createElementVNode("view", null, vue.toDisplayString(item.provinceName + item.cityName + item.countyName + item.townName + item.addressDetail), 1)
                      ])
                    ])
                  ], 10, _hoisted_15);
                }), 128))
              ])
            ]),
            _cache[16] || (_cache[16] = vue.createTextVNode()),
            _ctx.isShowCustomAddress ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "nut-address__exist-choose",
              onClick: _cache[2] || (_cache[2] = (...args) => _ctx.switchModule && _ctx.switchModule(...args))
            }, [
              vue.createElementVNode("div", _hoisted_21, vue.toDisplayString(_ctx.customAndExistTitle || _ctx.translate("chooseAnotherAddress")), 1)
            ])) : vue.createCommentVNode("", true),
            _cache[17] || (_cache[17] = vue.createTextVNode()),
            !_ctx.isShowCustomAddress ? vue.renderSlot(_ctx.$slots, "bottom", { key: 1 }) : vue.createCommentVNode("", true)
          ])) : vue.createCommentVNode("", true)
        ])
      ]),
      _: 3
    }, 8, ["visible", "lock-scroll", "catch-move", "round", "z-index", "onClose", "onClickOverlay"]);
  }
  const Address = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m]]);
  const { componentName: componentName$1, create: create$l } = createComponent("barrage");
  const _sfc_main$m = create$l({
    props: {
      danmu: {
        type: Array,
        default: () => []
      },
      frequency: {
        type: Number,
        default: 500
      },
      speeds: {
        type: Number,
        default: 5e3
      },
      rows: {
        type: Number,
        default: 3
      },
      top: {
        type: Number,
        default: 10
      },
      loop: {
        type: Boolean,
        default: true
      }
    },
    emits: ["click"],
    setup(props) {
      const classTime = (/* @__PURE__ */ new Date()).getTime();
      const slotDefault = !!vue.useSlots().default;
      const timeId = vue.ref((/* @__PURE__ */ new Date()).getTime());
      const danmuList = vue.ref(props.danmu);
      const danmuListSlots = vue.ref([]);
      const rows = vue.ref(props.rows);
      const top = vue.ref(props.top);
      const speeds = props.speeds;
      const classes = vue.computed(() => {
        const prefixCls2 = componentName$1;
        return {
          [prefixCls2]: true,
          ["nut-barrage--dmBody" + timeId.value]: true
        };
      });
      vue.onMounted(() => {
        var _a;
        if (slotDefault) {
          const list = document.getElementsByClassName("nut-barrage__slotBody" + classTime)[0].getElementsByClassName("nut-barrage__item");
          let childrens = ((_a = list == null ? void 0 : list[0]) == null ? void 0 : _a.children) || [];
          danmuList.value = childrens;
        }
        runStep();
      });
      vue.watch(
        () => props.danmu,
        (newValue) => {
          danmuList.value = [...newValue];
        }
      );
      const add = (word) => {
        danmuList.value = [...danmuList.value, word];
        runStep();
      };
      const getNode = (index) => {
        const query = Taro.createSelectorQuery();
        setTimeout(() => {
          let width = 100;
          query.select(".nut-barrage--dmBody" + timeId.value).boundingClientRect((rec) => {
            width = (rec == null ? void 0 : rec.width) || 300;
          });
          query.select(".nut-barrage__item" + index).boundingClientRect((recs) => {
            let height = recs == null ? void 0 : recs.height;
            let nodeTop = index % rows.value * (height + top.value) + 20 + "px";
            styleInfo(index, nodeTop, width);
          }).exec();
        }, 500);
      };
      const runStep = () => {
        danmuList.value.forEach((item, index) => {
          getNode(index);
        });
      };
      let styleList = vue.reactive([]);
      const styleInfo = (index, nodeTop, width) => {
        var _a;
        let timeIndex = index - rows.value > 0 ? index - rows.value : 0;
        let list = styleList;
        let time = list[timeIndex] ? Number(list[timeIndex]["--time"]) : 0;
        let obj = {
          top: nodeTop,
          "--time": `${props.frequency * index + time}`,
          animationDuration: `${speeds}ms`,
          animationIterationCount: `${props.loop ? "infinite" : 1}`,
          animationDelay: `${props.frequency * index + time}ms`,
          "--move-distance": `-${width}px`
        };
        if (slotDefault && ((_a = danmuList.value[index]) == null ? void 0 : _a.el)) {
          let orginalSty = danmuList.value[index].el.style;
          danmuList.value[index].el.style = Object.assign(orginalSty, obj);
        } else {
          styleList.push(obj);
        }
      };
      return { classTime, classes, danmuList, add, styleList, danmuListSlots };
    }
  });
  const _hoisted_1$l = { ref: "dmContainer" };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      vue.createElementVNode("div", _hoisted_1$l, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["nut-barrage__slotBody" + _ctx.classTime])
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.danmuList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: "danmu" + index,
              class: vue.normalizeClass(["nut-barrage__item", "nut-barrage__item" + index, "move"]),
              style: vue.normalizeStyle(_ctx.styleList[index])
            }, vue.toDisplayString(item.length > 8 ? item.substr(0, 8) + "..." : item), 7);
          }), 128))
        ], 2)
      ], 512)
    ], 2);
  }
  const Barrage = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l]]);
  const { create: create$k } = createComponent("signature");
  const cN$8 = "NutSignature";
  const _sfc_main$l = create$k({
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
      NutButton: _sfc_main$1L
    },
    emits: ["start", "end", "signing", "confirm", "clear"],
    setup(props, { emit }) {
      const translate = useLocale(cN$8);
      const classes = vue.computed(() => {
        const prefixCls2 = "nut-signature";
        return {
          [prefixCls2]: true,
          [`${props.customClass}`]: props.customClass
        };
      });
      const spcanvas = vue.ref(null);
      const canvasSetId = "spcanvas" + (/* @__PURE__ */ new Date()).getTime();
      const state = vue.reactive({
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
      const isDraw = vue.ref(false);
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
      vue.onMounted(() => {
        Taro.nextTick(() => {
          setTimeout(() => {
            if (Taro.getEnv() === "WEAPP" || Taro.getEnv() === "JD") {
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
  const _hoisted_1$k = {
    class: /* @__PURE__ */ vue.normalizeClass(["nut-signature-inner", "spcanvas_WEAPP"])
  };
  const _hoisted_2$i = ["id", "canvasId"];
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_button = vue.resolveComponent("nut-button");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes)
    }, [
      vue.createElementVNode("div", _hoisted_1$k, [
        vue.createElementVNode("canvas", {
          id: _ctx.canvasSetId,
          ref: "spcanvas",
          class: "spcanvas",
          canvasId: _ctx.canvasSetId,
          type: "2d",
          "disable-scroll": "true",
          onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.startEventHandler && _ctx.startEventHandler(...args)),
          onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.moveEventHandler && _ctx.moveEventHandler(...args)),
          onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.endEventHandler && _ctx.endEventHandler(...args)),
          onTouchleave: _cache[3] || (_cache[3] = (...args) => _ctx.leaveEventHandler && _ctx.leaveEventHandler(...args))
        }, null, 40, _hoisted_2$i)
      ]),
      _cache[6] || (_cache[6] = vue.createTextVNode()),
      vue.createVNode(_component_nut_button, {
        class: "nut-signature-btn",
        type: "default",
        onClick: _cache[4] || (_cache[4] = ($event) => _ctx.clear())
      }, {
        default: vue.withCtx(() => [
          vue.createTextVNode(vue.toDisplayString(_ctx.translate("reSign")), 1)
        ]),
        _: 1
      }),
      _cache[7] || (_cache[7] = vue.createTextVNode()),
      vue.createVNode(_component_nut_button, {
        class: "nut-signature-btn",
        type: "primary",
        onClick: _cache[5] || (_cache[5] = ($event) => _ctx.confirm())
      }, {
        default: vue.withCtx(() => [
          vue.createTextVNode(vue.toDisplayString(_ctx.translate("confirm")), 1)
        ]),
        _: 1
      })
    ], 2);
  }
  const Signature = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k]]);
  const { create: create$j } = createComponent("time-select");
  const cN$7 = "NutTimeSelect";
  const _sfc_main$k = create$j({
    components: {
      NutPopup: Popup
    },
    props: {
      visible: {
        type: Boolean,
        defalut: false
      },
      height: {
        type: [String],
        default: "20%"
      },
      title: {
        type: String,
        default: ""
      },
      currentKey: {
        type: [Number, String],
        default: 0
      },
      currentTime: {
        type: Array,
        default: () => {
          return [];
        }
      },
      lockScroll: {
        type: [Boolean],
        default: true
      }
    },
    emits: ["update:visible", "select"],
    setup: (props, { emit }) => {
      const translate = useLocale(cN$7);
      const popStyle = vue.computed(() => {
        return {
          width: "100%",
          height: props.height
        };
      });
      const currentKey = vue.computed(() => props.currentKey);
      const currentTime = vue.computed(() => props.currentTime);
      const close = () => {
        emit("update:visible", false);
        emit("select", currentTime.value);
      };
      vue.provide("currentKey", currentKey);
      vue.provide("currentTime", currentTime);
      return {
        popStyle,
        close,
        translate
      };
    }
  });
  const _hoisted_1$j = { class: "nut-time-select" };
  const _hoisted_2$h = { class: "nut-time-select__title" };
  const _hoisted_3$f = { class: "nut-time-select__title__fixed" };
  const _hoisted_4$e = { key: 0 };
  const _hoisted_5$6 = { class: "nut-time-select__content" };
  const _hoisted_6$4 = { class: "nut-time-select__content__pannel" };
  const _hoisted_7$4 = { class: "nut-time-select__content__detail" };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createBlock(_component_nut_popup, {
      position: "bottom",
      closeable: "",
      round: "",
      visible: _ctx.visible,
      style: vue.normalizeStyle(_ctx.popStyle),
      "lock-scroll": _ctx.lockScroll,
      "catch-move": _ctx.lockScroll,
      onClickOverlay: _ctx.close,
      onClickCloseIcon: _ctx.close
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", _hoisted_1$j, [
          vue.createElementVNode("view", _hoisted_2$h, [
            vue.createElementVNode("view", _hoisted_3$f, [
              !_ctx.$slots.title ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$e, vue.toDisplayString(_ctx.title || _ctx.translate("pickupTime")), 1)) : vue.renderSlot(_ctx.$slots, "title", { key: 1 })
            ])
          ]),
          _cache[1] || (_cache[1] = vue.createTextVNode()),
          vue.createElementVNode("view", _hoisted_5$6, [
            vue.createElementVNode("view", _hoisted_6$4, [
              vue.renderSlot(_ctx.$slots, "pannel")
            ]),
            _cache[0] || (_cache[0] = vue.createTextVNode()),
            vue.createElementVNode("view", _hoisted_7$4, [
              vue.renderSlot(_ctx.$slots, "detail")
            ])
          ])
        ])
      ]),
      _: 3
    }, 8, ["visible", "style", "lock-scroll", "catch-move", "onClickOverlay", "onClickCloseIcon"]);
  }
  const TimeSelect = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j]]);
  const { componentName, create: create$i } = createComponent("time-pannel");
  const _sfc_main$j = create$i({
    name: "timepannel",
    props: {
      name: {
        type: String,
        default: ""
      },
      pannelKey: {
        type: [Number, String],
        default: 0
      }
    },
    emits: ["change"],
    setup: (props, { emit }) => {
      const currentKey = vue.inject("currentKey");
      const state = vue.reactive({
        currentKey
      });
      const classes = vue.computed(() => {
        const prefixCls2 = componentName;
        return {
          [prefixCls2]: true,
          "nut-time-pannel--curr": state.currentKey == props.pannelKey
        };
      });
      const handlePannel = (pannelKey) => {
        emit("change", pannelKey);
      };
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        classes,
        handlePannel
      });
    }
  });
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(_ctx.classes),
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.handlePannel(_ctx.pannelKey))
    }, vue.toDisplayString(_ctx.name), 3);
  }
  const TimePannel = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i]]);
  const { create: create$h } = createComponent("time-detail");
  const _sfc_main$i = create$h({
    name: "timedetail",
    props: {
      times: {
        type: Array,
        default: () => []
      }
    },
    emits: ["select"],
    setup: (props, { emit }) => {
      const currentKey = vue.inject("currentKey");
      const currentTime = vue.inject("currentTime");
      const state = vue.reactive({
        currentKey,
        currentTime
      });
      const getClass = (item) => {
        let find = state.currentTime.find((item2) => item2.key == state.currentKey);
        if (find) {
          return {
            "nut-time-detail__detail__list__item": true,
            "nut-time-detail__detail__list__item--curr": find.list.filter((value) => value === item).length > 0
          };
        }
      };
      const renderData = vue.computed(() => {
        return props.times.find((time) => time.key == state.currentKey)["list"];
      });
      const handleTime = (time) => {
        emit("select", time);
      };
      return __spreadProps(__spreadValues({}, vue.toRefs(state)), {
        getClass,
        renderData,
        handleTime
      });
    }
  });
  const _hoisted_1$i = { class: "nut-time-detail" };
  const _hoisted_2$g = { class: "nut-time-detail__detail nut-time-detail__detail--moring" };
  const _hoisted_3$e = { class: "nut-time-detail__detail__list" };
  const _hoisted_4$d = ["onClick"];
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$i, [
      vue.createElementVNode("view", _hoisted_2$g, [
        vue.createElementVNode("view", _hoisted_3$e, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.renderData, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: item,
              class: vue.normalizeClass(_ctx.getClass(item)),
              onClick: ($event) => _ctx.handleTime(item)
            }, vue.toDisplayString(item), 11, _hoisted_4$d);
          }), 128))
        ])
      ])
    ]);
  }
  const TimeDetail = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h]]);
  const { create: create$g } = createComponent("sku-header");
  const cN$6 = "NutSkuHeader";
  const _sfc_main$h = create$g({
    props: {
      goods: {
        type: Object,
        default: {}
      }
    },
    components: {
      NutPrice: _sfc_main$C
    },
    setup(props, { slots }) {
      const translate = useLocale(cN$6);
      const getSlots = (name) => slots[name];
      return {
        getSlots,
        translate
      };
    }
  });
  const _hoisted_1$h = { class: "nut-sku-header" };
  const _hoisted_2$f = ["src"];
  const _hoisted_3$d = { class: "nut-sku-header-right" };
  const _hoisted_4$c = {
    key: 3,
    class: "nut-sku-header-right-extra"
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_price = vue.resolveComponent("nut-price");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$h, [
      vue.createElementVNode("img", {
        class: "nut-sku-header-img",
        src: _ctx.goods.imagePath
      }, null, 8, _hoisted_2$f),
      _cache[2] || (_cache[2] = vue.createTextVNode()),
      vue.createElementVNode("view", _hoisted_3$d, [
        _ctx.getSlots("sku-header-price") ? vue.renderSlot(_ctx.$slots, "sku-header-price", { key: 0 }) : (vue.openBlock(), vue.createBlock(_component_nut_price, {
          key: 1,
          price: _ctx.goods.price,
          "need-symbol": true,
          thousands: false
        }, null, 8, ["price"])),
        _cache[0] || (_cache[0] = vue.createTextVNode()),
        _ctx.getSlots("sku-header-extra") ? vue.renderSlot(_ctx.$slots, "sku-header-extra", { key: 2 }) : vue.createCommentVNode("", true),
        _cache[1] || (_cache[1] = vue.createTextVNode()),
        _ctx.goods.skuId && !_ctx.getSlots("sku-header-extra") ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_4$c, vue.toDisplayString(_ctx.translate("skuId")) + " : " + vue.toDisplayString(_ctx.goods.skuId), 1)) : vue.createCommentVNode("", true)
      ])
    ]);
  }
  const SkuHeader = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g]]);
  const { create: create$f } = createComponent("sku-select");
  const _sfc_main$g = create$f({
    props: {
      sku: {
        type: Array,
        default: () => []
      }
    },
    emits: ["selectSku"],
    setup(props, { emit }) {
      const skuInfo = vue.ref([]);
      vue.watch(
        () => props.sku,
        (value) => {
          skuInfo.value = [].slice.call(value);
        },
        { deep: true }
      );
      vue.onMounted(() => {
        if (props.sku.length > 0) {
          skuInfo.value = [].slice.call(props.sku);
        }
      });
      const changeSaleChild = (attrItem, index, parentItem, parentIndex) => {
        if (attrItem.checkFlag || attrItem.disable) {
          return;
        }
        emit("selectSku", {
          sku: attrItem,
          skuIndex: index,
          parentSku: parentItem,
          parentIndex
        });
      };
      return {
        skuInfo,
        changeSaleChild
      };
    }
  });
  const _hoisted_1$g = { class: "nut-sku-select" };
  const _hoisted_2$e = { class: "nut-sku-select-item-title" };
  const _hoisted_3$c = { class: "nut-sku-select-item-skus" };
  const _hoisted_4$b = ["onClick"];
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$g, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.skuInfo, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          key: item.id,
          class: "nut-sku-select-item"
        }, [
          vue.createElementVNode("view", _hoisted_2$e, vue.toDisplayString(item.name), 1),
          _cache[0] || (_cache[0] = vue.createTextVNode()),
          vue.createElementVNode("view", _hoisted_3$c, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.list, (itemAttr, itemAttrIndex) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: itemAttr.name,
                class: vue.normalizeClass(["nut-sku-select-item-skus-sku", [{ active: !itemAttr.disable && itemAttr.active }, { disable: itemAttr.disable }]]),
                onClick: ($event) => _ctx.changeSaleChild(itemAttr, itemAttrIndex, item, index)
              }, vue.toDisplayString(itemAttr.name), 11, _hoisted_4$b);
            }), 128))
          ])
        ]);
      }), 128))
    ]);
  }
  const SkuSelect = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f]]);
  const { create: create$e } = createComponent("sku-stepper");
  const _sfc_main$f = create$e({
    props: {
      // 购买数量最大值
      stepperMax: {
        type: [Number, String],
        default: 99999
      },
      stepperMin: {
        type: [Number, String],
        default: 1
      },
      // stepper 前文案提示
      stepperExtraText: {
        type: [Function, Boolean],
        default: false
      },
      // 数量选择左侧文案
      stepperTitle: {
        type: String,
        default: "购买数量"
      }
    },
    emits: ["click", "changeSku", "changeStepper", "clickBtnOptions", "overLimit", "reduce", "add"],
    components: {
      NutInputNumber: _sfc_main$15
    },
    setup(props, { emit }) {
      const goodsCount = vue.ref(props.stepperMin);
      vue.onMounted(() => {
        goodsCount.value = props.stepperMin;
      });
      const getExtraText = () => {
        const { stepperExtraText } = props;
        if (stepperExtraText) {
          if (stepperExtraText === true) {
            return "";
          }
          return stepperExtraText == null ? void 0 : stepperExtraText();
        }
      };
      const add = (value) => {
        emit("add", value);
      };
      const reduce = (value) => {
        emit("reduce", value);
      };
      const overlimit = (e, action) => {
        emit("overLimit", {
          action,
          value: parseInt(goodsCount.value + "")
        });
      };
      const changeStepper = (value) => {
        goodsCount.value = value;
        emit("changeStepper", value);
      };
      return {
        goodsCount,
        add,
        reduce,
        overlimit,
        getExtraText,
        changeStepper
      };
    }
  });
  const _hoisted_1$f = { class: "nut-sku-stepper" };
  const _hoisted_2$d = { class: "nut-sku-stepper-title" };
  const _hoisted_3$b = ["innerHTML"];
  const _hoisted_4$a = { class: "nut-sku-stepper-count" };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_input_number = vue.resolveComponent("nut-input-number");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$f, [
      vue.createElementVNode("view", _hoisted_2$d, vue.toDisplayString(_ctx.stepperTitle), 1),
      _cache[1] || (_cache[1] = vue.createTextVNode()),
      vue.createElementVNode("view", {
        class: "nut-sku-stepper-limit",
        innerHTML: _ctx.getExtraText()
      }, null, 8, _hoisted_3$b),
      _cache[2] || (_cache[2] = vue.createTextVNode()),
      vue.createElementVNode("view", _hoisted_4$a, [
        vue.createVNode(_component_nut_input_number, {
          modelValue: _ctx.goodsCount,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.goodsCount = $event),
          min: _ctx.stepperMin,
          max: _ctx.stepperMax,
          onAdd: _ctx.add,
          onReduce: _ctx.reduce,
          onOverlimit: _ctx.overlimit,
          onChange: _ctx.changeStepper
        }, null, 8, ["modelValue", "min", "max", "onAdd", "onReduce", "onOverlimit", "onChange"])
      ])
    ]);
  }
  const SkuStepper = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e]]);
  const { create: create$d } = createComponent("sku-operate");
  const _sfc_main$e = create$d({
    props: {
      // 底部按钮配置  confirm cart  buy
      btnOptions: {
        type: Array,
        default: () => ["confirm"]
      },
      btnExtraText: {
        type: String,
        default: ""
      },
      // 立即购买文案
      buyText: {
        type: String,
        default: "立即购买"
      },
      // 加入购物车文案
      addCartText: {
        type: String,
        default: "加入购物车"
      },
      confirmText: {
        type: String,
        default: "确定"
      }
    },
    emits: ["click", "changeSku", "changeBuyCount", "clickBtnOperate"],
    setup(props, { emit, slots }) {
      const getBtnDesc = (type) => {
        let mapD = {
          confirm: props.confirmText,
          cart: props.addCartText,
          buy: props.buyText
        };
        return mapD[type];
      };
      const getSlots = (name) => slots[name];
      const clickBtnOperate = (btn) => {
        emit("clickBtnOperate", btn);
      };
      return {
        getBtnDesc,
        clickBtnOperate,
        getSlots
      };
    }
  });
  const _hoisted_1$e = {
    key: 0,
    class: "nut-sku-operate"
  };
  const _hoisted_2$c = {
    key: 0,
    class: "nut-sku-operate-desc"
  };
  const _hoisted_3$a = {
    key: 1,
    class: "nut-sku-operate-btn"
  };
  const _hoisted_4$9 = ["onClick"];
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.btnOptions.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$e, [
      _ctx.btnExtraText ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_2$c, vue.toDisplayString(_ctx.btnExtraText), 1)) : vue.createCommentVNode("", true),
      _cache[0] || (_cache[0] = vue.createTextVNode()),
      vue.renderSlot(_ctx.$slots, "operate-btn"),
      _cache[1] || (_cache[1] = vue.createTextVNode()),
      !_ctx.getSlots("operate-btn") ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_3$a, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.btnOptions, (btn, i) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: i,
            class: vue.normalizeClass([`nut-sku-operate-btn-${btn}`, "nut-sku-operate-btn-item"]),
            onClick: ($event) => _ctx.clickBtnOperate(btn)
          }, vue.toDisplayString(_ctx.getBtnDesc(btn)), 11, _hoisted_4$9);
        }), 128))
      ])) : vue.createCommentVNode("", true)
    ])) : vue.createCommentVNode("", true);
  }
  const SkuOperate = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d]]);
  const { create: create$c } = createComponent("sku");
  const cN$5 = "NutSku";
  const _sfc_main$d = create$c({
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      sku: {
        type: Array,
        default: []
      },
      goods: {
        type: Object,
        default: {}
      },
      // stepper 最大值
      stepperMax: {
        type: [Number, String],
        default: 99999
      },
      // stepper 最小值
      stepperMin: {
        type: [Number, String],
        default: 1
      },
      // 底部按钮配置  confirm cart  buy
      btnOptions: {
        type: Array,
        default: () => ["confirm"]
      },
      // 数量选择左侧文案
      stepperTitle: {
        type: String,
        default: ""
      },
      // stepper 前面文案
      stepperExtraText: {
        type: [Function, Boolean],
        default: false
      },
      btnExtraText: {
        type: String,
        default: ""
      },
      // 立即购买文案
      buyText: {
        type: String,
        default: ""
      },
      // 加入购物车文案
      addCartText: {
        type: String,
        default: ""
      },
      // 确定文案
      confirmText: {
        type: String,
        default: ""
      },
      lockScroll: {
        type: Boolean,
        default: true
      }
    },
    emits: [
      "update:visible",
      "selectSku",
      "changeStepper",
      "clickBtnOperate",
      "clickCloseIcon",
      "clickOverlay",
      "close",
      "reduce",
      "add",
      "overLimit"
    ],
    components: {
      SkuHeader,
      SkuSelect,
      SkuStepper,
      SkuOperate,
      NutPopup: Popup,
      NutScrollView: _sfc_main$1u
    },
    setup(props, { emit, slots }) {
      const translate = useLocale(cN$5);
      const showPopup = vue.ref(props.visible);
      const goodsCount = vue.ref(props.stepperMin);
      vue.watch(
        () => props.visible,
        (value) => {
          showPopup.value = value;
        }
      );
      vue.watch(
        () => showPopup.value,
        (value) => {
          if (value == false) {
            close();
          }
        }
      );
      const getSlots = (name) => slots[name];
      const selectSku = (skus) => {
        emit("selectSku", skus);
      };
      const changeStepper = (value) => {
        goodsCount.value = value;
        emit("changeStepper", value);
      };
      const add = (value) => {
        emit("add", value);
      };
      const reduce = (value) => {
        emit("reduce", value);
      };
      const stepperOverLimit = (count) => {
        emit("overLimit", count);
      };
      const clickBtnOperate = (btn) => {
        emit("clickBtnOperate", {
          type: btn,
          value: goodsCount.value
        });
      };
      const closePopup = (type) => {
        if (type == "icon") {
          emit("clickCloseIcon");
        }
        if (type == "overlay") {
          emit("clickOverlay");
        }
        if (type == "close") {
          emit("close");
        }
        showPopup.value = false;
      };
      const close = () => {
        emit("update:visible", false);
      };
      return {
        showPopup,
        closePopup,
        selectSku,
        changeStepper,
        stepperOverLimit,
        clickBtnOperate,
        add,
        reduce,
        getSlots,
        translate
      };
    }
  });
  const _hoisted_1$d = { class: "nut-sku" };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_sku_header = vue.resolveComponent("sku-header");
    const _component_SkuSelect = vue.resolveComponent("SkuSelect");
    const _component_sku_stepper = vue.resolveComponent("sku-stepper");
    const _component_nut_scroll_view = vue.resolveComponent("nut-scroll-view");
    const _component_sku_operate = vue.resolveComponent("sku-operate");
    const _component_nut_popup = vue.resolveComponent("nut-popup");
    return vue.openBlock(), vue.createBlock(_component_nut_popup, {
      visible: _ctx.showPopup,
      "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => _ctx.showPopup = $event),
      position: "bottom",
      closeable: "",
      round: "",
      style: { "height": "75%" },
      "lock-scroll": _ctx.lockScroll,
      "catch-move": _ctx.lockScroll,
      onClickCloseIcon: _cache[1] || (_cache[1] = ($event) => _ctx.closePopup("icon")),
      onClickOverlay: _cache[2] || (_cache[2] = ($event) => _ctx.closePopup("overlay")),
      onClose: _cache[3] || (_cache[3] = ($event) => _ctx.closePopup("close"))
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", _hoisted_1$d, [
          vue.renderSlot(_ctx.$slots, "sku-header"),
          _cache[10] || (_cache[10] = vue.createTextVNode()),
          !_ctx.getSlots("sku-header") ? (vue.openBlock(), vue.createBlock(_component_sku_header, {
            key: 0,
            goods: _ctx.goods
          }, vue.createSlots({ _: 2 }, [
            _ctx.getSlots("sku-header-price") ? {
              name: "sku-header-price",
              fn: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "sku-header-price")
              ]),
              key: "0"
            } : void 0,
            _ctx.getSlots("sku-header-extra") ? {
              name: "sku-header-extra",
              fn: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "sku-header-extra")
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["goods"])) : vue.createCommentVNode("", true),
          _cache[11] || (_cache[11] = vue.createTextVNode()),
          vue.createVNode(_component_nut_scroll_view, {
            class: "nut-sku-content",
            "scroll-y": true
          }, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "sku-select-top"),
              _cache[5] || (_cache[5] = vue.createTextVNode()),
              vue.renderSlot(_ctx.$slots, "sku-select"),
              _cache[6] || (_cache[6] = vue.createTextVNode()),
              !_ctx.getSlots("sku-select") ? (vue.openBlock(), vue.createBlock(_component_SkuSelect, {
                key: 0,
                sku: _ctx.sku,
                onSelectSku: _ctx.selectSku
              }, null, 8, ["sku", "onSelectSku"])) : vue.createCommentVNode("", true),
              _cache[7] || (_cache[7] = vue.createTextVNode()),
              vue.renderSlot(_ctx.$slots, "sku-stepper"),
              _cache[8] || (_cache[8] = vue.createTextVNode()),
              !_ctx.getSlots("sku-stepper") ? (vue.openBlock(), vue.createBlock(_component_sku_stepper, {
                key: 1,
                goods: _ctx.goods,
                "stepper-title": _ctx.stepperTitle || _ctx.translate("buyNumber"),
                "stepper-max": _ctx.stepperMax,
                "stepper-min": _ctx.stepperMin,
                "stepper-extra-text": _ctx.stepperExtraText,
                onAdd: _ctx.add,
                onReduce: _ctx.reduce,
                onChangeStepper: _ctx.changeStepper,
                onOverLimit: _ctx.stepperOverLimit
              }, null, 8, ["goods", "stepper-title", "stepper-max", "stepper-min", "stepper-extra-text", "onAdd", "onReduce", "onChangeStepper", "onOverLimit"])) : vue.createCommentVNode("", true),
              _cache[9] || (_cache[9] = vue.createTextVNode()),
              vue.renderSlot(_ctx.$slots, "sku-stepper-bottom")
            ]),
            _: 3
          }),
          _cache[12] || (_cache[12] = vue.createTextVNode()),
          vue.createVNode(_component_sku_operate, {
            "btn-extra-text": _ctx.btnExtraText,
            "btn-options": _ctx.btnOptions,
            "buy-text": _ctx.buyText || _ctx.translate("buyNow"),
            "add-cart-text": _ctx.addCartText || _ctx.translate("addToCart"),
            "confirm-text": _ctx.confirmText || _ctx.translate("confirm"),
            onClickBtnOperate: _ctx.clickBtnOperate
          }, vue.createSlots({ _: 2 }, [
            _ctx.getSlots("sku-operate") ? {
              name: "operate-btn",
              fn: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "sku-operate")
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["btn-extra-text", "btn-options", "buy-text", "add-cart-text", "confirm-text", "onClickBtnOperate"])
        ])
      ]),
      _: 3
    }, 8, ["visible", "lock-scroll", "catch-move"]);
  }
  const Sku = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c]]);
  const { create: create$b } = createComponent("card");
  const _sfc_main$c = create$b({
    components: {
      NutPrice: _sfc_main$C,
      NutTag: _sfc_main$y
    },
    props: {
      imgUrl: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      },
      price: {
        type: String,
        default: ""
      },
      vipPrice: {
        type: String,
        default: ""
      },
      shopDesc: {
        type: String,
        default: ""
      },
      delivery: {
        type: String,
        default: ""
      },
      shopName: {
        type: String,
        default: ""
      },
      isNeedPrice: {
        type: Boolean,
        default: true
      }
    }
  });
  const _hoisted_1$c = { class: "nut-card" };
  const _hoisted_2$b = { class: "nut-card__left" };
  const _hoisted_3$9 = ["src"];
  const _hoisted_4$8 = { class: "nut-card__right" };
  const _hoisted_5$5 = { class: "nut-card__right__title" };
  const _hoisted_6$3 = {
    key: 0,
    class: "nut-card__right__price"
  };
  const _hoisted_7$3 = { class: "nut-card__right__other" };
  const _hoisted_8$1 = { class: "nut-card__right__shop" };
  const _hoisted_9$1 = { class: "nut-card__right__shop__name" };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_price = vue.resolveComponent("nut-price");
    const _component_nut_tag = vue.resolveComponent("nut-tag");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$c, [
      vue.createElementVNode("div", _hoisted_2$b, [
        vue.createElementVNode("img", {
          src: _ctx.imgUrl,
          alt: ""
        }, null, 8, _hoisted_3$9)
      ]),
      _cache[7] || (_cache[7] = vue.createTextVNode()),
      vue.createElementVNode("div", _hoisted_4$8, [
        vue.createElementVNode("div", _hoisted_5$5, vue.toDisplayString(_ctx.title), 1),
        _cache[3] || (_cache[3] = vue.createTextVNode()),
        vue.renderSlot(_ctx.$slots, "prolist"),
        _cache[4] || (_cache[4] = vue.createTextVNode()),
        _ctx.isNeedPrice ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$3, [
          vue.renderSlot(_ctx.$slots, "price", {}, () => [
            vue.createVNode(_component_nut_price, { price: _ctx.price }, null, 8, ["price"])
          ]),
          _cache[0] || (_cache[0] = vue.createTextVNode()),
          vue.renderSlot(_ctx.$slots, "origin", {}, () => [
            vue.createVNode(_component_nut_price, {
              class: "nut-card__right__price__origin",
              price: _ctx.vipPrice
            }, null, 8, ["price"])
          ])
        ])) : vue.createCommentVNode("", true),
        _cache[5] || (_cache[5] = vue.createTextVNode()),
        vue.createElementVNode("div", _hoisted_7$3, [
          vue.renderSlot(_ctx.$slots, "shop-tag", {}, () => [
            vue.createVNode(_component_nut_tag, { type: "danger" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(_ctx.shopDesc), 1)
              ]),
              _: 1
            }),
            _cache[1] || (_cache[1] = vue.createTextVNode()),
            vue.createVNode(_component_nut_tag, { plain: "" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(_ctx.delivery), 1)
              ]),
              _: 1
            })
          ])
        ]),
        _cache[6] || (_cache[6] = vue.createTextVNode()),
        vue.createElementVNode("div", _hoisted_8$1, [
          vue.createElementVNode("div", _hoisted_9$1, vue.toDisplayString(_ctx.shopName), 1),
          _cache[2] || (_cache[2] = vue.createTextVNode()),
          vue.renderSlot(_ctx.$slots, "footer")
        ])
      ])
    ]);
  }
  const Card = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b]]);
  const { create: create$a } = createComponent("ecard");
  const cN$4 = "NutEcard";
  const _sfc_main$b = create$a({
    components: {
      NutInputNumber: _sfc_main$15
    },
    props: {
      chooseText: {
        type: String,
        default: ""
      },
      otherValueText: {
        type: String,
        default: ""
      },
      dataList: {
        type: Array,
        default: () => []
      },
      cardAmountMin: {
        type: Number,
        default: 1
      },
      cardAmountMax: {
        type: Number,
        default: 9999
      },
      cardBuyMin: {
        type: Number,
        default: 1
      },
      cardBuyMax: {
        type: Number,
        default: 9999
      },
      modelValue: {
        type: [Number, String],
        default: 0
      },
      placeholder: {
        type: String,
        default: ""
      },
      suffix: {
        type: String,
        default: "¥"
      }
    },
    emits: ["inputChange", "changeStep", "inputClick", "change", "update:modelValue"],
    setup(props, { emit }) {
      const translate = useLocale(cN$4);
      const currentIndex = vue.ref(null);
      const currentValue = vue.ref(null);
      const inputValue = vue.ref();
      const stepValue = vue.ref(props.cardAmountMin);
      const money = vue.ref(props.modelValue);
      const handleClick = (item, index) => {
        currentIndex.value = index;
        inputValue.value = "";
        stepValue.value = props.cardAmountMin;
        currentValue.value = item.price;
        emit("change", item);
      };
      const change = (event) => {
        let input = event.target;
        let val = input.value.replace(/[^\d]/g, "");
        inputValue.value = val;
        currentValue.value = val;
        if (Number(val) > props.cardAmountMax) {
          inputValue.value = props.cardAmountMax;
          currentValue.value = props.cardAmountMax;
        }
        if (Number(val) < props.cardAmountMin) {
          inputValue.value = props.cardAmountMin;
          currentValue.value = props.cardAmountMin;
        }
        emit("inputChange", Number(inputValue.value));
      };
      const inputClick = () => {
        currentIndex.value = "input";
        stepValue.value = props.cardAmountMin;
        emit("update:modelValue", 0);
        emit("inputClick");
      };
      const changeStep = (value) => {
        stepValue.value = value;
        emit("changeStep", stepValue.value, currentValue.value);
      };
      vue.watch(
        () => props.modelValue,
        (value) => {
          money.value = value;
        }
      );
      return {
        handleClick,
        changeStep,
        change,
        inputClick,
        stepValue,
        currentIndex,
        inputValue,
        money,
        translate
      };
    }
  });
  const _hoisted_1$b = { class: "nut-ecard" };
  const _hoisted_2$a = { class: "nut-ecard__title" };
  const _hoisted_3$8 = { class: "nut-ecard__list" };
  const _hoisted_4$7 = ["onClick"];
  const _hoisted_5$4 = { class: "nut-ecard__list__input--con" };
  const _hoisted_6$2 = ["placeholder"];
  const _hoisted_7$2 = { class: "nut-ecard__list__step" };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_input_number = vue.resolveComponent("nut-input-number");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$b, [
      vue.createElementVNode("view", _hoisted_2$a, vue.toDisplayString(_ctx.chooseText || _ctx.translate("chooseText")), 1),
      _cache[8] || (_cache[8] = vue.createTextVNode()),
      vue.createElementVNode("view", _hoisted_3$8, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.dataList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: index,
            class: vue.normalizeClass(["nut-ecard__list__item", _ctx.currentIndex == index ? "active" : ""]),
            onClick: ($event) => _ctx.handleClick(item, index)
          }, vue.toDisplayString(item.price), 11, _hoisted_4$7);
        }), 128)),
        _cache[6] || (_cache[6] = vue.createTextVNode()),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["nut-ecard__list__input", _ctx.currentIndex == "input" ? "active" : ""]),
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.inputClick && _ctx.inputClick(...args))
        }, [
          vue.createElementVNode("view", null, vue.toDisplayString(_ctx.otherValueText || _ctx.translate("otherValueText")), 1),
          _cache[4] || (_cache[4] = vue.createTextVNode()),
          vue.createElementVNode("view", _hoisted_5$4, [
            vue.withDirectives(vue.createElementVNode("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.inputValue = $event),
              type: "text",
              class: "nut-ecard-input",
              placeholder: _ctx.placeholder || _ctx.translate("placeholder"),
              onInput: _cache[1] || (_cache[1] = (...args) => _ctx.change && _ctx.change(...args))
            }, null, 40, _hoisted_6$2), [
              [vue.vModelText, _ctx.inputValue]
            ]),
            vue.createTextVNode(" " + vue.toDisplayString(_ctx.suffix), 1)
          ])
        ], 2),
        _cache[7] || (_cache[7] = vue.createTextVNode()),
        vue.createElementVNode("view", _hoisted_7$2, [
          vue.createElementVNode("view", null, vue.toDisplayString(_ctx.suffix) + vue.toDisplayString(_ctx.money), 1),
          _cache[5] || (_cache[5] = vue.createTextVNode()),
          vue.createVNode(_component_nut_input_number, {
            modelValue: _ctx.stepValue,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.stepValue = $event),
            min: _ctx.cardBuyMin,
            max: _ctx.cardBuyMax,
            onChange: _ctx.changeStep
          }, null, 8, ["modelValue", "min", "max", "onChange"])
        ])
      ])
    ]);
  }
  const Ecard = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a]]);
  const { create: create$9 } = createComponent("address-list-item");
  const cN$3 = "NutAddressList";
  const _sfc_main$a = create$9({
    components: { Del: iconsVueTaro.Del, Edit: iconsVueTaro.Edit },
    props: {
      item: {
        type: Object,
        default: {}
      }
    },
    emits: ["delIcon", "editIcon", "clickItem"],
    setup(props, { emit }) {
      const translate = useLocale(cN$3);
      const delClick = (event) => {
        emit("delIcon", event, props.item);
        event.stopPropagation();
      };
      const editClick = (event) => {
        emit("editIcon", event, props.item);
        event.stopPropagation();
      };
      const contentsClick = (event) => {
        emit("clickItem", event, props.item);
        event.stopPropagation();
      };
      return {
        delClick,
        editClick,
        contentsClick,
        translate
      };
    }
  });
  const _hoisted_1$a = { class: "nut-address-list-item__info" };
  const _hoisted_2$9 = { class: "nut-address-list-item__info-contact" };
  const _hoisted_3$7 = { class: "nut-address-list-item__info-contact-name" };
  const _hoisted_4$6 = { class: "nut-address-list-item__info-contact-tel" };
  const _hoisted_5$3 = {
    key: 0,
    class: "nut-address-list-item__info-contact-default"
  };
  const _hoisted_6$1 = { class: "nut-address-list-item__info-handle" };
  const _hoisted_7$1 = { class: "nut-address-list-item__addr" };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Del = vue.resolveComponent("Del");
    const _component_Edit = vue.resolveComponent("Edit");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: "nut-address-list-item",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.contentsClick && _ctx.contentsClick(...args))
    }, [
      vue.createElementVNode("div", _hoisted_1$a, [
        vue.createElementVNode("div", _hoisted_2$9, [
          vue.renderSlot(_ctx.$slots, "content-top", {}, () => [
            vue.createElementVNode("div", _hoisted_3$7, vue.toDisplayString(_ctx.item.addressName), 1),
            _cache[1] || (_cache[1] = vue.createTextVNode()),
            vue.createElementVNode("div", _hoisted_4$6, vue.toDisplayString(_ctx.item.phone), 1),
            _cache[2] || (_cache[2] = vue.createTextVNode()),
            _ctx.item.defaultAddress ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$3, vue.toDisplayString(_ctx.translate("default")), 1)) : vue.createCommentVNode("", true)
          ])
        ]),
        _cache[4] || (_cache[4] = vue.createTextVNode()),
        vue.createElementVNode("div", _hoisted_6$1, [
          vue.renderSlot(_ctx.$slots, "content-icon", {}, () => [
            vue.createVNode(_component_Del, {
              name: "del",
              class: "nut-address-list-item__info-handle-del",
              onClick: _ctx.delClick
            }, null, 8, ["onClick"]),
            _cache[3] || (_cache[3] = vue.createTextVNode()),
            vue.createVNode(_component_Edit, {
              name: "edit",
              class: "nut-address-list-item__info-handle-edit",
              onClick: _ctx.editClick
            }, null, 8, ["onClick"])
          ])
        ])
      ]),
      _cache[5] || (_cache[5] = vue.createTextVNode()),
      vue.createElementVNode("div", _hoisted_7$1, [
        vue.renderSlot(_ctx.$slots, "content-addr", {}, () => [
          vue.createTextVNode(vue.toDisplayString(_ctx.item.fullAddress), 1)
        ])
      ])
    ]);
  }
  const ItemContents = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9]]);
  const { create: create$8 } = createComponent("address-list-general");
  const _sfc_main$9 = create$8({
    props: {
      item: {
        type: Object,
        default: {}
      },
      longPress: {
        type: Boolean,
        default: false
      },
      swipeEdition: {
        type: Boolean,
        default: false
      }
    },
    emits: ["delIcon", "editIcon", "clickItem", "longDown", "longCopy", "longSet", "longDel", "swipeDel"],
    components: {
      ItemContents,
      NutButton: _sfc_main$1L,
      NutSwipe: _sfc_main$V
    },
    setup(props, { emit }) {
      const renderCompontent = () => {
        return vue.h(ItemContents, {
          item: props.item,
          onDelIcon(event) {
            delClick(event);
          },
          onEditIcon(event) {
            editClick(event);
          },
          onClickItem(event) {
            clickItem(event);
          }
        });
      };
      let loop = null;
      const moveRef = vue.ref(false);
      const showMaskRef = vue.ref(false);
      const delClick = (event) => {
        emit("delIcon", event, props.item);
        event.stopPropagation();
      };
      const editClick = (event) => {
        emit("editIcon", event, props.item);
        event.stopPropagation();
      };
      const clickItem = (event) => {
        if (moveRef.value) return;
        emit("clickItem", event, props.item);
        event.stopPropagation();
      };
      const delLongClick = (event) => {
        emit("longDel", event, props.item);
        event.stopPropagation();
      };
      const holdingFunc = (event) => {
        loop = 0;
        showMaskRef.value = true;
        emit("longDown", event, props.item);
      };
      const holddownstart = (event) => {
        loop = setTimeout(() => {
          holdingFunc(event);
        }, 300);
      };
      const holddownmove = () => {
        clearTimeout(loop);
      };
      const holddownend = () => {
        clearTimeout(loop);
      };
      const hideMaskClick = () => {
        showMaskRef.value = false;
      };
      const copyCLick = (event) => {
        emit("longCopy", event, props.item);
        event.stopPropagation();
      };
      const setDefault = (event) => {
        emit("longSet", event, props.item);
        event.stopPropagation();
      };
      const maskClick = (event) => {
        if (loop != 0) {
          showMaskRef.value = false;
        }
        event.stopPropagation();
        event.preventDefault();
      };
      const swipeDelClick = (event) => {
        emit("swipeDel", event, props.item);
        event.stopPropagation();
      };
      const swipestart = () => {
        moveRef.value = false;
      };
      const swipemove = () => {
        moveRef.value = true;
      };
      return {
        renderCompontent,
        showMaskRef,
        clickItem,
        editClick,
        delClick,
        delLongClick,
        holddownstart,
        holddownmove,
        holddownend,
        copyCLick,
        hideMaskClick,
        setDefault,
        maskClick,
        swipeDelClick,
        swipestart,
        swipemove
      };
    }
  });
  const _hoisted_1$9 = {
    key: 0,
    class: "nut-address-list-general"
  };
  const _hoisted_2$8 = { class: "nut-address-list-swipe" };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_button = vue.resolveComponent("nut-button");
    const _component_nut_swipe = vue.resolveComponent("nut-swipe");
    return !_ctx.swipeEdition ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$9, [
      (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.renderCompontent()), {
        onTouchstart: _ctx.holddownstart,
        onTouchend: _ctx.holddownend,
        onTouchmove: _ctx.holddownmove
      }, {
        "content-top": vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "content-info")
        ]),
        "content-icon": vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "content-icons")
        ]),
        "content-addr": vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "content-addrs")
        ]),
        _: 3
      }, 40, ["onTouchstart", "onTouchend", "onTouchmove"])),
      _cache[9] || (_cache[9] = vue.createTextVNode()),
      _ctx.longPress && _ctx.showMaskRef ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: "nut-address-list-general__mask",
        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.maskClick && _ctx.maskClick(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "longpress-all", {}, () => [
          vue.createElementVNode("div", {
            class: "nut-address-list-general__mask-copy",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.copyCLick && _ctx.copyCLick(...args))
          }, " 复制地址 "),
          _cache[7] || (_cache[7] = vue.createTextVNode()),
          vue.createElementVNode("div", {
            class: "nut-address-list-general__mask-set",
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.setDefault && _ctx.setDefault(...args))
          }, " 设置默认 "),
          _cache[8] || (_cache[8] = vue.createTextVNode()),
          vue.createElementVNode("div", {
            class: "nut-address-list-general__mask-del",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.delLongClick && _ctx.delLongClick(...args))
          }, " 删除地址 ")
        ])
      ])) : vue.createCommentVNode("", true),
      _cache[10] || (_cache[10] = vue.createTextVNode()),
      _ctx.showMaskRef ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 1,
        class: "nut-address-list__mask-bottom",
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.hideMaskClick && _ctx.hideMaskClick(...args))
      })) : vue.createCommentVNode("", true)
    ])) : (vue.openBlock(), vue.createBlock(_component_nut_swipe, { key: 1 }, {
      right: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "swipe-right-btn", {}, () => [
          vue.createVNode(_component_nut_button, {
            shape: "square",
            style: { "height": "100%" },
            type: "danger",
            onClick: _ctx.swipeDelClick
          }, {
            default: vue.withCtx(() => _cache[13] || (_cache[13] = [
              vue.createTextVNode("删除")
            ])),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("div", _hoisted_2$8, [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.renderCompontent()), {
            onTouchmove: _ctx.swipemove,
            onTouchstart: _ctx.swipestart
          }, {
            "content-top": vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "content-info")
            ]),
            "content-icon": vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "content-icons")
            ]),
            "content-addr": vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "content-addrs")
            ]),
            _: 3
          }, 40, ["onTouchmove", "onTouchstart"]))
        ]),
        _cache[14] || (_cache[14] = vue.createTextVNode())
      ]),
      _: 3
    }));
  }
  const GeneralShell = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8]]);
  const { create: create$7 } = createComponent("address-list");
  const cN$2 = "NutAddressList";
  const _sfc_main$8 = create$7({
    props: {
      data: {
        type: Array,
        default: []
      },
      longPress: {
        type: Boolean,
        default: false
      },
      swipeEdition: {
        type: Boolean,
        default: false
      },
      showBottomButton: {
        type: Boolean,
        default: true
      },
      dataOptions: {
        type: Object,
        default: {}
      }
    },
    components: {
      GeneralShell,
      NutButton: _sfc_main$1L
    },
    emits: ["delIcon", "editIcon", "clickItem", "longCopy", "longSet", "longDel", "swipeDel", "add"],
    setup(props, { emit }) {
      const translate = useLocale(cN$2);
      const dataArray = vue.ref([]);
      const dataInfo = vue.reactive({
        id: 2,
        addressName: "姓名",
        phone: "123****4567",
        defaultAddress: false,
        fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试"
      });
      const trowelData = () => {
        if (Object.keys(props.dataOptions).length > 0) {
          dataArray.value = props.data.map((item) => {
            return floatData(dataInfo, item, props.dataOptions);
          });
        }
      };
      vue.watch(
        () => props.data,
        () => trowelData(),
        { deep: true }
      );
      const clickDelIcon = (event, item) => {
        emit("delIcon", event, item);
        event.stopPropagation();
      };
      const clickEditIcon = (event, item) => {
        emit("editIcon", event, item);
        event.stopPropagation();
      };
      const clickContentItem = (event, item) => {
        emit("clickItem", event, item);
        event.stopPropagation();
      };
      const clickLongCopy = (event, item) => {
        emit("longCopy", event, item);
        event.stopPropagation();
      };
      const clickLongSet = (event, item) => {
        emit("longSet", event, item);
        event.stopPropagation();
      };
      const clickLongDel = (event, item) => {
        emit("longDel", event, item);
        event.stopPropagation();
      };
      const clickSwipeDel = (event, item) => {
        emit("swipeDel", event, item);
        event.stopPropagation();
      };
      const addAddress = (event) => {
        emit("add", event);
        event.stopPropagation();
      };
      vue.onMounted(() => {
        trowelData();
      });
      return {
        clickDelIcon,
        clickEditIcon,
        clickContentItem,
        clickLongCopy,
        clickLongSet,
        clickLongDel,
        clickSwipeDel,
        addAddress,
        dataArray,
        translate
      };
    }
  });
  const _hoisted_1$8 = { class: "nut-address-list" };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_general_shell = vue.resolveComponent("general-shell");
    const _component_nut_button = vue.resolveComponent("nut-button");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$8, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.dataArray, (item, index) => {
        return vue.openBlock(), vue.createBlock(_component_general_shell, {
          key: index,
          item,
          "long-press": _ctx.longPress,
          "swipe-edition": _ctx.swipeEdition,
          onDelIcon: _ctx.clickDelIcon,
          onEditIcon: _ctx.clickEditIcon,
          onClickItem: _ctx.clickContentItem,
          onSwipeDel: _ctx.clickSwipeDel,
          onLongCopy: _ctx.clickLongCopy,
          onLongSet: _ctx.clickLongSet,
          onLongDel: _ctx.clickLongDel
        }, vue.createSlots({
          "content-info": vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "item-infos", { item })
          ]),
          "content-icons": vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "item-icon", { item })
          ]),
          "content-addrs": vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "item-addr", { item })
          ]),
          _: 2
        }, [
          _ctx.longPress ? {
            name: "longpress-all",
            fn: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "longpress-btns", { item })
            ]),
            key: "0"
          } : void 0,
          _ctx.swipeEdition ? {
            name: "swipe-right-btn",
            fn: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "swipe-right", { item })
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["item", "long-press", "swipe-edition", "onDelIcon", "onEditIcon", "onClickItem", "onSwipeDel", "onLongCopy", "onLongSet", "onLongDel"]);
      }), 128)),
      _cache[5] || (_cache[5] = vue.createTextVNode()),
      _ctx.showBottomButton ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: "nut-address-list__bottom",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.addAddress && _ctx.addAddress(...args))
      }, [
        vue.createVNode(_component_nut_button, {
          block: "",
          type: "danger"
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString(_ctx.translate("addAddress")), 1)
          ]),
          _: 1
        })
      ])) : vue.createCommentVNode("", true)
    ]);
  }
  const AddressList = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7]]);
  const { create: create$6 } = createComponent("category");
  const _sfc_main$7 = create$6({
    props: {
      // 分类模式
      type: {
        type: String,
        default: "classify"
      },
      // 左侧导航栏
      category: {
        type: Array,
        default: () => []
      }
    },
    setup(props, { emit }) {
      const checkIndex = vue.ref(0);
      const categoryLeft = vue.ref(false);
      const getChildList = (index) => {
        checkIndex.value = index;
        emit("change", index);
      };
      return {
        getChildList,
        checkIndex,
        categoryLeft
      };
    }
  });
  const _hoisted_1$7 = { class: "nut-category" };
  const _hoisted_2$7 = { class: "nut-category__cateList" };
  const _hoisted_3$6 = { key: 0 };
  const _hoisted_4$5 = ["onClick"];
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$7, [
      vue.createElementVNode("div", _hoisted_2$7, [
        _ctx.type == "classify" || _ctx.type == "text" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$6, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.category, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              key: index,
              class: "nut-category__cateListLeft"
            }, [
              vue.createElementVNode("div", {
                class: vue.normalizeClass([_ctx.checkIndex == index ? "nut-category__cateListItemChecked" : "nut-category__cateListItem"]),
                onClick: ($event) => _ctx.getChildList(index)
              }, vue.toDisplayString(item.catName), 11, _hoisted_4$5)
            ]);
          }), 128))
        ])) : vue.createCommentVNode("", true),
        _cache[0] || (_cache[0] = vue.createTextVNode()),
        vue.renderSlot(_ctx.$slots, "default")
      ])
    ]);
  }
  const Category = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6]]);
  const { create: create$5 } = createComponent("category-pane");
  const _sfc_main$6 = create$5({
    props: {
      // 分类模式
      type: {
        type: String,
        default: "classify"
      },
      // 右侧导航数据
      categoryChild: {
        type: Array,
        default: () => []
      },
      // 模式传入自定义数据
      customCategory: {
        type: Array,
        default: () => []
      }
    },
    setup(props, { emit }) {
      const onChange = (sku) => {
        emit("onChange", sku);
      };
      return {
        onChange
      };
    }
  });
  const _hoisted_1$6 = { class: "nut-category-pane" };
  const _hoisted_2$6 = {
    key: 0,
    class: "nut-category-pane__cateListRight"
  };
  const _hoisted_3$5 = { class: "nut-category-pane__childTitle" };
  const _hoisted_4$4 = {
    key: 0,
    class: "nut-category-pane__childItemList"
  };
  const _hoisted_5$2 = ["onClick"];
  const _hoisted_6 = ["src"];
  const _hoisted_7 = { class: "nut-category-pane__skuImg" };
  const _hoisted_8 = {
    key: 1,
    class: "nut-category-pane__cateListRight"
  };
  const _hoisted_9 = { class: "nut-category-pane__childTitle" };
  const _hoisted_10 = {
    key: 0,
    class: "nut-category-pane__childItemList"
  };
  const _hoisted_11 = ["onClick"];
  const _hoisted_12 = { class: "nut-category-pane__skuName" };
  const _hoisted_13 = {
    key: 2,
    class: "nut-category-pane__selfItemList"
  };
  const _hoisted_14 = ["onClick"];
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$6, [
      _ctx.type == "classify" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$6, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.categoryChild, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("div", { key: index }, [
            vue.createElementVNode("div", _hoisted_3$5, vue.toDisplayString(item == null ? void 0 : item.catName), 1),
            _cache[1] || (_cache[1] = vue.createTextVNode()),
            (item == null ? void 0 : item.catType) == 1 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$4, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.childCateList, (sku, key) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key,
                  class: "nut-category-pane__childItem",
                  onClick: ($event) => _ctx.onChange(sku)
                }, [
                  vue.createElementVNode("img", {
                    class: "nut-category-pane__childImg",
                    src: sku.backImg
                  }, null, 8, _hoisted_6),
                  _cache[0] || (_cache[0] = vue.createTextVNode()),
                  vue.createElementVNode("div", _hoisted_7, vue.toDisplayString(sku == null ? void 0 : sku.catName), 1)
                ], 8, _hoisted_5$2);
              }), 128))
            ])) : vue.createCommentVNode("", true)
          ]);
        }), 128))
      ])) : vue.createCommentVNode("", true),
      _cache[3] || (_cache[3] = vue.createTextVNode()),
      _ctx.type == "text" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.categoryChild, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("div", { key: index }, [
            vue.createElementVNode("div", _hoisted_9, vue.toDisplayString(item == null ? void 0 : item.catName), 1),
            _cache[2] || (_cache[2] = vue.createTextVNode()),
            (item == null ? void 0 : item.catType) == 1 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.childCateList, (sku, key) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key,
                  class: "nut-category-pane__childItem",
                  onClick: ($event) => _ctx.onChange(sku)
                }, [
                  vue.createElementVNode("div", _hoisted_12, vue.toDisplayString(sku == null ? void 0 : sku.catName), 1)
                ], 8, _hoisted_11);
              }), 128))
            ])) : vue.createCommentVNode("", true)
          ]);
        }), 128))
      ])) : vue.createCommentVNode("", true),
      _cache[4] || (_cache[4] = vue.createTextVNode()),
      _ctx.type == "custom" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_13, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.customCategory, (sku, key) => {
          return vue.openBlock(), vue.createElementBlock("div", {
            key,
            class: "nut-category-pane__skuName",
            onClick: ($event) => _ctx.onChange(sku)
          }, vue.toDisplayString(sku == null ? void 0 : sku.catName), 9, _hoisted_14);
        }), 128))
      ])) : vue.createCommentVNode("", true)
    ]);
  }
  const CategoryPane = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5]]);
  const { create: create$4 } = createComponent("comment-header");
  const _sfc_main$5 = create$4({
    components: {
      NutRate: _sfc_main$11
    },
    props: {
      type: {
        type: String,
        default: "default"
        // default，complex
      },
      info: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ["handleClick"],
    setup(props, { emit }) {
      const handleClick = () => {
        emit("handleClick");
      };
      return { handleClick };
    }
  });
  const _hoisted_1$5 = { class: "nut-comment-header__user" };
  const _hoisted_2$5 = { class: "nut-comment-header__user-avter" };
  const _hoisted_3$4 = ["src"];
  const _hoisted_4$3 = { class: "nut-comment-header__user-score" };
  const _hoisted_5$1 = {
    key: 0,
    class: "nut-comment-header__time"
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_rate = vue.resolveComponent("nut-rate");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      _ctx.info ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "nut-comment-header",
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        vue.createElementVNode("view", _hoisted_1$5, [
          vue.createElementVNode("view", _hoisted_2$5, [
            _ctx.info.avatar ? (vue.openBlock(), vue.createElementBlock("img", {
              key: 0,
              src: _ctx.info.avatar
            }, null, 8, _hoisted_3$4)) : vue.createCommentVNode("", true)
          ]),
          _cache[6] || (_cache[6] = vue.createTextVNode()),
          _ctx.type == "default" ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: vue.normalizeClass([`nut-comment-header__user-${_ctx.type}`])
          }, [
            vue.createElementVNode("view", {
              class: vue.normalizeClass([`nut-comment-header__user-${_ctx.type}-name`])
            }, [
              vue.createElementVNode("span", null, vue.toDisplayString(_ctx.info.nickName), 1),
              _cache[3] || (_cache[3] = vue.createTextVNode()),
              vue.renderSlot(_ctx.$slots, "labels")
            ], 2),
            _cache[4] || (_cache[4] = vue.createTextVNode()),
            vue.createElementVNode("view", _hoisted_4$3, [
              vue.createVNode(_component_nut_rate, {
                modelValue: _ctx.info.score,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.info.score = $event),
                size: "12",
                spacing: "5",
                readonly: "",
                onChange: _ctx.handleClick
              }, null, 8, ["modelValue", "onChange"])
            ])
          ], 2)) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: vue.normalizeClass([`nut-comment-header__user-${_ctx.type}`])
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass([`nut-comment-header__user-${_ctx.type}-name`])
            }, vue.toDisplayString(_ctx.info.nickName), 3),
            _cache[5] || (_cache[5] = vue.createTextVNode()),
            vue.renderSlot(_ctx.$slots, "labels")
          ], 2))
        ]),
        _cache[7] || (_cache[7] = vue.createTextVNode()),
        _ctx.info.time ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5$1, vue.toDisplayString(_ctx.info.time), 1)) : vue.createCommentVNode("", true)
      ])) : vue.createCommentVNode("", true),
      _cache[10] || (_cache[10] = vue.createTextVNode()),
      _ctx.type == "complex" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: vue.normalizeClass([`nut-comment-header__${_ctx.type}-score`])
      }, [
        vue.createVNode(_component_nut_rate, {
          modelValue: _ctx.info.score,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.info.score = $event),
          size: "12",
          spacing: "3",
          readonly: ""
        }, null, 8, ["modelValue"]),
        _cache[8] || (_cache[8] = vue.createTextVNode()),
        vue.createElementVNode("i", {
          class: vue.normalizeClass([`nut-comment-header__${_ctx.type}-score-i`])
        }, null, 2),
        _cache[9] || (_cache[9] = vue.createTextVNode()),
        vue.createElementVNode("view", {
          class: vue.normalizeClass([`nut-comment-header__${_ctx.type}-score-size`])
        }, vue.toDisplayString(_ctx.info.size), 3)
      ], 2)) : vue.createCommentVNode("", true)
    ]);
  }
  const CommentHeader = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4]]);
  const { create: create$3 } = createComponent("comment-images");
  const _sfc_main$4 = create$3({
    props: {
      type: {
        type: String,
        default: "one"
        // one multi
      },
      videos: {
        type: Array,
        default: () => []
      },
      images: {
        type: Array,
        default: () => []
      }
    },
    components: { Right: iconsVueTaro.Right },
    emits: ["click", "clickImages"],
    setup(props, { emit }) {
      const isShowImage = vue.ref(false);
      const initIndex2 = vue.ref(1);
      const totalImages = vue.ref([]);
      vue.watch(
        () => [props.videos, props.images],
        (value) => {
          if (value[0].length > 0) {
            value[0].forEach((el) => {
              el.type = "video";
            });
          }
          totalImages.value = value[0].concat(value[1]);
        },
        { deep: true }
      );
      vue.onMounted(() => {
        if (props.videos.length > 0) {
          props.videos.forEach((el) => {
            el.type = "video";
          });
        }
        totalImages.value = props.videos.concat(props.images);
      });
      const showImages = (type, index) => {
        const { videos, images } = props;
        const i = type == "img" ? index - videos.length : index;
        emit("clickImages", {
          type,
          index: i,
          value: type == "img" ? images[i] : videos[i]
        });
      };
      return { isShowImage, initIndex: initIndex2, showImages, totalImages };
    }
  });
  const _hoisted_1$4 = ["onClick"];
  const _hoisted_2$4 = ["src"];
  const _hoisted_3$3 = ["onClick"];
  const _hoisted_4$2 = ["src"];
  const _hoisted_5 = {
    key: 0,
    class: "nut-comment-images__mask"
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Right = vue.resolveComponent("Right");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(`nut-comment-images nut-comment-images--${_ctx.type}`)
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.videos, (itV, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          key: itV.id,
          class: "nut-comment-images__item nut-comment-images__item--video",
          onClick: ($event) => _ctx.showImages("video", index)
        }, [
          vue.createElementVNode("img", {
            src: itV.mainUrl
          }, null, 8, _hoisted_2$4),
          _cache[0] || (_cache[0] = vue.createTextVNode()),
          _cache[1] || (_cache[1] = vue.createElementVNode("view", { class: "nut-comment-images__play" }, null, -1))
        ], 8, _hoisted_1$4);
      }), 128)),
      _cache[4] || (_cache[4] = vue.createTextVNode()),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.images, (itI, index) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: index }, [
          _ctx.type == "multi" && _ctx.videos.length + index < 9 || _ctx.type != "multi" ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "nut-comment-images__item nut-comment-images__item--imgbox",
            onClick: ($event) => _ctx.showImages("img", index + _ctx.videos.length)
          }, [
            vue.createElementVNode("img", {
              src: itI.smallImgUrl ? itI.smallImgUrl : itI.imgUrl
            }, null, 8, _hoisted_4$2),
            _cache[3] || (_cache[3] = vue.createTextVNode()),
            _ctx.type == "multi" && _ctx.totalImages.length > 9 && _ctx.videos.length + index > 7 ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_5, [
              vue.createElementVNode("span", null, "共 " + vue.toDisplayString(_ctx.totalImages.length) + " 张", 1),
              _cache[2] || (_cache[2] = vue.createTextVNode()),
              vue.createVNode(_component_Right, { size: "12px" })
            ])) : vue.createCommentVNode("", true)
          ], 8, _hoisted_3$3)) : vue.createCommentVNode("", true)
        ], 64);
      }), 128))
    ], 2);
  }
  const CommentImages = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3]]);
  const { create: create$2 } = createComponent("comment-bottom");
  const cN$1 = "NutComment";
  const _sfc_main$3 = create$2({
    props: {
      type: {
        type: String,
        default: "base"
        // simple，base，complex
      },
      info: {
        type: Object,
        default: () => ({})
      },
      operation: {
        type: Array,
        default: ["replay", "like", "more"]
      }
    },
    components: { Fabulous: iconsVueTaro.Fabulous, Comment: iconsVueTaro.Comment, MoreX: iconsVueTaro.MoreX },
    emits: ["clickOperate", "handleClick"],
    setup(props, { emit }) {
      const translate = useLocale(cN$1);
      const showPopver = vue.ref(false);
      const mergeOp = vue.ref([]);
      vue.onMounted(() => {
        const deOp = ["replay", "like", "more"];
        if (props.operation) {
          props.operation.forEach((name) => {
            if (deOp.includes(name)) {
              mergeOp.value.push(name);
            }
          });
        }
      });
      const operate = (type) => {
        if (type == "more") {
          showPopver.value = !showPopver.value;
        }
        emit("clickOperate", type);
      };
      const handleClick = () => {
        emit("handleClick");
      };
      return { showPopver, operate, mergeOp, handleClick, translate };
    }
  });
  const _hoisted_1$3 = { class: "nut-comment-bottom" };
  const _hoisted_2$3 = {
    key: 0,
    style: { "display": "inline" }
  };
  const _hoisted_3$2 = { class: "nut-comment-bottom__cpx" };
  const _hoisted_4$1 = ["onClick"];
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Fabulous = vue.resolveComponent("Fabulous");
    const _component_Comment = vue.resolveComponent("Comment");
    const _component_MoreX = vue.resolveComponent("MoreX");
    return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$3, [
      vue.createElementVNode("view", {
        class: "nut-comment-bottom__lable",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        _ctx.type != "complex" ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$3, vue.toDisplayString(_ctx.info.size), 1)) : vue.createCommentVNode("", true)
      ]),
      _cache[5] || (_cache[5] = vue.createTextVNode()),
      vue.createElementVNode("view", _hoisted_3$2, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.mergeOp, (name, i) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: i,
            class: vue.normalizeClass(["nut-comment-bottom__cpx-item", `nut-comment-bottom__cpx-item--${name}`]),
            onClick: ($event) => _ctx.operate(name)
          }, [
            name != "more" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              vue.createElementVNode("span", null, vue.toDisplayString(_ctx.info[name]), 1),
              _cache[2] || (_cache[2] = vue.createTextVNode()),
              name == "like" ? (vue.openBlock(), vue.createBlock(_component_Fabulous, { key: 0 })) : (vue.openBlock(), vue.createBlock(_component_Comment, { key: 1 }))
            ], 64)) : vue.createCommentVNode("", true),
            _cache[4] || (_cache[4] = vue.createTextVNode()),
            name == "more" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              vue.createVNode(_component_MoreX),
              _cache[3] || (_cache[3] = vue.createTextVNode()),
              _ctx.showPopver ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "nut-comment-bottom__cpx-item-popover",
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.operate("popover"))
              }, vue.toDisplayString(_ctx.translate("complaintsText")), 1)) : vue.createCommentVNode("", true)
            ], 64)) : vue.createCommentVNode("", true)
          ], 10, _hoisted_4$1);
        }), 128))
      ])
    ]);
  }
  const CommentBottom = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
  const { create: create$1 } = createComponent("comment");
  const cN = "NutComment";
  const _sfc_main$2 = create$1({
    props: {
      headerType: {
        type: String,
        default: "default"
        // 头部展示风格 default，complex
      },
      imagesRows: {
        type: String,
        default: "one"
        // 'one'  'multi'
      },
      ellipsis: {
        type: [String, Number, Boolean],
        default: false
      },
      videos: {
        type: Array,
        default: () => []
      },
      images: {
        type: Array,
        default: () => []
      },
      info: {
        type: Object,
        default: () => ({})
      },
      follow: {
        type: Object,
        default: () => ({})
      },
      labels: {
        type: Function,
        default: () => ""
      },
      operation: {
        type: Array,
        default: ["replay", "like", "more"]
      }
    },
    components: {
      CommentHeader,
      CommentImages,
      CommentBottom,
      Right: iconsVueTaro.Right
    },
    emits: ["click", "clickImages", "clickOperate"],
    setup(props, { emit }) {
      const translate = useLocale(cN);
      const conEllipsis = vue.computed(() => {
        if (props.ellipsis) return props.ellipsis;
        return props.headerType == "complex" ? 6 : 2;
      });
      const clickOperate = (t) => {
        emit("clickOperate", t);
      };
      const handleClick = () => {
        emit("click", props.info);
      };
      const clickImages = (value) => {
        emit("clickImages", value);
      };
      return { conEllipsis, clickOperate, handleClick, clickImages, translate };
    }
  });
  const _hoisted_1$2 = {
    key: 0,
    class: "nut-comment"
  };
  const _hoisted_2$2 = ["innerHTML"];
  const _hoisted_3$1 = { class: "nut-comment__follow-title" };
  const _hoisted_4 = { class: "nut-comment__follow-com" };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_comment_header = vue.resolveComponent("comment-header");
    const _component_comment_images = vue.resolveComponent("comment-images");
    const _component_Right = vue.resolveComponent("Right");
    const _component_comment_bottom = vue.resolveComponent("comment-bottom");
    return _ctx.info && Object.keys(_ctx.info) ? (vue.openBlock(), vue.createElementBlock("view", _hoisted_1$2, [
      vue.createVNode(_component_comment_header, {
        type: _ctx.headerType,
        info: _ctx.info,
        labels: _ctx.labels,
        onHandleClick: _ctx.handleClick
      }, {
        labels: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "comment-labels")
        ]),
        _: 3
      }, 8, ["type", "info", "labels", "onHandleClick"]),
      _cache[5] || (_cache[5] = vue.createTextVNode()),
      vue.renderSlot(_ctx.$slots, "feature"),
      _cache[6] || (_cache[6] = vue.createTextVNode()),
      vue.createElementVNode("view", {
        class: "nut-comment__main",
        style: vue.normalizeStyle(`-webkit-line-clamp:${_ctx.conEllipsis}`),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
        innerHTML: _ctx.info.content
      }, null, 12, _hoisted_2$2),
      _cache[7] || (_cache[7] = vue.createTextVNode()),
      vue.createVNode(_component_comment_images, {
        images: _ctx.images,
        videos: _ctx.videos,
        type: _ctx.imagesRows,
        onClickImages: _ctx.clickImages
      }, null, 8, ["images", "videos", "type", "onClickImages"]),
      _cache[8] || (_cache[8] = vue.createTextVNode()),
      _ctx.follow && _ctx.follow.days > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "nut-comment__follow",
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        vue.createElementVNode("view", _hoisted_3$1, vue.toDisplayString(_ctx.translate("additionalReview", _ctx.follow.days)), 1),
        _cache[3] || (_cache[3] = vue.createTextVNode()),
        vue.createElementVNode("view", _hoisted_4, vue.toDisplayString(_ctx.follow.content), 1),
        _cache[4] || (_cache[4] = vue.createTextVNode()),
        _ctx.follow.images && _ctx.follow.images.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "nut-comment__follow-img",
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.clickImages(_ctx.follow.images))
        }, [
          vue.createTextVNode(vue.toDisplayString(_ctx.translate("additionalImages", _ctx.follow.images.length)) + " ", 1),
          vue.createVNode(_component_Right, { size: "12px" })
        ])) : vue.createCommentVNode("", true)
      ])) : vue.createCommentVNode("", true),
      _cache[9] || (_cache[9] = vue.createTextVNode()),
      vue.createVNode(_component_comment_bottom, {
        type: _ctx.headerType,
        info: _ctx.info,
        operation: _ctx.operation,
        onClickOperate: _ctx.clickOperate,
        onHandleClick: _ctx.handleClick
      }, null, 8, ["type", "info", "operation", "onClickOperate", "onHandleClick"]),
      _cache[10] || (_cache[10] = vue.createTextVNode()),
      vue.renderSlot(_ctx.$slots, "comment-shop-reply")
    ])) : vue.createCommentVNode("", true);
  }
  const Comment = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
  const _hoisted_1$1 = { class: "nut-invoice" };
  const _hoisted_2$1 = {
    key: 0,
    class: "nut-invoice__submit"
  };
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, {
    name: "NutInvoice"
  }), {
    __name: "invoice.taro",
    props: {
      data: { default: () => [] },
      formValue: { default: () => {
      } },
      submit: { type: Boolean, default: true }
    },
    emits: ["submit", "scrollBottom"],
    setup(__props, { emit: __emit }) {
      const emit = __emit;
      const formRef = vue.ref();
      const submitFun = () => {
        formRef.value.validate().then(({ valid, errors }) => {
          emit("submit", valid, errors);
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", _hoisted_1$1, [
          vue.createVNode(vue.unref(_sfc_main$X), {
            ref_key: "formRef",
            ref: formRef,
            "model-value": _ctx.formValue
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.data, (item, index) => {
                return vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$W), {
                  key: index,
                  label: item.label,
                  required: item.required,
                  rules: item.rules,
                  prop: item.formItemProp
                }, {
                  default: vue.withCtx(() => [
                    item.type === "radio" ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$12), {
                      key: 0,
                      modelValue: _ctx.formValue[item.formItemProp],
                      "onUpdate:modelValue": ($event) => _ctx.formValue[item.formItemProp] = $event
                    }, {
                      default: vue.withCtx(() => [
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.radioLabel, (radioItem, radioIndex) => {
                          return vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$13), {
                            key: radioIndex,
                            shape: "button",
                            label: radioItem.label
                          }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode(vue.toDisplayString(radioItem.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["label"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])) : (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$14), {
                      key: 1,
                      modelValue: _ctx.formValue[item.formItemProp],
                      "onUpdate:modelValue": ($event) => _ctx.formValue[item.formItemProp] = $event,
                      class: "nut-input-text",
                      placeholder: item.placeholder,
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                  ]),
                  _: 2
                }, 1032, ["label", "required", "rules", "prop"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["model-value"]),
          _cache[1] || (_cache[1] = vue.createTextVNode()),
          _ctx.submit ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$1, [
            vue.createVNode(vue.unref(_sfc_main$1L), {
              type: "primary",
              block: "",
              onClick: submitFun
            }, {
              default: vue.withCtx(() => _cache[0] || (_cache[0] = [
                vue.createTextVNode("提交审批")
              ])),
              _: 1
            })
          ])) : vue.createCommentVNode("", true)
        ]);
      };
    }
  }));
  withInstall(_sfc_main$1);
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
      NutButton: _sfc_main$1L,
      IconFont: iconsVueTaro.IconFont
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
      const state = vue.reactive({
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
      const drawImage = vue.ref({
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
      const showCanvas2D = vue.computed(() => {
        return Taro.getEnv() === "ALIPAY" && parseInt(Taro.SDKVersion.replace(/\./g, "")) >= 270 || systemInfo.SDKVersion && parseInt(systemInfo.SDKVersion.replace(/\./g, "")) >= 290 && Taro.getEnv() === "WEAPP";
      });
      const showPixelRatio = Taro.getEnv() === "WEB" || showCanvas2D.value;
      const pixelRatio = showPixelRatio ? systemInfo.pixelRatio : 1;
      state.displayWidth = systemInfo.windowWidth * pixelRatio;
      state.displayHeight = systemInfo.windowHeight * pixelRatio;
      state.cropperWidth = state.cropperHeight = state.displayWidth - props.space * pixelRatio * 2;
      Taro.useReady(() => {
        if (showCanvas2D.value) {
          const { canvasId } = canvasAll;
          Taro.createSelectorQuery().select(`#${canvasId}`).node(({ node: canvas }) => {
            canvas.width = state.displayWidth;
            canvas.height = state.displayHeight;
            canvasAll.cropperCanvas = canvas;
          }).exec();
        }
      });
      vue.onMounted(() => {
        const { canvasId } = canvasAll;
        canvasAll.cropperCanvasContext = Taro.createCanvasContext(canvasId);
      });
      const isAngle = vue.computed(() => {
        return state.angle === 90 || state.angle === 270;
      });
      const highlightStyle = vue.computed(() => {
        const { cropperWidth } = state;
        const width = cropperWidth / pixelRatio + "px";
        const height = width;
        return {
          width,
          height
        };
      });
      const canvasStyle = vue.computed(() => {
        const { displayWidth, displayHeight } = state;
        return {
          width: `${displayWidth / pixelRatio}px`,
          height: `${displayHeight / pixelRatio}px`
        };
      });
      const cutCanvasStyle = vue.computed(() => {
        const { displayWidth, displayHeight, cropperWidth } = state;
        return {
          top: `${(displayHeight / pixelRatio - cropperWidth / pixelRatio) / 2}px`,
          left: `${(displayWidth / pixelRatio - cropperWidth / pixelRatio) / 2}px`,
          width: `${cropperWidth / pixelRatio}px`,
          height: `${cropperWidth / pixelRatio}px`
        };
      });
      const maxMoveX = vue.computed(() => {
        const { displayWidth, scale, cropperWidth } = state;
        const { height } = drawImage.value;
        if (isAngle.value) {
          return Math.max(0, (height * scale - cropperWidth) / 2);
        }
        return Math.max(0, (displayWidth * scale - cropperWidth) / 2);
      });
      const maxMoveY = vue.computed(() => {
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
      vue.watch(
        () => state.scale,
        () => {
          draw();
        }
      );
      vue.watch(
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
      vue.watch(
        () => state.moveX,
        () => {
          draw();
        }
      );
      vue.watch(
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
      return __spreadProps(__spreadValues(__spreadValues({}, vue.toRefs(state)), vue.toRefs(canvasAll)), {
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
    const _component_nut_button = vue.resolveComponent("nut-button");
    const _component_IconFont = vue.resolveComponent("IconFont");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["nut-avatar-cropper taro", { round: _ctx.shape === "round" }])
      }, [
        vue.renderSlot(_ctx.$slots, "default"),
        _cache[9] || (_cache[9] = vue.createTextVNode()),
        vue.createElementVNode("view", {
          class: "nut-avatar-cropper__edit-text",
          onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.chooseImage && _ctx.chooseImage(...args), ["stop"]))
        }, vue.toDisplayString(_ctx.editText), 1)
      ], 2),
      _cache[15] || (_cache[15] = vue.createTextVNode()),
      vue.withDirectives(vue.createElementVNode("view", _hoisted_1, [
        vue.createElementVNode("canvas", {
          id: _ctx.canvasId,
          "canvas-id": _ctx.canvasId,
          type: _ctx.showCanvas2D ? "2d" : void 0,
          style: vue.normalizeStyle(_ctx.canvasStyle),
          class: "nut-cropper-popup__canvas"
        }, null, 12, _hoisted_2),
        _cache[13] || (_cache[13] = vue.createTextVNode()),
        vue.createElementVNode("view", {
          class: "nut-cropper-popup__highlight",
          onTouchstart: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
          onTouchmove: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
          onTouchend: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
          onTouchcancel: _cache[4] || (_cache[4] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
        }, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["highlight", { highlight__round: _ctx.shape === "round" }]),
            style: vue.normalizeStyle(_ctx.highlightStyle)
          }, null, 6)
        ], 32),
        _cache[14] || (_cache[14] = vue.createTextVNode()),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["nut-cropper-popup__toolbar", [_ctx.toolbarPosition]])
        }, [
          _ctx.$slots.toolbar ? vue.renderSlot(_ctx.$slots, "toolbar", { key: 0 }) : (vue.openBlock(), vue.createElementBlock("view", _hoisted_3, [
            vue.createElementVNode("view", {
              class: "nut-cropper-popup__toolbar-item",
              onClick: _cache[5] || (_cache[5] = ($event) => _ctx.cancel())
            }, [
              vue.createVNode(_component_nut_button, { type: "danger" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.cancelText), 1)
                ]),
                _: 1
              })
            ]),
            _cache[10] || (_cache[10] = vue.createTextVNode()),
            vue.createElementVNode("view", {
              class: "nut-cropper-popup__toolbar-item",
              onClick: _cache[6] || (_cache[6] = (...args) => _ctx.reset && _ctx.reset(...args))
            }, [
              vue.createVNode(_component_IconFont, {
                name: "refresh2",
                color: "#fff"
              })
            ]),
            _cache[11] || (_cache[11] = vue.createTextVNode()),
            vue.createElementVNode("view", {
              class: "nut-cropper-popup__toolbar-item",
              onClick: _cache[7] || (_cache[7] = (...args) => _ctx.rotate && _ctx.rotate(...args))
            }, [
              vue.createVNode(_component_IconFont, {
                name: "retweet",
                color: "#fff"
              })
            ]),
            _cache[12] || (_cache[12] = vue.createTextVNode()),
            vue.createElementVNode("view", {
              class: "nut-cropper-popup__toolbar-item",
              onClick: _cache[8] || (_cache[8] = (...args) => _ctx.confirm && _ctx.confirm(...args))
            }, [
              vue.createVNode(_component_nut_button, { type: "success" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.confirmText), 1)
                ]),
                _: 1
              })
            ])
          ]))
        ], 2)
      ], 512), [
        [vue.vShow, _ctx.visible]
      ])
    ], 64);
  }
  const AvatarCropper = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  function install(app) {
    const packages = [_sfc_main$1L, _sfc_main$1K, _sfc_main$1J, _sfc_main$1I, Popup, _sfc_main$1G, _sfc_main$1F, _sfc_main$1E, _sfc_main$1D, Sticky, _sfc_main$1B, _sfc_main$1A, _sfc_main$1z, _sfc_main$1y, _sfc_main$1x, FixedNav, Menu, MenuItem, _sfc_main$1s, _sfc_main$1q, Elevator, Pagination, Tabs, TabPane, _sfc_main$1l, SideNavbar, SideNavbarItem, SubSideNavbar, Range, Searchbar, Cascader, Calendar, _sfc_main$1b, _sfc_main$1a, _sfc_main$19, DatePicker, _sfc_main$15, _sfc_main$14, _sfc_main$13, _sfc_main$12, _sfc_main$11, Picker, ShortPassword, _sfc_main$$, Uploader, NumberKeyboard, _sfc_main$X, _sfc_main$W, _sfc_main$V, _sfc_main$U, ActionSheet, _sfc_main$S, Drag, Dialog, Notify, _sfc_main$O, Toast, Avatar, AvatarGroup, List, _sfc_main$_, _sfc_main$J, Noticebar, _sfc_main$H, _sfc_main$G, _sfc_main$F, Swiper, SwiperItem, _sfc_main$C, ImagePreview, Countup, _sfc_main$z, _sfc_main$1r, _sfc_main$y, Popover, _sfc_main$w, _sfc_main$v, _sfc_main$u, Table, _sfc_main$s, Ellipsis, _sfc_main$q, _sfc_main$p, Tour, Address, Barrage, Signature, TimeSelect, TimePannel, TimeDetail, Sku, Card, Ecard, AddressList, Category, CategoryPane, Comment, _sfc_main$1, AvatarCropper];
    packages.forEach((item) => {
      if (item.install) {
        app.use(item);
      } else if (item.name) {
        app.component(item.name, item);
      }
    });
  }
  const version = "4.3.13";
  const taro_build = { install, version, Locale };
  exports2.ActionSheet = ActionSheet;
  exports2.Address = Address;
  exports2.AddressList = AddressList;
  exports2.Animate = _sfc_main$s;
  exports2.Avatar = Avatar;
  exports2.AvatarCropper = AvatarCropper;
  exports2.AvatarGroup = AvatarGroup;
  exports2.Backtop = _sfc_main$S;
  exports2.Badge = _sfc_main$1r;
  exports2.Barrage = Barrage;
  exports2.Button = _sfc_main$1L;
  exports2.Calendar = Calendar;
  exports2.CalendarCard = _sfc_main$1b;
  exports2.Card = Card;
  exports2.Cascader = Cascader;
  exports2.Category = Category;
  exports2.CategoryPane = CategoryPane;
  exports2.Cell = _sfc_main$1K;
  exports2.CellGroup = _sfc_main$1J;
  exports2.Checkbox = _sfc_main$1a;
  exports2.CheckboxGroup = _sfc_main$19;
  exports2.CircleProgress = _sfc_main$J;
  exports2.Col = _sfc_main$1E;
  exports2.Collapse = _sfc_main$v;
  exports2.CollapseItem = _sfc_main$u;
  exports2.Comment = Comment;
  exports2.ConfigProvider = _sfc_main$1G;
  exports2.Countdown = _sfc_main$z;
  exports2.Countup = Countup;
  exports2.DatePicker = DatePicker;
  exports2.Dialog = Dialog;
  exports2.Divider = _sfc_main$1B;
  exports2.Drag = Drag;
  exports2.Ecard = Ecard;
  exports2.Elevator = Elevator;
  exports2.Ellipsis = Ellipsis;
  exports2.Empty = _sfc_main$H;
  exports2.FixedNav = FixedNav;
  exports2.Form = _sfc_main$X;
  exports2.FormItem = _sfc_main$W;
  exports2.Grid = _sfc_main$1A;
  exports2.GridItem = _sfc_main$1z;
  exports2.ImagePreview = ImagePreview;
  exports2.Indicator = _sfc_main$1l;
  exports2.Input = _sfc_main$14;
  exports2.InputNumber = _sfc_main$15;
  exports2.Invoice = _sfc_main$1;
  exports2.Layout = _sfc_main$1F;
  exports2.List = List;
  exports2.Locale = Locale;
  exports2.Menu = Menu;
  exports2.MenuItem = MenuItem;
  exports2.Navbar = _sfc_main$1x;
  exports2.Noticebar = Noticebar;
  exports2.Notify = Notify;
  exports2.NumberKeyboard = NumberKeyboard;
  exports2.Overlay = _sfc_main$1I;
  exports2.Pagination = Pagination;
  exports2.Picker = Picker;
  exports2.Popover = Popover;
  exports2.Popup = Popup;
  exports2.Price = _sfc_main$C;
  exports2.Progress = _sfc_main$_;
  exports2.Radio = _sfc_main$13;
  exports2.RadioGroup = _sfc_main$12;
  exports2.Range = Range;
  exports2.Rate = _sfc_main$11;
  exports2.Row = _sfc_main$1D;
  exports2.Searchbar = Searchbar;
  exports2.ShortPassword = ShortPassword;
  exports2.SideNavbar = SideNavbar;
  exports2.SideNavbarItem = SideNavbarItem;
  exports2.Signature = Signature;
  exports2.Skeleton = _sfc_main$w;
  exports2.Sku = Sku;
  exports2.Space = _sfc_main$1y;
  exports2.Step = _sfc_main$F;
  exports2.Steps = _sfc_main$G;
  exports2.Sticky = Sticky;
  exports2.SubSideNavbar = SubSideNavbar;
  exports2.Swipe = _sfc_main$V;
  exports2.SwipeGroup = _sfc_main$U;
  exports2.Swiper = Swiper;
  exports2.SwiperItem = SwiperItem;
  exports2.Switch = _sfc_main$O;
  exports2.TabPane = TabPane;
  exports2.Tabbar = _sfc_main$1s;
  exports2.TabbarItem = _sfc_main$1q;
  exports2.Table = Table;
  exports2.Tabs = Tabs;
  exports2.Tag = _sfc_main$y;
  exports2.Textarea = _sfc_main$$;
  exports2.TimeDetail = TimeDetail;
  exports2.TimePannel = TimePannel;
  exports2.TimeSelect = TimeSelect;
  exports2.Toast = Toast;
  exports2.Tour = Tour;
  exports2.TrendArrow = _sfc_main$p;
  exports2.Uploader = Uploader;
  exports2.Watermark = _sfc_main$q;
  exports2.default = taro_build;
  exports2.install = install;
  exports2.version = version;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
