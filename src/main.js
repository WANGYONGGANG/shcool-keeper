// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';

import 'vant/lib/index.css';
import '../static/css/base.less';
import '../static/css/private-vant.less';
import 'vue-easytable/libs/themes-base/index.css';

import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import Vant from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';

import store from './store';
import echarts from 'echarts';

// 导入 table 和 分页组件
import {VTable} from 'vue-easytable';

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

// vuex
Vue.component('icon', Icon)

// 注册到全局
Vue.component(VTable.name, VTable)
Vue.use(Vant)
Vue.use(Checkbox).use(CheckboxGroup);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
