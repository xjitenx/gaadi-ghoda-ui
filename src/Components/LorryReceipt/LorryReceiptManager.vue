<template>
  <div>
    <div class="d-flex mb-2">
      <v-spacer />
      <v-btn @click="addLorryReceipt">Add Lorry Receipt</v-btn>
    </div>
    <lorry-receipt-list :lorry-receipt-list="lorryReceiptList" />
    <v-dialog v-model="addLRModelVisible" persistent max-width="600px">
      <lorry-receipt-form
        @close-model="addLRModelVisible = false"
        @save-lorry-receipt="saveLorryReceipt"
      />
    </v-dialog>
  </div>
</template>

<script>
import LorryReceiptForm from "./LorryReceiptForm.vue";
import LorryReceiptList from "./LorryReceiptList.vue";
export default {
  name: "LorryReceiptManager",
  components: { LorryReceiptForm, LorryReceiptList },
  data: () => ({
    addLRModelVisible: false,
    lorryReceiptList: [
      {
        no: 1,
        origin: "Mundra",
        destination: "Delhi",
        vehicleNo: "GJ-12A-2323",
        weight: "32",
        rate: "2500",
        freight: "80000",
        partyName: "ABC Party",
      },
      {
        no: 2,
        origin: "Mundra",
        destination: "Delhi",
        vehicleNo: "GJ-12A-2323",
        weight: "32",
        rate: "2500",
        freight: "80000",
        partyName: "ABC Party",
      },
      {
        no: 3,
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
    addLorryReceipt() {
      this.addLRModelVisible = true;
    },
    saveLorryReceipt(lorryReceiptRecord) {
      this.lorryReceiptList.push(lorryReceiptRecord);
    },
  },
};
</script>

<style></style>
