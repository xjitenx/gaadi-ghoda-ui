import Vue from "vue";
import Vuex from "vuex";
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
  getPosts({ commit }) {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      commit("SET_POSTS", response.data);
    });
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
