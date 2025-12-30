<template>
  <footer class="pt-10 pb-14 bg-[#04050A]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-4 gap-8 rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
        <div>
          <router-link to="/" class="flex items-center gap-2 text-zinc-100">
            <img src="/logo.png" alt="Skyta.space" class="h-12 w-auto" />
          </router-link>
          <p class="mt-3 text-sm text-zinc-400">Outer space monitoring & intelligence platform for everyone.</p>
          <div class="mt-4 flex items-center gap-3">
            <router-link to="/#early-access" class="text-xs text-zinc-300 hover:text-white">Request Access</router-link>
            <!-- <span class="text-zinc-600">•</span>
            <a href="#" class="text-xs text-zinc-300 hover:text-white">Docs</a> -->
          </div>
        </div>
        <div>
          <h4 class="text-sm font-medium tracking-tight text-white">Product</h4>
          <ul class="mt-3 space-y-2 text-sm text-zinc-400">
            <li><router-link class="hover:text-zinc-200" to="/#features">Features</router-link></li>
            <li><router-link class="hover:text-zinc-200" to="/#users">Use Cases</router-link></li>
            <li><router-link class="hover:text-zinc-200" to="/#roadmap">Roadmap</router-link></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-medium tracking-tight text-white">Company</h4>
          <ul class="mt-3 space-y-2 text-sm text-zinc-400">
            <li><router-link class="hover:text-zinc-200" href="team">Team</router-link></li>
            <li><router-link class="hover:text-zinc-200" to="/privacy">Privacy</router-link></li>
            <li><router-link class="hover:text-zinc-200" to="/terms">Terms</router-link></li>
          <h4 class="hidden md:block text-sm font-medium tracking-tight text-white pt-7">Phone Number:</h4>
          <p class="hidden md:block mt-3 space-y-2 text-sm text-zinc-400 max-w-[250px]">‪+1404-917-3101‬ <br /> ‪+1943-238-1577‬</p>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-medium tracking-tight text-white">Stay updated</h4>
          <p class="mt-3 text-sm text-zinc-400">Get product updates and pilot opportunities.</p>
          <form @submit.prevent="handleNewsletterSubmit" class="mt-3 flex items-stretch gap-2">
            <label for="newsEmail" class="sr-only">Email</label>
            <input 
              id="newsEmail" 
              v-model="newsletterEmail"
              type="email" 
              placeholder="you@example.com" 
              required
              class="w-full rounded-md bg-zinc-800/60 text-sm text-zinc-100 placeholder-zinc-500 ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 px-3 py-2" 
            />
            <button class="inline-flex items-center gap-2 rounded-md bg-[linear-gradient(90deg,#1EDAFC_0%,#18AECA_100%)] hover:opacity-80 px-3.5 py-2 text-sm font-medium tracking-tight cursor-pointer text-[#031619] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 shadow-sm shadow-indigo-500/20">
              <i data-lucide="mail" class="h-4 w-4"></i>
              Subscribe
            </button>
          </form>
          <h4 class="md:hidden text-sm font-medium tracking-tight text-white pt-7">Phone Number:</h4>
          <p class="md:hidden mt-3 space-y-2 text-sm text-zinc-400 max-w-[250px]">‪+1404-917-3101‬ <br /> ‪+1943-238-1577‬</p>
          <h4 class="text-sm font-medium tracking-tight text-white pt-5">Location:</h4>
          <p class="mt-3 space-y-2 text-sm text-zinc-400 max-w-[250px]">410 Peachtree Parkway Suite 4245, GA 30041</p>
        </div>
      </div>
      <div class="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>© {{ currentYear }} Skyta.space. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <a href="https://x.com/SkytaSpace" class="hover:text-zinc-300 inline-flex items-center gap-1">
            <i data-lucide="twitter" class="h-3.5 w-3.5"></i>Twitter
          </a>
          <a href="https://www.linkedin.com/company/skyta-llc/posts/?feedView=all" class="hover:text-zinc-300 inline-flex items-center gap-1">
            <i data-lucide="linkedin" class="h-3.5 w-3.5"></i>LinkedIn
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const newsletterEmail = ref('')
const currentYear = computed(() => new Date().getFullYear())

const handleNewsletterSubmit = () => {
  newsletterEmail.value = ''
  // Placeholder update
  const input = document.getElementById('newsEmail')
  if (input) {
    input.placeholder = 'Thanks for subscribing!'
  }
}

onMounted(() => {
  if (window.lucide?.createIcons) {
    window.lucide.createIcons()
  }
})
</script>
