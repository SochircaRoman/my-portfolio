<template>

  <section class="featured">
      <div class="wrapper">

        <div class="featured__title noselect">Featured works</div>

        <div class="featured__cards">
          <WorkCards
            :cards="cards"
          />
        </div>

      </div>
    </section>

</template>

<script>
import WorkCards from './WorkCards.vue';

export default {
  components: {
    WorkCards
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

<style scoped>
/* START FEATURED */
.featured__title {
  font-size: 22px;
  line-height: 60px;
  margin: 15px 0px 22px;
}
/* END FEATURED */
</style>