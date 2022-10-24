<template>

  <section class="featured">
      <div class="wrapper">

        <div class="featured__title noselect">Featured works</div>

        <div class="featured__cards">

          <div class="featured__card">
            <a href="#!" class="feature__card-link">
              <div class="featured__card-wrapper">
                <img src="../../featured_work/img_01.jpg" alt="" class="featured__card-img">
              </div>
            </a>
            <div class="featured__card-content">
              <h3 class="featured__card-title">Designing Dashboards</h3>
              <div class="featured__card-information">
                <span class="featured__information-date noselect">2020</span>
                <span class="featured__information-tag noselect">Dashboard</span>
              </div>
              <p class="featured__card-description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>

          <div class="featured__card-line"></div>

          <div class="featured__card">
            <a href="#!" class="feature__card-link">
              <div class="featured__card-wrapper">
                <img src="../../featured_work/img_02.jpg" alt="" class="featured__card-img">
              </div>
            </a>
            <div class="featured__card-content">
              <h3 class="featured__card-title">Vibrant Portraits of 2020</h3>
              <div class="featured__card-information">
                <span class="featured__information-date noselect">2018</span>
                <span class="featured__information-tag noselect">Illustration</span>
              </div>
              <p class="featured__card-description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>

          <div class="featured__card-line"></div>

          <div class="featured__card">
            <a href="#!" class="feature__card-link">
              <div class="featured__card-wrapper">
                <img src="../../featured_work/img_03.jpg" alt="" class="featured__card-img">
              </div>
            </a>
            <div class="featured__card-content">
              <h3 class="featured__card-title">36 Days of Malayalam type</h3>
              <div class="featured__card-information">
                <span class="featured__information-date noselect">2018</span>
                <span class="featured__information-tag noselect">Typography</span>
              </div>
              <p class="featured__card-description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>

          <div class="featured__card-line"></div>

        </div>

      </div>
    </section>

</template>

<script>
  export default {
    
  }
</script>

<style scoped>
/* START FEATURED */
.featured__title {
  font-size: 22px;
  line-height: 60px;
  margin: 15px 0px 22px;
}

.featured__card {
  display: flex;
  justify-content: space-between;
  transition: 0.2s all;
}

.featured__card-wrapper {
  margin-right: 18px;
  padding: 0 15px;
}

.featured__card-img {
  border-radius: 6px;
}

.featured__card:hover {
  transform: scale(1.05);
}

.featured__card-title {
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  margin-top: -10px;
}

.featured__information-date {
  padding: 1px 10px;
  background: #142850;
  border-radius: 16px;
  color: #FFFFFF;
  font-weight: 900;
  font-size: 18px;
  line-height: 60px;
  margin-right: 26px;
}

.featured__information-tag {
  font-size: 20px;
  line-height: 29px;
  color: #8695A4;
}

.featured__card-description {
  font-size: 16px;
  line-height: 24px;
}

.featured__card-line {
  border-top: 1px solid #E0E0E0;
  max-width: 100%;
  margin: 15px 0px 35px;
}
/* END FEATURED */
</style>