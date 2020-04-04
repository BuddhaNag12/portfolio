<template>
        <section
        id="projects"
        class="grey lighten-3"
      >
       <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 1200: 900"
          src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        >
        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">PROJECTS</h2>
           <v-responsive
            class="mx-auto mb-12"
            width="180"
          >
           <v-divider class="mb-2 white"></v-divider>
          
          </v-responsive>
             <h2 class="display-1 font-weight-light mb-3">Github Link</h2>
             <v-icon color="white" size="40">mdi-git</v-icon>
         
          <v-row>
             <v-col
        cols="12"
        sm="3"
       v-for="(projects,i) in projects" :key="i"
       data-aos="fade-up"
      >
       <v-hover v-slot:default="{ hover }"   class="mx-2 mt-2">
        <v-card
          class="pa-2"
          outlined
          tile
          dark
         >

          <v-img
      class=" align-end"
      height="200px"
      :src="projects.img"
      
    >
     <h1 class=" text-uppercase pa-2 blue--text"  >{{projects.name}}</h1>
     <v-expand-transition>
        <template>
          <div
            v-if="hover"
            class="transition-fast-in-fast-out  v-card--reveal   "
          >
          
            <v-btn @click="link(projects.route)"  tile color="blue accent-3" class="white--text">check</v-btn>
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
 data(){
   return{
   
      projects:[
        {name:'Ecommerce Website',  img:require("@/assets/proj1.png"),  route:'project1'},
        {name:'MirrorBase',         img:require("@/assets/proj4.png"),  route:'firebase'},
        {name:'Mark input system',  img:require("@/assets/proj2.png"),  route:'project2'},
        {name:'Find tuitor system', img:require("@/assets/proj3.png"),  route:'project3'},
      ]
   }
 },
 
 methods:{
   link(parms){
        if(parms=="project1"){
            window.open("https://github.com/BuddhaNag12/Ecommerce-webapp","_blank")
        }
        else if(parms=="project2"){
          window.open("https://github.com/BuddhaNag12/MarkInputSystem","_blank")
        }else if(parms=="project3"){
             window.open("https://github.com/BuddhaNag12/College_webproject","_blank")
        }else if(parms=='firebase'){
          window.open("https://github.com/BuddhaNag12/MirrorBase","_blank")
        }
      }
 }
}
</script>

<style >

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
