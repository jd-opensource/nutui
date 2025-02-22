# Notify 消息通知

### 介绍

在页面顶部展示消息提示

### 安装

```js
import { createApp } from 'vue'
import { Notify } from '@nutui/nutui'

const app = createApp()
app.use(Notify)
```

### 基础用法

:::demo

```vue
<template>
  <nut-cell is-Link @click="baseNotify('基础用法')">基础用法</nut-cell>
</template>
<script setup>
import { ref } from 'vue'
import { showNotify } from '@nutui/nutui'
// vite使用按引入插件时使用下边的引入方式
// import '@nutui/nutui/dist/packages/notify/index.css'
import '@nutui/nutui/dist/packages/notify/style'
const baseNotify = (msg) => {
  showNotify.text(msg, {
    onClose: () => {
      console.log('close')
    },
    onClick: () => {
      console.log('click')
    }
  })
}
</script>
```

:::

### 通知类型

:::demo

```vue
<template>
  <nut-cell-group title="通知类型">
    <nut-cell is-Link @click="primaryNotify('主要通知')">主要通知</nut-cell>
    <nut-cell is-Link @click="successNotify('成功通知')">成功通知</nut-cell>
    <nut-cell is-Link @click="errorNotify('危险通知')">危险通知</nut-cell>
    <nut-cell is-Link @click="warningNotify('警告通知')">警告通知</nut-cell>
  </nut-cell-group>
</template>
<script setup>
import { ref } from 'vue'
import { showNotify } from '@nutui/nutui'
import '@nutui/nutui/dist/packages/notify/style'
const primaryNotify = (msg) => {
  showNotify.primary(msg)
}
const successNotify = (msg) => {
  showNotify.success(msg)
}
const errorNotify = (msg) => {
  showNotify.danger(msg)
}
const warningNotify = (msg) => {
  showNotify.warn(msg)
}
</script>
```

:::

### 自定义

:::demo

```vue
<template>
  <nut-cell-group title="自定义背景色和字体颜色">
    <nut-cell is-Link @click="cusBgNotify('自定义背景色和字体颜色')">自定义背景色和字体颜色</nut-cell>
  </nut-cell-group>
  <nut-cell-group title="自定义时长">
    <nut-cell is-Link @click="timeNotify('自定义时长')">自定义时长</nut-cell>
  </nut-cell-group>
  <nut-cell-group title="自定义位置">
    <nut-cell is-Link @click="positionNotify('自定义位置')">自定义位置</nut-cell>
  </nut-cell-group>
</template>
<script setup>
import { ref } from 'vue'
import { showNotify } from '@nutui/nutui'
import '@nutui/nutui/dist/packages/notify/style'
const cusBgNotify = (msg) => {
  showNotify.text(msg, { color: '#ad0000', background: '#ffe1e1' })
}
const timeNotify = (msg) => {
  showNotify.text(msg, { duration: 10000 })
}
const positionNotify = (msg) => {
  showNotify.text(msg, { position: 'bottom' })
}
</script>
```

:::

### 组件调用

:::demo

```vue
<template>
  <nut-cell-group title="组件调用">
    <nut-cell is-Link @click="onClick">组件调用</nut-cell>
    <nut-notify v-model:visible="show" :duration="2000">
      <span>Content</span>
    </nut-notify>
  </nut-cell-group>
</template>
<script setup>
import { ref } from 'vue'
import { showNotify } from '@nutui/nutui'
import '@nutui/nutui/dist/packages/notify/style'
const show = ref(false)
const onClick = () => {
  show.value = true
}
</script>
```

:::

### API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 提示的信息类型，可选值为`primary`、`success`、`danger`、`warning` | string | `danger` |
| visible | 显示与否 | boolean | `false` |
| msg | 展示文案，支持通过`\n`换行 | string | `''` |
| duration | 展示时长(ms)，值为 0 时，`notify` 不会消失 | number | `3000` |
| color | 字体颜色 | string | `''` |
| background | 背景样式 | string | `''` |
| class-name | 自定义类名 | string \| number | `1` |
| position | 自定义位置，可选值为 `top` `bottom` `left` `right` `center` | string | `top` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击事件回调 | `-` |
| closed | 关闭事件回调 | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-notify-text-color | _var(--nut-white)_ |
| --nut-notify-padding | _12px 0_ |
| --nut-notify-font-size | _14px_ |
| --nut-notify-height | _44px_ |
| --nut-notify-line-height | _auto_ |
| --nut-notify-base-background-color | _linear-gradient(135deg,var(--nut-primary-color) 0%,var(--nut-primary-color-end) 100%)_ |
| --nut-notify-primary-background-color | _linear-gradient(315deg, rgba(73, 143, 242, 1) 0%, rgba(73, 101, 242, 1) 100%)_ |
| --nut-notify-success-background-color | _linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)_ |
| --nut-notify-danger-background-color | _rgba(250, 50, 25, 1)_ |
| --nut-notify-warning-background-color | _linear-gradient(135deg, rgba(255, 93, 13, 1) 0%, rgba(255, 154, 13, 1) 100%)_ |
