import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { watch } from "vue";

export default defineComponent({
  data() {
    return {
      dToggle: false,
      imageUrl: require("../../assets/images/page_bgs/main_back.png"),
    };
  },

  created() {
    const route = useRoute();
    watch(
      () => route.path,
      async (path) => {
        if (path == "/contact") {
          this.dToggle = true;
        }
        if (path == "/about") {
          this.imageUrl = require("../../assets/images/page_bgs/about_back.jpg");
        }
        if (path == "/team") {
          this.imageUrl = require("../../assets/images/page_bgs/team_back.jpg");
        }
        if (path == "/involvement") {
          this.imageUrl = require("../../assets/images/imagine_day_1.jpg");
        }
        if (path == "/gallery") {
          this.imageUrl = require("../../assets/images/page_bgs/gallery_back.jpg");
        }
        if (path == "/events") {
          this.imageUrl = require("../../assets/images/page_bgs/events_back.jpg");
        }
      }
    );
  },
});
