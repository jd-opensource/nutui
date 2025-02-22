# Dialog 对话框

### 介绍

模态对话框，在浮层中显示，引导用户进行相关操作，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。

弹出框组件支持函数调用和组件调用两种方式。

### 安装

```js
import { createApp, createVNode } from 'vue'
import { Dialog } from '@nutui/nutui'

const app = createApp()
app.use(Dialog)
```

### 函数式调用

:::demo

```vue
<template>
  <nut-cell-group title="函数式调用">
    <nut-cell title="基础弹框" @click="baseClick"></nut-cell>
    <nut-cell title="透明弹框" @click="transparentClick"></nut-cell>
    <nut-cell title="支持富文本 html" @click="htmlClick"></nut-cell>
    <nut-cell title="异步关闭" @click="beforeCloseClick"></nut-cell>
    <nut-cell title="无标题弹框" @click="noTitleClick"></nut-cell>
    <nut-cell title="提示弹框" @click="tipsClick"></nut-cell>
    <nut-cell title="底部按钮 垂直调用" @click="verticalClick"></nut-cell>
  </nut-cell-group>
</template>
<script setup>
import { ref, createVNode } from 'vue'
import { showDialog } from '@nutui/nutui'
import '@nutui/nutui/dist/packages/dialog/style'
const onCancel = () => {
  console.log('event cancel')
}
const onOk = () => {
  console.log('event ok')
}
const baseClick = () => {
  showDialog({
    title: '基础弹框',
    content: createVNode('span', { style: { color: 'red' } }, '我可以是一个自定义组件'),
    onCancel,
    onOk
  })
}
const transparentClick = () => {
  showDialog({
    overlayStyle: { background: 'rgba(0,0,0,0)' },
    title: '透明弹框',
    content: 'Content',
    onCancel,
    onOk
  })
}
const htmlClick = () => {
  showDialog({
    title: '支持富文本 html',
    content:
      "<p style='color:red'>html</p><img src='https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif' />",
    onCancel,
    onOk
  })
}
const beforeCloseClick = () => {
  showDialog({
    title: '异步关闭',
    content: '点击确认后，1秒后关闭',
    onCancel,
    onOk,
    beforeClose: (action) => {
      return new Promise((r) => {
        setTimeout(() => {
          r(action == 'ok')
        }, 1000)
      })
    }
  })
}
const noTitleClick = () => {
  showDialog({
    content: '无标题弹框',
    onCancel,
    onOk
  })
}
const tipsClick = () => {
  showDialog({
    title: '温馨提示',
    content: '支持函数调用和组件调用两种方式。',
    noCancelBtn: true,
    onCancel,
    onOk
  })
}
const verticalClick = () => {
  showDialog({
    title: '温馨提示',
    content: '支持底部按钮纵向排列。',
    footerDirection: 'vertical',
    onCancel,
    onOk
  })
}
</script>
```

:::

### 标签式使用

:::demo

```vue
<template>
  <nut-cell-group title="标签式使用">
    <nut-cell title="标签式使用" @click="componentClick"></nut-cell>
    <nut-dialog
      teleport="#app"
      title="组件调用"
      content="如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。"
      v-model:visible="visible"
    >
    </nut-dialog>
    <nut-cell title="底部按钮 垂直使用" @click="componentvVrticalClick"></nut-cell>
    <nut-dialog
      footer-direction="vertical"
      teleport="#app"
      title="组件调用"
      content="如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。"
      v-model:visible="visible1"
    >
    </nut-dialog>
  </nut-cell-group>
</template>
<script setup>
import { ref } from 'vue'
const visible = ref(false)
const visible1 = ref(false)
const componentClick = () => {
  visible.value = true
}
const componentvVrticalClick = () => {
  visible1.value = true
}
</script>
```

:::

### teleport 使用，挂载到指定节点

:::demo

```vue
<template>
  <nut-cell-group title="Teleport 使用，挂载到指定节点">
    <nut-cell title="body element node" @click="teleportClick('body')"></nut-cell>
    <nut-cell title="#app element node" @click="teleportClick('#app')"></nut-cell>
    <nut-cell title="demo class element node" @click="teleportClick('.demo')"></nut-cell>
  </nut-cell-group>
</template>
<script setup>
import { showDialog } from '@nutui/nutui'
import '@nutui/nutui/dist/packages/dialog/style'
const onCancel = () => {
  console.log('event cancel')
}
const teleportClick = (teleport) => {
  showDialog({
    teleport,
    title: 'teleport to ' + teleport,
    content: '打开开发者工具看一下 Elements Tab',
    noCancelBtn: true,
    onCancel
  })
}
</script>
```

