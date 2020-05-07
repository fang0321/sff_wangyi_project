import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
Vue.config.productionTip = false
import router from './router'
import store from './store'
import http from './http'
Vue.prototype.$http = http
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
