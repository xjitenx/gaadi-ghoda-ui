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
  name: "Brokers",
  mounted() {
    this.$store.dispatch("getBroker");
  },
  computed: {
    brokerList() {
      return this.$store.state.brokerList;
    },
  },
  methods: {
    saveBroker(brokerRecord) {
      this.$store.dispatch("saveBroker", brokerRecord);
    },
  },
};
</script>

<style></style>
