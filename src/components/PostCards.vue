<script>
import PostCard from './UI/PostCard.vue';

export default {
  components: {
    PostCard,
  },
  props: {
      posts: {
          type: Array,
          required: true,
      }
  },
  data() {
    return {
      
    }
  }
}
</script>

<template>
  
  <div class="blog__content-posts">
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>

</template>

<style scoped>

</style>