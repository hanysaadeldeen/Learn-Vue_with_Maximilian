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
      AuthorName: "mohamed",
    };
  },
};
</script>

<style scoped>
section div {
  border: 2px solid red;
  background: rgba(255, 0, 0, 0.511);
  width: 100%;
  height: 50px;
  margin: 20px 0;
}
h1 {
  color: white;
}
</style>
