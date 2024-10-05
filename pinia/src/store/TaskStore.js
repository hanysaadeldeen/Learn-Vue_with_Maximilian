import { defineStore } from "pinia";
import { reactive } from "vue";

const TaskStore = defineStore("TaskStore", () => {
  const mainTasks = reactive({
    tasks: [
      {
        id: 1,
        title: "buy some milk",
        isFav: true,
      },
      {
        id: 2,
        title: "play Golver",
        isFav: false,
      },
    ],
  });

  function upgradeFavorite(id) {
    const task = mainTasks.tasks.find((task) => task.id === id);
    if (task) {
      task.isFav = !task.isFav;
    }
  }

  return {
    mainTasks,
    upgradeFavorite,
  };
});

export default TaskStore;
