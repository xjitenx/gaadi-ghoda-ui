<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">LR Form</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="lrRecord.origin" label="Origin*" required />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="lrRecord.destination"
              label="Destination*"
              required
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="lrRecord.vehicleNo"
              label="Vehicle No.*"
              required
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="lrRecord.weight" label="Weight*" required />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="lrRecord.rate" label="Rate*" required />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="lrRecord.freight"
              label="Freight*"
              disbaled
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="lrRecord.partyName"
              label="Party Name*"
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
      <v-btn color="blue darken-1" text @click="saveLR"> Save </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { cloneDeep } from "lodash";

export default {
  name: "LrForm",
  data: () => ({
    lrRecord: {
      lrNo: 22,
      origin: "",
      destination: "",
      vehicleNo: "",
      weight: "",
      rate: "",
      freight: "",
      partyName: "",
    },
  }),
  methods: {
    saveLR() {
      this.$emit("close-model");
      this.$emit("save-lr", cloneDeep(this.lrRecord));
    },
  },
};
</script>

<style></style>
