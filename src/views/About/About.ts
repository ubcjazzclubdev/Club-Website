import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      description: ""
    }
  },

  created() {
    this.description = `
    UBC Jazz Club is a place for musicians and enthusiats alike to
    enjoy the warm ambience of the jazz community. We host our own
    weekly jam sessions as well as social events on occasion. We also
    offer live music for events on/off-campus hosted by a variety of
    clubs and organizations. These include an array of eclectic events
    that foster connections among our members and community, organized
    in collaboration with like-minded clubs.
    `
  }
})
