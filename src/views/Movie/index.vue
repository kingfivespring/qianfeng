<template>
  <div>
    <Header title="喵喵电影"></Header>
    <div class="tab">
      <router-link tag="div" to="/movie/city">城市</router-link>

      <router-link tag="div" to="/movie/now">热映</router-link>

      <router-link tag="div" to="/movie/coming">即将上映</router-link>

      <router-link tag="div" to="/movie/search">搜索</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from "@/components/header";
import TabBar from "@/components/tabBar";

export default {
  name: "Movie",
  components: {
    Header,
    TabBar,
  },
};
</script>

<style lang="less" scoped>
.tab {
  display: flex;
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  box-sizing: border-box;
  >div {
    flex: 1;
  }
  .router-link-active{
    color: red;
    border-bottom: 2px solid red;
  }
}
</style>
