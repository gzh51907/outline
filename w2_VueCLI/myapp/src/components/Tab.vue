<template>
    <div>
        <ul class="nav nav-tabs">
            <li class="nav-item" :key="tab" v-for="tab in tabs">
                <a class="nav-link" href="#" :class="{active:tab==currentTab}" @click="currentTab=tab">{{tab}}</a>
            </li>
        </ul>
        <div class="tab-content-container">
        <transition>
            <keep-alive :include="/xie$/">
                <component :is="'tab'+currentTab"></component>
            </keep-alive>
        </transition>
        </div>

        <transition-group name="width"
        enter-class=""
        enter-active-class="animated"
        enter-to-class="bounceInLeft"
        leave-class=""
        leave-active-class="animated"
        leave-to-class="bounceOutRight"
        >
            <img src="../assets/laoxie.jpg" key="lx" v-if="show"/>
            <img src="../assets/jingjing.jpg" key="jj" v-else/>
        </transition-group>
        <button @click="show=!show">显示隐藏</button>
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css';
export default {
    data(){
        return {
            show:true,
            currentTab:'laoxie',
            tabs:['laoxie','jingjing','laoyao','xiaoxie']
        }
    },
    created(){
        console.log('Tab',this)
        this.tabs.forEach(item=>{
            // 获取图片真实地址
            let imgurl = require(`../assets/${item}.jpg`);

            // 遍历定义局部组件
           this.$options.components['tab'+item] = {
               data(){
                   return {
                       num:1
                   }
               },
               template:`<div class="tab-content">
                <p><img src="${imgurl}"/></p>
                <button @click="num++">${item} : {{num}}</button>
               </div>`,
               created(){
                   console.log(item+':created')
               },
               destroyed(){
                   console.log(item+':destroyed')
               },

                // 针对keep-alive的生命周期函数
                activated(){
                    console.log('activated:keep-alive切回')
                },
                deactivated(){
                    console.log('deactivated:keep-alive切出')
                }
           }
        })
    }
}
</script>
<style>
/* 进入 */
.fade-enter-active,
.v-enter-active{transition:opacity 5s;}

.fade-enter,
.v-enter{opacity: 0;}

.fade-enter-to,
.v-enter-to{opacity: 1}

/* 离开 */
.fade-leave-active,
.v-leave-active{transition:opacity 5s;}
.fade-leave,
.v-leave{opacity: 1;}
.fade-leave-to,
.v-leave-to{opacity: 0}

.width-enter-active{transition:all 1s;}
.width-enter{width:0}
.width-enter-to{width:320px}
.width-leave-active{transition:all 1s;}
.width-leave{width:320px}
.width-leave-to{width: 0}

.tab-content-container{position: relative;height:400px;border:1px solid #ddd;}
.tab-content{position:absolute;left:0;top:0;right:0;bottom:0}
</style>