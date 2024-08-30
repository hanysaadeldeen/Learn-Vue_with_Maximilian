<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul v-if="results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.name"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <div
        class="NoData"
        v-if="Loading === false && results.length === 0 && error === ''"
      >
        No Experiences here
      </div>
      <div v-if="Loading" class="NoData">Loading...</div>
      <div v-if="!Loading && error" class="error">{{ error }}</div>
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
      error: '',
      Loading: false,
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
  // methods: {
  //   getExperiences() {
  //     axios
  //       .get('https://vue-demo-9ea6e-default-rtdb.firebaseio.com/serveys.json')
  //       .then((response) => {
  //         this.results = Object.values(response.data);
  //       })
  //       .catch(() => {
  //         this.error = 'fail to load survey data.';
  //       });
  //   },
  // },
  mounted() {
    this.Loading = true;
    this.error = '';
    axios
      .get('https://vue-demo-9ea6e-default-rtdb.firebaseio.com/serveys.json')
      .then((response) => {
        const data = response.data;
        if (data) {
          this.results = Object.values(data);
        }
      })
      .catch((error) => {
        console.log(error);
        this.error = error;
      })
      .finally(() => {
        this.Loading = false;
      });
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.error {
  background: rgba(255, 0, 0, 0.563);
  color: red;
  text-align: center;
  padding: 10px;
  margin: 10px;
  color: white;
}
.NoData {
  background: rgba(107, 93, 93, 0.563);
  text-align: center;
  padding: 10px;
  margin: 10px;
  color: white;
}
</style>
