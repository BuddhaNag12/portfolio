<template>
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
</template>

<script>
export default {
    data(){
        return{
        email:'',
         msg:'',
        }
    }
}
</script>