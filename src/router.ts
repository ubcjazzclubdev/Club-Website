import VueRouter, { createRouter } from "vue-router";

// Import components to route to
import Landing from "./views/Landing/Landing.vue";
import About from "./views/About/About.vue";
import Contact from "./views/Contactus/Contact.vue";
import Team from "./views/Team/Team.vue";
import Involved from "./views/Involvement/Involvement.vue";
import Events from "./views/Events/Events.vue";
import Gallery from "./views/Gallery/Gallery.vue";

// Define routes
const routes = [
  { path: "/", component: Landing },
  { path: "/about", component: About },
  { path: "/team", component: Team},
  { path: "/involvement", component: Involved},
  { path: "/gallery", component: Gallery },
  { path: "/contact", component: Contact },
  { path: "/events", component: Events }
];

const router = createRouter({
  routes, // short for `routes: routes`
  history: VueRouter.createWebHashHistory(),
});

export default router;
