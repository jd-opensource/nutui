var __defProp = Object.defineProperty;
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
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { toRef, ref, watch, reactive, resolveComponent, openBlock, createElementBlock, renderSlot, createTextVNode, createBlock, createCommentVNode, Fragment, renderList, normalizeClass, createElementVNode, toDisplayString, createVNode, withModifiers } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { f as funInterceptor } from "../Interceptor-aNUpilAP.js";
import { Progress as _sfc_main$1 } from "../progress/Progress.js";
import { Button as _sfc_main$2 } from "../button/Button.js";
import Taro from "@tarojs/taro";
import { Photograph, Failure, Loading, Del, Link } from "@nutui/icons-vue-taro";
import { u as useLocale } from "../index-IxPZmHlb.js";
import { u as useFormDisabled } from "../common-BH7uB7Cn.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
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
class Uploader {
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
}
class UploaderTaro extends Uploader {
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
const { create } = createComponent("uploader");
const cN = "NutUploader";
const _sfc_main = create({
  components: {
    NutProgress: _sfc_main$1,
    NutButton: _sfc_main$2,
    Photograph,
    Failure,
    Loading,
    Del,
    Link
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
    const disabled = useFormDisabled(toRef(props, "disabled"));
    const translate = useLocale(cN);
    const fileList = ref(props.fileList);
    const uploadQueue = ref([]);
    watch(
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
      if (["WEAPP", "ASCF"].includes(Taro.getEnv())) {
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
        const fileItem = reactive(new FileItem());
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
const _hoisted_1 = { class: "nut-uploader" };
const _hoisted_2 = {
  key: 0,
  class: "nut-uploader__slot"
};
const _hoisted_3 = {
  key: 0,
  class: "nut-uploader__preview-img"
};
const _hoisted_4 = {
  key: 0,
  class: "nut-uploader__preview__progress"
};
const _hoisted_5 = { class: "nut-uploader__preview__progress__msg" };
const _hoisted_6 = ["onClick"];
const _hoisted_7 = ["mode", "src", "onClick"];
const _hoisted_8 = {
  key: 3,
  class: "nut-uploader__preview-img__file"
};
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "file__name_tips" };
const _hoisted_11 = { class: "tips" };
const _hoisted_12 = {
  key: 1,
  class: "nut-uploader__preview-list"
};
const _hoisted_13 = ["onClick"];
const _hoisted_14 = { class: "file__name_tips" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_button = resolveComponent("nut-button");
  const _component_Failure = resolveComponent("Failure");
  const _component_Loading = resolveComponent("Loading");
  const _component_Link = resolveComponent("Link");
  const _component_Del = resolveComponent("Del");
  const _component_nut_progress = resolveComponent("nut-progress");
  const _component_Photograph = resolveComponent("Photograph");
  return openBlock(), createElementBlock("view", _hoisted_1, [
    _ctx.$slots.default ? (openBlock(), createElementBlock("view", _hoisted_2, [
      renderSlot(_ctx.$slots, "default"),
      _cache[0] || (_cache[0] = createTextVNode()),
      Number(_ctx.maximum) - _ctx.fileList.length ? (openBlock(), createBlock(_component_nut_button, {
        key: 0,
        class: "nut-uploader__input",
        onClick: _ctx.chooseImage
      }, null, 8, ["onClick"])) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _cache[9] || (_cache[9] = createTextVNode()),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.fileList, (item, index) => {
      var _a, _b;
      return openBlock(), createElementBlock("view", {
        key: item.uid,
        class: normalizeClass(["nut-uploader__preview", [_ctx.listType]])
      }, [
        _ctx.listType == "picture" && !_ctx.$slots.default ? (openBlock(), createElementBlock("view", _hoisted_3, [
          item.status != "success" ? (openBlock(), createElementBlock("view", _hoisted_4, [
            item.status != "ready" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              item.status == "error" ? (openBlock(), createBlock(_component_Failure, {
                key: 0,
                color: "#fff"
              })) : (openBlock(), createBlock(_component_Loading, {
                key: 1,
                name: "loading",
                color: "#fff"
              }))
            ], 64)) : createCommentVNode("", true),
            _cache[1] || (_cache[1] = createTextVNode()),
            createElementVNode("view", _hoisted_5, toDisplayString(item.message), 1)
          ])) : createCommentVNode("", true),
          _cache[2] || (_cache[2] = createTextVNode()),
          _ctx.isDeletable ? (openBlock(), createElementBlock("view", {
            key: 1,
            class: "close",
            onClick: ($event) => _ctx.onDelete(item, index)
          }, [
            renderSlot(_ctx.$slots, "delete-icon", {}, () => [
              createVNode(_component_Failure)
            ])
          ], 8, _hoisted_6)) : createCommentVNode("", true),
          _cache[3] || (_cache[3] = createTextVNode()),
          (((_a = item == null ? void 0 : item.type) == null ? void 0 : _a.includes("image")) || ((_b = item == null ? void 0 : item.type) == null ? void 0 : _b.includes("video"))) && item.url ? (openBlock(), createElementBlock("img", {
            key: 2,
            class: "nut-uploader__preview-img__c",
            mode: _ctx.mode,
            src: item.url,
            onClick: ($event) => _ctx.fileItemClick(item)
          }, null, 8, _hoisted_7)) : (openBlock(), createElementBlock("view", _hoisted_8, [
            createElementVNode("view", {
              class: "nut-uploader__preview-img__file__name",
              onClick: ($event) => _ctx.fileItemClick(item)
            }, [
              createElementVNode("view", _hoisted_10, toDisplayString(item.name), 1)
            ], 8, _hoisted_9)
          ])),
          _cache[4] || (_cache[4] = createTextVNode()),
          createElementVNode("view", _hoisted_11, toDisplayString(item.name), 1)
        ])) : _ctx.listType == "list" ? (openBlock(), createElementBlock("view", _hoisted_12, [
          createElementVNode("view", {
            class: normalizeClass(["nut-uploader__preview-img__file__name", [item.status]]),
            onClick: ($event) => _ctx.fileItemClick(item)
          }, [
            createVNode(_component_Link, { class: "nut-uploader__preview-img__file__link" }),
            _cache[5] || (_cache[5] = createTextVNode()),
            createElementVNode("view", _hoisted_14, toDisplayString(item.name), 1),
            _cache[6] || (_cache[6] = createTextVNode()),
            _ctx.isDeletable ? (openBlock(), createBlock(_component_Del, {
              key: 0,
              color: "#808080",
              class: "nut-uploader__preview-img__file__del",
              onClick: withModifiers(($event) => _ctx.onDelete(item, index), ["stop"])
            }, null, 8, ["onClick"])) : createCommentVNode("", true)
          ], 10, _hoisted_13),
          _cache[7] || (_cache[7] = createTextVNode()),
          item.status == "uploading" ? (openBlock(), createBlock(_component_nut_progress, {
            key: 0,
            size: "small",
            percentage: item.percentage,
            "stroke-color": "linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)",
            "show-text": false
          }, null, 8, ["percentage"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 2);
    }), 128)),
    _cache[10] || (_cache[10] = createTextVNode()),
    _ctx.listType == "picture" && !_ctx.$slots.default && Number(_ctx.maximum) - _ctx.fileList.length ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: normalizeClass(["nut-uploader__upload", [_ctx.listType]])
    }, [
      renderSlot(_ctx.$slots, "upload-icon", {}, () => [
        createVNode(_component_Photograph, { color: "#808080" })
      ]),
      _cache[8] || (_cache[8] = createTextVNode()),
      createVNode(_component_nut_button, {
        class: normalizeClass(["nut-uploader__input", { disabled: _ctx.disabled }]),
        onClick: _ctx.chooseImage
      }, null, 8, ["class", "onClick"])
    ], 2)) : createCommentVNode("", true)
  ]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
