<template>
  <div class="h-screen">
    <Navbar
      @switchComponent="toggleComponent"
      :watchComponent="currentComponent"
    />
    <component :is="currentComponent" @switchComponent="toggleComponent" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import NewStudent from "../components/NewStudent";
import NewAdmin from "../components/NewAdmin";
import NewSupporter from "../components/NewSupporter";
import Schedule from "../components/Schedule";
import { computed, ref } from "@vue/runtime-core";

export default {
  components: {
    Navbar,
    Table,
    NewStudent,
    NewAdmin,
    NewSupporter,
    Schedule,
  },
  setup() {
    const currentComponent = ref("Table");

    const toggleComponent = (event) => {
      currentComponent.value = event;
    };

    return { toggleComponent, currentComponent };
  },
};
</script>
