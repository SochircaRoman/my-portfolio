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
    },
  },
  data() {
    return {
      
    }
  }
}

</script>

<template>

  <section class="featured">
      <div class="wrapper">

        <div class="featured__title noselect">Featured works</div>

        <div class="featured__cards">

          <WorkCard
            v-for="(card, index) in cards.slice(0, 3)"
            :key="index"
            :card="card"
          />

        </div>

      </div>
    </section>

</template>

<style scoped>
/* START FEATURED */
.featured__title {
  font-size: 22px;
  line-height: 60px;
  margin: 15px 0px 22px;
}
/* END FEATURED */

/* MEDIA START */
@media screen and (max-width: 800px) {
  .featured__title {
    text-align: center;
    margin: 20px 0px 25px;
  }
}
/* MEDIA END */
</style>