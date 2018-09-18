import Vue from "vue";
import Router from "vue-router";

import Login from './components/Login'
import Register from './components/Register'
import AllGallery from './components/AllGallery'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {path: '/', component: AllGallery, name: 'home' },
    {path: '/login', component: Login, name: 'login' },
    {path: '/register', component: Register, name: 'register' },
  ]
});
