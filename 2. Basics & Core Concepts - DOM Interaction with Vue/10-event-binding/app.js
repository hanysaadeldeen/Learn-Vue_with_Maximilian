const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      output: "",
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    remove(num) {
      this.counter -= num;
    },
    change(event, lastName) {
      this.output = event.target.value + " " + lastName;
    },
  },
});

app.mount("#events");
