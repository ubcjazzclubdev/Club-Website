import Vue from "vue";
import VueRouter from "vue-router";

// Import components to route to
import Landing from "./views/Landing/Landing.vue";
import About from "./views/About/About.vue";
import Contact from "./views/Contactus/Contact.vue";

Vue.use(VueRouter);

// Define routes
const routes = [
  { path: "/", component: Landing },
  { path: "/about", component: About },
  { path: "/contact", component: Contact }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: "history" // get rid of the `#` symbol
});

export default router;
