const quiz = [
  {
    section: "Goals and Motivation",
    list: [
      {
        question: "What is your primary goal with space learning right now?",
        option: [
          "Curiosity and general knowledge",
          "School support or STEM improvement",
          "Career change or upskilling",
          "Mission operations interest",
          "Leadership, policy, or entrepreneurship",
        ],
        answer: 2
      },
      {
        question: "How much time can you commit per week?",
        option: [
          "30 to 60 minutes",
          "1 to 2 hours",
          "2 to 4 hours",
          "4 to 6 hours",
          "6+ hours",
        ],
        answer: 2
      },
      {
        question: "Which best describes your starting point?",
        option: [
          "Beginner",
          "Some basics",
          "Comfortable with STEM",
          "Experienced in tech or engineering",
          "Already working in a related field",
        ],
        answer: 1
      },
    ],
  },
  {
    section: "STEM Foundations",
    list: [
      {
        question:
          "If a satellite is in low Earth orbit, it generally orbits Earth about every:",
        option: ["6 hours", "12 hours", "90 minutes", "24 hours", "7 days"],
        answer: 2
      },
      {
        question: "Which is the best example of a variable in a simple physics problem?",
        option: [
          "A fixed number like 10",
          "A changing value like speed",
          "A title like 'velocity'",
          "A unit like meters",
          "A label like 'x axis'",
        ],
        answer: 1
      },
      {
        question: "Which statement best describes cybersecurity in space systems?",
        option: [
          "Only for computers on Earth",
          "Not relevant to satellites",
          "Protects data links and mission systems",
          "Only about passwords",
          "Only for classified missions",
        ],
        answer: 2
      },
      {
        question: "When you see a chart, what do you usually do first?",
        option: [
          "Ignore it",
          "Look at the title and axes",
          "Guess the trend",
          "Focus only on colors",
          "Read comments first",
        ],
        answer: 1
      },
    ],
  },
  {
    section: "Digital Skills and Data Thinking",
    list: [
      {
        question: "Which tool have you used most recently?",
        option: [
          "None",
          "Excel or Google Sheets",
          "Python or coding tools",
          "GIS or mapping tools",
          "Data dashboards",
        ],
        answer: 1
      },
      {
        question: "What is a realistic first job target for you?",
        option: [
          "Student exploration",
          "STEM tutor or club leader",
          "Data or cyber entry role",
          "Satellite ops support",
          "Project or program leadership",
        ],
        answer: 2
      },
      {
        question: "Which best describes an orbit?",
        option: [
          "A falling motion around Earth",
          "A floating motion with no gravity",
          "A path only rockets can use",
          "Experienced in tech or engineering",
          "A random path",
        ],
        answer: 0
      },
      {
        question: "What is your comfort level with math today?",
        option: [
          "Low",
          "Basic arithmetic",
          "Algebra comfort",
          "Trig and calculus exposure",
          "Strong, use it often",
        ],
        answer: 2
      },
    ],
  },
  {
    section: "Space Awareness And Career Knowledge",
    list: [
      {
        question: "Which is most interesting to you?",
        option: [
          "Planets and exploration",
          "Satellites and orbits",
          "Space data and AI",
          "Space security and policy",
          "Building space programs for communities",
        ],
        answer: 2
      },
      {
        question: "If you had to explain a concept to a friend, you would:",
        option: [
          "Avoid it",
          "Use a simple example",
          "Use a diagram",
          "Look up a source and summarize",
          "Teach it with steps and a quiz",
        ],
        answer: 4
      },
      {
        question: "Which describes your learning preference?",
        option: [
          "Video only",
          "Reading and notes",
          "Practice exercises",
          "Projects and simulations",
          "Mixed approach",
        ],
        answer: 4
      },
      {
        question: "Are you interested in certificates?",
        option: [
          "Not important",
          "Maybe later",
          "Yes, for motivation",
          "Yes, for jobs",
          "Yes, for academic credit if available",
        ],
        answer: 3
      },
    ],
  },
];

export default quiz;
