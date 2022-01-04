<template>
  <v-data-table
    :headers="headers"
    :items="partyList"
    :items-per-page="5"
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
        { text: "Name", value: "name" },
        { text: "First Name", value: "personFirstName" },
        { text: "Last Name", value: "personLastName" },
        { text: "Email-Id", value: "emailId" },
        { text: "Contact", value: "contactNo" },
        { text: "Address", value: "address" },
        { text: "Country", value: "country" },
        { text: "State", value: "state" },
        { text: "City", value: "city" },
        { text: "ZipCode", value: "zipCode" },
      ],
    };
  },
};
</script>

<style></style>
