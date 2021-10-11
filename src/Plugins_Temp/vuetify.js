import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#4AA7A9",
        secondary: "#2B2B2B",
        secondaryLight: "#4E515B",
        accent: "#8c9eff",
        error: "#D52B1E",
        background: "#eeedf2",
        trackColor: "#D8D8D8",
      },
    },
  },
});
