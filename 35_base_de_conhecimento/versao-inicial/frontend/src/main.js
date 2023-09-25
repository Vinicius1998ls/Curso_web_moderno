import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlZpbmljaXVzIFMiLCJlbWFpbCI6IlZpbmljaXVzQHRlc3RlLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2OTU2NDUyNjMsImV4cCI6MTY5NTkwNDQ2M30.LoQMZ5v7BevCGTmCDp6auDrcQ8pKbRh-iCwsQzFGf-A'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')