# Vue

## day3-2

### 面试题
* gulp常用方法
    * task()
    * src()
    * dest()
    * watch()
    * run()
* npm全局安装与局部安装的区别
* --save和--save-dev
    * npm install
        * --production

### 复习
* 跨域解决方案
    * jsonp
    * CORS
    * 服务器代理
    * 爬虫

### 知识点
* 前端框架
    * jQuery    2006-2013
    * angular   2009-2014       MVC
    * React     2013            虚拟DOM
    * Vue       2014-2016
* 版本
    * 开发版本（开发环境，未压缩）
        * 调式
    * 生产版本（上线，压缩）
* js中的约定
    * 对象中带下划线的属性为内部属性
* 响应式属性
    * 设置：实例化时配置data
    * 原理：实例化过程中，Vue会遍历data下所有的属性，并通过Object.defineProperty()设置设置为存储器属性，并写入Vue的实例
* 使用Vue的步骤
    1. 引入Vue
    2. 实例化
        * 配置参数
            * el        挂载点
            * data
    3. 数据挂载
        * {{username}}  实例的属性都可以挂载到视图中
        * 实时更新
            * 数据更新 -> 视图更新
* 属性分类：Object.defineProperty()
    * 值属性
        * configurable  可配置性（是否可修改其他属性特性）
        * enumerable    可枚举性
        * writable      可写性
        * vaule
    * 存储器属性（getter & setter）
        * configurable  可配置性（是否可修改其他属性特性）
        * enumerable    可枚举性
        * get
        * set

## day3-3

### 面试题
* 为数组为什么不能使用数组的方法
    * 原型链不同
* 对象的深拷贝方式
    ```js
        obj = {a:10,b:20,show:function(){}};
        obj2 = obj;//复制引用地址

        // 浅复制
        //for..in,Object.assign({},obj),...

        //深复制
        //递归遍历、JSON.parse(JSONStringify())、工具
    ```
* 双向数据绑定的原理

* js是定义
    * 是一门客户端语言
    * 是一门弱类型（typescript）
        * 最灵活的语言
    * 是一门基于对象的语言
        * js中一切皆对象
* XSS攻击
* async & await的理解
    * ES7
* script属性
    * type  text/javascript
    * src
    * async     加载完成立即执行js
    * defer     推迟执行
    ```html 
        <head>
        <script src="xxx.js" defer></script> 
        <script src="xxx.js" async></script>
        </header>
        <body></body>
    ```

## 复习
* Vue
    * 使用Vue的步骤
    * MVVM架构
    * 关注点从节点变成数据
    * 数据绑定的方式
        * 单向
            * {{}}
            * v-bind
            * v-text
            * v-html
            * 原理：Object.defineProperty()实现getter&setter
        * 双向
            * v-model
            * 原理：单向+事件
                * Model -> View     同上
                * View -> Model     事件

    * 指令
        * v-on
            * 格式：v-on:事件类型="事件处理函数"
        * v-for
        * v-show
        * v-if/v-else/v-else-if
    * 特殊属性
        * ref
    * 实例化配置参数
        * el
        * data
        * computed
        * methods
    * Vue实例属性/方法(vm.xx)
        * $refs
        * $event
        * $el
        * $data

        * $set()：Vue.set(target,key,val)的别名

## day3-4

### 面试题
* 实例化过程经历的步骤
    1、创建一个对象obj
    2、把this指向obj
    3、改变原型（__prop__指向构造函数的原型）
    4、执行构造函数中的代码
    5、返回创建的对象
    ```js
        function Person(){
            // var obj = {}
            // this.__prop__ = Person.prototype
        }

        new Person()
    ```

### 复习
* 如何设置响应式属性
    * data
    * Vue.set(target,key,value) / vm.$set()
    * 数组变异方法
    ```
        data.score.wuli = 'xxx';
    ```
* 修饰符
    * v-on.xx.修复
    * v-model
    ```html

        <select>
            <option value="">a</option>
            <option>b</option>
            <option>c</option>
        </select>

        new Vue({
            data:{
                hobby:[]
            }
        })

        <input type="checkbox" value="代码" v-model="hobby">
        <input type="checkbox" value="篮球" v-model="hobby">
        <input type="checkbox" value="羽毛球" v-model="hobby">
    ```

### 知识点
* Vue是一个高性能高效率的框架
    * VirtualDOM虚拟DOM
        > 结构类似与真实DOM节点的js对象
        ```
            {
                type:"div",
                attrs:{},
                children:[{
                    {
                        type:'ul'
                        attrs:
                        children:[{
                            type:'li',
                            key:1,
                            children:'xx'
                        },{
                            type:'li'
                            key:2,
                            children:'xx'
                        }]
                    }
                }]
                key:
                ....
            }
        ```
    * diff算法
        * key： 给同级别同类型的节点添加key属性
    ```js
        btn.innerText = 'laoxie';
        btn.innerText = 'jingjing';
        btn.innerText = 'xiaoxie'
        btn.innerText = 'laoxie'
    ```
