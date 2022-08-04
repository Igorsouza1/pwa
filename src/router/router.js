import {createRouter, createWebHashHistory }from 'vue-router'


import FormCavalo from '../views/FormCavalo.vue'
import LoginAuth from '../views/LoginAuth.vue'

const routes = [
    {path: '/', component: LoginAuth},
    {path: '/form', component: FormCavalo}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

export default router;
