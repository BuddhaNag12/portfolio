<template>
 <div>
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


    <!---Projects section-->
  
          <!---Contact section-->

  <!--- about section-->

      </div>
</template>

<script>

export default {

  data(){
    return{
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