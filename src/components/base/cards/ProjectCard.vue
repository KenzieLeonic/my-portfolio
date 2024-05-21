<script setup>
defineProps({
  project: {
    type: Object,
    required:true
  }
})
</script>

<template>
  <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full ">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="">
    <div class="flex flex-col p-4">
      <a href="#" class="mb-2 text-xl md:text-2xl text-clip overflow-hidden ... font-bold tracking-tight text-gray-900 hover:text-underline ">
        {{ project.name }}
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
a:hover {
  text-decoration: underline;
}
</style>