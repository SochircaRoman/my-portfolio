<script>
import WorkCards from '../components/WorkCards.vue'

export default {
  components: {
    WorkCards,
  },
  data() {
    return {
      cards: [
        {
          id: 0,
          imgName: "img_01",
          title: "Designing Dashboards",
          year: "2020",
          tag: "Dashboard",
          text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
          id: 1,
          imgName: "img_02",
          title: "Vibrant Portraits of 2020",
          year: "2018",
          tag: "Illustration",
          text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
          id: 2,
          imgName: "img_03",
          title: "36 Days of Malayalam type",
          year: "2018",
          tag: "Typography",
          text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
          id: 3,
          imgName: "img_04",
          title: "Components",
          year: "2018",
          tag: "Components, Design",
          text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
      ]
    }
  }
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
