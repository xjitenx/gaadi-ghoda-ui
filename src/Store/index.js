import Vue from "vue";
import Vuex from "vuex";
import router from "../Router";
import axios from "axios";

Vue.use(Vuex);

const state = {
  partyList: [],
};

const getters = {};

const mutations = {
  SET_PARTIES(state, partyList) {
    state.partyList = partyList;
  },
};

const actions = {
  loginUser({ commit }, loginCredentials) {
    console.log("loginCredentials", loginCredentials, commit);
    axios.post("https://localhost:7073/auth/login", loginCredentials).then(
      ({ loginSuccess }) => {
        if (loginSuccess) router.push({ name: "LorryReceiptManager" });
      },
      (error) => console.log("Not Login FAILED ISSUE", error)
    );
  },
  getParty({ commit }) {
    console.log(commit);
    axios.get("https://localhost:7073/party/party").then(
      ({ data: partyList }) => {
        commit("SET_PARTIES", partyList);
      },
      (error) => console.log("Not Login FAILED ISSUE", error)
    );
  },
  saveParty({ dispatch }, party) {
    console.log("party", party, dispatch);
    axios.post("https://localhost:7073/party/party", party).then(
      () => {
        dispatch("getParty");
      },
      (error) => console.log("Not able to save party", error)
    );
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
