const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      console.dir(this.$refs.userText.value);
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("before Update");
  },
  updated() {
    console.log("Updated");
  },
  beforeUnmount() {
    console.log("before unmount");
  },
  unmounted() {
    console.log("unmounted");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 3000);
//<h1>you are welcome your favorite is {{Favorite}}</h1>
const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: "tea",
    };
  },
});

app2.mount("#app2");
