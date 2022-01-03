<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="brokerRecord.brokerName"
            label="Name"
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="brokerRecord.brokerEmailId"
            label="Email-Id"
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="brokerRecord.brokerContactNo"
            label="Primary Contact No."
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="brokerRecord.brokerAddress"
            label="Address"
            required
          />
        </v-col>
      </v-row>
    </v-container>
    <v-btn @click="saveBroker">Add Broker</v-btn>
  </div>
</template>

<script>
import { cloneDeep } from "lodash";

export default {
  name: "BrokerForm",
  data() {
    return {
      brokerRecord: {
        brokerName: "",
        brokerEmailId: "",
        brokerContactNo: "",
        brokerAddress: "",
      },
    };
  },
  methods: {
    saveBroker() {
      this.$emit("save-broker", cloneDeep(this.brokerRecord));
    },
  },
};
</script>

<style></style>
