import {createRouter, createWebHashHistory }from 'vue-router'


import FormCavalo from '../views/FormCavalo.vue'

const routes = [
    {path: '/', component: FormCavalo}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

export default router;
