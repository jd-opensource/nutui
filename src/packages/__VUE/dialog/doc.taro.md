# Dialog 对话框

### 介绍

模态对话框，在浮层中显示，引导用户进行相关操作，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。

### 安装

```js
import { createApp } from 'vue'
import { Dialog } from '@nutui/nutui-taro'

const app = createApp()
app.use(Dialog)
```

### 使用方式

:::

```vue
<template>
  <nut-cell title="基础弹框" @click="baseClick"></nut-cell>
  <nut-dialog title="基础弹框" content="这是基础弹框。" v-model:visible="visible1" @cancel="onCancel" @ok="onOk" />

  <nut-cell title="无标题弹框" @click="noTitleClick"></nut-cell>
  <nut-dialog content="这是无标题弹框。" v-model:visible="visible2" @cancel="onCancel" @ok="onOk" />

  <nut-cell title="提示弹框" @click="tipsClick"></nut-cell>
  <nut-dialog
    no-cancel-btn
    title="温馨提示"
    content="这是提示弹框。"
    v-model:visible="visible3"
    @cancel="onCancel"
    @ok="onOk"
  />

  <nut-cell title="底部按钮 垂直调用" @click="verticalClick"></nut-cell>
  <nut-dialog
    footer-direction="vertical"
    teleport="#app"
    title="温馨提示"
    content="这是提示弹框。"
    v-model:visible="visible5"
  />

  <nut-cell title="异步关闭" @click="componentClick"></nut-cell>
  <nut-dialog title="异步关闭" :content="closeContent" :visible="visible4" @cancel="onCancel" @ok="onOkAsync" />
</template>

<script setup>
import { ref } from 'vue';
const visible1 = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
const visible4 = ref(false);
const visible5 = ref(false);
const closeContent = ref('');
const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));
const countDown = (second: number) => `倒计时 ${second} 秒`;

const onCancel = () => {
  console.log('event cancel');
};
const onOk = () => {
  console.log('event ok');
};
const onOkAsync = () => {
  sleep()
    .then(() => {
      closeContent.value = countDown(2);
      return sleep();
    })
    .then(() => {
      closeContent.value = countDown(1);
      return sleep();
    })
    .then(() => {
      closeContent.value = countDown(0);
    })
    .then(() => {
      visible4.value = false;
    });
};

const baseClick = () => {
  visible1.value = true;
};
const noTitleClick = () => {
  visible2.value = true;
};
const tipsClick = () => {
  visible3.value = true;
};

const componentClick = () => {
  closeContent.value = `点击确定时3s后关闭`;
  visible4.value = true;
};

const verticalClick = () => {
  visible5.value = true;
};
</script>
```

:::

### lock-scroll

`lock-scroll` 属性，锁定背景，禁止滚动穿透，默认值为 `true`。

```vue
<template>
  <nut-dialog>
    <view>在该内容区域溢出时，无法滑动</view>
  </nut-dialog>
</template>
```

如果需要内容支持溢出滚动，则需要包裹一层 `scroll-view` 组件。

```vue
<template>
  <nut-dialog>
    <scroll-view>
      <view>在该内容溢出时，则可以正常滑动</view>
    </scroll-view>
  </nut-dialog>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | string | - |
| content | 内容，支持 `HTML` 和组件 | string \| VNode | - |
| teleport | 指定挂载节点 | string | `"body"` |
| close-on-click-overlay | 点击蒙层是否关闭对话框 | boolean | `false` |
| no-footer | 是否隐藏底部按钮栏 | boolean | `false` |
| no-ok-btn | 是否隐藏确定按钮 | boolean | `false` |
| no-cancel-btn | 是否隐藏取消按钮 | boolean | `false` |
| cancel-text | 取消按钮文案 | string | `”取消“` |
| ok-text | 确定按钮文案 | string | `”确 定“` |
| cancel-auto-close | 取消按钮是否默认关闭弹窗 | boolean | `true` |
| ok-auto-close`4.2.1` | 确认按钮是否默认关闭弹窗 | boolean | `true` |
| text-align | 文字对齐方向，可选值同 `css` 的 `text-align` | string | `"center"` |
| close-on-popstate | 是否在页面回退时自动关闭 | boolean | `false` |
| lock-scroll | 背景是否锁定 | boolean | `true` |
| footer-direction | 使用横纵方向 可选值 `horizontal`、`vertical` | string | `horizontal` |
| overlay-class | 自定义遮罩类名 | string | - |
| overlay-style | 自定义遮罩样式 | CSSProperties | - |
| pop-class | 自定义 `popup` 弹框类名 | string | - |
| pop-style | 自定义 `popup` 弹框样式 | CSSProperties | - |
| custom-class | 自定义 `class` | string | - |
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
