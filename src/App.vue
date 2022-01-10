<template>
  <v-app>
    <router-view />
  </v-app>
</template>
<script>
export default {
  name: "App",
  mounted() {
    this.$store
      .dispatch("getParty")
      .then(() => this.$store.dispatch("getBroker"))
      .then(() => this.$store.dispatch("getLorryReceipt"));
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/site.scss";
</style>
