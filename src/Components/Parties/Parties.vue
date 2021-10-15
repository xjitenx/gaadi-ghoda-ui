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
  data: () => ({
    partyList: [
      {
        partyName: "Ambe Impex",
        partyEmailId: "ambe@poplol.com",
        partyPrimaryContactNo: "3232323232",
        partySecondaryContactNo: "3232323232",
        partyAddress: "Delhi",
      },
      {
        partyName: "Ambe Impex2",
        partyEmailId: "ambe@poplol.com",
        partyPrimaryContactNo: "3232323232",
        partySecondaryContactNo: "3232323322",
        partyAddress: "Delhi",
      },
      {
        partyName: "Ambe Impex3",
        partyEmailId: "ambe@poplol.com",
        partyPrimaryContactNo: "3233232322",
        partySecondaryContactNo: "3232232322",
        partyAddress: "Delhi",
      },
    ],
  }),
  methods: {
    saveParty(partyRecord) {
      window.console.log(partyRecord);
      this.partyList.push(partyRecord);
    },
  },
};
</script>

<style></style>
