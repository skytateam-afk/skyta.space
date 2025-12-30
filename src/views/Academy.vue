<template>
  <LandingLayout>
  <div class="min-h-screen bg-zinc-950">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-20 sm:py-32">
      <div class="absolute inset-0 bg-gradient-to-b from-[#1EDAFC]/10 via-transparent to-transparent"></div>
      <div class="absolute inset-0" style="background-image: url('/bg-net.webp'); opacity: 0.1;"></div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Where Space Education Meets<br />
            <span class="bg-gradient-to-r from-[#1EDAFC] to-[#18AECA] bg-clip-text text-transparent">
              AI, Certification & Future Skills
            </span>
          </h1>
          <p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            A global digital academy offering AI-powered learning, certification pathways, and future-ready skills — 
            developed by Skyta and certified in partnership with Cornerstone Christian University (CCU)
          </p>
          <div class="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <routerLink to="#certifications" class="rounded-md bg-[linear-gradient(90deg,#1EDAFC_0%,#18AECA_100%)] px-6 py-3 text-sm font-semibold text-[#031619] shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1EDAFC] transition-all">
              Explore Certifications
            </routerLink>
            <!-- <routerLink to="#courses" class="rounded-md bg-[#031619] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-85 border border-1 border-cyan-900 transition-colors">
              View Courses
            </routerLink> -->
            <routerLink to="/#early-access" class="rounded-md ring-1 ring-white/20 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors">
              Enroll Now
            </routerLink>
          </div>
          
          <!-- CCU Partnership Badge -->
          <div class="mt-12 flex items-center justify-center gap-4">
            <div class="flex flex-col justify-center items-center gap-3 rounded-lg bg-white/5 px-6 py-3 ring-1 ring-white/10">
              <span class="text-sm text-zinc-400">Certification Powered by</span>
              <div class="flex gap-3 items-center">
                <img class="w-[50px]" src="/ccu-logo.webp" alt="ccu logo" />
              <span class="text-lg font-semibold text-white">Cornerstone Christian University</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What is Skyta Academy -->
    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What is Skyta Academy?
          </h2>
          <p class="mt-6 text-lg leading-8 text-zinc-300">
            Skyta Academy is the institutional education arm of Skyta, offering comprehensive AI-powered space education 
            through micro-courses, professional certifications, and future-ready skills development. Our programs are 
            designed for learners of all ages and backgrounds, from students to professionals, with official certification 
            through our partnership with Cornerstone Christian University.
          </p>
        </div>
      </div>
    </section>

    <!-- Who It's For -->
    <section id="who-its-for" class="py-20 sm:py-24 bg-white/5">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Who It's For
          </h2>
          <p class="mt-4 text-lg text-zinc-300">
            Skyta Academy serves a diverse community of learners and institutions
          </p>
        </div>
        
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-lg bg-zinc-900/50 p-6 ring-1 ring-white/10 hover:ring-[#1EDAFC]/50 transition-all">
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1EDAFC]/10">
              <i data-lucide="graduation-cap" class="h-6 w-6 text-[#1EDAFC]"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-white">Students (Grades 6-12)</h3>
            <p class="mt-2 text-sm text-zinc-400">Engaging space education for middle and high school students</p>
          </div>
          
          <div class="rounded-lg bg-zinc-900/50 p-6 ring-1 ring-white/10 hover:ring-[#1EDAFC]/50 transition-all">
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1EDAFC]/10">
              <i data-lucide="book-open" class="h-6 w-6 text-[#1EDAFC]"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-white">College Students</h3>
            <p class="mt-2 text-sm text-zinc-400">Advanced STEM learning and career development</p>
          </div>
          
          <div class="rounded-lg bg-zinc-900/50 p-6 ring-1 ring-white/10 hover:ring-[#1EDAFC]/50 transition-all">
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1EDAFC]/10">
              <i data-lucide="users" class="h-6 w-6 text-[#1EDAFC]"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-white">Parents & Adults</h3>
            <p class="mt-2 text-sm text-zinc-400">Lifelong learning and family education</p>
          </div>
          
          <div class="rounded-lg bg-zinc-900/50 p-6 ring-1 ring-white/10 hover:ring-[#1EDAFC]/50 transition-all">
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1EDAFC]/10">
              <i data-lucide="briefcase" class="h-6 w-6 text-[#1EDAFC]"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-white">Professionals</h3>
            <p class="mt-2 text-sm text-zinc-400">Career advancement and skill development</p>
          </div>
          
          <div class="rounded-lg bg-zinc-900/50 p-6 ring-1 ring-white/10 hover:ring-[#1EDAFC]/50 transition-all">
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1EDAFC]/10">
              <i data-lucide="school" class="h-6 w-6 text-[#1EDAFC]"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-white">Teachers & Educators</h3>
            <p class="mt-2 text-sm text-zinc-400">Professional development and classroom resources</p>
          </div>
          
          <div class="rounded-lg bg-zinc-900/50 p-6 ring-1 ring-white/10 hover:ring-[#1EDAFC]/50 transition-all">
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1EDAFC]/10">
              <i data-lucide="building" class="h-6 w-6 text-[#1EDAFC]"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-white">School Districts</h3>
            <p class="mt-2 text-sm text-zinc-400">District-wide curriculum and certification programs</p>
          </div>
          
          <div class="rounded-lg bg-zinc-900/50 p-6 ring-1 ring-white/10 hover:ring-[#1EDAFC]/50 transition-all">
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1EDAFC]/10">
              <i data-lucide="landmark" class="h-6 w-6 text-[#1EDAFC]"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-white">Government Agencies</h3>
            <p class="mt-2 text-sm text-zinc-400">State and federal education initiatives</p>
          </div>
          
          <div class="rounded-lg bg-zinc-900/50 p-6 ring-1 ring-white/10 hover:ring-[#1EDAFC]/50 transition-all">
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1EDAFC]/10">
              <i data-lucide="rocket" class="h-6 w-6 text-[#1EDAFC]"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-white">Space Enthusiasts</h3>
            <p class="mt-2 text-sm text-zinc-400">Passionate learners exploring the cosmos</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Academy Benefits
          </h2>
        </div>
        
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#09414C]">
                <i data-lucide="globe" class="h-5 w-5 text-white"></i>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">100% Online</h3>
              <p class="mt-2 text-sm text-zinc-400">Learn from anywhere, at your own pace</p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#09414C]">
                <i data-lucide="award" class="h-5 w-5 text-white"></i>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">CCU-Verified Certificates</h3>
              <p class="mt-2 text-sm text-zinc-400">Official certification from an accredited university</p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#09414C]">
                <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Add to LinkedIn</h3>
              <p class="mt-2 text-sm text-zinc-400">Showcase your credentials professionally</p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#09414C]">
                <i data-lucide="zap" class="h-5 w-5 text-white"></i>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Micro-Learning Format</h3>
              <p class="mt-2 text-sm text-zinc-400">Bite-sized lessons that fit your schedule</p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#09414C]">
                <i data-lucide="trending-up" class="h-5 w-5 text-white"></i>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Future Skills Focus</h3>
              <p class="mt-2 text-sm text-zinc-400">AI, space tech, and emerging technologies</p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#09414C]">
                <i data-lucide="bot" class="h-5 w-5 text-white"></i>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">AI-Powered Modules</h3>
              <p class="mt-2 text-sm text-zinc-400">Personalized learning with Felix assistant</p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#09414C]">
                <i data-lucide="users-round" class="h-5 w-5 text-white"></i>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Accessible to All Ages</h3>
              <p class="mt-2 text-sm text-zinc-400">From middle school to professional development</p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#09414C]">
                <i data-lucide="layers" class="h-5 w-5 text-white"></i>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Stackable Credentials</h3>
              <p class="mt-2 text-sm text-zinc-400">Build your expertise progressively</p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#09414C]">
                <i data-lucide="database" class="h-5 w-5 text-white"></i>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Real-Time Data</h3>
              <p class="mt-2 text-sm text-zinc-400">Live satellite tracking and space missions</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Preview -->
    <section id="certifications" class="py-20 sm:py-24 bg-white/5">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            CCU-Certified Programs
          </h2>
          <p class="mt-4 text-lg text-zinc-300">
            Six comprehensive certification pathways developed by Skyta and verified by Cornerstone Christian University
          </p>
        </div>
        
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div class="rounded-lg bg-zinc-900/50 p-8 ring-1 ring-white/10 hover:ring-[#1EDAFC]/50 transition-all">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-xl font-semibold text-white">Fundamentals of Space Awareness</h3>
                <p class="mt-2 text-sm text-zinc-400">Duration: 4-6 weeks | Self-paced online</p>
              </div>
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1EDAFC]/10">
                <i data-lucide="telescope" class="h-6 w-6 text-[#1EDAFC]"></i>
              </div>
            </div>
            <p class="mt-4 text-zinc-300">
              Master the basics of space science, astronomy, and satellite technology with CCU-verified certification.
            </p>
            <div class="mt-6">
              <routerLink to="/pricing" class="text-sm font-semibold text-[#1EDAFC] hover:text-[#18AECA]">
                Learn more →
              </routerLink>
            </div>
          </div>
          
          <div class="rounded-lg bg-zinc-900/50 p-8 ring-1 ring-white/10 hover:ring-[#1EDAFC]/50 transition-all">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-xl font-semibold text-white">Space Ethics & Philosophy</h3>
                <p class="mt-2 text-sm text-zinc-400">Duration: 3-4 weeks | Video + assessments</p>
              </div>
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1EDAFC]/10">
                <i data-lucide="scale" class="h-6 w-6 text-[#1EDAFC]"></i>
              </div>
            </div>
            <p class="mt-4 text-zinc-300">
              Explore the ethical implications of space exploration and humanity's role in the cosmos.
            </p>
            <div class="mt-6">
              <routerLink to="/pricing" class="text-sm font-semibold text-[#1EDAFC] hover:text-[#18AECA]">
                Learn more →
              </routerLink>
            </div>
          </div>
          
          <div class="rounded-lg bg-zinc-900/50 p-8 ring-1 ring-white/10 hover:ring-[#1EDAFC]/50 transition-all">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-xl font-semibold text-white">AI in Space Operations</h3>
                <p class="mt-2 text-sm text-zinc-400">Duration: 6-8 weeks | Interactive simulations</p>
              </div>
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1EDAFC]/10">
                <i data-lucide="cpu" class="h-6 w-6 text-[#1EDAFC]"></i>
              </div>
            </div>
            <p class="mt-4 text-zinc-300">
              Learn how artificial intelligence is revolutionizing space missions and satellite operations.
            </p>
            <div class="mt-6">
              <routerLink to="/pricing" class="text-sm font-semibold text-[#1EDAFC] hover:text-[#18AECA]">
                Learn more →
              </routerLink>
            </div>
          </div>
          
          <div class="rounded-lg bg-zinc-900/50 p-8 ring-1 ring-white/10 hover:ring-[#1EDAFC]/50 transition-all">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-xl font-semibold text-white">Youth Cosmic Citizenship Certificate</h3>
                <p class="mt-2 text-sm text-zinc-400">Duration: 4 weeks | Grades 6-12</p>
              </div>
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1EDAFC]/10">
                <i data-lucide="star" class="h-6 w-6 text-[#1EDAFC]"></i>
              </div>
            </div>
            <p class="mt-4 text-zinc-300">
              Designed for young learners to understand their place in the universe and future space citizenship.
            </p>
            <div class="mt-6">
              <routerLink to="/pricing" class="text-sm font-semibold text-[#1EDAFC] hover:text-[#18AECA]">
                Learn more →
              </routerLink>
            </div>
          </div>
          
          <div class="rounded-lg bg-zinc-900/50 p-8 ring-1 ring-white/10 hover:ring-[#1EDAFC]/50 transition-all">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-xl font-semibold text-white">Cultural Communication in Space</h3>
                <p class="mt-2 text-sm text-zinc-400">Duration: 4 weeks | Multimedia modules</p>
              </div>
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1EDAFC]/10">
                <i data-lucide="globe-2" class="h-6 w-6 text-[#1EDAFC]"></i>
              </div>
            </div>
            <p class="mt-4 text-zinc-300">
              Understand cross-cultural collaboration in international space missions and programs.
            </p>
            <div class="mt-6">
              <routerLink to="/pricing" class="text-sm font-semibold text-[#1EDAFC] hover:text-[#18AECA]">
                Learn more →
              </routerLink>
            </div>
          </div>
          
          <div class="rounded-lg bg-zinc-900/50 p-8 ring-1 ring-white/10 hover:ring-[#1EDAFC]/50 transition-all">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-xl font-semibold text-white">Space Leadership & Innovation</h3>
                <p class="mt-2 text-sm text-zinc-400">Duration: 6 weeks | Case studies + projects</p>
              </div>
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1EDAFC]/10">
                <i data-lucide="lightbulb" class="h-6 w-6 text-[#1EDAFC]"></i>
              </div>
            </div>
            <p class="mt-4 text-zinc-300">
              Develop leadership skills for the space industry through real-world case studies and projects.
            </p>
            <div class="mt-6">
              <routerLink to="/pricing" class="text-sm font-semibold text-[#1EDAFC] hover:text-[#18AECA]">
                Learn more →
              </routerLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Preview -->
    <!-- <section id="pricing" class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Individual Certification Pricing
          </h2>
          <p class="mt-4 text-lg text-zinc-300">
            Choose the certification path that fits your learning goals
          </p>
        </div>
        
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div class="rounded-lg bg-zinc-900/50 p-8 ring-1 ring-white/10">
            <h3 class="text-lg font-semibold text-white">Basic Certificate</h3>
            <p class="mt-2 text-sm text-zinc-400">Single certification course</p>
            <p class="mt-4 flex items-baseline gap-x-1">
              <span class="text-4xl font-bold tracking-tight text-white">$49</span>
            </p>
            <ul class="mt-6 space-y-3 text-sm text-zinc-300">
              <li class="flex gap-x-3">
                <i data-lucide="check" class="h-5 w-5 flex-none text-[#1EDAFC]"></i>
                One certification course
              </li>
              <li class="flex gap-x-3">
                <i data-lucide="check" class="h-5 w-5 flex-none text-[#1EDAFC]"></i>
                CCU-verified credential
              </li>
            </ul>
            <button 
              @click="handlePurchase('basic')"
              :disabled="processingPlan !== null"
              class="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg v-if="processingPlan === 'basic'" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ processingPlan === 'basic' ? 'Processing...' : 'Get started' }}</span>
            </button>
          </div>
          
          <div class="rounded-lg bg-zinc-900/50 p-8 ring-1 ring-white/10">
            <h3 class="text-lg font-semibold text-white">Intermediate</h3>
            <p class="mt-2 text-sm text-zinc-400">Two certification courses</p>
            <p class="mt-4 flex items-baseline gap-x-1">
              <span class="text-4xl font-bold tracking-tight text-white">$99</span>
            </p>
            <ul class="mt-6 space-y-3 text-sm text-zinc-300">
              <li class="flex gap-x-3">
                <i data-lucide="check" class="h-5 w-5 flex-none text-[#1EDAFC]"></i>
                Two certification courses
              </li>
              <li class="flex gap-x-3">
                <i data-lucide="check" class="h-5 w-5 flex-none text-[#1EDAFC]"></i>
                CCU-verified credentials
              </li>
            </ul>
            <button 
              @click="handlePurchase('intermediate')"
              :disabled="processingPlan !== null"
              class="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg v-if="processingPlan === 'intermediate'" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ processingPlan === 'intermediate' ? 'Processing...' : 'Get started' }}</span>
            </button>
          </div>
          
          <div class="rounded-lg bg-zinc-900/50 p-8 ring-1 ring-white/10">
            <h3 class="text-lg font-semibold text-white">Advanced</h3>
            <p class="mt-2 text-sm text-zinc-400">Three to five courses</p>
            <p class="mt-4 flex items-baseline gap-x-1">
              <span class="text-4xl font-bold tracking-tight text-white">$149</span>
              <span class="text-sm text-zinc-400">- $299</span>
            </p>
            <ul class="mt-6 space-y-3 text-sm text-zinc-300">
              <li class="flex gap-x-3">
                <i data-lucide="check" class="h-5 w-5 flex-none text-[#1EDAFC]"></i>
                3-5 certification courses
              </li>
              <li class="flex gap-x-3">
                <i data-lucide="check" class="h-5 w-5 flex-none text-[#1EDAFC]"></i>
                CCU-verified credentials
              </li>
            </ul>
            <button 
              @click="handlePurchase('advanced')"
              :disabled="processingPlan !== null"
              class="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg v-if="processingPlan === 'advanced'" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ processingPlan === 'advanced' ? 'Processing...' : 'Get started' }}</span>
            </button>
          </div>
          
          <div class="rounded-lg bg-zinc-900/50 p-8 ring-2 ring-[#1EDAFC]">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-white">All-Access Bundle</h3>
            </div>
            <p class="mt-2 text-sm text-zinc-400">All six certifications</p>
            <p class="mt-4 flex items-baseline gap-x-1">
              <span class="text-4xl font-bold tracking-tight text-white">$499</span>
            </p>
            <ul class="mt-6 space-y-3 text-sm text-zinc-300">
              <li class="flex gap-x-3">
                <i data-lucide="check" class="h-5 w-5 flex-none text-[#1EDAFC]"></i>
                All six certifications
              </li>
              <li class="flex gap-x-3">
                <i data-lucide="check" class="h-5 w-5 flex-none text-[#1EDAFC]"></i>
                Lifetime access to materials
              </li>
              <li class="flex gap-x-3">
                <i data-lucide="check" class="h-5 w-5 flex-none text-[#1EDAFC]"></i>
                CCU-verified credentials
              </li>
              <li class="flex gap-x-3">
                <i data-lucide="check" class="h-5 w-5 flex-none text-[#1EDAFC]"></i>
                Priority support
              </li>
            </ul>
            <button 
              @click="handlePurchase('bundle')"
              :disabled="processingPlan !== null"
              class="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-md bg-[linear-gradient(90deg,#1EDAFC_0%,#18AECA_100%)] px-3 py-2 text-sm font-semibold text-white hover:opacity-80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg v-if="processingPlan === 'bundle'" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ processingPlan === 'bundle' ? 'Processing...' : 'Get started' }}</span>
            </button>
          </div>
        </div>
      </div>
    </section> -->

    <!-- CTA Section -->
    <section id="early-access" class="py-20 sm:py-24 bg-gradient-to-b from-[#1EDAFC]/10 to-transparent">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-2xl bg-zinc-900/50 p-8 ring-1 ring-white/10 sm:p-16">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Space Education Journey?
            </h2>
            <p class="mt-4 text-lg text-zinc-300">
              Join thousands of learners worldwide and earn your CCU-verified certification
            </p>
            <div class="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <routerLink to="/pricing" class="rounded-md bg-[linear-gradient(90deg,#1EDAFC_0%,#18AECA_100%)] px-6 py-3 text-sm font-semibold text-[#031619] shadow-sm hover:opacity-80 transition-colors">
                View Pricing
              </routerLink>
              <routerLink to="/#early-access" class="rounded-md bg-[#031619] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-85 border border-1 border-cyan-900 transition-colors">
                Request Early Access
              </routerLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </LandingLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { loadStripe } from '@stripe/stripe-js'
import LandingLayout from '../components/Layout/LandingLayout.vue'

// Stripe configuration
const stripePublicKey = ref(import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_placeholder')
const priceIds = ref(null)
const loadingPriceIds = ref(true)
const processingPlan = ref(null) // Track which plan is being processed

// Initialize Stripe and load price IDs
let stripe = null
onMounted(async () => {
  // Initialize Lucide icons
  if (window.lucide?.createIcons) {
    window.lucide.createIcons()
  }

  // Check if we're returning from Stripe checkout
  const wasProcessingPlan = localStorage.getItem('academy_processing_plan')
  if (wasProcessingPlan) {
    processingPlan.value = wasProcessingPlan
    // Clear the flag after a short delay
    setTimeout(() => {
      processingPlan.value = null
      localStorage.removeItem('academy_processing_plan')
    }, 1000)
  }

  try {
    stripe = await loadStripe(stripePublicKey.value)
    
    // Fetch price IDs from JSON file
    const response = await fetch('/stripe-price-ids.json')
    
    if (response.ok) {
      priceIds.value = await response.json()
      console.log('Academy Price IDs loaded:', priceIds.value)
    } else {
      console.error('Failed to load price IDs')
    }
  } catch (error) {
    console.error('Failed to initialize Stripe:', error)
  } finally {
    loadingPriceIds.value = false
  }
})

// Handle certification purchase
const handlePurchase = async (plan) => {
  // Prevent multiple clicks
  if (processingPlan.value) return
  
  // Start loading and persist state
  processingPlan.value = plan
  localStorage.setItem('academy_processing_plan', plan)

  if (!stripe) {
    console.error('Stripe not initialized')
    alert('Payment system is loading. Please try again in a moment.')
    processingPlan.value = null
    localStorage.removeItem('academy_processing_plan')
    return
  }

  // Check if price IDs are loaded
  if (!priceIds.value) {
    console.error('Price IDs not loaded')
    alert('Pricing information is still loading. Please try again in a moment.')
    processingPlan.value = null
    localStorage.removeItem('academy_processing_plan')
    return
  }

  // Map academy plans to price IDs
  // For now, we'll use the existing price structure or create new ones
  let priceId, mode = 'payment' // One-time payment for certifications
  
  // Map plans to price IDs (you'll need to add these to stripe-price-ids.json)
  const academyPriceMap = {
    'basic': priceIds.value.academy?.basic || 'price_academy_basic',
    'intermediate': priceIds.value.academy?.intermediate || 'price_academy_intermediate',
    'advanced': priceIds.value.academy?.advanced || 'price_academy_advanced',
    'bundle': priceIds.value.academy?.bundle || 'price_academy_bundle'
  }

  priceId = academyPriceMap[plan]

  if (!priceId) {
    console.error('Price ID not found for plan:', plan)
    alert('This certification plan is not yet configured. Please contact support at academy@skyta.space')
    processingPlan.value = null
    localStorage.removeItem('academy_processing_plan')
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
        successUrl: `${window.location.origin}/academy?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/pricing`,
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
    alert(`An error occurred: ${error.message}. Please try again or contact academy@skyta.space`)
    processingPlan.value = null
    localStorage.removeItem('academy_processing_plan')
  }
}
</script>
