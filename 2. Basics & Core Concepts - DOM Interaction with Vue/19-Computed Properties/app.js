const app = Vue.createApp({
  data() {
    return {
      name: "",
      firstName: "",
    };
  },
  computed: {
    fullname() {
      console.log("mohamed");

      if (this.name === "") {
        return "";
      }
      return this.name + " " + "mohamed";
    },
  },
  methods: {
    inputText() {
      console.log("hay");

      if (this.firstName === "") {
        return "";
      }
      return this.firstName + " " + "mohamed";
    },
  },
});

app.mount("#assignment");
