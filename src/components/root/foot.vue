<template>
  <v-footer height="auto" elevation="5" padless tile>
    <v-card  tile color="#272727" class="lighten-1 white--text text-center flex">
      <v-card-text class>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="20px" @click="link(icon)">{{icon}}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text">
        MADE WITH
        <v-icon color="red">mdi-heart</v-icon>BUDDHA
      </v-card-text>
      <v-divider color="white"></v-divider>
      <v-card-text class="white--text text-center">
        {{ new Date().getFullYear() }} —
        <strong>BUDDHA</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"]
  }),

  methods: {
    link(parms) {
      if (parms == "mdi-facebook") {
        window.open("https://www.facebook.com/ItSBuddhaHERE", "_blank");
      } else if (parms == "mdi-twitter") {
        window.open("https://twitter.com/buddha_nag", "_blank");
      } else if (parms == "mdi-instagram") {
        window.open(
          "https://www.instagram.com/b_u_d_d_h_a_n_a_g/?hl=en",
          "_blank"
        );
      }
    }
  }
};
</script>

<style>
</style>