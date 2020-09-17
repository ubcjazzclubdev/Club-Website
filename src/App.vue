<template>
  <div id="app">
    <Header />
    <Background />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./layouts/Header/Header.vue";
import Footer from "./layouts/Footer/Footer.vue";
import Background from "./layouts/Background/Background.vue";

@Component({
  components: {
    Header,
    Footer,
    Background
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/styles/variables.scss";
@import "./assets/fonts/fonts.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #333333;
  position: relative;
  height: 100%;
}
</style>
