<template>
  <div class="footer-bg">
    <p class="footer-p">
      杰威尔音乐有限公司
      <span class="footer-span">© Copyright2019</span>
      <span class="footer-span">台北市松山区长春路451号11楼</span>
      <span class="footer-span">886-2-2547-5588</span>
      <img src="../assets/mail_icon_m.png" class="footer-img" alt=" " />
      <span class="footer-sp" style="color:#E2C891;margin:0 10px 0 10px">/</span>
      <a class="footer-sp">版权及隐私保护</a>
    </p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Footer",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
.footer-bg
  position fixed
  bottom 0
  left 0
  width 100%
  height 60px
  z-index 99
  background-color #fff
.footer-p
  margin 0 60px 0 60px
  height 100%
  color #000
  font-size 13px
  text-align start
  line-height 60px
.footer-span
  margin 0 0 0 5px
.footer-sp
  float right
.footer-img
  float right
  margin 25px 0 15px 0
  width 15px
  height 10px
</style>