:::

## API

### DialogOptions

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | string | - |
| id | 标识符，相同时共用一个实例，默认为多个实例 | string \| number | `new Date().getTime()` |
| content | 内容，支持 `HTML` 和组件 | string \| VNode | - |
| teleport | 指定挂载节点 | string | `"body"` |
| closeOnClickOverlay | 点击蒙层是否关闭对话框 | boolean | `false` |
| noFooter | 是否隐藏底部按钮栏 | boolean | `false` |
| noOkBtn | 是否隐藏确定按钮 | boolean | `false` |
| noCancelBtn | 是否隐藏取消按钮 | boolean | `false` |
| cancelText | 取消按钮文案 | string | `”取消“` |
| okText | 确定按钮文案 | string | `”确定“` |
| cancelAutoClose | 取消按钮是否默认关闭弹窗 | boolean | `true` |
| okAutoClose`4.2.1` | 确认按钮是否默认关闭弹窗 | boolean | `true` |
| textAlign | 文字对齐方向，可选值同 `css` 的 `text-align` | string | `"center"` |
| closeOnPopstate | 是否在页面回退时自动关闭 | boolean | `false` |
| customClass | 自定义 `class` | string | - |
| overlayClass | 自定义遮罩类名 | string | - |
| overlayStyle | 自定义遮罩样式 | CSSProperties | - |
| popClass | 自定义 `popup` 弹框类名 | string | - |
| popStyle | 自定义 `popup` 弹框样式 | CSSProperties | - |
| onUpdate | 更新 | boolean | `false` |
| onOk | 确定按钮回调 | Function | - |
| onCancel | 取消按钮回调 | Function | - |
| onOpened | 打开弹框后回调 | Function | - |
| onClosed | 关闭弹框后回调 | Function | - |
| beforeClose | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 `Promise` | Function(action: string) | - |

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | string | - |
| content | 内容，支持 HTML 和组件 | string \| VNode |  |
| teleport | 指定挂载节点 | string | `"body"` |
| close-on-click-overlay | 点击蒙层是否关闭对话框 | boolean | `false` |
| no-footer | 是否隐藏底部按钮栏 | boolean | `false` |
| no-ok-btn | 是否隐藏确定按钮 | boolean | `false` |
| no-cancel-btn | 是否隐藏取消按钮 | boolean | `false` |
| cancel-text | 取消按钮文案 | string | `”取消“` |
| ok-text | 确定按钮文案 | string | `”确 定“` |
| cancel-auto-close | 取消按钮是否默认关闭弹窗 | boolean | `true` |
| ok-auto-close`4.2.1` | 确认按钮是否默认关闭弹窗 | boolean | `true` |
| text-align | 文字对齐方向，可选值同 css 的 text-align | string | `"center"` |
| close-on-popstate | 是否在页面回退时自动关闭 | boolean | `false` |
| lock-scroll | 背景是否锁定 | boolean | `true` |
| footer-direction | 使用横纵方向 可选值 `horizontal`、`vertical` | string | `horizontal` |
| overlay-class | 自定义遮罩类名 | string | - |
| overlay-style | 自定义遮罩样式 | CSSProperties | - |
| pop-class | 自定义 popup 弹框类名 | string | - |
| pop-style | 自定义 popup 弹框样式 | CSSProperties | - |
| custom-class | 自定义 class | string | - |
| before-close | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 `Promise` | Function(action: string) | - |

### Events

| 事件名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| ok | 确定按钮回调 | Function | - |
| cancel | 取消按钮回调 | Function | - |
| closed | 关闭弹框回调 | Function | - |
| opened | 打开弹框回调 | Function | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| header | 自定义标题区域 |
| default | 自定义内容 |
| footer | 自定义底部按钮区域 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-dialog-width | _296px_ |
| --nut-dialog-header-font-weight | _normal_ |
| --nut-dialog-header-color | _rgba(38, 38, 38, 1)_ |
| --nut-dialog-footer-justify-content | _space-around_ |
