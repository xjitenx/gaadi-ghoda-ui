<template>
  <v-data-table
    :headers="headers"
    :items="partyList"
    :items-per-page="8"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: "PartyList",
  props: ["partyList"],
  data() {
    return {
      headers: [
        { text: "Name", value: "partyName" },
        { text: "Email-Id", value: "partyEmailId" },
        { text: "Primary Contact", value: "partyPrimaryContactNo" },
        { text: "Secondary Contact", value: "partySecondaryContactNo" },
        { text: "Address", value: "partyAddress" },
      ],
    };
  },
};
</script>

<style></style>
