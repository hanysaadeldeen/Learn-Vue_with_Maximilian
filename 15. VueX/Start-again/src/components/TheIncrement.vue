<template lang="">
  <div>
    <h1>Test Call store</h1>
    <h1>
      {{ this.$store.state.counter.count }}
    </h1>
    <h2>{{ ComputedCount }}</h2>
    <button @click="increment">Increase</button>

    <div>
      <!-- Get Value of the Getters: {{ this.$store.getters.IncreaseWithDifference }} -->
      <!-- Get Value of the Getters: {{ GetterValue }} -->
      <h1>Get Value of the Getters: {{ GetterValue }}</h1>
      <h1>Get value of Getters with mapGetters {{ IncreaseWithDifference }}</h1>
    </div>
    <h1>Get value of Getters with mapGetters {{ IncreaseWithFixed }}</h1>

    <h1>
      Pass value to Getters:{{ this.$store.getters['counter/GetArgument'](89) }}
    </h1>
    <h1>Pass value to Getters:{{ PassValueToGettrs(900) }}</h1>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ComputedCount() {
      return this.$store.state.counter.count;
    },
    GetterValue() {
      return this.$store.getters['counter/IncreaseWithDifference'];
    },
    ...mapGetters('counter', ['IncreaseWithDifference', 'IncreaseWithFixed']),
  },
  methods: {
    increment() {
      this.$store.commit('counter/increment', { value: 50 });
    },
    PassValueToGettrs(value) {
      return this.$store.getters['counter/GetArgument'](value);
    },
  },
};
</script>
<style lang=""></style>
