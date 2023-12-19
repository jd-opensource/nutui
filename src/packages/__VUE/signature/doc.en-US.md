# Signature autograph

### Intro

Signature component based on canvas.

### Install

```js
import { createApp } from 'vue';
import { Signature } from '@nutui/nutui';

const app = createApp();
app.use(Signature);
```

### Basic usage

> demo: signature basic

### Modify color and signature thickness

> demo: signature custom

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| custom-class | custom `class` | string | `-` |
| line-width | line width | number | `3` |
| stroke-style | drawing stroke color | string | `#000` |
| type | image format | string | `png` |
| un-support-tpl | Display copy when Canvas is not supported | string | `Sorry, the current browser does not support Canvas, so this control cannot be used! ` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| start | Signature start callback function (refers to the start of a certain stroke) | `-` |
| signing | The callback function that is signing (referring to a certain stroke in progress) | `event` |
| end | Signature end callback function (referring to the end of a certain stroke) | `-` |
| confirm | Click the confirm button to trigger the event callback function | `canvas and signature image display data URI，<br>If not drawn, returns a tooltip and an empty data URI` |
| clear | Click the re-sign button to trigger the event callback function | `-` |
