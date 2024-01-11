import { createRouter, createWebHistory } from "vue-router";
import { DefaultView, HomeView } from "@views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/test",
      name: "test",
      component: DefaultView,
    },
    {
      path: "/bzf-i",
      name: "bzf-i",
      component: DefaultView,
    },
  ],
});

export default router;
