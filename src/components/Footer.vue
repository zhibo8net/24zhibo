<template>
  <div id="footer" :class="{'detail':isIndex=='0'}">
    <div class="fglo_bg">
      <div id="js_link" class="link fl">
        <div class="link_c">
          <div><span style="color: rgb(136, 136, 136); margin-right: 20px;">友情链接</span><a
              href="http://www.jrszhibo2018.com/#/" target="_blank">JRS直播</a><a href="http://www.didiaokan2018.com/#/"
              target="_blank">低调看直播</a><a href="http://www.24zhiboba.com/#/" target="_blank">直播吧</a><a
              href="http://www.jrszhibo2018.com/#/" target="_blank">NBA直播</a><a href="http://www.94zuqiu.com/"
              target="_blank">足球直播</a></div>
        </div>
      </div>
      <div class="foot_global">
        <p>24直播吧所有视频数据均调用第三方资源，不提供任何视听上传服务，如有版权问题请联系我们。</p>
        <p>微信客服：zhibomei2019 </p>
        <p>Copyright @ 2018 24直播吧</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      isIndex: {
        default () {
          return 0
        },
        type: Number
      }
    },
    name: 'Footer',
    created() {

    }
  }

</script>
<style lang="scss">

</style>
