<template>
  <v-app>
    <router-view />
  </v-app>
</template>
<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("getLorryReceipt");
    this.$store.dispatch("getParty");
    this.$store.dispatch("getBroker");
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/site.scss";
</style>
