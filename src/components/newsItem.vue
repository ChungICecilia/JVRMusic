<template>
  <div id="newsItem" class="newsItem">
    <el-carousel
      height="544px"
      direction="horizontal"
      :autoplay="true"
      :interval="18000"
      arrow="never"
      class="el-carousel"
    >
      <el-carousel-item v-for="(item,index) in list" :key="index">
        <img :src="item.img" class="newsItem-img" alt=" " />
      </el-carousel-item>
    </el-carousel>

    <div :class="(this.$route.path!='/NEWS')? 'newsItem-centent-artists':'newsItem-centent-news'">
      <div class="newsItem-centent-bg">
        <strong>
          <p class="newsItem-title">周杰伦「我是如此相信」MV 助威电影「天火」</p>
        </strong>
        <h4 class="newsItem-time">2019.12.16 周杰伦</h4>
        <div class="newsItem-line" />
        <p>MV带大家重回初心 再现出道当年的鸭舌帽造型</p>
        <div class="newsItem-line" />
        <p>
          乐坛天王周杰伦为昆凌主演的新片「天火」写歌并演唱主题曲「我是如此相信」，随着电影上映，粉丝在电影院里透过大屏幕及震撼的音响环境，已抢先听到这首气势磅礴的歌曲！歌曲搭配电影幕后画面的同时，也带给粉丝满满的震撼！周杰伦说：「写一首好听的歌用不了太久，只要有感觉就行。」动听的旋律及优美的歌词来自周杰伦与方文山的黄金词曲组合，同时包办演唱的周杰伦，也为这首歌拍摄MV，助威昆凌主演的电影「天火」不遗余力。
          为了切合电影「天火」的氛围，拍摄MV的片厂用喷画及沙土打造出一片荒漠，周杰伦与乐手们犹如置身灾难即将来临的现场，看似处于绝望之中却仍然充满希望，歌词：「我是如此相信，在背后支撑的是你，一直与我并肩而行，仰望等太阳升起，听见鸟群回来的声音。」表达了在面对灾难时，不畏艰难、不放弃的信念！方文山写的歌词充份呈现了电影的画面感，歌名「我是如此相信」是整首歌最重要的精神，鼓励大家以坚定的意志，相信希望永远在下一秒！
          周杰伦一身帅气、戴着鸭舌帽入镜这支MV中，令人联想到他初出道时总是戴着鸭舌帽出现在当时的MV里、甚至是上节目宣传时的造型，他笑说：「大家有没有觉得我回到第一张专辑的造型？哈哈！20年，始终如一。」在乐坛迈入20年的此刻，周杰伦也用MV影像作品带大家重回初心！「我是如此相信」MV将在12月15日与歌迷见面，请密切注意杰威尔音乐官方YouTube频道。
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      list: [
        { img: require("../assets/artists/4000x4000.jpg") },
        { img: require("../assets/artists/J001.jpg") },
        { img: require("../assets/artists/J001.jpg") }
      ]
    };
  },
  computed: {
    artistsInfo() {
      return this.$store.state.artistsInfo;
    }
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
.newsItem
  margin 0 28px
  padding 0
  width 100%
  height 580px
.el-carousel
  width 45%
  height auto
  margin 18px 0 0 0
  background-color #000
  display inline-block
.newsItem-img
  width 100%
  margin 0
  padding 0
  border 0
  outline 0
  font-size 100%
  font-style normal
  vertical-align baseline
.newsItem-centent-artists
  width 46%
  height 75%
  display inline-block
  position absolute
  top 36.5%
  right 6%
  overflow hidden
.newsItem-centent-news
  width 46%
  height 75%
  display inline-block
  position absolute
  top 27%
  right 6%
  overflow hidden
.newsItem-centent-bg
  width 100%
  height 100%
  overflow auto
.newsItem-title
  margin 0 0 15px 0
  font-size 36px
  line-height 40px
  font-weight 600
  color #313131
.newsItem-time
  color #b09869
  margin 0 0 12px 0
  padding 0
.newsItem-line
  height 3px
  margin 20px 0px
  background url('../assets/artists/news_line.png') left top repeat-x
.anewsItem-album
  margin 0
  font-size 14px
  line-height 28px
p
  font-size 16px
</style>

