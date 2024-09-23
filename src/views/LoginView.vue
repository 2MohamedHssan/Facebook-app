<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div>
            <div class="left">
              <img :src="imge" alt="" />
            </div>
            <h3 class="text-start">
              Facebook helps you connect and share with the people in your life.
            </h3>
          </div>
        </div>
        <div class="col-lg-6">
          <div>
            <form class="bg-white">
              <div class="inputs">
                <div>
                  <input
                    type="Email"
                    required
                    placeholder="Email address or phone number"
                  />
                </div>
                <div class="position-relative">
                  <input
                    v-model="done"
                    :type="[vtype ? 'password' : 'text']"
                    required
                    placeholder="Password"
                  />
                  <i
                    v-if="done"
                    @click="vtype = !vtype"
                    class="fa-regular fa-eye-slash"
                  ></i>
                </div>
              </div>
              <div class="btn-l">
                <button formaction="/home" formmethod="get">Log in</button>
              </div>
              <div class="foget"><a href="#">Forgotten password?</a></div>
              <div class="line"></div>
              <div class="btnc">
                <button @click.prevent="open = !open">
                  Create new Account
                </button>
              </div>
            </form>
            <div class="createpage">
              <a href="">Create a page </a> for a celebrity, brand or business.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="open">
      <CreeateAcount />
    </div>
  </div>
</template>

<script>
import img from "@/assets/4lCu2zih0ca.svg";
import CreeateAcount from "@/components/CreateAccount.vue";
export default {
  name: "LoginPage",
  components: {
    CreeateAcount,
  },
  data() {
    return {
      imge: img,
      open: false,
      done: "",
      vtype: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  text-align: center;
  justify-content: center;
  padding-top: 100px;
  display: flex;
  > div {
    justify-content: center;
    display: flex;
  }
  .left {
    padding: 112px 0 16px;
    width: 300px;
    margin: 0 0 0 -15px;
  }
  @media (max-width: 991px) {
    h3 {
      text-align: center !important;
      width: 400px;
    }
    .left {
      margin: 0 auto;
      padding: 0 0 20px;
    }
  }
  img {
    height: 110px;
    margin: -28px;
  }
  h3 {
    color: #1c1e21;
    max-width: 500px;
    min-width: 400px;
  }
}
i {
  position: absolute;
  right: 20px;
  top: 25px;
  cursor: pointer;
}
@media (max-width: 991px) {
  .row {
    padding: 40px;
  }
}
form {
  border-radius: 8px;
  padding-bottom: 24px;
  padding-top: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  margin: 40px 0 0;
  width: 400px;
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
    div {
      padding: 6px 0;
      width: 92%;
      input {
        height: 52px;
        border: none;
        font-size: 18px;
        padding: 14px 16px;
        border: 1px solid #dddfe2;
        color: #1d2129;
        background-color: #fff;
        border-radius: 6px;
        width: 100%;
      }
      input:focus {
        border-color: #0866ff;
        box-shadow: 0 0 0 2px #e7f3ff;
        caret-color: #0866ff;
        color: #1d2129;
        opacity: 0.7;
        outline: none;
      }
      input::placeholder {
        opacity: 0.7;
      }
      input:hover {
        cursor: text;
      }
    }
  }
  .btn-l {
    padding-top: 6px;
    button {
      background-color: #0866ff;
      border: none;
      border-radius: 6px;
      font-size: 20px;
      line-height: 48px;
      color: #fff;
      padding: 0 16px;
      width: 92%;
    }
    button:hover {
      background-color: #1877f2;
      border-color: #365899;
    }
  }
  .btnc {
    text-align: center;
    button {
      background-color: #42b72a;
      border: none;
      border-radius: 6px;
      font-size: 20px;
      line-height: 48px;
      color: #fff;
      padding: 0 16px;
      width: 62%;
    }
    button:hover {
      background-color: #36a420;
      border-color: #36a420;
    }
  }
  .foget {
    margin-top: 16px;
    a {
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .line {
    align-items: center;
    border-bottom: 1px solid #dadde1;
    display: flex;
    margin: 20px 16px;
    text-align: center;
  }
}
.createpage {
  font-size: 15px;
  color: #1c1e21;
  margin-top: 20px;
  a {
    color: #1c1e21;
    font-family: SFProText-Semibold, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
}
</style>
