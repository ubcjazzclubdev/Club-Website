import { Component, Prop, Vue } from "vue-property-decorator";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

interface FormElements extends HTMLFormControlsCollection {
  name : HTMLInputElement;
  subject : HTMLInputElement;
  message : HTMLTextAreaElement;
}

@Component
export default class Contact extends Vue {

  errors : string[] = [];

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
  }

  sendEmail(e : Event) {
    const form : HTMLFormElement = e.target as HTMLFormElement;
    console.log(process.env.USER_ID);
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
