<template>
  <div>
    <div class="d-flex mb-2">
      <v-spacer />
      <v-btn @click="addLR">Add LR</v-btn>
    </div>
    <lr-list :lr-list="lrList" />
    <v-dialog v-model="addLRModelVisible" persistent max-width="600px">
      <lr-form @close-model="addLRModelVisible = false" @save-lr="saveLr" />
    </v-dialog>
  </div>
</template>

<script>
import LrForm from "./LrForm.vue";
import LrList from "./LrList.vue";
export default {
  name: "LrManager",
  components: { LrForm, LrList },
  data: () => ({
    addLRModelVisible: false,
    lrList: [
      {
        lrNo: 1,
        origin: "Mundra",
        destination: "Delhi",
        vehicleNo: "GJ-12A-2323",
        weight: "32",
        rate: "2500",
        freight: "80000",
        partyName: "ABC Party",
      },
      {
        lrNo: 2,
        origin: "Mundra",
        destination: "Delhi",
        vehicleNo: "GJ-12A-2323",
        weight: "32",
        rate: "2500",
        freight: "80000",
        partyName: "ABC Party",
      },
      {
        lrNo: 3,
        origin: "Mundra",
        destination: "Delhi",
        vehicleNo: "GJ-12A-2323",
        weight: "32",
        rate: "2500",
        freight: "80000",
        partyName: "ABC Party",
      },
    ],
  }),
  methods: {
    addLR() {
      this.addLRModelVisible = true;
    },
    saveLr(lrRecord) {
      this.lrList.push(lrRecord);
    },
  },
};
</script>

<style></style>
