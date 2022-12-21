# ConfigProvider 全局配置

### 介绍

用于全局配置 NutUI 组件，提供暗黑模式。

### 安装

```javascript

import { createApp } from 'vue';
import { ConfigProvider } from '@nutui/nutui';

const app = createApp();
app.use(ConfigProvider);

```

### 深色模式

将 ConfigProvider 组件的 `theme` 属性设置为 `dark`，可以开启深色模式。

深色模式会全局生效，使页面上的所有 NutUI 组件变为深色风格。

:::demo

```html
<template>
  <nut-config-provider :theme="theme">
      <nut-cell title="切换暗黑">
        <template v-slot:link>
          <nut-switch v-model="switchChecked" @change="switchChange" />
        </template>
      </nut-cell>
      <nut-cell title="我是标题" sub-title="副标题描述" desc="描述文字"></nut-cell>
  </nut-config-provider>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const switchChecked = ref(false);
      const theme = ref('');
      const switchChange = (v: boolean) => {
        theme.value = v ? 'dark' : '';
      };

      return { translate, switchChecked, switchChange, theme };
    }
  };
</script>
```

:::

### 动态主题
ConfigProvider 组件提供了覆盖 CSS 变量的能力，你需要在根节点包裹一个 ConfigProvider 组件，并通过 theme-vars 属性来配置一些主题变量
:::demo

```html
<template>
    <nut-config-provider :theme-vars="themeVars">
      <nut-form>
        <nut-form-item :label="动态主题">
          <nut-range hidden-tag v-model="range"></nut-range>
        </nut-form-item>
      </nut-form>
    </nut-config-provider>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const range = ref(30);
       const themeVars = {
      rangeBgColor: 'rgba(25,137,250,0.15)',
      rangeBarBgColor: '#0289fa',
      rangeBarBtnBorder: '1px solid #0289fa'
    };

      return { range, themeVars };
    }
  };
</script>
```

:::


## API

### Props

| 参数  | 说明                                             | 类型   | 默认值 |
|-------|--------------------------------------------------|--------|--------|
| theme | 主题风格，设置为 `dark` 来开启深色模式，全局生效 | String | -      |
| tag   | 根节点对应的 HTML 标签名                         | String | div    |