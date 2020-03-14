## 2.2.1

`2020-03-09`

* :sparkles: upd(BackTop)：支持指定容器Id监听滚动事件，重构优化，文档优化 @richard1015
* :sparkles: upd(Cell)：重构优化内部代码，文档优化 @zhenyulei
* :sparkles: upd(Dialog)：重构优化内部代码，文档优化 @guoxiao158
* :sparkles: doc：文档新增业务组件 @richard1015
* :sparkles: feat(Types)：新增TextBox types类型 @richard1015
* :sparkles: feat(Scroller)：vertical-scroll组件新增滚动监听事件 @richard1015
* :sparkles: feat(LuckDraw)：新增业务抽奖组件 @Ymm0008
* :bug: fix(Stepper) 修复步进器组件触发多次change事件 #207 @richard1015
* :bug: fix(Popup) 修复样式加载问题 @yangkaixuan
* :bug: fix(Tab) 修复标签中数据更新不渲染页面的问题 #215 @zhenyulei
* :bug: fix(LeftSlip) 左滑删除优化,单元测试问题修复 @vickyYE
* :bug: fix(MoToVue) md 转换 vue 插件性能优化 @linrufeng
* :bug: fix(checkboxgroup) 修复代码冲突 @richard1015

## 2.2.0

`2020-02-12`

* :sparkles: feat(TabSelect)：新增TabSelect组件送货时间 @dushoujun
* :sparkles: feat(LeftSlip)：新增LeftSlip组件 @vickyYE
* :sparkles: feat(Scroller)：组件新增滚动到指定位置事件 @irisSong
* :bug: fix(datepicker) 部分手机样式不兼容 #191 @irisSong
* :bug: fix(datepicker) 将手机字体调大后放大镜效果错乱 #193 @irisSong
* :bug: fix(InfiniteLoading) keep-alive 场景scoll事件未卸载 #199 @irisSong
* :bug: fix(popup)：修复无法按需加载、文档文案错误 @yangkaixuan

## 2.1.9

`2020-01-09`

* :sparkles: feat(CheckboxGroup)：增加全选、反选功能 @richard1015
* :sparkles: feat(uploader)：上传组件支持withCredentials参数 #190 @richard1015
* :sparkles: feat：新增popup组件 @yangkaixuan
* :sparkles: feat：新增Elevator电梯楼层组件 @zhenyulei
* :sparkles: feat：新增textbox文本域组件 @guoxiao158
* :bug: fix(calendar)：修复日历组件 当某个月的1号是周日时，月份下方会空出来一行 @irisSong
* :bug: fix(menu)：修复组件多实例bug #182 @Ymm0008
* :bug: fix(col)：修复组件中文字超出时样式问题 @richard1015
* :bug: fix(imagepicker)：imgList双向绑定问题 #187 @richard1015
* :bug: fix(toast)：修复toast多实例关闭事件冲突 #181 @guoxiao158
* :zap: doc：修改（picker自定义数据demo；cdn按需加载；VueCLI3按需加载）； @richard1015

## 2.1.8

`2019-12-11`
* :bug: fix(calendar)：修复日历组件点击确定触发close事件,closes #175
* :bug: fix(checkboxgroup)：修复checkboxgroup 无法实现双向数据绑定,closes #126
* :bug: fix(steps)：修复steps组件动态加载数据报错,closes #178
* :bug: fix(scroller)：修复horizontal-scroll 固定宽度滑动计算bug
* :sparkles: upd(scroller)：优化 vertical-scroll 模式不能设置动画的执行时间,closes #161
* :sparkles: upd(datepicker)：优化DatePicker中minuteStep支持到datetime类型
* :sparkles: feat: 新增移动端 pc端，JS自动切换 
* :zap: style(lazyLoad)：修改lazyLoad Demo 样式
* :zap: doc: 修改README-zh_CN.md、README.md、intro.md 文档
* :zap: doc: 修改ISSUE_TEMPLATE 提交ISSUE模板
* :zap: doc: 修改checkbox Demo文档

## 2.1.7

`2019-11-13`
* :sparkles: upd(swiper): 异步加载不需主动调用updateEvent事件、懒加载方式优化
* :sparkles: upd(uploader): 增加自定义header功能
* :sparkles: feat: 新增图片懒加载组件`LazyLoad`
* :zap: chore(webpack): 构建环境多入口模式（构建环境支持 doc文档和mobile 示例 同时调试）；热更新配置，公共模块
* :zap: doc: start.md 文档修改
* :bug: fix: datepicker 组件bug修复(异步修改startDate,endDate,defaultValue字段无响应；时间限制支持到时、分)

## 2.1.6

`2019-10-15`
* :bug: fix: 修复dialog picker scroller组件问题

## 2.1.5

`2019-7-10`
* :bug: fix: 修复国际化语言包一处错误

## 2.1.4

`2019-7-10`

* :sparkles: upd(SearchBar): 增加props控制内部Icon尺寸和颜色
* :bug: fix(Skeleton): 修复文档无法查看的问题
* :bug: fix: 修复国际化语言包一处错误
* :zap: chore: 优化服务端渲染
* :zap: doc: 新增加入我们页面

## 2.1.3

`2019-6-26`

