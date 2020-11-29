<template>
  <div>
    <v-tabs
      v-model="tab"
      class="elevation-2"
      dark
      grow
      :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
      :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab>
        <div>languages</div>
      </v-tab>
      <v-tab>
        <div>Technologies</div>
      </v-tab>
      <v-tab>
        <div>Stacks</div>
      </v-tab>
      <v-tab-item>
        <v-row class="mx-auto">
          <v-col cols="12" sm="6" md="4" lg="6" class="mx-auto">
            <v-chip-group column active-class="primary--text " class="pl-4" >
              <v-chip>
                <v-icon size="30">mdi-language-javascript</v-icon>
              </v-chip>
              <v-chip>
                <v-icon size="30">mdi-language-html5</v-icon>
              </v-chip>
              <v-chip>
                <v-icon size="30">mdi-language-php</v-icon>
              </v-chip>
              <v-chip>
                <v-icon size="30">mdi-react</v-icon>
              </v-chip>
              <v-chip>
                <v-icon size="30">mdi-language-c</v-icon>
              </v-chip>
              <v-chip>
                <v-icon size="30">mdi-language-cpp</v-icon>
              </v-chip>
              <v-chip>
                <v-icon size="30">mdi-language-java</v-icon>
              </v-chip>
              <v-chip>
                <v-icon size="30">mdi-vuejs</v-icon>
              </v-chip>
              <v-chip>
                <v-icon size="30">mdi-vuetify</v-icon>
              </v-chip>
              <v-chip>
                <v-icon size="30">mdi-bootstrap</v-icon>
              </v-chip>
            </v-chip-group>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item>
        <v-row class="mx-auto">
          <v-col
            cols="12"
            sm="6"
            lg="6"
            md="6"
            class="d-flex justify-space-between mx-auto"
          >
            <v-chip-group column >
              <v-chip> <div>Firebase</div></v-chip>
              <v-chip><div>MySql</div></v-chip>
              <v-chip> <div>GraphQl</div></v-chip>
              <v-chip> <div>SQL</div></v-chip>
            </v-chip-group>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item>
        <v-row class="mx-auto">
          <v-col
            cols="12"
            sm="6"
            lg="6"
            md="6"
            class="d-flex justify-space-between mx-auto ma-2"
          >
            <v-chip-group column >
              <v-chip> <div>MEVN</div></v-chip>
              <v-chip> <div>Mern</div></v-chip>
              <v-chip> <div>Nuxtjs + firebase</div></v-chip>
            </v-chip-group>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script>
export default {
  name: "tabs",
  data() {
    return {
      prevIcon: false,
      nextIcon: false,
      tab: null,
      tabs: 3,
    };
  },
};
</script>

<style></style>
