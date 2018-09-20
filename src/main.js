// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'vant/lib/vant-css/index.css'
import '../static/css/base.less'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import Vant from 'vant'
Vue.config.productionTip = false

Vue.component('icon', Icon)
Vue.use(Vant)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
