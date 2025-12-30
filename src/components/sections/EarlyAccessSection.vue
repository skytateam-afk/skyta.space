<template>
  <section id="early-access" class="py-16 sm:py-20 bg-[#04050A]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-8">
        <div class="flex flex-col justify-center">
          <h3 class="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Request early access
          </h3>
          <p class="mt-3 text-zinc-300">
            Be among the first to pilot Skyta.space. We're onboarding a limited
            set of governments, enterprises, schools, and clubs.
          </p>
          <ul class="mt-4 space-y-2 text-sm text-zinc-400">
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Priority onboarding & support
            </li>
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Access to education missions
            </li>
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Influence roadmap with feedback
            </li>
          </ul>
        </div>

        <div class="relative min-h-[500px]">
          <!-- Success Message -->
          <Transition name="fade">
            <div
              v-if="earlyAccess"
              class="absolute inset-0 rounded-2xl border border-white/10 bg-zinc-900 flex items-center justify-center"
            >
              <div class="text-center p-8">
                <div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <svg class="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 class="text-3xl lg:text-4xl text-white mb-3">
                  Request Received
                </h3>
                <p class="text-zinc-400 text-lg">
                  Check your email for next steps. Thank you!
                </p>
              </div>
            </div>
          </Transition>

          <!-- Form -->
          <form
            v-if="!earlyAccess"
            @submit.prevent="handleSubmit"
            class="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 p-6 space-y-4"
          >
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="text-xs text-zinc-400">First name</label>
                <input
                  id="firstName"
                  v-model="formData.firstName"
                  type="text"
                  autocomplete="given-name"
                  required
                  class="mt-1 w-full rounded-md bg-zinc-800/60 text-sm text-zinc-100 placeholder-zinc-500 ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 px-3 py-2"
                  placeholder="Ada"
                />
              </div>
              <div>
                <label for="lastName" class="text-xs text-zinc-400">Last name</label>
                <input
                  id="lastName"
                  v-model="formData.lastName"
                  type="text"
                  autocomplete="family-name"
                  required
                  class="mt-1 w-full rounded-md bg-zinc-800/60 text-sm text-zinc-100 placeholder-zinc-500 ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 px-3 py-2"
                  placeholder="Lovelace"
                />
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label for="email" class="text-xs text-zinc-400">Work email</label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  autocomplete="email"
                  required
                  class="mt-1 w-full rounded-md bg-zinc-800/60 text-sm text-zinc-100 placeholder-zinc-500 ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 px-3 py-2"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label for="org" class="text-xs text-zinc-400">Organization</label>
                <input
                  id="org"
                  v-model="formData.organization"
                  type="text"
                  autocomplete="organization"
                  class="mt-1 w-full rounded-md bg-zinc-800/60 text-sm text-zinc-100 placeholder-zinc-500 ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 px-3 py-2"
                  placeholder="Company, Agency, or School"
                />
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label for="role" class="text-xs text-zinc-400">Role</label>
                <select
                  id="role"
                  v-model="formData.role"
                  class="mt-1 w-full rounded-md bg-zinc-800/60 text-sm text-zinc-100 ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 px-3 py-2"
                >
                  <option value="" class="bg-zinc-900">Select a role</option>
                  <option class="bg-zinc-900" value="policy">Policy/Defense</option>
                  <option class="bg-zinc-900" value="ops">Satellite Operations</option>
                  <option class="bg-zinc-900" value="education">Education</option>
                  <option class="bg-zinc-900" value="citizen">Citizen/Enthusiast</option>
                  <option class="bg-zinc-900" value="other">Other</option>
                </select>
              </div>
              <div>
                <label for="interest" class="text-xs text-zinc-400">Primary interest</label>
                <select
                  id="interest"
                  v-model="formData.interest"
                  class="mt-1 w-full rounded-md bg-zinc-800/60 text-sm text-zinc-100 ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 px-3 py-2"
                >
                  <option value="" class="bg-zinc-900">Choose one</option>
                  <option class="bg-zinc-900" value="collision">AI Collision Prediction</option>
                  <option class="bg-zinc-900" value="ar">AR Sky Exploration</option>
                  <option class="bg-zinc-900" value="weather">Space Weather & Alerts</option>
                  <option class="bg-zinc-900" value="education">Education Missions</option>
                  <option class="bg-zinc-900" value="dashboard">3D Space Dashboard</option>
                </select>
              </div>
            </div>

            <div>
              <label for="message" class="text-xs text-zinc-400">
                What would you like to accomplish with Skyta.space?
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="4"
                class="mt-1 w-full rounded-md bg-zinc-800/60 text-sm text-zinc-100 placeholder-zinc-500 ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 px-3 py-2"
                placeholder="Share your use case, timeline, and anything else that will help us tailor your pilot."
              ></textarea>
            </div>

            <div>
              <label for="source" class="text-xs text-zinc-400">How did you hear about us?</label>
              <select
                id="source"
                v-model="formData.source"
                class="mt-1 w-full rounded-md bg-zinc-800/60 text-sm text-zinc-100 ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 px-3 py-2"
              >
                <option value="" class="bg-zinc-900">Select Source</option>
                <option class="bg-zinc-900" value="social">Social Media</option>
                <option class="bg-zinc-900" value="search">Search Engine</option>
                <option class="bg-zinc-900" value="education">Education</option>
                <option class="bg-zinc-900" value="friend">Friend/Family</option>
                <option class="bg-zinc-900" value="community">Community</option>
              </select>
            </div>

            <div class="flex items-start gap-3">
              <input
                id="consent"
                v-model="formData.consent"
                type="checkbox"
                required
                class="mt-0.5 h-4 w-4 rounded border-white/10 bg-zinc-800/60 text-indigo-500 focus:ring-indigo-500"
              />
              <label for="consent" class="text-xs text-zinc-400">
                I agree to be contacted about Skyta.space and accept the Privacy Policy.
              </label>
            </div>

            <input
              type="text"
              name="website"
              tabindex="-1"
              autocomplete="off"
              class="hidden"
              aria-hidden="true"
            />

            <div class="flex items-center justify-between gap-3">
              <p class="text-xs text-zinc-500">
                We'll get back within 2–3 business days.
              </p>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="inline-flex items-center gap-2 rounded-md bg-[linear-gradient(90deg,#1EDAFC_0%,#18AECA_100%)] hover:opacity-80 px-3.5 py-2 text-sm font-medium tracking-tight cursor-pointer text-[#031619] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 shadow-sm shadow-indigo-500/20 transition disabled:opacity-80 disabled:cursor-not-allowed"
              >
                <svg v-if="!isSubmitting" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <svg
                  v-else
                  class="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle class="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-90" d="M4 12a8 8 0 0 1 8-8" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path>
                </svg>
                {{ isSubmitting ? "Sending…" : "Request access" }}
              </button>
            </div>

            <Transition name="fade">
              <div
                v-if="showToast"
                class="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs text-emerald-300"
              >
                <span class="inline-flex items-center gap-2">
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Request received. We'll be in touch shortly!
                </span>
              </div>
            </Transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";

const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  organization: "",
  role: "",
  source: "",
  interest: "",
  message: "",
  consent: false,
});

const earlyAccess = ref(false);
const isSubmitting = ref(false);
const showToast = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  
  try {
    const response = await fetch('/api/send-early-access-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        organization: formData.organization,
        role: formData.role,
        interest: formData.interest,
        message: formData.message,
        source: formData.source
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = 'Failed to submit request';
      
      try {
        const errorData = JSON.parse(errorText);
        errorMessage = errorData.error || errorMessage;
      } catch {
        errorMessage = errorText || errorMessage;
      }
      
      throw new Error(errorMessage);
    }

    const data = await response.json();

    // Show success toast briefly
    showToast.value = true;
    setTimeout(() => {
      showToast.value = false;
    }, 2000);

    // Reset form
    Object.keys(formData).forEach((key) => {
      if (key === "consent") {
        formData[key] = false;
      } else {
        formData[key] = "";
      }
    });

    // Show success screen
    earlyAccess.value = true;

    // Hide success screen after 4 seconds
    setTimeout(() => {
      earlyAccess.value = false;
    }, 4000);

  } catch (error) {
    console.error('Error submitting form:', error);
    alert(`Failed to submit request: ${error.message}`);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>