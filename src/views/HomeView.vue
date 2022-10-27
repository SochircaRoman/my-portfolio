<script>
import IntroSection from '../components/IntroSection.vue'
import RecentSection from '../components/RecentSection.vue'
import FeaturedSection from '../components/FeaturedSection.vue'

export default {
  components: {
    IntroSection,
    RecentSection,
    FeaturedSection,
  }
}
</script>

<template>

  <main>
    <IntroSection />
    <RecentSection />
    <FeaturedSection />
  </main>
  
</template>
