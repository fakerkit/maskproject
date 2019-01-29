<template>
    <div class="hotshoping">
        <div class="gohot">
            <p>
                <img src="../../../assets/img/02icon.svg" alt="">
                <span>热销产品</span>
            </p>
            <p class="sp1">英国好评明星产品</p>
        </div>
        <img class="hotpicture" src="../../../assets/img/b.png" alt="">
        <div class="content">
            <router-link  class="typelist"  v-for="(item,index) in list" :key="index"  :to="'/hotlist/'+item._id">
                <div>
                    <img :src="item.picture" alt="">
                    <p class="p1">{{item.name}}</p>
                    <p class="p2"><span>{{item.newprice}}</span><span>{{item.agoprice}}</span></p>
                </div>
            </router-link>
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
            this.$http.hotShop().then(res=>{
                this.list = res.data;
            })
        }
    }
</script>
<style>
    .hotshoping{
        width: 100%;
        height: 485px;
    }
    .gohot{
        display: flex;
        justify-content: space-between;
        height: 40px;
        padding-left: 10px;
        background: white;
    }
    .gohot .sp1{
        font-size: 12px;;
        color:gray;
        line-height: 40px;
        margin-right: 10px;
    }
    .hotshoping .gohot img{
        width: 25px;
        height: 100%;
        vertical-align: middle;

    }
    .hotpicture{
        display: block;
        width: 100%;
    }
     .content{
         height: 310px;
         display: flex;
         flex-wrap:wrap;
         justify-content: space-between;

     }
     .typelist{
         text-align: center;
         width: 30%;
     }
     .typelist .p1{
         font-size: 12px;
     }
    .typelist img{
        display: block;
        width: 100%;
    }
</style>
