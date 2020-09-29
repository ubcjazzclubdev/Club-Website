import { Vue, Component, Prop, Watch } from 'vue-property-decorator'


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
  name: 'modal'
})
export default class Modal extends Vue {
  modalState = false;

  // created() {
  //   this.$eventBus.$on('modal-open', key => this.isForThisModal(key).then(this.openModal).catch(() => { /* do nothing */}));
  //   this.$eventBus.$on('modal-close', key => this.isForThisModal(key).then(this.closeButtonPressed).catch(() => { /* do nothing */}));
  //   this.$eventBus.$on('modal-close-all', this.closeModal);
  // }

  // beforeDestroy() {
  //   this.$eventBus.$off('modal-open', key => this.isForThisModal(key).then(this.openModal).catch(() => { /* do nothing */}));
  //   this.$eventBus.$off('modal-close', key => this.isForThisModal(key).then(this.closeButtonPressed).catch(() => { /* do nothing */}));
  //   this.$eventBus.$off('modal-close-all', this.closeModal);
  // }
}