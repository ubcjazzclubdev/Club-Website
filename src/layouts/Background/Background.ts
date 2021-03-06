import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Background extends Vue {
  dToggle = false;
  imageUrl = require("../../assets/images/page_bgs/main_back.png");

  created() {
    const route = this.$router.currentRoute.path;
    if (route == "/contact") {
      this.dToggle = true;
    }
    if (route == "/about") {
      this.imageUrl = require("../../assets/images/page_bgs/about_back.jpg");
    }
    if (route == "/team") {
      this.imageUrl = require("../../assets/images/page_bgs/team_back.jpg");
    }
    if (route == "/involvement") {
      this.imageUrl = require("../../assets/images/imagine_day_1.jpg");
    }
    if (route == "/gallery") {
      this.imageUrl = require("../../assets/images/page_bgs/gallery_back.jpg");
    }
    if (route == "/events") {
      this.imageUrl = require("../../assets/images/page_bgs/events_back.jpg");
    }
  }
}
