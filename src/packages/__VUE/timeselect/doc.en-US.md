# TimeSelect

### Intro

For delivery time selection

### Install

```js
import { createApp } from 'vue';
import { TimeSelect, TimePannel, TimeDetail } from '@nutui/nutui';

const app = createApp();
app.use(TimeSelect);
app.use(TimePannel);
app.use(TimeDetail);
```

### Basic Usage

:::demo

```vue
<template>
  <nut-cell @click="handleClick1">
    <span><label>Please select the delivery time</label></span>
  </nut-cell>
  <nut-time-select
    v-model:visible="state.visible1"
    height="50%"
    :current-key="state.currentKey1"
    :current-time="state.currentTime1"
    @select="handleSelected1"
  >
    <template #pannel>
      <nut-time-pannel name="February 23rd(Today)" pannel-key="0" @change="handleChange1"></nut-time-pannel>
      <nut-time-pannel name="February 24th(Wednesday)" pannel-key="1" @change="handleChange1"></nut-time-pannel>
    </template>
    <template #detail>
      <nut-time-detail :times="state.times1" @select="selectTime1"></nut-time-detail>
    </template>
  </nut-time-select>
</template>
<script setup>
import { reactive, onMounted } from 'vue';
import { showToast } from '@nutui/nutui';
const state = reactive({
  visible1: false,
  currentKey1: 0,
  currentTime1: [],
  times1: [
    {
      key: 0,
      list: ['9:00-10:00', '10:00-11:00', '11:00-12:00']
    },
    {
      key: 1,
      list: ['9:00-10:00', '10:00-11:00']
    }
  ]
});

const handleChange1 = (pannelKey) => {
  state.currentKey1 = pannelKey;
  state.currentTime1 = [];
  state.currentTime1.push({
    key: state.currentKey1,
    list: []
  });
};

const handleClick1 = () => {
  state.visible1 = true;
};

const selectTime1 = (item) => {
  let curTimeIndex = state.currentTime1[0]['list'].findIndex((time) => time === item);
  if (curTimeIndex === -1) {
    state.currentTime1[0]['list'].push(item);
  } else {
    state.currentTime1[0]['list'].splice(curTimeIndex, 1);
  }
};

const handleSelected1 = (obj) => {
  showToast.text(`Your choose：${JSON.stringify(obj)}`);
};

onMounted(() => {
  state.currentTime1.push({
    key: state.currentKey1,
    list: []
  });
});
</script>
```

:::

### Multiple dates and times can be selected

:::demo

```vue
<template>
  <nut-cell @click="handleClick2">
    <span><label>Please select the delivery time</label></span>
  </nut-cell>
  <nut-time-select
    v-model:visible="state.visible2"
    height="50%"
    :current-key="state.currentKey2"
    :current-time="state.currentTime2"
    @select="handleSelected2"
  >
    <template #pannel>
      <nut-time-pannel name="February 23rd(Today)" pannel-key="0" @change="handleChange2"></nut-time-pannel>
      <nut-time-pannel name="February 24th(Wednesday)" pannel-key="1" @change="handleChange2"></nut-time-pannel>
    </template>
    <template #detail>
      <nut-time-detail :times="state.times2" @select="selectTime2"></nut-time-detail>
    </template>
  </nut-time-select>
</template>
<script setup>
import { reactive, onMounted } from 'vue';
import { showToast } from '@nutui/nutui';
const state = reactive({
  visible2: false,
  currentKey2: 0,
  currentTime2: [],
  times2: [
    {
      key: 0,
      list: ['9:00-10:00', '10:00-11:00', '11:00-12:00']
    },
    {
      key: 1,
      list: ['9:00-10:00', '10:00-11:00']
    }
  ]
});

const handleChange2 = (pannelKey) => {
  state.currentKey2 = pannelKey;
  let curTime = state.currentTime2.find((item) => item.key == pannelKey);
  if (!curTime) {
    state.currentTime2.push({
      key: pannelKey,
      list: []
    });
  }
};

const handleClick2 = () => {
  state.visible2 = true;
};

const selectTime2 = (item) => {
  let findIndex = state.currentTime2.findIndex((item) => item.key == state.currentKey2);
  let curTimeIndex = state.currentTime2[findIndex]['list'].findIndex((time) => time === item);
  if (curTimeIndex === -1) {
    state.currentTime2[findIndex]['list'].push(item);
  } else {
    state.currentTime2[findIndex]['list'].splice(curTimeIndex, 1);
  }
};

const handleSelected2 = (obj) => {
  showToast.text(`Your choose：${JSON.stringify(obj)}`);
};

onMounted(() => {
  state.currentTime2.push({
    key: state.currentKey2,
    list: []
  });
});
</script>
```

:::

### Change Title

:::demo

