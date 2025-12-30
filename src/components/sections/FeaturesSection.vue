<template>
  <section id="features" class="py-16 sm:py-20 bg-[#04050A]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Core features</h2>
        <p class="mt-3 text-zinc-300">Everything you need to monitor, understand, and act on orbital activity.</p>
      </div>
      <div class="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="feature in features" 
          :key="feature.title"
          class="rounded-xl border border-transparent hover:border-white/10 bg-[#03161921] p-6 transition-colors"
        >
          <div class="flex items-center gap-2 text-zinc-200">
            <i :data-lucide="feature.icon" class="h-5 w-5"></i>
            <h3 class="text-lg font-medium tracking-tight">{{ feature.title }}</h3>
          </div>
          <p class="mt-2 text-sm text-zinc-400">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useFeatures } from '../../composables/useFeatures'

const { features } = useFeatures()

onMounted(() => {
  if (window.lucide?.createIcons) {
    window.lucide.createIcons()
  }
})
</script>
