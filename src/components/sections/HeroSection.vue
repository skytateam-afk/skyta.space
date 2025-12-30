<template>
  <section id="product" class="relative bg-[#04050A]">
    <div class="hero-bg mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <div
            class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
          >
            <Activity :size="14" />
            Live orbital intelligence for everyone
          </div>
          <h1
            class="mt-5 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white"
          >
            <span class="font-bold">Google Earth for space — </span>
            <span class="font-light text-[#1EDAFC]">
              {{ typewriterText }}<span class="animate-pulse">|</span>
            </span>
          </h1>
          <p class="mt-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
            Skyta merges space intelligence and education into a single
            universe. Visualize satellites, debris, and orbital dynamics in
            real-time while learning through AI-driven, virtual  reality  Immersion, gamified missions. The
            future is not above — it's with us.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <!-- <a
              href="#early-access"
              class="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-500/90 px-5 py-3 text-sm font-medium tracking-tight text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 shadow-sm shadow-indigo-500/20"
            >
              <ScanLine :size="20" />
              Get Early Access
            </a> -->
            <BtnLink
              link="#early-access"
              iconName="scan-line"
              linkText="Request Access"
            />
            <!-- <button 
              @click="openVideoModal"
              class="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm text-zinc-200 ring-1 ring-white/10 hover:bg-white/5 hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all"
            >
              <PlayCircle :size="20" />
              Watch Demo
            </button> -->
          </div>
        </div>

        <!-- Product Preview -->
        <img
          src="/hero-image.webp"
          alt="Deep space visualization"
          class="w-full object-cover"
        />
      </div>
    </div>

    <!-- Video Modal -->
    <VideoModal
      :is-open="isVideoModalOpen"
      @close="closeVideoModal"
      video-id="eeQnv_IWttw"
    />
  </section>
</template>

<style>
.hero-bg {
  background-image: url('/bg-hero.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  Activity,
  ScanLine,
  PlayCircle,
  Satellite,
  AlertTriangle,
  CloudLightning,
  Globe,
  Target,
  Flame,
  Smartphone,
  Bell,
  Shield,
} from "lucide-vue-next";
import VideoModal from "../VideoModal.vue";
import BtnLink from "../BtnLink.vue";

const isVideoModalOpen = ref(false);
const typewriterText = ref("");
const currentPhraseIndex = ref(0);
const currentCharIndex = ref(0);
const isDeleting = ref(false);
let typewriterInterval = null;

const phrases = [
  "powered by AI",
  "tracking the cosmos",
  "predicting collisions",
  "monitoring space weather",
  "exploring the final frontier",
  "securing orbital paths",
  "visualizing the universe",
];

const typewriterEffect = () => {
  const currentPhrase = phrases[currentPhraseIndex.value];

  if (!isDeleting.value) {
    // Typing forward
    if (currentCharIndex.value < currentPhrase.length) {
      typewriterText.value = currentPhrase.substring(
        0,
        currentCharIndex.value + 1
      );
      currentCharIndex.value++;
    } else {
      // Pause at end before deleting
      setTimeout(() => {
        isDeleting.value = true;
      }, 2000);
    }
  } else {
    // Deleting backward
    if (currentCharIndex.value > 0) {
      typewriterText.value = currentPhrase.substring(
        0,
        currentCharIndex.value - 1
      );
      currentCharIndex.value--;
    } else {
      // Move to next phrase
      isDeleting.value = false;
      currentPhraseIndex.value =
        (currentPhraseIndex.value + 1) % phrases.length;
    }
  }
};

const openVideoModal = () => {
  isVideoModalOpen.value = true;
};

const closeVideoModal = () => {
  isVideoModalOpen.value = false;
};

onMounted(() => {
  // Start typewriter effect
  typewriterInterval = setInterval(
    typewriterEffect,
    isDeleting.value ? 50 : 100
  );
});

onUnmounted(() => {
  if (typewriterInterval) {
    clearInterval(typewriterInterval);
  }
});
</script>
