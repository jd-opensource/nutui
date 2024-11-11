# Uploader

### Intro

Used to upload local pictures or files to the server.

### Install

```js
import { createApp } from 'vue'
import { Uploader } from '@nutui/nutui'

const app = createApp()
app.use(Uploader)
```

### Basic Usage

:::demo

```vue
<template>
  <nut-uploader url="https://xxxx"></nut-uploader>
</template>
```

:::

### Upload status

:::demo

```vue
<template>
  <nut-uploader :url="uploadUrl" v-model:file-list="defaultFileList" maximum="3" multiple></nut-uploader>
</template>
<script setup>
import { reactive } from 'vue'
const uploadUrl = 'https://xxxxx'
const defaultFileList = reactive([
  {
    name: 'file 1.png',
    url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
    status: 'success',
    message: 'upload success',
    type: 'image'
  },
  {
    name: 'file 2.png',
    url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
    status: 'error',
    message: 'upload error',
    type: 'image'
  },
  {
    name: 'file 3.png',
    url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
    status: 'uploading',
    message: 'uploading...',
    type: 'image'
  }
])
</script>
```

:::

### Basic usage - upload list display

:::demo

```vue
<template>
  <nut-uploader :url="uploadUrl" v-model:file-list="defaultFileList" maximum="10" multiple list-type="list">
    <nut-button type="success" size="small">Upload files</nut-button>
  </nut-uploader>
</template>
<script setup>
import { reactive } from 'vue'
const uploadUrl = 'https://xxxxx'
const defaultFileList = reactive([
  {
    name: 'file 1.png',
    url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
    status: 'success',
    message: 'upload success',
    type: 'image'
  },
  {
    name: 'file 2.png',
    url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
    status: 'error',
    message: 'upload error',
    type: 'image'
  },
  {
    name: 'file 3.png',
    url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
    status: 'uploading',
    message: 'uploading...',
    type: 'image'
  }
])
</script>
```

:::

### Custom upload style

:::demo

```vue
<template>
  <nut-uploader url="https://xxxx">
    <nut-button type="success" size="small">Upload files</nut-button>
  </nut-uploader>
</template>
```

:::

### Custom upload uses default progress bar

:::demo

```vue
<template>
  <nut-uploader :url="uploadUrl" @progress="onProgress">
    <nut-button type="success" size="small">Upload files</nut-button>
  </nut-uploader>
  <br />
  <nut-progress
    :percentage="progressPercentage"
    stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
    :status="progressPercentage == 100 ? '' : 'active'"
  >
  </nut-progress>
</template>
<script setup>
import { ref } from 'vue'
import { showToast } from '@nutui/nutui'
const uploadUrl = 'https://xxxxx'
const progressPercentage = (ref < string) | (number > 0)
const onProgress = ({ event, options, percentage }) => {
  progressPercentage.value = percentage
  showToast.text('progress 事件触发' + percentage)
}
</script>
```

:::

### Directly activate the camera (effective on the mobile terminal)

:::demo

```vue
<template>
  <nut-uploader url="https://xxxx" capture></nut-uploader>
</template>
```

:::

### Limit the number of uploads to 5

:::demo

```vue
<template>
  <nut-uploader url="https://xxxx" multiple maximum="5"></nut-uploader>
</template>
```

:::

### Limit upload size (up to 50kb per file)

:::demo

```vue
<template>
  <nut-uploader :url="uploadUrl" multiple :maximize="1024 * 50" @oversize="onOversize"></nut-uploader>
</template>
<script setup>
import { ref } from 'vue'
import { showToast } from '@nutui/nutui'
const uploadUrl = 'https://xxxxx'
const onOversize = (files) => {
  showToast.text('oversize limit upload size (up to 50kb per file)')
}
</script>
```

:::

### Image compression (handled in the beforeupload hook)

:::demo

```vue
<template>
  <nut-uploader :url="uploadUrl" multiple :before-upload="beforeUpload"></nut-uploader>
</template>
<script setup>
import { ref } from 'vue'
const uploadUrl = 'https://xxxxx'
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
const beforeUpload = async (file) => {
  let fileName = file[0].name
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  const base64 = await fileToDataURL(file[0])
  const img = await dataURLToImage(base64)
  canvas.width = img.width
  canvas.height = img.height

  context.clearRect(0, 0, img.width, img.height)
  context.drawImage(img, 0, 0, img.width, img.height)

  let blob = await canvastoFile(canvas, 'image/jpeg', 0.5) //quality:0.5可根据实际情况计算
  const f = await new File([blob], fileName)
  return [f]
}
</script>
```

:::

### Custom data FormData , headers

:::demo

```vue
<template>
  <nut-uploader :url="uploadUrl" :data="formData" :headers="formData" :with-credentials="true"></nut-uploader>
</template>
<script setup>
import { ref } from 'vue'
const uploadUrl = 'https://xxxxx'
const formData = {
  custom: 'test'
}
</script>
```

:::

### Customize XHR upload(before-xhr-upload）

