<template>
  <div class="index">
    <headerCon :isIndex="1"></headerCon>
    <bannerCon :bannerList="bannerList"></bannerCon>
    <div class="navList">
      <ul>
        <li @click="getMatch('0')">全部</li>
        <li @click="getMatch('1')">篮球</li>
        <li @click="getMatch('2')">足球</li>
      </ul>
    </div>
    <matchsCon :nameList="nameList" :macthList="macthList" @changeMatchList="changeMatchList" :deleteAllChoose="deleteAllChoose" :type="nowType"></matchsCon>
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
        bannerList:[], // 广告位数据
        macthList:[], // 比赛列表
        bakListData:'',// 备份的比赛列表数据
        deleteAllChoose:false, // 删除所有筛选参数
        nameList:[],
        nowType:'0' // 当前选择的比赛类型 0：全部 1：篮球 2：足球
      }
    },
    methods:{
      init(){
        this.api.getBanner().then((resp)=>{
        if(resp.status == 200){
          this.bannerList = resp.data;
        }
      })
      .catch((er)=>{
        console.log(er)
      })
      },
      getMatch(type){
        this.nowType = type;
        this.api.getMatchList().then((resp)=>{
        if(resp.status == 200){
          this.deleteAllChoose = true;
          this.macthList = resp.data;
          this.bakListData = JSON.stringify(resp.data);
          this.$nextTick(()=>{
            this.deleteAllChoose = false;
          })
        }
      })
      .catch((er)=>{
        console.log(er)
      })
      },
      changeMatchList(name,type){
        let oldData = JSON.parse(this.bakListData);
        let filterData = [...oldData];
        console.log(filterData)
        oldData.map((data,i)=>{
          let arr = [];
          data.matches.map((item,index)=>{
            if(item.game.indexOf(name)>-1){
              arr.push(item)
            }
          });
          console.log(arr)
          this.$set(filterData[i],'matches',arr);
          console.log(filterData);
          this.macthList = filterData;
        })
      }
    },
    created() {
      this.nameList = this.configData.nameList;
      this.init();
      this.getMatch();
      console.log(this.api)
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import url('../assets/css/index');
</style>
