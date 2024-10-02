<template>
  <div class="post-item">
    <h3>{{ post.title }}</h3>
    <p><strong>ID:</strong> {{ post.id }}</p>
    <p><strong>Words:</strong> {{ wordCount }}</p>
    <p><strong>Chars:</strong> {{ charCount }}</p>
    <router-link class="button-link" :to="`/post/${post.id}`">Просмотреть сообщение</router-link>
  </div>
</template>

<script>
export default {
  props: ['post'],
  computed: {
    wordCount() {
      return this.post.body.trim().split(/\s+/).length;
    },
    charCount() {
      return this.post.body.length;
    },
  },
};
</script>

<style scoped>
.post-item {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.post-item h3 {
  margin: 0 0 5px;
}

.button-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}

.button-link:hover {
  background-color: #0056b3;
}
</style>
