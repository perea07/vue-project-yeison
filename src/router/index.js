import { createRouter, createWebHistory } from 'vue-router';
import Users from '../views/Users.vue';
import RegisterUser from '../views/RegisterUser.vue';
import Products from '../views/Products.vue';
import RegisterProduct from '../views/RegisterProduct.vue';
import Home from '../views/Home.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/users', component: Users },
  { path: '/register-user', component: RegisterUser },
  { path: '/products', component: Products },
  { path: '/register-product', component: RegisterProduct },
];

export default createRouter({
  history: createWebHistory(),
  routes
});