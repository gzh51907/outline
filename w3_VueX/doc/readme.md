# VueX

## day4-3
* VueX
    * 核心概念
        * store     仓库
            * state     类似与组件中的data
                * store.state.xxx
            * getters   类似与组件中的computed
                * store.getters.xxx
            * mutations  类似与组件中的methods，用于修改state的唯一方式
                * 调用方式： store.commit('add2cart',{id,name,price,qty,imgurl})
            * actions   类似与组件中的methods,用于操作mutation
                * 调用方式： store.dispatch('changeQtyAsync',{id,qty})
                * 使用场景
                    * 需要异步获取数据进行判断时
                    * 多个组件中有相同的异步请求时
        * 
* 专业术语
    * 后端：backEnd  BE
    * 前端：frontEnd FE

## day 4-5

### 复习
* store模块化
    > 模块化后会影响state的获取（store.state.xxx -> store.state.cart.xxx）
    ```js
        new Vuex.Store({
            modules:{
                cart
            }
        })
    ```

### 知识点
* 映射（简化代码写法）
    * mapState      把state中的数据映射到computed中
    * mapGetters    把getters中的数据映射到computed中
    * mapMutations  把mutations中的方法映射到methods中
    * mapActions    把actions中的方法映射到methods中

* Vue扩展
    * 单页面应用中路由切换的原理
        * 路由类型：hash（默认）/history
            * hash路由的原理：window.onhashchange

* Vue的扩展
    * 自定义组件
        * 全局：Vue.component()
        * 局部：components
    * 自定义指令
        * 全局：Vue.directive()
        * 局部：directives
    * 过滤器
        * 全局：Vue.filter(name,definition)
        * 局部：filters
    * 插件
        * 使用：Vue.use(ElementUI)
    * 混入mixin
        * 使用场景：公共配置

## day4-6
* 按需加载
    >需要什么就引入什么


* 面试题：如何让组件上的v-model生效
```js
    Vue.component('myform',{
        props:['value'],
        template:`<div><input v-bind:value="value" v-on:input="changeKeyword"/><button>搜索<button></div>`,
        methods:{
            changeKeyword(e){
                this.$emit('input',e.currentTarget.value)
            }
        }
    });

    new Vue({
        el:'#pp',
        data:{
            keyword:''
        }
    })
```
```html
    <div id="app">
        <!-- 问题：如何让组件上的v-model生效 -->
        <myform v-model="keyword"></myform>

        <!-- 等效于 -->
        <!-- <myform v-bind:value="keyword" v-on:input="keyword=$event.target.value"></myform> -->
    </div>
```

* 项目分工
    * 准备工作
        * 创建项目
        * 安装依赖
        * 远程仓库关联
        * 公共代码
        * ...