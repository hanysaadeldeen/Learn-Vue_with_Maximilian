<template lang="">
  <div>
    <p>first Access to mutations</p>
    <h2>counter: {{ GetData }}</h2>
    <h2>counter with computed: {{ this.$store.state.count }}</h2>
    <button @click="this.$store.commit('increment')">Increment</button>
  </div>
</template>
<script>
export default {
  computed: {
    GetData() {
      return this.$store.state.count;
    },
  },
};
</script>
<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background: #eee;
  padding: 20px;
  margin: 10px 0;
}
</style>
