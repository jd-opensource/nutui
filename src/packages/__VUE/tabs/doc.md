# Tabs 选项卡切换

### 介绍

常用于平级区域大块内容的的收纳和展现，支持内嵌标签形式和渲染循环数据形式

### 安装

```js
import { createApp } from 'vue';
import { Tabs, TabPane } from '@nutui/nutui';

const app = createApp();
app.use(Tabs);
app.use(TabPane);
```

### 基础用法

:::demo

```vue
<template>
  <nut-tabs v-model="value">
    <nut-tab-pane title="Tab 1" pane-key="0"> Tab 1 </nut-tab-pane>
    <nut-tab-pane title="Tab 2" pane-key="1"> Tab 2 </nut-tab-pane>
    <nut-tab-pane title="Tab 3" pane-key="2"> Tab 3 </nut-tab-pane>
  </nut-tabs>
</template>
<script setup>
import { ref } from 'vue';
const value = ref('0');
</script>
```

:::

### 手势滑动切换

:::demo

```vue
<template>
  <nut-tabs v-model="value" swipeable>
    <nut-tab-pane title="Tab 1" pane-key="0"> Tab 1 </nut-tab-pane>
    <nut-tab-pane title="Tab 2" pane-key="1"> Tab 2 </nut-tab-pane>
    <nut-tab-pane title="Tab 3" pane-key="2"> Tab 3 </nut-tab-pane>
  </nut-tabs>
</template>
<script setup>
import { ref } from 'vue';
const value = ref('0');
</script>
```

:::

### 基础用法-微笑曲线

:::demo

```vue
<template>
  <nut-tabs v-model="value" type="smile">
    <nut-tab-pane title="Tab 1" pane-key="0"> Tab 1 </nut-tab-pane>
    <nut-tab-pane title="Tab 2" pane-key="1"> Tab 2 </nut-tab-pane>
    <nut-tab-pane title="Tab 3" pane-key="2"> Tab 3 </nut-tab-pane>
  </nut-tabs>
</template>
<script setup>
import { ref } from 'vue';
const value = ref('0');
</script>
```

:::

### TabPane 自动高度

自动高度。设置为 true 时，nut-tabs 和 nut-tabs\_\_content 会随着当前 nut-tab-pane 的高度而发生变化。

:::demo

```vue
<template>
  <nut-tabs v-model="value" auto-height>
    <nut-tab-pane title="Tab 1" pane-key="0">
      <p>Tab 1</p>
      <p>Tab 1</p>
      <p>Tab 1</p>
      <p>Tab 1</p>
    </nut-tab-pane>
    <nut-tab-pane title="Tab 2" pane-key="1"> Tab 2 </nut-tab-pane>
    <nut-tab-pane title="Tab 3" pane-key="2"> Tab 3 </nut-tab-pane>
  </nut-tabs>
</template>
<script setup>
import { ref } from 'vue';
const value = ref('0');
</script>
```

:::

### 数据异步渲染 3s

:::demo

```vue
<template>
  <nut-tabs v-model="value">
    <nut-tab-pane v-for="item in list" :title="'Tab ' + item" :pane-key="item"> Tab {{ item }} </nut-tab-pane>
  </nut-tabs>
</template>
<script setup>
import { ref } from 'vue';
const value = ref('0');
const list = ref(new Array(2).fill(0).map((_, index) => index));
setTimeout(() => {
  list.value.push(999);
}, 3000);
</script>
```

:::

### 数量多，滚动操作

可通过`direction`属性修改标题栏自动滚动方向。

在`taro`环境下，必须设置`name`以开启标题栏自动滚动功能。

:::demo

```vue
<template>
  <nut-tabs v-model="value" title-scroll title-gutter="10" name="tabName">
    <nut-tab-pane v-for="item in list" :title="'Tab ' + item" :pane-key="item"> Tab {{ item }} </nut-tab-pane>
  </nut-tabs>
</template>
<script setup>
import { ref } from 'vue';
const value = ref('0');
const list = new Array(10).fill(0).map((_, index) => index);
</script>
```

:::

### 左右布局

:::demo

```vue
<template>
  <nut-tabs style="height:300px" v-model="value" title-scroll direction="vertical">
    <nut-tab-pane v-for="item in list" :pane-key="item" :title="'Tab ' + item"> Tab {{ item }} </nut-tab-pane>
  </nut-tabs>
</template>
<script setup>
import { ref } from 'vue';
const value = ref('0');
const list = new Array(2).fill(0).map((_, index) => index);
</script>
```

:::

### 左右布局-微笑曲线

:::demo

```vue
<template>
  <nut-tabs style="height:300px" v-model="value" type="smile" title-scroll direction="vertical">
    <nut-tab-pane v-for="item in list" :pane-key="item" :title="'Tab ' + item"> Tab {{ item }} </nut-tab-pane>
  </nut-tabs>
</template>
<script setup>
import { ref } from 'vue';
const value = ref('0');
const list = new Array(2).fill(0).map((_, index) => index);
</script>
```

:::

### 标签栏字体尺寸 large normal small

:::demo

