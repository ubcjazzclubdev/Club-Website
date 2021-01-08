import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Team extends Vue {
  eEggClass = "meme";
  eEggCount = 30;
  description = "";
  clickCount = 0;

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

  count(e : Event) {
    const sFrame = e.target as HTMLDivElement;
    const sPortrait = sFrame.parentElement as HTMLDivElement;
    this.clickCount += 1;
    if (this.clickCount >= this.eEggCount) {
      this.togglePicture(sPortrait);
    }
  }

  togglePicture(selectedDiv : HTMLDivElement) {
    if (selectedDiv.classList.contains(this.eEggClass)) {
      selectedDiv.classList.remove(this.eEggClass);
    } else {
      selectedDiv.classList.add(this.eEggClass);
    }
  }
}
