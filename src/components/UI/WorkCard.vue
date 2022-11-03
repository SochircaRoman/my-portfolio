<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  
  <div class="work__card">
    <a href="./workDetail.html" class="work__card-link">
      <div class="work__card-wrapper">
        <img :src="'../../../featured_work/' + card.imgName + '.jpg'"  :alt="card.imgName" class="work__card-img">
      </div>
    </a>
    <div class="work__card-content">
      <h3 class="work__card-title">{{ card.title }}</h3>
      <div class="work__card-information">
        <span class="work__information-date noselect">{{ card.year }}</span>
        <span class="work__information-tag noselect">{{ card.tag }}</span>
        <span class="work__information-links noselect">
          <a href="/" class="work__link"><img src="../../../links/GitHub.png" alt="Github link"></a>
          <a href="/" class="work__link"><img src="../../../links/external-link.png" alt="Project link"></a>
        </span>
      </div>
      <p class="work__card-description">{{ card.text }}</p>
    </div>
  </div>
  <div class="work__card-line"></div>

</template>

<style scoped>
/* START WORK CARD */
.work__card {
  display: flex;
  justify-content: space-between;
  transition: 0.2s all;
}

.work__card-wrapper {
  margin-right: 18px;
  padding: 0 15px;
}

.work__card-img {
  border-radius: 6px;
}

.work__card:hover {
  transform: scale(1.05);
}

.work__card-title {
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  margin-top: -10px;
}

.work__information-date {
  padding: 1px 10px;
  background: #142850;
  border-radius: 16px;
  color: #FFFFFF;
  font-weight: 900;
  font-size: 18px;
  line-height: 60px;
  margin-right: 26px;
}

.work__information-tag {
  font-size: 20px;
  line-height: 29px;
  color: #8695A4;
}

.work__information-links {
  margin-left: 120px;
}

.work__link {
  margin-right: 26px;
}

.work__card-description {
  font-size: 16px;
  line-height: 24px;
}

.work__card-line {
  border-top: 1px solid #E0E0E0;
  max-width: 100%;
  margin: 30px 0px 70px;
}
  /* END WORK CARD */
</style>