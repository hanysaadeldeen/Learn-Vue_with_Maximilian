<template>
  <section>
    <div>
      New Com
      <button @click="data++">Add one</button>
      <p>{{ data }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: 0,
    };
  },
};
</script>
