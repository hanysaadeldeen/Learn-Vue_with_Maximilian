<template>
  <router-view v-slot="slotProps" mode="out-in">
    <transition name="fade">
      <component :is="slotProps.Component" />
    </transition>
  </router-view>
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
/* .route.enter-from {
}
.route.enter-to {
} */
.fade-enter-active {
  animation: leaveEnter 0.8s ease-out;
}
.fade-leave-active {
  animation: leaveEnter 0.8s ease-in;
}

/*button for transition */
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}
.fade-button-v-enter-active {
  animation: animateTransition 0.3s ease-in-out forwards;
}
.fade-button-v-leave-active {
  animation: animateTransition 0.3s ease-in-out forwards;
}
@keyframes leaveEnter {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
