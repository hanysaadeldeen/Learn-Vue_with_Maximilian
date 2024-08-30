<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul v-if="results">
        <survey-result
          v-for="result in results"
          :key="result.name"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import axios from 'axios';
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  data() {
    return {
      results: [],
      error: null,
    };
  },
  components: {
    SurveyResult,
  },

  computed: {
    // getData() {
    //   return this.results.filter((item) => item.name !== 'hany');
    // },
  },
  methods: {
    getExperiences() {
      axios
        .get('https://vue-demo-9ea6e-default-rtdb.firebaseio.com/serveys.json')
        .then((response) => {
          this.results = Object.values(response.data);
        })
        .catch(() => {
          this.error = 'fail to load survey data.';
        });
    },
  },
  mounted() {},
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
