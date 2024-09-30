<template>
  <div class="section">
    <h2>Counter</h2>
    <p>{{ counter }}</p>
    <button @click="increment">increase</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // counter:0
    };
  },
  computed: {
    counter() {
      return this.$store.getters.Get_user;
    },
  },
  methods: {
    increment() {
      this.$store.dispatch('Update_Counter', 50); // Dispatch action to update the count
    },
  },
};
</script>
<style>
.section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: center;
}
</style>
