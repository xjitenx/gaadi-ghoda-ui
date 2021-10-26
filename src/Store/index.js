import Vue from "vue";
import Vuex from "vuex";
import router from "../Router";
import axios from "axios";

Vue.use(Vuex);

const state = {
  posts: [],
};

const getters = {};

const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
};

const actions = {
  async loginUser({ commit }, loginCredentials) {
    console.log("loginCredentials", loginCredentials, commit);
    try {
      let res = await axios.post(
        "https://localhost:44331/auth/login",
        loginCredentials
      );
      let { data: loginSuccess } = await res;
      console.log("loginResult", loginSuccess);
      if (loginSuccess) router.push({ name: "LorryReceiptManager" });
    } catch (e) {
      console.log("Not Login FAILED ISSUE", e);
    }
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