```vue
<template>
  <nut-tabs v-model="value" size="large">
    <nut-tab-pane title="Tab 1" pane-key="0"> Tab 1 </nut-tab-pane>
    <nut-tab-pane title="Tab 2" pane-key="1"> Tab 2 </nut-tab-pane>
    <nut-tab-pane title="Tab 3" pane-key="2"> Tab 3 </nut-tab-pane>
  </nut-tabs>
  <nut-tabs v-model="value" size="normal">
    <nut-tab-pane title="Tab 1" pane-key="0"> Tab 1 </nut-tab-pane>
    <nut-tab-pane title="Tab 2" pane-key="1"> Tab 2 </nut-tab-pane>
    <nut-tab-pane title="Tab 3" pane-key="2"> Tab 3 </nut-tab-pane>
  </nut-tabs>
  <nut-tabs v-model="value" size="small">
    <nut-tab-pane title="Tab 1" pane-key="0"> Tab 1 </nut-tab-pane>
    <nut-tab-pane title="Tab 2" pane-key="1"> Tab 2 </nut-tab-pane>
    <nut-tab-pane title="Tab 3" pane-key="2"> Tab 3 </nut-tab-pane>
  </nut-tabs>
</template>
<script setup>
import { ref } from 'vue';
const value = ref('0');
</script>
```

:::

### 自定义标签栏

:::demo

```vue
<template>
  <nut-tabs v-model="value">
    <template #titles>
      <div
        class="nut-tabs__titles-item"
        @click="value = item.paneKey"
        :class="{ active: value == item.paneKey }"
        :key="item.paneKey"
        v-for="item in list"
      >
        <Dongdong />
        <span class="nut-tabs__titles-item__text">{{ item.title }}</span>
        <span class="nut-tabs__titles-item__line"></span>
      </div>
    </template>
    <nut-tab-pane v-for="item in list" :pane-key="item.paneKey"> {{ item.title }} </nut-tab-pane>
  </nut-tabs>
</template>
<script setup>
import { ref } from 'vue';
import { Dongdong } from '@nutui/icons-vue';
const value = ref('c1');
const list = ref([
  {
    title: '自定义 1',
    paneKey: 'c1'
  },
  {
    title: '自定义 2',
    paneKey: 'c2'
  },
  {
    title: '自定义 3',
    paneKey: 'c3'
  }
]);
</script>
```

:::

## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 绑定当前选中标签的标识符 | number \| string | `0` |
| color | 标签选中色 | string | `#1a1a1a` |
| background | 标签栏背景颜色 | string | `#f5f5f5` |
| direction | 使用横纵方向 可选值 horizontal、vertical | string | `horizontal` |
| type | 选中底部展示样式 可选值 line、smile | string | `line` |
| swipeable`4.0.3` | 是否开启手势左右滑动切换 | boolean | `false` |
| title-scroll | 标签栏是否可以滚动 | boolean | `false` |
| ellipsis | 是否省略过长的标题文字 | boolean | `true` |
| animated-time | 切换动画时长，单位 ms。0 代表无动画，此时必须设置 `pane-key` | number \| string | `300` |
| title-gutter | 标签间隙 | number \| string | `0` |
| size | 标签栏字体尺寸大小 可选值 large normal small | string | `normal` |
| auto-height | 自动高度。设置为 true 时，nut-tabs 和 nut-tabs\_\_content 会随着当前 nut-tab-pane 的高度而发生变化。 | boolean | `false` |
| sticky | 是否使用粘性布局 | boolean | `false` |
| top | 粘性布局下的吸顶距离 | number | `0` |
| name | 在`taro`环境下，必须设置`name`以开启标题栏自动滚动功能。 | string | '' |

### Tabs Slots

| 名称 | 说明 |
| --- | --- |
| titles | 自定义导航区域 |
| default | 自定义内容 |

### TabPane Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | string |  |
| pane-key | 标签 Key , 匹配的标识符 | string | 默认索引 0,1,2... |
| disabled | 是否禁用标签 | boolean | false |

### TabPane Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |

### Tabs Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击标签时触发 | {title,paneKey,disabled} |
| change | 当前激活的标签改变时触发 | {title,paneKey,disabled} |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-tabs-tab-smile-color | _var(--nut-primary-color)_ |
| --nut-tabs-titles-border-radius | _0_ |
| --nut-tabs-titles-item-large-font-size | _var(--nut-font-size-3)_ |
| --nut-tabs-titles-item-font-size | _var(--nut-font-size-2)_ |
| --nut-tabs-titles-item-small-font-size | _var(--nut-font-size-1)_ |
| --nut-tabs-titles-item-color | _var(--nut-title-color)_ |
| --nut-tabs-titles-item-active-color | _var(--nut-title-color)_ |
| --nut-tabs-titles-background-color | _var(--nut-help-color)_ |
| --nut-tabs-horizontal-tab-line-color | _linear-gradient(90deg,var(--nut-primary-color) 0%,rgba(#fa2c19, 0.15) 100%)_ |
| --nut-tabs-horizontal-titles-height | _46px_ |
| --nut-tabs-horizontal-titles-item-min-width | _50px_ |
| --nut-tabs-horizontal-titles-item-active-line-width | _40px_ |
| --nut-tabs-vertical-tab-line-color | _linear-gradient(180deg,var(--nut-primary-color) 0%,rgba(#fa2c19, 0.15) 100%)_ |
| --nut-tabs-vertical-titles-item-height | _40px_ |
| --nut-tabs-vertical-titles-item-active-line-height | _14px_ |
| --nut-tabs-vertical-titles-width | _100px_ |
| --nut-tabs-titles-item-line-border-radius | _0_ |
| --nut-tabs-titles-item-line-opacity | _1_ |
