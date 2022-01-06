import Vue from "vue";
import Vuex from "vuex";
import router from "../Router";
import axios from "axios";

Vue.use(Vuex);

const state = {
  userProfile: {},
  partyList: [],
  brokerList: [],
  lorryReceipt: [],
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
  SET_LORRY_RECEIPT(state, lorryReceipt) {
    state.lorryReceipt = lorryReceipt;
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
      (error) => console.log("Login FAILED", error)
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
      (error) => console.log("Couldnt fetch party", error)
    );
  },
  saveParty({ dispatch }, party) {
    console.log("party", party, dispatch);
    axios.post("https://localhost:7073/party/party", party).then(
      () => {
        dispatch("getParty");
      },
      (error) => console.log("Couldnt save party", error)
    );
  },
  getBroker({ commit }) {
    console.log(commit);
    axios.get("https://localhost:7073/broker/broker").then(
      ({ data: brokerList }) => {
        console.log("brokerList", brokerList);
        commit("SET_BROKER", brokerList);
      },
      (error) => console.log("Couldnt fetch broker", error)
    );
  },
  saveBroker({ dispatch }, broker) {
    console.log("broker", broker, dispatch);
    axios.post("https://localhost:7073/broker/broker", broker).then(
      () => {
        dispatch("getBroker");
      },
      (error) => console.log("Couldnt save broker", error)
    );
  },
  getLorryReceipt({ commit }) {
    console.log(commit);
    axios.get("https://localhost:7073/lorryreceipt/lorryreceipt").then(
      ({ data: lorryReceiptList }) => {
        console.log("brokerList", lorryReceiptList);
        commit("SET_LORRY_RECEIPT", lorryReceiptList);
      },
      (error) => console.log("Couldnt fetch lorry reciepts", error)
    );
  },
  saveLorryReceipt({ dispatch }, lorryReceipt) {
    console.log("lorryReceipt", lorryReceipt, dispatch);
    axios
      .post("https://localhost:7073/lorryreceipt/lorryreceipt", lorryReceipt)
      .then(
        () => {
          dispatch("getLorryReceipt");
        },
        (error) => console.log("Couldnt save lorry reciepts", error)
      );
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
