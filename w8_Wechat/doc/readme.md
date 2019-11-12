# 微信开发

## 小程序开发

## day8-5
* 文件类型
    * json  配置
    * js    逻辑（数据）
    * wxss  样式
    * wxml  布局文件
        * 绑定数据: {{}}
        * 绑定事件：bind:tap
        * 样式：class&style
        ...
    * wxs 模块化
    ```
        <script type="module">
            import xxx from xxx
        </script>

        <wxs module="laoxie">
            function show(){}
            module.exports.show = show;
        </wxs>
    ```
* tabBar页面 与 普通页面的区别
* 在微信小程序中使用async&await
    > regeneratorRuntime
* 在微信小程序中使用npm
* 事件处理函数不能使用async函数
* 重点：模板的使用<template>
* HTML新特性Audio
    ```js
        <audio src/>

        let player = new Audio();
        player.src = 'xxx';

        if(player.paused){
            player.play()
        }else{
            player.pause()
        }

        player.ontimeupdate = function(){
            
        }
        
    ```

* 微信小程序的上线流程
    1. 模拟器       开发者
    2. 真机测试     开发者
    3. 体验测试     测试团队
    4. 提交审核     
    5. 审核通过

* 小程序开发框架
    * uni-app   基于Vue的小程序开发框架
    * mpvue     基于Vue的小程序开发框架
    * WePY      腾讯推出的类似与Vue的小程序开发框