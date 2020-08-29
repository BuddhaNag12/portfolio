<template>
  <div>
    <loading />
    <scrollup />
    <home />
    <aboutMe />
    <showcases />
    <projects />
    <exclusive />
    <contact />
  </div>
</template>


<script>
export default {
  components: {
    loading: () => import("@/components/utils/loading"),
    scrollup: () => import("@/components/utils/scrollup"),
    home: () => import("@/components/sections/home"),
    aboutMe: () => import("@/components/sections/about"),
    contact: () => import("@/components/sections/contact"),
    projects: () => import("@/components/sections/projects"),
    exclusive: () => import("@/components/sections/exclusive"),
    showcases: () => import("@/components/sections/showcases")
  }
};
</script>