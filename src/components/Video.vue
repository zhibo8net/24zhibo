<template>
    <div class="liveCotainer" :data-v-3073f131="isMob">
        <div class="guangg" :data-v-3073f131="isMob" style="display: none;">
          <div :data-v-3073f131="isMob" class="timeOff">10 秒钟后自动关闭 x</div>
        </div>
        <div :data-v-3073f131="isMob" id="video" class="video">
            <div class="ckplayerchcibnbibhcozinnmu" style="background-color: rgb(0, 0, 0); width: 100%; height: 100%;">
                <!-- <video v-if="isMob" id="chffxprftxrxnebrer" :src="videoSrc" width="100%" height="100%" autoplay="autoplay"  x5-playsinline="" playsinline="true" webkit-playsinline="true" style="width: 100%; height: 100%; background-color: rgb(0, 0, 0);"></video> -->
                <!-- <video webkit-playsinline="" playsinline="" x-webkit-airplay="" preload="preload" autoplay="autoplay" :src="videoSrc" style="width: 100%; height: 100%;"></video> -->
            </div>
        </div>
        <p v-show="false">{{videoSrc}}</p>
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
    data(){
        return{
            videoObject : {
                container: '.video', //“#”代表容器的ID，“.”或“”代表容器的class
                variable: 'player', //该属性必需设置，值等于下面的new chplayer()的对象
                autoplay: true, //自动播放
                live: true,
                width: 16,
                height: 9,
                video:''  //视频地址
            }
        }
    },
    methods:{
        initPlay(){
            this.videoObject.video = this.videoSrc.replace(/(^\s*)|(\s*$)/g, ""); //视频地址
            // this.videoObject.video = 'http://liveplay.oadql.cn/live/streamcnhd12135.m3u8'
            var player = new ckplayer(this.videoObject);
        }
    },
    mounted(){
        this.initPlay();
    },
    watch:{
        videoSrc(now,old){
            this.initPlay();
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

