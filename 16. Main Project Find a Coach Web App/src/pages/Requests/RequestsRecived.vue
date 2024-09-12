<template lang="">
  <base-card v-for="request in Requests" :key="request.email">
    <h2>{{ request.coachId }}</h2>
    <h2>{{ request.userEmail }}</h2>
    <h2>{{ request.message }}</h2>
  </base-card>
</template>
<script>
export default {
  data() {
    return {
      Requests: [],
    };
  },

  created() {
    this.Requests = this.$store.getters['request/AllRequest'];
  },
};
</script>
<style lang=""></style>
