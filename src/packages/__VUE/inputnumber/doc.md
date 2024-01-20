# InputNumber 数字输入框

### 介绍

通过点击按钮控制数字增减。

### 安装

```js
import { createApp } from 'vue';
import { InputNumber } from '@nutui/nutui';

const app = createApp();
app.use(InputNumber);
```

### 基础用法

初始化一个默认值

> demo: inputnumber basic

### 步长设置

设置步长 `step` 5

> demo: inputnumber step

### 限制输入范围

`min` 和 `max` 属性分别表示最小值和最大值

> demo: inputnumber limit

### 禁用状态

`disabled` 禁用状态下无法点击按钮或修改输入框。

> demo: inputnumber disabled

### 只读禁用输入框

`readonly` 设置只读禁用输入框输入行为

> demo: inputnumber readonly

### 支持小数点

设置步长 `step` 0.1 `decimal-places` 小数保留 1 位

> demo: inputnumber decimal

### 自定义按钮大小

> demo: inputnumber size

### 自定义按钮图标

> demo: inputnumber icon

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 初始值 | string \| number | - |
| input-width | 输入框宽度 | string | `` |
| button-size | 操作符+、-尺寸 | string | `` |
| min | 最小值限制 | string \| number | `1` |
| max | 最大值限制 | string \| number | `9999` |
| step | 步长 | string \| number | `1` |
| decimal-places | 设置保留的小数位 | string \| number | `0` |
| disabled | 禁用所有功能 | boolean | `false` |
| readonly | 只读状态禁用输入框操作行为 | boolean | `false` |

### Slots

| 名称 | 说明 |
| --- | --- |
| left-icon | 自定义左侧按钮 |
| right-icon | 自定义右侧按钮 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| add | 点击增加按钮时触发 | `(event: Event)` |
| reduce | 点击减少按钮时触发 | `(event: Event) ` |
| overlimit | 点击不可用的按钮时触发 | `(event: Event,type:string (reduce or add) )` |
| change | 值改变时触发 | `(value: number , event : Event) ` |
| blur | 输入框失去焦点时触发 | `(event: Event)  ` |
| focus | 输入框获得焦点时触发 | `(event: Event ) ` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-inputnumber-icon-color | _var(--nut-title-color)_ |
| --nut-inputnumber-icon-void-color | _var(--nut-disable-color)_ |
| --nut-inputnumber-icon-size | _20px_ |
| --nut-inputnumber-input-width | _40px_ |
| --nut-inputnumber-input-font-size | _12px_ |
| --nut-inputnumber-input-font-color | _var(--nut-title-color)_ |
| --nut-inputnumber-input-background-color | _var(--nut-help-color)_ |
| --nut-inputnumber-input-border-radius | _4px_ |
| --nut-inputnumber-input-margin | _0 6px_ |
| --nut-inputnumber-input-border | _0_ |
| --nut-inputnumber-border | _0_ |
| --nut-inputnumber-border-radius | _0_ |
| --nut-inputnumber-height | _auto_ |
| --nut-inputnumber-line-height | _normal_ |
| --nut-inputnumber-border-box | _content-box_ |
| --nut-inputnumber-display | _inline-flex_ |
