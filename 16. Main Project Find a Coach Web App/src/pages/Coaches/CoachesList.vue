<template lang="">
  <the-filter @filter-change="updateFilters"></the-filter>

  <base-card>
    <base-spiner v-if="isLoading"></base-spiner>
    <sectionv v-if="!isLoading">
      <div class="controls">
        <base-button mode="outline" @click="loadDateStore()">
          Refresh
        </base-button>
        <base-button mode="" link :to="'/register'" v-if="!isCoach">
          Register As Coached
        </base-button>
      </div>
      <ul v-if="hasCoach">
        <coaches-item :Coaches="Coaches"></coaches-item>
      </ul>
      <div v-if="!!hasCoach && isLoading">No Coach Found</div>
    </sectionv>
  </base-card>
</template>
<script>
//   :Coaches="filterdCoaches.length > 0 ? filterdCoaches : Coaches"
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
      isLoading: false,
    };
  },
  created() {
    this.loadDateStore();
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
    async loadDateStore() {
      this.isLoading = true;
      await this.$store.dispatch('coaches/loadCoaches');
      this.isLoading = false;
    },
  },
  computed: {
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
