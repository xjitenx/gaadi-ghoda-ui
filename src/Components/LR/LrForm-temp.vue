<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">LR Form</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="lrData.origin"
              label="Origin*"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="lrData.destination"
              label="Destination*"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="lrData.vehicleNo"
              label="Vehicle No.*"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="lrData.weight"
              label="Weight*"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="lrData.rate"
              label="Rate*"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="lrData.freight"
              label="Freight*"
              disbaled
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="lrData.partyName"
              label="Party Name*"
              required
            ></v-text-field>
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
export default {
  name: "LrForm",
  data: () => ({
    lrData: {
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
      window.console.log(this.lrData);
      this.$emit("close-model");
    },
  },
};
</script>

<style></style>
