<template>
  <section id="projects">
    <div class="py-6"></div>
    <v-container class="text-center">
      <h2
        class="font-weight-bold mb-3 white--text about"
        data-aos="fade-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
      >
        PROJECTS
      </h2>
      <v-responsive class="mx-auto mb-12" width="180">
        <v-divider class="mb-2 white"></v-divider>
      </v-responsive>
      <h2 class="display-1 font-weight-medium mb-3 white--text">Github Link</h2>
      <v-icon color="white" size="40">mdi-git</v-icon>

      <v-row v-if="loading">
        <v-col
          color="grey darken-2"
          class="px-3 pt-3 pb-3"
          v-for="(n, index) in 3"
          :key="index"
        >
          <v-sheet dark>
            <v-skeleton-loader
              class="mx-auto"
              max-width="300"
              type="card"
            ></v-skeleton-loader>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="3"
          md="3"
          lg="4"
          v-for="(projects, i) in gitProjects"
          :key="i"
          data-aos="fade-in"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <v-card dark class="mx-auto">
            <v-card-text>
              <h1 class="white--text text-capitalize">{{ projects.name }}</h1>
            </v-card-text>
            <v-card-text>
              <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>{{ projects.language }}</v-chip>
              </v-chip-group>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around mx-auto">
              <v-btn
                color="#FFF176"
                class="white--text"
                block
                outlined
                @click="RouteTo(projects.html_url)"
                >check</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="py-12"></div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      show: false,
      gitProjects: [],
      loading: false,
      // projects: [
      //   {
      //     name: "Ecommerce Website",
      //     img: require("@/assets/proj1.png"),
      //     route: "project1",
      //   },
      //   {
      //     name: "MirrorBase",
      //     img: require("@/assets/proj4.png"),
      //     route: "firebase",
      //   },
      //   {
      //     name: "Mark input system",
      //     img: require("@/assets/proj2.png"),
      //     route: "project2",
      //   },
      //   {
      //     name: "Find tuitor system",
      //     img: require("@/assets/proj3.png"),
      //     route: "project3",
      //   },
      // ],
    };
  },

  mounted() {
    this.loading = true;
    axios
      .get("https://api.github.com/users/BuddhaNag12/repos?sort=updated")
      .then((res) => {
        const Newdata = res.data;
        Newdata.map((data) => {
          this.gitProjects.push(data);
          this.loading = false;
        });
      })
      .catch((e) => {
        console.log(e);
        this.loading = false;
      });
  },
  methods: {
    RouteTo(url) {
      window.open(url, "_blank");
    },
    // link(parms) {
    //   if (parms == "project1") {
    //     window.open(
    //       "https://github.com/BuddhaNag12/Ecommerce-webapp",
    //       "_blank"
    //     );
    //   } else if (parms == "project2") {
    //     window.open("https://github.com/BuddhaNag12/MarkInputSystem", "_blank");
    //   } else if (parms == "project3") {
    //     window.open(
    //       "https://github.com/BuddhaNag12/College_webproject",
    //       "_blank"
    //     );
    //   } else if (parms == "firebase") {
    //     window.open("https://github.com/BuddhaNag12/MirrorBase", "_blank");
    //   }
    // },
  },
};
</script>

<style scoped>
#projects {
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #414345,
    #232526
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #414345,
    #232526
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  margin: 0%;
}

/* @media only screen and (max-width: 600px) {
  #projects {
     border-top-left-radius: 30%;
  }
} */
</style>
