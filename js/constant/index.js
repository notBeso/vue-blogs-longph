
import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import ListPage from '../app/pages/index.vue';
import SearchPage from '../pages/search.vue';
import NewPage from '../pages/new.vue';

const routes = [
    {
    path: '/',
    component: DefaultLayout, // Use the layout as the root component
    children: [
        {
        path: '', // Default child route for the layout
        name: 'List',
        component: ListPage,
        },
        {
        path: 'Search',
        name: 'Search',
        component: SearchPage,
        },
        {
        path: 'New',
        name: 'New',
        component: NewPage,
        },
    ],
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;