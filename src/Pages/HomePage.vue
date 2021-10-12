<template>
  <div class="d-flex flex-column h-100 w-100">
    <top-nav-bar />
    <div class="d-flex h-100 w-100 pa-2">
      <left-nav-bar />
      <div class="ml-2 pa-2 w-85 white">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavBar from "@/Components/Core/LeftNavBar.vue";
import TopNavBar from "@/Components/Core/TopNavBar.vue";

export default {
  name: "HomePage",
  components: {
    TopNavBar,
    LeftNavBar,
  },
  data: () => ({
    name: "World!!",
  }),
};
</script>

<style></style>
