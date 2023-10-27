# Pagination

### Intro

When the amount of data is too much, use pagination to separate the data.

### Install

```js
import { createApp } from 'vue';
import { Pagination } from '@nutui/nutui';

const app = createApp();
app.use(Pagination);
```

### Basic Usage

Bind current page with v-model.
:::demo

```vue
<template>
  <nut-pagination v-model="page" :total-items="25" :items-per-page="5" @change="pageChange" />
</template>
<script setup>
import { ref } from 'vue';
const page = ref(1);
const pageChange = (value) => {
  console.log(value);
};
</script>
```

:::

### Simple mode

Pagination can be switched to simple mode with simple mode attribute, and pagination cann't display specific page buttons.
:::demo

```vue
<template>
  <nut-pagination v-model="page" :page-count="12" mode="simple" @change="pageChange" />
</template>
<script setup>
import { ref } from 'vue';
const page = ref(1);
const pageChange = (value) => {
  console.log(value);
};
</script>
```

:::

### Show ellipses

The ellipses button will display after with force-ellipses attribute, click it can jump quickly.
:::demo

```vue
<template>
  <nut-pagination v-model="page" :total-items="125" :show-page-size="3" @change="pageChange" force-ellipses />
</template>
<script setup>
import { ref } from 'vue';
const page = ref(1);
const pageChange = (value) => {
  console.log(value);
};
</script>
```

:::

### Custom Button

Custom pagination button content with pre-text slot、next-text slot and so on.
:::demo

```vue
<template>
  <nut-pagination v-model="page" :total-items="500" @change="pageChange" :show-page-size="5">
    <template #prev-text>
      <Left width="10px" height="10px" />
    </template>
    <template #next-text>
      <Right width="10px" height="10px" />
    </template>
    <template #page="{ item }"> {{ item.number == 3 ? 'hot' : item.text }} </template>
  </nut-pagination>
</template>
<script setup>
import { Left, Right } from '@nutui/icons-vue';
import { ref } from 'vue';
const page = ref(1);
const pageChange = (value) => {
  console.log(value);
};
</script>
```

:::

## API

### Props

| Attribute      | Description                         | Type             | Default    |
| -------------- | ----------------------------------- | ---------------- | ---------- |
| v-model        | Current page number                 | number           | `1`        |
| mode           | Mode, can be set to simple or multi | string           | `multi`    |
| prev-text      | Previous text                       | string           | `Previous` |
| next-text      | Next text                           | string           | `Next`     |
| page-count     | The total number of pages           | string \| number | `''`       |
| total-items    | Total items                         | string \| number | `0`        |
| items-per-page | Item number per page                | string \| number | `10`       |
| show-page-size | Count of page size to show          | string \| number | `5`        |
| force-ellipses | Whether to show ellipses            | boolean          | `false`    |

### Events

| Event  | Description                       | Arguments |
| ------ | --------------------------------- | --------- |
| change | Emitted when current page changed | value     |

### Slots

| Name      | Description            | Arguments |
| --------- | ---------------------- | --------- |
| prev-text | Custom prev text       | -         |
| next-text | Custom next text       | -         |
| page      | Custom pagination item | -         |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                      | Default Value                                                                           |
| ----------------------------------------- | --------------------------------------------------------------------------------------- |
| --nut-pagination-color                    | _var(--nut-primary-color)_                                                              |
| --nut-pagination-font-size                | _var(--nut-font-size-2)_                                                                |
| --nut-pagination-item-border-color        | _#e4e7eb_                                                                               |
| --nut-pagination-active-background-color  | _linear-gradient(135deg,var(--nut-primary-color) 0%,var(--nut-primary-color-end) 100%)_ |
| --nut-pagination-disable-color            | _rgba(116, 116, 116, 0.31)_                                                             |
| --nut-pagination-disable-background-color | _#f7f8fa_                                                                               |
| --nut-pagination-item-border-width        | _1px_                                                                                   |
| --nut-pagination-item-border-radius       | _2px_                                                                                   |
| --nut-pagination-prev-next-padding        | _0 11px_                                                                                |
