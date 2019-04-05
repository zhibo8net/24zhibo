<template>
  <div class="index">
    <div class="m_nav">
      <headerCon :isIndex='2'></headerCon>
    </div>
    <div data-v-3073f131="" class="line"></div>
    <div data-v-3073f131="" class="today" v-if="matchDeatil.masterTeamName">
      <div data-v-3073f131="" class="vs-wrap clearfix">
        <div data-v-3073f131="" class="vs">
          <img data-v-3073f131=""   :src="configData.baseUrl+matchDeatil.masterTeamLink"
            class="gameLogo1 homeTeam_img">
          <p data-v-3073f131="" class="onePlayer homeTeam">{{matchDeatil.masterTeamName}}</p>
        </div>
        <div data-v-3073f131="" class="vs">
          <p data-v-3073f131="" class="name1 matchTime_wap">{{matchDeatil.game}}{{!matchDeatil.rotation?"":matchDeatil.rotation}}</p>
          <p data-v-3073f131="" class="time1 matchTitle" style="margin-top: 40px;">{{matchDeatil.playDateStr}}</p>
        </div>
        <div data-v-3073f131="" class="vs"><img data-v-3073f131=""
            :src="configData.baseUrl+matchDeatil.guestTeamLink"
            class="gameLogo2 visitingTeam_img">
          {{matchDeatil.guestTeamName}}
        </div>
      </div>
    </div>
    <!-- <div :data-v-3073f131="false" class="liveCotainer">
        <div data-v-3073f131 class="guangg" style="display: none;">
          <div data-v-3073f131 class="timeOff">10 秒钟后自动关闭 x</div>
        </div>
        <div data-v-3073f131 id="video" class="video">
          <div class="ckplayerchcibnbibhcozinnmu" style="background-color: rgb(0, 0, 0); width: 100%; height: 100%;"><object
                pluginspage="http://www.macromedia.com/go/getflashplayer" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
                codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=11,3,0,0" width="100%"
                height="100%" id="chzwhoybbhsxakofwl" name="chzwhoybbhsxakofwl" align="middle">
                <param name="allowScriptAccess" value="always">
                <param name="allowFullScreen" value="true">
                <param name="quality" value="high">
                <param name="bgcolor" value="#000">
                <param name="movie" value="https://douyuplayer.gz.bcebos.com/ckplayer/ckplayer.swf">
                <param name="flashvars" value="variable=player&amp;volume=0.8&amp;autoplay=1&amp;live=1&amp;video=http%3A%2F%2Fpull.stager.jp.8686c.com%2Fstager%2F822427%2Fplaylist.m3u8&amp;playbackrate=1&amp;width=16&amp;height=9"><embed
                    allowscriptaccess="always" allowfullscreen="true" quality="high" bgcolor="#000" src="https://douyuplayer.gz.bcebos.com/ckplayer/ckplayer.swf"
                    flashvars="variable=player&amp;volume=0.8&amp;autoplay=1&amp;live=1&amp;video=http%3A%2F%2Fpull.stager.jp.8686c.com%2Fstager%2F822427%2Fplaylist.m3u8&amp;playbackrate=1&amp;width=16&amp;height=9"
                    width="100%" height="100%" id="chzwhoybbhsxakofwl" name="chzwhoybbhsxakofwl" align="middle" type="application/x-shockwave-flash"
                    pluginspage="http://www.macromedia.com/go/getflashplayer"></object></div>
        </div>

      </div> -->
      <videoCon :videoSrc="videoSrc" v-if="videoSrc" :isMob="!0"></videoCon>

      <div data-v-3073f131="" class="info2">
        <div data-v-3073f131=""  class="liveshow">
          <a v-for="(item,i) in matchDeatil.lives" :key="i" href="javascript:;" v-if="matchDeatil.lives&&matchDeatil.lives.length>0"
            class="toLive" :class="{'picked':matchDeatil.lives.length==1}">信号{{i+1}}</a>
          <a data-v-3073f131="" v-for="(item,i) in bannerList" :key="i" :href="item.link" target="_blank" v-if="item.adKey=='LIVE-TOP'"
            class="toLive">{{item.message}}</a>
          <!-- <a data-v-3073f131="" href="javascript:" class="toLive picked">公众号：JRS直播吧</a>
          <a data-v-3073f131="" href="https://mp.weixin.qq.com/s/CIIPRUxkFpKl9gQS01ldBQ" target="_blank" class="toLive">球迷群</a>
          <a data-v-3073f131="" href="http://www.yabet1567.com/" target="_blank" class="toLive">安全购彩</a> -->
          </div></div>
      <bannerCon :bannerList="bannerList" v-if="bannerList.length>0" :isMob='isMob'></bannerCon>
  </div>
</template>

<script>
  import '../assets/js/flexible.js'
  import headerCon from '../components/Header'
  import bannerCon from '../components/Banner'
  import videoCon from '../components/Video'
  export default {
    name: 'index',
    components: {
      headerCon,
      bannerCon,
      videoCon
    },
    data() {
      return {
        bannerList:[],
        isMob:!0,
        matchID:'',
        videoSrc:'',
        matchDeatil:{}
      }
    },
    created() {
      this.matchID = this.$route.query.matchID;
      this.api.getMatchDetail({id:this.matchID}).then((resp)=>{
        console.log(resp.data)
        if(resp.status == 200){
          this.matchDeatil = resp.data;
          this.videoSrc = this.matchDeatil.lives[0].link;
        }
      })
      .catch((er)=>{
        console.log(er)
      })
      this.init();
    },
    methods: {
      handleClick() {

      },
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
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import url('../assets/css/index');
</style>
