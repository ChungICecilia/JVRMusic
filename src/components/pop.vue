<template>
  <div id="pop" class="pop">
    <div class="pop-mask">
      <img src="../assets/hot_news_title.png" class="pop-hotNewsTitle" alt=" " />
      <i class="pop-close" @click="close(false)" />
      <div class="pop-div">
        <img src="../assets/hotnews.jpg" class="pop-poster" alt=" " />
        <div class="pop-content">
          <i class="pop-line" />
          <h1 class="poo-h1">周杰伦 Jay Chou</h1>
          <h1 class="poo-h1">嘉年华世界巡回演唱会</h1>
          <p
            class="pop-p"
          >周杰伦第八套世界巡回演唱会「嘉年华」即将启动，将再度以超乎常人的毅力、超越自我的创意带给大家惊喜! 这场演唱会同时也是他迈向乐坛20年的一场深具意义的演唱会！为了庆祝20周年，演唱会将以欢乐的元素作为主轴，总是引领风潮、总是令人惊呼连连的周杰伦，会有什么出人意表的惊喜、与歌迷一同迎向自己在乐坛的20年？令全球万千乐迷屏息以待！【嘉年华】世界巡回演唱会今年10月将从上海开始，明年初在新加坡、马来西亚登场，各地的时间场次将会陆续公布，请粉丝静候。</p>
          <p class="pop-p">演唱会官方周边商品10月17日起开始热销! 请点击了解详情前往购买。</p>
          <a href="https://weidian.com/?userid=233352" style="text-decoration:none">
            <div class="pop-newsMore">了解详情 ></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    close: function(data) {
      this.$emit("CLOSE", false);
    }
  }
};
</script>

<style lang="stylus" scoped>
.pop
  width 100%
  height 100%
  z-index 999
  position fixed
.pop-mask
  width 100%
  height 100%
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background-color rgba(0, 0, 0, 0.5)
.pop-hotNewsTitle
  width 18%
  position fixed
  top 20%
  left 41%
.pop-close
  position fixed
  top 28%
  right 18%
  width 25px
  height 25px
  background-image url('../assets/close.png')
  background-size cover
  color #fff
.pop-div
  width 60%
  height 60%
  position relative
  display grid
  grid-template-columns 40% 60%
  top 31%
  left 20%
  background-color #fff
  border-radius 25px
.pop-poster
  margin 25px
  height 405px
.pop-content
  width 100%
  height 100%
  padding 10% 0 0 0
.poo-h1
  font-size 40px
  position relative
  line-height 40px
  margin 0 0 10px 10px
.pop-line::before
  position absolute
  display block
  content ''
  width 4px
  height 20%
  left 39%
  top 12%
  margin 0
  padding 0
  background linear-gradient(90deg, #b4954f 35%, #d4bb7a 60%)
  background -moz-linear-gradient(90deg, #B4954F 35%, #D4BB7A 60%)
  background -webkit-linear-gradient(90deg, #B4954F 35%, #D4BB7A 60%)
.pop-p
  font-size 14px
  width 97%
.pop-newsMore
  width 33%
  height 13%
  background-image url('../assets/hot_news_more.jpg')
  background-size cover
  font-size 18px
  line-height 56px
  text-align center
  color #fff
</style>
