<template>
  <div>
    <div class="main2 mt-3" v-for="post in posts" :key="post">
      <div class="d-flex justify-content-between">
        <div class="fot">
          <img :src="post.img" alt="" />
          <div>
            <p>{{ post.postname }}</p>
            <span>{{ post.time }} <i class="fa-solid fa-user-group"></i></span>
          </div>
        </div>
        <i class="fa-solid fa-ellipsis" data-v-8be4f1a4=""></i>
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="post">
        <div>{{ post.text }}</div>
        <img :src="post.imgpost" alt="" />
      </div>
      <hr />
      <div class="react">
        <div v-for="re in res" :key="re">
          <i :class="re.iclass"></i>
          <span>{{ re.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/Amr.jpg";
import img2 from "@/assets/rmadan.jpg";
import img3 from "@/assets/bebo.jpg";
import img4 from "@/assets/kero.jpg";
import img5 from "@/assets/3bs.jpg";
import img6 from "@/assets/hazm.jpg";
import img7 from "@/assets/s2.jpg";
import img8 from "@/assets/s1.jpg";
import img9 from "@/assets/p1.jpg";
import img10 from "@/assets/p2.jpg";
import img11 from "@/assets/p3.jpg";
import img12 from "@/assets/p4.jpg";
export default {
  name: "PostOne",
  data() {
    return {
      res: [
        {
          iclass: "fa-regular fa-thumbs-up",
          text: "اعجبني",
        },
        {
          iclass: "fa-regular fa-comment fa-flip-horizontal",
          text: "تعليق",
        },
        {
          iclass: "fa-brands fa-whatsapp",
          text: "إرسال",
        },
        {
          iclass: "fa-solid fa-share",
          text: "مشاركة",
        },
      ],
      posts: [
        {
          img: img6,
          imgpost: img7,
          postname: " حازم ابوصقر ",
          time: "1 س.",
          text: `امين يا رب العالمين`,
        },
        {
          img: img5,
          imgpost: img8,
          postname: "احمد عبدالسلام",
          time: "1 س.",
          text: "كل عام وانتم بخير ",
        },
        {
          img: img1,
          imgpost: img12,
          postname: "Amr Khaled",
          time: "2 س.",
          text: `لما اجيب واحد من دفعه رابعه يسكن معانا ويكون مفهمنا انه بيعرف يطبخ`,
        },
        {
          img: img2,
          imgpost: img9,
          postname: "Mohamed Ramadan",
          time: "1 س.",
          text: `اذا رايتها صدفه فمن الممكن ان تكون انت`,
        },
        {
          img: img3,
          imgpost: img10,
          postname: "ÃMr MôhÃméd",
          time: "4 س.",
          text: "لما صحبي يحب يعدل علي المشروع قبل  المناقشه بعشر دقائق والمشروع يضرب",
        },
        {
          img: img4,
          imgpost: img11,
          postname: "Kerols Magdy",
          time: "4 س.",
          text: "انا واصحابي لما نسال علي الي بيخلص تعليم وجيش ويكون نفسه ويروح يتقدم لوحده",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main2 {
  border-radius: 6px;
  background: #fff;
  padding: 20px;
  > div {
    direction: rtl;
    gap: 10px;
    padding-left: 10px;
    .fot {
      display: flex;
      flex: 1;
      gap: 10px;
      align-items: center;
      img {
        border-radius: 50%;
      }
      div {
        p {
          margin: 0;
          font-weight: bold;
          opacity: 0.9;
        }
        span {
          font-weight: bold;
          font-size: 14px;
          text-align: start;
          display: block;
          i {
            font-size: 10px;
          }
        }
      }
    }
  }
  .fa-solid {
    color: #797b7e;
    cursor: pointer;
    font-size: 24px;
  }
  .fa-xmark {
    font-size: 25px;
    width: 40px;
    height: 40px;
    padding: 7px;
    border-radius: 50%;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
  .post {
    margin-top: 20px;
    text-align: start;
    font-size: 20px;
    opacity: 0.9;
    padding: 0 0 15px 0;
    img {
      width: 100%;
      margin-top: 10px;
      height: 410px;
    }
  }
  hr {
    margin: 4px;
  }
  .react {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      width: calc(100% / 4);
      border-radius: 6px;
      gap: 10px;
      opacity: 0.9;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 20px;
      padding: 5px;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>
