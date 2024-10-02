import { ref } from 'vue';
import {
    fetchPosts,
    fetchUsers,
    fetchComments,
    fetchPostById,
    fetchCommentsByPostId,
} from '../services/api';

export function usePosts() {
    const posts = ref([]);
    const users = ref([]);
    const comments = ref([]);

    const loadPosts = async () => {
        posts.value = await fetchPosts();
    };

    const loadUsers = async () => {
        users.value = await fetchUsers();
    };

    const loadComments = async () => {
        comments.value = await fetchComments();
    };

    const getPostById = async (id) => {
        return await fetchPostById(id);
    };

    const getCommentsByPostId = async (postId) => {
        return await fetchCommentsByPostId(postId);
    };

    return {
        posts,
        users,
        comments,
        loadPosts,
        loadUsers,
        loadComments,
        getPostById,
        getCommentsByPostId,
    };
}
