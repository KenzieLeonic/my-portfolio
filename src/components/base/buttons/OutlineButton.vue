<script setup>
import {FwbButton} from "flowbite-vue"
defineProps({
  buttonText:{
    type: String,
    required: true,
  },
});
</script>

<template>
  <fwb-button color="alternative" class="px-5 py-3 items-center justify-center text-base font-medium">
    {{buttonText}}
  </fwb-button>
</template>
<script>
export default {
  name: 'OutlineButton',
  data(){},
}
</script>
<style scoped>

</style>