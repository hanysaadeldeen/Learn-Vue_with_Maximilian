<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="goals.show">main goal is: {{ goals.goals }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toogleShow">Toggle Goal {{ show ? 'hide' : 'show' }}</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    // const mainGoal = ref('Learn vue');
    // const show = ref(true);
    const mainGoal = ref({
      goal: 'Learn vue',
      show: true,
    });
    const goals = reactive({
      goals: 'learn React',
      show: true,
    });
    // function toogleShow() {
    //   show.value = !show.value;
    // }

    // function toogleShow() {
    //   mainGoal.value.show = !mainGoal.value.show;
    // }
    function toogleShow() {
      goals.show = !goals.show;
    }

    return { goals, mainGoal, toogleShow };
  },

  // data() {
  //   return {
  //     show: true,
  //     mainGoal: 'Learn vue',
  //   };
  // },
  // methods: {
  //   toogleShow() {
  //     this.show = !this.show;
  //   },
  // },
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
</style>
