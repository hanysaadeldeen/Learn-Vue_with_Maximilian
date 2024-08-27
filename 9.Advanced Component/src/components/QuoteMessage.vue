<template>
  <section>
    <div class="title">
      <slot name="title"></slot>
    </div>
  </section>
  <section>
    <slot></slot>
  </section>
  <section>
    <slot name="subtitle">You don't have subtitle</slot>
  </section>
</template>

<script>
export default {
  props: ["props"],
  data() {
    return {};
  },
};
</script>
<style scoped>
section {
  max-width: 500px;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #ddd;
  box-shadow: 22px 20px 86px -27px rgba(184, 153, 184, 1);
}
:slotted(h1) {
  color: red;
}
h1 {
  color: red;
}
.title {
  font-style: italic;
}
.title2 {
  font-style: normal;
}
</style>
