import Vue from "vue";
import App from "./App.vue";
import vuetify from "./Plugins/vuetify";
import router from "./Router";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
