var demoModel = function (nameLc) {
  var teml = {
    source: `<template>
  <view :class="classes" @click="handleClick">
    <view>{{ data }}</view>
  </view>
</template>
<script lang="ts">
import { reactive, toRefs, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('${nameLc}');
export default create({
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],

  setup(props, { emit }) {
    const state = reactive({ 
      data: 'Welcome to developing components'
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const handleClick = (event: Event) => {
      emit('click', event);
    };

    return { ...toRefs(state), classes, handleClick };
  }
});
</script>
`,
    demo: `<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell>
      <nut-${nameLc}></nut-${nameLc}>
    </nut-cell>
  </div>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('${nameLc}');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () => useTranslate({
  'zh-CN': {
    basic: '基础用法'
  },
  'en-US': {
    basic: 'Basic Usage'
  }
})
initTranslate();
</script>
`,
    taroDemo: `<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-${nameLc}></nut-${nameLc}>
    </nut-cell>
  </div>
</template>
<script setup lang="ts">
</script>
`,
    doc: `# ${nameLc} 

### 介绍

基于 xxxxxxx

### 安装

\`\`\`javascript

import { createApp } from 'vue';
// vue
import {  } from '@nutui/nutui';
// taro
import {  } from '@nutui/nutui-taro';

const app = createApp();
app.use();

\`\`\`

### 基础用法

:::demo

\`\`\`html
<template>
  
</template>
<script setup>
</script>
\`\`\`

:::

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| name         | 图标名称或图片链接               | String | -                |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击图标时触发 | event: Event |
`,
    docEN: `# ${nameLc} 

### Intro

### Install

\`\`\`javascript

import { createApp } from 'vue';
// vue
import {  } from '@nutui/nutui';
// taro
import {  } from '@nutui/nutui-taro';

const app = createApp();
app.use();

\`\`\`

### Basic Usage

:::demo

\`\`\`html
<template>
  
</template>
<script setup>
</script>
\`\`\`

:::

## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| name         | description               | String | -                |

### Events

| Event | Description           | Arguments     |
|--------|----------------|--------------|
| click  | description | event: Event |
`
  };

  return teml;
};
module.exports = demoModel;
