<template>
<section id="about-me"  class="about-me">
    <div class="py-12"></div>
        <v-container class="text-center">
          <v-row no-gutters>
            <v-col sm="12" xs="12" data-aos="fade-in">
            <h2 class="display-2 font-weight-bold mb-3 white--text" >ABOUT ME</h2>
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
            data-aos="fade-in"
          >
          <h1 class="white--text">Quotes</h1>
          <v-icon size="40" color="#ECE9E6">mdi-comment-text-outline</v-icon>
           <p
            class=" title font-weight-light mt-3 white--text"
          >
           Hey there i am a web developer javascript programmer a student of Computer science and full stack web developer
          </p>
            </v-col>
            <v-col cols="12" sm="6" data-aos="flip-left">
              <h1 class=" font-weight-bold mb-3 white--text" >Languages Known</h1>
              <v-icon size="40" color="#ECE9E6">mdi-console-line</v-icon>
          <v-progress-linear
      value="80"
      color="purple"
      height="15"
      
    >
      <strong  class="pr-2 white--text">JAVA</strong>
        <strong>{{ Math.ceil(java) }}%</strong>
    </v-progress-linear>
    <br>
                 <v-progress-linear
      value="80"
      color="green"
      height="15"
      
    >
      <strong  class="pr-2 white--text">C/C++</strong>
        <strong>{{ Math.ceil(c) }}%</strong>
    </v-progress-linear>
    <br>
    <v-progress-linear
      value="80"
      color="blue-grey"
      height="15"
      
    >
      <strong  class="pr-2 white--text">Javascript</strong>
        <strong>{{ Math.ceil(javascript) }}%</strong>
    </v-progress-linear>
        <br>
     <v-progress-linear
      value="90"
      height="15"
      
    >
        <strong class="pr-2 white--text">HTML & CSS </strong>
      <strong>{{ Math.ceil(html) }}%</strong>
    </v-progress-linear>
    <br>

    <v-progress-linear
      value="60"
      height="15"
      color="red darken-2"
      
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
          src="../assets/images/profile.jpg"     
        >
        </v-img>
      </v-avatar>
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
background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>