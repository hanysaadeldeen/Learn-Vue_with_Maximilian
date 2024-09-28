<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <transition name="hide">
    <h3 :class="{ hide: isHide }">{{ data }}</h3>
  </transition>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggle">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const goal = ref('course goal');
    const isHide = ref(false);

    function toggle() {
      if (!isHide.value) {
        isHide.value = true;
      } else {
        isHide.value = false;
      }
      console.log(isHide.value);
    }

    return { data: goal, isHide: isHide, toggle: toggle };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
.hide {
  opacity: 0;
}

.hide-enter-from {
  opacity: 0;
}
</style>
