# Skyta.space - Vue Application

A modern Vue 3 application for Skyta.space - an AI-powered space intelligence platform for real-time satellite visualization, debris tracking, space weather, AR sky exploration, and alerts.

## Project Structure

```
skyta-vue/
├── src/
│   ├── components/
│   │   ├── AppHeader.vue          # Navigation header
│   │   ├── AppFooter.vue          # Footer with newsletter
│   │   └── sections/              # Page sections
│   │       ├── HeroSection.vue
│   │       ├── DataSourcesSection.vue
│   │       ├── FeaturesSection.vue
│   │       ├── UseCasesSection.vue
│   │       ├── RoadmapSection.vue
│   │       ├── TeamSection.vue
│   │       └── EarlyAccessSection.vue
│   ├── composables/
│   │   └── useFeatures.js         # Shared data and logic
│   ├── router/
│   │   └── index.js               # Vue Router configuration
│   ├── views/
│   │   └── Home.vue               # Main home page view
│   ├── App.vue                    # Root component
│   ├── main.js                    # Application entry point
│   └── style.css                  # Global styles
├── public/                        # Static assets
├── index.html                     # HTML entry point
└── package.json                   # Dependencies
```

## Features

- ✅ Vue 3 with Composition API
- ✅ Vue Router for navigation
- ✅ Component-based architecture
- ✅ Responsive design with Tailwind CSS
- ✅ Lucide icons integration
- ✅ Interactive forms with validation
- ✅ Smooth scroll navigation
- ✅ Reusable composables for data management

## Tech Stack

- **Framework**: Vue 3
- **Build Tool**: Vite
- **Routing**: Vue Router 4
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Lucide Icons
- **Charts**: Chart.js

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The application is running at `http://localhost:5173/`

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/views/Home.vue`
3. Update navigation links in `AppHeader.vue` if needed

### Modifying Data

Edit `src/composables/useFeatures.js` to update:
- Features list
- Use cases
- Roadmap phases
- Team members

## Project Highlights

### Component Organization
- **Layout Components**: Header and Footer for consistent navigation
- **Section Components**: Modular sections for easy maintenance
- **Composables**: Centralized data management with `useFeatures`

### Routing
- Hash-based navigation for section scrolling
- Smooth scroll behavior configured in router

### Styling
- Tailwind CSS for utility-first styling
- Custom gradient backgrounds
- Responsive design for all screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - Skyta.space

## Team

- Ujunwa Udeani - Scrum Master / Agile Coach
- Mary Chukwu - Project Manager
- Chioma Chime - Business Analyst
- Shola - Solutions Architect (Temporary)
- Charles Otaru - Backend/Full Stack Developer
- Oluwasegun - Frontend Developer
- Mark Ekpobiyere - UX Designer
