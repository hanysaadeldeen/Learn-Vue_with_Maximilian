<template lang="">
  <div>
    <!-- using dispatch action -->
    <button @click="TriggerAction">Triggre Actions with dispatch</button>
    <!-- dispatch adtion with mapActions -->
    <button @click="increaseeee">Triggre Actions with MapActions</button>
    <!-- dispatch adtion with PromiseActions mapActions -->
    <button @click="PromiseActions">
      Triggre Actions with Async MapActions
    </button>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    TriggerAction() {
      this.$store.dispatch('increase');
    },
    ...mapActions(['increase', 'PromiseActions']),
    increaseeee() {
      this.increase(800);
    },
  },
};
</script>
<style lang=""></style>
