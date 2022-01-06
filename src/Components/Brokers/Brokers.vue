<template>
  <div>
    <div class="d-flex mb-2">
      <v-spacer />
      <v-btn @click="openBrokerFormDialog">Add Broker</v-btn>
    </div>
    <broker-list :broker-list="brokerList" />
    <v-dialog v-model="addBrokerModelVisible" persistent max-width="600px">
      <broker-form
        @close-model="addBrokerModelVisible = false"
        @save-broker="saveBroker"
      />
    </v-dialog>
  </div>
</template>

<script>
import BrokerForm from "./BrokerForm.vue";
import BrokerList from "./BrokerList.vue";
export default {
  components: { BrokerForm, BrokerList },
  name: "Brokers",
  data() {
    return {
      addBrokerModelVisible: false,
    };
  },
  mounted() {
    this.$store.dispatch("getBroker");
  },
  computed: {
    brokerList() {
      return this.$store.state.brokerList;
    },
  },
  methods: {
    openBrokerFormDialog() {
      this.addBrokerModelVisible = true;
    },
    saveBroker(brokerRecord) {
      this.$store.dispatch("saveBroker", brokerRecord);
    },
  },
};
</script>

<style></style>
