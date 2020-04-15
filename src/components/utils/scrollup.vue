<template>
  <div>
    <v-icon
      class="animate"
      color="white"
      id="scrollup"
      v-scroll="onScroll"
      @click="$vuetify.goTo('#home')"
      v-show="fab"
    >mdi-arrow-up</v-icon>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fab: false
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 500;
    }
  }
};
</script>
<style scoped>
.animate {
  animation: slide 0.9s ease-in-out alternate infinite;
}

@keyframes slide {
  to {
    transform: translateY(-10px);
  }
}

#scrollup {
  z-index: 99;
  position: fixed;
  bottom: 20px;
  right: 30px;
}

.animate:hover {
  border-radius: 40px;
  background-color: dimgray;
}
</style>