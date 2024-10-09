import { emitter } from "@/main";
import { defineComponent } from "vue";

interface ModalData {
  modalState: boolean;
  // Intermediary var to prevent multiple require calls
  allSrcs: string[][];

  displayList: string[];
  currElement: null | HTMLElement;
  modId: number;
  currImg: string;
  currIdx: number;
  currSize: number;
  currLen: number;
}

/**
 * Simple modal component
 * For gallery browsing
 */

export default defineComponent({
  name: "modal",
  props: {
    modalId: String,
  },
  data: function (): ModalData {
    return {
      modalState: false,
      // Intermediary var to prevent multiple require calls
      allSrcs: [] as Array<Array<string>>,

      displayList: [] as Array<string>,
      currElement: null,
      modId: 0,
      currImg: "",
      currIdx: 0,
      currSize: 0,
      currLen: 0,
    };
  },

  created() {
    this.allSrcs = this.getData();
    emitter.on("modal-open", this.callback);
  },

  updated() {
    this.updateSlide();
  },

  destroy() {
    emitter.off("modal-open", this.callback);
    this.displayList = [];
  },

  hide(): void {
    this.$data.modalState = false;
    emitter.emit("unhide-nav", this.$data.modalState);
  },

  methods: {
    /**
     * Update the focus of the gallery
     * @param newEl New element in focus
     */
    updateFocus(newEl: HTMLElement) {
      if (this.currElement != null) {
        this.currElement.classList.remove("focus");
        this.currElement = newEl;
      } else {
        this.currElement = newEl;
      }
      newEl.classList.add("focus");
    },

    /* readJson(file: File) {
      // To-Do
    }, */

    /**
     * Next slide scroll
     */
    nextSlide(): void {
      if (this.currIdx + 1 > this.currLen) {
        this.currIdx = 0;
      } else {
        this.currIdx++;
      }
      this.currImg = this.displayList[this.currIdx];
      this.updateSlide();
    },

    /**
     * Prev slide scroll
     */
    prevSlide() {
      if (this.currIdx - 1 < 0) {
        this.currIdx = this.currLen;
      } else {
        this.currIdx--;
      }
      this.currImg = this.displayList[this.currIdx];
      this.updateSlide();
    },

    /**
     * Update the slides after next/prev
     */
    updateSlide() {
      // Check if modal has been loaded
      if (this.displayList.length == 0) {
        return;
      }

      let parent: Element | null;
      if (this.currElement == null) {
        parent = document.getElementsByClassName("thumbnails")[this.modId];
      } else {
        parent = this.currElement!.parentElement;
      }
      const tempEl = parent!.children[this.currIdx] as HTMLElement;
      this.updateFocus(tempEl);
      tempEl.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    },

    /**
     * Finds the index of the thumbnail slide according to its
     * parent element
     *
     * @param slide The thumbnail slide
     */
    getSlideIndex(slide: HTMLElement): number {
      const parent = slide.parentNode;
      const temp = Array.prototype.indexOf.call(parent!.children, slide);
      return temp;
    },

    /**
     * Set slide according to which thumbnail the user clicked
     * @param e Click event
     */
    setSlide(e: Event) {
      const selected = e.target as HTMLElement;

      this.currIdx = this.getSlideIndex(selected);

      this.currImg = this.displayList[this.currIdx];
      this.updateFocus(selected);
    },

    /**
     * Returns the image sources for the entire gallery
     * Should be a better way of doing this?
     */
    getData() {
      return [
        [
          require("../../assets/images/Gala/Gala0.jpg"),
          require("../../assets/images/Gala/Gala1.jpg"),
          require("../../assets/images/Gala/Gala2.jpg"),
          require("../../assets/images/Gala/Gala3.jpg"),
          require("../../assets/images/Gala/galacover.jpg"),
        ],
        [
          require("../../assets/images/Jazz_101/101cover.jpg"),
          require("../../assets/images/Jazz_101/101a.jpg"),
          require("../../assets/images/Jazz_101/101b.jpg"),
          require("../../assets/images/Jazz_101/101c.jpg"),
          require("../../assets/images/Jazz_101/101d.jpg"),
          require("../../assets/images/Jazz_101/101e.jpg"),
          require("../../assets/images/Jazz_101/101f.jpg"),
          require("../../assets/images/Jazz_101/101g.jpg"),
          require("../../assets/images/Jazz_101/101h.jpg"),
          require("../../assets/images/Jazz_101/101i.jpg"),
          require("../../assets/images/Jazz_101/101j.jpg"),
          require("../../assets/images/Jazz_101/101k.jpg"),
          require("../../assets/images/Jazz_101/101l.jpg"),
        ],
        [
          require("../../assets/images/weekly_jams/weekly_1.jpg"),
          require("../../assets/images/weekly_jams/weekly_2.jpg"),
          require("../../assets/images/weekly_jams/weekly_3.jpg"),
          require("../../assets/images/weekly_jams/weekly_4.jpg"),
          require("../../assets/images/weekly_jams/weekly_5.jpg"),
          require("../../assets/images/weekly_jams/weekly_6.jpg"),
        ],
      ];
    },

    /**
     * Callback function to determine which modal the user clicked
     *
     * @param id Modal id
     */
    callback(id: string): void {
      if (id === this.$props.modalId) {
        this.modId = +id.split("-")[1]; // Modal id for differing albums, Integer

        const albumSrc: string[] = this.allSrcs[this.modId] as string[];
        this.displayList = albumSrc;
        this.currImg = this.displayList[this.currIdx];
        this.currSize = this.displayList.length;
        this.currLen = this.currSize - 1;

        this.$data.modalState = true;
      }
    },
  },
});
