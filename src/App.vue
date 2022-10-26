<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    //通知vuex发请求,获取数据,存储于仓库中
    this.$store.dispatch("home/categoryList");
  },
};
</script>

<style>
</style>
