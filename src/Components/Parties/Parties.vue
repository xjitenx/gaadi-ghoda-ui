<template>
  <div>
    <party-form @save-party="saveParty" />
    <party-list :party-list="partyList" />
  </div>
</template>

<script>
import PartyForm from "./PartyForm.vue";
import PartyList from "./PartyList.vue";

export default {
  components: { PartyForm, PartyList },
  name: "Parties",
  mounted() {
    this.$store.dispatch("getParty");
  },
  computed: {
    partyList() {
      return this.$store.state.partyList;
    },
  },
  methods: {
    saveParty(partyRecord) {
      this.$store.dispatch("saveParty", partyRecord);
    },
  },
};
</script>

<style></style>
