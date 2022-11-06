<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<template>

  <section class="recent">
      <div class="wrapper">

        <div class="recent__header">
          <h2 class="recent__header-title noselect">Recent posts</h2>
          <div class="recent__header-view">
            <RouterLink to="/blog" class="recent__header-link">View all</RouterLink>
          </div>
        </div>

        <div class="recent__cards">

          <div class="recent__card"
            v-for="(post, index) in posts.slice(0, 2)"
            :key="index"
          >
            <RouterLink :to='"/post/" + post.id' class="recent__card-link">
              <h3 class="recent__card-title">{{ post.title }}</h3>
              <div class="recent__card-information">
                <div class="card__information-date">{{ post.date }}</div>
                <div class="card__information-line"></div>
                <div class="card__information-tags">{{ post.tag }}</div>
              </div>
              <p class="recent__card-description">{{ post.text }}</p>
            </RouterLink>
          </div>

        </div>
      </div>
    </section>
    
</template>

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
  transition: 0.2s all;
}

.recent__card:hover {
  transform: scale(1.02);
}

.recent__card-link {
  text-decoration: none;
  color: unset;
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

@media screen and (max-width: 800px) {
  .recent__header {
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 10px;
  }

  .recent__header-view {
    display: none;
  }

  .recent__cards {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }

  .recent__card {
    max-width: 450px;
  }
}
</style>