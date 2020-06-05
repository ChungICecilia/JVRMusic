<template>
  <div id="news" class="news">
    <PageTitle :info="info" />
    <div class="news-div" v-show="!showNews">
      <div class="news-box">
        <div class="news-grid">
          <div class="news-left">
            <div
              class="news-left-item"
              v-for="(item,index) in newsLeftdata"
              :key="index"
              @click="setNews(true)"
            >
              <img :src="item.img" class="news-left-img" alt=" " />
              <div class="news-left-mask">
                <div class="news-caption" />
                <p class="news-left-p">{{item.time}}</p>
                <p class="news-left-p1">{{item.centent}}</p>
              </div>
            </div>
          </div>
          <img src="../assets/news/news_list_line.jpg" class="news-list-line" alt=" " />
          <div class="news-right">
            <div
              class="news-right-item"
              v-for="(item,index) in newsRightdata"
              :key="index+10"
              @click="setNews(true)"
            >
              <img :src="item.img" class="news-right-img" alt=" " />
              <div class="news-item-mask">
                <div class="news-caption" />
                <p class="news-left-p">{{item.time}}</p>
                <p class="news-item-p1">{{item.centent}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="news-bottom-box">
          <div
            class="news-bottom-item"
            v-for="(item,index) in bottomList"
            :key="index+20"
            @click="setNews(true)"
          >
            <img :src="item.img" class="news-bottom-img" alt=" " />
            <div class="news-item-mask">
              <div class="news-caption" />
              <p class="news-item-p">{{item.time}}</p>
              <p class="news-item-p1">{{item.centent}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <newsItem v-show="showNews"></newsItem>
  </div>
</template>

<script type="text/javascript">
import PageTitle from "../components/PageTitle";
import NewsItem from "../components/newsItem";
export default {
  name: "news",
  data() {
    return {
      info: {
        img: require("../assets/news/news_title.png"),
        title: "最新消息"
      },
      newsLeftdata: [
        {
          img: require("../assets/news/artist_news_young20200430_pin.png"),
          time: "2019.10.30 周杰伦",
          centent: "曹杨首发单曲「微光」用歌声唱出他的感同身受"
        },
        {
          img: require("../assets/news/856x387.jpg"),
          time: "2019.12.16 周杰伦",
          centent: "周杰伦「我是如此相信」MV助威电影「天火」"
        }
      ],
      newsRightdata: [
        {
          img: require("../assets/news/cover.jpg"),
          time: "2019.10.30 周杰伦",
          centent: "巡回全球四大洲 周杰伦「地表最强」演唱会DVD11/1发行"
        },
        {
          img: require("../assets/news/cover(1).jpg"),
          time: "2019.10.21 曹杨",
          centent: "周杰伦上海演出圆满成功 古筝弹唱惊艳四座"
        },
        {
          img: require("../assets/news/cover(2).jpg"),
          time: "2019.10.18 周杰伦",
          centent: "20年音乐能量大爆发 周杰伦嘉年华上海演唱会酷炫首场"
        },
        {
          img: require("../assets/news/yyl.jpg"),
          time: "2019.10.09 袁咏琳",
          centent:
            "Cindy袁咏琳以美国棉永续环保大使身份出席「第23届台北纺织展 TITAS」"
        },
        {
          img: require("../assets/news/cover414250.jpg"),
          time: "2019.09.17 周杰伦",
          centent: "周氏情歌新火花 周杰伦与五月天阿信「说好不哭」"
        },
        {
          img: require("../assets/news/list_news_4.jpg"),
          time: "2019.07.24 周杰伦",
          centent: "庆祝20周年 周杰伦「嘉年华」世界巡回演唱会即将登场"
        }
      ],
      bottomList: [
        {
          img: require("../assets/news/414X250.jpg"),
          time: "2019.07.22 周杰伦",
          centent: "杰威尔公司声明"
        },
        {
          img: require("../assets/news/artist_news_patrick20190606.png"),
          time: "2019.06.06 曹杨",
          centent: "派伟俊携手同窗好友一同打造热血青春毕业歌曲《飞得更高》！"
        },
        {
          img: require("../assets/news/yyl1.png"),
          time: "2019.05.16 袁咏琳",
          centent:
            "Cindy袁咏琳出席2019美棉日活动 周裕颖量身打造露肚穿著时尚又环保"
        },
        {
          img: require("../assets/news/list_cindy_news2.jpg"),
          time: "2019.01.17 袁咏琳",
          centent: "袁咏琳丶周孝安相约直播兼看MV首播 磕零食聊电影"
        },
        {
          img: require("../assets/news/artist_news_cindy20190115.png"),
          time: "2019.09.16 袁咏琳",
          centent: "袁咏琳2019最新力作 终于勇敢了 ......"
        },
        {
          img: require("../assets/news/artist_news_cindy20191108.png"),
          time: "2018.11.09 袁咏琳",
          centent: "美国2018秋冬服装秀 代言人Cindy"
        },
        {
          img: require("../assets/news/artist_news_cindy20180701.png"),
          time: "2018.07.01 袁咏琳",
          centent: "Cindy袁咏琳「足球胜利帽」邀歌迷疯......"
        },
        {
          img: require("../assets/news/bawjld.jpg"),
          time: "2018.05.14 周杰伦",
          centent: "最新单曲「不爱我就拉到」各大数位排行版创......"
        }
      ]
    };
  },

  methods: {
    setNews(data) {
      this.$store.commit("setShowNews", data);
      this.$store.commit("setIconBack", true);
    }
  },
  computed: {
    showNews() {
      return this.$store.state.showNews;
    }
  },
  components: {
    PageTitle,
    NewsItem
  }
};
</script>

<style lang="stylus" scoped>
.news
  width 93%
  height 800px
  margin 0 60px 60px 52.3px
  background-color #EDEDED
.news-div
  width 95.95%
  height 650px
  margin 0 28px
  overflow hidden
.news-box
  width 100%
  height 650px
  margin auto
  overflow auto
.news-grid
  width 100%
  height 640px
  margin auto
  display grid
  grid-template-columns 49.25% 1.5% 49.25%
.news-left
  margin 8px 0 18px 0
  position relative
.news-list-line
  width 2px
  height 617px
  margin 8px 8px 20px 8px
.news-right
  margin 8px 0 18px 0
  position relative
.news-left-item
  position relative
  width 100%
  height 299px
  margin 0 0 19px 0
.news-left-img
  width 100%
  height 299px
.news-left-item:nth-child(2)
  margin 0px
.news-left-mask
  width 100%
  height 20%
  position absolute
  bottom 0
  z-index 10
  background-color #000
  opacity 1
.news-caption::before
  position absolute
  display block
  content ''
  width 4px
  height 80%
  left 11px
  top 8px
  background linear-gradient(90deg, #b4954f 35%, #d4bb7a 60%)
  background -moz-linear-gradient(90deg, #B4954F 35%, #D4BB7A 60%)
  background -webkit-linear-gradient(90deg, #B4954F 35%, #D4BB7A 60%)
.news-left-p
  position absolute
  top 8px
  left 22px
  margin 0
  padding 0
  font-size 12px
  color #c9b06b
.news-left-p1
  position absolute
  bottom 6px
  left 22px
  margin 0
  padding 0
  font-size 14px
  color #fff
  word-break break-all
  display -webkit-box
  -webkit-line-clamp 2 /* 限制在一个块元素显示的文本的行数 */
  -webkit-box-orient vertical
  overflow hidden
.news-right-item
  width 49.23%
  height 199px
  position relative
  float left
  margin 0 10px 10px 0
  padding 0
.news-right-item:nth-child(2n)
  margin 0 0 10px 0
.news-right-img
  width 100%
  height 100%
  padding 0
.news-item-mask
  width 100%
  height 36%
  position absolute
  bottom 0
  z-index 10
  background-color #000
  opacity 1
.news-caption::before
  position absolute
  display block
  content ''
  width 4px
  height 80%
  left 11px
  top 8px
  background linear-gradient(90deg, #b4954f 35%, #d4bb7a 60%)
  background -moz-linear-gradient(90deg, #B4954F 35%, #D4BB7A 60%)
  background -webkit-linear-gradient(90deg, #B4954F 35%, #D4BB7A 60%)
.news-item-p
  position absolute
  top 8px
  left 22px
  margin 0
  padding 0
  font-size 12px
  color #c9b06b
.news-item-p1
  position absolute
  bottom 6px
  left 22px
  width 90%
  margin 0
  padding 0
  font-size 14px
  color #fff
  word-break break-all
  display -webkit-box
  -webkit-line-clamp 2 /* 限制在一个块元素显示的文本的行数 */
  -webkit-box-orient vertical
  overflow hidden
.news-bottom-box
  width 100%
  height auto
  margin 0
  background-color blue
.news-bottom-item
  width 24%
  height 192px
  margin 0 1.33% 10px 0
  padding 0
  float left
  position relative
.news-bottom-img
  width 100%
  height 100%
  margin 0
.news-bottom-item:nth-child(4n)
  margin-right 0
</style>
