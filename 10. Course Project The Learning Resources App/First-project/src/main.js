import { createApp } from "vue";

import App from "./App.vue";
import ControlSource from "./components/ControlSource.vue";
import AddNewResource from "./components/AddNewResource.vue";
import ResourcesList from "./components/ResourcesList.vue";
import BaseButton from "./components/UI/BaseButton.vue";
const app = createApp(App);

app.component("Control-Resorce", ControlSource);
app.component("Base-Button", BaseButton);
app.component("New-Resource", AddNewResource);
app.component("Resources-list", ResourcesList);
app.mount("#app");
