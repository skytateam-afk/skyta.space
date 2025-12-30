<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-white mb-4">404</h1>
      <h2 class="text-2xl font-semibold text-zinc-300 mb-6">Page Not Found</h2>
      <p class="text-zinc-400 mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
      </p>
      <router-link
        to="/"
        class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
      >
        Go Back Home
      </router-link>
    </div>
  </div>
</template>

<script setup>
// No script needed for this simple component
</script>
