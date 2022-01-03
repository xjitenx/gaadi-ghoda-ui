<template>
  <div>
    <broker-form @save-broker="saveBroker" />
    <broker-list :broker-list="brokerList" />
  </div>
</template>

<script>
import BrokerForm from "./BrokerForm.vue";
import BrokerList from "./BrokerList.vue";
export default {
  components: { BrokerForm, BrokerList },
  name: "Parties",
  data: () => ({
    brokerList: [
      {
        orgId: "asdsad",
        bookieId: "sadsadsad",
        brokerId: "poplol123sss",
        brokerName: "Ambe Impex",
        brokerEmailId: "ambe@poplol.com",
        brokerContactNo: "3232323232",
        brokerAddress: "Delhi",
      },
      {
        orgId: "asdsad",
        bookieId: "sadsadsad",
        brokerId: "poplol123sss",
        brokerName: "Ambe Impex2",
        brokerEmailId: "ambe@poplol.com",
        brokerContactNo: "3232323232",
        brokerAddress: "Delhi",
      },
      {
        orgId: "asdsad",
        bookieId: "sadsadsad",
        brokerId: "poplol123sss",
        brokerName: "Ambe Impex3",
        brokerEmailId: "ambe@poplol.com",
        brokerContactNo: "3233232322",
        brokerAddress: "Delhi",
      },
    ],
  }),
  methods: {
    saveBroker(brokerRecord) {
      window.console.log(brokerRecord);
      this.brokerList.push(brokerRecord);
    },
  },
};
</script>

<style></style>
