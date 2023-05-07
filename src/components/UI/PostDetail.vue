<script>
import BlogContent from '../../data/BlogContent.json';

export default {
  props: ["id"],  
  data() {
    return {
      post: {}
    }
  },
  watch: {
    id: {
      handler() {
        this.post = BlogContent[this.id]
        this.handleLoad()
      },
      immediate: true,
    }
  },
  methods: {
    handleLoad() {
      window.scrollTo({
        top: 0,
        left: 0, 
        behavior: 'smooth'
      });
    }
  },
}
</script>

<template>

  <div class="postDetail__content">

    <div class="wrapper">

      <div class="postDetail__content-title">
        <h2 class="title">{{ post.title }}</h2>
      </div>

      <div class="postDetail__content-posts">

        <div class="postDetail__post">
          <div class="postDetail__post-information">
            <span class="postDetail__information-date noselect">{{ post.date }}</span>
            <span class="postDetail__information-tag noselect">{{ post.tag }}</span>
          </div>

          <div class="postDetail__image-wrapper">
            <img :src='"../../../blog_images/" + post.img' alt="" class="postDetail__image-img">
          </div>

          <div class="postDetail__image-description">{{ post.imgDesc }}</div>

          <div class="postDetail__post-text">  
            <p class="postDetail__post-description">{{ post.description }}</p>
          </div>

          <div class="postDetail__post-text" v-for="item in post.text" :key="item">
            <div class="postDetail__post-heading">{{ (Object.keys(item)).join() }}</div>  
            <p class="postDetail__post-description">{{ (Object.values(item)).join() }}</p>
          </div>

        </div>

      </div>
    </div>
  </div>
  
</template>

<style scoped>
/* START POSTDETAIL */
.postDetail__content {
  padding-top: 160px;
}

.postDetail__content-title .title {
  font-weight: 700;
  font-size: 34px;
  line-height: 50px;
  margin-bottom: 15px;
  max-width: 506px;
}

.postDetail__post-information {
  margin-bottom: 15px;
}

.postDetail__information-date {
  padding: 1px 10px;
  background: #FF7C7C;
  border-radius: 16px;
  color: #FFFFFF;
  font-weight: 900;
  font-size: 18px;
  line-height: 60px;
  margin-right: 18px;
}

.postDetail__information-tag {
  font-size: 20px;
  line-height: 29px;
}

.postDetail__image-wrapper {
  margin-bottom: 20px;
}

.postDetail__image-description {
  font-style: italic;
  margin-bottom: 50px;
  text-align: center;

}

.postDetail__image-img {
  max-width: 700px;
  height: auto;
}

.postDetail__post-text {
  margin-bottom: 30px;
  max-width: 700px;
}

.postDetail__post-heading {
  font-weight: 500;
  font-size: 24px;
  line-height: 60px;
  margin-bottom: -5px;
}

.postDetail__post-description {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
/* END POSTDETAIL */

</style>