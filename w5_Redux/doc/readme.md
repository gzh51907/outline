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
* React-redux
    * 原理：context + HOC
    * 内置组件: `<Provider store={store}/>`
    * 高阶组件：`connect()()`