<template lang="">
  <div class="container">
    <h1>Add Task</h1>
    <form @submit.prevent="submit">
      <input type="text" placeholder="Add title" v-model="title" />
      <div class="checkboxx">
        <input type="checkbox" id="fav" v-model="checkBox" />
        <label for="fav">Add to Favorite</label>
      </div>
      <button>Submit Task</button>
    </form>
    <router-link to="/">
      <button class="back">Back To All</button>
    </router-link>
  </div>
</template>
<script setup>
import { ref } from "vue";
import TaskStore from "../store/TaskStore";
import { useRouter } from "vue-router";
const router = useRouter();
const title = ref("");
const checkBox = ref(false);

const { AddTask } = TaskStore();
function submit() {
  const newTask = {
    id: new Date().getTime(),
    title: title.value,
    isFav: checkBox.value,
  };
  AddTask(newTask);
  router.push("/");
}
</script>

<style scoped>
.back {
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 10px auto;
  background: #000;
  color: white;
  cursor: pointer;
  width: fit-content;
  text-align: center;
}
.container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

input[type="text"],
input[type="number"] {
  padding: 12px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
}

input[type="text"]:focus,
input[type="number"]:focus {
  border-color: #4caf50;
}

.checkboxx {
  display: flex;
  align-items: center;
  margin: 10px 0 20px;
}

input[type="checkbox"] {
  margin-right: 10px;
  transform: scale(1.2);
}

label {
  font-size: 16px;
  color: #555;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #43a047;
}

button:active {
  background-color: #388e3c;
  box-shadow: 0 5px #666;
  transform: translateY(2px);
}
</style>
