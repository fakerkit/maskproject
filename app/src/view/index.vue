<template>
<!-- 一个组件只有一个根元素 -->
    <div class="home">
        <router-view></router-view>
        <foot-comp></foot-comp>
    </div>
</template>
<script>
//倒入底部的tabBar组件
import footComp from "@/components/index/footComp";
export default {
    components:{
        footComp
    }
}
</script>
<style>
    .home{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .home>div{
        flex: 1 ;
    }
</style>

