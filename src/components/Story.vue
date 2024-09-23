<template>
  <div>
    <div class="d-flex gap-2">
      <div class="item">
        <div class="position-aboslute">
          <img src="../assets/rmadan.jpg" alt="" />
        </div>
        <img src="../assets/ss2.jpg" alt="" />
        <p>Mohamed Ramadan</p>
        <span></span>
        <i class="fa-solid fa-angle-left"></i>
      </div>
      <div class="item" v-for="story in stoys" :key="story">
        <div class="position-aboslute">
          <img :src="story.imgsrc1" alt="" />
        </div>
        <img :src="story.imgsrc2" alt="" />
        <p>{{ story.text }}</p>
        <span></span>
      </div>
      <div class="mainitem item">
        <img src="../assets/mo.jpg" alt="" />
        <p>إنشاء قصة</p>
        <div>+</div>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoryView",
  data() {
    return {
      stoys: [
        {
          imgsrc1: require("../assets/Amr.jpg"),
          imgsrc2: require("../assets/ss1.jpg"),
          text: "Amr Khaled",
        },
        {
          imgsrc1: require("../assets/kero.jpg"),
          imgsrc2: require("../assets/K.jpg"),
          text: "Kerols Magdy",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
i {
  position: absolute;
  top: 45%;
  left: 1px;
  color: #000;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  &:hover {
    background: #eee;
  }
}

.item {
  width: calc((100%) / 4);
  height: 240px;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  div {
    position: absolute;
    top: 20px;
    border: solid 4px #0866ff;
    border-radius: 50%;
    right: 20px;
    z-index: 20;
    img {
      border-radius: 50%;
    }
  }
  > img {
    width: 100%;
    transition: 0.3s;
    height: 100%;
  }
  p {
    bottom: 0;
    color: #fff;
    font-weight: bold;
    left: 10px;
    font-size: 14px;
    margin: 0;
    text-align: start;
    position: absolute;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    transition: 0.2s;
    width: 100%;
    height: 100%;
    background: #00000006;
  }
  &:hover {
    > img {
      transform: scale(1.04);
    }
    span {
      display: block;
    }
  }
}
.mainitem {
  background: #fff;
  img {
    height: 75%;
  }
  div {
    right: 35%;
    top: 68%;
    border: solid 4px #fff;
    width: 50px;
    font-weight: bold;
    height: 50px;
    background: #0866ff;
    color: #fff;
    font-size: 30px;
  }
  p {
    color: #000;
    text-align: center;
    font-size: 20px;
    bottom: 2%px;
    left: 15px;
    opacity: 0.8;
  }
}
</style>
