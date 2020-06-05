<template>
  <div id="schedule" class="schedule">
    <PageTitle :info="info" />
    <div class="schedule-div">
      <el-calendar :range="['2020-05-01', '2020-05-31']" class="schedule-calendar"></el-calendar>
      <div class="schedule-right">
        <div class="schedule-list">
          <div class="schedule-box" v-for="(item,index) in data" :key="index">
            <img :src="item.icon" class="schedule-list-img" alt=" " />
            <h4 class="schedule-h4">{{item.time}}</h4>
            <p class="schedule-p">{{item.content}}</p>
            <div class="schedule-line" />
          </div>
        </div>
        <div class="schedule-tips">
          <div class="schedule-tips-list" v-for="(item,index) in tipsData" :key="index+10">
            <img
              :src="require('../assets/schedule/schedule_icon'+index+'.png')"
              class="schedule-tips-img"
              alt=" "
            />
            <span class="schedule-tips-span">{{item.text}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import PageTitle from "../components/PageTitle";
export default {
  name: "schedule",
  data() {
    return {
      info: {
        img: require("../assets/schedule/schedule_title.png"),
        title: "活动行程"
      },
      data: [
        {
          time: "2020.05.02",
          content: "22:00 周游记 | 22:00 浙江卫视、22:30芒果TV | 全12集",
          icon: require("../assets/schedule/schedule_icon0.png")
        },
        {
          time: "2020.05.02",
          content: "22:00 周游记 | 22:00 浙江卫视、22:30芒果TV | 全12集",
          icon: require("../assets/schedule/schedule_icon1.png")
        },
        {
          time: "2020.05.02",
          content: "22:00 周游记 | 22:00 浙江卫视、22:30芒果TV | 全12集",
          icon: require("../assets/schedule/schedule_icon2.png")
        },
        {
          time: "2020.05.02",
          content: "22:00 周游记 | 22:00 浙江卫视、22:30芒果TV | 全12集",
          icon: require("../assets/schedule/schedule_icon3.png")
        },
        {
          time: "2020.05.02",
          content: "22:00 周游记 | 22:00 浙江卫视、22:30芒果TV | 全12集",
          icon: require("../assets/schedule/schedule_icon4.png")
        },
        {
          time: "2020.05.02",
          content: "22:00 周游记 | 22:00 浙江卫视、22:30芒果TV | 全12集",
          icon: require("../assets/schedule/schedule_icon5.png")
        },
        {
          time: "2020.05.02",
          content: "22:00 周游记 | 22:00 浙江卫视、22:30芒果TV | 全12集",
          icon: require("../assets/schedule/schedule_icon4.png")
        },
        {
          time: "2020.05.02",
          content: "22:00 周游记 | 22:00 浙江卫视、22:30芒果TV | 全12集",
          icon: require("../assets/schedule/schedule_icon2.png")
        },
        {
          time: "2020.05.02",
          content: "22:00 周游记 | 22:00 浙江卫视、22:30芒果TV | 全12集",
          icon: require("../assets/schedule/schedule_icon0.png")
        }
      ],
      tipsData: [
        {
          text: " ：活动"
        },
        {
          text: " ：MV首播"
        },
        {
          text: "电视"
        },
        {
          text: " ：演唱会"
        },
        {
          text: " ：电台"
        }
      ]
    };
  },
  components: {
    PageTitle
  }
};
</script>

<style lang="stylus" scoped>
.schedule
  width 93.12%
  height 797px
  margin -7.7px 60px 60px 52.3px
  background-color #EDEDED
  overflow hidden
.schedule-div
  width 96%
  height 700px
  display grid
  position relative
  grid-template-columns 50% 50%
  margin 2%
  overflow auto
  overflow hidden
.schedule-calendar
  height 62%
.schedule-div>>> .is-today
  color #000
  background-color #F5DDD9
.red span
  border 1px solid red
  border-radius 50%
.schedule-right
  width 100%
  height 70%
.schedule-list
  width 100%
  height 55%
  overflow auto
.schedule-box
  margin 25px
  height 18%
.schedule-h4
  color #c8b16e
  margin 8px
  padding 0
.schedule-p
  margin 0 0 0 30px
  display inline-block
.schedule-list-img
  position relative
  display inline-block
  width 20px
  height 16px
  top 60px
  left 8px
.schedule-line
  height 3px
  margin 20px 0px
  background url('../assets/artists/news_line.png') left top repeat-x
.schedule-tips
  width 94%
  height 11%
  margin 4%
  background-color #fff
.schedule-tips-list
  margin 0
  display inline-block
  width 20%
  height 100%
  text-align center
  line-height 100px
  position relative
.schedule-tips-img
  position relative
  display inline
  width 20px
  height 16px
  top 4px
  left 0
</style>
