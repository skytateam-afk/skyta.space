<template>
  <a
    :href="link"
    class="inline-flex items-center gap-2 w-fit rounded-md bg-[linear-gradient(90deg,#1EDAFC_0%,#18AECA_100%)] hover:opacity-80 px-3.5 py-2 text-sm font-medium tracking-tight cursor-pointer text-[#031619] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 shadow-sm shadow-indigo-500/20"
  >
    <i :data-lucide="iconName" class="h-4 w-4"></i>
    {{ linkText }}
  </a>
</template>
<script setup>
import { onMounted } from 'vue'
defineProps({
    link: String,
    linkText: String,
    iconName: String,
})

onMounted(() => {
  if (window.lucide?.createIcons) {
    window.lucide.createIcons()
  }
})
</script>
