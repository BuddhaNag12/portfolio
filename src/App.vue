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

import foot from './components/root/foot';
import navbar from './components/root/navbar';
import contents from './components/root/contents';
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
