<template>
  <div
    class="d-flex flex-column justify-items-center pa-4 rounded white w-20 h-35"
  >
    <h2>Login</h2>
    <v-text-field
      v-model="emailId"
      outline
      hide-details
      label="Email-Id"
      type="text"
      class="mt-2"
    />
    <v-text-field
      v-model="password"
      outline
      hide-details
      label="Password"
      type="password"
      class="mt-3"
    />
    <v-btn outlined class="mt-3 white--text" color="blue" @click="loginUser">
      Login
    </v-btn>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "Login",
  data: () => ({
    emailId: "jitender.gow@gmail.com",
    password: "poplol123",
  }),
  methods: {
    async loginUser() {
      // let res = await axios.post("https://localhost:44331/auth/login", {
      //   emailId: this.emailId,
      //   password: this.password,
      // });
      // let { data } = await res;
      this.$router.push({ name: "LorryReceiptManager" });
    },
  },
};
</script>

<style></style>
