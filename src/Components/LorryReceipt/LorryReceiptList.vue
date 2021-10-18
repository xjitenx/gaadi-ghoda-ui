<template>
  <v-data-table
    :headers="headers"
    :items="lorryReceiptList"
    :items-per-page="8"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: "LorryReceiptList",
  props: ["lorryReceiptList"],
  data() {
    return {
      headers: [
        { text: "S.No", value: "no" },
        { text: "Origin", value: "origin" },
        { text: "Destination", value: "destination" },
        { text: "Vehicle No.", value: "vehicleNo" },
        { text: "Weight", value: "weight" },
        { text: "Rate", value: "rate" },
        { text: "Freight", value: "freight" },
        { text: "Party Name", value: "partyName" },
      ],
    };
  },
};
</script>

<style></style>
