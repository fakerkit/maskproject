<template>
    <div class="searchpage" @click.stop v-show="bol">
        <div class="toppage">
            <img src="../../../assets/img/04icon.png" alt="" @click="back()">
            <el-input type= "text" size="mini" placeholder="搜索英国热卖" > </el-input>
            <span>搜索</span>
        </div>
        <div class="midlepage">
            <img src="../../../assets/img/05icon.png" alt="">
            <span>最近搜索</span>
            <img src="../../../assets/img/06icon.png" alt="">       
        </div>
        <div class="bottompage">
            <img src="../../../assets/img/07icon.png" alt="">
            <span>热门搜索</span>
            <div>
                <ul>
                    <li>Zatchels</li>
                    <li>爱她美</li>
                    <li>ARCHNCIL</li>
                    <li>剑桥包</li>
                    <li>zat</li>
                    <li>Waitose</li>
                    <li>奶粉</li>
                    <li>包邮包税</li>
                    <li>Holland & Barrett</li>
                    <li>钙</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
         data(){
            return {
                bol:true
            }
        },
        methods:{
            back(){
                console.log(this.bol)
                this.bol=!this.bol
            }
        },
    }
</script>

<style scoped>
 .searchpage{
     position:fixed;
     top:0;
     left:0;
     right: 0;
     bottom: 0;
     width: 100%;
     height: 100%;
     background: gainsboro;
     box-sizing: border-box;
     z-index: 100;
 }

 .toppage{
     display: flex;
     height: 44px;
     padding: 2px 10px;
     background: white;
 }
 .toppage img{
     width: 22px;
     height: 22px;
     padding: 0 10px;
     margin-top:13px ;
     line-height: 44px;
     
 }
  .el-input{
      width: 245px;
      margin-top:8px 
  }
 .el-input__inner{
     background: ghostwhite;
    
 }
 .toppage span{
     line-height: 44px;
     font-size: 13px;
     margin-left: 20px;
     color:indianred
 }
 .midlepage img{
     width: 10px;
 }
 .bottompage{
     padding: 0 16px;
 }
 .bottompage img{
     width: 15px;
 }
 .bottompage ul{
     display: flex;
     flex-wrap: wrap;

 }
 .bottompage ul li{
     margin:5px 5px;
     font-size: 12px;
     padding: 5px 14px;
     text-align: center;
     background: white;
 }
</style>

