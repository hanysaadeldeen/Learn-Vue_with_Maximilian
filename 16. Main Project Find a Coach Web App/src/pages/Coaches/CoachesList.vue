<template lang="">
  <section>Filter</section>
  <base-card>
    <section>
      <div class="controls">
        <base-button mode="flate" link="false"> Refresh </base-button>
        <base-button mode="outline" link="true" :to="'/register'">
          Refresh
        </base-button>
      </div>
      <ul v-if="hasCoach">
        <coaches-item :Coaches="Coaches"></coaches-item>
      </ul>
    </section>
  </base-card>
</template>
<script>
import CoachesItem from '../../components/coaches/CoachesItem.vue';

export default {
  components: {
    CoachesItem,
  },
  data() {
    return {};
  },
  computed: {
    Coaches() {
      return this.$store.getters['coaches/Coaches'];
    },
    filterCoaches() {
      return this.$store.getters['coaches/coachesList'];
    },
    hasCoach() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>
<style scoped>
section {
  padding: 20px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
a {
  color: white;
  text-decoration: none;
}
</style>
