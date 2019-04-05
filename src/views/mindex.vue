<template>
  <div class="index" v-loading="loading">
    <div class="m_nav">
      <headerCon :isIndex='2'></headerCon>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item,i) in configData.nameList" :key="i" :label="item.name" :name="String(i)">
      </el-tab-pane>
    </el-tabs>
    <div class="contentList mcontentList" v-for="(matchs,index) in macthList" :key="index"
          v-if="matchs.matches.length>0">
          <div class="contentTop">{{matchs.dateStr}}</div>
          <router-link tag="div" class="contentBody" v-for="(match,ids) in matchs.matches" :key="ids" :to="{path:'/mlive',query:{'matchID':match.id}}">
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
        nameList:[],
        loading:false
      }
    },
    mounted() {
      this.nameList = this.configData.nameList;
      this.getMatch();
    },
    methods: {
      handleClick(data) {
        let name = ''
        if(data.index!='0'){
          name = data.label;
        }
        this.getMatch(name);
        this.loading = !0;
      },
      getMatch(name){
        this.macthList = [];
        this.api.getMatchList({
          game:name
        }).then((resp)=>{
        if(resp.status == 200){
          // this.deleteAllChoose = true;
          this.macthList = resp.data;
          this.loading =false;
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
