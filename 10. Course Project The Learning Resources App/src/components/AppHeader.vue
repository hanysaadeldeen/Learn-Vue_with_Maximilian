<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>
<script>
export default {
  data() {},
  props: ["title"],
};
</script>
<style scoped>
header {
  background: rgb(135, 0, 0);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  text-align: center;
  font-weight: bold;
  color: white;
}
</style>
