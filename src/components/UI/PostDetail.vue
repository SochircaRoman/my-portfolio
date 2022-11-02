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
      },
      immediate: true,
    }
  }
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
          <div class="postDetail__post-text">
            <div class="postDetail__post-heading">Heading Example 1</div>  
            <p class="postDetail__post-description">{{ post.text }}</p>
          </div>

          <div class="postDetail__post-text">
            <div class="postDetail__post-heading">Heading Example 2</div>  
            <p class="postDetail__post-description">{{ post.text }}</p>
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

.postDetail__post-text {
  margin-bottom: 30px;
  max-width: 700px;
}

.postDetail__post-heading {
  font-weight: 500;
  font-size: 24px;
  line-height: 60px;
}

.postDetail__post-description {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
/* END POSTDETAIL */

</style>