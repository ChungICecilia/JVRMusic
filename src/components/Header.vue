<template>
  <div class="header-bg" id="header">
    <div class="header-heade clear">
      <img src="../assets/m_logo.jpg" class="header-logo" alt=" " />
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Header",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
.header-bg
  position relative
  top -7.7px
  left -7.7px
  width 100%
  height 60px
  z-index 99
  background-color #fff
.header-heade
  width 1200px
  position relative
  margin 0 auto
  margin-top 0
  height 60px
  z-index 100
.header-logo
  position absolute
  height 60px
  margin-left 48.5%
</style>
