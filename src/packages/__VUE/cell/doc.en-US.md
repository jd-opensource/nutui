# Cell

### Intro

The cell is a single display item in the list.

### Install

```js
import { createApp } from 'vue';
import { Cell, CellGroup } from '@nutui/nutui';

const app = createApp();
app.use(Cell);
app.use(CellGroup);
```

### Basic Usage

:::demo

```vue
<template>
  <nut-cell title="Title" desc="Description"></nut-cell>
  <nut-cell title="Title" sub-title="Subtitle Description" desc="Desc"></nut-cell>
  <nut-cell title="Click Test" @click="click"></nut-cell>
  <nut-cell title="Round Radius 0" round-radius="0"></nut-cell>
</template>
<script setup>
const click = () => {
  console.log('Click');
};
</script>
```

:::

### Size setting large

:::demo

```vue
<template>
  <nut-cell size="large" title="Title" desc="Description"></nut-cell>
  <nut-cell size="large" title="Title" sub-title="Subtitle Description" desc="Desc"></nut-cell>
</template>
```

:::

### Use Slots

:::demo

```vue
<template>
  <nut-cell>
    <div>Content</div>
  </nut-cell>
</template>
```

:::

### Use Slots title

:::demo

```vue
<template>
  <nut-cell desc="Description">
    <template #title>
      <span>Title <b style="color: red">1</b></span>
    </template>
  </nut-cell>
</template>
```

:::

### Link | CellGroup Usage

:::demo

```vue
<template>
  <nut-cell-group title="Link | CellGroup Usage" desc="Usage nut-cell-group support title desc slots">
    <nut-cell title="Link Usage" is-link></nut-cell>
    <nut-cell title="URL Jump" desc="https://m.jd.com" is-link url="https://m.jd.com"></nut-cell>
    <nut-cell title="Router Jump ’/‘ " to="/"></nut-cell>
  </nut-cell-group>
</template>
```

:::

### Customize the right arrow area

:::demo

```vue
<template>
  <nut-cell-group title="Customize the right arrow area">
    <nut-cell title="Switch">
      <template #link>
        <nut-switch v-model="checked" />
      </template>
    </nut-cell>
  </nut-cell-group>
</template>
<script setup>
import { ref } from 'vue';
const checked = ref(true);
</script>
```

:::

### Customize the left Icon area

:::demo

```vue
<template>
  <nut-cell-group title="Customize the left Icon area">
    <nut-cell title="Image">
      <template #icon>
        <img
          style="width:20px;height: 20px;"
          src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
        />
      </template>
    </nut-cell>
  </nut-cell-group>
</template>
```

:::

### Cell Display Icon

:::demo

```vue
<template>
  <nut-cell title="Name" desc="Description">
    <template #icon>
      <My />
    </template>
  </nut-cell>
</template>
<script setup>
import { My } from '@nutui/icons-vue';
</script>
```

:::

### Only display desc , you can adjust the content position through desc-text-align

:::demo

```vue
<template>
  <nut-cell desc-text-align="left" desc="Description"></nut-cell>
</template>
```

:::

### Vertical Center

You can center the left and right contents of the cell vertically through the 'center' attribute.

:::demo

```vue
<template>
  <nut-cell center title="Title" sub-title="Subtitle Description" desc="Desc"></nut-cell>
</template>
```

:::

## API

### CellGroup Props

| Attribute | Description | Type   | Default |
| --------- | ----------- | ------ | ------- |
| title     | Title       | string | -       |
| desc      | Description | string | -       |

### Cell Props

| Attribute       | Description                                                                                              | Type             | Default |
| --------------- | -------------------------------------------------------------------------------------------------------- | ---------------- | ------- |
| title           | Title                                                                                                    | string           | -       |
| sub-title       | Subtitle                                                                                                 | string           | -       |
| desc            | Description                                                                                              | string           | -       |
| desc-text-align | Right description text alignment [text-align](https://www.w3school.com.cn/cssref/pr_text_text-align.asp) | string           | `right` |
| is-link         | Whether to show the right arrow and turn on click feedback                                               | boolean          | `false` |
| round-radius    | Corner radius                                                                                            | number           | `6px`   |
| url             | Link URL                                                                                                 | string           | -       |
| to              | Target route of the link, same as to of vue-router                                                       | string \| object | -       |
| replace         | If true, the navigation will not leave a history record                                                  | boolean          | `false` |
| center          | Whether to center content vertically                                                                     | boolean          | `false` |
| size            | Size, can be set to `large`                                                                              | string           | `''`    |

### Cell Events

| Event | Description                  | Arguments     |
| ----- | ---------------------------- | ------------- |
| click | Emitted when cell is clicked | `event:Event` |

### Cell Slots

| Name    | Description         |
| ------- | ------------------- |
| icon    | Custom Left `icon`  |
| default | Default slot        |
| link    | Custom Right `link` |
| title   | Custom `title` slot |

### CellGroup Slots

| Name  | Description         |
| ----- | ------------------- |
| title | Custom `title` slot |
| desc  | Custom `desc` slot  |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                               | Default Value                            |
| ---------------------------------- | ---------------------------------------- |
| --nut-cell-color                   | _var(--nut-title-color2)_                |
| --nut-cell-title-font              | _var(--nut-font-size-2)_                 |
| --nut-cell-title-desc-font         | _var(--nut-font-size-1)_                 |
| --nut-cell-desc-font               | _var(--nut-font-size-2)_                 |
| --nut-cell-desc-color              | _var(--nut-disable-color)_               |
| --nut-cell-border-radius           | _6px_                                    |
| --nut-cell-padding                 | _13px 16px_                              |
| --nut-cell-line-height             | _20px_                                   |
| --nut-cell-after-right             | _16px_                                   |
| --nut-cell-after-border-bottom     | _1px solid #f5f6f7_                      |
| --nut-cell-default-icon-margin     | _0 4px 0 0px_                            |
| --nut-cell-large-title-font        | _var(--nut-font-size-large)_             |
| --nut-cell-large-title-desc-font   | _var(--nut-font-size-base)_              |
| --nut-cell-large-padding           | _15px 16px_                              |
| --nut-cell-background              | _var(--nut-white)_                       |
| --nut-cell-box-shadow              | _0px 1px 7px 0px rgba(237, 238, 241, 1)_ |
| --nut-cell-group-title-padding     | _0 10px_                                 |
| --nut-cell-group-title-color       | _#909ca4_                                |
| --nut-cell-group-title-font-size   | _var(--nut-font-size-2)_                 |
| --nut-cell-group-title-line-height | _20px_                                   |
| --nut-cell-group-desc-padding      | _0 10px_                                 |
| --nut-cell-group-desc-color        | _#909ca4_                                |
| --nut-cell-group-desc-font-size    | _var(--nut-font-size-1)_                 |
| --nut-cell-group-desc-line-height  | _16px_                                   |
| --nut-cell-group-background-color  | _var(--nut-white)_                       |
