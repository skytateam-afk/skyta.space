<template>
  <header
    class="sticky top-0 z-50 backdrop-blur supports-backdrop-blur:bg-zinc-900/60 bg-zinc-900/40"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-18 items-center justify-between">
        <router-link
          to="/"
          class="flex z-[100] flex-col items-start gap-1 text-zinc-100 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1 pt-2 pb-2"
        >
          <img src="/logo.png" alt="Skyta.space" class="h-12 w-auto" />
          <p class="text-gray-400 text-xs">The Future Is Not Above, It’s With Us</p>
        </router-link>
        <nav
          class="hidden md:flex items-center gap-8 text-sm text-zinc-300 z-[100]"
        >
          <router-link
            to="/#product"
            class="hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1"
            >Product</router-link
          >
          <router-link
            to="/#features"
            class="hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1"
            >Features</router-link
          >
          <router-link
            to="/#users"
            class="hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1"
            >Use Cases</router-link
          >
          <router-link
            to="/pricing"
            class="hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1"
            >Pricing</router-link
          >
          <router-link
            to="/#roadmap"
            class="hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1"
            >Roadmap</router-link
          >
          <!-- <router-link
            to="/team"
            class="hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1"
            >Team</router-link
          > -->
          <a
            href="https://blog.skyta.space"
            class="hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1"
            >Blog</a
          >
          <router-link
            to="/academy"
            class="text-[#1EDAFC] hover:text-cyan-600font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1"
            >Skyta Academy</router-link
          >
        </nav>
        <div class="flex items-center gap-3 z-[100]">
          <!-- <a href="#" class="hidden sm:inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm text-zinc-200 ring-1 ring-white/10 hover:bg-white/5 hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
            <i data-lucide="book-open" class="h-4 w-4"></i>
            Docs
          </a> -->
          <BtnLink
            link="#early-access"
            iconName="rocket"
            linkText="Request Access"
          />
          <!-- menu icon(hamburger) -->
          <div
            id="menu-icon"
            aria-label="Toggle menu"
            :class="{ active: isMenuOpen, 'md:hidden': true }"
            @click="toggleMenu"
            class="cursor-pointer"
          >
            <svg
              class="w-6 h-6 hamburger-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                class="line line-1"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16"
              />
              <path
                class="line line-2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 12h16"
              />
              <path
                class="line line-3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 18h16"
              />
            </svg>
          </div>
        </div>

        <!-- mobile menu -->
        <div
          id="mobile-menu"
          :class="{ 'mobile-menu md:hidden': true, active: isMenuOpen }"
          v-if="isMenuOpen"
        >
          <div class="mobile-menu-content  space-y-8">
            <nav
              class="flex items-center gap-3 flex-col text-lg text-zinc-300 z-[100]"
            >
              <router-link
                to="/#product"
                @click="toggleMenu"
                class="hover:text-zinc-100 hover:bg-cyan-900 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-2 py-4"
                >Product</router-link
              >
              <router-link
                to="/#features"
                @click="toggleMenu"
                class="hover:text-zinc-100 hover:bg-cyan-900 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-2 py-4"
                >Features</router-link
              >
              <router-link
                to="/#users"
                @click="toggleMenu"
                class="hover:text-zinc-100 hover:bg-cyan-900 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-2 py-4"
                >Use Cases</router-link
              >
              <router-link
                to="/pricing"
                @click="toggleMenu"
                class="hover:text-zinc-100 hover:bg-cyan-900 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-2 py-4"
                >Pricing</router-link
              >
              <router-link
                to="/#roadmap"
                @click="toggleMenu"
                class="hover:text-zinc-100 hover:bg-cyan-900 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-2 py-4"
                >Roadmap</router-link
              >
              <!-- <router-link
                to="/team"
                @click="toggleMenu"
                class="hover:text-zinc-100 hover:bg-cyan-900 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-2 py-4"
                >Team</router-link
              > -->
              <a
                href="https://blog.skyta.space"
                @click="toggleMenu"
                class="hover:text-zinc-100 hover:bg-cyan-900 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-2 py-4"
                >Blog</a
              >
              <router-link
                to="/academy"
                @click="toggleMenu"
                class="text-[#1EDAFC] hover:bg-cyan-950 w-full font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-2 py-4"
                >Skyta Academy</router-link
              >
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div
      class="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
    ></div>
  </header>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import BtnLink from "./BtnLink.vue";

onMounted(() => {
  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }
});

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Add/remove body class when menu state changes
watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }
});
</script>

<style>
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #06070d;
  height: 100vh;
  transform: translateX(100%);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  padding-top: 100px;
  overflow-y: auto;
}

.mobile-menu.active {
  transform: translateX(0);
}

.mobile-link {
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.5s ease, transform 0.5s ease, color 0.3s ease;
}

.mobile-menu.active .mobile-link {
  opacity: 1;
  transform: translateX(0);
}

.hamburger-icon {
  transition: transform 0.3s ease;
}

#menu-icon.active .line {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

#menu-icon.active .line-1 {
  transform: translateY(6px) rotate(45deg);
  transform-origin: center;
}

#menu-icon.active .line-2 {
  opacity: 0;
}

#menu-icon.active .line-3 {
  transform: translateY(-6px) rotate(-45deg);
  transform-origin: center;
}

/* Prevent scrolling when menu is open */
body.menu-open {
  overflow: hidden;
}
</style>
