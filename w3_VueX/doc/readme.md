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