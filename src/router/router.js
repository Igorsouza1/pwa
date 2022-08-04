import {createRouter, createWebHashHistory }from 'vue-router'


import FormCavalo from '../views/FormCavalo.vue'
import LoginAuth from '../views/LoginAuth.vue'

const routes = [
    {path: '/', component: FormCavalo},
    {path: '/login', component: LoginAuth}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

export default router;
