import { createRouter, createWebHistory } from 'vue-router';

import CoachList from '../pages/Coaches/CoachesList.vue';
import CoachDetails from '../pages/Coaches/CoachDetails.vue';
import CoachRegister from '../pages/Coaches/CoachRegister.vue';
import ContactCoache from '../pages/Requests/ContactCoache.vue';
import Requests from '../pages/Requests/RequestsRecived.vue';
import Notfound from '../pages/NotFound.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      props: true,
      component: CoachDetails,
      children: [
        {
          path: 'contact',
          component: ContactCoache,
        },
      ],
    },
    // { path: '/coaches/:id/contact', component: ContactCoache },
    { path: '/register', component: CoachRegister },
    { path: '/request', component: Requests },
    { path: '/:notFound(.*)', component: Notfound },
  ],
});
export default router;
