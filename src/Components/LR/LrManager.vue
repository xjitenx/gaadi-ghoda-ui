<template>
  <div>
    <div class="d-flex align-center bg-grey">
      <h3>LR Manager</h3>
      <v-spacer />
      <v-btn @click="addLR">Add LR</v-btn>
    </div>
    <lr-list />
    <v-dialog v-model="addLRModelVisible" persistent max-width="600px">
      <lr-form @close-model="addLRModelVisible = false" />
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
  }),
  methods: {
    addLR() {
      this.addLRModelVisible = true;
    },
  },
};
</script>

<style></style>
