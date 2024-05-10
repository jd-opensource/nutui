# Overlay 遮罩层

### 介绍

创建一个遮罩层，通常用于阻止用户进行其他操作

### 安装

```js
import { createApp } from 'vue'
import { Overlay } from '@nutui/nutui'

const app = createApp()
app.use(Overlay)
```

### 基础用法

使用 `visible` 控制遮罩层的显示/隐藏

> demo: overlay basic

### 遮罩样式

通过 `overlay-style` 进行设置遮罩样式

> demo: overlay mask

### 设置动画时间

通过 `duration` 设置遮罩显示/隐藏的时间，时间 `s`

> demo: overlay duration

### 锁定背景滚动

通过 `lock-scroll` 设置遮罩在显示时是否锁定背景，禁止滚动

> demo: overlay lock

### 嵌套内容

支持默认 `slot`，可嵌套任意内容

> demo: overlay nest

### 点击遮罩不关闭

设置 `close-on-click-overlay` 可控制点击遮罩是否关闭，如果设置为 `true`，那么 `click` 事件也将同时失效

> demo: overlay close

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:visible | 控制遮罩的显示/隐藏 | boolean | `false` |
| z-index | 自定义遮罩层级 | string \| number | `2000` |
| duration | 显示/隐藏的动画时长，单位秒 | string \| number | `0.3` |
| overlay-class | 自定义遮罩类名 | string | - |
| overlay-style | 自定义遮罩样式 | CSSProperties | - |
| lock-scroll | 遮罩显示时的背景是否锁定 | boolean | `true` |
| close-on-click-overlay | 点击遮罩时是否关闭 | boolean | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击时触发 | event: MouseEvent |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 内嵌遮罩内容自定义 |

### 类型定义 version

组件导出以下类型定义：

```js
import type {
  OverlayProps,
  OverlayInstance
} from '@nutui/nutui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-overlay-bg-color | _rgba(0, 0, 0, 0.7)_ |
