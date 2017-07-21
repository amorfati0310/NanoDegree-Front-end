import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.prototype.$http = axios

//  filter를 사용

// Vue.filter('display', function (value) {
//   return value.foreach(function(item){
//
//   })
// })
