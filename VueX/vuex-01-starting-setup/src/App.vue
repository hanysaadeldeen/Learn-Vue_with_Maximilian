<template>
  <base-container title="Vuex"></base-container>
  <section>
    <h2>counter: {{ GetData }}</h2>
    <h2>counter with computed: {{ this.$store.state.count }}</h2>
    <!-- first access to mutations methods -->
    <button @click="this.$store.commit('increment')">Increment</button>
    <!-- this triggre aloso increment mutations methods but using actions -->
    <button @click="this.$store.dispatch('incrementAsync')">Increment</button>
    <!-- first way to passing data to mutations -->
    <button @click="this.$store.commit('increase', { value: 20 })">
      Increment 20
    </button>
    <!-- another way  -->
    <button @click="this.$store.commit({ type: 'increase', value: 200 })">
      Increment 200
    </button>
    <!-- call methods with getters -->
    <button @click="ComputedUsingGetter">Increment 200 with getters</button>
  </section>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  computed: {
    GetData() {
      return this.$store.state.count;
    },
    ComputedUsingGetter() {
      // Use the getter method-style access to pass the argument
      return this.$store.getters.Addtwohundred;
    },
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