* 影响页面性能的因素
    * 节点频繁操作
    * 事件绑定数量
    * http请求数量

* 自定义指令
    * 全局指令：Vue.directive(name,options)
    * 局部指令：directives


* 组件化开发（模块化开发）
    * 全局组件
        * Vue.component()
    * 局部组件
        * components


## day3-5

### 面试题
* 同步与异步的区别
    * Worker
* 模块化规范
* 场景题
* HTML5新特性
    * 新标签
        * canvas
        * video
        * audio
    * 新表单类型
    * svg
        * 矢量图 与 位图
    * WebStorage
    * WebSocket
    * WebWorker
    * FormData
    * 拖放API
    
* ES6新特性
    * 

### 复习
* 指令
    * 内置指令
    * 自定义指令
        * 全局：Vue.directive(name,option);
        * 局部：directives
    * 使用
        > v-[name]
* 组件
    * 内置组件
    * 自定义组件
        > 组件就是一个Vue实例
        * 全局：Vue.component(name,options)
        * 局部
    * 使用
        * 必须小写（W3C）

### 知识点
* 组件通讯
    * 遵循原则
        * 状态提升：把数据放在操作数据组件的共同父级
        * 谁的数据谁修改
    * 父to子：props
        1. 父组件操作：给子组件设置html属性
        2. 子组件操作：设置props配置参数，用于接收数据
    * 子to父
        * 方案一：传递父级方法到子组件
        * 方案二：使用自定义事件（推荐）
            1. 给子组件自定义一个事件：`v-on:xxx="handler"`
            2. 在子组件内部触发自定义事件: `this.$emit(事件,参数)`
        * 方案三：事件`sync`修饰符（简单数据可采用方案）
            1. `v-bind:a.sync`
            2. `this.$emit('update:a',10)`
            ```js
                <todo-form v-bind:active.sync="">
                //等效于:<todo-form v-on:update:active="(num)=>{active=num}">

                this.$emit('updata:active',10)
            ```
    * 兄弟to兄弟
        1. 子to父: 把兄弟1的数据传到父组件
        2. 父to子: 把父组件的数据传到兄弟2
    
    * 多层级组件间通讯
        1. 发送方: 触发自定义事件
        2. 接收方: 自定义事件

    * 内容通讯
        * <slot>: 插槽
        * 命名插槽
        * 匿名插槽

    * 数据流向
        * 单向数据流：父组件数据修改后会自动更新到子组件，反之不成立（子组件不可修改父组件的数据）
        * 双向数据流：angular1

## day3-6

### 面试题
* 解决问题的步骤
    1. 定位
    2. 提取关键字
    3. 通过网络等身边的资源
        * 查文档
        * 搜索引擎
        * 官网
        * 博客
        * 身边的朋友
    4. 总结
* 提问方式:一图胜千言
    * 文字<图片<小视频

### 复习
* 组件通讯
    * 父to子: props
        1. 父组件操作: 定义子组件的html属性
        2. 子组件操作: props接收
    * 子to父:
        * 把父组件的方法往子组件传递,然后在子组件执行
        * 自定事件(推荐)
            1. 给子组件自定义事件,使用父组件的方法作为事件处理函数
                * v-on
                * $on()
            2. 子组件触发自定事件
                * $emit()
        * 简单数据通讯:sync修饰符
            1. v-bind:age.sync
            2. $emit('update:age',18)
    * 兄弟to兄弟
    * 深层次组件通讯
        * 逐层传递
        * Bus总线
            > 利用Vue实例作为桥梁来进行数据通讯
            * 需要明确以下几个点
                * 传输什么数据
                * 发送方: 触发Bus的自定义事件
                * 接收方: 给Bus自定义事件

### 知识点
* Vue脚手架:Vue-cli
* npm script npm脚本命令
    > 保存在package.json文件中额scripts字段
    * 运行: `npm run <命令>`
    * 特殊命令
        * start: `npm start`
        * test: `npm test`
* 模块化
    * AMD       require.js
    * CMD       sea.js
    * CommonJS  node.js
    * ESModule  ECMAScript2015
        * import
        * export

* Vue组件花开发
    * 单文件组件(.vue)
        * 包含html,css,js的一个模块

* 生命周期
    * 程序从创建到销毁的过程
    * Vue的生命周期分为4个阶段(每个阶段分成两个生命周期函数(钩子函数))
        1. 创建阶段create
            * beforeCreate()
            > 响应式属性
            * created()
        2. 挂载阶段Mount
            * beforeMount()
            > 挂载数据到视图
            * mounted()
        3. 更新阶段Update
            * beforeUpdate()
            * updated()
        4. 销毁阶段Destroy
            * beforeDestroy()
            * destroyed()
    * 关键点
        * 了解Vue在每个阶段做了什么
        * 在每个生命周期函数适合作用哪些操作
            * 取消ajax请求
                ```js
                    let xhr = new XMLHttpRequest()
                    xhr.open()
                    xhr.send()

                    // 取消ajax
                    xhr.abort()
                ```

