import { Vue, Component} from 'vue-property-decorator'
import {bus} from "@/main";


/**
 * Simple modal component
 * For gallery browsing
 */
@Component({
  name: 'modal',
  props: ["modal-id"],
  data: function () {
    return {
      modalState: false
    }
  },
})

export default class Modal extends Vue {
  // Intermediary var to prevent multiple require calls
  allSrcs : string[][] = [];

  displayList : string[] = [];
  currElement : HTMLElement | null = null;
  modId = 0;
  currImg = "";
  currIdx = 0;
  currSize = 0;
  currLen = 0;

  /**
   * Callback function to determine which modal the user clicked
   * 
   * @param id Modal id
   */
  callback(id: string) : void {
    if(id === this.$props.modalId) {
      // console.log("callback "+id);

      this.modId = +id.split("-")[1]; // Modal id for differing albums, Integer

      const albumSrc : string[] = this.allSrcs[this.modId] as string[];
      this.displayList = albumSrc;
      this.currImg = this.displayList[this.currIdx];
      this.currSize = this.displayList.length;
      this.currLen = this.currSize - 1;


      this.$data.modalState = true;
    }
  }

  /**
   * Next slide scroll
   */
  nextSlide() : void {
    if ((this.currIdx + 1) > this.currLen) {
      this.currIdx = 0;
    } else {
      this.currIdx++;
    }
    this.currImg = this.displayList[this.currIdx];
    this.updateSlide();
  }

  /**
   * Prev slide scroll
   */
  prevSlide() {
    if ((this.currIdx - 1) < 0) {
      this.currIdx = this.currLen;
    } else {
      this.currIdx--;
    }
    this.currImg = this.displayList[this.currIdx];
    this.updateSlide();
  }

  /**
   * Update the slides after next/prev
   */
  updateSlide() {
    let parent : Element | null;
    if (this.currElement == null) {
      parent = document.getElementsByClassName("thumbnails")[this.modId];
    } else {
      parent = this.currElement!.parentElement;
    }
    const tempEl = parent!.children[this.currIdx] as HTMLElement;
    this.updateFocus(tempEl);
    tempEl.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }

  /**
   * Update the focus of the gallery
   * @param newEl New element in focus
   */
  updateFocus(newEl : HTMLElement) {
    if (this.currElement != null) {
      this.currElement.classList.remove("focus");
      this.currElement = newEl;
    } else {
      this.currElement = newEl;
    }
    newEl.classList.add("focus");
  }

  /**
   * Set slide according to which thumbnail the user clicked
   * @param e Click event
   */
  setSlide(e : Event) {
    const selected = e.target as HTMLElement;

    this.currIdx = this.getSlideIndex(selected);

    this.currImg = this.displayList[this.currIdx];
    this.updateFocus(selected);
  }

  created() {
    this.allSrcs = this.getData();
    bus.$on('modal-open', this.callback);
  }

  updated() {
    this.updateSlide();
  }

  destroy() {
    bus.$off('modal-open', this.callback);
    this.displayList = [];
  }

  hide() : void {
    this.$data.modalState = false;
  }

  readJson(file : File) {
    // To-Do
  }

  /**
   * Finds the index of the thumbnail slide according to its
   * parent element
   * 
   * @param slide The thumbnail slide
   */
  getSlideIndex(slide : HTMLElement) : number {
    const parent = slide.parentNode; 
    const temp = Array.prototype.indexOf.call(parent!.children, slide);
    return temp;
  }

