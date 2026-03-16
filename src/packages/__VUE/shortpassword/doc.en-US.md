# ShortPassword

### Intro

Short password input box, which can be used to enter passwords, SMS verification codes, etc.

### Install

```js
import { createApp } from 'vue'
import { ShortPassword, NumberKeyboard } from '@nutui/nutui'

const app = createApp()
app.use(ShortPassword)
app.use(NumberKeyboard)
```

### Basic Usage

> demo: shortpassword basic

### Custom Password Length

> demo: shortpassword length

### Forget password

> demo: shortpassword forget

### Error Message

> demo: shortpassword error

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Current value | string |  |
| v-model:visible | Whether to show shortpassword | boolean | `false` |
| title | title | string | `Please enter password  ` |
| desc | description | string | `Verify` |
| tips | Bottom right prompt | string | `Forget password  ` |
| close-on-click-overlay | Click to close the mask | boolean | `true` |
| length | ShortPassword lenght The value is 4~6 | string \| number | `6` |
| error-msg | Error message | string | `''` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| close | Trigger an event when the close icon is clicked | - |
| complete | Input complete callback | `value:string` |
| focus | Emitted when input is focused | - |
| tips | Emitted when tips is clicked | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value | Description |

| 名称 | 默认值 |
| --- | --- |
| --nut-shortpassword-background-color | _rgba(245, 245, 245, 1)_ |
| --nut-shortpassword-border-color | _#ddd_ |
| --nut-shortpassword-error | _var(--nut-primary-color)_ |
| --nut-shortpassword-forget | _rgba(128, 128, 128, 1)_ |