* :sparkles: feat: 新增头像组件`Avatar`
* :sparkles: upd(SearchBar): 右侧文字或按钮增加事件，优化样式
* :sparkles: upd(CountDown): 更新了单元测试用例
* :sparkles: upd(NoticeBar): 优化了滚动速度
* :sparkles: upd(date.js): 完善了`getNumTwoBit`方法( Thx to liu-dongyu)
* :zap: chore: 更新部分依赖包版本
* :zap: doc: 文档内容修改完善

## 2.1.2

`2019-5-23`

* :sparkles: upd(Slider): 优化了拖动性能
* :sparkles: upd(Range): 优化了拖动性能
* :sparkles: upd(Switch): 优化了快速点击场景下的问题
* :sparkles: upd(CountDown): 优化了diffTime/restTime & 新增了一些事件
* :bug: fix(Calendar极值问题): 修复了极值问题
* :zap: chore: 优化了MD文档编译缓存机制
* :zap: chore: 不再单独构建commonjs包
* :zap: doc: 文档内容修改完善


## 2.1.1

`2019-4-22`

* :sparkles: feat: 新增文本框组件`TextInput`
* :sparkles: chore: 优化单元测试配置
* :sparkles: upd: `Stepper`组件新增支持小数
* :bug: fix: 修复`CountDown`组件在iOS上某些场景下的一个问题
* :bug: fix: 修复`Scroller`内部元素无法触发点击事件的问题
* :bug: fix: 修复国际化语言包一处错误

## 2.1.0

`2019-4-15`

* :sparkles: feat: 新增上传组件`Uploader`
* :sparkles: feat: 服务端渲染新增支持按需加载
* :sparkles: chore: UMD包支持commonjs规范，服务端渲染不再需要引commonjs版的构建包了
* :sparkles: chore: 大幅削减完整版构建包体积
* :sparkles: chore: 自动创建新组件配置和模板功能优化
* :sparkles: test: 单元测试功能优化
* :sparkles: upd: `Scroller`组件优化
* :sparkles: upd: `Picker`组件优化 
* :bug: fix: 修复`Dialog`组件取消按钮触发事件错误的问题
* :zap: doc: 文档内容修改完善

## 2.0.9

`2019-3-29`

* :sparkles: feat: 新增局部滚动组件`Scroller`
* :sparkles: feat: 新增无限加载组件`InfiniteLoading`
* :sparkles: upd: 吐司组件`Toast`支持配置遮罩层，loading类型默认开启
* :sparkles: upd: `flex`组件允许动态改变nut-col的:span的值 
* :bug: fix: 修复`RadioGroup`组件按需加载css报错的问题（感谢@451761830反馈）
* :bug: fix: 修复引用scss报错的问题
* :bug: fix: 修复`Imagepicker`组件multiple属性逻辑错误问题（感谢@liuyanqing反馈）
* :zap: doc: 文档内容完善

## 2.0.8

`2019-3-19`

* :bug: 修复`Dialog`组件按需加载报错的问题

## 2.0.6

`2019-3-18`

* :sparkles: `Dialog`组件新增支持标签形式用法
* :bug: 修复`DatePicker`组件按需加载scss文件样式丢失的问题
* :zap: 官网布局优化
* :zap: 文档内容完善

## 2.0.4

`2019-3-12`

* :sparkles: 新增构建CommonJS包
* :sparkles: 新增倒计时`CountDown`组件
* :bug: 修复`Rate`组件样式兼容问题
* :bug: 修复`ShortPassword`组件小屏设备样式兼容问题
* :bug: 修复两个组件测试用例问题
* :zap: 优化`Swiper`组件
* :zap: 文档增加目录功能
* :zap: 新增英文版README.md

## 2.0.3

`2019-1-25`

* :sparkles: 新增返回顶部`BackTop`组件
* :bug: 修复`Swiper`组件 slideChangeEnd 事件的一个bug
* :zap: `Rate`组件增加允许设置只读和间距
* :zap: 文档MD转Vue增加文件缓存功能，提升文档预览和构建速度
* :zap: 示例页面增加评分推荐

## 2.0.2

`2019-1-18`

* :zap: 优化`Picker`组件样式，增加放大镜效果
* :zap: 优化`Dialog`组件按钮点击状态样式
* :zap: 优化官网代码展示容器样式

## 2.0.1

`2019-1-16`

* :bug: 修复`Dialog`组件在部分低版本浏览器上的高度问题
* :zap: 优化`Demo`列表页面在部分 iOS 设备上的展示

## 2.0.0

`2019-1-15`

### 新特性

- :zap: 全新的架构
- :lipstick: 全新的视觉样式，参照京东APP v7.0视觉规范
- :sparkles: 全新的按需加载方式
- :art: 新增支持定制主题
- :globe_with_meridians: 新增支持多语言（国际化）
- :sparkles: 新增支持 TypeScript
- :sparkles: 新增支持服务端渲染（Vue SSR）
- :white_check_mark: 新增单元测试
- :pencil2: CSS单位由 `rem` 改为 `px`
- :sparkles: 新增若干组件


### ⚠️ 升级必读

- 2.x 不兼容 1.x，建议直接升级到 2.x 的最新版本
