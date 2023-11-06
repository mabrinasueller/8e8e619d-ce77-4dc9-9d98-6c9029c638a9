import { createApp } from "vue";
import { createPinia } from "pinia";
import { fetchData } from "@/services/useApi";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.config.globalProperties.$fetchData = fetchData;

createApp(App).use(router).mount("#app");
