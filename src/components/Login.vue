<template>
  <form @submit.prevent="handleLogin">
    <div
      class="relative bg-blue-400 bg-opacity-80 p-4 border border-grey-lighter w-1/2 mx-auto mt-32"
    >
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

      <div v-if="error" class="error">
        {{ error }}
      </div>

      <div class="flex justify-end">
        <button class="btn">
          Login
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import useLogin from "../composables/useLogin";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const { error, login } = useLogin();
    const router = useRouter();

    const handleLogin = async () => {
      await login(email.value, password.value);

      if (!error.value) router.push({ name: "Task" });
    };

    return { email, password, error, handleLogin };
  },
};
</script>

<style></style>
