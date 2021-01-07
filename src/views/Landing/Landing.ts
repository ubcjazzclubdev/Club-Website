import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Landing extends Vue {
  redirect() {
    window.location.href = "/gallery";
  }

  mounted() {
    return;
  }
}
