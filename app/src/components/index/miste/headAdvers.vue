<template>
    <div class="swiper-container" ref="typeSwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../../assets/img/01.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../../../assets/img/02.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../../../assets/img/03.jpg" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
    export default {
        mounted(){
            this.$nextTick(()=>{
                console.log(this.$refs.typeSwiper);
                new this.$swiper(this.$refs.typeSwiper,{
                    autoplay: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                })
            })
        }
    }
</script>

<style>
.swiper-container{
    position: relative;
    width: 100%;
    height: 194px;
}
.swiper-wrapper {
    position: absolute;
    width: 100%;
}
.swiper-wrapper img{
    width: 100%;
}
</style>