  /**
   * Returns the image sources for the entire gallery
   * Should be a better way of doing this?
   */
  getData() {
    return [
      [
        require("../../assets/images/cozy_christmas/cozy_christmas_1.jpg"),
        require("../../assets/images/cozy_christmas/cozy_christmas_2.jpg"),
        require("../../assets/images/cozy_christmas/cozy_christmas_3.jpg"),
        require("../../assets/images/cozy_christmas/cozy_christmas_4.jpg"),
        require("../../assets/images/cozy_christmas/cozy_christmas_5.jpg"),
        require("../../assets/images/cozy_christmas/cozy_christmas_6.jpg"),
        require("../../assets/images/cozy_christmas/cozy_christmas_7.jpg"),
        require("../../assets/images/cozy_christmas/cozy_christmas_8.jpg"),
        require("../../assets/images/cozy_christmas/cozy_christmas_9.jpg"),
        require("../../assets/images/cozy_christmas/cozy_christmas_10.jpg"),
        require("../../assets/images/cozy_christmas/cozy_christmas_11.jpg"),
        require("../../assets/images/cozy_christmas/cozy_christmas_12.jpg"),
        require("../../assets/images/cozy_christmas/cozy_christmas_13.jpg"),
        require("../../assets/images/cozy_christmas/cozy_christmas_14.jpg"),
        require("../../assets/images/cozy_christmas/cozy_christmas_15.jpg"),
        require("../../assets/images/cozy_christmas/cozy_christmas_16.jpg"),
        require("../../assets/images/cozy_christmas/cozy_christmas_17.jpg"),
      ],
      [
        require("../../assets/images/imagine_day/imagine_day_1.jpg"),
        require("../../assets/images/imagine_day/imagine_day_2.jpg"),
        require("../../assets/images/imagine_day/imagine_day_3.jpg"),
        require("../../assets/images/imagine_day/imagine_day_4.jpg"),
        require("../../assets/images/imagine_day/imagine_day_5.jpg"),
        require("../../assets/images/imagine_day/imagine_day_6.jpg"),
        require("../../assets/images/imagine_day/imagine_day_7.jpg"),
        require("../../assets/images/imagine_day/imagine_day_8.jpg")
      ],
      [
        require("../../assets/images/weekly_jams/weekly_1.jpg"),
        require("../../assets/images/weekly_jams/weekly_3.jpg"),
        require("../../assets/images/weekly_jams/weekly_4.jpg"),
        require("../../assets/images/weekly_jams/weekly_6.jpg"),
        require("../../assets/images/weekly_jams/weekly_7.jpg"),
        require("../../assets/images/weekly_jams/weekly_8.jpg"),
        require("../../assets/images/weekly_jams/weekly_9.jpg"),
        require("../../assets/images/weekly_jams/weekly_10.jpg"),
        require("../../assets/images/weekly_jams/weekly_11.jpg"),
        require("../../assets/images/weekly_jams/weekly_12.jpg"),
        require("../../assets/images/weekly_jams/weekly_13.jpg"),
        require("../../assets/images/weekly_jams/weekly_14.jpg"),
        require("../../assets/images/weekly_jams/weekly_15.jpg"),
        require("../../assets/images/weekly_jams/weekly_16.jpg"),
        require("../../assets/images/weekly_jams/weekly_17.jpg"),
        require("../../assets/images/weekly_jams/weekly_18.jpg"),
        require("../../assets/images/weekly_jams/weekly_19.jpg"),
        require("../../assets/images/weekly_jams/weekly_20.jpg"),
        require("../../assets/images/weekly_jams/weekly_21.jpg"),
        require("../../assets/images/weekly_jams/weekly_22.jpg"),
        require("../../assets/images/weekly_jams/weekly_23.jpg"),
        require("../../assets/images/weekly_jams/weekly_24.jpg"),
        require("../../assets/images/weekly_jams/weekly_25.jpg"),
        require("../../assets/images/weekly_jams/weekly_26.jpg"),
        require("../../assets/images/weekly_jams/weekly_27.jpg"),
        require("../../assets/images/weekly_jams/weekly_28.jpg"),
        require("../../assets/images/weekly_jams/weekly_29.jpg"),
        require("../../assets/images/weekly_jams/weekly_30.jpg"),
        require("../../assets/images/weekly_jams/weekly_31.jpg"),
        require("../../assets/images/weekly_jams/weekly_32.jpg"),
        require("../../assets/images/weekly_jams/weekly_33.jpg"),
        require("../../assets/images/weekly_jams/weekly_34.jpg"),
        require("../../assets/images/weekly_jams/weekly_35.jpg"),
        require("../../assets/images/weekly_jams/weekly_36.jpg"),
        require("../../assets/images/weekly_jams/weekly_37.jpg"),
        require("../../assets/images/weekly_jams/weekly_38.jpg"),
        require("../../assets/images/weekly_jams/weekly_39.jpg"),
      ],
    ]
  }
}