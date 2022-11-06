<script>
import WorkCards from '../components/WorkCards.vue';
import WorkContent from '../data/WorkContent.json';

export default {
  components: {
    WorkCards,
  },
  props: {},
  data() {
    return {
      cards: WorkContent,
    }
  },
}

</script>

<template>

  <main>
    <section class="work">
      <div class="wrapper">
        <div class="work__content">

          <div class="work__content-title">
            <h2 class="title">Works</h2>
          </div>
          
            <WorkCards
              :cards="cards"
            />

        </div>
      </div>
    </section>
  </main>

</template>

<style scoped>
.work {
  padding-top: 160px;
}

.work__content-title .title {
  font-weight: 700;
  font-size: 44px;
  line-height: 60px;
  margin-bottom: 55px;
}

/* MEDIA START */
@media screen and (max-width: 800px) {
  .work {
    padding-top: 120px;
  }
  
  .work__content-title {
    text-align: center;
    margin: 20px 0px 25px;
  }
}
/* MEDIA END */
</style>
