<template>
  <LandingLayout>
  <div class="min-h-screen bg-zinc-950">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-20 sm:py-32">
      <div class="absolute inset-0 bg-gradient-to-b from-[#1EDAFC]/10 via-transparent to-transparent"></div>
      <div class="absolute inset-0" style="background-image: url('/bg-net.webp'); opacity: 0.1;"></div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Meet the
            <span class="bg-gradient-to-r from-[#1EDAFC] to-[#18AECA] bg-clip-text text-transparent">
              Crew
            </span>
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            A multidisciplinary team delivering space intelligence with clarity and speed. 
            We're building the future of space awareness, one innovation at a time.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Members Section -->
    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          
          
          <!-- Team Member 1 - Mitchel -->
          <div class="group relative flex">
            <div class="relative overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-white/10 transition-all hover:ring-[#1EDAFC]/50 flex flex-col w-full">
              <div class="aspect-[3/4] overflow-hidden">
                <img 
                  src="/team/Mitchel.webp" 
                  alt="Ujunwa Udeani" 
                  class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-semibold text-white">Mitchel Alex</h3>
                <p class="mt-1 text-sm text-[#1EDAFC]">Co-Founder/Chief Executive Officer</p>
                <a href="https://linkedin.com/in/mitchelalex" class="mt-3 text-cyan-500 flex items-end justify-end gap-2 text-sm text-zinc-400 leading-relaxed cursor-pointer">
                  <i data-lucide="linkedin" class="h-8 w-8 text-[#1EDAFC]"></i>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Team Member 2 - Princess -->
          <div class="group relative flex">
            <div class="relative overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-white/10 transition-all hover:ring-[#1EDAFC]/50 flex flex-col w-full">
              <div class="aspect-[3/4] overflow-hidden">
                <img 
                  src="/team/ujunwa2.webp" 
                  alt="Ujunwa Udeani" 
                  class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-semibold text-white">Dr. Ujunwa Udeani (PhD, Hon)</h3>
                <p class="mt-1 text-sm text-[#1EDAFC]">Executive Director</p>
                <a href="https://www.linkedin.com/in/ujunwaudeani/" class="mt-3 text-cyan-500 flex items-end justify-end gap-2 text-sm text-zinc-400 leading-relaxed cursor-pointer">
                  <i data-lucide="linkedin" class="h-8 w-8 text-[#1EDAFC]"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Team Member 3 - Mary -->
          <div class="group relative flex">
            <div class="relative overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-white/10 transition-all hover:ring-[#1EDAFC]/50 flex flex-col w-full">
              <div class="aspect-[3/4] overflow-hidden">
                <img 
                  src="/team/Mary.webp" 
                  alt="Mary Chukwu" 
                  class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-semibold text-white">Mary Chukwu</h3>
                <p class="mt-1 text-sm text-[#1EDAFC]">Chief Operating Officer</p>
                <a href="https://www.linkedin.com/in/ngozimary/" class="mt-3 text-cyan-500 flex items-end justify-end gap-2 text-sm text-zinc-400 leading-relaxed cursor-pointer">
                  <i data-lucide="linkedin" class="h-8 w-8 text-[#1EDAFC]"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Team Member 4 - Adanna -->
          <div class="group relative flex">
            <div class="relative overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-white/10 transition-all hover:ring-[#1EDAFC]/50 flex flex-col w-full">
              <div class="aspect-[3/4] overflow-hidden">
                <img 
                  src="/team/Ada.webp" 
                  alt="Adanna William" 
                  class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-semibold text-white">Adanna William</h3>
                <p class="mt-1 text-sm text-[#1EDAFC]">Chief Technology Officer</p>
                <a href="https://www.linkedin.com/in/adannawilliam/" class="mt-3 text-cyan-500 flex items-end justify-end gap-2 text-sm text-zinc-400 leading-relaxed cursor-pointer">
                  <i data-lucide="linkedin" class="h-8 w-8 text-[#1EDAFC]"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Team Member 4 - Maria -->
          <div class="group relative flex">
            <div class="relative overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-white/10 transition-all hover:ring-[#1EDAFC]/50 flex flex-col w-full">
              <div class="aspect-[3/4] overflow-hidden">
                <img 
                  src="/team/Maria.webp" 
                  alt="Maria Burlacu" 
                  class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-semibold text-white">Maria Burlacu</h3>
                <p class="mt-1 text-sm text-[#1EDAFC]">Head of Digital Growth and Community Expansion</p>
                <a href="https://www.linkedin.com/in/maria-burlacu-40854639b" class="mt-3 text-cyan-500 flex items-end justify-end gap-2 text-sm text-zinc-400 leading-relaxed cursor-pointer">
                  <i data-lucide="linkedin" class="h-8 w-8 text-[#1EDAFC]"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Team Member 5 - Head of AI R&D -->
          <div class="group relative flex">
            <div class="relative overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-white/10 transition-all hover:ring-[#1EDAFC]/50 flex flex-col w-full">
              <div class="aspect-[3/4] overflow-hidden">
                <img 
                  src="/team/Marvelous.webp" 
                  alt="Marvelous Solomon" 
                  class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-semibold text-white">Marvelous Solomon</h3>
                <p class="mt-1 text-sm text-[#1EDAFC]">Head of AI Research & Development</p>
                <a href="https://www.linkedin.com/in/superdeveloper/" class="mt-3 text-cyan-500 flex items-end justify-end gap-2 text-sm text-zinc-400 leading-relaxed cursor-pointer">
                  <i data-lucide="linkedin" class="h-8 w-8 text-[#1EDAFC]"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Team Member - Jennifer -->
          <div class="group relative flex">
            <div class="relative overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-white/10 transition-all hover:ring-[#1EDAFC]/50 flex flex-col w-full">
              <div class="aspect-[3/4] overflow-hidden">
                <img 
                  src="/team/Jennifer.webp" 
                  alt="Jennifer" 
                  class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-semibold text-white">Jennifer Alex</h3>
                <p class="mt-1 text-sm text-[#1EDAFC]">Outreach Coordinator</p>
                <a href="https://www.linkedin.com/in/jenniferalex19/" class="mt-3 text-cyan-500 flex items-end justify-end gap-2 text-sm text-zinc-400 leading-relaxed cursor-pointer">
                  <i data-lucide="linkedin" class="h-8 w-8 text-[#1EDAFC]"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Team Member 6 - Technical Adviser -->
          <!-- <div class="group relative flex">
            <div class="relative overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-white/10 transition-all hover:ring-[#1EDAFC]/50 flex flex-col w-full">
              <div class="aspect-[3/4] overflow-hidden">
                <img 
                  src="/drew.webp" 
                  alt="Drew Bogda" 
                  class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-semibold text-white">Drew Bogda</h3>
                <p class="mt-1 text-sm text-[#1EDAFC]">Technical Adviser</p>
                <a class="mt-3 text-cyan-500 flex items-end justify-end gap-2 text-sm text-zinc-400 leading-relaxed">
                  <i data-lucide="linkedin" class="h-8 w-8 text-gray-200"></i>
                </a>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="py-20 sm:py-24 bg-white/5">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Mission
          </h2>
          <p class="mt-6 text-lg leading-8 text-zinc-300">
            "The future is not above — it's with us." We're on a mission to democratize space awareness 
            through AI, education, and global access. By merging data, learning, and imagination into a 
            single universe, we're making space intelligence accessible to everyone, everywhere.
          </p>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Values
          </h2>
        </div>
        
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div class="text-center bg-[#0316193D] backdrop-blur-sm border border-transparent rounded-2xl p-8 hover:border-[#09414C] transition-all duration-300">
            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1EDAFC]/10">
              <i data-lucide="lightbulb" class="h-8 w-8 text-[#1EDAFC]"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-white">Innovation</h3>
            <p class="mt-2 text-sm text-zinc-400">
              Pushing boundaries with cutting-edge AI and space technology
            </p>
          </div>
          
          <div class="text-center bg-[#0316193D] backdrop-blur-sm border border-transparent rounded-2xl p-8 hover:border-[#09414C] transition-all duration-300">
            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1EDAFC]/10">
              <i data-lucide="users" class="h-8 w-8 text-[#1EDAFC]"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-white">Accessibility</h3>
            <p class="mt-2 text-sm text-zinc-400">
              Making space intelligence available to everyone globally
            </p>
          </div>
          
          <div class="text-center bg-[#0316193D] backdrop-blur-sm border border-transparent rounded-2xl p-8 hover:border-[#09414C] transition-all duration-300">
            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1EDAFC]/10">
              <i data-lucide="target" class="h-8 w-8 text-[#1EDAFC]"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-white">Excellence</h3>
            <p class="mt-2 text-sm text-zinc-400">
              Delivering clarity and speed in space intelligence
            </p>
          </div>
          
          <div class="text-center bg-[#0316193D] backdrop-blur-sm border border-transparent rounded-2xl p-8 hover:border-[#09414C] transition-all duration-300">
            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1EDAFC]/10">
              <i data-lucide="heart" class="h-8 w-8 text-[#1EDAFC]"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-white">Impact</h3>
            <p class="mt-2 text-sm text-zinc-400">
              Creating meaningful change in space education and awareness
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 sm:py-24 bg-gradient-to-b from-[#1EDAFC]/10 to-transparent">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-2xl bg-zinc-900/50 p-8 ring-1 ring-white/10 sm:p-16">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join Us on This Journey
            </h2>
            <p class="mt-4 text-lg text-zinc-300">
              Be part of the future of space intelligence and education
            </p>
            <div class="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <a href="/#early-access" class="rounded-md bg-[linear-gradient(90deg,#1EDAFC_0%,#18AECA_100%)] px-6 py-3 text-sm font-semibold text-[#031619] shadow-sm hover:opacity-80 transition-colors">
                Get Early Access
              </a>
              <a href="/academy" class="rounded-md bg-[#031619] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-85 boder border-1 border-cyan-900 transition-colors">
                Explore Academy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </LandingLayout>
</template>

<script setup>
import { onMounted } from 'vue';
import LandingLayout from '../components/Layout/LandingLayout.vue';

onMounted(() => {
  if (window.lucide?.createIcons) {
    window.lucide.createIcons()
  }
})
</script>
