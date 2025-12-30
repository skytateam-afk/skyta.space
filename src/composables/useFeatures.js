export const useFeatures = () => {
  const features = [
    {
      icon: 'globe',
      title: '3D Space Dashboard',
      description: 'Real-time visualization of satellites, debris, and ISS, with orbital paths and trajectories.'
    },
    {
      icon: 'brain',
      title: 'AI Learning Assistant "Felix"',
      description: '24/7 conversational AI that generates custom explanations, diagrams, and practice problems tailored to your level.'
    },
    {
      icon: 'book-open',
      title: 'Comprehensive Learning Hub',
      description: 'Structured topics and lessons with video, audio, interactive simulations, and downloadable resources.'
    },
    {
      icon: 'target',
      title: 'AI Collision Prediction',
      description: 'Predictive alerts for potential conjunctions with risk scoring and timing predictions.'
    },
    {
      icon: 'flame',
      title: 'Learning Streak System',
      description: 'Daily streak tracking with proactive engagement, milestone rewards, and personalized reminders from Felix.'
    },
    {
      icon: 'smartphone',
      title: 'AR Exploration Mode',
      description: 'Immersive AR visualization of planets, satellites, and space phenomena with voice-activated interactions.'
    },
    {
      icon: 'trophy',
      title: 'Gamification & Missions',
      description: 'Mission-based learning with XP system, achievement badges, rank progression, and global leaderboards.'
    },
    {
      icon: 'bar-chart',
      title: 'Progress Analytics',
      description: 'Visual progress tracking, skill proficiency ratings, and personalized learning path recommendations.'
    },
    {
      icon: 'bell-ring',
      title: 'Smart Notifications',
      description: 'Contextual reminders, milestone alerts, and achievement celebrations powered by AI.'
    },
  ]

  const useCases = [
    {
      icon: 'shield',
      title: 'Governments',
      items: [
        'National security monitoring',
        'Policy insights & risk assessment',
        'Threat detection & alerts'
      ]
    },
    {
      icon: 'satellite',
      title: 'Enterprises',
      items: [
        'Satellite ops & mission planning',
        'Conjunction analysis',
        'Operational continuity'
      ]
    },
    {
      icon: 'graduation-cap',
      title: 'Education',
      items: [
        'Interactive lessons & labs',
        'AR sky exploration',
        'Gamified missions'
      ]
    },
    {
      icon: 'users',
      title: 'Citizens',
      items: [
        'Astronomy & sky events',
        'ISS passes & re-entries',
        'Accessible dashboards'
      ]
    }
  ]

  const roadmapPhases = [
    {
      year: 'Phase 1',
      title: 'Learning Portal Launch',
      subtitle: 'AI-Powered Education MVP',
      icon: 'rocket',
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      iconBg: 'bg-blue-500/10',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
      highlights: [
        'Launch AI learning assistant "Felix"',
        'Comprehensive curriculum with 10+ topics',
        'Gamification system with XP, badges & leaderboards',
        'Learning streak tracking & smart notifications',
        'Onboard 1M+ early adopters'
      ]
    },
    {
      year: 'Year 2',
      title: 'Scale & Enhance',
      subtitle: 'AI-Powered Intelligence',
      icon: 'brain',
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      iconBg: 'bg-purple-500/10',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop',
      highlights: [
        'Advanced AI collision prediction models',
        'AR sky exploration feature launch',
        'Space weather integration & alerts',
        'Educational platform with gamification',
        'Expand to 50K+ tracked objects'
      ]
    },
    {
      year: 'Year 3',
      title: 'Enterprise & Expand',
      subtitle: 'Global Partnerships',
      icon: 'globe-2',
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/30',
      iconBg: 'bg-emerald-500/10',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1200&auto=format&fit=crop',
      highlights: [
        'Enterprise API & white-label solutions',
        'Government & defense partnerships',
        'Multi-language support (10+ languages)',
        'Advanced debris heat mapping',
        'Reach 100K+ active users globally'
      ]
    },
    {
      year: 'Year 4',
      title: 'Innovate & Lead',
      subtitle: 'The Future of Space Intelligence',
      icon: 'sparkles',
      color: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30',
      iconBg: 'bg-orange-500/10',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
      highlights: [
        'Predictive space traffic management',
        'Quantum computing integration for simulations',
        'Autonomous satellite coordination protocols',
        'VR mission control experiences',
        'Become the #1 space intelligence platform'
      ]
    }
  ]

  const teamMembers = [
    {
      name: 'Ujunwa Udeani',
      role: 'Chief Executive',
      image: '/ujunwa2.webp'
    },
    {
      name: 'Mary Chukwu',
      image: '/Mary.webp'
    },
    {
      name: 'Marvelous Solomon',
      role: 'Chief Technology Officer',
      image: '/Marvelous.webp'
    }
  ]

  return {
    features,
    useCases,
    roadmapPhases,
    teamMembers
  }
}
