<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Link />
    <Floor v-for="floor in floorList" :key="floor.id" :floor="floor" />
    <Brand />
  </div>
</template>

<script>
//引入其余的组件
import ListContainer from "@/pages/Home/ListContainer/ListContainer.vue";
import Recommend from "@/pages/Home/Recommend/Recommend.vue";
import Rank from "@/pages/Home/Rank/Rank.vue";
import Link from "@/pages/Home/Link/Link.vue";
import Floor from "@/pages/Home/Floor/Floor.vue";
import Brand from "@/pages/Home/Brand/Brand.vue";

import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Link,
    Floor,
    Brand,
  },
  mounted() {
    this.$store.dispatch("home/getFloorList");
  },
  computed: {
    ...mapState({ floorList: (state) => state.home.floorList }),
  },
};
</script>

<style>
</style>