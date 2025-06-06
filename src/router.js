import { createRouter, createWebHistory } from 'vue-router'
import Users from './views/Users.vue'
import Products from './views/Products.vue'
import RegisterUser from './views/RegisterUser.vue'
import RegisterProduct from './views/RegisterProduct.vue'
import Home from './views/Home.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/users', component: Users },
  { path: '/products', component: Products },
  { path: '/register-user', component: RegisterUser },
  { path: '/register-product', component: RegisterProduct }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
