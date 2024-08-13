const app = Vue.createApp({
  data() {
    return {
      Goals: [
        "underStanding All Features in Vue",
        "keep Familar with React!!!",
      ],
      testHtml: "Hello there this is test for html",
      courseGoalB: "Learn Vue",
      courseGoal: "Learn More",
      Vuehref: "https://vuejs.org",
    };
  },
  methods: {
    addGoal() {
      const rendomNum = Math.random();
      if (rendomNum < 0.5) {
        return this.testHtml;
      } else {
        return this.courseGoal;
      }
    },
  },
});
app.mount("#user-goal");
