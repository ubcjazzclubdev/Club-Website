import { Component, Vue } from "vue-property-decorator";
import Modal from '@/components/modal/modal.vue'
import { bus } from "@/main";

@Component
({
  components: {
      'modal': Modal
  },
})

export default class Gallery extends Vue {
  currImg = "";
  currIdx = 0;
  currSize = 0;
  featuredImgs : string[] = [];
  timerId = 0;

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
    // if ((this.currIdx + 1) > this.currSize) {
    //   this.currIdx = 0;
    // } else {
    //   this.currIdx++;
    // }
    this.currIdx = (this.currIdx += 1) % this.currSize
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

  /**
   * Gets all the featured photos
   * Sets currentsize to featuredImgs.length for ease of access
   * Sets featured images to auto change on a timer
   */
  created() {
    this.featuredImgs = this.getPhotos().featuredPhotos as string[];
    this.currImg = this.featuredImgs[this.currIdx];
    this.currSize = this.featuredImgs.length;
    this.timerId = setInterval(this.galleryNext, 5000);
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

  modalImage(event: any) : void  {
    const image:any = event.target;
    const id = image.getAttribute("modal-id");
    bus.$emit("modal-open", id);
  }
}
