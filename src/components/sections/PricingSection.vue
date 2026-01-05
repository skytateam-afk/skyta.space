<template>
  <section id="pricing" class="relative py-24 px-6 overflow-hidden bg-[#04050A]">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-[radial-gradient(800px_circle_at_50%_-20%,rgba(120,119,198,0.05),transparent)]"></div>
    
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#001A1E] border border-cyan-850 mb-6">
          <span class="text-indigo-400 text-sm font-medium">🚀 Learning Portal Phase 1</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
          Start Your Space Learning Journey
        </h2>
        <p class="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
          Access AI-powered education, real-time space data, and gamified learning. Early bird pricing available now.
        </p>
        
        <!-- Billing Period Toggle -->
        <div class="inline-flex items-center gap-3 p-1 bg-[#18181B80] backdrop-blur-sm border border-zinc-800 rounded-lg">
          <button
            @click="billingPeriod = 'monthly'"
            :class="[
              'px-6 py-2 rounded-md text-sm font-medium transition-all duration-200',
              billingPeriod === 'monthly'
                ? 'bg-[#0C5765] text-white shadow-lg shadow-[#0C5765]/25'
                : 'text-zinc-400 hover:text-zinc-300'
            ]"
          >
            Monthly
          </button>
          <button
            @click="billingPeriod = 'quarterly'"
            :class="[
              'px-6 py-2 rounded-md text-sm font-medium transition-all duration-200',
              billingPeriod === 'quarterly'
                ? 'bg-[#0C5765] text-white shadow-lg shadow-[#0C5765]/25'
                : 'text-zinc-400 hover:text-zinc-300'
            ]"
          >
            Quarterly
          </button>
          <button
            @click="billingPeriod = 'yearly'"
            :class="[
              'px-6 py-2 rounded-md text-sm font-medium transition-all duration-200',
              billingPeriod === 'yearly'
                ? 'bg-[#0C5765] text-white shadow-lg shadow-[#0C5765]/25'
                : 'text-zinc-400 hover:text-zinc-300'
            ]"
          >
            Yearly
          </button>
        </div>
      </div>

      <!-- Pricing Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <!-- Tier 1: Free Plan -->
        <div class="relative group flex">
          <div class="absolute inset-0 bg-[#00121454] rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div class="relative bg-[#00121454] backdrop-blur-sm border border-transparent rounded-2xl p-8 hover:border-cyan-700 transition-all duration-300 flex flex-col w-full">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-white mb-2">Free</h3>
              <p class="text-zinc-400 text-sm">Get started with space learning</p>
            </div>

            <!-- Pricing Options -->
            <div class="mb-6">
              <div class="flex items-baseline gap-2 mb-4">
                <span class="text-4xl font-bold text-white">$0</span>
                <span class="text-zinc-400">/month</span>
              </div>
              <div class="text-sm text-zinc-400">
                Forever free
              </div>
            </div>

            <!-- Features -->
            <ul class="space-y-3 mb-8 flex-grow">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">3 introductory topics</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Basic satellite tracking (24h delay)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">100 AI assistant queries/month</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Community forum access</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Basic progress tracking</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Start learning instantly (no credit card)</span>
              </li>
            </ul>

            <button 
              @click="handleSubscribe('free')"
              :disabled="processingTier !== null"
              class="w-full inline-flex items-center gap-2 rounded-md bg-[linear-gradient(90deg,#1EDAFC_0%,#18AECA_100%)] hover:opacity-80 px-3.5 py-2 text-sm flex items-center justify-center font-medium tracking-tight cursor-pointer text-[#031619] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 shadow-sm shadow-indigo-500/20"
            >
              <svg v-if="processingTier === 'free'" class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ processingTier === 'free' ? 'Processing...' : 'Get Started Free' }}</span>
            </button>
          </div>
        </div>

        <!-- Tier 2: Early Bird (Popular) -->
        <div class="relative group md:-mt-4 flex">
          <div class="absolute inset-0 bg-[##031619] rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div class="relative bg-[#031619] backdrop-blur-sm border-2 border-cyan-900/50 rounded-2xl p-8 hover:border-cyan-800 transition-all duration-300 flex flex-col w-full">
            <!-- Popular Badge -->
            <div class="absolute -top-4 left-1/2 -translate-x-1/2">
              <span class="px-4 py-1 bg-cyan-700 text-white text-xs font-bold rounded-full">
                MOST POPULAR
              </span>
            </div>

            <div class="mb-6 mt-2">
              <h3 class="text-2xl font-bold text-white mb-2">Early Bird</h3>
              <p class="text-zinc-400 text-sm">Best for individuals getting started with structured learning.</p>
            </div>

            <!-- Pricing Options -->
            <div class="mb-6">
              <div class="flex items-baseline gap-2 mb-4">
                <span class="text-4xl font-bold text-white">{{ billingPeriod === 'monthly' ? '$9.99' : billingPeriod === "quarterly" ? '$26.97' : '$95.90' }}</span>
                <span class="text-zinc-400">{{ billingPeriod === 'monthly' ? '/month' : billingPeriod === "quarterly" ? '/quarter' : '/year' }}</span>
              </div>
              <div class="text-sm text-zinc-400">
                {{ billingPeriod === 'monthly' ? 'Billed monthly' : billingPeriod === "quarterly" ? 'Billed quarterly' : 'Billed annually' }}
              </div>
            </div>

            <!-- Features -->
            <ul class="space-y-3 mb-8">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">10+ courses available now (new drops added regularly)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">500 Felix AI queries per month</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Gamified challenges and missions</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Basic AR exploration</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Learning streak plus progress tracking</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Ad-free plus early user badge</span>
              </li>
            </ul>

            <button 
              @click="handleSubscribe('earlybird')"
              :disabled="processingTier !== null"
              class="w-full inline-flex items-center gap-2 rounded-md bg-[linear-gradient(90deg,#1EDAFC_0%,#18AECA_100%)] hover:opacity-80 px-3.5 py-2 text-sm flex items-center justify-center font-medium tracking-tight cursor-pointer text-[#031619] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 shadow-sm shadow-indigo-500/20"
            >
              <svg v-if="processingTier === 'earlybird'" class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ processingTier === 'earlybird' ? 'Processing...' : 'Get Started' }}</span>
            </button>
          </div>
        </div>

        <!-- Tier 3: Premium Plan -->
        <div class="relative group flex">
          <div class="absolute inset-0 bg-[#00121454] rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div class="relative bg-[#00121454] backdrop-blur-sm border border-transparent rounded-2xl p-8 hover:border-cyan-700 transition-all duration-300 flex flex-col w-full">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-white mb-2">Pro Plud (Premium)</h3>
              <p class="text-zinc-400 text-sm">Best for learners who want real-time tracking and deeper AI-powered insights.</p>
            </div>

            <!-- Pricing Options -->
            <div class="mb-6">
              <div class="flex items-baseline gap-2 mb-4">
                <span class="text-4xl font-bold text-white">{{ billingPeriod === 'monthly' ? '$19.99' : billingPeriod === 'quarterly' ? '$53.97' : '191.901' }}</span>
                <span class="text-zinc-400">{{ billingPeriod === 'monthly' ? '/month' : billingPeriod === 'quarterly' ? '/quarter' : '/year' }}</span>
              </div>
              <div class="text-sm text-zinc-400">
                {{ billingPeriod === 'monthly' ? 'Billed monthly' : billingPeriod === 'quarterly' ? 'Billed quarterly' : 'Billed annually' }}
              </div>
            </div>

            <!-- Features -->
            <ul class="space-y-3 mb-8">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm font-medium">20+ courses available now (new drops added regularly)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Real-time satellite tracking</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">1,000 Felix AI queries per month</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Advanced AI insights</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Full AR plus voice learning</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Certificates plus exclusive content</span>
              </li>
            </ul>

            <button 
              @click="handleSubscribe('premium')"
              :disabled="processingTier !== null"
              class="w-full inline-flex items-center gap-2 rounded-md bg-[linear-gradient(90deg,#1EDAFC_0%,#18AECA_100%)] hover:opacity-80 px-3.5 py-2 text-sm flex items-center justify-center font-medium tracking-tight cursor-pointer text-[#031619] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 shadow-sm shadow-indigo-500/20"
            >
              <svg v-if="processingTier === 'premium'" class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ processingTier === 'premium' ? 'Processing...' : 'Get Started' }}</span>
            </button>
          </div>
        </div>

        <!-- Tier 4: Cosmic Founder -->
        <div class="relative group flex">
          <div class="absolute inset-0 bg-[#00121454] rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div class="relative bg-[#00121454] backdrop-blur-sm border border-transparent rounded-2xl p-8 hover:border-cyan-700 transition-all duration-300 flex flex-col w-full">
            <div class="mb-6">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-2xl font-bold text-white">Max (Advanced)</h3>
              </div>
              <p class="text-zinc-400 text-sm">Maximum individual access with the highest Felix AI limits.</p>
            </div>

            <!-- Pricing Options -->
            <div class="mb-6">
              <div class="flex items-baseline gap-2 mb-4">
                <span class="text-4xl font-bold text-white">{{ billingPeriod === 'monthly' ? '$29.99' : billingPeriod === "quarterly" ? '$80.97' : '$287.90' }}</span>
                <span class="text-zinc-400">{{ billingPeriod === 'monthly' ? '/month' : billingPeriod === "quarterly" ? '/quarter' : '/year' }}</span>
              </div>
              <div class="text-sm text-zinc-400">
                {{ billingPeriod === 'monthly' ? 'Billed monthly' : billingPeriod === "quarterly" ? 'Billed quarterly' : 'Billed annually' }}
              </div>
            </div>

            <!-- Features -->
            <ul class="space-y-3 mb-8">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm font-medium">40+ courses available now (new drops added regularly)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Real-time satellite tracking</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Advanced AI insights plus mastery tracking</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Full AR plus voice learning</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">2,000 Felix AI queries per month</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Certificates plus exclusive content</span>
              </li>
            </ul>

            <button 
              @click="handleSubscribe('max')"
              :disabled="processingTier !== null"
              class="w-full inline-flex items-center gap-2 rounded-md bg-[linear-gradient(90deg,#1EDAFC_0%,#18AECA_100%)] hover:opacity-80 px-3.5 py-2 text-sm flex items-center justify-center font-medium tracking-tight cursor-pointer text-[#031619] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 shadow-sm shadow-indigo-500/20"
            >
              <svg v-if="processingTier === 'max'" class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ processingTier === 'max' ? 'Processing...' : 'Claim Your Spot' }}</span>
            </button>
          </div>
        </div>

        <!-- Tier 5: Enterprise Plan -->
        <div class="relative group flex">
          <div class="absolute inset-0 bg-[#00121454] rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div class="relative bg-[#00121454] backdrop-blur-sm border border-transparent rounded-2xl p-8 hover:border-cyan-700 transition-all duration-300 flex flex-col w-full">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-white mb-2">District / Campus (Enterprise)</h3>
              <p class="text-zinc-400 text-sm">Built for schools: seats, dashboards, reports, and LMS integration.</p>
            </div>

            <!-- Pricing Options -->
            <div class="mb-6">
              <!-- <div class="flex items-baseline gap-2 mb-4">
                <span class="text-4xl font-bold text-white">$100</span>
                <span class="text-zinc-400">/seat</span>
              </div> -->
              <div class="text-sm text-zinc-400">
                Contact us for pricing - Minimum 25 seats
              </div>
            </div>

            <!-- Features -->
            <ul class="space-y-3 mb-8">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Minimum 25 seats (schools and institutions)Multi-seat access</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Multi-seat access plus educator dashboards</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Student tracking plus exportable reportsEducator dashboards</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Curriculum integration plus teacher training</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">Dedicated account manager</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-zinc-300 text-sm">LMS / API integration</span>
              </li>
            </ul>

            <button 
              @click="handleSubscribe('enterprise')"
              :disabled="processingTier !== null"
              class="w-full inline-flex items-center gap-2 rounded-md bg-[linear-gradient(90deg,#1EDAFC_0%,#18AECA_100%)] hover:opacity-80 px-3.5 py-2 text-sm flex items-center justify-center font-medium tracking-tight cursor-pointer text-[#031619] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 shadow-sm shadow-indigo-500/20"
            >
              <svg v-if="processingTier === 'enterprise'" class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ processingTier === 'enterprise' ? 'Processing...' : 'Contact Sales' }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="mt-16 text-center">
        <div class="flex flex-wrap justify-center items-center gap-8 text-zinc-400 text-sm">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <span>Secure Payment</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Cancel Anytime</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span>Instant Access</span>
          </div>
        </div>
      </div>

      <!-- Countdown Timer -->
      <div class="mt-12 text-center">
        <div class="inline-flex items-center gap-3 px-6 py-3 bg-[#D3973D12] border border-yellow-900 rounded-full">
          <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span class="text-yellow-600 font-medium">Founders' pricing ends December 31, 2025</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { loadStripe } from '@stripe/stripe-js'

