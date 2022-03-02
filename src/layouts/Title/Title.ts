import { defineComponent, watch } from "vue";

export default defineComponent({
  data() {
    return {
      dToggle: false,
      iToggle: false,
      cToggle: false,
      titleText: ""
    }
  },
  created() {
    watch(() => this.$router.currentRoute, newRoute => {
      const route = newRoute.value.path;
      if (route == "/") {
        this.titleText = "ubc jazz club";
      } else if (route == "/contact") {
        this.dToggle = true;
      } else if (route == "/about") {
        this.titleText = "about us";
        this.iToggle = true;
        this.cToggle = true;
      } else if (route == "/team") {
        this.titleText = "our team";
        this.iToggle = true;
        this.cToggle = true;
      } else if (route == "/involvement") {
        this.titleText = "get involved";
        this.iToggle = true;
        this.cToggle = true;
      } else if (route == "/gallery") {
        this.titleText = "gallery";
        this.iToggle = true;
        this.cToggle = true;
      } else if (route == "/events") {
        this.titleText = "events";
        this.iToggle = true;
        this.cToggle = true;
      }
    })
  }
})
