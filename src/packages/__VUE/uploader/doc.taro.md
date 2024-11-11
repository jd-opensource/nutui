# Uploader 上传

### 介绍

用于将本地的图片或文件上传至服务器。

### 安装

```js
import { createApp } from 'vue'
import { Uploader } from '@nutui/nutui-taro'

const app = createApp()
app.use(Uploader)
```

### 基础用法

```vue
<template>
  <nut-uploader url="https://xxxx"></nut-uploader>
</template>
```

### 上传状态

```vue
<template>
  <nut-uploader :url="uploadUrl" v-model:file-list="defaultFileList" maximum="3" multiple></nut-uploader>
</template>
```

### 基础用法-上传列表展示

```vue
<template>
  <nut-uploader :url="uploadUrl" v-model:file-list="defaultFileList" maximum="10" multiple list-type="list">
    <nut-button type="success" size="small">上传文件</nut-button>
  </nut-uploader>
</template>
```

### 自定义上传样式

```vue
<template>
  <nut-uploader :url="uploadUrl">
    <nut-button type="success" size="small">上传文件</nut-button>
  </nut-uploader>
</template>
```

### 自定义上传使用默认进度条

```vue
<template>
  <nut-uploader :url="uploadUrl" @progress="onProgress">
    <nut-button type="success" size="small">上传文件</nut-button>
  </nut-uploader>
  <br />
  <nut-progress
    :percentage="progressPercentage"
    stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
    :status="progressPercentage == 100 ? '' : 'active'"
  >
  </nut-progress>
</template>
```

### 直接调起摄像头 camera

```vue
<template>
  <nut-uploader :url="uploadUrl" :source-type="['camera']"></nut-uploader>
</template>
```

### 使用前摄像头拍摄 3s 视频并上传(仅支持微信小程序)

```vue
<template>
  <nut-uploader :max-duration="3" :source-type="['camera']" camera="front" :url="uploadUrl"></nut-uploader>
</template>
```

### 限制上传数量 5 个

```vue
<template>
  <nut-uploader :url="uploadUrl" multiple maximum="5"></nut-uploader>
</template>
```

### 限制上传大小（每个文件最大不超过 50kb）

```vue
<template>
  <nut-uploader :url="uploadUrl" multiple :maximize="1024 * 50" @oversize="onOversize"></nut-uploader>
</template>
```

### 自定义数据 FormData headers

```vue
<template>
  <nut-uploader :url="uploadUrl" :data="formData" :headers="formData" :with-Credentials="true"></nut-uploader>
</template>
```

### 自定义上传方式(before-xhr-upload)

:::demo

```vue
<template>
  <nut-uploader url="https://xxxx" :before-xhr-upload="beforeXhrUpload"></nut-uploader>
</template>

<script setup>
import { ref } from 'vue';
    // source file https://github.com/jdf2e/nutui/blob/v4/src/packages/__VUE/uploader/uploader.ts#L6
    const beforeXhrUpload = (taroUploadFile, options) => {
      //taroUploadFile  是 Taro.uploadFile ， 你也可以自定义设置其它函数
      const uploadTask = taroUploadFile({
        url: options.url,
        filePath: options.taroFilePath,
        fileType: options.fileType,
        header: {
          'Content-Type': 'multipart/form-data',
          ...options.headers
        }, //
        formData: options.formData,
        name: options.name,
        success(response: { errMsg; statusCode; data }) {
          if (options.xhrState == response.statusCode) {
            options.onSuccess?.(response, options);
          } else {
            options.onFailure?.(response, options);
          }
        },
        fail(e) {
          options.onFailure?.(e, options);
        }
      });
      options.onStart?.(options);
      uploadTask.progress((res) => {
        options.onProgress?.(res, options);
        // console.log('上传进度', res.progress);
        // console.log('已经上传的数据长度', res.totalBytesSent);
        // console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);
      });
      // uploadTask.abort(); // 取消上传任务
    };
</script>
```

:::

### 选中文件后，通过按钮手动执行上传

```vue
<template>
  <nut-uploader :url="uploadUrl" maximum="5" :auto-upload="false" ref="uploadRef"></nut-uploader>
  <br />
  <nut-button type="success" size="small" @click="submitUpload">手动执行上传</nut-button>
  <nut-button type="success" size="small" @click="clearUpload">手动清空上传</nut-button>
</template>
```

### 禁用状态

```vue
<template>
  <nut-uploader disabled></nut-uploader>
</template>
```

