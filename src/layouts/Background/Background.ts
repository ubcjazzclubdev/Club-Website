import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Background extends Vue {
  dToggle = false;
  imageUrl = "";
  created() {
    console.log(this.$router.currentRoute.path);
    const route = this.$router.currentRoute.path;
    if (route == "/contact") {
      this.dToggle = true;
    }
  }
}
