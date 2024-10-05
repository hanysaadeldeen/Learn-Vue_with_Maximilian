<template>
  <main>
    <!-- heading -->
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>

    <section>
      <h1>This is the counter example</h1>
      <h1>{{ name }}</h1>
      <p>{{ count }}</p>
      <p>getDoubleCount: {{ getDoubleCount }}</p>
      <p>{{ mainStore.doubleCount }}</p>
      <p>for getters pass value: {{ getUserId(5000) }}</p>
      <button @click="increment">Add two</button>
      <button @click="$reset">reset</button>
    </section>
    <section>
      <ul>
        <li
          v-for="category in categories.slice(0, 5)"
          :key="category.idCategory"
        >
          <span
            style="
              display: block;
              background-color: red;
              color: white;
              text-align: center;
            "
            >{{ category.strCategory }}</span
          >
          <span style="display: block">{{
            category.strCategoryDescription
          }}</span>
          <span style="display: block">{{ category.strCategoryThumb }}</span>
        </li>
      </ul>
    </section>
  </main>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import useMainStore from "../store/store";

const mainStore = useMainStore();

const { count, name, getDoubleCount, doubleCount, categories } =
  storeToRefs(mainStore);

const { increment, getUserId, $reset } = mainStore;

onMounted(() => {
  mainStore.GetAllMeals();
});
</script>
<style scoped>
* {
  padding: 20px;
}
</style>
