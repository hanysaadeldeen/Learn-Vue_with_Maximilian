<template lang="">
  <li v-for="coach in Coaches[0]" :key="coach.id">
    <h3>{{ coach.firstName + coach.lastName }}</h3>
    <h3>${{ coach.hourlyRate }}/hour</h3>
    <h4>{{ coach.rate }}</h4>
    <div>
      <span v-for="area in coach.areas" :key="area">
        <base-badge :mode="area" :title="area"> </base-badge>
      </span>
    </div>
    <div class="actions">
      <base-button mode="flate" link :to="`/coaches/${coach.id}`">
        View Details
      </base-button>

      <base-button mode="outline" link :to="`/coaches/${coach.id}/contact`">
        Contact
      </base-button>
    </div>
  </li>
</template>
<script>
export default {
  props: ['Coaches'],
  computed: {
    ullName() {
      return 'this.Coaches.firstName + this.Coaches.lastName';
    },
  },
  mounted() {
    console.log(this.Coaches[0]);
  },
};
</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
