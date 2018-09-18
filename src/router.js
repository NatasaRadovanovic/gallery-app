import Vue from "vue";
import Router from "vue-router";

import Login from './components/Login'
import Register from './components/Register'
import AllGalleries from './components/AllGalleries'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {path: '/', redirect: 'galleries',  name:'home'},
    {path: '/galleries', component: AllGalleries, name: 'galleries'},
    {path: '/login', component: Login, name: 'login' },
    {path: '/register', component: Register, name: 'register' },
  ]
});
