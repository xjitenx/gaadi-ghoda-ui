import Vue from "vue";
import App from "./App.vue";
import vuetify from "./Plugins/vuetify";
import router from "./Router";
import store from "./Store";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
