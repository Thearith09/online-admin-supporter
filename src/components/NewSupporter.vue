<template>
  <div
    class="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"
  >
    <div
      class="bg-gradient-to-l mx-auto from-black to-blue-400 rounded w-1/2 border shadow-lg"
    >
      <div class="rounded-t">
        <div class="relative py-3 px-2 flex">
          <span class="font-semibold text-white md:text-base text-sm"
            >New Supporter</span
          >
          <div
            @click="switchComponent"
            class="absolute has-tooltip right-2 top-4 bg-red-500 border cursor-pointer shadow-lg z-10 rounded-full p-1"
          >
            <p
              class="tooltip bg-white text-blue-500 font-bold text-xs px-3 mr-4 -mt-6 p-1 rounded"
            >
              Exit
            </p>
            <svg
              class="w-1.5 h-1.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="bg-white text-base h-auto border-b p-4">
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
      </div>
      <div class="p-2 flex justify-end rounded-b">
        <button class="btn px-8 mr-2 border-none">
          Add
        </button>
        <button class="btn border-none" @click="switchComponent">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props, { emit }) {
    const component = ref("Table");

    const switchComponent = () => {
      emit("switchComponent", component.value);
    };

    return { switchComponent };
  },
};
</script>

<style></style>
