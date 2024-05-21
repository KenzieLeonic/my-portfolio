<script setup>
import BlogCard from '@/components/base/cards/BlogCard.vue'
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <h1 class="text-4xl font-bold items-center mb-8">Blog</h1>
      <div class="flex items-center gap-6">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </div>
    </section>
</template>

<style>
  
</style>