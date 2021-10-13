<template>
  <div class="d-flex flex-column">
    <div>LR List</div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="8"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: "LrList",
  data() {
    return {
      headers: [
        { text: "LR No.", value: "lrNo" },
        { text: "Origin", value: "origin" },
        { text: "Destination", value: "destination" },
        { text: "Vehicle No.", value: "vehicleNo" },
        { text: "Weight", value: "weight" },
        { text: "Rate", value: "rate" },
        { text: "Freight", value: "freight" },
        { text: "Party Name", value: "partyName" },
      ],
      desserts: [
        {
          lrNo: 1,
          origin: "",
          destination: "",
          vehicleNo: "",
          weight: "",
          rate: "",
          freight: "",
          partyName: "",
        },
        {
          lrNo: 2,
          origin: "",
          destination: "",
          vehicleNo: "",
          weight: "",
          rate: "",
          freight: "",
          partyName: "",
        },
        {
          lrNo: 3,
          origin: "",
          destination: "",
          vehicleNo: "",
          weight: "",
          rate: "",
          freight: "",
          partyName: "",
        },
      ],
    };
  },
};
</script>

<style></style>
