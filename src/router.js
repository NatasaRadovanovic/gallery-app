import Vue from "vue";
import Router from "vue-router";

import Login from './containers/Login'
import Register from './containers/Register'
import AllGalleries from './containers/AllGalleries'
import AuthorsGalleries from './containers/AuthorsGalleries'
import Gallery from './containers/Gallery'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {path: '/', redirect: 'galleries',  name:'home'},
    {path: '/galleries', component: AllGalleries, name: 'galleries'},
    {path: '/authors/:id', component: AuthorsGalleries, name: 'author-galleries'},
    {path: '/galleries/:id', component: Gallery, name: 'single-gallery'},
    {path: '/login', component: Login, name: 'login' },
    {path: '/register', component: Register, name: 'register' },
  ]
});
