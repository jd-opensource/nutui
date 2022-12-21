#  DatePicker

### Intro
    
Used to select time, support date and time dimensions, usually used with the Popup component.
    
### Install
    
```javascript
import { createApp } from 'vue';
import { DatePicker, Picker } from '@nutui/nutui';

const app = createApp();
app.use(DatePicker);
app.use(Picker);
```
    
### Choose Date
:::demo

```html
<template>
  <nut-date-picker
      v-model="currentDate"
      :min-date="minDate"
      :max-date="maxDate"
      :is-show-chinese="true"
      :three-dimensional="false"
      @confirm="confirm"
  ></nut-date-picker> 
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const minDate = new Date(2020, 0, 1),
      const maxDate = new Date(2025, 10, 1),
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ({ selectedValue, selectedOptions })=>{
        Toast.text(selectedOptions.map((val: any) => val.text).join(''));
      }
      return {
        currentDate,
        minDate,
        maxDate,
        confirm
      };
    }
  };
</script>

```
:::

### With popup

:::demo

```html
<template>
  <nut-cell title="选择日期" :desc="popupDesc" @click="show = true"></nut-cell>
  <nut-popup position="bottom" v-model:visible="show">
    <nut-date-picker
      v-model="currentDate"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="popupConfirm"
      :is-show-chinese="true"
      :threeDimensional="false"
    >
      <nut-button block type="primary" @click="alwaysFun">Always</nut-button>
    </nut-date-picker>
  </nut-popup>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
       const show = ref(false);
      const popupDesc = ref();
      const minDate = new Date(2020, 0, 1);
      const maxDate = new Date(2025, 10, 1);
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const popupConfirm = ({ selectedValue, selectedOptions })=>{
        popupDesc.value = selectedOptions.map((val: any) => val.text).join('');
        show.value = false;
      }
      const alwaysFun = ()=>{
        popupDesc.value = 'Always'
        show.value = false;
      }
      return {
        show,
        popupDesc,
        currentDate,
        minDate,
        maxDate,
        alwaysFun,
        popupConfirm
      };
    }
  };
</script>

```
:::

### Choose Month-Day

:::demo
```html
<template>
  <nut-date-picker
      v-model="currentDate"
      type="month-day"
      title="Choose Time"
      :min-date="new Date(2022, 0, 1)"
      :max-date="new Date(2022, 7, 1)"
      @confirm="confirm"
  ></nut-date-picker> 
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        Toast.text(selectedOptions.map((val: any) => val.text).join('-'));
      }
      return {
        currentDate,
        confirm
      };
    }
  };
</script>
```
:::
### Choose DateTime

:::demo

```html
<template>
  <nut-date-picker
      v-model="currentDate"
      title="Choose Time"
      type="datetime"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
  ></nut-date-picker> 
</template>
<script>
  import { ref } from 'vue';
  export default {
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        date = selectedValue.slice(0, 3).join('-');
        time = selectedValue.slice(3).join(':');
        Toast.text(date + ' ' + time) ;
      }
      return {
        currentDate,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        confirm
      };
    }
  };
</script>
```
:::

### Choose Time
:::demo
```html
<template>
  <nut-date-picker
      v-model="currentDate"
      title="Choose Time"
      type="time"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
  ></nut-date-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        Toast.text(selectedValue.join(':'));
      }
      return {
        currentDate,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        confirm
      };
    }
  };
</script>
```
:::

### Option Formatter
:::demo
```html
<template>
  <nut-date-picker
      v-model="currentDate"
      title="Choose Time"
      type="datetime"
      :min-date="new Date(2022, 0, 1)"
      :max-date="new Date(2022, 10, 1)"
      :formatter="formatter"
      @confirm="confirm"
  ></nut-date-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        date = selectedOptions.slice(1, 3).map((op) => op.text).join('');
        time = selectedOptions.slice(3).map((op) => op.value).join(':');
        Toast.text(selectedOptions[0].text + 'Year' + date + ' ' + time);
      }
      const formatter = (type: string, option) => {
        switch (type) {
          case 'year':
            option.text += '';
            break;
          case 'month':
            option.text += 'Month';
            break;
          case 'day':
            option.text += 'Day';
            break;
          case 'hour':
            option.text += 'Hour';
            break;
          case 'minute':
            option.text += 'Minute';
            break;
          default:
            option.text += '';
        }
        return option;
      };
     
      return {
        currentDate,
        confirm,
        formatter
      };
    }
  };
</script>
```
:::

### Option Steps

:::demo
```html
<template>
  <nut-date-picker
      v-model="currentDate"
      type="time"
      :minute-step="5"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
  ></nut-date-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        Toast.text(selectedValue.join(':')) ;
      }
      return {
        currentDate,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        confirm
      };
    }
  };
</script>
```
:::

### Option Filter

:::demo
```html
<template>
  <nut-date-picker
      v-model="currentDate"
      title="Choose Time"
      type="datehour"
      :min-date="minDate"
      :max-date="maxDate"
      :filter="filter"
      :formatter="formatter"
      @confirm="confirm"
  ></nut-date-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const currentDate = new Date(2022, 4, 10, 0, 0);
      const formatter = (type: string, option) => {
        switch (type) {
          case 'year':
            option.text += 'Year';
            break;
          case 'month':
            option.text += 'Month';
            break;
          case 'day':
            option.text += 'Day';
            break;
          case 'hour':
            option.text += 'Hour';
            break;
          default:
            option.text += '';
        }
        return option;
      };

      const filter = (type: string, options) => {
        if (type == 'hour') {
          return options.filter((option) => Number(option.value) % 6 === 0);
        }
        return options;
      };
      const confirm = ( { selectedValue, selectedOptions } )=>{
         Toast.text(selectedOptions.map((option) => option.text).join(''));
      }
      return {
        currentDate,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        confirm,
        formatter,
        filter
      };
    }
  };
</script>
```
:::

## API
    
### Props
    
| Attribute         | Description                             | Type   | Default           |
|-----------------|---------------------------------------------------|---------|----------|
| v-model         | Default Date                                            | Date    | `null`   |
| type            | Can be set to date time year-month month-day datehour | String  | `'date'` |
| minute-step     | Option minute step                                        | Number  | `1`      |
| is-show-chinese | Show Chinese                                  | Boolean | `false`  |
| min-date        | Start date                                         | Date    | `Ten years ago on January 1` |
| max-date        | End date                                          | Date    | `Ten years later on December 31` |
| formatter   | Option text formatter                                          | (type: string, option: PickerOption) => PickerOption    |  |
| filter   | Option filter                                         | (type: string, option: PickerOption) => PickerOption[]    |  |
| title           | Title                                          | String  | `null`   |
| ok-text           | Text of confirm button                                      | String  | confirm   |
| cancel-text           | Text of cancel button                                          | String  | cancel   |
| three-dimensional          | Turn on 3D effects               | Boolean  | true   |
| swipe-duration           | Duration of the momentum animation        | Number、String  | 1000   |
| visible-option-num          | Count of visible columns       | number \| string | 7               |
| option-height         | Option height             | number \| string | 36     |
| show-toolbar         | Whether to show toolbar             | Boolean | true    |

### Events

| Event | Description           | Arguments     |
|---------|--------------------|--------------|
| confirm | Emitted when click confirm button. | 	{ selectedValue, selectedOptions } |
| cancel   | Emitted when click cancel button.       | 	{ selectedValue, selectedOptions } |
| change   |  Emitted when current option changed.       | { columnIndex, selectedValue, selectedOptions } |

### Slots

| Event | Description           |
|--------|----------------|
| default  | Custom content bottom columns |
| top  | Custom content top columns |