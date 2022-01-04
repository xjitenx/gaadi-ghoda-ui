<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="brokerRecord.Name"
            label="Broker Name"
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="brokerRecord.PersonFirstName"
            label="Contact Person First Name"
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="brokerRecord.PersonLastName"
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
    <v-btn @click="svaeBroker">Add Broker</v-btn>
  </div>
</template>

<script>
import { cloneDeep } from "lodash";

export default {
  name: "BrokerForm",
  data() {
    return {
      brokerRecord: {
        OrgId: this.$store.state.userProfile.orgId,
        Name: "",
        PersonFirstName: "",
        PersonLastName: "",
        EmailId: "",
        ContactNo: "",
        Address: "",
        Country: "",
        State: "",
        City: "",
        ZipCode: "",
      },
    };
  },
  methods: {
    svaeBroker() {
      this.$emit("save-broker", cloneDeep(this.brokerRecord));
    },
  },
};
</script>

<style></style>
