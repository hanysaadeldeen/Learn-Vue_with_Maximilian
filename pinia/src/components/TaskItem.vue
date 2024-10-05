<template lang="">
  <div class="task">
    <h3>{{ title }}</h3>
    <div class="icons">
      <i class="material-icons">delete</i>
      <i
        class="material-icons"
        @click="upgradeFavorite(id)"
        :class="{ favorite: favorite }"
        >favorite</i
      >
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import TaskStore from "../store/TaskStore";
export default {
  props: ["id", "title"],
  setup(props) {
    const id = ref(props.id);
    const title = ref(props.title);
    const { upgradeFavorite, mainTasks } = TaskStore();
    const isCompleted = ref(props.isCompleted);
    const favorite = computed(
      () => mainTasks.tasks.find((task) => task.id === id.value)?.isFav
    );
    return { id, title, isCompleted, favorite, upgradeFavorite };
  },
};
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
