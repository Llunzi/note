react面试：
1. JSX 语法
	 ReactDOM.render
	 使用 setState 来改变组件的状态 state, 异步
	 组件生命周期相关的方法
	 事件和表单
	 几种创建组件的方式
	 React.createClass 使用这个API来定义组件
	 React ES6 class components 使用 ES6 的class 来定义组件
	 Functional stateless components 通过函数直接定义无状态组件
	 复合组件 composeable
	 高阶组件的使用和定义 HOC
	 组件间的通信

2. constructor(props)
	 componentWillReceivePorps(nextProps)
	 shouldComponentUpdate(nextPorps, nextState)
   componentWillUpdate(nextPorps, nextState)
   componentWillCount()
   render()
   componentDidCount()
   componentDidUpdate()
   componentWillMount()
   
3. 当你调用setState的时候，发生了什么事？
   shouldComponentUpdate(nextPorps, nextState) ... 虚拟Dom Diff
4. 在 React 当中 Element 和 Component 有何区别？
   ReactElement是描述屏幕上所见的内容的数据结构,是对于UI的对象的表述.典型的ReactElement就是利用JSX构建的声明式代码片段,然后被转化为createElement的调用组合.
	 ReactComponent则是可以接收参数输入并且返回某个ReactElement的函数或者类.

5. 什么是 React 的 refs ，keys，为什么它们很重要？需要注意哪些？
   keys是什么帮助 React 跟踪哪些项目已更改、添加或从列表中删除。
       每个 keys 在兄弟元素之间是独一无二的
   
   Refs是React提供给我们安全的访问DOM元素或者某个组件实例的句柄,
       我们可以为元素添加ref属性然后在回调函数中接收该元素在DOM树中的句柄,该值会作为回调函数的第一个参数的返回.
   ReactDOM.findDOMNode(ref)
   
6. 在哪个生命周期事件中你会发出 AJAX 请求，为什么？componentDidMount 
7. shouldComponentUpdate 应该做什么，为什么它很重要？
8. createElement 和 cloneElement 有什么区别？
   React.createElement(type,[props],[...children])
   React.cloneElement(element,[props],[...children])
   
 =========================Redux===================================
 
 
1.每个传入 combineReducers 的 reducer 都需满足以下规则：
 a. 所有未匹配到的 action，必须把它接收到的第一个参数也就是那个 state 原封不动返回。
 b. 永远不能返回 undefined。当过早 return 时非常容易犯这个错误，为了避免错误扩散，遇到这种情况时 combineReducers 会抛异常。
 c. 如果传入的 state 就是 undefined，一定要返回对应 reducer 的初始 state。
    根据上一条规则，初始 state 禁止使用 undefined。使用 ES6 的默认参数值语法来设置初始 state 很容易，但你也可以手动检查第一个参数是否为 undefined。
    
2. reducer 就是一个函数，接收旧的 state 和 action，返回新的 state
   combineReducers(reducers)方法，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。
   
   
3. applyMiddleware(...middlewares) {
  return (createStore) => (reducer, preloadedState, enhancer) => { 
    var store = createStore(reducer, preloadedState, enhancer)
    ... 
}

4. 异步操作
   异步操作的第一种解决方案就是，写出一个返回函数的 Action Creator，然后使用redux-thunk中间件改造store.dispatch
   
5. UI组件、容器组件  
	UI组件：
	只负责 UI 的呈现，不带有任何业务逻辑
	没有状态（即不使用this.state这个变量）
	所有数据都由参数（this.props）提供
	不使用任何 Redux 的 API
	
	容器组件: 
	负责管理数据和业务逻辑，不负责 UI 的呈现
	带有内部状态
	使用 Redux 的 API
 
  UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑
  
  applyMiddleware 
  
  6. 性能优化（https://zh-hans.reactjs.org/docs/optimizing-performance.html）
 1. webpack
  new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
}),
  new webpack.optimize.UglifyJsPlugin()
 2. Rollup
 replace 插件确保环境被正确设置。
 commonjs 插件用于支持 CommonJS。
 uglify 插件用于压缩并生成最终的产物。
 plugins: [
  // ...
  require('rollup-plugin-replace')({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  require('rollup-plugin-commonjs')(),
  require('rollup-plugin-uglify')(),
  // ...
 ] 
 3. 使用 Chrome Performance 标签分析组件
 临时禁用所有的 Chrome 扩展，尤其是 React 开发者工具。他们会严重干扰度量结果！

确保你是在 React 的开发模式下运行应用。

打开 Chrome 开发者工具的 Performance 标签并按下 Record。

对你想分析的行为进行复现。尽量在 20 秒内完成以避免 Chrome 卡住。

停止记录。

在 User Timing 标签下会显示 React 归类好的事件。
4. 使用开发者工具中的分析器对组件进行分析
Web通用工具：Chrome DevTools
React特色工具：Perf
5. 虚拟化长列表
如果你的应用渲染了长列表（上百甚至上千的数据），我们推荐使用“虚拟滚动”技术。这项技术会在有限的时间内仅渲染有限的内容，并奇迹般地降低重新渲染组件消耗的时间，以及创建 DOM 节点的数量。

react-window 和 react-virtualized 是热门的虚拟滚动库。 它们提供了多种可复用的组件，用于展示列表、网格和表格数据。 如果你想要一些针对你的应用做定制优化，你也可以创建你自己的虚拟滚动组件，就像 Twitter 所做的。
6. 你可以通过 React 开发者工具可视化地查看这些重新渲染的虚拟 DOM：
在开发者控制台的 React 标签勾选 Highlight Updates：
当与你的页面进行交互时，你会看到被重新渲染的组件立刻出现了彩色的边框。这能帮助你找到那些没有必要的重新渲染。你可以在 Ben Edelstein 的这篇博客中学到更多关于 React 开发者工具的功能。
7. shouldComponentUpdate 的作用，你可以使用 React.PureComponent 来代替手写 shouldComponentUpdate。shallowCompare
setState diff 
减少diff算法触发次数
  1.setState
	setState机制在正常运行时，由于批更新策略，已经降低了update过程的触发次数。
	因此，setState优化主要在于非批更新阶段中(timeout/Promise回调)，减少setState的触发次数。
	常见的业务场景即处理接口回调时，无论数据处理多么复杂，保证最后只调用一次setState。

  2.父组件render
	父组件的render必然会触发子组件进入update阶段（无论props是否更新）。此时最常用的优化方案即为shouldComponentUpdate方法。
	最常见的方式为进行this.props和this.state的浅比较来判断组件是否需要更新。或者直接使用PureComponent，原理一致。
	需要注意的是，父组件的render函数如果写的不规范，将会导致上述的策略失效。
  3. forceUpdate
	其中forceUpdate方法调用后将会直接进入componentWillUpdate阶段，无法拦截，因此在实际项目中应该弃用。
 正确使用diff算法
	不使用跨层级移动节点的操作。
	对于条件渲染多个节点时，尽量采用隐藏等方式切换节点，而不是替换节点。
	尽量避免将后面的子节点移动到前面的操作，当节点数量较多时，会产生一定的性能问题。
8. 不可变数据的力量 避免该问题最简单的方式是避免更改你正用于 props 或 state 的值。
9. 结合Immutable.js
