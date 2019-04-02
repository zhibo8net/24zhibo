<template>
    <div class="liveCotainer" :data-v-3073f131="isMob">
        <div class="guangg" :data-v-3073f131="isMob" style="display: none;">
          <div :data-v-3073f131="isMob" class="timeOff">10 秒钟后自动关闭 x</div>
        </div>
        <div :data-v-3073f131="isMob" id="video" class="video">
            <div class="ckplayerchcibnbibhcozinnmu" style="background-color: rgb(0, 0, 0); width: 100%; height: 100%;">
              <object
                pluginspage="http://www.macromedia.com/go/getflashplayer" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
                codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=11,3,0,0" width="100%"
                height="100%" id="chzwhoybbhsxakofwl" name="chzwhoybbhsxakofwl" align="middle" v-if="!isMob">
                <param name="allowScriptAccess" value="always">
                <param name="allowFullScreen" value="true">
                <param name="quality" value="high">
                <param name="bgcolor" value="#000">
                <param name="movie" value="https://douyuplayer.gz.bcebos.com/ckplayer/ckplayer.swf">
                <param name="flashvars" value="variable=player&amp;volume=0.8&amp;autoplay=1&amp;live=1&amp;video=http%3A%2F%2Fpull.stager.jp.8686c.com%2Fstager%2F822427%2Fplaylist.m3u8&amp;playbackrate=1&amp;width=16&amp;height=9"><embed
                    allowscriptaccess="always" allowfullscreen="true" quality="high" bgcolor="#000" src="https://douyuplayer.gz.bcebos.com/ckplayer/ckplayer.swf"
                    flashvars="variable=player&amp;volume=0.8&amp;autoplay=1&amp;live=1&amp;video=http%3A%2F%2Fpull.stager.jp.8686c.com%2Fstager%2F822427%2Fplaylist.m3u8&amp;playbackrate=1&amp;width=16&amp;height=9"
                    width="100%" height="100%" id="chzwhoybbhsxakofwl" name="chzwhoybbhsxakofwl" align="middle" type="application/x-shockwave-flash"
                    pluginspage="http://www.macromedia.com/go/getflashplayer">
                </object>
                <video v-else id="chffxprftxrxnebrer" :src="videoSrc" width="100%" height="100%" autoplay="autoplay" controls="controls" x5-playsinline="" playsinline="" webkit-playsinline="true" style="width: 100%; height: 100%; background-color: rgb(0, 0, 0);"></video>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Video',
    props:{
        videoSrc:{
            default:'',
            type:String,
            required:true
        },
        isMob:{
            default:false,
            type:Boolean
        }
    },
    mounted(){
        if(!this.isMob){
            var videoObject = {
                container: '.video', //“#”代表容器的ID，“.”或“”代表容器的class
                variable: 'player', //该属性必需设置，值等于下面的new chplayer()的对象
                autoplay: true, //自动播放
                live: true,
                width: 16,
                height: 9,
                video: this.videoSrc //视频地址
                // video:'http://liveplay.oadql.cn/live/stream2230831.m3u8'
            };
            var player = new ckplayer(videoObject);
        }
    }
}
</script>
<style scoped>
    video {
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0, 0);
    }
</style>

