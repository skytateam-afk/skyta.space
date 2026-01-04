<template>
  <LandingLayout>
    <HeroSection />
    <VideoFull
      title="Skyta.Space just opened early access for the FIRST 10,000 founding members"
      description="And yes, anyone can join. Anyone can learn space. Satellites, space weather, real-time debris… all explained in a way EVERYONE can understand."
    />
    <DataSourcesSection />
    <LearningPortalSection />
    <FeaturesSection />
    <UseCasesSection />
    <AssessmentCTA
    <RoadmapSection />
    <PricingSection />
    <EarlyAccessSection />
  </LandingLayout>
</template>

<script setup>
import LandingLayout from "../components/Layout/LandingLayout.vue";
import HeroSection from "../components/sections/HeroSection.vue";
import DataSourcesSection from "../components/sections/DataSourcesSection.vue";
import LearningPortalSection from "../components/sections/LearningPortalSection.vue";
import FeaturesSection from "../components/sections/FeaturesSection.vue";
import UseCasesSection from "../components/sections/UseCasesSection.vue";
import RoadmapSection from "../components/sections/RoadmapSection.vue";
import PricingSection from "../components/sections/PricingSection.vue";
import EarlyAccessSection from "../components/sections/EarlyAccessSection.vue";
import VideoFull from "../components/VideoFull.vue";
import AssessmentCTA from "../components/sections/AssessmentCTA.vue";
</script>
