import Vue from "vue";
import App from "./App.vue";
import Router from "./router";

Vue.config.productionTip = false;
export const bus = new Vue();

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  router: Router,
  render: h => h(App)
}).$mount("#app");
