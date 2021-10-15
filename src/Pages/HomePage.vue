<template>
  <div class="d-flex flex-column h-100 w-100">
    <top-nav-bar />
    <div class="d-flex h-100 w-100 pa-2">
      <left-nav-bar />
      <v-card class="h-100 w-100 ml-2">
        <v-card-title>
          <span class="text-h6">{{ layoutPresets[$route.name].title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <router-view />
          </v-container>
        </v-card-text>
      </v-card>
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
    layoutPresets: {
      LRManager: {
        title: "LR Manager",
      },
      BillManager: {
        title: "Bill Manager",
      },
      Parties: {
        title: "Parties",
      },
    },
  }),
};
</script>

<style></style>
