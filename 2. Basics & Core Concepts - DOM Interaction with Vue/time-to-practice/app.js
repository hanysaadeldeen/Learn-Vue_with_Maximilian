const App = Vue.createApp({
  data() {
    return {
      My_NAME: "hany",
      MY_AGE: 22,
      NUMBER: 5,
      randomImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCVnMftmnJZ8Nis5HnBeuahDMftylU9guag&s",
    };
  },
  methods: {
    ageAfter() {
      return this.MY_AGE + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
});

App.mount("#About_Me");
