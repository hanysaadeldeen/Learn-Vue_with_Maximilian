<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
  </section>
</template>

<script>
import { inject, ref } from 'vue';

export default {
  props: ['id'],
  setup(props) {
    const title = ref('');
    const price = ref(null);
    const description = ref('');

    const id = ref(props.id);
    const Allproduct = inject('products');

    const product = Allproduct.value.find((p) => p.id === id.value);
    title.value = product.title;
    price.value = product.price;
    description.value = product.description;

    return { title, price, description };
  },
};
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
