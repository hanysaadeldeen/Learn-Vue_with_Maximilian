import { createApp } from 'vue';

import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import Notfound from './components/notfound/Notfound.vue';
import TeamFooter from './components/teams/TeamFooter.vue';
import UserFooter from './components/users/UserFooter.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/teams',
      name: 'tems',
      components: { default: TeamsList, footer: TeamFooter },
      alias: '/',
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
  // console.log('global beforeEach');
  // console.log(to, from);
  next();
});

const app = createApp(App);

app.use(router);

app.mount('#app');
