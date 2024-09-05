<template>
  <section>
    <h2>{{ title }}</h2>
    <slot></slot>
    <the-increment></the-increment>
    <start-actions></start-actions>
  </section>
</template>

<script>
import StartActions from './StartActions.vue';
import TheIncrement from './TheIncrement.vue';
export default {
  components: { TheIncrement, StartActions },
  props: ['title'],
};
</script>

<style scoped>
section {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

h2 {
  text-align: center;
}
</style>
