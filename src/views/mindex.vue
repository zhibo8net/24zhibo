<template>
  <div class="index">
    <div class="m_nav">
      <headerCon :isIndex='2'></headerCon>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item,i) in mactchData.nameList" :key="i" :label="item.name" :name="String(item.id)">
        <div class="contentList mcontentList" v-for="(matchs,index) in mactchData.macthlist" :key="index"
          v-if="matchs.match.length>0">
          <div class="contentTop">{{matchs.date}}</div>
          <div class="contentBody" v-for="(match,ids) in matchs.match" :key="ids">
            <div class="contentLeft">
              <p><img :src="'http://47.75.166.143:8080'+match.matchImage1" alt=""></p>
              <p>{{match.hometeam}}</p>
            </div>
            <div class="contentCenter">
              <p>{{match.startTime}}</p>
              <p>{{match.matchName}}</p>
            </div>
            <div class="contentRight">
              <p><img :src="'http://47.75.166.143:8080'+match.matchImage2" alt=""></p>
              <p>{{match.visitingTeam}}</p>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- <matchsCon></matchsCon>
    <footerCon :isIndex="1"></footerCon> -->
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
