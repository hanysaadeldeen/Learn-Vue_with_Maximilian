import { createRouter, createWebHistory } from 'vue-router';
import AllUsers from './pages/AllUsers.vue';
import CourseGoal from './pages/CourseGoal.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'users',
      component: AllUsers,
    },
    {
      path: '/courses',
      name: 'Courses',
      component: CourseGoal,
    },
  ],
});

export default router;
