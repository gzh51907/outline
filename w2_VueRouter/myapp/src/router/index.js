import Vue from 'vue';

// 使用VueRouter步骤
// 1.引入vue-router
import VueRouter from 'vue-router';

// 2.使用(安装)vue-router（VueRouter是作为插件增强Vue的功能）
Vue.use(VueRouter);

// 引入页面组件
import Home from '../pages/Home.vue';
import Cart from '../pages/Cart.vue';
import Reg from '../pages/Reg.vue';
import Login from '../pages/Login.vue';
import NotFound from '../pages/NotFound.vue';
import Discover from '../pages/Discover.vue';
import Mine from '../pages/Mine.vue';
import Goods from '../pages/Goods.vue';

// 3. 实例化router并配置参数
let router = new VueRouter({
    // mode:'hash',
    // 配置参数：不同的 URL 显示不同的内容
    routes: [
        // 首页
        {
            name: 'home',
            path: '/home',  //当浏览器地址为/home时，显示Home组件的内容
            component: Home
        },
        {
            path: '/',  //当浏览器地址为/home时，显示Home组件的内容
            redirect: '/home'
        },
        // 购物车
        {
            name: 'cart',
            path: '/cart',
            component: Cart
        },
        {
            name: 'discover',
            path: '/discover',
            component: Discover
        },

        // 动态路由
        {
            name: 'goods',
            path: '/goods/:id',
            component: Goods
        },
        {
            name: 'mine',
            path: '/mine',
            component: Mine
        },
        {
            path: '/reg',
            component: Reg
        }, {
            path: '/login',
            component: Login
        },
        {
            path: '/404',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});


// 5.在组件中使用VueRouter

export default router;