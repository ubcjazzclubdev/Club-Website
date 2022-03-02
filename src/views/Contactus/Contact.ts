import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { defineComponent } from "vue";

interface FormElements extends HTMLFormControlsCollection {
  name : HTMLInputElement;
  subject : HTMLInputElement;
  message : HTMLTextAreaElement;
}

export default defineComponent({

  data: function() {
    return {
      bookingInfo: "",
      bookingDesc: "",
      bookingPolicy: "",
      compensation: "",

      errors: new Array<string>(),
      submitted: false
    }
  },  

  created() {
    this.bookingInfo = `
    Due to COVID-19, our bookings are closed temporarily.
    Thank you for your patience and support.
    Feel free to contact us through our email or social media
    if you have any questions.
    `;
    this.bookingDesc = `
    We offer any size of band (duos/trios/quartets, big band, etc.)
    as long as our musicians are available!
    `;
    this.bookingPolicy = `
    We accept gigs
    from any AMS and/or UBC-affiliated group
    on or off campus
    `;
    this.compensation = `
    Musicians must be compensated (monetarily or other - if specified)
    `;
  },

  methods: {
    checkForm(form : HTMLFormElement): boolean {
      const elements : FormElements = form.elements as FormElements;
      if (elements.name.value == "")
      {
        this.errors.push("Name Empty");
      }
      if (elements.subject.value == "")
      {
        this.errors.push("Subject Empty");
      }
      if (elements.message.value == "")
      {
        this.errors.push("TextArea Empty");
      }

      if (this.errors.length > 0)
      {
        return false;
      } else {
        return true;
      }
    },

    staticSubmit(e : Event) {
      const form : HTMLFormElement = e.target as HTMLFormElement;
      const sentTrue = document.querySelector(".status");

      // Clear errors on othe attempts
      this.errors = [];

      if (this.checkForm(form)) {
        form.action = "https://docs.google.com/forms/d/e/1FAIpQLScc24G44FRIWIhSidM3qM70BJbTZsJK_TOdPbdrEyyjlEJ8kw/formResponse?";
        form.submit();
        form.reset();
        sentTrue!.innerHTML = "Thank you for the response!";
        sentTrue!.classList.remove("hide");
        form.reset();
      } else {
        // let output = "Angery >:(<br/>";
        let output = "";
        this.errors.forEach(function (err) {
          output += err;
          output += "<br/>";
        });
        sentTrue!.innerHTML = output;
        sentTrue!.classList.remove("hide");
      }
    },

    sendEmail(e : Event) {
      const form : HTMLFormElement = e.target as HTMLFormElement;
      this.errors = [];

      const sentTrue = document.querySelector(".status");
      if (this.checkForm(e.target as HTMLFormElement)) {
        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target as HTMLFormElement, process.env.USER_ID)
          .then((result: EmailJSResponseStatus) => {
              console.log('SUCCESS!', result.status, result.text);
              sentTrue!.innerHTML = "Thank you for the response!";
              sentTrue!.classList.remove("hide");
          }, (error: EmailJSResponseStatus) => {
              console.log('FAILED...', error);
              sentTrue!.innerHTML = "Send error! :(";
              sentTrue!.classList.remove("hide");
          });
      } else {
        let output = "Angery >:(<br/>";
        this.errors.forEach(function (err) {
          output += err;
          output += "<br/>";
        });
        sentTrue!.innerHTML = output;
        sentTrue!.classList.remove("hide");
      }
      form.reset();
    }
  }
})
