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

const app = createApp(App);

const QUASAR_CONFIG = {
  brand: {
    primary: "#1c242d",
    secondary: "#ede1cd",
    accent: "#d4bb89",
    dark: "#292929",
    "dark-page": "#000000",
    positive: "#21BA45",
    negative: "#C10015",
    info: "#31CCEC",
    warning: "#F2C037",
  },
};

app.use(Quasar, {
  config: QUASAR_CONFIG,
});

app.use(createPinia());
app.use(router);

app.mount("#app");

// custom initialization
initMenusService();
