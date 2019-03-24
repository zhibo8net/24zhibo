<template>
  <div class="contentList">

    <el-row style="margin-left: -10px; margin-right: -10px;">
      <el-col :span="4" style="padding-left: 10px; padding-right: 10px;">
        <div class="grid-content bg-purple">
          <div class="contentListLeft">
            <ul>
              <li v-for="(item,index) in mactchData.nameList" class="" :key="index">{{item.name}}</li>
              <!-- <li class="">CBA</li>
              <li class="">中国杯</li>
              <li class="">英超</li>
              <li class="">西甲</li>
              <li class="">德甲</li>
              <li class="">意甲</li>
              <li class="">法甲</li>
              <li class="">中超</li>
              <li class="">中甲</li> -->
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :span='20' style="padding-left: 10px; padding-right: 10px;">
        <div class="grid-content bg-purple-light">
          <div class="contentListRight">
            <el-table v-for="(macths,i) in mactchData.macthlist" :data="macths.match" :key="i" style="width: 100%">
              <el-table-column :label="macths.date">
                <el-table-column width="120" prop="startTime" label="" align='center'>
                </el-table-column>
                <el-table-column width="140" align='center'>
                  <template slot-scope="scope">
                    <span>{{ scope.row.matchName }}</span>
                    <!-- <span>{{ scope.row }}</span> -->
                  </template>
                </el-table-column>
                <el-table-column width="450" align='center'>
                  <template slot-scope="scope">
                    <span style="display: inline-block; text-align: right; width: 200px; vertical-align: middle;">
                      <span style="vertical-align: middle;">{{scope.row.hometeam}}</span>
                      <img :src="'http://47.75.166.143:8080'+scope.row.matchImage1" width="30px" alt=""
                        style="vertical-align: middle; margin-left: 10px;">
                    </span>
                    <span style="display: inline-block; width: 20px; vertical-align: middle; text-align: center;"> VS
                    </span>
                    <span style="display: inline-block; text-align: left; width: 200px; vertical-align: middle;">
                      <img :src="'http://47.75.166.143:8080'+scope.row.matchImage2" width="30px" alt=""
                        style="vertical-align: middle; margin-right: 10px;">
                      <span style="vertical-align: middle;">{{scope.row.visitingTeam}}</span>
                    </span>
                  </template>
                </el-table-column>
                <el-table-column width="120" align='center'>
                  <template slot-scope="scope">
                    <button type="button" @click="goLive(scope.row.id)"
                      class="el-button el-button--text"><span>视频直播</span></button>
                  </template>
                </el-table-column>
              </el-table-column>
            </el-table>

          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'matchsCont',
    data() {
      return {
        filterName: ['NBA', 'CBA']
      }
    },
    methods: {
      goLive(id) {
        this.$router.push({
          path: '/live',
          query: {
            matchID: id
          }
        })
      }
    }
  }

</script>
<style lang="scss" scoped>

</style>
