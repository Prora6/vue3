<template>
  <div class="post-group">
    <h2 @click="toggleGroup" class="group-header">
      {{ user.name }} ({{ isOpen ? '−' : '+' }})
    </h2>
    <div v-if="isOpen" class="group-content">
      <div class="user-details">
        <p><strong>ID:</strong> {{ user.id }}</p>
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Company:</strong> {{ user.company.name }}</p>
        <p><strong>Website:</strong> <a :href="user.website" target="_blank">{{ user.website }}</a></p>
      </div>
      <div class="posts-list">
        <PostItem
            v-for="post in user.posts"
            :key="post.id"
            :post="post"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import PostItem from './PostItem.vue';

export default {
  components: { PostItem },
  props: ['user', 'posts'],
  setup() {
    const isOpen = ref(false);
    const toggleGroup = () => {
      isOpen.value = !isOpen.value;
    };
    return { isOpen, toggleGroup };
  },
};
</script>

<style scoped>
.group-header {
  cursor: pointer;
  background-color: #e0e0e0;
  padding: 10px;
  margin-top: 10px;
}

.group-content {
  border: 1px solid #ccc;
  padding: 10px;
}

.user-details p {
  margin: 5px 0;
}

.user-details {
  border-bottom: 1px solid #ddd;
}
</style>
