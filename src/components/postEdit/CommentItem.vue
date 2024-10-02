<template>
  <div class="comment-item">
    <h4>Имя: {{ comment.name }}</h4>
    <p>Email: {{ comment.email }}</p>
    <p>Комментарий: {{ comment.body }}</p>
  </div>
</template>

<script>
export default {
  props: ['comment'],
};
</script>

<style scoped>
.comment-item {
  padding: 10px;
  background-color: thistle;
  border-radius: 30px;
}
</style>
