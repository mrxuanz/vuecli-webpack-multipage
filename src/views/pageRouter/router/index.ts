import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/page1",
  },
  {
    path: "/page1",
    component: () => import("@/views/pageRouter/cpns/page1.vue"),
  },
  {
    path: "/page2",
    component: () => import("@/views/pageRouter/cpns/page2.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/pageRouter/cpns/not-found.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
