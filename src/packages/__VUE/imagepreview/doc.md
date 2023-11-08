# ImagePreview 图片预览

### 介绍

支持全屏预览视频和图片，可函数式调用

### 安装

```js
import { createApp } from 'vue';
import { ImagePreview } from '@nutui/nutui';

const app = createApp();
app.use(ImagePreview);
```

### 基础用法

:::demo

```vue
<template>
  <nut-image-preview :show="state.showPreview" :images="state.imgData" @close="hideFn" />
  <nut-cell isLink title="展示图片预览" :showIcon="true" @click="showFn"></nut-cell>
</template>

<script setup>
import { reactive } from 'vue';
const state = reactive({
  showPreview: false,
  imgData: [
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
    }
  ]
});

const showFn = () => {
  state.showPreview = true;
};

const hideFn = () => {
  state.showPreview = false;
};
</script>
```

:::

### 设置初始页码

:::demo

```vue
<template>
  <nut-image-preview :show="state.showPreview" :images="state.imgData" :init-no="3" @close="hideFn" />
  <nut-cell isLink title="设置初始页码" :showIcon="true" @click="showFn"></nut-cell>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  showPreview: false,
  imgData: [
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
    }
  ]
});

const showFn = () => {
  state.showPreview = true;
};

const hideFn = () => {
  state.showPreview = false;
};
</script>
```

:::

### 设置轮播指示器及颜色

:::demo

```vue
<template>
  <nut-image-preview
    :show="state.showPreview"
    :images="state.imgData"
    :pagination-visible="true"
    pagination-color="red"
    @close="hideFn"
  />
  <nut-cell isLink title="设置轮播指示器及颜色" :showIcon="true" @click="showFn"></nut-cell>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  showPreview: false,
  imgData: [
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
    }
  ]
});

const showFn = () => {
  state.showPreview = true;
};

const hideFn = () => {
  state.showPreview = false;
};
</script>
```

:::

### 视频、图片预览

:::demo

```vue
<template>
  <nut-image-preview :show="state.showPreview" :images="state.imgData" :videos="state.videoData" @close="hideFn" />
  <nut-cell isLink title="视频、图片预览" :showIcon="true" @click="showFn"></nut-cell>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  showPreview: false,
  imgData: [
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
    }
  ],
  videoData: [
    {
      source: {
        src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
        type: 'video/mp4'
      },
      options: {
        muted: true,
        controls: true
      }
    },
    {
      source: {
        src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
        type: 'video/mp4'
      },
      options: {
        muted: true,
        controls: true
      }
    }
  ]
});

const showFn = () => {
  state.showPreview = true;
};

const hideFn = () => {
  state.showPreview = false;
};
</script>
```

:::

### 函数式调用

:::demo

```vue
<template>
  <nut-cell isLink title="函数式调用的图片预览" :showIcon="true" @click="fnShow"></nut-cell>
</template>

<script setup>
import { showImagePreview } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/imagepreview/style';
import { reactive } from 'vue';
const state = reactive({
  imgData: [
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
    }
  ]
});

const onClose = () => {
  console.log('imagepreview closed');
};

const fnShow = () => {
  showImagePreview({
    show: true,
    images: state.imgData,
    onClose
  });
};
</script>
```

:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否展示预览图片 | boolean | `false` |
| videos | 预览的视频数组（视频自动放到图片之前） | VideoArray[] | `[]` |
| images | 预览图片数组 | ImageArray[] | `[]` |
| autoplay | 自动轮播时长，0 表示不会自动轮播 | number \| string | `3000` |
| init-no | 初始页码 | number | `0` |
| pagination-visible | 分页指示器是否展示 | boolean | `false` |
| pagination-color | 分页指示器选中的颜色 | string | `#fff` |
| content-close | 点击图片可以退出预览 | boolean | `true` |
| show-index | 是否显示页码 | boolean | `true` |
| closeable | 是否显示关闭图标 | boolean | `false` |
| close-icon-position | 关闭图标位置，可选值：`top-left` | string | `top-right` |
| before-close | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 `Promise` | (active: number) => boolean \| Promise<`boolean`> | - |
| max-zoom | 手势缩放时，最大缩放比例 | number | `3` |
| min-zoom | 手势缩放时，最小缩放比例 | number | `1/3` |
| is-loop | 是否循环播放 | boolean | `true` |

### ImageArray 数据结构

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| src | 预览图片链接 | string |

### VideoArray 数据结构

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| source | 视频地址和类型设置，等同于 Video 组件的 [source 属性](#/zh-CN/video) | object |
| options | 控制视频播放属性，等同于 Video 组件的 [options 属性](#/zh-CN/video) | object |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 点击遮罩关闭图片预览时触发 | 无 |
| change | 切换图片时触发 | index:当前图片索引 |

### Slots

| 名称 | 说明 |
| --- | --- |
| closeIcon | 自定义关闭图片 |
