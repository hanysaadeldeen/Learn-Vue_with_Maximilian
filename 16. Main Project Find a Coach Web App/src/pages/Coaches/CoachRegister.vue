<template>
  <section>
    <base-card>
      <h2>Register As A coach Now !</h2>
      <coach-form @AddNew-Coach="SubmitNewCoach"></coach-form>
    </base-card>
  </section>
</template>
<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
import BaseCard from '../../components/ui/BaseCard.vue';

export default {
  components: {
    CoachForm,
    BaseCard,
  },

  methods: {
    SubmitNewCoach(payload) {
      this.$store.dispatch('coaches/RegisterAsCoach', payload);
    },
  },
};
</script>
<style scoped>
section {
  padding: 20px;
}
</style>
