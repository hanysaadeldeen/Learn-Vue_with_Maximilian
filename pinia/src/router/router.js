import { createRouter, createWebHistory } from "vue-router";

import TestPinia from "../view/TestPinia.vue";
import AboutView from "../view/AboutView.vue";
import TaskUser from "../view/TaskUser.vue";
import AddTask from "../view/AddTask.vue";
const routes = [
  { path: "/", component: TaskUser },
  { path: "/AddTask", component: AddTask },
  { path: "/about", component: AboutView },
  { path: "/test", component: TestPinia },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
