<template>
    <div>
        {{itemOpt}}
    </div>
</template>
<script>
    export default {
        data(){
            return{
                itemOpt:null
            }
        },
         mounted(){
             console.log("this.$route:",this.$route)
            this.$http.hotlistShop(this.$route.params.id).then(res=>{
                this.itemOpt = res.data;
            })
        }
    }
</script>

