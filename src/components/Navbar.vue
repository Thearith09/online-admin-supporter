<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-gradient-to-l from-blue-400 to-transparent p-4"
  >
    <div class="flex items-center flex-no-shrink text-blue-700 uppercase mr-6">
      <img
        class="w-16 mr-2"
        src="/images/masterit-logo.png"
        alt="masterit logo"
      />
      <span class="font-semibold text-xl tracking-tight"
        >Online Admin Supporter</span
      >
    </div>
    <ol
      class="flex leading-none items-center flex-no-shrink justify-between divide-x-2 divide-blue-400"
    >
      <li class="pr-2">
        <a class="link">Schedule</a>
      </li>
      <li class="px-2">
        <a class="link">Add Admin</a>
      </li>
      <li class="px-2">
        <a class="link">Create Supporter</a>
      </li>
      <li class="px-2">
        <a class="link">Log in</a>
      </li>
      <li class="px-2">
        <a class="link">Sign up</a>
      </li>
      <li class="px-2">
        <a class="link">Add Student</a>
      </li>
      <li class="pl-2">
        <a class="link">Log out</a>
      </li>
    </ol>
  </nav>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  setup(props, { emit }) {
    const component = ref("Signup");

    const handleLogin = () => {
      component.value = "Login";
      emit("switchComponent", component.value);
    };

    const handleSignup = () => {
      component.value = "Signup";
      emit("switchComponent", component.value);
    };
    return { handleLogin, handleSignup };
  },
};
</script>

<style></style>
