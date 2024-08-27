<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <!-- <button @click="$emit('select-topic', id)">Learn More</button> -->
    <button @click="SelectOne(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  props: ["id", "topicName", "description"],
  // emits: ['select-topic'],
  inject: ["SelectOne"],
};
</script>
