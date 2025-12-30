<template>
  <div class="video-thumbnail-wrapper">
    <div
      class="relative cursor-pointer group overflow-hidden rounded-3xl shadow-2xl border border-zinc-800/50 bg-zinc-900"
      @click="openModal"
    >
      <div class="aspect-video relative overflow-hidden">
        <video
          ref="thumbnailVideo"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          :src="videoSrc"
          muted
          preload="metadata"
        ></video>

        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
        
        <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
             style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;">
        </div>
      </div>

      <div class="absolute inset-0 flex items-center justify-center">
        <div class="relative">
          <div class="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
          <div class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-600/40 blur-xl group-hover:blur-2xl transition-all"></div>
          
          <div class="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-white to-white/90 group-hover:from-[#1EDAFC_0%] group-hover:to-[#18AECA_100%] shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-90 border-4 border-white/50">
            <i data-lucide="play" class="h-12 w-12 text-zinc-900 group-hover:text-white transition-colors duration-500 ml-1"></i>
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div class="flex items-end justify-between">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-2">
              <div class="px-3 py-1 rounded-full bg-cyan-600 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider">
                Video
              </div>
              <div class="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium">
                HD
              </div>
            </div>
            <h3 v-if="title" class="text-white text-sm md:text-2xl font-bold drop-shadow-lg mb-1">
              {{ title }}
            </h3>
            <p v-if="description" class="text-white/80 text-[8px] md:text-sm drop-shadow-lg">
              {{ description }}
            </p>
          </div>
          
          <div v-if="duration" class="px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md text-white text-sm font-medium border border-white/10">
            {{ duration }}
          </div>
        </div>
      </div>

      <div class="absolute top-6 right-6 px-4 py-2 rounded-xl bg-[linear-gradient(90deg,#1EDAFC_0%,#18AECA_100%)] text-white text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
        Watch Now
      </div>
    </div>

    <VideoModal
      :is-open="isModalOpen"
      :video-id="videoSrc"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import VideoModal from './VideoModal.vue'

const props = defineProps({
  videoSrc: {
    type: String,
    default: 'https://pub-ba9e883333194e75af85b75fe35917c5.r2.dev/skyta-video.mp4'
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  duration: {
    type: String,
    default: ''
  },
  thumbnailTime: {
    type: Number,
    default: 1
  }
})

const isModalOpen = ref(false)
const thumbnailVideo = ref(null)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

onMounted(() => {
  if (thumbnailVideo.value) {
    thumbnailVideo.value.currentTime = props.thumbnailTime
  }

  if (window.lucide?.createIcons) {
    window.lucide.createIcons()
  }
})
</script>

<style scoped>
.video-thumbnail-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.95);
    opacity: 1;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

.animate-ping {
  animation: pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>