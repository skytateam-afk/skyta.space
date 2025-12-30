<template>
  <Teleport to="body">
    <Transition name="modal">
      <div 
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click="closeModal"
      >
        <!-- Backdrop with blur -->
        <div class="absolute inset-0 bg-black/90 backdrop-blur-md"></div>
        
        <!-- Modal Content -->
        <div 
          class="relative w-full max-w-6xl bg-zinc-950 rounded-3xl shadow-2xl overflow-hidden border border-zinc-800"
          @click.stop
        >
          <!-- Header -->
          <div class="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 via-black/40 to-transparent p-6 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span class="text-white/80 text-sm font-medium">Now Playing</span>
            </div>
            <button
              @click="closeModal"
              class="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all hover:scale-105 active:scale-95"
              aria-label="Close video"
            >
              <i data-lucide="x" class="h-5 w-5"></i>
            </button>
          </div>

          <!-- Video.js Player Container -->
          <div class="aspect-video bg-black">
            <video
              ref="videoPlayer"
              class="video-js vjs-theme-fantasy vjs-big-play-centered"
              controls
              preload="auto"
            >
              <source :src="videoId" type="video/mp4" />
            </video>
          </div>

          <!-- Bottom Info Bar -->
          <div class="bg-gradient-to-t from-zinc-950 to-transparent p-6 border-t border-zinc-800/50">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-2 text-zinc-400 text-sm">
                  <i data-lucide="video" class="h-4 w-4"></i>
                  <span>MP4 • HD Quality</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button class="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium transition-colors flex items-center gap-2">
                  <i data-lucide="share-2" class="h-4 w-4"></i>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  videoId: {
    type: String,
    default: 'https://pub-ba9e883333194e75af85b75fe35917c5.r2.dev/skyta-video.mp4'
  }
})

const emit = defineEmits(['close'])

const videoPlayer = ref(null)
let player = null

watch(() => props.isOpen, async (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
    
    await nextTick()
    
    if (videoPlayer.value && !player) {
      player = videojs(videoPlayer.value, {
        controls: true,
        autoplay: true,
        preload: 'auto',
        fluid: true,
        responsive: true,
        aspectRatio: '16:9',
        playbackRates: [0.5, 1, 1.5, 2],
        controlBar: {
          volumePanel: {
            inline: false
          }
        }
      })
    } else if (player) {
      player.play()
    }
    
    setTimeout(() => {
      if (window.lucide?.createIcons) {
        window.lucide.createIcons()
      }
    }, 100)
  } else {
    document.body.style.overflow = ''
    if (player) {
      player.pause()
      player.currentTime(0)
    }
  }
})

const closeModal = () => {
  emit('close')
}

const handleEscape = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
  if (player) {
    player.dispose()
    player = null
  }
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active > div:last-child,
.modal-leave-active > div:last-child {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from > div:last-child,
.modal-leave-to > div:last-child {
  transform: scale(0.95) translateY(20px);
  opacity: 0;
}

/* Video.js Custom Theme */
:deep(.video-js) {
  width: 100%;
  height: 100%;
  font-family: inherit;
}

:deep(.vjs-big-play-button) {
  border: none;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  line-height: 90px;
  background: rgba(255, 255, 255, 0.95);
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

:deep(.vjs-big-play-button:hover) {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}

:deep(.vjs-big-play-button .vjs-icon-placeholder:before) {
  font-size: 48px;
  color: #18181b;
  margin-left: 4px;
}

:deep(.vjs-control-bar) {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  backdrop-filter: blur(8px);
  height: 60px;
}

:deep(.vjs-progress-control) {
  position: absolute;
  top: -8px;
  left: 0;
  right: 0;
  height: 8px;
}

:deep(.vjs-progress-holder) {
  height: 8px;
  border-radius: 4px;
}

:deep(.vjs-play-progress) {
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 4px;
}

:deep(.vjs-load-progress) {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

:deep(.vjs-slider) {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}
</style>