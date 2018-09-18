import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { authService } from './services/Auth'

Vue.config.productionTip = false;

/*router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && to.name !== 'register' && !authService.isAuthenticated()){
    next({path: 'login' })
  } else {
      next()
    }
 })*/


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
