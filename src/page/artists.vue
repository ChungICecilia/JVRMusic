<template>
  <div id="artists" class="artists">
    <PageTitle :info="info" :params="params" />

    <div class="artists-div" v-show="!showInfo">
      <div v-for="(item,index) in list" :key="index" class="artists-list" @click="setInfo(index)">
        <img :src="item.img" class="artists-list-img" alt=" " />
        <div class="artists-list-div">
          <div class="artists-caption">
            <p class="artists-p1">{{item.name}}</p>
            <p class="artists-p2">{{item.englishName}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="artists-div" v-show="showInfo">
      <div class="artists-tab-div">
        <h4
          v-for="(item,index) in tabList"
          :key="index"
          :class=" item.active && index != tabList.length-1 ? 'artists-tab-textActive'
            : !item.active && index != tabList.length-1 ? 'artists-tab-text' 
              : index == tabList.length-1 && item.active ? 'artists-tab-tActive':'artists-tab-t'"
          @click="change(index)"
        >{{item.name}}</h4>
      </div>

      <div class="artists-tab-introduction" v-show="show == 0 && !showNews">
        <el-carousel
          height="544px"
          direction="horizontal"
          :autoplay="true"
          :interval="18000"
          arrow="never"
          class="el-carousel"
        >
          <el-carousel-item v-for="(item,index) in item" :key="index">
            <img src="../assets/artists/album_carousel_14.jpg" class="artists-img" alt=" " />
          </el-carousel-item>
        </el-carousel>

        <div class="artists-introduction-centent">
          <div class="artists-introduction-centent-bg">
            <h4 class="artists-introduction-title">介绍</h4>
            <p>周杰伦(Jay Chou；1979年1月18日)，著名流行歌曲男歌手、唱片制片人、演员、导演。2000年出道，随即引起华语音乐界重大注目，并形成所谓的「周杰伦现象」，以其个人风格和音乐创作能力著称，影响华语乐坛，亚洲媒体称他为「亚洲天王」，2003年，他是TIMES《时代杂志》亚洲版的封面故事，被称为「亚洲流行音乐的新天王」。2009年，被CNN评选为「亚洲最有影响力人物之一」。</p>
            <div class="artists-introduction-line"></div>
            <h4 class="artists-introduction-title">专辑</h4>
            <h5
              class="artists-introduction-album"
              v-for="(item,index) in album"
              :key="index"
            >{{item.name}}</h5>
            <div class="artists-introduction-line"></div>
            <h4 class="artists-introduction-title">世界巡回演唱会</h4>
            <h5 v-for="(item,index) in concerts" :key="index+20">{{item.centent}}</h5>
          </div>
        </div>
      </div>

      <div class="artists-tab-introduction" v-show="show == 1 && !showNews">
        <div class="artists-tab-introduction-div">
          <div class="artists-news-div" v-for="(item,index) in news" :key="index+60">
            <img :src="item.img" class="artists-news-img" @click="setNews(true)" alt=" " />
            <div class="artists-news-content">
              <p class="artists-news-time">{{item.time}}</p>
              <p class="artists-news-title">{{item.title}}</p>
              <div class="artists-news-line" />
              <p class="artists-news-p">{{item.centent}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="artists-tab-introduction" v-show="show == 2 && !showNews">
        <div class="artists-works" v-for="(item,index) in buttons" :key="index+80">
          <el-button
            round
            @click="clickButton(index)"
            :class="item.active? 'artists-btn-active':'artists-btn'"
          >{{item.btn_name}}</el-button>
        </div>
        <div class="artists-introduction-div">
          <div class="artists-introduction-bg">
            <div
              v-for="(item,index) in allList"
              :key="index"
              class="artists-list"
              @mouseenter="enter(index)"
              @mouseleave="leave(index)"
            >
              <img :src="item.img" class="artists-list-img" alt=" " />
              <img
                src="../assets/artists/artists_works_hover.png"
                class="artists-list-imgMask"
                v-if="item.mask"
                @click="setNews(true)"
                alt=" "
              />
              <div class="artists-list-div">
                <div class="artists-caption">
                  <p class="artists-name">{{item.name}}</p>
                  <p class="artists-title">{{item.englishName}}</p>
                  <p class="artists-time">{{item.time}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="artists-tab-introduction" v-show="show == 3 && !showNews">
        <div class="artists-videos-div">
          <div class="artists-videos-left">
            <a href="https://y.qq.com/n/yqq/mv/v/g0033tvp7sb.html" target="_blank">
              <img src="../assets/artists/video_cover.jpg" class="artists-videos-bigIMG" />
            </a>
            <p class="artists-bigIMG-title">周杰伦 Jay Chou【我是如此相信 I Truly Believe】(电影天火主题曲)</p>
            <p class="artists-bigIMG-time">2019.12.15 周杰伦</p>
          </div>
          <div class="artists-videos-right">
            <div class="artists-videos-rightList">
              <div class="artists-videos-list" v-for="(item,index) in videosList" :key="index+100">
                <img :src="item.videoIMG" class="artists-videos-img" />
                <div class="artists-videos-bg">
                  <div artists-videos-line />
                  <p class="artists-videos-time">{{item.videoTime}}</p>
                  <p class="artists-videos-title">{{item.videoTile}}</p>
                  <img src="../assets/artists/artists_video_play.png" class="artists-videos-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <newsItem v-show="showNews"></newsItem>
    </div>
  </div>
</template>

<script type="text/javascript">
import PageTitle from "../components/PageTitle";
import newsItem from "../components/newsItem";
export default {
  name: "artists",
  data() {
    return {
      info: {
        img: require("../assets/artists/artists_title.png"),
        title: "艺人专区"
      },
      params: null,
      item: null,
      show: "",
      list: [
        {
          name: "周杰伦",
          englishName: "JAY CHOU",
          img: require("../assets/artists/pic1.jpg")
        },
        {
          name: "袁咏琳",
          englishName: "CINDY YEN",
          img: require("../assets/artists/CINDY_685x414.jpg")
        },
        {
          name: "邱凯伟",
          englishName: "DARREN CHIU",
          img: require("../assets/artists/artist_profile_darren.png")
        },
        {
          name: "派伟俊",
          englishName: "PATRICK BRASCA",
          img: require("../assets/artists/artist_profile_patrick.png")
        },
        {
          name: "黄远",
          englishName: "HUANG YUAN",
          img: require("../assets/artists/artist_profile_sean.png")
        },
        {
          name: "冼佩瑾",
          englishName: "CELESTE SYN",
          img: require("../assets/artists/artist_profile_celeste.png")
        },
        {
          name: "叶怀佩",
          englishName: "ANDREW YEH",
          img: require("../assets/artists/artist_profile_andrew.png")
        },
        {
          name: "曹杨",
          englishName: "YOUNG",
          img: require("../assets/artists/artist_cy_profile_thumbnail.png")
        }
      ],
      tabList: [
        { name: "介绍", active: true },
        { name: "新闻", active: false },
        { name: "作品", active: false },
        { name: "影音", active: false },
        { name: "行程", active: false }
      ],
      album: [
        { name: "2016 周杰伦的床边故事" },
        { name: "2014 哎呦，不错哦" },
        { name: "2012 十二新作" },
        { name: "2011 惊叹号" },
        { name: "2010 跨时代" },
        { name: "2008 魔杰座" },
        { name: "2007 我很忙" },
        { name: "2006 依然范特西" },
        { name: "2005 11月的肖邦" },
        { name: "2004 七里香" },
        { name: "2003 叶惠美" },
        { name: "2002 八度空间" },
        { name: "2001 范特西" },
        { name: "2000 周杰伦同名专辑" }
      ],
      concerts: [
        { centent: "2019(筹备中) 嘉年华世界巡回演唱会" },
        { centent: "2016-2019 地表最强世界巡回演唱会" },
        { centent: "2013-2015 魔天伦世界巡回演唱会" },
        { centent: "2010-2011 超时代世界巡回演唱会" },
        { centent: "2007-2009 周杰伦世界巡回演唱会" },
        { centent: "2004-2006 无与伦比世界巡回演唱会" },
        { centent: "2002-2004 The One世界巡回演唱会" },
        { centent: "2001-2002 范特西世界巡回演唱会" }
      ],
      news: [
        {
          img: require("../assets/artists/414x250.jpg"),
          time: "2019.12.16",
          title: "周杰伦「我是如此相信」MV 助威电影「天火」",
          centent: "MV带大家重回初心 再现出道当年的鸭舌帽造型)......"
        },
        {
          img: require("../assets/artists/cover.jpg"),
          time: "2019.10.30",
          title: "巡回全球四大洲 周杰伦「地表最强」演唱",
          centent:
            "历时三年 120场演出、累计300万人次的热情能量 刷新周董纪录 演唱会影音产品包装设计很有「太空感」 特制铁盒宛如时空胶囊)......"
        },
        {
          img: require("../assets/artists/cover (1).jpg"),
          time: "2019.10.21",
          title: "周杰伦上海演出圆满成功 古筝弹唱艳惊四座",
          centent:
            "四场演出 每一场比每一场更要求完美 每一场比每一场更high！)......"
        },
        {
          img: require("../assets/artists/cover (2).jpg"),
          time: "2019.10.18",
          title: "20年音乐能量大爆发 周杰伦嘉年华上海演唱会酷炫首场",
          centent:
            "全球首创最多「透明屏」组成的最大球体 总成本2亿台币再创新高 继续乘着音乐的翅膀飞向下一个20年 周杰伦内心话惹哭歌迷)......"
        },
        {
          img: require("../assets/artists/cover414250.jpg"),
          time: "2019.09.17",
          title: "周氏情歌新火花 周杰伦与五月天阿信「说好不哭」",
          centent:
            "两人再续「音」缘 周董迈入乐坛20年的历史性合作 夸奖此次合作快狠准 阿信邀周杰伦执导五月天MV)......"
        },
        {
          img: require("../assets/artists/list_news_4.jpg"),
          time: "2019.07.24",
          title: "庆祝20周年 周杰伦「嘉年华」世界巡回演唱会即将登场",
          centent:
            "周式音乐丰富多元、科技炫目吸睛、美学华丽绽放 交织出一场时尚缤纷、精彩绝伦的嘉年华演唱会 )......"
        },
        {
          img: require("../assets/artists/414x250.jpg"),
          time: "2019.12.16",
          title: "周杰伦「我是如此相信」MV 助威电影「天火」",
          centent: "MV带大家重回初心 再现出道当年的鸭舌帽造型)......"
        },
        {
          img: require("../assets/artists/cover.jpg"),
          time: "2019.10.30",
          title: "巡回全球四大洲 周杰伦「地表最强」演唱",
          centent:
            "历时三年 120场演出、累计300万人次的热情能量 刷新周董纪录 演唱会影音产品包装设计很有「太空感」 特制铁盒宛如时空胶囊)......"
        },
        {
          img: require("../assets/artists/cover (1).jpg"),
          time: "2019.10.21",
          title: "周杰伦上海演出圆满成功 古筝弹唱艳惊四座",
          centent:
            "四场演出 每一场比每一场更要求完美 每一场比每一场更high！)......"
        },
        {
          img: require("../assets/artists/cover (2).jpg"),
          time: "2019.10.18",
          title: "20年音乐能量大爆发 周杰伦嘉年华上海演唱会酷炫首场",
          centent:
            "全球首创最多「透明屏」组成的最大球体 总成本2亿台币再创新高 继续乘着音乐的翅膀飞向下一个20年 周杰伦内心话惹哭歌迷)......"
        },
        {
          img: require("../assets/artists/cover414250.jpg"),
          time: "2019.09.17",
          title: "周氏情歌新火花 周杰伦与五月天阿信「说好不哭」",
          centent:
            "两人再续「音」缘 周董迈入乐坛20年的历史性合作 夸奖此次合作快狠准 阿信邀周杰伦执导五月天MV)......"
        },
        {
          img: require("../assets/artists/list_news_4.jpg"),
          time: "2019.07.24",
          title: "庆祝20周年 周杰伦「嘉年华」世界巡回演唱会即将登场",
          centent:
            "周式音乐丰富多元、科技炫目吸睛、美学华丽绽放 交织出一场时尚缤纷、精彩绝伦的嘉年华演唱会 )......"
        }
      ],
      buttons: [
        { btn_name: "全部", active: true },
        { btn_name: "专辑", active: false },
        { btn_name: "单曲", active: false },
        { btn_name: "戏曲", active: false },
        { btn_name: "电影", active: false },
        { btn_name: "其他", active: false }
      ],
      allList: [
        {
          name: "周杰伦",
          englishName: "周杰伦嘉年华世界巡回演唱会  ",
          time: "发行日期：2019.10.17",
          img: require("../assets//artists/list_news_4.jpg"),
          mask: false
        },
        {
          name: "周杰伦",
          englishName: "周杰伦地表最强演唱会",
          time: "发行日期：2016.06.30",
          img: require("../assets/artists/invincible685414.jpg"),
          mask: false
        },
        {
          name: "周杰伦",
          englishName: "周杰伦的床边故事",
          time: "发行日期：2016.06.24",
          img: require("../assets/artists/cbgs.jpg"),
          mask: false
        },
        {
          name: "周杰伦",
          englishName: "惊天魔盗团2",
          time: "发行日期：2016.06.10",
          img: require("../assets/artists/NYSE 685 414.jpg"),
          mask: false
        },
        {
          name: "周杰伦",
          englishName: "哎呦不错哦",
          time: "发行日期：2014.12.26",
          img: require("../assets/artists/aybco.jpg"),
          mask: false
        },
        {
          name: "周杰伦",
          englishName: "天台",
          time: "发行日期：2013.07.11",
          img: require("../assets/artists/tt.jpg"),
          mask: false
        },
        {
          name: "周杰伦",
          englishName: "周杰伦魔天伦世界巡回演唱会",
          time: "发行日期：2013.05.17",
          img: require("../assets/artists/cover685414opus.jpg"),
          mask: false
        },
        {
          name: "周杰伦",
          englishName: "十二新作",
          time: "发行日期：2012.12.28",
          img: require("../assets/artists/srxz.jpg"),
          mask: false
        },
        {
          name: "周杰伦",
          englishName: "逆战",
          time: "发行日期：2012.01.17",
          img: require("../assets/artists/cover (6).jpg"),
          mask: false
        },
        {
          name: "周杰伦",
          englishName: "惊叹号",
          time: "发行日期：2011.11.11",
          img: require("../assets/artists/jth.jpg"),
          mask: false
        },
        {
          name: "周杰伦",
          englishName: "青蜂侠",
          time: "发行日期：2011.01.14",
          img: require("../assets/artists/qfx.jpg"),
          mask: false
        },
        {
          name: "周杰伦",
          englishName: "周杰伦超世代世界巡回演唱会",
          time: "发行日期：2010.06.11",
          img: require("../assets/artists/cover685414opus.jpg"),
          mask: false
        }
      ],
      videosList: [
        {
          videoIMG: require("../assets/artists/414x250.jpg"),
          videoTime: "2019.12.15 周杰伦",
          videoTile:
            "周杰伦 Jay Chou【我是如此相信 I Truly Believe】(电影天火主题曲) ....."
        },
        {
          videoIMG: require("../assets/artists/wontcry315177.png"),
          videoTime: "2019.09.16 周杰伦",
          videoTile:
            "周杰伦 Jay Chou【说好不哭 Won't Cry】with 五月天阿信 (Mayday Ashin) ....."
        },
        {
          videoIMG: require("../assets/artists/bawjld.jpg"),
          videoTime: "2018.05.14 周杰伦",
          videoTile:
            "周杰伦 Jay Chou【不爱我就拉倒 If You Don't Love Me, It's Fine】 ....."
        },
        {
          videoIMG: require("../assets/artists/dnxk.jpg"),
          videoTime: "2018.01.18 周杰伦",
          videoTile: "周杰伦 Jay Chou【等你下课 Waiting For You】 ....."
        },
        {
          videoIMG: require("../assets/artists/gbqq.jpg"),
          videoTime: "2016.10.27 周杰伦",
          videoTile: "周杰伦 Jay Chou【告白气球 Love Confession】 ....."
        },
        {
          videoIMG: require("../assets/artists/teqbql.jpg"),
          videoTime: "2016.08.26 周杰伦",
          videoTile: "周杰伦 Jay Chou【土耳其冰淇淋 Tu Er Qi Ice Cream】 ....."
        },
        {
          videoIMG: require("../assets/artists/cover(7).jpg"),
          videoTime: "016.06.16 周杰伦",
          videoTile: "周杰伦 Jay Chou X aMEI【不该 Shouldn't Be】 ....."
        },
        {
          videoIMG: require("../assets/artists/cbgs1.jpg"),
          videoTime: "2016.06.10 周杰伦",
          videoTile: "周杰伦 Jay Chou【床边故事 Bedtime Stories】 ....."
        }
      ]
    };
  },
  computed: {
    showInfo() {
      return this.$store.state.showInfo;
    },
    showNews() {
      return this.$store.state.showNews;
    }
  },
  components: {
    PageTitle,
    newsItem
  },
  methods: {
    setInfo(index) {
      let self = this;
      let params = {
        name: self.list[index].name,
        englishName: self.list[index].englishName,
        showArtists: true
      };
      self.$store.commit("setArtistsInfo", params);
      self.showList = false;
      self.item = self.list[index];
      self.$store.commit("setShowInfo", true);
      this.$store.commit("setIconBack", true);
    },
    setNews(data) {
      this.$store.commit("setShowNews", true);
      this.$store.commit("setIconBack", true);
    },
    change(index) {
      let self = this;
      self.$store.commit("setShowNews", false);
      self.show = index;
      if (index == 4) {
        self.$store.commit("setArtistsInfo", null);
        self.$store.commit("setIconBack", false);
        self.$store.commit("setShowNews", false);
        self.$router.push("/SCHEDULE");
        return;
      }
      for (let i = 0; i < self.tabList.length; i++) {
        self.tabList[i].active = false;
      }
      self.tabList[index].active = true;
    },
    clickButton(index) {
      let self = this;
      for (let i = 0; i < self.buttons.length; i++) {
        self.buttons[i].active = false;
      }
      self.buttons[index].active = true;
    },
    enter(index) {
      this.allList[index].mask = true;
    },
    leave(index) {
      this.allList[index].mask = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.artists
  width 93.12%
  height 800px
  margin -7.7px 60px 60px 52.3px
  background-color #EDEDED
.artists-div
  width 100%
  display flex
  flex-direction row
  flex-wrap wrap
  margin 0
.artists-list
  width 22.3%
  height 193px
  margin 16px 0 0 27px
  position relative
.artists-list-img
  width 100%
  height 100%
.artists-list-imgMask
  width 100%
  height 193px
  position absolute
  top 0
  left 0
  z-index 9
.artists-list-div
  width 100%
  height 35%
  background #000
  opacity 0.8
  position absolute
  bottom 0
.artists-caption::before
  position absolute
  display block
  content ''
  width 4px
  height 70%
  left 11px
  top 8px
  background linear-gradient(90deg, #b4954f 35%, #d4bb7a 60%)
  background -moz-linear-gradient(90deg, #B4954F 35%, #D4BB7A 60%)
  background -webkit-linear-gradient(90deg, #B4954F 35%, #D4BB7A 60%)
.artists-p1
  position absolute
  top 6px
  left 22px
  margin 0
  padding 0
  font-size 18px
  color #fff
.artists-p2
  position absolute
  bottom 11px
  left 22px
  margin 0
  padding 0
  font-size 18px
  color #c9b06b
.artists-tab-div
  width 100%
  height auto
  margin 0 28px
  border-bottom 1px solid #b09869
  text-align center
.artists-tab-text, .artists-tab-t
  width 20%
  text-align center
  color #C0C0C0
  float left
  cursor default
.artists-tab-text::after, .artists-tab-textActive::after
  font-size 25px
  line-height 18px
  position relative
  right -100px
  content '/'
  color #000
  opacity 0.5
.artists-tab-textActive, .artists-tab-tActive
  width 20%
  text-align center
  float left
  color #000
  cursor default
.artists-tab-introduction
  width 100%
  height 100%
  margin 0 28px
  overflow hidden
.artists-introduction-centent
  width 45%
  height 75%
  display inline-block
  position absolute
  top 34.7%
  right 6%
  overflow hidden
.artists-introduction-centent-bg
  width 100%
  height 100%
  margin 19px 0 0 0
  overflow auto
.artists-introduction-title
  color #b09869
  margin 0 0 12px 0
  padding 0
.artists-introduction-line
  height 3px
  margin 20px 0px
  background url('../assets/artists/news_line.png') left top repeat-x
.artists-introduction-p
  font-size 15px
  line-height 25px
  color #313131
  font-style normal
  vertical-align baseline
.artists-introduction-album
  margin 0
  font-size 14px
  line-height 28px
.el-carousel
  width 45%
  height auto
  margin 18px 0 0 0
  background-color #000
  display inline-block
.artists-img
  width auto
  height auto
  margin 19px 0 0 9px
.artists-div>>>.el-carousel__button
  width 10px
  height 10px
  border-radius 50%
.artists-tab-introduction-div
  height 600px
  width 100%
  overflow auto
.artists-tab-introduction-div::-webkit-scrollbar
  display none
.artists-news-div
  display inline-block
  width 48%
  height 230px
  border-bottom 1px solid #b09869
  margin 0 26px 0 0
.artists-news-img
  width 323px
  height 195px
  margin 15px 15px 0 0
  float left
.artists-news-time
  font-size 12px
  color #b09869
  margin 15px
.artists-news-line
  width 47%
  height 3px
  background url('../assets/artists/news_line.png') left top repeat-x
  margin 15px 0 0 52%
.artists-news-title
  font-size 16px
  min-heigh 18px
  max-height 38px
  color #b09869
  margin 0 15px 0 0
.artists-news-p
  min-heigh 18px
  max-height 38px
  font-size 14px
  overflow hidden
  color #000
  margin 15px 15px 0 0
.artists-works
  width 100%
  height auto
  margin 15px 0 15px 30%
.artists-btn-active
  margin 0 15px 0 0
  background-color #000
  color #b09869
  float left
  height 38px
.artists-btn
  margin 0 15px 0 0
  background-color #EDEDED
  height 38px
  border 0
  color #b09869
  float left
  border-radius 0
.artists-introduction-div
  width 100%
  height 558px
  overflow hidden
.artists-introduction-bg
  margin 0
  width 100%
  height 560px
  overflow auto
  display flex
  flex-direction row
  flex-wrap wrap
  .artists-name
    position absolute
    top 6px
    left 22px
    margin 0
    padding 0
    font-size 12px
    color #fff
.artists-title
  position absolute
  bottom 11px
  top 23px
  left 22px
  margin 0
  padding 0
  font-size 12px
  color #c9b06b
.artists-time
  position absolute
  top 40px
  left 22px
  margin 0
  padding 0
  font-size 12px
  color #fff
.artists-videos-div
  width 100%
  height 600px
  margin 15px 0 0 0
  display grid
  grid-template-columns 66% 40%
.artists-videos-left
  width 100%
  height 100%
.artists-videos-right
  width 100%
  height 580px
  overflow hidden
.artists-videos-rightList
  width 100%
  height 580px
  overflow auto
.artists-videos-bigIMG
  width 100%
  height auto
.artists-bigIMG-title
  font-size 22px
  margin 10px 0 0 0
.artists-bigIMG-time
  font-size 14px
  color #c9b06b
  margin 8px 0 0 0
.artists-videos-list
  width 96%
  height auto
  display grid
  grid-template-columns 34% 54%
  margin 0 0 8px 15px
.artists-videos-img
  width 100%
  height auto
.artists-videos-bg
  width 100%
  height auto
  background-color #000
  opacity 0.9
  position relative
// .artists-videos-line
// content ''
// width 4px
// height 70%
// left 11px
// top 8px
// background linear-gradient(90deg, #b4954f 35%, #d4bb7a 60%)
// background -moz-linear-gradient(90deg, #B4954F 35%, #D4BB7A 60%)
// background -webkit-linear-gradient(90deg, #B4954F 35%, #D4BB7A 60%)
.artists-videos-time
  width 100%
  font-size 12px
  color #c9b06b
  margin 8px
  top -100px
.artists-videos-title
  width 86%
  color #fff
  font-size 14px
  margin 12px 0  0  8px
  display -webkit-box
  -webkit-line-clamp 2 /* 限制在一个块元素显示的文本的行数 */
  -webkit-box-orient vertical
  overflow hidden
.artists-videos-icon
  width 15px
  height 15px
  display float
  float right
  margin 0 5px 0 0
</style>
