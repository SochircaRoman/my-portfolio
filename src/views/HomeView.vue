<script setup>
import NavBar from '../components/NavBar.vue'
import IntroSection from '../components/IntroSection.vue'
import RecentSection from '../components/RecentSection.vue'
import FeaturedSection from '../components/FeaturedSection.vue'
import FooterBar from '../components/FooterBar.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <NavBar/>

  <main>
    <IntroSection />
    <RecentSection />
    <FeaturedSection />
  </main>

  <FooterBar />
  
</template>
