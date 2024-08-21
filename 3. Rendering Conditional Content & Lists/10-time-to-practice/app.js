const app = Vue.createApp({
  data() {
    return {
      task: "",
      Tasks: [],
      controlShown: true,
    };
  },
  computed: {
    Buttontitle() {
      return this.controlShown ? "hide" : "show list";
    },
  },
  methods: {
    AddTask() {
      this.Tasks.push(this.task);
      this.task = "";
    },
    updateShown() {
      this.controlShown = !this.controlShown;
    },
  },
});
app.mount("#assignment");
