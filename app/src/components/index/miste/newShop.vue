<template>
    <div class="newshoping">
        <div class="newlist">
            <p>
                <img src="../../../assets/img/03icon.svg" alt="">
                <span>新品上市</span>
            </p>
            <p class="sp2">最新流行抢先知道</p>
        </div>
         <router-link to="/newlist">
            <img class="hotpicture" src="../../../assets/img/c.png" alt="">
        </router-link>
         <div class="content">
            <div class="typelist" v-for="(item,index) in list" :key="index">
                <img :src="item.picture" alt="">
                <p class="p1">{{item.name}}</p>
                <p class="p2"><span>{{item.newprice}}</span><span>{{item.agoprice}}</span></p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                list:[]
            }
        },
        mounted(){
            this.$http.newShop().then(res=>{
                this.list = res.data;
            })
        }
    }
</script>
<style>
    .newshoping{
        width: 100%;
        height: 485px;
        padding-bottom: 10px;
        padding-bottom: 10px;
        background: gainsboro;
        padding-top: 10px;
    }
    .newlist{
        display: flex;
        justify-content: space-between;
        height: 40px;
        padding-left: 10px;
        background: white;
    }
    .newlist .sp2{
        font-size: 12px;;
        color:gray;
        line-height: 40px;
        margin-right: 10px;
    }
    .newshoping .newlist img{
        width: 25px;
        height: 100%;
        vertical-align: middle;
    }
    .content{
        padding-bottom: 50px;
        background: white;
    }
</style>
