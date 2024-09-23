import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GamesView from "../views/GamgesView.vue";
import GroupView from "../views/GroupView.vue";
import VideoView from "../views/VideoView.vue";
import Marketplace from "../views/MarketplaceView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home",
    name: "AboutView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/games",
    name: "GamesView",
    component: GamesView,
  },
  {
    path: "/Group",
    name: "GroupView",
    component: GroupView,
  },
  {
    path: "/vedio",
    name: "VideoView",
    component: VideoView,
  },
  {
    path: "/Marketplace",
    name: "Marketplace",
    component: Marketplace,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
