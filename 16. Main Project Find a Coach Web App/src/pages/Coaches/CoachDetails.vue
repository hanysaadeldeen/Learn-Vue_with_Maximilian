<template lang="">
  <section>
    <base-card>
      <h2>{{ FullName }}</h2>
      <h2>${{ coach.hourlyRate }}</h2>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button mode="outline" link :to="ContactLine">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in coach.areas"
        :key="area"
        :mode="area"
        :title="area"
      >
      </base-badge>
      <p>{{ coach.description }}</p>
    </base-card>
  </section>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {};
  },

  computed: {
    FullName() {
      return this.coach.firstName + ' ' + this.coach.lastName;
    },
    ContactLine() {
      return this.$route.path + '/' + 'contact';
    },
    coach() {
      return this.$store.getters['coaches/Coaches'].find(
        (couch) => couch.id === this.id
      );
    },
  },
};
</script>
<style scoped></style>
