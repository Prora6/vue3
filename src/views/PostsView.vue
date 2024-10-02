<template>
  <div>
    <h1>Таблица сообщений</h1>
    <PostTable />
  </div>
</template>

<script>
import PostTable from '../components/posts/PostTable.vue';

export default {
  components: { PostTable },
};
</script>
