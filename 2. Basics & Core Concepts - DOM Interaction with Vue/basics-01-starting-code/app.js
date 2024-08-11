const app = Vue.createApp({
  data() {
    return {
      Goals: [
        "underStanding All Features in Vue",
        "keep Familar with React!!!",
        "Finish the course and learn Vue!",
      ],
      courseGoal: "Finish the course and learn Vue!",
    };
  },
});
app.mount("#user-goal");
