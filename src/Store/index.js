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
  loginUser({ commit }, loginCredentials) {
    axios.post("https://localhost:7073/api/auth/login", loginCredentials).then(
      ({ data: userProfile }) => {
        if (userProfile && userProfile.orgId && userProfile.id) {
          commit("SET_USER_PROFILE", userProfile);
          router.push({ name: "LorryReceiptManager" });
        }
      },
      (error) => console.log("Login FAILED", error)
    );
  },
  getParty({ commit }) {
    axios.get("https://localhost:7073/party/party").then(
      ({ data: partyList }) => {
        commit("SET_PARTIE", partyList);
      },
      (error) => console.log("Couldnt fetch party", error)
    );
  },
  saveParty({ dispatch }, party) {
    axios.post("https://localhost:7073/party/party", party).then(
      () => {
        dispatch("getParty");
      },
      (error) => console.log("Couldnt save party", error)
    );
  },
  getBroker({ commit }) {
    axios.get("https://localhost:7073/broker/broker").then(
      ({ data: brokerList }) => {
        commit("SET_BROKER", brokerList);
      },
      (error) => console.log("Couldnt fetch broker", error)
    );
  },
  saveBroker({ dispatch }, broker) {
    axios.post("https://localhost:7073/broker/broker", broker).then(
      () => {
        dispatch("getBroker");
      },
      (error) => console.log("Couldnt save broker", error)
    );
  },
  getLorryReceipt({ state, commit }) {
    axios.get("https://localhost:7073/lorryreceipt/lorryreceipt").then(
      ({ data: lorryReceiptList }) => {
        const lorryReceiptListData = lorryReceiptList.map((lr) => ({
          ...lr,
          partyName:
            state.partyList.find((party) => party.id === lr.partyId)?.name ||
            "-",
          brokerName:
            state.brokerList.find((broker) => broker.id === lr.brokerId)
              ?.name || "-",
        }));
        commit("SET_LORRY_RECEIPT", lorryReceiptListData);
      },
      (error) => console.log("Couldnt fetch lorry reciepts", error)
    );
  },
  saveLorryReceipt({ dispatch }, lorryReceipt) {
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
