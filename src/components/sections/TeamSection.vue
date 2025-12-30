<template>
  <section id="team" class="py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Crew</h2>
        <p class="mt-3 text-zinc-300">A multidisciplinary team delivering space intelligence with clarity and speed.</p>
      </div>
      <div class=" mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="member in teamMembers" 
          :key="member.name"
          class="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
        >
          <img :src="member.image" :alt="member.name" class="h-80 w-full object-cover" />
          <div class="p-4">
            <div class="text-sm font-medium tracking-tight text-white">{{ member.name }}</div>
            <div class="text-xs text-zinc-400">{{ member.role }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFeatures } from '../../composables/useFeatures'

const { teamMembers } = useFeatures()
</script>
