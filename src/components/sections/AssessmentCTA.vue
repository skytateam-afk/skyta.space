<!-- Write template for Free Skills Assessment use tailwind and Vue.js composition API -->
<template>
  <section class="py-12 max-w-[800px] mx-auto">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-4">Take the Free Skills Assessment</h2>
      <p class="text-lg mb-6 text-[#a1a1a1] font-normal">
        Discover your strengths and areas for improvement with our comprehensive skills assessment. Get personalized feedback to help you grow.
        </p>
        <button
          @click="navigateToAssessment"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#1EDAFC] to-[#18AECA] text-slate-900 font-semibold shadow-sm shadow-indigo-500/20 disabled:opacity-60 disabled:shadow-none0"
        >
          Start Your Assessment
        </button>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function navigateToAssessment() {
  router.push('/assessment');
}
</script>