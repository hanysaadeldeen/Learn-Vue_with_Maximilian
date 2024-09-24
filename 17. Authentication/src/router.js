import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistation from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import LoginPage from './pages/auth/LoginPage.vue';
import SignUpPage from './pages/auth/SignUpPage.vue';
import store from './store/index';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    {
      path: '/register',
      component: CoachRegistation,
      meta: { requeireAuth: true },
    },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: { requeireAuth: true },
    },
    {
      path: '/login',
      component: LoginPage,
      meta: { requeireUnAuth: true },
    },
    {
      path: '/signup',
      component: SignUpPage,
      meta: { requeireUnAuth: true },
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});
router.beforeEach(function (to, _, next) {
  if (to.meta.requeireAuth && !store.getters.isAuthenticated) {
    next('/login');
  } else if (to.meta.requeireAuth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
