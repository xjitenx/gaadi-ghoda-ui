import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "@/Pages/LoginPage.vue";
import HomePage from "@/Pages/HomePage.vue";
import LorryReceiptManager from "@/Components/LorryReceipt/LorryReceiptManager.vue";
import BillManager from "@/Components/BillManager/BillManager.vue";
import Parties from "@/Components/Parties/Parties.vue";
import Brokers from "@/Components/Brokers/Brokers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginPage,
  },
  {
    path: "",
    name: "Home",
    component: HomePage,
    children: [
      {
        path: "LorryReceiptManager",
        name: "LorryReceiptManager",
        component: LorryReceiptManager,
      },
      {
        path: "BillManager",
        name: "BillManager",
        component: BillManager,
      },
      {
        path: "Parties",
        name: "Parties",
        component: Parties,
      },
      {
        path: "Brokers",
        name: "Brokers",
        component: Brokers,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
