import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import Fastclick from 'fastclick'
import router from './router'
import VueLazyload from 'vue-lazyload'

import 'common/stylus/index.styl'
Fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('./common/image/ZY.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
