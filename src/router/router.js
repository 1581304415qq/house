import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import login from "../pages/login.vue";
import tabView from '../pages/tabView.vue'
import consult from '../pages/consult.vue'
import consultResult from '../pages/consultResult.vue'
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        component:tabView
    },
    {
        path: "/login",
        component: login
    },
    {
        path:'/home',
        redirect:'/'
    },
    {
        path:'/consult',
        component:consult
    },
    {
        path:'/consultResult',
        component:consultResult
    },

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