<template>
  <div
    class="relative bg-blue-400 bg-opacity-80 p-4 border border-grey-lighter w-1/2 mx-auto mt-32"
  >
    <div class="flex flex-wrap items-stretch w-full mb-4 relative">
      <input
        type="text"
        class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-r-none px-3 relative"
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
      <input
        type="password"
        class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-r-none px-3 relative"
        placeholder="Password"
      />
      <div class="flex -mr-px">
        <span
          class="flex items-center leading-normal font-bold rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm"
          >password</span
        >
      </div>
    </div>
    <div class="flex justify-end">
      <button class="btn">
        Login
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
