<template>
  <div class="bg">
    <Header />
    <div class="d-flex gap-5">
      <LeftSide class="left" />
      <ContentView class="center" />
      <RightSide class="right" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import RightSide from "@/components/RightSide.vue";
import LeftSide from "@/components/LeftSide.vue";
import ContentView from "@/components/Content.vue";
export default {
  name: "AboutView",
  components: {
    Header,
    RightSide,
    LeftSide,
    ContentView,
  },
};
</script>
<style lang="scss" scoped>
.bg {
  background: #f2f4f7;
}
@media (max-width: 1100px) {
  .right {
    display: none;
  }
  .center {
    width: 70%;
    margin-right: 0;
  }
  .left {
    width: 30%;
  }
}
@media (max-width: 960px) {
  .left {
    display: none;
  }
  .center {
    width: 100%;
    margin: auto;
  }
}
</style>