:::demo

```vue
<!-- When the upload method is put, upload the source file stream directly -->
<template>
  <nut-uploader url="https://xxxx" method="put" :before-xhr-upload="beforeXhrUpload"></nut-uploader>
</template>

<script setup>
import { ref } from 'vue'
// source file https://github.com/jdf2e/nutui/blob/v4/src/packages/__VUE/uploader/uploader.ts#L51
const beforeXhrUpload = (xhr, options) => {
  if (options.method.toLowerCase() == 'put') {
    xhr.send(options.sourceFile)
  } else {
    xhr.send(options.formData)
  }
}
</script>
```

:::

### Once the file is selected, manually perform the upload via the button

:::demo

```vue
<template>
  <nut-uploader :url="uploadUrl" maximum="5" :auto-upload="false" ref="uploadRef"></nut-uploader>
  <br />
  <nut-button type="success" size="small" @click="submitUpload">Perform upload</nut-button>
  <nut-button type="danger" size="small" @click="clearUpload">Clear upload</nut-button>
</template>
<script setup>
import { ref } from 'vue'
const uploadUrl = 'https://xxxxx'
const uploadRef = ref(null)
const submitUpload = () => {
  uploadRef.value.submit()
}
const clearUpload = () => {
  uploadRef.value.clearUploadQueue()
}
</script>
```

:::

### Disabled state

:::demo

```vue
<template>
  <nut-uploader disabled></nut-uploader>
</template>
```

:::

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| auto-upload | Whether to upload the file immediately after selecting it, if false, you need to manually execute the ref submit method to upload | boolean | `true` |
| name | The name of the `input` tag `name`, the file parameter name sent to the background | string | `"file"` |
| url | The interface address of the upload server | string | - |
| v-model:file-list | List of uploaded files by default | FileItem[] | `[]` |
| is-preview | Whether to display the preview image after the upload is successful | boolean | true |
| is-deletable | Whether to display the delete button | boolean | `true` |
| method | The http method of upload request | string | `"post"` |
| list-type | Built-in stylesheets, support for three types: `picture`、`list` | string | "picture" |
| capture | Capture, can be set to [camera](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture)，turn on the camera directly | string | false |
| maximize | You can set the maximum upload file size (bytes) | number \| string | `Number.MAX_VALUE` |
| maximum | File upload limit | number \| string | `1` |
| clear-input | Whether to clear the `input` content, set to `true` to support repeated selection and upload of the same file | boolean | `true` |
| accept | File types that can be accepted. See [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | \* |
| headers | Set request headers | object | `{} ` |
| data | Uploading extra params or function which can return uploading extra params | object | {} |
| upload-icon-size | Upload area [icon size] (#/en-US/component/icon) size, such as `20px` `2em` `2rem` | string \| object | - |
| xhr-state | The success status (status) value of the interface response | number | `200` |
| with-credentials | The ajax upload with cookie sent | boolean | `false` |
| multiple | Whether to support multiple file selection | boolean | `false` |
| disabled | Whether to disable file upload | boolean | `false` |
| timeout | timeout, in milliseconds | number \| string | `1000 * 30 ` |
| before-upload | Hook before reading the file, return false to stop reading the file, can return Promise | Function | `null` |
| before-xhr-upload | Customize the method when uploading XHR | Function(xhr，option) | `null` |
| before-delete | Hook before delete the file, return false to stop reading the file, can return Promise | Function(file,fileList): boolean `丨Promise` | - |

### FileItem

| Attribute | Description | Default |
| --- | --- | --- |
| status | File status value, optional `ready`,`uploading`,`success`,`error` | `ready` |
| uid | Unique ID of the file | `new Date().getTime().toString()` |
| name | File name | - |
| url | File path | - |
| type | File type | `"image/jpeg" ` |
| percentage | Upload percentage | `0` |
| sourceFile | Upload the required file | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| start | File upload starts | `options` |
| progress | The progress of the file upload | `{event,option,percentage}` |
| oversize | Triggered when the file size exceeds the limit | `files` |
| success | Uploaded successfully | `{responseText,option,fileItem}` |
| failure | Upload failed | `{responseText,option,fileItem}` |
| change | The state when the uploaded file changes | `{fileList,event}` |
| delete | File delete event | `{files,fileList,index}` |
| file-item-click | Click to trigger after the file is uploaded successfully | `{fileItem}` |

### Uploader Slots

| Name | Description |
| --- | --- |
| default | Default slot |
| upload-icon | Custom Uploader Button Center `icon` |
| delete-icon | Custom Right Delete Button |

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs) to get Uploader instance and call instance methods.

| Name | Description | Arguments | Return value |
| --- | --- | --- | --- |
| submit | Manual upload mode, perform upload operation | - | - |
| clearUploadQueue | Empty the selected file queue (this method is generally used when uploading in manual mode) | index | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-uploader-picture-width | _100px_ |
| --nut-uploader-picture-height | _100px_ |
| --nut-uploader-background | _#f7f8fa_ |
