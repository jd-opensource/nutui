# Textarea

### Intro

Enter or edit text in the text box, and limit the number of entries is supported.

### 安装

```js
import { createApp } from 'vue'
import { Textarea } from '@nutui/nutui'

const app = createApp()
app.use(Textarea)
```

### Basic Usage

> demo: textarea basic

### Display word count

> demo: textarea limit

### Height customization, stretching

> demo: textarea row

### read-only，disabled

> demo: textarea status

### Autofocus

> demo: textarea focus

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | input value, support two-way binding | string | - |
| placeholder | set placeholder prompt text | string | `'Placeholder'` |
| max-length | limit the maximum input characters | string, number | - |
| rows | height of textarea, with priority higher than autosize attribute `Only H5 is supported` | string and number | `2` |
| limit-show | whether textarea displays the input characters. Use | Boolean | ` false` |
| autosize | whether to adapt the content height. You can also pass in objects, such as {maxheight: 200, minheight: 100}. The unit is PX | Boolean, {maxheight?: number; minheight?: number} | `false` |
| text-align | text position, optional values `left ,  center,  right` | string | - |
| readonly | read only attribute | Boolean | `false` |
| disabled | disable attribute | Boolean | `false` |
| autofocus | get focus automatically | Boolean | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Triggered when the value of the input box changes | `value` |
| focus | Triggered when focusing | `event` |
| blur | Triggered when out of focus | `value,event` |

### Types v4.3.4

The component exports the following type definitions:

```js
import type { TextareaProps, TextareaInstance } from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-textarea-font | _var(--nut-font-size-2)_ |
| --nut-textarea-limit-color | _var(--nut-text-color)_ |
| --nut-textarea-text-color | _var(--nut-title-color)_ |
| --nut-textarea-disabled-color | _var(--nut-disable-color)_ |
