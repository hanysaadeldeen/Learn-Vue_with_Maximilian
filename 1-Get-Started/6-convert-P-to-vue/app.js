Vue.createApp({
  data() {
    return {
      goals: [],
      Our_value: "",
    };
  },
  methods: {
    AddGoal() {
      this.goals.push(this.Our_value);
      this.Our_value = "";
    },
  },
}).mount("#app");