// Stripe configuration
const stripePublicKey = ref(import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_placeholder')
const foundersRemaining = ref(4847) // Example: 4847 out of 5000 remaining
const billingPeriod = ref('monthly') // Default to monthly
const priceIds = ref(null)
const loadingPriceIds = ref(true)
const processingTier = ref(null) // Track which tier is being processed

// Initialize Stripe and load price IDs
let stripe = null
onMounted(async () => {
  // Check if we're returning from Stripe checkout
  const wasProcessingTier = localStorage.getItem('stripe_processing_tier')
  if (wasProcessingTier) {
    processingTier.value = wasProcessingTier
    // Clear the flag after a short delay to show the spinner briefly
    setTimeout(() => {
      processingTier.value = null
      localStorage.removeItem('stripe_processing_tier')
    }, 1000)
  }

  try {
    stripe = await loadStripe(stripePublicKey.value)
    
    // Fetch price IDs from JSON file directly (works in both dev and production)
    const response = await fetch('/stripe-price-ids.json')
    
    if (response.ok) {
      priceIds.value = await response.json()
      console.log('Price IDs loaded:', priceIds.value)
    } else {
      console.error('Failed to load price IDs - file not found')
      // Fallback: try API endpoint (for production with serverless functions)
      try {
        const apiResponse = await fetch('/api/get-price-ids')
        const data = await apiResponse.json()
        if (data.success) {
          priceIds.value = data.priceIds
          console.log('Price IDs loaded from API:', priceIds.value)
        }
      } catch (apiError) {
        console.error('API fallback failed:', apiError)
      }
    }
  } catch (error) {
    console.error('Failed to initialize:', error)
  } finally {
    loadingPriceIds.value = false
  }
})

// Handle subscription selection
const handleSubscribe = async (tier) => {
  // Prevent multiple clicks
  if (processingTier.value) return
  
  // Handle free tier
  if (tier === 'free') {
    alert('Free plan selected! You can sign up directly without payment.')
    // TODO: Redirect to sign up page when available
    return
  }

  // Handle enterprise tier
  if (tier === 'enterprise') {
    // window.location.href = 'mailto:business@skyta.space?subject=Enterprise Plan Inquiry&body=Hi, I am interested in the Enterprise plan for my organization.'
    window.location.href = 'https://calendly.com/business-skyta/30min'
    return
  }

  // Start loading and persist state for this specific tier
  processingTier.value = tier
  localStorage.setItem('stripe_processing_tier', tier)

  if (!stripe) {
    console.error('Stripe not initialized')
    alert('Payment system is loading. Please try again in a moment.')
    return
  }

  // Check if price IDs are loaded
  if (!priceIds.value) {
    console.error('Price IDs not loaded')
    alert('Pricing information is still loading. Please try again in a moment.')
    return
  }

  // Determine the price ID and mode based on tier
  let priceId, mode
  
  if (tier === 'founder') {
    priceId = priceIds.value.founder?.lifetime
    mode = 'payment'
  } else if (priceIds.value[tier]) {
    priceId = billingPeriod.value === 'monthly' 
      ? priceIds.value[tier].monthly 
      : priceIds.value[tier].yearly
    mode = 'subscription'
  } else {
    console.error('Invalid tier:', tier)
    alert('This plan is not yet available. Please try another plan or contact support.')
    return
  }

  // Validate that we have a price ID
  if (!priceId) {
    console.error('Price ID not found for tier:', tier)
    alert('This plan is not yet configured. Please contact support.')
    return
  }

  try {
    // Create checkout session via backend API
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        mode,
        successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/#pricing`,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Failed to create checkout session')
    }

    const { url } = await response.json()

    // Redirect to Stripe Checkout
    window.location.href = url
  } catch (error) {
    console.error('Checkout error:', error)
    alert(`An error occurred: ${error.message}. Please try again or contact support.`)
    processingTier.value = null
    localStorage.removeItem('stripe_processing_tier')
  }
}
</script>
