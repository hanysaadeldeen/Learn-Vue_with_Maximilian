<template lang="">
  <the-filter @filter-change="updateFilters"></the-filter>

  <base-card>
    <base-spiner v-if="isLoading"></base-spiner>

    <div v-if="error !== null">
      <base-dialog
        @close="CloseDialog"
        :show="!!error"
        title="an Error occurred"
      >
        <template #header> </template>
        <div>someThing went wrong Dud</div>
      </base-dialog>
    </div>

    <sectionv v-if="!isLoading && error === null">
      <div class="controls">
        <base-button mode="outline" @click="loadDateStore()">
          Refresh
        </base-button>
        <base-button mode="" link :to="'/register'" v-if="!isCoach">
          Register As Coached
        </base-button>
      </div>
      <ul v-if="hasCoach">
        <coaches-item
          :Coaches="filterdCoaches.length > 0 ? filterdCoaches : Coaches"
        ></coaches-item>
      </ul>
      <div v-if="!hasCoach && !isLoading">No Coach Found</div>
    </sectionv>
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
      Coaches: [],
      selectedFilters: [],
      filterdCoaches: [],
      isLoading: false,
      error: null,
    };
  },
  created() {
    this.loadDateStore();
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
      try {
        this.isLoading = true;
        await this.$store.dispatch('coaches/loadCoaches');
        this.GetCoached();
      } catch (error) {
        this.error = error.message || 'Failed to load data!';
      }
      this.isLoading = false;
    },
    GetCoached() {
      this.Coaches = this.$store.getters['coaches/Coaches'];
    },
    CloseDialog() {
      this.error = null;
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
