<template>
  <div v-if="open">
    <div class="overlay"></div>
    <div class="container">
      <div class="Creat">
        <img :src="img" @click="open = !open" alt="" />
        <div class="head">
          <div class="sin">Sign Up</div>
          <div>It's quick and easy.</div>
        </div>
        <form>
          <div class="inptus">
            <div>
              <input
                v-model="fname"
                @blur="checkInputf"
                @focus="resetErrorf"
                :class="{ blr: isErrorf }"
                type="text"
                placeholder="First name"
              />
              <span v-if="isErrorf">!</span>
            </div>
            <div>
              <input
                type="text"
                v-model="sname"
                @blur="checkInputs"
                @focus="resetErrors"
                :class="{ blr: isErrors }"
                placeholder="Surname"
              />
              <span v-if="isErrors">!</span>
            </div>
          </div>
          <div class="position-relative">
            <input
              type="text"
              v-model="email"
              @blur="checkInpute"
              @focus="resetErrore"
              :class="{ blr: isErrore }"
              placeholder="Mobile number or amail address"
            />
            <span v-if="isErrore">!</span>
          </div>
          <div class="position-relative">
            <input
              type="text"
              v-model="passowrd"
              @blur="checkInputp"
              @focus="resetErrorp"
              :class="{ blr: isErrorp }"
              placeholder="New password"
            />
            <span v-if="isErrorp">!</span>
          </div>
          <div class="date">
            <div>
              Date of birth<i
                title="click for more information"
                class="fa-solid fa-question"
              ></i>
            </div>
            <div>
              <select>
                <option v-for="day in days" :key="day" :value="day">
                  {{ day }}
                </option>
              </select>
              <select>
                <option v-for="manth in manthes" :key="manth" :value="manth">
                  {{ manth }}
                </option>
              </select>
              <select>
                <option v-for="year in years" :key="year" :value="year">
                  {{ year }}
                </option>
              </select>
            </div>
          </div>
          <div class="gender">
            <div>Gender<i class="fa-solid fa-question"></i></div>
            <div>
              <div>
                <label for="one">Female</label>
                <input type="radio" name="gen" id="one" />
              </div>
              <div>
                <label for="tow">Male</label>
                <input type="radio" name="gen" id="tow" />
              </div>
              <div>
                <label for="three">Custom</label>
                <input type="radio" name="gen" id="three" />
              </div>
            </div>
          </div>
          <p>
            People who use our service may have uploaded your contact
            information to Facebook. <a href="#">Learn more.</a>
          </p>
          <p>
            By clicking Sign Up, you agree to our <a href="">Terms</a>,
            <a href="">Privacy Policy</a> and <a href="">Cookies Policy</a> .
            You may receive SMS notifications from us and can opt out at any
            time.
          </p>
          <div class="bt"><button formaction="/">Sign Up</button></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import imgX from "@/assets/3E2YvBpOcbP.png";
export default {
  name: "CreatAcount",
  data() {
    return {
      img: imgX,
      days: [],
      manthes: [
        "Jan",
        "Feb",
        "Mar",
        "May",
        "Jun",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      years: [],
      fname: "",
      sname: "",
      email: "",
      open: true,
      passowrd: "",
      isErrorf: false,
      isErrors: false,
      isErrore: false,
      isErrorp: false,
    };
  },
  methods: {
    genrateYears: function () {
      for (let i = 2024; i >= 1905; i--) {
        this.years.push(i);
      }
    },
    checkInputf() {
      this.isErrorf = this.fname.trim() === "";
    },
    checkInputs() {
      this.isErrors = this.sname.trim() === "";
    },
    checkInpute() {
      this.isErrore = this.email.trim() === "";
    },
    checkInputp() {
      this.isErrorp = this.passowrd.trim() === "";
    },
    resetErrorf() {
      this.isErrorf = false;
    },
    resetErrors() {
      this.isErrors = false;
    },
    resetErrore() {
      this.isErrore = false;
    },
    resetErrorp() {
      this.isErrorp = false;
    },
    genratedayes: function () {
      for (let i = 1; i <= 31; i += 1) {
        this.days.push(i);
      }
    },
  },
  created() {
    this.genrateYears();
    this.genratedayes();
  },
};
</script>

<style lang="scss" scoped>
title {
  background-color: red;
}
.blr {
  border: solid 1px red;
}
span {
  position: absolute;
  content: "!";
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  font-size: 14px;
  height: 15px;
  border-radius: 50%;
  color: #fff;
  background-color: #b94a48;
}
.overlay {
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  position: fixed;
  height: 110vh;
  left: 0;
  top: 0;
}
.Creat {
  font-family: Helvetica, Arial, sans-serif;
  position: absolute;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  top: 50%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  width: 444px;
  border-radius: 6px;
  background-color: #fff;
  text-align: left;
  .head {
    .sin {
      color: #1c1e21;
      font-family: SFProDisplay-Bold, Helvetica, Arial, sans-serif;
      font-size: 33px;
      color: rgb(28, 30, 33);
      font-weight: bold;
      line-height: 38px;
    }
    div:last-child {
      color: rgb(96, 103, 112);
      line-height: 24px;
      font-weight: 400;
      font-size: 15px;
    }
    div {
      margin-bottom: 0;
      padding: 0 16px;
    }
    padding-top: 10px;
    border-bottom: solid 1px #eee;
  }
}
img {
  width: 24px;
  position: absolute;
  right: 16px;
  top: 12px;
}
form {
  padding: 16px;
  .inptus {
    display: flex;
    justify-content: space-between;
    div {
      width: 48%;
      position: relative;
    }
  }
  p {
    font-size: 11px;
    line-height: 20px;
    margin: 10px 0;
    color: rgb(119, 119, 119);
    a {
      color: rgb(56, 88, 152);
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .bt {
    display: flex;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
  }
  button {
    background-color: #00a400;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    width: 50%;
    margin: 10;
    text-align: center;
    padding: 8px 10px;
  }
  button:hover {
    background-image: linear-gradient(rgb(121, 188, 100), rgb(87, 136, 67));
  }
}
input {
  width: 100%;
  height: 40px;
  margin-bottom: 16px;
  padding: 11px;
  background-color: #f5f6f7;
  border-radius: 4px;
  border: solid 1px #ccd0d5;
}
input:focus,
select:focus {
  outline: none;
}
.date {
  div:first-child {
    font-size: 12px;
    position: relative;
    line-height: 20px;
    i {
      background-color: #606770;
      left: 70px;
    }
  }
  div:last-child {
    width: 100%;
    display: flex;
    border-color: rgb(204, 208, 213);
    justify-content: space-between;
    select {
      width: 32%;
      height: 40px;
      border: solid 1px rgb(204, 208, 213);
      padding: 8px;
      border-radius: 4px;
      option:hover {
        background-color: #ccd0d5;
      }
    }
  }
}
.gender {
  > div:first-child {
    position: relative;
    font-size: 12px;
    line-height: 20px;
    margin-top: 10px;
    i {
      background-color: #606770;
      left: 45px;
    }
  }
  > div:last-child {
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      border: solid 1px rgb(204, 208, 213);
      align-items: center;
      width: 32%;
      border-radius: 4px;
      padding: 0 10px;
      justify-content: space-between;
      input {
        margin: 0;
        width: 15px;
      }
    }
  }
}
i {
  border-radius: 50%;
  width: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
  top: 3px;
  position: absolute;
  cursor: pointer;
  font-size: 8px;
  height: 12px;
  color: #fff;
}
</style>
