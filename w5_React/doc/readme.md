# React

## day5-5
* 组件化开发
    * 定义
        * 函数组件（无状态组件、受控组件、UI组件）
            * 必须有返回值
        * 类组件（有状态组件、非受控组件、容器组件）
            * 必须包含render方法，且render方法必须有返回值
        > 尽量使用函数组件，当函数组件无法达到想要的效果时才使用类组件
* 列表循环
* 事件处理
    * this指向
        * constructor中的this指向组件实例
        * render中的this指向组件实例
    * 改变this指向
        * fn.bind()
        * bind方法改变this指向，只会在第一次生效
* 类组件
    * state
        * 获取：this.state.xxx
        * 修改：this.setState({xxx})
    ```js
    // Vue组件定义
        Vue.component()
        {
            ...
            components
        }
    ```