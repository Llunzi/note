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
