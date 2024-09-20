import { createApp } from 'vue';

import App from './App.vue';
import router from './router/routers';
import store from './store/store';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import TheFilter from './components/layouts/TheFilter.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('the-filter', TheFilter);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spiner', BaseSpinner);
app.component('base-dialog', BaseDialog);
app.mount('#app');
