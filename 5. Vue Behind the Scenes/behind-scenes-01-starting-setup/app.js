const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput() {
      // this.currentUserInput = event.target.value;

      this.currentUserInput = `this.$userInput`;
    },
    setText() {
      console.log();
      // this.message = this.currentUserInput;
      this.message = this.$refs.userInput.value;
    },
  },
});

app.mount("#app");
