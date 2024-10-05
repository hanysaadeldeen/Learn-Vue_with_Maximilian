import { defineStore } from "pinia";
import { ref } from "vue";

const ProductStore = defineStore("Products", () => {
  const products = ref([]);
  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      products.value = data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getProducts,
  };
});

export default ProductStore;
