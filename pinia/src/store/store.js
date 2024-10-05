import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useMainStore = defineStore("MainStore", () => {
  // state: () => {
  //   return {
  //     count: 0,
  //     name: "hany mohamed",

  //   };
  // },
  // actions: {
  //   increment() {
  //     this.count++;
  //   },
  // },
  // getters: {
  //   getDoubleCount(state) {
  //     return state.count * 2;
  //   },
  //   doubleCount() {
  //     return this.getDoubleCount * 50;
  //   },
  //   getUserId(state) {
  //     const posibleValue = 200;
  //     return (id) =>
  //       id > posibleValue ? state.count * id : state.count * posibleValue;
  //   },

  //   getCategories(state) {
  //     return state.categories;
  //   },
  // },
  // actions: {
  //   async GetAllMeals() {
  //     try {
  //       const response = await fetch(
  //         "https://www.themealdb.com/api/json/v1/1/categories.php"
  //       );
  //       const data = await response.json();
  //       // this.categories.push(data);
  //       this.categories = data.categories;
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // },

  const count = ref(10);
  const name = ref("Hany Mohamed");
  const categories = ref([]);

  const getDoubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  const doubleCount = computed(() => getDoubleCount.value * 50);
  function getUserId(id) {
    const possibleValue = 200;
    return id > possibleValue ? count.value * id : count.value * possibleValue;
  }
  const GetAllMeals = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await response.json();
      categories.value = data.categories;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  function $reset() {
    count.value = 0;
  }
  return {
    count,
    name,
    getDoubleCount,
    doubleCount,
    categories,
    increment,
    $reset,
    getUserId,
    GetAllMeals,
  };
});

export default useMainStore;
