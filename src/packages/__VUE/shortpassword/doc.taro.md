# ShortPassword 短密码

### 介绍

短密码输入框，可用于输入密码、短信验证码等

### 安装

```js
import { createApp } from 'vue'
import { ShortPassword, NumberKeyboard } from '@nutui/nutui-taro'

const app = createApp()
app.use(ShortPassword)
app.use(NumberKeyboard)
```

### 基础用法

> demo: shortpassword basic dentry

### 自定义密码长度 4

> demo: shortpassword length dentry

### 忘记密码提示语事件回调

> demo: shortpassword forget dentry

### 错误提示语

> demo: shortpassword error dentry

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 密码初始值 | string |  |
| v-model:visible | 是否展示短密码框 | boolean | `false` |
| title | 标题 | string | `请输入密码` |
| desc | 密码框描述 | string | `您使用了虚拟资产，请进行验证` |
| tips | 提示语 | string | `忘记密码` |
| close-on-click-overlay | 是否点击遮罩关闭 | boolean | `true` |
| length | 密码长度，取值为 4~6 | string \| number | `6` |
| error-msg | 错误信息提示 | string | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 点击关闭图标或者遮罩时触发事件 | - |
| complete | 输入完成的回调 | `value:string` |
| focus | 输入框聚焦时触发 | - |
| tips | 点击提示语时触发 | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-shortpassword-background-color | _rgba(245, 245, 245, 1)_ |
| --nut-shortpassword-border-color | _#ddd_ |
| --nut-shortpassword-error | _var(--nut-primary-color)_ |
| --nut-shortpassword-forget | _rgba(128, 128, 128, 1)_ |
