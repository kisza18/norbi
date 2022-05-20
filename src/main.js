import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);

app.use(MotionPlugin);

app.mount("#app");

/* createApp(App).mount('#app')
 */
