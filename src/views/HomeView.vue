<template>
  <div class="home">
    <LoginPage />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginPage from "@/views/LoginView.vue";

export default {
  name: "HomeView",
  components: {
    LoginPage,
  },
};
</script>

<!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
