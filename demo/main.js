import Vue from 'vue'
import Ripple from '../src/index.ts'
import App from './App.vue'

Vue.directive('ripple', Ripple)

new Vue({
  el: '#app',
  render: h => h(App),
})
