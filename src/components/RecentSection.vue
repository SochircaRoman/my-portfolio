<template>

  <section class="recent">
      <div class="wrapper">

        <div class="recent__header">
          <h2 class="recent__header-title noselect">Recent posts</h2>
          <div class="recent__header-view">
            <a href="#!" class="recent__header-link">View all</a>
          </div>
        </div>

        <div class="recent__cards">

          <div class="recent__card">
            <h3 class="recent__card-title">Making a design system from scratch</h3>
            <div class="recent__card-information">
              <div class="card__information-date">12 Feb 2020</div>
              <div class="card__information-line"></div>
              <div class="card__information-tags">Design, Pattern</div>
            </div>
            <p class="recent__card-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          <div class="recent__card">
            <h3 class="recent__card-title">Creating pixel perfect icons in Figma</h3>
            <div class="recent__card-information">
              <div class="card__information-date">12 Feb 2020</div>
              <div class="card__information-line"></div>
              <div class="card__information-tags">Figma, Icon Design</div>
            </div>
            <p class="recent__card-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

        </div>
      </div>
    </section>
    
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
/* START RECENT */
.recent {
  background: #EDF7FA;
}
.recent__header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 5px;
}

.recent__header-title {
  font-size: 22px;
  line-height: 60px;
}

.recent__header-link {
  line-height: 24px;
  color: #00A8CC;
  text-decoration: none;
}

.recent__cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
}

.recent__card {
  background: #FFFFFF;
  border-radius: 4px;
  margin-bottom: 32px;
}

.recent__card-title {
  font-weight: 700;
  font-size: 26px;
  line-height: 38px;
  margin: 24px 22px 17px;
}

.recent__card-information {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px 22px 11px;
  max-width: 280px;
}

.card__information-date {
  font-size: 18px;
  line-height: 26px;
}

.card__information-tags {
  font-size: 18px;
  line-height: 26px;
}

.card__information-line {
  border-left: 1px solid #000000;
  height: 21px;
}

.recent__card-description {
  font-size: 16px;
  line-height: 24px;
  margin: 0px 25px 7px;
}
/* END RECENT */
</style>