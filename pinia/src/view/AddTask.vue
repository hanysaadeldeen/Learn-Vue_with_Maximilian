<template lang="">
  <div class="container">
    <h1>Add Task</h1>
    <form @submit.prevent="submit">
      <input type="text" placeholder="Add title" v-model="title" />
      <input type="number" placeholder="Add id" v-model="id" />
      <div class="checkboxx">
        <input type="checkbox" id="fav" v-model="checkBox" />
        <label for="fav">Add to Favorite</label>
      </div>
      <button>Submit Task</button>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";

const id = ref("");
const title = ref("");
const checkBox = ref(false);
</script>

<style scoped>
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
