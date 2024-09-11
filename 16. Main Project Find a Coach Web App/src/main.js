import { createApp } from 'vue';

import App from './App.vue';
import router from './router/routers';
import store from './store/store';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import TheFilter from './components/layouts/TheFilter.vue';
const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('the-filter', TheFilter);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.mount('#app');
