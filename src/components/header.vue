<template>
<div>{{title}}</div>
  
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String
    }

}
</script>

<style lang="less" scoped>
div{
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    background-color: red;
}
</style>