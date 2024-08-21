const app = Vue.createApp({
  data() {
    return {
      inptuData: "",
      getBackground: "",
      Control: false,
    };
  },
  computed: {
    CastumParagraph() {
      // if (this.inptuData === "user1") {
      //   return { user1: true };
      // } else if (this.inptuData === "user2") {
      //   return { user2: true };
      // }
      // another way
      return {
        user1: this.inptuData === "user1",
        user2: this.inptuData === "user2",
      };
    },
    ControlDisplay() {
      return {
        hidden: this.Control === true,
        visible: this.Control === false,
      };
      // another way
      // if (this.Control) {
      //   return { hidden: true };
      // } else {
      //   return { visible: true };
      // }
    },
  },
  methods: {
    toggleParagraph() {
      this.Control = !this.Control;
    },
  },
});

app.mount("#styling");
