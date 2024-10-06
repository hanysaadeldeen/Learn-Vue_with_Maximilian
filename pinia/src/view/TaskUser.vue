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
          @toggleFav="toggleFavorite"
          @DeleteTask="DeleteTasks"
        ></task-item>
      </ul>

      <div
        v-if="mainTasks.tasks.length === 0"
        style="display: flex; justify-content: center; align-items: center"
      >
        <h1>You don't Have Tasks</h1>
      </div>
      <router-link to="/AddTask">
        <button class="button">Add Task</button>
      </router-link>
    </section>
  </main>
</template>

<script setup>
import { storeToRefs } from "pinia";
import TaskStore from "../store/TaskStore";
import TaskItem from "../components/TaskItem.vue";
import { onMounted } from "vue";

const store = TaskStore();
const { mainTasks } = storeToRefs(store);
const { upgradeFavorite, DeleteTask, GetAllTasks } = store;

function DeleteTasks(id) {
  DeleteTask(id);
  // console.log(id);
}
function toggleFavorite(id) {
  upgradeFavorite(id);
}
onMounted(() => {
  GetAllTasks();
});
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
button {
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 10px;
  background: #000;
  color: white;
  cursor: pointer;
}
</style>
