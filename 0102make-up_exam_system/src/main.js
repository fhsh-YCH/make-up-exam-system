// import { createApp } from "vue";
// import "./style.css";
// import App from "./APP.vue";
// import router from "./router";
// const app = createApp(App);
// app.use(router);
// app.mount("#app");
// if (app._container) {
//   app.unmount();
// }
// createApp(App).use(router).mount("#app");

import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD_zIjYd0KUwCSCXQWyhPK8U5jhzfdScG4",
  authDomain: "make-up-exam-system.firebaseapp.com",
  projectId: "make-up-exam-system",
  storageBucket: "make-up-exam-system.appspot.com",
  messagingSenderId: "144881406965",
  appId: "1:144881406965:web:d93980153e06c8cfc886bc",
  measurementId: "G-3WLT46CCBS",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const vueApp = createApp(App);

vueApp.use(router);

vueApp.config.globalProperties.$app = app;

vueApp.mount("#app");

export { app };
