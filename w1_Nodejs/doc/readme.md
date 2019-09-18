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


