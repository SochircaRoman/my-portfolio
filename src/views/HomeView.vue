<script>
import IntroSection from '../components/IntroSection.vue';
import RecentSection from '../components/RecentSection.vue';
import FeaturedSection from '../components/FeaturedSection.vue';

import WorkContent from '../data/WorkContent.json';
import SkillsContent from '../data/SkillsContent.json';
import BlogContent from '../data/BlogContent.json';

export default {
  components: {
    IntroSection,
    RecentSection,
    FeaturedSection,
  },
  props: {},
  data() {
    return {
      cards: WorkContent,
      skills: SkillsContent,
      posts: BlogContent
    }
  },
}
</script>

<template>

  <main>
    
    <IntroSection
      :skills="skills"
    />

    <RecentSection
      :posts="posts"
    />

    <FeaturedSection
      :cards="cards"
    />

  </main>
  
</template>
