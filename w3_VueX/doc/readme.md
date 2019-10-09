# VueX

## day4-3
* VueX
    * 核心概念
        * store     仓库
            * state     类似与组件中的data
                * store.state.xxx
            * getters   类似与组件中的computed
                * store.getters.xxx
            * mutations  类似与组件中的methods，用于修改state的唯一方式
                * 调用方式： store.commit('add2cart',{id,name,price,qty,imgurl})
            * actions   类似与组件中的methods,用于操作mutation
                * 调用方式： store.dispatch('changeQtyAsync',{id,qty})
                * 使用场景
                    * 需要异步获取数据进行判断时
                    * 多个组件中有相同的异步请求时
        * 
* 专业术语
    * 后端：backEnd  BE
    * 前端：frontEnd FE