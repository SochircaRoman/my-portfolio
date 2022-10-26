<script>
import NavBar from '../components/NavBar.vue'
import PostCards from '../components/PostCards.vue'
import FooterBar from '../components/FooterBar.vue'

export default {
  components: {
    NavBar,
    PostCards,
    FooterBar
  },
  data() {
    return {
      posts: [
        {
          id: 0,
          title: "UI Interactions of the week",
          date: "12 Feb 2019",
          tag: "Express, Handlebars",
          text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
          id: 1,
          title: "UI Interactions of the week",
          date: "12 Feb 2019",
          tag: "Express, Handlebars",
          text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
          id: 2,
          title: "UI Interactions of the week",
          date: "12 Feb 2019",
          tag: "Express, Handlebars",
          text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
          id: 3,
          title: "UI Interactions of the week",
          date: "12 Feb 2019",
          tag: "Express, Handlebars",
          text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        }
      ]
    }
  }
}

</script>

<template>

  <NavBar/>

  <main class="main">
    <section class="blog">
      <div class="wrapper">
        <div class="blog__content">

          <div class="blog__content-title">
            <h2 class="title">Blog</h2>
          </div>

          <PostCards
            :posts="posts"
          />

        </div>
      </div>
    </section>
  </main>

  <FooterBar />

</template>

<style scoped>
/* START BLOG */
.blog {
  padding-top: 160px;
}

.blog__content-title .title {
  font-weight: 700;
  font-size: 44px;
  line-height: 60px;
  margin-bottom: 55px;
}
/* END BLOG */
</style>