<template>
  <section>
    <div>
      <slot></slot>
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

<style scoped>
section div {
  border: 2px solid green;
  background: rgb(123, 186, 123);
  width: 100%;
  height: 50px;
  margin: 20px 0;
}
</style>
