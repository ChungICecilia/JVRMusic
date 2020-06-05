<template>
  <div id="PageTitle" class="PageTitle">
    <img :src="info.img" class="PageTitle-title-img" alt=" " />
    <div class="PageTitle-title">{{info.title}}</div>
    <div class="artists" v-if="artistsInfo?artistsInfo.showArtists:false">
      <h1 class="artists-name">{{artistsInfo.name}}</h1>
      <h1 class="artists-englishName">{{artistsInfo.englishName}}</h1>
      <div class="artists-div-icon">
        <a href="https://www.weibo.com/JVRMusicOfficial">
          <img
            v-for="(item,index) in icon"
            :key="index"
            :src="item.icon"
            class="artists-icon"
            alt=" "
          />
        </a>
      </div>
    </div>
    <img
      v-if="iconBack"
      src="../assets/artists/back.jpg"
      class="artists-back"
      @click="back()"
      alt=" "
    />

    <div
      class="PageTitle-select-div"
      v-if="!iconBack&&this.$route.path!='/ARTISTS'&&this.$route.path!='/ABOUT'"
    >
      <i class="PageTitle-select-icon" />
      <i class="PageTitle-select-i" />
      <span class="PageTitle-select-h4">搜寻</span>
      <el-select v-model="value" placeholder="艺人姓名" class="PageTitle-select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>

    <img src="../assets/about/page_title_line.jpg" class="PageTitle-line-img" alt=" " />
  </div>
</template>

<script type="text/javascript">
export default {
  name: "PageTitle",
  props: {
    info: Object
  },
  data() {
    return {
      // showArtists: false,
      icon: [
        { icon: require("../assets/artists/news_fb.png") },
        { icon: require("../assets/artists/news_sina.png") },
        { icon: require("../assets/artists/news_yt.png") },
        { icon: require("../assets/artists/news_ig.png") }
      ],
      options: [
        {
          value: "选项1",
          label: "全部艺人"
        },
        {
          value: "选项2",
          label: "周杰伦"
        },
        {
          value: "选项3",
          label: "袁咏琳"
        },
        {
          value: "选项4",
          label: "邱凯伟"
        },
        {
          value: "选项5",
          label: "派伟俊"
        },
        {
          value: "选项6",
          label: "黄远"
        },
        {
          value: "选项7",
          label: "冼佩瑾"
        },
        {
          value: "选项8",
          label: "叶怀佩"
        },
        {
          value: "选项9",
          label: "曹杨"
        }
      ],
      value: ""
    };
  },
  computed: {
    artistsInfo() {
      return this.$store.state.artistsInfo;
    },
    pach() {
      return this.$store.state.pach;
    },
    showInfo() {
      return this.$store.state.showInfo;
    },
    showNews() {
      return this.$store.state.showNews;
    },
    iconBack() {
      return this.$store.state.iconBack;
    }
  },
  created() {},
  methods: {
    back() {
      this.$store.commit("setArtistsInfo", null);
      this.$store.commit("setIconBack", false);
      this.$store.commit("setShowInfo", false);
      this.$store.commit("setShowNews", false);
      console.log(this.iconBack);
    },
    getPath() {
      let self = this;
      let url = window.location.href;
      let u = url.indexOf("ARTISTS");
      if (u !== -1) {
        if (self.params) {
          self.showArtists = self.params.showArtists;
        }
      } else {
        this.$store.commit("setArtistsInfo", null);
        self.showArtists = false;
      }
      return;
    }
  }
};
</script>

<style lang="stylus" scoped>
.PageTitle
  width 93.12%
  height auto
  margin -7.7px 60px 0 28.3px
  background-color #EDEDED
  position relative
.PageTitle-title-img
  position relative
  float left
  margin 30px 15px 0 0
  width auto
  height auto
  display inline-block
.PageTitle-title
  position relative
  float left
  top 65px
  margin 0 0 0 -5px
  font-size 28px
  color #000
  font-weight bold
  display inline-block
  letter-spacing 1px // 字间距
.PageTitle-line-img
  width 103%
  height auto
  margin 0
  padding 0
.artists-name
  position relative
  float left
  top 50px
  margin 0 0 0 70px
  font-size 40px
.artists-englishName
  position relative
  float left
  top 50px
  margin 0 0 0 22px
  letter-spacing -3px // 字间距
  font-size 40px
  color #caae6a
.artists-div-icon
  position relative
  float left
  margin 0 0 0 14px
  top 60px
.artists-icon
  width 30px
  height auto
  margin 3px
.artists-back
  position absolute
  width 53px
  height auto
  top 55px
  right -40px
.PageTitle-select-div
  width 400px
  height 30px
  position absolute
  bottom 30px
  right -40px
  border-radius 4px
.PageTitle-select-h4
  position absolute
  top 0
  left 150px
  line-height 30px
  display inline-block
  margin 0
.PageTitle-select-icon
  width 30px
  height 30px
  position absolute
  margin 0
  left 120px
  background url('../assets/news/news_search_icon.png') no-repeat center
.PageTitle-select
  position absolute
  height 30px
  right 0px
/deep/.PageTitle-select // 修改组件默认样式
  .el-input__inner
    -webkit-appearance none
    background-color #fff
    background-image none
    border-radius 4px
    border 1px solid #DCDFE6
    -webkit-box-sizing border-box
    box-sizing border-box
    color #606266
    display inline-block
    font-size inherit
    height 30px
    line-height 30px
    outline 0
    padding 0 15px
    -webkit-transition border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)
    transition border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)
    background-img url('../assets/arrow.png') no-repeat center
    width 100%
/deep/.PageTitle-select
  .el-select__caret
    font-size 0
    -webkit-transform rotateZ(0)
    transform rotateZ(0)
/deep/.PageTitle-select
  .el-icon-arrow-up
    position relative
    float left
    width 40px
    height 24px
    margin-top 3px
    margin-right 2px
    -moz-border-radius 0px 15px 15px 0px
    -webkit-border-radius 0px
    border-radius 15px
    background-color #caae6a
/deep/.PageTitle-select
  .el-input__icon:before
    background-img url('../assets/arrow.png') no-repeat center
/deep/.PageTitle-select
  .el-icon-arrow-up:before
    content ''
.PageTitle-select-i
  width 30px
  height 30px
  position absolute
  margin 0
  left 358px
  background url('../assets/arrow.png') no-repeat center
  background-size 12px
  z-index 99
  pointer-events none
</style>
