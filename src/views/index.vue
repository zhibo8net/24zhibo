<template>
  <div class="index">
    <headerCon :isIndex="1"></headerCon>
    <bannerCon></bannerCon>
    <div class="navList">
      <ul>
        <li>全部</li>
        <li>篮球</li>
        <li>足球</li>
      </ul>
    </div>
    <matchsCon></matchsCon>
    <footerCon :isIndex="1"></footerCon>
  </div>
</template>

<script>
  import headerCon from '../components/Header'
  import bannerCon from '../components/Banner'
  import matchsCon from '../components/MatchsCont'
  import footerCon from '../components/Footer'
  export default {
    name: 'index',
    components: {
      headerCon,
      bannerCon,
      matchsCon,
      footerCon
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {
      // console.log(this.$message)
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

@import url('../assets/css/index');

</style>
