<template>
  <div class="text-zinc-200 antialiased selection:bg-indigo-500/30" style="font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial">
    <!-- Top Accent Gradients -->
    <div class="pointer-events-none fixed inset-0 z-0">
      <div class="absolute inset-0 bg-[radial-gradient(1300px_circle_at_20%_-10%,rgba(60,60,255,0.08),transparent)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(1000px_circle_at_80%_-10%,rgba(0,180,255,0.06),transparent)]"></div>
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>

    <div class="relative z-10">
      <AppHeader />
      <div class="bg-[#04050A]">
        <slot></slot>
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import AppHeader from '../AppHeader.vue'
import AppFooter from '../AppFooter.vue'
</script>