```vue
<template>
  <nut-cell @click="handleClick2">
    <span><label>Please select the delivery time</label></span>
  </nut-cell>
  <nut-time-select
    v-model:visible="state.visible2"
    height="50%"
    :current-key="state.currentKey2"
    :current-time="state.currentTime2"
    @select="handleSelected2"
  >
    <template #title>
      <div class="timeselect-title">
        <p class="title">It is title</p>
        <p class="subtitle">It is subtitle</p>
      </div>
    </template>
    <template #pannel>
      <nut-time-pannel name="February 23rd(Today)" pannel-key="0" @change="handleChange2"></nut-time-pannel>
      <nut-time-pannel name="February 24th(Wednesday)" pannel-key="1" @change="handleChange2"></nut-time-pannel>
    </template>
    <template #detail>
      <nut-time-detail :times="state.times2" @select="selectTime2"></nut-time-detail>
    </template>
  </nut-time-select>
</template>
<script setup>
import { reactive, toRefs, onMounted } from 'vue';
import { showToast } from '@nutui/nutui';
const state = reactive({
  visible2: false,
  currentKey2: 0,
  currentTime2: [],
  times2: [
    {
      key: 0,
      list: ['9:00-10:00', '10:00-11:00', '11:00-12:00']
    },
    {
      key: 1,
      list: ['9:00-10:00', '10:00-11:00']
    }
  ]
});

const handleChange2 = (pannelKey) => {
  state.currentKey2 = pannelKey;
  let curTime = state.currentTime2.find((item) => item.key == pannelKey);
  if (!curTime) {
    state.currentTime2.push({
      key: pannelKey,
      list: []
    });
  }
};

const handleClick2 = () => {
  state.visible2 = true;
};

const selectTime2 = (item) => {
  let findIndex = state.currentTime2.findIndex((item) => item.key == state.currentKey2);
  let curTimeIndex = state.currentTime2[findIndex]['list'].findIndex((time) => time === item);
  if (curTimeIndex === -1) {
    state.currentTime2[findIndex]['list'].push(item);
  } else {
    state.currentTime2[findIndex]['list'].splice(curTimeIndex, 1);
  }
};

const handleSelected2 = (obj) => {
  showToast.text(`Your Choose ：${JSON.stringify(obj)}`);
};

onMounted(() => {
  state.currentTime2.push({
    key: state.currentKey2,
    list: []
  });
});
</script>
<style>
.timeselect-title {
  height: 50px;
}
.title {
  line-height: 1;
  padding: 0;
  margin: 0;
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
}
.subtitle {
  line-height: 1;
  padding: 0;
  margin: 0;
  color: #999;
}
</style>
```

:::

## API

### TimeSelect Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to display elastic layer | boolean | `false` |
| height | Height of bomb layer | string | `20%` |
| title | Bomb layer title | string | `Pickup Time` |
| current-key | Unique identification | string \| number | `0` |
| current-time | The currently selected time, the array element contains:key: string; list: string[] | Array | `[]` |
| lock-scroll | Whether the background is locked | boolean | `true` |
| teleport-disable | Whether the node is allowed to be mounted | boolean | `false` |

### Slots

| Name | Description |
| --- | --- |
| title | Change Title |
| pannel | List for left |
| detail | Detail Content for right |

### TimePannel Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| name | Name of display | string | `` |
| pannel-key | Unique ID, which identifies the currently selected day together with `current-key` | string \| number | `0` |

### TimeDetail Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| times | Selectable time, the same as array elements `current-time` | Array | `[]` |

### TimeSelect Events

| Event | Description | Arguments |
| --- | --- | --- |
| select | Callback after closing mask | `key: string \| number, list: []` |

### TimePannel Event

| Event | Description | Arguments |
| --- | --- | --- |
| change | Click the callback of the content | `pannelKey: string ｜ number` |

### TimeDetail Event

| Event | Description | Arguments |
| --- | --- | --- |
| select | Callback of click time | `time: string` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-timeselect-title-font-size | _var(--nut-font-size-2)_ |
| --nut-timeselect-title-color | _var(--nut-title-color)_ |
| --nut-timeselect-title-width | _100%_ |
| --nut-timeselect-title-height | _50px_ |
| --nut-timeselect-title-line-height | _50px_ |
| --nut-timeselect-pannel-bg-color | _#f6f7f9_ |
| --nut-timeselect-timepannel-text-color | _var(--nut-title-color2)_ |
| --nut-timeselect-timepannel-font-size | _var(--nut-font-size-2)_ |
| --nut-timeselect-timepannel-cur-bg-color | _var(--nut-white)_ |
| --nut-timeselect-timepannel-cur-text-color | _#333333_ |
| --nut-timeselect-timepannel-width | _140px_ |
| --nut-timeselect-timepannel-height | _40px_ |
| --nut-timeselect-timepannel-padding | _15px_ |
| --nut-timeselect-timedetail-padding | _0 5px 50px 13px_ |
| --nut-timeselect-timedetail-item-width | _100px_ |
| --nut-timeselect-timedetail-item-height | _50px_ |
| --nut-timeselect-timedetail-item-line-height | _50px_ |
| --nut-timeselect-timedetail-item-bg-color | _#f6f7f9_ |
| --nut-timeselect-timedetail-item-border-radius | _5px_ |
| --nut-timeselect-timedetail-item-text-color | _#333333_ |
| --nut-timeselect-timedetail-item-text-font-size | _var(--nut-font-size-2)_ |
| --nut-timeselect-timedetail-item-cur-bg-color | _var(--nut-primary-color)_ |
| --nut-timeselect-timedetail-item-cur-border | _var(--nut-primary-color)_ |
| --nut-timeselect-timedetail-item-cur-text-color | _var(--nut-primary-color)_ |
