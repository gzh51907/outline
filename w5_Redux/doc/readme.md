## day7-1

### 复习
* Redux
    * 核心概念
        * Store
            * state
            * 获取: store.getSate()
            * 修改：store.dispatch()
            * 监听：store.subscribe(fn)
            * 创建：Redux.createStore(Reducer)
        * Reducer
            * 是一个纯函数，用于定义如何修改state
            * 参数
                * state
                * action
            * 必须返回一个新的state
        * Action
            * 修改State的命令，格式：{type,payload}

    ```js
        import {createStore} from 'redux';

        let initialState = {}

        let reducer = function(state=initialState,action){
            switch(action.type){
                case xxx:
                    return {}
                default:
                    return state;//得到当前state数据
            }
        }

        let store = creacteStore(reducer);


        // 在React组件中获取state（获取最新的State）
        store.getState();

        // 在React组件中修改state
        store.dispatch({type:'xxx',payload:'xxx'})
    ```

## 知识点

* Redux模块化
* ActionCreator
    * 创建一个action
    * bindActionCreators：把ActionCreator中的所有方法(export default中的方法)绑定到组件props并自动隐式调用dispatch(action)
    ```js
        // 模拟actionCreators
            return bindActionCreators(cartAction,dispatch);//{add,remove,clear,changeQty}

            function bindActionCreators(Actions,dispatch){
                let res = {}
                for(let key in Actions){
                    res[key] = function(){
                        dispatch(Actions[key](...arguments))
                    }
                }
                return res
            }
    ```
* React-redux
    * 原理：context + HOC
    * 内置组件: `<Provider store={store}/>`
    * 高阶组件：`connect()()`


* Redux学习流程：Redux -> React-Redux(Context+HOC)->redux模块化 -> ActionCreator -> bindActionCreator


* React中如何做权限管理
    * user信息需要redux共享
    * HOC+shouldComponentUpdate()

* redux中间件
    * redux-saga
        * Generator
        * Iterator
            * next() => {value,done}
    * action分类
        * reduxAction
        * sagaAction
    * 处理多个中间件

