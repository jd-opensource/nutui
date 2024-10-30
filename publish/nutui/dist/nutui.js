var pl = Object.defineProperty, ml = Object.defineProperties;
var hl = Object.getOwnPropertyDescriptors;
var Dt = Object.getOwnPropertySymbols;
var Tn = Object.prototype.hasOwnProperty, _n = Object.prototype.propertyIsEnumerable;
var vt = Math.pow, Wt = (e, t, n) => t in e ? pl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, G = (e, t) => {
  for (var n in t || (t = {}))
    Tn.call(t, n) && Wt(e, n, t[n]);
  if (Dt)
    for (var n of Dt(t))
      _n.call(t, n) && Wt(e, n, t[n]);
  return e;
}, pe = (e, t) => ml(e, hl(t));
var It = (e) => typeof e == "symbol" ? e : e + "", Yt = (e, t) => {
  var n = {};
  for (var o in e)
    Tn.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Dt)
    for (var o of Dt(e))
      t.indexOf(o) < 0 && _n.call(e, o) && (n[o] = e[o]);
  return n;
};
var H = (e, t, n) => Wt(e, typeof t != "symbol" ? t + "" : t, n);
var Ue = (e, t, n) => new Promise((o, l) => {
  var s = (i) => {
    try {
      r(n.next(i));
    } catch (f) {
      l(f);
    }
  }, a = (i) => {
    try {
      r(n.throw(i));
    } catch (f) {
      l(f);
    }
  }, r = (i) => i.done ? o(i.value) : Promise.resolve(i.value).then(s, a);
  r((n = n.apply(e, t)).next());
});
import { reactive as he, ref as z, defineComponent as ve, useSlots as St, h as Te, openBlock as c, createBlock as J, computed as S, createElementBlock as d, normalizeClass as B, normalizeStyle as V, createElementVNode as g, createTextVNode as ge, unref as ce, createCommentVNode as N, renderSlot as T, provide as Re, inject as Ve, getCurrentInstance as ot, onUnmounted as Xe, Fragment as Z, toDisplayString as P, watchEffect as ct, Transition as Jt, withCtx as te, withDirectives as Ie, withModifiers as De, vShow as Me, createApp as vl, watch as Q, toRefs as we, resolveComponent as X, Teleport as Kn, mergeProps as dt, createVNode as ee, onMounted as $e, onBeforeUnmount as Qt, Comment as gl, Text as yl, nextTick as _e, renderList as ie, normalizeProps as bl, guardReactiveProps as $l, resolveDynamicComponent as ze, onActivated as Tt, toRef as Je, createSlots as Ct, onBeforeMount as Un, readonly as Nn, onDeactivated as _t, render as xt, vModelText as wl } from "vue";
class Xn {
}
let kl = class extends Xn {
  constructor() {
    super(...arguments);
    H(this, "save", "保存");
    H(this, "confirm", "确认");
    H(this, "cancel", "取消");
    H(this, "done", "完成");
    H(this, "noData", "暂无数据");
    H(this, "placeholder", "请输入");
    H(this, "select", "请选择");
    H(this, "video", {
      errorTip: "视频加载失败",
      clickRetry: "点击重试"
    });
    H(this, "fixednav", {
      activeText: "收起导航",
      unActiveText: "快速导航"
    });
    H(this, "pagination", {
      prev: "上一页",
      next: "下一页"
    });
    H(this, "calendaritem", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日期选择",
      monthTitle: (n, o) => `${n}年${o}月`,
      today: "今天"
    });
    H(this, "calendarcard", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日期选择",
      monthTitle: (n, o) => `${n}年${o}月`,
      today: "今天"
    });
    H(this, "shortpassword", {
      title: "请输入密码",
      desc: "您使用了虚拟资产，请进行验证",
      tips: "忘记密码"
    });
    H(this, "uploader", {
      ready: "准备完成",
      readyUpload: "准备上传",
      waitingUpload: "等待上传",
      uploading: "上传中",
      success: "上传成功",
      error: "上传失败"
    });
    H(this, "countdown", {
      day: "天",
      hour: "时",
      minute: "分",
      second: "秒"
    });
    H(this, "address", {
      selectRegion: "请选择所在地区",
      deliveryTo: "配送至",
      chooseAnotherAddress: "选择其他地址"
    });
    H(this, "signature", {
      reSign: "重签",
      unSupportTpl: "对不起，当前浏览器不支持Canvas，无法使用本控件！"
    });
    H(this, "ecard", {
      chooseText: "请选择电子卡面值",
      otherValueText: "其他面值",
      placeholder: "请输入1-5000整数"
    });
    H(this, "timeselect", {
      pickupTime: "取件时间"
    });
    H(this, "sku", {
      buyNow: "立即购买",
      buyNumber: "购买数量",
      addToCart: "加入购物车"
    });
    H(this, "skuheader", {
      skuId: "商品编号"
    });
    H(this, "addresslist", {
      addAddress: "新建地址",
      default: "默认"
    });
    H(this, "comment", {
      complaintsText: "我要投诉",
      additionalReview: (n) => `购买${n}天后追评`,
      additionalImages: (n) => `${n}张追评图片`
    });
    H(this, "infiniteloading", {
      loading: "加载中...",
      pullTxt: "松开刷新",
      loadMoreTxt: "哎呀，这里是底部了啦"
    });
    H(this, "datepicker", {
      year: "年",
      month: "月",
      day: "日",
      hour: "时",
      min: "分",
      seconds: "秒"
    });
    H(this, "audiooperate", {
      back: "倒退",
      start: "开始",
      pause: "暂停",
      forward: "快进",
      mute: "静音"
    });
    H(this, "pullrefresh", {
      pulling: "下拉刷新",
      loosing: "释放刷新",
      loading: "加载中...",
      complete: "刷新成功"
    });
  }
};
class Cl extends Xn {
  constructor() {
    super(...arguments);
    H(this, "save", "Save");
    H(this, "confirm", "Confirm");
    H(this, "cancel", "Cancel");
    H(this, "done", "Done");
    H(this, "noData", "No Data");
    H(this, "placeholder", "Placeholder");
    H(this, "select", "Select");
    H(this, "video", {
      errorTip: "Error Tip",
      clickRetry: "Click Retry"
    });
    H(this, "fixednav", {
      activeText: "Close Nav",
      unActiveText: "Open Nav"
    });
    H(this, "pagination", {
      prev: "Previous",
      next: "Next"
    });
    H(this, "calendaritem", {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: (n, o) => `${n}/${o}`,
      today: "Today"
    });
    H(this, "calendarcard", {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: (n, o) => `${n}/${o}`,
      today: "Today"
    });
    H(this, "shortpassword", {
      title: "Please input a password",
      desc: "Verify",
      tips: "Forget password"
    });
    H(this, "uploader", {
      ready: "Ready",
      readyUpload: "Ready to upload",
      waitingUpload: "Waiting for upload",
      uploading: "Uploading",
      success: "Upload successful",
      error: "Upload failed"
    });
    H(this, "countdown", {
      day: " Day ",
      hour: " Hour ",
      minute: " Minute ",
      second: " Second "
    });
    H(this, "address", {
      selectRegion: "Select Region",
      deliveryTo: "Delivery To",
      chooseAnotherAddress: "Choose Another Address"
    });
    H(this, "signature", {
      reSign: "Re Sign",
      unSupportTpl: "Sorry, the current browser doesn't support canvas, so we can't use this control!"
    });
    H(this, "ecard", {
      chooseText: "Select",
      otherValueText: "Other Value",
      placeholder: "Placeholder"
    });
    H(this, "timeselect", {
      pickupTime: "Pickup Time"
    });
    H(this, "sku", {
      buyNow: "Buy Now",
      buyNumber: "Buy Number",
      addToCart: "Add to Cart"
    });
    H(this, "skuheader", {
      skuId: "Sku Number"
    });
    H(this, "addresslist", {
      addAddress: "Add New Address",
      default: "default"
    });
    H(this, "comment", {
      complaintsText: "I have a complaint",
      additionalReview: (n) => `Review after ${n} days of purchase`,
      additionalImages: (n) => `There are ${n} follow-up comments`
    });
    H(this, "infiniteloading", {
      loading: "Loading...",
      pullTxt: "Loose to refresh",
      loadMoreTxt: "Oops, this is the bottom"
    });
    H(this, "datepicker", {
      year: "Year",
      month: "Month",
      day: "Day",
      hour: "Hour",
      min: "Minute",
      seconds: "Second"
    });
    H(this, "audiooperate", {
      back: "Back",
      start: "Start",
      pause: "Pause",
      forward: "Forward",
      mute: "Mute"
    });
    H(this, "pullrefresh", {
      pulling: "Pull to refresh...",
      loosing: "Loose to refresh...",
      loading: "Loading...",
      complete: "Refresh successfully"
    });
  }
}
const en = (e, {
  args: t = [],
  done: n,
  canceled: o
}) => {
  if (e) {
    const l = e(...t);
    Gn(l) ? l.then((s) => {
      s ? n(s) : o && o();
    }).catch(() => {
    }) : l ? n() : o && o();
  } else
    n();
}, Kt = (e) => {
  if (e === null)
    return "null";
  const t = typeof e;
  if (t === "undefined" || t === "string")
    return t;
  switch (toString.call(e)) {
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
      return e.nodeType !== void 0 ? e.nodeType == 3 ? /\S/.test(e.nodeValue) ? "textnode" : "whitespace" : "element" : "object";
    default:
      return "unknow";
  }
}, qn = Array.isArray, Sl = (e) => e instanceof Date, Et = (e) => typeof e == "function", Tl = (e) => typeof e == "string", ut = (e) => e !== null && typeof e == "object", Gn = (e) => ut(e) && Et(e.then) && Et(e.catch), _l = document, Dn = _l.body, Ut = (e, t) => {
  try {
    return t.split(".").reduce((n, o) => n[o], e);
  } catch (n) {
    return "";
  }
}, Nl = (e, t, n) => {
  const o = Object.assign({}, e), l = Object.assign({}, n);
  return Object.keys(t).length > 0 ? (Object.keys(o).forEach((s) => {
    if (Object.prototype.hasOwnProperty.call(l, s)) {
      const a = Kt(l[s]);
      a == "function" && (o[s] = l[s](t)), a == "string" && (o[s] = t[l[s]]);
    } else
      t[s] && (o[s] = t[s]);
  }), o) : e;
}, Zn = (e, t) => (Object.keys(t).forEach((n) => {
  const o = e[n], l = t[n];
  ut(o) && ut(l) ? Zn(o, l) : e[n] = l;
}), e);
function Dl(e, t = 2) {
  return Object.is(parseFloat(e), NaN) ? console.log(`传入的值：${e}不是一个数字`) : (e = parseFloat(e), (Math.round((e + Number.EPSILON) * Math.pow(10, t)) / Math.pow(10, t)).toFixed(t));
}
function ft(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && e.stopPropagation();
}
const Ze = (e, t = 2) => {
  for (e += ""; e.length < t; )
    e = "0" + e;
  return e.toString();
}, Ee = (e, t, n) => Math.min(Math.max(e, t), n), Jn = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, Bt = he({
  "zh-CN": new kl(),
  "en-US": new Cl()
});
class Qn {
  static languages() {
    return Bt[this.currentLang.value];
  }
  static use(t, n) {
    n && (Bt[t] = new n()), this.currentLang.value = t;
  }
  static merge(t, n) {
    n && (Bt[t] ? Zn(Bt[t], n) : this.use(t, n));
  }
}
H(Qn, "currentLang", z("zh-CN"));
const Il = /* @__PURE__ */ ve({
  __name: "IconFont",
  props: {
    name: { type: String, default: "" },
    size: { type: [String, Number], default: "" },
    width: { type: [String, Number], default: "" },
    height: { type: [String, Number], default: "" },
    classPrefix: { type: String, default: "nut-icon" },
    fontClassName: { type: String, default: "nutui-iconfont" },
    color: { type: String, default: "" },
    tag: { type: String, default: "i" }
  },
  setup(e) {
    var t;
    const n = e, o = "nut-icon", l = St(), s = () => n.name ? n.name.indexOf("/") !== -1 : !1, a = (p) => {
      if (p)
        return isNaN(Number(p)) ? String(p) : p + "px";
    }, r = s();
    let i = Te(
      r ? "img" : n.tag,
      {
        class: r ? `${o}__img` : `${n.fontClassName} ${o} ${n.classPrefix}-${n.name}`,
        style: {
          color: n.color,
          fontSize: a(n.size),
          width: a(n.width || n.size),
          height: a(n.height || n.size)
        },
        src: r ? n.name : ""
      },
      (t = l.default) == null ? void 0 : t.call(l)
    );
    const f = () => i;
    return (p, y) => (c(), J(f));
  }
});
function Bl(e) {
  return e.name = "IconFont", e.install = (t) => {
    t.component("IconFont", e);
  }, e;
}
Bl(Il);
const F = (e) => ve({
  props: {
    class: { type: String, default: "" },
    name: { type: String, default: e },
    color: { type: String, default: "" },
    width: { type: [String, Number], default: "" },
    height: { type: [String, Number], default: "" }
  },
  setup(t) {
    const n = (s) => {
      if (s)
        return isNaN(Number(s)) ? String(s) : s + "px";
    }, o = S(() => {
      const s = "nut-icon";
      return {
        [t.class]: t.class,
        [s]: !0,
        [s + "-" + t.name]: t.name
      };
    }), l = S(() => {
      const s = {};
      return s.height = n(t.height), s.width = n(t.width), s.color = t.color, s;
    });
    return { classes: o, style: l };
  }
}), be = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
F("add");
F("addfollow");
F("arrow-down");
const Ml = F("arrow-down2"), Ll = /* @__PURE__ */ g("path", {
  d: "M1741.19 227.497a121.654 121.654 0 1 1 127.858 206.812L1292.65 790.27a182.482 182.482 0 0 1-191.727 0L524.646 434.31a121.654 121.654 0 1 1 127.859-206.812l544.403 335.887c181.387-111.8 362.773-223.965 544.282-335.887",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Pl = [
  Ll
];
function Al(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, Pl, 6);
}
const El = /* @__PURE__ */ be(Ml, [["render", Al]]);
F("arrow-right");
F("arrow-right2");
F("arrow-up");
const zl = F("arrow-up2"), Vl = /* @__PURE__ */ g("path", {
  d: "M623.406 815.479A129.722 129.722 0 1 1 487.068 594.95C691.9 468.083 896.73 341.993 1101.691 215.125a194.583 194.583 0 0 1 204.442 0l614.494 379.567a129.722 129.722 0 1 1-136.338 220.657l-580.506-358.292-580.377 358.422",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Hl = [
  Vl
];
function Ol(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, Hl, 6);
}
const Rl = /* @__PURE__ */ be(zl, [["render", Ol]]);
F("ask");
F("ask2");
F("cart");
F("cart2");
F("category");
const Fl = F("check-checked"), Wl = /* @__PURE__ */ g("path", {
  d: "M510.613 2.837C229.793 2.837.032 232.598.032 513.418S229.793 1024 510.613 1024s510.582-229.762 510.582-510.582S794.27 2.837 510.613 2.837zm0 794.238c-156.01 0-283.656-127.646-283.656-283.657s127.645-283.656 283.656-283.656S794.27 357.407 794.27 513.418 666.624 797.075 510.613 797.075z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Yl = /* @__PURE__ */ g("path", {
  d: "M382.968 513.418a127.645 127.645 0 1 0 255.29 0 127.645 127.645 0 1 0-255.29 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function jl(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1032 1024",
    role: "presentation"
  }, [
    Wl,
    ge(","),
    Yl
  ], 6);
}
const Kl = /* @__PURE__ */ be(Fl, [["render", jl]]), Ul = F("check-disabled"), Xl = /* @__PURE__ */ g("path", {
  d: "M506.467 0C227.962 0 .094 227.868.094 506.374s227.868 506.373 506.373 506.373 506.374-227.868 506.374-506.373S787.786 0 506.467 0zm202.55 571.077H306.73c-45.01 0-67.516-22.506-67.516-67.517 0-45.01 22.505-67.516 67.516-67.516h402.286c45.01 0 67.516 22.505 67.516 67.516 0 45.011-22.505 67.517-67.516 67.517z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ql = [
  Xl
];
function Gl(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ql, 6);
}
const Zl = /* @__PURE__ */ be(Ul, [["render", Gl]]), Jl = F("check-normal"), Ql = /* @__PURE__ */ g("path", {
  d: "M512 1024c-136.533 0-264.533-54.044-361.244-150.756C54.044 776.534 0 648.534 0 512c0-136.533 54.044-264.533 150.756-361.244C247.466 54.044 375.466 0 512 0c136.533 0 264.533 54.044 361.244 150.756C969.956 247.466 1024 375.466 1024 512s-54.044 264.533-150.756 361.244C776.534 969.956 648.534 1024 512 1024zm0-938.667c-113.778 0-221.867 45.511-301.511 125.156S85.333 398.222 85.333 512s45.511 221.867 125.156 301.511S398.222 938.667 512 938.667s221.867-45.511 301.511-125.156S938.667 625.778 938.667 512 893.156 290.133 813.51 210.489 625.778 85.333 512 85.333z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), xl = [
  Ql
];
function es(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, xl, 6);
}
const xn = /* @__PURE__ */ be(Jl, [["render", es]]), ts = F("Check"), ns = /* @__PURE__ */ g("path", {
  d: "M998.4 245.029c-219.429 153.6-398.629 332.8-552.229 552.228-40.228 58.514-128 54.857-164.571-3.657-69.486-106.057-149.943-186.514-256-256-51.2-32.914-18.286-113.371 40.229-98.743C182.857 460.8 274.286 508.343 358.4 585.143c157.257-190.172 358.4-340.114 588.8-435.2 62.171-25.6 106.057 58.514 51.2 95.086",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), os = [
  ns
];
function ls(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, os, 6);
}
const eo = /* @__PURE__ */ be(ts, [["render", ls]]), ss = F("checked"), as = /* @__PURE__ */ g("path", {
  d: "M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm281.6 369.778C779.378 381.156 600.178 500.622 472.178 691.2c0 0 0 2.844-2.845 2.844-8.533 5.69-48.355 36.978-88.177-8.533-39.823-51.2-62.578-99.555-142.223-142.222-2.844 0-2.844-2.845-2.844-2.845-8.533-11.377-39.822-56.888 19.911-56.888 45.511 0 91.022 11.377 162.133 73.955 5.69 5.689 14.223 5.689 17.067 0C469.333 517.69 608.711 366.933 768 318.578c0 0 19.911-2.845 31.289 14.222 5.689 11.378 11.378 22.756-5.689 36.978z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), rs = [
  as
];
function is(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, rs, 6);
}
const to = /* @__PURE__ */ be(ss, [["render", is]]), us = F("checklist"), cs = /* @__PURE__ */ g("path", {
  d: "M159.289 500.622c62.578 0 125.155 17.067 221.867 102.4 8.533 5.69 19.91 5.69 25.6 0 48.355-54.044 238.933-261.689 455.11-329.955 0 0 28.445-5.69 42.667 19.91 8.534 17.067 19.911 34.134-5.689 54.045-22.755 17.067-264.533 179.2-440.888 440.89l-2.845 2.844c-11.378 8.533-68.267 51.2-119.467-14.223-56.888-71.11-85.333-139.377-196.266-196.266-2.845 0-2.845-2.845-5.69-5.69-11.377-11.377-54.044-73.955 25.6-73.955z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ds = [
  cs
];
function fs(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ds, 6);
}
const ps = /* @__PURE__ */ be(us, [["render", fs]]), ms = F("circle-close"), hs = /* @__PURE__ */ g("path", {
  d: "M511.492 73.063a438.425 438.425 0 0 1 310.545 748.953 439.16 439.16 0 1 1-621.09-621.073A435.695 435.695 0 0 1 511.492 73.046m0-73.063C267.49.018 57.468 172.408 9.87 411.717-37.713 651.042 90.39 890.658 315.823 984.03c225.45 93.355 485.444 14.472 621.005-188.416 135.543-202.906 108.885-473.293-63.659-645.82A509.645 509.645 0 0 0 511.492.002zm-175.7 635.495 299.673-299.674c12.049-12.049 24.115-12.049 36.164 0l15.496 15.497c12.05 12.066 12.05 24.115 0 36.18L387.47 687.122c-12.066 12.05-24.115 12.05-36.181 0l-15.497-15.496c-12.049-12.066-12.049-24.115 0-36.182zm0-284.177 15.496-15.497c12.066-12.049 24.115-12.049 36.18 0l299.64 299.674c12.05 12.049 12.05 24.098 0 36.164l-15.496 15.496c-12.05 12.05-24.115 12.05-36.182 0L335.808 387.465c-12.049-12.05-12.049-24.098 0-36.164z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), vs = [
  hs
];
function gs(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, vs, 6);
}
const tn = /* @__PURE__ */ be(ms, [["render", gs]]);
F("clock");
F("close-little");
const ys = F("close"), bs = /* @__PURE__ */ g("path", {
  d: "M981.577 1024c-11.703 0-23.406-2.926-32.183-11.703L13.166 76.07c-14.629-17.555-14.629-46.812 0-64.366 17.554-14.629 46.811-14.629 64.365 0L1013.76 947.93c17.554 17.555 17.554 43.886 0 61.44-8.777 11.703-20.48 14.629-32.183 14.629zm-936.228 0c-11.703 0-23.406-2.926-32.183-11.703-17.555-17.554-17.555-43.886 0-61.44L949.394 14.63c17.555-17.555 43.886-17.555 61.44 0 17.555 17.554 17.555 43.885 0 61.44L74.606 1012.297C68.754 1021.074 57.05 1024 45.349 1024z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), $s = [
  bs
];
function ws(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1026 1024",
    role: "presentation"
  }, $s, 6);
}
const zt = /* @__PURE__ */ be(ys, [["render", ws]]), ks = F("comment"), Cs = /* @__PURE__ */ g("path", {
  d: "M760.415 876.089H259.793c-132.741 0-242.726-109.985-242.726-242.726V242.726C17.067 109.986 127.052 0 259.793 0h504.414c132.741 0 242.726 109.985 242.726 242.726v394.43c-3.792 132.74-109.985 238.933-246.518 238.933zM259.793 113.778c-72.06 0-128.949 56.889-128.949 128.948v394.43c0 72.059 56.89 128.948 128.949 128.948h504.414c68.267 0 128.949-56.89 128.949-128.948v-394.43c0-72.06-56.89-128.948-128.949-128.948H259.793zm56.888 887.466c-15.17 0-30.34-3.792-41.718-15.17-22.756-22.755-22.756-56.889 0-79.644l109.985-109.986c22.756-22.755 56.889-22.755 79.645 0s22.755 56.89 0 79.645L354.607 986.074c-7.585 7.585-22.755 15.17-37.926 15.17zm193.423-398.222c-45.511 0-91.023-22.755-117.57-56.889-18.964-26.548-15.171-60.681 7.585-79.644 26.548-18.963 60.681-15.17 79.644 7.585 15.17 18.963 45.511 18.963 56.889 0 18.963-22.755 56.889-30.34 79.644-7.585s30.341 56.889 7.585 79.644c-22.755 37.926-68.266 56.89-113.777 56.89z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ss = [
  Cs
];
function Ts(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ss, 6);
}
const _s = /* @__PURE__ */ be(ks, [["render", Ts]]);
F("date");
const Ns = F("del"), Ds = /* @__PURE__ */ g("path", {
  d: "M668.444 1024H355.556c-142.223 0-256-113.778-256-256V170.667h824.888V768c0 142.222-113.777 256-256 256zM184.89 256v512c0 93.867 76.8 170.667 170.667 170.667h312.888c93.867 0 170.667-76.8 170.667-170.667V256H184.89zm753.778 0H85.333c-22.755 0-42.666-19.911-42.666-42.667s19.91-42.666 42.666-42.666h853.334c22.755 0 42.666 19.91 42.666 42.666S961.423 256 938.667 256zM625.777 85.333H398.223c-22.755 0-42.666-19.91-42.666-42.666S375.466 0 398.222 0h227.556c22.755 0 42.666 19.911 42.666 42.667s-19.91 42.666-42.666 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Is = [
  Ds
];
function Bs(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Is, 6);
}
const no = /* @__PURE__ */ be(Ns, [["render", Bs]]);
F("del2");
F("dongdong");
F("dou-arrow-up");
const Ms = F("down-arrow"), Ls = /* @__PURE__ */ g("path", {
  d: "M128 349.867C93.867 332.8 34.133 341.333 8.533 384-8.533 418.133 0 477.867 42.667 503.467 179.2 588.8 315.733 665.6 443.733 750.933c42.667 25.6 93.867 25.6 136.534 0C716.8 665.6 853.333 588.8 981.333 503.467c42.667-25.6 51.2-76.8 25.6-119.467s-76.8-51.2-119.466-25.6C768 435.2 640 512 512 588.8 384 512 256 435.2 128 349.867",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ps = [
  Ls
];
function As(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ps, 6);
}
const oo = /* @__PURE__ */ be(Ms, [["render", As]]);
F("download");
F("dshop");
const Es = F("edit"), zs = /* @__PURE__ */ g("path", {
  d: "M285.479 992.97H108.606c-27.927 0-55.854-12.412-77.576-31.03C9.31 940.217 0 915.393 0 884.363l3.103-155.152c0-24.824 9.31-46.545 27.927-65.164L626.812 65.164c83.782-83.782 220.315-83.782 307.2 0 83.782 83.781 83.782 223.418 0 307.2l-605.09 601.988c-12.413 12.412-27.928 18.618-43.443 18.618zM781.964 93.09c-31.03 0-65.164 12.413-89.988 37.237L96.194 729.212 93.09 884.364c0 9.309 6.206 15.515 15.515 15.515h161.358l598.884-595.782c49.649-49.649 49.649-127.224 0-173.77l-3.103-3.103c-21.72-21.721-52.751-34.133-83.781-34.133zm-201.946 78.508 65.816-65.847L882.812 342.73l-65.846 65.784zM946.424 992.97H217.212c-24.824 0-46.545-21.722-46.545-46.546s21.72-46.545 46.545-46.545h729.212c24.824 0 46.546 21.721 46.546 46.545s-21.722 46.546-46.546 46.546z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Vs = [
  zs
];
function Hs(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Vs, 6);
}
const Os = /* @__PURE__ */ be(Es, [["render", Hs]]);
F("eye");
const Rs = F("fabulous"), Fs = /* @__PURE__ */ g("path", {
  d: "M584.06 1024H318.577C144.118 1024 0 883.674 0 705.422s140.326-318.578 318.578-318.578v113.778c-113.778 0-204.8 91.022-204.8 204.8s91.022 204.8 204.8 204.8h265.481V1024zm56.888 0h-53.096c-208.593 0-379.26-170.667-379.26-383.052 0-83.437 26.549-163.081 75.852-231.348l3.793-3.793c15.17-22.755 30.34-60.681 45.511-121.363l7.585-34.133c7.586-18.963 15.17-41.718 18.963-68.267C386.844 22.756 470.281 0 519.586 0c117.57 0 178.251 106.193 178.251 212.385v7.585c0 7.586-3.793 18.963-3.793 37.926C876.09 257.896 1024 405.807 1024 587.852v53.096C1024 853.333 853.333 1024 640.948 1024zM519.585 113.778c-30.34 0-41.718 53.096-49.304 87.23-3.792 34.133-11.377 60.68-15.17 83.436l-7.585 34.134c-11.378 45.51-34.133 113.778-60.682 155.496l-7.585 3.793A269.274 269.274 0 0 0 322.37 644.74c0 147.91 121.363 269.274 269.274 269.274h53.097c147.91 0 269.274-121.363 269.274-269.274v-53.097c0-117.57-98.608-216.177-216.178-216.177h-56.889c-18.963-3.793-37.926-15.17-49.304-30.341-11.377-15.17-15.17-37.926-15.17-56.889 7.585-41.718 11.378-64.474 11.378-75.852v-3.792c-3.793 0-3.793-94.815-68.267-94.815z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ws = [
  Fs
];
function Ys(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1061 1024",
    role: "presentation"
  }, Ws, 6);
}
const js = /* @__PURE__ */ be(Rs, [["render", Ys]]), Ks = F("failure"), Us = /* @__PURE__ */ g("path", {
  d: "M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267zm111.502 282.169c13.654-13.654 34.134-13.654 47.787 0 11.378 11.377 13.653 31.857 2.275 45.51l-2.275 2.276-111.502 111.502 111.502 111.503c13.653 13.653 13.653 34.133 0 47.786-13.653 13.654-34.133 13.654-47.787 0L512 557.511 400.498 669.013c-11.378 11.378-31.858 13.654-45.511 2.276l-2.276-2.276c-11.378-11.377-13.653-31.857-2.275-45.51l2.275-2.276 111.502-111.503-111.502-111.502c-13.653-13.653-13.653-34.133 0-47.786s34.133-13.654 47.787 0L512 461.938l111.502-111.502z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Xs = [
  Us
];
function qs(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Xs, 6);
}
const lo = /* @__PURE__ */ be(Ks, [["render", qs]]);
F("find");
F("follow");
F("footprint");
F("github");
F("heart-fill-n");
F("heart-fill");
F("heart-fill1");
F("heart-fill2");
F("heart-fill3");
F("heart-n");
F("heart");
F("heart1");
F("heart2");
F("home");
F("horizontal-n");
F("horizontal");
const Gs = F("image-error"), Zs = /* @__PURE__ */ g("path", {
  d: "M696.43 465.25c40.61 0 73.53-32.72 73.53-73.09s-32.96-73.08-73.53-73.08-73.54 32.72-73.54 73.08 32.92 73.09 73.54 73.09zM535.74 650.62l-273.61-259.4a56.19 56.19 0 0 0-15.36 11.58l-114 119.63-6-222.77c-.73-26.82 20.84-49.41 47.67-50.14l201.77-5.44 47.34-50-250.43 6.75C119 202.33 76.33 247.17 77.78 301l7.32 271.4 4.5 166.78C91.06 793 136.05 835.47 190.2 834l176-4.75 12-.32 47.34-50 116.18-122.64z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Js = /* @__PURE__ */ g("path", {
  d: "m861.71 214.8-242.83-33.86-55.09 41.46L855 263a49.05 49.05 0 0 1 41.79 55.13l-54.33 389.59-120.87-159.05A59.86 59.86 0 0 0 638.06 537l-44 33.08 65.07 86.15L603.84 698l-79.57 60.1-54.92 41.48 34.17 4.76 270.73 37.76a97.55 97.55 0 0 0 109.88-79.6 22.37 22.37 0 0 0 .65-3.44l60.53-434.16c7.44-53.32-29.95-102.62-83.6-110.1z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function Qs(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    Zs,
    ge(","),
    Js
  ], 6);
}
const xs = /* @__PURE__ */ be(Gs, [["render", Qs]]), ea = F("image"), ta = /* @__PURE__ */ g("path", {
  d: "M853.161 892.55H362.595l-209.433-.414a18.5 18.5 0 0 1-1.813-.092c-24.849-2.485-47.825-14.06-64.696-32.595-16.991-18.665-26.35-42.855-26.35-68.112V264.626c0-55.808 45.404-101.211 101.212-101.211H853.16c55.808 0 101.21 45.403 101.21 101.211v225.513c0 .275-.006.552-.018.826-.022.494-1.972 51.723 15.481 85.462 4.717 9.119 1.148 20.335-7.97 25.053-9.117 4.714-20.335 1.15-25.053-7.97-21.3-41.177-19.845-97.643-19.619-103.74V264.627c0-35.307-28.724-64.031-64.03-64.031H161.515c-35.308 0-64.032 28.724-64.032 64.031v526.711c0 32.755 24.321 59.958 56.718 63.62l208.431.412h490.53c35.306 0 64.03-28.725 64.03-64.032l-.382-93.677c-.105-1.75-1.587-19.548-19.55-42.5a9.548 9.548 0 0 1-.147-.19l-21.712-28.489-117.227-155.119c-.416-.55-38.995-50.852-86.272-45.534-38.335 4.315-75.955 45.164-108.79 118.132-17.615 39.141-34.65 68.269-52.082 89.046-17.607 20.986-35.68 33.52-55.251 38.317-43.423 10.638-81.05-18.995-120.887-50.373l-5.057-3.98c-46.555-36.578-68.75-28.224-158.33 59.602-7.33 7.188-19.1 7.071-26.289-.26-7.187-7.33-7.07-19.1.26-26.287 46.659-45.746 77.544-72.727 107.086-84.283 33.358-13.048 64.275-6.267 100.242 21.994l5.093 4.008c33.923 26.72 63.22 49.795 89.029 43.467 25.618-6.279 53.3-42.114 82.28-106.509 39.14-86.976 85.838-134.027 138.797-139.849 68.454-7.515 117.824 57.405 119.892 60.172l117.122 154.98 21.6 28.344c26.277 33.631 27.334 61.639 27.367 64.725l.001.128.384 94.06c.001 55.884-45.4 101.287-101.209 101.287z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), na = /* @__PURE__ */ g("path", {
  d: "M312.328 446.968c-42.325 0-76.759-34.434-76.759-76.76s34.434-76.759 76.76-76.759 76.759 34.435 76.759 76.76-34.434 76.759-76.76 76.759zm0-116.34c-21.824 0-39.579 17.756-39.579 39.58s17.755 39.58 39.58 39.58 39.579-17.756 39.579-39.58-17.755-39.58-39.58-39.58z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function oa(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    ta,
    ge(","),
    na
  ], 6);
}
const la = /* @__PURE__ */ be(ea, [["render", oa]]);
F("issue");
F("JD");
F("jdl");
F("JIMI40");
const sa = F("joy-smile"), aa = /* @__PURE__ */ g("path", {
  d: "M2185.74 479.429a117.992 117.992 0 1 0-162.829-170.852c-284.772 271.204-732.314 271.204-1017.087 0A118.05 118.05 0 0 0 842.996 479.43c375.98 358.045 966.705 358.045 1342.744 0",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ra = [
  aa
];
function ia(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3072 1024",
    role: "presentation"
  }, ra, 6);
}
const ua = /* @__PURE__ */ be(sa, [["render", ia]]), ca = F("left"), da = /* @__PURE__ */ g("path", {
  d: "M642.973 1005.542 321.912 587.098a123.278 123.278 0 0 1 0-150.17l321.06-418.443a47.182 47.182 0 0 1 74.83 57.422l-321.088 418.47a28.994 28.994 0 0 0 0 35.3l321.088 418.47a47.155 47.155 0 0 1-74.83 57.395",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), fa = [
  da
];
function pa(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, fa, 6);
}
const nn = /* @__PURE__ */ be(ca, [["render", pa]]), ma = F("link"), ha = /* @__PURE__ */ g("path", {
  d: "M313.034 1004.045c-66.848 0-124.402-24.156-170.798-70.577l-40.854-40.829C54.96 846.218 28.966 783.097 30.83 714.411c3.702-66.85 31.56-131.808 79.819-180.12l137.4-137.373c14.86-14.861 40.855-14.861 55.69 0 14.86 14.861 16.725 38.99 0 55.69l-137.348 137.4a187.47 187.47 0 0 0-55.69 126.24c-1.864 46.422 14.835 89.115 46.396 120.675l40.855 40.855c31.56 31.56 74.253 48.286 120.674 46.421 46.421-1.838 92.843-22.291 126.24-55.69l137.4-137.4c14.862-14.86 40.856-14.86 55.69 0 14.862 14.862 14.862 40.856 0 55.69l-137.4 137.427c-48.285 48.259-113.27 76.117-180.118 79.82a5.645 5.645 0 0 0-7.405 0zm475.294-382.477c-11.133 0-18.563-3.702-27.832-12.997-14.86-14.861-14.86-40.855 0-55.69l115.082-115.108a187.47 187.47 0 0 0 55.716-126.267c1.838-46.395-14.861-89.114-46.421-120.674l-40.855-40.855c-64.985-64.959-176.364-61.257-246.915 9.294L478.266 278.108c-14.835 14.835-40.829 14.835-55.69 0-14.86-14.861-14.86-40.855 0-55.716l118.81-118.81C643.524 1.444 803.163-2.232 899.734 94.287l40.829 40.855c46.421 46.421 72.415 109.541 70.55 178.228-3.702 66.85-31.56 131.807-79.819 180.093L816.186 608.571c-7.43 7.43-18.563 11.133-27.858 12.997zm-332.327-1.864c-11.16 0-18.564-3.702-27.832-12.997-14.888-14.835-14.888-40.829 0-55.69l148.506-148.532c14.861-14.862 40.855-14.862 55.69 0 14.861 14.86 14.861 40.854 0 55.69L483.832 606.706c-7.404 7.43-18.563 11.159-27.831 12.997z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), va = [
  ha
];
function ga(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, va, 6);
}
const ya = /* @__PURE__ */ be(ma, [["render", ga]]), ba = F("loading"), $a = /* @__PURE__ */ g("path", {
  d: "M784 902.4c9.6 19.2 6.4 41.6-12.8 54.4-19.2 9.6-41.6 3.2-51.2-12.8-9.6-19.2-6.4-41.6 12.8-54.4 16-12.8 38.4-8 51.2 12.8zM550.4 984c0 22.4-16 38.4-38.4 38.4s-38.4-16-38.4-38.4v-24c0-22.4 19.2-38.4 41.6-38.4 19.2 0 35.2 16 38.4 38.4v25.6h-3.2zm-240-43.2c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-16-51.2l28.8-51.2c9.6-19.2 35.2-25.6 54.4-16s25.6 35.2 12.8 54.4l-25.6 48zM121.6 784c-19.2 9.6-41.6 3.2-54.4-16-9.6-19.2-6.4-41.6 12.8-54.4l76.8-44.8c19.2-9.6 41.6-3.2 54.4 16 9.6 19.2 3.2 41.6-16 54.4L121.6 784zM38.4 552C16 552 0 536 0 513.6s16-38.4 38.4-38.4H160c22.4 0 38.4 19.2 38.4 38.4 0 22.4-16 38.4-38.4 38.4H38.4zm44.8-241.6c-19.2-9.6-25.6-35.2-16-51.2 9.6-19.2 35.2-25.6 54.4-16L256 320c19.2 9.6 25.6 35.2 16 54.4s-35.2 25.6-54.4 16l-134.4-80zm160-185.6 92.8 160c9.6 19.2 35.2 25.6 54.4 12.8s25.6-35.2 12.8-54.4l-92.8-160C297.6 64 275.2 60.8 256 70.4c-16 12.8-22.4 33.6-12.8 54.4zM473.6 40c0-22.4 16-38.4 38.4-38.4s38.4 19.2 38.4 38.4v184c0 22.4-19.2 38.4-38.4 38.4-22.4 0-38.4-19.2-38.4-38.4V40zm240 43.2c9.6-19.2 35.2-25.6 54.4-16 19.2 9.6 25.6 35.2 16 51.2l-92.8 160c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-12.8-54.4l89.6-156.8zm188.8 160-160 92.8c-19.2 9.6-25.6 35.2-16 54.4 12.8 19.2 35.2 25.6 54.4 12.8l160-92.8c19.2-9.6 25.6-35.2 12.8-54.4-9.6-16-32-25.6-51.2-12.8zM985.6 472c22.4 0 38.4 16 38.4 38.4s-16 38.4-38.4 38.4H800c-22.4 0-38.4-19.2-38.4-38.4 0-22.4 19.2-38.4 38.4-38.4h185.6z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), wa = [
  $a
];
function ka(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, wa, 6);
}
const st = /* @__PURE__ */ be(ba, [["render", ka]]), Ca = F("loading1"), Sa = /* @__PURE__ */ g("path", {
  d: "M520.665 64.564a29.244 29.244 0 0 0-7.071-.894c-16.211 0-29.35 13.14-29.35 29.35 0 15.83 12.538 28.696 28.223 29.293v.073c.375 0 .751-.014 1.127-.014 216.493 0 389.629 173.942 389.629 390.433 0 216.496-173.136 388.827-389.63 388.827s-389.63-172.333-389.63-388.829c0-.27.01-.536.01-.804h-.01c0-16.209-13.141-29.35-29.35-29.35s-29.35 13.139-29.35 29.35c0 .055.007.11.007.164-.001.214-.007.425-.007.64 0 247.609 200.722 448.331 448.33 448.331 247.607 0 448.33-200.722 448.33-448.33-.002-245.242-196.917-444.456-441.258-448.24z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ta = [
  Sa
];
function _a(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ta, 6);
}
const Na = /* @__PURE__ */ be(Ca, [["render", _a]]), Da = F("location"), Ia = /* @__PURE__ */ g("path", {
  d: "M512 971.487C259.938 971.487 52.513 764.062 52.513 512S259.938 52.513 512 52.513 971.487 259.938 971.487 512 764.062 971.487 512 971.487zm0-840.205c-210.051 0-380.718 170.667-380.718 380.718S301.95 892.718 512 892.718 892.718 722.05 892.718 512 722.05 131.282 512 131.282zm0 577.641c-107.651 0-196.923-89.272-196.923-196.923S404.349 315.077 512 315.077 708.923 404.349 708.923 512 619.651 708.923 512 708.923zm0-315.077c-65.641 0-118.154 52.513-118.154 118.154S446.36 630.154 512 630.154 630.154 577.64 630.154 512 577.64 393.846 512 393.846zm0-210.051c-21.005 0-39.385-18.38-39.385-39.385V39.385C472.615 18.379 490.995 0 512 0s39.385 18.38 39.385 39.385V144.41c0 21.005-18.38 39.385-39.385 39.385zM512 1024c-21.005 0-39.385-18.38-39.385-39.385V879.59c0-21.005 18.38-39.385 39.385-39.385s39.385 18.38 39.385 39.385v105.025c0 21.006-18.38 39.385-39.385 39.385zm472.615-472.615H879.59c-21.005 0-39.385-18.38-39.385-39.385s18.38-39.385 39.385-39.385h105.025c21.006 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385zm-840.205 0H39.385C18.379 551.385 0 533.005 0 512s18.38-39.385 39.385-39.385H144.41c21.005 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ba = [
  Ia
];
function Ma(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ba, 6);
}
const La = /* @__PURE__ */ be(Da, [["render", Ma]]), Pa = F("location2"), Aa = /* @__PURE__ */ g("path", {
  d: "m530.286 1005.714-25.6-10.971c-36.572-14.629-58.515-25.6-73.143-36.572-102.4-84.114-164.572-135.314-193.829-171.885-43.885-51.2-76.8-91.429-106.057-142.629C95.086 577.83 76.8 504.686 76.8 431.543c0-117.029 43.886-226.743 128-307.2C285.257 43.886 394.971 0 512 0s226.743 43.886 310.857 128c84.114 80.457 128 190.171 128 307.2 0 73.143-18.286 146.286-54.857 212.114-25.6 43.886-58.514 91.429-106.057 142.629-29.257 32.914-87.772 84.114-197.486 171.886 0 0-7.314 7.314-18.286 10.971l-43.885 32.914zM497.37 874.057s3.658 3.657 14.629 7.314c3.657-3.657 7.314-3.657 10.971-7.314C621.714 797.257 683.886 742.4 705.83 716.8c40.228-47.543 69.485-87.771 91.428-128 25.6-47.543 40.229-102.4 40.229-157.257 0-87.772-32.915-168.229-95.086-230.4-58.514-58.514-142.629-91.429-230.4-91.429S340.114 142.63 277.943 204.8c-62.172 62.171-95.086 142.629-95.086 230.4 0 54.857 14.629 109.714 40.229 157.257 25.6 43.886 54.857 80.457 95.085 124.343 25.6 29.257 84.115 80.457 179.2 157.257zm18.286-248.686c-102.4 0-182.857-80.457-182.857-182.857s80.457-182.857 182.857-182.857 182.857 80.457 182.857 182.857-80.457 182.857-182.857 182.857zm0-256c-40.228 0-73.143 32.915-73.143 73.143s32.915 73.143 73.143 73.143 73.143-32.914 73.143-73.143-32.914-73.143-73.143-73.143z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ea = [
  Aa
];
function za(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ea, 6);
}
const Va = /* @__PURE__ */ be(Pa, [["render", za]]);
F("locationg3");
F("lower");
F("marshalling");
const Ha = F("mask-close"), Oa = /* @__PURE__ */ g("path", {
  d: "M512 14.897C238.594 14.897 14.897 238.594 14.897 512S238.594 1009.103 512 1009.103 1009.103 785.406 1009.103 512 785.406 14.897 512 14.897zm207.126 646.234c16.57 16.57 16.57 41.425 0 57.995s-41.425 16.57-57.995 0L512 569.996l-149.13 149.13c-16.57 16.57-41.426 16.57-57.996 0s-16.57-41.425 0-57.995L454.004 512l-149.13-149.13c-16.57-16.57-16.57-41.426 0-57.996s41.425-16.57 57.995 0L512 454.004l149.13-149.13c16.57-16.57 41.426-16.57 57.996 0s16.57 41.425 0 57.995L569.996 512l149.13 149.13z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ra = [
  Oa
];
function Fa(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ra, 6);
}
const Wa = /* @__PURE__ */ be(Ha, [["render", Fa]]);
F("message");
F("microphone");
const Ya = F("minus"), ja = /* @__PURE__ */ g("path", {
  d: "M299.52 460.8h409.6c28.16 0 51.2 23.04 51.2 51.2s-23.04 51.2-51.2 51.2h-409.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ka = [
  ja
];
function Ua(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ka, 6);
}
const Xa = /* @__PURE__ */ be(Ya, [["render", Ua]]);
F("more-s");
const qa = F("more-x"), Ga = /* @__PURE__ */ g("path", {
  d: "M937.115 428.218c-43.442 0-80.679 37.237-80.679 80.679s37.237 80.679 80.68 80.679c43.442 0 80.678-37.237 80.678-80.679s-34.133-80.679-80.679-80.679m-428.218-52.751c-74.473 0-133.43 58.957-133.43 133.43s58.957 133.43 133.43 133.43 133.43-58.957 133.43-133.43-58.957-133.43-133.43-133.43M83.782 428.218c-43.443 0-80.679 37.237-80.679 80.679s34.133 80.679 80.679 80.679 80.679-37.237 80.679-80.679-37.237-80.679-80.68-80.679",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Za = [
  Ga
];
function Ja(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Za, 6);
}
const Qa = /* @__PURE__ */ be(qa, [["render", Ja]]);
F("more");
F("my");
F("my2");
const xa = F("notice"), er = /* @__PURE__ */ g("path", {
  d: "M940.873 819.2h-85.334V430.933c0-192-153.6-345.6-341.333-345.6s-341.333 153.6-341.333 345.6V819.2H87.539V430.933C87.54 192 279.54 0 514.206 0s426.667 192 426.667 430.933V819.2zM514.633 1024c-68.267 0-132.267-29.867-174.934-85.333-17.066-17.067-12.8-42.667 4.267-59.734 17.067-12.8 46.933-12.8 59.733 8.534 29.867 34.133 68.267 51.2 110.934 51.2s81.066-17.067 106.666-51.2c12.8-17.067 42.667-21.334 59.734-8.534 17.066 12.8 21.333 42.667 8.533 59.734C646.899 994.133 582.899 1024 514.633 1024zm469.333-162.133h-12.8c-294.4-89.6-618.667-89.6-913.067 0-21.333 4.266-46.933-8.534-55.466-29.867-8.534-21.333 4.266-46.933 29.866-51.2 311.467-93.867 652.8-89.6 964.267 0 21.333 8.533 34.133 29.867 29.867 51.2-8.534 21.333-25.6 29.867-42.667 29.867z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), tr = [
  er
];
function nr(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1027 1024",
    role: "presentation"
  }, tr, 6);
}
const or = /* @__PURE__ */ be(xa, [["render", nr]]);
F("order");
F("people");
const lr = F("photograph"), sr = /* @__PURE__ */ g("path", {
  d: "M570.514 789.943c-119.954 0-219.428-99.474-219.428-219.429s99.474-219.428 219.428-219.428 219.429 99.474 219.429 219.428-99.474 219.429-219.429 219.429zm0-351.086c-73.143 0-131.657 58.514-131.657 131.657s58.514 131.657 131.657 131.657 131.657-58.514 131.657-131.657-58.514-131.657-131.657-131.657zM877.714 1024h-614.4C117.03 1024 0 906.971 0 760.686V380.343c0-146.286 117.029-263.314 263.314-263.314h32.183c0-2.926 2.926-8.778 2.926-11.703C315.977 43.886 374.49 0 438.857 0h263.314c70.218 0 128.732 49.737 143.36 117.029h32.183c146.286 0 263.315 117.028 263.315 263.314v380.343C1141.029 906.97 1024 1024 877.714 1024zm-614.4-819.2c-96.548 0-175.543 78.994-175.543 175.543v380.343c0 96.548 78.995 175.543 175.543 175.543h614.4c96.549 0 175.543-78.995 175.543-175.543V380.343c0-96.549-78.994-175.543-175.543-175.543H819.2c-32.183 0-58.514-26.331-58.514-58.514S734.354 87.77 702.17 87.77H438.857c-26.331 0-49.737 17.555-55.588 40.96-2.926 5.852-2.926 11.703-2.926 17.555 0 32.183-26.332 58.514-58.514 58.514h-58.515zm-87.771 160.914a73.143 73.143 0 1 0 146.286 0 73.143 73.143 0 1 0-146.286 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ar = [
  sr
];
function rr(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1141 1024",
    role: "presentation"
  }, ar, 6);
}
const ir = /* @__PURE__ */ be(lr, [["render", rr]]);
F("play-circle-fill");
F("play-double-back");
F("play-double-forward");
F("play-start");
F("play-stop");
const ur = F("plus"), cr = /* @__PURE__ */ g("path", {
  d: "M345.6 460.8h409.6q51.2 0 51.2 51.2t-51.2 51.2H345.6q-51.2 0-51.2-51.2t51.2-51.2zM550.4 256q51.2 0 51.2 51.2v409.6q0 51.2-51.2 51.2t-51.2-51.2V307.2q0-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), dr = [
  cr
];
function fr(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, dr, 6);
}
const pr = /* @__PURE__ */ be(ur, [["render", fr]]);
F("poweroff-circle-fill");
const mr = F("rect-down"), hr = /* @__PURE__ */ g("path", {
  d: "M515.072 778.24c-14.336 0-28.672-5.632-39.936-16.384L69.12 356.864c-22.016-22.016-22.016-57.856 0-79.872s57.856-22.016 79.872 0L515.584 642.56 880.64 275.968c22.016-22.016 57.856-22.016 79.872 0s22.016 57.856 0 79.872L555.008 762.368c-10.752 10.752-25.6 15.872-39.936 15.872z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), vr = [
  hr
];
function gr(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, vr, 6);
}
const yr = /* @__PURE__ */ be(mr, [["render", gr]]);
F("rect-left");
F("rect-right");
const br = F("rect-up"), $r = /* @__PURE__ */ g("path", {
  d: "M920.576 778.24c-14.336 0-28.672-5.632-39.936-16.384L515.072 395.264 148.48 760.832c-22.016 22.016-57.856 22.016-79.872 0s-22.016-57.856 0-79.872l406.528-405.504c22.016-22.016 57.856-22.016 79.872 0l405.504 406.528c22.016 22.016 22.016 57.856 0 79.872-11.264 11.264-25.6 16.384-39.936 16.384z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), wr = [
  $r
];
function kr(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, wr, 6);
}
const Cr = /* @__PURE__ */ be(br, [["render", kr]]);
F("refresh");
const Sr = F("refresh2"), Tr = /* @__PURE__ */ g("path", {
  d: "M771.938 315.077h199.55L958.358 469.99 758.81 364.964c-13.128-7.877-18.38-23.63-10.502-36.759 2.625-7.877 13.128-13.128 23.63-13.128zm-535.63 393.846H44.636L57.764 554.01l191.672 105.026c13.128 7.877 18.38 23.63 10.502 36.759-5.25 7.877-15.753 13.128-23.63 13.128zM509.374 1024C257.313 1024 44.636 845.456 5.251 596.02 0 575.016 15.754 556.637 36.76 551.386c21.005-2.626 42.01 10.502 44.636 31.507 34.133 210.052 215.302 362.339 427.98 362.339 191.671 0 362.338-128.657 417.476-312.452 5.252-21.005 28.882-34.133 49.887-26.256 21.006 5.251 34.134 28.882 26.257 49.887C937.354 871.713 735.179 1024 509.375 1024zm467.364-551.385c-18.379 0-36.759-13.128-39.384-34.133C903.22 231.056 722.05 78.77 509.374 78.77c-191.671 0-362.338 128.657-414.85 312.452-5.252 21.005-28.883 34.133-49.888 26.256-21.005-5.251-34.133-28.882-26.257-49.887C81.395 152.287 283.57 0 509.374 0c252.062 0 464.739 178.544 504.123 427.98 2.626 21.005-10.502 42.01-31.507 44.635h-5.252z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), _r = [
  Tr
];
function Nr(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, _r, 6);
}
const Dr = /* @__PURE__ */ be(Sr, [["render", Nr]]), Ir = F("retweet"), Br = /* @__PURE__ */ g("path", {
  d: "M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2 2.9 3.6 8.1 4.3 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8c-1.5-1.2-3.3-1.8-5.2-1.8-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2-2.9-3.6-8.1-4.3-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Mr = [
  Br
];
function Lr(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Mr, 6);
}
const Pr = /* @__PURE__ */ be(Ir, [["render", Lr]]), Ar = F("right"), Er = /* @__PURE__ */ g("path", {
  d: "M381.262 1005.566c-16.132 21.51-45.708 24.198-67.217 8.066-21.51-16.132-24.198-45.708-8.066-67.217C413.526 806.604 518.384 666.792 625.932 529.67c8.066-10.755 8.066-24.198 0-34.953C518.384 354.906 413.526 215.094 305.979 77.972c-16.132-21.51-10.755-51.085 8.066-67.217C335.555-5.377 365.13 0 381.262 18.82c107.547 142.5 212.405 282.311 319.953 419.434 34.952 43.019 34.952 104.858 0 150.566-107.548 139.811-212.406 279.622-319.953 416.745",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), zr = [
  Er
];
function Vr(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, zr, 6);
}
const on = /* @__PURE__ */ be(Ar, [["render", Vr]]);
F("s-follow");
F("scan");
F("scan2");
F("screen-little");
F("search");
F("search2");
const Hr = F("service"), Or = /* @__PURE__ */ g("path", {
  d: "M1024 657.723H905.846v-126.03c0-228.431-177.23-413.54-393.846-413.54s-393.846 185.109-393.846 413.54v126.03H0v-126.03C0 236.307 228.43 0 512 0s512 236.308 512 531.692v126.031zM196.923 866.462C86.646 866.462 0 779.815 0 669.538s86.646-196.923 196.923-196.923 196.923 86.647 196.923 196.923S307.2 866.462 196.923 866.462zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm630.154 275.693c-110.277 0-196.923-86.647-196.923-196.924S716.8 472.615 827.077 472.615 1024 559.262 1024 669.538s-86.646 196.924-196.923 196.924zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm-149.662 429.293c-23.63 0-47.261-15.754-55.138-43.324-7.877-31.507 7.877-63.015 39.385-74.83 102.4-31.508 189.046-102.4 236.307-196.923 15.754-27.57 51.2-39.385 78.77-23.631s39.384 51.2 23.63 78.77c-63.015 122.091-177.23 216.614-307.2 256-3.938 3.938-11.815 3.938-15.754 3.938z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Rr = [
  Or
];
function Fr(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Rr, 6);
}
const Wr = /* @__PURE__ */ be(Hr, [["render", Fr]]);
F("setting");
F("share-n");
F("share");
F("share1");
F("shop");
F("shop3");
const Yr = F("star-fill-n"), jr = /* @__PURE__ */ g("path", {
  d: "M1047.135 361.244 722.87 312.89 577.802 22.756c-2.844-8.534-11.378-14.223-19.911-17.067-19.911-8.533-45.511-2.845-54.045 17.067L358.78 312.889 34.513 358.4c-8.533 0-17.067 5.689-22.755 11.378-17.067 17.066-14.223 42.666 0 56.889l233.244 227.555-54.044 321.422c-2.845 8.534 0 17.067 2.844 25.6 11.378 19.912 34.133 28.445 54.044 17.067L537.98 867.556l290.133 150.755c8.533 2.845 17.067 5.689 25.6 2.845 22.756-2.845 36.978-25.6 34.133-45.512l-54.044-321.422 233.244-227.555c5.69-5.69 11.378-14.223 11.378-22.756 5.69-19.911-8.533-39.822-31.289-42.667z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Kr = [
  jr
];
function Ur(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1081 1024",
    role: "presentation"
  }, Kr, 6);
}
const Xr = /* @__PURE__ */ be(Yr, [["render", Ur]]);
F("star-fill");
F("star-fill1");
F("star-fill2");
F("star-n");
F("star");
F("star1");
F("star11");
F("star2");
const qr = F("success"), Gr = /* @__PURE__ */ g("path", {
  d: "M762.311 391.396C655.36 466.489 566.613 552.96 491.52 659.91c-20.48 27.307-61.44 27.307-79.644-2.275-34.134-52.338-72.818-91.023-125.156-125.156-25.031-15.929-9.102-54.613 20.48-50.062 56.889 11.378 100.124 34.133 143.36 72.818 77.369-93.298 175.218-166.116 286.72-213.903 27.307-9.102 50.062 31.858 25.031 50.063M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Zr = [
  Gr
];
function Jr(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Zr, 6);
}
const Qr = /* @__PURE__ */ be(qr, [["render", Jr]]), xr = F("tips"), ei = /* @__PURE__ */ g("path", {
  d: "M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512zm0-938.667c-234.667 0-426.667 192-426.667 426.667s192 426.667 426.667 426.667 426.667-192 426.667-426.667S746.667 85.333 512 85.333zM448 320a64 64 0 1 0 128 0 64 64 0 1 0-128 0Zm-17.067 149.333h51.2c12.8 0 21.334 8.534 21.334 21.334v8.533c0 12.8-8.534 21.333-21.334 21.333h-51.2c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6zm51.2 0H524.8c25.6 0 51.2 21.334 51.2 51.2v8.534L537.6 755.2c0 8.533-8.533 17.067-21.333 17.067H473.6c-25.6 0-51.2-21.334-51.2-51.2v-8.534L460.8 486.4c4.267-8.533 12.8-17.067 21.333-17.067zm8.534 251.734h76.8c12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6h-76.8c-12.8 0-21.334-8.534-21.334-21.334v-12.8c4.267-12.8 12.8-17.066 21.334-17.066z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ti = [
  ei
];
function ni(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ti, 6);
}
const so = /* @__PURE__ */ be(xr, [["render", ni]]), oi = F("top"), li = /* @__PURE__ */ g("path", {
  d: "M136.533 540.444c-11.377 0-25.6-5.688-34.133-17.066-14.222-19.911-11.378-45.511 8.533-59.734L477.867 179.2c19.91-14.222 45.51-11.378 59.733 8.533s11.378 45.511-8.533 59.734L162.133 531.91c-5.689 5.689-14.222 8.533-25.6 8.533zm745.245 0c-8.534 0-17.067-2.844-25.6-8.533L489.244 247.467c-19.91-14.223-22.755-42.667-8.533-59.734 14.222-19.91 42.667-22.755 59.733-8.533l366.934 284.444c19.91 14.223 22.755 42.667 8.533 59.734-8.533 11.378-19.911 17.066-34.133 17.066zM512 1024c-22.756 0-42.667-19.911-42.667-42.667v-768c0-22.755 19.911-42.666 42.667-42.666s42.667 19.91 42.667 42.666v768c0 22.756-19.911 42.667-42.667 42.667zM884.622 85.333h-742.4c-22.755 0-42.666-19.91-42.666-42.666S119.466 0 142.222 0h742.4c22.756 0 42.667 19.911 42.667 42.667s-19.911 42.666-42.667 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), si = [
  li
];
function ai(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, si, 6);
}
const ri = /* @__PURE__ */ be(oi, [["render", ai]]), ii = F("triangle-down"), ui = /* @__PURE__ */ g("path", {
  d: "m573.056 752 308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392L450.976 752a76.8 76.8 0 0 0 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ci = [
  ui
];
function di(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ci, 6);
}
const fi = /* @__PURE__ */ be(ii, [["render", di]]), pi = F("triangle-up"), mi = /* @__PURE__ */ g("path", {
  d: "m573.056 272 308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), hi = [
  mi
];
function vi(e, t, n, o, l, s) {
  return c(), d("svg", {
    class: B(e.classes),
    style: V(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, hi, 6);
}
const gi = /* @__PURE__ */ be(pi, [["render", vi]]);
F("uploader");
F("voice");
const yi = { class: "nut-button__wrap" }, qe = /* @__PURE__ */ ve({
  name: "NutButton",
  __name: "button",
  props: {
    color: { default: "" },
    shape: { default: "round" },
    plain: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    type: { default: "default" },
    size: { default: "normal" },
    block: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = (r) => {
      !n.loading && !n.disabled && o("click", r);
    }, s = S(() => {
      const r = "nut-button";
      return {
        [r]: !0,
        [`${r}--${n.type}`]: n.type,
        [`${r}--${n.size}`]: n.size,
        [`${r}--${n.shape}`]: n.shape,
        [`${r}--plain`]: n.plain,
        [`${r}--block`]: n.block,
        [`${r}--disabled`]: n.disabled,
        [`${r}--loading`]: n.loading
      };
    }), a = S(() => {
      let r = {};
      return n.color && (r = {
        color: n.plain ? n.color : "#fff",
        background: n.plain ? "#fff" : `border-box ${n.color}`
      }, n.color.includes("gradient") ? r.borderColor = "transparent" : r.borderColor = n.color), r;
    });
    return (r, i) => (c(), d("view", {
      class: B(s.value),
      style: V(a.value),
      onClick: l
    }, [
      g("view", yi, [
        r.loading ? (c(), J(ce(st), {
          key: 0,
          class: "nut-icon-loading"
        })) : N("", !0),
        r.$slots.icon && !r.loading ? T(r.$slots, "icon", { key: 1 }) : N("", !0),
        r.$slots.default ? (c(), d("view", {
          key: 2,
          class: B({ "nut-button__text": r.$slots.icon || r.loading })
        }, [
          T(r.$slots, "default")
        ], 2)) : N("", !0)
      ])
    ], 6));
  }
}), pt = (e) => {
  const t = he([]), n = he([]);
  return {
    children: t,
    linkChildren: (l) => {
      Re(e, G({
        unlink: (r) => {
          if (r.proxy) {
            const i = n.indexOf(r);
            i > -1 && n.splice(i, 1);
            const f = t.indexOf(r.proxy);
            i > -1 && t.splice(f, 1);
          }
        },
        link: (r) => {
          r.proxy && (n.push(r), t.push(r.proxy));
        },
        children: t,
        internalChildren: n
      }, l));
    }
  };
}, mt = (e) => {
  const t = Ve(e, null);
  if (t) {
    const n = ot(), { link: o, unlink: l, internalChildren: s } = t;
    o(n), Xe(() => {
      l(n);
    });
    const a = S(() => s.indexOf(n));
    return { parent: t, index: a };
  }
  return {
    parent: t,
    index: S(() => -1)
  };
}, ye = (e) => {
  const t = e;
  return t.install = (n) => {
    t.name && n.component(t.name, t);
  }, t;
}, Be = (e) => {
  if (e !== void 0)
    return isNaN(Number(e)) ? String(e) : `${e}px`;
};
function ln() {
  return ot().proxy.$router || null;
}
let gt = 0;
const In = "nut-overflow-hidden", bi = (e) => [() => {
  if (e())
    try {
      !gt && Dn.classList.add(In), gt++;
    } catch (o) {
      console.warn("[NutUI] <useLockScroll>", o);
    }
}, () => {
  if (e() && gt)
    try {
      gt--, !gt && Dn.classList.remove(In);
    } catch (o) {
      console.warn("[NutUI] <unlock>", o);
    }
}];
ye(qe);
const $i = {
  key: 0,
  class: "nut-cell__icon"
}, wi = {
  key: 1,
  class: "nut-cell__title"
}, ki = { class: "title" }, Ci = { class: "nut-cell__title-desc" }, sn = /* @__PURE__ */ ve({
  name: "NutCell",
  __name: "cell",
  props: {
    title: { default: "" },
    subTitle: { default: "" },
    desc: { default: "" },
    descTextAlign: { default: "right" },
    isLink: { type: Boolean, default: !1 },
    roundRadius: { default: "" },
    center: { type: Boolean, default: !1 },
    size: { default: "normal" },
    to: {},
    replace: { type: Boolean, default: !1 },
    url: { default: "" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = S(() => {
      const f = "nut-cell";
      return {
        [f]: !0,
        [`${f}--clickable`]: n.isLink || n.to,
        [`${f}--center`]: n.center,
        [`${f}--large`]: n.size === "large"
      };
    }), s = ln(), a = S(() => ({
      borderRadius: Be(n.roundRadius)
    })), r = S(() => ({
      textAlign: n.descTextAlign
    })), i = (f) => {
      o("click", f), n.to && s ? s[n.replace ? "replace" : "push"](n.to) : n.url && (n.replace ? location.replace(n.url) : location.href = n.url);
    };
    return (f, p) => (c(), d("view", {
      class: B(l.value),
      style: V(a.value),
      onClick: i
    }, [
      T(f.$slots, "default", {}, () => [
        f.$slots.icon ? (c(), d("view", $i, [
          T(f.$slots, "icon")
        ])) : N("", !0),
        f.title || f.subTitle || f.$slots.title ? (c(), d("view", wi, [
          f.subTitle ? (c(), d(Z, { key: 0 }, [
            T(f.$slots, "title", {}, () => [
              g("view", ki, P(f.title), 1)
            ]),
            g("view", Ci, P(f.subTitle), 1)
          ], 64)) : T(f.$slots, "title", { key: 1 }, () => [
            ge(P(f.title), 1)
          ])
        ])) : N("", !0),
        f.desc || f.$slots.desc ? (c(), d("view", {
          key: 2,
          class: B(["nut-cell__value", { "nut-cell__value--alone": !f.title && !f.subTitle && !f.$slots.title }]),
          style: V(r.value)
        }, [
          T(f.$slots, "desc", {}, () => [
            ge(P(f.desc), 1)
          ])
        ], 6)) : N("", !0),
        T(f.$slots, "link", {}, () => [
          f.isLink || f.to ? (c(), J(ce(on), {
            key: 0,
            class: "nut-cell__link"
          })) : N("", !0)
        ])
      ])
    ], 6));
  }
});
ye(sn);
const Si = { class: "nut-cell-group" }, Ti = {
  key: 1,
  class: "nut-cell-group__title"
}, _i = {
  key: 3,
  class: "nut-cell-group__desc"
}, Ni = { class: "nut-cell-group__wrap" }, an = /* @__PURE__ */ ve({
  name: "NutCellGroup",
  __name: "cell-group",
  props: {
    title: { default: "" },
    desc: { default: "" }
  },
  setup(e) {
    return (t, n) => (c(), d("view", Si, [
      t.$slots.title ? T(t.$slots, "title", { key: 0 }) : t.title ? (c(), d("view", Ti, P(t.title), 1)) : N("", !0),
      t.$slots.desc ? T(t.$slots, "desc", { key: 2 }) : t.desc ? (c(), d("view", _i, P(t.desc), 1)) : N("", !0),
      g("view", Ni, [
        T(t.$slots, "default")
      ])
    ]));
  }
});
ye(an);
const ht = /* @__PURE__ */ ve({
  name: "NutOverlay",
  __name: "overlay",
  props: {
    visible: { type: Boolean, default: !1 },
    zIndex: { default: 2e3 },
    duration: { default: 0.3 },
    lockScroll: { type: Boolean, default: !0 },
    overlayClass: { default: "" },
    overlayStyle: {},
    closeOnClickOverlay: { type: Boolean, default: !0 }
  },
  emits: ["click", "update:visible"],
  setup(e, { emit: t }) {
    const n = e, o = t, [l, s] = bi(() => n.lockScroll), a = S(() => ({
      ["nut-overlay"]: !0,
      [n.overlayClass]: !0
    })), r = S(() => G({
      transitionDuration: `${n.duration}s`,
      zIndex: n.zIndex
    }, n.overlayStyle));
    ct(() => {
      n.visible ? l() : s();
    });
    const i = (f) => {
      o("click", f), n.closeOnClickOverlay && o("update:visible", !1);
    };
    return (f, p) => (c(), J(Jt, { name: "overlay-fade" }, {
      default: te(() => [
        Ie(g("view", {
          class: B(a.value),
          style: V(r.value),
          onClick: De(i, ["stop"])
        }, [
          T(f.$slots, "default")
        ], 6), [
          [Me, f.visible]
        ])
      ]),
      _: 3
    }));
  }
});
ye(ht);
const Nt = {
  visible: {
    type: Boolean,
    default: !1
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
    default: !0
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
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
    default: !1
  },
  closeIconPosition: {
    type: String,
    default: "top-right"
  },
  destroyOnClose: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: [String, Element],
    default: "body"
  },
  overlay: {
    type: Boolean,
    default: !0
  },
  round: {
    type: Boolean,
    default: !1
  },
  teleportDisable: {
    type: Boolean,
    default: !1
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: !1
  },
  overlayClass: {
    type: String,
    default: ""
  },
  overlayStyle: {
    type: Object,
    default: () => ({})
  }
}, Di = (e) => e.replace(/-./g, (t) => t[1].toUpperCase());
function ne(e) {
  return {
    componentName: "nut-" + e,
    create: function(n) {
      return n.name = "Nut" + Di("-" + e), n.install = (o) => {
        o.component(n.name, n);
      }, ve(n);
    }
  };
}
const nt = (e, t) => e ? Te(e, t) : "", rn = (e, t) => {
  let n = document.body;
  const o = e.teleport || "body";
  o != "body" && (Tl(o) ? n = document.querySelector(o) : n = e.teleport);
  const l = document.createElement("view"), s = t.name ? t.name + "-" : "", a = e.id || (/* @__PURE__ */ new Date()).getTime();
  l.id = s + a;
  let r = {};
  Et(t.wrapper) ? r = t.wrapper(n, l) : r = t.wrapper;
  const i = vl(r, e), f = t.components;
  return f && f.forEach((p) => {
    i.use(p);
  }), n.appendChild(l), {
    instance: i.mount(l),
    unmount: () => {
      i.unmount(), n.removeChild(l);
    }
  };
}, { componentName: Ii, create: Bi } = ne("popup"), ao = 2e3;
let Bn = ao;
const Mi = Bi({
  components: {
    NutOverlay: ht,
    Close: zt
  },
  props: Nt,
  emits: ["clickPop", "clickCloseIcon", "open", "close", "opened", "closed", "clickOverlay", "update:visible"],
  setup(e, { emit: t }) {
    let n;
    const o = he({
      zIndex: e.zIndex,
      showSlot: !0,
      closed: e.closeable
    }), l = S(() => ({
      [Ii]: !0,
      round: e.round,
      [`nut-popup--${e.position}`]: !0,
      [`nut-popup--${e.position}--safebottom`]: e.position === "bottom" && e.safeAreaInsetBottom,
      [e.popClass]: !0
    })), s = S(() => G({
      zIndex: o.zIndex,
      transitionDuration: `${e.duration}s`
    }, e.style)), a = S(() => e.transition ? e.transition : `nut-popup-slide-${e.position}`), r = () => {
      n || (n = !0, e.zIndex !== ao && (Bn = Number(e.zIndex)), t("update:visible", !0), o.zIndex = ++Bn, e.destroyOnClose && (o.showSlot = !0), t("open"));
    }, i = () => {
      n && (n = !1, t("update:visible", !1), t("close"), e.destroyOnClose && setTimeout(() => {
        o.showSlot = !1;
      }, +e.duration * 1e3));
    }, f = (w) => {
      t("clickPop", w);
    }, p = (w) => {
      w.stopPropagation(), t("clickCloseIcon", w), i();
    }, y = (w) => {
      t("clickOverlay", w), e.closeOnClickOverlay && i();
    }, v = (w) => {
      t("opened", w);
    }, b = (w) => {
      t("closed", w);
    };
    return Q(
      () => e.visible,
      () => {
        e.visible && !n && r(), !e.visible && n && i();
      }
    ), ct(() => {
      o.closed = e.closeable;
    }), pe(G({}, we(o)), {
      popStyle: s,
      transitionName: a,
      classes: l,
      onClick: f,
      onClickCloseIcon: p,
      onClickOverlay: y,
      onOpened: v,
      onClosed: b
    });
  }
}), le = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
function Li(e, t, n, o, l, s) {
  const a = X("nut-overlay"), r = X("Close");
  return c(), J(Kn, {
    to: e.teleport,
    disabled: !e.teleportDisable
  }, [
    e.overlay ? (c(), J(a, dt({
      key: 0,
      visible: e.visible,
      "close-on-click-overlay": e.closeOnClickOverlay,
      "z-index": e.zIndex,
      "lock-scroll": e.lockScroll,
      duration: e.duration,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle
    }, e.$attrs, { onClick: e.onClickOverlay }), null, 16, ["visible", "close-on-click-overlay", "z-index", "lock-scroll", "duration", "overlay-class", "overlay-style", "onClick"])) : N("", !0),
    ee(Jt, {
      name: e.transitionName,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: te(() => [
        Ie(g("view", {
          class: B(e.classes),
          style: V(e.popStyle),
          onClick: t[1] || (t[1] = (...i) => e.onClick && e.onClick(...i))
        }, [
          e.showSlot ? T(e.$slots, "default", { key: 0 }) : N("", !0),
          e.closed ? (c(), d("view", {
            key: 1,
            class: B(["nut-popup__close-icon", "nut-popup__close-icon--" + e.closeIconPosition]),
            onClick: t[0] || (t[0] = (...i) => e.onClickCloseIcon && e.onClickCloseIcon(...i))
          }, [
            T(e.$slots, "close-icon", {}, () => [
              ee(r, { height: "12px" })
            ])
          ], 2)) : N("", !0)
        ], 6), [
          [Me, e.visible]
        ])
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const Ae = /* @__PURE__ */ le(Mi, [["render", Li]]), Pi = (e) => ({
  props: {
    theme: { type: String, default: "" },
    themeVars: { type: Object, default: {} },
    tag: { type: String, default: e }
  },
  setup(t, { slots: n }) {
    const o = (r) => {
      if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(r)) return "";
      r = r.toLowerCase(), r.length === 4 && (r = "#" + r.slice(1).split("").map((p) => p + p).join(""));
      const f = [];
      for (let p = 1; p < 7; p += 2)
        f.push(parseInt("0x" + r.slice(p, p + 2)));
      return f.join(",");
    }, l = (r) => (r = r.replace(r.charAt(0), r.charAt(0).toLocaleLowerCase()), r.replace(/([a-z])([A-Z])/g, (i, f, p) => f + "-" + p.toLowerCase())), s = (r) => {
      if (!r) return;
      const i = {}, f = r == null ? void 0 : r.primaryColor;
      if (f) {
        const p = o(f);
        i["--nut-address-region-tab-line"] = `linear-gradient(90deg, ${f} 0%, rgba(${p}, 0.15) 100%)`, i["--nut-tabs-horizontal-tab-line-color"] = `linear-gradient(90deg, ${f} 0%, rgba(${p}, 0.15) 100%)`, i["--nut-tabs-vertical-tab-line-color"] = `linear-gradient(180deg, ${f} 0%, rgba(${p}, 0.15) 100%)`;
      }
      return Object.keys(r).forEach((p) => {
        i[`--nut-${l(p)}`] = r[p];
      }), i;
    }, a = S(() => s(t.themeVars));
    return () => {
      var r;
      return Te(
        t.tag,
        {
          class: `nut-theme-${t.theme}`,
          style: a.value
        },
        (r = n.default) == null ? void 0 : r.call(n)
      );
    };
  }
}), { create: Ai } = ne("config-provider"), Ei = Ai(Pi("div")), zi = ["src", "data-src", "alt"], Vi = {
  key: 0,
  class: "nut-img-loading"
}, Hi = {
  key: 1,
  class: "nut-img-error"
}, ro = /* @__PURE__ */ ve({
  name: "NutImage",
  __name: "image",
  props: {
    src: {},
    fit: { default: "fill" },
    position: { default: "center" },
    alt: { default: "" },
    width: { default: "" },
    height: { default: "" },
    round: { type: Boolean, default: !1 },
    radius: {},
    showError: { type: Boolean, default: !0 },
    showLoading: { type: Boolean, default: !0 },
    lazyLoad: { type: Boolean, default: !1 }
  },
  emits: ["click", "load", "error"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = z(!0), s = z(!1), a = S(() => {
      const u = "nut-image";
      return {
        [u]: !0,
        [`${u}-round`]: n.round
      };
    }), r = z(null), i = z(!1), f = z(null), p = () => {
      const u = {
        threshold: [0],
        rootMargin: "0px"
      };
      r.value = new IntersectionObserver((m) => {
        m.forEach((h) => {
          h.isIntersecting && (i.value = !0, r.value.disconnect());
        });
      }, u), f.value && r.value.observe(f.value);
    };
    $e(() => {
      n.lazyLoad && p();
    }), Qt(() => {
      r.value && r.value.disconnect();
    });
    const y = S(() => {
      let u = {};
      return n.width && (u.width = Be(n.width)), n.height && (u.height = Be(n.height)), n.radius !== void 0 && n.radius !== null && (u.overflow = "hidden", u.borderRadius = Be(n.radius)), u;
    }), v = S(() => ({
      objectFit: n.fit,
      objectPosition: n.position
    }));
    Q(
      () => n.src,
      () => {
        s.value = !1, l.value = !0;
      }
    );
    const b = () => {
      s.value = !1, l.value = !1, o("load");
    }, w = () => {
      s.value = !0, l.value = !1, o("error");
    }, k = (u) => {
      o("click", u);
    };
    return (u, m) => (c(), d("div", {
      class: B(a.value),
      style: V(y.value),
      onClick: k
    }, [
      g("img", {
        ref_key: "imgRef",
        ref: f,
        class: "nut-img",
        src: u.lazyLoad ? i.value ? u.src : void 0 : u.src,
        "data-src": u.lazyLoad ? i.value ? void 0 : u.src : void 0,
        alt: u.alt,
        style: V(v.value),
        onLoad: b,
        onError: w
      }, null, 44, zi),
      l.value ? (c(), d("div", Vi, [
        T(u.$slots, "loading", {}, () => [
          ee(ce(la), {
            width: "16px",
            height: "20px",
            name: "image"
          })
        ])
      ])) : N("", !0),
      s.value && !l.value ? (c(), d("div", Hi, [
        T(u.$slots, "error", {}, () => [
          ee(ce(xs), {
            width: "16px",
            height: "20px",
            name: "imageError"
          })
        ])
      ])) : N("", !0)
    ], 6));
  }
});
ye(ro);
const { create: Oi } = ne("layout"), io = Oi({});
ye(io);
const uo = Symbol("nut-layout"), Mn = "nut-col", co = /* @__PURE__ */ ve({
  name: "NutCol",
  __name: "col",
  props: {
    span: { default: 24 },
    offset: { default: 0 }
  },
  setup(e) {
    const t = e, n = Ve(uo), o = S(() => ({
      [Mn]: !0,
      [Mn + "-gutter"]: n,
      ["nut-col-" + t.span]: !0,
      ["nut-col-offset-" + t.offset]: !0
    })), l = S(() => ({
      paddingLeft: n / 2 + "px",
      paddingRight: n / 2 + "px"
    }));
    return (s, a) => (c(), d("view", {
      class: B(o.value),
      style: V(l.value)
    }, [
      T(s.$slots, "default")
    ], 6));
  }
});
ye(co);
const Ri = "nut-row", fo = /* @__PURE__ */ ve({
  name: "NutRow",
  __name: "row",
  props: {
    type: { default: "" },
    gutter: { default: "" },
    justify: { default: "start" },
    align: { default: "flex-start" },
    flexWrap: { default: "nowrap" }
  },
  setup(e) {
    const t = e;
    Re(uo, t.gutter);
    const n = (l, s) => l ? s ? `nut-row-${l}-${s}` : "" : `nut-row-${s}`, o = S(() => [
      Ri,
      n("", t.type),
      n("justify", t.justify),
      n("align", t.align),
      n("flex", t.flexWrap)
    ]);
    return (l, s) => (c(), d("view", {
      class: B(o.value)
    }, [
      T(l.$slots, "default")
    ], 2));
  }
});
ye(fo);
const Fi = /scroll|auto|overlay/i, po = window;
function Wi(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function Xt(e, t = po) {
  let n = e;
  for (; n && n !== t && Wi(n); ) {
    const { overflowY: o } = window.getComputedStyle(n);
    if (Fi.test(o))
      return n;
    n = n.parentNode;
  }
  return t;
}
function mo(e, t = po) {
  const n = z();
  return $e(() => {
    e.value && (n.value = Xt(e.value, t));
  }), n;
}
function Yi(e) {
  return typeof window != "undefined" && e === window;
}
const Ye = (e) => {
  const t = ce(e);
  if (Yi(t)) {
    const n = t.innerWidth, o = t.innerHeight;
    return {
      top: 0,
      left: 0,
      right: n,
      bottom: o,
      width: n,
      height: o
    };
  }
  return t && t.getBoundingClientRect ? t.getBoundingClientRect() : {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0
  };
}, { create: ji } = ne("sticky"), Ki = ji({
  props: {
    position: {
      type: String,
      default: "top"
    },
    top: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: [Number, String],
      default: 0
    },
    container: {
      type: Object,
      default: null
    },
    zIndex: {
      type: [Number, String],
      default: 99
    }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = z(), o = z(), l = he({
      fixed: !1,
      height: 0,
      width: 0,
      transform: 0
    }), s = S(() => e.position === "top" ? Number(e.top) : Number(e.bottom)), a = S(() => l.fixed ? { height: `${l.height}px` } : {}), r = S(() => l.fixed ? {
      [e.position]: `${s.value}px`,
      height: `${l.height}px`,
      width: `${l.width}px`,
      transform: l.transform ? `translate3d(0, ${l.transform}px, 0)` : void 0,
      position: l.fixed ? "fixed" : void 0,
      zIndex: Number(e.zIndex)
    } : {}), i = () => {
      const f = e.container;
      if (!n.value && !f) return;
      const p = Ye(n), y = o.value, v = Ye(y), b = Ye(f);
      l.height = p.height, l.width = p.width;
      const w = () => {
        let u = !1;
        if (e.position === "top")
          u = f ? s.value > p.top && b.bottom > 0 : s.value > p.top;
        else {
          const m = document.documentElement.clientHeight;
          u = f ? b.bottom > 0 && m - s.value - v.height > b.top : m - s.value < p.bottom;
        }
        return u;
      }, k = () => {
        if (f)
          if (e.position === "top") {
            const u = b.bottom - s.value - v.height;
            return u < 0 ? u : 0;
          } else {
            const u = document.documentElement.clientHeight, m = b.bottom - (u - s.value);
            return m < 0 ? m : 0;
          }
        return 0;
      };
      l.transform = k(), l.fixed = w();
    };
    return Q(
      () => l.fixed,
      (f) => {
        t("change", f);
      }
    ), $e(() => {
      i(), Xt(n.value).addEventListener("scroll", i, !0);
    }), Xe(() => {
      Xt(n.value).removeEventListener("scroll", i);
    }), { rootRef: n, rootStyle: a, stickyRef: o, stickyStyle: r };
  }
});
function Ui(e, t, n, o, l, s) {
  return c(), d("div", {
    ref: "rootRef",
    class: "nut-sticky",
    style: V(e.rootStyle)
  }, [
    g("div", {
      ref: "stickyRef",
      class: "nut-sticky__box",
      style: V(e.stickyStyle)
    }, [
      T(e.$slots, "default")
    ], 4)
  ], 4);
}
const ho = /* @__PURE__ */ le(Ki, [["render", Ui]]), vo = /* @__PURE__ */ ve({
  name: "NutDivider",
  __name: "divider",
  props: {
    contentPosition: { default: "center" },
    dashed: { type: Boolean, default: !1 },
    hairline: { type: Boolean, default: !0 },
    direction: { default: "horizontal" }
  },
  setup(e) {
    const t = e, n = St(), o = S(() => {
      const l = "nut-divider";
      return t.direction === "horizontal" ? {
        [l]: !0,
        [`${l}-center`]: n.default,
        [`${l}-left`]: t.contentPosition === "left",
        [`${l}-right`]: t.contentPosition === "right",
        [`${l}-dashed`]: t.dashed,
        [`${l}-hairline`]: t.hairline
      } : {
        [l]: !0,
        [`${l}-vertical`]: t.direction === "vertical"
      };
    });
    return (l, s) => (c(), d("view", {
      class: B(o.value)
    }, [
      l.direction === "horizontal" ? T(l.$slots, "default", { key: 0 }) : N("", !0)
    ], 2));
  }
});
ye(vo);
const go = Symbol("grid"), yo = /* @__PURE__ */ ve({
  name: "NutGrid",
  __name: "grid",
  props: {
    columnNum: { default: 4 },
    border: { type: Boolean, default: !0 },
    gutter: { default: 0 },
    center: { type: Boolean, default: !0 },
    square: { type: Boolean, default: !1 },
    reverse: { type: Boolean, default: !1 },
    direction: {},
    clickable: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { linkChildren: n } = pt(go);
    n({ props: t });
    const o = S(() => {
      const s = "nut-grid";
      return {
        [s]: !0,
        [`${s}--border`]: t.border && !t.gutter
      };
    }), l = S(() => {
      const s = {};
      return t.gutter && (s.paddingLeft = Be(t.gutter)), s;
    });
    return (s, a) => (c(), d("view", {
      class: B(o.value),
      style: V(l.value)
    }, [
      T(s.$slots, "default")
    ], 6));
  }
});
ye(yo);
const Xi = { class: "nut-grid-item__text" }, bo = /* @__PURE__ */ ve({
  name: "NutGridItem",
  __name: "grid-item",
  props: {
    text: {},
    to: {},
    url: { default: "" },
    replace: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, o = t, { parent: l, index: s } = mt(go), a = (l == null ? void 0 : l.props) || {}, r = S(() => {
      const y = {
        flexBasis: `${100 / +a.columnNum}%`
      };
      return a.square ? y.paddingTop = `${100 / +a.columnNum}%` : a.gutter && (y.paddingRight = Be(a.gutter), s.value >= +a.columnNum && (y.marginTop = Be(a.gutter))), y;
    }), i = S(() => {
      const y = "nut-grid-item__content";
      return {
        [`${y}`]: !0,
        [`${y}--border`]: a.border,
        [`${y}--surround`]: a.border && a.gutter,
        [`${y}--center`]: a.center,
        [`${y}--square`]: a.square,
        [`${y}--reverse`]: a.reverse,
        [`${y}--${a.direction}`]: !!a.direction,
        [`${y}--clickable`]: a.clickable || n.to || n.url
      };
    }), f = ln(), p = (y) => {
      o("click", y), n.to && f ? f[n.replace ? "replace" : "push"](n.to) : n.url && (n.replace ? location.replace(n.url) : location.href = n.url);
    };
    return (y, v) => (c(), d("view", {
      class: "nut-grid-item",
      style: V(r.value),
      onClick: p
    }, [
      g("view", {
        class: B(i.value)
      }, [
        T(y.$slots, "default"),
        g("view", Xi, [
          y.text ? (c(), d(Z, { key: 0 }, [
            ge(P(y.text), 1)
          ], 64)) : T(y.$slots, "text", { key: 1 })
        ])
      ], 2)
    ], 4));
  }
});
ye(bo);
const { create: qi, componentName: lt } = ne("space"), Gi = qi({
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
  setup(e, { slots: t }) {
    const n = (p) => typeof p == "number" ? p + "px" : p, o = (p) => {
      const y = {};
      if (!e.gutter) return y;
      const v = `${n(Array.isArray(e.gutter) ? e.gutter[0] : e.gutter)}`, b = `${n(Array.isArray(e.gutter) ? e.gutter[1] : e.gutter)}`;
      return p ? e.wrap ? { marginBottom: b } : {} : (e.direction === "horizontal" && (y.marginRight = v), (e.direction === "vertical" || e.wrap) && (y.marginBottom = b), y);
    }, l = (p = []) => {
      const y = [];
      return p.forEach((v) => {
        Array.isArray(v) ? y.push(...v) : v.type === Z ? y.push(...l(v.children)) : y.push(v);
      }), y.filter(
        (v) => {
          var b;
          return !(v && (v.type === gl || v.type === Z && ((b = v.children) == null ? void 0 : b.length) === 0 || v.type === yl && v.children.trim() === ""));
        }
      );
    }, { direction: s, wrap: a, fill: r, justify: i, align: f } = e;
    return () => {
      var v;
      const p = l((v = t.default) == null ? void 0 : v.call(t)), y = () => p.map((b, w) => Te(
        "div",
        {
          class: `${lt}-item`,
          style: o(w === p.length - 1)
        },
        b
      ));
      return Te(
        "div",
        {
          class: [
            lt,
            s && `${lt}-${s}`,
            f && `${lt}-align-${f}`,
            i && `${lt}-justify-${i}`,
            a && `${lt}-wrap`,
            r && `${lt}-fill`
          ]
        },
        y()
      );
    };
  }
}), Zi = {
  key: 1,
  class: "nut-navbar__text"
}, Ji = { class: "nut-navbar__title" }, Qi = {
  key: 0,
  class: "nut-navbar__text"
}, $o = /* @__PURE__ */ ve({
  name: "NutNavbar",
  __name: "navbar",
  props: {
    leftShow: { type: Boolean, default: !1 },
    title: { default: "" },
    titleIcon: { type: Boolean, default: !1 },
    leftText: { default: "" },
    desc: { default: "" },
    fixed: { type: Boolean, default: !1 },
    safeAreaInsetTop: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !1 },
    placeholder: { type: Boolean, default: !0 },
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
  setup(e, { emit: t }) {
    const n = e, o = t, l = z("auto"), s = z(), a = S(() => {
      const b = "nut-navbar";
      return {
        [b]: !0,
        [`${b}--border`]: n.border,
        [`${b}--fixed`]: n.fixed,
        [`${b}--safe-area-inset-top`]: n.safeAreaInsetTop
      };
    }), r = S(() => n.fixed && n.placeholder ? {
      height: l.value
    } : {}), i = () => {
      if (s.value) {
        const b = s.value.getBoundingClientRect();
        l.value = `${b.height}px`;
      }
    };
    $e(() => {
      n.fixed && n.placeholder && _e(() => {
        i();
      });
    });
    const f = () => {
      o("clickBack"), o("onClickBack");
    }, p = () => {
      o("clickTitle"), o("onClickTitle");
    }, y = () => {
      o("clickIcon"), o("onClickIcon");
    }, v = () => {
      o("clickRight"), o("onClickRight");
    };
    return (b, w) => (c(), d("view", {
      class: "nut-navbar--placeholder",
      style: V(r.value)
    }, [
      g("view", {
        ref_key: "navbarRef",
        ref: s,
        class: B(a.value),
        style: V({ zIndex: b.zIndex })
      }, [
        g("view", {
          class: "nut-navbar__left",
          onClick: f
        }, [
          b.leftShow ? T(b.$slots, "left-show", { key: 0 }, () => [
            ee(ce(nn), {
              height: "12px",
              color: "#979797"
            })
          ]) : N("", !0),
          b.leftText ? (c(), d("view", Zi, P(b.leftText), 1)) : N("", !0),
          T(b.$slots, "left")
        ]),
        g("view", Ji, [
          b.title ? (c(), d("view", {
            key: 0,
            class: "title",
            onClick: p
          }, P(b.title), 1)) : N("", !0),
          b.titleIcon ? (c(), d("view", {
            key: 1,
            class: "icon",
            onClick: y
          }, [
            T(b.$slots, "title-icon", { onClick: y })
          ])) : N("", !0),
          T(b.$slots, "content")
        ]),
        g("view", {
          class: "nut-navbar__right",
          onClick: v
        }, [
          b.desc ? (c(), d("view", Qi, P(b.desc), 1)) : N("", !0),
          T(b.$slots, "right")
        ])
      ], 6)
    ], 4));
  }
});
ye($o);
const Se = (e = "") => (t, ...n) => {
  e = e.toLocaleLowerCase();
  const o = Qn.languages();
  let l = t;
  e && e.startsWith("nut") && (l = `${e.slice(3)}.${t}`);
  const s = Ut(o, l) || Ut(o, t);
  return Et(s) ? s(...n) : s;
}, { create: xi } = ne("fixed-nav"), eu = "NutFixedNav", tu = xi({
  components: {
    NutOverlay: ht,
    Left: nn
  },
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    overlay: {
      type: Boolean,
      default: !0
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
      default: () => ({
        top: "auto",
        bottom: "auto"
      }),
      type: Object
    },
    type: {
      default: "right",
      type: String
    }
  },
  emits: ["update:visible", "selected"],
  setup(e, { emit: t }) {
    const n = Se(eu), o = S(() => ({
      ["nut-fixed-nav"]: !0,
      active: e.visible,
      [e.type]: !0
    })), l = z(-1);
    return { classes: o, updateValue: (r = !e.visible) => {
      t("update:visible", r);
    }, selected: (r, i) => {
      t("selected", {
        item: r,
        event: i
      }), l.value = r.id;
    }, translate: n, current: l };
  }
}), nu = { class: "nut-fixed-nav__list" }, ou = ["onClick"], lu = ["src"], su = { class: "span" }, au = {
  key: 0,
  class: "b"
}, ru = { class: "text" };
function iu(e, t, n, o, l, s) {
  const a = X("nut-overlay"), r = X("Left");
  return c(), d("view", {
    class: B(e.classes),
    style: V(e.position)
  }, [
    e.overlay ? (c(), J(a, {
      key: 0,
      visible: e.visible,
      "z-index": 200,
      onClick: t[0] || (t[0] = (i) => e.updateValue(!1))
    }, null, 8, ["visible"])) : N("", !0),
    T(e.$slots, "list", {}, () => [
      g("view", nu, [
        (c(!0), d(Z, null, ie(e.navList, (i, f) => (c(), d("view", {
          key: i.id || f,
          class: B(["nut-fixed-nav__list-item", { active: i.id == e.current }]),
          onClick: (p) => e.selected(i, p)
        }, [
          g("img", {
            src: i.icon
          }, null, 8, lu),
          g("view", su, P(i.text), 1),
          i.num ? (c(), d("view", au, P(i.num), 1)) : N("", !0)
        ], 10, ou))), 128))
      ])
    ]),
    g("div", {
      class: "nut-fixed-nav__btn",
      onClick: t[1] || (t[1] = (i) => e.updateValue())
    }, [
      T(e.$slots, "btn", {}, () => [
        ee(r, { color: "#fff" }),
        g("view", ru, P(e.visible ? e.activeText || e.translate("activeText") : e.unActiveText || e.translate("unActiveText")), 1)
      ])
    ])
  ], 6);
}
const uu = /* @__PURE__ */ le(tu, [["render", iu]]), wo = Symbol("nut-menu"), { componentName: cu, create: du } = ne("menu"), fu = du({
  components: {
    RectUp: Cr,
    RectDown: yr
  },
  props: {
    activeColor: {
      type: String,
      default: ""
    },
    overlay: {
      type: Boolean,
      default: !0
    },
    lockScroll: {
      type: Boolean,
      default: !0
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !0
    },
    direction: {
      type: String,
      default: "down"
    },
    scrollFixed: {
      type: [Boolean, String, Number],
      default: !1
    },
    titleClass: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = z(), n = z(0), o = z(!1), { children: l, linkChildren: s } = pt(wo), a = S(() => l.some((b) => b.state.showWrapper)), r = S(() => ({
      [cu]: !0,
      "scroll-fixed": o.value
    })), i = () => {
      if (t.value) {
        const b = Ye(t);
        e.direction === "down" ? n.value = b.bottom : n.value = window.innerHeight - b.top;
      }
    };
    s({ props: e, offset: n });
    const f = (b) => {
      l.forEach((w, k) => {
        k === b ? (i(), w.toggle()) : w.state.showPopup && w.toggle(!1, { immediate: !0 });
      });
    }, p = (b) => Math.max(0, "scrollTop" in b ? b.scrollTop : b.pageYOffset), y = () => {
      const { scrollFixed: b } = e, w = p(window);
      o.value = w > (typeof b == "boolean" ? 30 : Number(b));
    }, v = (b) => {
      let w = "";
      const { titleClass: k } = e;
      return b && (w += "active"), k && (w += ` ${k}`), w;
    };
    return $e(() => {
      const { scrollFixed: b } = e;
      b && window.addEventListener("scroll", y);
    }), Xe(() => {
      const { scrollFixed: b } = e;
      b && window.removeEventListener("scroll", y);
    }), {
      toggleItem: f,
      children: l,
      opened: a,
      classes: r,
      barRef: t,
      getClasses: v
    };
  }
}), pu = ["onClick"], mu = { class: "nut-menu__title-text" }, hu = { class: "nut-menu__title-icon" };
function vu(e, t, n, o, l, s) {
  const a = X("RectUp"), r = X("RectDown");
  return c(), d("view", {
    class: B(e.classes)
  }, [
    g("view", {
      ref: "barRef",
      class: B(["nut-menu__bar", { opened: e.opened }])
    }, [
      (c(!0), d(Z, null, ie(e.children, (i, f) => (c(), d("view", {
        key: f,
        class: B(["nut-menu__item", { disabled: i.disabled, active: i.state.showPopup }]),
        style: V({ color: i.state.showPopup ? e.activeColor : "" }),
        onClick: (p) => !i.disabled && e.toggleItem(f)
      }, [
        g("view", {
          class: B(["nut-menu__title", e.getClasses(i.state.showPopup)])
        }, [
          g("view", mu, P(i.renderTitle()), 1),
          g("span", hu, [
            T(e.$slots, "icon", {}, () => [
              e.direction === "up" ? (c(), J(a, { key: 0 })) : (c(), J(r, { key: 1 }))
            ])
          ])
        ], 2)
      ], 14, pu))), 128))
    ], 2),
    T(e.$slots, "default")
  ], 2);
}
const gu = /* @__PURE__ */ le(fu, [["render", vu]]), { create: yu } = ne("menu-item"), bu = yu({
  props: {
    title: String,
    options: {
      type: Array,
      default: []
    },
    disabled: {
      type: Boolean,
      default: !1
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
    NutPopup: Ae,
    Check: eo
  },
  emits: ["update:modelValue", "change", "open", "close"],
  setup(e, { emit: t }) {
    const n = he({
      showPopup: !1,
      showWrapper: !1
    }), { parent: o } = mt(wo), l = S(() => o.props.direction === "down" ? {
      top: o.offset.value + "px"
    } : {
      bottom: o.offset.value + "px"
    }), s = S(() => {
      const y = { height: o.offset.value + "px" };
      return o.props.direction === "down" ? pe(G({}, y), { top: "0px" }) : pe(G({}, y), { bottom: "0px" });
    });
    return {
      style: l,
      placeholderElementStyle: s,
      renderTitle: () => {
        var v;
        if (e.title)
          return e.title;
        const y = (v = e.options) == null ? void 0 : v.find((b) => b.value === e.modelValue);
        return y ? y.text : "";
      },
      state: n,
      parent: o,
      toggle: (y = !n.showPopup) => {
        y !== n.showPopup && (n.showPopup = y, y && (n.showWrapper = !0, t("open")));
      },
      onClick: (y) => {
        n.showPopup = !1, y.value !== e.modelValue && (t("update:modelValue", y.value), t("change", y.value));
      },
      handleClose: () => {
        t("close"), n.showWrapper = !1;
      },
      handleClickOutside: () => {
        n.showPopup = !1, t("close");
      }
    };
  }
}), $u = { class: "nut-menu-item__content nut-menu-item__overflow" }, wu = ["onClick"];
function ku(e, t, n, o, l, s) {
  const a = X("Check"), r = X("nut-popup");
  return Ie((c(), d("view", {
    class: "nut-menu-item",
    style: V(e.style)
  }, [
    Ie(g("div", {
      class: "nut-menu-item-placeholder-element",
      style: V(e.placeholderElementStyle),
      onClick: t[0] || (t[0] = (...i) => e.handleClickOutside && e.handleClickOutside(...i))
    }, null, 4), [
      [Me, e.state.showPopup]
    ]),
    ee(r, dt(e.$attrs, {
      visible: e.state.showPopup,
      "onUpdate:visible": t[1] || (t[1] = (i) => e.state.showPopup = i),
      style: { position: "absolute" },
      "overlay-style": { position: "absolute" },
      position: e.parent.props.direction === "down" ? "top" : "bottom",
      duration: e.parent.props.duration,
      "destroy-on-close": !1,
      overlay: e.parent.props.overlay,
      "lock-scroll": e.parent.props.lockScroll,
      "teleport-disable": !1,
      "close-on-click-overlay": e.parent.props.closeOnClickOverlay,
      onClosed: e.handleClose
    }), {
      default: te(() => [
        g("view", $u, [
          (c(!0), d(Z, null, ie(e.options, (i, f) => (c(), d("view", {
            key: f,
            class: B(["nut-menu-item__option", [{ active: i.value === e.modelValue }]]),
            style: V({ "flex-basis": 100 / e.cols + "%" }),
            onClick: (p) => e.onClick(i)
          }, [
            i.value === e.modelValue ? (c(), d("span", {
              key: 0,
              class: B(["nut-menu-item__span", [i.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]])
            }, [
              T(e.$slots, "icon", {}, () => [
                ee(a, dt({ ref_for: !0 }, e.$attrs, {
                  color: e.parent.props.activeColor
                }), null, 16, ["color"])
              ])
            ], 2)) : N("", !0),
            g("view", {
              class: B([i.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]),
              style: V({ color: i.value === e.modelValue ? e.parent.props.activeColor : "" })
            }, P(i.text), 7)
          ], 14, wu))), 128)),
          T(e.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["visible", "position", "duration", "overlay", "lock-scroll", "close-on-click-overlay", "onClosed"])
  ], 4)), [
    [Me, e.state.showWrapper]
  ]);
}
const Cu = /* @__PURE__ */ le(bu, [["render", ku]]), ko = Symbol("nut-tabbar"), Co = /* @__PURE__ */ ve({
  name: "NutTabbar",
  __name: "tabbar",
  props: {
    modelValue: { default: 0 },
    bottom: { type: Boolean, default: !1 },
    unactiveColor: { default: "" },
    activeColor: { default: "" },
    safeAreaInsetBottom: { type: Boolean, default: !1 },
    placeholder: { type: Boolean, default: !1 },
    beforeSwitch: { type: Function, default: () => !0 }
  },
  emits: ["tabSwitch", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = z(), s = z(null), a = z(n.modelValue), r = S(() => ({
      ["nut-tabbar"]: !0,
      "nut-tabbar-bottom": n.bottom,
      "nut-tabbar-safebottom": n.safeAreaInsetBottom
    })), { children: i, linkChildren: f } = pt(ko);
    return f({ props: n, activeIndex: a, changeIndex: (v, b) => Ue(this, null, function* () {
      if ((yield n.beforeSwitch(i[v], b)) === !1)
        return Promise.reject();
      a.value = b, o("update:modelValue", b), o("tabSwitch", i[v], b);
    }) }), Q(
      () => n.modelValue,
      (v) => {
        a.value = v;
      }
    ), $e(() => {
      n.bottom && n.placeholder && _e(() => {
        var b;
        const v = (b = s.value) == null ? void 0 : b.getBoundingClientRect().height;
        v && (l.value = v);
      });
    }), (v, b) => (c(), d("div", {
      class: B({ "nut-tabbar__placeholder": v.bottom && v.placeholder }),
      style: V({ height: l.value + "px" })
    }, [
      g("view", {
        ref_key: "nutTabbar",
        ref: s,
        class: B(r.value)
      }, [
        T(v.$slots, "default")
      ], 2)
    ], 6));
  }
});
ye(Co);
const Su = { class: "nut-badge" }, un = /* @__PURE__ */ ve({
  name: "NutBadge",
  __name: "badge",
  props: {
    value: {},
    max: { default: 1e4 },
    dot: { type: Boolean, default: !1 },
    bubble: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    top: { default: "0" },
    right: { default: "0" },
    zIndex: { default: 9 },
    color: { default: "" }
  },
  setup(e) {
    const t = e, n = S(() => ({
      top: `${t.top}px`,
      right: `${t.right}px`,
      zIndex: t.zIndex,
      background: t.color
    })), o = S(() => {
      if (t.dot) return;
      const l = t.value, s = t.max;
      return typeof l == "number" && typeof s == "number" && s < l ? `${s}+` : l;
    });
    return (l, s) => (c(), d("view", Su, [
      Ie(g("view", {
        class: "nut-badge__icon",
        style: V(n.value)
      }, [
        T(l.$slots, "icon")
      ], 4), [
        [Me, !l.hidden && !l.dot && l.$slots.icon]
      ]),
      T(l.$slots, "default"),
      Ie(g("view", {
        class: B(["nut-badge__content nut-badge__content--sup", { "nut-badge__content--dot": l.dot, "nut-badge__content--bubble": !l.dot && l.bubble }]),
        style: V(n.value)
      }, P(o.value), 7), [
        [Me, !l.hidden && (o.value || l.dot)]
      ])
    ]));
  }
});
ye(un);
const Tu = { class: "nut-tabbar-item_icon-box" }, _u = {
  key: 0,
  class: "nut-tabbar-item_icon-box_icon"
}, Nu = { key: 1 }, Du = { key: 0 }, So = /* @__PURE__ */ ve({
  name: "NutTabbarItem",
  __name: "tabbar-item",
  props: {
    tabTitle: { default: "" },
    name: {},
    icon: {},
    href: { default: "" },
    to: {}
  },
  setup(e) {
    const t = e, n = ln(), { parent: o, index: l } = mt(ko), s = S(() => {
      var i;
      return ((i = t.name) != null ? i : l.value) === o.activeIndex.value;
    }), a = S(() => s.value ? o.props.activeColor : o.props.unactiveColor), r = () => Ue(this, null, function* () {
      var i, f, p;
      try {
        const y = (i = t.name) != null ? i : l.value;
        if (yield o.changeIndex(l.value, y), (f = o.children[l.value]) != null && f.href) {
          window.location.href = o.children[l.value].href;
          return;
        }
        if ((p = o.children[l.value]) != null && p.to) {
          const v = o.children[l.value].to;
          v && n ? n.push(v) : location.replace(v);
        }
      } catch (y) {
      }
    });
    return (i, f) => (c(), d("div", {
      class: B(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !s.value }]),
      style: V({
        color: a.value
      }),
      onClick: r
    }, [
      ee(ce(un), bl($l(i.$attrs)), {
        default: te(() => [
          g("view", Tu, [
            i.$slots.icon ? (c(), d("div", _u, [
              T(i.$slots, "icon", { active: s.value })
            ])) : N("", !0),
            i.icon && !i.$slots.icon ? (c(), d("view", Nu, [
              (c(), J(ze(ce(nt)(i.icon)), { class: "nut-popover-item-img" }))
            ])) : N("", !0),
            g("view", {
              class: B(["nut-tabbar-item_icon-box_nav-word", { "nut-tabbar-item_icon-box_big-word": !i.icon && !i.$slots.icon }])
            }, [
              T(i.$slots, "default", {}, () => [
                i.tabTitle ? (c(), d("view", Du, P(i.tabTitle), 1)) : N("", !0)
              ])
            ], 2)
          ])
        ]),
        _: 3
      }, 16)
    ], 6));
  }
});
ye(So);
const { create: Iu } = ne("elevator"), Bu = Iu({
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
      default: !1
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
  setup(e, { emit: t, expose: n }) {
    const o = z(null), l = he({
      anchorIndex: 0,
      codeIndex: 0,
      listHeight: [],
      listGroup: [],
      touchState: {
        y1: 0,
        y2: 0
      },
      scrollStart: !1,
      currentIndex: 0,
      currentData: {},
      currentKey: "",
      scrollY: 0,
      diff: -1,
      fixedTop: 0
    }), s = S(() => o.value.clientHeight), a = (u, m) => u.getAttribute("data-" + m), r = (u) => {
      _e(() => {
        !l.listGroup.includes(u) && u != null && l.listGroup.push(u);
      });
    }, i = () => {
      let u = 0;
      l.listHeight.push(u);
      for (let m = 0; m < l.listGroup.length; m++) {
        let h = l.listGroup[m];
        u += Math.floor(h.clientHeight), l.listHeight.push(u);
      }
    }, f = (u) => {
      !u && u !== 0 || (u < 0 && (u = 0), u > l.listHeight.length - 2 && (u = l.listHeight.length - 2), l.codeIndex = u, o.value.scrollTo(0, l.listHeight[u]));
    }, p = (u) => {
      l.scrollStart = !0;
      let m = a(u.target, "index"), h = u.touches[0];
      l.touchState.y1 = h.pageY, l.anchorIndex = +m, l.codeIndex = +m, f(+m);
    }, y = (u) => {
      let m = u.touches[0];
      l.touchState.y2 = m.pageY;
      let h = (l.touchState.y2 - l.touchState.y1) / e.spaceHeight | 0;
      l.codeIndex = l.anchorIndex + h, f(l.codeIndex);
    }, v = () => {
      l.scrollStart = !1;
    }, b = (u, m) => {
      t("clickItem", u, m), l.currentData = m, l.currentKey = u;
    }, w = (u) => {
      t("clickIndex", u);
    }, k = (u) => {
      let h = u.target.scrollTop;
      const $ = l.listHeight;
      l.scrollY = h;
      for (let A = 0; A < $.length - 1; A++) {
        let E = $[A], I = $[A + 1];
        if (l.scrollY >= E && l.scrollY < I) {
          l.currentIndex = A, l.diff = I - l.scrollY;
          return;
        }
      }
      l.currentIndex = $.length - 2;
    };
    return $e(() => {
      o.value && o.value.addEventListener("scroll", k);
    }), n({
      scrollTo: f
    }), Q(
      () => l.listGroup.length,
      () => {
        l.listHeight = [], _e(i);
      }
    ), Q(
      () => l.diff,
      (u) => {
        const m = l.listHeight;
        let h = u > 0 && u < e.titleHeight ? u - e.titleHeight : 0;
        l.scrollY + s.value === m[m.length - 1] && h !== 0 && (h = 0), l.fixedTop !== h && (l.fixedTop = h);
      }
    ), Q(
      () => l.currentIndex,
      (u) => {
        t("change", u);
      }
    ), pe(G({}, we(l)), {
      clientHeight: s,
      setListGroup: r,
      listview: o,
      touchStart: p,
      touchMove: y,
      touchEnd: v,
      handleClickItem: b,
      handleClickIndex: w
    });
  }
}), Mu = { class: "nut-elevator" }, Lu = { class: "nut-elevator__list__item__code" }, Pu = ["onClick"], Au = ["innerHTML"], Eu = { class: "nut-elevator__list__fixed" }, zu = { class: "nut-elevator__list__fixed-title" }, Vu = { class: "nut-elevator__bars__inner" }, Hu = ["data-index", "onClick"];
function Ou(e, t, n, o, l, s) {
  var a, r;
  return c(), d("view", Mu, [
    g("view", {
      ref: "listview",
      class: "nut-elevator__list",
      style: V({ height: isNaN(+e.height) ? e.height : `${e.height}px` })
    }, [
      (c(!0), d(Z, null, ie(e.indexList, (i) => (c(), d("view", {
        key: i[e.acceptKey],
        ref_for: !0,
        ref: e.setListGroup,
        class: "nut-elevator__list__item"
      }, [
        g("view", Lu, P(i[e.acceptKey]), 1),
        (c(!0), d(Z, null, ie(i.list, (f) => (c(), d("view", {
          key: f.id,
          class: B(["nut-elevator__list__item__name", {
            "nut-elevator__list__item__name--highcolor": e.currentData.id === f.id && e.currentKey === i[e.acceptKey]
          }]),
          onClick: (p) => e.handleClickItem(i[e.acceptKey], f)
        }, [
          e.$slots.default ? T(e.$slots, "default", {
            key: 1,
            item: f
          }) : (c(), d("span", {
            key: 0,
            innerHTML: f.name
          }, null, 8, Au))
        ], 10, Pu))), 128))
      ]))), 128))
    ], 4),
    Ie(g("view", Eu, [
      g("view", zu, P((r = (a = e.indexList) == null ? void 0 : a[e.currentIndex]) == null ? void 0 : r[e.acceptKey]), 1)
    ], 512), [
      [Me, e.scrollY > 0 && e.isSticky]
    ]),
    e.indexList.length ? Ie((c(), d("view", {
      key: 0,
      class: "nut-elevator__code--current"
    }, P(e.indexList[e.codeIndex][e.acceptKey]), 513)), [
      [Me, e.scrollStart]
    ]) : N("", !0),
    g("view", {
      class: "nut-elevator__bars",
      onTouchstart: t[0] || (t[0] = (...i) => e.touchStart && e.touchStart(...i)),
      onTouchmove: t[1] || (t[1] = De((...i) => e.touchMove && e.touchMove(...i), ["stop", "prevent"])),
      onTouchend: t[2] || (t[2] = (...i) => e.touchEnd && e.touchEnd(...i))
    }, [
      g("view", Vu, [
        (c(!0), d(Z, null, ie(e.indexList, (i, f) => (c(), d("view", {
          key: i[e.acceptKey],
          class: B(["nut-elevator__bars__inner__item", { active: i[e.acceptKey] === e.indexList[e.currentIndex][e.acceptKey] }]),
          "data-index": f,
          onClick: (p) => e.handleClickIndex(i[e.acceptKey])
        }, P(i[e.acceptKey]), 11, Hu))), 128))
      ])
    ], 32)
  ]);
}
const To = /* @__PURE__ */ le(Bu, [["render", Ou]]), { create: Ru } = ne("pagination"), Fu = "NutPagination", Wu = Ru({
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
      default: !1
    }
  },
  components: {},
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = Se(Fu), { modelValue: o, mode: l, showPageSize: s, forceEllipses: a } = we(e), r = S(() => {
      const { pageCount: y, totalItems: v, itemsPerPage: b } = we(e), w = +y.value || Math.ceil(+v.value / +b.value);
      return Math.max(1, w);
    }), i = (y, v) => {
      y > r.value || y < 1 || (y != o.value && t("update:modelValue", y), v && t("change", y));
    }, f = (y, v, b = !1) => ({ number: y, text: v, active: b }), p = S(() => {
      if (l.value == "simple") return;
      let y = [];
      const v = r.value, b = +s.value;
      let w = 1, k = v;
      const u = v > b;
      u && (w = Math.max(o.value - Math.floor(b / 2), 1), k = w + +b - 1, k > v && (k = v, w = k - +b + 1));
      for (var m = w; m <= k; m++) {
        const h = f(m, m, o.value == m);
        y.push(h);
      }
      if (u && b > 0 && a.value) {
        if (w > 1) {
          const h = f(w - 1, "...");
          y.unshift(h);
        }
        if (k < v) {
          const h = f(k + 1, "...");
          y.push(h);
        }
      }
      return y;
    });
    return ct(() => {
      i(o.value, !1);
    }), {
      modelValue: o,
      select: i,
      countRef: r,
      mode: l,
      pages: p,
      forceEllipses: a,
      translate: n
    };
  }
}), Yu = { class: "nut-pagination" }, ju = {
  key: 0,
  class: "nut-pagination-contain"
}, Ku = ["onClick"], Uu = {
  key: 1,
  class: "nut-pagination-contain"
}, Xu = { class: "nut-pagination-simple" };
function qu(e, t, n, o, l, s) {
  return c(), d("view", Yu, [
    g("view", {
      class: B(["nut-pagination-prev", e.mode == "multi" ? "" : "simple-border", e.modelValue == 1 ? "disabled" : ""]),
      onClick: t[0] || (t[0] = (a) => e.select(e.modelValue - 1, !0))
    }, [
      T(e.$slots, "prev-text", {}, () => [
        ge(P(e.prevText || e.translate("prev")), 1)
      ])
    ], 2),
    e.mode == "multi" ? (c(), d("view", ju, [
      (c(!0), d(Z, null, ie(e.pages, (a, r) => (c(), d("view", {
        key: r + "pagination",
        class: B(["nut-pagination-item", a.active ? "active" : ""]),
        onClick: (i) => e.select(a.number, !0)
      }, [
        T(e.$slots, "page", { item: a }, () => [
          ge(P(a.text), 1)
        ])
      ], 10, Ku))), 128))
    ])) : N("", !0),
    e.mode == "simple" ? (c(), d("view", Uu, [
      g("view", Xu, P(e.modelValue) + "/" + P(e.countRef), 1)
    ])) : N("", !0),
    g("view", {
      class: B(["nut-pagination-next", e.modelValue >= e.countRef ? "disabled" : ""]),
      onClick: t[1] || (t[1] = (a) => e.select(e.modelValue + 1, !0))
    }, [
      T(e.$slots, "next-text", {}, () => [
        ge(P(e.nextText || e.translate("next")), 1)
      ])
    ], 2)
  ]);
}
const Gu = /* @__PURE__ */ le(Wu, [["render", qu]]), Mt = window, Zu = typeof window != "undefined";
function Ju() {
  return typeof Mt != "undefined" ? Mt.requestAnimationFrame || Mt.webkitRequestAnimationFrame || function(e) {
    Mt.setTimeout(e, 1e3 / 60);
  } : function(e) {
    setTimeout(e, 1e3 / 60);
  };
}
function Qu(e) {
  Zu ? cancelAnimationFrame(e) : clearTimeout(e);
}
const Oe = Ju(), Ln = 10;
function xu(e, t) {
  return e > t && e > Ln ? "horizontal" : t > e && t > Ln ? "vertical" : "";
}
function Qe() {
  const e = z(0), t = z(0), n = z(0), o = z(0), l = z(0), s = z(0), a = z(0), r = z(0), i = z(""), f = () => i.value === "vertical", p = () => i.value === "horizontal", y = () => {
    l.value = 0, s.value = 0, a.value = 0, r.value = 0, i.value = "";
  };
  return {
    move: (w) => {
      const k = w.touches[0];
      l.value = k.clientX - e.value, s.value = k.clientY - t.value, n.value = k.clientX, o.value = k.clientY, a.value = Math.abs(l.value), r.value = Math.abs(s.value), i.value || (i.value = xu(a.value, r.value));
    },
    start: (w) => {
      y(), e.value = w.touches[0].clientX, t.value = w.touches[0].clientY;
    },
    reset: y,
    startX: e,
    startY: t,
    moveX: n,
    moveY: o,
    deltaX: l,
    deltaY: s,
    offsetX: a,
    offsetY: r,
    direction: i,
    isVertical: f,
    isHorizontal: p
  };
}
const ec = (e, t, n, o) => {
  const l = z(), s = z({ width: 0, height: 0 }), a = () => Ue(void 0, null, function* () {
    var v, b;
    n && n.getEnv() !== n.ENV_TYPE.WEB ? o(l).then(
      (w) => {
        s.value.width = w.width || 0, s.value.height = w.height || 0;
      },
      () => {
      }
    ) : (s.value.width = ((v = l.value) == null ? void 0 : v.clientWidth) || 0, s.value.height = ((b = l.value) == null ? void 0 : b.clientHeight) || 0);
  });
  $e(() => {
    setTimeout(() => {
      a();
    }, 100);
  });
  const r = he({
    offset: 0,
    moving: !1
  }), i = Qe();
  let f = "";
  const p = (v, b) => {
    var k;
    let w = v;
    switch (e.direction == "horizontal" ? (f = v > 0 ? "right" : "left", w = Math.abs(w) / s.value.width * 100) : (f = b > 0 ? "bottom" : "top", w = b, w = Math.abs(w) / ((k = s.value) == null ? void 0 : k.height) * 100), w > 85 && (w = 85), f) {
      case "left":
      case "top":
        t.isEnd() && (w = 0, r.moving = !1);
        break;
      case "right":
      case "bottom":
        w = -w, t.isBegin() && (w = 0, r.moving = !1);
        break;
    }
    r.offset = w;
  };
  return { touchMethods: {
    onTouchStart(v) {
      e.swipeable && i.start(v);
    },
    onTouchMove(v) {
      e.swipeable && (i.move(v), r.moving = !0, p(i.deltaX.value, i.deltaY.value), e.direction == "horizontal" && i.isHorizontal() && (v.preventDefault(), v.stopPropagation()), e.direction == "vertical" && i.isVertical() && (v.preventDefault(), v.stopPropagation()));
    },
    onTouchEnd() {
      if (r.moving)
        switch (r.moving = !1, f) {
          case "left":
          case "top":
            r.offset > 35 && t.next();
            break;
          case "right":
          case "bottom":
            r.offset < -35 && t.prev();
            break;
        }
    }
  }, touchState: r, tabsContentRef: l };
}, _o = Symbol("nut-tab");
class tc {
  constructor() {
    H(this, "title", "");
    H(this, "titleSlot");
    H(this, "paneKey", "");
    H(this, "disabled", !1);
  }
}
const { create: nc } = ne("tabs"), oc = nc({
  components: { NutSticky: ho, JoySmile: ua },
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
      default: !1
    },
    ellipsis: {
      type: Boolean,
      default: !0
    },
    swipeable: {
      type: Boolean,
      default: !1
    },
    autoHeight: {
      type: Boolean,
      default: !1
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
      default: !1
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
  setup(e, { emit: t, slots: n }) {
    const o = z(null);
    let l;
    Re(_o, {
      activeKey: S(() => e.modelValue || "0"),
      autoHeight: S(() => e.autoHeight),
      animatedTime: S(() => e.animatedTime)
    });
    const s = z([]), a = (C) => {
      C.forEach((D, _) => {
        var j, oe, W, Y, R, x, U, se, ue;
        let K = D.type;
        if (K = K.name || K, K == "NutTabPane") {
          let fe = new tc();
          if ((j = D.props) != null && j.title || (oe = D.props) != null && oe["pane-key"] || (W = D.props) != null && W.paneKey) {
            let Ce = Kt((Y = D.props) == null ? void 0 : Y["pane-key"]), Le = Ce == "number" || Ce == "string" ? String((R = D.props) == null ? void 0 : R["pane-key"]) : null, O = Kt((x = D.props) == null ? void 0 : x.paneKey), q = O == "number" || O == "string" ? String((U = D.props) == null ? void 0 : U.paneKey) : null;
            fe.title = (se = D.props) == null ? void 0 : se.title, fe.paneKey = Le || q || String(_), fe.disabled = (ue = D.props) == null ? void 0 : ue.disabled;
          }
          s.value.push(fe);
        } else {
          if (D.children == " ")
            return;
          a(D.children);
        }
      });
    }, r = z(e.modelValue || 0), i = (C) => {
      let D = s.value.findIndex((_) => _.paneKey == C);
      s.value.length == 0 || D == -1 || (r.value = D);
    }, f = S(() => e.titleScroll && e.direction === "vertical"), p = z(), y = z([]), v = (C) => {
      const D = p.value, _ = y.value;
      if (!D || !_ || !_[r.value])
        return;
      const K = _[r.value];
      let j = 0;
      e.direction === "vertical" ? j = K.offsetTop - D.offsetTop + 10 - (D.offsetHeight - K.offsetHeight) / 2 : j = K.offsetLeft - (D.offsetWidth - K.offsetWidth) / 2, b(D, j, C ? 0 : 0.3, e.direction);
    }, b = (C, D, _, K) => {
      let j = 0;
      const oe = K === "horizontal" ? C.scrollLeft : C.scrollTop, W = _ === 0 ? 1 : Math.round(_ * 1e3 / 16);
      function Y() {
        K === "horizontal" ? C.scrollLeft += (D - oe) / W : C.scrollTop += (D - oe) / W, ++j < W && Oe(Y);
      }
      Y();
    }, w = (C = ((D) => (D = n.default) == null ? void 0 : D.call(n))()) => {
      s.value = [], C = C == null ? void 0 : C.filter((_) => typeof _.children != "string"), C && C.length && a(C), i(e.modelValue), _e(() => {
        v();
      });
    }, k = (C) => {
      l = C.fixed;
    };
    Q(
      () => {
        var C;
        return (C = n.default) == null ? void 0 : C.call(n);
      },
      (C) => {
        w(C);
      }
    );
    const u = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    Q(
      () => e.modelValue,
      (C) => {
        if (i(C), v(), l) {
          let D = Ye(o.value).top + u(), _ = Math.ceil(D - e.top);
          window.scrollTo({
            top: _,
            behavior: "smooth"
          });
        }
      }
    ), $e(w), Tt(w);
    const m = {
      isBegin: () => r.value == 0,
      isEnd: () => r.value == s.value.length - 1,
      next: () => {
        r.value += 1;
        const C = s.value[r.value].disabled;
        if (m.isEnd() && C) {
          m.prev();
          return;
        }
        if (C && r.value < s.value.length - 1) {
          m.next();
          return;
        }
        m.updateValue(s.value[r.value]);
      },
      prev: () => {
        r.value -= 1;
        const C = s.value[r.value].disabled;
        if (m.isBegin() && C) {
          m.next();
          return;
        }
        if (C && r.value > 0) {
          m.prev();
          return;
        }
        m.updateValue(s.value[r.value]);
      },
      updateValue: (C) => {
        t("update:modelValue", C.paneKey), t("change", C);
      },
      tabChange: (C, D) => {
        t("click", C), !(C.disabled || r.value == D) && (r.value = D, m.updateValue(C));
      },
      setTabItemRef: (C, D) => {
        y.value[D] = C;
      }
    }, { tabsContentRef: h, touchState: $, touchMethods: A } = ec(e, m), E = S(() => {
      let C = r.value * 100;
      $.moving && (C += $.offset);
      let D = {
        transform: e.direction == "horizontal" ? `translate3d(-${C}%, 0, 0)` : `translate3d( 0,-${C}%, 0)`,
        transitionDuration: $.moving ? void 0 : `${e.animatedTime}ms`
      };
      return e.animatedTime == 0 && (D = {}), D;
    }), I = S(() => ({
      background: e.background
    })), M = S(() => ({
      color: e.type == "smile" ? e.color : "",
      background: e.type == "line" ? e.color : ""
    })), L = S(() => {
      if (!e.titleGutter) return {};
      const C = Be(e.titleGutter);
      return e.direction === "vertical" ? { paddingTop: C, paddingBottom: C } : { paddingLeft: C, paddingRight: C };
    });
    return G(G({
      navRef: p,
      tabsContentRef: h,
      titles: s,
      contentStyle: E,
      tabsNavStyle: I,
      titleStyle: L,
      tabsActiveStyle: M,
      container: o,
      getScrollY: f,
      onStickyScroll: k
    }, m), A);
  }
}), lc = ["onClick"], sc = ["onClick"];
function ac(e, t, n, o, l, s) {
  const a = X("JoySmile"), r = X("nut-sticky");
  return c(), d("view", {
    ref: "container",
    class: B(["nut-tabs", [e.direction]])
  }, [
    e.sticky ? (c(), J(r, {
      key: 0,
      top: e.top,
      container: e.container,
      onScroll: e.onStickyScroll
    }, {
      default: te(() => [
        g("view", {
          ref: "navRef",
          class: B(["nut-tabs__titles", {
            "nut-tabs__titles-left": e.align === "left",
            [e.type]: e.type,
            scrollable: e.titleScroll,
            [e.size]: e.size
          }]),
          style: V(e.tabsNavStyle)
        }, [
          e.$slots.titles ? T(e.$slots, "titles", { key: 0 }) : (c(!0), d(Z, { key: 1 }, ie(e.titles, (i, f) => (c(), d("view", {
            key: i.paneKey,
            class: B(["nut-tabs__titles-item", {
              "nut-tabs__titles-item-left": e.align === "left",
              active: i.paneKey == e.modelValue,
              disabled: i.disabled
            }]),
            style: V(e.titleStyle),
            onClick: (p) => e.tabChange(i, f)
          }, [
            e.type == "line" ? (c(), d("view", {
              key: 0,
              class: "nut-tabs__titles-item__line",
              style: V(e.tabsActiveStyle)
            }, null, 4)) : N("", !0),
            e.type == "smile" ? (c(), d("view", {
              key: 1,
              class: "nut-tabs__titles-item__smile",
              style: V(e.tabsActiveStyle)
            }, [
              ee(a, { color: e.color }, null, 8, ["color"])
            ], 4)) : N("", !0),
            g("view", {
              class: B(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
            }, P(i.title), 3)
          ], 14, lc))), 128))
        ], 6)
      ]),
      _: 3
    }, 8, ["top", "container", "onScroll"])) : (c(), d("view", {
      key: 1,
      ref: "navRef",
      class: B(["nut-tabs__titles", { "nut-tabs__titles-left": e.align === "left", [e.type]: e.type, scrollable: e.titleScroll, [e.size]: e.size }]),
      style: V(e.tabsNavStyle)
    }, [
      e.$slots.titles ? T(e.$slots, "titles", { key: 0 }) : (c(!0), d(Z, { key: 1 }, ie(e.titles, (i, f) => (c(), d("view", {
        key: i.paneKey,
        ref_for: !0,
        ref: (p) => e.setTabItemRef(p, f),
        class: B(["nut-tabs__titles-item", {
          "nut-tabs__titles-item-left": e.align === "left",
          active: i.paneKey == e.modelValue,
          disabled: i.disabled
        }]),
        style: V(e.titleStyle),
        onClick: (p) => e.tabChange(i, f)
      }, [
        e.type == "line" ? (c(), d("view", {
          key: 0,
          class: "nut-tabs__titles-item__line",
          style: V(e.tabsActiveStyle)
        }, null, 4)) : N("", !0),
        e.type == "smile" ? (c(), d("view", {
          key: 1,
          class: "nut-tabs__titles-item__smile",
          style: V(e.tabsActiveStyle)
        }, [
          ee(a, { color: e.color }, null, 8, ["color"])
        ], 4)) : N("", !0),
        g("view", {
          class: B(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
        }, P(i.title), 3)
      ], 14, sc))), 128))
    ], 6)),
    g("view", {
      ref: "tabsContentRef",
      class: "nut-tabs__content",
      style: V(e.contentStyle),
      onTouchstart: t[0] || (t[0] = (...i) => e.onTouchStart && e.onTouchStart(...i)),
      onTouchmove: t[1] || (t[1] = (...i) => e.onTouchMove && e.onTouchMove(...i)),
      onTouchend: t[2] || (t[2] = (...i) => e.onTouchEnd && e.onTouchEnd(...i)),
      onTouchcancel: t[3] || (t[3] = (...i) => e.onTouchEnd && e.onTouchEnd(...i))
    }, [
      T(e.$slots, "default")
    ], 36)
  ], 2);
}
const No = /* @__PURE__ */ le(oc, [["render", ac]]), { create: rc } = ne("tab-pane"), ic = rc({
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
      default: !1
    }
  },
  emits: ["click"],
  setup(e) {
    const t = Ve(_o), n = S(() => ({
      display: (t == null ? void 0 : t.animatedTime.value) == 0 && e.paneKey != (t == null ? void 0 : t.activeKey.value) ? "none" : void 0
    }));
    return pe(G({}, t), {
      paneStyle: n
    });
  }
});
function uc(e, t, n, o, l, s) {
  return c(), d("view", {
    class: B(["nut-tab-pane", { inactive: e.paneKey != e.activeKey && e.autoHeight }]),
    style: V(e.paneStyle)
  }, [
    T(e.$slots, "default")
  ], 6);
}
const Do = /* @__PURE__ */ le(ic, [["render", uc]]), cc = {
  key: 0,
  class: "nut-indicator--number"
}, dc = {
  key: 1,
  class: "nut-indicator--dot"
}, Io = /* @__PURE__ */ ve({
  name: "NutIndicator",
  __name: "indicator",
  props: {
    size: { default: 3 },
    current: { default: 1 },
    block: { type: Boolean, default: !1 },
    align: { default: "center" },
    fillZero: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = S(() => {
      const o = "nut-indicator";
      return {
        [o]: !0,
        [`${o}--block`]: t.block,
        [`${o}--align__${t.align}`]: t.block && t.align
      };
    });
    return (o, l) => (c(), d("view", {
      class: B(n.value)
    }, [
      (c(!0), d(Z, null, ie(o.size, (s) => (c(), d(Z, { key: s }, [
        s === o.current ? (c(), d("view", cc, P(o.fillZero && ce(Ze)(s) || s), 1)) : (c(), d("view", dc))
      ], 64))), 128))
    ], 2));
  }
});
ye(Io);
const { create: fc } = ne("side-navbar"), pc = fc({
  props: {
    offset: {
      type: [String, Number],
      default: 15
    }
  },
  setup: (e) => {
    const t = z(null), n = he({
      count: 1,
      observer: null
    }), o = (s, a = 1) => {
      var r;
      for (let i = 0; i < s.length; i++) {
        let f = s[i];
        (r = f == null ? void 0 : f.children) != null && r[0] && (f.children[0].style.paddingLeft = +e.offset * a + "px", f.className.includes("nut-side-navbar-item") || o(Array.from(f.children[1].children), ++n.count));
      }
      n.count--;
    }, l = () => {
      let s = t.value.childNodes;
      s != null && s.length && (s = Array.from(s).filter((a) => a.nodeType !== 3).map((a) => a), o(s));
    };
    return $e(() => {
      l(), n.observer = new MutationObserver(function() {
        n.count = 1, l();
      }), n.observer.observe(t.value, {
        attributes: !1,
        childList: !0,
        characterData: !1,
        subtree: !0
      });
    }), pe(G({}, we(n)), {
      list: t
    });
  }
}), mc = { class: "nut-side-navbar" }, hc = { class: "nut-side-navbar__content" }, vc = {
  ref: "list",
  class: "nut-side-navbar__content__list"
};
function gc(e, t, n, o, l, s) {
  return c(), d("view", mc, [
    g("view", hc, [
      g("view", vc, [
        T(e.$slots, "default")
      ], 512)
    ])
  ]);
}
const yc = /* @__PURE__ */ le(pc, [["render", gc]]), { create: bc } = ne("side-navbar-item"), $c = bc({
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}), wc = { class: "nut-side-navbar-item" }, kc = { class: "nut-side-navbar-item__title" };
function Cc(e, t, n, o, l, s) {
  return c(), d("view", wc, [
    g("span", kc, P(e.title), 1)
  ]);
}
const Sc = /* @__PURE__ */ le($c, [["render", Cc]]), { create: Tc } = ne("sub-side-navbar"), _c = Tc({
  props: {
    title: {
      type: String,
      default: ""
    },
    open: {
      type: Boolean,
      default: !0
    }
  },
  components: { ArrowDown2: El, ArrowUp2: Rl },
  emits: ["titleClick"],
  setup: (e, { emit: t }) => {
    const n = he({
      direction: ""
    }), o = S(() => ({
      height: n.direction ? "0px" : "auto"
    })), l = () => {
      t("titleClick"), n.direction = n.direction ? "" : "up";
    };
    return $e(() => {
      n.direction = e.open ? "" : "up";
    }), pe(G({}, we(n)), {
      style: o,
      handleClick: l
    });
  }
}), Nc = { class: "nut-sub-side-navbar" }, Dc = { class: "nut-sub-side-navbar__title__text" }, Ic = { class: "nut-sub-side-navbar__title__icon" };
function Bc(e, t, n, o, l, s) {
  const a = X("ArrowDown2"), r = X("ArrowUp2");
  return c(), d("view", Nc, [
    g("view", {
      class: "nut-sub-side-navbar__title",
      onClick: t[0] || (t[0] = De((...i) => e.handleClick && e.handleClick(...i), ["stop"]))
    }, [
      g("span", Dc, P(e.title), 1),
      g("span", Ic, [
        e.direction ? (c(), J(r, { key: 1 })) : (c(), J(a, { key: 0 }))
      ])
    ]),
    Ie(g("view", {
      class: B(["nut-sub-side-navbar__list", e.direction ? "nutFadeOut" : "nutFadeIn"]),
      style: V(e.style)
    }, [
      T(e.$slots, "default")
    ], 6), [
      [Me, !e.direction]
    ])
  ]);
}
const Mc = /* @__PURE__ */ le(_c, [["render", Bc]]), Bo = Symbol("nut-form"), Mo = Symbol("nut-form-disabled"), Lo = Symbol("nut-form-tip"), Ge = (e) => {
  const { parent: t } = mt(Mo);
  return S(() => {
    var n;
    return e.value || ((n = t == null ? void 0 : t.props) == null ? void 0 : n.disabled) || !1;
  });
}, { componentName: Lc, create: Pc } = ne("range"), Ac = Pc({
  props: {
    range: {
      type: Boolean,
      default: !1
    },
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    buttonColor: String,
    vertical: {
      type: Boolean,
      default: !1
    },
    marks: {
      type: Object,
      default: {}
    },
    hiddenRange: {
      type: Boolean,
      default: !1
    },
    hiddenTag: {
      type: Boolean,
      default: !1
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
  setup(e, { emit: t }) {
    const n = Ge(Je(e, "disabled")), o = z(0);
    let l, s;
    const a = z(), r = z(), i = Qe(), f = S(() => {
      const { marks: W, max: Y, min: R } = e;
      return Object.keys(W).map(parseFloat).sort((se, ue) => se - ue).filter((se) => se >= +R && se <= +Y);
    }), p = S(() => Number(e.max) - Number(e.min)), y = S(() => {
      const W = Lc;
      return {
        [W]: !0,
        [`${W}-disabled`]: n.value,
        [`${W}-vertical`]: e.vertical,
        [`${W}-show-number`]: !e.hiddenRange
      };
    }), v = S(() => {
      const W = "nut-range-container";
      return {
        [W]: !0,
        [`${W}-vertical`]: e.vertical
      };
    }), b = S(() => ({
      background: e.inactiveColor
    })), w = S(() => ({
      borderColor: e.buttonColor
    })), k = (W) => !!e.range && Array.isArray(W), u = () => {
      const { modelValue: W, min: Y } = e;
      return k(W) ? `${(W[1] - W[0]) * 100 / p.value}%` : `${(W - Number(Y)) * 100 / p.value}%`;
    }, m = () => {
      const { modelValue: W, min: Y } = e;
      return k(W) ? `${(W[0] - Number(Y)) * 100 / p.value}%` : "0%";
    }, h = S(() => e.vertical ? {
      height: u(),
      top: m(),
      background: e.activeColor,
      transition: r.value ? "none" : void 0
    } : {
      width: u(),
      left: m(),
      background: e.activeColor,
      transition: r.value ? "none" : void 0
    }), $ = (W) => {
      const Y = "nut-range-mark", { modelValue: R, max: x, min: U } = e;
      let se = Number(U), ue = Number(x);
      if (e.range) {
        const [Ce, Le] = R;
        se = Ce, ue = Le;
      } else
        ue = R;
      let fe = W <= +ue && W >= se;
      return {
        [`${Y}-text`]: !0,
        [`${Y}-text-active`]: fe
      };
    }, A = (W) => {
      const { min: Y, vertical: R } = e;
      let x = {
        left: `${(W - Number(Y)) / p.value * 100}%`
      };
      return R && (x = {
        top: `${(W - Number(Y)) / p.value * 100}%`
      }), x;
    }, E = (W) => {
      const { modelValue: Y, max: R, min: x } = e;
      let U = Number(x), se = Number(R);
      if (e.range) {
        const [Ce, Le] = Y;
        U = Ce, se = Le;
      }
      return {
        background: W <= se && W >= U ? e.activeColor : e.inactiveColor
      };
    }, I = (W) => {
      const { min: Y, max: R, step: x } = e;
      return W = Math.max(+Y, Math.min(W, +R)), Math.round(W / +x) * +x;
    }, M = (W, Y) => JSON.stringify(W) === JSON.stringify(Y), L = (W) => W[0] > W[1] ? W.slice(0).reverse() : W, C = (W, Y) => {
      k(W) ? W = L(W).map(I) : W = I(W), M(W, e.modelValue) || t("update:modelValue", W), Y && !M(W, l) && t("change", W);
    }, D = (W) => {
      if (n.value)
        return;
      const { min: Y, modelValue: R } = e, x = Ye(a);
      let U = W.clientX - x.left, se = x.width;
      e.vertical && (U = W.clientY - x.top, se = x.height);
      const ue = Number(Y) + U / se * p.value;
      if (k(R)) {
        const [fe, Ce] = R, Le = (fe + Ce) / 2;
        ue <= Le ? C([ue, Ce], !0) : C([fe, ue], !0);
      } else
        C(ue, !0);
    }, _ = (W) => {
      n.value || (i.start(W), s = e.modelValue, k(s) ? l = s.map(I) : l = I(s), r.value = "start");
    }, K = (W) => {
      if (n.value)
        return;
      r.value === "start" && t("dragStart"), i.move(W), r.value = "draging";
      const Y = Ye(a);
      let R = i.deltaX.value, x = Y.width, U = R / x * p.value;
      e.vertical && (R = i.deltaY.value, x = Y.height, U = R / x * p.value), k(l) ? s[o.value] = l[o.value] + U : s = l + U, C(s);
    }, j = () => {
      n.value || (r.value === "draging" && (C(s, !0), t("dragEnd")), r.value = "");
    }, oe = (W) => qn(e.modelValue) && typeof W == "number" ? e.modelValue[W] : Number(e.modelValue);
    return pe(G({
      root: a,
      classes: y,
      wrapperStyle: b,
      buttonStyle: w,
      onClick: D,
      onTouchStart: _,
      onTouchMove: K,
      onTouchEnd: j
    }, we(e)), {
      barStyle: h,
      curValue: oe,
      buttonIndex: o,
      containerClasses: v,
      markClassName: $,
      marksStyle: A,
      marksList: f,
      tickStyle: E,
      disabled: n
    });
  }
}), Ec = {
  key: 0,
  class: "nut-range-min"
}, zc = {
  key: 0,
  class: "nut-range-mark"
}, Vc = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "onTouchstart"], Hc = {
  key: 0,
  class: "number"
}, Oc = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax"], Rc = {
  key: 0,
  class: "number"
}, Fc = {
  key: 1,
  class: "nut-range-max"
};
function Wc(e, t, n, o, l, s) {
  return c(), d("view", {
    class: B(e.containerClasses)
  }, [
    e.hiddenRange ? N("", !0) : (c(), d("view", Ec, P(+e.min), 1)),
    g("view", {
      ref: "root",
      style: V(e.wrapperStyle),
      class: B(e.classes),
      onClick: t[9] || (t[9] = De((...a) => e.onClick && e.onClick(...a), ["stop"]))
    }, [
      e.marksList.length > 0 ? (c(), d("view", zc, [
        (c(!0), d(Z, null, ie(e.marksList, (a) => (c(), d("span", {
          key: a,
          class: B(e.markClassName(a)),
          style: V(e.marksStyle(a))
        }, [
          ge(P(a) + " ", 1),
          g("span", {
            class: "nut-range-tick",
            style: V(e.tickStyle(a))
          }, null, 4)
        ], 6))), 128))
      ])) : N("", !0),
      g("view", {
        class: "nut-range-bar",
        style: V(e.barStyle)
      }, [
        e.range ? (c(), d(Z, { key: 0 }, ie([0, 1], (a) => g("view", {
          key: a,
          role: "slider",
          class: B({
            "nut-range-button-wrapper-left": a == 0,
            "nut-range-button-wrapper-right": a == 1
          }),
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(a),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: De(
            (r) => {
              typeof a == "number" && (e.buttonIndex = a), e.onTouchStart(r);
            },
            ["stop", "prevent"]
          ),
          onTouchmove: t[0] || (t[0] = De((...r) => e.onTouchMove && e.onTouchMove(...r), ["stop", "prevent"])),
          onTouchend: t[1] || (t[1] = De((...r) => e.onTouchEnd && e.onTouchEnd(...r), ["stop", "prevent"])),
          onTouchcancel: t[2] || (t[2] = De((...r) => e.onTouchEnd && e.onTouchEnd(...r), ["stop", "prevent"])),
          onClick: t[3] || (t[3] = (r) => r.stopPropagation())
        }, [
          e.$slots.button ? T(e.$slots, "button", { key: 0 }) : (c(), d("view", {
            key: 1,
            class: "nut-range-button",
            style: V(e.buttonStyle)
          }, [
            e.hiddenTag ? N("", !0) : (c(), d("view", Hc, P(e.curValue(a)), 1))
          ], 4))
        ], 42, Vc)), 64)) : (c(), d("view", {
          key: 1,
          role: "slider",
          class: "nut-range-button-wrapper",
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: t[4] || (t[4] = De(
            (a) => {
              e.onTouchStart(a);
            },
            ["stop", "prevent"]
          )),
          onTouchmove: t[5] || (t[5] = De((...a) => e.onTouchMove && e.onTouchMove(...a), ["stop", "prevent"])),
          onTouchend: t[6] || (t[6] = De((...a) => e.onTouchEnd && e.onTouchEnd(...a), ["stop", "prevent"])),
          onTouchcancel: t[7] || (t[7] = De((...a) => e.onTouchEnd && e.onTouchEnd(...a), ["stop", "prevent"])),
          onClick: t[8] || (t[8] = (a) => a.stopPropagation())
        }, [
          e.$slots.button ? T(e.$slots, "button", { key: 0 }) : (c(), d("view", {
            key: 1,
            class: "nut-range-button",
            style: V(e.buttonStyle)
          }, [
            e.hiddenTag ? N("", !0) : (c(), d("view", Rc, P(e.curValue()), 1))
          ], 4))
        ], 40, Oc))
      ], 4)
    ], 6),
    e.hiddenRange ? N("", !0) : (c(), d("view", Fc, P(+e.max), 1))
  ], 2);
}
const Po = /* @__PURE__ */ le(Ac, [["render", Wc]]), { create: Yc } = ne("searchbar"), jc = "NutSearchbar", Kc = Yc({
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    inputType: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: ""
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
      default: !0
    },
    clearIcon: {
      type: Object,
      default: () => tn
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
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    inputAlign: {
      type: String,
      default: "left"
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: !1
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
  setup(e, { emit: t }) {
    const n = Ge(Je(e, "disabled")), o = Se(jc), l = he({
      active: !1
    }), s = S(() => ({
      background: e.background
    })), a = S(() => ({
      background: e.inputBackground
    })), r = (h) => {
      let A = h.target.value;
      e.maxLength && A.length > Number(e.maxLength) && (A = A.slice(0, Number(e.maxLength))), t("update:modelValue", A, h), t("change", A, h);
    }, i = z({}), f = (h) => {
      let A = h.target.value;
      l.active = !0, i.value = e.focusStyle, t("focus", A, h);
    }, p = (h) => {
      setTimeout(() => {
        l.active = !1;
      }, 0);
      let A = h.target.value;
      e.maxLength && A.length > Number(e.maxLength) && (A = A.slice(0, Number(e.maxLength))), i.value = {}, t("blur", A, h);
    }, y = (h) => {
      t("update:modelValue", "", h), t("change", "", h), t("clear", "");
    }, v = () => {
      t("search", e.modelValue);
    }, b = (h) => {
      t("clickInput", h);
    }, w = (h) => {
      t("clickLeftIcon", e.modelValue, h);
    }, k = (h) => {
      t("clickRightIcon", e.modelValue, h);
    }, u = S(() => ({
      textAlign: e.inputAlign
    })), m = z(null);
    return $e(() => {
      e.autofocus && m.value.focus();
    }), pe(G({
      renderIcon: nt,
      inputsearch: m
    }, we(l)), {
      valueChange: r,
      valueFocus: f,
      valueBlur: p,
      handleClear: y,
      handleSubmit: v,
      searchbarStyle: s,
      inputSearchbarStyle: a,
      focusCss: i,
      translate: o,
      clickInput: b,
      leftIconClick: w,
      rightIconClick: k,
      styleSearchbar: u,
      disabled: n
    });
  }
}), Uc = {
  key: 0,
  class: "nut-searchbar__search-label"
}, Xc = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__left-search-icon"
}, qc = ["type", "maxlength", "placeholder", "value", "disabled", "readonly"], Gc = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__iptright-search-icon"
}, Zc = {
  key: 2,
  class: "nut-searchbar__search-icon nut-searchbar__right-search-icon"
};
function Jc(e, t, n, o, l, s) {
  return c(), d("view", {
    class: B(["nut-searchbar", { "safe-area-inset-bottom": e.safeAreaInsetBottom }]),
    style: V(e.searchbarStyle)
  }, [
    e.label ? (c(), d("span", Uc, P(e.label), 1)) : N("", !0),
    e.$slots.leftout ? (c(), d("view", Xc, [
      T(e.$slots, "leftout")
    ])) : N("", !0),
    g("view", {
      class: B(["nut-searchbar__search-input", e.shape]),
      style: V(G(G({}, e.inputSearchbarStyle), e.focusCss))
    }, [
      e.$slots.leftin ? (c(), d("view", {
        key: 0,
        class: "nut-searchbar__search-icon nut-searchbar__iptleft-search-icon",
        onClick: t[0] || (t[0] = (...a) => e.leftIconClick && e.leftIconClick(...a))
      }, [
        T(e.$slots, "leftin")
      ])) : N("", !0),
      g("view", {
        class: B(["nut-searchbar__input-inner", e.$slots.rightin && "nut-searchbar__input-inner-absolute"])
      }, [
        g("form", {
          class: "nut-searchbar__input-form",
          action: "#",
          onSubmit: t[5] || (t[5] = De((...a) => e.handleSubmit && e.handleSubmit(...a), ["prevent"]))
        }, [
          g("input", {
            ref: "inputsearch",
            class: B(["nut-searchbar__input-bar", e.clearable && "nut-searchbar__input-bar_clear"]),
            type: e.inputType,
            maxlength: e.maxLength,
            placeholder: e.placeholder || e.translate("placeholder"),
            value: e.modelValue,
            disabled: e.disabled,
            readonly: e.readonly,
            style: V(e.styleSearchbar),
            onClick: t[1] || (t[1] = (...a) => e.clickInput && e.clickInput(...a)),
            onInput: t[2] || (t[2] = (...a) => e.valueChange && e.valueChange(...a)),
            onFocus: t[3] || (t[3] = (...a) => e.valueFocus && e.valueFocus(...a)),
            onBlur: t[4] || (t[4] = (...a) => e.valueBlur && e.valueBlur(...a))
          }, null, 46, qc)
        ], 32)
      ], 2),
      g("view", {
        class: B(["nut-searchbar__input-inner-icon", e.$slots.rightin && "nut-searchbar__input-inner-icon-absolute"])
      }, [
        e.clearable ? Ie((c(), d("view", {
          key: 0,
          class: "nut-searchbar__search-icon nut-searchbar__input-clear",
          onClick: t[6] || (t[6] = (...a) => e.handleClear && e.handleClear(...a))
        }, [
          e.$slots["clear-icon"] ? T(e.$slots, "clear-icon", { key: 0 }) : (c(), J(ze(e.renderIcon(e.clearIcon)), { key: 1 }))
        ], 512)), [
          [Me, String(e.modelValue).length > 0]
        ]) : N("", !0),
        e.$slots.rightin ? (c(), d("view", Gc, [
          T(e.$slots, "rightin")
        ])) : N("", !0)
      ], 2)
    ], 6),
    e.$slots.rightout ? (c(), d("view", Zc, [
      T(e.$slots, "rightout")
    ])) : N("", !0)
  ], 6);
}
const Qc = /* @__PURE__ */ le(Kc, [["render", Jc]]), Pt = (e, t, n) => e.map((o) => {
  const { value: l = "value", text: s = "text", children: a = "children" } = n, v = o, { [l]: r, [s]: i, [a]: f } = v, p = Yt(v, [It(l), It(s), It(a)]), y = pe(G({
    loading: !1
  }, p), {
    level: t ? (t && t.level || 0) + 1 : 0,
    value: r,
    text: i,
    children: f,
    _parent: t
  });
  return y.children && y.children.length && (y.children = Pt(y.children, y, n)), y;
}), Ao = (e, t) => {
  let n = 0, o;
  for (; (o = e[n++]) && t(o) !== !0; )
    o.children && o.children.length && Ao(o.children, t);
}, xc = {
  topId: null,
  idKey: "id",
  pidKey: "pid",
  sortKey: ""
}, ed = (e, t) => {
  const n = G(G({}, xc), t || {}), { topId: o, idKey: l, pidKey: s, sortKey: a } = n;
  let r = [], i = {};
  return e.forEach((f) => {
    f = G({}, f);
    const { [l]: p, [s]: y } = f, v = i[y] = i[y] || [];
    !r.length && y === o && (r = v), v.push(f), f.children = i[p] || (i[p] = []);
  }), a && Object.keys(i).forEach((f) => {
    i[f].length > 1 && i[f].sort((p, y) => p[a] - y[a]);
  }), i = null, r;
};
class Pn {
  constructor(t, n) {
    H(this, "nodes");
    H(this, "config");
    this.config = G({
      value: "value",
      text: "text",
      children: "children"
    }, n || {}), this.nodes = Pt(t, null, this.config);
  }
  updateChildren(t, n) {
    n ? n.children = Pt(t, n, this.config) : this.nodes = Pt(t, null, this.config);
  }
  // for test
  getNodeByValue(t) {
    let n;
    return Ao(this.nodes, (o) => {
      if (o.value === t)
        return n = o, !0;
    }), n;
  }
  getPathNodesByValue(t) {
    if (!t.length)
      return [];
    const n = [];
    let o = this.nodes;
    for (; o && o.length; ) {
      const l = o.find((s) => s.value === t[s.level]);
      if (!l)
        break;
      n.push(l), o = l.children;
    }
    return n;
  }
  isLeaf(t, n) {
    const { leaf: o, children: l } = t, s = Array.isArray(l) && !!l.length;
    return o || !s && !n;
  }
  hasChildren(t, n) {
    if (this.isLeaf(t, n))
      return !1;
    const { children: l } = t;
    return Array.isArray(l) && !!l.length;
  }
}
const { create: td } = ne("cascader-item"), nd = td({
  components: {
    Loading: st,
    Checklist: ps,
    NutTabs: No,
    NutTabPane: Do
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
  setup(e, { emit: t }) {
    const n = Se(), o = S(() => ({
      lazy: e.lazy,
      lazyLoad: e.lazyLoad,
      valueKey: e.valueKey,
      textKey: e.textKey,
      childrenKey: e.childrenKey,
      convertConfig: e.convertConfig
    })), l = z(0), s = z(!1), a = z(e.modelValue), r = z(new Pn([], {})), i = z([]), f = S(() => o.value.lazy && !!o.value.lazyLoad), p = /* @__PURE__ */ new Map();
    let y;
    const v = () => Ue(this, null, function* () {
      p.clear(), i.value = [], l.value = 0, s.value = !1, y = null;
      let { options: h } = e;
      o.value.convertConfig && (h = ed(h, o.value.convertConfig)), r.value = new Pn(h, {
        value: o.value.valueKey,
        text: o.value.textKey,
        children: o.value.childrenKey
      }), f.value && !r.value.nodes.length && (yield w({
        root: !0,
        loading: !0,
        text: "",
        value: ""
      })), i.value = [{ nodes: r.value.nodes, selectedNode: null }], b();
    }), b = () => Ue(this, null, function* () {
      const h = a.value;
      if (h === void 0 || !r.value.nodes.length)
        return;
      if (h.length === 0) {
        l.value = 0, i.value = [{ nodes: r.value.nodes, selectedNode: null }];
        return;
      }
      let $ = h;
      if (f.value && Array.isArray(h) && h.length) {
        $ = [];
        let A = r.value.nodes.find((E) => E.value === h[0]);
        if (A) {
          $ = [A.value], s.value = !0;
          const E = yield h.slice(1).reduce((I, M) => Ue(this, null, function* () {
            var D;
            const L = yield I;
            yield w(L);
            const C = (D = L == null ? void 0 : L.children) == null ? void 0 : D.find((_) => _.value === M);
            return C && $.push(M), Promise.resolve(C);
          }), Promise.resolve(A));
          yield w(E), s.value = !1;
        }
      }
      $.length && h === e.modelValue && r.value.getPathNodesByValue($).map((E, I) => {
        l.value = I, u.handleNode(E, !0);
      });
    }), w = (h) => Ue(this, null, function* () {
      if (!h)
        return;
      if (!o.value.lazyLoad) {
        h.leaf = !0;
        return;
      }
      if (r.value.isLeaf(h, f.value) || r.value.hasChildren(h, f.value))
        return;
      h.loading = !0;
      const $ = h.root ? null : h;
      let A = p.get(h);
      A || (A = new Promise((I) => {
        var M, L;
        (L = (M = o.value).lazyLoad) == null || L.call(M, h, I);
      }), p.set(h, A));
      const E = yield A;
      Array.isArray(E) && E.length > 0 ? r.value.updateChildren(E, $) : h.leaf = !0, h.loading = !1, p.delete(h);
    }), k = (h) => {
      const $ = h.map((A) => A.value);
      a.value = $, t("change", $, h), t("update:modelValue", $, h);
    }, u = {
      // 选中一个节点，静默模式不触发事件
      handleNode(h, $) {
        return Ue(this, null, function* () {
          const { disabled: A, loading: E } = h;
          if (!(!$ && A || !i.value[l.value])) {
            if (r.value.isLeaf(h, f.value)) {
              if (h.leaf = !0, i.value[l.value].selectedNode = h, i.value = i.value.slice(0, h.level + 1), !$) {
                const I = i.value.map((M) => M.selectedNode);
                k(I), t("pathChange", I);
              }
              return;
            }
            if (r.value.hasChildren(h, f.value)) {
              const I = h.level + 1;
              if (i.value[l.value].selectedNode = h, i.value = i.value.slice(0, I), i.value.push({
                nodes: h.children || [],
                selectedNode: null
              }), l.value = I, !$) {
                const M = i.value.map((L) => L.selectedNode);
                t("pathChange", M);
              }
              return;
            }
            y = h, !E && (yield w(h), y === h && (i.value[l.value].selectedNode = h, u.handleNode(h, $)));
          }
        });
      },
      handleTabClick(h) {
        y = null, l.value = Number(h.paneKey);
      },
      formatTabTitle(h) {
        return h.selectedNode ? h.selectedNode.text : n("select");
      },
      isSelected(h, $) {
        var A;
        return ((A = h == null ? void 0 : h.selectedNode) == null ? void 0 : A.value) === $.value;
      }
    };
    return Q(
      [o, () => e.options],
      () => {
        v();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), Q(
      () => e.modelValue,
      (h) => {
        h !== a.value && (a.value = h, b());
      }
    ), Q(
      () => e.visible,
      (h) => {
        h && Array.isArray(a.value) && a.value.length > 0 && b();
      }
    ), G({ panes: i, initLoading: s, tabsCursor: l }, u);
  }
}), od = {
  role: "menu",
  class: "nut-cascader-pane"
}, ld = ["aria-checked", "aria-disabled", "onClick"], sd = { class: "nut-cascader-item__title" };
function ad(e, t, n, o, l, s) {
  const a = X("Loading"), r = X("Checklist"), i = X("nut-tab-pane"), f = X("nut-tabs");
  return c(), J(f, {
    modelValue: e.tabsCursor,
    "onUpdate:modelValue": t[0] || (t[0] = (p) => e.tabsCursor = p),
    class: "nut-cascader",
    "title-scroll": "",
    onClick: e.handleTabClick
  }, {
    default: te(() => [
      !e.initLoading && e.panes.length ? (c(!0), d(Z, { key: 0 }, ie(e.panes, (p, y) => (c(), J(i, {
        key: y,
        title: e.formatTabTitle(p)
      }, {
        default: te(() => [
          g("view", od, [
            (c(!0), d(Z, null, ie(p.nodes, (v) => (c(), d("view", {
              key: v.value,
              class: B(["nut-cascader-item", { active: e.isSelected(p, v), disabled: v.disabled }]),
              "aria-checked": e.isSelected(p, v),
              "aria-disabled": v.disabled || void 0,
              role: "menuitemradio",
              onClick: (b) => e.handleNode(v, !1)
            }, [
              g("view", sd, P(v.text), 1),
              v.loading ? (c(), J(a, {
                key: 0,
                class: "nut-cascader-item__icon-loading",
                name: "loading"
              })) : (c(), J(r, {
                key: 1,
                class: "nut-cascader-item__icon-check",
                name: "checklist"
              }))
            ], 10, ld))), 128))
          ])
        ]),
        _: 2
      }, 1032, ["title"]))), 128)) : (c(), J(i, {
        key: 1,
        title: "Loading..."
      }, {
        default: te(() => t[1] || (t[1] = [
          g("view", { class: "nut-cascader-pane" }, null, -1)
        ])),
        _: 1
      }))
    ]),
    _: 1
  }, 8, ["modelValue", "onClick"]);
}
const rd = /* @__PURE__ */ le(nd, [["render", ad]]), { create: id } = ne("cascader"), ud = id({
  components: {
    NutCascaderItem: rd,
    NutPopup: Ae
  },
  props: pe(G({}, Nt), {
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
      default: !0
    },
    convertConfig: Object
  }),
  emits: ["update:modelValue", "change", "pathChange", "update:visible"],
  setup(e, { emit: t }) {
    const n = z(e.modelValue), o = S({
      get() {
        return e.visible;
      },
      set(a) {
        t("update:visible", a);
      }
    }), l = (a, r) => {
      n.value = a, o.value = !1, t("change", a, r), t("update:modelValue", a);
    }, s = (a) => {
      t("pathChange", a);
    };
    return Q(
      () => e.modelValue,
      (a) => {
        a !== n.value && (n.value = a);
      }
    ), {
      onChange: l,
      onPathChange: s,
      innerValue: n,
      innerVisible: o
    };
  }
}), cd = ["innerHTML"];
function dd(e, t, n, o, l, s) {
  const a = X("nut-cascader-item"), r = X("nut-popup");
  return e.poppable ? (c(), J(r, {
    key: 0,
    visible: e.innerVisible,
    "onUpdate:visible": t[0] || (t[0] = (i) => e.innerVisible = i),
    position: "bottom",
    "pop-class": "nut-cascader__popup",
    round: "",
    "lock-scroll": e.lockScroll,
    teleport: e.teleport,
    "teleport-disable": e.teleportDisable,
    closeable: e.closeable,
    "destroy-on-close": !1,
    "close-icon-position": e.closeIconPosition,
    "z-index": e.zIndex
  }, {
    default: te(() => [
      e.title ? (c(), d("view", {
        key: 0,
        class: "nut-cascader__bar",
        innerHTML: e.title
      }, null, 8, cd)) : N("", !0),
      ee(a, {
        "model-value": e.innerValue,
        options: e.options,
        lazy: e.lazy,
        "lazy-load": e.lazyLoad,
        "value-key": e.valueKey,
        "text-key": e.textKey,
        "children-key": e.childrenKey,
        "convert-config": e.convertConfig,
        visible: e.innerVisible,
        onChange: e.onChange,
        onPathChange: e.onPathChange
      }, null, 8, ["model-value", "options", "lazy", "lazy-load", "value-key", "text-key", "children-key", "convert-config", "visible", "onChange", "onPathChange"])
    ]),
    _: 1
  }, 8, ["visible", "lock-scroll", "teleport", "teleport-disable", "closeable", "close-icon-position", "z-index"])) : (c(), J(a, {
    key: 1,
    "model-value": e.innerValue,
    options: e.options,
    lazy: e.lazy,
    "lazy-load": e.lazyLoad,
    "value-key": e.valueKey,
    "text-key": e.textKey,
    "children-key": e.childrenKey,
    "convert-config": e.convertConfig,
    visible: e.innerVisible,
    onChange: e.onChange,
    onPathChange: e.onPathChange
  }, null, 8, ["model-value", "options", "lazy", "lazy-load", "value-key", "text-key", "children-key", "convert-config", "visible", "onChange", "onPathChange"]));
}
const fd = /* @__PURE__ */ le(ud, [["render", dd]]), de = {
  /**
   * 是否为闫年
   * @return {Boolse} true|false
   */
  isLeapYear: function(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  },
  /**
   * 返回星期数
   * @return {String}
   */
  getWhatDay: function(e, t, n) {
    const l = (/* @__PURE__ */ new Date(e + "/" + t + "/" + n)).getDay();
    return ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][l];
  },
  /**
   * 返回星期数
   * @return {Number}
   */
  getMonthPreDay: function(e, t) {
    let o = (/* @__PURE__ */ new Date(e + "/" + t + "/01")).getDay();
    return o == 0 && (o = 7), o;
  },
  /**
   * 返回月份天数
   * @return {Number}
   */
  getMonthDays: function(e, t) {
    return /^0/.test(t) && (t = t.split("")[1]), [0, 31, this.isLeapYear(Number(e)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t];
  },
  /**
   * 补齐数字位数
   * @return {string}
   */
  getNumTwoBit: function(e) {
    return e = Number(e), (e > 9 ? "" : "0") + e;
  },
  /**
   * 日期对象转成字符串
   * @return {string}
   */
  date2Str: function(e, t) {
    t = t || "-";
    const n = e.getFullYear(), o = this.getNumTwoBit(e.getMonth() + 1), l = this.getNumTwoBit(e.getDate());
    return [n, o, l].join(t);
  },
  /**
   * 返回日期格式字符串
   * @param {Number} 0返回今天的日期、1返回明天的日期，2返回后天得日期，依次类推
   * @return {string} '2014-12-31'
   */
  getDay: function(e) {
    e = e || 0;
    let t = /* @__PURE__ */ new Date();
    const n = e * (1e3 * 60 * 60 * 24);
    return t = new Date(t.getTime() + n), this.date2Str(t);
  },
  /**
   * 时间比较
   * @return {Boolean}
   */
  compareDate: function(e, t) {
    const n = new Date(e.replace("-", "/").replace("-", "/")), o = new Date(t.replace("-", "/").replace("-", "/"));
    return !(n >= o);
  },
  /**
   * 时间是否相等
   * @return {Boolean}
   */
  isEqual: function(e, t) {
    const n = new Date(e).getTime(), o = new Date(t).getTime();
    return n == o;
  },
  getMonthWeek: function(e, t, n, o = 0) {
    const l = new Date(Number(e), parseInt(t) - 1, Number(n));
    let s = l.getDay();
    const a = l.getDate();
    let r = 6 - s;
    return o !== 0 && (s = s == 0 ? 7 : s, r = 7 - s), Math.ceil((a + r) / 7);
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearWeek: function(e, t, n, o = 0) {
    const l = new Date(Number(e), parseInt(t) - 1, Number(n)), s = new Date(Number(e), 0, 1), a = Math.round((l.valueOf() - s.valueOf()) / 864e5);
    return Math.ceil((a + (s.getDay() + 1 - 1)) / 7);
  },
  getWeekDate: function(e, t, n, o = 0) {
    const l = new Date(Number(e), parseInt(t) - 1, Number(n)), s = l.getTime();
    let a = l.getDay();
    if (o === 0) {
      const i = s - a * 864e5, f = s + (6 - a) * 864e5, p = this.date2Str(new Date(i)), y = this.date2Str(new Date(f));
      return [p, y];
    } else {
      a = a == 0 ? 7 : a;
      const r = 24 * 60 * 60 * 1e3, i = s - (a - 1) * r, f = s + (7 - a) * r, p = this.date2Str(new Date(i)), y = this.date2Str(new Date(f));
      return [p, y];
    }
  },
  formatResultDate: function(e) {
    const t = [...e.split("-")];
    return t[2] = de.getNumTwoBit(Number(t[2])), t[3] = `${t[0]}-${t[1]}-${t[2]}`, t[4] = de.getWhatDay(+t[0], +t[1], +t[2]), t;
  }
}, { create: pd } = ne("calendar-item"), md = "NutCalendarItem", hd = pd({
  props: {
    type: {
      type: String,
      default: "one"
    },
    isAutoBackFill: {
      type: Boolean,
      default: !1
    },
    toDateAnimation: {
      type: Boolean,
      default: !0
    },
    poppable: {
      type: Boolean,
      default: !0
    },
    showTitle: {
      type: Boolean,
      default: !0
    },
    showSubTitle: {
      type: Boolean,
      default: !0
    },
    showToday: {
      type: Boolean,
      default: !0
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
      default: de.getDay(0)
    },
    endDate: {
      type: String,
      default: de.getDay(365)
    },
    firstDayOfWeek: {
      type: Number,
      default: 0
    },
    disabledDate: Function
  },
  emits: ["choose", "update", "close", "select"],
  setup(e, { emit: t, slots: n, expose: o }) {
    const l = Se(md), s = l("weekdays").map((O, q) => ({
      day: O,
      weekend: q === 0 || q === 6
    })), a = z([...s.slice(e.firstDayOfWeek, 7), ...s.slice(0, e.firstDayOfWeek)]), r = z(null), i = z(null), f = z(null), p = z(null), y = z(0), v = S(() => u.monthsData.slice(u.defaultRange[0], u.defaultRange[1])), b = S(() => n.btn), w = S(() => n["top-info"]), k = S(() => n["bottom-info"]), u = he({
      yearMonthTitle: "",
      defaultRange: [],
      currDate: "",
      propStartDate: "",
      propEndDate: "",
      unLoadPrev: !1,
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
      isRange: e.type === "range",
      timer: 0,
      currentIndex: 0,
      avgHeight: 0,
      monthsNum: 0
    }), m = (O) => O.split("-"), h = (O) => de.isEqual(u.currDate[0], O), $ = (O) => de.isEqual(u.currDate[1], O), A = (O) => {
      var q, ae;
      return ((q = u.currDate) == null ? void 0 : q.length) > 0 ? (ae = u.currDate) == null ? void 0 : ae.some((re) => de.isEqual(re, O)) : !1;
    }, E = (O, q) => q.curData[0] + "-" + q.curData[1] + "-" + de.getNumTwoBit(+O.day), I = (O, q, ae) => {
      const re = [];
      typeof ae == "number" && ((ae + 1 + e.firstDayOfWeek) % 7 === 0 || (ae + e.firstDayOfWeek) % 7 === 0) && re.push("weekend");
      const me = E(O, q), { type: Pe } = e;
      return O.type == "curr" ? de.isEqual(u.currDate, me) || (Pe == "range" || Pe == "week") && (h(me) || $(me)) || Pe == "multiple" && A(me) ? re.push(`${u.dayPrefix}--active`) : u.propStartDate && de.compareDate(me, u.propStartDate) || u.propEndDate && de.compareDate(u.propEndDate, me) || e.disabledDate && e.disabledDate(me) ? re.push(`${u.dayPrefix}--disabled`) : (Pe == "range" || Pe == "week") && Array.isArray(u.currDate) && Object.values(u.currDate).length == 2 && de.compareDate(u.currDate[0], me) && de.compareDate(me, u.currDate[1]) && re.push(`${u.dayPrefix}--choose`) : re.push(`${u.dayPrefix}--disabled`), re;
    }, M = () => {
      const { type: O } = e;
      if (O == "range" && u.chooseData.length == 2 || O != "range") {
        let q = u.chooseData.slice(0);
        if (O == "week") {
          if (u.chooseData.length !== 2)
            return;
          q = {
            weekDate: [C(u.chooseData[0]), C(u.chooseData[1])]
          };
        }
        t("choose", q), e.poppable && t("update");
      }
    }, L = (O, q, ae = !1) => {
      var re, me;
      if (!I(O, q).includes(`${u.dayPrefix}--disabled`)) {
        const { type: Pe } = e;
        let [Fe, je] = q.curData, ke = [...q.curData];
        if (ke[2] = de.getNumTwoBit(Number(O.day)), ke[3] = `${ke[0]}-${ke[1]}-${ke[2]}`, ke[4] = de.getWhatDay(+ke[0], +ke[1], +ke[2]), Pe == "multiple")
          if (((re = u.currDate) == null ? void 0 : re.length) > 0) {
            let Ne;
            (me = u.currDate) == null || me.forEach((We, He) => {
              We == ke[3] && (Ne = He);
            }), ae ? u.chooseData.push([...ke]) : Ne !== void 0 ? (u.currDate.splice(Ne, 1), u.chooseData.splice(Ne, 1)) : (u.currDate.push(ke[3]), u.chooseData.push([...ke]));
          } else
            u.currDate = [ke[3]], u.chooseData = [[...ke]];
        else if (Pe == "range") {
          let Ne = Object.values(u.currDate).length;
          Ne == 2 || Ne == 0 ? u.currDate = [ke[3]] : de.compareDate(u.currDate[0], ke[3]) ? Array.isArray(u.currDate) && u.currDate.push(ke[3]) : Array.isArray(u.currDate) && u.currDate.unshift(ke[3]), u.chooseData.length == 2 || !u.chooseData.length ? u.chooseData = [[...ke]] : de.compareDate(u.chooseData[0][3], ke[3]) ? u.chooseData = [...u.chooseData, [...ke]] : u.chooseData = [[...ke], ...u.chooseData];
        } else if (Pe == "week") {
          let Ne = de.getWeekDate(Fe, je, O.day, e.firstDayOfWeek);
          u.propStartDate && de.compareDate(Ne[0], u.propStartDate) && Ne.splice(0, 1, u.propStartDate), u.propEndDate && de.compareDate(u.propEndDate, Ne[1]) && Ne.splice(1, 1, u.propEndDate), u.currDate = Ne, u.chooseData = [de.formatResultDate(Ne[0]), de.formatResultDate(Ne[1])];
        } else
          u.currDate = ke[3], u.chooseData = [...ke];
        if (!ae) {
          let Ne = u.chooseData;
          Pe == "week" && (Ne = {
            weekDate: [
              C(u.chooseData[0]),
              C(u.chooseData[1])
            ]
          }), t("select", Ne), (e.isAutoBackFill || !e.poppable) && M();
        }
      }
    }, C = (O) => {
      let [q, ae, re] = O;
      return {
        date: O,
        monthWeekNum: de.getMonthWeek(q, ae, re, e.firstDayOfWeek),
        yearWeekNum: de.getYearWeek(q, ae, re, e.firstDayOfWeek)
      };
    }, D = (O) => {
      const q = O == "prev" ? u.monthsData[0] : u.monthsData[u.monthsData.length - 1];
      let ae = parseInt(q.curData[0]), re = parseInt(q.curData[1].toString().replace(/^0/, ""));
      switch (O) {
        case "prev":
          re == 1 && (ae -= 1), re = re == 1 ? 12 : --re;
          break;
        case "next":
          re == 12 && (ae += 1), re = re == 12 ? 1 : ++re;
          break;
      }
      return [ae + "", de.getNumTwoBit(re), de.getMonthDays(String(ae), String(re)) + ""];
    }, _ = (O, q, ae) => {
      let { year: re, month: me } = ae;
      return q == "prev" && O >= 7 && (O -= 7), Array.from(Array(O), (Pe, Fe) => ({
        day: String(Fe + 1),
        type: q,
        year: re,
        month: me
      }));
    }, K = (O, q, ae, re) => {
      O = O - e.firstDayOfWeek;
      let { year: me, month: Pe } = ae;
      return q == "prev" && O >= 7 && (O -= 7), Array.from(Array(re), (je, ke) => ({
        day: String(ke + 1),
        type: q,
        year: me,
        month: Pe
      })).slice(re - O);
    }, j = (O, q) => {
      const ae = de.getMonthPreDay(+O[0], +O[1]);
      let re = Number(O[1]) - 1, me = Number(O[0]);
      re <= 0 && (re = 12, me += 1);
      const Pe = de.getMonthDays(String(O[0]), String(O[1])), Fe = de.getMonthDays(me + "", re + ""), je = {
        year: O[0],
        month: O[1]
      }, ke = {
        curData: O,
        title: l("monthTitle", je.year, je.month),
        monthData: [
          ...K(
            ae,
            "prev",
            { month: String(re), year: String(me) },
            Fe
          ),
          ..._(Pe, "curr", je)
        ],
        cssHeight: 0,
        cssScrollHeight: 0
      };
      ke.cssHeight = 39 + (ke.monthData.length > 35 ? 384 : 320);
      let Ne = 0;
      u.monthsData.length > 0 && (Ne = u.monthsData[u.monthsData.length - 1].cssScrollHeight + u.monthsData[u.monthsData.length - 1].cssHeight), ke.cssScrollHeight = Ne, q == "next" ? (!u.endData || !de.compareDate(
        `${u.endData[0]}-${u.endData[1]}-${de.getMonthDays(u.endData[0], u.endData[1])}`,
        `${O[0]}-${O[1]}-${O[2]}`
      )) && u.monthsData.push(ke) : !u.startData || !de.compareDate(
        `${O[0]}-${O[1]}-${O[2]}`,
        `${u.startData[0]}-${u.startData[1]}-01`
      ) ? u.monthsData.unshift(ke) : u.unLoadPrev = !0;
    }, oe = () => {
      let O = e.startDate ? e.startDate : de.getDay(0), q = e.endDate ? e.endDate : de.getDay(365);
      u.propStartDate = O, u.propEndDate = q, u.startData = m(O), u.endData = m(q), (e.defaultValue || Array.isArray(e.defaultValue) && e.defaultValue.length > 0) && (u.currDate = e.type !== "one" ? [...e.defaultValue] : e.defaultValue);
      const ae = {
        year: Number(u.startData[0]),
        month: Number(u.startData[1])
      }, re = {
        year: Number(u.endData[0]),
        month: Number(u.endData[1])
      };
      let me = re.month - ae.month;
      re.year - ae.year > 0 && (me = me + 12 * (re.year - ae.year)), me <= 0 && (me = 1), j(u.startData, "next");
      let Pe = 1;
      do
        j(D("next"), "next");
      while (Pe++ < me);
      if (u.monthsNum = me, e.type == "range" && Array.isArray(u.currDate))
        u.currDate.length > 0 && (O && de.compareDate(u.currDate[0], O) && u.currDate.splice(0, 1, O), q && de.compareDate(q, u.currDate[1]) && u.currDate.splice(1, 1, q), u.defaultData = [...m(u.currDate[0]), ...m(u.currDate[1])]);
      else if (e.type == "multiple" && Array.isArray(u.currDate)) {
        if (u.currDate.length > 0) {
          let We = [], He = {};
          u.currDate.forEach((Ke) => {
            O && !de.compareDate(Ke, O) && q && !de.compareDate(q, Ke) && (Object.hasOwnProperty.call(He, Ke) || (We.push(Ke), He[Ke] = Ke));
          }), u.currDate = [...We], u.defaultData = [...m(We[0])];
        }
      } else if (e.type == "week" && Array.isArray(u.currDate)) {
        if (u.currDate.length > 0) {
          let [We, He, Ke] = m(u.currDate[0]), Ft = de.getWeekDate(We, He, Ke, e.firstDayOfWeek);
          u.currDate = Ft, O && de.compareDate(u.currDate[0], O) && u.currDate.splice(0, 1, O), q && de.compareDate(q, u.currDate[1]) && u.currDate.splice(1, 1, q), u.defaultData = [...m(u.currDate[0]), ...m(u.currDate[1])];
        }
      } else
        u.currDate && (O && de.compareDate(u.currDate, O) ? u.currDate = O : q && !de.compareDate(u.currDate, q) && (u.currDate = q), u.defaultData = [...m(u.currDate)]);
      let Fe = 0, je = 0;
      u.defaultData.length > 0 && u.monthsData.forEach((We, He) => {
        We.title == l("monthTitle", u.defaultData[0], u.defaultData[1]) && (Fe = He), (e.type == "range" || e.type == "week") && We.title == l("monthTitle", u.defaultData[3], u.defaultData[4]) && (je = He);
      }), R(me, Fe), u.currentIndex = Fe, u.yearMonthTitle = u.monthsData[u.currentIndex].title, u.defaultData.length > 0 && (u.isRange ? (L({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0), L({ day: u.defaultData[5], type: "curr" }, u.monthsData[je], !0)) : e.type == "week" ? L({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0) : e.type == "multiple" ? [...u.currDate].forEach((We) => {
        let He = m(We), Ke = u.currentIndex;
        u.monthsData.forEach((Ft, fl) => {
          Ft.title == l("monthTitle", He[0], He[1]) && (Ke = fl);
        }), L({ day: He[2], type: "curr" }, u.monthsData[Ke], !0);
      }) : L({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0));
      let ke = u.monthsData[u.monthsData.length - 1], Ne = ke.cssHeight + ke.cssScrollHeight;
      Oe(() => {
        r != null && r.value && (i != null && i.value) && (p != null && p.value) && (y.value = r.value.clientHeight, i.value.style.height = `${Ne}px`, r.value.scrollTop = u.monthsData[u.currentIndex].cssScrollHeight);
      }), u.avgHeight = Math.floor(Ne / (me + 1));
    };
    o({
      scrollToDate: (O) => {
        de.compareDate(O, u.propStartDate) ? O = u.propStartDate : de.compareDate(O, u.propEndDate) || (O = u.propEndDate);
        let q = m(O);
        u.monthsData.forEach((ae, re) => {
          if (ae.title == l("monthTitle", q[0], q[1]) && r.value) {
            let me = u.monthsData[re].cssScrollHeight - r.value.scrollTop;
            if (e.toDateAnimation) {
              let Pe = 0, Fe = setInterval(() => {
                if (Pe++, r.value) {
                  let je = me / 10;
                  r.value.scrollTop = r.value.scrollTop + je;
                }
                Pe >= 10 && (clearInterval(Fe), r.value && (r.value.scrollTop = u.monthsData[re].cssScrollHeight));
              }, 40);
            } else
              r.value.scrollTop = u.monthsData[re].cssScrollHeight;
          }
        });
      },
      initPosition: () => {
        r != null && r.value && (r.value.scrollTop = u.monthsData[u.currentIndex].cssScrollHeight);
      }
    });
    const R = (O, q) => {
      O >= 3 ? q > 0 && q < O ? u.defaultRange = [q - 1, q + 3] : q == 0 ? u.defaultRange = [q, q + 4] : q == O && (u.defaultRange = [q - 2, q + 2]) : u.defaultRange = [0, O + 2];
      let ae = u.monthsData[u.defaultRange[0]].cssScrollHeight;
      u.translateY = ae;
    }, x = (O, q) => (e.type == "range" || e.type == "week") && O.type == "curr" && I(O, q).includes("nut-calendar__day--active"), U = (O, q) => x(O, q) && h(E(O, q)), se = (O, q) => u.currDate.length >= 2 && $(E(O, q)) ? x(O, q) : !1, ue = () => {
      if (u.currDate.length >= 2)
        return de.isEqual(u.currDate[0], u.currDate[1]);
    }, fe = (O) => {
      const q = `${O.year}-${O.month}-${Number(O.day) < 10 ? "0" + O.day : O.day}`;
      return de.isEqual(q, de.date2Str(/* @__PURE__ */ new Date()));
    }, Ce = (O) => {
      if (u.monthsData.length <= 1)
        return;
      const q = O.target.scrollTop;
      let ae = Math.floor(q / u.avgHeight);
      if (ae == 0)
        q >= u.monthsData[ae + 1].cssScrollHeight && (ae += 1);
      else if (ae > 0 && ae < u.monthsNum - 1)
        q >= u.monthsData[ae + 1].cssScrollHeight && (ae += 1), q < u.monthsData[ae].cssScrollHeight && (ae -= 1);
      else {
        const re = Math.round(q + y.value);
        re < u.monthsData[ae].cssScrollHeight + u.monthsData[ae].cssHeight && q > u.monthsData[ae - 1].cssScrollHeight && (ae -= 1), ae + 1 <= u.monthsNum && re >= u.monthsData[ae + 1].cssScrollHeight + u.monthsData[ae + 1].cssHeight && (ae += 1), ae >= 1 && q < u.monthsData[ae - 1].cssScrollHeight && (ae -= 1);
      }
      u.currentIndex !== ae && (u.currentIndex = ae, R(u.monthsNum, ae)), u.yearMonthTitle = u.monthsData[ae].title;
    }, Le = () => {
      u.chooseData.splice(0), u.monthsData.splice(0), oe();
    };
    return $e(() => {
      oe();
    }), Q(
      () => e.defaultValue,
      (O) => {
        O && e.poppable && Le();
      }
    ), pe(G(G({
      weeks: a,
      compConthsData: v,
      showTopBtn: b,
      topInfo: w,
      bottomInfo: k,
      rangeTip: ue,
      mothsViewScroll: Ce,
      getClass: I,
      isStartTip: U,
      isEndTip: se,
      chooseDay: L,
      isCurrDay: fe,
      confirm: M,
      months: r
    }, we(u)), we(e)), {
      translate: l,
      monthsPanel: i,
      weeksPanel: f,
      viewArea: p
    });
  }
}), vd = { class: "nut-calendar__header" }, gd = {
  key: 0,
  class: "nut-calendar__header-title"
}, yd = {
  key: 1,
  class: "nut-calendar__header-slot"
}, bd = {
  key: 2,
  class: "nut-calendar__header-subtitle"
}, $d = {
  ref: "weeksPanel",
  class: "nut-calendar__weekdays"
}, wd = {
  ref: "monthsPanel",
  class: "nut-calendar__panel"
}, kd = { class: "nut-calendar__month-title" }, Cd = { class: "nut-calendar__days" }, Sd = ["onClick"], Td = { class: "nut-calendar__day-value" }, _d = {
  key: 0,
  class: "nut-calendar__day-tips nut-calendar__day-tips--top"
}, Nd = {
  key: 1,
  class: "nut-calendar__day-tips nut-calendar__day-tips--bottom"
}, Dd = {
  key: 2,
  class: "nut-calendar__day-tips--curr"
}, Id = {
  key: 4,
  class: "nut-calendar__day-tip"
}, Bd = {
  key: 0,
  class: "nut-calendar__footer"
};
function Md(e, t, n, o, l, s) {
  return c(), d("view", {
    class: B(["nut-calendar", {
      "nut-calendar--nopop": !e.poppable,
      "nut-calendar--nofooter": e.isAutoBackFill
    }])
  }, [
    g("view", vd, [
      e.showTitle ? (c(), d("view", gd, P(e.title || e.translate("title")), 1)) : N("", !0),
      e.showTopBtn ? (c(), d("view", yd, [
        T(e.$slots, "btn")
      ])) : N("", !0),
      e.showSubTitle ? (c(), d("view", bd, P(e.yearMonthTitle), 1)) : N("", !0),
      g("view", $d, [
        (c(!0), d(Z, null, ie(e.weeks, (a, r) => (c(), d("view", {
          key: r,
          class: B(["nut-calendar__weekday", { weekend: a.weekend }])
        }, P(a.day), 3))), 128))
      ], 512)
    ]),
    g("view", {
      ref: "months",
      class: "nut-calendar__content",
      onScroll: t[0] || (t[0] = (...a) => e.mothsViewScroll && e.mothsViewScroll(...a))
    }, [
      g("view", wd, [
        g("view", {
          ref: "viewArea",
          class: "nut-calendar__body",
          style: V({ transform: `translateY(${e.translateY}px)` })
        }, [
          (c(!0), d(Z, null, ie(e.compConthsData, (a, r) => (c(), d("view", {
            key: r,
            class: "nut-calendar__month"
          }, [
            g("view", kd, P(a.title), 1),
            g("view", Cd, [
              g("view", {
                class: B(["nut-calendar__days-item", e.type === "range" ? "nut-calendar__days-item--range" : ""])
              }, [
                (c(!0), d(Z, null, ie(a.monthData, (i, f) => (c(), d("view", {
                  key: f,
                  class: B(["nut-calendar__day", e.getClass(i, a, f)]),
                  onClick: (p) => e.chooseDay(i, a)
                }, [
                  g("view", Td, [
                    T(e.$slots, "day", {
                      date: i.type == "curr" ? i : ""
                    }, () => [
                      ge(P(i.type == "curr" ? i.day : ""), 1)
                    ])
                  ]),
                  e.topInfo ? (c(), d("view", _d, [
                    T(e.$slots, "top-info", {
                      date: i.type == "curr" ? i : ""
                    })
                  ])) : N("", !0),
                  e.bottomInfo ? (c(), d("view", Nd, [
                    T(e.$slots, "bottom-info", {
                      date: i.type == "curr" ? i : ""
                    })
                  ])) : N("", !0),
                  !e.bottomInfo && e.showToday && e.isCurrDay(i) ? (c(), d("view", Dd, P(e.translate("today")), 1)) : N("", !0),
                  e.isStartTip(i, a) ? (c(), d("view", {
                    key: 3,
                    class: B(["nut-calendar__day-tip", { "nut-calendar__day-tips--top": e.rangeTip() }])
                  }, P(e.startText || e.translate("start")), 3)) : N("", !0),
                  e.isEndTip(i, a) ? (c(), d("view", Id, P(e.endText || e.translate("end")), 1)) : N("", !0)
                ], 10, Sd))), 128))
              ], 2)
            ])
          ]))), 128))
        ], 4)
      ], 512)
    ], 544),
    e.poppable && !e.isAutoBackFill ? (c(), d("view", Bd, [
      T(e.$slots, "footer-info", { date: e.chooseData }, () => [
        g("view", {
          class: "nut-calendar__confirm",
          onClick: t[1] || (t[1] = (...a) => e.confirm && e.confirm(...a))
        }, P(e.confirmText || e.translate("confirm")), 1)
      ])
    ])) : N("", !0)
  ], 2);
}
const Ld = /* @__PURE__ */ le(hd, [["render", Md]]), { create: Pd } = ne("calendar"), Ad = Pd({
  components: {
    NutCalendarItem: Ld,
    NutPopup: Ae
  },
  props: {
    type: {
      type: String,
      default: "one"
    },
    isAutoBackFill: {
      type: Boolean,
      default: !1
    },
    toDateAnimation: {
      type: Boolean,
      default: !0
    },
    poppable: {
      type: Boolean,
      default: !0
    },
    showTitle: {
      type: Boolean,
      default: !0
    },
    showSubTitle: {
      type: Boolean,
      default: !0
    },
    visible: {
      type: Boolean,
      default: !1
    },
    showToday: {
      type: Boolean,
      default: !0
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
      default: de.getDay(0)
    },
    endDate: {
      type: String,
      default: de.getDay(365)
    },
    firstDayOfWeek: {
      type: Number,
      default: 0,
      validator: (e) => e >= 0 && e <= 6
    },
    lockScroll: {
      type: Boolean,
      default: !0
    },
    disabledDate: Function
  },
  emits: ["choose", "close", "update:visible", "select"],
  setup(e, { emit: t, slots: n, expose: o }) {
    const l = S({
      get() {
        return e.visible;
      },
      set($) {
        t("update:visible", $);
      }
    }), s = S(() => n.btn), a = S(() => n["top-info"]), r = S(() => n.day), i = S(() => n["bottom-info"]), f = S(() => n["footer-info"]), p = z(null);
    o({
      scrollToDate: ($) => {
        var A;
        (A = p.value) == null || A.scrollToDate($);
      },
      initPosition: () => {
        var $;
        ($ = p.value) == null || $.initPosition();
      }
    });
    const b = () => {
      t("update:visible", !1);
    }, w = () => {
      t("close"), t("update:visible", !1);
    };
    return {
      visible: l,
      closePopup: () => {
        w();
      },
      opened: () => {
        var $;
        ($ = p.value) == null || $.initPosition();
      },
      update: b,
      close: w,
      select: ($) => {
        t("select", $);
      },
      choose: ($) => {
        w(), t("choose", $);
      },
      calendarRef: p,
      showTopBtn: s,
      topInfo: a,
      dayInfo: r,
      bottomInfo: i,
      footerInfo: f
    };
  }
});
function Ed(e, t, n, o, l, s) {
  const a = X("nut-calendar-item"), r = X("nut-popup");
  return e.poppable ? (c(), J(r, dt({
    key: 0,
    visible: e.visible,
    "onUpdate:visible": t[0] || (t[0] = (i) => e.visible = i),
    position: "bottom",
    round: "",
    closeable: ""
  }, e.$attrs, {
    style: { height: "85vh" },
    "lock-scroll": e.lockScroll,
    onOpened: e.opened
  }), {
    default: te(() => [
      ee(a, {
        ref: "calendarRef",
        type: e.type,
        "is-auto-back-fill": e.isAutoBackFill,
        poppable: e.poppable,
        title: e.title,
        "default-value": e.defaultValue,
        "start-date": e.startDate,
        "end-date": e.endDate,
        "confirm-text": e.confirmText,
        "start-text": e.startText,
        "end-text": e.endText,
        "show-today": e.showToday,
        "show-title": e.showTitle,
        "show-sub-title": e.showSubTitle,
        "to-date-animation": e.toDateAnimation,
        "first-day-of-week": e.firstDayOfWeek,
        "disabled-date": e.disabledDate,
        onUpdate: e.update,
        onClose: e.close,
        onChoose: e.choose,
        onSelect: e.select
      }, Ct({ _: 2 }, [
        e.showTopBtn ? {
          name: "btn",
          fn: te(() => [
            T(e.$slots, "btn")
          ]),
          key: "0"
        } : void 0,
        e.dayInfo ? {
          name: "day",
          fn: te((i) => [
            T(e.$slots, "day", {
              date: i.date
            })
          ]),
          key: "1"
        } : void 0,
        e.topInfo ? {
          name: "top-info",
          fn: te((i) => [
            T(e.$slots, "top-info", {
              date: i.date
            })
          ]),
          key: "2"
        } : void 0,
        e.bottomInfo ? {
          name: "bottom-info",
          fn: te((i) => [
            T(e.$slots, "bottom-info", {
              date: i.date
            })
          ]),
          key: "3"
        } : void 0,
        e.footerInfo ? {
          name: "footer-info",
          fn: te((i) => [
            T(e.$slots, "footer-info", {
              date: i.date
            })
          ]),
          key: "4"
        } : void 0
      ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "default-value", "start-date", "end-date", "confirm-text", "start-text", "end-text", "show-today", "show-title", "show-sub-title", "to-date-animation", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"])
    ]),
    _: 3
  }, 16, ["visible", "lock-scroll", "onOpened"])) : (c(), J(a, {
    key: 1,
    ref: "calendarRef",
    type: e.type,
    "is-auto-back-fill": e.isAutoBackFill,
    poppable: e.poppable,
    title: e.title,
    "confirm-text": e.confirmText,
    "start-text": e.startText,
    "end-text": e.endText,
    "default-value": e.defaultValue,
    "start-date": e.startDate,
    "end-date": e.endDate,
    "show-title": e.showTitle,
    "show-sub-title": e.showSubTitle,
    "to-date-animation": e.toDateAnimation,
    "show-today": e.showToday,
    "first-day-of-week": e.firstDayOfWeek,
    "disabled-date": e.disabledDate,
    onUpdate: e.update,
    onClose: e.close,
    onChoose: e.choose,
    onSelect: e.select
  }, Ct({ _: 2 }, [
    e.showTopBtn ? {
      name: "btn",
      fn: te(() => [
        T(e.$slots, "btn")
      ]),
      key: "0"
    } : void 0,
    e.dayInfo ? {
      name: "day",
      fn: te((i) => [
        T(e.$slots, "day", {
          date: i.date
        })
      ]),
      key: "1"
    } : void 0,
    e.topInfo ? {
      name: "top-info",
      fn: te((i) => [
        T(e.$slots, "top-info", {
          date: i.date
        })
      ]),
      key: "2"
    } : void 0,
    e.bottomInfo ? {
      name: "bottom-info",
      fn: te((i) => [
        T(e.$slots, "bottom-info", {
          date: i.date
        })
      ]),
      key: "3"
    } : void 0
  ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "confirm-text", "start-text", "end-text", "default-value", "start-date", "end-date", "show-title", "show-sub-title", "to-date-animation", "show-today", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"]));
}
const zd = /* @__PURE__ */ le(Ad, [["render", Ed]]), Vd = () => Te(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    Te("path", {
      d: "M6.605 9.49a.771.771 0 0 1 0-.98l3.6-4.372a.771.771 0 0 1 1.19.981L8.2 9l3.197 3.881a.771.771 0 1 1-1.191.98l-3.6-4.37Z"
    })
  ]
), Hd = () => Te(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    Te("path", {
      d: "M11.396 9.49a.771.771 0 0 0 0-.98l-3.6-4.372a.771.771 0 0 0-1.191.981L9.8 9l-3.196 3.881a.771.771 0 0 0 1.19.98l3.6-4.37Z"
    })
  ]
), Od = () => Te(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    Te("path", {
      d: "M13.853 4.026a.771.771 0 0 1 .12 1.085L10.864 9l3.11 3.889a.771.771 0 1 1-1.204.963L9.272 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.084-.12Zm-5.245 0a.771.771 0 0 1 .12 1.085L5.617 9l3.111 3.889a.771.771 0 0 1-1.205.963L4.026 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.085-.12Z"
    })
  ]
), Rd = () => Te(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    Te("path", {
      d: "M4.147 13.974a.771.771 0 0 1-.12-1.085L7.136 9 4.028 5.11a.771.771 0 1 1 1.204-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.084.12Zm5.245 0a.771.771 0 0 1-.12-1.085L12.383 9 9.272 5.11a.771.771 0 1 1 1.205-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.085.12Z"
    })
  ]
), tt = (e) => e ? {
  year: e.getFullYear(),
  month: e.getMonth() + 1,
  date: e.getDate()
} : null, qt = (e) => e ? new Date(e.year, e.month - 1, e.date) : null, An = (e) => Array.isArray(e) ? e.map((t) => tt(t)) : e ? [tt(e)] : [], Fd = (e) => Array.isArray(e) ? e.map((t) => qt(t)) : e ? [qt(e)] : [], Wd = (e, t, n) => {
  let o = t - 1, l = e;
  o <= 0 && (o = 12, l -= 1);
  let s = de.getMonthPreDay(e, t);
  s -= n, s >= 7 && (s -= 7);
  const a = de.getMonthDays(`${l}`, `${o}`);
  return Array.from(Array(a), (i, f) => ({
    type: "prev",
    year: l,
    month: o,
    date: f + 1
  })).slice(a - s);
}, Yd = (e, t) => {
  const n = de.getMonthDays(`${e}`, `${t}`);
  return Array.from(Array(n), (o, l) => ({
    type: "current",
    year: e,
    month: t,
    date: l + 1
  }));
}, jd = (e, t) => {
  const n = new Date(e.year, e.month - 1, e.date), o = (n.getDay() + 7 - t) % 7;
  return [
    tt(new Date(n.getTime() - 24 * 60 * 60 * 1e3 * o)),
    tt(new Date(n.getTime() + 24 * 60 * 60 * 1e3 * (6 - o)))
  ];
}, Kd = (e, t) => {
  const n = e.year, o = e.month, l = [...Wd(n, o, t), ...Yd(n, o)], s = l.length, a = e.month === 12 ? e.year + 1 : e.year, r = e.month === 12 ? 1 : e.month + 1;
  for (let i = 1; i <= 42 - s; i++)
    l.push({
      type: "next",
      year: a,
      month: r,
      date: i
    });
  return l;
}, et = (e, t) => {
  if (e && t)
    return e.year === t.year ? e.month === t.month ? e.date - t.date : e.month - t.month : e.year - t.year;
}, at = (e, t) => et(e, t) === 0, Ud = { class: "nut-calendarcard" }, Xd = { class: "nut-calendarcard-header" }, qd = { class: "nut-calendarcard-header-left" }, Gd = { class: "nut-calendarcard-header-title" }, Zd = { class: "nut-calendarcard-header-right" }, Jd = { class: "nut-calendarcard-content" }, Qd = { class: "nut-calendarcard-days" }, xd = { class: "nut-calendarcard-days" }, ef = ["onClick"], tf = { class: "nut-calendarcard-day-top" }, nf = { class: "nut-calendarcard-day-inner" }, of = { class: "nut-calendarcard-day-bottom" }, En = "NutCalendarCard", Eo = /* @__PURE__ */ ve({
  name: En,
  __name: "calendar-card",
  props: {
    type: { default: "single" },
    firstDayOfWeek: { default: 0 },
    modelValue: { default: null },
    startDate: { default: null },
    endDate: { default: null },
    disableDay: { type: Function, default: () => !1 }
  },
  emits: ["update:modelValue", "change", "dayClick", "pageChange"],
  setup(e, { expose: t, emit: n }) {
    const o = e, l = n, s = Se(En), r = z((() => {
      let I = new Date(Date.now());
      const M = o.modelValue;
      return Array.isArray(M) ? M.length && (I = M[0]) : M && (I = M), {
        year: I.getFullYear(),
        month: I.getMonth() + 1
      };
    })()), i = z([]), f = S(() => {
      const I = s("weekdays").map((M, L) => ({
        name: M,
        key: L
      }));
      return [...I.slice(o.firstDayOfWeek, 7), ...I.slice(0, o.firstDayOfWeek)];
    }), p = z(o.modelValue ? An(o.modelValue) : []);
    ct(() => {
      const I = o.modelValue ? An(o.modelValue) : [];
      p.value = I;
    });
    const y = (I) => {
      if (p.value = I, o.type === "single") {
        const M = qt(I[0]);
        l("update:modelValue", M), l("change", M);
      } else if (o.type === "multiple" || o.type === "range" || o.type === "week") {
        const M = Fd(I);
        l("update:modelValue", M), l("change", M);
      }
    };
    ct(() => {
      const I = Kd(r.value, o.firstDayOfWeek);
      i.value = I, l("pageChange", r.value);
    });
    const v = (I) => !!(o.disableDay && o.disableDay(I) || o.startDate && Number(et(I, tt(o.startDate))) < 0 || o.endDate && Number(et(I, tt(o.endDate))) > 0), b = (I) => {
      if (o.type === "single" || o.type === "multiple") {
        for (const M in p.value)
          if (at(I, p.value[M]))
            return !0;
      } else if (o.type === "range" && p.value.length === 1 && at(p.value[0], I))
        return !0;
      return !1;
    }, w = (I) => (o.type === "range" || o.type === "week") && p.value.length === 2 && at(I, p.value[0]), k = (I) => (o.type === "range" || o.type === "week") && p.value.length === 2 && at(I, p.value[1]), u = (I) => {
      if ((o.type === "range" || o.type === "week") && p.value.length === 2) {
        const M = et(p.value[0], I), L = et(I, p.value[1]);
        if (M && M < 0 && L && L < 0)
          return !0;
      }
      return !1;
    }, m = (I) => {
      const M = new Date(I.year, I.month - 1, I.date).getDay();
      return M === 0 || M === 6;
    }, h = (I) => {
      if (v(I))
        return ["disabled"];
      const M = [];
      return I.type === "current" && (b(I) && M.push("active"), w(I) && M.push("start"), k(I) && M.push("end"), u(I) && M.push("mid"), m(I) && M.push("weekend")), M;
    }, $ = (I, M) => {
      if (o.startDate) {
        const L = et(
          {
            year: I,
            month: M,
            date: 31
          },
          tt(o.startDate)
        );
        if (L && L < 0)
          return;
      }
      if (o.endDate) {
        const L = et(
          {
            year: I,
            month: M,
            date: 1
          },
          tt(o.endDate)
        );
        if (L && L > 0)
          return;
      }
      r.value = {
        year: I,
        month: M
      };
    }, A = (I = 1) => {
      const M = r.value.year * 12 + r.value.month;
      let L = (M + I) % 12;
      L === 0 && (L = 12);
      const C = Math.floor((M + I - L) / 12);
      $(C, L);
    }, E = (I) => {
      if (!(I.type === "prev" || I.type === "next" || v(I)))
        switch (l("dayClick", I), o.type) {
          case "single": {
            p.value[0] && at(p.value[0], I) ? y([]) : y([I]);
            break;
          }
          case "multiple": {
            const M = p.value.find((L) => at(L, I));
            y(M ? p.value.filter((L) => L !== M) : [...p.value, I]);
            break;
          }
          case "range": {
            const M = p.value.length;
            if (M === 0 || M === 2)
              y([I]);
            else if (M === 1) {
              const L = et(p.value[0], I);
              L == null ? y([]) : L < 0 ? y([p.value[0], I]) : y([I, p.value[0]]);
            } else
              console.warn("[NutUI] Calendar range error");
            break;
          }
          case "week": {
            if (p.value.length === 2 || p.value.length === 0) {
              const [M, L] = jd(I, o.firstDayOfWeek);
              y([M, L]);
            } else
              console.warn("[NutUI] Calendar week error");
            break;
          }
          default:
            console.warn("[NutUI] Calendar type error");
        }
    };
    return t({
      jump: A,
      jumpTo: $
    }), (I, M) => Ie((c(), d("div", Ud, [
      g("div", Xd, [
        g("div", qd, [
          g("div", {
            class: "double-left",
            onClick: M[0] || (M[0] = (L) => A(-12))
          }, [
            ee(ce(Od))
          ]),
          g("div", {
            class: "left",
            onClick: M[1] || (M[1] = (L) => A(-1))
          }, [
            ee(ce(Vd))
          ])
        ]),
        g("div", Gd, P(ce(s)("monthTitle", r.value.year, r.value.month)), 1),
        g("div", Zd, [
          g("div", {
            class: "right",
            onClick: M[2] || (M[2] = (L) => A(1))
          }, [
            ee(ce(Hd))
          ]),
          g("div", {
            class: "double-right",
            onClick: M[3] || (M[3] = (L) => A(12))
          }, [
            ee(ce(Rd))
          ])
        ])
      ]),
      g("div", Jd, [
        g("div", Qd, [
          (c(!0), d(Z, null, ie(f.value, (L) => (c(), d("div", {
            key: L.name,
            class: B(["nut-calendarcard-day header", L.key === 0 || L.key === 6 ? "weekend" : ""])
          }, P(L.name), 3))), 128))
        ]),
        g("div", xd, [
          (c(!0), d(Z, null, ie(i.value, (L) => (c(), d("div", {
            key: `${L.year}-${L.month}-${L.date}`,
            class: B(["nut-calendarcard-day", [L.type, ...h(L)]]),
            onClick: (C) => E(L)
          }, [
            g("div", tf, [
              T(I.$slots, "top", { day: L })
            ]),
            g("div", nf, [
              T(I.$slots, "default", { day: L }, () => [
                ge(P(L.date), 1)
              ])
            ]),
            g("div", of, [
              T(I.$slots, "bottom", { day: L })
            ])
          ], 10, ef))), 128))
        ])
      ])
    ], 512)), [
      [Me, i.value.length > 0]
    ]);
  }
});
ye(Eo);
const zo = Symbol("nut-checkbox"), { create: lf, componentName: xe } = ne("checkbox"), sf = lf({
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
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
      default: !1
    },
    shape: {
      type: String,
      default: "round"
      // button
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const o = Ge(Je(e, "disabled")), l = Ve(zo, null), s = he({
      partialSelect: e.indeterminate
    }), a = S(() => !!l), r = S(() => a.value ? l.value.value.includes(e.label) : e.modelValue), i = S(() => a.value && l.disabled.value ? l.disabled.value : o.value), f = S(() => !!e.modelValue), p = S(() => i.value ? "nut-checkbox__icon--disable" : s.partialSelect ? "nut-checkbox__icon--indeterminate" : r.value ? "nut-checkbox__icon" : "nut-checkbox__icon--unchecked");
    let y = "";
    const v = (m, h) => {
      y = "click", t("update:modelValue", m), t("change", m, h);
    };
    Q(
      () => e.modelValue,
      (m) => {
        y == "click" ? y = "" : t("change", m);
      }
    );
    const b = () => {
      const { iconSize: m } = e, h = {
        CheckNormal: n.icon ? n.icon : xn,
        Checked: n.checkedIcon ? n.checkedIcon : to,
        CheckDisabled: n.indeterminate ? n.indeterminate : Zl
      }, $ = s.partialSelect ? h.CheckDisabled : r.value ? h.Checked : h.CheckNormal, A = Be(m);
      return Te($, {
        width: A,
        height: A,
        size: A,
        class: p.value
      });
    }, w = () => {
      var m;
      return Te(
        "view",
        {
          class: `${xe}__label ${i.value ? `${xe}__label--disabled` : ""}`
        },
        (m = n.default) == null ? void 0 : m.call(n)
      );
    }, k = () => {
      var m;
      return Te(
        "view",
        {
          class: `${xe}__button ${r.value && `${xe}__button--active`} ${i.value ? `${xe}__button--disabled` : ""}`
        },
        (m = n.default) == null ? void 0 : m.call(n)
      );
    }, u = () => {
      var m, h;
      if (!i.value) {
        if (f.value && s.partialSelect) {
          s.partialSelect = !1, v(f.value, (m = n.default) == null ? void 0 : m.call(n)[0].children);
          return;
        }
        if (v(!f.value, (h = n.default) == null ? void 0 : h.call(n)[0].children), a.value) {
          const $ = l.value.value, A = l.max.value, { label: E } = e, I = $.indexOf(E);
          I > -1 ? $.splice(I, 1) : I <= -1 && ($.length < A || !A) && $.push(E), l.updateValue($);
        }
      }
    };
    return $e(() => {
      a.value && l.link(ot());
    }), Qt(() => {
      a.value && l.unlink(ot());
    }), Q(
      () => e.indeterminate,
      (m) => {
        s.partialSelect = m;
      }
    ), () => Te(
      "view",
      {
        class: `${xe} ${xe}--${e.shape} ${e.textPosition === "left" ? `${xe}--reverse` : ""}`,
        onClick: u
      },
      [e.shape == "button" ? k() : [b(), w()]]
    );
  }
}), { create: af, componentName: rf } = ne("checkbox-group"), uf = af({
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    max: {
      type: Number,
      default: 0
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { slots: t, emit: n, expose: o }) {
    const l = he({
      children: []
    }), s = (p) => {
      p.proxy && l.children.push(p.proxy);
    }, a = (p) => {
      p.proxy && (l.children = l.children.filter((y) => y !== p.proxy));
    }, r = (p) => {
      n("update:modelValue", p), n("change", p);
    }, i = (p) => {
      const y = [];
      p && l.children.forEach((v) => {
        v != null && v.disabled || y.push(v == null ? void 0 : v.label);
      }), n("update:modelValue", y);
    }, f = () => {
      const p = l.children.filter((y) => y != null && y.disabled ? !1 : !e.modelValue.includes(y.label)).map((y) => y.label);
      n("update:modelValue", p);
    };
    return Re(zo, {
      value: S(() => e.modelValue),
      disabled: S(() => e.disabled),
      max: S(() => e.max),
      updateValue: r,
      link: s,
      unlink: a
    }), Q(
      () => e.modelValue,
      (p) => {
        n("change", p);
      }
    ), o({ toggleAll: i, toggleReverse: f }), () => {
      var p;
      return Te(
        "view",
        {
          class: rf
        },
        (p = t.default) == null ? void 0 : p.call(t)
      );
    };
  }
}), cf = {
  text: "text",
  value: "value",
  children: "children",
  className: "className"
}, df = (e, t) => {
  const n = he({
    formattedColumns: e.columns
  }), o = S(() => G(G({}, cf), e.fieldNames)), l = z([]), s = S(() => {
    const u = o.value;
    return p.value.map((m, h) => {
      const $ = m.findIndex((A) => A[u.value] === l.value[h]);
      return $ === -1 ? 0 : $;
    });
  }), a = z([]), r = (u) => {
    u && a.value.length < p.value.length && a.value.push(u);
  }, i = S(() => {
    const u = o.value;
    return p.value.map((m, h) => m.find(($) => $[u.value] === l.value[h]) || m[0]);
  }), f = S(() => {
    const u = n.formattedColumns[0], m = o.value;
    if (u) {
      if (Array.isArray(u))
        return "multiple";
      if (m.children in u)
        return "cascade";
    }
    return "single";
  }), p = S(() => {
    let u = [];
    switch (f.value) {
      case "multiple":
        u = n.formattedColumns;
        break;
      case "cascade":
        u = y(n.formattedColumns, l.value ? l.value : []);
        break;
      default:
        u = [n.formattedColumns];
        break;
    }
    return u;
  }), y = (u, m) => {
    const h = [], $ = o.value;
    let A = {
      text: "",
      value: "",
      [$.children]: u
    }, E = 0;
    for (; A && A[$.children]; ) {
      const I = A[$.children], M = m[E];
      let L = I.findIndex((C) => C[$.value] === M);
      L === -1 && (L = 0), A = A[$.children][L], E++, h.push(I);
    }
    return h;
  }, v = () => {
    t("cancel", {
      selectedValue: l.value,
      selectedOptions: i.value
    });
  }, b = (u, m) => {
    var $;
    const h = o.value;
    if (m && Object.keys(m).length) {
      if (l.value = l.value ? l.value : [], f.value === "cascade") {
        l.value[u] = ($ = m[h.value]) != null ? $ : "";
        let A = u, E = m;
        for (; E && E[h.children] && E[h.children][0]; )
          l.value[A + 1] = E[h.children][0][h.value], A++, E = E[h.children][0];
        E && E[h.children] && E[h.children].length === 0 && (l.value = l.value.slice(0, A + 1));
      } else
        l.value[u] = Object.prototype.hasOwnProperty.call(m, h.value) ? m[h.value] : "";
      t("change", {
        columnIndex: u,
        selectedValue: l.value,
        selectedOptions: i.value
      });
    }
  }, w = () => {
    const u = o.value;
    l.value && !l.value.length && p.value.forEach((m) => {
      l.value.push(m[0][u.value]);
    }), t("confirm", {
      selectedValue: l.value,
      selectedOptions: i.value
    });
  }, k = (u, m) => JSON.stringify(u) === JSON.stringify(m);
  return Q(
    () => e.modelValue,
    (u) => {
      k(u, l.value) || (l.value = u);
    },
    { deep: !0, immediate: !0 }
  ), Q(
    l,
    (u) => {
      k(u, e.modelValue) || t("update:modelValue", u);
    },
    { deep: !0 }
  ), Q(
    () => e.columns,
    (u) => {
      n.formattedColumns = u;
    }
  ), pe(G({}, we(n)), {
    columnsType: f,
    columnsList: p,
    columnFieldNames: o,
    cancel: v,
    changeHandler: b,
    confirm: w,
    defaultValues: l,
    defaultIndexes: s,
    pickerColumn: a,
    swipeRef: r,
    selectedOptions: i,
    isSameValue: k
  });
}, { create: ff } = ne("picker-column"), pf = ff({
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
      default: !0
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
      default: !1
    }
  },
  emits: ["click", "change"],
  setup(e, { emit: t }) {
    const n = Qe(), o = he({
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
    }), l = z(null), s = z(!1), a = z(0), r = z(0), i = 200, f = 300, p = 15, y = S(() => ({
      transition: `transform ${r.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
      transform: `rotate3d(1, 0, 0, ${a.value})`,
      top: `calc(50% - ${+e.optionHeight / 2}px)`
    })), v = S(() => {
      const { optionHeight: D } = e;
      return {
        transition: `transform ${r.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${o.scrollDistance}px, 0)`,
        top: `calc(50% - ${+D / 2}px)`,
        height: `${D}px`
      };
    }), b = (D) => `transform: rotate3d(1, 0, 0, ${-o.rotation * D}deg) translate3d(0px, 0px, 104px)`, w = S(() => ({
      backgroundSize: `100% ${(+e.visibleOptionNum - 1) * +e.optionHeight / 2}px`
    })), k = (D) => {
      if (n.start(D), s.value && !e.taro) {
        const _ = l.value, { transform: K } = window.getComputedStyle(_);
        if (e.threeDimensional) {
          const j = Math.floor(parseInt(a.value) / 360), oe = +K.split(", ")[5], W = +K.split(", ")[6] < 0 ? 180 : 0, Y = j * 360 + Math.acos(oe) / Math.PI * 180 + W;
          o.scrollDistance = -Math.abs((Y / o.rotation - 1) * +e.optionHeight);
        } else
          o.scrollDistance = +K.slice(7, K.length - 1).split(", ")[5];
      }
      ft(D, !0), o.touchParams.startY = n.deltaY.value, o.touchParams.startTime = Date.now(), o.transformY = o.scrollDistance;
    }, u = (D) => {
      n.move(D), n.isVertical() && (s.value = !0, ft(D, !0)), o.touchParams.lastY = n.deltaY.value;
      let _ = o.touchParams.lastY - o.touchParams.startY;
      I(_);
    }, m = () => {
      o.touchParams.lastY = n.deltaY.value, o.touchParams.lastTime = Date.now();
      let D = o.touchParams.lastY - o.touchParams.startY, _ = o.touchParams.lastTime - o.touchParams.startTime;
      if (_ <= f && Math.abs(D) > p) {
        const K = h(D, _);
        I(K, "end", +e.swipeDuration);
        return;
      } else
        I(D, "end");
      setTimeout(() => {
        n.reset(), s.value = !1;
      }, 0);
    }, h = (D, _) => (D = Math.abs(D / _) / 3e-3 * (D < 0 ? -1 : 1), D), $ = (D) => D >= o.currIndex + 8 || D <= o.currIndex - 8, A = (D) => D == o.currIndex, E = (D = 0, _, K = i, j) => {
      _ === "end" ? r.value = K : r.value = 0, a.value = j, o.scrollDistance = D;
    }, I = (D, _, K) => {
      const { optionHeight: j } = e;
      let oe = D + o.transformY;
      if (_ === "end") {
        oe > 0 && (oe = 0), oe < -(e.column.length - 1) * +j && (oe = -(e.column.length - 1) * +j);
        let W = Math.round(oe / +j) * +j, Y = `${(Math.abs(Math.round(W / +j)) + 1) * o.rotation}deg`;
        E(W, _, K, Y), o.currIndex = Math.abs(Math.round(W / +j)) + 1;
      } else {
        let W = 0, Y = (-oe / +j + 1) * o.rotation;
        const R = (e.column.length + 1) * o.rotation, x = 0;
        W = Ee(Y, x, R), x < W && W < R && (E(oe, null, void 0, W + "deg"), o.currIndex = Math.abs(Math.round(oe / +j)) + 1);
      }
    }, M = () => {
      t("change", e.column[o.currIndex - 1]);
    }, L = (D) => {
      const { column: _ } = e;
      let K = _.findIndex((oe) => oe[e.fieldNames.value] === e.value);
      o.currIndex = K === -1 ? 1 : K + 1;
      let j = K === -1 ? 0 : K * +e.optionHeight;
      D && M(), I(-j);
    }, C = () => {
      s.value = !1, r.value = 0, M();
    };
    return Q(
      () => e.column,
      () => {
        e.column && e.column.length > 0 && (o.transformY = 0, L(!1));
      },
      {
        deep: !0
      }
    ), Q(
      () => e.value,
      () => {
        o.transformY = 0, L(!1);
      },
      {
        deep: !0
      }
    ), $e(() => {
      L(!0);
    }), pe(G(G({}, we(o)), we(e)), {
      setRollerStyle: b,
      isHidden: $,
      isCurrPick: A,
      roller: l,
      onTouchStart: k,
      onTouchMove: u,
      onTouchEnd: m,
      touchRollerStyle: y,
      touchTileStyle: v,
      setMove: I,
      stopMomentum: C,
      pxCheck: Be,
      maskStyles: w
    });
  }
});
function mf(e, t, n, o, l, s) {
  return c(), d("view", {
    class: "nut-picker__list",
    onTouchstart: t[1] || (t[1] = (...a) => e.onTouchStart && e.onTouchStart(...a)),
    onTouchmove: t[2] || (t[2] = (...a) => e.onTouchMove && e.onTouchMove(...a)),
    onTouchend: t[3] || (t[3] = (...a) => e.onTouchEnd && e.onTouchEnd(...a))
  }, [
    g("view", {
      ref: "roller",
      class: "nut-picker-roller",
      style: V(e.threeDimensional ? e.touchRollerStyle : e.touchTileStyle),
      onTransitionend: t[0] || (t[0] = (...a) => e.stopMomentum && e.stopMomentum(...a))
    }, [
      (c(!0), d(Z, null, ie(e.column, (a, r) => {
        var i;
        return c(), d(Z, {
          key: (i = a[e.fieldNames.value]) != null ? i : r
        }, [
          a && a[e.fieldNames.text] && e.threeDimensional ? (c(), d("view", {
            key: 0,
            class: B(["nut-picker-roller-item", {
              "nut-picker-roller-item-hidden": e.isHidden(r + 1),
              [a[e.fieldNames.className]]: a[e.fieldNames.className]
            }]),
            style: V(e.setRollerStyle(r + 1))
          }, P(a[e.fieldNames.text]), 7)) : N("", !0),
          a && a[e.fieldNames.text] && !e.threeDimensional ? (c(), d("view", {
            key: 1,
            class: B(["nut-picker-roller-item-tile", {
              [a[e.fieldNames.className]]: a[e.fieldNames.className],
              "nut-picker-roller-item-selected": e.isCurrPick(r + 1)
            }]),
            style: V({ height: e.pxCheck(e.optionHeight), lineHeight: e.pxCheck(e.optionHeight) })
          }, P(a[e.fieldNames.text]), 7)) : N("", !0)
        ], 64);
      }), 128))
    ], 36),
    g("view", {
      class: "nut-picker-roller-mask",
      style: V(e.maskStyles)
    }, null, 4)
  ], 32);
}
const hf = /* @__PURE__ */ le(pf, [["render", mf]]), vf = {
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
    default: () => []
  },
  threeDimensional: {
    type: Boolean,
    default: !1
  },
  swipeDuration: {
    type: [Number, String],
    default: 1e3
  },
  showToolbar: {
    type: Boolean,
    default: !0
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
}, { create: gf } = ne("picker"), yf = "NutPicker", bf = gf({
  components: {
    NutPickerColumn: hf
  },
  props: vf,
  emits: ["cancel", "change", "confirm", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = Se(yf), { changeHandler: o, confirm: l, defaultValues: s, columnsList: a, columnsType: r, columnFieldNames: i, cancel: f } = df(
      e,
      t
    ), p = z([]), y = (w) => {
      w && p.value.length < a.value.length && p.value.push(w);
    }, v = S(() => {
      const w = {};
      return w.height = `${+e.visibleOptionNum * +e.optionHeight}px`, w["--lineHeight"] = `${+e.optionHeight}px`, w;
    });
    return {
      columnsType: r,
      columnsList: a,
      columnFieldNames: i,
      cancel: f,
      changeHandler: o,
      confirmHandler: () => {
        p.value.length > 0 && p.value.forEach((w) => {
          w.stopMomentum();
        }), l();
      },
      defaultValues: s,
      translate: n,
      pickerColumn: p,
      swipeRef: y,
      columnStyle: v
    };
  }
}), $f = { class: "nut-picker" }, wf = {
  key: 0,
  class: "nut-picker__bar"
}, kf = { class: "nut-picker__title" };
function Cf(e, t, n, o, l, s) {
  const a = X("nut-picker-column");
  return c(), d("div", $f, [
    e.showToolbar ? (c(), d("view", wf, [
      g("view", {
        class: "nut-picker__left",
        onClick: t[0] || (t[0] = (...r) => e.cancel && e.cancel(...r))
      }, P(e.cancelText || e.translate("cancel")), 1),
      g("view", kf, P(e.title), 1),
      g("view", {
        class: "nut-picker__right",
        onClick: t[1] || (t[1] = (...r) => e.confirmHandler && e.confirmHandler(...r))
      }, P(e.okText || e.translate("confirm")), 1)
    ])) : N("", !0),
    T(e.$slots, "top"),
    g("view", {
      class: "nut-picker__column",
      style: V(e.columnStyle)
    }, [
      (c(!0), d(Z, null, ie(e.columnsList, (r, i) => (c(), d("view", {
        key: i,
        class: "nut-picker__columnitem"
      }, [
        ee(a, {
          ref_for: !0,
          ref: e.swipeRef,
          column: r,
          "columns-type": e.columnsType,
          "field-names": e.columnFieldNames,
          value: e.defaultValues && e.defaultValues[i],
          "three-dimensional": e.threeDimensional,
          "swipe-duration": e.swipeDuration,
          "visible-option-num": e.visibleOptionNum,
          "option-height": e.optionHeight,
          onChange: (f) => {
            e.changeHandler(i, f);
          }
        }, null, 8, ["column", "columns-type", "field-names", "value", "three-dimensional", "swipe-duration", "visible-option-num", "option-height", "onChange"])
      ]))), 128))
    ], 4),
    T(e.$slots, "default")
  ]);
}
const Vo = /* @__PURE__ */ le(bf, [["render", Cf]]), { create: Sf } = ne("date-picker"), zn = (/* @__PURE__ */ new Date()).getFullYear();
function jt(e) {
  return Sl(e) && !isNaN(e.getTime());
}
const Tf = {
  day: "日",
  year: "年",
  month: "月",
  hour: "时",
  minute: "分",
  seconds: "秒"
}, _f = Sf({
  components: {
    NutPicker: Vo
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
      default: !1
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    minDate: {
      type: Date,
      default: () => new Date(zn - 10, 0, 1),
      validator: jt
    },
    maxDate: {
      type: Date,
      default: () => new Date(zn + 10, 11, 31),
      validator: jt
    },
    formatter: {
      type: Function,
      default: null
    },
    // 是否开启3D效果
    threeDimensional: {
      type: Boolean,
      default: !0
    },
    // 惯性滚动 时长
    swipeDuration: {
      type: [Number, String],
      default: 1e3
    },
    filter: Function,
    showToolbar: {
      type: Boolean,
      default: !0
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
  setup(e, { emit: t }) {
    const n = he({
      currentDate: /* @__PURE__ */ new Date(),
      title: e.title,
      selectedValue: []
    }), o = (u) => {
      jt(u) || (u = e.minDate);
      let m = Math.max(u.getTime(), e.minDate.getTime());
      return m = Math.min(m, e.maxDate.getTime()), new Date(m);
    };
    function l(u, m) {
      return 32 - new Date(u, m - 1, 32).getDate();
    }
    const s = (u, m) => {
      const h = u == "min" ? e.minDate : e.maxDate, $ = h.getFullYear();
      let A = 1, E = 1, I = 0, M = 0;
      u === "max" && (A = 12, E = l(m.getFullYear(), m.getMonth() + 1), I = 23, M = 59);
      let L = M;
      return m.getFullYear() === $ && (A = h.getMonth() + 1, m.getMonth() + 1 === A && (E = h.getDate(), m.getDate() === E && (I = h.getHours(), m.getHours() === I && (M = h.getMinutes(), m.getMinutes() === M && (L = h.getSeconds()))))), {
        [`${u}Year`]: $,
        [`${u}Month`]: A,
        [`${u}Date`]: E,
        [`${u}Hour`]: I,
        [`${u}Minute`]: M,
        [`${u}Seconds`]: L
      };
    }, a = S(() => {
      const { maxYear: u, maxDate: m, maxMonth: h, maxHour: $, maxMinute: A, maxSeconds: E } = s("max", n.currentDate), { minYear: I, minDate: M, minMonth: L, minHour: C, minMinute: D, minSeconds: _ } = s("min", n.currentDate);
      return w([
        {
          type: "year",
          range: [I, u]
        },
        {
          type: "month",
          range: [L, h]
        },
        {
          type: "day",
          range: [M, m]
        },
        {
          type: "hour",
          range: [C, $]
        },
        {
          type: "minute",
          range: [D, A]
        },
        {
          type: "seconds",
          range: [_, E]
        }
      ]);
    }), r = S(() => a.value.map((m, h) => p(m.range[0], m.range[1], y(m.type), m.type, h))), i = ({
      columnIndex: u,
      selectedValue: m,
      selectedOptions: h
    }) => {
      let $ = [];
      m.forEach((L) => {
        $.push(L);
      }), e.type == "month-day" && $.length < 3 && $.unshift(new Date(n.currentDate || e.minDate || e.maxDate).getFullYear()), e.type == "year-month" && $.length < 3 && $.push(new Date(n.currentDate || e.minDate || e.maxDate).getDate());
      const A = Number($[0]), E = Number($[1]) - 1, I = Math.min(Number($[2]), l(Number($[0]), Number($[1])));
      let M = null;
      if (e.type === "date" || e.type === "month-day" || e.type === "year-month")
        M = new Date(A, E, I);
      else if (e.type === "datetime")
        M = new Date(A, E, I, Number($[3]), Number($[4]));
      else if (e.type === "datehour")
        M = new Date(A, E, I, Number($[3]));
      else if (e.type === "hour-minute" || e.type === "time") {
        M = new Date(n.currentDate);
        const L = M.getFullYear(), C = M.getMonth(), D = M.getDate();
        M = new Date(L, C, D, Number($[0]), Number($[1]), Number($[2] || 0));
      }
      n.currentDate = o(M), t("change", { columnIndex: u, selectedValue: m, selectedOptions: h });
    }, f = (u, m) => {
      const { formatter: h, isShowChinese: $ } = e;
      let A = null;
      if (h)
        A = h(u, { text: Ze(m, 2), value: Ze(m, 2) });
      else {
        const E = Ze(m, 2), I = $ ? Tf[u] : "";
        A = { text: E + I, value: E };
      }
      return A;
    }, p = (u, m, h, $, A) => {
      const E = [];
      let I = 0;
      for (; u <= m; )
        E.push(f($, u)), $ === "minute" ? u += e.minuteStep : u++, u <= Number(h) && I++;
      return n.selectedValue[A] = E[I].value, e.filter ? e.filter($, E) : E;
    }, y = (u) => u === "year" ? n.currentDate.getFullYear() : u === "month" ? n.currentDate.getMonth() + 1 : u === "day" ? n.currentDate.getDate() : u === "hour" ? n.currentDate.getHours() : u === "minute" ? n.currentDate.getMinutes() : u === "seconds" ? n.currentDate.getSeconds() : 0, v = (u) => {
      t("cancel", u);
    }, b = (u) => {
      t("confirm", u);
    }, w = (u) => {
      switch (e.type) {
        case "date":
          u = u.slice(0, 3);
          break;
        case "datetime":
          u = u.slice(0, 5);
          break;
        case "time":
          u = u.slice(3, 6);
          break;
        case "year-month":
          u = u.slice(0, 2);
          break;
        case "month-day":
          u = u.slice(1, 3);
          break;
        case "datehour":
          u = u.slice(0, 4);
          break;
        case "hour-minute":
          u = u.slice(3, 5);
          break;
      }
      return u;
    }, k = (u) => {
      const m = [
        u.getFullYear(),
        u.getMonth() + 1,
        u.getDate(),
        u.getHours(),
        u.getMinutes(),
        u.getSeconds()
      ];
      return w(m.map((h) => String(h)));
    };
    return Un(() => {
      n.currentDate = o(e.modelValue);
    }), Q(
      () => e.modelValue,
      (u) => {
        const m = o(u);
        JSON.stringify(m) === JSON.stringify(n.currentDate) || (n.currentDate = m, n.selectedValue = k(m));
      }
    ), Q(
      () => n.currentDate,
      (u) => {
        JSON.stringify(u) === JSON.stringify(e.modelValue) || t("update:modelValue", u);
      }
    ), Q(
      () => e.title,
      (u) => {
        n.title = u;
      }
    ), pe(G({}, we(n)), {
      changeHandler: i,
      closeHandler: v,
      confirm: b,
      columns: r
    });
  }
});
function Nf(e, t, n, o, l, s) {
  const a = X("nut-picker");
  return c(), J(a, {
    modelValue: e.selectedValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => e.selectedValue = r),
    "ok-text": e.okText,
    "cancel-text": e.cancelText,
    columns: e.columns,
    title: e.title,
    "three-dimensional": e.threeDimensional,
    "swipe-duration": e.swipeDuration,
    "show-toolbar": e.showToolbar,
    "visible-option-num": e.visibleOptionNum,
    "option-height": e.optionHeight,
    onCancel: e.closeHandler,
    onChange: e.changeHandler,
    onConfirm: e.confirm
  }, {
    top: te(() => [
      T(e.$slots, "top")
    ]),
    default: te(() => [
      T(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["modelValue", "ok-text", "cancel-text", "columns", "title", "three-dimensional", "swipe-duration", "show-toolbar", "visible-option-num", "option-height", "onCancel", "onChange", "onConfirm"]);
}
const Df = /* @__PURE__ */ le(_f, [["render", Nf]]), If = ["min", "max", "disabled", "readonly", "value"], Vt = /* @__PURE__ */ ve({
  name: "NutInputNumber",
  inheritAttrs: !1,
  __name: "input-number",
  props: {
    modelValue: { default: 0 },
    inputWidth: { default: "" },
    buttonSize: { default: "" },
    min: { default: 1 },
    max: { default: 9999 },
    step: { default: 1 },
    decimalPlaces: { default: 0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "blur", "focus", "reduce", "add", "overlimit"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = Ge(Je(n, "disabled")), s = S(() => {
      const u = "nut-input-number";
      return {
        [u]: !0,
        [`${u}--disabled`]: l.value
      };
    }), a = (u) => Number(u).toFixed(Number(n.decimalPlaces)), r = (u) => {
      const m = u.target;
      o("update:modelValue", m.value, u), o("change", m.value, u);
    }, i = (u, m) => {
      let h = a(u);
      o("update:modelValue", h, m), Number(n.modelValue) !== Number(h) && o("change", h, m);
    }, f = (u = Number(n.modelValue)) => u < Number(n.max) && !l.value, p = (u = Number(n.modelValue)) => u > Number(n.min) && !l.value, y = (u) => {
      if (l.value) return;
      o("reduce", u);
      let m = Number(n.modelValue) - Number(n.step);
      p() && m >= Number(n.min) ? i(m, u) : (i(Number(n.min), u), o("overlimit", u, "reduce"));
    }, v = (u) => {
      if (l.value) return;
      o("add", u);
      let m = Number(n.modelValue) + Number(n.step);
      f() && m <= Number(n.max) ? i(m, u) : (i(Number(n.max), u), o("overlimit", u, "add"));
    }, b = (u) => {
      l.value || n.readonly || o("focus", u);
    }, w = (u) => {
      if (l.value || n.readonly) return;
      const m = u.target;
      let h = Number(m.value);
      h < Number(n.min) ? h = Number(n.min) : h > Number(n.max) && (h = Number(n.max)), i(h, u), o("blur", u);
    }, k = (u) => {
      let m = Number(u);
      return m < Number(n.min) ? m = Number(n.min) : m > Number(n.max) && (m = Number(n.max)), m;
    };
    return Q(
      () => [n.max, n.min],
      () => {
        Number(n.min) > Number(n.max) && console.warn("[NutUI] <InputNumber>", "props.max < props.min");
        const u = k(n.modelValue);
        u !== Number(n.modelValue) && i(u, {});
      }
    ), (u, m) => (c(), d("view", {
      class: B(s.value)
    }, [
      g("view", {
        class: B(["nut-input-number__icon nut-input-number__left", { "nut-input-number__icon--disabled": !p() }]),
        onClick: y
      }, [
        T(u.$slots, "left-icon", {}, () => [
          ee(ce(Xa), {
            width: ce(Be)(u.buttonSize),
            height: ce(Be)(u.buttonSize)
          }, null, 8, ["width", "height"])
        ])
      ], 2),
      g("input", dt({ type: "number" }, u.$attrs, {
        min: u.min,
        max: u.max,
        style: { width: ce(Be)(u.inputWidth), height: ce(Be)(u.buttonSize) },
        disabled: ce(l),
        readonly: u.readonly,
        value: u.modelValue,
        onInput: r,
        onBlur: w,
        onFocus: b
      }), null, 16, If),
      g("view", {
        class: B(["nut-input-number__icon nut-input-number__right", { "nut-input-number__icon--disabled": !f() }]),
        onClick: v
      }, [
        T(u.$slots, "right-icon", {}, () => [
          ee(ce(pr), {
            width: ce(Be)(u.buttonSize),
            height: ce(Be)(u.buttonSize)
          }, null, 8, ["width", "height"])
        ])
      ], 2)
    ], 2));
  }
});
ye(Vt);
function Vn(e, t, n) {
  const o = e.indexOf(t);
  return o === -1 ? e : t === "-" && o !== 0 ? e.slice(0, o) : e.slice(0, o + 1) + e.slice(o).replace(n, "");
}
function Bf(e, t = !0, n = !0) {
  t ? e = Vn(e, ".", /\./g) : e = e.split(".")[0], n ? e = Vn(e, "-", /-/g) : e = e.replace(/-/, "");
  const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(o, "");
}
function Mf(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
const Lf = { class: "nut-input-value" }, Pf = { class: "nut-input-inner" }, Af = {
  key: 0,
  class: "nut-input-left-box"
}, Ef = { class: "nut-input-box" }, zf = {
  key: 0,
  class: "nut-input-word-limit"
}, Vf = { class: "nut-input-word-num" }, Hf = { class: "nut-input-right-box" }, cn = /* @__PURE__ */ ve({
  name: "NutInput",
  __name: "input",
  props: {
    type: { default: "text" },
    modelValue: { default: "" },
    placeholder: { default: "" },
    inputAlign: { default: "left" },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    maxLength: { default: "" },
    clearable: { type: Boolean, default: !1 },
    clearSize: { default: "14" },
    border: { type: Boolean, default: !0 },
    formatTrigger: { default: "onChange" },
    formatter: {},
    showWordLimit: { type: Boolean, default: !1 },
    autofocus: { type: Boolean, default: !1 },
    confirmType: { default: "done" },
    error: { type: Boolean, default: !1 },
    showClearIcon: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "blur", "focus", "clear", "keypress", "click", "clickInput", "confirm"],
  setup(e, { expose: t, emit: n }) {
    const o = e, l = n, s = Ge(Je(o, "disabled")), a = z(!1), r = z(), i = () => {
      var _;
      return String((_ = o.modelValue) != null ? _ : "");
    }, f = (_) => Te("input", G({}, Mf(_))), p = he({
      focused: !1,
      validateFailed: !1,
      // 校验失败
      validateMessage: ""
      // 校验信息
    }), y = S(() => {
      const _ = "nut-input";
      return {
        [_]: !0,
        [`${_}--disabled`]: s.value,
        [`${_}--required`]: o.required,
        [`${_}--error`]: o.error,
        [`${_}--border`]: o.border
      };
    }), v = S(() => ({
      textAlign: o.inputAlign
    })), b = (_) => {
      if (!_.target.composing) {
        let j = _.target.value;
        o.maxLength && j.length > Number(o.maxLength) && (j = j.slice(0, Number(o.maxLength))), w(j);
      }
    }, w = (_, K = "onChange") => {
      var j;
      if (["number", "digit"].includes(o.type)) {
        const oe = o.type === "number";
        _ = Bf(_, oe, oe);
      }
      o.formatter && K === o.formatTrigger && (_ = o.formatter(_)), ((j = r == null ? void 0 : r.value) == null ? void 0 : j.value) !== _ && (r.value.value = _), _ !== o.modelValue && l("update:modelValue", _);
    }, k = (_) => {
      s.value || o.readonly || (a.value = !0, l("focus", _));
    }, u = (_) => {
      if (s.value || o.readonly)
        return;
      setTimeout(() => {
        a.value = !1;
      }, 200);
      let j = _.target.value;
      o.maxLength && j.length > Number(o.maxLength) && (j = j.slice(0, Number(o.maxLength))), w(i(), "onBlur"), l("blur", _);
    }, m = (_) => {
      _.stopPropagation(), !s.value && (l("update:modelValue", "", _), l("clear", "", _));
    }, h = () => {
      p.validateFailed && (p.validateFailed = !1, p.validateMessage = "");
    }, $ = (_) => {
      s.value || l("clickInput", _);
    }, A = (_) => {
      l("click", _);
    }, E = ({ target: _ }) => {
      _.composing = !0;
    }, I = ({ target: _ }) => {
      _.composing && (_.composing = !1, _.dispatchEvent(new Event("input")));
    };
    Q(
      () => o.modelValue,
      () => {
        w(i()), h();
      }
    ), $e(() => {
      w(i(), o.formatTrigger);
    });
    const M = () => {
      var _;
      (_ = r.value) == null || _.focus();
    }, L = () => {
      var _;
      (_ = r.value) == null || _.blur();
    }, C = () => {
      var _;
      (_ = r.value) == null || _.select();
    }, D = (_) => {
      _.key === "Enter" && l("confirm", _);
    };
    return t({
      focus: M,
      blur: L,
      select: C
    }), (_, K) => (c(), d("view", {
      class: B(y.value),
      onClick: A
    }, [
      g("view", Lf, [
        g("view", Pf, [
          _.$slots.left ? (c(), d("view", Af, [
            T(_.$slots, "left")
          ])) : N("", !0),
          g("view", Ef, [
            (c(), J(ze(f(_.type)), {
              ref_key: "inputRef",
              ref: r,
              class: "input-text",
              style: V(v.value),
              maxlength: _.maxLength,
              placeholder: _.placeholder,
              disabled: ce(s),
              readonly: _.readonly,
              value: _.modelValue,
              "format-trigger": _.formatTrigger,
              autofocus: _.autofocus,
              enterkeyhint: _.confirmType,
              onInput: b,
              onFocus: k,
              onBlur: u,
              onClick: $,
              onChange: I,
              onCompositionend: I,
              onCompositionstart: E,
              onKeyup: D
            }, null, 40, ["style", "maxlength", "placeholder", "disabled", "readonly", "value", "format-trigger", "autofocus", "enterkeyhint"])),
            _.showWordLimit && _.maxLength ? (c(), d("view", zf, [
              g("span", Vf, P(i() ? i().length : 0), 1),
              ge("/" + P(_.maxLength), 1)
            ])) : N("", !0)
          ]),
          _.clearable && !_.readonly ? Ie((c(), d("view", {
            key: 1,
            class: "nut-input-clear-box",
            onClick: m
          }, [
            T(_.$slots, "clear", {}, () => [
              ee(ce(Wa), dt({ class: "nut-input-clear" }, _.$attrs, {
                size: _.clearSize,
                width: _.clearSize,
                height: _.clearSize
              }), null, 16, ["size", "width", "height"])
            ])
          ], 512)), [
            [Me, (a.value || _.showClearIcon) && i().length > 0]
          ]) : N("", !0),
          g("view", Hf, [
            T(_.$slots, "right")
          ])
        ])
      ])
    ], 2));
  }
});
ye(cn);
const Ho = Symbol("nut-radio"), dn = /* @__PURE__ */ ve({
  name: "NutRadio",
  __name: "radio",
  props: {
    disabled: { type: Boolean, default: !1 },
    shape: { default: "round" },
    label: { type: [String, Number, Boolean], default: "" },
    iconSize: { default: "" },
    size: { default: "normal" }
  },
  setup(e) {
    const t = e, n = Ge(Je(t, "disabled")), o = Ve(Ho, null), l = S(() => o.label.value === t.label), s = S(() => n.value ? "nut-radio__icon--disable" : l.value ? "nut-radio__icon" : "nut-radio__icon--unchecked"), a = S(() => Be(t.iconSize)), r = S(() => ({
      "nut-radio__label": !0,
      "nut-radio__label--disabled": n.value
    })), i = S(() => ({
      "nut-radio__button": !0,
      "nut-radio__button--active": l.value,
      [`nut-radio__button--${t.size}`]: !0,
      "nut-radio__button--disabled": t.disabled
    })), f = () => {
      l.value || n.value || o.updateValue(t.label);
    }, p = S(() => o.position.value === "left"), y = S(() => ({
      "nut-radio": !0,
      [`nut-radio--${t.shape}`]: !0,
      "nut-radio--reverse": p.value
    }));
    return (v, b) => (c(), d("div", {
      class: B(y.value),
      onClick: f
    }, [
      v.shape === "button" ? (c(), d("div", {
        key: 0,
        class: B(i.value)
      }, [
        T(v.$slots, "default")
      ], 2)) : (c(), d(Z, { key: 1 }, [
        l.value ? T(v.$slots, "checkedIcon", { key: 0 }, () => [
          ee(ce(Kl), {
            width: a.value,
            height: a.value,
            class: B(s.value)
          }, null, 8, ["width", "height", "class"])
        ]) : T(v.$slots, "icon", { key: 1 }, () => [
          ee(ce(xn), {
            width: a.value,
            height: a.value,
            class: B(s.value)
          }, null, 8, ["width", "height", "class"])
        ]),
        g("div", {
          class: B(r.value)
        }, [
          T(v.$slots, "default")
        ], 2)
      ], 64))
    ], 2));
  }
});
ye(dn);
const fn = /* @__PURE__ */ ve({
  name: "NutRadioGroup",
  __name: "radio-group",
  props: {
    modelValue: { type: [String, Number, Boolean], default: "" },
    direction: { default: "vertical" },
    textPosition: { default: "right" }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = (s) => {
      o("update:modelValue", s);
    };
    return Re(Ho, {
      label: Nn(S(() => n.modelValue)),
      position: Nn(S(() => n.textPosition)),
      updateValue: l
    }), Q(
      () => n.modelValue,
      (s) => {
        o("change", s);
      }
    ), (s, a) => (c(), d("div", {
      class: B(["nut-radio-group", `nut-radio-group--${s.direction}`])
    }, [
      T(s.$slots, "default")
    ], 2));
  }
});
ye(fn);
const Of = ["id"], Rf = { class: "nut-rate-item__icon--full" }, Ff = {
  key: 0,
  class: "nut-rate-item__icon--half"
}, Wf = {
  key: 1,
  class: "nut-rate-item__icon--half"
}, pn = /* @__PURE__ */ ve({
  name: "NutRate",
  __name: "rate",
  props: {
    count: { default: 5 },
    modelValue: { default: 0 },
    customIcon: { default: () => Xr },
    size: {},
    activeColor: { default: "" },
    voidColor: { default: "" },
    readonly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    allowHalf: { type: Boolean, default: !1 },
    touchable: { type: Boolean, default: !0 },
    spacing: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = Math.random().toString(36).slice(-8), s = Ge(Je(n, "disabled")), a = z([]), r = (b) => {
      o("update:modelValue", b), o("change", b);
    }, i = (b, w) => {
      if (s.value || n.readonly) return;
      let k = 0;
      w === 1 && n.modelValue === w ? k = 0 : (k = w, n.allowHalf && b == 2 && (k -= 0.5)), r(k);
    }, f = (b, w, k) => {
      let u = 0;
      for (let m = w.value.length - 1; m >= 0; m--) {
        const h = w.value[m];
        if (b > h.offsetLeft) {
          k ? u = m + (b > h.offsetLeft + h.clientWidth / 2 ? 1 : 0.5) : u = m + 1;
          break;
        }
      }
      return u;
    }, p = Qe(), y = (b) => {
      !n.touchable || n.readonly || p.start(b);
    }, v = (b) => {
      n.touchable && (p.move(b), p.isHorizontal() && a.value && (b.preventDefault(), r(f(p.moveX.value, a, n.allowHalf))));
    };
    return (b, w) => (c(), d("view", {
      class: "nut-rate",
      onTouchstart: y,
      onTouchmove: v
    }, [
      (c(!0), d(Z, null, ie(Number(b.count), (k) => (c(), d("view", {
        id: "rateRefs-" + ce(l) + k,
        key: k,
        ref_for: !0,
        ref_key: "rateRefs",
        ref: a,
        class: "nut-rate-item",
        style: V(k < Number(b.count) ? { marginRight: ce(Be)(b.spacing) } : {})
      }, [
        g("view", Rf, [
          (c(), J(ze(
            ce(nt)(b.customIcon, {
              width: b.size,
              height: b.size,
              size: b.size,
              color: k <= Number(b.modelValue) ? b.activeColor : b.voidColor
            })
          ), {
            class: B(["nut-rate-item__icon", { "nut-rate-item__icon--disabled": ce(s) || k > Number(b.modelValue) }]),
            onClick: (u) => i(1, k)
          }, null, 8, ["class", "onClick"]))
        ]),
        b.allowHalf && Number(b.modelValue) + 1 > k ? (c(), d("view", Ff, [
          (c(), J(ze(
            ce(nt)(b.customIcon, {
              width: b.size,
              height: b.size,
              size: b.size,
              color: k <= Number(b.modelValue) + 1 ? b.activeColor : b.voidColor
            })
          ), {
            class: "nut-rate-item__icon",
            onClick: (u) => i(2, k)
          }, null, 8, ["onClick"]))
        ])) : b.allowHalf && Number(b.modelValue) + 1 < k ? (c(), d("view", Wf, [
          (c(), J(ze(ce(nt)(b.customIcon, { width: b.size, height: b.size, size: b.size, color: b.voidColor })), {
            class: "nut-rate-item__icon nut-rate-item__icon--disabled",
            onClick: (u) => i(2, k)
          }, null, 8, ["onClick"]))
        ])) : N("", !0)
      ], 12, Of))), 128))
    ], 32));
  }
});
ye(pn);
const { create: Yf } = ne("short-password"), jf = "NutShortPassword", Kf = Yf({
  components: {
    NutPopup: Ae,
    Tips: so
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
      default: !1
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
      default: !0
    },
    length: {
      type: [String, Number],
      // 4～6
      default: 6
    },
    lockScroll: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "update:visible", "complete", "tips", "close", "focus"],
  setup(e, { emit: t }) {
    const n = Se(jf), o = z(e.modelValue), l = S(() => i(Number(e.length))), s = z(e.visible), a = (p) => {
      p.stopPropagation(), t("focus");
    };
    Q(
      () => e.visible,
      (p) => {
        s.value = p;
      }
    ), Q(
      () => e.modelValue,
      (p) => {
        o.value = p, String(p).length === l.value && t("complete", p);
      }
    );
    const r = () => {
      t("update:visible", !1), t("close");
    }, i = (p) => Math.min(Math.max(4, p), 6);
    return {
      comLen: l,
      realInput: o,
      onTouchStart: a,
      range: i,
      close: r,
      onTips: () => {
        t("tips");
      },
      show: s,
      translate: n
    };
  }
}), Uf = { class: "nut-short-password-title" }, Xf = { class: "nut-short-password-subtitle" }, qf = { class: "nut-short-password-wrapper" }, Gf = {
  key: 0,
  class: "nut-short-password__item-icon"
}, Zf = { class: "nut-short-password__message" }, Jf = { class: "nut-short-password--error" }, Qf = {
  key: 0,
  class: "nut-short-password--forget"
};
function xf(e, t, n, o, l, s) {
  const a = X("tips"), r = X("nut-popup");
  return c(), d("view", null, [
    ee(r, {
      visible: e.show,
      "onUpdate:visible": t[2] || (t[2] = (i) => e.show = i),
      style: {
        padding: "30px 24px 20px 24px",
        borderRadius: "12px",
        textAlign: "center",
        top: "45%"
      },
      closeable: !0,
      "close-on-click-overlay": e.closeOnClickOverlay,
      "teleport-disable": !1,
      "lock-scroll": e.lockScroll,
      onClickCloseIcon: e.close,
      onClickOverlay: e.close
    }, {
      default: te(() => [
        g("view", Uf, P(e.title || e.translate("title")), 1),
        g("view", Xf, P(e.desc || e.translate("desc")), 1),
        g("div", qf, [
          g("view", {
            class: "nut-short-password__list",
            onTouchstart: t[0] || (t[0] = (...i) => e.onTouchStart && e.onTouchStart(...i))
          }, [
            (c(!0), d(Z, null, ie(new Array(e.comLen), (i, f) => (c(), d("view", {
              key: f,
              class: "nut-short-password__item"
            }, [
              String(e.realInput).length > f ? (c(), d("view", Gf)) : N("", !0)
            ]))), 128))
          ], 32)
        ]),
        g("view", Zf, [
          g("view", Jf, P(e.errorMsg), 1),
          e.tips || e.translate("tips") ? (c(), d("view", Qf, [
            ee(a, {
              class: "icon",
              width: "11px",
              height: "11px"
            }),
            g("view", {
              onClick: t[1] || (t[1] = (...i) => e.onTips && e.onTips(...i))
            }, P(e.tips || e.translate("tips")), 1)
          ])) : N("", !0)
        ])
      ]),
      _: 1
    }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "onClickCloseIcon", "onClickOverlay"])
  ]);
}
const ep = /* @__PURE__ */ le(Kf, [["render", xf]]), tp = ["rows", "disabled", "readonly", "value", "maxlength", "placeholder", "autofocus"], np = {
  key: 0,
  class: "nut-textarea__limit"
}, Hn = "NutTextarea", Oo = /* @__PURE__ */ ve({
  name: Hn,
  __name: "textarea",
  props: {
    modelValue: { default: "" },
    textAlign: {},
    limitShow: { type: Boolean, default: !1 },
    maxLength: { default: "" },
    rows: { default: "2" },
    placeholder: { default: "" },
    readonly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    autosize: { type: [Boolean, Object], default: !1 },
    autofocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = Ge(Je(n, "disabled")), s = Se(Hn), a = z(null), r = S(() => {
      const m = "nut-textarea";
      return {
        [m]: !0,
        [`${m}--disabled`]: l.value
      };
    }), i = S(() => ({
      textAlign: n.textAlign
    })), f = (m) => {
      const h = a.value;
      h && h.style && (h.style.height = typeof m == "number" ? `${m}px` : m);
    }, p = () => {
      if (f("auto"), a.value) {
        let m = a.value.scrollHeight;
        if (typeof n.autosize == "object") {
          const { maxHeight: h, minHeight: $ } = n.autosize;
          h !== void 0 && (m = Math.min(m, h)), $ !== void 0 && (m = Math.max(m, $));
        }
        m && f(m);
      }
    };
    $e(() => {
      n.modelValue && y(String(n.modelValue)), n.autosize && _e(p);
    }), Q(
      () => n.modelValue,
      () => {
        n.autosize && _e(p);
      }
    );
    const y = (m, h) => {
      n.maxLength && m.length > Number(n.maxLength) && (m = m.substring(0, Number(n.maxLength))), o("update:modelValue", m, h), o("change", m, h);
    }, v = (m) => {
      const h = m.target;
      if (!h.composing) {
        let $ = h.value;
        n.maxLength && $.length > Number(n.maxLength) && ($ = $.slice(0, Number(n.maxLength))), y(h.value, m);
      }
    }, b = (m) => {
      l.value || n.readonly || o("focus", m);
    }, w = (m) => {
      if (l.value || n.readonly) return;
      const $ = m.target.value;
      y($, m), o("blur", { value: $, event: m });
    }, k = ({ target: m }) => {
      const h = m;
      h.composing = !0;
    }, u = ({ target: m }) => {
      const h = m;
      h.composing && (h.composing = !1, h.dispatchEvent(new Event("input")));
    };
    return (m, h) => (c(), d("view", {
      class: B(r.value)
    }, [
      g("textarea", {
        ref_key: "textareaRef",
        ref: a,
        class: "nut-textarea__textarea",
        style: V(i.value),
        rows: m.rows,
        disabled: ce(l),
        readonly: m.readonly,
        value: m.modelValue,
        maxlength: m.maxLength,
        placeholder: m.placeholder || ce(s)("placeholder"),
        autofocus: m.autofocus,
        onInput: v,
        onBlur: w,
        onFocus: b,
        onChange: u,
        onCompositionend: u,
        onCompositionstart: k
      }, null, 44, tp),
      m.limitShow ? (c(), d("view", np, P(m.modelValue ? m.modelValue.length : 0) + "/" + P(m.maxLength), 1)) : N("", !0)
    ], 2));
  }
});
ye(Oo);
class op {
  constructor() {
    H(this, "url", "");
    H(this, "name", "file");
    H(this, "fileType", "image");
    H(this, "formData");
    H(this, "sourceFile");
    H(this, "method", "post");
    H(this, "xhrState", 200);
    H(this, "timeout", 30 * 1e3);
    H(this, "headers", {});
    H(this, "withCredentials", !1);
    H(this, "onStart");
    H(this, "taroFilePath");
    H(this, "onProgress");
    H(this, "onSuccess");
    H(this, "onFailure");
    H(this, "beforeXhrUpload");
  }
}
let lp = class {
  constructor(t) {
    H(this, "options");
    this.options = t;
  }
  upload() {
    var o;
    const t = this.options, n = new XMLHttpRequest();
    if (n.timeout = t.timeout, n.upload) {
      n.upload.addEventListener(
        "progress",
        (l) => {
          var s;
          (s = t.onProgress) == null || s.call(t, l, t);
        },
        !1
      ), n.onreadystatechange = () => {
        var l, s;
        n.readyState === 4 && (n.status == t.xhrState ? (l = t.onSuccess) == null || l.call(t, n.responseText, t) : (s = t.onFailure) == null || s.call(t, n.responseText, t));
      }, n.withCredentials = t.withCredentials, n.open(t.method, t.url, !0);
      for (const [l, s] of Object.entries(t.headers))
        n.setRequestHeader(l, s);
      (o = t.onStart) == null || o.call(t, t), t.beforeXhrUpload ? t.beforeXhrUpload(n, t) : n.send(t.formData);
    } else
      console.warn("浏览器不支持 XMLHttpRequest");
  }
};
class sp {
  constructor() {
    H(this, "status", "ready");
    H(this, "message", "");
    H(this, "uid", (/* @__PURE__ */ new Date()).getTime().toString());
    H(this, "name");
    H(this, "url");
    H(this, "type");
    H(this, "path");
    H(this, "percentage", 0);
    H(this, "formData", {});
  }
}
const ap = { class: "nut-progress" }, mn = /* @__PURE__ */ ve({
  name: "NutProgress",
  __name: "progress",
  props: {
    percentage: { default: 0 },
    size: { default: "base" },
    status: { default: "text" },
    strokeWidth: {},
    textInside: { type: Boolean, default: !1 },
    showText: { type: Boolean, default: !0 },
    strokeColor: {},
    textColor: {},
    textBackground: {},
    isShowPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = S(() => {
      if (t.strokeWidth)
        return t.strokeWidth + "px";
    }), o = S(() => Number(t.percentage) >= 100 ? 100 : Number(t.percentage)), l = S(() => ({
      width: o.value + "%",
      background: t.strokeColor || ""
    })), s = S(() => ({
      color: t.textColor || ""
    }));
    return (a, r) => (c(), d("div", ap, [
      g("div", {
        class: B(["nut-progress-outer", [a.showText && !a.textInside ? "nut-progress-outer-part" : "", a.size ? "nut-progress-" + a.size : ""]]),
        style: V({ height: n.value })
      }, [
        g("div", {
          class: B(["nut-progress-inner", a.status === "active" ? "nut-active" : ""]),
          style: V(l.value)
        }, null, 6),
        a.showText && a.textInside && !a.$slots.default ? (c(), d("div", {
          key: 0,
          class: "nut-progress-text nut-progress-insidetext",
          style: V({
            lineHeight: n.value,
            left: `${o.value}%`,
            transform: `translate(-${+o.value}%,-50%)`,
            background: a.textBackground || a.strokeColor
          })
        }, [
          g("span", {
            style: V(s.value)
          }, P(o.value) + P(a.isShowPercentage ? "%" : ""), 5)
        ], 4)) : N("", !0),
        a.showText && a.textInside && a.$slots.default ? (c(), d("div", {
          key: 1,
          class: "nut-progress-slot",
          style: V({
            position: "absolute",
            top: "50%",
            left: `${o.value}%`,
            transform: `translate(-${+o.value}%,-50%)`
          })
        }, [
          T(a.$slots, "default")
        ], 4)) : N("", !0)
      ], 6),
      a.showText && !a.textInside ? (c(), d("div", {
        key: 0,
        class: "nut-progress-text",
        style: V({ lineHeight: n.value })
      }, [
        a.status === "text" || a.status === "active" ? (c(), d("span", {
          key: 0,
          style: V(s.value)
        }, P(o.value) + P(a.isShowPercentage ? "%" : ""), 5)) : a.status === "icon" ? T(a.$slots, "icon-name", { key: 1 }, () => [
          ee(ce(to), {
            width: "15px",
            height: "15px",
            color: "#439422"
          })
        ]) : N("", !0)
      ], 4)) : N("", !0)
    ]));
  }
});
ye(mn);
const { create: rp } = ne("uploader"), ip = "NutUploader", up = rp({
  components: {
    NutProgress: mn,
    Photograph: ir,
    Failure: lo,
    Loading: st,
    Del: no,
    Link: ya
  },
  props: {
    name: { type: String, default: "file" },
    url: { type: String, default: "" },
    // defaultFileList: { type: Array, default: () => new Array<FileItem>() },
    timeout: { type: [Number, String], default: 1e3 * 30 },
    fileList: { type: Array, default: () => [] },
    isPreview: { type: Boolean, default: !0 },
    // picture、list
    listType: { type: String, default: "picture" },
    isDeletable: { type: Boolean, default: !0 },
    method: { type: String, default: "post" },
    capture: { type: Boolean, default: !1 },
    maximize: { type: [Number, String], default: Number.MAX_VALUE },
    maximum: { type: [Number, String], default: 1 },
    clearInput: { type: Boolean, default: !0 },
    accept: { type: String, default: "*" },
    headers: { type: Object, default: {} },
    data: { type: Object, default: {} },
    xhrState: { type: [Number, String], default: 200 },
    withCredentials: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    autoUpload: { type: Boolean, default: !0 },
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
      default: () => !0
    },
    onChange: { type: Function }
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
  setup(e, { emit: t }) {
    const n = Ge(Je(e, "disabled")), o = Se(ip), l = z(e.fileList), s = z([]);
    Q(
      () => e.fileList,
      () => {
        l.value = e.fileList;
      }
    );
    const a = () => {
      let h = {
        class: "nut-uploader__input",
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        name: e.name,
        disabled: n.value
      };
      return e.capture && (h.capture = "camera", h.accept || (h.accept = "image/*")), Te("input", h);
    }, r = (h) => {
      h.value = "";
    }, i = (h) => {
      t("fileItemClick", { fileItem: h });
    }, f = (h, $) => {
      const A = new op();
      A.url = e.url, A.formData = h.formData, A.timeout = e.timeout * 1, A.method = e.method, A.xhrState = e.xhrState, A.headers = e.headers, A.withCredentials = e.withCredentials, A.beforeXhrUpload = e.beforeXhrUpload;
      try {
        A.sourceFile = h.formData.get(e.name);
      } catch (I) {
        console.warn("[NutUI] <Uploader> formData.get(name)", I);
      }
      A.onStart = (I) => {
        h.status = "ready", h.message = o("readyUpload"), p($), t("start", I);
      }, A.onProgress = (I, M) => {
        h.status = "uploading", h.message = o("uploading"), h.percentage = (I.loaded / I.total * 100).toFixed(0), t("progress", { event: I, option: M, percentage: h.percentage });
      }, A.onSuccess = (I, M) => {
        h.status = "success", h.message = o("success"), t("success", {
          responseText: I,
          option: M,
          fileItem: h
        }), t("update:fileList", l.value);
      }, A.onFailure = (I, M) => {
        h.status = "error", h.message = o("error"), t("failure", {
          responseText: I,
          option: M,
          fileItem: h
        });
      };
      let E = new lp(A);
      e.autoUpload ? E.upload() : s.value.push(
        new Promise((I) => {
          I(E);
        })
      );
    }, p = (h = -1) => {
      h > -1 ? s.value.splice(h, 1) : (s.value = [], l.value = [], t("update:fileList", l.value));
    }, y = () => {
      Promise.all(s.value).then((h) => {
        h.forEach(($) => $.upload());
      });
    }, v = (h) => {
      h.forEach(($, A) => {
        const E = new FormData();
        for (const [M, L] of Object.entries(e.data))
          E.append(M, L);
        E.append(e.name, $);
        const I = he(new sp());
        if (I.name = $.name, I.status = "ready", I.type = $.type, I.formData = E, I.message = o("waitingUpload"), f(I, A), e.isPreview && $.type.includes("image")) {
          const M = new FileReader();
          M.onload = (L) => {
            I.url = L.target.result, l.value.push(I);
          }, M.readAsDataURL($);
        } else
          l.value.push(I);
      });
    }, b = (h) => {
      const $ = e.maximum * 1, A = e.maximize * 1, E = new Array();
      h = h.filter((M) => M.size > A ? (E.push(M), !1) : !0), E.length && t("oversize", E);
      let I = h.length + l.value.length;
      return I > $ && h.splice(h.length - (I - $)), h;
    }, w = (h, $) => {
      l.value.splice($, 1), t("delete", {
        file: h,
        fileList: l.value,
        index: $
      });
    }, k = (h, $) => {
      n.value || (p($), en(e.beforeDelete, {
        args: [h, l.value],
        done: () => w(h, $)
      }));
    }, u = (h) => {
      if (e.disabled || n.value)
        return;
      const $ = h.target;
      let { files: A } = $;
      e.beforeUpload ? e.beforeUpload(A).then((E) => m(E)) : m(A), t("change", {
        fileList: l.value,
        event: h
      }), e.clearInput && r($);
    }, m = (h) => {
      const $ = b(new Array().slice.call(h));
      v($);
    };
    return {
      onChange: u,
      onDelete: k,
      fileList: l,
      fileItemClick: i,
      clearUploadQueue: p,
      submit: y,
      renderInput: a
    };
  }
}), cp = { class: "nut-uploader" }, dp = {
  key: 0,
  class: "nut-uploader__slot"
}, fp = {
  key: 0,
  class: "nut-uploader__preview-img"
}, pp = {
  key: 0,
  class: "nut-uploader__preview__progress"
}, mp = { class: "nut-uploader__preview__progress__msg" }, hp = ["onClick"], vp = ["src", "onClick"], gp = {
  key: 3,
  class: "nut-uploader__preview-img__file"
}, yp = ["onClick"], bp = { class: "file__name_tips" }, $p = { class: "tips" }, wp = {
  key: 1,
  class: "nut-uploader__preview-list"
}, kp = ["onClick"], Cp = { class: "file__name_tips" };
function Sp(e, t, n, o, l, s) {
  const a = X("Failure"), r = X("Loading"), i = X("Link"), f = X("Del"), p = X("nut-progress"), y = X("Photograph");
  return c(), d("view", cp, [
    e.$slots.default ? (c(), d("view", dp, [
      T(e.$slots, "default"),
      Number(e.maximum) - e.fileList.length ? (c(), J(ze(e.renderInput), {
        key: 0,
        onChange: e.onChange
      }, null, 40, ["onChange"])) : N("", !0)
    ])) : N("", !0),
    (c(!0), d(Z, null, ie(e.fileList, (v, b) => {
      var w;
      return c(), d("view", {
        key: v.uid,
        class: B(["nut-uploader__preview", [e.listType]])
      }, [
        e.listType == "picture" && !e.$slots.default ? (c(), d("view", fp, [
          v.status != "success" ? (c(), d("view", pp, [
            v.status != "ready" ? (c(), d(Z, { key: 0 }, [
              v.status == "error" ? (c(), J(a, {
                key: 0,
                color: "#fff"
              })) : (c(), J(r, {
                key: 1,
                name: "loading",
                color: "#fff"
              }))
            ], 64)) : N("", !0),
            g("view", mp, P(v.message), 1)
          ])) : N("", !0),
          e.isDeletable ? (c(), d("view", {
            key: 1,
            class: "close",
            onClick: (k) => e.onDelete(v, b)
          }, [
            T(e.$slots, "delete-icon", {}, () => [
              ee(a)
            ])
          ], 8, hp)) : N("", !0),
          (w = v == null ? void 0 : v.type) != null && w.includes("image") && v.url ? (c(), d("img", {
            key: 2,
            class: "nut-uploader__preview-img__c",
            src: v.url,
            onClick: (k) => e.fileItemClick(v)
          }, null, 8, vp)) : (c(), d("view", gp, [
            g("view", {
              class: "nut-uploader__preview-img__file__name",
              onClick: (k) => e.fileItemClick(v)
            }, [
              g("view", bp, P(v.name), 1)
            ], 8, yp)
          ])),
          g("view", $p, P(v.name), 1)
        ])) : e.listType == "list" ? (c(), d("view", wp, [
          g("view", {
            class: B(["nut-uploader__preview-img__file__name", [v.status]]),
            onClick: (k) => e.fileItemClick(v)
          }, [
            ee(i, { class: "nut-uploader__preview-img__file__link" }),
            g("view", Cp, P(v.name), 1),
            e.isDeletable ? (c(), J(f, {
              key: 0,
              color: "#808080",
              class: "nut-uploader__preview-img__file__del",
              onClick: De((k) => e.onDelete(v, b), ["stop"])
            }, null, 8, ["onClick"])) : N("", !0)
          ], 10, kp),
          v.status == "uploading" ? (c(), J(p, {
            key: 0,
            size: "small",
            percentage: v.percentage,
            "stroke-color": "linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)",
            "show-text": !1
          }, null, 8, ["percentage"])) : N("", !0)
        ])) : N("", !0)
      ], 2);
    }), 128)),
    e.listType == "picture" && !e.$slots.default && Number(e.maximum) - e.fileList.length ? (c(), d("view", {
      key: 1,
      class: B(["nut-uploader__upload", [e.listType]])
    }, [
      T(e.$slots, "upload-icon", {}, () => [
        ee(y, { color: "#808080" })
      ]),
      (c(), J(ze(e.renderInput), { onChange: e.onChange }, null, 40, ["onChange"]))
    ], 2)) : N("", !0)
  ]);
}
const Tp = /* @__PURE__ */ le(up, [["render", Sp]]), { create: _p } = ne("number-keyboard"), Np = "NutNumberKeyboard", Dp = _p({
  components: {
    NutPopup: Ae
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
      default: !1
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
      default: !1
    },
    popClass: {
      type: String,
      default: ""
    },
    lockScroll: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["input", "delete", "close", "blur", "confirm", "update:modelValue", "update:visible"],
  setup(e, { emit: t }) {
    const n = Se(Np), o = z(void 0), l = z(e.visible), s = z();
    function a() {
      const { customKey: m } = e;
      let h = {
        id: "lock",
        type: "lock"
      }, $ = Array.isArray(m) ? m : [m];
      return $.length === 1 && (h = {
        id: $[0],
        type: "custom"
      }), [...r(), h, { id: 0, type: "number" }, { id: "delete", type: "delete" }];
    }
    function r() {
      const m = [];
      for (let h = 1; h <= 9; h++)
        m.push({ id: h, type: "number" });
      return e.randomKeys ? m.sort(() => Math.random() > 0.5 ? 1 : -1) : m;
    }
    function i() {
      const m = r(), { customKey: h } = e;
      let $ = Array.isArray(h) ? h : [h];
      return $.length > 2 && ($ = [$[0], $[1]]), $.length == 2 && e.title && e.type != "rightColumn" && ($ = [$[0]]), $.length === 1 ? e.title && e.type != "rightColumn" ? m.push({ id: $[0], type: "custom" }, { id: 0, type: "number" }, { id: "delete", type: "delete" }) : m.push({ id: 0, type: "number" }, { id: $[0], type: "custom" }) : $.length === 2 && m.push(
        { id: $[0], type: "custom" },
        { id: 0, type: "number" },
        { id: $[1], type: "custom" }
      ), m;
    }
    const f = S(() => e.type == "rightColumn" || e.title != "" ? i() : a()), p = () => {
      e.visible && t("blur");
    }, y = (m) => {
      const h = s.value;
      h && !h.contains(m.target) && p();
    };
    Q(
      () => e.visible,
      (m) => {
        l.value = m, m ? window.addEventListener("touchstart", y, !1) : window.removeEventListener("touchstart", y, !1);
      }
    );
    function v(m, h) {
      h.stopPropagation(), o.value = m.id, (m.type == "number" || m.type == "custom") && (t("input", m.id), e.modelValue.length < +e.maxlength && t("update:modelValue", e.modelValue + m.id)), m.type == "lock" && k(), m.type == "delete" && (t("delete"), t("update:modelValue", e.modelValue.slice(0, e.modelValue.length - 1)));
    }
    function b(m) {
      m.stopPropagation();
    }
    function w(m) {
      m.preventDefault(), o.value = void 0;
    }
    function k() {
      t("update:visible", !1), t("close");
    }
    return {
      clickKeyIndex: o,
      defaultKey: a,
      closeBoard: k,
      confirm: () => {
        t("confirm");
      },
      onTouchEnd: w,
      onTouchMove: b,
      onTouchstart: v,
      keysList: f,
      genCustomKeys: i,
      getBasicKeys: r,
      root: s,
      show: l,
      translate: n
    };
  }
}), Ip = { ref: "root" }, Bp = { class: "nut-number-keyboard" }, Mp = {
  key: 0,
  class: "nut-number-keyboard__header"
}, Lp = { class: "nut-number-keyboard__title" }, Pp = { class: "nut-number-keyboard__body" }, Ap = { class: "nut-number-keyboard__keys" }, Ep = ["onTouchstart"], zp = {
  key: 1,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
}, Vp = {
  key: 2,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
}, Hp = {
  key: 0,
  class: "nut-number-keyboard__sidebar"
}, Op = { class: "nut-key__wrapper" };
function Rp(e, t, n, o, l, s) {
  const a = X("nut-popup");
  return c(), d("div", Ip, [
    ee(a, {
      visible: e.show,
      "onUpdate:visible": t[7] || (t[7] = (r) => e.show = r),
      position: "bottom",
      "pop-class": e.popClass,
      overlay: !1,
      "lock-scroll": e.lockScroll,
      "teleport-disable": !1
    }, {
      default: te(() => [
        g("div", Bp, [
          e.title ? (c(), d("div", Mp, [
            g("h3", Lp, P(e.title), 1),
            e.type == "default" ? (c(), d("span", {
              key: 0,
              class: "nut-number-keyboard__close",
              onClick: t[0] || (t[0] = (r) => e.closeBoard())
            }, P(e.translate("done")), 1)) : N("", !0)
          ])) : N("", !0),
          g("div", Pp, [
            g("div", Ap, [
              (c(!0), d(Z, null, ie(e.keysList, (r) => (c(), d("div", {
                key: "key" + r.id,
                class: B([
                  "nut-key__wrapper",
                  {
                    "nut-key__wrapper--wider": r.id == 0 && e.type == "rightColumn" && Array.isArray(e.customKey) && e.customKey.length == 1
                  }
                ])
              }, [
                g("div", {
                  class: B([
                    "nut-key",
                    { "nut-key--active": r.id == e.clickKeyIndex },
                    { "nut-key--lock": r.type == "lock" },
                    { "nut-key--delete": r.type == "delete" }
                  ]),
                  onTouchstart: (i) => e.onTouchstart(r, i),
                  onTouchmove: t[1] || (t[1] = (i) => e.onTouchMove(i)),
                  onTouchend: t[2] || (t[2] = (i) => e.onTouchEnd(i))
                }, [
                  r.type == "number" || r.type == "custom" ? (c(), d(Z, { key: 0 }, [
                    ge(P(r.id), 1)
                  ], 64)) : N("", !0),
                  r.type == "lock" ? (c(), d("img", zp)) : N("", !0),
                  r.type == "delete" ? (c(), d("img", Vp)) : N("", !0)
                ], 42, Ep)
              ], 2))), 128))
            ]),
            e.type == "rightColumn" ? (c(), d("div", Hp, [
              g("div", Op, [
                g("div", {
                  class: B(["nut-key", { active: e.clickKeyIndex == "delete" }]),
                  onTouchstart: t[3] || (t[3] = (r) => e.onTouchstart({ id: "delete", type: "delete" }, r)),
                  onTouchmove: t[4] || (t[4] = (r) => e.onTouchMove(r)),
                  onTouchend: t[5] || (t[5] = (...r) => e.onTouchEnd && e.onTouchEnd(...r))
                }, t[8] || (t[8] = [
                  g("img", { src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png" }, null, -1)
                ]), 34)
              ]),
              g("div", {
                class: "nut-key__wrapper nut-key__wrapper--finish",
                onClick: t[6] || (t[6] = (...r) => e.confirm && e.confirm(...r))
              }, [
                g("div", {
                  class: B(["nut-key", "nut-key--finish ", { activeFinsh: e.clickKeyIndex == "finish" }])
                }, P(e.confirmText || e.translate("done")), 3)
              ])
            ])) : N("", !0)
          ])
        ])
      ]),
      _: 1
    }, 8, ["visible", "pop-class", "lock-scroll"])
  ], 512);
}
const Fp = /* @__PURE__ */ le(Dp, [["render", Rp]]), hn = /* @__PURE__ */ ve({
  name: "NutForm",
  __name: "form",
  props: {
    modelValue: { default: () => ({}) },
    rules: { default: () => ({}) },
    disabled: { type: Boolean, default: !1 },
    labelPosition: { default: "left" },
    starPosition: { default: "left" }
  },
  emits: ["validate"],
  setup(e, { expose: t, emit: n }) {
    const o = e, l = n, { children: s, linkChildren: a } = pt(Bo);
    a({ props: o });
    const { linkChildren: r } = pt(Mo);
    r({ props: o });
    const i = S(() => he({}));
    Re(Lo, i);
    const f = () => {
      Object.keys(i.value).forEach((u) => {
        i.value[u] = "";
      });
    }, p = () => {
      f();
    };
    Q(
      () => o.modelValue,
      () => {
        f();
      },
      { immediate: !0 }
    );
    const y = () => {
      const u = [];
      return s.forEach((m) => {
        u.push({
          prop: m == null ? void 0 : m.prop,
          rules: (m == null ? void 0 : m.rules) || []
        });
      }), u;
    }, v = (u) => {
      u.message && l("validate", u), i.value[u.prop] = u.message;
    }, b = (u) => Ue(this, null, function* () {
      const { rules: m = [], prop: h } = u, $ = (L) => new Promise((C, D) => {
        try {
          v(L), C(L);
        } catch (_) {
          D(_);
        }
      });
      h || console.warn("[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
      const A = Ut(o.modelValue, h || "");
      v({ prop: h, message: "" });
      const E = o.rules || {}, I = [...(E == null ? void 0 : E[h]) || [], ...m];
      for (; I.length; ) {
        const M = I.shift(), { validator: C } = M, D = Yt(M, ["validator"]), { required: _, regex: K, message: j } = D, oe = { prop: h, message: j || "" };
        if (_ && !A && A !== 0 || K && !K.test(String(A)))
          return $(oe);
        if (C) {
          const W = C(A, D);
          if (Gn(W))
            try {
              if ((yield W) === !1)
                return $(oe);
            } catch (Y) {
              return $({ prop: h, message: Y });
            }
          else if (!W)
            return $(oe);
        }
      }
      return Promise.resolve(!0);
    }), w = (u = "") => new Promise((m, h) => {
      try {
        const A = y().map((E) => u && u !== E.prop ? Promise.resolve(!0) : b(E));
        Promise.all(A).then((E) => {
          E = E.filter((M) => M !== !0);
          const I = { valid: !0, errors: [] };
          E.length && (I.valid = !1, I.errors = E), m(I);
        });
      } catch ($) {
        h($);
      }
    });
    return t({
      submit: () => (w(), !1),
      reset: p,
      validate: w
    }), (u, m) => (c(), d("form", {
      class: "nut-form",
      action: "#",
      onSubmit: De(() => !1, ["prevent"])
    }, [
      ee(ce(an), null, {
        default: te(() => [
          T(u.$slots, "default")
        ]),
        _: 3
      })
    ], 32));
  }
});
ye(hn);
const Wp = { class: "nut-cell__value nut-form-item__body" }, vn = /* @__PURE__ */ ve({
  name: "NutFormItem",
  inheritAttrs: !1,
  __name: "form-item",
  props: {
    prop: { default: "" },
    label: { default: "" },
    rules: { default: () => [] },
    required: { type: Boolean, default: !1 },
    showErrorMessage: { type: Boolean, default: !0 },
    showErrorLine: { type: Boolean, default: !0 },
    labelWidth: {},
    labelAlign: {},
    errorMessageAlign: {},
    bodyAlign: {},
    labelPosition: {},
    starPosition: {}
  },
  setup(e) {
    const t = e, { parent: n } = mt(Bo), o = S(() => {
      var v;
      const p = (v = n.props) == null ? void 0 : v.rules;
      let y = !1;
      for (const b in p)
        Object.prototype.hasOwnProperty.call(p, b) && b === t.prop && Array.isArray(p[b]) && (y = p[b].some((w) => w.required));
      return t.required || t.rules.some((b) => b.required) || y;
    }), l = S(() => {
      const p = n.props.labelPosition, y = t.labelPosition ? t.labelPosition : p;
      return y !== "left" ? `nut-form-item__${y}` : "";
    }), s = S(() => {
      const p = n.props.starPosition, y = t.starPosition ? t.starPosition : p;
      return y !== "left" ? `nut-form-item__star-${y}` : "";
    }), a = Ve(Lo), r = S(() => ({
      width: Be(t.labelWidth),
      textAlign: t.labelAlign
    })), i = S(() => ({
      textAlign: t.bodyAlign
    })), f = S(() => ({
      textAlign: t.errorMessageAlign
    }));
    return (p, y) => (c(), J(ce(sn), {
      class: B(["nut-form-item", [{ error: ce(a)[p.prop], line: p.showErrorLine }, p.$attrs.class, l.value]]),
      style: V(p.$attrs.style)
    }, {
      default: te(() => [
        p.label || p.$slots.label ? (c(), d("view", {
          key: 0,
          class: B(["nut-cell__title nut-form-item__label", { required: o.value, [s.value]: s.value }]),
          style: V(r.value)
        }, [
          T(p.$slots, "label", {}, () => [
            ge(P(p.label), 1)
          ])
        ], 6)) : N("", !0),
        g("view", Wp, [
          g("view", {
            class: "nut-form-item__body__slots",
            style: V(i.value)
          }, [
            T(p.$slots, "default")
          ], 4),
          ce(a)[p.prop] && p.showErrorMessage ? (c(), d("view", {
            key: 0,
            class: "nut-form-item__body__tips",
            style: V(f.value)
          }, P(ce(a)[p.prop]), 5)) : N("", !0)
        ])
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
ye(vn);
const Ro = Symbol("nut-swipe"), gn = /* @__PURE__ */ ve({
  name: "NutSwipe",
  __name: "swipe",
  props: {
    name: { default: "" },
    touchMoveStopPropagation: { type: Boolean, default: !1 },
    touchMovePreventDefault: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["open", "close", "click"],
  setup(e, { expose: t, emit: n }) {
    const o = e, l = n, s = (C) => {
      var D;
      return ((D = C.value) == null ? void 0 : D.getBoundingClientRect().width) || 0;
    }, a = z(!1), r = z(), i = S(() => s(r)), f = z(), p = S(() => s(f)), y = Ve(Ro, null);
    Q(
      () => {
        var C;
        return (C = y == null ? void 0 : y.name) == null ? void 0 : C.value;
      },
      (C) => {
        o.name !== C && y && y.lock && m();
      }
    );
    const v = z(!1);
    let b = "", w = "";
    const k = he({
      offset: 0,
      moving: !1
    }), u = (C = "") => {
      y && y.update(o.name), v.value = !0, C && (k.offset = C === "left" ? -p.value : i.value), l("open", {
        name: o.name,
        position: b || C
      });
    }, m = () => {
      k.offset = 0, v.value && (v.value = !1, l("close", {
        name: o.name,
        position: b
      }));
    }, h = (C, D, _) => {
      _ ? C.stopPropagation() : m(), l("click", D);
    }, $ = S(() => ({
      transform: `translate3d(${k.offset}px, 0, 0)`
    })), A = (C) => {
      b = C > 0 ? "right" : "left";
      let D = C;
      switch (b) {
        case "left":
          v.value && w === b ? D = -p.value : D = Math.abs(C) > p.value ? -p.value : C;
          break;
        case "right":
          v.value && w === b ? D = i.value : D = Math.abs(C) > i.value ? i.value : C;
          break;
      }
      k.offset = D;
    }, E = Qe(), I = (C) => {
      o.disabled || E.start(C);
    }, M = (C) => {
      o.disabled || (E.move(C), E.isHorizontal() && (a.value = !0, k.moving = !0, A(E.deltaX.value), o.touchMovePreventDefault && C.preventDefault(), o.touchMoveStopPropagation && C.stopPropagation()));
    }, L = () => {
      if (k.moving) {
        switch (k.moving = !1, w = b, b) {
          case "left":
            Math.abs(k.offset) <= p.value / 2 ? m() : (k.offset = -p.value, u());
            break;
          case "right":
            Math.abs(k.offset) <= i.value / 2 ? m() : (k.offset = i.value, u());
            break;
        }
        setTimeout(() => {
          a.value = !1;
        }, 0);
      }
    };
    return t({
      open: u,
      close: m
    }), (C, D) => (c(), d("view", {
      class: "nut-swipe",
      style: V($.value),
      onTouchstart: I,
      onTouchmove: M,
      onTouchend: L,
      onTouchcancel: L
    }, [
      g("view", {
        ref_key: "leftRef",
        ref: r,
        class: "nut-swipe__left",
        onClick: D[0] || (D[0] = (_) => h(_, "left", !0))
      }, [
        T(C.$slots, "left")
      ], 512),
      g("view", {
        class: "nut-swipe__content",
        onClick: D[1] || (D[1] = (_) => h(_, "content", a.value))
      }, [
        T(C.$slots, "default")
      ]),
      g("view", {
        ref_key: "rightRef",
        ref: f,
        class: "nut-swipe__right",
        onClick: D[2] || (D[2] = (_) => h(_, "right", !0))
      }, [
        T(C.$slots, "right")
      ], 512)
    ], 36));
  }
});
ye(gn);
const Fo = /* @__PURE__ */ ve({
  name: "NutSwipeGroup",
  __name: "swipe-group",
  props: {
    lock: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = z(null), o = z("");
    return Re(Ro, {
      update: (s) => {
        o.value = s;
      },
      lock: t.lock,
      name: o
    }), (s, a) => (c(), d("div", {
      ref_key: "swipeGroupRef",
      ref: n,
      class: "nut-swipe-group"
    }, [
      T(s.$slots, "default")
    ], 512));
  }
});
ye(Fo);
const { create: Yp } = ne("action-sheet"), jp = Yp({
  components: {
    NutPopup: Ae,
    Loading: st
  },
  props: pe(G({}, Nt), {
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
      default: !0
    }
  }),
  emits: ["cancel", "close", "choose", "update:visible"],
  setup(e, { emit: t }) {
    return {
      slotDefault: !!St().default,
      isHighlight: (r) => e.chooseTagValue && e.chooseTagValue === r[e.optionTag] ? e.color : "",
      cancelActionSheet: () => {
        t("cancel"), t("update:visible", !1);
      },
      chooseItem: (r, i) => {
        !r.disable && !r.loading && (t("choose", r, i), t("update:visible", !1));
      },
      close: (r) => {
        e.closeAbled && (t("close", r), t("update:visible", !1));
      }
    };
  }
}), Kp = { class: "nut-action-sheet" }, Up = {
  key: 0,
  class: "nut-action-sheet__title"
}, Xp = { key: 1 }, qp = {
  key: 0,
  class: "nut-action-sheet__item nut-action-sheet__desc"
}, Gp = {
  key: 1,
  class: "nut-action-sheet__menu"
}, Zp = ["onClick"], Jp = { key: 1 }, Qp = { class: "nut-action-sheet__subdesc" };
function xp(e, t, n, o, l, s) {
  const a = X("Loading"), r = X("nut-popup");
  return c(), J(r, {
    visible: e.visible,
    position: "bottom",
    round: "",
    "close-on-click-overlay": e.closeAbled,
    "lock-scroll": e.lockScroll,
    "z-index": e.zIndex,
    onClickOverlay: e.close
  }, {
    default: te(() => [
      g("view", Kp, [
        e.title ? (c(), d("view", Up, P(e.title), 1)) : N("", !0),
        T(e.$slots, "default"),
        e.slotDefault ? N("", !0) : (c(), d("view", Xp, [
          e.description ? (c(), d("view", qp, P(e.description), 1)) : N("", !0),
          e.menuItems.length ? (c(), d("view", Gp, [
            (c(!0), d(Z, null, ie(e.menuItems, (i, f) => (c(), d("view", {
              key: f,
              class: B(["nut-action-sheet__item", {
                "nut-action-sheet__item--disabled": i.disable,
                "nut-action-sheet__item--loading": i.loading
              }]),
              style: V({ color: e.isHighlight(i) || i.color }),
              onClick: (p) => e.chooseItem(i, f)
            }, [
              i.loading ? (c(), J(a, { key: 0 })) : (c(), d("view", Jp, P(i[e.optionTag]), 1)),
              g("view", Qp, P(i[e.optionSubTag]), 1)
            ], 14, Zp))), 128))
          ])) : N("", !0),
          e.cancelTxt ? (c(), d("view", {
            key: 2,
            class: "nut-action-sheet__cancel",
            onClick: t[0] || (t[0] = (...i) => e.cancelActionSheet && e.cancelActionSheet(...i))
          }, P(e.cancelTxt), 1)) : N("", !0)
        ]))
      ])
    ]),
    _: 3
  }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "z-index", "onClickOverlay"]);
}
const e1 = /* @__PURE__ */ le(jp, [["render", xp]]), Wo = /* @__PURE__ */ ve({
  name: "NutBacktop",
  __name: "backtop",
  props: {
    bottom: { default: 20 },
    right: { default: 10 },
    elId: { default: "body" },
    distance: { default: 200 },
    zIndex: { default: 10 },
    isAnimation: { type: Boolean, default: !0 },
    duration: { default: 1e3 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = z(!1), s = z(0), a = z(window), r = z(0), i = z(!1), f = S(() => ({
      ["nut-backtop"]: !0,
      show: l.value
    })), p = S(() => ({
      right: `${n.right}px`,
      bottom: `${n.bottom}px`,
      zIndex: n.zIndex
    }));
    function y() {
      a.value instanceof Window ? s.value = a.value.scrollY : s.value = a.value.scrollTop, l.value = s.value >= n.distance;
    }
    function v(h = 0) {
      a.value instanceof Window ? window.scrollTo(0, h) : a.value.scrollTop = h;
    }
    function b() {
      let h = Oe(function $() {
        var A = n.duration - Math.max(0, r.value - +/* @__PURE__ */ new Date() + n.duration), E = A * -s.value / n.duration + s.value;
        v(E), h = Oe($), (A == n.duration || E == 0) && Qu(h);
      });
    }
    function w() {
      a.value.addEventListener("scroll", y, !1), a.value.addEventListener("resize", y, !1);
    }
    function k() {
      a.value.removeEventListener("scroll", y, !1), a.value.removeEventListener("resize", y, !1);
    }
    function u(h) {
      r.value = +/* @__PURE__ */ new Date(), n.isAnimation && n.duration > 0 ? b() : v(), o("click", h);
    }
    function m() {
      n.elId && document.getElementById(n.elId) && (a.value = document.getElementById(n.elId)), w();
    }
    return $e(() => {
      n.distance == 0 && (l.value = !0), m();
    }), Xe(() => {
      k();
    }), Tt(() => {
      i.value && (i.value = !1, m());
    }), _t(() => {
      i.value = !0, k();
    }), (h, $) => (c(), d("div", {
      class: B(f.value),
      style: V(p.value),
      onClick: De(u, ["stop"])
    }, [
      T(h.$slots, "default", {}, () => [
        ee(ce(ri), {
          width: "19px",
          height: "19px",
          class: "nut-backtop-main"
        })
      ])
    ], 6));
  }
});
ye(Wo);
const { create: t1 } = ne("drag"), n1 = t1({
  props: {
    attract: {
      type: Boolean,
      default: !1
    },
    direction: {
      type: String,
      default: "all"
    },
    boundary: {
      type: Object,
      default: () => ({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      })
    }
  },
  setup(e) {
    const t = z(), n = he({
      keepAlive: !1,
      elWidth: 0,
      elHeight: 0,
      screenWidth: 0,
      screenHeight: 0,
      startTop: 0,
      startLeft: 0,
      nx: 0,
      ny: 0,
      xPum: 0,
      yPum: 0,
      position: { x: 0, y: 0 },
      boundary: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    });
    function o() {
      const f = document.documentElement;
      n.elWidth = t.value.offsetWidth, n.elHeight = t.value.offsetHeight, n.screenWidth = f.clientWidth || 375, n.screenHeight = f.clientHeight || 667;
    }
    function l(f) {
      n.boundary.left ? +f.style.left.split("px")[0] > n.boundary.left ? (f.style.left = +f.style.left.split("px")[0] - 10 + "px", Oe(() => {
        l(f);
      })) : f.style.left = `${n.boundary.left}px` : +f.style.left.split("px")[0] > 10 ? (f.style.left = +f.style.left.split("px")[0] - 10 + "px", Oe(() => {
        l(f);
      })) : f.style.left = "0px";
    }
    function s(f, p) {
      p - parseInt(f.style.left.split("px")[0]) > 10 ? (f.style.left = parseInt(f.style.left.split("px")[0]) + 10 + "px", Oe(() => {
        s(f, p);
      })) : f.style.left = p + "px";
    }
    function a(f) {
      f.preventDefault();
      const p = f.currentTarget;
      if (f.targetTouches.length === 1) {
        const y = f.targetTouches[0];
        n.nx = y.clientX - n.position.x, n.ny = y.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
        const v = n.screenWidth - n.elWidth - n.boundary.right;
        Math.abs(n.xPum) > v ? n.xPum = v : n.xPum <= n.boundary.left && (n.xPum = n.boundary.left), n.yPum < n.boundary.top ? n.yPum = n.boundary.top : n.yPum > n.screenHeight - n.elHeight - n.boundary.bottom && (n.yPum = n.screenHeight - n.elHeight - n.boundary.bottom), e.direction != "y" && (p.style.left = n.xPum + "px"), e.direction != "x" && (p.style.top = n.yPum + "px");
      }
    }
    function r(f) {
      const p = f.currentTarget;
      let v = f.changedTouches[0].clientX;
      const b = n.screenWidth - n.elWidth - n.boundary.right;
      v > b ? v = b : v < n.boundary.left ? v = n.boundary.left : v = v < n.screenWidth / 2 ? n.boundary.left : b, e.direction != "y" && e.attract && (v < n.screenWidth / 2 ? Oe(() => {
        l(p);
      }) : Oe(() => {
        s(p, b);
      })), e.direction != "x" && (p.style.top = n.yPum + "px");
    }
    function i(f) {
      const p = f.currentTarget, y = f.touches[0], v = f.targetTouches[0];
      n.startTop = p.offsetTop, n.startLeft = p.offsetLeft, n.position.x = y.clientX, n.position.y = y.clientY, n.nx = v.clientX - n.position.x, n.ny = v.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
    }
    return $e(() => {
      o(), n.boundary = e.boundary;
    }), Tt(() => {
      n.keepAlive && (n.keepAlive = !1);
    }), _t(() => {
      n.keepAlive = !0, t.value.removeEventListener("touchstart", i), t.value.removeEventListener("touchmove", a), t.value.removeEventListener("touchend", r);
    }), {
      myDrag: t,
      touchStart: i,
      touchMove: a,
      touchEnd: r
    };
  }
});
function o1(e, t, n, o, l, s) {
  return c(), d("view", {
    ref: "myDrag",
    class: "nut-drag",
    onTouchstart: t[0] || (t[0] = (a) => e.touchStart(a)),
    onTouchmove: t[1] || (t[1] = (a) => e.touchMove(a)),
    onTouchend: t[2] || (t[2] = (a) => e.touchEnd(a))
  }, [
    T(e.$slots, "default")
  ], 544);
}
const l1 = /* @__PURE__ */ le(n1, [["render", o1]]), { create: s1 } = ne("dialog"), a1 = "NutDialog", r1 = s1({
  inheritAttrs: !1,
  components: {
    NutPopup: Ae,
    NutButton: qe
  },
  props: pe(G({}, Nt), {
    closeOnClickOverlay: {
      type: Boolean,
      default: !1
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
      default: !1
    },
    noOkBtn: {
      type: Boolean,
      default: !1
    },
    noCancelBtn: {
      type: Boolean,
      default: !1
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
      default: !0
    },
    okAutoClose: {
      type: Boolean,
      default: !0
    },
    textAlign: {
      type: String,
      default: "center"
    },
    closeOnPopstate: {
      type: Boolean,
      default: !1
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
  setup(e, { emit: t }) {
    const n = Se(a1), o = z(e.visible);
    $e(() => {
      e.closeOnPopstate && window.addEventListener("popstate", function() {
        s("page");
      });
    }), Q(
      () => e.visible,
      (p) => {
        o.value = p, p && t("opened");
      }
    );
    const l = (p) => {
      t("update", p), t("update:visible", p);
    }, s = (p) => {
      en(e.beforeClose, {
        args: [p],
        done: () => {
          o.value = !1, l(!1), t("closed");
        }
      });
    }, a = () => {
      t("cancel"), e.cancelAutoClose && (o.value = !1, s("cancel"));
    }, r = () => {
      t("ok"), e.okAutoClose && s("ok");
    }, i = () => {
      console.log(1), console.log(e.closeOnClickOverlay), e.closeOnClickOverlay && (console.log(2), s(""));
    }, f = S(() => ({
      textAlign: e.textAlign
    }));
    return {
      closed: s,
      onCancel: a,
      onOk: r,
      showPopup: o,
      onClickOverlay: i,
      contentStyle: f,
      translate: n
    };
  }
}), i1 = {
  key: 0,
  class: "nut-dialog__header"
}, u1 = ["innerHTML"];
function c1(e, t, n, o, l, s) {
  const a = X("nut-button"), r = X("nut-popup");
  return c(), J(r, {
    visible: e.showPopup,
    "onUpdate:visible": t[0] || (t[0] = (i) => e.showPopup = i),
    teleport: e.teleport,
    "close-on-click-overlay": !1,
    "lock-scroll": e.lockScroll,
    "pop-class": e.popClass,
    "overlay-class": e.overlayClass,
    "overlay-style": e.overlayStyle,
    style: V(e.popStyle),
    round: "",
    "z-index": e.zIndex,
    onClickOverlay: e.onClickOverlay,
    onClickCloseIcon: e.closed
  }, {
    default: te(() => [
      g("view", {
        class: B(["nut-dialog", e.customClass])
      }, [
        e.$slots.header || e.title ? (c(), d("view", i1, [
          e.$slots.header ? T(e.$slots, "header", { key: 0 }) : (c(), d(Z, { key: 1 }, [
            ge(P(e.title), 1)
          ], 64))
        ])) : N("", !0),
        g("view", {
          class: "nut-dialog__content",
          style: V(e.contentStyle)
        }, [
          e.$slots.default ? T(e.$slots, "default", { key: 0 }) : typeof e.content == "string" ? (c(), d("view", {
            key: 1,
            innerHTML: e.content
          }, null, 8, u1)) : (c(), J(ze(e.content), { key: 2 }))
        ], 4),
        e.noFooter ? N("", !0) : (c(), d("view", {
          key: 1,
          class: B(["nut-dialog__footer", { [e.footerDirection]: e.footerDirection }])
        }, [
          e.$slots.footer ? T(e.$slots, "footer", { key: 0 }) : (c(), d(Z, { key: 1 }, [
            e.noCancelBtn ? N("", !0) : (c(), J(a, {
              key: 0,
              size: "small",
              plain: "",
              type: "primary",
              class: "nut-dialog__footer-cancel",
              onClick: e.onCancel
            }, {
              default: te(() => [
                ge(P(e.cancelText || e.translate("cancel")), 1)
              ]),
              _: 1
            }, 8, ["onClick"])),
            e.noOkBtn ? N("", !0) : (c(), J(a, {
              key: 1,
              size: "small",
              type: "primary",
              class: "nut-dialog__footer-ok",
              onClick: e.onOk
            }, {
              default: te(() => [
                ge(P(e.okText || e.translate("confirm")), 1)
              ]),
              _: 1
            }, 8, ["onClick"]))
          ], 64))
        ], 2))
      ], 2)
    ]),
    _: 3
  }, 8, ["visible", "teleport", "lock-scroll", "pop-class", "overlay-class", "overlay-style", "style", "z-index", "onClickOverlay", "onClickCloseIcon"]);
}
const yn = /* @__PURE__ */ le(r1, [["render", c1]]);
class d1 {
  constructor() {
    H(this, "title", "");
    H(this, "content", "");
    H(this, "cancelText", "");
    H(this, "okText", "");
    H(this, "textAlign", "center");
    H(this, "customClass", "");
    H(this, "overlayStyle", {});
    H(this, "overlayClass", "");
    H(this, "popStyle", {});
    H(this, "popClass", "");
    H(this, "teleport", "body");
    H(this, "id", (/* @__PURE__ */ new Date()).getTime());
    H(this, "footerDirection", "horizontal");
    // 使用横纵方向 可选值 horizontal、vertical
    // function
    H(this, "onUpdate");
    H(this, "onOk");
    H(this, "onCancel");
    H(this, "onOpened");
    H(this, "onClosed");
    H(this, "beforeClose");
    H(this, "visible", !0);
    H(this, "noFooter", !1);
    H(this, "noOkBtn", !1);
    H(this, "noCancelBtn", !1);
    H(this, "okBtnDisabled", !1);
    H(this, "closeOnPopstate", !1);
    H(this, "closeOnClickOverlay", !0);
    H(this, "lockScroll", !0);
    H(this, "cancelAutoClose", !0);
    H(this, "okAutoClose", !0);
  }
}
class f1 {
  constructor(t) {
    H(this, "options", new d1());
    H(this, "instance");
    const n = Object.assign(this.options, t), { unmount: o } = rn(n, {
      name: "dialog",
      components: [Ae, qe, ht],
      wrapper: (l, s) => ({
        setup() {
          return n.onUpdate = (a) => {
            a === !1 && _e(() => {
              o();
            });
          }, n != null && n.onOpened && (n == null || n.onOpened()), n.teleport = `#${s.id}`, () => Te(yn, n);
        }
      })
    });
  }
}
const p1 = function(e) {
  return new f1(e);
};
p1.install = (e) => {
  e.use(yn);
};
const { create: m1 } = ne("infinite-loading"), h1 = "NutInfiniteLoading", v1 = m1({
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    hasMore: {
      type: Boolean,
      default: !0
    },
    threshold: {
      type: Number,
      default: 200
    },
    loadTxt: {
      type: String,
      default: ""
    },
    loadMoreTxt: {
      type: String,
      default: ""
    },
    useCapture: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["scrollChange", "loadMore", "update:modelValue"],
  components: {
    Loading: st
  },
  setup(e, { emit: t, slots: n }) {
    const o = Se(h1), l = z(), s = mo(l), a = he({
      beforeScrollTop: 0,
      isInfiniting: !1,
      y: 0,
      x: 0,
      distance: 0
    }), r = (b) => b ? b.offsetTop + r(b.offsetParent) : 0, i = () => {
      let b = 0, w = 0, k = "down";
      if (s.value == window) {
        const u = Jn();
        l.value && (b = r(l.value) + l.value.offsetHeight - u - window.innerHeight), w = u;
      } else {
        const { scrollHeight: u, clientHeight: m, scrollTop: h } = s.value;
        b = u - m - h, w = h;
      }
      return a.beforeScrollTop > w ? k = "up" : k = "down", a.beforeScrollTop = w, t("scrollChange", w), b <= e.threshold && k == "down";
    }, f = () => {
      Oe(() => {
        if (!i() || !e.hasMore || a.isInfiniting)
          return !1;
        a.isInfiniting = !0, t("update:modelValue", !0), _e(() => t("loadMore"));
      });
    }, p = () => {
      s.value && s.value.addEventListener("scroll", f, e.useCapture);
    }, y = () => {
      s.value && s.value.removeEventListener("scroll", f, e.useCapture);
    };
    $e(() => {
      p();
    }), Xe(() => {
      y();
    });
    const v = z(!1);
    return Tt(() => {
      v.value && (v.value = !1, p());
    }), _t(() => {
      v.value = !0, y();
    }), Q(
      () => e.modelValue,
      (b) => {
        b || (a.isInfiniting = !1);
      }
    ), pe(G({
      scroller: l
    }, we(a)), {
      translate: o,
      slots: n
    });
  }
}), g1 = {
  ref: "scroller",
  class: "nut-infinite-loading"
}, y1 = { class: "nut-infinite__container" }, b1 = { class: "nut-infinite__bottom" }, $1 = {
  key: 0,
  class: "nut-infinite__bottom-box"
}, w1 = { class: "nut-infinite__bottom-box__text" }, k1 = { class: "nut-infinite__bottom-tips" };
function C1(e, t, n, o, l, s) {
  const a = X("Loading");
  return c(), d("view", g1, [
    g("view", y1, [
      T(e.$slots, "default")
    ]),
    g("view", b1, [
      e.isInfiniting ? (c(), d("view", $1, [
        T(e.$slots, "loading", {}, () => [
          T(e.$slots, "loading-icon", {}, () => [
            ee(a, { class: "nut-icon-loading nut-infinite__bottom-box__img" })
          ]),
          g("view", w1, P(e.loadTxt || e.translate("loading")), 1)
        ])
      ])) : e.hasMore ? N("", !0) : T(e.$slots, "finished", { key: 1 }, () => [
        g("view", k1, P(e.loadMoreTxt || e.translate("loadMoreTxt")), 1)
      ])
    ])
  ], 512);
}
const S1 = /* @__PURE__ */ le(v1, [["render", C1]]), { create: T1 } = ne("pull-refresh"), _1 = "NutPullRefresh", N1 = T1({
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    pullingTxt: {
      type: String,
      default: ""
    },
    loosingTxt: {
      type: String,
      default: ""
    },
    loadingTxt: {
      type: String,
      default: ""
    },
    completeTxt: {
      type: String,
      default: ""
    },
    headHeight: {
      type: [String, Number],
      default: 50
    },
    pullDistance: {
      type: [String, Number],
      default: 50
    },
    duration: {
      type: [String, Number],
      default: 0.3
    },
    completeDuration: {
      type: Number,
      default: 0
    }
  },
  emits: ["change", "refresh", "update:modelValue"],
  components: { Loading: st },
  setup(e, { emit: t, slots: n }) {
    const o = Se(_1), l = Qe(), s = z(), a = mo(s), r = he({
      isPullRefresh: !1,
      distance: 0,
      status: "normal"
    }), i = S(() => {
      switch (r.status) {
        case "pulling":
          return n.pulling ? "" : e.pullingTxt || o("pulling");
        case "loosing":
          return n.loosing ? "" : e.loosingTxt || o("loosing");
        case "loading":
          return n.loading ? "" : e.loadingTxt || o("loading");
        case "complete":
          return n.complete ? "" : e.completeTxt || o("complete");
      }
      return "";
    }), f = S(() => ({
      transitionDuration: `${e.duration}s`,
      transform: r.distance ? `translate3d(0,${r.distance}px, 0)` : ""
    })), p = S(() => {
      const h = {};
      return e.headHeight != 50 && (h.height = Be(e.headHeight)), h;
    }), y = (h) => {
      const $ = +(e.pullDistance || e.headHeight);
      let A = h;
      return h > $ && (h < $ * 2 ? A = (h + $) / 2 : A = $ + h / 4), Math.round(A);
    }, v = (h, $, A) => {
      const E = +(e.pullDistance || e.headHeight);
      r.distance = h, $ ? r.status = "loading" : A ? r.status = "complete" : h === 0 ? r.status = "normal" : h < E ? r.status = "pulling" : r.status = "loosing", t("change", { status: r.status, distance: h });
    }, b = () => r.status !== "loading" && r.status !== "complete", w = () => a.value == window ? Jn() == 0 : a.value && a.value.scrollTop == 0, k = (h) => {
      b() && (w() ? (l.start(h), r.isPullRefresh = !0) : (r.distance = 0, r.isPullRefresh = !1));
    }, u = (h) => {
      if (b()) {
        l.move(h);
        const { deltaY: $ } = l;
        l.isVertical() && $.value > 0 && r.isPullRefresh && (h.preventDefault(), v(y($.value)));
      }
    }, m = () => {
      r.isPullRefresh && b() && l.deltaY.value && (r.status === "loosing" ? (v(+e.headHeight, !0), t("update:modelValue", !0), _e(() => t("refresh"))) : v(0)), setTimeout(() => {
        l.reset();
      }, 0);
    };
    return Q(
      () => e.modelValue,
      (h) => {
        h ? v(+e.headHeight, !0) : (e.completeDuration === 0 && v(0), v(+e.headHeight, !1, !0), setTimeout(() => {
          v(0);
        }, e.completeDuration));
      }
    ), pe(G({
      scroller: s
    }, we(r)), {
      touchStart: k,
      touchMove: u,
      touchEnd: m,
      getStyle: f,
      translate: o,
      slots: n,
      getHeightStyle: p,
      getPullStatus: i
    });
  }
}), D1 = { class: "nut-pull-refresh-container-topbox-text" };
function I1(e, t, n, o, l, s) {
  const a = X("Loading");
  return c(), d("div", {
    ref: "scroller",
    class: "nut-pull-refresh",
    onTouchstart: t[0] || (t[0] = (...r) => e.touchStart && e.touchStart(...r)),
    onTouchmove: t[1] || (t[1] = (...r) => e.touchMove && e.touchMove(...r)),
    onTouchend: t[2] || (t[2] = (...r) => e.touchEnd && e.touchEnd(...r))
  }, [
    g("div", {
      class: "nut-pull-refresh-container",
      style: V(e.getStyle)
    }, [
      g("div", {
        class: "nut-pull-refresh-container-topbox",
        style: V(e.getHeightStyle)
      }, [
        e.status == "loading" && !e.slots.loading ? (c(), J(a, {
          key: 0,
          class: "nut-icon-loading nut-pull-refresh-container-topbox-icon"
        })) : N("", !0),
        g("div", D1, P(e.getPullStatus), 1),
        e.status == "pulling" ? T(e.$slots, "pulling", { key: 1 }) : N("", !0),
        e.status == "loosing" ? T(e.$slots, "loosing", { key: 2 }) : N("", !0),
        e.status == "loading" ? T(e.$slots, "loading", { key: 3 }) : N("", !0),
        e.status == "complete" ? T(e.$slots, "complete", { key: 4 }) : N("", !0)
      ], 4),
      T(e.$slots, "default")
    ], 4)
  ], 544);
}
const B1 = /* @__PURE__ */ le(N1, [["render", I1]]), { create: M1 } = ne("notify"), L1 = M1({
  components: {
    NutPopup: Ae
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
      default: !1
    },
    position: {
      type: String,
      default: "top"
    },
    teleportDisable: {
      type: Boolean,
      default: !0
    },
    onClose: Function,
    onClick: Function,
    unmount: Function
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = () => {
      e.onClick && e.onClick();
    };
    let o = null;
    const l = () => {
      o && clearTimeout(o), o = null;
    }, s = () => {
      t("update:visible", !1);
    }, a = z(!1), r = Q(
      () => e.visible,
      (f) => {
        a.value = e.visible;
        const p = e.duration;
        f && p && (o = setTimeout(() => {
          s();
        }, p));
      },
      { immediate: !0 }
    );
    return { onAfterLeave: () => {
      l(), r && r(), e.unmount && e.unmount(e.id), e.onClose && e.onClose();
    }, clickCover: n, isShowPopup: a };
  }
});
function P1(e, t, n, o, l, s) {
  const a = X("nut-popup");
  return c(), J(a, {
    visible: e.isShowPopup,
    "onUpdate:visible": t[1] || (t[1] = (r) => e.isShowPopup = r),
    position: e.position,
    overlay: !1,
    "teleport-disable": e.teleportDisable
  }, {
    default: te(() => [
      g("div", {
        class: B(["nut-notify", `nut-notify--${e.type}`, e.className]),
        style: V({ color: e.color, background: e.background }),
        onClick: t[0] || (t[0] = (...r) => e.clickCover && e.clickCover(...r))
      }, [
        e.$slots.default ? T(e.$slots, "default", { key: 0 }) : (c(), d(Z, { key: 1 }, [
          ge(P(e.msg), 1)
        ], 64))
      ], 6)
    ]),
    _: 3
  }, 8, ["visible", "position", "teleport-disable"]);
}
const Ht = /* @__PURE__ */ le(L1, [["render", P1]]), Gt = {
  type: "base",
  visible: !0,
  msg: "",
  color: void 0,
  background: void 0,
  duration: 3e3,
  className: "",
  onClose: Function,
  // onClick: null,
  // onOpened: null,
  // textTimer: null,
  teleport: "",
  unmount: new Function()
};
let rt = [], wt = [];
const Yo = (e) => {
  if (e) {
    const t = document.getElementById(e);
    wt = wt.filter((n) => n.id !== e), rt = rt.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    rt.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), wt = [], rt = [];
}, A1 = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = wt.find((l) => l.id === e.id);
    n ? e = G(G(G({}, Gt), n), e) : e = G(G({}, Gt), e);
    const o = ee(Ht, e);
    return xt(o, t), o.component.data;
  }
}, yt = (e) => {
  e.unmount = Yo;
  let t;
  if (e.id) {
    if (t = e.id, rt.find((s) => s === e.id))
      return A1(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  e = G(G({}, Gt), e), e.id = t, rt.push(e.id), wt.push(e);
  const n = document.createElement("view");
  n.id = "notify-" + e.id;
  const l = ee({
    setup() {
      return e.teleport = `#notify-${e.id}`, $e(() => {
        setTimeout(() => {
          e.onClose && e.onClose(), document.body.removeChild(n);
        }, e.duration);
      }), () => Te(Ht, e);
    }
  });
  document.body.appendChild(n), xt(l, n);
}, bt = (e) => {
  if (!e) {
    console.warn("[NutUI Notify]: msg不能为空");
    return;
  }
}, J2 = {
  text(e, t = {}) {
    return bt(e), yt(pe(G({}, t), { msg: e }));
  },
  primary(e, t = {}) {
    return bt(e), yt(pe(G({}, t), { msg: e, type: "primary" }));
  },
  success(e, t = {}) {
    return bt(e), yt(pe(G({}, t), { msg: e, type: "success" }));
  },
  danger(e, t = {}) {
    return bt(e), yt(pe(G({}, t), { msg: e, type: "danger" }));
  },
  warn(e, t = {}) {
    return bt(e), yt(pe(G({}, t), { msg: e, type: "warning" }));
  },
  hide() {
    Yo();
  },
  install(e) {
    e.use(Ht);
  }
}, E1 = { class: "nut-switch-button" }, jo = /* @__PURE__ */ ve({
  name: "NutSwitch",
  __name: "switch",
  props: {
    modelValue: { type: [String, Number, Boolean], default: !1 },
    disabled: { type: Boolean, default: !1 },
    activeColor: { default: "" },
    inactiveColor: { default: "" },
    activeText: { default: "" },
    inactiveText: { default: "" },
    activeValue: { type: [String, Number, Boolean], default: !0 },
    inactiveValue: { type: [String, Number, Boolean], default: !1 },
    loading: { type: Boolean, default: !1 },
    disable: { type: Boolean, default: !1 }
  },
  emits: ["change", "update:modelValue", "update:loading"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = S(() => n.disabled || n.disable), s = Ge(l), a = S(() => n.modelValue === n.activeValue), r = S(() => {
      const y = "nut-switch";
      return {
        [y]: !0,
        [a.value ? "nut-switch-open" : "nut-switch-close"]: !0,
        [`${y}-disabled`]: s.value,
        [`${y}-base`]: !0
      };
    }), i = S(() => ({
      backgroundColor: a.value ? n.activeColor : n.inactiveColor
    }));
    let f = "";
    const p = (y) => {
      if (n.loading || s.value) return;
      const v = a.value ? n.inactiveValue : n.activeValue;
      f = "click", o("update:modelValue", v), o("change", v, y);
    };
    return Q(
      () => n.modelValue,
      (y) => {
        f == "click" ? f = "" : o("change", y);
      }
    ), (y, v) => (c(), d("view", {
      class: B(r.value),
      style: V(i.value),
      onClick: p
    }, [
      g("view", E1, [
        y.loading ? T(y.$slots, "icon", { key: 0 }, () => [
          ee(ce(Na), {
            name: "loading",
            color: y.activeColor
          }, null, 8, ["color"])
        ]) : N("", !0),
        y.activeText ? (c(), d(Z, { key: 1 }, [
          Ie(g("view", { class: "nut-switch-label open" }, P(y.activeText), 513), [
            [Me, a.value]
          ]),
          Ie(g("view", { class: "nut-switch-label close" }, P(y.inactiveText), 513), [
            [Me, !a.value]
          ])
        ], 64)) : N("", !0)
      ])
    ], 6));
  }
});
ye(jo);
const { create: z1 } = ne("toast"), V1 = z1({
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
      default: !0
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
      default: null
    },
    textAlignCenter: {
      type: Boolean,
      default: !0
    },
    loadingRotate: {
      type: Boolean,
      default: !0
    },
    bgColor: {
      type: String,
      default: ""
    },
    onClose: Function,
    unmount: Function,
    cover: {
      type: Boolean,
      default: !1
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
      default: !1
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    let n;
    const o = he({
      mounted: !1
    });
    $e(() => {
      o.mounted = !0;
    });
    const l = () => {
      n && (clearTimeout(n), n = null);
    }, s = () => {
      o.mounted = !1;
    }, a = () => {
      l(), e.duration && (n = window.setTimeout(() => {
        s();
      }, e.duration));
    }, r = () => {
      e.closeOnClickOverlay && (s(), t("close"));
    };
    e.duration && a(), Q(
      () => e.duration,
      (v) => {
        v && a();
      }
    );
    const i = S(() => e.type !== "text" ? !0 : e.icon !== null), f = S(() => [
      "nut-toast",
      { "nut-toast-center": e.center },
      { "nut-toast-has-icon": i.value },
      { "nut-toast-cover": e.cover },
      { "nut-toast-loading": e.type === "loading" },
      e.customClass,
      "nut-toast-" + e.size
    ]), p = S(() => ["nut-toast-icon-wrapper", { "nut-toast-icon-no-animation": !e.loadingRotate }]);
    return {
      state: o,
      hide: s,
      clickCover: r,
      hasIcon: i,
      toastBodyClass: f,
      toastIconWrapperClass: p,
      onAfterLeave: () => {
        var v;
        l(), (v = e.unmount) == null || v.call(e, e.id), e.onClose && e.onClose();
      },
      renderIcon: nt
    };
  }
}), H1 = {
  key: 1,
  class: "nut-toast-title"
}, O1 = ["innerHTML"];
function R1(e, t, n, o, l, s) {
  return c(), J(Jt, {
    name: "toast-fade",
    onAfterLeave: e.onAfterLeave
  }, {
    default: te(() => [
      Ie(g("view", {
        class: B(e.toastBodyClass),
        style: V({
          bottom: e.center ? "auto" : e.bottom,
          "background-color": e.coverColor
        }),
        onClick: t[0] || (t[0] = (...a) => e.clickCover && e.clickCover(...a))
      }, [
        g("view", {
          class: "nut-toast-inner",
          style: V({
            "text-align": e.textAlignCenter ? "center" : "left",
            "background-color": e.bgColor
          })
        }, [
          e.hasIcon ? (c(), d("view", {
            key: 0,
            class: B(e.toastIconWrapperClass)
          }, [
            (c(), J(ze(e.renderIcon(e.icon)), { color: "#ffffff" }))
          ], 2)) : N("", !0),
          e.title ? (c(), d("div", H1, P(e.title), 1)) : N("", !0),
          g("view", {
            class: "nut-toast-text",
            innerHTML: e.msg
          }, null, 8, O1)
        ], 4)
      ], 6), [
        [Me, e.state.mounted]
      ])
    ]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
const Ot = /* @__PURE__ */ le(V1, [["render", R1]]), Zt = {
  msg: "",
  id: "",
  duration: 2e3,
  // 显示时间(毫秒)
  center: !0,
  // 未实现
  type: "text",
  title: "",
  customClass: "",
  bottom: "30px",
  size: "base",
  iconSize: "20",
  icon: null,
  textAlignCenter: !0,
  // 未实现
  loadingRotate: !0,
  // 未实现
  bgColor: "",
  onClose: null,
  // 未实现
  unmount: null,
  cover: !1,
  // 透明遮罩层 // 未实现
  coverColor: "",
  // 未实现
  closeOnClickOverlay: !1
  // 未实现
};
let it = [], kt = [];
const Ko = (e) => {
  if (e) {
    const t = document.getElementById(e);
    kt = kt.filter((n) => n.id !== e), it = it.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    it.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), kt = [], it = [];
}, F1 = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = kt.find((l) => l.id === e.id);
    n ? e = G(G(G({}, Zt), n), e) : e = G(G({}, Zt), e);
    const o = ee(Ot, e);
    return xt(o, t), Uo;
  }
}, $t = (e) => {
  e.unmount = Ko;
  let t;
  if (e.id) {
    if (t = e.id, it.find((n) => n === e.id))
      return F1(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  return e = G(G({}, Zt), e), e.id = t, it.push(e.id), kt.push(e), rn(e, {
    wrapper: Ot
  }), Uo;
}, Lt = (e) => {
  if (!e) {
    console.warn("[NutUI Toast]: msg不能为空");
    return;
  }
}, Uo = {
  text(e, t = {}) {
    return Lt(e), $t(pe(G({}, t), { type: "text", msg: e }));
  },
  success(e, t = {}) {
    return Lt(e), $t(pe(G({ icon: Qr }, t), { msg: e, type: "success" }));
  },
  fail(e, t = {}) {
    return Lt(e), $t(pe(G({ icon: lo }, t), { msg: e, type: "fail" }));
  },
  warn(e, t = {}) {
    return Lt(e), $t(pe(G({ icon: so }, t), { msg: e, type: "warn" }));
  },
  loading(e, t = {}) {
    return $t(pe(G({
      icon: st
    }, t), {
      msg: e,
      type: "loading"
    }));
  },
  hide(e) {
    Ko(e);
  },
  install(e) {
    e.use(Ot);
  }
}, Xo = Symbol("nut-audio"), { create: W1 } = ne("audio"), Y1 = W1({
  props: {
    url: {
      type: String,
      default: ""
    },
    // 静音
    muted: {
      type: Boolean,
      default: !1
    },
    // 自动播放
    autoplay: {
      type: Boolean,
      default: !1
    },
    // 循环播放
    loop: {
      type: Boolean,
      default: !1
    },
    // 是否预加载音频
    preload: {
      type: String,
      default: "auto"
    },
    /* 总时长秒数 */
    second: {
      type: Number,
      default: 0
    },
    // 展示的形式   controls 控制面板   progress 进度条  icon 图标 none 自定义
    type: {
      type: String,
      default: "progress"
    }
  },
  components: {
    Service: Wr,
    NutRange: Po
  },
  emits: ["fastBack", "play", "forward", "ended", "changeProgress", "mute", "canPlay"],
  setup(e, { emit: t, slots: n }) {
    const o = z(null), l = he({
      currentTime: 0,
      currentDuration: "00:00:00",
      percent: 0,
      duration: "00:00:00",
      second: 0,
      hanMuted: e.muted,
      playing: e.autoplay,
      handPlaying: !1
    });
    $e(() => {
      var k = ["webkitVisibilityState", "visibilitychange"];
      try {
        for (let u = 0; u < k.length; u++)
          document.addEventListener(k[u], () => {
            document.hidden ? o.value.pause() : l.playing && setTimeout(() => {
              o.value.play();
            }, 200);
          });
      } catch (u) {
        console.log(u.message);
      }
    });
    const s = (k) => {
      const u = o.value;
      e.autoplay && u && u.paused && u.play(), l.second = u.duration, l.duration = w(u.duration), t("canPlay", k);
    }, a = (k) => {
      l.currentTime = parseInt(k.target.currentTime);
    }, r = () => {
      l.currentTime > 0 && l.currentTime--, o.value.currentTime = l.currentTime, t("fastBack", l.currentTime);
    }, i = () => {
      const k = o.value;
      l.playing ? (k.pause(), l.handPlaying = !1) : (k.play(), l.handPlaying = !0), l.playing = !l.playing, t("play", l.playing);
    }, f = () => {
      l.currentTime++, o.value.currentTime = l.currentTime, t("forward", l.currentTime);
    }, p = (k) => {
      l.currentDuration = w(k), l.percent = k / l.second * 100;
    }, y = () => {
      l.playing = !1, t("ended");
    }, v = (k) => {
      const u = o.value;
      u.currentTime = l.second * k / 100, t("changeProgress", u.currentTime);
    }, b = () => {
      l.hanMuted = !l.hanMuted, t("mute", l.hanMuted);
    }, w = (k) => {
      if (!k)
        return "00:00:00";
      let u = parseInt(k), m = Math.floor(u / 3600), h = Math.floor((u - m * 3600) / 60), $ = u - m * 3600 - h * 60, A = "";
      return A += ("0" + m.toString()).slice(-2) + ":", A += ("0" + h.toString()).slice(-2) + ":", A += ("0" + $.toString()).slice(-2), A;
    };
    return Q(
      () => l.currentTime,
      (k) => {
        p(k);
      }
    ), Re(Xo, {
      children: [],
      props: e,
      audioData: l,
      handleMute: b,
      forward: f,
      fastBack: r,
      changeStatus: i
    }), pe(G(G({}, we(e)), we(l)), {
      audioRef: o,
      fastBack: r,
      forward: f,
      changeStatus: i,
      progressChange: v,
      audioEnd: y,
      onTimeupdate: a,
      handleMute: b,
      onCanplay: s,
      slots: n
    });
  }
}), j1 = { class: "nut-audio" }, K1 = {
  key: 0,
  class: "nut-audio__progress"
}, U1 = { class: "nut-audio__time" }, X1 = { class: "nut-audio__bar" }, q1 = { class: "nut-audio__time" }, G1 = {
  key: 1,
  class: "nut-audio__icon"
}, Z1 = ["controls", "src", "preload", "autoplay", "loop", "muted"];
function J1(e, t, n, o, l, s) {
  const a = X("nut-range"), r = X("Service");
  return c(), d("div", j1, [
    e.type == "progress" ? (c(), d("div", K1, [
      g("div", U1, P(e.currentDuration), 1),
      g("div", X1, [
        ee(a, {
          modelValue: e.percent,
          "onUpdate:modelValue": t[0] || (t[0] = (i) => e.percent = i),
          "hidden-range": "",
          "inactive-color": "#cccccc",
          "active-color": "#fa2c19",
          onChange: e.progressChange
        }, {
          button: te(() => t[6] || (t[6] = [
            g("div", { class: "nut-audio__button--custom" }, null, -1)
          ])),
          _: 1
        }, 8, ["modelValue", "onChange"])
      ]),
      g("div", q1, P(e.duration), 1)
    ])) : N("", !0),
    e.type == "icon" ? (c(), d("div", G1, [
      g("div", {
        class: B(["nut-audio__icon--box", e.playing ? "nut-audio__icon--play" : "nut-audio__icon--stop"]),
        onClick: t[1] || (t[1] = (...i) => e.changeStatus && e.changeStatus(...i))
      }, [
        e.playing ? (c(), J(r, {
          key: 0,
          class: "nut-icon-am-rotate nut-icon-am-infinite"
        })) : (c(), J(r, { key: 1 }))
      ], 2)
    ])) : N("", !0),
    e.type == "none" ? (c(), d("div", {
      key: 2,
      onClick: t[2] || (t[2] = (...i) => e.changeStatus && e.changeStatus(...i))
    }, [
      T(e.$slots, "default")
    ])) : N("", !0),
    e.type != "none" ? T(e.$slots, "default", { key: 3 }) : N("", !0),
    g("audio", {
      ref: "audioRef",
      class: "audioMain",
      controls: e.type == "controls",
      src: e.url,
      preload: e.preload,
      autoplay: e.autoplay,
      loop: e.loop,
      muted: e.hanMuted,
      onTimeupdate: t[3] || (t[3] = (...i) => e.onTimeupdate && e.onTimeupdate(...i)),
      onCanplay: t[4] || (t[4] = (...i) => e.onCanplay && e.onCanplay(...i)),
      onEnded: t[5] || (t[5] = (...i) => e.audioEnd && e.audioEnd(...i))
    }, null, 40, Z1)
  ]);
}
const Q1 = /* @__PURE__ */ le(Y1, [["render", J1]]), { create: x1 } = ne("audio-operate"), em = "NutAudioOperate", tm = x1({
  props: {
    // 展示的形式   back 倒退   play 开始 or 暂停  forward 快进 mute 静音
    type: {
      type: String,
      default: () => "play"
    }
  },
  components: {
    NutButton: qe
  },
  emits: ["click"],
  setup(e) {
    const t = Se(em), n = Ve(Xo), o = he(n), l = z(St().default);
    return pe(G(G({}, we(e)), we(o)), { customSlot: l, translate: t });
  }
}), nm = { class: "nut-audio-operate" };
function om(e, t, n, o, l, s) {
  const a = X("nut-button");
  return c(), d("div", nm, [
    e.type == "back" ? (c(), d("div", {
      key: 0,
      class: "nut-audio-operate-item",
      onClick: t[0] || (t[0] = (...r) => e.fastBack && e.fastBack(...r))
    }, [
      e.customSlot ? N("", !0) : (c(), J(a, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: te(() => [
          ge(P(e.translate("back")), 1)
        ]),
        _: 1
      })),
      T(e.$slots, "default")
    ])) : N("", !0),
    e.type == "play" ? (c(), d("div", {
      key: 1,
      class: "nut-audio-operate-item",
      onClick: t[1] || (t[1] = (...r) => e.changeStatus && e.changeStatus(...r))
    }, [
      e.customSlot ? N("", !0) : (c(), J(a, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: te(() => [
          ge(P(e.audioData.playing ? `${e.translate("pause")}` : `${e.translate("start")}`), 1)
        ]),
        _: 1
      })),
      T(e.$slots, "default")
    ])) : N("", !0),
    e.type == "forward" ? (c(), d("div", {
      key: 2,
      class: "nut-audio-operate-item",
      onClick: t[2] || (t[2] = (...r) => e.forward && e.forward(...r))
    }, [
      e.customSlot ? N("", !0) : (c(), J(a, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: te(() => t[4] || (t[4] = [
          ge("快进")
        ])),
        _: 1
      })),
      T(e.$slots, "default")
    ])) : N("", !0),
    e.type == "mute" ? (c(), d("div", {
      key: 3,
      class: "nut-audio-operate-item",
      onClick: t[3] || (t[3] = (...r) => e.handleMute && e.handleMute(...r))
    }, [
      e.customSlot ? N("", !0) : (c(), J(a, {
        key: 0,
        type: e.audioData.hanMuted ? "default" : "primary",
        size: "small"
      }, {
        default: te(() => [
          ge(P(e.translate("mute")), 1)
        ]),
        _: 1
      }, 8, ["type"])),
      T(e.$slots, "default")
    ])) : N("", !0)
  ]);
}
const lm = /* @__PURE__ */ le(tm, [["render", om]]), qo = Symbol("nut-avatar"), { create: sm } = ne("avatar"), am = sm({
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
  setup(e) {
    const { size: t, shape: n, bgColor: o, color: l } = we(e), s = ["large", "normal", "small"], a = Ve(qo, null), r = z(null), i = S(() => {
      var y, v;
      return {
        ["nut-avatar"]: !0,
        [`nut-avatar-${t.value || ((y = a == null ? void 0 : a.props) == null ? void 0 : y.size) || "normal"}`]: !0,
        [`nut-avatar-${n.value || ((v = a == null ? void 0 : a.props) == null ? void 0 : v.shape) || "round"}`]: !0
      };
    }), f = S(() => {
      var p, y;
      return {
        width: t.value in s ? "" : `${t.value}px`,
        height: t.value in s ? "" : `${t.value}px`,
        backgroundColor: `${o.value}`,
        color: `${l.value}`,
        marginLeft: (p = a == null ? void 0 : a.props) != null && p.span ? `${(y = a == null ? void 0 : a.props) == null ? void 0 : y.span}px` : ""
      };
    });
    return {
      classes: i,
      styles: f,
      avatarRef: r
    };
  }
});
function rm(e, t, n, o, l, s) {
  return c(), d("view", {
    ref: "avatarRef",
    style: V(e.styles),
    class: B(e.classes)
  }, [
    T(e.$slots, "default")
  ], 6);
}
const bn = /* @__PURE__ */ le(am, [["render", rm]]), { create: im } = ne("avatar-group"), um = im({
  components: {
    NutAvatar: bn
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
  setup(e) {
    const t = z(null), n = z(99), o = z(), l = S(() => ({
      marginLeft: -1 * Number(e.span) + "px"
    })), s = (r) => {
      let i = 0;
      r && r.$el && (r = r.$el);
      const f = r.children;
      if (e.zIndex === "right")
        for (let p = 0; p < Number(e.maxCount); p++) {
          const y = f[p];
          y.style.zIndex = `${99 - p}`;
        }
      for (let p = Number(e.maxCount); p < f.length; p++) {
        const y = f[p];
        y.className.includes("avater-fold") || (y.style.display = "none", i++);
      }
      n.value = i;
    }, a = (r) => {
      const i = { attributes: !1, childList: !0, subtree: !0 }, f = function(y) {
        let v = !1;
        for (let b of y)
          if (b.type === "childList") {
            v = !0;
            break;
          }
        v && s(r);
      }, p = new MutationObserver(f);
      return p.observe(r, i), p;
    };
    return $e(() => {
      e.maxCount && _e(() => {
        let r = ce(t);
        r && r.$el && (r = r.$el), s(r), o.value = a(r);
      });
    }), Xe(() => {
      var r;
      (r = o.value) == null || r.disconnect();
    }), Re(qo, {
      props: e,
      avatarGroupRef: t
    }), {
      styles: l,
      foldCount: n,
      avatarGroupRef: t
    };
  }
});
function cm(e, t, n, o, l, s) {
  const a = X("nut-avatar");
  return c(), d("view", {
    ref: "avatarGroupRef",
    class: "nut-avatar-group",
    style: V(e.styles)
  }, [
    T(e.$slots, "default"),
    e.foldCount > 0 ? (c(), J(a, {
      key: 0,
      class: "avater-fold",
      color: e.maxColor,
      "bg-color": e.maxBgColor,
      size: e.size,
      shape: e.shape,
      style: V({ magrinLeft: `${e.span}px` })
    }, {
      default: te(() => [
        ge(P(e.maxContent || e.foldCount), 1)
      ]),
      _: 1
    }, 8, ["color", "bg-color", "size", "shape", "style"])) : N("", !0)
  ], 4);
}
const dm = /* @__PURE__ */ le(um, [["render", cm]]);
var At = /* @__PURE__ */ ((e) => (e[e.eq = 1] = "eq", e[e.lt = 2] = "lt", e[e.gt = 3] = "gt", e))(At || {});
function fm(e, t, n) {
  let o = 0, l = e.length - 1, s = null;
  for (; o <= l; ) {
    s = Math.floor((o + l) / 2);
    const a = e[s], r = n(a, t);
    if (r === 1)
      return s;
    r === 2 ? o = s + 1 : r === 3 && (l = s - 1);
  }
  return s;
}
const { create: pm } = ne("list"), mm = pm({
  props: {
    listData: {
      type: Array,
      default: () => []
    },
    bufferSize: {
      type: Number,
      default: 5
    },
    containerHeight: {
      type: Number
    },
    height: {
      type: Number,
      default: 80
    },
    margin: {
      type: Number,
      default: 10
    }
  },
  emits: ["scrollUp", "scrollDown", "scrollBottom"],
  setup(e, { emit: t }) {
    const n = document.documentElement.clientHeight || document.body.clientHeight || 667, o = z(null), l = z(null), s = z(null), a = he({
      start: 0,
      originStartIndex: 0,
      scrollTop: 0,
      list: e.listData.slice(),
      cachePositions: [],
      phantomHeight: e.height * e.listData.length
    }), r = S(() => e.containerHeight ? Math.min(e.containerHeight, n) : n), i = S(() => Math.ceil(r.value / e.height)), f = S(() => Math.min(a.originStartIndex + i.value + e.bufferSize, a.list.length)), p = S(() => a.list.slice(a.start, f.value)), y = () => {
      if (s.value)
        return `translate3d(0, ${a.start >= 1 ? a.cachePositions[a.start - 1].bottom : 0}px, 0)`;
    }, v = () => {
      a.cachePositions = [];
      for (let m = 0; m < a.list.length; ++m)
        a.cachePositions[m] = {
          index: m,
          height: e.height,
          top: m * e.height,
          bottom: (m + 1) * (e.height + e.margin),
          dValue: 0
        };
    }, b = () => {
      let m = s.value.childNodes;
      m = Array.from(m).filter((M) => M.nodeType === 1);
      const h = m[0];
      m.forEach((M, L) => {
        if (!M) return;
        const C = Ye(M), { height: D } = C, K = a.cachePositions[L + a.start].height - D;
        K && (a.cachePositions[L + a.start].bottom -= K, a.cachePositions[L + a.start].height = D, a.cachePositions[L + a.start].dValue = K);
      });
      let $ = 0;
      h && ($ = a.start);
      const A = a.cachePositions.length;
      let E = a.cachePositions[$].dValue;
      a.cachePositions[$].dValue = 0;
      for (let M = $ + 1; M < A; ++M) {
        const L = a.cachePositions[M];
        a.cachePositions[M].top = a.cachePositions[M - 1].bottom, a.cachePositions[M].bottom = a.cachePositions[M].bottom - E, L.dValue !== 0 && (E += L.dValue, L.dValue = 0);
      }
      const I = a.cachePositions[A - 1].bottom;
      a.phantomHeight = I;
    }, w = (m = 0) => {
      let h = fm(
        a.cachePositions,
        m,
        (A, E) => {
          const I = A.bottom;
          return I === E ? At.eq : I < E ? At.lt : At.gt;
        }
      );
      return a.cachePositions[h].bottom < m && (h += 1), h;
    }, k = () => {
      a.originStartIndex = 0, a.start = 0, a.scrollTop = 0, o.value.scrollTop = 0, v(), a.phantomHeight = e.height * a.list.length;
    }, u = () => {
      var A;
      const m = (A = o.value) == null ? void 0 : A.scrollTop, { originStartIndex: h } = a, $ = w(m);
      $ !== h && (a.originStartIndex = $, a.start = Math.max(a.originStartIndex - e.bufferSize, 0), f.value >= a.list.length - 1 && t("scrollBottom")), t(m > a.scrollTop ? "scrollUp" : "scrollDown", m), a.scrollTop = m;
    };
    return v(), Q(
      () => e.listData,
      (m) => {
        if (a.list = m.slice(), a.list.length === m.length)
          v(), b();
        else {
          k();
          return;
        }
      }
    ), Q(
      () => a.start,
      () => {
        s.value && a.list.length > 0 && b();
      }
    ), pe(G({}, we(a)), {
      list: o,
      phantom: l,
      actualContent: s,
      getTransform: y,
      visibleData: p,
      getContainerHeight: r,
      handleScrollEvent: u
    });
  }
});
function hm(e, t, n, o, l, s) {
  return c(), d("div", {
    ref: "list",
    class: "nut-list",
    style: V({ height: `${e.getContainerHeight}px` }),
    onScrollPassive: t[0] || (t[0] = (...a) => e.handleScrollEvent && e.handleScrollEvent(...a))
  }, [
    g("div", {
      ref: "phantom",
      class: "nut-list-phantom",
      style: V({ height: e.phantomHeight + "px" })
    }, null, 4),
    g("div", {
      ref: "actualContent",
      class: "nut-list-container",
      style: V({ transform: e.getTransform() })
    }, [
      (c(!0), d(Z, null, ie(e.visibleData, (a, r) => (c(), d("div", {
        key: a,
        class: "nut-list-item"
      }, [
        T(e.$slots, "default", {
          item: a,
          index: r + e.start
        })
      ]))), 128))
    ], 4)
  ], 36);
}
const vm = /* @__PURE__ */ le(mm, [["render", hm]]), gm = { viewBox: "0 0 100 100" }, ym = ["id"], bm = ["offset", "stop-color"], $m = ["d", "stroke-width"], wm = ["d", "stroke", "stroke-linecap", "stroke-width"], km = { class: "nut-circle-progress__text" }, Go = /* @__PURE__ */ ve({
  name: "NutCircleProgress",
  __name: "circle-progress",
  props: {
    progress: { default: 0 },
    strokeWidth: { default: 5 },
    radius: { default: 50 },
    strokeLinecap: { default: "round" },
    color: { default: "#fa2c19" },
    pathColor: { default: "#d9d9d9" },
    clockwise: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = Math.random().toString(36).slice(-8), o = S(() => {
      const i = t.clockwise ? 1 : 0;
      return `M 50 50 m 0 -45 a 45 45 0 1 ${i} 0 90 a 45 45 0 1, ${i} 0 -90`;
    }), l = S(() => ut(t.color) ? `url(#${n})` : t.color), s = S(() => {
      let i = 283, f = i * Number(t.progress) / 100;
      return {
        stroke: ut(t.color) ? `url(#${n})` : t.color,
        strokeDasharray: `${f}px ${i}px`
      };
    }), a = S(() => ({
      stroke: t.pathColor
    })), r = S(() => {
      if (!ut(t.color))
        return;
      let i = t.color;
      const f = Object.keys(i).sort((y, v) => parseFloat(y) - parseFloat(v));
      let p = [];
      return f.map((y) => {
        let v = {
          key: "",
          value: ""
        };
        v.key = y, v.value = i[y], p.push(v);
      }), p;
    });
    return (i, f) => (c(), d("div", {
      class: "nut-circle-progress",
      style: V({ height: Number(i.radius) * 2 + "px", width: Number(i.radius) * 2 + "px" })
    }, [
      (c(), d("svg", gm, [
        g("defs", null, [
          g("linearGradient", {
            id: ce(n),
            x1: "100%",
            y1: "0%",
            x2: "0%",
            y2: "0%"
          }, [
            (c(!0), d(Z, null, ie(r.value, (p, y) => (c(), d("stop", {
              key: y,
              offset: p.key,
              "stop-color": p.value
            }, null, 8, bm))), 128))
          ], 8, ym)
        ]),
        g("path", {
          class: "nut-circle-progress__path",
          style: V(a.value),
          d: o.value,
          fill: "none",
          "stroke-width": i.strokeWidth
        }, " > ", 12, $m),
        g("path", {
          class: "nut-circle-progress__hover",
          style: V(s.value),
          d: o.value,
          fill: "none",
          stroke: l.value,
          "stroke-linecap": i.strokeLinecap,
          "stroke-width": i.strokeWidth
        }, null, 12, wm)
      ])),
      g("div", km, [
        T(i.$slots, "default", {}, () => [
          g("div", null, P(i.progress) + "%", 1)
        ])
      ])
    ], 4));
  }
});
ye(Go);
const { create: Cm } = ne("noticebar"), Sm = Cm({
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
      default: !1
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
      default: !1
    },
    wrapable: {
      type: Boolean,
      default: !1
    },
    leftIcon: { type: Boolean, default: !0 },
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
    ScrollItem: function(e) {
      return e.item.props.style = e.style, e.item.key = e.key, Te(e.item);
    },
    Notice: or,
    CircleClose: tn
  },
  emits: ["click", "close", "acrossEnd"],
  setup(e, { emit: t, slots: n }) {
    const o = z(null), l = z(null), s = he({
      wrapWidth: 0,
      firstRound: !0,
      duration: 0,
      offsetWidth: 0,
      showNoticebar: !0,
      animationClass: "",
      animate: !1,
      scrollList: [],
      distance: 0,
      timer: null,
      keepAlive: !1,
      isCanScroll: null,
      showNotica: !0
    }), a = S(() => s.isCanScroll == null ? e.wrapable : !s.isCanScroll && !e.wrapable), r = S(() => ({
      "nut-noticebar__page-wrap-content": !0,
      "nut-ellipsis": a.value,
      [s.animationClass]: !0
    })), i = S(() => {
      let M = {};
      return e.color && (M.color = e.color), e.background && (M.background = e.background), e.direction == "vertical" && (M.height = `${e.height}px`), M;
    }), f = S(() => ({
      animationDelay: (s.firstRound ? e.delay : 0) + "s",
      animationDuration: s.duration + "s",
      transform: `translateX(${s.firstRound ? 0 : s.wrapWidth + "px"})`
    })), p = S(() => {
      let M = {};
      if (e.complexAm)
        M = {
          transform: `translateY(${s.distance}px)`
        };
      else if (s.animate) {
        let L = ~~(e.height / e.speed / 4);
        M = {
          transition: `all ${L == 0 ? ~~(e.height / e.speed) : L}s`,
          "margin-top": `-${e.height}px`
        };
      }
      return M;
    });
    Q(
      () => e.text,
      () => {
        y();
      }
    ), Q(
      () => e.list,
      (M) => {
        s.scrollList = [].concat(M);
      }
    );
    const y = () => {
      s.showNoticebar != !1 && setTimeout(() => {
        if (!o.value || !l.value)
          return;
        const M = o.value.getBoundingClientRect().width, L = l.value.getBoundingClientRect().width;
        s.isCanScroll = e.scrollable == null ? L > M : e.scrollable, s.isCanScroll ? (s.wrapWidth = M, s.offsetWidth = L, s.duration = L / e.speed, s.animationClass = "play") : s.animationClass = "";
      }, 0);
    }, v = (M) => {
      t("click", M);
    }, b = (M) => {
      e.closeMode && (s.showNoticebar = !e.closeMode), t("close", M);
    }, w = (M) => {
      s.firstRound = !1, t("acrossEnd", M), setTimeout(() => {
        s.duration = (s.offsetWidth + s.wrapWidth) / e.speed, s.animationClass = "play-infinite";
      }, 0);
    }, k = () => {
      u(), s.timer = setInterval(u, ~~(e.height / e.speed / 4 * 1e3) + e.standTime);
    }, u = () => {
      s.animate = !0, setTimeout(
        () => {
          s.scrollList.push(s.scrollList[0]), s.scrollList.shift(), s.animate = !1;
        },
        ~~(e.height / e.speed / 4 * 1e3)
      );
    }, m = () => {
      s.timer = setInterval(
        () => {
          let M = 100;
          for (let L = 0; L < M; L++)
            h(L, !(L < M - 1));
        },
        e.standTime + 100 * e.speed
      );
    }, h = (M, L) => {
      setTimeout(() => {
        s.distance -= e.height / 100, L && (s.scrollList.push(s.scrollList[0]), s.scrollList.shift(), s.distance = 0);
      }, M * e.speed);
    }, $ = (M) => {
      t("click", M);
    }, A = () => {
      e.closeMode && (s.showNoticebar = !e.closeMode), t("close", s.scrollList[0]);
    };
    $e(() => {
      e.direction == "vertical" ? (n.default ? (E(), I()) : s.scrollList = [].concat(e.list), setTimeout(() => {
        e.complexAm ? m() : k();
      }, e.standTime)) : y();
    });
    const E = () => {
      n.default && (s.scrollList = [].concat(n.default()[0].children));
    }, I = () => {
      setTimeout(() => {
        var M = new MutationObserver(() => {
          s.showNotica = !1, setTimeout(() => {
            s.showNotica = !0;
          }), E();
        });
        const L = document.getElementsByClassName("nut-noticebar-custom-item")[0];
        L && M.observe(L, {
          childList: !0,
          subtree: !0
        });
      }, 100);
    };
    return Tt(() => {
      s.keepAlive && (s.keepAlive = !1);
    }), _t(() => {
      s.keepAlive = !0, clearInterval(s.timer);
    }), Xe(() => {
      clearInterval(s.timer);
    }), pe(G({}, we(s)), {
      isEllipsis: a,
      barStyle: i,
      contentStyle: f,
      horseLampStyle: p,
      wrap: o,
      content: l,
      handleClick: v,
      onClickIcon: b,
      onAnimationEnd: w,
      go: $,
      handleClickIcon: A,
      slots: n,
      pxCheck: Be,
      wrapContentClass: r
    });
  }
}), Tm = { class: "nut-noticebar" }, _m = {
  key: 0,
  class: "nut-noticebar__page-lefticon"
}, Nm = {
  ref: "wrap",
  class: "nut-noticebar__page-wrap"
}, Dm = { class: "showNotica" }, Im = { class: "nut-noticebar-custom-item" }, Bm = ["onClick"];
function Mm(e, t, n, o, l, s) {
  const a = X("Notice"), r = X("CircleClose"), i = X("ScrollItem");
  return c(), d("view", Tm, [
    e.direction == "across" ? Ie((c(), d("view", {
      key: 0,
      class: B(["nut-noticebar__page", {
        "nut-noticebar__page--withicon": e.closeMode,
        "nut-noticebar__page--close": e.closeMode,
        "nut-noticebar__page--wrapable": e.wrapable
      }]),
      style: V(e.barStyle),
      onClick: t[3] || (t[3] = (...f) => e.handleClick && e.handleClick(...f))
    }, [
      e.leftIcon ? (c(), d("view", _m, [
        T(e.$slots, "left-icon", {}, () => [
          ee(a, { size: "16px" })
        ])
      ])) : N("", !0),
      g("view", Nm, [
        g("view", {
          ref: "content",
          class: B(e.wrapContentClass),
          style: V(e.contentStyle),
          onAnimationend: t[0] || (t[0] = (...f) => e.onAnimationEnd && e.onAnimationEnd(...f)),
          onWebkitAnimationEnd: t[1] || (t[1] = (...f) => e.onAnimationEnd && e.onAnimationEnd(...f))
        }, [
          T(e.$slots, "default", {}, () => [
            ge(P(e.text), 1)
          ])
        ], 38)
      ], 512),
      e.closeMode || e.$slots["right-icon"] ? (c(), d("view", {
        key: 1,
        class: "nut-noticebar__page-righticon",
        onClick: t[2] || (t[2] = De((...f) => e.onClickIcon && e.onClickIcon(...f), ["stop"]))
      }, [
        e.$slots["right-icon"] ? T(e.$slots, "right-icon", { key: 0 }) : (c(), J(r, { key: 1 }))
      ])) : N("", !0)
    ], 6)), [
      [Me, e.showNoticebar]
    ]) : N("", !0),
    e.scrollList.length > 0 && e.direction == "vertical" && e.showNoticebar ? (c(), d("view", {
      key: 1,
      class: "nut-noticebar__vertical",
      style: V(e.barStyle)
    }, [
      e.slots.default ? (c(), d(Z, { key: 0 }, [
        g("view", {
          class: "nut-noticebar__vertical-list",
          style: V(e.horseLampStyle)
        }, [
          g("div", Dm, [
            (c(!0), d(Z, null, ie(e.scrollList, (f, p) => (c(), J(i, {
              key: p,
              style: V({ height: e.height + "px", "line-height": e.height + "px" }),
              item: f
            }, null, 8, ["style", "item"]))), 128))
          ])
        ], 4),
        g("view", Im, [
          T(e.$slots, "default")
        ])
      ], 64)) : (c(), d("ul", {
        key: 1,
        class: "nut-noticebar__vertical-list",
        style: V(e.horseLampStyle)
      }, [
        (c(!0), d(Z, null, ie(e.scrollList, (f, p) => (c(), d("li", {
          key: p,
          class: "nut-noticebar__vertical-item",
          style: V({ height: e.pxCheck(e.height), lineHeight: e.pxCheck(e.height) }),
          onClick: (y) => e.go(f)
        }, P(f), 13, Bm))), 128))
      ], 4)),
      g("view", {
        class: "go",
        onClick: t[4] || (t[4] = (f) => !e.slots.rightIcon && e.handleClickIcon())
      }, [
        T(e.$slots, "right-icon", {}, () => [
          e.closeMode ? (c(), J(r, {
            key: 0,
            color: e.color,
            size: "11px"
          }, null, 8, ["color"])) : N("", !0)
        ])
      ])
    ], 4)) : N("", !0)
  ]);
}
const Lm = /* @__PURE__ */ le(Sm, [["render", Mm]]), Pm = { class: "nut-empty" }, Am = ["src"], Em = { class: "nut-empty__description" }, On = "NutEmpty", Zo = /* @__PURE__ */ ve({
  name: On,
  __name: "empty",
  props: {
    image: { default: "empty" },
    imageSize: { default: "" },
    description: { default: "" }
  },
  setup(e) {
    const t = e, n = Se(On), o = {
      empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
      error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
      network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
    }, l = S(() => t.imageSize ? {
      width: Be(t.imageSize),
      height: Be(t.imageSize)
    } : {}), s = S(() => /^https?:\/\/|^\/\//.test(t.image) ? t.image : o[t.image]), a = S(() => t.description || n("noData"));
    return (r, i) => (c(), d("view", Pm, [
      g("view", {
        class: "nut-empty__box",
        style: V(l.value)
      }, [
        T(r.$slots, "image", {}, () => [
          s.value ? (c(), d("img", {
            key: 0,
            class: "nut-empty__box--img",
            src: s.value
          }, null, 8, Am)) : N("", !0)
        ])
      ], 4),
      T(r.$slots, "description", {}, () => [
        g("view", Em, P(a.value), 1)
      ]),
      T(r.$slots, "default")
    ]));
  }
});
ye(Zo);
function Rn(e, t) {
  let n = null, o = Date.now();
  return function(...l) {
    const s = Date.now(), a = t - (s - o);
    n && clearTimeout(n), a <= 0 ? (e(...l), o = Date.now()) : n = setTimeout(e, a);
  };
}
const { create: zm } = ne("video"), Vm = "NutVideo", Hm = zm({
  props: {
    source: {
      type: Object,
      default: {}
    },
    options: {
      type: Object,
      default: {
        autoplay: !1,
        // 是否自动播放
        volume: 0.5,
        poster: "",
        loop: !1,
        controls: !0,
        muted: !1,
        // 是否静音
        disabled: !1,
        // 禁止操作
        playsinline: !1,
        // 行内展示
        touchPlay: !1,
        preload: ""
      },
      required: !0
    },
    model: {
      type: String,
      default: ""
    }
  },
  components: {},
  emits: ["click", "play", "pause", "playend", "time"],
  setup(e, { emit: t, expose: n }) {
    const o = Se(Vm), l = he({
      videoElm: null,
      initial: !0,
      // 控制封面的显示
      showToolbox: !1,
      // 控制控制器和标题的显示
      // 视频容器元素
      player: {
        $player: null,
        pos: null
      },
      // progress进度条元素
      progressBar: {
        progressElm: null,
        // 进度条DOM对象
        pos: null
      },
      // video控制显示设置
      videoSet: {
        loaded: 0,
        // 缓存长度
        displayTime: "00:00",
        // 进度时间
        totalTime: "00:00",
        // 总时间
        progress: {
          width: 0,
          // 进度条长度
          current: 0
          // 进度条当前位置
        }
      },
      state: {
        controlShow: !0,
        vol: 0.5,
        // 音量
        currentTime: 0,
        // 当前时间
        fullScreen: !1,
        playing: !1,
        // 是否正在播放
        isLoading: !1,
        isEnd: !1,
        isError: !1,
        isMuted: !1
      },
      showTouchMask: !1
    }), s = z(null), a = S(() => e.options.disabled);
    Q(
      () => e.source,
      (_) => {
        _.src && _e(() => {
          l.videoElm.load();
        });
      },
      { immediate: !0, deep: !0 }
    ), Q(
      () => e.options,
      (_) => {
        l.state.isMuted = _ ? _.muted : !1;
      },
      { immediate: !0 }
    );
    const r = () => {
      l.videoElm = s.value, e.options.autoplay && setTimeout(() => {
        l.videoElm.play();
      }, 200), e.options.touchPlay && (l.showTouchMask = !0), e.options.playsinline && (l.videoElm.setAttribute("playsinline", e.options.playsinline), l.videoElm.setAttribute("webkit-playsinline", e.options.playsinline), l.videoElm.setAttribute("x5-video-player-type", "h5-page"), l.videoElm.setAttribute("x5-video-player-fullscreen", !1)), k(), l.showToolbox ? i() : (l.videoElm.addEventListener("play", () => {
        l.state.playing = !0, t("play", l.videoElm);
      }), l.videoElm.addEventListener("pause", () => {
        l.state.playing = !1, t("pause", l.videoElm);
      }), l.videoElm.addEventListener("ended", b), l.videoElm.addEventListener("timeupdate", Rn(v, 1e3)));
    }, i = () => {
      const _ = s.value, K = s.value.getElementsByClassName("nut-video-controller__progress-value")[0];
      l.player.$player = _, l.progressBar.progressElm = K, l.progressBar.pos = K.getBoundingClientRect(), l.videoSet.progress.width = Math.round(K.getBoundingClientRect().width);
    }, f = () => {
      if (e.options.autoplay && e.options.disabled)
        return l.state.playing = !0, !1;
      if (l.state.playing = !l.state.playing, l.videoElm)
        if (l.state.playing)
          try {
            setTimeout(() => {
              l.videoElm.play();
            }, 200), l.videoElm.addEventListener("progress", () => {
              y();
            }), l.videoElm.addEventListener("timeupdate", Rn(v, 1e3)), l.videoElm.addEventListener("ended", b), t("play", l.videoElm);
          } catch (_) {
            w();
          }
        else
          l.videoElm.pause(), t("pause", l.videoElm);
    }, p = (_) => {
      var K = Math.floor(_ / 3600);
      +K < 10 && (K = "0" + K);
      var j = Math.floor(_ % 3600 / 60);
      +j < 10 && (j = "0" + j);
      var oe = Math.round(_ % 3600 % 60);
      +oe < 10 && (oe = "0" + oe);
      var W = "";
      return K != 0 ? W = K + ":" + j + ":" + oe : W = j + ":" + oe, W;
    }, y = () => {
      l.videoSet.loaded && (l.videoSet.loaded = l.videoElm.buffered.end(0) / l.videoElm.duration * 100);
    }, v = () => {
      const _ = l.videoElm.currentTime / l.videoElm.duration;
      l.videoSet.progress.current = Math.round(l.videoSet.progress.width * _), l.videoSet.totalTime = p(l.videoElm.duration), l.videoSet.displayTime = p(l.videoElm.currentTime), t("time", l.videoSet.displayTime, l.videoSet.totalTime);
    }, b = () => {
      l.state.playing = !1, l.state.isEnd = !0, l.videoSet.displayTime = "00:00", l.videoSet.progress.current = 0, l.videoElm.currentTime = 0, t("playend", l.videoElm);
    }, w = () => {
      l.state.isError = !0;
    }, k = () => {
      l.state.vol = e.options.volume;
    }, u = () => {
      l.state.isMuted = !l.state.isMuted, l.videoElm.muted = l.state.isMuted;
    }, m = () => {
    }, h = (_) => {
      let j = _.targetTouches[0].pageX - l.progressBar.pos.left;
      j <= 0 && (j = 0), j >= l.videoSet.progress.width && (j = l.videoSet.progress.width), l.videoSet.progress.current = j;
      let oe = l.videoSet.progress.current / l.videoSet.progress.width;
      l.videoElm.duration && A(oe, l.videoElm.duration);
    }, $ = (_) => {
      let j = _.changedTouches[0].pageX - l.progressBar.pos.left;
      l.videoSet.progress.current = j;
      let oe = j / l.videoSet.progress.width;
      l.videoElm.duration && A(oe, l.videoElm.duration);
    }, A = (_, K) => {
      l.videoElm.currentTime = Math.floor(_ * K);
    }, E = () => {
      l.state.isError = !1, r();
    }, I = () => {
      l.state.fullScreen ? (l.state.fullScreen = !1, document.webkitCancelFullScreen()) : (l.state.fullScreen = !0, l.videoElm.webkitRequestFullScreen());
    };
    return n({
      play: f,
      pause: () => {
        l.state.playing = !1, l.videoElm.pause(), t("pause", l.videoElm);
      },
      stop: () => {
        b(), l.videoElm.pause();
      },
      muted: () => {
        l.state.isMuted = !0, l.videoElm.muted = !0;
      },
      unmuted: () => {
        l.state.isMuted = !1, l.videoElm.muted = !1;
      }
    }), $e(() => {
      r();
    }), pe(G(G({
      root: s
    }, we(e)), we(l)), {
      handleError: w,
      isDisabled: a,
      play: f,
      handleMuted: u,
      touchSlidSrart: m,
      touchSlidMove: h,
      touchSlidEnd: $,
      retry: E,
      fullScreen: I,
      translate: o
    });
  }
}), Om = {
  ref: "videocon",
  class: "nut-video"
}, Rm = ["muted", "autoplay", "loop", "poster", "controls", "preload"], Fm = ["src", "type"], Wm = { class: "nut-video-controller__now" }, Ym = { class: "nut-video-controller__progress" }, jm = {
  ref: "progressBar",
  class: "nut-video-controller__progress-value"
}, Km = {
  ref: "playedBar",
  class: "nut-video-controller__played"
}, Um = { class: "nut-video-controller__total" }, Xm = { class: "nut-video-error" }, qm = { class: "nut-video-error-tip" };
function Gm(e, t, n, o, l, s) {
  return c(), d("div", Om, [
    g("video", {
      ref: "root",
      class: "nut-video-player",
      muted: e.options.muted,
      autoplay: e.options.autoplay,
      loop: e.options.loop,
      poster: e.options.poster,
      controls: e.options.controls,
      preload: e.options.preload,
      onError: t[0] || (t[0] = (...a) => e.handleError && e.handleError(...a))
    }, [
      g("source", {
        src: e.source.src,
        type: e.source.type
      }, null, 8, Fm)
    ], 40, Rm),
    e.showToolbox && !e.isDisabled ? (c(), d("div", {
      key: 0,
      ref: "touchMask",
      class: "nut-video-mask",
      onClick: t[1] || (t[1] = (...a) => e.play && e.play(...a))
    }, null, 512)) : N("", !0),
    e.showToolbox && !e.isDisabled ? Ie((c(), d("div", {
      key: 1,
      ref: "palyBtn",
      class: "nut-video-play-btn",
      onClick: t[2] || (t[2] = (...a) => e.play && e.play(...a))
    }, null, 512)), [
      [Me, !e.state.playing]
    ]) : N("", !0),
    Ie(g("div", {
      class: B(["nut-video-controller", { "nut-video-controller--show": !e.state.playing, "nut-video-controller--hide": e.state.playing }])
    }, [
      g("div", {
        class: "nut-video-controller__playbtn",
        onClick: t[3] || (t[3] = (...a) => e.play && e.play(...a))
      }),
      g("div", Wm, P(e.videoSet.displayTime), 1),
      g("div", Ym, [
        g("div", jm, [
          g("div", {
            class: "buffered",
            style: V({ width: `${e.videoSet.loaded}%` })
          }, null, 4),
          g("div", {
            class: "nut-video-controller__ball",
            style: V({
              transform: `translate3d(${e.videoSet.progress.current}px, -50%, 0)`
            }),
            onTouchmove: t[4] || (t[4] = De((a) => e.touchSlidMove(a), ["stop", "prevent"])),
            onTouchstart: t[5] || (t[5] = De((a) => e.touchSlidSrart(), ["stop"])),
            onTouchend: t[6] || (t[6] = De((a) => e.touchSlidEnd(a), ["stop"]))
          }, t[10] || (t[10] = [
            g("div", { class: "nut-video-controller__ball-move" }, null, -1)
          ]), 36),
          g("div", Km, null, 512)
        ], 512)
      ]),
      g("div", Um, P(e.videoSet.totalTime), 1),
      g("div", {
        class: B(["nut-video-controller__volume", { muted: e.state.isMuted }]),
        onClick: t[7] || (t[7] = (...a) => e.handleMuted && e.handleMuted(...a))
      }, null, 2),
      g("div", {
        class: "nut-video-controller__full",
        onClick: t[8] || (t[8] = (...a) => e.fullScreen && e.fullScreen(...a))
      })
    ], 2), [
      [Me, e.showToolbox && !e.isDisabled]
    ]),
    Ie(g("div", Xm, [
      g("p", qm, P(e.translate("errorTip")), 1),
      g("p", {
        class: "nut-video-error-retry",
        onClick: t[9] || (t[9] = (...a) => e.retry && e.retry(...a))
      }, P(e.translate("clickRetry")), 1)
    ], 512), [
      [Me, e.state.isError]
    ])
  ], 512);
}
const $n = /* @__PURE__ */ le(Hm, [["render", Gm]]), Jo = Symbol("nut-steps"), Qo = /* @__PURE__ */ ve({
  name: "NutSteps",
  __name: "steps",
  props: {
    direction: { default: "horizontal" },
    current: { default: "0" },
    progressDot: { type: Boolean, default: !1 }
  },
  emits: ["clickStep"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = S(() => {
      const r = "nut-steps";
      return {
        [r]: !0,
        [`${r}-${n.direction}`]: !0,
        [`${r}-dot`]: !!n.progressDot
      };
    }), { linkChildren: s } = pt(Jo);
    return s({ props: n, onEmit: (r) => {
      o("clickStep", r);
    } }), (r, i) => (c(), d("view", {
      class: B(l.value)
    }, [
      T(r.$slots, "default")
    ], 2));
  }
});
ye(Qo);
const Zm = { class: "nut-step-head" }, Jm = { class: "nut-step-icon-inner" }, Qm = {
  key: 0,
  class: "nut-step-inner"
}, xm = { class: "nut-step-main" }, eh = { class: "nut-step-title" }, th = {
  key: 0,
  class: "nut-step-content"
}, nh = ["innerHTML"], xo = /* @__PURE__ */ ve({
  name: "NutStep",
  __name: "step",
  props: {
    title: { default: "" },
    content: { default: "" }
  },
  setup(e) {
    const { index: t, parent: n } = mt(Jo), o = S(() => {
      const r = t.value + 1;
      return r < +n.props.current ? "finish" : r === +n.props.current ? "process" : "wait";
    }), l = S(() => n.props.progressDot), s = S(() => {
      const r = "nut-step";
      return {
        [r]: !0,
        [`${r}-${o.value}`]: !0
      };
    }), a = () => {
      n.onEmit(t.value + 1);
    };
    return (r, i) => (c(), d("view", {
      class: B(s.value),
      onClick: a
    }, [
      g("view", Zm, [
        i[0] || (i[0] = g("view", { class: "nut-step-line" }, null, -1)),
        g("view", {
          class: B(["nut-step-icon", [l.value ? "" : "is-icon"]])
        }, [
          g("view", Jm, [
            T(r.$slots, "icon", {}, () => [
              l.value ? N("", !0) : (c(), d("view", Qm, P(ce(t) + 1), 1))
            ])
          ])
        ], 2)
      ]),
      g("view", xm, [
        g("view", eh, [
          T(r.$slots, "title", {}, () => [
            g("span", null, P(r.title), 1)
          ])
        ]),
        r.content || r.$slots.content ? (c(), d("view", th, [
          T(r.$slots, "content", {}, () => [
            g("span", { innerHTML: r.content }, null, 8, nh)
          ])
        ])) : N("", !0)
      ])
    ], 2));
  }
});
ye(xo);
const el = Symbol("nut-swiper"), { create: oh, componentName: Fn } = ne("swiper"), lh = oh({
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
      default: !1
    },
    paginationColor: {
      type: String,
      default: "#fff"
    },
    loop: {
      type: Boolean,
      default: !0
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
      default: !0
    },
    isPreventDefault: {
      type: Boolean,
      default: !0
    },
    isStopPropagation: {
      type: Boolean,
      default: !0
    },
    paginationUnselectedColor: {
      type: String,
      default: "#ddd"
    }
  },
  emits: ["change"],
  setup(e, { emit: t, slots: n, expose: o }) {
    const l = z(), s = he({
      active: 0,
      num: 0,
      rect: null,
      width: 0,
      height: 0,
      moving: !1,
      offset: 0,
      touchTime: 0,
      autoplayTimer: null,
      children: [],
      childrenVNode: [],
      style: {}
    }), a = Qe(), r = S(() => e.direction === "vertical"), i = S(() => {
      const R = Fn;
      return {
        [`${R}-inner`]: !0,
        [`${R}-vertical`]: r.value
      };
    }), f = S(() => {
      const R = Fn;
      return {
        [`${R}-pagination`]: !0,
        [`${R}-pagination-vertical`]: r.value
      };
    }), p = S(() => r.value ? a.deltaY.value : a.deltaX.value), y = S(() => a.direction.value === e.direction), v = S(() => s.children.length), b = S(() => s[r.value ? "height" : "width"]), w = S(() => v.value * b.value), k = S(() => s.rect ? (r.value ? s.rect.height : s.rect.width) - b.value * v.value : 0), u = S(() => (s.active + v.value) % v.value), m = () => {
      let R = 0;
      R = s.offset, s.style = {
        transitionDuration: `${s.moving ? 0 : e.duration}ms`,
        transform: `translate${r.value ? "Y" : "X"}(${R}px)`,
        [r.value ? "height" : "width"]: `${b.value * v.value}px`,
        [r.value ? "width" : "height"]: `${r.value ? s.width : s.height}px`
      };
    }, h = (R) => {
      var ue;
      let x = [];
      const U = s.childrenVNode.length;
      let se = (ue = n == null ? void 0 : n.default) == null ? void 0 : ue.call(n);
      if (se = se.filter((fe) => fe.children && Array.isArray(fe.children)), se.forEach((fe) => {
        x = x.concat(fe.children);
      }), !U)
        s.childrenVNode = x.slice(), R.proxy && s.children.push(R.proxy);
      else if (U > x.length)
        s.children = s.children.filter((fe) => R.proxy !== fe);
      else if (U < x.length) {
        for (let fe = 0; fe < U; fe++)
          if (x[fe].key !== s.childrenVNode[fe].key) {
            R.proxy && s.children.splice(fe, 0, R.proxy), R.vnode && s.childrenVNode.splice(fe, 0, R.vnode);
            break;
          }
        U !== x.length && (R.proxy && s.children.push(R.proxy), R.vnode && s.childrenVNode.push(R.vnode));
      } else
        s.childrenVNode = x.slice(), R.proxy && s.children.push(R.proxy);
    }, $ = (R, x = 0) => {
      let U = R * b.value;
      e.loop || (U = Math.min(U, -k.value));
      let se = x - U;
      return e.loop || (se = Ee(se, k.value, 0)), se;
    }, A = (R) => {
      const { active: x } = s;
      return R ? e.loop ? Ee(x + R, -1, v.value) : Ee(x + R, 0, v.value - 1) : x;
    }, E = ({ pace: R = 0, offset: x = 0, isEmit: U = !1 }) => {
      if (v.value <= 1) return;
      const { active: se } = s, ue = A(R), fe = $(ue, x);
      if (e.loop) {
        if (s.children[0] && fe !== k.value) {
          const Ce = fe < k.value;
          s.children[0].setOffset(Ce ? w.value : 0);
        }
        if (s.children[v.value - 1] && fe !== 0) {
          const Ce = fe > 0;
          s.children[v.value - 1].setOffset(Ce ? -w.value : 0);
        }
      }
      s.active = ue, s.offset = fe, U && se !== s.active && t("change", u.value), m();
    }, I = () => {
      s.moving = !0, s.active <= -1 && E({ pace: v.value }), s.active >= v.value && E({ pace: -v.value });
    }, M = () => {
      s.autoplayTimer && clearTimeout(s.autoplayTimer);
    }, L = (R) => {
      I(), a.reset(), Oe(() => {
        Oe(() => {
          s.moving = !1, E({
            pace: R,
            isEmit: !0
          });
        });
      });
    }, C = () => {
      L(-1);
    }, D = () => {
      L(1);
    }, _ = (R) => {
      I(), a.reset(), Oe(() => {
        s.moving = !1;
        let x;
        e.loop && v.value === R ? x = s.active === 0 ? 0 : R : x = R % v.value, E({
          pace: x - s.active,
          isEmit: !0
        });
      });
    }, K = () => {
      +e.autoPlay <= 0 || v.value <= 1 || (M(), s.autoplayTimer = setTimeout(() => {
        D(), K();
      }, Number(e.autoPlay)));
    }, j = (R = +e.initPage) => {
      M(), s.rect = l.value.getBoundingClientRect(), R = Math.min(v.value - 1, R), s.width = e.width ? +e.width : s.rect.width, s.height = e.height ? +e.height : s.rect.height, s.active = R, s.offset = $(s.active), s.moving = !0, m(), K();
    }, oe = (R) => {
      e.isPreventDefault && R.preventDefault(), e.isStopPropagation && R.stopPropagation(), e.touchable && (a.start(R), s.touchTime = Date.now(), M(), I());
    }, W = (R) => {
      e.touchable && s.moving && (a.move(R), y.value && E({
        offset: p.value
      }));
    }, Y = () => {
      if (!e.touchable || !s.moving) return;
      const R = p.value / (Date.now() - s.touchTime);
      if ((Math.abs(R) > 0.3 || Math.abs(p.value) > +(b.value / 2).toFixed(2)) && y.value) {
        let U = 0;
        const se = r.value ? a.offsetY.value : a.offsetX.value;
        e.loop ? U = se > 0 ? p.value > 0 ? -1 : 1 : 0 : U = -Math[p.value > 0 ? "ceil" : "floor"](p.value / b.value), E({
          pace: U,
          isEmit: !0
        });
      } else p.value && E({ pace: 0 });
      s.moving = !1, m(), K();
    };
    return Re(el, {
      props: e,
      size: b,
      relation: h
    }), o({
      prev: C,
      next: D,
      to: _
    }), _t(() => {
      M();
    }), Qt(() => {
      M();
    }), Q(
      () => e.initPage,
      (R) => {
        _e(() => {
          j(Number(R));
        });
      }
    ), Q(
      () => e.height,
      () => {
        _e(() => {
          j();
        });
      }
    ), Q(
      () => s.children.length,
      () => {
        _e(() => {
          j();
        });
      }
    ), Q(
      () => e.autoPlay,
      (R) => {
        +R > 0 ? K() : M();
      }
    ), {
      state: s,
      classesInner: i,
      classesPagination: f,
      container: l,
      activePagination: u,
      onTouchStart: oe,
      onTouchMove: W,
      onTouchEnd: Y
    };
  }
});
function sh(e, t, n, o, l, s) {
  return c(), d("view", {
    ref: "container",
    class: "nut-swiper",
    onTouchstart: t[0] || (t[0] = (...a) => e.onTouchStart && e.onTouchStart(...a)),
    onTouchmove: t[1] || (t[1] = (...a) => e.onTouchMove && e.onTouchMove(...a)),
    onTouchend: t[2] || (t[2] = (...a) => e.onTouchEnd && e.onTouchEnd(...a)),
    onTouchcancel: t[3] || (t[3] = (...a) => e.onTouchEnd && e.onTouchEnd(...a))
  }, [
    g("view", {
      class: B(e.classesInner),
      style: V(e.state.style)
    }, [
      T(e.$slots, "default")
    ], 6),
    T(e.$slots, "page"),
    e.paginationVisible && !e.$slots.page ? (c(), d("view", {
      key: 0,
      class: B(e.classesPagination)
    }, [
      (c(!0), d(Z, null, ie(e.state.children.length, (a, r) => (c(), d("i", {
        key: r,
        style: V({
          backgroundColor: e.activePagination === r ? e.paginationColor : e.paginationUnselectedColor
        }),
        class: B({ active: e.activePagination === r })
      }, null, 6))), 128))
    ], 2)) : N("", !0)
  ], 544);
}
const wn = /* @__PURE__ */ le(lh, [["render", sh]]);
function ah(e) {
  const t = ot();
  t && Object.assign(t.proxy, e);
}
const { create: rh } = ne("swiper-item"), ih = rh({
  setup() {
    const e = Ve(el);
    e.relation(ot());
    const t = he({
      offset: 0
    }), n = S(() => {
      const l = {}, s = e == null ? void 0 : e.props.direction;
      return e != null && e.size.value && (l[s === "horizontal" ? "width" : "height"] = `${e == null ? void 0 : e.size.value}px`), t.offset && (l.transform = `translate${s === "horizontal" ? "X" : "Y"}(${t.offset}px)`), l;
    }), o = (l) => {
      t.offset = l;
    };
    return Xe(() => {
      e.relation(ot(), "unmount");
    }), ah({ setOffset: o }), {
      style: n
    };
  }
});
function uh(e, t, n, o, l, s) {
  return c(), d("view", {
    class: "nut-swiper-item",
    style: V(e.style)
  }, [
    T(e.$slots, "default")
  ], 4);
}
const kn = /* @__PURE__ */ le(ih, [["render", uh]]), ch = ["innerHTML"], dh = ["innerHTML"], Wn = "nut-price", Rt = /* @__PURE__ */ ve({
  name: "NutPrice",
  __name: "price",
  props: {
    price: { default: 0 },
    needSymbol: { type: Boolean, default: !0 },
    symbol: { default: "&yen;" },
    decimalDigits: { default: 2 },
    thousands: { type: Boolean, default: !1 },
    position: { default: "before" },
    size: { default: "normal" },
    strikeThrough: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = S(() => ({
      [Wn]: !0,
      [`${Wn}--strike`]: t.strikeThrough
    })), o = S(() => t.needSymbol ? t.symbol : ""), l = (r) => String(r).indexOf(".") > 0, s = (r) => (Number(r) == 0 && (r = 0), l(r) ? (r = Number(r).toFixed(t.decimalDigits), r = typeof r.split(".") == "string" ? r.split(".") : r.split(".")[0]) : r = r.toString(), t.thousands ? (r || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") : r), a = (r) => {
      Number(r) == 0 && (r = 0), l(r) ? (r = Number(r).toFixed(t.decimalDigits), r = typeof r.split(".") == "string" ? 0 : r.split(".")[1] ? r.split(".")[1] : 0) : r = 0;
      const i = "0." + r, f = Number(i).toFixed(t.decimalDigits);
      return String(f).substring(2, f.length);
    };
    return (r, i) => (c(), d("view", {
      class: B(n.value)
    }, [
      r.needSymbol && r.position === "before" ? (c(), d("view", {
        key: 0,
        class: B(["nut-price--symbol", `nut-price--symbol-${r.size}`]),
        innerHTML: o.value
      }, null, 10, ch)) : N("", !0),
      g("view", {
        class: B(`nut-price--${r.size}`)
      }, P(s(r.price)), 3),
      r.decimalDigits != 0 ? (c(), d("view", {
        key: 1,
        class: B(`nut-price--decimal-${r.size}`)
      }, ".", 2)) : N("", !0),
      g("view", {
        class: B(`nut-price--decimal-${r.size}`)
      }, P(a(r.price)), 3),
      r.needSymbol && r.position === "after" ? (c(), d("view", {
        key: 2,
        class: B(["nut-price--symbol", `nut-price--symbol-${r.size}`]),
        innerHTML: o.value
      }, null, 10, dh)) : N("", !0)
    ], 2));
  }
});
ye(Rt);
const tl = {
  show: { type: Boolean, default: !1 },
  initNo: { type: Number, default: 0 },
  showIndex: { type: Boolean, default: !0 },
  minZoom: { type: Number, default: 1 / 3 },
  maxZoom: { type: Number, default: 3 }
}, { create: fh } = ne("image-preview-item"), ph = fh({
  props: pe(G({}, tl), {
    image: {
      type: Object,
      default: () => ({})
    },
    video: {
      type: Object,
      default: () => ({})
    },
    rootWidth: {
      type: Number,
      default: 0
    },
    rootHeight: {
      type: Number,
      default: 0
    },
    contentClose: {
      type: Boolean,
      default: !0
    }
  }),
  emits: ["close", "scale"],
  components: {
    NutVideo: $n,
    NutSwiperItem: kn
  },
  setup(e, { emit: t }) {
    const n = he({
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: !1,
      zooming: !1,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    }), o = Qe(), l = S(() => {
      const { rootWidth: C, rootHeight: D } = e, _ = D / C;
      return n.imageRatio > _;
    }), s = S(() => {
      const C = e.image;
      if (C && C.src) {
        const { scale: D, moveX: _, moveY: K, moving: j, zooming: oe } = n, W = {
          transitionDuration: oe || j ? "0s" : ".3s"
        };
        if (D !== 1) {
          const Y = _ / D, R = K / D;
          W.transform = `scale(${D}, ${D}) translate(${Y}px, ${R}px)`;
        }
        return W;
      }
      return {};
    }), a = S(() => {
      if (n.imageRatio) {
        const { rootWidth: C, rootHeight: D } = e, _ = l.value ? D / n.imageRatio : C;
        return Math.max(0, (n.scale * _ - C) / 2);
      }
      return 0;
    }), r = S(() => {
      if (n.imageRatio) {
        const { rootWidth: C, rootHeight: D } = e, _ = l.value ? D : C * n.imageRatio;
        return Math.max(0, (n.scale * _ - D) / 2);
      }
      return 0;
    }), i = (C) => {
      const { naturalWidth: D, naturalHeight: _ } = C.target;
      n.imageRatio = _ / D;
    }, f = () => {
      p(1), n.moveX = 0, n.moveY = 0;
    }, p = (C) => {
      C = Ee(C, +e.minZoom, +e.maxZoom + 1), C !== n.scale && (n.scale = C, t("scale", {
        scale: C,
        index: e.initNo
      }));
    }, y = () => {
      const C = n.scale > 1 ? 1 : 2;
      p(C), n.moveX = 0, n.moveY = 0;
    }, v = (C) => Math.sqrt(vt(C[0].clientX - C[1].clientX, 2) + vt(C[0].clientY - C[1].clientY, 2));
    let b, w, k, u, m, h, $;
    const A = (C) => {
      const { touches: D } = C, { offsetX: _ } = o;
      o.start(C), $ = D.length, b = n.moveX, w = n.moveY, h = Date.now(), n.moving = $ === 1 && n.scale !== 1, n.zooming = $ === 2 && !_.value, n.zooming && (k = n.scale, u = v(C.touches));
    }, E = (C) => {
      const { touches: D } = C;
      if (o.move(C), (n.moving || n.zooming) && ft(C, !0), n.moving) {
        const { deltaX: _, deltaY: K } = o, j = _.value + b, oe = K.value + w;
        n.moveX = Ee(j, -a.value, a.value), n.moveY = Ee(oe, -r.value, r.value);
      }
      if (n.zooming && D.length === 2) {
        const _ = v(D), K = k * _ / u;
        p(K);
      }
    }, I = () => {
      if ($ == 1 && e.video && e.video.source || $ > 1)
        return;
      const { offsetX: C, offsetY: D } = o, _ = Date.now() - h, K = 250, j = 5;
      C.value < j && D.value < j && _ < K && (m ? (clearTimeout(m), m = null, y()) : m = setTimeout(() => {
        e.contentClose && t("close"), m = null;
      }, K));
    }, M = (C) => {
      let D = !1;
      (n.moving || n.zooming) && (D = !0, n.moving && b === n.moveX && w === n.moveY && (D = !1), C.touches.length || (n.zooming && (n.moveX = Ee(n.moveX, -a.value, a.value), n.moveY = Ee(n.moveY, -r.value, r.value), n.zooming = !1), n.moving = !1, b = 0, w = 0, k = 1, n.scale < 1 && f(), n.scale > e.maxZoom && (n.scale = +e.maxZoom))), ft(C, D), I(), o.reset();
    }, L = () => {
      t("close");
    };
    return Q(() => e.initNo, f), Q(
      () => e.show,
      (C) => {
        C || f();
      }
    ), pe(G({}, we(n)), {
      onTouchStart: A,
      onTouchMove: E,
      onTouchEnd: M,
      getDistance: v,
      imageStyle: s,
      imageLoad: i,
      closeSwiper: L
    });
  }
}), mh = ["src"];
function hh(e, t, n, o, l, s) {
  const a = X("nut-video"), r = X("nut-swiper-item");
  return c(), J(r, { onClick: e.closeSwiper }, {
    default: te(() => [
      g("view", {
        style: V(e.imageStyle),
        class: "nut-image-preview-box",
        onTouchstart: t[1] || (t[1] = (...i) => e.onTouchStart && e.onTouchStart(...i)),
        onTouchmove: t[2] || (t[2] = (...i) => e.onTouchMove && e.onTouchMove(...i)),
        onTouchend: t[3] || (t[3] = (...i) => e.onTouchEnd && e.onTouchEnd(...i)),
        onTouchcancel: t[4] || (t[4] = (...i) => e.onTouchEnd && e.onTouchEnd(...i))
      }, [
        e.image && e.image.src ? (c(), d("img", {
          key: 0,
          src: e.image.src,
          class: "nut-image-preview-img",
          onLoad: t[0] || (t[0] = (...i) => e.imageLoad && e.imageLoad(...i))
        }, null, 40, mh)) : N("", !0),
        e.video && e.video.source ? (c(), J(a, {
          key: 1,
          source: e.video.source,
          options: e.video.options
        }, null, 8, ["source", "options"])) : N("", !0)
      ], 36)
    ]),
    _: 1
  }, 8, ["onClick"]);
}
const vh = /* @__PURE__ */ le(ph, [["render", hh]]), { create: gh } = ne("image-preview"), yh = gh({
  props: pe(G({}, tl), {
    images: { type: Array, default: () => [] },
    videos: { type: Array, default: () => [] },
    contentClose: { type: Boolean, default: !0 },
    paginationVisible: { type: Boolean, default: !1 },
    paginationColor: { type: String, default: "#fff" },
    autoplay: { type: [Number, String], default: 0 },
    teleport: { type: [String, Element], default: "body" },
    teleportDisable: { ype: Boolean, default: !1 },
    closeable: {
      type: Boolean,
      default: !1
    },
    closeIconPosition: {
      type: String,
      default: "top-right"
      // top-right  top-left
    },
    beforeClose: Function,
    isLoop: {
      type: Boolean,
      default: !0
    }
  }),
  emits: ["close", "change"],
  components: {
    ImagePreviewItem: vh,
    CircleClose: tn,
    NutPopup: Ae,
    NutSwiper: wn
  },
  setup(e, { emit: t }) {
    const n = z(), o = he({
      showPop: e.show,
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    }), l = S(() => {
      const p = "nut-image-preview-close";
      return `nut-image-preview-close-icon ${e.closeIconPosition == "top-right" ? `${p}-right` : `${p}-left`}`;
    }), s = S(() => qn(e.videos) ? [].concat(e.videos).concat(e.images) : e.images), a = (p) => {
      p !== o.active && (o.active = p, t("change", o.active));
    }, r = () => {
      en(e.beforeClose, {
        args: [o.active],
        done: () => i()
      });
    }, i = () => {
      o.showPop = !1, t("close");
    }, f = () => {
      if (n.value) {
        const p = Ye(n.value);
        o.rootHeight = p.height, o.rootWidth = p.width;
      }
    };
    return Q(
      () => e.show,
      (p) => {
        o.showPop = p, p && (a(e.initNo), _e(() => {
          f();
        }));
      }
    ), Q(
      () => e.initNo,
      (p) => {
        p != o.active && a(p);
      }
    ), $e(() => {
      a(e.initNo);
    }), pe(G({
      swipeRef: n
    }, we(o)), {
      onClose: r,
      mergeImages: s,
      setActive: a,
      iconClasses: l
    });
  }
}), bh = {
  ref: "swipeRef",
  class: "nut-image-preview"
}, $h = {
  key: 0,
  class: "nut-image-preview-index"
};
function wh(e, t, n, o, l, s) {
  const a = X("image-preview-item"), r = X("nut-swiper"), i = X("CircleClose"), f = X("nut-popup");
  return c(), J(f, {
    visible: e.showPop,
    "onUpdate:visible": t[1] || (t[1] = (p) => e.showPop = p),
    "pop-class": "nut-image-preview-custom-pop",
    "teleport-disable": e.teleportDisable,
    teleport: e.teleport,
    "lock-scroll": "",
    onClosed: e.onClose
  }, {
    default: te(() => [
      g("view", bh, [
        e.showPop ? (c(), J(r, {
          key: 0,
          "auto-play": e.autoplay,
          class: "nut-image-preview-swiper",
          loop: e.isLoop,
          "is-prevent-default": !1,
          direction: "horizontal",
          "init-page": e.initNo,
          "pagination-visible": e.paginationVisible,
          "pagination-color": e.paginationColor,
          onChange: e.setActive
        }, {
          default: te(() => [
            (c(!0), d(Z, null, ie(e.mergeImages, (p, y) => (c(), J(a, {
              key: y,
              video: y < e.videos.length ? p : {},
              image: y >= e.videos.length ? p : {},
              "root-height": e.rootHeight,
              "root-width": e.rootWidth,
              show: e.showPop,
              "init-no": e.active + 1,
              "content-close": e.contentClose,
              "max-zoom": e.maxZoom,
              "min-zoom": e.minZoom,
              onClose: e.onClose
            }, null, 8, ["video", "image", "root-height", "root-width", "show", "init-no", "content-close", "max-zoom", "min-zoom", "onClose"]))), 128))
          ]),
          _: 1
        }, 8, ["auto-play", "loop", "init-page", "pagination-visible", "pagination-color", "onChange"])) : N("", !0)
      ], 512),
      e.showIndex ? (c(), d("view", $h, P(e.active + 1) + " / " + P(e.mergeImages.length), 1)) : N("", !0),
      e.closeable ? (c(), d("view", {
        key: 1,
        class: B(e.iconClasses),
        onClick: t[0] || (t[0] = (...p) => e.onClose && e.onClose(...p))
      }, [
        T(e.$slots, "close-icon", {}, () => [
          ee(i, { color: "#ffffff" })
        ])
      ], 2)) : N("", !0)
    ]),
    _: 3
  }, 8, ["visible", "teleport-disable", "teleport", "onClosed"]);
}
const Cn = /* @__PURE__ */ le(yh, [["render", wh]]);
class kh {
  constructor() {
    H(this, "show", !1);
    H(this, "images", []);
    H(this, "videos", []);
    H(this, "contentClose", !0);
    H(this, "initNo", 0);
    H(this, "paginationVisible", !1);
    H(this, "paginationColor", "");
    H(this, "autoplay", 0);
    H(this, "isWrapTeleport", !1);
    H(this, "showIndex", !0);
    H(this, "closeable", !1);
    H(this, "closeIcon", "circle-close");
    H(this, "closeIconPosition", "top-right");
    H(this, "beforeClose");
    H(this, "maxZoom", 3);
    H(this, "minZoom", 1 / 3);
    H(this, "isLoop", !0);
    H(this, "teleport", "body");
  }
}
class Ch {
  constructor(t) {
    H(this, "options", new kh());
    const n = Object.assign(this.options, t), { unmount: o } = rn(n, {
      name: "image-preview",
      components: [Ae, $n, wn, kn, ht],
      wrapper: () => ({
        setup() {
          return () => (n.onClose = () => {
            n.show = !1, _e(() => {
              o();
            });
          }, Te(Cn, n));
        }
      })
    });
  }
}
const Sh = (e) => new Ch(e);
Sh.install = (e) => {
  e.use(Cn);
};
function Th(e) {
  const t = ot();
  t && Object.assign(t.proxy, e);
}
const { create: _h } = ne("countup"), Nh = _h({
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
      default: !0
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
      default: !1
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
    machineTurnMore: {
      type: Number,
      default: 0
    }
  },
  components: {},
  emits: ["click", "scrollEnd"],
  setup(e, { emit: t }) {
    const n = z(null), o = z([]), l = (L) => {
      L && o.value.push(L);
    }, s = he({
      valFlag: !1,
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
    }), { startFlag: a, scrolling: r, customBgImg: i, type: f } = he(e);
    Q(
      () => e.customChangeNum,
      () => {
        y(), u(0);
      }
    ), Q(
      () => e.machinePrizeLevel,
      (L) => {
        s.prizeLevelTrun = L;
      }
    ), Q(
      () => e.initNum,
      (L) => {
        s.current = L, s.valFlag = !1, p();
      }
    ), Q(
      () => e.endNum,
      () => {
        s.current = e.initNum, s.valFlag = !1, p();
      }
    );
    const p = () => {
      if (s.valFlag)
        return !1;
      a && (r || i ? f != "machine" && u() : (k(), setTimeout(() => {
        s.valFlag = !0;
      }, 300)));
    }, y = () => {
      clearInterval(Number(s.timer)), s.timer = null;
    }, v = (L, C, D) => {
      const _ = (L.toString().split(".")[1] || "").length, K = (C.toString().split(".")[1] || "").length, j = Math.pow(10, Math.max(_, K));
      return D == "-" ? Number((L * j - C * j).toFixed(0)) / j : Number((L * j + C * j).toFixed(0)) / j;
    }, b = (L) => {
      let { num_total_len: C, pointNum: D, initDigit1: _, initDigit2: K, sortFlag: j } = s, oe = j == "add" || j == "equal" ? String(K)[L - (C - D)] : 10 - Number(String(K)[L - (C - D)]), W = j == "add" || j == "equal" ? String(_)[L] : 10 - Number(String(_)[L]), Y = L > C - D - 1 ? -oe * 100 + "%" : L <= String(_).length - 1 ? -W * 100 + "%" : 0;
      return Y == "-1000%" && (Y = 0), Y;
    }, w = (L) => {
      let { num_total_len: C, pointNum: D, initDigit1: _, initDigit2: K } = s, j = String(K)[L - (C - D)];
      return L > C - D - 1 ? j || 0 : L <= String(_).length - 1 ? String(_)[L] : 0;
    }, k = () => {
      let { endNum: L, initNum: C, speed: D, toFixed: _ } = e, K = setInterval(() => {
        if (C > L)
          if (Number(s.current) <= L || Number(s.current) <= D)
            s.current = L.toFixed(_), clearInterval(K), t("scrollEnd"), s.valFlag = !1;
          else {
            let j = parseFloat(String(s.current)) - parseFloat(String(D));
            s.current = j.toFixed(_);
          }
        else if (Number(s.current) >= L)
          s.current = L.toFixed(_), clearInterval(K), t("scrollEnd"), s.valFlag = !1;
        else {
          let j = parseFloat(String(s.current)) + parseFloat(String(D));
          s.current = j.toFixed(_);
        }
      }, e.during);
    }, u = (L) => {
      let { initNum: C, endNum: D, toFixed: _, customBgImg: K } = e;
      K && (C = e.customChangeNum);
      let j, oe, W, Y;
      C != 0 ? (_ != 0 && (C = Number(C.toFixed(_))), String(C).indexOf(".") > -1 ? (j = String(C).split(".")[0].length, oe = String(C).split(".")[1].length) : (j = String(C).length, oe = 0)) : (j = 1, oe = 0), D != 0 ? (_ != 0 && (D = Number(D.toFixed(_))), String(D).indexOf(".") > -1 ? (W = String(D).split(".")[0].length, Y = String(D).split(".")[1].length) : (W = String(D).length, Y = 0)) : (W = 1, Y = 0);
      let R = j >= W ? j : W, x = oe >= Y ? oe : Y;
      s.num_total_len = R + x, s.pointNum = x, C > D ? (s.sortFlag = "reduce", s.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], s.totalCount = v(C, D, "-"), s.numberVal = Number(String(C))) : C < D ? (s.sortFlag = "add", s.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], s.totalCount = v(D, C, "-"), s.numberVal = Number(String(D))) : s.sortFlag = "equal";
      var U = 1;
      for (let ue = 0; ue < s.pointNum; ue++)
        U *= 10;
      var se = s.numberVal * U;
      if (s.relNum = se, _ != 0 && (s.pointNum = String(s.numberVal).split(".")[1] ? String(s.numberVal).split(".")[1].length : 0, s.num_total_len = String(se).length), String(C).indexOf(".") > -1) {
        let ue = String(C).split(".");
        s.initDigit1 = Number(ue[0]), s.initDigit2 = Number(ue[1]);
      } else
        s.initDigit1 = C, s.initDigit2 = 0;
      r && !K ? _e(() => {
        if (s.sortFlag == "equal")
          return !1;
        let ue = o.value[s.num_total_len - 1];
        m(ue);
      }) : L !== 0 && A();
    }, m = (L) => {
      y();
      var C = 1;
      s.pointNum != 0 && (C = 1 / Math.pow(10, s.pointNum)), s.timer = setInterval(() => {
        h(L), s.totalCount = v(s.totalCount, C, "-"), s.totalCount <= 0 && (y(), t("scrollEnd"), s.valFlag = !1);
      }, e.during);
    }, h = (L) => {
      let C = L.getAttribute("turn-number"), D;
      if (s.sortFlag == "add" ? D = parseInt(String(C)) + 1 : D = parseInt(String(C)) - 1 >= 0 ? parseInt(String(C)) - 1 : 9, L.setAttribute("turn-number", String(D)), (L.style.transition == "none 0s ease 0s" || D == 1 || !L.style.transition) && (L.style.transition = `all linear ${e.during}ms`), D == 10 || s.sortFlag == "reduce" && D == 0) {
        var _ = null;
        L.style.top = `-${s.sortFlag == "add" ? D * 100 : (10 - D) * 100}%`, L.setAttribute("turn-number", "0"), _ = setTimeout(() => {
          _ && clearTimeout(_), L.style.transition = "none", L.style.top = "0", $(L, D);
        }, 0.975 * e.during);
      } else
        L.style.top = `-${s.sortFlag == "add" ? D * 100 : (10 - D) * 100}%`;
      L.style.top == "-100%" && s.sortFlag == "reduce" && h(L.previousSibling);
    }, $ = (L, C) => {
      setTimeout(() => {
        C == 10 && L.previousSibling && h(L.previousSibling);
      }, 200);
    }, A = () => {
      _e(() => {
        n.value.addEventListener("webkitTransitionEnd", () => {
          t("scrollEnd"), s.valFlag = !1;
        });
      });
    }, E = () => {
      for (s.notPrize = []; s.notPrize.length < 3; ) {
        var L = Math.floor(Math.random() * e.machinePrizeNum + 1);
        s.notPrize.indexOf(L) == -1 && s.notPrize.push(L);
      }
    };
    Th({ machineLuck: () => {
      const L = e.machineTurnMore < 0 ? 0 : e.machineTurnMore;
      let C = e.numHeight * e.machinePrizeNum;
      s.prizeLevelTrun < 0 && E();
      for (let D = 0; D < e.machineNum; D++)
        setTimeout(() => {
          let _ = C * (D + 1 + parseFloat(String(L)));
          s.prizeYPrev.length != 0 && (s.prizeY[D] = s.prizeYPrev[D]);
          let K = s.prizeYPrev[D] ? s.prizeYPrev[D] : 0, j = _ + K + (e.machinePrizeNum - s.prizeLevelTrun + 1) * e.numHeight + (C - K);
          s.prizeLevelTrun < 0 && (j += e.numHeight * s.notPrize[D]), M(
            D,
            // parseFloat((this.machinePrizeNum-(this.prizeLevelTrun-1))*this.numHeight + turn + local),
            j,
            K
          );
        }, 500 * D);
    } });
    const M = (L, C, D) => {
      let _ = setInterval(() => {
        if (D <= C)
          D += 10, s.prizeY[L] = parseFloat(String(D));
        else if (clearInterval(_), _ = null, s.finshMachine += 1, s.prizeY[L] = C, s.finshMachine == e.machineNum) {
          let K = e.numHeight * e.machinePrizeNum;
          s.prizeYPrev = [], JSON.parse(JSON.stringify(s.prizeY)).forEach((oe) => {
            let W = oe;
            for (; W > K; )
              W -= K;
            s.prizeYPrev.push(W);
          }), setTimeout(() => {
            s.finshMachine = 0, s.prizeLevelTrun < 0 ? (t("scrollEnd", !1), s.valFlag = !1) : (t("scrollEnd", !0), s.valFlag = !1);
          }, 130);
        }
      }, 30);
    };
    return $e(() => {
      s.current = e.initNum, _e(() => {
        p();
      });
    }), Xe(() => {
      y(), s.timer = null;
    }), pe(G(G({}, we(s)), we(he(e))), {
      runNumberImg: n,
      setRef: l,
      topNumber: b,
      turnNumber: w
    });
  }
}), Dh = { class: "nut-countup" }, Ih = ["turn-number"];
function Bh(e, t, n, o, l, s) {
  return c(), d("view", Dh, [
    e.customBgImg != "" ? (c(), d(Z, { key: 0 }, [
      e.type == "machine" ? (c(), d("view", {
        key: 0,
        class: "nut-countup__machine",
        style: V({ height: e.numHeight + "px" })
      }, [
        (c(!0), d(Z, null, ie(e.machineNum, (a, r) => (c(), d("view", {
          key: "mImg" + r,
          class: "nut-countup__machine-item",
          style: V({
            width: e.numWidth + "px",
            height: e.numHeight + "px",
            backgroundImage: "url(" + e.customBgImg + ")",
            backgroundPositionY: e.prizeY[r] + "px"
          })
        }, null, 4))), 128))
      ], 4)) : (c(), d("view", {
        key: 1,
        ref: "runNumberImg",
        class: "nut-countup__numberimg",
        style: V({ height: e.numHeight + "px" })
      }, [
        (c(!0), d(Z, null, ie(e.num_total_len, (a, r) => (c(), d("view", {
          key: "cImg" + r,
          class: "nut-countup__numberimg__item",
          style: V({
            width: e.numWidth + "px",
            height: e.numHeight + "px",
            left: e.numWidth * (r > e.num_total_len - e.pointNum - 1 ? r == e.num_total_len - e.pointNum ? r * 1.5 : r * 1.3 : r) + "px",
            backgroundImage: "url(" + e.customBgImg + ")",
            backgroundPositionX: "0",
            backgroundPositionY: -(+String(e.relNum)[r] * e.numHeight + e.customSpacNum * +String(e.relNum)[r]) + "px",
            transition: "all linear " + e.during / 10 + "ms"
          })
        }, null, 4))), 128)),
        e.pointNum > 0 ? (c(), d("view", {
          key: 0,
          class: "nut-countup-pointstyl",
          style: V({
            width: e.numWidth / 2 + "px",
            bottom: 0,
            left: e.numWidth * (e.num_total_len - e.pointNum) * 1.1 + "px",
            fontSize: "30px"
          })
        }, " . ", 4)) : N("", !0)
      ], 4))
    ], 64)) : (c(), d(Z, { key: 1 }, [
      e.scrolling ? (c(), d("view", {
        key: 0,
        class: "nut-countup__number",
        style: V({
          width: e.numWidth * e.num_total_len + e.numWidth / 3 + "px",
          height: e.numHeight + "px",
          lineHeight: e.numHeight + "px"
        })
      }, [
        (c(!0), d(Z, null, ie(e.num_total_len, (a, r) => (c(), d("view", {
          ref_for: !0,
          ref: (i) => e.setRef(i),
          key: a,
          class: "nut-countup__number-item",
          style: V({
            top: e.topNumber(r),
            left: e.numWidth * (r > e.num_total_len - e.pointNum - 1 ? r * 1.1 : r) + "px"
          }),
          "turn-number": e.turnNumber(r)
        }, [
          (c(!0), d(Z, null, ie(e.to0_10, (i, f) => (c(), d("view", {
            key: "dote" + f,
            class: "nut-countup__number-item__span",
            style: V({
              width: e.numWidth + "px",
              height: e.numHeight + "px",
              lineHeight: e.numHeight + "px"
            })
          }, P(i), 5))), 128))
        ], 12, Ih))), 128)),
        e.pointNum > 0 ? (c(), d("view", {
          key: 0,
          class: "nut-countup-pointstyl",
          style: V({
            width: e.numWidth / 3 + "px",
            height: e.numHeight + "px",
            lineHeight: e.numHeight + "px",
            top: 0,
            left: e.numWidth * (e.num_total_len - e.pointNum) + "px"
          })
        }, " . ", 4)) : N("", !0)
      ], 4)) : (c(), d(Z, { key: 1 }, [
        ge(P(e.current), 1)
      ], 64))
    ], 64))
  ]);
}
const Mh = /* @__PURE__ */ le(Nh, [["render", Bh]]), Lh = (e) => {
  if (!e) return Date.now();
  let t = e;
  return t = +t > 0 ? +t : t.toString().replace(/-/g, "/"), new Date(t).getTime();
}, Ph = (e, t) => {
  let { h: n, m: o, s: l, ms: s } = e;
  const { d: a } = e;
  if (t.includes("DD") ? t = t.replace("DD", Ze(a)) : n += Number(a) * 24, t.includes("HH") ? t = t.replace("HH", Ze(n)) : o += Number(n) * 60, t.includes("mm") ? t = t.replace("mm", Ze(o)) : l += Number(o) * 60, t.includes("ss") ? t = t.replace("ss", Ze(l)) : s += Number(l) * 1e3, t.includes("S")) {
    const r = Ze(s, 3).toString();
    t.includes("SSS") ? t = t.replace("SSS", r) : t.includes("SS") ? t = t.replace("SS", r.slice(0, 2)) : t.includes("S") && (t = t.replace("S", r.slice(0, 1)));
  }
  return t;
}, Yn = (e, t, n) => {
  const o = e, l = {
    d: 0,
    h: 0,
    m: 0,
    s: 0,
    ms: 0
  }, s = 1e3, a = 60 * s, r = 60 * a, i = 24 * r;
  return o > 0 && (l.d = o >= s ? Math.floor(o / i) : 0, l.h = Math.floor(o % i / r), l.m = Math.floor(o % r / a), l.s = Math.floor(o % a / s), l.ms = Math.floor(o % s)), n == "custom" ? l : Ph(G({}, l), t);
}, Ah = { class: "nut-countdown" }, Eh = ["innerHTML"], nl = /* @__PURE__ */ ve({
  name: "NutCountdown",
  __name: "countdown",
  props: {
    modelValue: {},
    paused: { type: Boolean, default: !1 },
    startTime: { default: "" },
    endTime: { default: "" },
    millisecond: { type: Boolean, default: !1 },
    format: { default: "HH:mm:ss" },
    autoStart: { type: Boolean, default: !0 },
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
  setup(e, { expose: t, emit: n }) {
    const o = e, l = n, s = z(0), a = z(null), r = z(!o.paused && o.autoStart), i = z(Date.now()), f = z(0), p = S(() => Yn(s.value, o.format)), y = () => {
      i.value = Number(o.endTime), f.value = Date.now() - Lh(o.startTime), r.value || (r.value = !0), v();
    }, v = () => {
      window !== void 0 && (a.value = requestAnimationFrame(() => {
        if (r.value) {
          const u = Date.now() - f.value, m = Math.max(i.value - u, 0);
          s.value = m, m || (r.value = !1, w(), l("end"), l("onEnd")), m > 0 && v();
        }
      }));
    }, b = () => {
      !r.value && !o.autoStart && (r.value = !0, i.value = Date.now() + Number(s.value), v(), l("restart", s.value), l("onRestart", s.value));
    }, w = () => {
      cancelAnimationFrame(a.value), r.value = !1, l("paused", s.value), l("onPaused", s.value);
    };
    return t({
      start: b,
      pause: w,
      reset: () => {
        o.autoStart || (w(), s.value = Number(o.time));
      }
    }), Un(() => {
      o.autoStart ? y() : s.value = Number(o.time);
    }), Q(
      () => s.value,
      (u) => {
        const m = Yn(u, o.format, "custom");
        l("update:modelValue", m), l("input", m);
      }
    ), Q(
      () => o.paused,
      (u, m) => {
        m ? (r.value || (r.value = !0, i.value = Date.now() + Number(s.value), v()), l("restart", s.value), l("onRestart", s.value)) : r.value && w();
      }
    ), Q(
      () => o.endTime,
      () => {
        y();
      }
    ), Q(
      () => o.startTime,
      () => {
        y();
      }
    ), (u, m) => (c(), d("view", Ah, [
      T(u.$slots, "default", {}, () => [
        g("view", {
          class: "nut-countdown__content",
          innerHTML: p.value
        }, null, 8, Eh)
      ])
    ]));
  }
});
ye(nl);
const Sn = /* @__PURE__ */ ve({
  name: "NutTag",
  __name: "tag",
  props: {
    color: { default: "" },
    textColor: { default: "" },
    type: { default: "default" },
    plain: { type: Boolean, default: !1 },
    round: { type: Boolean, default: !1 },
    mark: { type: Boolean, default: !1 },
    closeable: { type: Boolean, default: !1 }
  },
  emits: ["close", "click"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = S(() => {
      const i = "nut-tag";
      return {
        [i]: !0,
        [`${i}--${n.type}`]: n.type,
        [`${i}--plain`]: n.plain,
        [`${i}--round`]: n.round,
        [`${i}--mark`]: n.mark
      };
    }), s = S(() => {
      const i = {};
      return n.textColor ? i.color = n.textColor : n.color && n.plain && (i.color = n.color), n.plain ? (i.background = "#fff", i.borderColor = n.color) : n.color && (i.background = n.color), i;
    }), a = (i) => {
      o("close", i);
    }, r = (i) => {
      o("click", i);
    };
    return (i, f) => (c(), d("view", {
      class: B(l.value),
      style: V(s.value),
      onClick: r
    }, [
      T(i.$slots, "default"),
      i.closeable ? (c(), J(ce(zt), {
        key: 0,
        class: "nut-tag--close",
        width: "12px",
        height: "12px",
        onClick: De(a, ["stop"])
      })) : N("", !0)
    ], 6));
  }
});
ye(Sn);
const { create: zh } = ne("popover"), Vh = zh({
  components: {
    NutPopup: Ae
  },
  props: {
    visible: { type: Boolean, default: !1 },
    list: { type: Array, default: [] },
    theme: { type: String, default: "light" },
    location: { type: String, default: "bottom" },
    offset: { type: Array, default: [0, 12] },
    arrowOffset: { type: Number, default: 0 },
    customClass: { type: String, default: "" },
    showArrow: { type: Boolean, default: !0 },
    duration: { type: [Number, String], default: 0.3 },
    overlay: { type: Boolean, default: !1 },
    overlayClass: { type: String, default: "" },
    overlayStyle: { type: Object },
    closeOnClickOverlay: { type: Boolean, default: !0 },
    closeOnClickAction: { type: Boolean, default: !0 },
    closeOnClickOutside: { type: Boolean, default: !0 },
    targetId: { type: String, default: "" },
    bgColor: { type: String, default: "" }
  },
  emits: ["update", "update:visible", "close", "choose", "open"],
  setup(e, { emit: t }) {
    const n = z(), o = z(), l = z(e.visible), s = z(), a = z({
      width: 0,
      height: 0
    }), r = S(() => {
      const m = "nut-popover-arrow", h = e.location, $ = h.split("-")[0];
      return `${m} ${m}-${$} ${m}--${h}`;
    }), i = S(() => {
      const m = {}, { bgColor: h, arrowOffset: $, location: A } = e, E = A.split("-")[0], I = A.split("-")[1], M = 16;
      return h && (m[`border${f(E)}Color`] = h), e.arrowOffset != 0 && (["bottom", "top"].includes(E) && (I || (m.left = `calc(50% + ${$}px)`), I == "start" && (m.left = `${M + $}px`), I == "end" && (m.right = `${M - $}px`)), ["left", "right"].includes(E) && (I || (m.top = `calc(50% - ${$}px)`), I == "start" && (m.top = `${M - $}px`), I == "end" && (m.bottom = `${M + $}px`))), m;
    }), f = (m) => (m = m.toLowerCase(), m = m.replace(/\b\w+\b/g, (h) => h.substring(0, 1).toUpperCase() + h.substring(1)), m), p = S(() => {
      const m = {};
      if (!s.value) return {};
      const h = a.value.width, $ = a.value.height, { width: A, height: E, left: I, top: M, right: L } = s.value, { location: C, offset: D } = e, _ = C == null ? void 0 : C.split("-")[0], K = C == null ? void 0 : C.split("-")[1];
      let j = 0, oe = 0;
      if (Array.isArray(D) && (D == null ? void 0 : D.length) === 2 && (j += Number(D[1]), oe += Number(D[0])), A) {
        if (["bottom", "top"].includes(_)) {
          const W = _ === "bottom" ? E + j : -($ + j);
          m.top = `${M + W}px`, K || (m.left = `${-(h - A) / 2 + I + oe}px`), K === "start" && (m.left = `${I + oe}px`), K === "end" && (m.left = `${L + oe}px`);
        }
        if (["left", "right"].includes(_)) {
          const W = _ === "left" ? -(h + j) : A + j;
          m.left = `${I + W}px`, K || (m.top = `${M - $ / 2 + E / 2 - 4 + oe}px`), K === "start" && (m.top = `${M + oe}px`), K === "end" && (m.top = `${M + E + oe}px`);
        }
      }
      return m;
    }), y = () => {
      var h, $, A, E;
      const m = Ye(
        e.targetId ? document.querySelector(`#${e.targetId}`) : n.value
      );
      s.value = {
        width: m.width,
        height: m.height,
        left: m.left,
        top: m.top + Math.max(((h = document.documentElement) == null ? void 0 : h.scrollTop) || 0, (($ = document.body) == null ? void 0 : $.scrollTop) || 0),
        right: m.right
      }, a.value = {
        height: (A = o.value) == null ? void 0 : A.clientHeight,
        width: (E = o.value) == null ? void 0 : E.clientWidth
      };
    };
    $e(() => {
      setTimeout(() => {
        y();
      }, 300);
    }), Q(
      () => e.visible,
      (m) => {
        l.value = m, m ? (window.addEventListener("touchstart", u, !0), _e(() => {
          y();
        })) : window.removeEventListener("touchstart", u, !0);
      }
    );
    const v = (m) => {
      t("update", m), t("update:visible", m);
    }, b = () => {
      v(!e.visible), t("open");
    }, w = () => {
      t("update:visible", !1), t("close");
    }, k = (m, h) => {
      !m.disabled && t("choose", m, h), e.closeOnClickAction && w();
    }, u = (m) => {
      const h = n.value, $ = o.value;
      let A = h && !h.contains(m.target);
      if (e.targetId) {
        const E = document.querySelector(`#${e.targetId}`);
        A = E && !E.contains(m.target);
      }
      A && $ && !$.contains(m.target) && e.closeOnClickOutside && w();
    };
    return {
      showPopup: l,
      openPopover: b,
      popoverArrow: r,
      closePopover: w,
      chooseItem: k,
      popoverRef: n,
      popoverContentRef: o,
      getRootPosition: p,
      popoverArrowStyle: i,
      renderIcon: nt
    };
  }
}), Hh = {
  ref: "popoverContentRef",
  class: "nut-popover-content-group"
}, Oh = ["onClick"], Rh = { class: "nut-popover-menu-item-name" };
function Fh(e, t, n, o, l, s) {
  const a = X("nut-popup");
  return c(), d(Z, null, [
    e.targetId ? N("", !0) : (c(), d("div", {
      key: 0,
      ref: "popoverRef",
      class: "nut-popover-wrapper",
      onClick: t[0] || (t[0] = (...r) => e.openPopover && e.openPopover(...r))
    }, [
      T(e.$slots, "reference")
    ], 512)),
    (c(), J(Kn, { to: "body" }, [
      g("div", {
        class: B(["nut-popover", `nut-popover--${e.theme}`, `${e.customClass}`]),
        style: V(e.getRootPosition)
      }, [
        ee(a, {
          visible: e.showPopup,
          "onUpdate:visible": t[1] || (t[1] = (r) => e.showPopup = r),
          "pop-class": `nut-popover-content nut-popover-content--${e.location}`,
          style: V({ background: e.bgColor }),
          position: "",
          transition: "nut-popover",
          overlay: e.overlay,
          duration: e.duration,
          "overlay-style": e.overlayStyle,
          "overlay-class": e.overlayClass,
          "close-on-click-overlay": e.closeOnClickOverlay
        }, {
          default: te(() => [
            g("div", Hh, [
              e.showArrow ? (c(), d("div", {
                key: 0,
                class: B(e.popoverArrow),
                style: V(e.popoverArrowStyle)
              }, null, 6)) : N("", !0),
              T(e.$slots, "content"),
              (c(!0), d(Z, null, ie(e.list, (r, i) => (c(), d("div", {
                key: i,
                class: B([r.className, r.disabled && "nut-popover-menu-disabled", "nut-popover-menu-item"]),
                onClick: De((f) => e.chooseItem(r, i), ["stop"])
              }, [
                r.icon ? (c(), J(ze(e.renderIcon(r.icon)), {
                  key: 0,
                  class: "nut-popover-item-img"
                })) : N("", !0),
                g("div", Rh, P(r.name), 1)
              ], 10, Oh))), 128))
            ], 512)
          ]),
          _: 3
        }, 8, ["visible", "pop-class", "style", "overlay", "duration", "overlay-style", "overlay-class", "close-on-click-overlay"])
      ], 6)
    ]))
  ], 64);
}
const ol = /* @__PURE__ */ le(Vh, [["render", Fh]]), Wh = { key: 0 }, Yh = {
  key: 1,
  class: "nut-skeleton"
}, jh = {
  key: 0,
  class: "nut-skeleton-animation"
}, Kh = { class: "nut-skeleton-content" }, ll = /* @__PURE__ */ ve({
  name: "NutSkeleton",
  __name: "skeleton",
  props: {
    width: { default: "100px" },
    height: { default: "15px" },
    animated: { type: Boolean, default: !1 },
    avatar: { type: Boolean, default: !1 },
    avatarShape: { default: "round" },
    avatarSize: { default: "50px" },
    loading: { type: Boolean, default: !0 },
    round: { type: Boolean, default: !1 },
    row: { default: "1" },
    title: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = S(() => {
      const s = "avatarClass";
      return {
        [s]: !0,
        [`${s}--${t.avatarShape}`]: t.avatarShape
      };
    }), o = (s) => ({
      [s]: !0,
      [`${s}--round`]: t.round
    }), l = S(() => ({
      width: t.avatarSize,
      height: t.avatarSize
    }));
    return (s, a) => s.loading ? (c(), d("view", Yh, [
      s.animated ? (c(), d("view", jh)) : N("", !0),
      g("view", Kh, [
        s.avatar ? (c(), J(bn, {
          key: 0,
          class: B(n.value),
          shape: s.avatarShape,
          style: V(l.value)
        }, null, 8, ["class", "shape", "style"])) : N("", !0),
        g("view", {
          class: "nut-skeleton-content__line",
          style: V({ width: s.width })
        }, [
          s.title ? (c(), d("view", {
            key: 0,
            class: B(o("nut-skeleton-blockTitle")),
            style: V({ height: s.height })
          }, null, 6)) : N("", !0),
          (c(!0), d(Z, null, ie(Number(s.row), (r) => (c(), d("view", {
            key: r,
            class: B(o("nut-skeleton-blockLine")),
            style: V({ height: s.height })
          }, null, 6))), 128))
        ], 4)
      ])
    ])) : (c(), d("view", Wh, [
      T(s.$slots, "default")
    ]));
  }
});
ye(ll);
const sl = Symbol("nut-collapse"), Uh = { class: "nut-collapse" }, al = /* @__PURE__ */ ve({
  name: "NutCollapse",
  __name: "collapse",
  props: {
    modelValue: { default: "" },
    accordion: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = z(n.modelValue || (n.accordion ? "" : []));
    Q(
      () => n.modelValue,
      (i) => {
        l.value = i;
      }
    );
    const s = (i, f, p = !0) => {
      l.value = i, o("update:modelValue", i), o("change", i, f, p);
    };
    return Re(sl, {
      updateVal: (i) => {
        if (n.accordion)
          l.value === i ? s("", i, !1) : s(i, i, !0);
        else if (Array.isArray(l.value))
          if (l.value.includes(i)) {
            const f = l.value.filter((p) => p !== i);
            s(f, i, !1);
          } else {
            const f = l.value.concat([i]);
            s(f, i, !0);
          }
        else
          console.warn("[NutUI] <Collapse> 未开启手风琴模式时 v-model 应为数组");
      },
      isExpanded: (i) => n.accordion ? l.value === i : Array.isArray(l.value) ? l.value.includes(i) : !1
    }), (i, f) => (c(), d("view", Uh, [
      T(i.$slots, "default")
    ]));
  }
});
ye(al);
const Xh = { class: "nut-collapse-item__title-main" }, qh = { class: "nut-collapse-item__title-main-value" }, Gh = ["innerHTML"], Zh = {
  key: 2,
  class: "nut-collapse-item__title-label"
}, Jh = {
  key: 0,
  class: "nut-collapse-item__title-sub"
}, Qh = ["innerHTML"], xh = {
  key: 0,
  class: "nut-collapse__item-extraWrapper"
}, e0 = { class: "nut-collapse__item-extraWrapper__extraRender" }, rl = /* @__PURE__ */ ve({
  name: "NutCollapseItem",
  __name: "collapse-item",
  props: {
    title: { default: "" },
    value: { default: "" },
    label: { default: "" },
    disabled: { type: Boolean, default: !1 },
    name: { default: -1 },
    border: { type: Boolean, default: !0 },
    icon: { default: () => oo },
    rotate: { default: 180 }
  },
  setup(e) {
    const t = e, n = z(null), o = z(null), l = Ve(sl), s = S(() => {
      const v = "nut-collapse-item";
      return {
        [v]: !0,
        [v + "__border"]: t.border
      };
    }), a = S(() => l ? l.isExpanded(t.name) : !1), r = z(a.value ? "auto" : "0px"), i = () => {
      l && l.updateVal(t.name);
    }, f = () => {
      a.value && (r.value = "auto");
    }, p = () => {
      r.value = "0px", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var b;
          const v = (b = o.value) == null ? void 0 : b.offsetHeight;
          r.value = v ? `${v}px` : "auto";
        });
      });
    }, y = () => {
      var b;
      const v = (b = o.value) == null ? void 0 : b.offsetHeight;
      r.value = v ? `${v}px` : "auto", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          r.value = "0px";
        });
      });
    };
    return Q(a, (v) => {
      v ? p() : y();
    }), (v, b) => (c(), d("view", {
      class: B(s.value)
    }, [
      g("view", {
        class: B(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": v.disabled }]),
        onClick: i
      }, [
        g("view", Xh, [
          g("view", qh, [
            v.$slots.title ? T(v.$slots, "title", { key: 0 }) : (c(), d("view", {
              key: 1,
              class: "nut-collapse-item__title-mtitle",
              innerHTML: v.title
            }, null, 8, Gh)),
            v.label ? (c(), d("view", Zh, P(v.label), 1)) : N("", !0)
          ])
        ]),
        v.$slots.value ? (c(), d("view", Jh, [
          T(v.$slots, "value")
        ])) : (c(), d("view", {
          key: 1,
          class: "nut-collapse-item__title-sub",
          innerHTML: v.value
        }, null, 8, Qh)),
        g("view", {
          class: B(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": a.value }]),
          style: V({ transform: "rotate(" + (a.value ? v.rotate : 0) + "deg)" })
        }, [
          v.$slots.icon ? T(v.$slots, "icon", { key: 0 }) : (c(), J(ze(ce(nt)(v.icon)), { key: 1 }))
        ], 6)
      ], 2),
      v.$slots.extra ? (c(), d("view", xh, [
        g("div", e0, [
          T(v.$slots, "extra")
        ])
      ])) : N("", !0),
      g("view", {
        ref_key: "wrapperRef",
        ref: n,
        class: "nut-collapse__item-wrapper",
        style: V({
          willChange: "height",
          height: r.value
        }),
        onTransitionend: f
      }, [
        g("view", {
          ref_key: "contentRef",
          ref: o,
          class: "nut-collapse__item-wrapper__content"
        }, [
          T(v.$slots, "default")
        ], 512)
      ], 36)
    ], 2));
  }
});
ye(rl);
const t0 = ve({
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
  setup(e) {
    return () => Te("view", {}, e.slots[0] ? e.slots[0](e.record) : e.slots[1](e.record));
  }
}), { create: n0 } = ne("table"), o0 = "NutTable", l0 = n0({
  components: {
    RenderColumn: t0,
    DownArrow: oo
  },
  props: {
    bordered: {
      type: Boolean,
      default: !0
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
      default: !1
    }
  },
  emits: ["sorter"],
  setup(e, { emit: t }) {
    const n = Se(o0), o = he({
      curData: e.data
    }), l = (y) => ({
      "nut-table__main__head__tr--border": e.bordered,
      [`nut-table__main__head__tr--align${y.align ? y.align : ""}`]: !0
    }), s = (y) => y.stylehead ? y.stylehead : "", a = (y) => y.stylecolumn ? y.stylecolumn : "", r = (y) => e.columns.filter((v) => v.key === y)[0], i = (y) => {
      const v = e.columns.filter((b) => b.key === y);
      return v[0].stylecolumn ? v[0].stylecolumn : "";
    }, f = (y) => {
      y.sorter && (t("sorter", y), o.curData = typeof y.sorter == "function" ? o.curData.sort(y.sorter) : y.sorter === "default" ? o.curData.sort() : o.curData);
    }, p = () => e.columns.map((y) => [y.key, y.render]);
    return Q(
      () => e.data,
      (y) => {
        o.curData = y.slice();
      }
    ), pe(G({}, we(o)), {
      cellClasses: l,
      getColumnItem: r,
      getColumnItemStyle: i,
      handleSorterClick: f,
      sortDataItem: p,
      translate: n,
      stylehead: s,
      stylecolumn: a
    });
  }
}), s0 = { class: "nut-table" }, a0 = { class: "nut-table__main__head" }, r0 = { class: "nut-table__main__head__tr" }, i0 = ["onClick"], u0 = { class: "nut-table__main__body" }, c0 = { key: 1 }, d0 = {
  key: 0,
  class: "nut-table__nodata"
}, f0 = {
  key: 0,
  class: "nut-table__nodata__text"
}, p0 = {
  key: 1,
  class: "nut-table__summary"
}, m0 = ["innerHTML"];
function h0(e, t, n, o, l, s) {
  const a = X("DownArrow"), r = X("RenderColumn");
  return c(), d("view", s0, [
    g("view", {
      class: B(["nut-table__main", { "nut-table__main--striped": e.striped }])
    }, [
      g("view", a0, [
        g("view", r0, [
          (c(!0), d(Z, null, ie(e.columns, (i) => (c(), d("span", {
            key: i.key,
            class: B(["nut-table__main__head__tr__th", e.cellClasses(i)]),
            style: V(i.stylehead),
            onClick: (f) => e.handleSorterClick(i)
          }, [
            ge(P(i.title) + " ", 1),
            T(e.$slots, "icon"),
            !e.$slots.icon && i.sorter ? (c(), J(a, {
              key: 0,
              width: "12px",
              height: "12px"
            })) : N("", !0)
          ], 14, i0))), 128))
        ])
      ]),
      g("view", u0, [
        (c(!0), d(Z, null, ie(e.curData, (i) => (c(), d("view", {
          key: i,
          class: "nut-table__main__body__tr"
        }, [
          (c(!0), d(Z, null, ie(e.sortDataItem(), ([f, p]) => (c(), d("span", {
            key: f,
            class: B(["nut-table__main__body__tr__td", e.cellClasses(e.getColumnItem(f))]),
            style: V(e.getColumnItemStyle(f))
          }, [
            typeof i[f] == "function" || typeof p == "function" ? (c(), J(r, {
              key: 0,
              slots: [p, i[f]],
              record: i
            }, null, 8, ["slots", "record"])) : (c(), d("view", c0, P(i[f]), 1))
          ], 6))), 128))
        ]))), 128))
      ])
    ], 2),
    e.curData.length ? N("", !0) : (c(), d("view", d0, [
      g("div", {
        class: B(["nut-table__nodata", { "nut-table__nodata--border": e.bordered }])
      }, [
        T(e.$slots, "nodata"),
        e.$slots.nodata ? N("", !0) : (c(), d("div", f0, P(e.translate("noData")), 1))
      ], 2)
    ])),
    e.summary ? (c(), d("view", p0, [
      g("span", {
        class: "nut-table__summary__text",
        innerHTML: e.summary().value
      }, null, 8, m0)
    ])) : N("", !0)
  ]);
}
const v0 = /* @__PURE__ */ le(l0, [["render", h0]]), g0 = { class: "nut-animate" }, il = /* @__PURE__ */ ve({
  name: "NutAnimate",
  __name: "animate",
  props: {
    type: {},
    show: { type: Boolean, default: !1 },
    action: { default: "" },
    loop: { type: Boolean, default: !1 },
    duration: { default: 500 }
  },
  emits: ["click", "animate"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = z(n.action === "initial" || n.show === !0 || n.loop), s = S(() => ({
      "nut-animate__container": !0,
      [`nut-animate-${n.type}`]: l.value,
      loop: n.loop
    })), a = () => {
      l.value = !1, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          l.value = !0;
        });
      });
    }, r = (i) => {
      n.action === "click" && (a(), o("click", i), o("animate"));
    };
    return Q(
      () => n.show,
      (i) => {
        i && (a(), o("animate"));
      }
    ), (i, f) => (c(), d("view", g0, [
      g("view", {
        class: B(s.value),
        style: V({
          animationDuration: i.duration ? `${i.duration}ms` : void 0
        }),
        onClick: r
      }, [
        T(i.$slots, "default")
      ], 6)
    ]));
  }
});
ye(il);
const { create: y0 } = ne("ellipsis"), b0 = y0({
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
  setup(e, { emit: t }) {
    const n = z(null);
    let o = null, l = 0;
    const s = z(), a = he({
      exceeded: !1,
      // 是否超出
      expanded: !1
      // 是否折叠
    });
    Q(
      () => e.content,
      (w, k) => {
        w != k && r();
      }
    ), $e(() => {
      r();
    });
    const r = () => {
      if (!n.value) return;
      const w = window.getComputedStyle(n.value);
      o = document.createElement("div"), Array.prototype.slice.apply(w).forEach((m) => {
        o.style.setProperty(m, w.getPropertyValue(m));
      }), o.style.position = "fixed", o.style.left = "999999px", o.style.top = "999999px", o.style.zIndex = "-1000", o.style.height = "auto", o.style.minHeight = "auto", o.style.maxHeight = "auto", o.style.textOverflow = "clip", o.style.whiteSpace = "normal", o.style.webkitLineClamp = "unset", o.style.display = "block";
      const u = y(w.lineHeight === "normal" ? e.lineHeight : w.lineHeight);
      l = Math.floor(
        u * (Number(e.rows) + 0.5) + y(w.paddingTop) + y(w.paddingBottom)
      ), o.innerText = e.content, document.body.appendChild(o), i();
    }, i = () => {
      if (o.offsetHeight <= l)
        a.exceeded = !1, document.body.removeChild(o);
      else {
        a.exceeded = !0;
        const w = e.content.length, k = Math.floor((0 + w) / 2), u = e.direction === "middle" ? p([0, k], [k, w]) : f(0, w);
        s.value = u, document.body.removeChild(o);
      }
    }, f = (w, k) => {
      const u = a.expanded ? e.collapseText : e.expandText, m = e.content.length;
      if (k - w <= 1)
        return e.direction === "end" ? {
          leading: e.content.slice(0, w) + e.symbol
        } : {
          tailing: e.symbol + e.content.slice(k, m)
        };
      const h = Math.round((w + k) / 2);
      return e.direction === "end" ? o.innerText = e.content.slice(0, h) + e.symbol + u : o.innerText = u + e.symbol + e.content.slice(h, m), o.offsetHeight <= l ? e.direction === "end" ? f(h, k) : f(w, h) : e.direction === "end" ? f(w, h) : f(h, k);
    }, p = (w, k) => {
      const u = a.expanded ? e.collapseText : e.expandText, m = e.content.length;
      if (w[1] - w[0] <= 1 && k[1] - k[0] <= 1)
        return {
          leading: e.content.slice(0, w[0]) + e.symbol,
          tailing: e.symbol + e.content.slice(k[1], m)
        };
      const h = Math.floor((w[0] + w[1]) / 2), $ = Math.ceil((k[0] + k[1]) / 2);
      return o.innerText = e.content.slice(0, h) + e.symbol + u + e.symbol + e.content.slice($, m), o.offsetHeight <= l ? p([h, w[1]], [k[0], $]) : p([w[0], h], [$, k[1]]);
    }, y = (w) => {
      if (!w) return 0;
      const k = w.match(/^\d*(\.\d*)?/);
      return k ? Number(k[0]) : 0;
    }, v = (w) => {
      w == 1 ? (a.expanded = !0, t("change", "expand")) : (a.expanded = !1, t("change", "collapse"));
    }, b = () => {
      t("click");
    };
    return pe(G({}, we(a)), { root: n, ellipsis: s, clickHandle: v, handleClick: b });
  }
}), $0 = { key: 0 }, w0 = { key: 1 }, k0 = { key: 2 };
function C0(e, t, n, o, l, s) {
  return c(), d("view", {
    ref: "root",
    class: "nut-ellipsis",
    onClick: t[2] || (t[2] = (...a) => e.handleClick && e.handleClick(...a))
  }, [
    e.exceeded ? N("", !0) : (c(), d("view", $0, P(e.content), 1)),
    e.exceeded && !e.expanded ? (c(), d("view", w0, [
      ge(P(e.ellipsis && e.ellipsis.leading), 1),
      e.expandText ? (c(), d("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[0] || (t[0] = De((a) => e.clickHandle(1), ["stop"]))
      }, P(e.expandText), 1)) : N("", !0),
      ge(P(e.ellipsis && e.ellipsis.tailing), 1)
    ])) : N("", !0),
    e.exceeded && e.expanded ? (c(), d("view", k0, [
      ge(P(e.content) + " ", 1),
      e.expandText ? (c(), d("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[1] || (t[1] = De((a) => e.clickHandle(2), ["stop"]))
      }, P(e.collapseText), 1)) : N("", !0)
    ])) : N("", !0)
  ], 512);
}
const S0 = /* @__PURE__ */ le(b0, [["render", C0]]), ul = /* @__PURE__ */ ve({
  name: "NutWatermark",
  __name: "watermark",
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
    fullPage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = z(""), o = S(() => {
      const s = "nut-watermark";
      return {
        [s]: !0,
        [`${s}-full-page`]: t.fullPage
      };
    }), l = () => {
      const s = document.createElement("canvas"), a = window.devicePixelRatio, r = s.getContext("2d"), i = `${(t.gapX + t.width) * a}px`, f = `${(t.gapY + t.height) * a}px`, p = t.width * a, y = t.height * a;
      if (s.setAttribute("width", i), s.setAttribute("height", f), r) {
        if (t.image) {
          r.translate(p / 2, y / 2), r.rotate(Math.PI / 180 * Number(t.rotate));
          const v = new Image();
          v.crossOrigin = "anonymous", v.referrerPolicy = "no-referrer", v.src = t.image, v.onload = () => {
            r.drawImage(
              v,
              -t.imageWidth * a / 2,
              -t.imageHeight * a / 2,
              t.imageWidth * a,
              t.imageHeight * a
            ), r.restore(), n.value = s.toDataURL();
          };
        } else if (t.content) {
          r.textBaseline = "middle", r.textAlign = "center", r.translate(p / 2, y / 2), r.rotate(Math.PI / 180 * Number(t.rotate));
          const v = Number(t.fontSize) * a;
          r.font = `${t.fontStyle} normal ${t.fontWeight} ${v}px/${y}px ${t.fontFamily}`, r.fillStyle = t.fontColor, Array.isArray(t.content) ? t.content.map((b, w) => {
            r.fillText(b, 0, (w - 1) * v);
          }) : r.fillText(t.content, 0, 0), r.restore(), n.value = s.toDataURL();
        }
      } else
        throw new Error("当前环境不支持Canvas");
    };
    return ct(() => {
      l();
    }), (s, a) => (c(), d("view", {
      class: B(o.value),
      style: V({
        zIndex: s.zIndex,
        backgroundSize: `${s.gapX + s.width}px`,
        backgroundImage: `url('${n.value}')`
      })
    }, null, 6));
  }
});
ye(ul);
const T0 = { class: "nut-trend-arrow" }, cl = /* @__PURE__ */ ve({
  name: "NutTrendArrow",
  __name: "trend-arrow",
  props: {
    rate: { default: 0 },
    digits: { default: 2 },
    showSign: { type: Boolean, default: !1 },
    showZero: { type: Boolean, default: !1 },
    arrowLeft: { type: Boolean, default: !1 },
    syncTextColor: { type: Boolean, default: !0 },
    textColor: { default: "#333" },
    riseColor: { default: "#fa2c19" },
    dropColor: { default: "#64b578" }
  },
  setup(e) {
    const t = e, n = S(() => t.rate > 0), o = S(() => {
      const s = Math.abs(t.rate);
      return !t.showZero && t.rate === 0 ? "--" : `${t.showSign && t.rate !== 0 ? n.value ? "+" : "-" : ""}${Dl(
        Number(s),
        t.digits
      )}%`;
    }), l = S(() => ({
      color: t.rate === 0 ? t.textColor : t.syncTextColor ? n.value ? t.riseColor : t.dropColor : t.textColor
    }));
    return (s, a) => (c(), d("view", T0, [
      s.arrowLeft ? N("", !0) : (c(), d("span", {
        key: 0,
        class: "nut-trend-arrow-icon-before nut-trend-arrow-rate",
        style: V(l.value)
      }, P(o.value), 5)),
      Number(s.rate) !== 0 && n.value ? T(s.$slots, "up-icon", { key: 1 }, () => [
        ee(ce(gi), { color: s.riseColor }, null, 8, ["color"])
      ]) : N("", !0),
      Number(s.rate) !== 0 && !n.value ? T(s.$slots, "down-icon", { key: 2 }, () => [
        ee(ce(fi), { color: s.dropColor }, null, 8, ["color"])
      ]) : N("", !0),
      s.arrowLeft ? (c(), d("span", {
        key: 3,
        class: "nut-trend-arrow-icon-after nut-trend-arrow-rate",
        style: V(l.value)
      }, P(o.value), 5)) : N("", !0)
    ]));
  }
});
ye(cl);
const { create: _0 } = ne("tour"), N0 = _0({
  components: {
    NutPopover: ol,
    Close: zt
  },
  props: {
    modelValue: { type: Boolean, default: !1 },
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
      default: !0
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
      default: !0
    },
    showPrevStep: {
      type: Boolean,
      default: !0
    },
    showTitleBar: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "change", "close"],
  setup(e, { emit: t }) {
    const n = he({
      showTour: e.modelValue,
      showPopup: !1,
      active: 0
    }), o = z({}), l = S(() => "nut-tour"), s = S(() => {
      const { offset: p, maskWidth: y, maskHeight: v } = e, { width: b, height: w, left: k, top: u } = o.value, m = [k + b / 2, u + w / 2], h = Number(y || b), $ = Number(v || w);
      return {
        width: `${h + +p[1] * 2}px`,
        height: `${$ + +p[0] * 2}px`,
        top: `${m[1] - $ / 2 - +p[0]}px`,
        left: `${m[0] - h / 2 - +p[1]}px`
      };
    }), a = (p) => {
      p == "next" ? n.active = n.active + 1 : n.active = n.active - 1, n.showPopup = !1, _e(() => {
        n.showPopup = !0, r();
      }), t("change", n.active);
    }, r = () => {
      const p = document.querySelector(`#${e.steps[n.active].target}`), y = Ye(p);
      o.value = y;
    }, i = () => {
      n.showTour = !1, n.showPopup = !1, t("close", n.active), t("update:modelValue", !1);
    }, f = () => {
      e.closeOnClickOverlay && i();
    };
    return $e(() => {
      n.active = 0, r();
    }), Q(
      () => e.modelValue,
      (p) => {
        p && r(), n.active = 0, n.showTour = p, n.showPopup = p;
      }
    ), pe(G({}, we(n)), {
      classes: l,
      maskStyle: s,
      changeStep: a,
      close: i,
      handleClickMask: f
    });
  }
}), D0 = {
  key: 0,
  class: "nut-tour-content"
}, I0 = {
  key: 0,
  class: "nut-tour-content-top"
}, B0 = { class: "nut-tour-content-inner" }, M0 = { class: "nut-tour-content-bottom" }, L0 = { class: "nut-tour-content-bottom-init" }, P0 = { class: "nut-tour-content-bottom-operate" }, A0 = {
  key: 1,
  class: "nut-tour-content nut-tour-content-tile"
}, E0 = { class: "nut-tour-content-inner" };
function z0(e, t, n, o, l, s) {
  const a = X("Close"), r = X("nut-popover");
  return c(), d("div", {
    class: B(e.classes)
  }, [
    Ie(g("div", {
      class: "nut-tour-masked",
      onClick: t[0] || (t[0] = (...i) => e.handleClickMask && e.handleClickMask(...i))
    }, null, 512), [
      [Me, e.showTour]
    ]),
    (c(!0), d(Z, null, ie(e.steps, (i, f) => (c(), d("div", {
      key: f,
      style: { height: "0" }
    }, [
      f == e.active ? (c(), d(Z, { key: 0 }, [
        e.showTour ? (c(), d("div", {
          key: 0,
          id: "nut-tour-popid",
          class: B(["nut-tour-mask", [e.mask ? "" : "nut-tour-mask-none"]]),
          style: V(e.maskStyle)
        }, null, 6)) : N("", !0),
        ee(r, {
          visible: e.showPopup,
          "onUpdate:visible": t[5] || (t[5] = (p) => e.showPopup = p),
          location: i.location || e.location,
          "target-id": "nut-tour-popid",
          "bg-color": e.bgColor,
          theme: e.theme,
          "close-on-click-outside": !1,
          offset: i.popoverOffset || [0, 12],
          "arrow-offset": i.arrowOffset || 0
        }, {
          content: te(() => [
            T(e.$slots, "default", {}, () => [
              e.type == "step" ? (c(), d("div", D0, [
                e.showTitleBar ? (c(), d("div", I0, [
                  g("div", {
                    onClick: t[1] || (t[1] = (...p) => e.close && e.close(...p))
                  }, [
                    ee(a, { class: "nut-tour-content-top-close" })
                  ])
                ])) : N("", !0),
                g("div", B0, P(i.content), 1),
                g("div", M0, [
                  g("div", L0, P(e.active + 1) + "/" + P(e.steps.length), 1),
                  g("div", P0, [
                    T(e.$slots, "prev-step", {}, () => [
                      e.active != 0 && e.showPrevStep ? (c(), d("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn",
                        onClick: t[2] || (t[2] = (p) => e.changeStep("prev"))
                      }, P(e.prevStepTxt), 1)) : N("", !0)
                    ]),
                    e.steps.length - 1 == e.active ? (c(), d("div", {
                      key: 0,
                      class: "nut-tour-content-bottom-operate-btn active",
                      onClick: t[3] || (t[3] = (...p) => e.close && e.close(...p))
                    }, P(e.completeTxt), 1)) : N("", !0),
                    T(e.$slots, "next-step", {}, () => [
                      e.steps.length - 1 != e.active ? (c(), d("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn active",
                        onClick: t[4] || (t[4] = (p) => e.changeStep("next"))
                      }, P(e.nextStepTxt), 1)) : N("", !0)
                    ])
                  ])
                ])
              ])) : N("", !0),
              e.type == "tile" ? (c(), d("div", A0, [
                g("div", E0, P(i.content), 1)
              ])) : N("", !0)
            ])
          ]),
          _: 2
        }, 1032, ["visible", "location", "bg-color", "theme", "offset", "arrow-offset"])
      ], 64)) : N("", !0)
    ]))), 128))
  ], 2);
}
const V0 = /* @__PURE__ */ le(N0, [["render", z0]]), { create: H0 } = ne("address"), O0 = "NutAddress", R0 = H0({
  components: {
    NutPopup: Ae,
    NutElevator: To,
    Location: La,
    Location2: Va,
    Check: eo,
    Close: zt,
    Left: nn
  },
  inheritAttrs: !1,
  props: pe(G({}, Nt), {
    modelValue: {
      type: Array,
      default: () => []
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
      default: !0
    },
    existAddress: {
      type: Array,
      default: () => []
    },
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
      default: "200px"
    },
    columnsPlaceholder: {
      type: [String, Array],
      default: ""
    }
  }),
  emits: ["update:visible", "update:modelValue", "type", "change", "selected", "close", "closeMask", "switchModule"],
  setup(e, { emit: t }) {
    const n = Se(O0), o = z(null), l = z(null), s = z(e.visible), a = z(e.type), r = z(0), i = z(0), f = z(["province", "city", "country", "town"]), p = z(null), y = z([0, 0, 0, 0]), v = he([]), b = S(() => {
      switch (r.value) {
        case 0:
          return e.province;
        case 1:
          return e.city;
        case 2:
          return e.country;
        default:
          return e.town;
      }
    }), w = (Y) => {
      if (!Array.isArray(Y)) throw new TypeError("params muse be array.");
      if (!Y.length) return [];
      Y.forEach((x) => {
        if (!x.title) {
          console.warn("[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .");
          return;
        }
      });
      const R = [];
      return Y = Y.sort((x, U) => x.title.localeCompare(U.title)), Y.forEach((x) => {
        const U = R.findIndex((se) => se.title === x.title);
        U <= -1 ? R.push({
          title: x.title,
          list: [].concat(x)
        }) : R[U].list.push(x);
      }), R;
    };
    let k = z([]), u = he({});
    const m = z("self"), h = z(20), $ = () => {
      v[0] = e.province || [], v[1] = e.city || [], v[2] = e.country || [], v[3] = e.town || [];
      const Y = e.modelValue, R = Y.length;
      if (R > 0) {
        if (r.value = R - 1, b.value.length == 0) {
          r.value = 0;
          return;
        }
        for (let x = 0; x < R; x++) {
          let U = v[x];
          k.value[x] = U.filter((se) => se.id == Y[x])[0];
        }
        E();
      }
    }, A = (Y, R) => Y && Y.name || r.value < R && Y ? Y.name : e.columnsPlaceholder[R] || n("select"), E = () => {
      L(), _e(() => {
        const Y = l.value && l.value.getElementsByClassName("active")[0];
        if (Y) {
          const R = Y.offsetLeft;
          h.value = R || 20;
        }
      });
    }, I = (Y) => {
      var U;
      const R = r.value;
      i.value = r.value;
      const x = {
        custom: f.value[R]
      };
      k.value[R] = Y, k.value.splice(R + 1, k.value.length - (R + 1)), x.value = Y, ((U = v[R + 1]) == null ? void 0 : U.length) > 0 ? (r.value = R + 1, E(), x.next = f.value[r.value]) : (_(), t("update:modelValue")), t("change", x);
    }, M = (Y, R) => {
      i.value = r.value, A(Y, R) && (r.value = R, E());
    }, L = () => {
      const Y = p.value, R = i.value, x = y.value[r.value];
      Y != null && Y.scrollTop && (y.value[R] = Y == null ? void 0 : Y.scrollTop), _e(() => {
        Y == null || Y.scrollTo({
          top: x,
          behavior: "auto"
        });
      });
    }, C = (Y) => {
      const R = e.existAddress;
      let x = {};
      R.forEach((U) => {
        U && U.selectedAddress && (x = U), U.selectedAddress = !1;
      }), Y.selectedAddress = !0, u = Y, t("selected", x, Y, R), _();
    }, D = () => {
      k.value = [], r.value = 0, E();
    }, _ = (Y = "self") => {
      m.value = Y == "cross" ? "cross" : "self", s.value = !1;
    }, K = () => {
      m.value = "mask";
    }, j = () => {
      const Y = {
        addressIdStr: "",
        addressStr: "",
        province: k.value[0],
        city: k.value[1],
        country: k.value[2],
        town: k.value[3]
      }, R = {
        data: {},
        type: a.value
      };
      ["custom", "custom2"].includes(a.value) ? ([0, 1, 2, 3].forEach((x) => {
        const U = k.value[x];
        Y.addressIdStr += `${x ? "_" : ""}${U && U.id || 0}`, Y.addressStr += U && U.name || "";
      }), R.data = Y) : R.data = u, D(), m.value == "self" ? t("close", R) : t("closeMask", { closeWay: m }), t("update:visible", !1);
    }, oe = () => {
      const Y = a.value;
      a.value = Y == "exist" ? "custom" : "exist", D(), t("switchModule", { type: a.value });
    }, W = (Y, R) => {
      I(R);
    };
    return Q(
      () => e.visible,
      (Y) => {
        s.value = Y;
      }
    ), Q(
      () => s.value,
      (Y) => {
        Y && $();
      }
    ), pe(G({
      showPopup: s,
      privateType: a,
      tabIndex: r,
      tabName: f,
      selectedRegion: k,
      switchModule: oe,
      closeWay: m,
      close: j,
      getTabName: A,
      nextAreaList: I,
      regionLine: o,
      tabRegion: l,
      lineDistance: h,
      changeRegionTab: M,
      selectedExist: C,
      clickOverlay: K,
      handClose: _,
      handleElevatorItem: W,
      initCustomSelected: $
    }, we(e)), {
      translate: n,
      regionList: b,
      transformData: w,
      scrollDom: p
    });
  }
}), F0 = { class: "nut-address" }, W0 = { class: "nut-address__header" }, Y0 = { class: "nut-address__header__title" }, j0 = {
  key: 0,
  class: "nut-address__custom"
}, K0 = {
  ref: "tabRegion",
  class: "nut-address__region"
}, U0 = ["onClick"], X0 = {
  key: 0,
  class: "active nut-address__region-item"
}, q0 = {
  key: 0,
  class: "nut-address__detail"
}, G0 = {
  ref: "scrollDom",
  class: "nut-address__detail-list"
}, Z0 = ["onClick"], J0 = {
  key: 1,
  class: "nut-address__elevator-group"
}, Q0 = {
  key: 1,
  class: "nut-address__exist"
}, x0 = { class: "nut-address__exist-group" }, ev = { class: "nut-address__exist-group-list" }, tv = ["onClick"], nv = { class: "nut-address__exist-item-info" }, ov = {
  key: 0,
  class: "nut-address__exist-item-info-name"
}, lv = {
  key: 1,
  class: "nut-address__exist-item-info-phone"
}, sv = { class: "nut-address__exist-item-info-bottom" }, av = { class: "nut-address__exist-choose-btn" };
function rv(e, t, n, o, l, s) {
  const a = X("Left"), r = X("Close"), i = X("Check"), f = X("nut-elevator"), p = X("Location2"), y = X("nut-popup");
  return c(), J(y, {
    visible: e.showPopup,
    "onUpdate:visible": t[3] || (t[3] = (v) => e.showPopup = v),
    position: "bottom",
    "lock-scroll": e.lockScroll,
    round: e.round,
    "teleport-disable": e.teleportDisable,
    teleport: e.teleport,
    "z-index": e.zIndex,
    onClose: e.close,
    onClickOverlay: e.clickOverlay,
    onOpen: t[4] || (t[4] = (v) => e.closeWay = "self")
  }, {
    default: te(() => [
      g("view", F0, [
        g("view", W0, [
          g("view", {
            class: "nut-address__header-back",
            onClick: t[0] || (t[0] = (...v) => e.switchModule && e.switchModule(...v))
          }, [
            T(e.$slots, "back-icon", {}, () => [
              Ie(ee(a, { size: "14px" }, null, 512), [
                [Me, e.type == "exist" && e.privateType == "custom"]
              ])
            ])
          ]),
          g("view", Y0, P(e.privateType == "custom" ? e.customAddressTitle || e.translate("selectRegion") : e.existAddressTitle || e.translate("deliveryTo")), 1),
          g("view", {
            class: "nut-address__header-close",
            onClick: t[1] || (t[1] = (v) => e.handClose("cross"))
          }, [
            T(e.$slots, "close-icon", {}, () => [
              ee(r, {
                color: "#cccccc",
                size: "14px"
              })
            ])
          ])
        ]),
        ["custom", "custom2"].includes(e.privateType) ? (c(), d("view", j0, [
          g("view", K0, [
            (c(!0), d(Z, null, ie(e.selectedRegion, (v, b) => (c(), d("view", {
              key: b,
              class: B(["nut-address__region-item", b == e.tabIndex ? "active" : ""]),
              onClick: (w) => e.changeRegionTab(v, b)
            }, [
              g("view", null, P(e.getTabName(v, b)), 1)
            ], 10, U0))), 128)),
            e.tabIndex == e.selectedRegion.length ? (c(), d("view", X0, [
              g("view", null, P(e.getTabName(null, e.selectedRegion.length)), 1)
            ])) : N("", !0),
            g("view", {
              ref: "regionLine",
              class: "nut-address__region-line",
              style: V({ left: e.lineDistance + "px" })
            }, null, 4)
          ], 512),
          e.privateType == "custom" ? (c(), d("view", q0, [
            g("ul", G0, [
              (c(!0), d(Z, null, ie(e.regionList, (v, b) => {
                var w, k;
                return c(), d("li", {
                  key: b,
                  class: B(["nut-address__detail-item", ((w = e.selectedRegion[e.tabIndex]) == null ? void 0 : w.id) == v.id ? "active" : ""]),
                  onClick: (u) => e.nextAreaList(v)
                }, [
                  g("div", null, [
                    ((k = e.selectedRegion[e.tabIndex]) == null ? void 0 : k.id) == v.id ? T(e.$slots, "icon", { key: 0 }, () => [
                      ee(i, {
                        class: "nut-address-select-icon",
                        size: "13px"
                      })
                    ]) : N("", !0),
                    ge(" " + P(v.name), 1)
                  ])
                ], 10, Z0);
              }), 128))
            ], 512)
          ])) : (c(), d("view", J0, [
            ee(f, {
              height: e.height,
              "index-list": e.transformData(e.regionList),
              onClickItem: e.handleElevatorItem
            }, null, 8, ["height", "index-list", "onClickItem"])
          ]))
        ])) : (c(), d("view", Q0, [
          g("div", x0, [
            g("ul", ev, [
              (c(!0), d(Z, null, ie(e.existAddress, (v, b) => (c(), d("li", {
                key: b,
                class: B(["nut-address__exist-group-item", v.selectedAddress ? "active" : ""]),
                onClick: (w) => e.selectedExist(v)
              }, [
                v.selectedAddress ? N("", !0) : T(e.$slots, "unselected-icon", { key: 0 }, () => [
                  ee(p, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]),
                v.selectedAddress ? T(e.$slots, "icon", { key: 1 }, () => [
                  ee(i, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]) : N("", !0),
                g("div", nv, [
                  v.name ? (c(), d("div", ov, P(v.name), 1)) : N("", !0),
                  v.phone ? (c(), d("div", lv, P(v.phone), 1)) : N("", !0),
                  g("div", sv, [
                    g("view", null, P(v.provinceName + v.cityName + v.countyName + v.townName + v.addressDetail), 1)
                  ])
                ])
              ], 10, tv))), 128))
            ])
          ]),
          e.isShowCustomAddress ? (c(), d("div", {
            key: 0,
            class: "nut-address__exist-choose",
            onClick: t[2] || (t[2] = (...v) => e.switchModule && e.switchModule(...v))
          }, [
            g("div", av, P(e.customAndExistTitle || e.translate("chooseAnotherAddress")), 1)
          ])) : N("", !0)
        ])),
        T(e.$slots, "bottom")
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "round", "teleport-disable", "teleport", "z-index", "onClose", "onClickOverlay"]);
}
const iv = /* @__PURE__ */ le(R0, [["render", rv]]), { create: uv } = ne("barrage"), cv = uv({
  name: "barrage",
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
      default: !0
    }
  },
  setup(e) {
    const t = (/* @__PURE__ */ new Date()).getTime(), n = !!St().default;
    let o = z(document.createElement("div")), l = z(document.createElement("div")), s = null;
    const a = z(e.danmu), r = z(e.rows), i = z(e.top), f = z(0), p = e.speeds, y = z(0);
    $e(() => {
      v(), n && document.addEventListener("visibilitychange", function() {
        document.visibilityState === "hidden" ? (w(), f.value = 0, b("hidden")) : document.visibilityState === "visible" && v();
      });
    }), Xe(() => {
      a.value = [], w();
    });
    const v = () => {
      y.value = o.value.offsetWidth, n && b("init"), setTimeout(() => {
        var h;
        (h = o.value) == null || h.style.setProperty("--move-distance", `-${y.value}px`), u();
      }, 300);
    }, b = (h) => {
      var I;
      const $ = document.getElementsByClassName("slotBody" + t);
      let A = ((I = $ == null ? void 0 : $[0]) == null ? void 0 : I.children) || [];
      const E = [];
      A && Array.from(A).forEach((M) => {
        h == "init" ? (M.style.opacity = "0", E.push(M)) : (M.classList = "", M.style = {});
      }), h == "init" && (a.value = E);
    }, w = () => {
      s && (clearTimeout(s), s = null);
    };
    Q(
      () => e.danmu,
      (h) => {
        e.danmu.length > 0 && (a.value = [...h]);
      }
    );
    const k = (h) => {
      const $ = f.value % a.value.length;
      !e.loop && f.value === a.value.length ? a.value.splice(a.value.length, 0, h) : a.value.splice($, 0, h);
    }, u = () => {
      w(), s = setTimeout(() => {
        m();
      }, e.frequency);
    }, m = () => {
      var A;
      const h = e.loop ? f.value % a.value.length : f.value;
      let $ = document.createElement("view");
      n && typeof a.value[h] == "object" ? ($ = a.value[h], (A = $ == null ? void 0 : $.classList) == null || A.add("nut-barrage__item")) : ($.innerHTML = a.value[h], $.classList.add("nut-barrage__item"), l.value.appendChild($)), _e(() => {
        var I;
        const E = $.offsetHeight;
        if ((I = $ == null ? void 0 : $.classList) == null || I.add("move"), $.style.animationDuration = `${p}ms`, $.style.top = h % r.value * (E + i.value) + 20 + "px", $.style.opacity = "1", !n) {
          const M = $.offsetWidth;
          $.style.width = M + 20 + "px";
        }
        $.addEventListener("animationend", () => {
          n ? $.classList.remove("move") : l.value.removeChild($);
        }), !(!e.loop && f.value >= a.value.length - 1) && (f.value++, f.value >= a.value.length && (f.value = 0), $.removeEventListener("animationend", () => {
        }), u());
      });
    };
    return { classTime: t, danmuList: a, dmBody: o, dmContainer: l, add: k };
  }
}), dv = {
  ref: "dmBody",
  class: "nut-barrage"
};
function fv(e, t, n, o, l, s) {
  return c(), d("div", dv, [
    g("div", {
      ref: "dmContainer",
      class: B(["dmContainer", e.$slots.default && "slotContainer"])
    }, [
      e.$slots.default ? (c(), d("div", {
        key: 0,
        class: B(["slotBody", "slotBody" + e.classTime])
      }, [
        T(e.$slots, "default")
      ], 2)) : N("", !0)
    ], 2)
  ], 512);
}
const pv = /* @__PURE__ */ le(cv, [["render", fv]]), { create: mv } = ne("signature"), hv = "NutSignature", vv = mv({
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
      default: () => document.getElementsByTagName("body")[0].className.indexOf("nut-theme-dark") == -1 ? "#000" : "#fff"
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
    NutButton: qe
  },
  emits: ["start", "end", "signing", "confirm", "clear"],
  setup(e, { emit: t }) {
    const n = Se(hv), o = z(null), l = z(null), s = S(() => ({
      ["nut-signature"]: !0,
      [`${e.customClass}`]: e.customClass
    })), a = he({
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null,
      isSupportTouch: "ontouchstart" in window,
      events: "ontouchstart" in window ? ["touchstart", "touchmove", "touchend", "touchleave"] : ["mousedown", "mousemove", "mouseup", "mouseleave"]
    }), r = () => {
      let m = document.createElement("canvas");
      return !!(m.getContext && m.getContext("2d"));
    }, i = () => {
      o.value.addEventListener(a.events[0], f, !1);
    }, f = (m) => {
      m.preventDefault(), a.ctx.beginPath(), a.ctx.lineWidth = e.lineWidth, a.ctx.strokeStyle = e.strokeStyle, t("start"), o.value.addEventListener(a.events[1], p, !1), o.value.addEventListener(a.events[2], y, !1), o.value.addEventListener(a.events[3], v, !1);
    }, p = (m) => {
      m.preventDefault();
      let h = a.isSupportTouch ? m.touches[0] : m;
      t("signing", h);
      let $ = o.value.getBoundingClientRect(), A = h.clientX - $.left, E = h.clientY - $.top;
      a.ctx.lineTo(A, E), a.ctx.stroke();
    }, y = (m) => {
      m.preventDefault(), t("end"), o.value.removeEventListener(a.events[1], p, !1), o.value.removeEventListener(a.events[2], y, !1);
    }, v = (m) => {
      m.preventDefault(), o.value.removeEventListener(a.events[1], p, !1), o.value.removeEventListener(a.events[2], y, !1);
    }, b = () => {
      o.value.addEventListener(a.events[2], y, !1), a.ctx.clearRect(0, 0, a.canvasWidth, a.canvasHeight), a.ctx.closePath(), t("clear");
    }, w = () => {
      u(o.value);
    }, k = (m) => {
      if (!m)
        return !0;
      var h = document.createElement("canvas");
      return h.width = m.width, h.height = m.height, (m == null ? void 0 : m.toDataURL()) == h.toDataURL();
    }, u = (m) => {
      let h;
      switch (e.type) {
        case "png":
          h = m.toDataURL("image/png");
          break;
        case "jpg":
          h = m.toDataURL("image/jpeg", 0.8);
          break;
      }
      const $ = k(m) ? "请绘制签名" : m, A = k(m) ? "" : h;
      t("confirm", $, A);
    };
    return $e(() => {
      r() && (a.ctx = o.value.getContext("2d"), a.canvasWidth = l.value.offsetWidth, a.canvasHeight = l.value.offsetHeight, i());
    }), pe(G({}, we(a)), { canvas: o, wrap: l, isCanvasSupported: r, confirm: w, clear: b, classes: s, translate: n });
  }
}), gv = {
  ref: "wrap",
  class: "nut-signature-inner"
}, yv = ["height", "width"], bv = {
  key: 0,
  class: "nut-signature-unsopport"
};
function $v(e, t, n, o, l, s) {
  const a = X("nut-button");
  return c(), d("div", {
    class: B(e.classes)
  }, [
    g("div", gv, [
      Ie(g("canvas", {
        ref: "canvas",
        height: e.canvasHeight,
        width: e.canvasWidth
      }, null, 8, yv), [
        [Me, e.isCanvasSupported()]
      ]),
      e.isCanvasSupported() ? N("", !0) : (c(), d("p", bv, P(e.unSupportTpl || e.translate("unSupportTpl")), 1))
    ], 512),
    ee(a, {
      class: "nut-signature-btn",
      type: "default",
      onClick: t[0] || (t[0] = (r) => e.clear())
    }, {
      default: te(() => [
        ge(P(e.translate("reSign")), 1)
      ]),
      _: 1
    }),
    ee(a, {
      class: "nut-signature-btn",
      type: "primary",
      onClick: t[1] || (t[1] = (r) => e.confirm())
    }, {
      default: te(() => [
        ge(P(e.translate("confirm")), 1)
      ]),
      _: 1
    })
  ], 2);
}
const wv = /* @__PURE__ */ le(vv, [["render", $v]]), { create: kv } = ne("time-select"), Cv = "NutTimeSelect", Sv = kv({
  components: {
    NutPopup: Ae
  },
  props: {
    visible: {
      type: Boolean,
      defalut: !1
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
      default: () => []
    },
    lockScroll: {
      type: [Boolean],
      default: !0
    },
    teleportDisable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:visible", "select"],
  setup: (e, { emit: t }) => {
    const n = Se(Cv), o = S(() => ({
      width: "100%",
      height: e.height
    })), l = S(() => e.currentKey), s = S(() => e.currentTime), a = () => {
      t("update:visible", !1), t("select", s.value);
    };
    return Re("currentKey", l), Re("currentTime", s), {
      popStyle: o,
      close: a,
      translate: n
    };
  }
}), Tv = { class: "nut-time-select" }, _v = { class: "nut-time-select__title" }, Nv = { class: "nut-time-select__title__fixed" }, Dv = { key: 0 }, Iv = { class: "nut-time-select__content" }, Bv = { class: "nut-time-select__content__pannel" }, Mv = { class: "nut-time-select__content__detail" };
function Lv(e, t, n, o, l, s) {
  const a = X("nut-popup");
  return c(), J(a, {
    position: "bottom",
    closeable: "",
    round: "",
    "teleport-disable": e.teleportDisable,
    visible: e.visible,
    style: V(e.popStyle),
    "lock-scroll": e.lockScroll,
    onClickOverlay: e.close,
    onClickCloseIcon: e.close
  }, {
    default: te(() => [
      g("view", Tv, [
        g("view", _v, [
          g("view", Nv, [
            e.$slots.title ? T(e.$slots, "title", { key: 1 }) : (c(), d("span", Dv, P(e.title || e.translate("pickupTime")), 1))
          ])
        ]),
        g("view", Iv, [
          g("view", Bv, [
            T(e.$slots, "pannel")
          ]),
          g("view", Mv, [
            T(e.$slots, "detail")
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["teleport-disable", "visible", "style", "lock-scroll", "onClickOverlay", "onClickCloseIcon"]);
}
const Pv = /* @__PURE__ */ le(Sv, [["render", Lv]]), { componentName: Av, create: Ev } = ne("time-pannel"), zv = Ev({
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
  setup: (e, { emit: t }) => {
    const n = Ve("currentKey"), o = he({
      currentKey: n
    }), l = S(() => ({
      [Av]: !0,
      "nut-time-pannel--curr": o.currentKey == e.pannelKey
    })), s = (a) => {
      t("change", a);
    };
    return pe(G({}, we(o)), {
      classes: l,
      handlePannel: s
    });
  }
});
function Vv(e, t, n, o, l, s) {
  return c(), d("view", {
    class: B(e.classes),
    onClick: t[0] || (t[0] = (a) => e.handlePannel(e.pannelKey))
  }, P(e.name), 3);
}
const Hv = /* @__PURE__ */ le(zv, [["render", Vv]]), { create: Ov } = ne("time-detail"), Rv = Ov({
  name: "timedetail",
  props: {
    times: {
      type: Array,
      default: () => []
    }
  },
  emits: ["select"],
  setup: (e, { emit: t }) => {
    const n = Ve("currentKey"), o = Ve("currentTime"), l = he({
      currentKey: n,
      currentTime: o
    }), s = (i) => {
      let f = l.currentTime.find((p) => p.key == l.currentKey);
      if (f)
        return {
          "nut-time-detail__detail__list__item": !0,
          "nut-time-detail__detail__list__item--curr": f.list.filter((p) => p === i).length > 0
        };
    }, a = S(() => e.times.find((i) => i.key == l.currentKey).list), r = (i) => {
      t("select", i);
    };
    return pe(G({}, we(l)), {
      getClass: s,
      renderData: a,
      handleTime: r
    });
  }
}), Fv = { class: "nut-time-detail" }, Wv = { class: "nut-time-detail__detail nut-time-detail__detail--moring" }, Yv = { class: "nut-time-detail__detail__list" }, jv = ["onClick"];
function Kv(e, t, n, o, l, s) {
  return c(), d("view", Fv, [
    g("view", Wv, [
      g("view", Yv, [
        (c(!0), d(Z, null, ie(e.renderData, (a) => (c(), d("view", {
          key: a,
          class: B(e.getClass(a)),
          onClick: (r) => e.handleTime(a)
        }, P(a), 11, jv))), 128))
      ])
    ])
  ]);
}
const Uv = /* @__PURE__ */ le(Rv, [["render", Kv]]), { create: Xv } = ne("sku-header"), qv = "NutSkuHeader", Gv = Xv({
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  components: {
    NutPrice: Rt
  },
  setup(e, { slots: t }) {
    const n = Se(qv);
    return {
      getSlots: (l) => t[l],
      translate: n
    };
  }
}), Zv = { class: "nut-sku-header" }, Jv = ["src"], Qv = { class: "nut-sku-header-right" }, xv = {
  key: 3,
  class: "nut-sku-header-right-extra"
};
function eg(e, t, n, o, l, s) {
  const a = X("nut-price");
  return c(), d("view", Zv, [
    g("img", {
      class: "nut-sku-header-img",
      src: e.goods.imagePath
    }, null, 8, Jv),
    g("view", Qv, [
      e.getSlots("sku-header-price") ? T(e.$slots, "sku-header-price", { key: 0 }) : (c(), J(a, {
        key: 1,
        price: e.goods.price,
        "need-symbol": !0,
        thousands: !1
      }, null, 8, ["price"])),
      e.getSlots("sku-header-extra") ? T(e.$slots, "sku-header-extra", { key: 2 }) : N("", !0),
      e.goods.skuId && !e.getSlots("sku-header-extra") ? (c(), d("view", xv, P(e.translate("skuId")) + " : " + P(e.goods.skuId), 1)) : N("", !0)
    ])
  ]);
}
const tg = /* @__PURE__ */ le(Gv, [["render", eg]]), { create: ng } = ne("sku-select"), og = ng({
  props: {
    sku: {
      type: Array,
      default: () => []
    }
  },
  emits: ["selectSku"],
  setup(e, { emit: t }) {
    const n = z([]);
    return Q(
      () => e.sku,
      (l) => {
        n.value = [].slice.call(l);
      },
      { deep: !0 }
    ), $e(() => {
      e.sku.length > 0 && (n.value = [].slice.call(e.sku));
    }), {
      skuInfo: n,
      changeSaleChild: (l, s, a, r) => {
        l.checkFlag || l.disable || t("selectSku", {
          sku: l,
          skuIndex: s,
          parentSku: a,
          parentIndex: r
        });
      }
    };
  }
}), lg = { class: "nut-sku-select" }, sg = { class: "nut-sku-select-item-title" }, ag = { class: "nut-sku-select-item-skus" }, rg = ["onClick"];
function ig(e, t, n, o, l, s) {
  return c(), d("view", lg, [
    (c(!0), d(Z, null, ie(e.skuInfo, (a, r) => (c(), d("view", {
      key: a.id,
      class: "nut-sku-select-item"
    }, [
      g("view", sg, P(a.name), 1),
      g("view", ag, [
        (c(!0), d(Z, null, ie(a.list, (i, f) => (c(), d("view", {
          key: i.name,
          class: B(["nut-sku-select-item-skus-sku", [{ active: !i.disable && i.active }, { disable: i.disable }]]),
          onClick: (p) => e.changeSaleChild(i, f, a, r)
        }, P(i.name), 11, rg))), 128))
      ])
    ]))), 128))
  ]);
}
const ug = /* @__PURE__ */ le(og, [["render", ig]]), { create: cg } = ne("sku-stepper"), dg = cg({
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
      default: !1
    },
    // 数量选择左侧文案
    stepperTitle: {
      type: String,
      default: "购买数量"
    }
  },
  emits: ["click", "changeSku", "changeStepper", "clickBtnOptions", "overLimit", "reduce", "add"],
  components: {
    NutInputNumber: Vt
  },
  setup(e, { emit: t }) {
    const n = z(e.stepperMin);
    return $e(() => {
      n.value = e.stepperMin;
    }), {
      goodsCount: n,
      add: (i) => {
        t("add", i);
      },
      reduce: (i) => {
        t("reduce", i);
      },
      overlimit: (i, f) => {
        t("overLimit", {
          action: f,
          value: parseInt(n.value + "")
        });
      },
      getExtraText: () => {
        const { stepperExtraText: i } = e;
        if (i)
          return i === !0 ? "" : i == null ? void 0 : i();
      },
      changeStepper: (i) => {
        n.value = i, t("changeStepper", i);
      }
    };
  }
}), fg = { class: "nut-sku-stepper" }, pg = { class: "nut-sku-stepper-title" }, mg = ["innerHTML"], hg = { class: "nut-sku-stepper-count" };
function vg(e, t, n, o, l, s) {
  const a = X("nut-input-number");
  return c(), d("view", fg, [
    g("view", pg, P(e.stepperTitle), 1),
    g("view", {
      class: "nut-sku-stepper-limit",
      innerHTML: e.getExtraText()
    }, null, 8, mg),
    g("view", hg, [
      ee(a, {
        modelValue: e.goodsCount,
        "onUpdate:modelValue": t[0] || (t[0] = (r) => e.goodsCount = r),
        min: e.stepperMin,
        max: e.stepperMax,
        onAdd: e.add,
        onReduce: e.reduce,
        onOverlimit: e.overlimit,
        onChange: e.changeStepper
      }, null, 8, ["modelValue", "min", "max", "onAdd", "onReduce", "onOverlimit", "onChange"])
    ])
  ]);
}
const gg = /* @__PURE__ */ le(dg, [["render", vg]]), { create: yg } = ne("sku-operate"), bg = yg({
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
  setup(e, { emit: t, slots: n }) {
    return {
      getBtnDesc: (a) => ({
        confirm: e.confirmText,
        cart: e.addCartText,
        buy: e.buyText
      })[a],
      clickBtnOperate: (a) => {
        t("clickBtnOperate", a);
      },
      getSlots: (a) => n[a]
    };
  }
}), $g = {
  key: 0,
  class: "nut-sku-operate"
}, wg = {
  key: 0,
  class: "nut-sku-operate-desc"
}, kg = {
  key: 1,
  class: "nut-sku-operate-btn"
}, Cg = ["onClick"];
function Sg(e, t, n, o, l, s) {
  return e.btnOptions.length > 0 ? (c(), d("view", $g, [
    e.btnExtraText ? (c(), d("view", wg, P(e.btnExtraText), 1)) : N("", !0),
    T(e.$slots, "operate-btn"),
    e.getSlots("operate-btn") ? N("", !0) : (c(), d("view", kg, [
      (c(!0), d(Z, null, ie(e.btnOptions, (a, r) => (c(), d("view", {
        key: r,
        class: B([`nut-sku-operate-btn-${a}`, "nut-sku-operate-btn-item"]),
        onClick: (i) => e.clickBtnOperate(a)
      }, P(e.getBtnDesc(a)), 11, Cg))), 128))
    ]))
  ])) : N("", !0);
}
const Tg = /* @__PURE__ */ le(bg, [["render", Sg]]), { create: _g } = ne("sku"), Ng = "NutSku", Dg = _g({
  props: {
    visible: {
      type: Boolean,
      default: !1
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
      default: !1
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
      default: !0
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
    SkuHeader: tg,
    SkuSelect: ug,
    SkuStepper: gg,
    SkuOperate: Tg,
    NutPopup: Ae
  },
  setup(e, { emit: t, slots: n }) {
    const o = Se(Ng), l = z(e.visible), s = z(e.stepperMin);
    Q(
      () => e.visible,
      (k) => {
        l.value = k;
      }
    ), Q(
      () => l.value,
      (k) => {
        k == !1 && w();
      }
    );
    const a = (k) => n[k], r = (k) => {
      t("selectSku", k);
    }, i = (k) => {
      s.value = k, t("changeStepper", k);
    }, f = (k) => {
      t("add", k);
    }, p = (k) => {
      t("reduce", k);
    }, y = (k) => {
      t("overLimit", k);
    }, v = (k) => {
      t("clickBtnOperate", {
        type: k,
        value: s.value
      });
    }, b = (k) => {
      k == "icon" && t("clickCloseIcon"), k == "overlay" && t("clickOverlay"), k == "close" && t("close"), l.value = !1;
    }, w = () => {
      t("update:visible", !1);
    };
    return {
      showPopup: l,
      closePopup: b,
      selectSku: r,
      changeStepper: i,
      stepperOverLimit: y,
      clickBtnOperate: v,
      add: f,
      reduce: p,
      getSlots: a,
      translate: o
    };
  }
}), Ig = { class: "nut-sku" }, Bg = { class: "nut-sku-content" };
function Mg(e, t, n, o, l, s) {
  const a = X("sku-header"), r = X("SkuSelect"), i = X("sku-stepper"), f = X("sku-operate"), p = X("nut-popup");
  return c(), J(p, {
    visible: e.showPopup,
    "onUpdate:visible": t[0] || (t[0] = (y) => e.showPopup = y),
    position: "bottom",
    closeable: "",
    round: "",
    style: { height: "75%" },
    "lock-scroll": e.lockScroll,
    "catch-move": e.lockScroll,
    onClickCloseIcon: t[1] || (t[1] = (y) => e.closePopup("icon")),
    onClickOverlay: t[2] || (t[2] = (y) => e.closePopup("overlay")),
    onClose: t[3] || (t[3] = (y) => e.closePopup("close"))
  }, {
    default: te(() => [
      g("view", Ig, [
        T(e.$slots, "sku-header"),
        e.getSlots("sku-header") ? N("", !0) : (c(), J(a, {
          key: 0,
          goods: e.goods
        }, Ct({ _: 2 }, [
          e.getSlots("sku-header-price") ? {
            name: "sku-header-price",
            fn: te(() => [
              T(e.$slots, "sku-header-price")
            ]),
            key: "0"
          } : void 0,
          e.getSlots("sku-header-extra") ? {
            name: "sku-header-extra",
            fn: te(() => [
              T(e.$slots, "sku-header-extra")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["goods"])),
        g("view", Bg, [
          T(e.$slots, "sku-select-top"),
          T(e.$slots, "sku-select"),
          e.getSlots("sku-select") ? N("", !0) : (c(), J(r, {
            key: 0,
            sku: e.sku,
            onSelectSku: e.selectSku
          }, null, 8, ["sku", "onSelectSku"])),
          T(e.$slots, "sku-stepper"),
          e.getSlots("sku-stepper") ? N("", !0) : (c(), J(i, {
            key: 1,
            goods: e.goods,
            "stepper-title": e.stepperTitle || e.translate("buyNumber"),
            "stepper-max": e.stepperMax,
            "stepper-min": e.stepperMin,
            "stepper-extra-text": e.stepperExtraText,
            onAdd: e.add,
            onReduce: e.reduce,
            onChangeStepper: e.changeStepper,
            onOverLimit: e.stepperOverLimit
          }, null, 8, ["goods", "stepper-title", "stepper-max", "stepper-min", "stepper-extra-text", "onAdd", "onReduce", "onChangeStepper", "onOverLimit"])),
          T(e.$slots, "sku-stepper-bottom")
        ]),
        ee(f, {
          "btn-extra-text": e.btnExtraText,
          "btn-options": e.btnOptions,
          "buy-text": e.buyText || e.translate("buyNow"),
          "add-cart-text": e.addCartText || e.translate("addToCart"),
          "confirm-text": e.confirmText || e.translate("confirm"),
          onClickBtnOperate: e.clickBtnOperate
        }, Ct({ _: 2 }, [
          e.getSlots("sku-operate") ? {
            name: "operate-btn",
            fn: te(() => [
              T(e.$slots, "sku-operate")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["btn-extra-text", "btn-options", "buy-text", "add-cart-text", "confirm-text", "onClickBtnOperate"])
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "catch-move"]);
}
const Lg = /* @__PURE__ */ le(Dg, [["render", Mg]]), { create: Pg } = ne("card"), Ag = Pg({
  components: {
    NutPrice: Rt,
    NutTag: Sn
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
      default: !0
    }
  }
}), Eg = { class: "nut-card" }, zg = { class: "nut-card__left" }, Vg = ["src"], Hg = { class: "nut-card__right" }, Og = { class: "nut-card__right__title" }, Rg = {
  key: 0,
  class: "nut-card__right__price"
}, Fg = { class: "nut-card__right__other" }, Wg = { class: "nut-card__right__shop" }, Yg = { class: "nut-card__right__shop__name" };
function jg(e, t, n, o, l, s) {
  const a = X("nut-price"), r = X("nut-tag");
  return c(), d("div", Eg, [
    g("div", zg, [
      g("img", {
        src: e.imgUrl,
        alt: ""
      }, null, 8, Vg)
    ]),
    g("div", Hg, [
      g("div", Og, P(e.title), 1),
      T(e.$slots, "prolist"),
      e.isNeedPrice ? (c(), d("div", Rg, [
        T(e.$slots, "price", {}, () => [
          ee(a, { price: e.price }, null, 8, ["price"])
        ]),
        T(e.$slots, "origin", {}, () => [
          ee(a, {
            class: "nut-card__right__price__origin",
            price: e.vipPrice
          }, null, 8, ["price"])
        ])
      ])) : N("", !0),
      g("div", Fg, [
        T(e.$slots, "shop-tag", {}, () => [
          ee(r, { type: "danger" }, {
            default: te(() => [
              ge(P(e.shopDesc), 1)
            ]),
            _: 1
          }),
          ee(r, { plain: "" }, {
            default: te(() => [
              ge(P(e.delivery), 1)
            ]),
            _: 1
          })
        ])
      ]),
      g("div", Wg, [
        g("div", Yg, P(e.shopName), 1),
        T(e.$slots, "footer")
      ])
    ])
  ]);
}
const Kg = /* @__PURE__ */ le(Ag, [["render", jg]]), { create: Ug } = ne("ecard"), Xg = "NutEcard", qg = Ug({
  components: {
    NutInputNumber: Vt
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
  setup(e, { emit: t }) {
    const n = Se(Xg), o = z(null), l = z(null), s = z(""), a = z(e.cardAmountMin), r = z(e.modelValue), i = (v, b) => {
      o.value = b, a.value = e.cardAmountMin, l.value = v.price, t("change", v), t("update:modelValue", v.price);
    }, f = (v) => {
      let w = v.target.value.replace(/[^\d]/g, "");
      s.value = w, l.value = w, Number(w) > e.cardAmountMax && (s.value = e.cardAmountMax, l.value = e.cardAmountMax), Number(w) < e.cardAmountMin && (s.value = e.cardAmountMin, l.value = e.cardAmountMin), t("inputChange", Number(s.value)), t("update:modelValue", Number(s.value));
    }, p = () => {
      o.value = "input", a.value = e.cardAmountMin, l.value = s.value, t("update:modelValue", s.value), t("inputClick");
    }, y = (v) => {
      a.value = v, t("changeStep", a.value, l.value);
    };
    return Q(
      () => e.modelValue,
      (v) => {
        r.value = v;
      }
    ), {
      handleClick: i,
      changeStep: y,
      change: f,
      inputClick: p,
      stepValue: a,
      currentIndex: o,
      inputValue: s,
      money: r,
      translate: n
    };
  }
}), Gg = { class: "nut-ecard" }, Zg = { class: "nut-ecard__title" }, Jg = { class: "nut-ecard__list" }, Qg = ["onClick"], xg = { class: "nut-ecard__list__input--con" }, ey = ["placeholder"], ty = { class: "nut-ecard__list__step" };
function ny(e, t, n, o, l, s) {
  const a = X("nut-input-number");
  return c(), d("view", Gg, [
    g("view", Zg, P(e.chooseText || e.translate("chooseText")), 1),
    g("view", Jg, [
      (c(!0), d(Z, null, ie(e.dataList, (r, i) => (c(), d("view", {
        key: i,
        class: B(["nut-ecard__list__item", e.currentIndex == i ? "active" : ""]),
        onClick: (f) => e.handleClick(r, i)
      }, P(r.price), 11, Qg))), 128)),
      g("view", {
        class: B(["nut-ecard__list__input", e.currentIndex == "input" ? "active" : ""]),
        onClick: t[2] || (t[2] = (...r) => e.inputClick && e.inputClick(...r))
      }, [
        g("view", null, P(e.otherValueText || e.translate("otherValueText")), 1),
        g("view", xg, [
          Ie(g("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (r) => e.inputValue = r),
            class: "nut-ecard__list__input--input",
            type: "text",
            placeholder: e.placeholder || e.translate("placeholder"),
            onInput: t[1] || (t[1] = (...r) => e.change && e.change(...r))
          }, null, 40, ey), [
            [wl, e.inputValue]
          ]),
          ge(" " + P(e.suffix), 1)
        ])
      ], 2),
      g("view", ty, [
        g("view", null, P(e.suffix) + P(e.money), 1),
        ee(a, {
          modelValue: e.stepValue,
          "onUpdate:modelValue": t[3] || (t[3] = (r) => e.stepValue = r),
          min: e.cardBuyMin,
          max: e.cardBuyMax,
          onChange: e.changeStep
        }, null, 8, ["modelValue", "min", "max", "onChange"])
      ])
    ])
  ]);
}
const oy = /* @__PURE__ */ le(qg, [["render", ny]]), { create: ly } = ne("address-list-item"), sy = "NutAddressList", ay = ly({
  components: { Del: no, Edit: Os },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: ["delIcon", "editIcon", "clickItem"],
  setup(e, { emit: t }) {
    const n = Se(sy);
    return {
      delClick: (a) => {
        t("delIcon", a, e.item), a.stopPropagation();
      },
      editClick: (a) => {
        t("editIcon", a, e.item), a.stopPropagation();
      },
      contentsClick: (a) => {
        t("clickItem", a, e.item), a.stopPropagation();
      },
      translate: n
    };
  }
}), ry = { class: "nut-address-list-item__info" }, iy = { class: "nut-address-list-item__info-contact" }, uy = { class: "nut-address-list-item__info-contact-name" }, cy = { class: "nut-address-list-item__info-contact-tel" }, dy = {
  key: 0,
  class: "nut-address-list-item__info-contact-default"
}, fy = { class: "nut-address-list-item__info-handle" }, py = { class: "nut-address-list-item__addr" };
function my(e, t, n, o, l, s) {
  const a = X("Del"), r = X("Edit");
  return c(), d("div", {
    class: "nut-address-list-item",
    onClick: t[0] || (t[0] = (...i) => e.contentsClick && e.contentsClick(...i))
  }, [
    g("div", ry, [
      g("div", iy, [
        T(e.$slots, "content-top", {}, () => [
          g("div", uy, P(e.item.addressName), 1),
          g("div", cy, P(e.item.phone), 1),
          e.item.defaultAddress ? (c(), d("div", dy, P(e.translate("default")), 1)) : N("", !0)
        ])
      ]),
      g("div", fy, [
        T(e.$slots, "content-icon", {}, () => [
          ee(a, {
            name: "del",
            class: "nut-address-list-item__info-handle-del",
            onClick: e.delClick
          }, null, 8, ["onClick"]),
          ee(r, {
            name: "edit",
            class: "nut-address-list-item__info-handle-edit",
            onClick: e.editClick
          }, null, 8, ["onClick"])
        ])
      ])
    ]),
    g("div", py, [
      T(e.$slots, "content-addr", {}, () => [
        ge(P(e.item.fullAddress), 1)
      ])
    ])
  ]);
}
const jn = /* @__PURE__ */ le(ay, [["render", my]]), { create: hy } = ne("address-list-general"), vy = hy({
  props: {
    item: {
      type: Object,
      default: {}
    },
    longPress: {
      type: Boolean,
      default: !1
    },
    swipeEdition: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["delIcon", "editIcon", "clickItem", "longDown", "longCopy", "longSet", "longDel", "swipeDel"],
  components: {
    ItemContents: jn,
    NutButton: qe,
    NutSwipe: gn
  },
  setup(e, { emit: t }) {
    const n = () => Te(jn, {
      item: e.item,
      onDelIcon(E) {
        a(E);
      },
      onEditIcon(E) {
        r(E);
      },
      onClickItem(E) {
        i(E);
      }
    });
    let o = null;
    const l = z(!1), s = z(!1), a = (E) => {
      t("delIcon", E, e.item), E.stopPropagation();
    }, r = (E) => {
      t("editIcon", E, e.item), E.stopPropagation();
    }, i = (E) => {
      l.value || (t("clickItem", E, e.item), E.stopPropagation());
    }, f = (E) => {
      t("longDel", E, e.item), E.stopPropagation();
    }, p = (E) => {
      o = 0, s.value = !0, t("longDown", E, e.item);
    };
    return {
      renderCompontent: n,
      showMaskRef: s,
      clickItem: i,
      editClick: r,
      delClick: a,
      delLongClick: f,
      holddownstart: (E) => {
        o = setTimeout(() => {
          p(E);
        }, 300);
      },
      holddownmove: () => {
        clearTimeout(o);
      },
      holddownend: () => {
        clearTimeout(o);
      },
      copyCLick: (E) => {
        t("longCopy", E, e.item), E.stopPropagation();
      },
      hideMaskClick: () => {
        s.value = !1;
      },
      setDefault: (E) => {
        t("longSet", E, e.item), E.stopPropagation();
      },
      maskClick: (E) => {
        o != 0 && (s.value = !1), E.stopPropagation(), E.preventDefault();
      },
      swipeDelClick: (E) => {
        t("swipeDel", E, e.item), E.stopPropagation();
      },
      swipestart: () => {
        l.value = !1;
      },
      swipemove: () => {
        l.value = !0;
      }
    };
  }
}), gy = {
  key: 0,
  class: "nut-address-list-general"
}, yy = { class: "nut-address-list-swipe" };
function by(e, t, n, o, l, s) {
  const a = X("nut-button"), r = X("nut-swipe");
  return e.swipeEdition ? (c(), J(r, { key: 1 }, {
    right: te(() => [
      T(e.$slots, "swipe-right-btn", {}, () => [
        ee(a, {
          shape: "square",
          style: { height: "100%" },
          type: "danger",
          onClick: e.swipeDelClick
        }, {
          default: te(() => t[5] || (t[5] = [
            ge("删除")
          ])),
          _: 1
        }, 8, ["onClick"])
      ])
    ]),
    default: te(() => [
      g("div", yy, [
        (c(), J(ze(e.renderCompontent()), {
          onTouchmove: e.swipemove,
          onTouchstart: e.swipestart
        }, {
          "content-top": te(() => [
            T(e.$slots, "content-info")
          ]),
          "content-icon": te(() => [
            T(e.$slots, "content-icons")
          ]),
          "content-addr": te(() => [
            T(e.$slots, "content-addrs")
          ]),
          _: 3
        }, 40, ["onTouchmove", "onTouchstart"]))
      ])
    ]),
    _: 3
  })) : (c(), d("div", gy, [
    (c(), J(ze(e.renderCompontent()), {
      onTouchstart: e.holddownstart,
      onTouchend: e.holddownend,
      onTouchmove: e.holddownmove
    }, {
      "content-top": te(() => [
        T(e.$slots, "content-info")
      ]),
      "content-icon": te(() => [
        T(e.$slots, "content-icons")
      ]),
      "content-addr": te(() => [
        T(e.$slots, "content-addrs")
      ]),
      _: 3
    }, 40, ["onTouchstart", "onTouchend", "onTouchmove"])),
    e.longPress && e.showMaskRef ? (c(), d("div", {
      key: 0,
      class: "nut-address-list-general__mask",
      onClick: t[3] || (t[3] = (...i) => e.maskClick && e.maskClick(...i))
    }, [
      T(e.$slots, "longpress-all", {}, () => [
        g("div", {
          class: "nut-address-list-general__mask-copy",
          onClick: t[0] || (t[0] = (...i) => e.copyCLick && e.copyCLick(...i))
        }, " 复制地址 "),
        g("div", {
          class: "nut-address-list-general__mask-set",
          onClick: t[1] || (t[1] = (...i) => e.setDefault && e.setDefault(...i))
        }, " 设置默认 "),
        g("div", {
          class: "nut-address-list-general__mask-del",
          onClick: t[2] || (t[2] = (...i) => e.delLongClick && e.delLongClick(...i))
        }, " 删除地址 ")
      ])
    ])) : N("", !0),
    e.showMaskRef ? (c(), d("div", {
      key: 1,
      class: "nut-address-list__mask-bottom",
      onClick: t[4] || (t[4] = (...i) => e.hideMaskClick && e.hideMaskClick(...i))
    })) : N("", !0)
  ]));
}
const $y = /* @__PURE__ */ le(vy, [["render", by]]), { create: wy } = ne("address-list"), ky = "NutAddressList", Cy = wy({
  props: {
    data: {
      type: Array,
      default: []
    },
    longPress: {
      type: Boolean,
      default: !1
    },
    swipeEdition: {
      type: Boolean,
      default: !1
    },
    showBottomButton: {
      type: Boolean,
      default: !0
    },
    dataOptions: {
      type: Object,
      default: {}
    }
  },
  components: {
    GeneralShell: $y,
    NutButton: qe
  },
  emits: ["delIcon", "editIcon", "clickItem", "longCopy", "longSet", "longDel", "swipeDel", "add"],
  setup(e, { emit: t }) {
    const n = Se(ky), o = z([]), l = he({
      id: 2,
      addressName: "姓名",
      phone: "123****4567",
      defaultAddress: !1,
      fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试"
    }), s = () => {
      Object.keys(e.dataOptions).length > 0 && (o.value = e.data.map((w) => Nl(l, w, e.dataOptions)));
    };
    Q(
      () => e.data,
      () => s(),
      { deep: !0 }
    );
    const a = (w, k) => {
      t("delIcon", w, k), w.stopPropagation();
    }, r = (w, k) => {
      t("editIcon", w, k), w.stopPropagation();
    }, i = (w, k) => {
      t("clickItem", w, k), w.stopPropagation();
    }, f = (w, k) => {
      t("longCopy", w, k), w.stopPropagation();
    }, p = (w, k) => {
      t("longSet", w, k), w.stopPropagation();
    }, y = (w, k) => {
      t("longDel", w, k), w.stopPropagation();
    }, v = (w, k) => {
      t("swipeDel", w, k), w.stopPropagation();
    }, b = (w) => {
      t("add", w), w.stopPropagation();
    };
    return $e(() => {
      s();
    }), {
      clickDelIcon: a,
      clickEditIcon: r,
      clickContentItem: i,
      clickLongCopy: f,
      clickLongSet: p,
      clickLongDel: y,
      clickSwipeDel: v,
      addAddress: b,
      dataArray: o,
      translate: n
    };
  }
}), Sy = { class: "nut-address-list" };
function Ty(e, t, n, o, l, s) {
  const a = X("general-shell"), r = X("nut-button");
  return c(), d("div", Sy, [
    (c(!0), d(Z, null, ie(e.dataArray, (i, f) => (c(), J(a, {
      key: f,
      item: i,
      "long-press": e.longPress,
      "swipe-edition": e.swipeEdition,
      onDelIcon: e.clickDelIcon,
      onEditIcon: e.clickEditIcon,
      onClickItem: e.clickContentItem,
      onSwipeDel: e.clickSwipeDel,
      onLongCopy: e.clickLongCopy,
      onLongSet: e.clickLongSet,
      onLongDel: e.clickLongDel
    }, Ct({
      "content-info": te(() => [
        T(e.$slots, "item-infos", { item: i })
      ]),
      "content-icons": te(() => [
        T(e.$slots, "item-icon", { item: i })
      ]),
      "content-addrs": te(() => [
        T(e.$slots, "item-addr", { item: i })
      ]),
      _: 2
    }, [
      e.longPress ? {
        name: "longpress-all",
        fn: te(() => [
          T(e.$slots, "longpress-btns", { item: i })
        ]),
        key: "0"
      } : void 0,
      e.swipeEdition ? {
        name: "swipe-right-btn",
        fn: te(() => [
          T(e.$slots, "swipe-right", { item: i })
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["item", "long-press", "swipe-edition", "onDelIcon", "onEditIcon", "onClickItem", "onSwipeDel", "onLongCopy", "onLongSet", "onLongDel"]))), 128)),
    e.showBottomButton ? (c(), d("div", {
      key: 0,
      class: "nut-address-list__bottom",
      onClick: t[0] || (t[0] = (...i) => e.addAddress && e.addAddress(...i))
    }, [
      ee(r, {
        block: "",
        type: "danger"
      }, {
        default: te(() => [
          ge(P(e.translate("addAddress")), 1)
        ]),
        _: 1
      })
    ])) : N("", !0)
  ]);
}
const _y = /* @__PURE__ */ le(Cy, [["render", Ty]]), { create: Ny } = ne("category"), Dy = Ny({
  props: {
    // 分类模式
    type: {
      type: String,
      default: "classify"
    },
    // 左侧导航栏
    category: {
      type: Array,
      default: []
    }
  },
  setup(e, { emit: t }) {
    const n = z(0), o = z(!1);
    return {
      getChildList: (s) => {
        n.value = s, t("change", s);
      },
      checkIndex: n,
      categoryLeft: o
    };
  }
}), Iy = { class: "nut-category" }, By = { class: "nut-category__cateList" }, My = { key: 0 }, Ly = ["onClick"];
function Py(e, t, n, o, l, s) {
  return c(), d("div", Iy, [
    g("div", By, [
      e.type == "classify" || e.type == "text" ? (c(), d("div", My, [
        (c(!0), d(Z, null, ie(e.category, (a, r) => (c(), d("div", {
          key: r,
          class: "nut-category__cateListLeft"
        }, [
          g("div", {
            class: B([e.checkIndex == r ? "nut-category__cateListItemChecked" : "nut-category__cateListItem"]),
            onClick: (i) => e.getChildList(r)
          }, P(a.catName), 11, Ly)
        ]))), 128))
      ])) : N("", !0),
      T(e.$slots, "default")
    ])
  ]);
}
const Ay = /* @__PURE__ */ le(Dy, [["render", Py]]), { create: Ey } = ne("category-pane"), zy = Ey({
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
  setup(e, { emit: t }) {
    return {
      onChange: (o) => {
        t("onChange", o);
      }
    };
  }
}), Vy = { class: "nut-category-pane" }, Hy = {
  key: 0,
  class: "nut-category-pane__cateListRight"
}, Oy = { class: "nut-category-pane__childTitle" }, Ry = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, Fy = ["onClick"], Wy = ["src"], Yy = { class: "nut-category-pane__skuImg" }, jy = {
  key: 1,
  class: "nut-category-pane__cateListRight"
}, Ky = { class: "nut-category-pane__childTitle" }, Uy = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, Xy = ["onClick"], qy = { class: "nut-category-pane__skuName" }, Gy = {
  key: 2,
  class: "nut-category-pane__selfItemList"
}, Zy = ["onClick"];
function Jy(e, t, n, o, l, s) {
  return c(), d("div", Vy, [
    e.type == "classify" ? (c(), d("div", Hy, [
      (c(!0), d(Z, null, ie(e.categoryChild, (a, r) => (c(), d("div", { key: r }, [
        g("div", Oy, P(a == null ? void 0 : a.catName), 1),
        (a == null ? void 0 : a.catType) == 1 ? (c(), d("div", Ry, [
          (c(!0), d(Z, null, ie(a.childCateList, (i, f) => (c(), d("div", {
            key: f,
            class: "nut-category-pane__childItem",
            onClick: (p) => e.onChange(i)
          }, [
            g("img", {
              class: "nut-category-pane__childImg",
              src: i.backImg
            }, null, 8, Wy),
            g("div", Yy, P(i == null ? void 0 : i.catName), 1)
          ], 8, Fy))), 128))
        ])) : N("", !0)
      ]))), 128))
    ])) : N("", !0),
    e.type == "text" ? (c(), d("div", jy, [
      (c(!0), d(Z, null, ie(e.categoryChild, (a, r) => (c(), d("div", { key: r }, [
        g("div", Ky, P(a == null ? void 0 : a.catName), 1),
        (a == null ? void 0 : a.catType) == 1 ? (c(), d("div", Uy, [
          (c(!0), d(Z, null, ie(a.childCateList, (i, f) => (c(), d("div", {
            key: f,
            class: "nut-category-pane__childItem",
            onClick: (p) => e.onChange(i)
          }, [
            g("div", qy, P(i == null ? void 0 : i.catName), 1)
          ], 8, Xy))), 128))
        ])) : N("", !0)
      ]))), 128))
    ])) : N("", !0),
    e.type == "custom" ? (c(), d("div", Gy, [
      (c(!0), d(Z, null, ie(e.customCategory, (a, r) => (c(), d("div", {
        key: r,
        class: "nut-category-pane__skuName",
        onClick: (i) => e.onChange(a)
      }, P(a == null ? void 0 : a.catName), 9, Zy))), 128))
    ])) : N("", !0)
  ]);
}
const Qy = /* @__PURE__ */ le(zy, [["render", Jy]]), { create: xy } = ne("comment-header"), e2 = xy({
  components: {
    NutRate: pn
  },
  props: {
    type: {
      type: String,
      default: "default"
      // default，complex
    },
    info: {
      type: Object,
      default: () => {
      }
    },
    labels: {
      type: Function,
      default: () => ""
    }
  },
  emits: ["handleClick"],
  setup(e, { emit: t }) {
    return { handleClick: () => {
      t("handleClick");
    } };
  }
}), t2 = { class: "nut-comment-header__user" }, n2 = { class: "nut-comment-header__user-avter" }, o2 = ["src"], l2 = { class: "nut-comment-header__user-score" }, s2 = {
  key: 0,
  class: "nut-comment-header__time"
};
function a2(e, t, n, o, l, s) {
  const a = X("nut-rate");
  return c(), d("view", null, [
    e.info ? (c(), d("view", {
      key: 0,
      class: "nut-comment-header",
      onClick: t[1] || (t[1] = (...r) => e.handleClick && e.handleClick(...r))
    }, [
      g("view", t2, [
        g("view", n2, [
          e.info.avatar ? (c(), d("img", {
            key: 0,
            src: e.info.avatar
          }, null, 8, o2)) : N("", !0)
        ]),
        e.type == "default" ? (c(), d("view", {
          key: 0,
          class: B([`nut-comment-header__user-${e.type}`])
        }, [
          g("view", {
            class: B([`nut-comment-header__user-${e.type}-name`])
          }, [
            g("span", null, P(e.info.nickName), 1),
            T(e.$slots, "labels")
          ], 2),
          g("view", l2, [
            ee(a, {
              modelValue: e.info.score,
              "onUpdate:modelValue": t[0] || (t[0] = (r) => e.info.score = r),
              size: "12",
              spacing: "5",
              readonly: "",
              onChange: e.handleClick
            }, null, 8, ["modelValue", "onChange"])
          ])
        ], 2)) : (c(), d("view", {
          key: 1,
          class: B([`nut-comment-header__user-${e.type}`])
        }, [
          g("span", {
            class: B([`nut-comment-header__user-${e.type}-name`])
          }, P(e.info.nickName), 3),
          T(e.$slots, "labels")
        ], 2))
      ]),
      e.info.time ? (c(), d("view", s2, P(e.info.time), 1)) : N("", !0)
    ])) : N("", !0),
    e.type == "complex" ? (c(), d("view", {
      key: 1,
      class: B([`nut-comment-header__${e.type}-score`])
    }, [
      ee(a, {
        modelValue: e.info.score,
        "onUpdate:modelValue": t[2] || (t[2] = (r) => e.info.score = r),
        size: "12",
        spacing: "3",
        readonly: ""
      }, null, 8, ["modelValue"]),
      g("i", {
        class: B([`nut-comment-header__${e.type}-score-i`])
      }, null, 2),
      g("view", {
        class: B([`nut-comment-header__${e.type}-score-size`])
      }, P(e.info.size), 3)
    ], 2)) : N("", !0)
  ]);
}
const r2 = /* @__PURE__ */ le(e2, [["render", a2]]), { create: i2 } = ne("comment-images"), u2 = i2({
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
  components: { Right: on },
  emits: ["click", "clickImages"],
  setup(e, { emit: t }) {
    const n = z(!1), o = z(1), l = z([]);
    return Q(
      () => [e.videos, e.images],
      (a) => {
        a[0].length > 0 && a[0].forEach((r) => {
          r.type = "video";
        }), l.value = a[0].concat(a[1]);
      },
      { deep: !0 }
    ), $e(() => {
      e.videos.length > 0 && e.videos.forEach((a) => {
        a.type = "video";
      }), l.value = e.videos.concat(e.images);
    }), { isShowImage: n, initIndex: o, showImages: (a, r) => {
      const { videos: i, images: f } = e, p = a == "img" ? r - i.length : r;
      t("clickImages", {
        type: a,
        index: p,
        value: a == "img" ? f[p] : i[p]
      });
    }, totalImages: l };
  }
}), c2 = ["onClick"], d2 = ["src"], f2 = ["onClick"], p2 = ["src"], m2 = {
  key: 0,
  class: "nut-comment-images__mask"
};
function h2(e, t, n, o, l, s) {
  const a = X("Right");
  return c(), d("view", {
    class: B(`nut-comment-images nut-comment-images--${e.type}`)
  }, [
    (c(!0), d(Z, null, ie(e.videos, (r, i) => (c(), d("view", {
      key: r.id,
      class: "nut-comment-images__item nut-comment-images__item--video",
      onClick: (f) => e.showImages("video", i)
    }, [
      g("img", {
        src: r.mainUrl
      }, null, 8, d2),
      t[0] || (t[0] = g("view", { class: "nut-comment-images__play" }, null, -1))
    ], 8, c2))), 128)),
    (c(!0), d(Z, null, ie(e.images, (r, i) => (c(), d(Z, { key: i }, [
      e.type == "multi" && e.videos.length + i < 9 || e.type != "multi" ? (c(), d("view", {
        key: 0,
        class: "nut-comment-images__item nut-comment-images__item--imgbox",
        onClick: (f) => e.showImages("img", i + e.videos.length)
      }, [
        g("img", {
          src: r.smallImgUrl ? r.smallImgUrl : r.imgUrl
        }, null, 8, p2),
        e.type == "multi" && e.totalImages.length > 9 && e.videos.length + i > 7 ? (c(), d("view", m2, [
          g("span", null, "共 " + P(e.totalImages.length) + " 张", 1),
          ee(a, { style: { width: "12px" } })
        ])) : N("", !0)
      ], 8, f2)) : N("", !0)
    ], 64))), 128))
  ], 2);
}
const v2 = /* @__PURE__ */ le(u2, [["render", h2]]), { create: g2 } = ne("comment-bottom"), y2 = "NutComment", b2 = g2({
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
  components: { Fabulous: js, Comment: _s, MoreX: Qa },
  emits: ["clickOperate", "handleClick"],
  setup(e, { emit: t }) {
    const n = Se(y2), o = z(!1), l = z([]);
    return $e(() => {
      const r = ["replay", "like", "more"];
      e.operation && e.operation.forEach((i) => {
        r.includes(i) && l.value.push(i);
      });
    }), { showPopver: o, operate: (r) => {
      r == "more" && (o.value = !o.value), t("clickOperate", r);
    }, mergeOp: l, handleClick: () => {
      t("handleClick");
    }, translate: n };
  }
}), $2 = { class: "nut-comment-bottom" }, w2 = { key: 0 }, k2 = { class: "nut-comment-bottom__cpx" }, C2 = ["onClick"];
function S2(e, t, n, o, l, s) {
  const a = X("Fabulous"), r = X("Comment"), i = X("MoreX");
  return c(), d("view", $2, [
    g("view", {
      class: "nut-comment-bottom__lable",
      onClick: t[0] || (t[0] = (...f) => e.handleClick && e.handleClick(...f))
    }, [
      e.type != "complex" ? (c(), d("span", w2, P(e.info.size), 1)) : N("", !0)
    ]),
    g("view", k2, [
      (c(!0), d(Z, null, ie(e.mergeOp, (f, p) => (c(), d("view", {
        key: p,
        class: B(["nut-comment-bottom__cpx-item", `nut-comment-bottom__cpx-item--${f}`]),
        onClick: (y) => e.operate(f)
      }, [
        f != "more" ? (c(), d(Z, { key: 0 }, [
          g("span", null, P(e.info[f]), 1),
          f == "like" ? (c(), J(a, { key: 0 })) : (c(), J(r, { key: 1 }))
        ], 64)) : N("", !0),
        f == "more" ? (c(), d(Z, { key: 1 }, [
          ee(i),
          e.showPopver ? (c(), d("view", {
            key: 0,
            class: "nut-comment-bottom__cpx-item-popover",
            onClick: t[1] || (t[1] = (y) => e.operate("popover"))
          }, P(e.translate("complaintsText")), 1)) : N("", !0)
        ], 64)) : N("", !0)
      ], 10, C2))), 128))
    ])
  ]);
}
const T2 = /* @__PURE__ */ le(b2, [["render", S2]]), { create: _2 } = ne("comment"), N2 = "NutComment", D2 = _2({
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
      default: !1
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
    CommentHeader: r2,
    CommentImages: v2,
    CommentBottom: T2,
    Right: on
  },
  emits: ["click", "clickImages", "clickOperate"],
  setup(e, { emit: t }) {
    const n = Se(N2);
    return { conEllipsis: S(() => e.ellipsis ? e.ellipsis : e.headerType == "complex" ? 6 : 2), clickOperate: (r) => {
      t("clickOperate", r);
    }, handleClick: () => {
      t("click", e.info);
    }, clickImages: (r) => {
      t("clickImages", r);
    }, translate: n };
  }
}), I2 = {
  key: 0,
  class: "nut-comment"
}, B2 = ["innerHTML"], M2 = { class: "nut-comment__follow-title" }, L2 = { class: "nut-comment__follow-com" };
function P2(e, t, n, o, l, s) {
  const a = X("comment-header"), r = X("comment-images"), i = X("Right"), f = X("comment-bottom");
  return e.info && Object.keys(e.info) ? (c(), d("view", I2, [
    ee(a, {
      type: e.headerType,
      info: e.info,
      labels: e.labels,
      onHandleClick: e.handleClick
    }, {
      labels: te(() => [
        T(e.$slots, "comment-labels")
      ]),
      _: 3
    }, 8, ["type", "info", "labels", "onHandleClick"]),
    T(e.$slots, "feature"),
    g("view", {
      class: "nut-comment__main",
      style: V(`-webkit-line-clamp:${e.conEllipsis}`),
      onClick: t[0] || (t[0] = (...p) => e.handleClick && e.handleClick(...p)),
      innerHTML: e.info.content
    }, null, 12, B2),
    ee(r, {
      images: e.images,
      videos: e.videos,
      type: e.imagesRows,
      onClickImages: e.clickImages
    }, null, 8, ["images", "videos", "type", "onClickImages"]),
    e.follow && e.follow.days > 0 ? (c(), d("view", {
      key: 0,
      class: "nut-comment__follow",
      onClick: t[2] || (t[2] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      g("view", M2, P(e.translate("additionalReview", e.follow.days)), 1),
      g("view", L2, P(e.follow.content), 1),
      e.follow.images && e.follow.images.length > 0 ? (c(), d("view", {
        key: 0,
        class: "nut-comment__follow-img",
        onClick: t[1] || (t[1] = (p) => e.clickImages(e.follow.images))
      }, [
        ge(P(e.translate("additionalImages", e.follow.images.length)) + " ", 1),
        ee(i, { width: "12px" })
      ])) : N("", !0)
    ])) : N("", !0),
    ee(f, {
      type: e.headerType,
      info: e.info,
      operation: e.operation,
      onClickOperate: e.clickOperate,
      onHandleClick: e.handleClick
    }, null, 8, ["type", "info", "operation", "onClickOperate", "onHandleClick"]),
    T(e.$slots, "comment-shop-reply")
  ])) : N("", !0);
}
const A2 = /* @__PURE__ */ le(D2, [["render", P2]]), E2 = { class: "nut-invoice" }, z2 = {
  key: 0,
  class: "nut-invoice__submit"
}, dl = /* @__PURE__ */ ve({
  name: "NutInvoice",
  __name: "invoice",
  props: {
    data: { default: () => [] },
    formValue: { default: () => {
    } },
    submit: { type: Boolean, default: !0 }
  },
  emits: ["submit", "scrollBottom"],
  setup(e, { emit: t }) {
    const n = t, o = z(), l = () => {
      o.value.validate().then(({ valid: s, errors: a }) => {
        n("submit", s, a);
      });
    };
    return (s, a) => (c(), d("div", E2, [
      ee(ce(hn), {
        ref_key: "formRef",
        ref: o,
        "model-value": s.formValue
      }, {
        default: te(() => [
          (c(!0), d(Z, null, ie(s.data, (r, i) => (c(), J(ce(vn), {
            key: i,
            label: r.label,
            required: r.required,
            rules: r.rules,
            prop: r.formItemProp
          }, {
            default: te(() => [
              r.type === "radio" ? (c(), J(ce(fn), {
                key: 0,
                modelValue: s.formValue[r.formItemProp],
                "onUpdate:modelValue": (f) => s.formValue[r.formItemProp] = f
              }, {
                default: te(() => [
                  (c(!0), d(Z, null, ie(r.radioLabel, (f, p) => (c(), J(ce(dn), {
                    key: p,
                    shape: "button",
                    label: f.label
                  }, {
                    default: te(() => [
                      ge(P(f.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]))), 128))
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue"])) : (c(), J(ce(cn), {
                key: 1,
                modelValue: s.formValue[r.formItemProp],
                "onUpdate:modelValue": (f) => s.formValue[r.formItemProp] = f,
                class: "nut-input-text",
                placeholder: r.placeholder,
                type: "text"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
            ]),
            _: 2
          }, 1032, ["label", "required", "rules", "prop"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value"]),
      s.submit ? (c(), d("div", z2, [
        ee(ce(qe), {
          type: "primary",
          block: "",
          onClick: l
        }, {
          default: te(() => a[0] || (a[0] = [
            ge("提交审批")
          ])),
          _: 1
        })
      ])) : N("", !0)
    ]));
  }
});
ye(dl);
const { create: V2 } = ne("avatar-cropper"), H2 = V2({
  components: {
    NutButton: qe,
    Refresh2: Dr,
    Retweet: Pr
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
    }
  },
  emits: ["confirm", "cancel"],
  setup(e, { emit: t, expose: n }) {
    const o = he({
      visible: !1,
      defScale: 1,
      scale: 1,
      angle: 0,
      moveX: 0,
      moveY: 0,
      moving: !1,
      zooming: !1,
      displayWidth: 0,
      displayHeight: 0
    }), l = {
      img: new Image(),
      // 规定要使用的图像
      sx: 0,
      // 开始剪切的 x 坐标位置
      sy: 0,
      // 开始剪切的 y 坐标位置
      swidth: 0,
      // 被剪切区域的宽度
      sheight: 0,
      // 被剪切区域的高度
      x: 0,
      // 在画布上x的坐标位置
      y: 0,
      // 在画布上y的坐标位置
      width: 0,
      // 要使用的图像的宽度
      height: 0
      // 要使用的图像的高度
    }, s = z(G({}, l)), a = z(), r = z(), i = z(), f = window.devicePixelRatio || 1, p = Qe(), y = S(() => o.angle === 90 || o.angle === 270), v = S(() => {
      const { swidth: U } = s.value, se = U / f + "px";
      return {
        width: se,
        height: se
      };
    }), b = S(() => {
      const { displayWidth: U, scale: se } = o, { swidth: ue, height: fe } = s.value;
      return y.value ? Math.max(0, (fe * se - ue) / 2) : Math.max(0, (U * se - ue) / 2);
    }), w = S(() => {
      const { displayWidth: U, scale: se } = o, { swidth: ue, height: fe } = s.value;
      return y.value ? Math.max(0, (U * se - ue) / 2) : Math.max(0, (fe * se - ue) / 2);
    }), k = (U) => new Promise((se) => {
      const ue = new FileReader();
      ue.onloadend = (fe) => se(fe.target.result), ue.readAsDataURL(U);
    }), u = (U) => new Promise((se) => {
      const ue = new Image();
      ue.onload = () => se(ue), ue.src = U;
    }), m = () => {
      const { img: U, width: se, height: ue, x: fe, y: Ce, swidth: Le } = s.value, { moveX: O, moveY: q, scale: ae } = o, re = r.value;
      if (!re) return;
      const me = re.getContext("2d");
      re.width = o.displayWidth, re.height = o.displayHeight, me.clearRect(0, 0, re.width, re.height), me.fillStyle = "#666", me.fillRect(0, 0, re.width, re.height), me.fillStyle = "#000", me.fillRect(e.space * f, (re.height - Le) / 2, Le, Le), me.translate(re.width / 2 + O, re.height / 2 + q), me.rotate(Math.PI / 180 * o.angle), me.scale(ae, ae), me.drawImage(U, fe, Ce, se, ue);
    }, h = (U) => {
      const se = Ye(a.value), { width: ue, height: fe } = se, Ce = o.displayWidth = ue * f, Le = o.displayHeight = fe * f;
      let O = G({}, l);
      const { width: q, height: ae } = U;
      O.img = U;
      const re = ae > q, me = re ? q / ae : ae / q;
      O.width = Ce, O.height = re ? Ce / me : Ce * me, O.x = -O.width / 2, O.y = -O.height / 2, O.swidth = Ce - e.space * 2 * f, O.sheight = re ? O.swidth / me : O.swidth * me, O.sx = e.space * f, O.sy = (Le - O.swidth) / 2, s.value = O, o.defScale = O.swidth / (re ? O.width : O.height), A();
    }, $ = (U) => Ue(this, null, function* () {
      o.visible = !0;
      const se = U.target;
      let { files: ue } = se;
      if (!(ue != null && ue.length)) return;
      const fe = yield k(ue[0]), Ce = yield u(fe);
      h(Ce), m();
    }), A = () => {
      E(o.defScale), o.moveX = 0, o.moveY = 0, o.angle = 0;
    }, E = (U) => {
      U = Ee(U, 0.3, +e.maxZoom + 1), U !== o.scale && (o.scale = U);
    }, I = (U) => Math.sqrt(vt(U[0].clientX - U[1].clientX, 2) + vt(U[0].clientY - U[1].clientY, 2));
    let M, L, C, D, _;
    const K = (U) => {
      const { touches: se } = U, { offsetX: ue } = p;
      p.start(U), _ = se.length, M = o.moveX, L = o.moveY, o.moving = _ === 1, o.zooming = _ === 2 && !ue.value, o.zooming && (C = o.scale, D = I(U.touches));
    }, j = (U) => {
      const { touches: se } = U;
      if (p.move(U), (o.moving || o.zooming) && ft(U, !0), o.moving) {
        const { deltaX: ue, deltaY: fe } = p, Ce = ue.value * o.scale + M, Le = fe.value * o.scale + L;
        o.moveX = Ee(Ce, -b.value, b.value), o.moveY = Ee(Le, -w.value, w.value);
      }
      if (o.zooming && se.length === 2) {
        const ue = I(se), fe = C * ue / D;
        E(fe);
      }
    }, oe = (U) => {
      let se = !1;
      (o.moving || o.zooming) && (se = !(o.moving && M === o.moveX && L === o.moveY), U.touches.length || (o.zooming && (o.moveX = Ee(o.moveX, -b.value, b.value), o.moveY = Ee(o.moveY, -w.value, w.value), o.zooming = !1), o.moving = !1, M = 0, L = 0, C = o.defScale, o.scale < o.defScale && A(), o.scale > e.maxZoom && (o.scale = +e.maxZoom))), ft(U, se), p.reset();
    }, W = () => {
      o.angle = 0;
    }, Y = () => {
      if (o.angle === 270) {
        o.angle = 0;
        return;
      }
      o.angle += 90;
    }, R = (U = !0) => {
      o.visible = !1, A(), i.value.value = "", U && t("cancel");
    }, x = () => {
      const U = r.value, { sx: se, sy: ue, swidth: fe } = s.value, Ce = fe, Le = fe, O = document.createElement("canvas"), q = O.getContext("2d");
      O.width = Ce, O.height = Le, U && q.drawImage(U, se, ue, Ce, Le, 0, 0, Ce, Le);
      const ae = O.toDataURL("image/png");
      t("confirm", ae), R(!1);
    };
    return Q(
      () => o.scale,
      () => {
        m();
      }
    ), Q(
      () => o.angle,
      () => {
        Math.abs(o.moveX) > b.value && (o.moveX = b.value), Math.abs(o.moveY) > w.value && (o.moveY = w.value), m();
      }
    ), Q(
      () => o.moveX,
      () => {
        m();
      }
    ), Q(
      () => o.moveY,
      () => {
        m();
      }
    ), n({
      cancel: R,
      reset: W,
      rotate: Y,
      confirm: x
    }), pe(G({}, we(o)), {
      cropperPopupRef: a,
      canvasRef: r,
      inputImageRef: i,
      highlightStyle: v,
      inputImageChange: $,
      reset: W,
      rotate: Y,
      cancel: R,
      confirm: x,
      onTouchStart: K,
      onTouchMove: j,
      onTouchEnd: oe
    });
  }
}), O2 = ["data-edit-text"], R2 = {
  ref: "cropperPopupRef",
  class: "nut-cropper-popup"
}, F2 = {
  ref: "canvasRef",
  class: "nut-cropper-popup__canvas"
}, W2 = {
  key: 1,
  class: "flex-sb"
};
function Y2(e, t, n, o, l, s) {
  const a = X("nut-button"), r = X("Refresh2"), i = X("Retweet");
  return c(), d(Z, null, [
    g("div", {
      class: B(["nut-avatar-cropper", { round: e.shape === "round" }]),
      "data-edit-text": e.editText
    }, [
      T(e.$slots, "default"),
      g("input", {
        ref: "inputImageRef",
        type: "file",
        accept: "image/*",
        class: "nut-avatar-cropper__input",
        onChange: t[0] || (t[0] = (...f) => e.inputImageChange && e.inputImageChange(...f))
      }, null, 544)
    ], 10, O2),
    Ie(g("div", R2, [
      g("canvas", F2, null, 512),
      g("div", {
        class: "nut-cropper-popup__highlight",
        onTouchstart: t[1] || (t[1] = (...f) => e.onTouchStart && e.onTouchStart(...f)),
        onTouchmove: t[2] || (t[2] = (...f) => e.onTouchMove && e.onTouchMove(...f)),
        onTouchend: t[3] || (t[3] = (...f) => e.onTouchEnd && e.onTouchEnd(...f)),
        onTouchcancel: t[4] || (t[4] = (...f) => e.onTouchEnd && e.onTouchEnd(...f))
      }, [
        g("div", {
          class: B(["highlight", { highlight__round: e.shape === "round" }]),
          style: V(e.highlightStyle)
        }, null, 6)
      ], 32),
      g("div", {
        class: B(["nut-cropper-popup__toolbar", [e.toolbarPosition]])
      }, [
        e.$slots.toolbar ? T(e.$slots, "toolbar", { key: 0 }) : (c(), d("div", W2, [
          g("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[5] || (t[5] = (f) => e.cancel())
          }, [
            ee(a, { type: "danger" }, {
              default: te(() => [
                ge(P(e.cancelText), 1)
              ]),
              _: 1
            })
          ]),
          g("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[6] || (t[6] = (...f) => e.reset && e.reset(...f))
          }, [
            ee(r, { color: "#fff" })
          ]),
          g("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[7] || (t[7] = (...f) => e.rotate && e.rotate(...f))
          }, [
            ee(i, { color: "#fff" })
          ]),
          g("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[8] || (t[8] = (...f) => e.confirm && e.confirm(...f))
          }, [
            ee(a, { type: "success" }, {
              default: te(() => [
                ge(P(e.confirmText), 1)
              ]),
              _: 1
            })
          ])
        ]))
      ], 2)
    ], 512), [
      [Me, e.visible]
    ])
  ], 64);
}
const j2 = /* @__PURE__ */ le(H2, [["render", Y2]]);
function K2(e) {
  [qe, sn, an, ht, Ae, Ei, ro, io, co, fo, ho, vo, yo, bo, Gi, $o, uu, gu, Cu, Co, So, To, Gu, No, Do, Io, yc, Sc, Mc, Po, Qc, fd, zd, Eo, sf, uf, Df, Vt, cn, dn, fn, pn, Vo, ep, Oo, Tp, Fp, hn, vn, gn, Fo, e1, Wo, l1, yn, S1, B1, Ht, jo, Ot, Q1, lm, bn, dm, vm, mn, Go, Lm, Zo, $n, Qo, xo, wn, kn, Rt, Cn, Mh, nl, un, Sn, ol, ll, al, rl, v0, il, S0, ul, cl, V0, iv, pv, wv, Pv, Hv, Uv, Lg, Kg, oy, _y, Ay, Qy, A2, dl, j2].forEach((n) => {
    n.install ? e.use(n) : n.name && e.component(n.name, n);
  });
}
const U2 = "4.3.13", Q2 = { install: K2, version: U2 };
export {
  e1 as ActionSheet,
  iv as Address,
  _y as AddressList,
  il as Animate,
  Q1 as Audio,
  lm as AudioOperate,
  bn as Avatar,
  j2 as AvatarCropper,
  dm as AvatarGroup,
  Wo as Backtop,
  un as Badge,
  pv as Barrage,
  qe as Button,
  zd as Calendar,
  Eo as CalendarCard,
  Kg as Card,
  fd as Cascader,
  Ay as Category,
  Qy as CategoryPane,
  sn as Cell,
  an as CellGroup,
  sf as Checkbox,
  uf as CheckboxGroup,
  Go as CircleProgress,
  co as Col,
  al as Collapse,
  rl as CollapseItem,
  A2 as Comment,
  Ei as ConfigProvider,
  nl as Countdown,
  Mh as Countup,
  Df as DatePicker,
  yn as Dialog,
  vo as Divider,
  l1 as Drag,
  oy as Ecard,
  To as Elevator,
  S0 as Ellipsis,
  Zo as Empty,
  uu as FixedNav,
  hn as Form,
  vn as FormItem,
  yo as Grid,
  bo as GridItem,
  ro as Image,
  Cn as ImagePreview,
  Io as Indicator,
  S1 as InfiniteLoading,
  cn as Input,
  Vt as InputNumber,
  dl as Invoice,
  io as Layout,
  vm as List,
  Qn as Locale,
  gu as Menu,
  Cu as MenuItem,
  $o as Navbar,
  Lm as Noticebar,
  Ht as Notify,
  Fp as NumberKeyboard,
  ht as Overlay,
  Gu as Pagination,
  Vo as Picker,
  ol as Popover,
  Ae as Popup,
  Rt as Price,
  mn as Progress,
  B1 as PullRefresh,
  dn as Radio,
  fn as RadioGroup,
  Po as Range,
  pn as Rate,
  fo as Row,
  Qc as Searchbar,
  ep as ShortPassword,
  yc as SideNavbar,
  Sc as SideNavbarItem,
  wv as Signature,
  ll as Skeleton,
  Lg as Sku,
  Gi as Space,
  xo as Step,
  Qo as Steps,
  ho as Sticky,
  Mc as SubSideNavbar,
  gn as Swipe,
  Fo as SwipeGroup,
  wn as Swiper,
  kn as SwiperItem,
  jo as Switch,
  Do as TabPane,
  Co as Tabbar,
  So as TabbarItem,
  v0 as Table,
  No as Tabs,
  Sn as Tag,
  Oo as Textarea,
  Uv as TimeDetail,
  Hv as TimePannel,
  Pv as TimeSelect,
  Ot as Toast,
  V0 as Tour,
  cl as TrendArrow,
  Tp as Uploader,
  $n as Video,
  ul as Watermark,
  Q2 as default,
  K2 as install,
  p1 as showDialog,
  Sh as showImagePreview,
  J2 as showNotify,
  Uo as showToast,
  U2 as version
};
