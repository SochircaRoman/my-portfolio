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
    <div class="work__card-wrapper">
      <img :src="'../../../featured_work/' + card.imgName + '.jpg'"  :alt="card.imgName" class="work__card-img">
    </div>
    <div class="work__card-content">
      <h3 class="work__card-title">{{ card.title }}</h3>
      <div class="work__card-information">
        <span class="work__information-date noselect">{{ card.year }}</span>
        <span class="work__information-tag noselect">{{ card.tag }}</span>
      </div>
      <p class="work__card-description">{{ card.text }}</p>
      <span class="work__information-links noselect">
        <a :href="card.githubLink" class="work__link" target="_blank"><img src="@/../public/links/github.png" alt="github"></a>
        <a :href="card.projectLink" class="work__link" target="_blank"><img src="@/../public/links/external-link.png" alt="project"></a>
      </span>
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
  width: 246px;
  height: 180px;
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
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
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

/* MEDIA START */
@media screen and (max-width: 800px) {
  .work__card {
    flex-direction: column;
    align-items: center;
  }

  .work__card-title {
    text-align: center;
    margin-top: 5px;
  }

  .work__card-information {
    text-align: center;
  }

  .work__card-description {
    max-width: 450px;
    text-align: center;
  }

  .work__card-line {
    margin: 15px 0px 50px;
  }

  .work__information-links {
    margin-left: 0px;
    justify-content: center;
  }
}
/* MEDIA END */
</style>