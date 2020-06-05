<template>
  <div class="app" id="app">
    <Header />
    <Menu />
    <router-view></router-view>
    <Footer />
  </div>
</template>


<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Menu
  }
};
</script>

<style>
.app {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>
