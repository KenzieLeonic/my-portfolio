<script>
import ProjectCard from '@/components/base/cards/ProjectCard.vue'
export default{
  data(){
    return{
  projects: [
  {
    id:1,
    name:"TableTru",
    link: "/",
    description:""
  },
  {
    id:2,
    name:"Data Warehouse",
    link: "/",
    description:""
  },
  {
    id:3,
    name:"KaiFong Project",
    link: "/",
    description:""
  },
]
    }
  },
  components:{ProjectCard}
}

</script>
<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
      <h1 class="items-center mb-8 text-4xl font-bold">Projects</h1>
      <div class="flex flex-col items-center mb-6" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project"/>
      </div>
    </div>
  </section>
</template>

<style>

</style>