### 1. 什么是webpack和grunt和gulp有什么不同
* Webpack是一个模块打包器，他可以递归的打包项目中的所有模块，最终生成几个打包后的文件。他和其他的工具最大的不同在于他支持code-splitting、模块化(AMD，ESM，CommonJs)、全局分析。

### 2. 什么是bundle,什么是chunk，什么是module?
* bundle是由webpack打包出来的文件，chunk是指webpack在进行模块的依赖分析的时候，代码分割出来的代码块。module是开发中的单个模块。

### 3. 什么是Loader?什么是Plugin?
* 1）Loaders是用来告诉webpack如何转化处理某一类型的文件，并且引入到打包出的文件中
* 2）Plugin是用来自定义webpack打包过程的方式，一个插件是含有apply方法的一个对象，通过这个方法可以参与到整个webpack打包的各个流程(生命周期)。

### 4. webpack-dev-server和http服务器如nginx有什么区别?
* webpack-dev-server使用内存来存储webpack开发环境下的打包文件，并且可以使用模块热更新，他比传统的http服务对开发更加简单高效。

### 5. 什么是模块热更新？
* 模块热更新是webpack的一个功能，他可以使得代码修改过后不用刷新浏览器就可以更新，是高级版的自动刷新浏览器。

### 6. 什么是长缓存？在webpack中如何做到长缓存优化？
* 浏览器在用户访问页面的时候，为了加快加载速度，会对用户访问的静态资源进行存储，但是每一次代码升级或是更新，都需要浏览器去下载新的代码，最方便和简单的更新方式就是引入新的文件名称。在webpack中可以在output纵输出的文件指定chunkhash,并且分离经常更新的代码和框架代码。通过NameModulesPlugin或是HashedModuleIdsPlugin使再次打包文件名不变。

### 7. 什么是Tree-shaking?CSS可以Tree-shaking吗
* Tree-shaking是指在打包中去除那些引入了，但是在代码中没有被用到的那些死代码。在webpack中Tree-shaking是通过uglifySPlugin来Tree-shaking
JS。Css需要使用Purify-CSS。

### 8. 代理远程接口请求
http-proxy-middleware参数：
option：
    target：指定代理的地址，
    changeOrigin：改变源到url，在虚拟主机上很有用
    headers：增加http请求头，
    logLevel：帮助调试
    pathRewrite：重定向
    

### 9. 什么是webpack
webpack是一个打包模块化javascript的工具，在webpack里一切文件皆模块，通过loader转换文件，通过plugin注入钩子，最后输出由多个模块组合成的文件，webpack专注构建模块化项目。
WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。

### 10. 几个常见的loader
* file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件
* url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去
* source-map-loader：加载额外的 Source Map 文件，以方便断点调试
* image-loader：加载并且压缩图片文件
* babel-loader：把 ES6 转换成 ES5
* css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
* style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。
* eslint-loader：通过 ESLint 检查 JavaScript 代码

### 11. 几个常见的plugin
* define-plugin：定义环境变量
* html-webpack-plugin 为html文件中引入的外部资源，可以生成创建html入口文件
* mini-css-extract-plugin：分离css文件
* clean-webpack-plugin：删除打包文件
* happypack：实现多线程加速编译

### 12. webpack有哪些优点
* 专注于处理模块化的项目，能做到开箱即用，一步到位
* 可通过plugin扩展，完整好用又不失灵活
* 使用场景不局限于web开发
* 社区庞大活跃，经常引入紧跟时代发展的新特性，能为大多数场景找到已有的开源扩展
* 良好的开发体验

### 13. webpack的缺点
* webpack的缺点是只能用于采用模块化开发的项目

### 14. 如何提高webpack的构建速度
* 通过externals配置来提取常用库
* 利用DllPlugin和DllReferencePlugin预编译资源模块 通过DllPlugin来对那些我们引用但是绝对不会修改的npm包来进行预编译，再通过DllReferencePlugin将预编译的模块加载进来。
* 使用Happypack 实现多线程加速编译 <br>
要注意的第一点是，它对file-loader和url-loader支持不好，所以这两个loader就不需要换成happypack了，其他loader可以类似地换一下
* 使用Tree-shaking和Scope Hoisting来剔除多余代码
* 使用fast-sass-loader代替sass-loader
* babel-loader开启缓存<br>
babel-loader在执行的时候，可能会产生一些运行期间重复的公共文件，造成代码体积大冗余，同时也会减慢编译效率
可以加上cacheDirectory参数或使用 transform-runtime 插件试试
* 优化构建时的搜索路径
在webpack打包时，会有各种各样的路径要去查询搜索，我们可以加上一些配置，让它搜索地更快
比如说，方便改成绝对路径的模块路径就改一下，以纯模块名来引入的可以加上一些目录路径
还可以善于用下resolve alias别名 这个字段来配置
还有exclude等的配置，避免多余查找的文件，比如使用babel别忘了剔除不需要遍历的
