import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import mitt, { Emitter } from "mitt";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faDiscord, faFacebook, faInstagram, faEnvelope, faLocationDot);

type Events = {
  "modal-open": string;
  "unhide-nav": boolean;
};

export const emitter: Emitter<Events> = mitt<Events>();
const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(Router);
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
