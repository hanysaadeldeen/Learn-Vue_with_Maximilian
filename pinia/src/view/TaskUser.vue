<template>
  <main>
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>
    <section>
      <h1>ِAll Tasks</h1>
      <ul class="task-list">
        <task-item
          v-for="task in mainTasks.tasks"
          :id="task.id"
          :key="task.id"
          :title="task.title"
          :isFavorite="task.isFav"
        ></task-item>
      </ul>
    </section>
  </main>
</template>

<script setup>
import { storeToRefs } from "pinia";
import TaskStore from "../store/TaskStore";
import TaskItem from "../components/TaskItem.vue";

const store = TaskStore();
const { mainTasks } = storeToRefs(store);
</script>

<style scoped>
section {
  text-align: center;
}
ul {
  max-width: 640px;
  margin: 20px auto;
}
ul li {
  list-style: none;
}
</style>
