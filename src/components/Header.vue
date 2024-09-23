<template>
  <div class="about">
    <nav
      class="navbar navbar-expand-sm navbar-light justify-content-between bg-white"
    >
      <div class="left">
        <div>
          <img src="../assets/download.jpg" alt="" />
        </div>
        <SvgPath class="icon" icon="icon1" />
        <div class="position-relative">
          <SvgPath class="icon" icon="icon2" />
          <span>1</span>
        </div>
        <SvgPath class="icon" icon="icon3" />
      </div>
      <ul class="navbar-nav gap-2 pe-4">
        <li @click="active = '5'" :class="['nav-item', { m: active === '5' }]">
          <router-link to="/games"
            ><SvgPath class="icon" title="الالعاب" icon="icon10"
          /></router-link>
        </li>
        <li @click="active = '4'" :class="['nav-item', { m: active === '4' }]">
          <router-link to="/group">
            <SvgPath class="icon" title="المجموعات" icon="icon9" />
          </router-link>
        </li>
        <li @click="active = '3'" :class="['nav-item', { m: active === '3' }]">
          <router-link to="/Marketplace">
            <SvgPath class="icon" title="Marketplace" icon="icon8" />
          </router-link>
        </li>
        <li @click="active = '2'" :class="['nav-item', { m: active === '2' }]">
          <router-link to="/vedio">
            <SvgPath class="icon" title="فيديو" icon="icon6" />
          </router-link>
        </li>
        <li @click="active = '1'" :class="['nav-item', { m: active === '1' }]">
          <router-link to="/home">
            <SvgPath class="icon" title="الصفحة الرئيسية" icon="icon7" />
          </router-link>
        </li>
      </ul>
      <div class="right">
        <SvgPath class="icon" icon="icon5" />
        <img src="../assets/logo.png" alt="" />
      </div>
    </nav>
  </div>
</template>
<script>
import SvgPath from "@/components/SvgPath.vue";
export default {
  name: "HeaderView",
  components: {
    SvgPath,
  },
  data() {
    return {
      active: "1",
    };
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: #f0f2f5;
}

li {
  width: 108px;
  position: relative;
  cursor: pointer;
  .icon {
    color: #65676b;
    border-radius: 6px;
    padding: 10px;
  }
}
li:hover {
  .icon {
    background-color: #eee;
  }
}
.m {
  .icon {
    color: #0866ff;
  }
}
.m::before {
  position: absolute;
  content: "";
  bottom: -10px;
  border-radius: 100px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #0866ff;
}
.about {
  box-shadow: 1px 1px 5px #0000002f;
  position: sticky;
  z-index: 1000;
  top: 0;
}
.right {
  justify-content: end;
  align-items: center;
  width: 200px;
  gap: 20px;
  padding: 0 16px 0 0;
  display: flex;
  img {
    width: 43px;
    height: 43px;
    cursor: pointer;
  }
  .icon {
    background-color: #f0f2f5;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.left {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 210px;
  padding: 0 4px 0 16px;
  img {
    border-radius: 50%;
  }
  .icon {
    background-color: #e4e6eb;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 12px;
    color: #000;
  }
  span {
    background-color: #e41e3f;
    color: #fff;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    font-weight: bold;
    height: 20px;
    top: -7px;
    left: -7px;
    border-radius: 50%;
    position: absolute;
  }
  .icon:hover {
    background-color: #d6d8dd;
  }
}
@media (max-width: 900px) {
  ul {
    display: none;
  }
}
</style>
