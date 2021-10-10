<template>
  <div>
    <div class="w-10">Nav Bar</div>
    <div class="d-flex">
      <div class="d-flex flex-column h-100 w-100">
        <router-link to="/home/lrform">LR Form</router-link>
        <router-link to="/home/lrlist">LR List</router-link>
      </div>
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data: () => ({
    name: "World!!",
  }),
};
</script>

<style></style>
