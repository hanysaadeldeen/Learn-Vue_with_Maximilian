import { createApp } from "vue";
import App from "./App.vue";
import BlueDiv from "./components/BlueDiv.vue";
import RedDiv from "./components/RedDiv.vue";
import GreenDiv from "./components/GreenDiv.vue";

const app = createApp(App);
app.component("Blue-Div", BlueDiv);
app.component("Red-Div", RedDiv);
app.component("Green-Div", GreenDiv);
app.mount("#app");
