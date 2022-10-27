<script>
import IntroSection from '../components/IntroSection.vue';
import RecentSection from '../components/RecentSection.vue';
import FeaturedSection from '../components/FeaturedSection.vue';
import WorkContent from '../data/WorkContent.json';

export default {
  components: {
    IntroSection,
    RecentSection,
    FeaturedSection,
  },
  props: {
    cards: {
      id: {
        type: Number,
			  required: true
      },
      imgName: {
        type: String,
			  required: true
      },
      title: {
        type: String,
			  required: true
      },
      year: {
        type: String,
			  required: true
      },
      tag: {
        type: String,
			  required: true
      },
      text: {
        type: String,
			  required: true
      },
    }
  },
  data() {
    return {
      cards: WorkContent,
    }
  },
}
</script>

<template>

  <main>
    
    <IntroSection />

    <RecentSection />

    <FeaturedSection
      :cards="cards"
    />

  </main>
  
</template>
