const app = Vue.createApp({
  data() {
    return {
      hello: "mons",
      widthMoster: 100,
      yourWidth: 100,
    };
  },
  methods: {
    Control(TypeAttack) {
      if (TypeAttack === "ATTACK") {
        if (this.widthMoster && this.yourWidth > 0) {
          this.widthMoster -= 12;
          this.yourWidth -= 8;
        }
        if (this.widthMoster - 12 < 0 && this.yourWidth > 0) {
          this.widthMoster = 0;
        }
        if (this.yourWidth - 8 < 0 && this.widthMoster > 0) {
          this.yourWidth = 0;
        }
      } else if (TypeAttack === "SPECIAL") {
        if (this.widthMoster && this.yourWidth > 0) {
          this.widthMoster -= 15;
          this.yourWidth -= 20;
          console.log(this.widthMoster);
          console.log(this.yourWidth);
        }
        if (this.widthMoster - 15 < 0 && this.yourWidth > 0) {
          this.widthMoster = 0;
          console.log(this.widthMoster);
          console.log(this.yourWidth);
        }
        if (this.yourWidth - 20 < 0 && this.widthMoster > 0) {
          this.yourWidth = 0;
          console.log(this.widthMoster);
          console.log(this.yourWidth);
        }
      } else if (TypeAttack === "HEAL") {
        if (this.yourWidth < 100) {
          if (this.yourWidth + 20 > 100) {
            this.yourWidth = 100;
          } else {
            this.yourWidth += 20;
          }
        }
      } else {
        this.yourWidth = 0;
      }
    },
  },
});
app.mount("#game");
