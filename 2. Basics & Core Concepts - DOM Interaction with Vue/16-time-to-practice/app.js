const app = Vue.createApp({
  data() {
    return {
      alertContent: "hello there this is aleart",
      userInput: "",
      confirm: "",
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
  },
});

app.mount("#assignment");
