<template>
  <v-data-table
    :headers="headers"
    :items="brokerList"
    :items-per-page="8"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: "BrokerList",
  props: ["brokerList"],
  data() {
    return {
      headers: [
        { text: "Name", value: "brokerName" },
        { text: "Email-Id", value: "brokerEmailId" },
        { text: "Contact No", value: "brokerContactNo" },
        { text: "Address", value: "brokerAddress" },
      ],
    };
  },
};
</script>

<style></style>