## day3-7

### 面试题
* 浏览器如何识别vue的单文件组件
    * vueCLI
        * webpack
* vue单文件组件中的局部样式原理
    1. 给当前组件的html添加自定义属性 `data-v-[hash]`
    2. 利用css的属性选择器

### 复习
* 组件化开发
    * ESModule  
        * import
        * export
    * 单文件组件
        * template
        * script
        * style
            * sass,less,stylus
            * 局部样式
    * VueCLI
        * Webpack
            > webpack增强了import的功能,并支持CommonJS规范
        * eslint: 带规范工具
* 生命周期函数
    1. Creating
        > 初始化,响应式属性,注入
    2. Mounting
        > 把数据挂载到视图
    3. Updating
        > VirtualDOM(diff算法)
    4. Destroying
        > 断开各种监听

    ```js
        start = {a:10,b:20}
        end = {a:10,b:30}

    ```


### 知识点
* 内置组件
    * `<slot>`
    * `<component>`     动态组件
        * is
            * String 组件名称
            * ComponentDefinition   组件配置对象
    * `<keep-alive>`
        * include
        * exclude
    * `<transition>`
    * `<transition-group>`
        * 设置了css过渡动画或js动画
        * 利用v-if/v-show/component实现进入和离开状态

* Vue全家桶
    * Vue + VueCLI + VueRouter

* 多页面应用 MPA(Multiple Page Application)
    * 页面之间通过连接进行跳转,跳转时会刷新整个页面
* 单页面应用 SPA(Single Page Application)
    * 整个应用只有一个页面(index.html), 靠路由进行跳转

## day3-8

### 面试题
* 防抖与节流：优化性能
    * 节流
        > 只指定第一次，忽略后面所有操作
        * 案例：滚动加载更多
    * 防抖
        > 只执行最后一次，忽略之前素有操作
        * 案例：
            * 百度搜索建议
            * 动画

### 知识点
* VueRouter
    * 使用步骤
    * 配置参数
        * mode      路由模式
            * hash（默认）
            * history
        * routes    路由配置参数
    * 路由内容显示
        * `<router-view/>`
    * 导航（路由跳转）
        * 声明式导航：利用已经声明好的组件实现路由跳转
            * `<router-link/>`
        * 编程式导航：利用js代码实现导航
            * $route    当前路由信息
            * $router   路由实例
                * push()
                * replace()
        ```js
            <router-link to="/home">   //等效于 this.$route.push('/home')
            <router-link to="/home" replace>   //等效于 this.$route.replace('/home')
        ```
    * 路由传参
    * 动态路由
    ```js
        `/goods/:id`;//'/goods/123','/goods/456'
    ```

* 请求数据
    * axios
    
* VueUI框架
    * elementUI         饿了么
    * iView             腾讯出品
    * ant-design        阿里巴巴

* 个人项目说明
    * 技术栈： 
        * 全家桶：Vue + VueCLI + VueRouter + axios
        * 其他技术：git + github
        * 模块化与组件化
            * npm
            * esmodule
            * require()
        * VueUI框架
    * markdown编写

## day4-2

### 复习
* 路由VueRouter
    * 使用步骤
        1. 引入     
            import
        2. 安装（使用）
            Vue.use()
        3. 实例化路由并配置参数
            new VueRouter(options)
        4. 注入Vue跟实例
        5. 在组件中使用路由
            * this.$router  得到路由实例（第3步实例化的对象）
            * this.$route   得到当前路由信息
    * 内容显示
        * <router-view/>    根据浏览器路径显示不同的组件内容
    * 导航：用户通过点击实现页面切换
        * 声明式导航
            * <router-link/>
                * to
                * tag
                * event
                * replace
        * 编程式导航
            * this.$router
                * push()
                * replace()
            * this.$route
    * 路由传参
        * 跳转时传参
            * params
                * {name:'home',params}
                * 刷新数据消失
                    * 动态路由
                    * 本地存储
                        * webstorage
                        * cookie
            * query
                * {name:'home',query}
                * {path:'/home',query}
        * 定义时传参
            * props
    * 动态路由
        > 动态路由不会有组件的销毁与重建过程，所以不会执行生命周期函数
        * 监听动态路由的改变
            * watch
                ```js
                    new Vue({
                        ...
                        data(){
                            return {
                                a:100,
                                score:{
                                    english:100
                                }
                            }
                        }
                        watch:{
                            $route:function(newValue,oldValue){

                            },
                            a(){

                            },
                            'score.english':function(newValue,oldValue){

                            }
                        }
                    })
                ```
            * beforeRouteUpdate守卫
                ```js
                    //...
                    beforeRouteUpdate(to,from,next){
                        //if(有证书){
                            next()
                        //}
                    }

                ```
### 知识点
* 路由守卫
    * 全局守卫
        > 写在路由实例中
    * 组件内的守卫
        > 写在组件内
        * beforeRouteUpdate
    * 路由独享的守卫
        > 写在路由配置中
* 路由拦截