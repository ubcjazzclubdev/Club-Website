<template>
  <div id="app">
    <Header />
    <Title />
    <Background />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./layouts/Header/Header.vue";
import Title from "./layouts/Title/Title.vue";
import Footer from "./layouts/Footer/Footer.vue";
import Background from "./layouts/Background/Background.vue";

@Component({
  components: {
    Header,
    Title,
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

  min-width: 1280px;
  max-width: 1920px;
  max-height: 1080px;
  min-height: 800px;
  margin: 0 auto;
}

@media screen and (min-width: 320px) and (max-width: 767px) {
}
</style>
