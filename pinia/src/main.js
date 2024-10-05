import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

// Use the Pinia instance
app.use(pinia);
app.mount("#app");
