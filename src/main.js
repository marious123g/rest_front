import Vue from 'vue'
import App from './App.vue'

// generate router
import VueRouter from "vue-router"
Vue.use(VueRouter);
import {routes} from "./routes";

Vue.config.productionTip = false

var router =new VueRouter({
  mode:'history',
  base:__dirname,
  routes
});

new Vue({
  router,// remember this挂载
  render: h => h(App),
}).$mount('#app')
