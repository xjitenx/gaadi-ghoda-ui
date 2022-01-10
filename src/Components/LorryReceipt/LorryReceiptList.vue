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
        { text: "LR No", value: "no" },
        { text: "Origin", value: "origin" },
        { text: "Destination", value: "destination" },
        { text: "Vehicle No.", value: "vehicleNo" },
        { text: "Weight", value: "weight" },
        { text: "Rate", value: "rate" },
        { text: "Party Name", value: "partyName" },
        { text: "Broker Name", value: "brokerName" },
      ],
    };
  },
};
</script>

<style></style>
