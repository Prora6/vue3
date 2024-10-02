import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = () => axios.get(`${API_URL}/posts`).then(res => res.data);
export const fetchUsers = () => axios.get(`${API_URL}/users`).then(res => res.data);
export const fetchComments = () => axios.get(`${API_URL}/comments`).then(res => res.data);

export const fetchPostById = (id) => axios.get(`${API_URL}/posts/${id}`).then(res => res.data);
export const fetchCommentsByPostId = (postId) => axios.get(`${API_URL}/posts/${postId}/comments`).then(res => res.data);

export const updatePost = (post) => {
    return axios.put(`${API_URL}/posts/${post.id}`, post, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((res) => res.data);
};