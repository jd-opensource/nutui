# Divider 分割线

### 介绍

用于将内容分隔为多个区域。

### 安装

```js
import { createApp } from 'vue';
import { Divider } from '@nutui/nutui';

const app = createApp();
app.use(Divider);
```

### 基础用法

默认渲染一条水平分割线。

> demo: divider basic

### 展示文本

通过插槽可以在分割线中间插入内容。

> demo: divider text

### 内容位置

通过 content-position 指定内容所在位置。

> demo: divider position

### 虚线

添加 dashed 属性使分割线渲染为虚线。

> demo: divider dashed

### 自定义样式

可以直接通过 style 属性设置分割线的样式。

> demo: divider custom

### 垂直分割线

> demo: divider vertical

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dashed | 是否使用虚线 | boolean | `false` |
| hairline | 是否使用 `0.5px` 线 | boolean | `true` |
| content-position | 内容位置，可选值为 `left`、`right` | string | `center` |
| direction | 水平还是垂直类型，可选值 `vertical` | string | `horizontal` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 内容，仅在 `direction` 为 `horizontal` 时生效 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-divider-margin | _16px 0_ |
| --nut-divider-text-font-size | _var(--nut-font-size-2)_ |
| --nut-divider-text-color | _#909ca4_ |
| --nut-divider-line-height | _2px_ |
| --nut-divider-before-margin-right | _16px_ |
| --nut-divider-after-margin-left | _16px_ |
| --nut-divider-vertical-height | _12px_ |
| --nut-divider-vertical-top | _2px_ |
| --nut-divider-vertical-border-left | _rgba(0, 0, 0, 0.06)_ |
| --nut-divider-vertical-margin | _0 8px_ |
