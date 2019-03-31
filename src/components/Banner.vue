<template>
  <div class="banner" v-if="bannerList.length>0">
    <!-- {{bannerList}} -->
    <el-carousel :interval="3000">
      <el-carousel-item v-for="(item,index) in bannerList" :key="index" v-if="item.adKey=='INDEX-TOP'">
        <h3>
          <a :href="item.link" target="_blank">
            <img :src="configData.baseUrl+item.image" alt="">
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
          return []
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
<style scoped>
  img {
      width: 100%;
  }
</style>
