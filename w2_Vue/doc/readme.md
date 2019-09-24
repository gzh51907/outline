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