# TabBar 标签栏

### 介绍

底部导航常用场景
### 安装

``` javascript
import { createApp } from 'vue';
import { Tabbar, TabbarItem } from '@nutui/nutui-taro';

const app = createApp();
app.use(Tabbar);
app.use(TabbarItem);
```



### 基础用法
如果需要在现有 Icon 的基础上使用更多图标，请参考下方自定义Icon图标插槽。

:::demo
```html
<template>
  <nut-tabbar @tab-switch="tabSwitch">
     <nut-tabbar-item tab-title="标签" :icon="Home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="标签" :icon="Category"> </nut-tabbar-item>
      <nut-tabbar-item tab-title="标签" :icon="Find"></nut-tabbar-item>
      <nut-tabbar-item tab-title="标签" :icon="Cart"></nut-tabbar-item>
      <nut-tabbar-item tab-title="标签" :icon="My"></nut-tabbar-item>
  </nut-tabbar>
</template>
<script>
  import { Home,Category,Find,Cart,My} from ' @nutui/icons-vue-taro';
  export default{
    components: {Home,Category,Find,Cart, My },
    setup() {
      function tabSwitch(item, index) {
        console.log(item, index);
      }
      return {
        tabSwitch,
        Home,
        Category,
        Find,
        Cart,
        My 
      };
    },
  }
</script>
```
:::

### 通过名称匹配

:::demo
```html
<template>
 <nut-tabbar v-model="activeName" @tab-switch="tabSwitch">
      <nut-tabbar-item v-for="(item,index) in List" :name="item.name" :tab-title="item.title" :icon="item.icon"> </nut-tabbar-item>
    </nut-tabbar>
</template>
<script>
  import { Home,Category,Find,Cart,My} from ' @nutui/icons-vue-taro';
  export default{
    components: {Home,Category,Find,Cart, My },
    setup() {
      const activeName = ref("category");
      const List=[
      {
        title:'标签',
        icon: h(Home),
        name:'home'
      },
      {
        title:'标签',
        icon: h(Category),
        name:'category'
      },
      {
        title:'标签',
        icon: h(Find),
        name:'find',
        
      },
      {
        title:'标签',
        icon: h(Cart),
        name:'cart'
      },
      {
        title:'标签',
        icon: h(My),
        name:'my'
      }
    ]
      function tabSwitch(item, index) {
        console.log(item, index);
      }
      return {
        tabSwitch,
        List,
        activeName,
      };
    },
  }
</script>
```
:::


### 自定义图标
通过 icon 插槽自定义图标，可以通过 slot-scope 判断标签是否选中

:::demo
```html
<template>
  <nut-tabbar @tab-switch="tabSwitch">
    <nut-tabbar-item tab-title="标签">
      <template #icon="props">
          <img :src="props.active ? icon.active : icon.unactive" alt="" />
        </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="标签">
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.unactive" alt="" />
        </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="标签">
        <template #icon>
          <Home></Home>
        </template>
    </nut-tabbar-item>
  </nut-tabbar>
</template>
<script>
  import { Home} from ' @nutui/icons-vue-taro';
  export default{
    components: {Home },
    setup() {
      function tabSwitch(item, index) {
        console.log(item, index);
      }
      const icon = {
        active: 'https://img11.360buyimg.com/imagetools/jfs/t1/70423/4/20553/3652/62e74629E23ba550e/aeeed0e3b9f43ae6.png',
        unactive:'https://img13.360buyimg.com/imagetools/jfs/t1/23319/19/18329/3084/62e7c346E957c54ef/6c3e8a49e52b76f2.png',
      };
      return {
        icon,
        tabSwitch,
      };
    },
  }
</script>
```
:::

### 自定义选中
:::demo
```html
<template>
  <nut-tabbar v-model="active">
    <nut-tabbar-item v-for="(item,index) in List" :tab-title="item.title" :icon="item.icon"> </nut-tabbar-item>
  </nut-tabbar>
</template>
<script>
 import { Home,Category,Find,Cart,My} from ' @nutui/icons-vue-taro';
 export default{
    components: {Home,Category,Find,Cart, My },
    setup() {
      const active = ref(2);
      const List=[
      {
        title:'标签',
        icon: h(Home),
        name:'home'
      },
      {
        title:'标签',
        icon: h(Category),
        name:'category'
      },
      {
        title:'标签',
        icon: h(Find),
        name:'find',
        
      },
      {
        title:'标签',
        icon: h(Cart),
        name:'cart'
      },
      {
        title:'标签',
        icon: h(My),
        name:'my'
      }
    ]
      function tabSwitch(item, index) {
        console.log(item, index);
      }
      return {
        tabSwitch,
        List,
        active,
      };
    },
  }
</script>
```
:::
### 徽标提示
设置 dot 属性后，会在图标右上角展示一个小红点；设置 value 属性后，会在图标右上角展示相应的徽标。

