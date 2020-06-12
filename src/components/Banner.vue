<template>
  <div class="banner-div">
    <el-carousel
      height="744px"
      direction="vertical"
      :autoplay="true"
      :interval="8000"
      ref="carousel"
    >
      <el-carousel-item v-for="(item,index) in banners" :key="index" name="index">
        <img :src="item.img" class="banner-img" alt=" " />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Banner",
  data() {
    return {
      banners: [
        { img: require("../assets/banner/1920x1022_v2.jpg") },
        { img: require("../assets/banner/mainslider_young_glimmer.jpg") },
        { img: require("../assets/banner/2020_patrickbrasca_dwl_desktop.jpg") },
        { img: require("../assets/banner/pc_1920x1022.jpg") },
        { img: require("../assets/banner/1920x1022.png") }
      ]
    };
  },
  mounted() {
    // 监听滚轮 滚动事件
    window.addEventListener("mousewheel", this.handleScroll, false);
  },
  methods: {
    handleScroll(e) {
      // 页面滚动条距顶部距离
      let scrollTop = document.documentElement.scrollTop;
      if (window.location.hash == "#/Home") {
        if (scrollTop >= 104) {
          this.$refs.carousel.next();
        } else {
          this.$refs.carousel.prev();
        }
      }
    }
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
.banner-div
  width 93.12%
  height auto
  margin -7.7px 60px 60px 52.3px
  z-index 999999
.banner-img
  width 100%
  height 100%
.banner-h1
  color red
  font-size 24px
.banner-div>>>.el-carousel__indicators--vertical
  position absolute
  right 0px
  top 50%
  transform translateY(-50%)
.banner-div>>>.el-carousel__button
  width 15px
  height 15px
  border-radius 50%
</style>
