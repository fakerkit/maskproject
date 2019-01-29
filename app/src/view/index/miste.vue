<template>
    <div>
        <head-search></head-search>
        <head-advers></head-advers>
        <time-shop></time-shop>
        <hot-shop></hot-shop>
        <new-shop></new-shop>
    </div>
</template>
<script>
    import headSearch from "@/components/index/miste/headSearch.vue";
    import headAdvers from "@/components/index/miste/headAdvers.vue";
    import timeShop from "@/components/index/miste/timeShop.vue";
    import hotShop from "@/components/index/miste/hotShop.vue";
    import newShop from "@/components/index/miste/newShop.vue";
    export default {
        components:{
            headSearch,
            headAdvers,
            timeShop,
            hotShop,
            newShop
        }
    }
</script>



