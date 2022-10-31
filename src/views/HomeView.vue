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
    },
    skills: {
      id: {
        type: Number,
			  required: true
      },
      type: {
        type: String,
			  required: true
      },
      technologies: {
        type: Array,
			  required: true
      },
    }
  },
  data() {
    return {
      cards: WorkContent,
      posts: BlogContent,
      skills: SkillsContent,
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
