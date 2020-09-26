import { Component, Prop, Vue } from "vue-property-decorator";
import Modal from '@/components/modal/modal.vue'


@Component
// ({
//   components: {
//       'modal': Modal
//   }
// })
export default class Gallery extends Vue {

  currImg = "";
  currIdx = 0;
  currSize = 0;
  featuredImgs : string[] = [];

  moveTo(refName : string) : void {
    // console.log(refName);
    const el = document.querySelector(refName);
    if (el != null) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }

  galleryNext() : void {
    if ((this.currIdx + 1) > this.currSize) {
      this.currIdx = 0;
    } else {
      this.currIdx++;
    }
    this.currImg = this.featuredImgs[this.currIdx];
  }

  galleryBack() : void {
    if ((this.currIdx - 1) < 0) {
      this.currIdx = this.currSize;
    } else {
      this.currIdx--;
    }
    this.currImg = this.featuredImgs[this.currIdx];
  }

  created() {
    this.featuredImgs = this.getPhotos().featuredPhotos as string[];
    this.currImg = this.featuredImgs[this.currIdx];
    this.currSize = this.featuredImgs.length - 1;
  }

  getPhotos() {
    return {
      featuredPhotos : [
        require("../../assets/images/imagine_day_5.jpg"),
        require("../../assets/images/singtime.jpg"),
        require("../../assets/images/guitartime.jpg"),
      ]
    }
  }
}
