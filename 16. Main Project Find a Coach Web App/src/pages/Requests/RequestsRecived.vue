<template lang="">
  <section>
    <base-card v-if="!emptyRequest">
      <header>
        <h2>Requests Recieved</h2>
      </header>
      <ul>
        <request-item
          v-for="request in hasRequest"
          :key="request.email"
          :request="request"
        ></request-item>
      </ul>
    </base-card>
    <h3 v-else>No Request Found</h3>
  </section>
</template>
<script>
import RequestItem from '../../components/requests/RequestItems.vue';

export default {
  components: {
    RequestItem,
  },
  data() {
    return {};
  },
  computed: {
    hasRequest() {
      return this.$store.getters['request/GetspecificRquests'];
    },
    emptyRequest() {
      return this.$store.getters['request/GetspecificRquests'].length === 0;
    },
  },
};
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
