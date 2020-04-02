<template>
        <section
        id="projects"
        class="grey lighten-3"
        
      >
       <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 1100: 900"
          src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        >

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">PROJECTS</h2>
             <h2 class="display-1 font-weight-light mb-3">Github Link</h2>
             <v-icon color="white" size="40">mdi-git</v-icon>
          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
           <v-divider class="mb-2 white"></v-divider>
            <v-divider class="white"></v-divider>
          </v-responsive>
          <v-row>
             <v-col
        cols="12"
        sm="4"
         data-aos="fade-right"
      >
       <v-hover v-slot:default="{ hover }"   class="mx-2 mt-2">
        <v-card
          class="pa-2"
          outlined
          tile
         
        >
          <v-img
      class=" align-end"
      height="200px"
      src="../assets/projects/proj1.png"
    >
     <v-expand-transition>
        <template>
          <div
            v-if="hover"
            class="transition-fast-in-fast-out darken-3 v-card--reveal display-1  "
            
          >
           <h1 class=" text-capitalize pa-2">Ecommerce Website</h1>
            <v-btn @click="link('project1')"  tile color="blue accent-3" class="white--text">check</v-btn>
          </div>
        </template>
        </v-expand-transition>
    </v-img>
        </v-card>
   </v-hover>
      </v-col>

      <v-col cols="12"
        sm="4"  data-aos="zoom-in-up">
       <v-hover v-slot:default="{ hover }"   class="mx-2 mt-2">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img
      class=" align-end"
      height="200px"
      src="../assets/projects/proj2.png"
    >

      <v-expand-transition>
        <template>
          <div
            v-if="hover"
            class="transition-fast-in-fast-out  v-card--reveal display-1 "
            style="height: 100%;"
          >
           <h1 class=" text-capitalize pa-2 text--secondary">Mark input system</h1>
              <v-btn @click="link('project2')" tile color="blue accent-3" class="white--text">check</v-btn>
          </div>
        </template>
        </v-expand-transition>
    </v-img>
        </v-card>
       </v-hover>
      </v-col>
      <v-col cols="12"
        sm="4" data-aos="fade-up-left">
           <v-hover v-slot:default="{ hover }"   class="mx-2 mt-2">
          <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img
      class=" align-end"
      height="200px"
      src="../assets/projects/proj3.png"
    >
     <v-expand-transition>
       <template>
          <div
            v-if="hover"
            class=" transition-fast-in-fast-out darken-3 v-card--reveal display-1  "
            style="height: 100%;"
          >
           <h1 class=" text-capitalize pa-2  ">Find tuitor system</h1>
              <v-btn @click="link('project3')" tile color="blue accent-3" class="white--text">check</v-btn>
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
          <v-responsive
            class="mx-auto "
            width="56"
          >
            <v-divider class="mb-2 white"></v-divider>
          </v-responsive>
          <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 900: 800"
          src="../assets/projects/para.jpg"
        >
    <v-container class="text-center">
           <v-responsive
            class="mx-auto "
            width="56"
          >
            <v-divider class="mb-2 white"></v-divider>
 
          </v-responsive>
            <h2 class="display-2 font-weight-bold mb-3">VUETIFY FIREBASE CLONE</h2>
            <v-icon size="40"  color="blue darken-3">mdi-firebase</v-icon>
            <v-row>
              <v-col cols="12" sm="6" class="mx-auto" data-aos="zoom-in-down">
                <v-card >
                  <v-img src="../assets/projects/proj4.png" class=" align-end "  >
                   <h1 class=" text-capitalize pa-2  ">MirrorBase</h1>
                   <v-btn @click="link('firebase')" class="secondary" >check it out</v-btn>
                  </v-img>
                  
                </v-card>
              </v-col>
            </v-row>
      </v-container>
     </v-parallax>
      </section>
</template>

<script>
export default {
 data(){
   return{

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