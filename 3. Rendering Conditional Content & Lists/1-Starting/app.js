const app = Vue.createApp({
  data() {
    return {
      Goals: [],
      GetGoal: "",
    };
  },
  computed: {
    filteredGoals() {
      return this.Goals.length === 0;
    },
  },
  methods: {
    AddGoal() {
      this.Goals.push(this.GetGoal);
      this.GetGoal = "";
    },
    remoeGoad(goal) {
      // ! way one
      // this.Goals.splice(this.Goals.indexOf(goal), 1);
      // ! way two
      // const goalIndex = this.Goals.indexOf(goal);
      // this.Goals.splice(goalIndex, 1);
      // ! way three
      this.Goals = this.Goals.filter((goalName) => goalName !== goal);
    },
  },
});

app.mount("#user-goals");
