
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MovieDetail from '../views/MovieDetail.vue'

const routes = [
    { 
        path: '/', 
        name : 'Home',
        component: Home 
    },
    { 
        path: '/movie/:id', 
        name : 'MovieDetail',
        component:  MovieDetail
    },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
