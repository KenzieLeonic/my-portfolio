<script setup>
import { RouterLink } from 'vue-router';
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from 'flowbite-vue'
</script>

<template>
  <fwb-navbar>
    <template #logo>
      <router-link to="/">
      <fwb-navbar-logo alt="Flowbite logo" image-url="https://flowbite.com/docs/images/logo.svg">
        Flowbite
      </fwb-navbar-logo>
    </router-link>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link href="/about">
          <router-link to="/about"> About </router-link>
        </fwb-navbar-link>
        <fwb-navbar-link href="/blogs">
          <router-link to="/blogs">
            Blog
          </router-link>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>


<script>
export default {
  name: "NavBarItem",
  data() {

  },
}
</script>


<style scoped>
</style>