import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import mitt, { Emitter } from "mitt";

type Events = {
  "modal-open": string;
  "unhide-nav": boolean;
};

export const emitter: Emitter<Events> = mitt<Events>();
const app = createApp(App).use(Router);
app.config.globalProperties.emitter = emitter;
app.mount("#app");
/*export const bus = new Vue();

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  router: Router,
  render: h => h(App)
}).$mount("#app");*/
