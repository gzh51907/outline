# NodeJS

## 复习
* 模块化规范
    * AMD           require.js
    * CMD           sea.js
    * CommonJS      Nodejs
    * ESModule      ECMAScript2015
* CommonJS规范
    * 引入： require()
    * 导出：module.exports
* 内置模块
    * http
    * fs
    * path
* 第三方模块
    * express
    * jsdom  爬虫
    * request
* 自定义模块
* 文件模块

* express
    ```js
        let express = require('express');
        let fs = require('fs');
        let fs = require('./home')
    ```
* 服务器
    * PHP: php+apache+mysql
    * node: nodejs+mongoDB
        * express
* 中间件middleware
    * 什么是中间件
        > 中间件就是一个函数，函数中有三个参数：request,response,next
        > 可以在起始位置到目标位置之间的操作
    * 定义中间件
    ```js
        let myMiddleware = function(req,res,next){

        }
    ```
    * 如何使用中间件
        * use
        * get/post/patch/put/delete

        ```js
            app.use(middleware)
        ```
    * 中间件分类
        * 内置中间件
            * express.static()
            * express.Router()
* 数据接口编写
    * RESTful接口规范
        * 根据**请求类型**实现不同的接口
        * 根据**url地址**实现不同接口
        ```js
            // 获取商品数据
            $.ajax({
                type:'get',
                url:'/goods'
            })

            // 增加一个商品
            $.ajax({
                type:'post',
                url:'/goods'
            })

            // 删除一个商品
            $.ajax({
                type:'delete',
                url:'/goods'
            })

            // 修改一个商品
            $.ajax({
                type:'patch',
                url:'/goods'
            })
        ```
    * 请求类型
        * get           查  
        * post          增
        * patch/put     改
            * patch：部分修改
            * put：完全修改
        * delete        删
    * request
        * 请求
    * response
        * 响应
* 路由
    * 动态路由：url地址中存在变量的路由

* mysql
    * sql语句
    * 如何在nodejs中操作mysql
        * 第三方模块：mysql
            * createConnection()
            * 连接对象
                * connect()
                * query()
                * close()
* npm install
    * --save/-S         依赖
    * --save-dev/-D     开发依赖
    ```bash
        npm i xxx --save-dev        #写入devDependencies
        npm i xxx --save            #写入dependencies

        npm i --production  #只安装dependencies中的依赖
    ```

* ES7
    * async
        * async函数返回一个promise对象
    * await ：等待Promise对象的状态为Resolved时的返回结果
        * await后必须是一个promise对象
        * await必须写在async函数中


## day2-3

## 模拟面试要求
* 自我介绍
    * 姓名
    * 来自哪里
    * 擅长领域
    * 上一份工作情况
    * 最近做的项目
* 提问环节
    * 技术问题
    * 人事问题
    * 逻辑思维
### 复习
* Express中间件
    * 分类
        * 内置中间件
            * express.static()
            * express.Router()
            * express.urlencoded()
            * express.json()
        * 第三方中间件
            * body-parser
            * ...
        * 自定义中间
        ```js
            function(req,res,next){}
        ```
    * 使用
        * app.use([path],...middleware)
        * get()
        * post()
        * patch/put
        * delete
        * ....

* 请求和响应
    * request
        * url           url参数：express会把url参数格式化到request.query
        * body          请求体：express需要使用express.urlencoded()/express.json()中间件格式化到request.body
        * header        请求头：通过request.get()获取请求头数据
    * response
* 接口编写
    * RESTful API规范
        * 请求类型
        * url地址
    * 利用模块化开发编写数据接口
* 数据库
    * mysql
        * sql语句
        * 拼接sql语句

### 知识点
* 数据库分类
    * 关系型数据库
        * mysql         免费（甲骨文收购）
        * SQLServer     收费（微软）
        * Oracle        收费（甲骨文）
        * mariaDB       永久免费（）
    * 非关系型数据
        * MongoDB   bson(binary json)
    * 对比
                    关系型数据库        非关系型数据库
        数据库       database           database
        表           table              collection
        数据         row                document

* MongoDB操作
    * CRUD
        * Create
        * Delete
        * Update
        * Retrieve
    * 在NodeJS中操作mongoDB
        * mongodb（推荐）
        * mongoose
* try...catch
    * 重要
### 面试题
* 作用域的理解
    * 全局作用域：window
    * 局部作用：函数内
    * 块级作用域：{}
        * let
        * const
* let const var的区别
    * var 声明提前，let const没有
    * let,const有块级作用域，var没有
    * const声明常量，let,var声明变量

* 模块化规范有哪些
    * AMD       前端，异步，require.js
        * 引入：require()
        * 导出：define()
    * CMD       前端，异步，sea.js
    * CommonJS  后端，同步，node.js
        * 引入：require()
        * 导出：module.exports
    * ESModule
    ```js
        // 异步
        require(['jquery'],($)=>{

        })

        //同步
        let $ = require('jquery');
    ```
* 默认端口
    * mysql     : 3306
    * mongodb   : 27017
    * http      : 80
    * https     : 443

## day6-4

### 面试题
* 闭包
    * 引用计数法
    * 标记清除法
    ```js
        function show(){
            var a = 10;
            var b = 20;

            var obj1 = {username:'laoxie',nickname:obj2.username}
            var obj2 = {username:'laoyao',nickname:obj1.username}

            return function(){

            }
        }

        let res = show();
    ```
* 跨域解决方案
    * 为什么存在跨域
        * 客户端语言
    * 解决方法
        * JSONP
            * 需要目标服务器的支持
            * script src="xxx.php"
            * 发送全局函数名
            * 接口必须返回js代码，js代码为全局函数的执行代码
            ```html
                <script src="/xxx.php?callback=getData"></script>
                <script src="/xxx.js?callback=getData"></script>
                <script src="/goods/a?callback=getData"></script>

                //后端返回js代码
                // php: echo 
                // nodejs: req.query.callback
                req.query.callback +'('+我的数据+')' // geData(我的数据)
            ```

        * CORS
            * 需要目标服务器的支持
            * 设置响应头
                * Access-Control-Allow-Origin
                * Access-Control-Allow-Methods
                * Access-Control-Allow-Headers
        * 服务器代理
* npm安装模块
    * 全局安装
        * 为了在命令行执行模块
        * 环境变量：操作系统的变量
    * 局部安装
        * 为了用require()引入模块

### 复习
* MongoDB
    * 环境安装
    * 操作
        * 命令行
        * 可视化工具Robo 3T
        * NodeJS中操作Mongo
            * mongodb
            * mongoose
    * document操作
        * CRUD

### 知识点
* 统一返回数据格式
* bootstrap的使用


## day2-5

### 知识点
* 7天免登录
    * 明文存储
    * 加密解密
        * 单向加密
        * 对称加密
            * 密钥：laoxie
            * 缺点：不安全
                * 解决方案：用非对称加密方式加密密钥laoxie
        * 非对称加密
            * 密钥对：公钥&私钥
            * https
            ```https://www.baidu.com/``
    * Token
        * 令牌：是一个加密后的字符
        * 操作步骤
            1. 前端用户第一次利用用户名&密码登录
            2. 后端校验用户名密码，通过则生成token（一般会有有效期），并发送给前端
            3. 前端用户拿到令牌后，保存在本地
            4. 以后每次请求后台都要携带token，后端进行实时校验（有效期和是否被篡改）
                * 通过则放行
                * 不通过则跳到登录界面

