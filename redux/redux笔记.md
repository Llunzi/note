### [REDUX](https://segmentfault.com/a/1190000010371752?utm_source=tag-newest)

### 核心概念<br>
	state action  reducer
	
### 三大原则<br>
* 单一数据源<br>
	整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。<br>
* State 是只读的<br>	
	唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。<br>
* 使用纯函数来执行修改<br>
	为了描述 action 如何改变 state tree ，你需要编写 reducers。<br>
	
* [核心代码](https://blog.csdn.net/sinat_17775997/article/details/83410124)
