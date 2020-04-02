<template>
    

<section id="about-me"  >
    <div class="py-12"></div>
        <v-container class="text-center">
          <v-row no-gutters>
            <v-col sm="12" xs="12">
            <h2 class="display-2 font-weight-bold mb-3" >ABOUT ME</h2>
            </v-col>
          </v-row>
           <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>
            <v-divider></v-divider>
          </v-responsive>
          <v-row >
            <v-col 
            cols="12"
          sm="6"
          >
          <h1>Quotes</h1>
          <v-icon size="40">mdi-comment-text-outline</v-icon>
           <p
            class=" title font-weight-light mt-3"
         
          >
           Hey there i am a web developer javascript programmer a student of Computer science and full stack web developer
          </p>
            </v-col>
            <v-col cols="12" sm="6" >
              <h1 class=" font-weight-bold mb-3" >Languages Known</h1>
              <v-icon size="40">mdi-console-line</v-icon>
    <v-progress-linear
      value="80"
      color="blue-grey"
      height="15"
      striped
    >
      <strong  class="pr-2 white--text">Javascript</strong>
        <strong>{{ Math.ceil(javascript) }}%</strong>
    </v-progress-linear>
        <br>
     <v-progress-linear
      value="90"
      height="15"
      striped
    >
        <strong class="pr-2 white--text">HTML & CSS </strong>
      <strong>{{ Math.ceil(html) }}%</strong>
    </v-progress-linear>
    <br>

    <v-progress-linear
      value="60"
      height="15"
      color="red darken-2"
      striped
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
      html:'90',
        }
    }
}
</script>