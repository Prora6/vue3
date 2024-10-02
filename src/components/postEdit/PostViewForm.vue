<template>
  <div>
    <h2 v-if="!isEditing">Просмотр сообщения</h2>
    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-if="!isEditing">
        <div>
          <p><strong>ID:</strong> {{ post.id }}</p>
          <p><strong>Title:</strong> {{ post.title }}</p>
          <p><strong>Body:</strong> {{ post.body }}</p>
          <button class="button" @click="startEditing">Редактировать</button>
        </div>
        <h3>Комментарии</h3>
        <CommentList :comments="comments" />
      </div>
      <div v-else>
        <h2>Редактирование сообщения</h2>
        <form class="form" @submit.prevent="savePost">
          <div>
            <label>ID:</label>
            <span>{{ post.id }}</span>
          </div>
          <div class="title">
            <label>Title:</label>
            <input v-model="editedPost.title" class="input-title"/>
          </div>
          <div class="body">
            <label>Body:</label>
            <textarea v-model="editedPost.body" class="textarea"></textarea>
          </div>
          <div class="buttons-wrap">
            <button class="button" type="submit" >Сохранить</button>
            <button class="button button-warning" type="button" @click="cancelEditing">Отмена</button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { usePosts } from '../../composables/usePosts.js';
import { updatePost } from '../../services/api.js';
import CommentList from './CommentList.vue';

export default {
  components: { CommentList },
  props: ['postId'],
  setup(props) {
    const { getPostById, getCommentsByPostId } = usePosts();
    const post = ref(null);
    const editedPost = ref({});
    const comments = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const isEditing = ref(false);

    onMounted(async () => {
      try {

        post.value = await getPostById(props.postId);
        editedPost.value = { ...post.value };
        comments.value = await getCommentsByPostId(props.postId);

      } catch (err) {

        error.value = 'Ошибка при загрузке данных';

      } finally {

        loading.value = false;
      }
    });

    const startEditing = () => {
      isEditing.value = true;
    };

    const cancelEditing = () => {
      if (confirm('Вы уверены, что хотите отменить изменения?')) {
        editedPost.value = { ...post.value };
        isEditing.value = false;
      }
    };

    const savePost = async () => {
      try {
        editedPost.value.userId = post.value.userId;

        await updatePost(editedPost.value);
        post.value = { ...editedPost.value };
        isEditing.value = false;
        alert('Изменения сохранены');
      } catch (err) {
        console.error('Ошибка при сохранении изменений:', err);
        alert('Ошибка при сохранении изменений');
      }
    };


    return {
      post,
      editedPost,
      comments,
      loading,
      error,
      isEditing,
      startEditing,
      cancelEditing,
      savePost,
    };
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.button {
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

.button:hover {
  background-color: #0056b3;
}

.button-warning {
  background-color: red;
}

.button-warning:hover {
  background-color: #8B0000;
}

.buttons-wrap {
  display: flex;
  gap: 8px;
}
</style>
