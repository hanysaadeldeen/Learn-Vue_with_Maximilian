const app = Vue.createApp({
  data() {
    return {
      name: "",
      firstName: "",
      lastname: "",
      // fullname: "",
    };
  },
  watch: {
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + "saad";
    //   }
    // },
    // lastname(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.name + " " + "saad";
    //   }
    // },
  },
  computed: {
    fullname() {
      console.log("mohamed");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + this.lastname;
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
