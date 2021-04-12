import { Component, Prop, Vue } from "vue-property-decorator";

interface FormElements extends HTMLFormControlsCollection {
  email : HTMLInputElement;
}

@Component
export default class Footer extends Vue {
  email = "jazzclububc@gmail.com";
  lnk_insta = "@ubcjazzclub";
  lnk_fb = "ubc jazz club"
  room = "Room 3206D";
  address = "AMS Student Nest 6133 University Blvd, Vancouver, BC V6T 1Z1";
  copyright = "copyright ubcjazzclub 2021";

  created() {
    // to-do
  }

  scrollToTop(): void {
    // Find the div#app element and scroll to it
    const element = this.$parent.$root.$el;
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  /*
   * Modified version of the contact us form.
   * Uses name field on google form as 
   */
  staticSubmit(e : Event): void {
    const form : HTMLFormElement = e.target as HTMLFormElement;
    const elements : FormElements = form.elements as FormElements;
    // console.log(elements.email.value);
    form.action = "https://docs.google.com/forms/d/e/1FAIpQLSdANikULQYuHmxoWLfWOw2t2a1vNcRf6bSbUXk8OSR613sTpw/formResponse?";
    if (elements.email.value != "") {
      form.submit();
      form.reset();
      elements.email.placeholder = "Sent!";
    } else {
      elements.email.placeholder = "Empty Email!";
    }
  }
}
