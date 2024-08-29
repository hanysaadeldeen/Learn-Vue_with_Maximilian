import { createApp } from "vue";

import App from "./App.vue";
const app = createApp(App);

import Basecard from "./UI/BaseCard.vue";
import BaseButton from "./UI/BaseButton.vue";
import BaseDialog from "./UI/BaseDialog.vue";

app.component("base-card", Basecard);
app.component("base-button", BaseButton);
app.component("base-Dialog", BaseDialog);
app.mount("#app");
