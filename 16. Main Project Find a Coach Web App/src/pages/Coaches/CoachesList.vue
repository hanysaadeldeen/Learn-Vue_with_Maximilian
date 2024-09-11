<template lang="">
  <the-filter @filter-change="updateFilters"></the-filter>
  <base-card>
    <section>
      <div class="controls">
        <base-button mode="flate"> Refresh </base-button>
        <base-button mode="outline" link :to="'/register'">
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
    return {
      Coaches: null,
      filterdCoaches: [],
    };
  },
  created() {
    this.Coaches = this.$store.getters['coaches/Coaches'];
  },

  methods: {
    getDataLog() {
      console.log(this.Coaches);
    },

    updateFilters(FilterdValue) {
      this.filterdCoaches = FilterdValue;

      if (this.filterdCoaches.length !== 0) {
        this.Coaches = this.Coaches.filter((coach) =>
          coach.areas.some((area) => this.filterdCoaches.includes(area))
        );
      }
    },
  },
  computed: {
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
