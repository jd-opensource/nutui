# Navbar

### Intro

Provide navigation function, often used at the top of the page.

### Install

```js
import { createApp } from 'vue';
import { Navbar } from '@nutui/nutui';

const app = createApp();
app.use(Navbar);
```

### Basic Usage

:::demo

```vue
<template>
  <nut-navbar @on-click-back="back" @on-click-title="title" title="Order details">
    <template #left>
      <div>Back</div>
    </template>
    <template #right>
      <ShareN width="16px" />
    </template>
  </nut-navbar>

  <nut-navbar
    @on-click-back="back"
    @on-click-title="title"
    @on-click-right="rightClick"
    title="Browsing history"
    desc="Clear"
  ></nut-navbar>

  <nut-navbar
    :left-show="false"
    @on-click-back="back"
    @on-click-title="title"
    @on-click-icon="icon"
    @on-click-right="rightClick"
    title="Cart"
    :titleIcon="true"
    desc="Edit"
  >
    <template #title-icon>
      <Cart2 width="16px" />
    </template>
    <template #right>
      <MoreX class="right" width="16px" />
    </template>
  </nut-navbar>
</template>

<script setup>
import { ShareN, Cart2, MoreX } from '@nutui/icons-vue';
const back = () => {
  console.log('Click Back');
};
const title = () => {
  console.log('Click Title');
};
const rightClick = () => {
  console.log('Click Right');
};
const icon = () => {
  console.log('Click Icon');
};
</script>
```

:::

### Customize the middle content of the navigation bar

:::demo

```vue
<template>
  <nut-navbar @on-click-back="back" @on-click-title="title" @on-click-right="rightClick" desc="Edit">
    <template #content>
      <nut-tabs v-model="tab1value" @click="changeTab">
        <nut-tab-pane title="Title1"> </nut-tab-pane>
        <nut-tab-pane title="Title2"> </nut-tab-pane>
      </nut-tabs>
    </template>

    <template #right>
      <MoreX class="right" width="16px"></MoreX>
    </template>
  </nut-navbar>
</template>

<script setup>
import { ref } from 'vue';
import { MoreX } from '@nutui/icons-vue';
const tab1value = ref(0);
const back = () => {
  console.log('Click Back');
};
const title = () => {
  console.log('Click Title');
};
const rightClick = () => {
  console.log('Click Right');
};
const changeTab = (tab) => {
  tab1value.value = tab.paneKey;
};
</script>
```

:::

### Multi-tab switching navigation

:::demo

```vue
<template>
  <nut-navbar @on-click-back="back">
    <template #content>
      <nut-tabs v-model="tab2value" @click="changeTabList">
        <nut-tab-pane title="Title1"> </nut-tab-pane>
        <nut-tab-pane title="Title2"> </nut-tab-pane>
        <nut-tab-pane title="Title3"> </nut-tab-pane>
      </nut-tabs>
    </template>

    <template #right>
      <HorizontalN class="right" width="16px"></HorizontalN>
    </template>
  </nut-navbar>
</template>

<script setup>
import { ref } from 'vue';
import { HorizontalN } from '@nutui/icons-vue';
const tab2value = ref(0);
const back = () => {
  console.log('Click Back');
};
const changeTabList = (tab) => {
  tab2value.value = tab.paneKey;
};
</script>
```

:::

## API

### Props

| Attribute           | Description                                          | Type             | Default |
| ------------------- | ---------------------------------------------------- | ---------------- | ------- |
| title               | Title                                                | string           | -       |
| left-text           | Left Text                                            | string           | -       |
| desc                | Desc                                                 | string           | -       |
| left-show           | Whether to show the left arrow                       | boolean          | `false` |
| title-icon          | Whether to show icon in title                        | boolean          | `false` |
| border              | Whether to show bottom border                        | boolean          | `false` |
| fixed               | Is it pinned to the top                              | boolean          | `false` |
| placeholder         | Whether to generate a placeholder element when fixed | boolean          | `false` |
| safe-area-inset-top | Whether to enable top safety zone adaptation         | boolean          | `false` |
| z-index             | Z-index                                              | number ｜ string | -       |

### Events

| Event          | Description                     | Arguments   |
| -------------- | ------------------------------- | ----------- |
| on-click-title | Click page title event          | event:Event |
| on-click-icon  | Click the page title icon event | event:Event |
| on-click-right | Click right button event        | event:Event |
| on-click-back  | Click left Icon event           | event:Event |

### Slots

| Name       | Description                                        |
| ---------- | -------------------------------------------------- |
| left       | Customize left content                             |
| right      | Customize the content on the right                 |
| content    | Customize the middle content of the navigation bar |
| left-show  | Custom icon of left arrow                          |
| title-icon | Custom icon in header                              |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                           | Default Value                            |
| ------------------------------ | ---------------------------------------- |
| --nut-navbar-height            | _44px_                                   |
| --nut-navbar-margin-bottom     | _20px_                                   |
| --nut-navbar-padding           | _0 16px_                                 |
| --nut-navbar-background        | _var(--nut-white)_                       |
| --nut-navbar-box-shadow        | _0px 1px 7px 0px rgba(237, 238, 241, 1)_ |
| --nut-navbar-color             | _var(--nut-title-color2)_                |
| --nut-navbar-title-base-font   | _var(--nut-font-size-2)_                 |
| --nut-navbar-title-font        | _var(--nut-font-size-2)_                 |
| --nut-navbar-title-font-weight | _0_                                      |
| --nut-navbar-title-font-color  | _var(--nut-navbar-color)_                |
| --nut-navbar-title-width       | _100px_                                  |
| --nut-navbar-title-icon-margin | _0 0 0 13px_                             |
