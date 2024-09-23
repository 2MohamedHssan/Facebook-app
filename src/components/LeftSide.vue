<template>
  <aside>
    <div class="first">
      <div class="top">
        <div class="one">
          <h4>طلبات الصداقة</h4>
          <a href="#">عرض الكل</a>
        </div>
        <div class="d-flex gap-3 add">
          <img src="../assets/nasf.png" alt="" />
          <div>
            <div class="mb-2 pe-2">John Doe</div>
            <div>
              <button>تأكيد</button>
              <button>حذف</button>
            </div>
            <span>1<bdo dir="">ي</bdo></span>
          </div>
        </div>
      </div>
      <hr />
      <div class="text-end pe-1">أعياد الميلاد</div>
      <div class="d-flex gap-2">
        <img src="../assets/cado.png" alt="" />
        <p class="text">
          اليوم عيد ميلاد <span>احمد ابراهيم</span> و2
          <span> من الاشخاص الاخرين</span>
        </p>
      </div>
      <hr />
      <div class="d-flex align-items-center gap-2 justify-content-between">
        <div class="text-end pe-1 w-75">جهات الاتصال</div>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-ellipsis"></i>
      </div>
      <div class="dd" v-for="div in divs" :key="div">
        <img :src="div.img" alt="" />
        <span></span>
        <p>{{ div.text }}</p>
      </div>
      <hr />
      <div class="text-end">دردشات جماعية</div>
      <div class="dd">
        <img :src="imgg" alt="" />
        <span></span>
        <p class="text-start">Freinds</p>
      </div>
      <div class="dd">
        <div>
          <img :src="img12" class="t" alt="" />
          <img :src="img11" class="o" alt="" />
        </div>
        <span style="top: 27px"></span>
        <p>8%</p>
      </div>
      <div class="dd justify-content-start gap-4">
        <strong>+</strong>
        <p>إنشاء دردشة جماعية</p>
      </div>
    </div>
  </aside>
</template>

<script>
import img1 from "@/assets/Amr.jpg";
import img2 from "@/assets/kero.jpg";
import img3 from "@/assets/abada.jpg";
import img4 from "@/assets/bebo.jpg";
import img5 from "@/assets/mohand.jpg";
import img6 from "@/assets/tark.jpg";
import img7 from "@/assets/ahmed.jpg";
import img8 from "@/assets/nasf.png";
import img20 from "@/assets/ponsh.jpg";
import img21 from "@/assets/sef.jpg";
import img22 from "@/assets/rmadan.jpg";
import img23 from "@/assets/khdr.jpg";
import img10 from "@/assets/frindesgrop.jpg";
import img11 from "@/assets/3bs.jpg";
import img12 from "@/assets/jopa.jpg";
export default {
  name: "LeftSide",
  data() {
    return {
      divs: [
        {
          img: img1,
          text: "Amr Khaled",
        },
        {
          img: img2,
          text: "Kerols Magdy",
        },
        {
          img: img3,
          text: "Abada Elgazar",
        },
        {
          img: img4,
          text: "ÃMr MôhÃméd",
        },
        {
          img: img5,
          text: "Mohand Maged",
        },
        {
          img: img6,
          text: "Amr Tarek",
        },
        {
          img: img7,
          text: "Ahmed Mohamed",
        },
        {
          img: img8,
          text: "Mohamed Saad Nassif",
        },
        {
          img: img20,
          text: "Mohamed A. Abuzaid",
        },
        {
          img: img21,
          text: "Śief Âshraf",
        },
        {
          img: img22,
          text: "Mohamed Ramadan",
        },
        {
          img: img23,
          text: "Mohamed Khedr",
        },
      ],
      imgg: img10,
      img11: img11,
      img12: img12,
    };
  },
};
</script>

<style lang="scss" scoped>
aside {
  height: calc(100vh - 50px);
  width: 25%;
  background-color: #f2f4f7;
  overflow-y: auto;
  scrollbar-color: #f2f4f7;
  padding: 10px;
  position: fixed;
  left: 0;
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
.add {
  width: 100%;
  position: relative;
  span {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.7;
    font-weight: 700;
  }
  img {
    border-radius: 50%;
    align-self: flex-start;
  }
  > div {
    div {
      margin: 0;
    }
    div:last-of-type {
      display: flex;
      width: 100%;
      justify-content: space-around;
    }
    button {
      width: 90px;
      border-radius: 6px;
      border: none;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      padding: 5px 10px;
    }
    button:last-child {
      background: #e4e6eb;
      color: #000;
    }
    button:first-child {
      background: #0866ff;
    }

    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: flex-start;
    flex: 1;
  }
}
a {
  text-decoration: none;
  font-weight: 800;
  font-size: 18px;
}
hr + div {
  opacity: 0.6;
  font-weight: bold;
  font-size: 25px;
}
img {
  height: 60px;
}
.text {
  opacity: 0.8;
  font-size: 20px;
  width: 74%;
  text-align: start;
  span {
    font-weight: bold;
  }
  span:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
.top {
  border-radius: 6px;
  padding: 10px 5px;
  &:hover {
    background-color: #eee;
  }
}
.fa-ellipsis {
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
}
.dd {
  display: flex;
  padding: 10px;
  border-radius: 6px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;
  img {
    border-radius: 50%;
    width: 36px;
    height: 36px;
  }
  span {
    background: #31a24c;
    width: 10px;
    position: absolute;
    height: 10px;
    right: 35px;
    outline: #fff solid 2px;
    top: 35px;
    border-radius: 50%;
  }
  p {
    font-size: 18px;
    font-weight: 500;
    align-self: flex-end;
    opacity: 0.8;
    margin: 0;
  }
  &:hover {
    background: #e4e6eb;
  }
}
.o {
  position: absolute;
  top: 14px;
  width: 20px !important;
  height: 20px !important;
  right: 15px;
}
.t {
  position: absolute;
  top: 5px;
  right: 25px;
  width: 20px !important;
  height: 20px !important;
}
strong {
  background: #bcc0c4;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
