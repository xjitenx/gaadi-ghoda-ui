<template>
  <div class="d-flex align-center justify-center h-100 w-100">
    <login />
  </div>
</template>

<script>
import Login from "../Components/Authentication/Login.vue";

export default {
  name: "LoginPage",
  components: {
    Login,
  },
  data: () => ({}),
};
</script>

<style></style>
