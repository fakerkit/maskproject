<template>
    <div class="goshoping">
        <div class="timeout">
            <img src="../../../assets/img/01icon.svg" alt="">
            <span>限时抢购</span>
        </div>
        <router-link to="/shoptype">
            <img class="pic2" src="../../../assets/img/a.png" alt="">
        </router-link>
        <div class="swiper-container">
            <div class="swiper-wrapper" >
                <div class="swiper-slide" ref="typeSwiper">
                    <div class="typemodule" v-for="(value,key) in list" :key="key">
                        <img :src="value.picture" alt="">
                        <p class="p1">{{value.name}}</p>
                        <p class="p2"><span>{{value.newprice}}</span><span>{{value.agoprice}}</span></p>
                        <p class="p3">{{value.fastshop}}</p>
                    </div>
                </div>
                <!-- <div class="swiper-pagination"></div> -->
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
        // watch: {
        //     list(){
        //         this.$nextTick(()=>{
        //             new this.$swiper(this.$refs.typeSwiper,{
        //                 pagination: {
        //                     el: '.swiper-pagination',
        //                 },
        //             })
        //         })  
        //     }
        // },
        mounted(){
            this.$http.limiShop({}).then(res=>{
                this.list = res.data;
            //     console.log("res.data:",res)
            //     let data = res.data;
            //     console.log(data);            
            //     if(data.length >=3){
            //         let page = Math.ceil(data.length/3);//向上取整得到swiper页数
            //         for(var i = 0 ; i < page ; i++){
            //             this.$set(this.list,i,data.splice(0,3));
            //             console.log("11:",this.list[i])
            //         }
            //     }else{
            //         this.$set(this.list,0,data)
            //     }
            })
        }
    }
</script>
<style>
    .goshoping{
        width: 100%;
        height: 380px;
        padding: 10PX 0;
        background: gainsboro;
    }
    .timeout{
        height: 40px;
        padding-left: 10px;
        background: white;
    }
    .goshoping .timeout img{
        width: 25px;
        height: 100%;
        vertical-align: middle;

    }
    .timeout span{
        line-height: 40px;
    }
    .goshoping .pic2{
        display: block;
        width: 100%;
        /* height: 134px; */
    }
    .swiper-container{
        width: 100%;
        height: 205px;
        background: white;
    }
    .swiper-slide{
        width: 33.33%;
        display: flex;
        flex-wrap:nowrap; 
        justify-content: space-between;
    }
    .typemodule img{
        width: 100%;
    }
    .p1{
        font-size: 12px;
    }
    .p2{
        font-size: 12px;
        text-align: center
    }
    .p2 span:nth-of-type(1){
        color: rgba(255,104,84,1)
    } 
    .p2 span:nth-of-type(2){
        display: inline-block;
        padding: 6px 0;
        font-size: 10px;
        padding-left:4px; 
        color: gainsboro;
        text-decoration: line-through;
    }
    .p3{
        width: 70px;
        padding: 2px 4px;
        text-align: center;
        font-size: 12px;
        /* margin-left: 25px; */
        border: solid 1px  rgba(255,104,84,1);
        border-radius: 12px;
        color: rgba(255,104,84,1) 
     } 
     .swiper-pagination-bullet {
        background-color: gray;
        border-radius: 100%;
        width: 6px;
        height: 6px;
    }
    .swiper-pagination-bullet-active{
        background: rgba(255,104,84,1);
    }
</style>

