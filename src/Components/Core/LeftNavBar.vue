<template>
  <div class="d-flex flex-column white w-15 rounded">
    <v-card class="mx-auto h-100">
      <v-navigation-drawer class="deep-purple accent" light permanent>
        <v-list>
          <v-list-item-group :value="currentItemIndex">
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              @click="() => changeRoute(item.toName)"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
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
      {
        title: "LR Manager",
        icon: "mdi-view-dashboard",
        toName: "LRManager",
      },
      {
        title: "Bill Manager",
        icon: "mdi-account-box",
        toName: "BillManager",
      },
      {
        title: "Parties",
        icon: "mdi-gavel",
        toName: "Parties",
      },
    ],
  }),
  computed: {
    currentItemIndex() {
      return this.items.findIndex((item) => item.toName === this.$route.name);
    },
  },
  methods: {
    changeRoute(routeName) {
      this.$router.push({ name: routeName });
    },
  },
};
</script>

<style></style>
