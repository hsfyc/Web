import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from '@/router'
//引入仓库
import store from '@/store'
//三级联动组件--全局组件
import TypeNav from '@/components/TypeNav/TypeNav.vue'
import Carousel from "@/components/Carousel/Carousel.vue"
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.config.productionTip = false

//引入mockServer.js   --- 模拟数据
import '@/mock/mockServer'
//引入swiper样式
import "swiper/css/swiper.min.css"

new Vue({
  //注册路由
  router,
  store,
  render: h => h(App),
}).$mount('#app')
