import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Title extends Vue {
  dToggle = false;
  iToggle = false;
  cToggle = false;
  titleText = "";
  created() {
    console.log(this.$router.currentRoute.path);
    const route = this.$router.currentRoute.path;
    if (route == "/") {
      this.titleText = "ubc jazz club";
    } else if (route == "/contact") {
      this.dToggle = true;
    } else if (route == "/about") {
      this.titleText = "Aobutt us";
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
  }
}