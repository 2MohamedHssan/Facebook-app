<template>
  <div>
    <Header />
    <GamesV />
  </div>
</template>

<script>
import GamesV from "@/components/Games.vue";
import Header from "@/components/Header.vue";
export default {
  name: "GamesView",
  components: {
    GamesV,
    Header,
  },
};
</script>
