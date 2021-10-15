<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-text-field v-model="partyRecord.partyName" label="Name" required />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="partyRecord.partyEmailId"
            label="Email-Id"
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="partyRecord.partyPrimaryContactNo"
            label="Primary Contact No."
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="partyRecord.partySecondaryContactNo"
            label="Secondary Contact No."
          />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="partyRecord.partyAddress"
            label="Address"
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
        partyName: "",
        partyEmailId: "",
        partyPrimaryContactNo: "",
        partySecondaryContactNo: "",
        partyAddress: "",
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
