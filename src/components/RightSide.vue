<template>
  <aside>
    <div class="first">
      <div class="one">
        <img src="../assets/download.jpg" class="me-2" alt="" />
        <span>Mohamed Hassan</span>
      </div>
      <div
        v-for="div in divs"
        :key="div"
        class="d-flex align-items-center gap-3 pe-2"
      >
        <img :src="div.img" alt="" />
        <span>{{ div.text }}</span>
      </div>
      <div class="d-flex align-items-center gap-3 me-1 mt-2">
        <i class="fa-solid fa-angle-down" style="color: #000000"></i>
        <span>عرض المزيد</span>
      </div>
      <hr />
    </div>
    <div class="second">
      <div class="d-flex align-items-center justify-content-between">
        <h4 class="text-light-50">اختصاراتك</h4>
        <a href="#">تعديل</a>
      </div>
      <div
        v-for="div in sdivs"
        :key="div"
        class="d-flex align-items-center justify-content-between"
      >
        <img :src="div.img" alt="" />
        <span>{{ div.text }}</span>
      </div>
      <div class="d-flex align-items-center gap-3 me-1 mt-2">
        <i class="fa-solid fa-angle-down" style="color: #000000"></i>
        <span>عرض المزيد</span>
      </div>
    </div>
  </aside>
</template>

<script>
import img1 from "@/assets/frined.png";
import img2 from "@/assets/grop.png";
import img3 from "@/assets/time.png";
import img4 from "@/assets/Anno.png";
import img5 from "@/assets/vedio.png";
import img6 from "@/assets/home.png";
import img7 from "@/assets/news.png";
import img11 from "@/assets/zero.png";
import img12 from "@/assets/Nti.png";
import img13 from "@/assets/go.png";
import img14 from "@/assets/react.png";
export default {
  name: "RightSide",
  data() {
    return {
      divs: [
        {
          img: img1,
          text: "الاصدقاء",
        },
        {
          img: img2,
          text: "المجموعات",
        },
        {
          img: img3,
          text: "الذكرايات",
        },
        {
          img: img4,
          text: "العناصر المحفوظة",
        },
        {
          img: img5,
          text: "الفيديو",
        },
        {
          img: img6,
          text: "Marketplace",
        },
        {
          img: img7,
          text: "الاخبار",
        },
      ],
      sdivs: [
        {
          img: img11,
          text: "Elzero Web School",
        },
        {
          img: img14,
          text: "FrontEnd React.js",
        },
        {
          img: img13,
          text: "Go Freelance",
        },
        {
          img: img12,
          text: "NTI Scholarship",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
aside {
  height: calc(100vh - 100px);
  width: 25%;
  background-color: #f2f4f7;
  overflow-y: auto;
  scrollbar-color: #f2f4f7;
  padding: 10px;
  position: fixed;
  right: 0;
  top: 62px;
  direction: rtl;
  .first {
    display: flex;
    flex-direction: column;
    padding: 20px 5px;
    color: #000;
  }
  .one {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      border-radius: 50%;
    }
  }
  .first div {
    &:hover {
      background-color: #eee;
    }
    cursor: pointer;
    padding: 5px;
  }
}
span {
  font-size: 0.9375rem;
}
aside::-webkit-scrollbar {
  width: 10px;
}

aside::-webkit-scrollbar-track {
  background: #eee;
  border-radius: 10px;
}

aside::-webkit-scrollbar-thumb {
  background: #bcc0c4;
  border-radius: 10px;
}

aside::-webkit-scrollbar-thumb:hover {
  background: #aaa;
}
i {
  background-color: #dddfe2;
  padding: 5px;
  border-radius: 50%;
}
.second {
  div {
    padding: 3px 10px;
    cursor: pointer;
  }
  div:hover {
    background-color: #eee;
  }
  h4 {
    color: #777;
  }
  a {
    text-decoration: none;
    width: 50px;
    font-size: 18px;
    padding: 0 10px;
    border-radius: 6px;
    display: none;
  }
  a:hover {
    background-color: #eee;
  }
}
.second:hover a {
  display: block;
}
</style>
