<template>
  
  <div class="work__content-cards">
    <WorkCard
      v-for="card in cards"
      :key="card.id"
      :card="card"
    />
  </div>

</template>

<script>
import WorkCard from './UI/WorkCard.vue';

export default {
  components: {
    WorkCard,
  },
  props: {
      cards: {
          type: Array,
          required: true,
      }
  },
  data() {
    return {
      
    }
  }
  
}
</script>

<style scoped>

</style>