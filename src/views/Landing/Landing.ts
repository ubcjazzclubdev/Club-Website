import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "../../layouts/Header/Header.vue";

@Component({
  components: {
    Header
  }
})
@Component
export default class Landing extends Vue {
  redirect() {
    window.location.href = "/events";
  }
}
