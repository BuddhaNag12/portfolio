<template>
        <section id="contact-me">
            <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card>
      <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Info
        </v-card-title>
        <v-card-text>
          <v-alert type="success">
         Message sent
         </v-alert>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
          <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 1100: 900"
          src="../assets/projects/para2.jpg"
        >     
             <div class="py-12"></div>
         <div class="font-weight-bold white--text text-sm-center text-center about" 
                data-aos="zoom-in-up"
                data-aos-offset="200"
            data-aos-delay="50">CONTACT ME!</div>  
            <v-responsive
            class="mx-auto "
            width="200"
          >
           <v-divider class="mb-2 white"></v-divider>
 
          </v-responsive>
      <v-container fluid>
          <v-row no-gutters>
              <v-col class="sm-12 md-6 lg-6 text-sm-left" data-aos="fade-up-right">
            <div class="font-weight-bold white--text  caption text-center" >Contact Info</div>  
            <br>
          <div class=" font-italic body-1 white--text  text-center" >Please feel free to reach out to us with your questions and comments.</div>
               <br>
          <div class=" white--text text-left pt-2">Email</div>
          <div class="text-left">
        <a href="mailto:rahulnag514@gmail.com" class="white--text  text--darken-3 body-1" target="_top">rahulnag514@gmail.com</a>
          </div>
              </v-col>
              <v-col cols="12" sm="6" data-aos="fade-up-left">
                    <div>Write Us</div>
                  <v-card flat dark> 
                      <v-card-text>
                          <form 
                          @submit.prevent="feedback"
                          >
                          <v-text-field
                        label="EMAIL"
                        v-model="email"
                        type="email"
                        :rules="emailRules"
                        >

                        </v-text-field>
                        <v-textarea
                        label="Leave a Message"
                         v-model="msg"
                            color="teal"
                              :rules="msgrule"
                             >              
                        </v-textarea>
                        <v-btn class="secondary" type="submit">Submit</v-btn>
                          </form>
                       
                      </v-card-text>
                  </v-card>
              </v-col>
          </v-row>
      </v-container>
      
        <v-container fluid >
          <h2 class="text-center caption ">Site View</h2>
          <v-card>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57936.66815884068!2d92.7486197782311!3d24.828245470714357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e4a625ae8cddd%3A0x1783d41a15380398!2sSilchar%2C%20Assam!5e0!3m2!1sen!2sin!4v1576426840177!5m2!1sen!2sin" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          </v-card>
     </v-container>
          </v-parallax>
    </section>
</template>

<script>
import db from "../fb"
export default {
    data(){
        return{
        email:'',
         msg:'',
         dialog:false,
         msgrule: [
        v => !!v || 'Message is required',
        v => (v && v.length >= 10) || 'Message must be Greater or equal than 10 characters',
         ],
          emailRules: [
         v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        }

    },


    methods:{
          feedback:function(){
            if(this.email=="" && this.msg==""){
              return false
            }else{
                db.collection("feedbacks").doc().set({
                  email: this.email,
                  messages: this.msg,
    
              })
              .then(()=> {
                this.email=""
                this.msg=""
                this.dialog=true
              })
              .catch(function(error) {
                  console.error("Error writing document: ", error);
              });
            }
            
          }
    }
}
</script>