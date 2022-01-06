<template>
  <div>
    <v-card>
      <v-card-title>
        <span class="text-h5">Party Form</span>
      </v-card-title>
      <v-card-text>
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
              <v-text-field
                v-model="partyRecord.State"
                label="State"
                required
              />
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
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('close-model')">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="saveParty"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { cloneDeep } from "lodash";

export default {
  name: "PartyForm",
  data() {
    return {
      partyRecord: {
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
    saveParty() {
      this.$emit("save-party", cloneDeep(this.partyRecord));
    },
  },
};
</script>

<style></style>
