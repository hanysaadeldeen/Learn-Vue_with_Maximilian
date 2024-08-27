<template>
  <section>
    <div><slot></slot></div>
  </section>
</template>

<script>
export default {};
</script>
<style scoped>
section div {
  border: 2px solid blue;
  background: rgba(0, 0, 255, 0.551);
  width: 100%;
  height: 50px;
  margin: 20px 0;
}
</style>
