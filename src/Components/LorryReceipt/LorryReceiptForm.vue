<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Lorry Receipt Form</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="lorryReceiptRecord.origin"
              label="Origin*"
              required
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="lorryReceiptRecord.destination"
              label="Destination*"
              required
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="lorryReceiptRecord.vehicleNo"
              label="Vehicle No.*"
              required
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="lorryReceiptRecord.weight"
              label="Weight*"
              required
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="lorryReceiptRecord.rate"
              label="Rate*"
              required
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="lorryReceiptRecord.partyId"
              label="Party Name*"
              required
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="lorryReceiptRecord.brokerId"
              label="Broker Name*"
              disbaled
              required
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-select />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="lorryReceiptRecord.brokerId"
              label="Broker Name*"
              disbaled
              required
            />
          </v-col>
        </v-row>
      </v-container>
      <small>*indicates required field</small>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="$emit('close-model')">
        Close
      </v-btn>
      <v-btn color="blue darken-1" text @click="saveLorryReceipt"> Save </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { cloneDeep } from "lodash";

export default {
  name: "LorryReceiptForm",
  data() {
    return {
      lorryReceiptRecord: {
        orgId: this.$store.state.userProfile.orgId,
        origin: "",
        destination: "",
        vehicleNo: "",
        weight: "",
        rate: "",
        partyId: "",
        brokerId: "",
      },
    };
  },
  computed: {
    partyList() {
      return this.$store.state.partyList;
    },
    brokerList() {
      return this.$store.state.brokerList;
    },
  },
  methods: {
    saveLorryReceipt() {
      this.$emit("close-model");
      this.$emit("save-lorry-receipt", cloneDeep(this.lorryReceiptRecord));
    },
  },
};
</script>

<style></style>
