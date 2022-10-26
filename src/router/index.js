import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//引入路由组件
import Home from '@/pages/Home/Home.vue'
import Search from '@/pages/Search/Search.vue'
import Login from '@/pages/Login/Login.vue'
import Register from '@/pages/Register/Register.vue'
//备份VueRouter原型上的push方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

//重写push|replace方法
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}


//配置路由
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: { show: true }
        },
        {
            name: 'search',
            path: '/search/:keyword?',
            component: Search,
            meta: { show: true }
        },
        {
            name: 'login',
            path: '/login',
            component: Login,
        },
        {
            name: 'register',
            path: '/register',
            component: Register,
        },
        //重定向,在项目跑起来的时候,访问/，立马让它定向到首页
        {
            path: '*',
            redirect: 'home'
        }
    ]
})