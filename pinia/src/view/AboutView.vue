<template lang="">
  <main>
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>
    <section>
      <h1>this is page for {{ about }}</h1>
      <p>{{ description }}</p>
    </section>
  </main>
</template>
<script setup>
import { ref } from "vue";

const about = ref("about page");
const description = ref(
  "descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription"
);
</script>
<style scoped>
section {
  padding: 20px;
  text-align: center;
}
</style>
