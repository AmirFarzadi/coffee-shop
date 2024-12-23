import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/style.css";
import "./assets/css/main.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import router from './router/router.js';

const app =  createApp(App)
app.use(router)
app.mount("#app");
