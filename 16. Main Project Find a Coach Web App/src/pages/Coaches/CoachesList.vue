<template lang="">
  <the-filter @filter-change="updateFilters"></the-filter>
  <base-card>
    <section>
      <div class="controls">
        <base-button mode="outline"> Refresh </base-button>
        <base-button mode="" link :to="'/register'" v-if="!isCoach">
          Register As Coached
        </base-button>
      </div>
      <ul v-if="hasCoach">
        <coaches-item
          :Coaches="filterdCoaches.length > 0 ? filterdCoaches : Coaches"
        ></coaches-item>
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
      selectedFilters: [],
      filterdCoaches: [],
    };
  },
  created() {
    this.Coaches = this.$store.getters['coaches/Coaches'];
    this.$store.getters['coaches/isCoach'];
  },

  methods: {
    updateFilters(FilterdValue) {
      this.selectedFilters = FilterdValue;

      this.filterdCoaches = this.Coaches.filter((coach) =>
        coach.areas.some((area) => this.selectedFilters.includes(area))
      );
    },
  },
  computed: {
    filterCoaches() {
      return this.$store.getters['coaches/coachesList'];
    },
    hasCoach() {
      return this.$store.getters['coaches/hasCoaches'];
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
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
