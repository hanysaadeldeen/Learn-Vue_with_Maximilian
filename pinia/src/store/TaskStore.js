import { defineStore } from "pinia";
import { reactive, ref } from "vue";

const TaskStore = defineStore("TaskStore", () => {
  const mainTasks = reactive({
    tasks: [],
  });
  const loading = ref(false);

  async function GetAllTasks() {
    loading.value = true;
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();
    mainTasks.tasks = data;
    loading.value = false;
    // localStorage.setItem("task", JSON.stringify(mainTasks.tasks));
  }

  async function AddTask(task) {
    const newTask = {
      id: task.id,
      title: task.title,
      isFav: task.isFav,
    };

    const res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    });
    GetAllTasks();
  }

  async function DeleteTask(id) {
    const res = await fetch("http://localhost:3000/tasks/" + id, {
      method: "DELETE",
    });
    if (!res.ok) {
      console.error("Failed to update task:", res.status, res.statusText);
    } else {
      console.log("Task updated successfully:", await res.json());
    }
    // const task = mainTasks.tasks.filter((task) => task.id !== id);
    // mainTasks.tasks = task;
    // localStorage.setItem("task", JSON.stringify(mainTasks.tasks));
  }

  async function upgradeFavorite(id) {
    const task = mainTasks.tasks.find((task) => task.id === id);
    task.isFav = !task.isFav;

    const res = await fetch("http://localhost:3000/tasks/" + id, {
      method: "PATCH", // Remove the trailing space
      body: JSON.stringify({ isFav: task.isFav }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Optionally check if the request was successful
    if (!res.ok) {
      console.error("Failed to update task:", res.status, res.statusText);
    } else {
      console.log("Task updated successfully:", await res.json());
    }
    // localStorage.setItem("task", JSON.stringify(mainTasks.tasks));
  }

  return {
    mainTasks,
    upgradeFavorite,
    DeleteTask,
    AddTask,
    GetAllTasks,
    loading,
  };
});

export default TaskStore;
