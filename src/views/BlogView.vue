<script>
import PostCards from '../components/PostCards.vue'
import BlogContent from '../data/BlogContent.json';

export default {
  components: {
    PostCards,
  },
  props: {},
  data() {
    return {
      posts: BlogContent,
    }
  }
}

</script>

<template>

  

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

/* MEDIA START */
@media screen and (max-width: 800px) {
  .blog {
    padding-top: 120px;
  }

  .blog__content {
    text-align: -webkit-center;
  }
}
</style>