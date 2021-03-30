<template>
  <div class="h-screen">
    <Navbar />
    <Login />
  </div>
</template>

<script>
import Login from "../components/Login";
import Signup from "../components/Signup";
import Navbar from "../components/Navbar";

export default {
  components: {
    Login,
    Navbar,
    Signup,
  },
};
</script>
