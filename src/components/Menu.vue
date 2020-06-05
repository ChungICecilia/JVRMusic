<template>
  <div class="menu-main">
    <Pop v-if="pop" v-bind:dialogCreate="pop" @CLOSE="closePop" />
    <ul class="menu-topUl">
      <router-link :to="{path:item.path}" v-for="(item,index) in languageList" :key="index">
        <li @click="change(index)">
          <i
            :class="index == language ? 'menu-language-active' :'menu-language'"
            :style=" 
            {backgroundImage:'url('+item.img+')'}"
          />
        </li>
      </router-link>
    </ul>
    <span class="menu-news" @click="pop = true"></span>
    <ul class="menu-bottomUl">
      <a :href="item.link" v-for="(item,index) in socialIconList" :key="index" target="_blank">
        <span id="right_menu" :class="item.active ? 'menu-quiet' : 'menu-active' ">
          <img :src="item.icon" class="menu-img" alt=" " />
        </span>
      </a>
    </ul>
    <div class="menu-aside" v-if="aside">
      <img src="../assets/menu/menu_lang_bg.jpg" class="menu-close" @click="close" alt=" " />
      <img src="../assets/menu/close.png" class="menu-i" @click="close" alt=" " />
      <div class="menu-list">
        <div
          @click="jump(index)"
          class="menu-item"
          v-for="(item,index) in options"
          :key="index"
          :title="item.name[0]+item.name[1]"
          :style=" 
            {backgroundImage:'url('+item.img+')'}"
        ></div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Pop from "../components/pop";
export default {
  name: "Menu",
  computed: {
    language() {
      return this.$store.state.language;
    }
  },
  data() {
    return {
      aside: false,
      seen: false,
      current: 0,
      pop: false,
      languageList: [
        {
          img: require("../assets/menu/m_lang_tw.jpg")
        },
        {
          img: require("../assets/menu/m_lang_cn.jpg")
        },
        {
          img: require("../assets/menu/m_lang_en.jpg")
        },
        {
          img: require("../assets/menu/m_menu_bg.jpg")
        }
      ],
      socialIconList: [
        {
          link: "https://weibo.com/JVRMusicOfficial",
          active: false,
          icon: require("../assets/menu/facebook.png")
        },
        {
          link: "https://weibo.com/JVRMusicOfficial",
          active: false,
          icon: require("../assets/menu/youtube.png")
        },
        {
          link: "https://weibo.com/JVRMusicOfficial",
          active: false,
          icon: require("../assets/menu/weibo.png")
        }
      ],
      options: [
        {
          pach: "/NEWS",
          name: ["NEWS", "最新消息"],
          img: require("../assets/menu/m_menu_list_news.jpg")
        },
        {
          pach: "/ARTISTS",
          name: ["ARTISTS", "艺人专区"],
          img: require("../assets/menu/m_menu_list_artists.jpg")
        },
        {
          pach: "/SCHEDULE",
          name: ["SCHEDULE", "活动行程"],
          img: require("../assets/menu/m_menu_list_schedule.jpg")
        },
        {
          pach: "/VIDEOS",
          name: ["VIDEOS", "影音专区"],
          img: require("../assets/menu/m_menu_list_multimedia.jpg")
        },
        {
          pach: "/ABOUT",
          name: ["ABOUT", "关于我们"],
          img: require("../assets/menu/m_menu_list_about.jpg")
        },
        {
          pach: "/Home",
          name: ["HOME", "首页"],
          img: require("../assets/menu/m_menu_list_home.jpg")
        }
      ]
    };
  },

  components: {},
  methods: {
    change(index) {
      if (index > 2) {
        this.close();
        return;
      }
      this.$store.commit("setLanguage", index);
    },
    close() {
      this.aside = !this.aside;
    },

    // enter(index) {
    //   this.seen = true;
    //   this.current = index;
    // },
    // leave() {
    //   this.seen = false;
    //   this.current = null;
    // },
    jump(index) {
      let self = this;
      let pach = self.options[index].pach;
      if (window.location.hash == "#" + pach) {
        self.close();
        return;
      }
      self.$store.commit("setArtistsInfo", null);
      self.$store.commit("setShowNews", false);
      self.$store.commit("setPach", pach);
      self.$store.commit("setIconBack", false);
      self.close();
      self.$router.push(pach);
    },
    closePop(data) {
      this.pop = data;
    }
  },
  components: {
    Pop
  }
};
</script>

<style lang="stylus" scoped>
.menu-main
  width 100%
  height 100%
.menu-topUl
  position absolute
  top 0
  right 0
  margin 0
  width 240px
  height 60px
  list-style-type none
  z-index 99
.menu-language
  float left
  margin 0
  padding 0
  width 60px
  height 60px
  background-size 100%
  background-position 0 200%
.menu-language:hover
  background-position 0 100%
.menu-language-active
  float left
  margin 0
  padding 0
  width 60px
  height 60px
  background-size 100%
  background-position 0 100%
.menu-quiet, .menu-active, .menu-menu
  float left
  margin 0
  padding 0
  width 60px
  height 60px
  background-size 100%
  background-position 0 200%
  text-align center
#right_menu:hover
  color #585858
  font-size 13px
  color #fff
  font-weight bold
  opacity 1
  cursor pointer
  line-height 60px
  background url('../assets/black.png') no-repeat center
  background-size cover
.menu-active, span.menu-quiet:hover
  font-size 13px
  color #fff
  font-weight bold
  opacity 1
  cursor pointer
  line-height 60px
  background url('../assets/menu/menu_lang_bg.jpg') no-repeat center
  background-size cover
.menu-menu
  background url('../assets/menu/m_menu_bg.jpg') no-repeat center
  background-size cover
.menu-news
  position absolute
  top 60px
  right 0
  margin 0
  padding 0
  width 60px
  height 60px
  background url('../assets/menu/m_hot_news.png') no-repeat center
  background-size cover
  z-index 99
.menu-news:hover
  position absolute
  top 60px
  right 0png
  margin 0
  padding 0
  width 60px
  height 60px
  background url('../assets/menu/news.png') no-repeat center
  background-size cover
  z-index 99
.menu-bottomUl
  position fixed
  left 0
  bottom 60px
  width 60px
  height 180px
  margin 0
  padding 0
  z-index 99
.menu-img
  margin 10px 0 0 0
.menu-aside
  width 475px
  height 121.5%
  background-color #000
  position absolute
  top 0px
  right 0px
  z-index 999
.menu-close
  position absolute
  top 0px
  right 0px
.menu-i
  position absolute
  top 15px
  right 15px
.menu-list
  margin-top 62px
/* Chrome, Safari, Opera */
@keyframes mymove
  0%
    background-position 200% 0
  100%
    background-position 300% 0
.menu-item
  height 125px
  background-size 200%
  background-position 200% 0
.menu-item:hover
  height 125px
  animation mymove 0.5s
  -webkit-animation mymove 0.5s /* Safari 与 Chrome */
  background-position 300% 0
.menu-itemTitle
  margin 0
  text-align right
  line-height 70px
  padding-right 90px
  font-size 58px
  color #C8B166
.menu-itemTitle-hover
  margin 0
  text-align right
  padding-right 90px
  line-height 80px
  font-size 58px
  color #000
.menu-itemText
  margin 0
  text-align right
  padding-right 90px
  font-size 24px
  line-height 28px
  color #fff
.menu-itemText-hover
  margin 0
  text-align right
  padding-right 90px
  font-size 24px
  line-height 28px
  color #000
</style>

