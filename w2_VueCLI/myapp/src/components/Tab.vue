<template>
    <div>
        <ul class="nav nav-tabs">
            <li class="nav-item" :key="tab" v-for="tab in tabs">
                <a class="nav-link" href="#" :class="{active:tab==currentTab}" @click="currentTab=tab">{{tab}}</a>
            </li>
        </ul>
        <keep-alive :include="/xie$/">
            <component :is="'tab'+currentTab"></component>
        </keep-alive>
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
export default {
    data(){
        return {
            currentTab:'laoxie',
            tabs:['laoxie','jingjing','laoyao','xiaoxie']
        }
    },
    created(){
        console.log('Tab',this)
        this.tabs.forEach(item=>{
            // 遍历定义局部组件
           this.$options.components['tab'+item] = {
               data(){
                   return {
                       num:1
                   }
               },
               template:`<div>
                <input type="text"/>
                <button @click="num++">${item} : {{num}}</button>
               </div>`,
               created(){
                   console.log(item+':created')
               },
               destroyed(){
                   console.log(item+':destroyed')
               }
           }
        })
    }
}
</script>