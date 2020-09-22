import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Involvement extends Vue {

  moveTo(refName : string) : void {
    // console.log(refName);
    const el = document.querySelector(refName);
    if (el != null)
    {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }
}
