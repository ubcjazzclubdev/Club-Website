import { Component, Prop, Vue } from "vue-property-decorator";
import Dropdown from "bp-vuejs-dropdown";

@Component({
  components: {
    Dropdown
  }
})
@Component
export default class Header extends Vue {
  iToggle = false;
  created()
  {
    console.log(this.$router.currentRoute.path);
    const route = this.$router.currentRoute.path;
    if (route == "/")
    {
      this.iToggle = true;
    }
  }
}
