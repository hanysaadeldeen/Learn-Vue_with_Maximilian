<template>
  <base-container title="Vuex"></base-container>
  <section>
    <h2>counter: {{ this.$store.state.count }}</h2>
    <!-- first access to mutations methods -->
    <button @click="this.$store.commit('increment')">Increment</button>
    <!-- first way to passing data to mutations -->
    <button @click="this.$store.commit('increase', { value: 20 })">
      Increment 20
    </button>
    <!-- another way  -->
    <button @click="this.$store.commit({ type: 'increase', value: 200 })">
      Increment 200
    </button>
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
  methods: {},
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
