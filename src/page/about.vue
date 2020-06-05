<template>
  <div id="about" class="about">
    <PageTitle :info="info" />
    <div class="about-div">
      <b>
        <p class="about-title-jvr">杰威尔音乐</p>
      </b>
      <img src="../assets/about/about_hr.png" class="about-img" alt=" " />
      <p class="about-p" v-for="(item,index) in content" :key="index">{{item.p}}</p>
      <img src="../assets/about/about_hr.png" class="about-img" alt=" " />
    </div>
  </div>
</template>

<script type="text/javascript">
import PageTitle from "../components/PageTitle";
export default {
  name: "about",
  components: {
    PageTitle
  },
  data() {
    return {
      content: [
        {
          p:
            "杰威尔音乐有限公司乃源自英文名JVR Music的音译而来，而JVR则是周杰伦〈Jay〉与多年的合作伙伴方文山〈Vincent〉、杨峻荣〈JR〉三人英文名缩写的组合，一如周杰伦坚持的音乐质量，这支「金三角」组合的黄金团队，未来仍将继续带领众多Fans遨游无限的影音世界！"
        },
        {
          p:
            "JVR Music的名称是来自三人英文名的缩写，但是杨峻荣总经理对于JVR也有更深一层的解释，JVR=Just Very Romantic，他表示，JVR是一个不同于一般的唱片公司，我们有很大的浪漫成份，这个浪漫不是指粉红色的浪漫，而是指我们对于创作者的尊重与照顾，不是什么都以商业考虑，也许公司不会签非常多的艺人，但是每个被JVR签下的艺人，一定会得到公司最大的照顾，我们希望在给予最大的支持之下，每位JVR的艺人都能将自己的创意发挥到最大，也欢迎所有对于音乐有想法有创意的朋友将自己介绍给JVR，非常欢迎有机会你们能成为JVR的一份子，也不要害怕或吝惜将你自己与你的作品介绍给我们!"
        },
        {
          p:
            "JVR音乐与JVR官网更提供所有关心JVR艺人的Fans与喜欢音乐的朋友一个畅通的交流园地，欢迎所有朋友在这个园地中开心快乐的凝聚热爱音乐的力量，我们也将尽我们最大的努力提供最好的服务与响应，也请将你们的意见与想法告诉我们，你们不间断的支持与鼓励将会是JVR持续坚持制作好音乐与不断往前的最大动力与勇气!"
        }
      ],
      info: {
        img: require("../assets/about/about_title.png"),
        title: "关于JVR"
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.about
  width 93.12%
  height 800px
  margin -7.7px 60px 60px 52.3px
  background-color #EDEDED
.about-title-img
  margin 30px 15px 0 30px
  width auto
  height auto
  display inline-block
.about-title
  position absolute
  top 127px
  font-size 28px
  color #000
  font-weight bold
  display inline-block
  letter-spacing 5px // 字间距
.about-line-img
  width 95%
  height auto
  padding 0 30px
.about-div
  text-align center
.about-title-jvr
  margin-top 110px
  font-size 26px
  letter-spacing 2px
.about-img
  width 60px
  height auto
.about-p
  font-size 15.4px
  color #000
  padding 15px 230px
  text-align left
</style>
