const vue = Vue.createApp({
  data() {
    return { boxA: false, boxB: false, boxC: false };
  },
  computed: {
    boxAClasses() {
      return { active: this.boxA };
    },
  },
  methods: {
    boxSelected(box) {
      if (box === "a") {
        this.boxA = !this.boxA;
      } else if (box === "b") {
        this.boxB = !this.boxB;
      } else {
        this.boxC = !this.boxC;
      }
    },
  },
});

vue.mount("#styling");
