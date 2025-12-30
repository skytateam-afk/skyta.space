<template>
  <section id="roadmap" class="py-16 sm:py-20 bg-[#04050A]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Our Vision</h2>
        <p class="mt-3 text-zinc-300">To democratize space awareness and make astronomy education accessible to everyone, everywhere</p>
      </div>
      
      <div class="mt-16 grid lg:grid-cols-2 gap-8">
        <div 
          v-for="(phase, index) in roadmapPhases" 
          :key="phase.year"
          class="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 hover:border-white/20 transition-all duration-500"
          :class="index % 2 === 0 ? 'lg:translate-y-0' : 'lg:translate-y-8'"
        >
          <!-- Background Image with Overlay -->
          <div class="absolute inset-0 overflow-hidden">
            <img 
              :src="phase.image" 
              :alt="phase.title"
              class="h-full w-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
            />
            <div 
              class="absolute inset-0 bg-gradient-to-br opacity-60"
              :class="phase.color"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent"></div>
          </div>

          <!-- Content -->
          <div class="relative p-8">
            <!-- Year Badge -->
            <div class="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
                 :class="[phase.borderColor, phase.iconBg]">
              <i :data-lucide="phase.icon" class="h-4 w-4"></i>
              <span class="text-white">{{ phase.year }}</span>
            </div>

            <!-- Title -->
            <h3 class="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {{ phase.title }}
            </h3>
            <p class="mt-2 text-base text-zinc-300 font-medium">
              {{ phase.subtitle }}
            </p>

            <!-- Highlights -->
            <ul class="mt-6 space-y-3">
              <li 
                v-for="(highlight, idx) in phase.highlights" 
                :key="idx"
                class="flex items-start gap-3 text-sm text-zinc-300 group/item"
              >
                <div class="mt-0.5 flex-shrink-0">
                  <div class="h-1.5 w-1.5 rounded-full bg-white/40 group-hover/item:bg-white/80 transition-colors"></div>
                </div>
                <span class="group-hover/item:text-white transition-colors">{{ highlight }}</span>
              </li>
            </ul>

            <!-- Progress Indicator -->
            <div class="mt-8 flex items-center gap-2">
              <div class="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
                <div 
                  class="h-full bg-gradient-to-r transition-all duration-1000"
                  :class="phase.color"
                  :style="{ width: index === 0 ? '30%' : '0%' }"
                ></div>
              </div>
              <span class="text-xs text-zinc-400 font-medium">{{ index === 0 ? '30' : '0' }}%</span>
            </div>

            <!-- Decorative Corner -->
            <div class="absolute top-0 right-0 w-32 h-32 opacity-10">
              <div class="absolute inset-0 bg-gradient-to-br from-white to-transparent rounded-bl-full"></div>
            </div>
          </div>

          <!-- Hover Glow Effect -->
          <div 
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            :class="phase.color"
            style="filter: blur(60px); transform: scale(0.8);"
          ></div>
        </div>
      </div>

      <!-- Timeline Connector (Desktop) -->
      <div class="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-96 bg-gradient-to-b from-transparent via-white/20 to-transparent pointer-events-none"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useFeatures } from '../../composables/useFeatures'

const { roadmapPhases } = useFeatures()

onMounted(() => {
  if (window.lucide?.createIcons) {
    window.lucide.createIcons()
  }
})
</script>
