<template>
  <base-container title="Vuex"></base-container>
  <section>
    <h2>counter: {{ this.$store.state.count }}</h2>
    <button @click="increment">Increment</button>
  </section>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  data() {
    return {
      count: '',
    };
  },
  methods: {
    increment() {
      this.$store.commit('increment');
      console.log(this.$store.state.count);
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
</style>
