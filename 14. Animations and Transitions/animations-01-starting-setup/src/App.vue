<template>
  <div class="container">
    <div class="block" :class="{ animate: checkAnimate }"></div>
    <button @click="animateBlock">Animate</button>
  </div>

  <div class="container">
    <transition>
      <p v-if="paraIsVisible">this si only sometimes visible..</p>
    </transition>
    <button @click="toogleParagraph">Animate</button>
  </div>
  <base-modal @closev="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      checkAnimate: false,
      paraIsVisible: false,
    };
  },
  methods: {
    toogleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
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

.v-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}
.v-enter-active {
  transition: all 0.3s ease-in-out;
}
.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-active {
  transition: all 0.3s ease-in-out;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
.animate {
  background-color: #cc00ff !important;
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
