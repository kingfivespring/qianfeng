<template>
  <div>
      <ul>
          <router-link tag="li" to="/movie">电影</router-link>
          <router-link tag="li" to="/cinema">影院</router-link>
          <router-link tag="li" to="/mine">我的</router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style lang="less" scoped>
ul{
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: rgb(216, 213, 213);
  border-top: 2px solid rgb(247, 246, 246);
  li{
    flex: 1;
    text-align: center;
    list-style: none;
  }
  li.router-link-active{
    color: red;
  }
}
</style>