import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "@/Pages/LoginPage.vue";
import HomePage from "@/Pages/HomePage.vue";
import LRForm from "@/Components/LR/LRForm.vue";
import LRList from "@/Components/LR/LRList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
    children: [
      {
        path: "lrform",
        component: LRForm,
      },
      {
        path: "lrlist",
        component: LRList,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
