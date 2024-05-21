<script setup>
import { FwbButton } from 'flowbite-vue'
defineProps({
  buttonText:{
    type: String,
    required: true,
  },
});

</script>

<template>
  <div>
    <fwb-button color="purple" class="items-center justify-center px-5 py-3 text-base font-medium">
      {{buttonText}}
      <template #suffix>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
        </svg>
      </template>
    </fwb-button>
  </div>
</template>

<script>
export default {
  name: "SubmitButton",
  data(){},
}
</script>

<style>

</style>