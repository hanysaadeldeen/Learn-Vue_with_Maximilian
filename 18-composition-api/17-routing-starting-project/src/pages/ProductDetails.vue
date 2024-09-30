<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <router-link to="/products/p2">product two</router-link>
  </section>
</template>

<script>
import { computed, inject, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props: ['id'],
  setup() {
    const title = ref('');
    const price = ref(null);
    const description = ref('');

    const router = useRoute();

    const Allproduct = inject('products');

    // const id = router.params.id;
    const product = computed(() =>
      Allproduct.value.find((p) => p.id === router.params.id)
    );

    title.value = computed(() => product.value.title);
    price.value = computed(() => product.value.price);

    // description.value = computed(() => product.value.description);

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
