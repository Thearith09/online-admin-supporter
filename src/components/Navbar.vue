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
    <div class="flex items-center flex-no-shrink justify-between">
      <button @click="handleLogin" class="btn mr-2">
        Log in
      </button>
      <button @click="handleSignup" class="btn">
        Sign up
      </button>
    </div>
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
