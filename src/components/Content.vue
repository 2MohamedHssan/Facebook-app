<template>
  <section>
    <div class="main mb-3">
      <div>
        <input type="text" placeholder="بم افكر يا Mohamed" />
        <img src="../assets/download.jpg" alt="" />
      </div>
      <hr />
      <div class="d-flex justify-content-around fs-5 fw-bold">
        <div v-for="div in divs" :key="div">
          <span>{{ div.text }}</span>
          <img :src="div.imgsrc" alt="" />
        </div>
      </div>
    </div>
    <StoryView />
    <PostOne />
  </section>
</template>

<script>
import StoryView from "@/components/Story.vue";
import PostOne from "@/components/PostOne.vue";
export default {
  name: "ContentView",
  data() {
    return {
      divs: [
        {
          text: "شعرو / نشاط",
          imgsrc: require("../assets/face.png"),
        },
        {
          text: "فيديو بث مباشر",
          imgsrc: require("../assets/photo.png"),
        },
        {
          text: "صورة / فيديو",
          imgsrc: require("../assets/ved.png"),
        },
      ],
    };
  },
  components: {
    StoryView,
    PostOne,
  },
};
</script>

<style lang="scss" scoped>
section {
  margin: auto;
  width: 49%;
  background: #f2f4f7;
  padding: 10px 20px;
}
.main {
  background: #fff;
  border-radius: 6px;

  padding: 20px;
  div {
    display: flex;
    gap: 15px;
    justify-content: end;
    input {
      direction: rtl;
      &:focus {
        outline: none;
        border: none;
      }
      background: #f2f1ff;
      border: none;
      border-radius: 20px;
      padding: 0 20px;
      width: 85%;
      font-size: 18px;
    }
  }
}
</style>
