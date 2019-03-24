<template>
  <div class="index">
    <div class="m_nav">
      <headerCon :isIndex='2'></headerCon>
    </div>
    <div data-v-3073f131="" class="line"></div>
    <div data-v-3073f131="" class="today">
      <div data-v-3073f131="" class="vs-wrap clearfix">
        <div data-v-3073f131="" class="vs"><img data-v-3073f131=""
            src="http://47.75.166.143:8080/file/picture/back/245e350b1b5f65d605c824da7c484242.jpg"
            class="gameLogo1 homeTeam_img">
          <p data-v-3073f131="" class="onePlayer homeTeam">快船</p>
        </div>
        <div data-v-3073f131="" class="vs">
          <p data-v-3073f131="" class="name1 matchTime_wap">NBA常规赛</p>
          <p data-v-3073f131="" class="time1 matchTitle" style="margin-top: 40px;">03-25 | 00:00</p>
        </div>
        <div data-v-3073f131="" class="vs"><img data-v-3073f131=""
            src="http://47.75.166.143:8080/file/picture/back/5ceff9d4a60d6b6085d5e5ee74d82265.jpg"
            class="gameLogo2 visitingTeam_img">
          尼克斯
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../assets/js/flexible.js'
  import headerCon from '../components/Header'
  export default {
    name: 'index',
    components: {
      headerCon
    },
    data() {
      return {
        activeName: '1'
      }
    },
    mounted() {
      // console.log(this.$message)
    },
    methods: {
      handleClick() {

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import url('../assets/css/index');

</style>
