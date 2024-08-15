const app = Vue.createApp({
  data() {
    return {
      alertContent: "hello there this is aleart",
      userInput: "",
      confirm: "",
      inputText: "",
      firstName: "",
    };
  },
  methods: {
    showAlert() {
      alert(this.alertContent);
    },
    getInputvalue(eve) {
      this.userInput = eve.target.value;
    },
    confirmkeyUp() {
      this.confirm = this.userInput;
    },
    inputText() {
      if (this.firstName === "") {
        return "";
      }
      return this.firstName + " " + "mohamed";
    },
  },
});

app.mount("#assignment");
