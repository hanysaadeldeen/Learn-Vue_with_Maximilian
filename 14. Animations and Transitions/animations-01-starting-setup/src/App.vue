<template>
  <!-- box for style -->
  <div class="container">
    <div class="block" :class="{ animate: checkAnimate }"></div>
    <button @click="animateBlock">Animate</button>
  </div>

  <!-- transition events -->
  <div class="container">
    <transition
      name="pare"
      @before-enter="beforeEnter"
      @before-leave="beforeLeave"
      @enter="enter"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @leave="leave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="paraIsVisible">this si only sometimes visible..</p>
    </transition>
    <button @click="toogleParagraph">Animate</button>
  </div>

  <!-- buttons -->
  <div class="container" mode="out-in ">
    <transition name="fade-button">
      <button @click="toggleUsers(true)" v-if="!usersAreVisible">
        Show Users
      </button>
      <button @click="toggleUsers(false)" v-else>Hide Users</button>
    </transition>
  </div>

  <!-- for dialog -->
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog()">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog()">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      checkAnimate: false,
      paraIsVisible: false,
      usersAreVisible: false,

      intervalLeave: null,
      intervalEnter: null,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter');
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log(el);
      console.log('enter');
      let round = 1;
      this.intervalEnter = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.intervalEnter);
          done();
        }
      }, 20);
    },
    afterEnter() {
      console.log('after Enter');
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave');
      let round = 1;
      this.intervalLeave = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.intervalLeave);
          done();
        }
      }, 20);
    },
    afterLeave() {
      console.log('after leave');
    },

    enterCancelled() {
      clearInterval(this.intervalEnter);
    },
    leaveCancelled() {
      clearInterval(this.intervalLeave);
    },

    toogleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },

    toggleUsers(value) {
      this.usersAreVisible = value;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.checkAnimate = !this.checkAnimate;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}

/*! pare first name */
/* .pare-enter-active {
  animation: animateTransition 0.3s ease-in-out forwards;
}
.pare-leave-active {
  animation: 0.3s ease-in-out forwards;
} */

/*button for transition */
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button.enter-to,
.fade-button.leave-from {
  opacity: 1;
}
.fade-button.v-enter-active {
  animation: animateTransition 0.3s ease-in-out forwards;
}
.fade-button.v-leave-active {
  animation: animateTransition 0.3s ease-in-out forwards;
}

@keyframes animateTransition {
  0% {
    transform: scale(1) rotate(1deg);
  }
  100% {
    transform: scale(1.2) rotate(100deg);
  }
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
</style>
