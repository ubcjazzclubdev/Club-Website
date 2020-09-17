import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Background extends Vue {
  dToggle = false;
  imageUrl = require("../../assets/main_back.png");

  created() 
  {
    console.log(this.$router.currentRoute.path);
    const route = this.$router.currentRoute.path;
    if (route == "/contact")
    {
      this.dToggle = true;
    }
    if (route == "/about")
    {
      this.imageUrl = require("../../assets/about_back.jpg");
    }
  }
}
