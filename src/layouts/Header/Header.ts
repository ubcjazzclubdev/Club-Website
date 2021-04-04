import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  iToggle = false;
  created() {
    const route = this.$router.currentRoute.path;
    if (route == "/") {
      this.iToggle = true;
    }
    
    window.addEventListener("load", function() {
      const dropdown = document.querySelector('.dropdown');
      const list = document.querySelector('.dropdown-list');
      if (dropdown != null && list != null) {
        dropdown.addEventListener('mouseover', function () {
          dropdown.classList.add("selected");
          list.classList.remove("hide");
        });
        dropdown.addEventListener('mouseout', function () {
          dropdown.classList.remove("selected");
          list.classList.add("hide");
        });
      }
    });
  }

  async displayMenu() {
    const wrapper = document.querySelector('.side-menu-wrapper')!;
    const menu = document.querySelector('.side-menu')!;
    if (wrapper.classList.contains("hide")) {
      wrapper.classList.remove("hide");
      menu.setAttribute("style", "transform: translate(0vw);");
    }
    else {
      menu.setAttribute("style", "transform: translate(-70vw);");
      await this.sleep(800);
      wrapper.classList.add("hide");
    }
  }

  sleep(ms : number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
