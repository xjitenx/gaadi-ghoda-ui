import Vue from "vue";
import Vuex from "vuex";
import router from "../Router";
import axios from "axios";

Vue.use(Vuex);

const state = {
  userProfile: {},
  partyList: [],
  brokerList: [],
};

const getters = {};

const mutations = {
  SET_USER_PROFILE(state, userProfile) {
    state.userProfile = userProfile;
  },
  SET_PARTIE(state, partyList) {
    state.partyList = partyList;
  },
  SET_BROKER(state, brokerList) {
    state.brokerList = brokerList;
  },
};

const actions = {
  loginUser({ dispatch }, loginCredentials) {
    console.log("loginCredentials", loginCredentials, dispatch);
    axios.post("https://localhost:7073/auth/login", loginCredentials).then(
      ({ data: loginResponse }) => {
        if (loginResponse.loginSuccess) {
          router.push({ name: "LorryReceiptManager" });
          dispatch("getUserProfile", loginResponse);
        }
      },
      (error) => console.log("Not Login FAILED ISSUE", error)
    );
  },
  getUserProfile({ commit }, { userId }) {
    console.log("userId", userId, commit);
    axios.post("https://localhost:7073/user/profile", { id: userId }).then(
      ({ data: userProfile }) => {
        console.log("userProfile", userProfile);
        commit("SET_USER_PROFILE", userProfile);
      },
      (error) => console.log("couldnt fetch user profile", error)
    );
  },
  getParty({ commit }) {
    console.log(commit);
    axios.get("https://localhost:7073/party/party").then(
      ({ data: partyList }) => {
        commit("SET_PARTIE", partyList);
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
  getBroker({ commit }) {
    console.log(commit);
    axios.get("https://localhost:7073/broker/broker").then(
      ({ data: brokerList }) => {
        console.log("brokerList", brokerList);
        commit("SET_BROKER", brokerList);
      },
      (error) => console.log("Not Login FAILED ISSUE", error)
    );
  },
  saveBroker({ dispatch }, broker) {
    console.log("broker", broker, dispatch);
    axios.post("https://localhost:7073/broker/broker", broker).then(
      () => {
        dispatch("getBroker");
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
