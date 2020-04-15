<template>
  <div class="text-center">
    <v-overlay v-model="loading" show-overlay indeterminate>
      <v-progress-circular :size="50" color="purple" indeterminate></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  },

  created() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
};
</script>