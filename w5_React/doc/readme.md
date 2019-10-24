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

## day6-1

### 面试题
* Vue组件局部样式
    * 属性选择器
* mixins的理解
    > 用于公共配置
* 在Vue中事件处理函数中如何获取event对象
    * 传参时如何获取
    ```
        v-on:click="handleClick(100,$event)"
        //window.event

        methods:{
            handleClick(num,e){

            }
        }
    ```
* 事件传播
    * 捕获
    * 冒泡
    > 我们平时所指的绑定事件其实就是给事件添加事件处理函数，区别在于你把这个事件处理函数放在哪个阶段执行
    ```js
        console.log(div);//conclic,onmouseover,onkeyup.... null
        div.onclick = function(){
            console.log(666)
        }

        div.addEventListener('click',(e)=>{
            e = e || window.event
            console.log(888)
        },true)
    ```

### 复习
* React特点
* JSX
    * 原理：React.createElement(name,attrs,children)
    * 编译规则：
        * html
        * js
        * 组件
    * 限制条件
        * 驼峰写法
        * js关键字与html属性同名：
        * 闭合标签（xhtml）
    ```jsx
        
        // let container = React.createElement('div',null,'');
        let container = <div>{username + '<span></span>'}</div>;
    ```
* create-react-app

### 知识点
* 组件
    * 分类
        * 函数组件（无状态组件，受控组件，UI组件）
        * 类组件（状态组件，非受控组件，容器组件）
    * 定义
        * 函数组件
            * 必须有返回值
            * 无this
            * 无生命周期函数
        ```js
            function Home(){
                return <div></div>
            }
        ```
        * 类组件
            * this指向实例
                * constructor
                * render
                * 生命周期函数
            * 绑定this
                * bind()    只生效第一次，一般会在构造器函数中进行绑定，防止意外情况
            * state
                * 获取：this.state.xxx
                * 设置/修改：this.setState({xxx})
                    * 唯一方式（注意：切记像Vue一样修改数据）
                        > react的state修改逻辑：重写一份并覆盖
        ```js
            class Home extends React.Component{
                constructor(){
                    super();

                    // 类组件的状态（类本身的数据）
                    this.state = {
                        qty:1
                    }
                }

                //必须包含render方法
                render(){
                    return <div>{this.state.qty}</div>
                }
            }
        ```
    * 组件通讯
        * 状态提升：把数据提升到组件共同的父级
            * 谁的数据谁修改
        * 父->子：props
            * 接收：
                * 函数组件：函数组件第一个参数
                * 类组件：
                    * this.props
        * 子->父
            > 把事件处理函数通过props传入子组件，然后在子组件中执行并传参
        * 多层次组件通讯：Context
            1. 创建Context
                 ```js
                    let MyContext = React.createContext(defaultValue)
                ```
            2. 父组件共享数据: 
                ```js
                    <MyContext.Provider value="xxx"></MyContext.Provider>
                ```
            3. 子组件接收
                * conextType: 只适用于类组件
                    ```js
                        SubComponent.contextType=MyContext
                        // 获取
                        this.context.xxx
                    ```
                * Consumer
                    ```js
                        <MyContext.Consumer>
                            {
                                (value)=>{}
                            }
                        </MyContext.Consumer>
                    ```
        * 内容: props.children
* 事件处理
    * this指向
        * this指向组件实例
            * constructor
            * render
            * 生命周函数
        * 改变this指向
            * fn.bind(): bind方法改变this指向，只会在第一次生效
    * event对象
        * 默认事件处理函数的最后一个参数
* ref
    * React.createRef()
        1. 创建ref: `this.inputDOM = React.createRef()`
        2. 写入节点：`ref={this.inputDOM}`
        3. 获取：`this.inputDOM.current`
    * 回调函数方式
        1. 设置：`ref={el=>this.inputDOM=el}`
        2. 获取：`this.inputDOM`


## day6-2

### 面试题
* webpack与gulp的区别
    * webpack是基于配置的构建工具，gulp是基于任务的构建工具
    * gulpfile.js & webpack.config.js


### 知识点
* webpack配置
    > webpack.config.js是一个基于commonJS模块
    * entry: 入口文件

## day6-3

### 复习
* webpack的配置参数（webpack.config.js）
    * entry: 入口
    * output:  出口
        * path：编译时文件存放路径
        * filename：
            * name
            * hash:5
        * publicPath
    * devServer:
        * contentBase: 服务器根目录
        * host：主机（默认：localhost） -> 0.0.0.0
        * post: 端口（默认：8080）
        * proxy
        ....
    * loader加载器
        > module.rules
        * test：正则匹配文件后缀
        * use：使用loader
    * plugin插件
        * html-webpack-plugin
        * clean-webpack-plugin
* ReactRouter
    * 理念：万物皆组件
    * 常用组件
        * 路由模式：HashRouter / BrowserRouter
        * 配置
            * 路由配置：Route
                * path
                * component
                * render
                * exact
            * 重定向：Redirect
                * from
                * to
            * 单一匹配：Switch
        * 导航
            * 声明式导航
                * Link
                    * to
                    * replace
                * NavLink
                    * activeClassName
                    * activeStyle
                    * replace
            * 编程式导航
                * 如何获取history对象
                    * 利用<Route/>渲染的组件: this.props.history
                    * 利用`高阶组件HOC`withRouter获取：
                * history
                    * push()        <NavLink to="xx"/>
                    * replace()     <NavLink to="xx" replace/>
                * location
                * match
* 高阶组件HOC（High Order Component）
    >高阶组件是一个包装函数，它的返回值才是一个组件
    * 原理：props
    * 纯函数：
        * 内部不会改变传入的参数，相同的参数得到同样的结果
        * 内部没有自己的状态
    * ES7装饰器
        * 
    ```js
        function pf(num){
            return num**2
        }
        pf(2);//4
        pf(2);//4

        function randomNum(min,max){

        }
    ```

* 生命周函数
    * Initial       初始化阶段
    * Mounting      挂载阶段
    * Updating      更新阶段
    * Unmounting    卸载阶段


## day6-4

### 复习
* babel
    * plugin
        * @babel/plugin-proposal-decorators
        * @babel/plugin-proposal-class-properties
    * webpack
    * .babelrc


### 知识点
* webpack
    ```js
        import Vue from 'vue'
    ```
