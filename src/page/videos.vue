<template>
  <div id="videos" class="videos">
    <PageTitle :info="info" />
    <div class="videos-div">
      <div class="videos-box" v-for="(item,index) in data" :key="index">
        <img :src=" require('../assets/videos/videos'+index+'.png')" class="videos-img" alt=" " />
        <div class="videos-mask">
          <p class="videos-time">{{item.time}}</p>
          <p class="videos-title">{{item.title}}</p>
          <img src="../assets/artists/artists_video_play.png" class="videos-icon" alt=" " />
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import PageTitle from "../components/PageTitle";
export default {
  name: "videos",
  data() {
    return {
      info: {
        img: require("../assets/videos/multimedia_title.png"),
        title: "影音专区"
      },
      data: [
        {
          time: "2020.05.15 派偉俊",
          title: "派偉俊 Patrick Brasca & Tyson Yoshi【忘記你】 ....."
        },
        { time: "2020.04.29 曹楊", title: "曹楊 Young [ 微光 Glimmer ] ....." },
        {
          time: "2020.02.21 派偉俊",
          title:
            "派偉俊 Patrick Brasca【Don't Wanna Lie】(ft. 8lak, Hosea) ....."
        },
        {
          time: "2019.12.20 派偉俊",
          title: "Jay Chou – 忍者 (Patrick Brasca X MADREX Remix) ....."
        },
        {
          time: "2019.12.15 周杰倫",
          title:
            "周杰倫 Jay Chou【我是如此相信 I Truly Believe】(電影天火主題曲)......"
        },
        {
          time: "2019.12.13 派偉俊",
          title: "Jay Chou - 雙截棍 Nunchucks (Patrick Brasca Remix) ....."
        },
        {
          time: "2019.11.13 袁詠琳",
          title:
            "袁詠琳 Cindy Yen【我相信你了 I Believe】Lyric MV (電視劇｢用九柑仔店｣插曲)......"
        },
        {
          time: "2019.09.16 周杰倫",
          title:
            "周杰倫 Jay Chou【說好不哭 Won't Cry】with 五月天阿信 (Mayday Ashin)"
        },
        {
          time: "2019.09.06 曹楊",
          title:
            "曹楊 Young [ 聽說有間店 That Store ] (電視劇「用九柑仔店」片頭曲) ....."
        },
        {
          time: "2019.06.06 派偉俊",
          title: "派偉俊 Patrick Brasca【飛得更高 Soar High】 ....."
        },
        {
          time: "2019.01.16 袁詠琳",
          title: "袁詠琳 Cindy Yen【終於勇敢了Brave】 ....."
        },
        {
          time: "2019.01.11 袁詠琳",
          title: "袁詠琳 Cindy Yen【終於勇敢了Brave】歌詞版 Lyric MV ....."
        },
        {
          time: "2018.10.29 派偉俊",
          title:
            "派偉俊 Patrick Brasca【不醒之城 City Of Dreams】(電影破夢遊戲主題曲) ....."
        },
        {
          time: "2018.05.14 周杰倫",
          title:
            "周杰倫 Jay Chou【不愛我就拉倒 If You Don't Love Me, It's Fine】 ....."
        },
        {
          time: "2018.03.23 派偉俊",
          title: "[2018央視春晚]歌曲《勇氣》 表演：派偉俊 | CCTV春晚 ....."
        }
        // {time:"2018.02.02 袁詠琳",title:"袁詠琳 Cindy Yen【只好倔強 Love Me Better】歌詞版 Lyric MV ....."},
        // {time:"2018.01.18 周杰倫",title:"周杰倫 Jay Chou【等你下課 Waiting For You】 ....."},
        // {time:"2018.01.15 袁詠琳",title:"袁詠琳 Cindy Yen【That's Alright】 ....."},
        // {time:"2018.01.02 袁詠琳",title:"袁詠琳 Cindy Yen【你想娶我嗎 Will You Wanna Marry Me】 ....."},
        // {time:"2017.11.17 袁詠琳",title:"袁詠琳 Cindy Yen【Fighting For Love】(美國棉年度代言廣告曲英文版 I Love Myself English Ver.) ....."},
      ]
    };
  },
  components: { PageTitle }
};
</script>

<style lang="stylus" scoped>
.videos
  width 93.12%
  height 700px
  margin -7.7px 60px 60px 52.3px
  background-color #EDEDED
  overflow hidden
.videos-div
  width 100%
  height 580px
  overflow auto
  margin 15px 0 0 28px
.videos-box
  width 18%
  height 250px
  position relative
  float left
  margin 0 24px 0 0
.videos-img
  margin 0
  padding 0
  width 100%
  height auto
.videos-mask
  width 100%
  height 100px
  padding 0
  background-color #000
  position absolute
  left 0
  bottom 12px
.videos-mask::before
  position absolute
  display block
  content ''
  width 3px
  height 80%
  left 11px
  top 8px
  background linear-gradient(90deg, #b4954f 35%, #d4bb7a 60%)
  background -moz-linear-gradient(90deg, #B4954F 35%, #D4BB7A 60%)
  background -webkit-linear-gradient(90deg, #B4954F 35%, #D4BB7A 60%)
.videos-time
  font-size 12px
  color #c9b06b
  position absolute
  top 0
  left 20px
.videos-title
  position absolute
  top 30px
  left 20px
  width 84%
  word-break break-all
  display -webkit-box
  -webkit-line-clamp 2 /* 限制在一个块元素显示的文本的行数 */
  -webkit-box-orient vertical
  overflow hidden
  font-size 14px
  color #fff
.videos-icon
  width 15px
  height 15px
  position absolute
  right 10px
  bottom 10px
</style>
