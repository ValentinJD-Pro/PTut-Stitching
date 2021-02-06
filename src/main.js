import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'


Vue.config.productionTip = false

Vue.prototype.$cvready = {};
Vue.prototype.$cvready.cbs = [];
Vue.prototype.$cvready.addCb = function(fn) {
  Vue.prototype.$cvready.cbs.push(fn);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
