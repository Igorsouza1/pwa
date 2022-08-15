import {createRouter, createWebHashHistory }from 'vue-router'


import FormCavalo from '../views/FormCavalo.vue'
import LoginAuth from '../views/LoginAuth.vue'
import Resultado from '../views/Resultado.vue'

const routes = [
    {path: '/', component: FormCavalo},
    {path: '/login', component: LoginAuth},
    {path: '/resultado', component: Resultado}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

export default router;
