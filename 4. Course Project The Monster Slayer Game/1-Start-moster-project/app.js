function RandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      widthMoster: 100,
      yourWidth: 100,
      currentRound: 0,
      logMessages: [],
    };
  },
  computed: {
    widthMosterValue() {
      return { width: this.widthMoster + "%" };
    },
    yourwidthValue() {
      return { width: this.yourWidth + "%" };
    },
    ControlSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    Control(TypeAttack) {
      if (TypeAttack === "ATTACK") {
        if (this.widthMoster && this.yourWidth > 0) {
          this.currentRound++;
          const attackValueM = RandomValue(5, 12);
          const attackValueY = RandomValue(5, 12);
          this.widthMoster -= attackValueM;
          this.yourWidth -= attackValueY;
          this.addLogMessage("player", "Attack", attackValueY);
          console.log(this.logMessages);
        }
        if (this.widthMoster - 12 < 0 && this.yourWidth > 0) {
          this.widthMoster = 0;
        }
        if (this.yourWidth - 8 < 0 && this.widthMoster > 0) {
          this.yourWidth = 0;
        }
      } else if (TypeAttack === "SPECIAL") {
        if (this.widthMoster && this.yourWidth > 0) {
          this.currentRound++;
          const attackValueM = RandomValue(8, 20);
          const attackValueY = RandomValue(8, 20);
          this.widthMoster -= attackValueM;
          this.yourWidth -= attackValueY;
          this.addLogMessage("Monster", "Special Attack", attackValueM);
        }
        if (this.widthMoster - 15 < 0 && this.yourWidth > 0) {
          this.widthMoster = 0;
        }
        if (this.yourWidth - 20 < 0 && this.widthMoster > 0) {
          this.yourWidth = 0;
        }
      } else if (TypeAttack === "HEAL") {
        let heaelValue = RandomValue(5, 12);
        if (this.yourWidth < 100) {
          if (this.yourWidth + heaelValue > 100) {
            this.yourWidth = 100;
          } else {
            this.yourWidth += heaelValue;
          }
          console.log(heaelValue);
          this.addLogMessage("player", "heal", heaelValue);
        }
      } else {
        this.widthMoster = this.widthMoster;
        this.yourWidth = 0;
      }
    },
    startGame() {
      this.widthMoster = 100;
      this.yourWidth = 100;
      this.currentRound = 0;
      this.logMessages = [];
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});
app.mount("#game");
