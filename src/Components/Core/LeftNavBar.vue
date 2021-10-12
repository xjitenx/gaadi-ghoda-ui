<template>
  <div class="d-flex flex-column white w-15 rounded">
    <v-card class="mx-auto h-100">
      <v-navigation-drawer class="deep-purple accent" light permanent>
        <v-list>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <router-link
                  class="text-decoration-none black--text h-100"
                  :to="item.to"
                >
                  {{ item.title }}
                </router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LeftNavBar",
  data: () => ({
    items: [
      { title: "LR Manager", icon: "mdi-view-dashboard", to: "lrform" },
      { title: "Bill Manager", icon: "mdi-account-box", to: "lrlist" },
      { title: "Parties", icon: "mdi-gavel", to: "" },
    ],
  }),
};
</script>

<style></style>
