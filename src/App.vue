<template>
  <div id="app">
    <JazzHeader />
    <JazzTitle />
    <Background />
    <router-view></router-view>
    <JazzFooter />
  </div>
</template>

<script lang="ts">
import JazzHeader from "./layouts/Header/JazzHeader.vue";
import JazzTitle from "./layouts/Title/JazzTitle.vue";
import JazzFooter from "./layouts/Footer/JazzFooter.vue";
import Background from "./layouts/Background/Background.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    JazzHeader,
    JazzTitle,
    JazzFooter,
    Background,
  },
});
</script>

<style lang="scss">
@use "./assets/styles/variables.scss";
@use "./assets/styles/styles.scss";
@use "./assets/fonts/fonts.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #333333;
  position: relative;
  height: 100%;
  margin: 0 auto;
}
</style>
