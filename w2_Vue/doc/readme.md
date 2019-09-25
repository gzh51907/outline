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

        * $set()：Vue.set()的别名
