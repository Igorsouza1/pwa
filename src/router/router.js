import {createRouter, createWebHashHistory }from 'vue-router'

import LoginForm from '../views/LoginForm.vue'
import FormCavalo from '../views/FormCavalo.vue'

const routes = [
    {path: '/', component: LoginForm},
    {path: '/formulario', component: FormCavalo}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

export default router;
