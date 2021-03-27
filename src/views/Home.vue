<template>
  <Navbar @switchComponent="toggleComponent" />
  <component :is="currentComponent" />
</template>

<script>
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { ref } from "@vue/runtime-core";

export default {
  components: {
    Navbar,
    Login,
    Signup,
  },
  props: ["component"],
  setup() {
    const currentComponent = ref("Login");

    const toggleComponent = (event) => {
      currentComponent.value = event;
    };

    return { toggleComponent, currentComponent };
  },
};
</script>
