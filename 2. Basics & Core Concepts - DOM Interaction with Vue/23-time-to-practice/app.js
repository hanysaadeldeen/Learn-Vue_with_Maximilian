const app = Vue.createApp({
  data() {
    return {
      Number: 0,
    };
  },
  methods: {
    add(num) {
      this.Number += num;
    },
  },
  computed: {
    result() {
      if (this.Number === 0) {
        return 0;
      }
      if (this.Number < 37) {
        return "not there yet";
      } else if (this.Number === 37) {
        return this.Number;
      } else if (this.Number > 37) {
        return "to much";
      }
    },
  },
  watch: {
    result() {
      const that = this;
      setTimeout(() => {
        that.Number = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
