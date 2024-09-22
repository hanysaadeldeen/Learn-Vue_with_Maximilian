<template lang="">
  <section>
    <div v-if="error !== null">
      <base-dialog
        @close="CloseDialog"
        :show="!!error"
        title="an Error occurred"
      >
        <template #header> </template>
        <div>{{ this.error }}</div>
      </base-dialog>
    </div>

    <base-card>
      <header>
        <h2>Requests Recieved</h2>
      </header>
      <base-spiner v-if="isLoading"></base-spiner>
      <ul v-else-if="hasRequests && !isLoading">
        <request-item
          v-for="request in requests"
          :key="request.email"
          :request="request"
        >
        </request-item>
      </ul>
      <header v-else>
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
    return {
      isLoading: false,
      error: null,
    };
  },
  created() {
    this.GetAllRequst();
  },
  methods: {
    async GetAllRequst() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('request/fetchAllRequest');
      } catch (error) {
        this.error = `${error}`;
      }
      this.isLoading = false;
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
