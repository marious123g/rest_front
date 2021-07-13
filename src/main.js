import Vue from 'vue'
import App from './App.vue'

// generate router
import VueRouter from "vue-router"
Vue.use(VueRouter);
import {routes} from "./routes";

// generate eui
import ElementUI from "element-ui"
import  "element-ui/lib/theme-chalk/index.css"//chalk主题
Vue.use(ElementUI)
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
