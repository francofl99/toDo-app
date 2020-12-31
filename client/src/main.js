import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import Vuex from 'vuex'
import store from '@/store'
import 'animate.css';

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
