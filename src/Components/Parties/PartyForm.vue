<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="partyRecord.Name"
            label="Party Name"
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="partyRecord.PersonFirstName"
            label="Contact Person First Name"
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="partyRecord.PersonLastName"
            label="Contact Person Last Name"
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="partyRecord.EmailId"
            label="Email-Id"
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="partyRecord.ContactNo"
            label="Contact No."
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="partyRecord.Address"
            label="Address"
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="partyRecord.Country"
            label="Country"
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field v-model="partyRecord.State" label="State" required />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field v-model="partyRecord.City" label="City" required />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="partyRecord.ZipCode"
            label="ZipCode"
            required
          />
        </v-col>
      </v-row>
    </v-container>
    <v-btn @click="saveParty">Add Party</v-btn>
  </div>
</template>

<script>
import { cloneDeep } from "lodash";

export default {
  name: "PartyForm",
  data() {
    return {
      partyRecord: {
        OrgId: "9c97fd6f-5bed-43d0-a8ad-a396babae3cc",
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
    saveParty() {
      this.$emit("save-party", cloneDeep(this.partyRecord));
    },
  },
};
</script>

<style></style>
