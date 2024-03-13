# Layout 布局

### 介绍

用于快速进行布局

### 安装

```js
import { createApp } from 'vue';
import { Row, Col } from '@nutui/nutui-taro';

const app = createApp();
app.use(Row);
app.use(Col);
```

### 基础用法

Layout 组件提供 24 列栅格，通过在 Col 上添加 span 属性设置列所占的宽度百分比。 offset 属性可以设置列的偏移宽度，计算方式与 span 相同。

> demo: layout basic layout

### 分栏间隔

> demo: layout gap layout

### Flex 布局

> demo: layout flex layout

## API

### Row Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 布局方式，可选值为 `flex` | string | `-` |
| gutter | 列元素之间的间距（单位为`px`） | string \| number | `-` |
| justify | Flex 主轴对齐方式，可选值为 `start` `end` `center` `space-around` `space-between` `space-evenly` | string | `start` |
| align | `Flex` 交叉轴对齐方式，可选值为 `flex-start` `center` `flex-end` | string | `flex-start` |
| flex-wrap | `Flex` 是否换行，可选值为 `nowrap` `wrap` `reverse` | string | `nowrap` |

### Col Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 列元素宽度（共分为 24 份，例如设置一行 3 个，那么 span 值为 8） | string \| number | `24` |
| offset | 列元素偏移距离 | string \| number | `0` |

### Row Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击时触发 | `event: MouseEvent` |

### Col Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击时触发 | `event: MouseEvent` |

### 类型定义 v4.3.2

组件导出以下类型定义：

```js
import type {
  RowProps,
  RowInstance,
  ColProps,
  ColInstance
} from '@nutui/nutui-taro';
```
