<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Broker Form</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="brokerRecord.FirmName"
              label="Broker Name"
              required
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="brokerRecord.FirstName"
              label="Contact Person First Name"
              required
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="brokerRecord.LastName"
              label="Contact Person Last Name"
              required
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="brokerRecord.EmailId"
              label="Email-Id"
              required
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="brokerRecord.ContactNo"
              label="Contact No."
              required
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="brokerRecord.Address"
              label="Address"
              required
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="brokerRecord.Country"
              label="Country"
              required
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="brokerRecord.State" label="State" required />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="brokerRecord.City" label="City" required />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="brokerRecord.ZipCode"
              label="ZipCode"
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
      <v-btn color="blue darken-1" text @click="saveBroker"> Save </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { cloneDeep } from "lodash";

export default {
  name: "BrokerForm",
  data() {
    return {
      brokerRecord: {
        FirmName: "",
        FirstName: "",
        LastName: "",
        EmailId: "",
        ContactNo: "",
        Address: "",
        City: "",
        State: "",
        Country: "",
        ZipCode: "",
        Status: "Active",
      },
    };
  },
  methods: {
    saveBroker() {
      this.$emit("save-broker", cloneDeep(this.brokerRecord));
      this.$emit("close-model");
    },
  },
};
</script>

<style></style>
