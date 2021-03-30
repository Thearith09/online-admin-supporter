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
            >New Admin</span
          >
          <!-- <div
            class="absolute has-tooltip right-14 top-4 bg-green-500 border cursor-pointer shadow-lg z-10 rounded-full p-1"
          >
            <p
              class="tooltip bg-blue-500 text-white text-xs px-3 -ml-10 mt-3 rounded"
            >
              Full
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
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </div>
          <div
            class="absolute has-tooltip right-8 top-4 bg-yellow-500 border cursor-pointer shadow-lg z-10 rounded-full p-1"
          >
            <p
              class="tooltip bg-blue-500 text-white text-xs px-3 -ml-5 -mt-6 rounded"
            >
              Minus
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
                d="M20 12H4"
              />
            </svg>
          </div> -->
          <div
            @click="switchComponent"
            class="absolute has-tooltip right-2 top-4 bg-red-500 border cursor-pointer shadow-lg z-10 rounded-full p-1"
          >
            <p
              class="tooltip bg-white text-blue-500 font-bold p-1 text-xs px-3 mr-4 -mt-6 rounded"
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
        <div class="flex flex-wrap items-stretch w-full relative">
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
      </div>
      <div class="p-2 flex justify-end rounded-b">
        <button class="btn px-8 mr-2 border-none" @click="handleAddAdmin">
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

    const handleAddAdmin = async () => {};

    return { switchComponent, handleAddAdmin };
  },
};
</script>

<style></style>
