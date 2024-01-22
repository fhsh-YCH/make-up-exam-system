import { createRouter, createWebHistory } from "vue-router";
import login from "./page/Login.vue";
import register from "./page/Register.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: login,
    },
    {
      path: "/register",
      component: register,
    },
  ],
});

export default router;
