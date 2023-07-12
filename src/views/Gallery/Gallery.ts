import Modal from "@/components/modal/modal.vue";
import { emitter } from "@/main";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    modal: Modal,
  },

  data() {
    return {
      currImg: "",
      currIdx: 0,
      currSize: 0,
      featuredImgs: [] as Array<string>,
      timerId: 0,
    };
  },

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
    emitter.on("unhide-nav", this.toggleNavbar);
  },

  methods: {
    moveTo(refName: string): void {
      // console.log(refName);
      const el = document.querySelector(refName);
      if (el != null) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    },

    galleryNext(): void {
      // if ((this.currIdx + 1) > this.currSize) {
      //   this.currIdx = 0;
      // } else {
      //   this.currIdx++;
      // }
      this.currIdx = (this.currIdx += 1) % this.currSize;
      this.currImg = this.featuredImgs[this.currIdx];
    },

    galleryBack(): void {
      if (this.currIdx - 1 < 0) {
        this.currIdx = this.currSize;
      } else {
        this.currIdx--;
      }
      this.currImg = this.featuredImgs[this.currIdx];
    },

    getPhotos() {
      return {
        featuredPhotos: [
          require("../../assets/images/imagine_day_5.jpg"),
          require("../../assets/images/singtime.jpg"),
          require("../../assets/images/guitartime.jpg"),
        ],
      };
    },

    /**
     * Hides the mobile navbar, because of z-indicies.
     */
    toggleNavbar() {
      const nav = document.querySelector("#navigation-bar")!;
      if (nav.classList.contains("hide")) {
        nav.classList.remove("hide");
      } else {
        nav.classList.add("hide");
      }
    },

    modalImage(event: Event): void {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const image: any = event.target;
      const id = image.getAttribute("modal-id");
      emitter.emit("modal-open", id);
      this.toggleNavbar();
    },
  },
});
