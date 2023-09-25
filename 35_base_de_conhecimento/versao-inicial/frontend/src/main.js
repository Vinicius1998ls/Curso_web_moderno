import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwibmFtZSI6IlRlc3RlIiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZS5jb20iLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY5NTU5NjIyMiwiZXhwIjoxNjk1ODU1NDIyfQ.Co9ttDeSJYdBiEMDd8e47swSOIyqacapu9CetmJJLNU'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')