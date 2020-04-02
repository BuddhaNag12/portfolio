<template>
 <div>
   <div class="text-center">
      <v-overlay 
      v-model="loading"
      
       show-overlay
      indeterminate>
   <v-progress-circular
      :size="50"
      color="purple"
      indeterminate
    ></v-progress-circular>
    </v-overlay>
   </div>
   


   <section id="home" > 

          <v-row no-gutters>
      
                <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          >
          <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                  <v-col
                    class="white--text text-center"
                    cols="12"
                    tag="h1"
                  >

                      <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1': 'display-3']"
                      class="typed-text"
                      style="animation: bounce 3s 1;"
                    >
                     {{ typeValue }}
                    </span>
              <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>

                    <br>
  
                  </v-col>

                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#about-me')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
                </v-img>
          </v-row>

    </section>

<section id="about-me"  >
    <div class="py-12"></div>
        <v-container class="text-center">
          <v-row no-gutters>
            <v-col sm="12" xs="12">
            <h2 class="display-2 font-weight-bold mb-3" data-aos="fade-right">ABOUT ME</h2>
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
          data-aos="fade-left">
          <h1>Quotes</h1>
          <v-icon size="40">mdi-comment-text-outline</v-icon>
           <p
            class=" title font-weight-light mt-3"
            
          >
           Hey there i am a web developer javascript programmer a student of Computer science and full stack web developer
          </p>
            </v-col>
            <v-col cols="12" sm="6" data-aos="fade-right">
              <h1 class=" font-weight-bold mb-3">Languages Known</h1>
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
    <section id="contact-me">
          <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 1100: 900"
          src="../assets/projects/para2.jpg"
        >

        <v-container fluid >
          <v-card>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57936.66815884068!2d92.7486197782311!3d24.828245470714357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e4a625ae8cddd%3A0x1783d41a15380398!2sSilchar%2C%20Assam!5e0!3m2!1sen!2sin!4v1576426840177!5m2!1sen!2sin" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          </v-card>
     </v-container>
      <v-container fluid>
          <v-row no-gutters>
              <v-col class="sm-12 md-6 lg-6 text-sm-left" data-aos="fade-up-right">
            <div class="font-weight-bold white--text  caption" >Contact Info</div>  
          <div class=" font-italic body-1 white--text  text-left" >Please feel free to reach out to us with your questions and comments.</div>
          <div class=" white--text text-left pt-2">Email</div>
          <div class="text-left">
        <a href="" class="white--text  text--darken-3 body-1">@MAIL</a>
          </div>
  
              </v-col>
              <v-col cols="12" sm="6" data-aos="fade-up-left">
                    <div>Write Us</div>
                  <v-card flat dark> 
                      <v-card-text>
                          <form 
                          >
                          <v-text-field
                        label="EMAIL"
                        v-model="email"
                        type="email"
                        >

                        </v-text-field>
                        <v-textarea
                        label="Leave a Message"
                         v-model="msg"
                            color="teal"
                             >              
                        </v-textarea>
                        <v-btn class="secondary" >Submit</v-btn>
                          </form>
                       
                      </v-card-text>
                  </v-card>
              </v-col>
          </v-row>
      </v-container>
          </v-parallax>
    </section>
      </div>
</template>

<script>

export default {

  data(){
    return{
      javascript:"80",
      vuejs:"60",
      html:'90',
      email:'',
      msg:'',
    loading:false,
      typeValue: '',
        typeStatus: false,
        typeArray: ['WELCOME TO BUDDHA PORTFOLIO', 'I ❤ CODING', 'HIRE ME', 'THANKS'],
        typingSpeed: 200,
        erasingSpeed: 100,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0
    }
  },

      created(){
         this.loading = true;
        setTimeout(() => {
           this.loading = false;
        }, 5000)




           setTimeout(this.typeText, this.newTextDelay + 200);
      },

  methods:{
       typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      },


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



<style  scoped>
 
    span.typed-text {
      color: rgb(255, 255, 255);
    }
    span.cursor {
  
      margin-left: 3px;
      width: 4px;
      background-color: #fff;
      animation: cursorBlink 1s infinite;
    }
    span.cursor.typing {
        background-color: #fff;
        animation: none;
    }

  @keyframes cursorBlink {
    49% { background-color: #fff; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
  }
</style>