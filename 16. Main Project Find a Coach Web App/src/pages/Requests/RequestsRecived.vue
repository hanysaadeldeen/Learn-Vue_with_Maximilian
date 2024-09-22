<template lang="">
  <section>
    <base-card v-if="hasRequests">
      <header>
        <h2>Requests Recieved</h2>
      </header>
      <ul>
        <request-item
          v-for="request in requests"
          :key="request.email"
          :request="request"
        ></request-item>
      </ul>
    </base-card>
    <base-card v-else>
      <header>
        <h2>No Requests Recieved</h2>
      </header>
    </base-card>
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
  created() {
    this.GetAllRequst();
  },
  methods: {
    GetAllRequst() {
      return this.$store.dispatch('request/fetchAllRequest');
    },
  },
  computed: {
    requests() {
      return this.$store.getters['request/GetspecificRquests'];
    },
    hasRequests() {
      return this.$store.getters['request/hasRequests'];
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
