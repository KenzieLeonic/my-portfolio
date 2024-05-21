<script setup>
import {RouterView } from 'vue-router'

</script>

<script>
import NavbarFooter from "./layouts/NavbarFooter.vue";
export default {
  data() {},
  components: {
  NavbarFooter
},
};
</script>

<template>
  <NavbarFooter>
    <RouterView />
  </NavbarFooter>
</template>

<style scoped>

</style>
