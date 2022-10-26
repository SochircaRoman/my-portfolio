<template>
  
  <div class="blog__content-posts">
    <PostCard
    v-for="post in posts"
    :post="post"
    :key="post.id"
    />
  </div>

</template>

<script>
import PostCard from './UI/PostCard.vue';

export default {
  props: {
      posts: {
          type: Array,
          required: true,
      }
  },
  components: { PostCard }
}
</script>

<style scoped>

</style>