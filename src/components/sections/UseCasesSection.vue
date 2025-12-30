<template>
  <section id="users" class="py-16 sm:py-20 bg-[#04050A]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Made for every orbit of need</h2>
        <p class="mt-3 text-zinc-300">From policy to classrooms to mission control, Skyta.space brings clarity to complex space data.</p>
      </div>
      <div class="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="useCase in useCases" 
          :key="useCase.title"
          class="rounded-xl border border-white/10 bg-white/5 p-6"
        >
          <div class="flex items-center gap-2 text-zinc-200">
            <i :data-lucide="useCase.icon" class="h-5 w-5"></i>
            <h3 class="text-lg font-medium tracking-tight">{{ useCase.title }}</h3>
          </div>
          <ul class="mt-3 space-y-2 text-sm text-zinc-400">
            <li v-for="item in useCase.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useFeatures } from '../../composables/useFeatures'

const { useCases } = useFeatures()

onMounted(() => {
  if (window.lucide?.createIcons) {
    window.lucide.createIcons()
  }
})
</script>
