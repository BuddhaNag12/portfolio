<template>
  <nav>
    <v-card class="overflow-hidden" tile>
      <v-app-bar app dark >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
        <div>
          <v-img src="@/assets/logo.png" size="20px" height="50%" width="50%"></v-img>
        </div>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down pa-2 toolbar">
          <v-btn text color="white" @click="$vuetify.goTo('#home')">Home</v-btn>
          <v-btn text color="white" @click="$vuetify.goTo('#projects')">Projects</v-btn>
          <v-btn text color="white" @click="$vuetify.goTo('#contact-me')">Contact Us</v-btn>
          <v-btn text color="white" @click="$vuetify.goTo('#about-me')">About</v-btn>
        </v-toolbar-items>
      </v-app-bar>
    </v-card>
    <v-navigation-drawer v-model="drawer" app left dark>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <div>
              <v-img src="@/assets/logo.png" height="30%" width="30%"></v-img>
            </div>
          </v-list-item-content>
          <v-spacer></v-spacer>
          <v-icon @click.stop="drawer = !drawer" color="white">mdi-close</v-icon>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-container>
        <v-row>
          <v-col>
            <v-list dense>
              <v-list-item>
                <v-btn text @click="$vuetify.goTo('#home')">home</v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn text color="white" @click="$vuetify.goTo('#projects')">Projects</v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn text color="white" @click="$vuetify.goTo('#contact-me')">Contact Us</v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn text color="white" @click="$vuetify.goTo('#about-me')">About</v-btn>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      drawer: false,
      active: false
    };
  }
};
</script>
<style >
.is-active {
  border-bottom: 2px solid rgb(238, 87, 0);
  transform: scaleX(1);
  transition: transform 250ms ease-in-out;
}
</style>