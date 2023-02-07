# Badge

### Intro

A red dot, number or text appearing in the upper right corner of the icon or text indicates that there is new content or pending information.

### Install

```javascript

import { createApp } from 'vue';
import { Badge } from '@nutui/nutui';

const app = createApp();
app.use(Badge);
```


### Basic Usage

:::demo
```html
<template>
  <div class="demo">
    <nut-badge :value="8">
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge :value="76">
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge value="NEW">
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge dot>
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
  </div>
</template>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

### Max

:::demo
```html
<template>
  <div class="demo">
    <nut-badge :value="200" :max="9">
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge :value="200" :max="20">
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge :value="200" :max="99">
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
  </div>
</template>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

### Custom Color

:::demo
```html
<template>
  <div class="demo">
    <nut-badge :value="8" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge :value="76" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge value="NEW" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge dot color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
  </div>
</template>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

### Custom Content

:::demo
```html
<template>
  <div class="demo">
    <nut-badge>
      <template #icon>
        <Check color="#ffffff" width="12px" height="12px"></Check>
      </template>
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge>
      <template #icon>
        <Link color="#ffffff" width="12px" height="12px"></Link>
      </template>
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge>
      <template #icon>
        <Download color="#ffffff" width="12px" height="12px"></Download>
      </template>
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
  </div>
</template>

<script setup>
import { Check, Link, Download } from '@nutui/icons-vue';
</script>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

### Custom Position 

:::demo
```html
<template>
  <div class="demo">
    <nut-badge :value="8" top="5" right="5">
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge :value="76" top="10" right="10">
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge value="NEW">
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
   </div>
</template>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

### Standalone

:::demo
```html
<template>
  <div class="demo">
    <nut-badge :value="8"> </nut-badge>
    <nut-badge :value="76"> </nut-badge>
    <nut-badge value="NEW"> </nut-badge>
  </div>
</template>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

## API
### Props 

| Attribute | Description | Type | Default |
|---------|--------------------------------------------|---------|-----------|
| value   | content                                 | string  | `-`         |
| max     | When value is a numeric value, the maximum value                     | number  | `10000`   |
| z-index | badge z-index                          | number  | `10`      |
| dot     | whether to dot                                 | boolean | `false`   |
| bubble(`>v4.0.0`)  | whether to bubble                               | Boolean | `false`   |
| hidden  | whether to hide                                   | boolean | `false`   |
| top     | Up and down offset, support unit setting, for example: 5px | number  | `0`       |
| right   | Left and right offset, support unit setting, for example: 5px | number  | `0`       |
| color   |  badge background color    | string  | `#fa2c19` |

### Slots

| Name   | Description           |
|---------|--------------|
| default | Default slot |
| icon | 	Icon slot |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --------------------------------------- | -------------------------- |
| --nut-badge-background-color| _linear-gradient(135deg, var(--nut-primary-color) 0%, var(--nut-primary-color-end) 100%)_ |
| --nut-badge-color| _#fff_ |
| --nut-badge-font-size| _var(--nut-font-size-1)_ |
| --nut-badge-border-radius| _14px_ |
| --nut-badge-icon-padding| _4px_ |
| --nut-badge-padding| _0 5px_ |
| --nut-badge-content-transform| _translate(50%, -50%)_ |
| --nut-badge-z-index| _1_ |
| --nut-badge-dot-width| _7px_ |
| --nut-badge-dot-height| _7px_ |
| --nut-badge-dot-border-radius| _7px_ |
| --nut-badge-dot-padding| _0px_ |
