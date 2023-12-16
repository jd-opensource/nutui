# Empty

### Intro

Occupation reminder when empty.

### Install

```js
import { createApp } from 'vue';
import { Empty } from '@nutui/nutui';

const app = createApp();
app.use(Empty);
```

### Basic Usage

:::demo

```vue
<template>
  <nut-empty description="no data"></nut-empty>
</template>
```

:::

### Image Type

:::demo

```vue
<template>
  <nut-tabs v-model="tabValue">
    <nut-tab-pane title="empty">
      <nut-empty image="empty" description="no cotent"></nut-empty>
    </nut-tab-pane>
    <nut-tab-pane title="error">
      <nut-empty image="error" description="error"></nut-empty>
    </nut-tab-pane>
    <nut-tab-pane title="no network">
      <nut-empty image="network" description="network"></nut-empty>
    </nut-tab-pane>
  </nut-tabs>
</template>
<script setup>
import { ref } from 'vue';
const tabValue = ref(0);
</script>
```

:::

### Custom Image

:::demo

```vue
<template>
  <nut-empty
    image="https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png"
    description="Description"
  ></nut-empty>
</template>
```

:::

### Bottom Content

:::demo

```vue
<template>
  <nut-empty image="error" description="Failed to load">
    <div style="margin-top: 10px">
      <nut-button icon="refresh" type="primary">Retry</nut-button>
    </div>
  </nut-empty>
</template>
```

:::

## Empty

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| image | Image type, can be set to `empty`, `error`, `network` or image `URL` | string | `empty` |
| image-size | Image size | number \| string | `-` |
| description | Description | string | `-` |

### Slots

| Name | Description |
| --- | --- |
| default | Custom bottom content |
| image | Custom image |
| description | Custom description |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-empty-padding | _32px 0_ |
| --nut-empty-image-size | _170px_ |
| --nut-empty-description-margin-top | _4px_ |
| --nut-empty-description-color | _#666666_ |
| --nut-empty-description-font-size | _14px_ |
| --nut-empty-description-line-height | _20px_ |
| --nut-empty-description-padding | _0 40px_ |
