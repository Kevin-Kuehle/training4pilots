import { createApp } from "vue";
import { createPinia } from "pinia";
import { initMenusService } from "./services/apiService";
import { Quasar } from "quasar";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

import App from "./App.vue";
import router from "./router";

import "./assets/scss/style.scss";

import { useDeviceStore } from "@stores";

const app = createApp(App);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
app.use(createPinia());
app.use(router);

app.mount("#app");

// custom initialization
initMenusService();
