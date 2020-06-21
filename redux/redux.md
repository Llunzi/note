## 理解Redux以及如何在项目中的使用
### 1. 生成Store
```
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'　　

const store = createStore(reducers,applyMiddleware(thunk))　　　

export default store
```
### 2. 合并reducer
```
import { combineReducers } from 'redux' 
import index from 'pages/index.reducer'
import address from 'pages/address/address.reducer'

export default combineReducers({
    index,
    address
})
```
### 3. 注入Store
```
import { Provider } from 'react-redux'
import store from './store'
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
```
### 4. connect
```
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'

@connect(
  ({ pageData }) => {
    return { pageConfig: pageData.pageConfig }
  },
  dispatch => {
    return bindActionCreators(
      {
        dispatchPageConfig,
      },
      dispatch,
    )
  },
)
```
### 5. 触发Dispather
```
this.props.dispatchPageConfig(channelCode, orderChannel)
```

### [compose](http://cn.redux.js.org/docs/api/compose.html)
```
export default function compose(...funcs: Function[]) {
  if (funcs.length === 0) {
    // infer the argument type so it is usable in inference down the line
    return <T>(arg: T) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args: any) => a(b(...args)))
}
```
