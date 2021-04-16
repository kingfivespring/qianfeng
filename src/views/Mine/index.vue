<template>
  <div>
    <Header title="我的喵喵"></Header>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from "@/components/header";
import TabBar from "@/components/tabBar";
export default {
  name: "Mine",
  components: {
    Header,
    TabBar,
  },
};
</script>

<style lang="less" scoped>
</style>