内部使用了bardge徽标组件，可将其属性直接作用于TabbarItem props。
:::demo
```html
<template>
  <nut-tabbar>
      <nut-tabbar-item tab-title="首页" :icon="Home" :value="11">
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" :icon="Category" :dot="true">
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" :icon="Find" :value="110">
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="购物车" :icon="Cart">
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="我的" :icon="My"></nut-tabbar-item>
    </nut-tabbar>
</template>
<script>
  import { Home,Category,Find,Cart,My} from ' @nutui/icons-vue-taro';
  export default{
    components: {Home,Category,Find,Cart, My }
    setup(){
      return{
        Home,Category,Find,Cart, My
      }
    }
  }
</script>
```
:::
### 自定义颜色


:::demo
```html
<template>
    <nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
      <nut-tabbar-item v-for="(item,index) in List" :tab-title="item.title" :icon="item.icon"> </nut-tabbar-item>
    </nut-tabbar>
</template>
<script>
 import { Home,Category,Find,Cart,My} from ' @nutui/icons-vue-taro';
 export default{
    components: {Home,Category,Find,Cart, My },
    setup() {
      const List=[
      {
        title:'标签',
        icon: h(Home),
        name:'home'
      },
      {
        title:'标签',
        icon: h(Category),
        name:'category'
      },
      {
        title:'标签',
        icon: h(Find),
        name:'find',
        
      },
      {
        title:'标签',
        icon: h(Cart),
        name:'cart'
      },
      {
        title:'标签',
        icon: h(My),
        name:'my'
      }
    ]
      return {
        List,
      };
    },
  }
</script>
```
:::

### 自定义数量


:::demo
```html
<template>
  <nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
      <nut-tabbar-item tab-title="标签" :icon="Home" :value="11">
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="标签" :icon="Home" :dot="true">
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="标签" :icon="Home" :value="110" >
      </nut-tabbar-item>
  </nut-tabbar>
</template>
<script>
 import { Home } from ' @nutui/icons-vue-taro';
 export default{
    components: {Home},
    setup(){
      return{
         Home,
      }
    }
  }
</script>
```
:::
### 固定底部，可自由跳转


:::demo
```html
<template>
    <nut-tabbar bottom safe-area-inset-bottom placeholder>
      <nut-tabbar-item v-for="(item,index) in List" :tab-title="item.title" :icon="item.icon"> </nut-tabbar-item>
    </nut-tabbar>
</template>
<script>
 import { Home,Category,Find,Cart,My} from ' @nutui/icons-vue-taro';
 export default{
    components: {Home,Category,Find,Cart, My },
    setup() {
      const List=[
      {
        title:'标签',
        icon: h(Home),
      },
      {
        title:'标签',
        icon: h(Category),
      },
      {
        title:'标签',
        icon: h(Find),
        
      },
      {
        title:'标签',
        icon: h(Cart),
      },
      {
        title:'标签',
        icon: h(My),
      }
    ]
      return {
        List,
      };
    },
  }
</script>
```
:::

## API

### Tabbar Props

| 字段            | 说明               | 类型   | 默认值  |
|-----------------|--------------------|--------|---------|
| v-model | 选中标签的索引值或者名称    | Number | 0       |
| bottom          | 是否固定在页面底部 | Boolean | false   |
| unactive-color  | icon未激活的颜色   | String | #7d7e80 |
| active-color    | icon激活的颜色     | String | #1989fa |
| safe-area-inset-bottom   | 是否开启iphone系列全面屏底部安全区适配    | Boolean | false |
| placeholder | 固定在底部时，是否在标签位置生成一个等高的占位元素 | Boolean | false |
### TabbarItem Props

| 字段      | 说明                                      | 类型   | 默认值 |
|-----------|-------------------------------------------|--------|--------|
| tab-title | 标签页的标题                              | String | --    |
| name| 标签名称，作为匹配的标识符                             | String | 当前标签的索引值   |
| icon      | 标签页显示的[图标名称](#/zh-CN/component/icon)  | String | --     |
| href      | 标签页的跳转链接；如果同时存在 `to`，优先级高于 `to`    | String | --     |



### TabbarItem Slots

| 事件名称   | 说明               | 参数           |
|------------|--------------------|--------------------|
| icon | 自定义图标	 | active: boolean |

### Tabbar Events

| 事件名称   | 说明               | 回调参数           |
|------------|--------------------|--------------------|
| tab-switch | 切换页签时触发事件 | 点击的数据和索引值 |



