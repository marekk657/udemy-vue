import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Ss from './ServerStatus.vue'

Vue.component('app-servers', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})


new Vue({
  el: '#app2',
  render: h => h(Ss)
})
