<template>
  <v-app-bar class="deep-purple accent-2" light elevation="0">
    <v-toolbar-title class="white--text">Gaadi Ghoda</v-toolbar-title>
    <v-spacer />
    <v-avatar class="mr-2" size="30px">
      <img
        class="avatar-img"
        src="https://www.gravatar.com/avatar/?d=mp"
        alt="Avatar"
      />
    </v-avatar>
    User_Name
    <v-icon color="white" size="26" class="ml-2">mdi-power</v-icon>
  </v-app-bar>
</template>

<script>
export default {
  name: "TopNavBar",
};
</script>

<style lang="scss">
.avatar-img {
  border: 2px solid white;
}
</style>
