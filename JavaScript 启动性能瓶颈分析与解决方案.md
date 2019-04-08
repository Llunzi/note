## 1. 参考[JavaScript 启动性能瓶颈分析与解决方案](https://infoq.cn/article/javascript-start-up-performance?utm_source=tuicool&utm_medium=referral)
## 2. 笔记：
### 我们可以做些什么以降低 JavaScript 的解析时间？
* 减少JavaScript 包体体积。我们在上文中也提及，更小的包体往往意味着更少的解析工作量，也就能降低浏览器在解析与编译阶段的时间消耗。
* 使用代码分割工具来按需传递代码与懒加载剩余模块。这可能是最佳的方式了，类似于PRPL这样的模式鼓励基于路由的分组，目前被 Flipkart, Housing.com 与 Twitter 广泛使用。
* Script streaming: 过去 V8 鼓励开发者使用async/defer来基于script streaming实现 10%-20% 的性能提升。这个技术会允许 HTML 解析器将相应的脚本加载任务分配给专门的 script streaming 线程，从而避免阻塞文档解析。V8 推荐尽早加载较大的模块，毕竟我们只有一个 streamer 线程。
* 评估我们依赖的解析消耗。我们应该尽可能地选择具有相同功能但是加载地更快的依赖，譬如使用 Preact 或者 Inferno 来代替 React，二者相较于 React 体积更小具有更少的语法解析与编译时间。Paul Lewis 在最近的一篇文章中也讨论了框架启动的代价，与 Sebastian Markbage 的说法不谋而合：最好地评测某个框架启动消耗的方式就是先渲染一个界面，然后删除，最后进行重新渲染。第一次渲染的过程会包含了分析与编译，通过对比就能发现该框架的启动消耗。
