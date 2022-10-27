<script>
import WorkCards from '../components/WorkCards.vue';
import WorkContent from '../data/WorkContent.json';

export default {
  components: {
    WorkCards,
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

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
