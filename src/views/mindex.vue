<template>
  <div class="index">
    <div class="m_nav">
      <headerCon :isIndex='2'></headerCon>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item,i) in configData.nameList" :key="i" :label="item.name" :name="String(i)">
        <div class="contentList mcontentList" v-for="(matchs,index) in macthList" :key="index"
          v-if="matchs.matches.length>0">
          <div class="contentTop">{{matchs.dateStr}}</div>
          <router-link tag="div" class="contentBody" v-for="(match,ids) in matchs.matches" :key="ids" v-if="match.game.indexOf(item.name)>-1||item.id=='99999'" :to="{path:'/mlive',query:{'matchID':match.id}}">
            <div class="contentLeft">
              <p><img :src="configData.baseUrl+match.masterTeamLink" alt=""></p>
              <p>{{match.masterTeamName}}</p>
            </div>
            <div class="contentCenter">
              <p>{{match.playTime}}</p>
              <p>{{match.game}}{{match.rotation?match.rotation:""}}</p>
            </div>
            <div class="contentRight">
              <p><img :src="configData.baseUrl+match.guestTeamLink" alt=""></p>
              <p>{{match.guestTeamName}}</p>
            </div>
          </router-link>
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
        activeName: '0',
        macthList:[],
        nameList:[]
      }
    },
    mounted() {
      this.nameList = this.configData.nameList;
      this.getMatch();
    },
    methods: {
      handleClick() {

      },
      getMatch(type){
        this.nowType = type;
        this.api.getMatchList().then((resp)=>{
        if(resp.status == 200){
          // this.deleteAllChoose = true;
          this.macthList = resp.data;
          // this.bakListData = JSON.stringify(resp.data);
          // this.$nextTick(()=>{
          //   this.deleteAllChoose = false;
          // })
        }
      })
      .catch((er)=>{
        console.log(er)
      })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import url('../assets/css/index');
</style>
