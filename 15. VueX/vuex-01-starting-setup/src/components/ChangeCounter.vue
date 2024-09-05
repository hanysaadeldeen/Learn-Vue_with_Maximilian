<template lang="">
  <div>
    <!-- these for increace with mutations -->
    <!-- first way to passing data to mutations -->
    <button @click="this.$store.commit('increase', { value: 20 })">
      increase 20
    </button>
    <!-- another way  -->
    <button @click="this.$store.commit({ type: 'increase', value: 200 })">
      increase 200
    </button>
    <!--! these icrease with Actions  -->
    <!-- <button @click="incrementWithAsync">Increment with dispatch</button> -->
    <button @click="incAsy">increment test mapActions</button>
    <button @click="inc({ value: 900 })">increase with payload</button>
    <!--! change using getters  -->
    <button @click="ComputedUsingGetter(2000)">
      Increment 200 with getters
    </button>

    <!-- Call with getters -->
    <h3>getters: {{ currentCount }}</h3>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    // incrementWithAsync() {
    //   this.$store.dispatch('incrementAsync');
    // },
    // ...mapActions(['incrementAsync', 'increase']),
    ...mapActions({
      incAsy: 'incrementAsync',
      inc: 'increase',
    }),
    ...mapGetters(['Addtwohundred']),

    ComputedUsingGetter(amount) {
      console.log(amount);

      const newCount = this.Addtwohundred(amount);
      console.log('new', newCount);
      this.$store.commit('updateCount', newCount);
    },
  },
  computed: {
    currentCount() {
      return this.$store.state.count; // Display current count from the store
    },
  },
};
</script>
<style scoped>
div {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background: #ddd;
  padding: 10px;
  margin: 20px 0;
}
</style>
