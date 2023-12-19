# Signature 签名

### 介绍

基于 Canvas 的签名组件。默认竖屏模式使用，如使用横屏模式，请开发者自行设置旋转角度或者宽高。

### 安装

```js
import { createApp } from 'vue';
import { Signature } from '@nutui/nutui-taro';

const app = createApp();
app.use(Signature);
```

### 基础用法

> demo: signature basic business

### 修改颜色和签字粗细

> demo: signature custom business

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| custom-class | 自定义 `class` | string | `-` |
| line-width | 线条的宽度 | number | `3` |
| stroke-style | 绘图笔触颜色 | string | `#000` |
| type | 图片格式 | string | `png` |
| un-support-tpl | 不支持 Canvas 情况下的展示文案 | string | `对不起，当前浏览器不支持Canvas，无法使用本控件！` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| start | 签名开始回调函数（指某次笔画的开始） | `-` |
| signing | 正在签名的回调函数（指某次笔画进行中） | `event` |
| end | 签名结束回调函数（指某次笔画的结束） | `-` |
| confirm | 点击确认按钮触发事件回调函数 | `canvas和签名图片展示的 data URI，<br>如未绘制，则返回提示信息和空 data URI` |
| clear | 点击重签按钮触发事件回调函数 | `-` |
