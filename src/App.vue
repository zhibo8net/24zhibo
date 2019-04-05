<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .el-loading-mask{
    position: fixed !important;
  }
  a[title='站长统计']{
  display: none;
}
</style>
