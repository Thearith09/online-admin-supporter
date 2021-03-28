<template>
  <div
    class="h-screen max-w-screen-2xl bg-masterit-logo bg-50% bg-center bg-no-repeat"
  >
    <Navbar @switchComponent="toggleComponent" />
    <component :is="currentComponent" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Table from "../components/Table";
import NewStudent from "../components/NewStudent";
import { ref } from "@vue/runtime-core";

export default {
  components: {
    Navbar,
    Login,
    Signup,
    Table,
    NewStudent,
  },
  props: ["component"],
  setup() {
    const currentComponent = ref("Signup");

    const toggleComponent = (event) => {
      currentComponent.value = event;
    };

    return { toggleComponent, currentComponent };
  },
};
</script>
