export default class RegistrationForm {
  constructor() {
    this.allFields = document.querySelectorAll("#registration-form .form-control");
    this.insertValidationElements();
    this.username = document.querySelector("#username-register");
    this.username.previousValue = "";
    this.events();
  }

  // Events
  events() {
    this.username.addEventListener("keyup", () => {
      this.isDifferent(this.username, this.usernameHandler);
    });
  }

  // Methods
  isDifferent(el, handler) {
    if (el.previousValue != el.value) {
      handler.call();
    }
    el.previousValue = el.value;
  }

  usernameHandler() {
    alert("UsernameHANDLER just ran");
    this.usernameImmediately();
    // clearTimeout(this.username.timer);
    // this.username.timer = setTimeout(() => this.usernameAfterDelay(), 2000);
  }

  usernameImmediately() {
    console.log("Coming at you from the usernameImmediately function");
    alert("UsernameImmediately just ran");
  }

  // usernameAfterDelay() {
  //   alert("Delayed username just ran");
  // }

  insertValidationElements() {
    this.allFields.forEach(function (el) {
      el.insertAdjacentHTML("afterend", "<div class='alert alert-danger small liveValidateMessage'></div>");
    });
  }
}
