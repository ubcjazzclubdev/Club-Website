import { defineComponent } from "vue";

export default defineComponent({
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
})
