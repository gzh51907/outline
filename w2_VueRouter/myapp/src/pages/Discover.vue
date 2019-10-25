<template>
    <div>
        发现
        <router-view/>
    </div>
</template>
<script>
export default {
    beforeRouteEnter(to,from,next){
        console.log('Discover.beforeRouteEnter')
        next()
    }
}
</script>