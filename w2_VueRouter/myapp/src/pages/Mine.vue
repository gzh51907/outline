<template>
    <div>
        {{username}}的主页
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:''
        }
    },
    created(){
        console.log(this.$route)
        this.username = this.$route.query.username
    }
}
</script>