<template>
  <div>
    <div class="d-flex mb-2">
      <v-spacer />
      <v-btn @click="openPartyFormDialog">Add Party</v-btn>
    </div>
    <party-list :party-list="partyList" />
    <v-dialog v-model="addPartyDialogVisible" persistent max-width="600px">
      <party-form
        @save-party="saveParty"
        @close-model="addPartyDialogVisible = false"
      />
    </v-dialog>
  </div>
</template>

<script>
import PartyForm from "./PartyForm.vue";
import PartyList from "./PartyList.vue";

export default {
  components: { PartyForm, PartyList },
  name: "Parties",
  data() {
    return {
      addPartyDialogVisible: false,
    };
  },
  mounted() {
    this.$store.dispatch("getParty");
  },
  computed: {
    partyList() {
      return this.$store.state.partyList;
    },
  },
  methods: {
    openPartyFormDialog() {
      this.addPartyDialogVisible = true;
    },
    saveParty(partyRecord) {
      this.$store.dispatch("saveParty", partyRecord);
    },
  },
};
</script>

<style></style>
