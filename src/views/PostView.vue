<template>
  <PostViewForm :postId="postId" />
</template>

<script>
import { useRoute } from 'vue-router';
import PostViewForm from '../components/postEdit/PostViewForm.vue';

export default {
  components: { PostViewForm },
  setup() {
    const route = useRoute();
    const postId = route.params.id;
    return { postId };
  },
};
</script>
