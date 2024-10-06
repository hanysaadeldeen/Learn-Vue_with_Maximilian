<template lang="">
  <div class="task">
    <h3>{{ title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="$emit('DeleteTask', id)">delete</i>
      <i
        class="material-icons"
        @click="$emit('toggleFav', id)"
        :class="{ favorite: isFavorite }"
        s
        >favorite</i
      >
    </div>
  </div>
</template>
<script setup>
import { toRefs } from "vue";

const props = defineProps(["id", "title", "isFavorite"]);
const { id, title, isFavorite } = toRefs(props);
</script>
<style scoped>
.task {
  padding: 6px 20px;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h3,
.icons {
  display: inline-block;
}
.icons {
  text-align: center;
}
.task i {
  font-size: 1.4rem;
  margin-left: 6px;
  cursor: pointer;
  color: #bbb;
}
.task i.favorite {
  color: red;
}
</style>
