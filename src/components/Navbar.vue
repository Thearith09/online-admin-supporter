<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-gradient-to-l from-blue-400 to-transparent p-4"
  >
    <div class="flex items-center flex-no-shrink text-blue-700 uppercase mr-6">
      <img
        @click="handleTable"
        class="w-16 mr-2 cursor-pointer"
        src="/images/masterit-logo1.png"
        alt="masterit logo"
      />
      <span class="font-semibold text-xl tracking-tight mt-7"
        >Online Admin Supporter</span
      >
    </div>
    <ol
      class="flex leading-none items-center flex-no-shrink justify-between divide-x-2 divide-white"
    >
      <template v-if="user">
        <li class="pr-2">
          <a
            class="link"
            :class="[component == 'Schedule' ? 'active-nav' : '']"
            @click="handleSchedule"
          >
            Schedule</a
          >
        </li>
        <li class="px-2">
          <a
            class="link"
            :class="[component == 'NewAdmin' ? 'active-nav' : '']"
            @click="handleAddAdmin"
            >Add Admin</a
          >
        </li>
        <li class="px-2">
          <a
            class="link"
            :class="[component == 'NewSupporter' ? 'active-nav' : '']"
            @click="handleAddSupporter"
            >Create Supporter</a
          >
        </li>
        <li class="px-2">
          <a
            class="link"
            :class="[component == 'NewStudent' ? 'active-nav' : '']"
            @click="handleAddStudent"
            >Add Student</a
          >
        </li>
        <li class="pl-2">
          <a class="link" @click="handleLogout">Log out</a>
        </li>
      </template>
    </ol>
  </nav>
</template>

<script>
import { ref } from "@vue/reactivity";
import { projectAuth } from "../firebase/config";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import { computed, watch } from "@vue/runtime-core";

export default {
  props: ["watchComponent"],
  setup(props, { emit }) {
    const component = ref(null);
    const { user } = getUser();
    const router = useRouter();

    //reset active anchor tag in navbar
    const watchComponent = computed(() => props.watchComponent);
    watch(watchComponent, () => {
      component.value = watchComponent.value;
    });

    const handleLogin = () => {
      component.value = "Login";
      emit("switchComponent", component.value);
    };

    const handleSignup = () => {
      component.value = "Signup";
      emit("switchComponent", component.value);
    };

    const handleAddAdmin = () => {
      component.value = "NewAdmin";
      emit("switchComponent", component.value);
    };

    const handleLogout = async () => {
      await projectAuth.signOut();
      router.push({ name: "Home" });
    };

    const handleAddStudent = () => {
      component.value = "NewStudent";
      emit("switchComponent", component.value);
    };

    const handleAddSupporter = () => {
      component.value = "NewSupporter";
      emit("switchComponent", component.value);
    };

    const handleSchedule = () => {
      component.value = "Schedule";
      emit("switchComponent", component.value);
    };

    const handleTable = () => {
      component.value = "Table";
      emit("switchComponent", component.value);
    };

    return {
      user,
      component,
      handleLogin,
      handleSignup,
      handleLogout,
      handleAddAdmin,
      handleAddStudent,
      handleAddSupporter,
      handleSchedule,
      handleTable,
    };
  },
};
</script>

<style></style>
