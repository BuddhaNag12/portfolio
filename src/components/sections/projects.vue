<template>
  <section id="projects">
    <v-parallax
      :height="$vuetify.breakpoint.smAndDown ? 1300: 700"
      src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    >
      <div class="py-12"></div>
      <v-container class="text-center">
        <h2
          class="font-weight-bold mb-3 white--text about"
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-delay="50"
        >PROJECTS</h2>
        <v-responsive class="mx-auto mb-12" width="180">
          <v-divider class="mb-2 white"></v-divider>
        </v-responsive>
        <h2 class="display-1 font-weight-light mb-3">Github Link</h2>
        <v-icon color="white" size="40">mdi-git</v-icon>

        <v-row>
          <v-col cols="12" sm="3" v-for="(projects,i) in projects" :key="i">
            <v-hover v-slot:default="{ hover }" class="mx-2 mt-2">
              <v-card class="pa-2" data-aos="zoom-in-up" data-aos-delay="300">
                <v-img class="align-end" height="200px" :src="projects.img">
                  <h1 class="text-uppercase pa-2 black--text text--darken-3">{{projects.name}}</h1>
                  <v-expand-transition>
                    <template>
                      <div v-if="hover" class="transition-fast-in-fast-out v-card--reveal">
                        <v-btn
                          @click="link(projects.route)"
                          
                          color="secondary"
                          class="white--text"
                        >check</v-btn>
                      </div>
                    </template>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
      <div class="py-12"></div>
    </v-parallax>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Ecommerce Website",
          img: require("@/assets/proj1.png"),
          route: "project1"
        },
        {
          name: "MirrorBase",
          img: require("@/assets/proj4.png"),
          route: "firebase"
        },
        {
          name: "Mark input system",
          img: require("@/assets/proj2.png"),
          route: "project2"
        },
        {
          name: "Find tuitor system",
          img: require("@/assets/proj3.png"),
          route: "project3"
        }
      ]
    };
  },

  methods: {
    link(parms) {
      if (parms == "project1") {
        window.open(
          "https://github.com/BuddhaNag12/Ecommerce-webapp",
          "_blank"
        );
      } else if (parms == "project2") {
        window.open("https://github.com/BuddhaNag12/MarkInputSystem", "_blank");
      } else if (parms == "project3") {
        window.open(
          "https://github.com/BuddhaNag12/College_webproject",
          "_blank"
        );
      } else if (parms == "firebase") {
        window.open("https://github.com/BuddhaNag12/MirrorBase", "_blank");
      }
    }
  }
};
</script>


<style scoped>
.v-card {
  border: 2px solid !important;
  border-bottom-color: red !important;
}
</style>