```vue
<script setup>
import { ref, reactive } from 'vue'
const uploadUrl = 'http://服务器地址'
const progressPercentage = ref(0)
const formData = {
  custom: 'test'
}
const defaultFileList = reactive([
  {
    name: '文件1.png',
    url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
    status: 'success',
    message: '上传成功',
    type: 'image'
  },
  {
    name: '文件2.png',
    url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
    status: 'error',
    message: '上传失败',
    type: 'image'
  },
  {
    name: '文件3.png',
    url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
    status: 'uploading',
    message: '上传中...',
    type: 'image'
  }
])
const fileToDataURL = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onloadend = (e) => resolve(e.target.result)
    reader.readAsDataURL(file)
  })
}
const dataURLToImage = (dataURL) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.src = dataURL
  })
}
const canvastoFile = (canvas, type, quality) => {
  return new Promise((resolve) => canvas.toBlob((blob) => resolve(blob), type, quality))
}
const onOversize = (files) => {
  console.log('oversize 触发 文件大小不能超过 50kb', files)
}
const onDelete = (obj) => {
  console.log('delete 事件触发', obj)
}
const onProgress = ({ event, options, percentage }) => {
  progressPercentage.value = percentage
  console.log('progress 事件触发', percentage)
}
const uploadRef = ref(null)
const submitUpload = () => {
  uploadRef.value.submit()
}
const clearUpload = () => {
  uploadRef.value.clearUploadQueue()
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| auto-upload | 是否在选取文件后立即进行上传，`false` 时需要手动执行 ref submit 方法进行上传 | Boolean | `true` |
| name | 发到后台的文件参数名 | String | `file` |
| url | 上传服务器的接口地址 | String | `-` |
| v-model:file-list | 默认已经上传的文件列表 | FileItem[] | `[]` |
| is-preview | 是否上传成功后展示预览图 | Boolean | `true` |
| is-deletable | 是否展示删除按钮 | Boolean | `true` |
| method | 上传请求的 http method | String | `post` |
| list-type | 上传列表的内建样式，支持两种基础样式 `picture`、`list` | String | `picture` |
| maximize | 可以设定最大上传文件的大小（字节） | Number \| String | `Number.MAX_VALUE` |
| maximum | 最多可以选择的文件个数，微信基础库 2.25.0 前，最多可支持 9 个文件，2.25.0 及以后最多可支持 20 个文件 | Number \| String | `1` |
| source-type | [选择文件的来源](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html) | Array | `['album','camera']` |
| camera`仅支持WEAPP` | 仅在 `source-type` 为 `camera` 时生效，使用前置或后置摄像头 | String | `back` |
| size-type | [是否压缩所选文件](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html) | Array | `['original','compressed']` |
| media-type`仅支持WEAPP` | [选择文件类型](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html) | Array | `['image', 'video', 'mix']` |
| max-duration`仅支持WEAPP` | 拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 60s 之间。不限制相册。 | Number | 10 |
| headers | 设置上传的请求头部 | object | `{}` |
| data | 附加上传的信息 formData | object | `{}` |
| xhr-state | 接口响应的成功状态（status）值 | Number | `200` |
| disabled | 是否禁用文件上传 | Boolean | `false` |
| multiple | 是否支持文件多选 | Boolean | `true` |
| timeout | 超时时间，单位为毫秒 | Number \| String | `1000 * 30` |
| before-upload | 上传前的函数需要返回一个`Promise`对象 | Function | `null` |
| before-xhr-upload | 执行 `Taro.uploadFile` 上传时，自定义方式 | Function(Taro.uploadFile，option) | `null` |
| mode`v4.1.1 仅支持小程序` | 预览图片的 mode 属性 | string | `aspectFit` |

### FileItem

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| status | 文件状态值，可选`ready`,`uploading`,`success`,`error` | `ready` |
| uid | 文件的唯一标识 | `new Date().getTime().toString()` |
| name | 文件名称 | - |
| url | 文件路径 | - |
| percentage | 上传百分比 | `0` |
| sourceFile | 上传所需的 file（仅WEB） | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| start | 文件上传开始 | `options` |
| progress | 文件上传的进度 | `{event,option,percentage}` |
| oversize | 文件大小超过限制时触发 | `files` |
| success | 上传成功 | `{data,option,fileItem}` |
| failure | 上传失败 | `{data,option,fileItem}` |
| change | 上传文件改变时的状态 | `{fileList,event}` |
| delete | 文件删除事件 | `{files,fileList,index}` |
| file-item-click | 文件上传成功后点击触发 | `{fileItem}` |

### Uploader Slots

| 名称 | 说明 |
| --- | --- |
| default | 默认插槽自定义内容 |
| upload-icon | 自定义上传按钮中间`icon`区域 |
| delete-icon | 自定义右上角删除按钮区域 |

### Methods

通过 [ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs) 可以获取到 Uploader 实例并调用实例方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| submit | 手动上传模式，执行上传操作 | - | `-` |
| chooseImage | 调用选择文件的方法，效果等同于点击 nut-uploader 组件 | - | - |
| clearUploadQueue | 清空已选择的文件队列（该方法一般配合在手动模式上传时使用） | index | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-uploader-picture-width | _100px_ |
| --nut-uploader-picture-height | _100px_ |
| --nut-uploader-background | _#f7f8fa_ |
