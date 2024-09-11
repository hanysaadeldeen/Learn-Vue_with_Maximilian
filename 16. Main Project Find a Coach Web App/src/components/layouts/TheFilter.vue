<template lang="">
  <section>
    <base-card>
      <h2>Find You Coach</h2>
      <section class="filter-option">
        <input
          type="checkbox"
          value="frontend"
          id="frontend"
          v-model="GetFilterValue"
          @change="getvalue"
        />
        <label for="frontend">frontend</label>
      </section>
      <section class="filter-option">
        <input
          type="checkbox"
          value="backend"
          id="backend"
          v-model="GetFilterValue"
          @change="getvalue"
        />
        <label for="backend">backend</label>
      </section>
      <section class="filter-option">
        <input
          type="checkbox"
          value="career"
          id="career"
          v-model="GetFilterValue"
          @change="getvalue"
        />
        <label for="career">career</label>
      </section>
    </base-card>
  </section>
</template>
<script>
export default {
  data() {
    return {
      GetFilterValue: [],
    };
  },

  emits: [],
  methods: {
    getvalue() {
      this.$emit('filter-change', this.GetFilterValue);
    },
  },
};
</script>
<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
