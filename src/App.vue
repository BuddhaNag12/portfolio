<template>
  <v-app >
  <navbar/>
    <v-content>
       <contents/> 
    </v-content>
     <foot/>
  </v-app>
</template>

<script>

import foot from './components/foot';
import navbar from './components/navbar';
import contents from './components/contents';
export default {
  name: 'App',

  components: {
    contents,
    navbar,
    foot
  },

  data: () => ({
    //
  }),
};
</script>
