import { defineComponent } from "vue";
import { useRoute } from 'vue-router';
import { watch } from 'vue';

export default defineComponent({
  data() {
    return {
      iToggle: false
    }
  },
  created() {
    this.iToggle = true;
    const route = useRoute();
    watch(
      () => route.path,
      async newPath => {
        if(newPath != "/") {
          this.iToggle = false;
        }
      }
    )
    
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
  },
  
  methods: {
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
    },

    async displayDrop() {
      const dropdown = document.querySelector('.side-dropdown')!;
      const arrow = document.querySelector('.arrow')!;
      if (dropdown.classList.contains("none")) {
        dropdown.classList.remove("none");
        await this.sleep(50);
        dropdown.setAttribute("style", "transform: translateY(0vh);");
        arrow.setAttribute("style", "transform: rotate(90deg);");
      }
      else {
        arrow.setAttribute("style", "transform: rotate(0deg);");
        dropdown.setAttribute("style", "transform: translateY(-20vh);");
        await this.sleep(300);
        dropdown.classList.add("none");
      }
    },

    sleep(ms : number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
})
