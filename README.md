## webpack2build
即安即用的webpack开发工具
## scripts 说明

| 命令  | 说明  |
| ------------ | ------------ |
|  start |启动开发环境|
|  build |转换es6代码|

## config 文件说明
配置文件需要创建于根目录下的`config/index.js`。

### dev

| 字段  | 说明  |
| ------------ | ------------ |
|  host |主机 - localhost|
|  port |端口|
|  proxyTable | 代码接口配置 |
|  useEslint | 使用eslint |
|  extendLoader | 用于扩展loader配置 |
|  autoOpenBrowser | 自动打开浏览器 |
|  errorOverlay | 全屏错误提示 |
|  showEslintErrorsInOverlay | 全屏eslint错误提示 |
|  assetsPublicPath | 资源路径 |
|  devtool | sourcemap 配置 |
|  poll | 轮询 |
|  preProcessorsCss | 预编译css, 可传字符串或数组。'less' or ['less', 'stylus'] |
|  assetsSubDirectory | 静态资源目录 |
|  cssSourceMap | css sourcemap |
|  define | 定义开发环境下变量 |

### build

| 字段  | 说明  |
| ------------ | ------------ |
|  bundleAnalyzerReport |开启包分析|
|  index |入口index.html路径|
|  assetsRoot | assetsRoot 路径 |
|  assetsSubDirectory | 静态资源文件名 |
|  assetsPublicPath | 静态资源文件名路径 |
|  productionSourceMap | 是否开启生产环境 sourcemap |
|  preProcessorsCss | 预编译css, 可传字符串或数组。'less' or ['less', 'stylus'] |
|  devtool | sourcemap 配置 |
|  define | 定义生产环境下变量 |
