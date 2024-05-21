<template>
  <section class="w-auto h-auto mx-auto bg-gray-100 dark:bg-gray-900">
    <NavBarItem/>
    <div class="w-full mx-auto h-full">
    <slot />
    </div>
    <FooterItem/>
  </section>
</template>

<script>
import NavBarItem from "@/components/NavBarItem.vue"
import FooterItem from "@/components/FooterItem.vue"
export default {
  name: "NavbarFooter",
  data(){},
  components:{
    NavBarItem,
    FooterItem
  }
}
</script>

<style>

</style>