<template>
  <div class="home-div" id="header">
    <Banner />
  </div>
</template>

<script type="text/javascript">
import Banner from "../components/Banner.vue";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Banner
  },
  created() {
  }
};
</script>

<style lang="stylus" scoped>
.home-div
  width 100%
  height 100%
</style>
