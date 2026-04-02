# Picker

### 介绍

提供多个选项集合供用户选择其中一项，通常与弹出层组件配合使用。

### 安装

```js
import { createApp } from 'vue'
import { Picker } from '@nutui/nutui-taro'

const app = createApp()
app.use(Picker)
```

### 基础用法

> demo: picker basic dentry

### 默认选中项

通过设置 `v-model` 实现默认选中项，`v-model` 是一个包含每项配置 value 值的数组。

> demo: picker vmodel dentry

### 搭配 Popup 使用

Picker 通常作为用于辅助表单填写，可以搭配 Popup 实现效果。

> demo: picker popup dentry

### 多列展示

`columns` 属性可以通过二维数组的形式配置多列选择。

> demo: picker columns dentry

### 多级联动

使用 `columns` 属性的 `children` 字段可以实现选项级联的效果。

> demo: picker cascader dentry

### 异步获取

在实际开发中，大部分情况 `Columns` 属性的数据是通过异步方式获取的。

> demo: picker async dentry

### 自定义字段名 v4.1.4

可以使用 `field-names` 属性自定义 `columns` 中数据的格式。

> demo: picker field dentry

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 默认选中项 | Array | `[]` |
| columns | 对象数组，配置每一列显示的数据 | PickerOption[] \| PickerOption[][] | - |
| field-names`v4.1.4` | 自定义 columns 中的字段 | object | `{ text: 'text', value: 'value', children: 'children', className: 'className' }` |
| title | 设置标题 | string | - |
| cancel-text | 取消按钮文案 | string | `取消` |
| ok-text | 确定按钮文案 | string | `确定` |
| swipe-duration | 惯性滚动时长 | number \| string | `1000` |
| visible-option-num | 可见的选项个数 | number \| string | `7` |
| option-height | 选项高度 | number \| string | `36` |
| show-toolbar | 是否显示顶部导航 | boolean | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击确定按钮时触发 | `{ selectedValue, selectedOptions }` |
| cancel | 点击取消按钮时触发 | `{ selectedValue, selectedOptions }` |
| change | 选项发生改变时触发 | `{ columnIndex, selectedValue, selectedOptions }` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义滑动数据底部区域 |
| top | 自定义滑动数据顶部区域 |

### PickerOption 数据结构

| 键名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 选项的文字内容 | string \| number | - |
| value | 选项对应的值，且唯一 | string \| number | - |
| children | 用于级联选项 | Array | - |
| className | 添加额外的类名 | string | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-picker-cancel-color | _#808080_ |
| --nut-picker-ok-color | _var(--nut-primary-color)_ |
| --nut-picker-bar-cancel-font-size | _14px_ |
| --nut-picker-bar-ok-font-size | _14px_ |
| --nut-picker-bar-button-padding | _0 15px_ |
| --nut-picker-bar-title-font-size | _16px_ |
| --nut-picker-bar-title-color | _var(--nut-title-color)_ |
| --nut-picker-bar-title-font-weight | _normal_ |
| --nut-picker-item-height | _36px_ |
| --nut-picker-item-text-color | _var(--nut-title-color)_ |
| --nut-picker-item-text-font-size | _14px_ |
| --nut-picker-item-active-line-border | _1px solid #d8d8d8_ |
