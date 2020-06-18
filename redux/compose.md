## [compose(...functions)](http://cn.redux.js.org/docs/api/compose.html)

- 需要合成的多个函数。预计每个函数都接收一个参数。它的返回值将作为一个参数提供给它左边的函数，以此类推。例外是最右边的参数可以接受多个参数，因为它将为由此产生的函数提供签名。
- compose(funcA, funcB, funcC) 形象为 compose(funcA(funcB(funcC())))）
### 源码
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
实例
```
const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), DevTools.instrument())
)
```
