const myApp = Vue.createApp({
  data() {
    return {
      counter: 0,
      output: "",
      confirmName: "",
    };
  },
  methods: {
    confirmkeyUp() {
      this.confirmName = this.output;
    },
    add(num) {
      this.counter += num;
    },
    remove(num) {
      this.counter -= num;
    },
    change(event, lastName) {
      this.output = event.target.value + " " + lastName;
    },
    onSubmit(event) {
      // event.preventDefault();
      alert("submited");
    },
  },
});

myApp.mount("#events");
