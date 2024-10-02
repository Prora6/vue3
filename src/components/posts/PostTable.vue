<template>
  <div>
    <div v-if="groupedPosts.length">
      <PostGroup
          v-for="user in groupedPosts"
          :key="user.id"
          :user="user"
          :posts="user.posts"
      />
    </div>
    <div v-else>
      Загрузка данных...
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { usePosts } from '../../composables/usePosts.js';
import PostGroup from './PostGroup.vue';

export default {
  components: { PostGroup },
  setup() {
    const { posts, users, loadPosts, loadUsers } = usePosts();

    onMounted(() => {
      loadPosts();
      loadUsers();
    });

    const groupedPosts = computed(() => {
      if (users.value.length === 0 || posts.value.length === 0) {
        return [];
      }

      return users.value.map((user) => ({
        ...user,
        posts: posts.value.filter((post) => post.userId === user.id),
      }));
    });

    return { groupedPosts };
  },
};
</script>

<style scoped>

</style>
