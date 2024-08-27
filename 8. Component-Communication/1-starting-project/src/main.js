import { createApp } from "vue";
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import FormContact from "./components/FormContact.vue";
// import FormContact from "./components/FormContact.vue";
const app = createApp(App);

app.component("Friend-Contact", FriendContact);
app.component("Form-Contact", FormContact);
app.mount("#app");
