# Button

### Intro

Buttons are used to trigger an action, such as submitting a form.

### Install

```js
import { createApp } from 'vue';
import { Button } from '@nutui/nutui';

const app = createApp();
app.use(Button);
```

### Type

The button supports six types: `default`, `primary`, `info`, `warning`, `danger`, `success`, the default is `default`.

> demo: button type

### Plain

The button is set as a plain button through the `plain` property, the text of the plain button is the button color, and the background is white.

> demo: button plain

### Disabled

The button is disabled through the `disabled` property, and the button cannot be clicked in the disabled state.

> demo: button disabled

### Shape

Set the button shape through the `shape` property, support circle and square buttons, the default is circle.

> demo: button shape

### Loading

> demo: button loading

### Icon

> demo: button icon

### Size

Support `large`, `normal`, `small`, `mini` four sizes, the default is `normal`.

> demo: button size

### Block

By default, the button is an inline block-level element. The `block` attribute can set the element type of the button to a block-level element, which is often used to implement banner buttons.

> demo: button block

### Custom Color

The color of the button can be customized through the color property.

> demo: button color

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `primary` `info` `warning` `danger` `success` `default` | string | `default` |
| size | Can be set to `large` `small` `mini` `normal` | string | `normal` |
| shape | Can be set to `square` `round` | string | `round` |
| color | Button color, support incoming linear-gradient gradient color | string | - |
| plain | Whether to be plain button | boolean | `false` |
| disabled | Whether to disable button | boolean | `false` |
| block | Whether to set display block | boolean | `false` |
| loading | Whether to show loading status | boolean | `false` |

### Slots

| Name | Description |
| --- | --- |
| default | button content |
| icon | button icon |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Emitted when component is clicked | `event: MouseEvent` |

### Types v4.3.0

The component exports the following type definitions:

```js
import type {
  ButtonType,
  ButtonSize,
  ButtonShape,
  ButtonFormType,
  ButtonProps,
  ButtonInstance
} from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-button-border-radius | _25px_ |
| --nut-button-border-width | _1px_ |
| --nut-button-icon-width | _16px_ |
| --nut-button-default-bg-color | _var(--nut-white)_ |
| --nut-button-default-border-color | _rgba(204, 204, 204, 1)_ |
| --nut-button-default-color | _rgba(102, 102, 102, 1)_ |
| --nut-button-default-padding | _0 18px_ |
| --nut-button-mini-padding | _0 12px_ |
| --nut-button-small-padding | _0 12px_ |
| --nut-button-small-height | _28px_ |
| --nut-button-mini-height | _24px_ |
| --nut-button-default-height | _38px_ |
| --nut-button-large-height | _48px_ |
| --nut-button-large-line-height | _46px_ |
| --nut-button-small-line-height | _26px_ |
| --nut-button-block-height | _48px_ |
| --nut-button-default-line-height | _36px_ |
| --nut-button-block-line-height | _46px_ |
| --nut-button-default-font-size | _var(--nut-font-size-2)_ |
| --nut-button-large-font-size | _var(--nut-button-default-font-size)_ |
| --nut-button-small-font-size | _var(--nut-font-size-1)_ |
| --nut-button-mini-font-size | _var(--nut-font-size-1)_ |
| --nut-button-mini-line-height | _1.2_ |
| --nut-button-disabled-opacity | _0.68_ |
| --nut-button-primary-color | _var(--nut-white)_ |
| --nut-button-primary-border-color | _var(--nut-primary-color)_ |
| --nut-button-primary-background-color | _linear-gradient(135deg,var(--nut-primary-color) 0%,var(--nut-primary-color-end) 100%)_ |
| --nut-button-info-color | _var(--nut-white)_ |
| --nut-button-info-border-color | _rgba(73, 106, 242, 1)_ |
| --nut-button-info-background-color | _linear-gradient(315deg, rgba(73, 143, 242, 1) 0%, rgba(73, 101, 242, 1) 100%)_ |
| --nut-button-success-color | _var(--nut-white)_ |
| --nut-button-success-border-color | _rgba(38, 191, 38, 1)_ |
| --nut-button-success-background-color | _linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)_ |
| --nut-button-danger-color | _var(--nut-white)_ |
| --nut-button-danger-border-color | _rgba(250, 44, 25, 1)_ |
| --nut-button-danger-background-color | _rgba(250, 44, 25, 1)_ |
| --nut-button-warning-color | _var(--nut-white)_ |
| --nut-button-warning-border-color | _rgba(255, 158, 13, 1)_ |
| --nut-button-warning-background-color | _linear-gradient(135deg,rgba(255, 158, 13, 1) 0%,rgba(255, 167, 13, 1) 45%,rgba(255, 182, 13, 1) 83%,rgba(255, 190, 13, 1) 100%)_ |
| --nut-button-plain-background-color | _var(--nut-white)_ |
| --nut-button-small-round-border-radius | _var(--nut-button-border-radius)_ |
