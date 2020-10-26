import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import login from "../pages/login.vue";
import tabView from '../pages/tabView.vue'
import consultPage from '../pages/consult.vue'
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        component: login
    },
    {
    	path:'/',
    	component:tabView
    },
    {
        path:'/consult',
        component:consultPage
    }
]

var router =  new VueRouter({
    routes
})

router.beforeEach((to,from,next)=>{
	// if (to.path==='/login') next()
	// const tokenStr = window.sessionStorage.getItem('token')
	// if (!tokenStr) return next('/login')
	next()
})
export default router;