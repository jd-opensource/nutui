# 迁移说明

关于@import 迁移@use + @forward 的说明

## 需要集中管理的变量和样式

1. 所有需要集中管理的样式和变量需要放在index.scss中或者通过@forward 在index中转发
2. 集中管理后，在需要使用的地方通过@use 引入， `@use 'index'` , 引入后，就可以使用index中暴露的变量和样式,注意这里换成index实际路径 比如 `@use "@/packages/styles/index.scss" as *;`、
3. 注意 被@forward 转发的文件里只定义变量和mixin，避免混写 导致循环引用和重复定义

## vite 配置 中的迁移

参考下面写法修改。

```bash
additionalData: `@use "@/packages/styles/index.scss" as *; @use "@/sites/assets/styles/index.scss" as *;`
```

目前v4中代码的@import 全部迁移成了@use + @forward ，避免高版本sass 编译报错或警告
