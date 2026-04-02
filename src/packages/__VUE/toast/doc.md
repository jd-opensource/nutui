# Toast 吐司

### 介绍

用于轻提示。

### 安装

```js
import { createApp } from 'vue'
import { Toast } from '@nutui/nutui'

const app = createApp()
app.use(Toast)
```

### 文字提示

:::demo

```vue
<template>
  <nut-cell title="Text 文字提示" is-link @click="textToast('网络失败，请稍后再试~')"></nut-cell>
</template>
<script setup>
import { showToast } from '@nutui/nutui'
const textToast = (msg) => {
  showToast.text(msg)
}
</script>
```

:::

### 标题提示

:::demo

```vue
<template>
  <nut-cell title="Toast 标题展示" is-link @click="textToast('网络失败，请稍后再试~')"></nut-cell>
</template>
<script setup>
import { showToast } from '@nutui/nutui'
const textToast = (msg) => {
  showToast.text(msg, {
    title: '标题文字'
  })
}
</script>
```

:::

### 成功提示

:::demo

```vue
<template>
  <nut-cell title="Toast 成功提示" is-link @click="textToast('成功提示')"></nut-cell>
</template>
<script setup>
import { showToast } from '@nutui/nutui'
const textToast = (msg) => {
  showToast.success(msg)
}
</script>
```

:::

### 失败提示

:::demo

```vue
<template>
  <nut-cell title="Toast 失败提示" is-link @click="textToast('失败提示')"></nut-cell>
</template>
<script setup>
import { showToast } from '@nutui/nutui'
const textToast = (msg) => {
  showToast.fail(msg)
}
</script>
```

:::

### 警告提示

:::demo

```vue
<template>
  <nut-cell title="Toast 警告提示" is-link @click="textToast('警告提示')"></nut-cell>
</template>
<script setup>
import { showToast } from '@nutui/nutui'
const textToast = (msg) => {
  showToast.warn(msg)
}
</script>
```

:::

### 加载提示

:::demo

```vue
<template>
  <nut-cell title="Toast 加载提示" is-link @click="textToast('加载中')"></nut-cell>
</template>
<script setup>
import { showToast } from '@nutui/nutui'
const textToast = (msg) => {
  showToast.loading(msg)
}
</script>
```

:::

### Toast 不消失

:::demo

```vue
<template>
  <nut-cell title="Toast不消失" is-link @click="textToast('Toast不消失')"></nut-cell>
</template>
<script setup>
import { showToast } from '@nutui/nutui'
const textToast = (msg) => {
  showToast.text(msg, {
    duration: 0
  })
}
</script>
```

:::

### Toast 自定义底部高度

:::demo

```vue
<template>
  <nut-cell title="Toast 自定义底部高度" is-link @click="textToast('自定义距离')"></nut-cell>
</template>
<script setup>
import { showToast } from '@nutui/nutui'
const textToast = (msg) => {
  showToast.text(msg, {
    center: false,
    bottom: '10%'
  })
}
</script>
```

:::

### Loading 带透明罩

:::demo

```vue
<template>
  <nut-cell title="Loading带透明罩" is-link @click="textToast('加载中')"></nut-cell>
</template>
<script setup>
import { showToast } from '@nutui/nutui'
const textToast = (msg) => {
  showToast.loading(msg, {
    cover: true
  })
}
</script>
```

:::

### 支持在 JS 模块中导入使用

```js
import { showToast } from '@nutui/nutui'
showToast.text('在js模块中使用')
// 返回实例，可以手动调用实例中的hide方法关闭提示
const toast = showToast.loading('在js模块中使用')
toast.hide()
```

## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| showToast.text | 展示文字提示 | message ｜ options | toast 实例(message 支持传入 HTML) |
| showToast.success | 展示成功提示 | message ｜ options | toast 实例 |
| showToast.fail | 展示失败提示 | message ｜ options | toast 实例 |
| showToast.warn | 展示警告提示 | message ｜ options | toast 实例 |
| showToast.hide | 关闭提示 | 默认关闭所有实例，可传 id 关闭指定实例 | void |
| showToast.loading | 展示加载提示 | message ｜ options | toast 实例 |

### ToastOptions 数据结构

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| id | 标识符，相同时共用一个实例，默认为多个实例 | string \| number | - |
| duration | 展示时长（毫秒）<br>值为 0 时，toast 不会自动消失 | number | `2000` |
| title | 标题 | string | - |
| center | 是否展示在页面中部（为 false 时展示在底部） | boolean | `true` |
| bottom | 距页面底部的距离（像素或者百分比），option.center 为 false 时生效 | string | `30px` |
| text-align-center | 多行文案是否居中 | boolean | `true` |
| bg-color | 背景颜色（透明度） | string | `rgba(0, 0, 0, 0.8)` |
| custom-class | 自定义类名 | string | - |
| icon | 自定义图标，**直接传入 Component 或者 h 函数** | Component | - |
| size | 文案尺寸，**small**/**base**/**large**三选一 | string | `base` |
| cover | 是否显示遮罩层 | boolean | `false` |
| cover-color | 遮罩层颜色，默认透明 | string | `rgba(0,0,0,0)` |
| loading-rotate | loading 图标是否旋转，仅对 loading 类型生效 | boolean | `true` |
| close | 关闭时触发的事件 | function | `null` |
| close-on-click-overlay | 是否在点击遮罩层后关闭提示 | boolean | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-toast-title-font-size | _16px_ |
| --nut-toast-text-font-size | _14px_ |
| --nut-toast-font-color | _var(--nut-white)_ |
| --nut-toast-inner-padding | _24px 30px_ |
| --nut-toast-inner-bg-color | _rgba(0, 0, 0, 0.8)_ |
| --nut-toast-inner-border-radius | _12px_ |
| --nut-toast-cover-bg-color | _rgba(0, 0, 0, 0)_ |
