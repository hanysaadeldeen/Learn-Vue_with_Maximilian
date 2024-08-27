<template>
  <h2>{{ name }}</h2>
  <h3 v-if="age !== 0">{{ age }} years</h3>
</template>

<script>
export default {
  // props: ["name", "age"],
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
h1,
h2,
h3 {
  text-align: center;
}
template {
  text-align: center;
}
</style>
