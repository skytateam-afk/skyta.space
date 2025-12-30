<template>
  <div class="brochure-page">
    <div class="brochure-header">
      <h1>Skyta Space Brochure</h1>
      <a 
        :href="pdfUrl" 
        download="skyta-brochure.pdf"
        class="download-btn"
      >
        <i data-lucide="download" class="h-4 w-4"></i>
        Download Brochure
      </a>
    </div>
    
    <div class="pdf-viewer-container">
      <iframe 
        :src="pdfUrl" 
        class="pdf-viewer"
        title="Skyta Space Brochure PDF"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const pdfUrl = ref('/brochure.pdf')

// SEO Meta tags and initialize Lucide icons
onMounted(() => {
  // Initialize Lucide icons
  if (window.lucide?.createIcons) {
    window.lucide.createIcons()
  }

  // Set page title
  document.title = 'Skyta Space Brochure - AI-Powered Data Analysis Platform'
  
  // Set meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', 'View and download the Skyta Space brochure. Learn about our AI-powered data analysis platform, features, pricing, and how we help businesses make data-driven decisions.')
  } else {
    const meta = document.createElement('meta')
    meta.name = 'description'
    meta.content = 'View and download the Skyta Space brochure. Learn about our AI-powered data analysis platform, features, pricing, and how we help businesses make data-driven decisions.'
    document.head.appendChild(meta)
  }

  // Set Open Graph tags for social sharing
  const setMetaTag = (property, content) => {
    let meta = document.querySelector(`meta[property="${property}"]`)
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('property', property)
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
  }

  setMetaTag('og:title', 'Skyta Space Brochure - AI-Powered Data Analysis Platform')
  setMetaTag('og:description', 'View and download the Skyta Space brochure. Learn about our AI-powered data analysis platform and how we help businesses make data-driven decisions.')
  setMetaTag('og:type', 'website')
  setMetaTag('og:url', window.location.href)
  setMetaTag('og:image', window.location.origin + '/hero-image.webp')

  // Twitter Card tags
  const setTwitterTag = (name, content) => {
    let meta = document.querySelector(`meta[name="${name}"]`)
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', name)
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
  }

  setTwitterTag('twitter:card', 'summary_large_image')
  setTwitterTag('twitter:title', 'Skyta Space Brochure - AI-Powered Data Analysis Platform')
  setTwitterTag('twitter:description', 'View and download the Skyta Space brochure. Learn about our AI-powered data analysis platform and how we help businesses make data-driven decisions.')
  setTwitterTag('twitter:image', window.location.origin + '/hero-image.webp')

  // Keywords meta tag
  const keywords = document.querySelector('meta[name="keywords"]')
  if (!keywords) {
    const meta = document.createElement('meta')
    meta.name = 'keywords'
    meta.content = 'Skyta Space, AI data analysis, business intelligence, data visualization, machine learning, data analytics, brochure, PDF, data-driven decisions'
    document.head.appendChild(meta)
  }
})

onBeforeUnmount(() => {
  // Reset title when leaving page
  document.title = 'Skyta Space'
})
</script>

<style scoped>
.brochure-page {
  width: 100vw;
  height: 100vh;
  background: #04050A;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.brochure-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background: #04050A;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.brochure-header h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.02em;
}

.pdf-viewer-container {
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.pdf-viewer {
  width: 100%;
  height: 100%;
  border: none;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #031619;
  background: linear-gradient(90deg, #1EDAFC 0%, #18AECA 100%);
  border-radius: 0.375rem;
  text-decoration: none;
  transition: opacity 0.2s;
  box-shadow: 0 1px 2px 0 rgba(30, 218, 252, 0.2);
}

.download-btn:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .brochure-header {
    padding: 1rem;
  }
  
  .brochure-header h1 {
    font-size: 1.25rem;
  }
  
  .download-btn {
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
  }
}
</style>
