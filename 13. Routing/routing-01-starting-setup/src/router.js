import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import TeamFooter from './components/teams/TeamFooter.vue';
import UserFooter from './components/users/UserFooter.vue';
import TeamMembers from './pages/TeamMembers.vue';
import UsersList from './pages/UsersList.vue';
import Notfound from './pages/Notfound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/teams',
      name: 'tems',
      components: { default: TeamsList, footer: TeamFooter },
      alias: '/',
      meta: { needsAuth: true },
      children: [
        {
          name: 'team-member',
          path: ':id',
          component: TeamMembers,
          props: true,
        },
      ],
    },

    {
      name: 'users',
      path: '/users',
      components: { default: UsersList, footer: UserFooter },
      beforeEnter(to, from, next) {
        // console.log('users beforeEnter');
        // console.log(to, from);
        next();
      },
    },
    {
      path: '/:notFound(.*)',
      component: Notfound,
    },
  ],

  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});
router.beforeEach(function (to, from, next) {
  if (to.meta.needsAuth) {
    next();
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  console.log(to, from);
});
export default router;
