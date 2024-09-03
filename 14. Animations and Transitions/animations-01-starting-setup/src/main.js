import { createApp } from 'vue';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import router from './routes';

const app = createApp(App);

app.component('base-modal', BaseModal);
app.use(router);
router.isReady().then(function () {
  app.mount('#app');
});
