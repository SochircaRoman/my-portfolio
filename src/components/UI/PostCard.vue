<script>

export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}

</script>

<template>

  <div class="post">
    <h3 class="post__title">{{ post.title }}</h3>
    <div class="post__info">
      <div class="post__info-date noselect">{{ post.date }}</div>
      <div class="post__info-line"></div>
      <div class="post__info-tags noselect">{{ post.tag }}</div>
    </div>
    <div class="post__description">{{ post.text }}</div>
  </div>
  <div class="blog__post-line"></div>

</template>

<style scoped>
/* START POST */
.post {
  margin-bottom: 20px;
  transition: 0.2s all;
  cursor: pointer;
}

.post__title {
  font-weight: 500;
  font-size: 30px;
  line-height: 44px;
  margin-bottom: 10px;
}

.post__info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 340px;
  margin-bottom: 10px;
}

.post__info-date {
  font-size: 20px;
  line-height: 29px;
}

.post__info-line {
  border-left: 1px solid #000000;
  height: 21px;
}

.post__info-tags {
  font-size: 20px;
  line-height: 29px;
  color: #8695A4;
}

.post__description {
  font-size: 16px;
  line-height: 24px;
  max-width: 682px;
}

.post:hover {
  transform: scale(1.05);
}

.blog__post-line {
  border-top: 1px solid #E0E0E0;
  max-width: 681px;
  margin-bottom: 32px;
}

/* END POST */
</style>