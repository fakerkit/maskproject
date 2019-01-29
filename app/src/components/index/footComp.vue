<template>
    <footer>
        <!-- routerlink解析完了之后是一个a标签 -->
        <!-- routerlink包裹路由的入口-->
        <router-link to="/miste">
            <dl>
                <dt></dt>
                <dd>首页</dd>
            </dl>
        </router-link>
        <router-link to="/discover">
            <dl>
                <dt></dt>
                <dd>分类</dd>
            </dl>
        </router-link>
        <router-link to="/order">
            <dl>
                <dt></dt>
                <dd>购物车</dd>
            </dl>
        </router-link>
        <router-link to="/profiles">
            <dl>
                <dt></dt>
                <dd>我的</dd>
            </dl>
        </router-link>
    </footer>
</template>
<style>
    footer{
        display: flex;
        height: 49px;
        flex-wrap: nowrap;
        align-items: center;
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        border-top:1px solid #cccccc;
        z-index: 22;
        background: white 
    }
    footer a{
        display: inline-block;
        flex: 1;
        text-align: center;
    }
</style>

