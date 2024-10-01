import { createApp } from 'vue';

import App from './App.vue';
import logerMixin from './components/mixin/logerMixin';

const app = createApp(App);

app.mixin(logerMixin);
app.mount('#app');
