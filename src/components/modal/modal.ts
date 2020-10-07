import { Vue, Component} from 'vue-property-decorator'
import {bus} from "@/main";


/**
 * This component displays 2 types of modal. Full Screen and a confirmation type modal.
 * 
 * How to use full screen modal:
 *    Simply use <modal></modal> in any template, and it's content will be displayed as a full modal.
 *    ID for <modal></modal> must be provided, because the modal is opened/closed based on the URL. 
 *    If a flag (ie. ?modal-add-from) is present in the URL, the modal `<modal id="modal-add-form" />` will be displayed.
 * 
 * How to use confirmation modal:
 *    Same as full screen modal. Only difference is how you'd listen to weather 'Accept' or 'Decline' is clicked. 
 *    When a confiramation modal is closed, it will send an event named '{modal-id}-closed' to the eventBus with a boolean 
 *    value. True indicates modal was accepted, false indicates modal was declined.
 *   
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
  confirmationModal = false;
  callback(id: string) : void {
    if(id === this.$props.modalId) {
      console.log("callback "+id);
      this.$data.modalState = true;
    }
  };

  created() {
    bus.$on('modal-open', this.callback);
  }

  destroy() {
    bus.$off('modal-open', this.callback);
  }

  hide() : void {
    console.log("hide");
    this.$data.modalState = false;
  }
}