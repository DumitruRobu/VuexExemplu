import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/add',
            name: 'Add',
            component: () => import('../js/components/AddComponent.vue')
        },
        {
            path: '/viewAll',
            name: 'ViewAll',
            component: () => import('../js/components/ViewAllComponent.vue')
        },
        {
            path: '/edit/:id',
            name: 'Edit',
            component: () => import('../js/components/EditComponent.vue')
        },
        {
            path: '/person/:id',
            name: 'PersonsPage',
            component: () => import('../js/components/PersonComponent.vue')
        },

    ]
})
export default router
