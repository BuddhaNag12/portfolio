<template>
  <section id="projects">
    <div class="background"> 
      <v-container>
        <div class="text-center showcase">Showcases</div>

        <v-row>
          <v-col v-for="(i, index) in showcases" :key="index">
            <v-card
              class="mx-auto"
              height="520"
              max-width="300"
              id="card"
              data-aos="fade-in-up"
              data-aos-offset="200"
              data-aos-delay="50"
              width="300"
            >
              <v-carousel
                cycle
                hide-delimiter-background
                show-arrows-on-hover
                hide-delimiters
                height="280"
              >
                <v-carousel-item
                  v-for="(item, i) in i.imgUris"
                  :key="i"
                  :src="item"
                  class="image"
                ></v-carousel-item>
              </v-carousel>
              <v-card-title class="text-capitalize">
                {{ i.name }}
              </v-card-title>
              <v-card-text>
                <div class="text-capitalize">
                  {{ i.Description }}
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="purple" text @click="RouteTo(i.uri)">
                  Description
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    show: [],
    showcases: [
      {
        name: "InScanner",
        uri: "https://github.com/BuddhaNag12/InScan/blob/master/README.md",
        imgUris: [
          require("../../assets/showcases/inscan/Group1.webp"),
          require("../../assets/showcases/inscan/Group2.webp"),
          require("../../assets/showcases/inscan/Group3.webp"),
        ],
        Description:
          "Inscanner is a Scanning tool which provides Scanning of Handwritten text as well as bookish text directly and with it you can capture documents and convert them directly into pdf",
      },
      {
        name: "Covid-19 tracker",
        uri: "https://github.com/BuddhaNag12/Covid19-tracker",
        imgUris: [
          require("../../assets/showcases/covid/1.webp"),
          require("../../assets/showcases/covid/2.webp"),
          require("../../assets/showcases/covid/3.webp"),
          require("../../assets/showcases/covid/4.webp"),
        ],
        Description:
          "It's a covid 19 realtime data tracker based on covid 19 api with which you can fetch covid cases by country",
      },
      {
        name: "Marks input system",
        uri: "https://github.com/BuddhaNag12/MarkInputSystem",
        imgUris: [
          require("../../assets/showcases/mis/1.webp"),
          require("../../assets/showcases/mis/2.webp"),
          require("../../assets/showcases/mis/3.webp"),
        ],
        Description:
          "It's tough to provide academic unit test marks as it needs to be manually with pen and paper this will help the teachers to add marks in digitally",
      },
    ],
  }),

  methods: {
    RouteTo(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.showcase {
  font-family: "Orbitron", sans-serif;
  text-transform: uppercase;
  font-size: 40px;
  background: -webkit-linear-gradient(#eee, rgb(224, 87, 33));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.image:hover {
  scale: 0.5;
}
#card {
  border-radius: 25px;
  background: #f5f5f5;
  box-shadow: 10px 10px 10px #bfbfbf, -10px -10px 10px #ffffff;
}

.background{
background: #eee;
}
</style>
