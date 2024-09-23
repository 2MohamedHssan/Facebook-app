<template>
  <Header />
  <div>
    <h1>MarketPlace</h1>
    <h2>Work On</h2>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "MarketPlace",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
h2 {
  animation: waiting 2s infinite linear;
}
@keyframes waiting {
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
