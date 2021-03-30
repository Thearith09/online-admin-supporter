<template>
  <form @submit.prevent="handleSignup">
    <div
      class="relative bg-blue-400 bg-opacity-80 p-4 border border-grey-lighter w-1/2 mx-auto mt-32"
    >
      <div class="flex flex-wrap items-stretch w-full mb-4 relative">
        <div class="flex -mr-px">
          <span
            class="flex items-center leading-normal font-bold rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm"
            >@</span
          >
        </div>
        <input
          v-model="username"
          type="text"
          class="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"
          placeholder="Username"
        />
      </div>

      <div class="flex flex-wrap items-stretch w-full mb-4 relative">
        <input
          v-model="email"
          type="email"
          class="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded rounded-r-none px-3 relative"
          placeholder="Email"
        />
        <div class="flex -mr-px">
          <span
            class="flex items-center leading-normal font-bold rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm"
            >@gmail.com</span
          >
        </div>
      </div>

      <div class="flex flex-wrap items-stretch w-full mb-4 relative">
        <div class="flex -mr-px">
          <span
            class="flex items-center leading-normal font-bold rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm"
            >password</span
          >
        </div>
        <input
          v-model="password"
          type="password"
          class="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded rounded-l-none px-3 relative"
          placeholder="Password"
        />
      </div>

      <div class="flex flex-wrap items-stretch w-full mb-4 relative">
        <input
          v-model="confirmPassword"
          type="password"
          class="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded rounded-r-none px-3 relative"
          placeholder="Confirm password"
        />
        <div class="flex -mr-px">
          <span
            class="flex items-center leading-normal font-bold rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm"
            >confirm</span
          >
        </div>
      </div>

      <div v-if="error" class="error">
        {{ error }}
      </div>

      <div class="flex justify-end">
        <button class="btn">
          Signup
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";
import { functions } from "../firebase/config";

export default {
  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const { signup, error } = useSignup();

    const handleSignup = async () => {
      if (password.value != confirmPassword.value) {
        error.value = "Password doesn't match the confirmation!";
      } else {
        await signup(email.value, password.value, username.value);

        if (!error.value) console.log("Successful");
      }
    };

    return { username, email, password, confirmPassword, error, handleSignup };
  },
};
</script>

<style></style>
