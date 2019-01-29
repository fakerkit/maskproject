import Vue from 'vue'
import Router from 'vue-router'
import index from "@/view/index.vue";
import miste from "@/view/index/miste.vue";
import discover from "@/view/index/discover.vue";
import order from "@/view/index/order.vue";
import profiles from "@/view/index/profiles.vue";
import tologin from "@/view/index/tologin.vue";
import hotlist from "@/view/index/hotlist.vue";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:"/miste",
        children:[{
          path:"/miste",
          name:"miste",
          meta:{
            isLogin:false
          },
          component:miste
          },{
          path:"/discover",
          name:"discover",
          meta:{
            isLogin:false
          },
          component:discover
          },{
          path:"/order",
          name:"order",
          meta:{
            isLogin:true
          },
          component:order
          },{
          path:"/profiles",
          name:"profiles",
          meta:{
            isLogin:false
          },
          component:profiles
          },{
          path:"/tologin",
          name:"tologin",
          meta:{
            isLogin:false
          },
          component:tologin
        }]
    },{
      path: '/hotlist/:id',
      name: 'hotlist',
      component: hotlist,
      // redirect:"/miste",
    }
  ]
})
