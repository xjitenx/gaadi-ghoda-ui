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
  }),
  methods: {
    addLorryReceipt() {
      this.addLRModelVisible = true;
    },
    saveLorryReceipt(lorryReceiptRecord) {
      this.$store.dispatch("saveLorryReceipt", lorryReceiptRecord);
    },
  },
  computed: {
    lorryReceiptList() {
      return this.$store.state.lorryReceipt;
    },
  },
};
</script>

<style></style>
