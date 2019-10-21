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