import { Component, Vue } from "vue-property-decorator";
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
    window.addEventListener("load", function() {
      const dropdown = document.querySelector('.dropdown');
      const list = document.querySelector('.dropdown-list');
      if (dropdown != null && list != null) {
        dropdown.addEventListener('mouseover', function () {
          list.classList.remove("hide");
        });
        dropdown.addEventListener('mouseout', function () {
          list.classList.add("hide");
        });
      }
    });
  }
}
