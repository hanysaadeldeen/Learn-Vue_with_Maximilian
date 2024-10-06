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

  function DeleteTask(id) {
    const task = mainTasks.tasks.filter((task) => task.id !== id);
    mainTasks.tasks = task;
  }
  function AddTask(task) {
    const newTask = {
      id: task.id,
      title: task.title,
      isFav: task.isFav,
    };
    mainTasks.tasks.push(newTask);
  }

  function upgradeFavorite(id) {
    const task = mainTasks.tasks.find((task) => task.id === id);
    if (task) {
      task.isFav = !task.isFav;
    }
  }

  return {
    mainTasks,
    upgradeFavorite,
    DeleteTask,
    AddTask,
  };
});

export default TaskStore;
