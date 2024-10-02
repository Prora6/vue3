import { createRouter, createWebHistory } from 'vue-router';
import PostsView from '../views/PostsView.vue';
import PostView from '../views/PostView.vue';

const routes = [
    { path: '/', component: PostsView },
    { path: '/post/:id', component: PostView, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
