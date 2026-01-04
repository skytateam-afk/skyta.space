<template>
  <LandingLayout>
    <div class="max-w-5xl mx-auto px-5 lg:px-0 py-12 lg:py-16 space-y-8">
      <section
        v-if="!startAssessment"
        class="gap-5 bg-[#0316193D] border border-transparent hover:border-[#09414C] rounded-2xl p-7 backdrop-blur-sm shadow-sm shadow-indigo-500/20"
      >
        <div class="space-y-4">
          <div
            class="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#0C5765] text-sm text-slate-100"
          >
            <Rocket class="w-5 h-5" />
            <span>Space skill pulse check</span>
          </div>
          <h1
            class="text-3xl lg:text-[34px] font-bold text-slate-50 leading-tight"
          >
            Build your orbit-ready learning path
          </h1>
          <p class="text-slate-200/80 leading-relaxed">
            Short questions to map where you are today and tailor a training
            track for space, data, and mission-ready skills.
          </p>
          <div class="grid md:grid-cols-3 gap-3">
            <div
              class="flex gap-3 items-start p-3 rounded-xl border border-transparent hover:border-[#09414C] bg-[#031619] text-slate-100"
            >
              <Sparkles class="w-5 h-5" />
              <div>
                <p class="text-xs text-slate-300">Personalized journey</p>
                <p class="font-semibold">3 mins to complete</p>
              </div>
            </div>
            <div
              class="flex gap-3 items-start p-3 rounded-xl border border-transparent hover:border-[#09414C] bg-[#031619] text-slate-100"
            >
              <Shield class="w-5 h-5" />
              <div>
                <p class="text-xs text-slate-300">Mission-grade</p>
                <p class="font-semibold">Cyber + orbital awareness</p>
              </div>
            </div>
            <div
              class="flex gap-3 items-start p-3 rounded-xl border border-transparent hover:border-[#09414C] bg-[#031619] text-slate-100"
            >
              <BookOpen class="w-5 h-5" />
              <div>
                <p class="text-xs text-slate-300">Learning style</p>
                <p class="font-semibold">We match to your pace</p>
              </div>
            </div>
          </div>
          <div class="space-y-2 mt-2">
            <div
              class="flex items-center justify-center text-slate-200 text-sm"
            >
              <button
                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#1EDAFC] to-[#18AECA] text-slate-900 font-semibold shadow-sm shadow-indigo-500/20 disabled:opacity-60 disabled:shadow-none"
                @click="startQuiz"
              >
                Start Assessment
                <ArrowRight class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        v-if="startAssessment"
        class="grid lg:grid-cols-[0.55fr,1.45fr] gap-4"
      >
        <aside
          class="bg-[#0316193D] border border-white/5 rounded-xl p-4 shadow-sm shadow-indigo-500/20 space-y-3"
        >
          <div class="flex items-center justify-between">
            <h3 class="text-slate-100 font-semibold text-sm">Sections</h3>
            <span class="text-xs text-slate-400">{{ quiz.length }} blocks</span>
          </div>
          <div class="flex flex-col gap-2">
            <button
              v-for="(section, idx) in quiz"
              :key="section.section"
              class="text-left rounded-lg border border-transparent hover:border-[#09414C] bg-[#031619] text-slate-100 px-3 py-2 transition hover:border-sky-200/60"
              :class="{
                'bg-[#093c46] border-[#093c46]/70  shadow-indigo-500':
                  idx === currentSectionIndex,
              }"
              @click="jumpToSection(idx)"
            >
              <div class="flex items-center gap-2 font-semibold">
                <component
                  :is="iconForSection(section.section)"
                  class="w-4 h-4"
                />
                <span class="text-sm leading-tight">{{ section.section }}</span>
              </div>
              <div class="h-2 rounded-full bg-white/10 mt-2 overflow-hidden">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-[#1EDAFC] to-[#18AECA] transition-all"
                  :style="{ width: sectionProgress(idx) + '%' }"
                ></div>
              </div>
              <p class="text-xs text-slate-400 mt-1">
                {{ sectionProgress(idx) }}% ·
                {{ section.list.length }} questions
              </p>
            </button>
          </div>
        </aside>

        <div
          class="bg-[#0316193D] border border-white/5 rounded-2xl p-5 shadow-sm shadow-indigo-500/20 space-y-4"
        >
          <div class="space-y-2">
            <div
              class="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/10 text-xs text-slate-300"
            >
              Section {{ currentSectionIndex + 1 }} of {{ quiz.length }}
            </div>
            <h2 class="text-2xl font-semibold text-slate-50">
              {{ currentSection.section }}
            </h2>
            <p class="text-sm text-slate-400 leading-relaxed">
              {{ sectionHints[currentSection.section] || fallbackHint }}
            </p>
          </div>

          <div
            class="p-4 rounded-xl border border-white/5 bg-[#031619] space-y-3"
          >
            <div class="flex flex-wrap items-center gap-3 text-slate-200">
              <CircleDot class="w-4 h-4 text-slate-400" />
              <p class="text-sm">
                Question {{ globalQuestionNumber }} of {{ totalQuestions }}
              </p>
              <span
                class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 text-[12px] text-slate-300"
              >
                {{ currentSection.list.length }} in this section
              </span>
            </div>
            <p class="text-lg text-slate-50 leading-snug">
              {{ currentQuestion.question }}
            </p>
            <div class="flex flex-wrap gap-2">
              <label
                v-for="(option, oIndex) in currentQuestion.option"
                :key="option + oIndex"
                class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-transparent hover:border-[#09414C] bg-[#00000066] text-slate-100 cursor-pointer transition hover:border-sky-200/60"
                :class="{
                  'border-sky-300/90 bg-sky-400/20 text-slate-50 shadow-sm shadow-indigo-500/20':
                    isSelected(
                      currentSectionIndex,
                      currentQuestionIndex,
                      option
                    ),
                }"
              >
                <input
                  class="sr-only"
                  type="radio"
                  :name="
                    'question-' +
                    currentSectionIndex +
                    '-' +
                    currentQuestionIndex
                  "
                  :value="option"
                  :checked="
                    isSelected(
                      currentSectionIndex,
                      currentQuestionIndex,
                      option
                    )
                  "
                  @change="
                    selectOption(
                      currentSectionIndex,
                      currentQuestionIndex,
                      option
                    )
                  "
                />
                <span
                  class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-white/10"
                >
                  <Check
                    class="w-4 h-4"
                    v-if="
                      isSelected(
                        currentSectionIndex,
                        currentQuestionIndex,
                        option
                      )
                    "
                  />
                  <Orbit class="w-4 h-4 text-slate-400" v-else />
                </span>
                <span class="font-semibold text-sm">{{ option }}</span>
              </label>
            </div>
          </div>

          <div
            class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <button
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-transparent hover:border-[#09414C] bg-[#031619] text-slate-100 disabled:opacity-50"
              :disabled="isFirstQuestion"
              @click="prevQuestion"
            >
              <ArrowLeft class="w-4 h-4" />
              Previous
            </button>
            <div
              class="flex items-center gap-3 justify-between sm:justify-end w-full sm:w-auto"
            >
              <span class="text-sm text-slate-400"
                >{{ answeredCount }} / {{ totalQuestions }} answered</span
              >
              <button
                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#1EDAFC] to-[#18AECA] text-slate-900 font-semibold shadow-sm shadow-indigo-500/20 disabled:opacity-60 disabled:shadow-none"
                :disabled="!currentSelection"
                @click="nextOrSubmit"
              >
                {{ isLastQuestion ? "Submit and Get my path" : nextLabel }}
                <ArrowRight class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Email Modal -->
      <div
        v-if="showEmailModal"
        class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <div
          class="bg-[#0a0c18] border border-white/10 rounded-2xl p-6 max-w-md w-full shadow-sm shadow-indigo-500/20 space-y-4"
        >
          <div class="space-y-2">
            <h2 class="text-2xl font-bold text-slate-50">Get your results</h2>
            <p class="text-slate-300 text-sm">
              Enter your details to unlock your personalized learning path.
            </p>
          </div>
          <input
            v-model="userFirstName"
            type="text"
            placeholder="First name"
            class="w-full px-4 py-2.5 rounded-lg bg-slate-900/40 border border-white/10 text-slate-50 placeholder-slate-400 focus:outline-none focus:border-sky-300/60 focus:ring-1 focus:ring-sky-300/30"
          />
          <input
            v-model="userEmail"
            type="email"
            placeholder="you@example.com"
            class="w-full px-4 py-2.5 rounded-lg bg-slate-900/40 border border-white/10 text-slate-50 placeholder-slate-400 focus:outline-none focus:border-sky-300/60 focus:ring-1 focus:ring-sky-300/30"
          />
          <button
            @click="submitEmail"
            :disabled="!userEmail || !userFirstName || !isValidEmail(userEmail)"
            class="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#1EDAFC] to-[#18AECA] text-slate-900 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            View my results
          </button>
        </div>
      </div>

      <!-- Result Modal -->
      <div
        v-if="showResultModal"
        class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <div
          class="bg-[#0a0c18] border border-white/10 rounded-2xl p-8 max-w-lg w-full shadow-sm shadow-indigo-500/20 space-y-6"
        >
          <div class="text-center space-y-3">
            <p class="text-sm text-slate-400">Your learning profile</p>
            <h2 class="text-4xl font-bold text-slate-50">
              {{ results.track }}
            </h2>
            <div class="flex items-center justify-center gap-2">
              <component :is="results.icon" class="w-6 h-6 text-sky-400" />
              <p class="text-slate-300">Score: {{ results.score }}/100</p>
            </div>
          </div>

          <div class="space-y-2">
            <div class="h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                class="h-full rounded-full bg-gradient-to-r from-[#1EDAFC] to-[#18AECA]"
                :style="{ width: results.score + '%' }"
              ></div>
            </div>
            <p class="text-xs text-slate-400 text-center">
              {{ results.description }}
            </p>
          </div>

          <button
            @click="closeModal"
            class="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#1EDAFC] to-[#18AECA] text-slate-900 font-semibold"
          >
            Start learning
          </button>
        </div>
      </div>
    </div>
  </LandingLayout>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Check,
  CheckCircle2,
  CircleDot,
  Compass,
  Crown,
  Orbit,
  Rocket,
  Shield,
  Sparkles,
  Telescope,
  Timer,
  TrendingUp,
  Zap,
} from "lucide-vue-next";
import LandingLayout from "../components/Layout/LandingLayout.vue";
import quizData from "../datas/quiz.js";

const quiz = ref(quizData);
const selections = reactive({});
const userFirstName = ref("");
const userEmail = ref("");
const startAssessment = ref(false);
const showEmailModal = ref(false);
const showResultModal = ref(false);
const results = ref({ track: "", score: 0, description: "", icon: Rocket });

const sectionHints = {
  "Goals and Motivation":
    "Capture your intent and time so we tune cadence and milestones.",
  "STEM Foundations":
    "Gauge your comfort with physics, orbits, and security fundamentals.",
  "Digital Skills and Data Thinking":
    "Check how you handle data, code, and spatial reasoning.",
  "Space Awareness And Career Knowledge":
    "Map your focus areas to roles and credentials.",
};

const fallbackHint = "Answer to shape a personalized learning sequence.";

const currentSectionIndex = ref(0);
const currentQuestionIndex = ref(0);

const currentSection = computed(
  () => quiz.value[currentSectionIndex.value] || { list: [], section: "" }
);
const currentQuestion = computed(
  () =>
    currentSection.value.list[currentQuestionIndex.value] || {
      question: "",
      option: [],
    }
);

const totalQuestions = computed(() =>
  quiz.value.reduce((sum, block) => sum + block.list.length, 0)
);

const answeredCount = computed(() => Object.keys(selections).length);

const progressPercent = computed(() => {
  if (!totalQuestions.value) return 0;
  return Math.round((answeredCount.value / totalQuestions.value) * 100);
});

const globalQuestionNumber = computed(() => {
  const previousCount = quiz.value
    .slice(0, currentSectionIndex.value)
    .reduce((sum, block) => sum + block.list.length, 0);
  return previousCount + currentQuestionIndex.value + 1;
});

const iconMap = {
  "Goals and Motivation": Sparkles,
  "STEM Foundations": Shield,
  "Digital Skills and Data Thinking": BarChart3,
  "Space Awareness And Career Knowledge": Orbit,
};

const iconForSection = (title) => iconMap[title] || Rocket;

const isFirstQuestion = computed(
  () => currentSectionIndex.value === 0 && currentQuestionIndex.value === 0
);

const isLastQuestion = computed(() => {
  const isLastInSection =
    currentQuestionIndex.value === currentSection.value.list.length - 1;
  const isLastSection = currentSectionIndex.value === quiz.value.length - 1;
  return isLastInSection && isLastSection;
});

const currentSelection = computed(
  () => selections[`${currentSectionIndex.value}-${currentQuestionIndex.value}`]
);

const nextLabel = computed(() => {
  const isLastInSection =
    currentQuestionIndex.value === currentSection.value.list.length - 1;
  return isLastInSection ? "Next section" : "Next question";
});

const startQuiz = () => {
  startAssessment.value = true;
};

function selectOption(sectionIndex, questionIndex, option) {
  selections[`${sectionIndex}-${questionIndex}`] = option;
}

function isSelected(sectionIndex, questionIndex, option) {
  return selections[`${sectionIndex}-${questionIndex}`] === option;
}

function submitQuiz() {
  if (answeredCount.value < totalQuestions.value) {
    return;
  }
  showEmailModal.value = true;
}

function calculateScore() {
  const trackScores = {
    "Goals and Motivation": {
      "Curiosity and general knowledge": 5,
      "School support or STEM improvement": 10,
      "Career change or upskilling": 15,
      "Mission operations interest": 20,
      "Leadership, policy, or entrepreneurship": 25,
    },
    "STEM Foundations": {
      "6 hours": 20,
      "12 hours": 15,
      "90 minutes": 25,
      "24 hours": 10,
      "7 days": 5,
      Beginner: 5,
      "Some basics": 10,
      "Comfortable with STEM": 15,
      "Experienced in tech or engineering": 20,
      "Already working in a related field": 25,
      "A fixed number like 10": 0,
      "A changing value like speed": 20,
      "A title like 'velocity'": 5,
      "A unit like meters": 0,
      "A label like 'x axis'": 0,
      "Only for computers on Earth": 0,
      "Not relevant to satellites": 0,
      "Protects data links and mission systems": 25,
      "Only about passwords": 5,
      "Only for classified missions": 5,
      "Ignore it": 0,
      "Look at the title and axes": 20,
      "Guess the trend": 5,
      "Focus only on colors": 0,
      "Read comments first": 15,
    },
    "Digital Skills and Data Thinking": {
      None: 0,
      "Excel or Google Sheets": 10,
      "Python or coding tools": 20,
      "GIS or mapping tools": 25,
      "Data dashboards": 20,
      "Student exploration": 5,
      "STEM tutor or club leader": 15,
      "Data or cyber entry role": 20,
      "Satellite ops support": 25,
      "Project or program leadership": 25,
      "A falling motion around Earth": 15,
      "A floating motion with no gravity": 5,
      "A path only rockets can use": 0,
      "A random path": 0,
      Low: 0,
      "Basic arithmetic": 5,
      "Algebra comfort": 15,
      "Trig and calculus exposure": 20,
      "Strong, use it often": 25,
    },
    "Space Awareness And Career Knowledge": {
      "Planets and exploration": 10,
      "Satellites and orbits": 20,
      "Space data and AI": 25,
      "Space security and policy": 20,
      "Building space programs for communities": 25,
      "Avoid it": 0,
      "Use a simple example": 10,
      "Use a diagram": 15,
      "Look up a source and summarize": 20,
      "Teach it with steps and a quiz": 25,
      "Video only": 5,
      "Reading and notes": 10,
      "Practice exercises": 15,
      "Projects and simulations": 25,
      "Mixed approach": 20,
      "Not important": 0,
      "Maybe later": 5,
      "Yes, for motivation": 15,
      "Yes, for jobs": 20,
      "Yes, for academic credit if available": 25,
    },
  };

  let totalScore = 0;
  quiz.value.forEach((section, sIdx) => {
    section.list.forEach((question, qIdx) => {
      const key = `${sIdx}-${qIdx}`;
      const answer = selections[key];
      if (
        answer &&
        trackScores[section.section] &&
        trackScores[section.section][answer]
      ) {
        totalScore += trackScores[section.section][answer];
      }
    });
  });

  const maxPossible = 500;
  const normalizedScore = Math.round((totalScore / maxPossible) * 100);
  return Math.min(100, normalizedScore);
}

function getTrackInfo(score) {
  const tracks = [
    {
      name: "Explorer",
      min: 0,
      max: 35,
      icon: Compass,
      description:
        "Beginner-friendly space literacy and STEM confidence building",
    },
    {
      name: "Builder",
      min: 36,
      max: 55,
      icon: Zap,
      description: "Foundational STEM and applied mission concepts",
    },
    {
      name: "Analyst",
      min: 56,
      max: 70,
      icon: TrendingUp,
      description:
        "Data thinking, AI foundations, and space data interpretation",
    },
    {
      name: "Operator",
      min: 71,
      max: 85,
      icon: BarChart3,
      description: "Mission operations, satellite systems, cyber basics",
    },
    {
      name: "Leader",
      min: 86,
      max: 100,
      icon: Crown,
      description: "Program, policy, entrepreneurship, and systems leadership",
    },
  ];

  const track = tracks.find((t) => score >= t.min && score <= t.max);
  return track || tracks[0];
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function submitEmail() {
  if (!isValidEmail(userEmail.value) || !userFirstName.value.trim()) return;

  const score = calculateScore();
  const track = getTrackInfo(score);

  results.value = {
    track: track.name,
    score: score,
    description: track.description,
    icon: track.icon,
  };

  // Send email with quiz results
  try {
    const response = await fetch("/api/send-quiz-results-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: userFirstName.value.trim(),
        email: userEmail.value,
        track: track.name,
        score: score,
        description: track.description,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("Email sending failed:", data);
      // Still show results even if email fails
    } else {
      console.log("Quiz results email sent successfully");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    // Still show results even if email fails
  }

  showEmailModal.value = false;
  showResultModal.value = true;
}

function closeModal() {
  showResultModal.value = false;
  userEmail.value = "";
  userFirstName.value = "";

  //   Reset quiz for potential retake
  currentSectionIndex.value = 0;
  currentQuestionIndex.value = 0;
  for (const key in selections) {
    delete selections[key];
  }

  //   redirect to earlyaccess form on homepage
  window.location.href = "/#earlyaccess";
}

function sectionProgress(sectionIndex) {
  const section = quiz.value[sectionIndex];
  if (!section) return 0;
  const answered = section.list.filter(
    (_, idx) => selections[`${sectionIndex}-${idx}`]
  ).length;
  if (!section.list.length) return 0;
  return Math.round((answered / section.list.length) * 100);
}

function jumpToSection(index) {
  currentSectionIndex.value = index;
  currentQuestionIndex.value = 0;
}

function prevQuestion() {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value -= 1;
    return;
  }
  if (currentSectionIndex.value > 0) {
    currentSectionIndex.value -= 1;
    currentQuestionIndex.value =
      quiz.value[currentSectionIndex.value].list.length - 1;
  }
}

function nextOrSubmit() {
  if (!currentSelection.value) return;

  const section = quiz.value[currentSectionIndex.value];
  const isLastInSection =
    currentQuestionIndex.value === section.list.length - 1;

  if (isLastQuestion.value) {
    submitQuiz();
    return;
  }

  if (isLastInSection) {
    currentSectionIndex.value += 1;
    currentQuestionIndex.value = 0;
    return;
  }

  currentQuestionIndex.value += 1;
}
</script>
