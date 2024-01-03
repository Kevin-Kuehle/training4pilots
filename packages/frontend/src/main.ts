import { createApp } from "vue";
import { createPinia } from "pinia";
import { initMenusService } from "./services/apiService";

import App from "./App.vue";
import router from "./router";

import "./assets/scss/style.scss";

import { useDeviceStore } from "@stores";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// custom initialization
initMenusService();
