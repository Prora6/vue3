<template>
  <div class="comment-list">
    <CommentItem
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
    />
  </div>
</template>

<script>
import CommentItem from './CommentItem.vue';

export default {
  components: { CommentItem },
  props: ['comments'],
};
</script>

<style scoped>
.comment-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>