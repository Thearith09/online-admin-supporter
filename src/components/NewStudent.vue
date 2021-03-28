<template>
  <div
    class="relative bg-blue-400 bg-opacity-80 p-4 border border-grey-lighter w-1/2 mx-auto mt-32"
  >
    <div class="flex flex-wrap items-stretch w-full mb-4 relative">
      <div class="flex -mr-px">
        <span
          class="flex items-center leading-normal font-bold rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm"
          >ID</span
        >
      </div>
      <input
        type="text"
        class="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"
        placeholder="Identity"
      />
    </div>

    <div class="flex flex-wrap items-stretch w-full mb-4 relative">
      <input
        type="text"
        class="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded rounded-r-none px-3 relative"
        placeholder="Student name"
      />
      <div class="flex -mr-px">
        <span
          class="flex items-center leading-normal font-bold rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm"
          >student name</span
        >
      </div>
    </div>

    <div class="flex flex-wrap items-stretch w-full mb-4 relative">
      <div class="flex -mr-px">
        <span
          class="flex items-center leading-normal font-bold rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm"
          >gender</span
        >
      </div>
      <input
        type="text"
        class="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded rounded-l-none px-3 relative"
        placeholder="Gender"
      />
    </div>

    <div class="flex flex-wrap items-stretch w-full mb-4 relative">
      <input
        type="text"
        class="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded rounded-r-none px-3 relative"
        placeholder="Telephone"
      />
      <div class="flex -mr-px">
        <span
          class="flex items-center leading-normal font-bold rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm"
          >tel</span
        >
      </div>
    </div>

    <div class="flex flex-wrap items-stretch w-full mb-4 relative">
      <div class="flex -mr-px">
        <span
          class="flex items-center leading-normal font-bold rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm"
          >course</span
        >
      </div>
      <input
        type="text"
        class="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"
        placeholder="Course"
      />
    </div>

    <div class="flex flex-wrap items-stretch w-full mb-4 relative">
      <input
        type="text"
        class="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded rounded-r-none px-3 relative"
        placeholder="Register date"
      />
      <div class="flex -mr-px">
        <span
          class="flex items-center leading-normal font-bold rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm"
          >date</span
        >
      </div>
    </div>

    <div class="flex justify-end">
      <button class="btn mr-2">
        Submit
      </button>
      <button class="btn">
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
