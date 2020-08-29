<template>
  <section id="about-me" class="about-me">
    <div class="py-12"></div>
    <v-container class="text-center">
      <v-row no-gutters>
        <v-col
          sm="12"
          xs="12"
          data-aos="fade-in"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <h2 class="font-weight-bold mb-3 white--text about">ABOUT ME</h2>
        </v-col>
      </v-row>
      <v-responsive class="mx-auto mb-12" width="120">
        <v-divider class="mb-2" color="white"></v-divider>
      </v-responsive>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          data-aos="fade-in"
          data-aos-delay="400"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
        >
          <h1 class="white--text">Quotes</h1>
          <v-icon size="40" color="#ECE9E6">mdi-comment-text-outline</v-icon>
          <p class="font-weight-light mt-3 white--text  text-uppercase">
            Hey there i am a web developer I know javascript and no sql and sql
            database handling and i'm full stack web developer i like to
            contribute to open source project and verry passionate about open
            source programming
          </p>
          <p
            class="font-weight-light mt-3 white--text newfont text-uppercase"
            data-aos="zoom-in-up"
            data-aos-delay="400"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
          >
            i have 3 + years experience in doing small projects as well as
            solving skills in algorithms
          </p>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          data-aos-delay="400"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <h1 class="font-weight-bold mb-3 white--text newfont text-capitalize">
            little info about what i use
          </h1>
          <v-icon size="40" color="#ECE9E6">mdi-console-line</v-icon>
          <chips />
        </v-col>
        <v-col cols="12">
          <v-avatar class="mr-3" color="grey lighten-5" size="150">
            <v-img
              src="https://scontent.fgau2-1.fna.fbcdn.net/v/t1.0-9/106093797_3105706246172854_6244516452109243435_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=rLXEZNCVHwQAX-hHU11&_nc_ht=scontent.fgau2-1.fna&oh=64b3b7c4db0211aa6bb53499cd0050dd&oe=5F6EDB93"
            ></v-img>
          </v-avatar>
          <h2 class="myname text-uppercase white--text">buddha nag</h2>
        </v-col>
      </v-row>
    </v-container>
    <div class="py-12"></div>
  </section>
</template>

<script>
export default {
  components: {
    chips: () => import("../tabs"),
  },
};
</script>

<style>
.about-me {
  background: #272727;
  padding: 0%;
  margin: 0%;
}
.v-progress-linear {
  border-radius: 40px;
}
.title {
  font-family: "Orbitron", sans-serif;
}
.v-application .newfont {
  font-size: 20px;
  font-family: "Orbitron", sans-serif;
}
.about {
  font-size: 40px;
  font-family: "Orbitron", sans-serif;
}
.myname {
  padding: 0.9rem;
  font-size: 20px;
  font-family: "Orbitron", sans-serif;
}

/* @media only screen and (max-width: 600px) {
.about-me {
     border-bottom-right-radius: 30%;
  }
} */
</style>
