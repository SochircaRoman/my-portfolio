<template>
  
  <WorkCard
    v-for="card in cards"
    :card="card"
    :key="card.id"
  />

</template>

<script>
import WorkCard from './UI/WorkCard.vue';

export default {
  props: {
      cards: {
          type: Array,
          required: true,
      }
  },
  components: { WorkCard }
}
</script>

<style scoped>

</style>