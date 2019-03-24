<template>
  <div class="banner">
    <el-carousel :interval="3000">
      <el-carousel-item v-for="(item,index) in bannerList" :key="index">
        <h3>
          <a :href="item.link" target="_blank">
            <img :src="item.src" alt="">
          </a></h3>
      </el-carousel-item>
    </el-carousel>



  </div>
</template>
<script>
  export default {
    props: {
      bannerList: {
        default: () => {
          return [{
              src: 'http://47.75.166.143:8080/file/picture/back/04dd19219a6ae621a669a5a0e67ce28d.jpg',
              link: 'https://mp.weixin.qq.com/s/MHtt2ziXwbc7D4ybth8oZQ'
            },
            {
              src: 'http://47.75.166.143:8080/file/picture/back/3620f0e9063808cd2734b714dcddb339.jpg',
              link: 'https://mp.weixin.qq.com/s/MHtt2ziXwbc7D4ybth8oZQ'
            }
          ]
        },
        type: Array
      }
    },
    name: 'banner',
    data() {
      return {

      }
    }
  }

</script>
<style lang="scss">

</style>
