import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  scrollToTop(): void {
    // Find the div#app element and scroll to it
    const element = this.$parent.$root.$el;
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
