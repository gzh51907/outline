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