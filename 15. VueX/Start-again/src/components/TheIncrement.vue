<template lang="">
  <div>
    <h1>Test Call store</h1>
    <h1>
      {{ this.$store.state.count }}
    </h1>
    <h2>{{ ComputedCount }}</h2>
    <button @click="increment">Increase</button>

    <h1>
      <!-- Get Value of the Getters: {{ this.$store.getters.IncreaseWithDifference }} -->
      <!-- Get Value of the Getters: {{ GetterValue }} -->
      <!-- Get Value of the Getters: {{ GetterValue }} -->
      Get value of Getters with mapGetters {{ IncreaseWithDifference }}
    </h1>
    <h1>Get value of Getters with mapGetters {{ IncreaseWithFixed }}</h1>

    <h1>Pass value to Getters:{{ this.$store.getters.GetArgument(89) }}</h1>
    <h1>Pass value to Getters:{{ PassValueToGettrs(900) }}</h1>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ComputedCount() {
      return this.$store.state.count;
    },
    GetterValue() {
      return this.$store.getters.IncreaseWithDifference;
    },
    ...mapGetters(['IncreaseWithDifference', 'IncreaseWithFixed']),
  },
  methods: {
    increment() {
      this.$store.commit('increment', { value: 50 });
    },
    PassValueToGettrs(value) {
      return this.$store.getters.GetArgument(value);
    },
  },
};
</script>
<style lang=""></style>
