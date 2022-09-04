import { defineComponent } from "vue";

export default defineComponent({
  redirect() {
    window.location.href = "/gallery";
  },

  mounted() {
    return;
  },
});
