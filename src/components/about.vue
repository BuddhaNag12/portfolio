<template>
<section id="about-me"  class="about-me">
    <div class="py-12"></div>
        <v-container class="text-center">
          <v-row no-gutters>
            <v-col sm="12" xs="12" data-aos="zoom-in-up"
                data-aos-offset="200"
            data-aos-delay="50">
            <h2 class=" font-weight-bold mb-3 white--text about" >ABOUT ME</h2>
            </v-col>
          </v-row>
           <v-responsive
            class="mx-auto mb-12"
            width="120"
          >
            <v-divider class="mb-2" color="white"></v-divider>
            
          </v-responsive>
          <v-row >
            <v-col 
            cols="12"
            sm="6"
            data-aos="zoom-in-up"
          >
          <h1 class="white--text">Quotes</h1>
          <v-icon size="40" color="#ECE9E6">mdi-comment-text-outline</v-icon>
           <p
            class=" font-weight-light mt-3 white--text newfont text-uppercase"
          >
           Hey there i am a web developer javascript programmer a student of Computer science and full stack web developer
          </p>
            </v-col>
            <v-col cols="12" sm="6" >
              <h1 class=" font-weight-bold mb-3 white--text newfont" >Languages Known</h1>
              <v-icon size="40" color="#ECE9E6">mdi-console-line</v-icon>
          <v-progress-linear
      value="80"
      color="purple"
      height="25"
     data-aos="zoom-in-up"
    >
      <strong  class="pr-2 white--text">JAVA</strong>
        <strong>{{ Math.ceil(java) }}%</strong>
    </v-progress-linear>
    <br>
        <v-progress-linear
      value="80"
      color="green"
      height="25"
      data-aos="zoom-in-up"
    >
      <strong  class="pr-2 white--text">C/C++</strong>
        <strong>{{ Math.ceil(c) }}%</strong>
    </v-progress-linear>
    <br>
    <v-progress-linear
      value="80"
      color="blue-grey"
      height="25"
      data-aos="zoom-in-up"
    >
      <strong  class="pr-2 white--text">Javascript</strong>
        <strong>{{ Math.ceil(javascript) }}%</strong>
    </v-progress-linear>
        <br>
     <v-progress-linear
      value="90"
      height="25"
      data-aos="zoom-in-up"
    >
        <strong class="pr-2 white--text">HTML & CSS </strong>
      <strong>{{ Math.ceil(html) }}%</strong>
    </v-progress-linear>
    <br>

    <v-progress-linear
      value="60"
      height="25"
      color="red darken-2"
      data-aos="zoom-in-up"
    >
        <strong  class="pr-2 white--text">vuejs</strong>
      <strong>{{ Math.ceil(vuejs) }}%</strong>
    </v-progress-linear>
   
            </v-col>
            <v-col cols="12">
           <v-avatar
       class="mr-3"
        color="grey lighten-5"
        size="150"
      >
        <v-img
          src="../assets/images/profile.jpeg"     
        >
        </v-img>
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
    data(){
        return{
     javascript:"80",
      vuejs:"60",
      java:'65',
        c:'55',
      html:'90',
        }
    }
}
</script>

<style>
.about-me{
background: #272727;  /* fallback for old browsers */

}
.v-progress-linear{
  border-radius: 40px;
}
.title{
  font-family: 'Orbitron', sans-serif;
}
.v-application .newfont{
  font-size: 20px;
  font-family: 'Orbitron', sans-serif;
}
.about{
    font-size: 40px;
  font-family: 'Orbitron', sans-serif;
}
.myname{
    padding:0.9rem;
    font-size: 20px;
    font-family: 'Orbitron', sans-serif;
}
</style>