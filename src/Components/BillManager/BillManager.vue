<template>
  <div>Bill Manager</div>
</template>

<script>
export default {
  name: "BillManager",
  created() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>

<style></style>
