<template>
  <div>
    <h1>Games</h1>
    <h2>Work On</h2>
  </div>
</template>

<script>
export default {
  name: "GamesV",
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
