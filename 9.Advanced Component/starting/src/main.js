import { createApp } from "vue";
import App from "./App.vue";
import QuoteMessage from "./components/QuoteMessage.vue";
import AuthorCom from "./components/AuthorCom.vue";
import NewCom from "./components/NewCom.vue";
const app = createApp(App);

app.component("Quote-message", QuoteMessage);
app.component("Author-Com", AuthorCom);
app.component("New-Com", NewCom);
app.mount("#app");
