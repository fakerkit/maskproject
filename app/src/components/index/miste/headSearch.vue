<template>
    <div class="searchEnter" @click="search()">
        <el-input type="text" size="mini"  prefix-icon="el-icon-search" :disabled="true" placeholder="搜索英国热卖"> </el-input>
        <search-page v-show="bol"></search-page>
    </div>
</template>

<script>
import searchPage from "@/components/index/miste/searchPage.vue";
    export default {
        data(){
            return {
                bol:false
            }
        },
        methods:{
            search(){
                this.bol=!this.bol
            },
        },
         components:{
            searchPage
        }
    }
</script>

<style>
    .searchEnter{
        width: 100%;
        padding:8px 10px;
        position: fixed;
        top: 0px;
        /* opacity: 0.6; */
        z-index: 2;
        box-sizing: border-box;
    }
    .el-input__inner::-webkit-input-placeholder{ /*WebKit browsers*/
         color:red
    }  
</style>

