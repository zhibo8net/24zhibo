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
  html,body,#app{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
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
  .el-loading-mask {
      position: fixed !important;
  }
  .defaultCon {
      width: 780px;
      height: 454px;
      background-color: #000;
      margin: 0 auto;
  }
  .mDefaultCon {
      width: 100%;
      height: 200px;
      background-color: #000;
      margin: 110px auto 0;
  }
  .el-loading-spinner i {
    font-size: 2rem;
    margin-bottom: 1rem;
}
  .el-tabs__item{
    font-size: 16px;
  }
  a[title='站长统计'] {
      display: none;
  }
</style>
